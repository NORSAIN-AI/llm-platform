# Create Knowledge File Prompt

Mål: Generere en ny kunnskapsfil i `agents/<gpt>/knowledge/` i henhold til NGAS-standard.

Krav til filnavn:
```
NN.NN_snake_case.md
```

Frontmatter (YAML):
```yaml
---
document_id: NGAS-XXX-IDENTIFIER
title: <Human readable title>
version: 1.0
status: draft
owner: ROLE-XXX – <rolle>
category: <kategori>
last_reviewed: YYYY-MM-DD
next_review: YYYY-MM-DD
tags: [tag1, tag2]
---
```

Innholdsstruktur:
- H1: Tittel (match frontmatter title)
- H2/H3 seksjoner etter behov
- Ett tydelig tema per fil
- Profesjonell, presis, ingen emosjoner eller emojis
- Følg chunking-standarder (kortfattet, semantiske avsnitt)

Unngå:
- Gjentakelser fra andre filer
- Uformelt språk
- Mer enn nødvendig kontekst

Output-format: Full fil (frontmatter + innhold). Ingen ekstra forklaring.
