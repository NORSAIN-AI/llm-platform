---
title: "docs-root-overview"
status: "draft"
date: "2025-11-30"
authors: "platform-architecture"
tags:
  - documentation
  - structure
supersedes: ""
superseded_by: ""
---

# LLM Platform Documentation

## 1. Formål

Dette dokumentet beskriver rollen til `docs/`-mappen i `llm-platform` og
gir en oversikt over strukturen, konvensjonene og hvordan nye dokumenter
skal legges til.

`docs/` er Single Source of Truth (SoT) for:

- plattformens LLM- og GPT-relaterte dokumentasjon  
- standarder og retningslinjer for Custom GPT-er  
- agentspesifikke beskrivelser og operasjonsmodeller

## 2. Toppnivå-struktur

Toppnivået under `docs/` består av nummererte seksjoner (00–99) og én
egen mappe for maler (`_templates/`).

```text
docs/
  00-overview/
  01-ngas-standards/
  02-custom-gpt-design/
  03-gpt-packages/
  04-agents/
  05-operations/
  06-integrations/
  07-governance/
  08-models/
  09-planning/
  10-prompt-engineering-framework/
  11-testing/
  99-appendix/
  _templates/
```

Kort beskrivelse av hver hovedmappe:

- `00-overview/`
  Overordnet identitet og scope for `llm-platform`.

- `01-ngas-standards/`
  Pekere og sammendrag av NGAS-standarder som er relevante for
  LLM-plattformen.

- `02-custom-gpt-design/`
  Standarder for design, knowledge og actions for NORSAIN Custom GPT-er.

- `03-gpt-packages/`
  Struktur og livssyklus for GPT-pakker (sandbox, instances, archive,
  templates).

- `04-agents/`
  Dokumentasjon for hver agent (Custom GPT), med overview, instructions
  og knowledge-hierarchy.

- `05-operations/`
  Operasjonelle prosesser, for eksempel knowledge-flow og
  publiseringsrutiner.

- `06-integrations/`
  Integrasjoner mot eksterne systemer (GitHub, Notion, andre tjenester).

- `07-governance/`
  Styringsdokumenter, for eksempel model-governance-dashboard.

- `08-models/`
  Dokumentasjon for LLM-/GPT-modeller som brukes i plattformen.

- `09-planning/`
  Planleggingsdokumenter, sjekklister og TODO-er for videreutvikling.

- `10-prompt-engineering-framework/`
  Rammeverk for prompt engineering med egne underseksjoner
  (core, examples, templates, osv.).

- `11-testing/`
  Teststandarder og testrelatert dokumentasjon (for eksempel
  `vitest-standard`).

- `99-appendix/`
  Tillegg og støttedokumenter som ikke passer naturlig inn andre steder.

- `_templates/`
  Maler for nye dokumenter og agentbeskrivelser. Skal brukes som
  oppstartspunkt, men er ikke kildesannhet.

## 3. Frontmatter og filnavn

Alle normative dokumenter under `docs/` skal ha YAML-frontmatter
øverst i filen.

Standard frontmatter:

```yaml
---
title: "lowercase-kebab-case-title"
status: "draft"
date: "YYYY-MM-DD"
authors: "role-or-team"
tags:
  - documentation
supersedes: ""
superseded_by: ""
---
```

Regler:

- `title` skal være i lowercase og kebab-case uten mellomrom og kolon.
- `status` er normalt `draft` eller `active`.
- `authors` er en rolle eller et team, ikke nødvendigvis enkeltpersoner.
- `tags` kan utvides med relevante emner (for eksempel `standard`,
  `custom-gpt`, `agent`).

Filnavn:

- skal være i `kebab-case`, for eksempel:

  - `repo-identity-and-scope.md`
  - `custom-gpt-design-standard.md`
  - `platform-dev-architect-overview.md`

## 4. Headings og struktur

- Første heading i dokumentet skal være en `#`-heading (H1) etter
  frontmatter.

- H1 skal være en menneskelesbar tittel, for eksempel:

  ```markdown
  # NORSAIN Custom GPT – Designstandard
  ```

- Ingen hopp i heading-nivå (H1 → H3 er ikke tillatt).

- Én blank linje før nye headings og lister.

## 5. Bruk av `_templates`

Maler i `docs/_templates/` skal:

- følges når nye dokumenter opprettes
- kopieres til riktig nummerert mappe under `docs/`
- tilpasses dokumentets faktiske innhold

Eksempel på maler:

- `document-template.md` – generisk dokument
- `standard-template.md` – normative standarder
- `agent-overview-template.md` – agentoversikt
- `agent-instructions-template.md` – agentinstruksjoner (Layer B)
- `agent-knowledge-hierarchy-template.md` – knowledge-hierarchy for
  agenter

## 6. Hvordan legge til nye dokumenter

Når du oppretter et nytt dokument:

1. Velg riktig mappe under `docs/00–99/`.
2. Kopier en passende mal fra `docs/_templates/`.
3. Oppdater frontmatter:

   - sett korrekt `title` i lowercase + kebab-case
   - sett `date` til dagens dato
   - sett `authors` og relevante `tags`
4. Oppdater H1 og struktur i dokumentet.
5. Kjør lokal markdownlint dersom det er satt opp, og rett eventuelle
   avvik.

## 7. Site-konfigurasjon og infrastruktur

I tillegg til de nummererte dokumentseksjonene og `_templates/` finnes det noen filer i `docs/`-roten som kun brukes til visning og navigasjon på web (GitHub Pages/Docsify):

- `index.md` – forside for dokumentasjonen (site-index, følger frontmatter-standard)
- `_sidebar.md` – navigasjonsfil for Docsify (site-konfig, ikke SoT)
- `index.html` – entrypoint for Docsify/Pages (site-konfig, ikke SoT)
- `q_logo_512x512.svg` – logo brukt i Docsify/Pages (site asset)

Disse filene er **ikke** normative SoT-dokumenter, men nødvendig infrastruktur for visning og navigasjon. Bare `README.md` og `index.md` skal følge full dokumentstandard og markdownlint.
