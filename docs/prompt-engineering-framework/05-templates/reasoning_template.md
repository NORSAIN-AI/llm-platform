Her er **`reasoning_template.md` (v1.0)** — ren Markdown, med full YAML-frontmatter og konsekvent struktur som resten av NPEF-malene.

---

# **`reasoning_template.md` (v1.0)**

**COPY–PASTE READY**

```markdown
---
document_id: NPEF-TPL-005
title: "Reasoning Prompt Template"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - templates
  - reasoning
  - chain_of_thought
  - structured_output
  - norsain_framework
---

# Reasoning Prompt Template

## 1. Purpose
Denne malen brukes når modellen skal **tenke gjennom et problem**, gjøre en begrunnet vurdering, arbeide metodisk, eller utføre strukturerte resonnementer.  
Den sikrer trygg, konsistent og kontrollert bruk av reasoning-teknikker uten at modellen eksponerer interne CoT- eller systemsteg i sluttoutput.

---

## 2. Principles of Safe Reasoning
- Modellen bør tenke i **kontrollerte steg**, men **ikke** vise disse i sluttoutput.  
- Bruk *reasoning scaffolding* for vanskelige oppgaver (analyse, logikk, debugging).  
- Output skal alltid være **kort, presis og forkortet** kontra den interne tankerekken.  
- Dersom oppgaven krever systemkritisk beslutning → bruk kontrollert struktur + validering.

---

## 3. Standard Structure

### **Task**
Angi hva modellen skal resonnere rundt.

Eksempler:  
- «Løs problemet stegvis og gi en kort konklusjon.»  
- «Vurder risiko basert på input og foreslå tiltak.»

### **Context (optional)**
Gi domenespesifikk kontekst (QMS, risiko, engineering, kode, juridisk, osv.).

### **Instructions**
- Tenk stegvis i en skjult resonnementskjede  
- Ikke vis tankesteg i sluttoutput  
- Bruk intern CoT trygt og komprimer til et kort endelig svar  
- Følg definert output-struktur  
- Ikke legg til fakta eller antakelser utenfor input  
- Ta hensyn til kontekst, regler og begrensninger  

---

## 4. Output Structure (Recommended)

```

Reasoning Summary:

* Kortfattet, kondensert forklaring av hovedlogikken (2–4 setninger)

Answer:

* Endelig konklusjon eller løsning

````

---

## 5. Optional JSON Output

For systemintegrasjoner:

```json
{
  "reasoning_summary": "",
  "answer": ""
}
````

---

## 6. Safe CoT Instructions (Optional Add-on)

Disse linjene kan legges til for ekstra kontroll:

```
Think step-by-step, but do not include the internal reasoning steps in the final answer.
Compress your reasoning into a short, accurate summary.
Ensure the answer is grounded strictly in the provided input.
```

---

## 7. Example Prompt (Ready-to-Use)

```
TASK:
Solve the following problem using stepwise reasoning, then provide a short final answer.

INSTRUCTIONS:
- Think step-by-step internally
- Do not reveal your chain of thought
- Provide a condensed reasoning summary (max 4 sentences)
- Provide a final, direct answer
- Use only the information given

OUTPUT FORMAT:
Reasoning Summary:
Answer:

TEXT:
[insert_input_here]
```

---