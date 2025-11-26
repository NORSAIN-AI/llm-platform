Perfekt — vi går videre til **mappe 06_schema_library**.

Denne mappen består av tre hovedkomponenter:

```
06_schema_library/
├── json_schemas/
├── ts_interfaces/
└── llm_structure_contracts.md
```

Jeg genererer én fil av gangen og starter med hovedfilen:

---

# **`llm_structure_contracts.md` (v1.0)**

**COPY–PASTE READY (ren Markdown)**

```markdown
---
document_id: NPEF-SCH-001
title: "LLM Structure Contracts"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - schema
  - structured_output
  - contracts
  - llm
  - norsain_framework
---

# LLM Structure Contracts

Denne filen definerer NORSAIN-standarder for strukturerte LLM-outputkontrakter.  
Formålet er å sikre **forutsigbarhet, validerbarhet og systemintegrasjon** i alle prompts som krever faste datastrukturer.

Dette inkluderer:
- JSON Schemas  
- TypeScript Interfaces  
- Valideringskrav  
- Output-kontraktsregler  
- LLM-spesifikke tilpasninger  

---

# 1. Purpose

LLM Structure Contracts sikrer at:
- alle prompts med strukturert output er **deterministiske**  
- output er **maskinlesbar og validerbar** (JSON Schema, TS interfaces)  
- downstream-systemer kan stole på format og feltnavn  
- feil og formatdrift minimeres  
- QMS/IMS-dokumentasjon ivaretas  
- agent-løp kan bruke kontraktene “som kode”

Dette er kritisk for:
- API-integrasjoner  
- pipelines  
- dashboards  
- QMS-rapporter  
- automasjon / agent workflows  

---

# 2. Contract Types

NORSAIN bruker tre typer kontrakter:

```

1. JSON Schema
2. TypeScript Interfaces
3. LLM Prompt Structure Definitions

````

Alle tre spiller ulike roller.

---

# 3. JSON Schema Contracts

JSON Schema brukes for:
- validering  
- strenge krav til format  
- automatisert testing  
- feilhåndtering (json repair)  
- integrasjoner  
- data pipelines  

Eksempel:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "CapaRecord",
  "type": "object",
  "properties": {
    "issue": { "type": "string" },
    "root_cause": { "type": "string" },
    "corrective_action": { "type": "string" }
  },
  "required": ["issue", "root_cause"]
}
````

---

# 4. TypeScript Interface Contracts

Brukes i utviklingsmiljøer, agentkode, og GPT Actions.

Eksempel:

```typescript
export interface CapaRecord {
  issue: string;
  root_cause: string;
  corrective_action?: string;
}
```

Retningslinjer:

* camelCase
* optional fields med `?`
* ingen unions unntatt spesifikke cases
* eksporter ALT eksplisitt

---

# 5. LLM Output Definition Contracts

Dette er en NORSAIN-standard for prompts.
Språket er rent Markdown/tekst og brukes direkte i prompts.

Eksempel:

```
OUTPUT FORMAT:
{
  "issue": "",
  "root_cause": "",
  "corrective_action": ""
}
RULES:
- All fields must exist
- Strings only
- No extra fields
- No explanations
```

Dette brukes direkte av LLM-motorene.

---

# 6. Validation Requirements

Minstekrav for alle strukturerte output:

* 100 % gyldig JSON (ved JSON-modus)
* Feltnavn må stemme nøyaktig
* Arrays må ikke være tomme med mindre tillatt
* Null-verdier kun når kontrakten tillater det
* Extra fields → ikke tillatt

Valideringen skal gjøres av:

* modellen selv (valgfritt)
* pipelines
* backend
* agent scripts

---

# 7. Common Contract Patterns

### 7.1 Entity Object

Brukes for én entitet.

### 7.2 Entity List

Brukes for flere entiteter:

```json
{ "items": [ { "...": "" } ] }
```

### 7.3 Key-Value Output

Brukes for mappinger og klassifisering.

### 7.4 Mixed Types

Kun når nødvendig.

---

# 8. Rules for Creating New Contracts

* Begrens antall felter
* Bruk konsise navn
* Unngå nested structures hvis mulig
* Lag TS interface parallelt
* Lag JSON schema for kritiske flows
* Dokumentér alt i denne mappen

---

# 9. Examples

### QMS CAPA

* JSON Schema
* TS Interface
* Prompt Contract
  (alle tre kombinert)

### Engineering Code Review Output

* bullet list eller JSON
* deterministisk struktur

### Risk Analysis

* listestruktur
* risikoobjekter med severity/impact

---

# 10. Folder Structure in This Module

```
06_schema_library/
├── json_schemas/
│   └── (all .json schema files)
├── ts_interfaces/
│   └── (all .ts typing contracts)
└── llm_structure_contracts.md  ← this file
```

---