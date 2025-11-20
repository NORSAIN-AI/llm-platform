# Planning – INDEX

Denne oversikten samler alle plan-/TODO-filer under `docs/planning/`.

Bruk dette som **eneste sannhetskilde** for:

- hvilke planer som finnes
- status på hver plan
- hvilke brancher som hører til hvilken plan

---

## Konvensjoner

- **ID**: `PL-n` (løpende nummer, f.eks. `PL-1`, `PL-2`, …).
- **Status**:
  - `open` – plan godkjent, men ingen aktiv branch.
  - `in-progress` – det jobbes aktivt / branch(er) finnes.
  - `done` – alle hovedoppgaver er ferdige og merget.
  - `archived` – plan er utdatert, beholdes kun for historikk.
- **Filnavn**: `TODOs-<kort-slug>.md`, f.eks. `TODOs-gpt-packages.md`.

Når du lager en ny planfil i `docs/planning/`:

1. Gi den en ny `id` i frontmatter.
2. Legg en rad inn i tabellen under.

---

## Planer

| ID   | Fil                   | Domene        | Status | Opprettet  | Sist oppdatert | Branch(er)                                                                                                                         |
| ---- | --------------------- | ------------- | ------ | ---------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| PL-1 | TODOs-gpt-packages.md | GPT-plattform | open   | 2025-11-20 | 2025-11-20     | refactor/gpt-packages-structure-v1; feat/templates-library-v1; refactor/scaffold-and-validate-gpt; docs/gpt-templates-usage-and-ci |

Legg til flere rader etter hvert som nye TODO-filer opprettes.

---

## Frontmatter-mal for TODO-filer

Bruk denne malen i toppen av hver `docs/planning/TODOs-*.md`:

```yaml
---
id: PL-X
title: <kort beskrivelse>
status: open # open | in-progress | done | archived
owner: NORSAIN Engineering
created: YYYY-MM-DD
updated: YYYY-MM-DD
branches:
  - <branch-navn-1>
  - <branch-navn-2>
---
```
