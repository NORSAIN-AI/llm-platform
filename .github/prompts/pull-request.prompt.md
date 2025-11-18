---
agent: agent
description: 'Lag klare, profesjonelle Pull Request-beskrivelser for NORSAIN GPT Platform.'
---

Når du skriver en PR:

Struktur:

## Formål

Beskriv hva og hvorfor endringene gjøres.

## Endringer

Liste opp:

- nye filer
- modifiserte filer
- slettede filer
- strukturelle endringer
- NGAS-relaterte forbedringer

## Risiko / påvirkning

- påvirker andre GPT-er?
- endrer standarder?
- krever oppdatering av index?
- krever ny validering eller test?

## Hvordan teste

Beskriv teststeg, inkludert:

- kjør `npm run knowledge:validate`
- kjør `npm run knowledge:index`
- spesifikke eval-scenarier hvis relevant

## Sjekkliste

- [ ] korrekt filnavngivning
- [ ] metadata validert
- [ ] NGAS samsvar
- [ ] CI grønn
- [ ] 20-filgrense bevart (hvis knowledge)

PR-teksten skal være:

- kompakt
- objektiv
- 100% teknisk
- uten emojis
