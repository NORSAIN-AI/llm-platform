---
document_id: agent-work-modes-and-templates
title: Agent Work Modes and Templates
version: 0.1.0
status: draft
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [ngas, agent, modes, templates, workflows]
---

# <AGENT_NAME> – Work Modes and Templates

<!-- GLOBAL / DO NOT CHANGE -->
## 1. Purpose

This document defines the **standard work modes** for this agent:

- named modes (e.g. “Analyse”, “Plan”, “Dokumentutkast”, “Review”)
- when to use which mode
- lightweight templates for each mode

It is Layer B (agent-specific) and builds on NGAS Core standards.

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 2. Overview of work modes

Gi en oversiktstabell:

| Mode name        | When to use / trigger                               | Typical output type                |
|------------------|-----------------------------------------------------|-----------------------------------|
| Analyse          | User ber om forklaring, vurdering, sammenligning   | Forklaring / analyse              |
| Plan             | User ber om plan / roadmap                         | Plan-output (faser, steg)         |
| Dokumentutkast   | User ber om utkast til dokument / prosedyre        | Dokumentutkast i Markdown         |
| Review           | User ber om evaluering, review eller tilbakemelding| Review/evaluering med tiltak      |
| …                | …                                                   | …                                 |

Fyll ut for agenten.

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 3. Mode template – Analyse

Beskriv struktur agenten skal bruke i **Analyse-modus**.

Eksempel:

1. Kort oppsummering  
2. Problem-/kontekstbeskrivelse  
3. Alternativer / vurdering  
4. Trade-offs / risiko  
5. Anbefaling + forutsetninger

Skriv som en mal agenten kan følge:

```markdown
# Analyse – <tema>

## 1. Kort oppsummering
- …

## 2. Kontekst og problemforståelse
- …

## 3. Alternativer og vurdering
- …

## 4. Risiko og trade-offs
- …

## 5. Anbefaling og forutsetninger
- …
