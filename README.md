# NORSAIN GPT Platform

A comprehensive platform for managing Custom GPT knowledge packs, agents, and tools with TypeScript-based scaffolding, validation, and index generation utilities.

## Overview

This platform provides a structured approach to creating and managing Custom GPTs with:
- **Knowledge packs** (maximum 20 files per Custom GPT)
- **TypeScript tools** for scaffolding, validation, and index generation
- **Agent templates** for consistent GPT creation
- **GitHub Actions** for automated validation
- **Future web app** (Vercel + ChatKit) for agent builder, playground, and evaluation

## Project Structure

```
norsain-gpt-platform/
├── agents/               # Custom GPT templates and configurations
│   ├── _template/       # Base template for new GPTs
│   │   ├── instructions/  # GPT instructions and prompts
│   │   ├── actions/       # OpenAPI schemas for custom actions
│   │   ├── knowledge/     # Knowledge files (max 20)
│   │   └── gpt.json      # GPT configuration metadata
│   └── [gpt-name]/      # Individual GPT instances
├── scripts/             # TypeScript CLI tools
│   ├── scaffold-gpt.mts    # Create new GPT from template
│   ├── validate-gpt.mts    # Validate GPT structures
│   ├── generate-index.mts  # Generate knowledge indexes
│   └── utils/           # Shared utility modules
├── .github/             # GitHub Actions workflows
│   └── workflows/       # CI/CD pipelines
└── web/                 # Future Next.js/Vercel web app
    └── README.md        # Web app documentation
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/NORSAIN-AI/norsain-gpt-platform.git
cd norsain-gpt-platform

# Install dependencies
npm install
```

## Usage

### Creating a New GPT

Use the scaffold script to create a new Custom GPT from the template:

```bash
npm run scaffold my-assistant
```

With options:

```bash
npm run scaffold my-assistant \
  --description "A helpful AI assistant" \
  --author "Your Name" \
  --tags "helper,assistant,productivity"
```

This creates a new directory under `agents/my-assistant/` with:
- `instructions/main.md` - GPT instructions
- `actions/schema.json` - OpenAPI schema for custom actions
- `knowledge/` - Directory for knowledge files
- `gpt.json` - Configuration metadata

### Adding Knowledge Files

Add your knowledge files to the `knowledge/` directory:

```bash
cp your-file.md agents/my-assistant/knowledge/
```

**Important**: Maximum 20 files per GPT (Custom GPT limit).

### Validating GPT Structure

Validate a specific GPT:

```bash
npm run validate my-assistant
```

Validate all GPTs:

```bash
npm run validate
```

### Generating Knowledge Index

Generate an `index.md` file listing all knowledge files:

```bash
npm run generate-index my-assistant
```

Generate indexes for all GPTs:

```bash
npm run generate-index
```

## Scripts

- `npm run scaffold <name>` - Create new GPT from template
- `npm run validate [name]` - Validate GPT structure(s)
- `npm run generate-index [name]` - Generate knowledge index(es)
- `npm run lint` - Lint TypeScript code
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Type check TypeScript code

## GPT Template Structure

Each GPT follows this structure:

### `gpt.json`
Configuration metadata:
```json
{
  "name": "GPT Name",
  "version": "1.0.0",
  "description": "Brief description",
  "created": "ISO Date",
  "author": "Author Name",
  "tags": ["tag1", "tag2"],
  "maxKnowledgeFiles": 20,
  "structure": {
    "instructions": "instructions/main.md",
    "actions": "actions/schema.json",
    "knowledge": "knowledge/"
  }
}
```

### `instructions/main.md`
GPT instructions defining:
- Role and purpose
- Core instructions
- Capabilities
- Constraints
- Response format

### `actions/schema.json`
OpenAPI 3.1 schema for custom actions (optional).

### `knowledge/`
Knowledge files directory:
- Maximum 20 files
- Supported formats: .md, .txt, .pdf, code files
- Can include subdirectories
- Auto-generated `index.md` for navigation

## Continuous Integration

GitHub Actions automatically validate GPTs on push/PR:
- Structure validation
- Knowledge file count checks
- TypeScript type checking

## Future Development

### Web Application (Planned)

The `web/` directory will contain a Next.js/Vercel application featuring:

- **Agent Builder**: Visual interface for creating and configuring GPTs
- **Playground**: Interactive testing environment with ChatKit integration
- **Evaluation**: Performance metrics, analytics, and A/B testing

Technology stack:
- Next.js 14+ (App Router)
- Vercel deployment
- ChatKit for conversations
- OpenAI Responses/Agents API

## Contributing

1. Create a new branch for your changes
2. Follow the existing code structure and conventions
3. Ensure all validations pass: `npm run validate`
4. Run linting: `npm run lint`
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

For issues or questions, please open an issue on GitHub.