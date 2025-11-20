# TODOs — Rydding og standardisering av `gpt-packages`

Dette dokumentet inneholder TODO-listen som kan limes rett inn i `planning/TODOs-gpt-packages.md`.
Oppgavene er organisert etter branch-planen fra refactor/feat/refs.

---

## refactor/gpt-packages-structure-v1: Standardiser eksisterende pakker

- [ ] Inventar: lag liste over alle mapper i `gpt-packages` og merk hvilke som mangler NGAS-filer.
  - (fil: `reports/repo-gap-analysis-*.md` eller lignende)
- [ ] Opprett manglende mapper: `gpt_metadata/`, `instructions/`, `knowledge/` i pakker som mangler dem.
- [ ] Legg til `00.01_knowledge_index.md` i pakker uten knowledge-index.
- [ ] Flytt eller arkiver midlertidige mapper (`test_template_resolve_*`) til `gpt-packages/.sandbox/`.

---

## feat/templates-library-v1: Implementer `_library/`

- [ ] Opprett `gpt-packages/templates/_library/` med undermapper `instructions/`, `knowledge/`, `evals/`, `logs/`, `prompts/`.
- [ ] Legg inn disse initialfilene (eller kopier fra repo hvis eksisterer):
  - `_library/knowledge/ngas_output_standards_v1.2.template.md`
  - `_library/knowledge/norsain_language_tone_guide.template.md`
  - `_library/evals/eval_matrix.template.md`
  - `_library/prompts/build_custom_gpt.prompt.md`
- [ ] Dokumenter i `templates/README.md` hvordan `library_includes` fungerer.

---

## refactor/scaffold-and-validate-gpt: Oppdater scripts

- [ ] Oppdater `scripts/scaffold-gpt.mts` til å:
  - [ ] lese `template.manifest.json`
  - [ ] kopiere template-root til `.sandbox/` eller `gpt-packages/<slug>/`
  - [ ] fjerne `.template`-infix fra filnavn
  - [ ] erstatte placeholders (`{{GPT_NAME}}`, etc.)
  - [ ] inkludere `library_includes` fra manifestet
- [ ] Oppdater/implementer `scripts/validate-gpt.mts` til å:
  - [ ] validere NGAS-instruksjonsseksjoner 01–09
  - [ ] sjekke `max_knowledge_files` (fra manifest eller repo-regel)
  - [ ] validere `gpt.json` mot schema (ANTAKELSE: finnes et schema eller opprett `templates/_system/gpt.schema.json`)
  - [ ] feile tidlig med nyttige feilmeldinger
- [ ] Legg til CLI-dokumentasjon i `scripts/README.md` for nye flagg (sandbox vs real).

---

## docs/gpt-templates-usage-and-ci: Dokumentasjon og CI

- [ ] Oppdater `gpt-packages/templates/README.md` (ferdig, men verifiser med implementasjon).
- [ ] Lag `templates/_system/template.manifest.schema.json` (ANTAKELSE: ønsket for validering).
- [ ] Opprett GitHub Actions workflow `/.github/workflows/validate-templates.yml` som:
  - [ ] kjører på push til `gpt-packages/templates/**` og `gpt-packages/**`
  - [ ] kjører `npm run validate` eller `node scripts/validate-gpt.mts`
- [ ] Legg eksempelkall og feilsøkingsråd i `templates/README.md`.

---

## testing & QA

- [ ] Lag en test-scenario: scaffold en ny GPT fra `custom_gpt/` til `.sandbox/test-gpt` og verifiser:
  - [ ] filnavn endres riktig
  - [ ] placeholders erstattes korrekt
  - [ ] library-filer inkluderes
- [ ] Kjør validator mot flere eksisterende pakker og noter feil for oppfølging.

---

## housekeeping

- [ ] Fjern eller arkiver ubrukte test-mapper fra rot (`test_gpt/`-relaterte midlertidigheter) etter godkjenning.
- [ ] Legg til checklist i PR-mal for endringer i `gpt-packages/templates/` (f.eks. `validate manifest`, `update README`).

---

## Notater

- ANTAKELSE: Flere validator- og scaffolding-skript finnes (se `scripts/`).
- ANTAKELSE: De trenger sannsynligvis oppdatering til manifest-drevet oppførsel.
- ANTAKELSE: Noen pakker kan allerede inneholde NGAS-filer; start med et gap-analyse-commit før masseendringer.

---

Endringer bør gjøres i små, verifiserbare commits per branch for enkel review og rollback.
