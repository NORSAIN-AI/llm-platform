# Vitest-standard for `norsain-gpt-platform`

Versjon: v0.1
Status: Utkast – repo-spesifikk tilpasning

## 1. Formål og scope

Denne standarden beskriver hvordan vi bruker Vitest i `norsain-gpt-platform`:

- Teste TypeScript-verktøy (scaffolding, validering, index-generering).
- Verifisere GPT-pack-struktur og regler (NGAS, max 20 filer, index, osv.).
- Sikre at endringer i `gpt-packages/` og `templates/` oppdages gjennom tester.
- Gi en fast ramme for lokale tester og CI.

Denne repo-spesifikke standarden bygger på NORSAIN sin generelle Vitest-standard, men er tilpasset:

- mappestruktur og scripts i `norsain-gpt-platform`
- kjernefunksjoner som påvirker Custom GPT-er (scaffold, validate, generate index)
- bruk av fixtures for GPT-eksempler (gyldige/ugyldige).

---

## 2. Hva vi tester i dette repoet

I `norsain-gpt-platform` er hovedmålet å beskytte:

1. **Kjernefunksjoner i TypeScript-koden**
   - Moduler som:
     - leser og analyserer `gpt-packages/`-struktur
     - genererer `_index`-filer og metadata
     - validerer kunnskapsfiler, actions og instructions opp mot NGAS-regler.

1. **CLI-/scripts-atferd**
   - Scripts som:
     - scaffold’er nye GPT-er fra templates
     - validerer GPT-konfig (`gpt.json`, `knowledge/`, `actions/`, osv.)
     - genererer index-filer og eventuelle hjelpefiler.

1. **Regressjonstester mot fixtures**
   - Under `tests/fixtures/`:
     - ett eller flere “gyldige” GPT-sett (skal passere validering)
     - ett eller flere “ugyldige” GPT-sett (skal feile med forutsigbare feil).

Målet er ikke 100 % dekning på alt, men høy dekning på:

- kjerne-bibliotekene (parsing, validering, generering)
- domenereglene som gjør Custom GPT-bygging trygg og forutsigbar.

---

## 3. Fil- og mappestruktur for tester

Anbefalt struktur i dette repoet:

```text
norsain-gpt-platform/
  src/                     # kjernebibliotek for GPT-plattformen
    core/
    utils/
    __tests__/             # ev. samlede tester per modul
      core.test.ts
  scripts/                 # CLI-scripts (scaffold, validate, index, osv.)
    scaffold-gpt.mts
    validate-gpt.mts
    generate-index.mts
    __tests__/
      scaffold-gpt.test.ts
      validate-gpt.test.ts
  gpt-packages/
    templates/             # GPT-template(r) brukt som grunnlag
  tests/
    fixtures/
      gpt-packages/
        valid_custom_gpt/
        invalid_custom_gpt_missing_index/
        invalid_custom_gpt_too_many_knowledge_files/
```
