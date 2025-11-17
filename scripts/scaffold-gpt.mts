#!/usr/bin/env node
import { scaffoldGPT } from './utils/scaffolding.mts';

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Usage: npm run scaffold <gpt-name> [options]

Options:
  --description <text>    Description of the GPT
  --author <name>         Author name (default: NORSAIN-AI)
  --tags <tag1,tag2>      Comma-separated tags

Example:
  npm run scaffold my-assistant --description "A helpful assistant" --tags "helper,assistant"
    `);
    process.exit(0);
  }

  const name = args[0];

  // Parse optional arguments
  const options: {
    name: string;
    description?: string;
    author?: string;
    tags?: string[];
  } = { name };

  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--description' && i + 1 < args.length) {
      options.description = args[++i];
    } else if (args[i] === '--author' && i + 1 < args.length) {
      options.author = args[++i];
    } else if (args[i] === '--tags' && i + 1 < args.length) {
      options.tags = args[++i].split(',').map((t) => t.trim());
    }
  }

  try {
    console.log(`Creating new GPT: ${name}...`);
    const gptPath = await scaffoldGPT(options);
    console.log(`✓ Successfully created GPT at: ${gptPath}`);
    console.log('\nNext steps:');
    console.log('1. Edit instructions/main.md to define GPT behavior');
    console.log('2. Add knowledge files to knowledge/ directory (max 20 files)');
    console.log('3. Configure actions in actions/schema.json if needed');
    console.log('4. Run validation: npm run validate');
  } catch (error) {
    console.error(
      `✗ Failed to create GPT: ${error instanceof Error ? error.message : String(error)}`
    );
    process.exit(1);
  }
}

main();
