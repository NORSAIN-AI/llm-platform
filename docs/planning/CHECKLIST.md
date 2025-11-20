# NORSAIN GPT Platform – Planning Checklist

Denne sjekklisten gir et overblikk over arbeidspakker som beskrives i
`docs/planning/TODOs-*.md`. Hver rad peker til én TODO-fil (og ev. seksjon)
og statusen for den jobben.
Bruk:

- Opprett ny rad når du lager en ny TODO-fil eller en ny større jobb i en eksisterende TODO-fil.
- Oppdater **Status**, **Branch/PR** og **Sist oppdatert** når arbeidet går fremover.
- Når en jobb er helt ferdig (merged), settes status til `done` og PR lenkes inn.

## Statuskoder

- `not-started` – TODO definert, ingen branch opprettet
- `in-progress` – branch opprettet / arbeidet pågår
- `in-review` – PR åpen / til gjennomgang
- `done` – PR merget og TODO-er lukket
- `parked` – satt på pause / venter på noe annet

---

## Oversikt

- GP1 — GPT templates – struktur v1
  - TODO-fil: `docs/planning/TODOs-gpt-packages.md`
  - Status: `in-review`
  - Branch / PR: `refactor/gpt-templates-structure-v1`
  - Eier: ⚠️ TODO
  - Sist oppdatert: 2025-11-20

- GP2 — Templates library v1
  - TODO-fil: `docs/planning/TODOs-gpt-packages.md`
  - Status: `not-started`
  - Branch / PR: `feat/templates-library-v1`
  - Eier: ⚠️ TODO
  - Sist oppdatert: 2025-11-20

- GP3 — Scaffold + validate – manifest & NGAS
  - TODO-fil: `docs/planning/TODOs-gpt-packages.md`
  - Status: `in-progress`
  - Branch / PR: `refactor/scaffold-and-validate-gpt`
  - Eier: ⚠️ TODO
  - Sist oppdatert: 2025-11-20

- GP4 — Copilot instructions v2
  - TODO-fil: `docs/planning/TODOs-copilot.md`
  - Status: `done`
  - Branch / PR: `docs/copilot-instructions-v2` (PR #??)
  - Eier: ⚠️ TODO
  - Sist oppdatert: 2025-11-20

- GP5 — Agent-sett v2 (repo/instruction/knowledge)
  - TODO-fil: `docs/planning/TODOs-agents.md`
  - Status: `in-progress`
  - Branch / PR: `refactor/agents-v2`
  - Eier: ⚠️ TODO
  - Sist oppdatert: 2025-11-20

> Juster ID-er, datoer, branch-navn og TODO-filnavn til faktisk repo-status.

---

## Retningslinjer

- **Én rad per jobb**, ikke per enkelt-oppgave i TODO-filene.
- ID bør være stabil (GP1, GP2, …) slik at den kan brukes i PR-beskrivelser og issues.
- **TODO-fil**-kolonnen skal alltid ha en konkret sti:
  - f.eks. `docs/planning/TODOs-gpt-packages.md#scaffolding-and-validation`.
- Når en jobb er `done`:
  - Oppdater status
  - Legg inn PR-lenke
  - Marker de relevante oppgavene som fullført i den tilhørende TODO-filen.

---

## Samspill med TODO-filer

- `INDEX.md` → peker på _hvilke_ TODO-filer som finnes.
- `TODOs-*.md` → beskriver _detaljerte oppgaver_ per domene.
- `CHECKLIST.md` → gir _topplinje-status_ på tvers av alle TODO-filer.

---

## Samspill og oppdateringer

- Oppdater `docs/planning/INDEX.md` hvis du oppretter en ny TODO-fil, så den blir synlig i indeksen.
- Når du oppdaterer status i `CHECKLIST.md`, vurder også å oppdatere TODO-filen og PR-beskrivelse.
