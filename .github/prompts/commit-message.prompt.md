---
agent: agent
description: 'Lag presise, profesjonelle commit-meldinger for NORSAIN GPT Platform.'
---

Når du genererer commit-meldinger:

- Følg formatet:
  <type>(scope): kort beskrivelse

  body:
  - Hva som ble endret
  - Hvorfor
  - Konsekvenser / påvirkning

- Tillatte <type>:
  - feat: ny funksjon
  - fix: feilretting
  - docs: dokumentasjon
  - refactor: kode-/strukturforbedringer
  - style: formattering, rename
  - test: testfiler og eval-scenarier
  - chore: vedlikehold, konfig, CI

- Scope kan være:
  knowledge, instruction, action, eval, scripts, repo, template

- Meldingen skal være:
  - profesjonell
  - presis
  - beskrivende uten unødvendige ord
  - uten emojis

- Referer eksplisitt til filer hvis relevant (men kort).

Eksempel:
feat(knowledge): lagt til 02.03_systemprompt_token_guideline.md med metadata
