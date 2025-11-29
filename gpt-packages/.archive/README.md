gpt-packages/
  .archive/
    2024-legacy-backend_core_architect/
    2024-legacy-analytics-bot/
    2024-legacy-my-assistant/
gpt-packages/
  .archive/
    2024-legacy-backend_core_architect/
      gpt.json
      instructions/
      knowledge/
      actions/
      README.md
# gpt-packages/.archive

`.archive/` inneholder **utfasede eller legacy GPT-pakker** som ikke lenger er i aktiv bruk, men som beholdes som historikk eller inspirasjon.

## Formål

- Beholde tidligere GPT-pakker som referansemateriale.
- Rydde bort gamle GPT-er fra `instances/` uten å miste historikk.
- Gjøre det tydelig hva som er aktivt versus parkert.

## Navngivning

Bruk et tydelig legacy-mønster, for eksempel:

```
gpt-packages/
  .archive/
    2024-legacy-backend_core_architect/
    2024-legacy-analytics-bot/
    2024-legacy-my-assistant/
```

**Anbefaling:**
- Prefiks med årstall for når GPT-en ble parkert.
- Inkluder `legacy` i navnet for å unngå misforståelser.

## Struktur

Hver legacy-mappe bevarer original GPT-struktur:

```
gpt-packages/
  .archive/
    2024-legacy-backend_core_architect/
      gpt.json
      README.md
      instructions/
      knowledge/
      actions/
```

Innholdet kan brukes til:
- å se hvordan eldre GPT-er var bygget opp
- å gjenbruke ideer eller kunnskapsfiler ved nye design.

## Regler

- Ingen GPT i `.archive/` skal brukes som aktiv løsning.
- Ingen funksjonelle endringer gjøres direkte her, kun:
  - opprydding
  - eventuell omdøping for tydeligere merking.

## Gjenoppliving av en GPT

Hvis du vil gjenbruke en GPT fra `.archive/`:

1. Kopier den ut til:
   - `gpt-packages/instances/<ny-slug>/`
2. Revider instruks, knowledge og actions etter dagens standarder.
3. Behandle den som en ny GPT med full review og PR.

## Opprydding

- `.archive/` er ikke et “dump for alt”:
  - arkiver det som har reell referanseverdi
  - slett gamle eksperimenter som ikke lenger er nyttige.
