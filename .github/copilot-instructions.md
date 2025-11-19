Kort sagt: nei, du *må* ikke ha den detaljerte filstrukturen der. Den var kun for å “fryse” én veldig spesifikk mal. Hvis du vil ha mer fleksibilitet i hvilke enkeltfiler som finnes, bør vi heller beskrive **konsepter og mapper**, ikke hele treet.

Jeg har derfor tatt ut hele den lange `custom_gpt_template`-lista og erstattet den med en mer generell kjerne-struktur. Resten av dokumentet er beholdt så langt som mulig.

Under er en **oppdatert versjon** av `copilot-instructions.md` der kun §2 er ryddet opp, og resten er justert minimalt for å være konsistent.

---

````markdown
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
  _template/            # base-mal for nye GPT-pakker (navn kan variere)
    instructions/
    knowledge/
    actions/
    gpt.json
  <gpt_name>/           # konkrete GPT-pakker
    instructions/
    knowledge/
    actions/
    gpt.json

scripts/
  scaffold-gpt.mts
  validate-*.mts
  update-*.mts
  generate-*.mts
  utils/
````

Regler for disse områdene:

* Copilot skal ikke foreslå helt nye toppnivå-mapper her.
* Copilot skal ikke flytte filtyper ut av sine områder (instructions → instructions/, knowledge → knowledge/, osv.).
* Strukturen i `agents/_template/` (eller tilsvarende malmappe) skal behandles som **fasit** for hvordan nye GPT-pakker bygges, men uten å låse hvilke konkrete knowledge-filer som må finnes.

---

## 3. Fleksible områder i repoet

Copilot skal vite at følgende er **tillatt og fleksibelt**:

* `docs/` – ekstra dokumentasjon, ADR-er, arkitekturnotater
* `web/` – fremtidig Next.js/Vercel-app, UI, API-routes, etc.
* `infra/`, `.vscode/`, `config/` og lignende støtte-mapper

I slike mapper kan Copilot:

* foreslå nye filer
* justere struktur etter vanlig beste praksis
* bruke standard TypeScript/Next.js/Node-mønstre

Så lenge det ikke bryter med NGAS-regler for `agents/` og `scripts/`.

---

## 4. Konvensjoner Copilot må følge i knowledge

### 4.1 Filnavn for kunnskapsfiler

Alle filer i `agents/<gpt>/knowledge/` skal ha navnet:

```text
NN.NN_snake_case.md
```

Der:

* 00.xx = Core NGAS
* 01.xx = NGAS Architecture
* 02.xx = Builder Methodology
* 03.xx = Templates
* 04.xx = Examples
* 05.xx = References

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

* følge metadata-reglene
* bruke riktig filnavn
* ha ett hovedtema per fil
* bruke H1–H3
* skrive profesjonelt, presist og uten emojis
* følge chunking-standarder definert i `00.02_chunking_standards.md`

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

* gyldig JSON
* OpenAPI 3.1
* minimal og modellvennlig
* inneholde paths, operationId, request/response og schemas

Custom actions skal alltid bruke OpenAPI 3.1-skjemaer.
`openapi.json` og eventuelle `actions/*.json` fungerer som referanseeksempler.

### 5.4 Eval-filer

Eval-filer skal inneholde:

* scenario
* user input
* expected behaviour
* NGAS rules
* success/failure criteria

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

* bruke samme språk som filen (standard: norsk)
* skrive profesjonelt, objektivt og teknisk
* unngå emojis og uformelt språk
* bruke korte, klare setninger og tydelig struktur

---

## 8. Forbudte mønstre i kjerneområder

I `agents/` og `scripts/` skal Copilot ikke:

* generere mer enn 20 kunnskapsfiler for en GPT
* endre NGAS-kjernefiler uten eksplisitt instruksjon
* foreslå nye undermapper i `knowledge/`
* blande kunnskapsinnhold inn i instruksjonsfiler
* skrive kreativ eller narrativ tekst

---

## 9. Godkjente referansefiler

Copilot kan bruke disse som base for struktur og stil (dersom de finnes i knowledge-mappen):

* `00.01_norsain_language_tone_guide.md`
* `00.02_chunking_standards.md`
* `00.03_output_standards.md`
* `02.01_builder_method.md`
* `03.01_templates.md`

---

## 10. Developer Workflows

### Build and Test

* Use `npm run preflight` for full validation: linting, type checking, and GPT validation.
* Run `npm run lint` for ESLint checks on .ts/.mts files.
* Run `npm run typecheck` for TypeScript compilation without emit.
* Run `npm run format` to format code with Prettier (includes .ts, .mts, .json, .md).
* Run `npx -y markdownlint-cli2 "**/*.md"` for markdown linting (ignores node_modules/, reports/, etc. via .markdownlintignore).

### GPT Development

* Scaffold new GPTs: `npm run scaffold <gpt-name>` (e.g., `npm run scaffold my-new-gpt`).
* Validate GPT structures: `npm run validate`.
* Generate knowledge indexes: `npm run generate-index`.

### Debugging

* Use `tsx` for running TypeScript scripts directly (e.g., `tsx scripts/scaffold-gpt.mts`).
* Check GPT validation errors in terminal output; refer to `scripts/validate-gpt.mts` for logic.

---

## 11. Dependencies and Tools

* **TypeScript**: Core language, configured in `tsconfig.json` with strict settings.
* **Node.js**: >=18.0.0, uses ES modules (`"type": "module"` in package.json).
* **Prettier**: For code formatting; config in `.prettierrc`.
* **ESLint**: For linting; config in `.eslintrc.json` with TypeScript rules.
* **markdownlint-cli2**: For markdown standards; config in `.markdownlint.jsonc`, ignore in `.markdownlintignore`.
* **tsx**: For running TypeScript files directly in development.
* **Husky**: For git hooks (pre-commit setup in `.husky/_/pre-commit`).

External integrations: Future webapp in `web/` using Next.js/Vercel; OpenAI APIs for GPT interactions.

---

## 12. OpenAPI og Action-konvensjoner

Custom actions skal bruke OpenAPI 3.1-skjemaer. Se malfiler i GPT-malen under `actions/` eller `openapi.json` for referanse.

Når Copilot genererer eller redigerer en action-fil skal den:

* sikre gyldig JSON
* sikre at formatet følger OpenAPI 3.1
* inkludere minst: `paths`, `operationId`, `requestBody` eller `parameters`, `responses`, og relevante `schemas`
* angi hvilke verktøy eller API-kall som er relevante for agenten
* flagge brudd på OpenAPI eller interne standarder

---

## 13. Arbeidsflytforbedringer og beste praksis for AI-agenter

Copilot bør aktivt støtte følgende praksiser:

### Følg kjerne-struktur

* `agents/` skal inneholde GPT-pakker
* `scripts/` skal inneholde CLI-verktøy
* Struktur skal ikke endres uten eksplisitt instruksjon

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

* `agents/<gpt>/README.md`
* `.github/prompts/`
* `docs/`
* andre relevante konfigurasjonsfiler

---

## 14. Mål

Copilot skal bidra til:

* korrekt struktur i kjerneområdene (`agents/`, `scripts/`)
* fleksibel, men ryddig struktur i støtteområder (`docs/`, `web/`, etc.)
* konsistente kunnskapsfiler etter NGAS-standard
* kvalitetssikrede GPT-er klare for produksjon
* høy standard i alle filer og mapper

---

## 15. Samspill med Copilot Agents og Chat Instructions

Dette repoet bruker tre lag med AI-styring:

1. **Global Copilot-instruks (denne filen)**

   * Gjelder hele repoet.
   * Definerer NGAS-regler, struktur, konvensjoner og workflows.

2. **Chat Instructions (`.github/chat/*.chat.md`)**

   * Gjelder spesifikke områder via `applyTo` (f.eks. `agents/**`, `scripts/**`).
   * Overstyrer global oppførsel i chat for det området.
   * Brukes til å definere hvordan svar skal struktureres, når AI skal be om avklaring, og hvilke konvensjoner som gjelder lokalt.

3. **Copilot Agents (`.github/agents/*.agent.md`)**

   * Definerer spesialiserte agenter (f.eks. Repo Builder Agent) med eget mandat, verktøy og forventet output.
   * Når en agent brukes, skal Copilot følge både:

     * mandatet i agent-filen, og
     * reglene i denne filen for struktur, NGAS og sikkerhet.

Copilot skal alltid:

* følge denne globale instruksjonen som baseline
* respektere Chat Instructions der de matcher `applyTo`
* følge agent-mandatet når en spesifikk agent er aktiv

```
