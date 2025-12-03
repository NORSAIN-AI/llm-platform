---
document_id: NPEF-TPL-002
title: "Classification Prompt Template"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - templates
  - classification
  - structured_output
  - norsain_framework
---

# Classification Prompt Template

## 1. Purpose

Denne malen brukes for prompts som skal **klassifisere tekst**, hendelser, kode, dokumenter eller annen input i en forhåndsdefinert kategori-liste.  
Målet er konsistent kategorisering som kan automatiseres, logges og brukes direkte i pipeline, QMS-systemer eller dashboards.

---

## 2. Standard Structure

### **Task**

Beskriv tydelig hva som skal klassifiseres og hvorfor.

Eksempel:  
«Klassifiser teksten i én av de forhåndsdefinerte kategoriene.»

### **Context (optional)**

Domene- eller prosesskontekst som hjelper modellen tolke input korrekt.

Eksempel:  
«Dette er en avvikstekst relatert til QMS 2025.»

### **Categories**

Definer listen eksplisitt og ufravikelig:

- CATEGORY_A  
- CATEGORY_B  
- CATEGORY_C  
- OTHER (valgfritt, men anbefalt)

### **Instructions**

- Velg kun én kategori.  
- Bruk `OTHER` hvis ingen kategori passer.  
- Ingen forklaringer i output med mindre eksplisitt bedt om.  
- Kategorinavn skal skrives eksakt som definert.  
- Output skal alltid følge valgt format.

---

## 3. Output Formats

### **Option A — Plain Text**

Kun kategorien:

```

CATEGORY_A

````

### **Option B — JSON Structure**

Anbefalt for systemintegrasjoner:

```json
{
  "label": "CATEGORY_A"
}
````

### **Option C — Classification + Confidence Score**

Hvis ønskelig (intern heuristic score, ikke modellens “probability”):

```json
{
  "label": "CATEGORY_A",
  "confidence": "high"
}
```

Gyldige `confidence`-verdier bør være: `"low"`, `"medium"`, `"high"`.

---

## 4. Optional Validation Step

Legg inn validering for å sikre at modellen ikke lager nye kategorier:

```
If the predicted label is not one of the defined categories, replace it with "OTHER".
```

---

## 5. Example Prompt (Ready-to-Use)

```
TASK:
Classify the input text into exactly one of the predefined categories.

CATEGORIES:
- SAFETY_ISSUE
- PROCESS_ERROR
- CUSTOMER_REQUEST
- OTHER

INSTRUCTIONS:
- Choose only one label.
- If no category fits, return "OTHER".
- Return JSON only.

OUTPUT FORMAT:
{
  "label": ""
}

TEXT:
[insert_input_here]
```
