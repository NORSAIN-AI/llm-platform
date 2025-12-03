---
title: "JSON Repair Techniques"
source: "22365_3_Prompt Engineering_v7"
part: "16"
date: "2025-02-01"
---

# JSON Repair

**Summary:**  
Denne seksjonen beskriver metoder for å validere, reparere og sikre korrekt JSON-output fra LLM-er. Målet er å håndtere vanlige feil som manglende anførselstegn, feil strukturer, kommafeil eller tekststøy, slik at output blir maskinlesbar og pålitelig.

**Key Points:**

* LLM-er genererer ofte JSON som ikke er 100 % gyldig.
* Reparasjon kan gjøres via prompting eller ved bruk av valideringsverktøy.
* Best praksis er å kombinere streng formatinstruks + reparasjonsinstruks.
* Strukturert testing og streng syntaks gir mest stabilitet.

**Critical Details:**

## Hvorfor JSON-reparasjon er nødvendig

LLM-er har en tendens til å:
* blande fritekst med JSON  
* glemme anførselstegn  
* legge inn komma på feil sted  
* produsere trailing text  
* bryte JSON-schema  

Dette er kritisk når output skal brukes av maskiner, API-er eller pipelines.

---

## Vanlige JSON-feil fra modeller
* Ubalanserte klammer `{ }`  
* Ubalanserte brackets `[ ]`  
* Manglende anførselstegn rundt nøkler  
* Trailing commas  
* Non-JSON-tekst i output  
* Ufullstendige strukturer  
* Feil datatype (string i stedet for number)  
* Modellens “forklaringer” blandet inn i JSON-blokken

---

## Teknikker for JSON-reparasjon

### 1. Be modellen validere sin egen output

Eksempel:

```

Return JSON only. Then validate your output. If the JSON is invalid, fix it.

```

### 2. Be om reparasjon i et separat steg

```

First: produce JSON.
Second: check validity.
Third: output corrected JSON.

```

### 3. Bruk JSON Schema for presisjon

Gi modellen et JSON Schema og be den samsvare.

### 4. Reparasjonsinstruks etter feil

```

Here is invalid JSON. Repair it without adding or removing data.

```

### 5. Fjern forklaringstekst

```

Do not include any explanation or commentary. Output JSON only.

```

---

## JSON Repair Through Prompting (fra dokumentet)

Dokumentet anbefaler en enkel og effektiv reparasjonsoppskrift:

1. Be modellen om å **returnere JSON**.  
2. Ta resultatet og wrap i en ny prompt:  

```

Fix this JSON: <invalid JSON>

```
1. Modellen renser, reparerer og returnerer gyldig struktur.

Gir høy suksessrate og kan automatiseres.

---

## Beste praksis
* Instruer modellen til å bruke **kun dobbeltanførselstegn**.  
* Bruk **schema-validering** for stabile strukturer.  
* Bruk **few-shot eksempler** på korrekt JSON-format.  
* Legg inn eksplisitt krav:  

```

Output must be valid JSON, no trailing text.

```
* Sett **temperatur = 0** for deterministisk struktur.  
* Unngå blanding av forklaring og JSON — be modellen separere steg.  
* Test output med en automatisk validator (f.eks. ajv, jq, Python json.loads).  

---

## Sjekkliste for JSON-pipeline
* Har du definert schema?  
* Har du eksplisitt blokkert fritekst?  
* Testes output i validator?  
* Har du fallback-steg for reparasjon?  
* Dokumenteres JSON-output i prompt-loggen?  

`
