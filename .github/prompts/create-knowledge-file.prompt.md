---
agent: agent
description: 'Opprett nye kunnskapsfiler (00–05-serien) i korrekt NGAS-format.'
---

Når du lager en ny knowledge-fil:

- Bruk filnavn: `NN.NN_snake_case.md` basert på kategori (00–05).
- Inkluder YAML-frontmatter med:
  document_id, title, version, status, owner, category, last_reviewed, next_review, tags.
- Innholdskrav:
  - Ett tema per fil
  - H1-tittel matcher `title`
  - Semantisk chunking
  - Profesjonelt språk uten emojis
  - Klar struktur (H1–H3, lister, tabeller)
- Filen skal være produksjonsklar og kunne lastes rett inn i Custom GPT.
