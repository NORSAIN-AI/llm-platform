# GPT Templates – NORSAIN GPT Platform

Denne mappen inneholder **templatesystemet** for `gpt-packages/`.
Templates er eneste kilde til sannhet for hvordan nye GPT-pakker blir generert og holdt NGAS-kompatible.

Mål med systemet:

- Gi TypeScript/mjs-scripts en **stabil kontrakt** for scaffolding, validering og index-generering.
- Tilby **standardiserte arketyper** (f.eks. `custom_gpt`) for nye GPT-pakker.
- Ha et **felles bibliotek** av gjenbrukbare instruction-, knowledge-, eval- og prompt-maler.

---

## 1. Begreper

- **GPT-pakke**
  En konkret pakke under `gpt-packages/<slug>/` med minst:
  - `gpt.json`
  - `actions/`
  - `instructions/`
  - `knowledge/`
  - eventuell `gpt_metadata/`, `README.md`, osv.

- **Template-root**
  En mappe under `gpt-packages/templates/` som representerer en **komplett GPT-pakke-mal**
  (en arketype som kan scaffoldes direkte). Eksempel: `custom_gpt/`.

- **Library-templates**
  Gjenbrukbare byggeklosser (eval-matriser, felles knowledge, prompts, osv.) under
  `gpt-packages/templates/_library/`. Disse er **ikke** komplette pakker alene.

- **Sandbox GPT-er**
  Midlertidige / eksperimentelle GPT-pakker under `gpt-packages/.sandbox/` som scripts kan overskrive.

---

## 2. Målstruktur i `gpt-packages/templates/`

```text
gpt-packages/
  templates/
    README.md                  # Denne filen

    custom_gpt/                # Standard arketype for nye GPT-pakker
      template.manifest.json   # Maskin-lesbar kontrakt for scripts
      gpt.json.template        # Base GPT-config (blir til gpt.json)
      gpt_metadata/            # Metadata-maler (UI og intern bruk)
        metadata_header.template.json
        (flere metadata-maler ved behov)
      actions/
        schema.template.json   # eller openapi.template.json
      instructions/            # NGAS 01–09-seksjoner
        01_identity.template.md
        02_purpose.template.md
        03_core_behaviour.template.md
        04_constraints.template.md
        05_safety.template.md
        06_output_rules.template.md
        07_interaction_rules.template.md
        08_ask_vs_infer.template.md
        09_end_rules.template.md
      knowledge/
        00.01_knowledge_index.template.md
        (opsjonelle ekstra base-knowledge-maler)

    _library/                  # Del-maler / byggeklosser
      instructions/
        generic_safety_block.template.md
        norwegian_output_rules.template.md
      knowledge/
        ngas_output_standards_v1.2.template.md
        norsain_language_tone_guide.template.md
      evals/
        eval_matrix.template.md
        eval_scenarios.template.md
        eval_log.template.md
      logs/
        gpt_generation_log.template.md
      prompts/
        build_custom_gpt.prompt.md
        extend_custom_gpt.prompt.md
        regenerate_instruction.prompt.md
```

Regler:

- En **template-root** (f.eks. `custom_gpt/`) skal alltid være en **komplett, scaffoldbar pakke-mal**.
- `_library/` inneholder **fragmenter**, ikke komplette pakker.
- Ingen ekte GPT-pakker eller sandbox-pakker skal ligge under `templates/`.

---

## 3. Filkonvensjoner

### 3.1. Template-filer

Alle filer som skal **renames ved scaffolding** bruker `.template.` som infiks i filnavnet:

- `gpt.json.template` → `gpt.json`
- `schema.template.json` → `schema.json`
- `01_identity.template.md` → `01_identity.md`
- `00.01_knowledge_index.template.md` → `00.01_knowledge_index.md`

Scripts kan trygt bruke regelen:

> «Fjern `.template` fra filnavn når du genererer en GPT-pakke.»

### 3.2. Placeholders inni filer

Templates kan inneholde placeholders som scaffolding-scripts må erstatte, f.eks.:

- `{{GPT_NAME}}`
- `{{GPT_SLUG}}`
- `{{GPT_DESCRIPTION}}`
- `{{OWNER}}`

Disse placeholders listes og beskrives i `template.manifest.json` i hver template-root.

---

## 4. `custom_gpt` – standard arketype

`custom_gpt/` er **standard-arketypen** for nye NORSAIN GPT-pakker.

Egenskaper:

- NGAS-kompatibelt instruksjonssett, delt i 9 seksjoner (`01_…`–`09_…`).
- Standard `gpt.json.template` med:
  - navn-/beskrivelses-placeholders,
  - fornuftige default-innstillinger for NORSAIN.
- Opsjonelle base-knowledge-maler:
  - `00.01_knowledge_index.template.md`
  - eventuelle delte knowledge-maler via `_library/`.

All oppførsel og alle begrensninger for denne arketypen beskrives i:

```text
gpt-packages/templates/custom_gpt/template.manifest.json
```

---

## 5. `_library` – felles byggeklosser

`_library/` inneholder **del-maler** som kan brukes på tvers av template-roots:

- `instructions/` – gjenbrukbare instruction-blokker (f.eks. felles safety-regler).
- `knowledge/` – felles knowledge-maler (f.eks. NGAS output standards, språk-/tone-guide).
- `evals/` – eval-matriser, scenarier og logg-maler.
- `logs/` – loggformat-maler.
- `prompts/` – builder-prompts (f.eks. «build_custom_gpt», «extend_custom_gpt»).

Template-roots (som `custom_gpt/`) kan deklarere hvilke library-filer som skal med som standard
via `library_includes` i `template.manifest.json`.

---

## 6. Konsept: hvordan scaffolding skal fungere

Typisk løp for et TypeScript/mjs-scaffolding-script:

1. **Velg template-root**
   - Default: `custom_gpt/`
   - Opsjon: annen template-root (senere), f.eks. `backend_core_architect/`

2. **Les manifest**
   - Last `template.manifest.json` fra valgt template-root.
   - Valider gjerne mot et schema i `templates/_system/template.manifest.schema.json` (hvis det finnes).

3. **Kopier template-tree**
   - Kopier template-root til enten:
     - `gpt-packages/.sandbox/<ny-slug>/` (eksperiment), eller
     - `gpt-packages/<ny-slug>/` (ekte pakke).

4. **Rename template-filer**
   - Fjern `.template`-infiks fra alle relevante filnavn.

5. **Erstatt placeholders**
   - Erstatt placeholders (f.eks. `{{GPT_NAME}}`, `{{GPT_SLUG}}`) slik det er definert i `template.manifest.json`.

6. **Inkluder library-templates**
   - Hvis `library_includes` er satt, kopier refererte library-filer inn i pakken
     (f.eks. standard eval-matrise, standard knowledge-blokker).

7. **Kjør validering**
   - Kjør `validate-gpt` for å sjekke f.eks.:
     - at NGAS-seksjoner finnes,
     - at antall knowledge-filer er innenfor begrensningene,
     - at `gpt.json` er gyldig,
     - andre regler fra manifestet.

---

## 7. Utvide templatesystemet

### 7.1. Ny template-root

For å legge til en ny arketype (f.eks. `backend_core_architect`):

1. Opprett `gpt-packages/templates/backend_core_architect/`.
2. Speil strukturen fra `custom_gpt/`:
   - `template.manifest.json`
   - `gpt.json.template`
   - `gpt_metadata/`
   - `actions/`
   - `instructions/`
   - `knowledge/`
3. Tilpass `template.manifest.json` til den nye rollen:
   - beskrivelse, constraints, påkrevde knowledge-filer, library_includes, osv.
4. Legg inn en kort beskrivelse av den nye template-rooten i denne README-filen.

### 7.2. Nye library-byggesteiner

For å legge til en gjenbrukbar snippet:

1. Plasser den i `_library/` under riktig undermappe.
2. Referer den ved behov fra `template.manifest.json` via `library_includes`.

---

Endringer i denne strukturen bør behandles som arkitekturbeslutninger og holdes i sync med
manifest-formatet, slik at scripts forblir stabile over tid.
