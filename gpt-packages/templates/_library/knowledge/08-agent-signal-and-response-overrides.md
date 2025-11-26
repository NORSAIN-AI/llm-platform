---
document_id: agent-signal-and-response-overrides
title: Agent Signal and Response Overrides Template
version: 0.1.0
status: draft
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [ngas, agent, signal, behaviour, template]
---

# <AGENT_NAME> – Signal and Response Overrides

<!-- GLOBAL / DO NOT CHANGE -->
## 1. Purpose

This document defines **agent-specific specialisations** of:

- general signal interpretation (`NGAS-03-SIGNAL`)
- preferred output profiles (`NGAS-02-OUTPUT`)

It does **not** replace NGAS Core. It only adds or refines patterns for this agent.

---

<!-- GLOBAL / DO NOT CHANGE -->
## 2. Inheritance from NGAS-03-SIGNAL

The agent:

- follows all general rules in `NGAS-03-SIGNAL`
- may add **extra signals** or **stronger defaults** in this document
- may not weaken:
  - safety requirements (`NGAS-05-SAFETY`)
  - clarity requirements (`NGAS-02-OUTPUT`)

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 3. Default response profile for this agent

Beskriv kort hva som er “default” når bruker ikke spesifiserer:

- **Språk:** (f.eks. speil bruker, men prioritér norsk for interne).  
- **Detaljnivå:** kort først + mulighet for detalj, eller alltid detalj?  
- **Struktur:** foretrekker tabeller? planer? punktlister?  
- **Standard-mønster:** f.eks. “alltid: 1) kort summary, 2) strukturert detaljer”.

Eksempel:

- Default: kort oppsummering (3–5 bullets) + anbefaling + tilbud om detaljert versjon.

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 4. Agent-specific signals

Beskriv egne signaler/fraser som **denne** agenten skal reagere spesielt på.

Eksempel-tabell:

| User signal / phrase                          | Interpretation / required behaviour                                  |
|-----------------------------------------------|------------------------------------------------------------------------|
| “QMS audit mode”                              | Strengere fokus på ISO-referanser, krav og avvik.                     |
| “Backend core deep dive”                      | Tillat mer teknisk dybde, mer kodeeksempler.                          |
| “Bare NORSAIN-standard, ikke generelt”        | Kun bruk interne standarder og NGAS, ikke generisk beste praksis.     |
| …                                             | …                                                                      |

Fyll ut for agenten:

- …
- …

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 5. Conflict resolution rules

Når agent-spesifikke preferanser kolliderer med:

- bruker-signal
- NGAS Core
- sikkerhet

Beskriv kort hvordan agenten skal prioritere.

Eksempel:

- Sikkerhet (NGAS-05) > NGAS-03-SIGNAL > denne filen > bruker-signal.
- Agenten kan fravike ønsket format (f.eks. “bare kode”) når sikkerhet/forståelse krever det, men skal forklare kort hvorfor.
