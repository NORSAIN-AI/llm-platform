# gpt-packages/.sandbox

`.sandbox/` brukes til **midlertidige og eksperimentelle GPT-pakker**.  
Ingen innhold her skal betraktes som stabilt eller produksjonsklart.

## Formål

- Gi et trygt område for rask iterasjon på nye GPT-ideer.
- Separere eksperimenter fra:
  - aktive GPT-er (`instances/`)
  - legacy/parkert innhold (`.archive/`).

## Typisk bruk

Scaffold en ny GPT-pakke hit når du:

- tester en ny arketype eller template
- eksperimenterer med instruks, knowledge-struktur eller actions
- gjør spikes eller proof-of-concepts som kanskje aldri tas i bruk.

Eksempel:

```
gpt-packages/
  .sandbox/
    experimental_repo_assistant/
    spike_copilot_qms_helper/
```

Strukturen inne i hver GPT-mappe kan være lik som under `instances/`, men det er ikke et absolutt krav så lenge verktøy og tester håndterer det.

## Regler

- Ingen GPT i `.sandbox/` skal brukes som «offisiell» løsning.
- Innhold kan slettes eller overskrives uten varsel.
- CI/validering kan:
  - ignorere `.sandbox/`, eller
  - kun kjøre ikke-blokkerende kontroller.

## Fra .sandbox til instances

Når en GPT er moden for faktisk bruk:

1. Gjør teknisk og funksjonell gjennomgang (instruks, knowledge, actions).
2. Flytt mappen til:
   - `gpt-packages/instances/<gpt-slug>/`
3. Oppdater:
   - `gpt.json` med korrekt status/kategori.
   - Evt. dokumentasjon som peker på GPT-en.

## Opprydding

- Gamle eksperimenter bør ryddes jevnlig:
  - slettes hvis de ikke har verdi
  - eller flyttes til `.archive/` hvis de har referanseverdi.
