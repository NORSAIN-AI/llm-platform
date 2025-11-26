---
document_id: NPEF-PLB-004
title: "Engineering Prompting Playbook (Generell)"
version: "1.0.0"
status: "Approved"
owner: "Engineering Lead"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - playbooks
  - engineering
  - agent_systems
  - structured_output
---

# Engineering Prompting Playbook (Generell)

## 1. Purpose
Denne Playbooken standardiserer prompts for generell ingeniørbruk, inkludert systemdesign, verktøyflyt, CI/CD-scripts og agent-arkitektur. Fokus ligger på strukturerte verktøykall og flerstegsresonnement.

---

## 2. Obligatoriske Regler for Ingeniør-prompts

### 2.1 Agent Workflow (Verktøybruk)
* **ReAct-modell:** Bruk **ReAct (Reason + Act)** for alle oppgaver som involverer eksterne verktøy, API-kall eller flerstegs datahenting.
* **Struktur:** Følg streng struktur: `Thought: ... Action: [VERKTØY, INPUT] Observation: ...`.
* **Sikkerhet:** Definer eksplisitt hvilke handlinger (`Action`) som er **tillatt**.

### 2.2 Systemdesign og Strategi
* **ToT-modell:** Bruk **Tree-of-Thoughts (ToT)** for arkitekturvalg, strategisk planlegging eller problemer med flere mulige løsninger.
* **CoT:** CoT-steget skal inkludere evaluering av risiko og *trade-offs*.

### 2.3 Struktur og Format
* **Schema:** Bruk **Schema** for input/output av tekniske spesifikasjoner (f.eks. OpenAPI for API, JSON for konfigurasjon).

---

## 3. Eksempler på Engineering Prompt (Essens)

| Seksjon | Essensielt Innhold |
| :--- | :--- |
| **System** | "Du er en DevOps-ekspert. Returner KUN YAML-format for CI/CD-scripts." |
| **Rolle** | "Din oppgave er å designe et kostnadseffektivt skymiljø." |
| **Instruksjon** | "Bruk ReAct-loop for å søke etter kostnader (Action: search). Før deretter resonnementet videre." |
| **Konfig.** | Temp=0.2 (for strategi), Top-P=0.9. |