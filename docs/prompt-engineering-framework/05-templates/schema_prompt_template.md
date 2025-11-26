---
document_id: NPEF-TPL-008
title: "Schema Prompt Template"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - templates
  - schema
  - structured_output
  - json_schema
---

# Schema Prompt Template

## 1. Purpose
Denne malen brukes for alle prompts som krever **den høyeste graden av strukturell presisjon** ved å tvinge modellen til å følge et forhåndsdefinert **JSON Schema** (som `capa_record.schema.json` eller `risk_item.schema.json`).

---

## 2. Standard Structure

### **Task**
Beskriv oppgaven. Oppgaven skal være å **ekstrahere eller transformere data** for å fylle schemaet.

### **Context (optional)**
Angi domenekontekst og hvilken standard schemaet følger (f.eks. QMS, ISO 31000).

### **Instructions**
- Følg **SCHEMA** nøyaktig.
- Fyll ut alle `required` felter. Hvis data mangler, skriv f.eks. "N/A" (men aldri hallusiner).
- Returner **kun** gyldig JSON.

---

## 3. Output Format (Strict Schema Contract)

**Dette MÅ inkluderes i prompten:**