Her er **`analysis_template.md` (v1.0)** — ren Markdown, profesjonelt strukturert og helt i tråd med NPEF.

---

# **`analysis_template.md` (v1.0)**

**COPY–PASTE READY**

```markdown
---
document_id: NPEF-TPL-003
title: "Analysis Prompt Template"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - templates
  - analysis
  - reasoning
  - structured_output
  - norsain_framework
---

# Analysis Prompt Template

## 1. Purpose
Denne malen brukes når modellen skal **analysere**, **evaluere**, **vurdere**, eller **dekonstrere** en tekst, hendelse, rapport, kravspesifikasjon eller et datasett.  
Målet er å produsere **konsistente, strukturerte og faglig presise analyser** som kan brukes i beslutningsstøtte, QMS, risikostyring eller engineering-arbeid.

---

## 2. Standard Structure

### **Task**
Beskriv klart hva analysen skal identifisere, evaluere eller bryte ned.

Eksempel:  
«Analyser teksten og identifiser nøkkelpunkter, risikoer og anbefalinger.»

### **Context (optional)**
Gi nødvendig bakgrunn:

- domenekontekst  
- prosess (QMS, engineering, API, governance)  
- krav eller målsetting  
- standarder som skal følges  

### **Instructions**
- Oppsummer og identifiser hovedtemaer  
- Fremhev viktige observasjoner  
- Identifiser risikoer, utfordringer eller feil  
- Identifiser muligheter og forbedringspunkter  
- Foreslå konkrete anbefalinger eller tiltak  
- Ikke legg til fakta som ikke finnes i input  
- Bruk definert struktur i output  
- Unngå overforklaring — vær presis og konsis

---

## 3. Output Structure (Recommended)

Alle analyser skal følge en standardisert seksjonsinndeling:

```

Summary:

* Kort oppsummering av hovedinnholdet

Key Points:

* Punkt 1
* Punkt 2
* Punkt 3

Risks:

* Risiko 1
* Risiko 2

Opportunities:

* Mulighet 1
* Mulighet 2

Recommendations:

* Konkrete råd eller neste steg

````

**Alternativt kan JSON brukes for strengere struktur.**

---

## 4. Optional JSON Output (Strict)

Hvis analysen inngår i en pipeline eller dashboard:

```json
{
  "summary": "",
  "key_points": [],
  "risks": [],
  "opportunities": [],
  "recommendations": []
}
````

---

## 5. Optional Reasoning Step (CoT-safe)

For dypere analyser:

```
Think step-by-step before forming the final analysis.
Do not include the reasoning steps in the final output.
```

---

## 6. Example Prompt (Ready-to-Use)

```
TASK:
Analyze the following text and produce a structured evaluation.

INSTRUCTIONS:
- Identify the main themes
- List key points as bullets
- Identify risks
- Identify opportunities
- Provide actionable recommendations
- Do not add external facts
- Follow the required structure

OUTPUT FORMAT:
Summary:
Key Points:
Risks:
Opportunities:
Recommendations:

TEXT:
[insert_input_here]
```

--