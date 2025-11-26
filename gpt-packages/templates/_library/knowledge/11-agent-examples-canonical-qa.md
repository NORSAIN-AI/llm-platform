---
document_id: agent-examples-canonical-qa
title: Agent Evaluation Matrix Template
version: 0.1.0
status: draft
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [ngas, agent, evaluation, matrix, quality, template]
---

# <AGENT_NAME> – Evaluation Matrix

<!-- GLOBAL / DO NOT CHANGE -->
## 1. Purpose

This document defines an **evaluation matrix** for this agent:

- hvilke kriterier som er viktige
- hvordan vi scorer svar
- hvordan vi tolker score (godkjent/ikke godkjent)

Den brukes både av:

- mennesker som evaluerer agentens svar
- andre agenter/metasystemer som vurderer kvalitet.

---

<!-- ROLE-SPECIFIC: FILL FOR THIS AGENT -->
## 2. Evaluation criteria

Lag en tabell:

| ID | Criterion                  | Description                                      | Weight (1–5) | Target level |
|----|---------------------------|--------------------------------------------------|--------------|--------------|
| C1 | Relevans                  | Svarer agenten på det som faktisk ble spurt om? | 5            | Høy          |
| C2 | Struktur og klarhet       | Er svaret strukturert og lett å lese?           | 4            | Høy          |
| C3 | Bruk av kunnskapsfiler    | Bruker agenten interne dokumenter korrekt?      | 4            | Medium/Høy   |
| C4 | Sikkerhet / forsiktighet  | Håndterer agenten risiko og usikkerhet riktig?  | 5            | Høy          |
| C5 | Stil / tone               | Følger agenten språk- og toneguiden?            | 3            | Medium/Høy   |

Tilpass kriterier og vekter til den konkrete ag
