# Copilot Workspace Instructions for NORSAIN GPT Platform

Dette dokumentet definerer hvordan GitHub Copilot skal arbeide i `norsain-gpt-platform`. Instruksjonene gjelder for hele kodebasen og styrer hvordan Copilot genererer, endrer og verifiserer filer.

---

## 1. Prosjektoversikt

`norsain-gpt-platform` er et TypeScript-basert rammeverk for å utvikle og administrere Custom GPT-er. Plattformen brukes til:

- å scaffold’e nye GPT-er
- vedlikeholde standardiserte kunnskapsfiler
- validere GPT-strukturer
- generere kunnskapsindekser
- forberede integrasjon med en fremtidig agent-builder webapp

Repoet følger en fast NGAS-arkitektur i kjerneområdene, med fleksibilitet for støtte- og frontend-mapper.

---

## 2. Repoarkitektur (kjerneområder)

Copilot skal være **streng** på struktur i disse delene av repoet:

```text
agents/
 └── custom_gpt_template/
      ├── instruction.md
      ├── README.md
      ├── openapi.json
      ├── changelog.md
      └── knowledge/
          ├── 00.00_index.md
          ├── 00.01_norsain_language_tone_guide.md
          ├── 00.02_chunking_standards.md
          ├── 00.03_output_standards.md
          ├── 00.04_ngas_gpt_core_summary.md
          ├── 01.01_ngas_overview.md
          ├── 01.02_infuse_model.md
          ├── 01.03_gpt_lifecycle.md
          ├── 02.01_builder_method.md
          ├── 02.02_instruction_design.md
          ├── 02.03_systemprompt_token_guideline.md
          ├── 03.01_templates.md
          ├── 04.01_examples.md
          └── 05.01_references.md

scripts/
  ├── scaffold-gpt.mts
  ├── validate-knowledge.mts
  ├── update-knowledge-index.mts
  └── utils/
```

I **disse** mappene skal Copilot ikke foreslå alternative strukturer eller flytte på filtyper.

---

## 3. Fleksible områder i repoet

Copilot skal vite at følgende er **tillatt og fleksibelt**:

- `docs/` – ekstra dokumentasjon, ADR-er, arkitekturnotater
- `web/` – fremtidig Next.js/Vercel-app, UI, API-routes, etc.
- `infra/`, `.vscode/`, `config/` og lignende støtte-mapper

I slike mapper kan Copilot:

- foreslå nye filer
- justere struktur etter vanlig beste praksis
- bruke standard TypeScript/Next.js/Node-mønstre

Så lenge det ikke bryter med NGAS-regler for `agents/` og `scripts/`.

---

## 4. Konvensjoner Copilot må følge i knowledge

### 4.1 Filnavn for kunnskapsfiler

Alle filer i `agents/<gpt>/knowledge/` skal ha navnet:

```text
NN.NN_snake_case.md
```

Der:

- 00.xx = Core NGAS
- 01.xx = NGAS Architecture
- 02.xx = Builder Methodology
- 03.xx = Templates
- 04.xx = Examples
- 05.xx = References

### 4.2 Metadata (obligatorisk)

Alle kunnskapsfiler skal ha YAML-frontmatter:

```yaml
---
document_id: NGAS-XXX-IDENTIFIER
title: <Human readable title>
version: 1.0
status: draft | approved | deprecated
owner: ROLE-XXX – <rolle>
category: <kategori>
last_reviewed: YYYY-MM-DD
next_review: YYYY-MM-DD
tags: [tag1, tag2]
---
```

Hvis frontmatter mangler, skal Copilot legge det inn.

---

## 5. Regler per filtype

### 5.1 Knowledge-filer (00–05)

Copilot skal:

- følge metadata-reglene
- bruke riktig filnavn
- ha ett hovedtema per fil
- bruke H1–H3
- skrive profesjonelt, presist og uten emojis
- følge chunking-standarder definert i `00.02_chunking_standards.md`

### 5.2 Instruction-filer

Strukturen skal være:

1. Identity & Purpose
2. Scope
3. Behaviour Rules
4. Constraints
5. Safety Rules
6. Signal–Response Patterns
7. Output Requirements

Instruksjonen skal være systemorientert, presis og uten narrativ tekst.

### 5.3 Action-filer

Filene i `actions/` eller `openapi.json` skal være:

- gyldig JSON
- OpenAPI 3.1
- minimal og modellvennlig
- inneholde paths, operationId, request/response og schemas

Custom actions skal alltid bruke OpenAPI 3.1-skjemaer.
`openapi.json` og eventuelle `actions/*.json` fungerer som referanseeksempler.

### 5.4 Eval-filer

Eval-filer skal inneholde:

- scenario
- user input
- expected behaviour
- NGAS rules
- success/failure criteria

---

## 6. Scriptforståelse

Copilot skal kjenne til og foreslå bruk av:

```text
npm run scaffold <name>
npm run knowledge:validate
npm run knowledge:index
npm run lint
npm run format
npm run typecheck
```

Skript brukes som en del av utviklingsflyten og skal ikke erstattes.

---

## 7. Språk og tone

Copilot skal:

- bruke samme språk som filen (standard: norsk)
- skrive profesjonelt, objektivt og teknisk
- unngå emojis og uformelt språk
- bruke korte, klare setninger og tydelig struktur

---

## 8. Forbudte mønstre i kjerneområder

I `agents/` og `scripts/` skal Copilot ikke:

- generere mer enn 20 kunnskapsfiler for en GPT
- endre NGAS-kjernefiler uten eksplisitt instruksjon
- foreslå nye undermapper i `knowledge/`
- blande kunnskapsinnhold inn i instruksjonsfiler
- skrive kreativ eller narrativ tekst

---

## 9. Godkjente referansefiler

Copilot kan bruke disse som base for struktur og stil:

- `00.01_norsain_language_tone_guide.md`
- `00.02_chunking_standards.md`
- `00.03_output_standards.md`
- `02.01_builder_method.md`
- `03.01_templates.md`

---

## 11. OpenAPI og Action-konvensjoner

Custom actions skal bruke OpenAPI 3.1-skjemaer. Se våre malfiler i `agents/_template/schema.json` for referanse.

Når Copilot genererer eller redigerer en action-fil skal den:

- sikre gyldig JSON
- sikre at formatet følger OpenAPI 3.1
- inkludere minst: `paths`, `operationId`, `requestBody` eller `parameters`, `responses`, og relevante `schemas`
- angi hvilke verktøy eller API-kall som er relevante for agenten
- flagge brudd på OpenAPI eller interne standarder

---

## 12. Arbeidsflytforbedringer og beste praksis for AI-agenter

Copilot bør aktivt støtte følgende praksiser:

### Følg kjerne-struktur

- `agents/` skal inneholde GPT-pakker
- `scripts/` skal inneholde CLI-verktøy
- Struktur skal ikke endres uten eksplisitt instruksjon

### Bruk eksisterende scripts

Copilot skal foreslå bruk av:

```bash
npm run scaffold <name>
npm run knowledge:validate
npm run knowledge:index
npm run lint
npm run format
npm run typecheck
```

Dersom skriptnavn avviker, skal Copilot foreslå aliaser for konsistens.

### Valider før commit

Copilot bør foreslå validering ved endringer i `agents/knowledge/` eller `scripts/`.

Eksempel:

```bash
npm run knowledge:validate
```

### Dokumenter endringer

Ved nye GPT-mapper eller strukturelle endringer skal Copilot minne om å oppdatere:

- `agents/<gpt>/README.md`
- `.github/prompts/`
- `docs/`
- andre relevante konfigurasjonsfiler

---

## 13. Mål

Copilot skal bidra til:

- korrekt struktur i kjerneområdene (`agents/`, `scripts/`)
- fleksibel, men ryddig struktur i støtteområder (`docs/`, `web/`, etc.)
- konsistente kunnskapsfiler etter NGAS-standard
- kvalitetssikrede GPT-er klare for produksjon
- høy standard i alle filer og mapper

---
