# Template Library for Custom GPTs

Dette biblioteket inneholder maler som brukes av skriptene i `scripts/` for å scaffolde
nye Custom GPT-pakker under `agents/`.

## Innhold og hensikt

- `custom_gpt/` — primær mal for å opprette en ny GPT-pakke. Inneholder standarder for
  `instructions/`, `actions/`, `knowledge/`, `gpt_metadata/` og eksempelprompter.
- `actions/` — generelle OpenAPI / actions-malfiler.
- `instructions/` — ferdig oppdelte instruksjonsseksjoner (`01_identity.template.md`, ...)
- `knowledge/` — tematiserte kunnskapsmaler organisert i undermapper (foundation, architecture,
  language-specific osv.).
- `evals/`, `logs/`, `prompts/` — eval- og logs-maler og hjelpeprompter for bygging og utvidelse.

## Hvordan scaffolderen bruker malene

- `scripts/scaffold-gpt.mts` (via `scripts/utils/scaffolding.mts`) kopierer malinnholdet fra
  `agents/templates/custom_gpt` (eller `agents/templates`) til `agents/<gpt-name>/`.
- Etter kopiering gjøres enkle erstatninger:
  - `[GPT Name]` i `instructions/main.md` erstattes med navnet du oppgir
  - `actions/schema.json` får oppdatert `info.title` og `info.description`
  - `gpt.json` oppdateres med `name`, `description`, `author`, `tags`, og `created`-timestamp

## Konvensjoner og anbefalinger

- Hold malfiler rene for hemmeligheter og credentials — aldri commit secrets.
- Knowledge-filer skal følge repo-konvensjonen: `NN.NN_snake_case.md` med YAML-frontmatter.
- Maks 20 knowledge-filer per GPT (repo-validering håndhever dette).
- Instruksjoner: bruk de eksisterende `01_...`–`09_...` templates som seksjoner i
  `instructions/main.md` for konsekvent struktur.

## Hvordan tilpasse malene

- Legg til nye templates under `agents/templates/custom_gpt` dersom du vil tilby flere
  ferdige komponenter (f.eks. ekstra actions eller domain-knowledge).
- Hvis du trenger andre erstatningsmønstre enn `[GPT Name]`, oppdater `scripts/utils/scaffolding.mts`
  og legg til dokumentasjon her.

## Utvikler-kommandoer (lokalt)

```bash
# Scaffold en ny GPT fra malene
npm run scaffold my-gpt -- --description "Kort beskrivelse" --tags "tag1,tag2"

# Valider strukturen
npm run validate my-gpt

# Generer knowledge index for en GPT
npm run generate-index my-gpt
```

## Tips for repo-eiere

- Hvis dere ønsker å bytte malstandard, oppdater `agents/templates/custom_gpt` —
  scaffolderen bruker denne mappen som førsteprioritet.
- Hold `agents/templates` synkron med eventuelle endringer i `scripts/utils/scaffolding.mts`.

## Lisens og ansvar

- Mallene er ment som utgangspunkt; ansvar for innhold, kvalitet og samsvar med interne
  retningslinjer ligger hos maintaineren av den enkelte GPT-pakke.

## Kontakt

- For spørsmål om mallene eller scaffolding-prosessen, åpne en issue eller kontakt NORSAIN
  Engineering Governance.
