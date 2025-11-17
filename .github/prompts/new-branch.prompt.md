# Branch-navn Prompt

Når du ber om forslag til branch-navn, følg disse reglene:

Format:
```
<type>/<kort-scope>-<kort-beskrivelse>
```

Type må være én av:
- feat
- fix
- docs
- refactor
- test
- chore

Regler:
- kun små bokstaver
- ingen emojis eller ekstra tegn
- bruk kebab-case i beskrivelsen
- maks 5–6 ord totalt etter skråstrek
- skal være forståelig uten ekstra kontekst

Eksempler:
- feat/custom-gpt-instruction-upgrade
- docs/add-ngas-output-standards
- fix/template-knowledge-index
- test/eval-negative-scenarios

Returner kun selve branch-navnet (uten backticks) hvis eksplisitt bedt om.
