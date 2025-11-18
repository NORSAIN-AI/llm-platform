# NORSAIN GPT Platform

Plattform for å utvikle og drifte Custom GPT-er med TypeScript-baserte verktøy for scaffolding, validering og indeksgenerering.

<!-- Badges -->

[![CI – Validate GPTs](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/validate-gpts.yml/badge.svg)](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/validate-gpts.yml)
[![Auto PR](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/auto-pr.yml/badge.svg)](https://github.com/NORSAIN-AI/norsain-gpt-platform/actions/workflows/auto-pr.yml)
[![License: MIT](https://img.shields.io/github/license/NORSAIN-AI/norsain-gpt-platform)](LICENSE)
[![Node >=18](https://img.shields.io/badge/node-%3E=18.0.0-339933?logo=node.js)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/code%20style-Prettier-ff69b4?logo=prettier)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/lint-ESLint-4B32C3?logo=eslint)](https://eslint.org/)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#bidra)

## Oversikt

Strukturert plattform for å bygge og vedlikeholde Custom GPT-er med:

## Arkitektur og mappestruktur

```text
norsain-gpt-platform/
├── agents/                 # GPT-pakker (template + instanser)
│   ├── _template/          # Basemal for nye GPT-er
│   │   ├── instructions/   # System-/rolle-instruksjon
│   │   ├── actions/        # OpenAPI 3.1-skjemaer
│   │   ├── knowledge/      # Kunnskapsfiler (≤ 20)
│   │   └── gpt.json        # Meta og struktur
│   └── <gpt-navn>/         # Konkrete GPT-installasjoner
├── scripts/                # TypeScript-CLI (ESM .mts)
│   ├── scaffold-gpt.mts    # Scaffold ny GPT fra template
│   ├── validate-gpt.mts    # Valider GPT-struktur og teller
│   ├── generate-index.mts  # Generer knowledge/index.md
│   └── utils/              # Delte utilmoduler
├── .github/                # GitHub-konfig, prompts og workflows
│   ├── prompts/            # Commit/PR/branch-prompter
│   └── workflows/          # CI/CD (validate-gpts, auto-pr)
└── web/                    # Fremtidig Next.js/Vercel-app
```

## Forutsetninger

- Node.js `>=18.0.0`
- npm (eller pnpm/yarn – eksempelene bruker npm)

## Installering

```bash
git clone https://github.com/NORSAIN-AI/norsain-gpt-platform.git
cd norsain-gpt-platform
npm install
```

## Hurtigstart

Opprett en ny GPT fra mal og generer indeks:

```bash
# Scaffold ny GPT
npm run scaffold my-assistant \
  --description "En hjelpsom assistent" \
  --author "Ditt Navn" \
  --tags "helper,assistant,productivity"

# Valider GPT-struktur
npm run validate my-assistant

# Generer knowledge/index.md
npm run generate-index my-assistant
```

## CLI-skript

- `npm run scaffold <navn>`: Oppretter ny GPT fra `agents/_template`
- `npm run validate [navn]`: Validerer en spesifikk eller alle GPT-er
- `npm run generate-index [navn]`: Lager `knowledge/index.md`
- `npm run lint`: ESLint-kjøring for `.ts/.mts`
- `npm run format`: Kodeformattering med Prettier
- `npm run typecheck`: TypeScript typekontroll
- `npm run preflight`: Lint + typecheck + validate i ett steg

## Kvalitetsregler (NGAS)

- Streng struktur i `agents/` og `scripts/` – ikke fravik uten eksplisitt behov
- Kunnskapsfiler i `agents/<gpt>/knowledge/`:
  - Maks 20 filer pr. GPT
  - Filnavn: `NN.NN_snake_case.md`
  - YAML-frontmatter er påkrevd
- Actions skal være gyldig OpenAPI 3.1 med tydelige `schemas`
- Bruk eksisterende script-kommandoer ved utvikling og validering

## CI/CD-workflows

- `validate-gpts.yml`: Kjører GPT-validering (struktur og filantall) ved push/PR
- `auto-pr.yml`: Automatiserer PR-oppgaver (der relevant)

Statusbadger vises øverst i README og lenker til workflow-kjøringer.

## Vanlige oppgaver

Opprette ny GPT:

```bash
npm run scaffold sales-assistant --description "Selgerstøtte" --tags "sales,b2b"
```

Validere alt innhold:

```bash
npm run validate
```

Generere index for alle GPT-er:

```bash
npm run generate-index
```

Preflight før PR:

```bash
npm run preflight
```

## Bidra

1. Opprett branch: `feat/<kort-scope>-<kort-beskrivelse>` (små bokstaver, kebab-case)
2. Gjør endringer i tråd med NGAS og scripts
3. Kjør `npm run preflight` og fix evt. feil
4. Push branch og opprett PR

Eksempel:

```bash
git checkout -b feat/docs-readme-badges
git add -A
git commit -m "docs: oppdater README med badges og struktur"
git push -u origin feat/docs-readme-badges
```

## Lisens

MIT – se [`LICENSE`](LICENSE).

## Support

Åpne en issue i repoet ved spørsmål eller feil.
