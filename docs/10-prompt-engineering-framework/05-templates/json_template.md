---
document_id: NPEF-TPL-007
title: "Generic JSON Template"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - templates
  - json
  - structured_output
---

# Generic JSON Template

## 1. Purpose

Denne malen brukes når det kreves **strukturert JSON-output** for enkle oppgaver, der et fullt JSON Schema (som `capa_record.schema.json`) er unødvendig. Malen sikrer fortsatt maskinlesbarhet og minimal formatdrift.

---

## 2. Standard Structure

### **Task**

Definer kort hva modellen skal ekstrahere eller klassifisere.

### **Instructions**

- Ekstraher kun de definerte feltene.
- Ikke legg til informasjon som ikke står i teksten.
- Returner **strengt valid JSON**.
- **Ingen forklaringer** eller metatekst utenfor JSON-blokken.

### **JSON Skeleton (Kontrakt)**

```json
{
  "field_name_1": "[string/number]",
  "field_name_2": "[string/number/boolean]",
  "list_of_items": [
    {
      "nested_field": ""
    }
  ]
}
