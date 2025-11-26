---
document_id: agent-failure-modes-and-mitigations
title: Agent Failure Modes and Self-Correction Template
version: 0.1.0
status: draft
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [ngas, agent, failure-modes, self-correction, template]
---

# <AGENT_NAME> – Failure Modes and Self-Correction

<!-- GLOBAL / DO NOT CHANGE -->
## 1. Purpose

This document describes:

- common **failure modes** for this agent
- how the agent should **detect** them
- how the agent should **self-correct** when they occur

It is intended for:

- AI architects and agent owners
- meta-agents that monitor and correct behaviour

It is **agent-specific** (Layer B) and must be kept in sync with the agent’s mandate and domain.

---

<!-- GLOBAL / DO NOT CHANGE -->
## 2. Relation to NGAS Core

This agent:

- follows general safety rules in `NGAS-05-SAFETY`
- follows output rules in `NGAS-02-OUTPUT`
- follows signal rules in `NGAS-03-SIGNAL`

This document does **not** override NGAS Core.  
It specifies **how this agent** should recognise and correct its own typical mistakes.

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 3. Failure mode overview

List the most important failure modes for this agent.

| ID  | Failure mode name                        | Short description                                       | Typical impact (L/M/H) |
|-----|------------------------------------------|--------------------------------------------------------|------------------------|
| F1  |                                          |                                                        |                        |
| F2  |                                          |                                                        |                        |
| F3  |                                          |                                                        |                        |

Fill in for this agent.

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 4. Failure mode details

Describe each failure mode using the same structure.

### F1 – <name>

- **Description**  
  Hva skjer typisk når agenten feiler på denne måten?

- **Symptoms / detection signals**  
  Hvordan kan agenten selv oppdage dette i svaret sitt?
  - …
  - …

- **Impact**  
  - Low / Medium / High + kort begrunnelse.

- **Root causes (typical)**  
  - Manglende kontekst?
  - Feiltolkning av signal?
  - For mye/lite detalj?
  - Annet?

- **Self-correction strategy**  
  Hva skal agenten gjøre når dette mistenkes:
  - eksplisitt flagge usikkerhet?
  - be om avklaring?
  - forenkle scope?
  - foreslå human review?

Gjenta for F2, F3, osv.:

### F2 – <name>

- **Description**  
- **Symptoms / detection signals**  
- **Impact**  
- **Root causes (typical)**  
- **Self-correction strategy**  

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 5. Interaction with users and other agents

Describe how this agent should interact when a failure mode is detected:

- **Towards the user**
  - Hvordan kommuniseres feilen eller usikkerheten kort og profesjonelt?
  - Eksempler på formuleringer agenten kan bruke.

- **Towards other agents / tools (if MAS)**
  - Når skal oppgaven:
    - eskaleres til en annen spesialist-agent?
    - anbefales løst av menneske?
  - Hvilke signaler/metadata bør legges ved (kort)?

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 6. Examples – good vs bad recovery

Give 2–5 konkrete eksempler på hvordan agenten skal korrigere seg selv.

### Example R1 – Missing context

| Context                      | Good (✅)                                                                                   | Bad (❌)                                                                                       |
|-----------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Oppdager manglende kontekst | “For å svare presist trenger jeg å vite X/Y. Uten det kan jeg bare gi en generell anbefaling …”
