# Repository Structure

This document shows the repository layout in tree format and a short explanation for each top-level folder and important files.

```
/ (repo root)
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── SECURITY.md
├── tsconfig.json
├── .github/                         # GitHub config: agents, prompts, chat instructions
│   ├── agents/                      # Agent definitions for Copilot/VS Code agents
│   ├── prompts/                     # Prompt templates used by agents and maintainers
│   └── instructions/                # Scope-specific chat instructions for areas (agents/, scripts/, global)
│
├── agents/                          # Main GPT packages and templates
│   ├── analytics-bot/               # Example GPT package (instructions, knowledge, actions)
│   ├── backend_core_architect/      # Custom GPT: backend architecture-focused package
│   │   ├── gpt.json                 # GPT metadata and structure pointer
│   │   ├── instructions/            # System instruction for this GPT
│   │   └── knowledge/               # Knowledge files (00.* series)
│   ├── fullstack_code_architect/    # Another GPT package (instructions, knowledge, actions)
│   ├── my-assistant/                # Example GPT package
│   └── templates/                   # Repository-wide templates for scaffolding new GPTs
│       ├── actions/                 # OpenAPI / actions templates (JSON)
│       ├── instructions/            # Instruction templates for Custom GPTs
│       ├── knowledge/               # Domain-structured knowledge templates (multi-language / stacks)
│       ├── evals/                   # Standard evaluation templates (matrix, scenarios, logs)
│       ├── logs/                    # Log templates (optional)
│       └── prompts/                 # Prompts for building/regenerating GPT instructions
│
├── reports/                         # Analysis & reports
│   ├── repo-gap-analysis-20251117.md
│   └── REPO_STRUCTURE.md            # (this file) repository tree + explanations
│
├── scripts/                         # Tooling scripts: scaffold, validate, generate index, utils
│   ├── scaffold-gpt.mts
│   ├── validate-gpt.mts
│   ├── generate-index.mts
│   └── utils/
│       ├── indexing.mts
│       ├── scaffolding.mts
│       └── validation.mts
│
├── web/                             # Placeholder for any web UI (e.g., future Next.js app)
│   └── README.md

└── other configs
    ├── .eslintrc.json
    ├── .prettierrc
    └── .markdownlint.jsonc
```

Folder explanations

- `.github/`: Contains agent definitions, prompt files, and chat-instruction files that scope Copilot/agent behavior to repository areas (e.g., `agents/**`, `scripts/**`). Use these when building or validating GPT packages and automations.

- `agents/`: The core area where each Custom GPT is stored. Each GPT folder follows the NGAS conventions and typically contains:
  - `gpt.json`: metadata and pointers to `instructions`, `actions`, and `knowledge` locations.
  - `instructions/`: system-role instruction files (the system prompt for the GPT).
  - `knowledge/`: domain knowledge files (numbered `NN.NN_snake_case.md` per NGAS conventions).
  - `actions/`: OpenAPI 3.1 JSON schemas for any custom actions the GPT can use.

  The `agents/templates/` subtree holds canonical templates used by the scaffold tools and by human maintainers to create new GPT packages in a consistent way (instruction templates, knowledge templates, action templates, eval templates, etc.).

- `scripts/`: TypeScript scripts used to scaffold GPTs, validate package structure, and generate knowledge indexes. These scripts are runnable with `npm run <script>` (see `package.json`), and utility modules are in `scripts/utils/`.

- `reports/`: Analytical documents and reports about the repo and its gaps. The `REPO_STRUCTURE.md` file documents layout and conventions; other reports (e.g., `repo-gap-analysis-20251117.md`) contain findings and recommendations.

- `web/`: A placeholder for any future web application (UI for GPT builder or dashboards). Not required for the scaffolding or validation scripts.

- Config files at the root (`package.json`, `tsconfig.json`, linter and formatter configs): define build, lint, and formatting rules used by CI and by local developer workflows.

Conventions and notes

- Knowledge files must follow the NGAS naming and frontmatter conventions: `NN.NN_snake_case.md` and YAML frontmatter including `document_id`, `title`, `version`, `status`, `owner`, `category`, `last_reviewed`, `next_review`, and `tags`.

- No GPT package should have more than 20 knowledge files; templates and scaffold scripts enforce this limit.

- `gpt.json` files act as the single source of truth for a package's structure; the scaffold script updates this file when creating a new GPT.

- Use `npm run scaffold <gpt-name>` to create a new GPT package from templates; then edit `instructions/main.md`, add knowledge, optionally add `actions/schema.json`, and run `npm run validate`.

Next steps (suggested)

- Review this `REPO_STRUCTURE.md` and tell me if you want more detail per specific GPT package (e.g., full content listing for `backend_core_architect/`).
- If you want, I can also commit and push this file to a branch and open a PR — tell me if you want me to do that.


---
Generated: 2025-11-19
