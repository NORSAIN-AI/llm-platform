# Repository Structure

Automatisk generert: 2025-11-30 16:48

```text
/
├── .husky
│   ├── _
│   │   ├── .gitignore
│   │   ├── applypatch-msg
│   │   ├── commit-msg
│   │   ├── h
│   │   ├── husky.sh
│   │   ├── post-applypatch
│   │   ├── post-checkout
│   │   ├── post-commit
│   │   ├── post-merge
│   │   ├── post-rewrite
│   │   ├── pre-applypatch
│   │   ├── pre-auto-gc
│   │   ├── pre-commit
│   │   ├── pre-merge-commit
│   │   ├── pre-push
│   │   ├── pre-rebase
│   │   └── prepare-commit-msg
│   └── pre-commit
├── .vscode
│   └── settings.json
├── coverage
│   ├── scripts
│   │   ├── utils
│   │   │   ├── index.html
│   │   │   ├── indexing.mts.html
│   │   │   ├── scaffolding.mts.html
│   │   │   └── validation.mts.html
│   │   ├── check-coverage.mjs.html
│   │   ├── generate-index.mts.html
│   │   ├── generate-repo-structure.mjs.html
│   │   ├── generate-repo-structure.mts.html
│   │   ├── index.html
│   │   ├── scaffold-gpt.mts.html
│   │   ├── validate-gpt.mts.html
│   │   └── validate-templates.mts.html
│   ├── base.css
│   ├── block-navigation.js
│   ├── coverage-final.json
│   ├── favicon.png
│   ├── index.html
│   ├── prettify.css
│   ├── prettify.js
│   ├── sort-arrow-sprite.png
│   └── sorter.js
├── docs
│   ├── _templates
│   │   ├── agent-instructions-template.md
│   │   ├── agent-knowledge-hierarchy-template.md
│   │   ├── agent-overview-template.md
│   │   ├── document-template.md
│   │   ├── README.md
│   │   └── standard-template.md
│   ├── 00-overview
│   │   ├── README.md
│   │   └── repo-identity-and-scope.md
│   ├── 01-ngas-standards
│   │   └── README.md
│   ├── 02-custom-gpt-design
│   │   ├── custom-gpt-design-standard.md
│   │   └── README.md
│   ├── 03-gpt-packages
│   │   ├── gpt-packages-structure.md
│   │   └── README.md
│   ├── 04-agents
│   │   ├── platform-dev-architect
│   │   │   ├── 00-overview.md
│   │   │   ├── 10-instructions-v2.4.md
│   │   │   └── 20-knowledge-hierarchy-v2.4.md
│   │   └── README.md
│   ├── 05-operations
│   │   ├── knowledge-flow-general.md
│   │   └── README.md
│   ├── 06-integrations
│   │   └── README.md
│   ├── 07-governance
│   │   └── model-governance-dashboard.md
│   ├── 08-models
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
│   │   ├── model-selection-strategy.md
│   │   └── raptor-mini.md
│   ├── 09-planning
│   │   ├── CHECKLIST.md
│   │   ├── INDEX.md
│   │   ├── README.md
│   │   ├── TODOs-gpt-packages.md
│   │   └── TODOs-templates.md
│   ├── 10-prompt-engineering-framework
│   │   ├── 00-frontpage
│   │   │   ├── prompt_engineering_frontpage.md
│   │   │   └── README.md
│   │   ├── 01-prompt-engineering-core
│   │   │   ├── 01_introduction.md
│   │   │   ├── 02_llm_output_configuration.md
│   │   │   ├── 03_prompting_techniques.md
│   │   │   ├── 04_zero_shot_prompting.md
│   │   │   ├── 05_one_shot_few_shot.md
│   │   │   ├── 06_system_role_contextual.md
│   │   │   ├── 07_step_back.md.md
│   │   │   ├── 08_chain_of_thought.md
│   │   │   ├── 09_self_consistency.md
│   │   │   ├── 10_tree_of_thoughts.md
│   │   │   ├── 11_react.md
│   │   │   ├── 12_automatic_prompt_engineering.md
│   │   │   ├── 13_code_prompting.md
│   │   │   ├── 14_multimodal.md
│   │   │   ├── 15_best_practices.md
│   │   │   ├── 16_json_repair.md
│   │   │   ├── 17_working_with_schemas.md
│   │   │   ├── 18_summary.md
│   │   │   ├── 19_endnotes.md
│   │   │   └── README.md
│   │   ├── 02-examples
│   │   │   ├── json_schemas
│   │   │   │   ├── extraction_result.schema.json
│   │   │   │   └── risk_item.schema.json
│   │   │   ├── practical_examples.md
│   │   │   ├── prompt_engineering_examples.md
│   │   │   └── README.md
│   │   ├── 03-evaluation
│   │   │   ├── evaluation_checklist.md
│   │   │   ├── prompt_evaluation_framework.md
│   │   │   ├── README.md
│   │   │   ├── scoring_guide.md
│   │   │   └── test_case_templates.md
│   │   ├── 04-version-control
│   │   │   ├── change_history_templates.md
│   │   │   ├── prompt_diff_guidelines.md
│   │   │   ├── README.md
│   │   │   └── rompt_version_log.md
│   │   ├── 05-templates
│   │   │   ├── analysis_template.md
│   │   │   ├── classification_template.md
│   │   │   ├── code_template.md
│   │   │   ├── extraction_template.md
│   │   │   ├── json_template.md
│   │   │   ├── README.md
│   │   │   ├── reasoning_template.md
│   │   │   ├── schema_prompt_template.md
│   │   │   └── writing_template.md
│   │   ├── 06-schema-library
│   │   │   ├── json_schemas
│   │   │   │   ├── capa_record.schema.json
│   │   │   │   ├── extraction_result.schema.json
│   │   │   │   └── risk_item.schema.json
│   │   │   ├── ts_interfaces
│   │   │   │   ├── analysis_result.ts
│   │   │   │   ├── capa_record.ts
│   │   │   │   └── risk_item.ts
│   │   │   ├── llm_structure_contracts.md
│   │   │   └── README.md
│   │   ├── 07-troubleshooting
│   │   │   ├── failure_modes.md
│   │   │   ├── README.md
│   │   │   └── troubleshooting_guide.md
│   │   ├── 08-playbooks
│   │   │   ├── api_documentation_playbook.md
│   │   │   ├── code_review_playbook.md
│   │   │   ├── engineering_playbook.md
│   │   │   ├── qms_playbook.md
│   │   │   ├── README.md
│   │   │   └── risk_analysis_playbook.md
│   │   ├── Temp
│   │   │   ├── ngas_gpt_signal_and_response.md
│   │   │   ├── norsain_language_tone_guide_v1.1.md
│   │   │   ├── output_standards_v1.2.md
│   │   │   └── README.md
│   │   ├── INDEX.md
│   │   └── README.md
│   ├── 11-testing
│   │   └── vitest-standard.md
│   ├── 99-appendix
│   │   └── README.md
│   ├── _sidebar.md
│   ├── index.html
│   ├── index.md
│   ├── q_logo_512x512.svg
│   └── README.md
├── gpt-packages
│   ├── .archive
│   │   ├── 2024-legacy-analytics-bot
│   │   │   ├── actions
│   │   │   │   └── schema.json
│   │   │   ├── instructions
│   │   │   │   └── main.md
│   │   │   ├── knowledge
│   │   │   │   ├── index.md
│   │   │   │   └── README.md
│   │   │   ├── gpt.json
│   │   │   └── README.md
│   │   ├── 2024-legacy-backend_core_architect
│   │   │   ├── actions
│   │   │   │   └── schema.json
│   │   │   ├── instructions
│   │   │   │   └── main.md
│   │   │   ├── knowledge
│   │   │   │   ├── 00.01_backend_architecture_principles.md
│   │   │   │   ├── 00.02_database_design_patterns.md
│   │   │   │   ├── 00.03_api_design_best_practices.md
│   │   │   │   ├── index.md
│   │   │   │   └── README.md
│   │   │   ├── gpt.json
│   │   │   └── README.md
│   │   ├── 2024-legacy-fullstack_code_architect
│   │   │   ├── actions
│   │   │   │   └── schema.json
│   │   │   ├── instructions
│   │   │   │   ├── instruction.md
│   │   │   │   └── main.md
│   │   │   ├── knowledge
│   │   │   │   ├── 01.01_role_scope_boundaries.md
│   │   │   │   ├── index.md
│   │   │   │   └── README.md
│   │   │   ├── gpt.json
│   │   │   └── README.md
│   │   ├── 2024-legacy-my-assistant
│   │   │   ├── actions
│   │   │   │   └── schema.json
│   │   │   ├── instructions
│   │   │   │   └── main.md
│   │   │   ├── knowledge
│   │   │   │   ├── index.md
│   │   │   │   └── README.md
│   │   │   ├── gpt.json
│   │   │   └── README.md
│   │   └── README.md
│   ├── .sandbox
│   │   └── README.md
│   ├── instances
│   │   └── README.md
│   ├── templates
│   │   ├── _library
│   │   │   ├── actions
│   │   │   │   ├── README.md
│   │   │   │   └── schema.json
│   │   │   ├── evals
│   │   │   │   ├── eval_log.template.md
│   │   │   │   ├── eval_matrix.template.md
│   │   │   │   ├── eval_scenarios.template.md
│   │   │   │   └── README.md
│   │   │   ├── instructions
│   │   │   │   └── README.md
│   │   │   ├── knowledge
│   │   │   │   ├── _index.md
│   │   │   │   ├── 01-ngas-standards-index.md
│   │   │   │   ├── 02-language-tone-guide.md
│   │   │   │   ├── 03-output-standards-llm.md
│   │   │   │   ├── 04-signal-and-response-general.md
│   │   │   │   ├── 05-chunking-standards-ingest.md
│   │   │   │   ├── 06-safety-and-risk-patterns.md
│   │   │   │   ├── 07-agent-role-scope-and-boundaries.md
│   │   │   │   ├── 08-agent-signal-and-response-overrides.md
│   │   │   │   ├── 09-agent-work-modes-and-templates.md
│   │   │   │   ├── 10-agent-failure-modes-and-mitigations.md
│   │   │   │   ├── 11-agent-examples-canonical-qa.md
│   │   │   │   ├── 12-domain-overview.md
│   │   │   │   ├── 13-domain-processes-and-playbooks.md
│   │   │   │   ├── 14-domain-risks-and-constraints.md
│   │   │   │   ├── 15-domain-faq.md
│   │   │   │   ├── 17-domain-overview-and-core-concepts.md
│   │   │   │   ├── 18-domain-processes-and-lifecycles.md
│   │   │   │   ├── 19-domain-architecture-and-components.md
│   │   │   │   ├── 20-domain-data-standards-and-definitions.md
│   │   │   │   ├── 21-domain-glossary-and-terminology.md
│   │   │   │   ├── 22-domain-patterns-and-best-practices.md
│   │   │   │   ├── 23-domain-risks-constraints-and-failure-modes.md
│   │   │   │   └── README.md
│   │   │   ├── logs
│   │   │   └── prompts
│   │   │       ├── build_custom_gpt.prompt.md
│   │   │       ├── extend_custom_gpt.prompt.md
│   │   │       ├── README.md
│   │   │       └── regenerate_instruction.prompt.md
│   │   ├── _test
│   │   │   ├── test_gpt
│   │   │   │   ├── actions
│   │   │   │   │   ├── basic_action.template.json
│   │   │   │   │   ├── list_items_action.template.json
│   │   │   │   │   └── write_items_action.template.json
│   │   │   │   ├── gpt_metadata
│   │   │   │   │   ├── conversation_starters.template.md
│   │   │   │   │   └── metadata_header.template.json
│   │   │   │   ├── instructions
│   │   │   │   │   ├── 01_identity.template.md
│   │   │   │   │   ├── 02_purpose.template.md
│   │   │   │   │   ├── 03_core_behaviour.template.md
│   │   │   │   │   ├── 04_constraints.template.md
│   │   │   │   │   ├── 05_safety.template.md
│   │   │   │   │   ├── 06_output_rules.template.md
│   │   │   │   │   ├── 07_interaction_rules.template.md
│   │   │   │   │   ├── 08_ask_vs_infer.template.md
│   │   │   │   │   └── 09_end_rules.template.md
│   │   │   │   └── knowledge
│   │   │   │       ├── 01.foundation
│   │   │   │       │   ├── eval_and_test_prompts.template.md
│   │   │   │       │   ├── language_tone_output.template.md
│   │   │   │       │   ├── norsain_dev_principles.template.md
│   │   │   │       │   ├── role_scope.template.md
│   │   │   │       │   └── safety_and_ethics.template.md
│   │   │   │       ├── 02.architecture
│   │   │   │       │   ├── api_contracts.template.md
│   │   │   │       │   └── webapp_patterns.template.md
│   │   │   │       ├── 03.typescript
│   │   │   │       │   ├── backend_guidelines.template.md
│   │   │   │       │   ├── frontend_guidelines.template.md
│   │   │   │       │   └── ts_utilities_examples.template.md
│   │   │   │       ├── 04.java
│   │   │   │       │   ├── java_error_testing.template.md
│   │   │   │       │   └── spring_patterns.template.md
│   │   │   │       ├── 05.python
│   │   │   │       │   ├── python_ai_integration.template.md
│   │   │   │       │   └── python_api_patterns.template.md
│   │   │   │       ├── 06.databases_sql
│   │   │   │       │   ├── relational_modelling.template.md
│   │   │   │       │   └── sql_performance_migrations.template.md
│   │   │   │       ├── 07.auth_security
│   │   │   │       │   ├── oauth2_oidc_jwt.template.md
│   │   │   │       │   └── securing_flows.template.md
│   │   │   │       └── 08.ai_mcp
│   │   │   │           ├── ai_mcp_concepts.template.md
│   │   │   │           └── issue_providers_ai_features.template.md
│   │   │   ├── test_template_resolve_1763549456726
│   │   │   │   └── gpt_metadata
│   │   │   └── test_template_resolve_1763549613860
│   │   │       ├── actions
│   │   │       │   ├── basic_action.template.json
│   │   │       │   ├── list_items_action.template.json
│   │   │       │   └── write_items_action.template.json
│   │   │       ├── gpt_metadata
│   │   │       │   ├── conversation_starters.template.md
│   │   │       │   └── metadata_header.template.json
│   │   │       ├── instructions
│   │   │       │   ├── 01_identity.template.md
│   │   │       │   ├── 02_purpose.template.md
│   │   │       │   ├── 03_core_behaviour.template.md
│   │   │       │   ├── 04_constraints.template.md
│   │   │       │   ├── 05_safety.template.md
│   │   │       │   ├── 06_output_rules.template.md
│   │   │       │   ├── 07_interaction_rules.template.md
│   │   │       │   ├── 08_ask_vs_infer.template.md
│   │   │       │   └── 09_end_rules.template.md
│   │   │       └── knowledge
│   │   │           ├── 01.foundation
│   │   │           │   ├── eval_and_test_prompts.template.md
│   │   │           │   ├── language_tone_output.template.md
│   │   │           │   ├── norsain_dev_principles.template.md
│   │   │           │   ├── role_scope.template.md
│   │   │           │   └── safety_and_ethics.template.md
│   │   │           ├── 02.architecture
│   │   │           │   ├── api_contracts.template.md
│   │   │           │   └── webapp_patterns.template.md
│   │   │           ├── 03.typescript
│   │   │           │   ├── backend_guidelines.template.md
│   │   │           │   ├── frontend_guidelines.template.md
│   │   │           │   └── ts_utilities_examples.template.md
│   │   │           ├── 04.java
│   │   │           │   ├── java_error_testing.template.md
│   │   │           │   └── spring_patterns.template.md
│   │   │           ├── 05.python
│   │   │           │   ├── python_ai_integration.template.md
│   │   │           │   └── python_api_patterns.template.md
│   │   │           ├── 06.databases_sql
│   │   │           │   ├── relational_modelling.template.md
│   │   │           │   └── sql_performance_migrations.template.md
│   │   │           ├── 07.auth_security
│   │   │           │   ├── oauth2_oidc_jwt.template.md
│   │   │           │   └── securing_flows.template.md
│   │   │           └── 08.ai_mcp
│   │   │               ├── ai_mcp_concepts.template.md
│   │   │               └── issue_providers_ai_features.template.md
│   │   ├── custom_gpt
│   │   │   ├── actions
│   │   │   │   ├── basic_action.template.json
│   │   │   │   ├── list_items_action.template.json
│   │   │   │   ├── schema.json
│   │   │   │   └── write_items_action.template.json
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
│   │   │   ├── custom_gpt_instructions.md
│   │   │   ├── gpt.json
│   │   │   └── template.manifest.json
│   │   └── README.md
│   └── README.md
├── reports
│   ├── REPO_STRUCTURE.md
│   └── repo-gap-analysis-20251117.md
├── scripts
│   ├── utils
│   │   ├── __tests__
│   │   │   └── scaffolding.template-resolution.test.mts
│   │   ├── indexing.mts
│   │   ├── scaffolding.mts
│   │   └── validation.mts
│   ├── check-coverage.mjs
│   ├── generate-index.mts
│   ├── generate-repo-structure.mjs
│   ├── generate-repo-structure.mts
│   ├── README.md
│   ├── scaffold-gpt.mts
│   ├── validate-gpt.mts
│   └── validate-templates.mts
├── tests
│   ├── README.md
│   └── scaffolding.integration.test.mts
├── web
│   ├── .gitkeep
│   └── README.md
├── .eslintrc.json
├── .gitignore
├── .gitmessage
├── .markdownlint.jsonc
├── .markdownlintignore
├── .pre-commit-config.yaml
├── .prettierrc
├── LICENSE
├── Makefile
├── package-lock.json
├── package.json
├── README.md
├── REPO_STRUCTURE.md
├── SECURITY.md
├── tsconfig.json
└── vitest.config.ts
```
