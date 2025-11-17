# Custom GPT Agents

This directory contains Custom GPT configurations and templates.

## Directory Structure

- `_template/` - Base template for creating new Custom GPTs
- `[gpt-name]/` - Individual Custom GPT instances

## Creating a New GPT

Use the scaffold script from the project root:

```bash
npm run scaffold <gpt-name>
```

Example with options:

```bash
npm run scaffold my-assistant \
  --description "A helpful AI assistant" \
  --author "Your Name" \
  --tags "helper,assistant"
```

## GPT Structure

Each Custom GPT follows this structure:

```
[gpt-name]/
├── gpt.json              # Configuration metadata
├── README.md             # GPT documentation
├── instructions/         # GPT instructions and prompts
│   └── main.md
├── actions/              # Custom actions (optional)
│   └── schema.json       # OpenAPI 3.1 schema
└── knowledge/            # Knowledge files (max 20)
    ├── README.md
    └── [your files]
```

## Knowledge Files

- **Maximum**: 20 files per Custom GPT (OpenAI limit)
- **Formats**: Markdown (.md), Text (.txt), PDF (.pdf), Code files
- **Organization**: Use subdirectories and descriptive names
- **Index**: Run `npm run generate-index <gpt-name>` to create an index.md

## Validation

Validate your GPT structure:

```bash
# Validate specific GPT
npm run validate <gpt-name>

# Validate all GPTs
npm run validate
```

## Best Practices

1. **Keep it focused**: Each GPT should have a clear, specific purpose
2. **Organize knowledge**: Group related files in subdirectories
3. **Document well**: Update instructions/main.md with clear guidance
4. **Stay under limit**: Monitor file count (max 20 files)
5. **Use descriptive names**: Both for GPT directories and knowledge files
6. **Validate regularly**: Run validation after changes
7. **Generate indexes**: Keep knowledge/index.md up to date

## Example GPTs

Check `_template/` for the base structure and example files.
