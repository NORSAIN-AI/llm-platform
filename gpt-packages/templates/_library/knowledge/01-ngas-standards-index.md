---
document_id: ngas-standards-index
title: NGAS – Global Standards Index
version: 1.0.0
status: stable
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [ngas, standards, index, llm, gpt]
---

# NGAS – Global Standards Index

## 1. Purpose

This document is the **map and index** for all NGAS global standards used by Custom GPTs and LLM agents at NORSAIN.

It is written for:

- AI/ML architects and platform owners  
- People creating or maintaining Custom GPTs  
- Meta-agents that reason about standards and configuration

It is **not** meant to duplicate the content of each standard – only to describe:

- what global standards exist  
- how they relate  
- how they should be used within the 20-file knowledge limit

This document is **global and role-agnostic** and must not be forked per agent.

---

## 2. Global NGAS standards (Layer A)

The following documents form the **global core** for all LLM agents.

| Document ID       | File name                          | Scope (short)                                     | Notes                           |
|-------------------|------------------------------------|---------------------------------------------------|---------------------------------|
| NGAS-01-LANG-TONE | 02_language_tone_guide.md          | Language choice, tone, and high-level style       | Global; applies to all agents   |
| NGAS-02-OUTPUT    | 03_output_standards_llm.md         | Output format, structure, examples (good/bad)     | Global; good/bad output tables  |
| NGAS-03-SIGNAL    | 04_signal_and_response_general.md  | General interpretation of user signals            | Global; role overrides in Layer B |
| NGAS-04-CHUNK     | 05_chunking_standards_ingest.md    | Chunking rules for ingestion (RAG/knowledge)      | Primarily pipeline/platform     |
| NGAS-05-SAFETY    | 06_safety_and_risk_patterns.md     | Safety, risk, behaviour examples (good/bad)       | Global; must not be weakened    |

Characteristics:

- **Single source of truth**: only one active version of each NGAS-X standard at a time.  
- **Global scope**: reused across all Custom GPTs and agents.  
- **No role-specific content**: any role- or domain-specific rules must live in Layer B or C.

---

## 3. Layer model and 70/30 pattern

NGAS adopts a simple layer model for knowledge files:

- **Layer A – Global standards (this index + NGAS-01 … NGAS-05)**  
  Shared 70 % “operating system” for all agents.

- **Layer B – Agent-specific standards**  
  Role-specific behaviour, scope, overrides and work modes.  
  Examples (file names will vary per agent):  
  - `10_agent_role_scope_and_boundaries.md`  
  - `11_agent_signal_and_response_overrides.md`  
  - `12_agent_work_modes_and_templates.md`  
  - `15_agent_examples_canonical_qa.md`

- **Layer C – Domain / product knowledge**  
  Domain content, frameworks, processes, risks, FAQs, etc.

### 3.1 70/30 principle

The **70/30 principle** is:

- ~70 % of behaviour is governed by **global standards + shared agent templates**.  
- ~30 % is role- and domain-specific and lives in Layer B and C.

Implications:

- Layer A documents are **never customised per agent**.  
- Layer B templates have clear sections marked as:
  - “GLOBAL / DO NOT CHANGE” (shared logic)  
  - “ROLE-SPECIFIC” (the 30 % to be filled in per agent)

---

## 4. Use in Custom GPT knowledge packs (20-file limit)

Each Custom GPT can have up to **20 knowledge files**. This section gives guidance on how many files to allocate to each layer.

### 4.1 Recommended minimum global core

For most agents:

- **Include at least:**
  - `02_language_tone_guide.md` (NGAS-01-LANG-TONE)  
  - `03_output_standards_llm.md` (NGAS-02-OUTPUT)  
  - `04_signal_and_response_general.md` (NGAS-03-SIGNAL)

For medium/high-risk agents (compliance, QMS, security, legal):

- **Additionally include:**
  - `06_safety_and_risk_patterns.md` (NGAS-05-SAFETY)

`05_chunking_standards_ingest.md` (NGAS-04-CHUNK) is primarily a **pipeline/platform** standard and is usually **not loaded** into runtime agent knowledge unless the agent’s mission is to design or audit RAG/ingestion.

### 4.2 Typical file budget profiles

**A. Balanced “gold standard” agent (20 files)**

- Layer A (global): 3–4 files  
- Layer B (agent-specific): 3–4 files  
- Layer C (domain): 12–14 files

**B. Lean production agent (max domain focus)**

- Layer A: 3 files (NGAS-01, 02, 03)  
- Layer B: 2–3 files (core role and overrides)  
- Layer C: 14–15 files

In both cases:

- Layer A is the **shared platform**  
- Layers B and C carry the 30 % flexibility per agent/domain

---

## 5. Relationship between NGAS standards

High-level relationships:

- **NGAS-01-LANG-TONE**  
  Defines language and tone.  
  Used by: all agents and all output types.

- **NGAS-02-OUTPUT**  
  Defines how answers are structured and formatted, plus good/bad output examples.  
  Used by: all agents when generating any non-trivial output.

- **NGAS-03-SIGNAL**  
  Defines how user signals are interpreted (length, language, structure, type of help).  
  Used by: all agents, extended (not overridden) by Layer B signal-overrides.

- **NGAS-04-CHUNK**  
  Defines ingestion/chunking rules for knowledge.  
  Used by: data/infra pipelines, meta-agents, and occasional “architect” agents.

- **NGAS-05-SAFETY**  
  Defines safety hierarchy, risk patterns, and good/bad behaviour examples.  
  Used by: all agents, particularly in high-risk contexts.

Layer B and C documents:

- must **reference** these standards,  
- may **extend or specialise**,  
- must **not contradict** the rules in Layer A.

---

## 6. How to create a new agent using NGAS

When creating a new agent (Custom GPT):

1. **Select global core (Layer A)**  
   - Always: NGAS-01, NGAS-02, NGAS-03  
   - If medium/high-risk: also NGAS-05  
   - Include NGAS-04 only if the agent deals with ingestion/RAG design.

2. **Instantiate agent templates (Layer B)**  
   - Copy standard templates (e.g. `10_agent_role_scope_and_boundaries.template.md`)  
   - Fill in only the sections marked as “ROLE-SPECIFIC”.  
   - Keep any “GLOBAL / DO NOT CHANGE” sections intact.

3. **Add domain knowledge (Layer C)**  
   - 6–14 files depending on complexity:
     - domain overview  
     - key frameworks and definitions  
     - processes and playbooks  
     - patterns and examples  
     - domain risks and constraints  
     - domain FAQ

4. **Check file budget (max 20)**  
   - Adjust Layer B/C if necessary, but do **not** remove core global standards
     unless explicitly justified and documented.

---

## 7. Governance

- This index is the **entry point** for NGAS global standards.
- It must be updated when:
  - new NGAS global standards are added, or  
  - existing standards are deprecated, renamed or split.

### 7.1 Versioning

- Each NGAS document has:
  - `version`  
  - `status` (Draft, Approved, Deprecated)  
  - `last_reviewed`  
  - `owner`

- Only **Approved** versions should be used in production agents.  
- Deprecated versions must be removed from Custom GPT knowledge packs, but may remain archived in the repository.

### 7.2 Change impact

- A change in one NGAS standard may require:
  - review of related NGAS documents (see `related_documents`), and  
  - updates in Layer B templates and Layer C domain guidelines.

- Engineering Governance is responsible for:
  - coordinating changes across NGAS standards  
  - communicating required updates to agent owners

---

## 8. Summary

- Layer A (NGAS-01 … NGAS-05) is the **shared 70 % platform** for all agents.  
- Layer B and C implement the remaining **30 % role and domain specialisation**.  
- This index defines:
  - which global standards exist  
  - how they relate  
  - how they should be combined inside the 20-file limit for Custom GPTs.

All new agents should start from this index and the NGAS global standards, not from ad-hoc or copy-pasted instructions.
