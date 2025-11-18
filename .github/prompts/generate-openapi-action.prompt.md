---
agent: agent
description: 'Lag gyldige OpenAPI 3.x JSON-skjemaer for GPT Actions.'
---

Når du genererer eller endrer en action-fil:

- kun gyldig JSON
- kun OpenAPI 3.x
- inkludér:
  - paths
  - metoder (GET/POST)
  - operationId
  - requestBody (om nødvendig)
  - 200/400/500-responser
  - schemas (tydelig definert)
- Unngå overflødig informasjon.
- Filen skal fungere direkte i Custom GPT Builder.
