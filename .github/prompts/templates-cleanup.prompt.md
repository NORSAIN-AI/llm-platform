---
agent: norsain-repo-builder-agent
---
description: Rydd opp og standardiser agents/templates for NORSAIN GPT Platform.
---

# Oppdrag – Rydding og standardisering av `agents/templates/`

Du jobber i repoet `norsain-gpt-platform`.

Målet er å bygge en REN og LOGISK templates-struktur for Custom GPT-er slik at `scaffold-gpt` kan brukes trygt. Du skal IKKE endre NORSAIN GPT Architect sin egen agent-mappe nå, bare selve malverket under `agents/templates/`.

## Overordnet mål

1. **Kun én gyldig template-mappe:**
   Bruk kun `agents/templates/custom_gpt/` som kilde for scaffolding av nye GPT-er.

2. **Tydelig instructions-mal:**
   `agents/templates/custom_gpt/instructions/` skal inneholde én fil
   `instructions.template.md` som er en mal for fremtidige `instructions.md` for nye GPT-er.

3. **Minimalt, nyttig knowledge-malverk i templates:**
   `agents/templates/custom_gpt/knowledge/` skal kun inneholde det som trengs for nye GPT-er, typisk én enkel index-mal.

4. **Ingen duplikater på toppnivå:**
   Det skal ikke ligge parallelle `instructions/`, `knowledge/` eller `actions/` rett under `agents/templates/` som konkurrerer med `custom_gpt/`.

---

## Konkrete oppgaver

### 1. Normaliser mappe-strukturen under `agents/templates/`

1. Inspiser `agents/templates/`:
   - Finn ut hvilke mapper/filer som ligger direkte under `agents/templates/`.
   - Finn ut hva som ligger under `agents/templates/custom_gpt/`.

2. End state skal være:

```text
agents/
  templates/
    custom_gpt/
      gpt.json                 # template for GPT-konfig
      instructions/
        instructions.template.md
      knowledge/
        00.01_knowledge_index.template.md   # enkel, ikke tom mal
      actions/
        openapi.template.json   # evt. enkel placeholder for Actions (kan være svært enkel)
```

3. Hvis det finnes mapper/filer direkte under `agents/templates/` som dupliserer dette (f.eks. `agents/templates/instructions/`, `knowledge/`, `actions/`):
   - Flytt INN eventuelle relevante maler til riktig sted under `custom_gpt/` (hvis de faktisk har nyttig innhold).
   - Hvis de er tomme eller meningsløse:
     - Fjern dem (git rm) eller marker dem som deprecated i en README og rydd de faktiske filene.

### 2. Bygg `instructions.template.md` riktig

Under `agents/templates/custom_gpt/instructions/` skal du:

1. Sørge for at det finnes én fil: `instructions.template.md`.
2. Hvis det ligger en `main.md` eller tilsvarende, skal du:
   - Bruke innholdet som inspirasjon, men tilpass til følgende struktur:

`instructions.template.md` skal være en mal for en FULL `instructions.md` til en ny Custom GPT, med:

- En kort UI-seksjon øverst (for GPT UI):
  - Navn
  - Beskrivelse (≤300 tegn)
  - 3–5 samtalestartere
- Deretter 01–09-seksjoner:
  - Identity
  - Purpose
  - Core behaviour
  - Constraints
  - Safety
  - Output rules
  - Interaction rules
  - Ask vs infer
  - End rules

Bruk tydelige placeholders i `{{CAPS_LOCK}}`-stil.

Eksempel på ønsket struktur (tilpass repoet når du implementerer):

```md
---
template_type: custom_gpt_instructions
version: 1.0.0
---

# GPT UI meta

- **Name (Navn)**
  {{GPT_NAME}}

- **Description (≤300 chars)**
  {{GPT_DESCRIPTION_300_CHARS}}

- **Conversation starters (3–5)**
  - {{CONVERSATION_STARTER_1}}
  - {{CONVERSATION_STARTER_2}}
  - {{CONVERSATION_STARTER_3}}
  - {{CONVERSATION_STARTER_4_OPTIONAL}}
  - {{CONVERSATION_STARTER_5_OPTIONAL}}

---

# 01 – Identity

Beskriv hvem GPT-en er, rolle og målgruppe.

- Role: {{ROLE_NAME}}
- Primary domain: {{PRIMARY_DOMAIN}}
- Audience: {{AUDIENCE}}

# 02 – Purpose

Forklar hva GPT-en konkret skal hjelpe med.

- Main goals:
  - {{PURPOSE_GOAL_1}}
  - {{PURPOSE_GOAL_2}}

# 03 – Core behaviour

Definer grunnatferd.

- Always:
  - {{CORE_BEHAVIOUR_RULE_1}}
  - {{CORE_BEHAVIOUR_RULE_2}}

# 04 – Constraints

Hva GPT-en ikke skal gjøre.

- Out of scope:
  - {{OUT_OF_SCOPE_1}}
  - {{OUT_OF_SCOPE_2}}

# 05 – Safety

Overordnede safety-regler og henvisning til organisasjons-/NGAS-policy.

# 06 – Output rules

Språk, format, struktur, lengde, bruk av kodeblokker osv.

# 07 – Interaction rules

Hvordan GPT-en skal samhandle med brukeren:
- spørre, bekrefte, forklare, håndtere usikkerhet.

# 08 – Ask vs infer

Når GPT-en skal:
- spørre eksplisitt
- anta (med tydelig merking av antakelser).

# 09 – End rules

Hvordan svaret skal avsluttes:
- f.eks. alltid med neste anbefalte steg og ev. påminnelse om human review der det er relevant.
```

Du skal implementere en versjon av dette som passer repoet, men logikken over skal være tydelig ivaretatt.

### 3. Minimal `knowledge/`-mal i templates

Under `agents/templates/custom_gpt/knowledge/`:

1. Fjern alle tomme eller innholdsløse malfiler.
2. Opprett én enkel index-mal: `00.01_knowledge_index.template.md` med innhold som f.eks.:

```md
# Knowledge index (template)

List the knowledge files used by this GPT.

For each file, specify:
- file_name
- source system (repo, Notion, database, etc.)
- short description
- owner / maintainer
- last_reviewed (date)

Keep the total number of knowledge files for a single GPT at **max 20**.
```

Ingen andre knowledge-maler er nødvendig her – NORSAIN GPT Architect vil foreslå faktiske knowledge-filer per GPT.

### 4. Actions-template

Under `agents/templates/custom_gpt/actions/`:

1. Sørg for at det finnes en enkel `openapi.template.json` (navn kan tilpasses repo-standard).
2. Innholdet kan være en minimal skeleton som menneskelige utviklere fyller ut senere, f.eks.:

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "{{GPT_NAME}} Actions API",
    "version": "0.1.0",
    "description": "Draft OpenAPI template for {{GPT_NAME}} GPT Actions. Adjust servers, security and paths before use."
  },
  "servers": [
    {
      "url": "https://api.example.com",
      "description": "Replace with real server before production use."
    }
  ],
  "paths": {}
}
```

Ikke fyll inn ekte URL-er eller auth; det er kun en placeholder.

---

## Arbeidsform

- Gjør endringene i små, logiske commits, f.eks.:
  - `refactor: normalize custom_gpt template structure`
  - `feat: add instructions.template for custom GPTs`
  - `chore: prune empty knowledge templates`
- Oppdater ev. README/REPO_STRUCTURE hvis det refererer til gammel templates-struktur.
- Ikke rør andre agents/mapper enn det som er nødvendig for å fullføre denne oppgaven.

Når du er ferdig:
- Oppsummer hva som er endret.
- Foreslå hvordan `scaffold-gpt` nå bør brukes for å opprette nye GPT-er.
