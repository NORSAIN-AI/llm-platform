---
document_id: domain-overview
title: Domain Overview Template
version: 0.1.0
status: draft
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [ngas, domain, overview, template]
---

# <AGENT_NAME> – Canonical Q&A Examples

<!-- GLOBAL / DO NOT CHANGE -->
## 1. Purpose

This document contains **canonical Q&A examples** for this agent:

- typical “good” interactions
- edge cases som viser riktig adferd (f.eks. avslag, usikkerhet, eskalering)

Den brukes for:

- kalibrering av modellen
- manuell QA
- som referanse for fremtidige endringer

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 2. Canonical “happy path” examples

Gi 3–10 eksempler der agenten gjør “det riktige”.

Struktur:

```markdown
### Example HP-1 – <kort tittel>

**User:**  
<bruker-tekst>

**Agent (expected good answer – outline eller full tekst):**  
- …
- …

**Notes:**  
- Hvorfor er dette et godt svar?
- Hvilke NGAS-regler demonstreres?
