# TODOs — Custom GPT Design (struktur og standard)

Denne TODO-listen dekker oppgaver for å etablere og forbedre mappestruktur, standardfiler og flytting av normative dokumenter for NORSAIN Custom GPT-design.

## Mål

- Etablere en ryddig, skalerbar og normativ struktur for docs/02-custom-gpt-design/
- Sikre at alle hovedfiler, undermapper og instruksjonsfiler er på rett plass
- Gjøre det enkelt å videreutvikle og vedlikeholde standarden

## Oppgaver (prioritert)

### Struktur og hovedfiler

- [ ] Opprett mappestruktur under docs/02-custom-gpt-design/ slik at den matcher målbildet
- [ ] Opprett hovedfiler med frontmatter: README.md, 00-overview.md, 01-design-principles.md, 02-architecture.md, 08-roadmap.md
- [ ] Opprett undermapper: 03-instruction-stack/, 04-master-system-prompt/, 05-markdown-standards/, 06-templates/, 07-diagrams/

### Flytting og innhold

- [ ] Flytt 9 NGAS-instruksjoner til 03-instruction-stack/ (01-identity-template.v1.1.md, 02-purpose-template.v1.1.md, 03-behaviour-template.v1.1.md, 04-constraints-template.v1.1.md, 05-safety-template.v1.1.md, 06-output-rules-template.v1.1.md, 07-interaction-rules.template.v1.1.md, 08-ask-vs-infer-template.v1.1.md, 09-end-rules-template.v1.1.md)
- [ ] Flytt gjeldende master-prompt til 04-master-system-prompt/
- [ ] Flytt llm-markdown-constraints.md til 05-markdown-standards/
- [ ] Lag første versjon av innhold i README.md, 00-overview.md, 01-design-principles.md, 02-architecture.md, 08-roadmap.md
- [ ] custom-gpt-design-standard.md beholdes som midlertidig kildedokument

### PR og videre plan

- [ ] Skriv commit-melding og PR-beskrivelse for ny struktur
- [ ] Se over og bruk TODO-mal fra docs/09-planning/TODOs-templates.md for videre arbeid med templates og knowledge

---

Denne TODO-listen skal brukes som arbeidsgrunnlag for refaktorering og videreutvikling av Custom GPT-designområdet i dokumentasjonen.
