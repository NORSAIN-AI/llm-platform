# Planning – Oversikt

Denne mappen samler alle plan- og TODO-relaterte filer for
`llm`. Målet er å ha ett konsistent system for:

- hvilke planer som finnes
- hvordan arbeidspakker defineres og følges opp
- hvordan TODO-oppgaver kobles til brancher og PR-er

`docs/planning/` er ment å være single source of truth for planverk
på tvers av repoet.

---

## Filtyper i `docs/planning/`

Mappen inneholder tre hovedtyper filer:

- `README.md`
  Denne filen. Forklarer struktur, konvensjoner og arbeidsflyt.

- `INDEX.md`
  Register over alle planfiler (`TODOs-*.md`).
  Brukes til å se:
  - hvilke plan-filer som finnes
  - status per plan (PL-\*)

- `CHECKLIST.md`
  Topplinje-oversikt over arbeidspakker på tvers av planene.
  Brukes til å se:
  - hvilke arbeidspakker som er åpne (GP1, GP2, …)
  - hvilken TODO-fil og seksjon de tilhører
  - status, branch og PR per arbeidspakke

- `TODOs-*.md`
  Domene-spesifikke TODO-filer, for eksempel:
  - `TODOs-gpt-packages.md`
  - `TODOs-agents.md`
  - `TODOs-copilot.md`
    Disse inneholder detaljoppgaver per arbeidspakke (GPx) innenfor et
    gitt domene.

---

## ID-konvensjoner: `PL-*` og `GP*`

Systemet bruker to nivåer med ID-er:

- **PL-\*** – plan-ID
  - Defineres per `TODOs-*.md`.
  - Registreres i `INDEX.md`.
  - Legges også i frontmatter i den aktuelle `TODOs-*.md`.

- **GP\*** – arbeidspakke-ID
  - Defineres per større jobb innenfor en plan.
  - Registreres i `CHECKLIST.md`.
  - Har en matchende seksjon i en `TODOs-*.md`-fil.

Eksempel:

- `PL-1` → `docs/planning/TODOs-gpt-packages.md`
- `GP1`, `GP2`, `GP3` → egne seksjoner inne i `TODOs-gpt-packages.md`,
  og egne rader i `CHECKLIST.md`.

---

## INDEX.md – planregister

`INDEX.md` gir oversikt over planfiler og deres status.

- Én rad per planfil (`TODOs-*.md`).
- ID-kolonnen bruker `PL-*`.
- Status-kolonnen beskriver planen som helhet:
  - `open` – plan godkjent, ingen aktiv branch ennå
  - `in-progress` – det jobbes aktivt med planen
  - `done` – hovedoppgaver ferdige og merget
  - `archived` – utdatert plan, beholdes for historikk

Når du oppretter en ny `TODOs-*.md`:

1. Gi filen frontmatter med ny `id: PL-X`.
2. Legg inn en ny rad for `PL-X` i tabellen i `INDEX.md`.

---

## CHECKLIST.md – arbeidspakker på tvers

`CHECKLIST.md` gir status på konkrete arbeidspakker (GP\*) på tvers av
alle planene.

- Én rad per arbeidspakke (GP1, GP2, …).
- Hver rad peker til:
  - riktig `TODOs-*.md`
  - relevant seksjon (for eksempel `## GP3 – …`)
- Status brukes for arbeidspakken:
  - `not-started`
  - `in-progress`
  - `in-review`
  - `done`
  - `parked`

Når du definerer en ny arbeidspakke:

1. Opprett en `## GPx – …`-seksjon i riktig `TODOs-*.md`.
2. Legg inn en ny rad i `CHECKLIST.md` for GPx.

---

## TODOs-\*.md – domene-spesifikke TODO-lister

Hver `TODOs-*.md`-fil beskriver oppgaver for ett domene.

Eksempler på domener:

- `TODOs-gpt-packages.md` – arbeid på `gpt-packages/**`
- `TODOs-agents.md` – arbeid på `.github/agents/**`
- `TODOs-copilot.md` – arbeid på `copilot-instructions.md` og tilhørende filer

Struktur inne i filen:

- Frontmatter med `id: PL-X`, tittel, status, owner, datoer og branches.
- Flere seksjoner på formen:

```md
## GP1 – Kort beskrivelse av arbeidspakken

### Målbilde

...

### Domene-pakker

...

### Branch-strategi

...

### Commit-plan

...

### TODO-liste

- [ ] Konkret oppgave 1
- [ ] Konkret oppgave 2
```

Ny arbeidspakke i samme domene = ny `## GPx`-seksjon i _samme_ fil,
ikke en ny TODO-fil.

---

## Samspill med Dev TODO Planner-agenten

Agenten `dev_todo_planner.agent.md` er ansvarlig for å:

- analysere endringsønsker
- foreslå:
  - målbildet
  - domene-pakker
  - branch-strategi
  - commit-plan
  - TODO-liste som kan limes inn i `TODOs-*.md`

Når agenten brukes til å planlegge arbeid:

- Nye arbeidspakker legges inn som nye `## GPx`-seksjoner i riktig
  `TODOs-*.md`.
- `CHECKLIST.md` oppdateres med en rad per GPx.
- `INDEX.md` oppdateres kun når det opprettes en ny planfil
  (`TODOs-*.md`).

Agenten skal **ikke** opprette duplikate `TODOs-*.md`-filer med samme
navn; den skal alltid oppdatere eksisterende fil hvis domenet finnes.

---

## Lint- og format-prinsipper for denne mappen

For å unngå markdownlint-støy:

- Bruk én hovedoverskrift (`# …`) per fil.
- Ha tom linje etter overskrifter og før/etter code fences.
- Hold tekstlinjer rimelig korte (wrap om nødvendig).
- Bruk konsistente code fences med tre backticks (```).
- Unngå flere top-level headings i samme fil der MD025 slår inn.

Hvis du må avvike fra en regel av gode grunner (f.eks. i
prompt-filer), vurder å konfigurere unntak i markdownlint og dokumenter
det i repoets lint-oppsett, ikke her.
