# **`practical_examples.md` (v1.0)**

**COPY–PASTE READY**

```markdown
---
document_id: NPEF-EX-001
title: "Practical Prompt Engineering Examples"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - examples
  - prompt_engineering
  - use_cases
  - norsain_framework
---

# Practical Prompt Engineering Examples

Dette dokumentet gir en praktisk og operativ oversikt over hvordan de sentrale teknikkene i NORSAIN Prompt Engineering Framework (NPEF) brukes i praksis.  
Eksemplene dekker alle hovedkategorier: prompting, reasoning, strukturert data, kode, dokumentasjon og multimodalitet.

Eksemplene er laget for:
- daglig bruk i engineering  
- QMS/IMS-prosesser  
- systemintegrasjoner  
- agent- og automatiseringsløp  
- skrive- og analysesituasjoner  

---

# 1. Zero-Shot Prompting Example

**Formål:** Løse en oppgave uten eksempler.

**Prompt:**
```

Summarize the following text in 3 bullet points.
TEXT: [insert]

```

**Bruk når:**
- Oppgaven er standardisert  
- Formatkrav er enkle  
- Du ønsker lav kompleksitet

---

# 2. One-Shot / Few-Shot Examples

## One-shot:
```

Rewrite the text in a formal tone.
Example:
Input: "Hei, dette må vi fikse."
Output: "Dette må utbedres."

Now rewrite:
[insert]

```

## Few-shot:
```

Classify issue reports into: SAFETY, PROCESS, CUSTOMER.

Examples:
Input: "Maskinen stoppet brått."
Output: SAFETY

Input: "Kunden ønsker ny funksjon."
Output: CUSTOMER

Classify this:
[insert]

```

**Bruk når:**
- Konsistens er viktig  
- Du trenger mønsterlæring  
- Oppgaven er tvetydig uten eksempler  

---

# 3. System / Role Prompting Example

```

You are a QMS Advisor for NORSAIN.
Your job is to interpret the text according to IMS 2025 standards.

TASK:
Summarize the deviation and propose corrective actions.

TEXT:
[insert]

```

**Bruk når:**  
Du vil gi modellen et definert rollerom.

---

# 4. Step-Back Prompting

**Formål:** Redusere kognitiv bias.

```

Before answering, step back and identify what the question is *really* asking.
Then provide the best possible answer.

QUESTION:
[insert]

```

---

# 5. Chain-of-Thought (Controlled)

```

Think step-by-step internally.
Do not reveal your reasoning.
Summarize your reasoning in 3–4 sentences.

QUESTION:
[insert]

```

---

# 6. Self-Consistency Example

```

Provide 3 reasoning paths internally.
Pick the answer that appears most consistent across paths.
Return only the final answer.

QUESTION:
[insert]

```

---

# 7. Tree-of-Thought Example

```

Explore the problem via 3 branches:

1. simple approach,
2. analytical approach,
3. creative approach.

Select the best branch.
Return only the final answer.

```

---

# 8. ReAct (Reason + Act) Example

```

Step 1: Reason about the problem
Step 2: Select an action from: [SEARCH, SUMMARIZE, EXTRACT]
Step 3: Execute the action

TEXT:
[insert]

```

---

# 9. Automatic Prompt Engineering Example

```

Generate 3 improved versions of this prompt.
Explain what is improved in each.

PROMPT:
[insert]

```

---

# 10. Code Prompting Examples

## A) Generate
```

Write a TypeScript function that validates an email.
Return code only.

[requirements]

```

## B) Refactor
```

Refactor the following code for readability.
Return only updated code.

CODE:
[insert]

```

## C) Add Documentation
```

Add JSDoc-style documentation to this function.

```

---

# 11. JSON Repair Example

```

Return strictly valid JSON.
If the model detects invalid structure,
fix it and output corrected JSON only.

JSON:
[insert]

```

---

# 12. Schema-Based Output Example

```

Validate output against this schema.
If invalid, correct before returning.

SCHEMA:
[insert]

TEXT:
[insert]

```

---

# 13. Multimodal Example

```

Analyze this image.
Describe:

* objects
* relationships
* potential safety issues

IMAGE:
[upload_image_here]

```

---

# 14. Best-Practice Prompt Structure Example

```

TASK:
CONTEXT:
INSTRUCTIONS:
CONSTRAINTS:
OUTPUT FORMAT:
TEXT:

```

---

# 15. QMS/IMS-Specific Example

```

Extract CAPA fields from this deviation.

OUTPUT JSON:
{
"issue": "",
"root_cause": "",
"corrective_action": ""
}

```

---

# 16. Engineering Example: Code Review

```

Review the code for:

* readability
* error handling
* security issues

Return improvements as bullet points.

CODE:
[insert]

```

---

# 17. Risk Analysis Example

```

Identify risks based on the text.
Classify each risk as:

* Likelihood (Low/Med/High)
* Impact (Low/Med/High)

TEXT:
[insert]

```

---

# 18. API Documentation Example

```

Create API documentation for the following function.

FORMAT:

* Endpoint
* Method
* Parameters
* Responses
* Example

```

---

# 19. Business Writing Example

```

Write a professional summary of this business case.
Tone: formal, structured, concise.

```