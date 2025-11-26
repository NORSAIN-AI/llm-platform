Vi fortsetter videre til **Modul B: Templates**.
Neste fil i rekkefølgen er:

### **05_templates/extraction_template.md**

Her kommer den — profesjonelt formatert, ren Markdown, med YAML-frontmatter og klar til repo/QMS.

---

# **`extraction_template.md` (v1.0)**

**COPY–PASTE READY**

````markdown
---
document_id: NPEF-TPL-001
title: "Extraction Prompt Template"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - templates
  - extraction
  - structured_output
  - norsain_framework
---

# Extraction Prompt Template

## 1. Purpose
Denne malen brukes for alle prompts som skal **ekstrahere strukturerte data** fra ustrukturert tekst, som rapporter, transkripsjoner, e-poster, avviksmeldinger, kodekommentarer eller dokumenter.

Målet er å oppnå:
- presis identifikasjon av verdier  
- 100 % strukturert output  
- konsistente feltnavn  
- forutsigbare JSON-objekter egnet for videre prosessering  

---

## 2. Standard Structure

### **Task**
Beskriv kort hva modellen skal ekstrahere.

Eksempel:  
«Ekstraher alle relevante felter fra teksten og returner kun JSON.»

### **Context (optional)**
Gi domene- eller prosesskontekst (QMS, engineering, risiko, support, etc.).

### **Instructions**

- Ekstraher følgende felter nøyaktig:  
  - `field_1`  
  - `field_2`  
  - `field_3`  
- Ikke legg til informasjon som ikke står i teksten.  
- Hvis et felt mangler, sett `null` eller utelat (velg én policy).  
- Følg feltnavn og struktur eksakt.  
- Ingen forklaringer i output.

---

## 3. Output Format (Strict JSON)

Promptet må kreve ren JSON uten tekst.

### **JSON Skeleton**
```json
{
  "field_1": "",
  "field_2": "",
  "field_3": ""
}
````

### **Constraints**

* Ingen kommentarer
* Ingen Markdown
* Ingen ekstra tegn
* Kun gyldig JSON

---

## 4. Variant: Multi-Object Extraction

Når det kan være flere objekter i en tekst:

```json
{
  "items": [
    {
      "field_1": "",
      "field_2": "",
      "field_3": ""
    }
  ]
}
```

Bruk hvis input har flere hendelser, avvik, funn, etc.

---

## 5. Optional Validation Step

Du kan be modellen validere sin egen JSON:

```
Validate the JSON structure before final output.
If invalid, fix and re-emit corrected JSON only.
```

---

## 6. Example Prompt (Ready-to-Use)

```
TASK:
Extract key fields from the following text and return only JSON.

CONTEXT:
This text is part of a QMS CAPA system.

INSTRUCTIONS:
- Extract: issue_description, root_cause, corrective_action
- Do not invent missing details.
- Return strictly valid JSON.

OUTPUT FORMAT:
{
  "issue_description": "",
  "root_cause": "",
  "corrective_action": ""
}

TEXT:
[insert_input_here]
```

---