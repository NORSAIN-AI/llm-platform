#!/usr/bin/env node
import { readdir } from 'fs/promises';
import { join } from 'path';
import { generateKnowledgeIndex, createKnowledgeIndexFile } from './utils/indexing.mts';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: npm run generate-index [gpt-name]

Generates an index.md file in the knowledge/ directory listing all knowledge files.

If no GPT name is provided, generates indexes for all GPTs in the agents/ directory.

Example:
  npm run generate-index my-assistant
  npm run generate-index
    `);
    process.exit(0);
  }

  const projectRoot = join(__dirname, '..');
  const agentsDir = join(projectRoot, 'agents');

  try {
    let gptsToIndex: string[] = [];

    if (args.length > 0) {
      // Generate index for specific GPT
      gptsToIndex = [args[0]];
    } else {
      // Generate indexes for all GPTs
      const entries = await readdir(agentsDir, { withFileTypes: true });
      gptsToIndex = entries
        .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
        .map((entry) => entry.name);
    }

    if (gptsToIndex.length === 0) {
      console.log('No GPTs found to index.');
      process.exit(0);
    }

    for (const gptName of gptsToIndex) {
      const knowledgePath = join(agentsDir, gptName, 'knowledge');
      console.log(`\nGenerating index for ${gptName}...`);

      try {
        const files = await generateKnowledgeIndex(knowledgePath);
        await createKnowledgeIndexFile(knowledgePath, files);
        console.log(`✓ Generated index with ${files.length} files`);

        if (files.length > 20) {
          console.warn(`⚠ Warning: ${gptName} has ${files.length} files (max 20 allowed)`);
        }
      } catch (error) {
        console.error(
          `✗ Failed to generate index for ${gptName}: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    }

    console.log('\n✓ Index generation complete');
  } catch (error) {
    console.error(
      `✗ Index generation failed: ${error instanceof Error ? error.message : String(error)}`
    );
    process.exit(1);
  }
}

main();
