---
document_id: GOV-ML-001
title: Model Selection Strategy (Cost vs. Quality)
version: 2.0.0
status: Approved
owner: NORSAIN Engineering Governance
review_cycle: Quarterly
tags:
  - ai-governance
  - copilot
  - model-selection
  - engineering-standards
  - norsain
  - cost-control
---

# Model Selection Strategy (v2.0)

Denne strategien definerer valg av AI-modeller brukt i NORSAIN-prosjekter.
Målet er balansert bruk av kvalitet, kost og ytelse – spesielt i Copilot-agenter og GPT-integrasjoner på tvers av Backend Core, MAS, MCP, QMS/IMS, og engineering workflows.

---

# 1. Prinsipper for modellvalg

1. Bruk _laveste modell som gir akseptabel kvalitet_.
2. Velg **Codex** for kode der tilgjengelig.
3. Velg **Sonnet** for lange dokumenter, analyser og QMS-arbeid.
4. Velg **GPT-5.1** for arkitektur, resonnement og komplekse systemoppgaver.
5. Mini-/fast-modeller brukes der tid og kostnad er viktigst.
6. Modellvalg skal stå i agentens `model:`-felt.

---

# 2. Modelloversikt (alle aktuelle modeller)

| Modell                | Styrker                        | Svakheter                 | Typiske bruksområder                                 |
| --------------------- | ------------------------------ | ------------------------- | ---------------------------------------------------- |
| **GPT-5.1 Codex**     | Best kodeforståelse 2025       | Dyrest i kodenær bruk     | Refaktorering på tvers av repoer, avansert debugging |
| **GPT-5.1**           | Best resonnement, arkitektur   | Overkill for småting      | Backend Core design, MAS/MCP-arkitektur              |
| **GPT-5 Codex**       | Sterk kode, raskere enn 5.1    | Mindre kontekst           | Modulrefaktorering, testkode                         |
| **GPT-5**             | God på alt (balansert)         | Ikke best på noe          | Arkitektur, PM, analyseskriving                      |
| **GPT-5 Mini**        | Gratis/0x kost, rask           | Begrenset kontekst        | Små kodeendringer, README                            |
| **GPT-4o**            | Balansert, multimodal          | Ikke topp på kode         | Arkitektur + tekst + skjermbilder                    |
| **GPT-4.1**           | Forutsigbar og stabil          | Lav dybde                 | QA, enkel kode, korte dokumenter                     |
| **Grok Code Fast 1**  | Lynrask kodehjelp              | Svak på store repoer      | Quick-fix kode, patch i én fil                       |
| **Raptor Mini**       | Svært rask                     | Begrenset presisjon       | Tekstutkast, små snippets                            |
| **Claude Haiku 4.5**  | Best mini-tekstkvalitet        | Ikke sterk kodeforståelse | Notater, kort dokumentasjon                          |
| **Claude Sonnet 4.5** | Best dokumentmodell            | Mer formalistisk          | QMS/IMS policies, rapporter                          |
| **Gemini 2.5 Pro**    | Stor kontekst, teknisk analyse | Langsom enkelte ganger    | Multi-repo, tunge analyser                           |

---

# 3. Beslutningsmatrise per oppgavetype

## 3.1 Kode

| Oppgave                    | Anbefalt modell  | Alternativ  |
| -------------------------- | ---------------- | ----------- |
| Quick fix (én fil)         | Grok Code Fast 1 | GPT-5 Mini  |
| Mindre moduler             | GPT-5 Codex      | GPT-4o      |
| Kompleks refaktor          | GPT-5.1 Codex    | GPT-5 Codex |
| Debugging tvers av repo    | GPT-5.1 Codex    | GPT-5.1     |
| Generere backend-tjenester | GPT-5.1 Codex    | GPT-5       |

---

## 3.2 Arkitektur & systemdesign

| Oppgave                   | Modell  | Alternativ        |
| ------------------------- | ------- | ----------------- |
| Høynivå design            | GPT-4o  | GPT-5             |
| Backend Core              | GPT-5.1 | Gemini 2.5 Pro    |
| MAS-agent­modeller        | GPT-5.1 | GPT-5             |
| MCP-serverdesign          | GPT-5.1 | Gemini 2.5 Pro    |
| Tverrdomene systemanalyse | GPT-5.1 | Claude Sonnet 4.5 |

---

## 3.3 Dokumentasjon (QMS/IMS)

| Oppgave               | Modell            | Alternativ     |
| --------------------- | ----------------- | -------------- |
| Korte dokumenter      | Haiku 4.5         | GPT-5 Mini     |
| Policies / prosedyrer | Claude Sonnet 4.5 | GPT-5.1        |
| CAPA / risikoanalyser | Claude Sonnet 4.5 | GPT-5.1        |
| Lange rapporter       | Claude Sonnet 4.5 | Gemini 2.5 Pro |

---

## 3.4 PM / Scrum / Prince2 Agile

| Oppgave                | Modell     | Alternativ        |
| ---------------------- | ---------- | ----------------- |
| Sprintplan             | GPT-5 Mini | Haiku             |
| Roadmap-analyse        | GPT-5      | GPT-4o            |
| Strategisk planlegging | GPT-5.1    | Claude Sonnet 4.5 |

---

## 3.5 Repo-analyse

| Oppgave                | Modell        | Alternativ     |
| ---------------------- | ------------- | -------------- |
| Lite repo              | GPT-5 Codex   | GPT-4o         |
| Stort repo             | GPT-5.1 Codex | GPT-5.1        |
| Multi-repo gap-analyse | GPT-5.1       | Gemini 2.5 Pro |

---

# 4. Agentstandarder (default modeller)

| Agent                            | Standardmodell    |
| -------------------------------- | ----------------- |
| Code Architect & Pair Programmer | GPT-5.1 Codex     |
| Quick Fix Agent                  | Grok Code Fast 1  |
| Repo Gap Analysis Agent          | GPT-5.1 Codex     |
| Backend Core Architect           | GPT-5.1           |
| MCP Server Architect             | GPT-5.1           |
| MAS Architecture Agent           | GPT-5.1           |
| Documentation Assistant          | Claude Sonnet 4.5 |
| Commit & PR Agent                | GPT-5.1 Codex     |
| Project Manager Agent            | GPT-5.1           |

---

# 5. Forenklet beslutningsregel

1. Start med **laveste fornuftige modell** (Mini/Haiku/Grok).
2. Hvis kvalitet faller → **GPT-5 Codex** eller **GPT-4o**.
3. Hvis kompleksitet øker → **GPT-5.1 Codex** (kode) eller **GPT-5.1** (arkitektur).
4. For dokumenter → **Claude Sonnet 4.5**.

---

# 6. Revisjon

- Dokumentet oppdateres **kvartalsvis** eller ved større modellendringer i VS Code.
