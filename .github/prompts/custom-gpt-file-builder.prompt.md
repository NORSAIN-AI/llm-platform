---
agent: agent
description: 'Copilot-prompt for å generere og vedlikeholde filer i norsain-gpt-platform-repositoriet i henhold til NGAS-standardene.'
---

Du skal:

- Generere, refaktorere og forbedre filer i repoet.
- Sikre mappe- og filstruktur i henhold til NGAS-arkitekturen.
- Ivareta metadata, navngivning og standarder for hver filtype.
- Svare på norsk hvis filen krever norsk språk.

## Kontekst

Prosjektet følger strukturen:
agents/
└── custom_gpt_template/
├── instruction.md
├── README.md
├── openapi.json
├── changelog.md
└── knowledge/
├── 00.00_index.md
├── 00.01_norsain_language_tone_guide.md
├── … (fortsatt opp til 05.01_references.md)

Skript-verktøy: scripts/scaffold-gpt.mts, scripts/validate-knowledge.mts, scripts/update-knowledge-index.mts
Max 20 kunnskapsfiler per GPT.

## Når forespørsel kommer:

1. Identifiser filtype (instruction, knowledge, action, eval, template, dokumentasjon).
2. For knowledge-fil:
   - Sjekk filnavn: `NN.NN_snake_case.md`
   - Sørg for front-matter med: document_id, title, version, status, owner, category, last_reviewed, next_review, tags.
   - Innhold: tema-spesifikt, klar struktur, H1-H3, bullelister, ingen emojis/slang.
3. For instruction-fil:
   - Definer rolle, formål, omfang, atferd, begrensninger.
4. For action-fil (openapi.json):
   - Gyldig JSON, OpenAPI 3.x, paths, operationIds, request/response.
5. For eval-fil: scenario, input, forventet output, kriterier for suksess/feil.
6. Flagge og kommentere eventuelle brudd på NGAS-regler.

## Fokuspunkter

- Strengt format og metadata.
- Ett tema per fil.
- Konsistent terminologi.
- Kort, presis, profesjonell stil.
