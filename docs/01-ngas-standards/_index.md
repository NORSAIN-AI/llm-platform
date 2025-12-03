# Knowledge Library Index

This index provides a complete overview of all knowledge files in the NORSAIN GPT Platform knowledge library, organized by layer.

---

## Layer A: Global Standards (01–06)

Universal standards that apply to all NORSAIN GPTs and LLM agents.

| File | Document ID | Title | Status |
|------|-------------|-------|--------|
| `01-ngas-standards-index.md` | `ngas-standards-index` | NGAS – Global Standards Index | stable |
| `02-language-tone-guide.md` | `language-tone-guide` | NGAS – Language and Tone Guide for LLM Agents | stable |
| `03-output-standards-llm.md` | `output-standards-llm` | NGAS – Output Standards for LLM Agents | stable |
| `04-signal-and-response-general.md` | `signal-and-response-general` | NGAS – General Signal and Response Patterns for LLM Agents | stable |
| `05-chunking-standards-ingest.md` | `chunking-standards-ingest` | NGAS – Chunking Standards for Knowledge Ingestion | stable |
| `06-safety-and-risk-patterns.md` | `safety-and-risk-patterns` | NGAS – Safety and Risk Patterns for LLM Agents | stable |

**Layer A Characteristics**:

- Role-agnostic and domain-agnostic
- High stability (rarely changes)
- Should be included in most GPT packages
- Forms the foundation for all other layers

---

## Layer B: Agent Templates (07–11)

Templates for agent-specific knowledge files describing behavior, boundaries, and capabilities.

| File | Document ID | Title | Status |
|------|-------------|-------|--------|
| `07-agent-role-scope-and-boundaries.md` | `agent-role-scope-and-boundaries` | Agent Role, Scope and Boundaries Template | draft |
| `08-agent-signal-and-response-overrides.md` | `agent-signal-and-response-overrides` | Agent Signal and Response Overrides Template | draft |
| `09-agent-work-modes-and-templates.md` | `agent-work-modes-and-templates` | Agent Work Modes and Templates | draft |
| `10-agent-failure-modes-and-mitigations.md` | `agent-failure-modes-and-mitigations` | Agent Failure Modes and Self-Correction Template | draft |
| `11-agent-examples-canonical-qa.md` | `agent-examples-canonical-qa` | Agent Evaluation Matrix Template | draft |

**Layer B Characteristics**:

- Agent-specific (requires customization)
- Moderate stability (changes per agent)
- Provides structure for agent behavior and evaluation
- Extends Layer A standards with agent-specific rules

---

## Layer C: Domain Knowledge (12–23)

Templates and patterns for domain-specific knowledge about business processes, data, and architecture.

| File | Document ID | Title | Status |
|------|-------------|-------|--------|
| `12-domain-overview.md` | `domain-overview` | Domain Overview Template | draft |
| `13-domain-processes-and-playbooks.md` | `domain-processes-and-playbooks` | Domain Processes and Playbooks Template | draft |
| `14-domain-risks-and-constraints.md` | `domain-risks-and-constraints` | Domain Risks and Constraints Template | draft |
| `15-domain-faq.md` | `domain-faq` | Domain FAQ Template | draft |
| `17-domain-overview-and-core-concepts.md` | `domain-overview-and-core-concepts` | Domain Overview & Core Concepts | stable |
| `18-domain-processes-and-lifecycles.md` | `domain-processes-and-lifecycles` | Domain Processes & Lifecycles | stable |
| `19-domain-architecture-and-components.md` | `domain-architecture-and-components` | Domain Architecture & Components | stable |
| `20-domain-data-standards-and-definitions.md` | `domain-data-standards-and-definitions` | Domain Data Standards & Definitions | stable |
| `21-domain-glossary-and-terminology.md` | `domain-glossary-and-terminology` | Domain Glossary & Terminology | stable |
| `22-domain-patterns-and-best-practices.md` | `domain-patterns-and-best-practices` | Domain Patterns & Best Practices | stable |
| `23-domain-risks-constraints-and-failure-modes.md` | `domain-risks-constraints-and-failure-modes` | Domain Risks, Constraints & Failure Modes | stable |

**Layer C Characteristics**:

- Domain-specific (requires customization per business area)
- Variable stability (changes based on domain evolution)
- Provides business context for GPT decision-making
- Most variable across different GPT packages

---

## Total: 23 Knowledge Files

**Layer Distribution**:

- Layer A (Global): 6 files
- Layer B (Agent): 5 files
- Layer C (Domain): 12 files

**Status Distribution**:

- Stable: 17 files
- Draft: 6 files

---

## Usage Guidelines

1. **Select Layer A files first** – These are foundational and should be in most GPT packages
2. **Add Layer B files as needed** – Based on agent type and requirements
3. **Add Layer C files selectively** – Based on domain needs
4. **Respect the 20-file limit** – Maximum 20 knowledge files per GPT package

---

## Maintenance

This index is automatically maintained. Last updated: 2025-11-26

For questions about knowledge library structure, see:

- `README.md` in this directory
- `gpt-packages/templates/README.md`
- `.github/agents/knowledge_builder.agent.md`
