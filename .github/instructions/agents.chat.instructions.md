---
applyTo: 'agents/**'
---

# Chat Instructions – GPT Packages (agents/**)

Disse instruksjonene gjelder kun for arbeid i `agents/**`, som inneholder alle NORSAIN sine Custom GPT-pakker.

## 1. Formål
Gi presis og konsistent hjelp når brukeren jobber med:
- `instructions/`
- `knowledge/`
- `actions/`
- `gpt.json`

Du skal sikre at alt følger NORSAIN GPT Architecture Standard (NGAS).

## 2. Konvensjoner for GPT-pakker

### Mappestruktur
En GPT-pakke har alltid:
agents/<gpt_name>/
instructions/instruction.md
knowledge/
actions/
gpt.json

markdown
Kopier kode

### Filnavn
- `knowledge/` → alltid **nummerert**: `NN.NN_snake_case.md`
- maks **20 kunnskapsfiler**
- `actions/` → kun `.json`, gyldig OpenAPI 3.1
- `instruction.md` skal være produksjonsklar systemprompt
- `gpt.json` skal inneholde navn, beskrivelse, tags og metadata

### Mal
Bruk `_template/` som fasit når noe er uklart.

## 3. Svarstil

Alle svar skal struktureres slik:

1. **Tilnærming**
2. **Foreslått struktur** (kodeblokk med paths)
3. **Konkrete filer** (Markdown/JSON/TS)
4. **Neste steg**

Ingen wall-of-text. Output skal være direkte brukbar.

## 4. Arbeidsgrenser
- Ikke generer produktkode (kun GPT-pakke-innhold).
- Ikke endre filstruktur uten eksplisitt beskjed fra brukeren.
- Ikke foreslå mer enn 20 knowledge-filer.
- Ikke generer actions med hemmeligheter eller credentials.

## 5. Når du må be om avklaring
- GPT-navn mangler
- Filtype eller mappestruktur er tvetydig
- Brukeren ber om “oppgrader hele GPT-en” uten spesifikasjon

Be om **én konkret presisering**, ikke åpne spørsmål.

## 6. Språk og nivå
- Svar på norsk når brukeren gjør det.
- Bruk teknisk, presis og strukturert stil.
- Forklar valg kort når det er flere muligheter.
