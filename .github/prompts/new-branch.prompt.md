---
agent: agent
description: 'Generer konsistente og presise branch-navn for NORSAIN GPT Platform.'
---

Når du foreslår branch-navn:

Format:
<type>/<short-scope>-<short-description>

Regler:

- bruk små bokstaver
- bruk kebab-case i beskrivelse
- maks 5–6 ord
- ingen emojis eller ekstra tegn
- <type> må være:
  - feat
  - fix
  - docs
  - refactor
  - test
  - chore

Eksempler:

- feat/custom-gpt-instruction-upgrade
- docs/add-ngas-output-standards
- fix/template-knowledge-index
- test/eval-negative-scenarios

Branch-navn skal være lett å lese og forstå uten kontekst.
