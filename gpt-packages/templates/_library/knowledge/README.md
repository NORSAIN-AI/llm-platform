# Knowledge Library – NORSAIN GPT Platform

This directory contains the **Single Source of Truth (SSOT)** for reusable knowledge templates used across all NORSAIN Custom GPT packages.

## Purpose

The knowledge library provides:
- **Layer-based organization** of knowledge content (A, B, C)
- **Standardized templates** for common knowledge patterns
- **NGAS-compliant** knowledge files with consistent frontmatter
- **Reusable building blocks** for GPT-package scaffolding

All knowledge files follow NGAS standards and use **kebab-case document IDs** in their YAML frontmatter.

---

## Layer Architecture

The knowledge library is organized into **three layers** (A, B, C), each serving a different purpose:

### **Layer A: Global Standards (01–06)**
**Purpose**: Universal standards that apply to **all** NORSAIN GPTs and LLM agents, regardless of role or domain.

**Files**:
- `01-ngas-standards-index.md` – Map and index for all NGAS global standards
- `02-language-tone-guide.md` – Language choice, tone, and style rules
- `03-output-standards-llm.md` – Output formats and document types
- `04-signal-and-response-general.md` – Signal patterns and response behaviors
- `05-chunking-standards-ingest.md` – Knowledge ingestion and chunking rules
- `06-safety-and-risk-patterns.md` – Safety, compliance, and risk mitigation

**Characteristics**:
- Role-agnostic and domain-agnostic
- High stability (rarely changes)
- Must be included in most GPT packages
- Forms the foundation for all other layers

---

### **Layer B: Agent Templates (07–11)**
**Purpose**: Templates for **agent-specific** knowledge files that describe behavior, boundaries, and capabilities of individual GPT agents.

**Files**:
- `07-agent-role-scope-and-boundaries.md` – Defines agent role, scope, and limits
- `08-agent-signal-and-response-overrides.md` – Agent-specific signal overrides
- `09-agent-work-modes-and-templates.md` – Work modes and workflows
- `10-agent-failure-modes-and-mitigations.md` – Failure detection and self-correction
- `11-agent-examples-canonical-qa.md` – Evaluation matrix and quality assurance

**Characteristics**:
- Agent-specific (requires customization with `{{AGENT_NAME}}` and `{{AGENT_ID}}`)
- Moderate stability (changes per agent)
- Provides structure for agent behavior and evaluation
- Extends Layer A standards with agent-specific rules

---

### **Layer C: Domain Knowledge (12–23)**
**Purpose**: Templates and patterns for **domain-specific** knowledge that describes business processes, data, architecture, and terminology.

**Files**:
- `12-domain-overview.md` – Domain overview template
- `13-domain-processes-and-playbooks.md` – Domain processes and playbooks
- `14-domain-risks-and-constraints.md` – Domain risks and constraints
- `15-domain-faq.md` – Domain FAQ template
- `17-domain-overview-and-core-concepts.md` – Core concepts and fundamentals
- `18-domain-processes-and-lifecycles.md` – Process lifecycles
- `19-domain-architecture-and-components.md` – System architecture
- `20-domain-data-standards-and-definitions.md` – Data schemas and standards
- `21-domain-glossary-and-terminology.md` – Domain-specific terms
- `22-domain-patterns-and-best-practices.md` – Domain patterns
- `23-domain-risks-constraints-and-failure-modes.md` – Domain-level risks

**Characteristics**:
- Domain-specific (requires customization per business area)
- Lower stability (changes frequently)
- Provides business context for GPT decision-making
- Most variable across different GPT packages

---

## Knowledge File Limits

**Maximum 20 knowledge files per GPT package** (NGAS constraint).

When scaffolding a new GPT:
1. Always include relevant **Layer A** files (01–06 as needed)
2. Select **Layer B** files based on agent type
3. Add **Layer C** files based on domain requirements
4. Ensure total ≤ 20 files

---

## File Naming Conventions

All knowledge files follow this pattern:
```
NN-kebab-case-name.md
```

Where:
- `NN` = Sequential number (01–23)
- `kebab-case-name` = Descriptive, lowercase, hyphen-separated name

---

## YAML Frontmatter Standard

All knowledge files must include YAML frontmatter:

```yaml
---
document_id: kebab-case-identifier
title: Human-Readable Title
version: 1.0.0
status: draft | stable
owner: norsain-ai
last_reviewed: YYYY-MM-DD
tags: [tag1, tag2, tag3]
layer: A | B | C  # Optional, for Layer C files
---
```

**Required fields**:
- `document_id` – Unique kebab-case identifier
- `title` – Human-readable title
- `version` – Semantic version (major.minor.patch)
- `status` – Either `draft` or `stable`
- `owner` – Always `norsain-ai` for library files
- `last_reviewed` – ISO date (YYYY-MM-DD)
- `tags` – Array of relevant tags

**Deprecated fields** (do not use):
- `related_documents` – Removed for simplicity
- Old `document_id` formats like `NGAS-XX-XXX` or `C-XX-XXX` – Use kebab-case instead

---

## Usage in GPT Packages

Knowledge files from this library can be:

1. **Copied directly** into a GPT package during scaffolding
2. **Referenced** in `template.manifest.json` via `library_includes.knowledge`
3. **Customized** after scaffolding (replace placeholders like `{{AGENT_NAME}}`)

Example manifest reference:
```json
{
  "library_includes": {
    "knowledge": [
      "_library/knowledge/01-ngas-standards-index.md",
      "_library/knowledge/02-language-tone-guide.md",
      "_library/knowledge/07-agent-role-scope-and-boundaries.md"
    ]
  }
}
```

---

## Maintenance

- **Layer A** files should be reviewed quarterly
- **Layer B** templates should be updated when agent patterns evolve
- **Layer C** templates should be validated against current domain models

For metadata normalization and index generation, use the **knowledge-library-maintainer** prompt/script.

---

## Related Documentation

- `gpt-packages/templates/README.md` – Template system overview
- `gpt-packages/templates/custom_gpt/template.manifest.json` – Manifest format
- `.github/agents/repo_builder.agent.md` – Repo Builder Agent instructions
