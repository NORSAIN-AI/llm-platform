# gpt-packages/instances

Denne mappen inneholder alle **aktive GPT-pakker** i NORSAIN sitt `llm`-repo.  
Kun GPT-er som faktisk er i bruk (eller planlegges tatt i bruk) skal ligge her.

## Formål

- Samle alle aktive/«prod-nære» GPT-pakker på ett sted.
- Skille tydelig mellom:
  - aktive GPT-er (`instances/`)
  - eksperimentelle GPT-er (`.sandbox/`)
  - historiske/parkede GPT-er (`.archive/`).
- Gjøre det enkelt å se hvilke GPT-er som er relevante nå.

## Struktur

Hver underkatalog i `instances/` er én GPT-pakke med fast struktur:

```
gpt-packages/
  instances/
    <gpt-slug>/
      gpt.json
      README.md
      instructions/
        main.md
      knowledge/
        index.md
        ...
      actions/
        schema.json # valgfritt
```

### Minimumskrav per GPT-pakke:

- `gpt.json` beskriver GPT-en (navn, beskrivelse, kategori, status).
- `instructions/main.md` inneholder system-instruksjonen (system-prompt).
- `knowledge/index.md` peker til relevante kunnskapsfiler i `/standards` og `/knowledge`.
- `README.md` beskriver kort:
  - formål
  - målgruppe
  - kobling mot andre systemer/standarder.

## Navngivning av GPT-pakker

- Bruk `snake_case` eller `kebab-case`, konsekvent i hele repoet.
- Navn bør reflektere domenet, for eksempel:
  - `norsain_copilot_architect`
  - `ims_qms_quality_assistant`
  - `tracetimber_forest_twin_assistant`
- Unngå generiske navn som `my-assistant` eller `test-bot` i `instances/`.

## Livssyklus

1. Ny GPT
   - Scaffoldes normalt først til `gpt-packages/.sandbox/<gpt-slug>/`.
   - Når GPT-en er godkjent, flyttes den til `instances/<gpt-slug>/`.

2. Endringer
   - Gjøres via PR direkte i `instances/<gpt-slug>/`.

3. Utfasing
   - Når en GPT ikke lenger er aktiv, flyttes den til:
     - `gpt-packages/.archive/<år>-legacy-<gpt-slug>/`.

## Forhold til andre mapper

- `templates/`  
  Inneholder maler for nye GPT-pakker (arketyper) og `_library` med gjenbrukbare byggesteiner.

- `.sandbox/`  
  Brukes for eksperimentelle GPT-er som ikke er klare for produksjon.

- `.archive/`  
  Brukes for GPT-er som er parkert/utfaset, men beholdes som referanse.
