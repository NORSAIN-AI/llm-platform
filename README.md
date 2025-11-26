# NORSAIN GPT Platform

Plattform for å scaffolde, validere og vedlikeholde Custom GPT-er med et TypeScript-basert verktøysett.

<!-- Badges -->

[![CI](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/ci.yml)
[![Tests](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/test-vitest.yml/badge.svg)](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/test-vitest.yml)
[![Auto PR](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/auto-pr.yml/badge.svg)](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/auto-pr.yml)
[![License: MIT](https://img.shields.io/github/license/NORSAIN-AI/norsain-gpt-platform)](LICENSE)
[![Node >=18](https://img.shields.io/badge/node-%3E=18.0.0-339933?logo=node.js)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/code%20style-Prettier-ff69b4?logo=prettier)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/lint-ESLint-4B32C3?logo=eslint)](https://eslint.org/)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#bidra)

## Kort oversikt

NORSAIN GPT Platform gjør det enkelt å:

- Scaffolde nye GPT-pakker fra en standard mal
- Validere at en GPT-pakke følger NGAS-konvensjonene (struktur, metadata, maks antall knowledge-filer)
- Generere kunnskapsindekser og hjelpe-artefakter

## Innholdsfortegnelse

- [Kort oversikt](#kort-oversikt)
- [Innhold i repoet](#innhold-i-repoet)
- [Forutsetninger](#forutsetninger)
- [Rask installasjon](#rask-installasjon)
- [Hurtigstart](#hurtigstart)
- [CLI-kommandoer](#cli-kommandoer-oversikt)
- [Dev-setup](#dev-setup)
- [CI / Validering](#ci--validering)
- [Bidra](#bidra)

## Innhold i repoet

Hovedstruktur (forkortet):

```text
norsain-gpt-platform/
├── gpt-packages/           # GPT-pakker (templates + instanser)
├── scripts/                # CLI-skript (.mts, ESM)
├── .github/                # workflows, prompts, agent-definisjoner
└── web/                    # framtidig frontend (Next.js)
```

## Forutsetninger

- Node.js >= 18
- npm (eksempler bruker `npm`) eller en kompatibel pakkehåndterer

## Rask installasjon

```bash
git clone https://github.com/NORSAIN-AI/norsain-gpt-platform.git
cd norsain-gpt-platform
npm install
```

## Hurtigstart

Scaffold, valider og generer index for en GPT-pakke:

```bash
# Opprett en GPT fra malen
npm run scaffold my-assistant \
  --description "En hjelpsom assistent" \
  --author "Ditt Navn" \
  --tags "helper,assistant,productivity"

# Valider en GPT (eller uten navn for alle)
npm run validate my-assistant

# Generer knowledge/index.md for en GPT
npm run generate-index my-assistant
```

## CLI-kommandoer (oversikt)

- `npm run scaffold <slug>` — Scaffold en ny GPT fra `gpt-packages/templates/custom_gpt`
- `npm run validate [slug]` — Valider struktur, metadata og antall knowledge-filer
- `npm run generate-index [slug]` — Lag/oppdater `knowledge/index.md`
- `npm run lint` — ESLint for `.ts`/`.mts`
- `npm run typecheck` — `tsc --noEmit`
- `npm run test` — Kjør testene (Vitest)
- `npm run preflight` — Lint + typecheck + test (bruk før PR)

## Dev-setup

Følg disse trinn for lokal utvikling og testing:

- Installer Node.js v18+ (bruk `nvm` eller tilsvarende for versjonshåndtering)
- Kjør `npm install` for å installere avhengigheter
- Kjør `npm run preflight` for lint, typecheck og tester før PR
- Kjør `npm run test` for enhetstester og `npm run lint` for statisk sjekk

## Makefile

For praktisk kjøring av repoets ofte brukte scripts tilbyr vi en `Makefile` i repo-root.
Den wrapper `npm`-scripts og små hjelpeskript slik at du enkelt kan kjøre felles arbeidsflyter.

Vanlige kommandoer:

```bash
# Vis hjelp for tilgjengelige targets
make help

# Lint, typecheck eller test
make lint
make typecheck
make test

# Full preflight (lint + typecheck + test)
make preflight

# Scaffold en ny GPT (bruk NAME=slug)
make scaffold NAME=my-new-gpt

# Oppdater repo-structure snapshot
make gen-repo-structure

# Serve docs (hurtig hjelp)
make docs-serve
```

Tips:

- Makefile bruker `npm run` hvor det er relevant, så kjør `npm install` før du bruker den.
- Make fungerer fint på Unix-lignende systemer; Windows-brukere kan bruke WSL eller kjøre `npm run` direkte.
- Makefile er lagt til i branch `chore/add-makefile` og finnes i `Makefile` i repo-roten.

## Kvalitetsregler (NGAS)

Kortversjon av viktige konvensjoner enforced av repoet:

- `gpt-packages/<slug>/` skal inneholde: `gpt.json`, `gpt_metadata/`, `instructions/`, `knowledge/`, `actions/`
- Maks 20 knowledge-filer per GPT
- Knowledge-filer skal ha navn som `NN.NN_snake_case.md` og obligatorisk YAML-frontmatter
- Instruksjonsfiler følger NGAS 01–09 (identity → end rules)
- Actions skal bruke OpenAPI 3.1 format

## CI / Validering

- `validate-gpts.yml` kjører validering på push/PR
- `auto-pr.yml` brukes for automatiserte PRs
- Kjør `npm run preflight` lokalt for å etterligne CI

## Utvikling og testing

Tips for bidragsytere:

```bash
# Lag en feature branch
git checkout -b feat/<kort-scope>-<kort-beskrivelse>

# Kjør preflight lokalt og fiks problemer
npm run preflight

# Stage og commit (Conventional Commits)
git add -A
git commit -m "feat: short description"
git push -u origin HEAD
```

## Bidra

Vi ønsker bidrag. Følg disse reglene for en rask review:

- Bruk Conventional Commits (`feat`, `fix`, `docs`, `chore`, `test`, osv.)
- Kjør `npm run preflight` før du oppretter en PR
- Hold PR-er små og fokuserte

## Sikkerhet og ansvar

- Ikke legg inn hemmeligheter i repoet eller i PR-er
- For sikkerhetsrelaterte problemer, åpne en privat issue og merk som `security`

## Lisens

MIT — se `LICENSE`.

## Kontakt og support

- Åpne en issue for spørsmål eller feil
- For større roadmap- eller arkitekturspørsmål, kontakt repo-eierne via organisasjonens kanaler

## Takk

Takk for at du bidrar! Dette repoet er ment som et robust verktøysett for å bygge og drifte Custom GPT-er i produksjon.
