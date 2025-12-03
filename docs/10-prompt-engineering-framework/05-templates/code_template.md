---
document_id: NPEF-TPL-006
title: "Code Prompt Template"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - templates
  - code_generation
  - refactoring
  - development
  - norsain_framework
---

# Code Prompt Template

## 1. Purpose

Denne malen brukes for prompts som skal generere, forbedre, dokumentere eller refaktorere kode.  
Formålet er å sikre:

- konsistent output  
- produksjonsklar kode  
- deterministiske strukturer  
- trygg og stabil bruk av LLM i utviklingsprosesser  

Denne malen er optimalisert for bruk i NORSAIN engineering workflows (Node/TS, Python, Go, infra, API, backend core, osv.).

---

## 2. Standard Structure

### **Task**

Definer nøyaktig hva som skal gjøres:

Eksempler:

- «Generer en funksjon i TypeScript som validerer input.»  
- «Refaktorer denne Python-koden for bedre ytelse.»  
- «Produser et komplett API-endepunkt med validering og dokumentasjon.»

### **Context (optional)**

Gi nødvendig teknisk bakgrunn:

- språk og rammeverk  
- kodebase-standarder  
- repository conventions  
- krav (performance, readability, security)  

### **Instructions**

- Returner **kun kode i en kodeblokk**  
- Ingen forklaringer, ingen metatekst (med mindre eksplisitt bedt om)  
- Følg språkets stil (TS/Prettier, Python/PEP8, Go idioms)  
- Behold funksjonalitet ved refaktorering  
- Ikke introduser nye funksjoner med mindre spesifisert  
- Strukturér logisk (imports → types → functions → exports)  
- Valider input hvis relevant  
- Unngå antagelser om data som ikke er gitt  

---

## 3. Output Format

### **A) Code-only (default)**

````markdown
```typescript
// kode her
`````

`````

### **B) Code + minimal explanation (optional)**  
(typisk for debugging eller arkitektur-justeringer)

````markdown
```python
# kode her
```

Explanation:
- Kort punktliste med hva som er endret
`````

### **C) JSON Code Object (rare – for pipelines)**

```json
{
  "language": "typescript",
  "code": ""
}
```

---

## 4. Language-Specific Options

### **TypeScript / Node**

- Bruk Prettier-kompatibel stil
- Eksporter eksplisitt
- Unngå `any`
- Følg repository-arkitektur (core/api/shared)

### **Python**

- Følg PEP8
- Bruk typer (`typing`) når relevant
- Unngå global state
- Returner deterministiske strukturer

### **Go**

- Idiomatisk Go
- Bruk pakke-prefikser riktig
- Organiser imports etter standarden

### **General Security Controls**

- Escapede strenger ved behov
- Ingen hardkodede credentials
- Ikke lek med filsystemet uten kontekst
- Sanitér input i API-kode

---

## 5. Optional Reasoning Guardrail

Legg til for å skjule intern tenking:

```
Think step-by-step internally, but output only the final code.
```

---

## 6. Example Prompt (Ready-to-Use)

````markdown
TASK:
Refactor the following TypeScript function for readability and maintainability.

CONTEXT:
Used in the NORSAIN backend core validation module.

INSTRUCTIONS:
- Return code only
- Improve naming
- Add basic input validation
- No behaviour changes

OUTPUT FORMAT:
```typescript
// TypeScript code
```

CODE TO REFACTOR:
[insert_code_here]
````

---
