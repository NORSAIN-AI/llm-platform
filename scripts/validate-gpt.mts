#!/usr/bin/env node
import { readdir } from 'fs/promises';
import { join } from 'path';
import { validateGPTStructure } from './utils/validation.mts';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: npm run validate [gpt-name]

Validates GPT directory structure and configuration.

If no GPT name is provided, validates all GPTs in the agents/ directory.

Example:
  npm run validate my-assistant
  npm run validate
    `);
    process.exit(0);
  }

  const projectRoot = join(__dirname, '..');
  const agentsDir = join(projectRoot, 'agents');

  try {
    let gptsToValidate: string[] = [];

    if (args.length > 0) {
      // Validate specific GPT
      gptsToValidate = [args[0]];
    } else {
      // Validate all GPTs
      const entries = await readdir(agentsDir, { withFileTypes: true });
      gptsToValidate = entries
        .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_') && !entry.name.startsWith('test_') && entry.name !== 'templates')
        .map((entry) => entry.name);
    }

    if (gptsToValidate.length === 0) {
      console.log('No GPTs found to validate.');
      process.exit(0);
    }

    let hasErrors = false;
    for (const gptName of gptsToValidate) {
      const gptPath = join(agentsDir, gptName);
      console.log(`\nValidating ${gptName}...`);

      const result = await validateGPTStructure(gptPath);

      if (result.valid) {
        console.log(`✓ ${gptName} is valid`);
      } else {
        console.log(`✗ ${gptName} has errors:`);
        hasErrors = true;
      }

      if (result.errors.length > 0) {
        console.log('\nErrors:');
        result.errors.forEach((error) => console.log(`  - ${error}`));
      }

      if (result.warnings.length > 0) {
        console.log('\nWarnings:');
        result.warnings.forEach((warning) => console.log(`  - ${warning}`));
      }
    }

    if (hasErrors) {
      process.exit(1);
    } else {
      console.log('\n✓ All validations passed');
    }
  } catch (error) {
    console.error(`✗ Validation failed: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

main();
