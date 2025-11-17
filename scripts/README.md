# TypeScript CLI Scripts

This directory contains TypeScript-based CLI tools for managing Custom GPTs.

## Scripts

### `scaffold-gpt.mts`

Creates a new Custom GPT from the template.

**Usage:**
```bash
npm run scaffold <gpt-name> [options]

Options:
  --description <text>    Description of the GPT
  --author <name>         Author name (default: NORSAIN-AI)
  --tags <tag1,tag2>      Comma-separated tags

Example:
  npm run scaffold my-assistant --description "A helpful assistant" --tags "helper,assistant"
```

**What it does:**
1. Copies the `_template` directory to create a new GPT
2. Updates `gpt.json` with provided metadata
3. Replaces placeholders in instructions and actions
4. Sets creation timestamp

### `validate-gpt.mts`

Validates GPT directory structure and configuration.

**Usage:**
```bash
npm run validate [gpt-name]

# Validate specific GPT
npm run validate my-assistant

# Validate all GPTs
npm run validate
```

**Checks:**
- Required directories exist (instructions, actions, knowledge)
- `gpt.json` configuration file exists
- Knowledge directory has ≤ 20 files
- Expected files are present (with warnings)

### `generate-index.mts`

Generates an index.md file listing all knowledge files.

**Usage:**
```bash
npm run generate-index [gpt-name]

# Generate index for specific GPT
npm run generate-index my-assistant

# Generate indexes for all GPTs
npm run generate-index
```

**Output:**
Creates `knowledge/index.md` with:
- File count (X / 20)
- Grouped file listings
- Links to all knowledge files

## Utility Modules

### `utils/scaffolding.mts`

Core scaffolding functionality:
- `scaffoldGPT()` - Creates new GPT from template
- `getProjectRoot()` - Gets project root directory

### `utils/validation.mts`

Validation utilities:
- `validateGPTStructure()` - Validates GPT directory structure
- `countFiles()` - Counts files in a directory recursively

### `utils/indexing.mts`

Index generation utilities:
- `generateKnowledgeIndex()` - Scans knowledge directory
- `createKnowledgeIndexFile()` - Creates index.md file

## Development

### Running Scripts

Scripts use [tsx](https://github.com/esbuild-kit/tsx) for TypeScript execution:

```bash
# Direct execution (for development)
tsx scripts/scaffold-gpt.mts my-assistant

# Via npm scripts (recommended)
npm run scaffold my-assistant
```

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

### Code Formatting

```bash
npm run format
```

## Architecture

All scripts use ES modules (`.mts` extension) with:
- **TypeScript**: For type safety and better developer experience
- **Node.js built-ins**: `fs/promises`, `path`, etc.
- **No external dependencies**: Keeps runtime dependencies minimal

## Adding New Scripts

1. Create new `.mts` file in `scripts/`
2. Add corresponding npm script in `package.json`
3. Import utilities from `utils/` as needed
4. Follow existing patterns for CLI arguments and output
5. Add documentation to this README
