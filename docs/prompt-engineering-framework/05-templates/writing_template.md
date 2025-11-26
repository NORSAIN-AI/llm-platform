Her er **`writing_template.md` (v1.0)** — ren Markdown, konsistent med alle tidligere filer, og profesjonelt strukturert for NPEF.

---

# **`writing_template.md` (v1.0)**

**COPY–PASTE READY**

```markdown
---
document_id: NPEF-TPL-004
title: "Writing Prompt Template"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - templates
  - writing
  - content_generation
  - structured_output
  - norsain_framework
---

# Writing Prompt Template

## 1. Purpose
Denne malen brukes når modellen skal **skrive tekst**, uavhengig av sjanger: rapporter, e-poster, prosedyrer, beskrivelser, dokumentasjon, policyer, faginnhold, eller kommunikasjon.  
Målet er å sikre **klar, konsistent, målrettet og strukturert tekstproduksjon** på tvers av NORSAIN sine systemer og domener.

---

## 2. Standard Structure

### **Task**
Definer nøyaktig hva som skal skrives.

Eksempler:  
- «Skriv en kort, formell e-post som svarer på forespørselen.»  
- «Skriv en teknisk beskrivelse for et API-endepunkt.»  
- «Generer en policy-introduksjon i formell tone.»

### **Context (optional)**
Angi nødvendig bakgrunn:

- formål  
- målgruppe  
- prosess eller standard (QMS, IMS, governance)  
- krav til struktur  
- forventet nivå (teknisk / ikke-teknisk)

### **Instructions**
- Følg ønsket tone (formell, nøytral, teknisk, lettfattelig osv.)  
- Følg ønsket lengde (kort, medium, lang)  
- Følg ønsket sjanger (rapport, notat, e-post, dokumentasjon)  
- Unngå irrelevante detaljer  
- Ikke introduser fakta som ikke finnes i input  
- Inkluder eller ekskluder CoT etter behov  
- Følg definert struktur i output  

---

## 3. Output Structure (Recommended)

Bruk en tydelig og lesbar struktur, spesielt viktig for dokumentasjon, rapporter og prosedyrer.

Eksempelstruktur:

```

Title:
Introduction:
Main Body:
Conclusion / Call to Action:

````

Alternativer:  
- Tabell-format  
- Punktlister  
- Nummererte steg  
- Kort sammendrag først (executive summary)

---

## 4. Optional Variant: JSON Output

Hvis teksten genereres for pipelines, API-er eller videre prosessering:

```json
{
  "title": "",
  "introduction": "",
  "main_body": "",
  "conclusion": ""
}
````

---

## 5. Styling Controls (Optional)

For mer konsistent stil:

```
- Avoid overly casual language
- Prefer short, direct sentences
- Use business-professional tone
- Avoid redundancy
- Follow NORSAIN naming and terminology conventions
```

---

## 6. Example Prompt (Ready-to-Use)

```
TASK:
Write a short, formal summary of the following meeting notes.

CONTEXT:
Intended for internal NORSAIN documentation (IMS 2025).

INSTRUCTIONS:
- Write in a concise, professional tone
- Provide a clear introduction, body and conclusion
- Avoid adding information not found in the text
- Keep it under 200 words

OUTPUT FORMAT:
Title:
Introduction:
Main Body:
Conclusion:

TEXT:
[insert_input_here]
```

---
