# Repository Structure

This document shows the repository layout in tree format and a short explanation
for each top-level folder and important files.

```text
(repo root)
├── .eslintrc.json
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── automation_improvement.yml
│   │   ├── bug_report.md
│   │   ├── bug_report.yml
│   │   ├── documentation_request.yml
│   │   ├── feature_request.md
│   │   ├── feature_request.yml
│   │   └── repo_gap_fix.yml
│   ├── agents
│   │   ├── bugfix.agent.md
│   │   ├── dev_todo_planner.agent.md
│   │   ├── instruction_builder.agent.md
│   │   ├── knowledge_builder.agent.md
│   │   ├── my-agent.agent.md
│   │   └── repo_builder.agent.md
│   ├── copilot-instructions.md
│   ├── instructions
│   │   └── global.chat.instructions.md
│   ├── prompts
│   │   ├── .gitkeep
│   │   ├── gpt-packages-refactor.md
│   │   ├── post-round-commit-pr.prompt.md
│   │   ├── repo-builder-session.prompt.md
│   │   └── templates-cleanup.prompt.md
│   ├── pull_request_template.md
│   └── workflows
│       ├── auto-pr.yml
│       ├── ci.yml
│       └── test-vitest.yml
├── .gitignore
├── .gitmessage
├── .husky
│   └── pre-commit
├── .markdownlint.jsonc
├── .markdownlintignore
├── .pre-commit-config.yaml
├── .prettierrc
├── LICENSE
├── README.md
├── SECURITY.md
├── docs
│   ├── _sidebar.md
│   ├── governance
│   │   └── model-governance-dashboard.md
│   ├── index.html
│   ├── index.md
│   ├── model-selection-strategy.md
│   ├── models
│   │   ├── _index.md
│   │   ├── claude-haiku-4.5.md
│   │   ├── claude-sonnet-4.5.md
│   │   ├── gemini-2.5-pro.md
│   │   ├── gpt-4.1.md
│   │   ├── gpt-4o.md
│   │   ├── gpt-5-codex.md
│   │   ├── gpt-5-mini.md
│   │   ├── gpt-5.1-codex.md
│   │   ├── gpt-5.1.md
│   │   ├── gpt-5.md
│   │   ├── grok-code-fast-1.md
│   │   └── raptor-mini.md
│   ├── planning
│   │   ├── CHECKLIST.md
│   │   ├── INDEX.md
│   │   ├── README.md
│   │   └── TODOs-gpt-packages.md
│   ├── q_logo_512x512.svg
│   └── testing
│       └── vitest-standard.md
├── gpt-packages
│   ├── README.md
│   ├── analytics-bot
│   │   ├── README.md
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── gpt.json
│   │   ├── instructions
│   │   │   └── main.md
│   │   └── knowledge
│   │       ├── README.md
│   │       └── index.md
│   ├── backend_core_architect
│   │   ├── README.md
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── gpt.json
│   │   ├── instructions
│   │   │   └── main.md
│   │   └── knowledge
│   │       ├── 00.01_backend_architecture_principles.md
│   │       ├── 00.02_database_design_patterns.md
│   │       ├── 00.03_api_design_best_practices.md
│   │       ├── README.md
│   │       └── index.md
│   ├── fullstack_code_architect
│   │   ├── README.md
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── gpt.json
│   │   ├── instructions
│   │   │   ├── instruction.md
│   │   │   └── main.md
│   │   └── knowledge
│   │       ├── 01.01_role_scope_boundaries.md
│   │       ├── README.md
│   │       └── index.md
│   ├── my-assistant
│   │   ├── README.md
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── gpt.json
│   │   ├── instructions
│   │   │   └── main.md
│   │   └── knowledge
│   │       ├── README.md
│   │       └── index.md
│   ├── templates
│   │   ├── README.md
│   │   ├── _library
│   │   │   ├── evals
│   │   │   │   └── eval_matrix.template.md
│   │   │   ├── knowledge
│   │   │   │   ├── ngas_output_standards_v1.2.template.md
│   │   │   │   └── norsain_language_tone_guide.template.md
│   │   │   └── prompts
│   │   │       └── build_custom_gpt.prompt.md
│   │   ├── actions
│   │   │   └── schema.json
│   │   ├── custom_gpt
│   │   │   ├── actions
│   │   │   │   ├── basic_action.template.json
│   │   │   │   ├── list_items_action.template.json
│   │   │   │   ├── schema.json
│   │   │   │   └── write_items_action.template.json
│   │   │   ├── gpt.json
│   │   │   ├── gpt_metadata
│   │   │   │   ├── conversation_starters.template.md
│   │   │   │   └── metadata_header.template.json
│   │   │   ├── instructions
│   │   │   │   ├── 01_identity.template.md
│   │   │   │   ├── 02_purpose.template.md
│   │   │   │   ├── 03_core_behaviour.template.md
│   │   │   │   ├── 04_constraints.template.md
│   │   │   │   ├── 05_safety.template.md
│   │   │   │   ├── 06_output_rules.template.md
│   │   │   │   ├── 07_interaction_rules.template.md
│   │   │   │   ├── 08_ask_vs_infer.template.md
│   │   │   │   ├── 09_end_rules.template.md
│   │   │   │   └── main.md
│   │   │   ├── knowledge
│   │   │   │   ├── 01.foundation
│   │   │   │   │   ├── eval_and_test_prompts.template.md
│   │   │   │   │   ├── language_tone_output.template.md
│   │   │   │   │   ├── norsain_dev_principles.template.md
│   │   │   │   │   ├── role_scope.template.md
│   │   │   │   │   └── safety_and_ethics.template.md
│   │   │   │   ├── 02.architecture
│   │   │   │   │   ├── api_contracts.template.md
│   │   │   │   │   └── webapp_patterns.template.md
│   │   │   │   ├── 03.typescript
│   │   │   │   │   ├── backend_guidelines.template.md
│   │   │   │   │   ├── frontend_guidelines.template.md
│   │   │   │   │   └── ts_utilities_examples.template.md
│   │   │   │   ├── 04.java
│   │   │   │   │   ├── java_error_testing.template.md
│   │   │   │   │   └── spring_patterns.template.md
│   │   │   │   ├── 05.python
│   │   │   │   │   ├── python_ai_integration.template.md
│   │   │   │   │   └── python_api_patterns.template.md
│   │   │   │   ├── 06.databases_sql
│   │   │   │   │   ├── relational_modelling.template.md
│   │   │   │   │   └── sql_performance_migrations.template.md
│   │   │   │   ├── 07.auth_security
│   │   │   │   │   ├── oauth2_oidc_jwt.template.md
│   │   │   │   │   └── securing_flows.template.md
│   │   │   │   └── 08.ai_mcp
│   │   │   │       ├── ai_mcp_concepts.template.md
│   │   │   │       └── issue_providers_ai_features.template.md
│   │   │   └── template.manifest.json
│   │   ├── evals
│   │   │   ├── eval_log.template.md
│   │   │   ├── eval_matrix.template.md
│   │   │   └── eval_scenarios.template.md
│   │   ├── instructions
│   │   │   ├── 01_identity.template.md
│   │   │   ├── 02_purpose.template.md
│   │   │   ├── 03_core_behaviour.template.md
│   │   │   ├── 04_constraints.template.md
│   │   │   ├── 05_safety.template.md
│   │   │   ├── 06_output_rules.template.md
│   │   │   ├── 07_interaction_rules.template.md
│   │   │   ├── 08_ask_vs_infer.template.md
│   │   │   ├── 09_end_rules.template.md
│   │   │   └── custom_gpt_instructions.md
│   │   ├── knowledge
│   │   │   └── README.md
│   │   └── prompts
│   │       ├── build_custom_gpt.prompt.md
│   │       ├── extend_custom_gpt.prompt.md
│   │       └── regenerate_instruction.prompt.md
│   ├── test_gpt
│   │   ├── actions
│   │   │   ├── basic_action.template.json
│   │   │   ├── list_items_action.template.json
│   │   │   └── write_items_action.template.json
│   │   ├── gpt_metadata
│   │   │   ├── conversation_starters.template.md
│   │   │   └── metadata_header.template.json
│   │   ├── instructions
│   │   │   ├── 01_identity.template.md
│   │   │   ├── 02_purpose.template.md
│   │   │   ├── 03_core_behaviour.template.md
│   │   │   ├── 04_constraints.template.md
│   │   │   ├── 05_safety.template.md
│   │   │   ├── 06_output_rules.template.md
│   │   │   ├── 07_interaction_rules.template.md
│   │   │   ├── 08_ask_vs_infer.template.md
│   │   │   └── 09_end_rules.template.md
│   │   └── knowledge
│   │       ├── 01.foundation
│   │       │   ├── eval_and_test_prompts.template.md
│   │       │   ├── language_tone_output.template.md
│   │       │   ├── norsain_dev_principles.template.md
│   │       │   ├── role_scope.template.md
│   │       │   └── safety_and_ethics.template.md
│   │       ├── 02.architecture
│   │       │   ├── api_contracts.template.md
│   │       │   └── webapp_patterns.template.md
│   │       ├── 03.typescript
│   │       │   ├── backend_guidelines.template.md
│   │       │   ├── frontend_guidelines.template.md
│   │       │   └── ts_utilities_examples.template.md
│   │       ├── 04.java
│   │       │   ├── java_error_testing.template.md
│   │       │   └── spring_patterns.template.md
│   │       ├── 05.python
│   │       │   ├── python_ai_integration.template.md
│   │       │   └── python_api_patterns.template.md
│   │       ├── 06.databases_sql
│   │       │   ├── relational_modelling.template.md
│   │       │   └── sql_performance_migrations.template.md
│   │       ├── 07.auth_security
│   │       │   ├── oauth2_oidc_jwt.template.md
│   │       │   └── securing_flows.template.md
│   │       └── 08.ai_mcp
│   │           ├── ai_mcp_concepts.template.md
│   │           └── issue_providers_ai_features.template.md
│   └── test_template_resolve_1763549613860
│       ├── actions
│       │   ├── basic_action.template.json
│       │   ├── list_items_action.template.json
│       │   └── write_items_action.template.json
│       ├── gpt_metadata
│       │   ├── conversation_starters.template.md
│       │   └── metadata_header.template.json
│       ├── instructions
│       │   ├── 01_identity.template.md
│       │   ├── 02_purpose.template.md
│       │   ├── 03_core_behaviour.template.md
│       │   ├── 04_constraints.template.md
│       │   ├── 05_safety.template.md
│       │   ├── 06_output_rules.template.md
│       │   ├── 07_interaction_rules.template.md
│       │   ├── 08_ask_vs_infer.template.md
│       │   └── 09_end_rules.template.md
│       └── knowledge
│           ├── 01.foundation
│           │   ├── eval_and_test_prompts.template.md
│           │   ├── language_tone_output.template.md
│           │   ├── norsain_dev_principles.template.md
│           │   ├── role_scope.template.md
│           │   └── safety_and_ethics.template.md
│           ├── 02.architecture
│           │   ├── api_contracts.template.md
│           │   └── webapp_patterns.template.md
│           ├── 03.typescript
│           │   ├── backend_guidelines.template.md
│           │   ├── frontend_guidelines.template.md
│           │   └── ts_utilities_examples.template.md
│           ├── 04.java
│           │   ├── java_error_testing.template.md
│           │   └── spring_patterns.template.md
│           ├── 05.python
│           │   ├── python_ai_integration.template.md
│           │   └── python_api_patterns.template.md
│           ├── 06.databases_sql
│           │   ├── relational_modelling.template.md
│           │   └── sql_performance_migrations.template.md
│           ├── 07.auth_security
│           │   ├── oauth2_oidc_jwt.template.md
│           │   └── securing_flows.template.md
│           └── 08.ai_mcp
│               ├── ai_mcp_concepts.template.md
│               └── issue_providers_ai_features.template.md
├── package-lock.json
├── package.json
├── reports
│   ├── REPO_STRUCTURE.md
│   └── repo-gap-analysis-20251117.md
├── scripts
│   ├── README.md
│   ├── check-coverage.mjs
│   ├── generate-index.mts
│   ├── generate-repo-structure.mjs
│   ├── generate-repo-structure.mts
│   ├── scaffold-gpt.mts
│   ├── utils
│   │   ├── __tests__
│   │   │   └── scaffolding.template-resolution.test.mts
│   │   ├── indexing.mts
│   │   ├── scaffolding.mts
│   │   └── validation.mts
│   └── validate-gpt.mts
├── tests
│   ├── README.md
│   └── scaffolding.integration.test.mts
├── tsconfig.json
├── vitest.config.ts
└── web
    ├── .gitkeep
    └── README.md

Generated: 2025-11-25
```

Folder explanations

- `.github/`: Contains agent definitions, prompt files, and chat-instruction files that scope
  Copilot/agent behavior to repository areas (e.g., `gpt-packages/**`, `scripts/**`).
  Use these when building or validating GPT packages and automations.

- `gpt-packages/`: The core area where each Custom GPT is stored. Each GPT folder follows the
  NGAS conventions and typically contains:
  - `gpt.json`: metadata and pointers to `instructions`, `actions`, and `knowledge` locations.
  - `instructions/`: system-role instruction files (the system prompt for the GPT).
  - `knowledge/`: domain knowledge files (numbered `NN.NN_snake_case.md` per NGAS conventions).
  - `actions/`: OpenAPI 3.1 JSON schemas for any custom actions the GPT can use.

  The `gpt-packages/templates/` subtree holds canonical templates used by the scaffold tools
  and by human maintainers to create new GPT packages in a consistent way
  (instruction templates, knowledge templates, action templates, eval templates, etc.).

- `scripts/`: TypeScript scripts used to scaffold GPTs, validate package structure, and generate knowledge indexes.
  These scripts are runnable with `npm run <script>` (see `package.json`), and utility modules are in `scripts/utils/`.

- `reports/`: Analytical documents and reports about the repo and its gaps.
  The `REPO_STRUCTURE.md` file documents layout and conventions;
  other reports (e.g., `repo-gap-analysis-20251117.md`) contain findings and recommendations.

- `web/`: A placeholder for any future web application (UI for GPT builder or dashboards).
  Not required for the scaffolding or validation scripts.

- Config files at the root (`package.json`, `tsconfig.json`, linter and formatter configs):
  define build, lint, and formatting rules used by CI and by local developer workflows.

Conventions and notes

- Knowledge files must follow the NGAS naming and frontmatter conventions:
  `NN.NN_snake_case.md` and YAML frontmatter including `document_id`, `title`, `version`, `status`,
  `owner`, `category`, `last_reviewed`, `next_review`, `tags`.

- No GPT package should have more than 20 knowledge files; templates and scaffold scripts enforce this limit.

- `gpt.json` files act as the single source of truth for a package's structure;
  the scaffold script updates this file when creating a new GPT.

- Use `npm run scaffold <gpt-name>` to create a new GPT package from templates;
  then edit `instructions/main.md`, add knowledge, optionally add `actions/schema.json`, and run `npm run validate`.

Next steps (suggested)

- Review this `REPO_STRUCTURE.md` and tell me if you want more detail per specific GPT package
  (e.g., full content listing for `backend_core_architect/`).
- If you want, I can also commit and push this file to a branch and open a PR — tell me if you want me to do that.

---
Generated: 2025-11-19
