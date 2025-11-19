---
document_id: GOV-ML-002
title: Model Governance Dashboard
version: 1.0.0
status: Approved
owner: NORSAIN Engineering Governance
review_cycle: Quarterly
tags:
  - ai-governance
  - copilot
  - model-selection
  - engineering-standards
  - compliance
---

# Model Governance Dashboard

Dette dashboardet gir en samlet og kontinuerlig oversikt over alle AI-modeller, deres bruk i NORSAIN, kostnadsnivå, tilhørende agenter og revisjonsstatus.

Oppdateres kvartalsvis og ved større modellendringer i VS Code / GPT-økosystemet.

---

## 1. Oversikt over modeller i bruk (aktiv portefølje)

| Modell            | Type            | Kost       | Status | Kommentar                          |
| ----------------- | --------------- | ---------- | ------ | ---------------------------------- |
| GPT-5.1 Codex     | Code            | Høy        | Aktiv  | Primær for storskala refaktorering |
| GPT-5.1           | Generalist      | Medium/Høy | Aktiv  | Primær for arkitektur/resonnement  |
| GPT-5 Codex       | Code            | Medium     | Aktiv  | Standard for mindre repoer         |
| GPT-5             | Generalist      | Medium     | Aktiv  | Allround                           |
| GPT-5 Mini        | Generalist/Mini | Lav        | Aktiv  | Default for småting                |
| GPT-4o            | Multimodal      | Medium     | Aktiv  | Arkitektur + diagramforståelse     |
| GPT-4.1           | Generalist      | Lav        | Aktiv  | Prediktabel, lavkost               |
| Grok Code Fast 1  | Code            | Lav        | Aktiv  | Ekstremt rask                      |
| Raptor Mini       | Generalist/Mini | Lav        | Aktiv  | Drafts, raske notater              |
| Claude Haiku 4.5  | Text/Mini       | Lav        | Aktiv  | Kort dokumentasjon                 |
| Claude Sonnet 4.5 | Text/Longform   | Medium/Høy | Aktiv  | QMS/IMS-dokumentasjon              |
| Gemini 2.5 Pro    | Analysis        | Medium/Høy | Aktiv  | Stor kontekst & systemanalyse      |

---

## 2. Modellbruk per agent (Single Source of Truth)

| Agent                            | Primær modell     | Fallback                        | Oppgaveområde                            |
| -------------------------------- | ----------------- | ------------------------------- | ---------------------------------------- |
| Code Architect & Pair Programmer | GPT-5.1 Codex     | GPT-5 Codex / GPT-4o            | Kodearkitektur, refaktorering            |
| Quick Fix Code Agent             | Grok Code Fast 1  | GPT-5.1 Codex Mini / GPT-5 Mini | Små fixes                                |
| Repo Gap Analysis Agent          | GPT-5.1 Codex     | Gemini 2.5 Pro                  | Repo-struktur, kvalitetsanalyse          |
| Backend Core Architect           | GPT-5.1           | Gemini 2.5 Pro                  | Systemdesign, mikroservicearkitektur     |
| MCP Server Architect             | GPT-5.1           | GPT-5                           | Protokolldesign, dataflyt                |
| MAS Architecture Agent           | GPT-5.1           | GPT-5                           | Multi-agent systemer                     |
| Documentation Assistant          | Claude Sonnet 4.5 | GPT-5.1                         | Policies, prosedyrer, QMS-tekst          |
| Commit & PR Agent                | GPT-5.1 Codex     | GPT-5 Codex                     | Konvensjonelle commits & PR              |
| Project Manager Agent            | GPT-5.1           | GPT-5                           | Roadmaps, sprintplaner, PM-dokumentasjon |

---

## 3. Kostmatrise (per modell)

| Modell            | Kost (VS Code multiplier) | Anbefalt bruk          | Kommentar                  |
| ----------------- | ------------------------- | ---------------------- | -------------------------- |
| GPT-5.1 Codex     | 1x                        | Kompleks refaktorering | Høyeste kodepresisjon      |
| GPT-5.1           | 1x                        | Arkitektur, analyse    | Dyp resonnementsevne       |
| GPT-5 Codex       | 1x                        | Mellomstore repoer     | God, raskere enn 5.1 Codex |
| GPT-5             | 1x                        | Balansert arbeid       | Tekst + kode               |
| GPT-5 Mini        | 0x                        | Enkel utvikling        | Kost-effektiv              |
| GPT-4o            | 1x                        | Multimodal             | Diagrammer, UI analyser    |
| GPT-4.1           | 0.33x                     | Enkle oppgaver         | Lav kost                   |
| Grok Code Fast 1  | 0x–0.33x                  | Quick fixes            | Raskeste mod.              |
| Raptor Mini       | 0x                        | Drafts                 | Lite presisjon             |
| Claude Haiku 4.5  | 0.33x                     | Notater                | Beste mini-tekst           |
| Claude Sonnet 4.5 | 1x                        | QMS/IMS                | Beste longform             |
| Gemini 2.5 Pro    | 1x                        | Kompleks analyse       | Stor kontekst              |

---

## 4. Risikovurdering: Modellvalg vs. kvalitet

| Risiko                     | Beskrivelse              | Tiltak                                |
| -------------------------- | ------------------------ | ------------------------------------- |
| Overbruk av store modeller | Unødige kostnader        | Bruk Mini/Grok først                  |
| Underbruk av Codex         | Svak kodepresisjon       | Standardiser Codex for kodeagenter    |
| Feil modell i agent        | Ujevn kvalitet           | Sett `model:` eksplisitt i hver agent |
| Utdatert modell            | Fall i kvalitet over tid | Kvartalsvis revisjon                  |
| Ikke-dokumenterte modeller | Kan introdusere feil     | Alle modeller må ha `.md`-profil      |

---

## 5. Endringslogg for modellporteføljen (Quarterly)

| Dato    | Endring                                             | Kommentar          |
| ------- | --------------------------------------------------- | ------------------ |
| 2025-Q1 | Første etablering av full modellportefølje          | All models added   |
| 2025-Q2 | Codex ble standard for alle kodeagenter             | Økt presisjon      |
| 2025-Q3 | Sonnet 4.5 innført som standard for dokumentasjon   | ISO/QMS-forbedring |
| 2025-Q4 | Raptor Mini og GPT-5 Mini brukt for draft & lavkost | Kostoptimalisering |

Oppdateres løpende.

---

## 6. Governance-policy for modellvalg

1. Nye agenter må _spesifisere modell eksplisitt_.
2. Modell skal velges etter **“lavest fornuftig kost”**-prinsippet.
3. Endring av standardmodell krever godkjenning av Engineering Governance.
4. Modeller uten `.md`-profil i `docs/models/` skal ikke tas i bruk.
5. Modeller skal gjennomgås hver tredje måned.

---

## 7. Neste planlagte tiltak (Roadmap)

- Automatisert generering av `_sidebar.md` og `_index.md`.
- Dashboard integrert med repo-scan (scripts/generate-ai-dashboard.ts).
- KPI for modellbruk (per agent / per prosjekt).
- Logging av kost-per-agent i GitHub Actions.

# Slutt på dokument
