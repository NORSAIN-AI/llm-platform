---
title: "Code Prompting"
source: "22365_3_Prompt Engineering_v7"
part: "13"
date: "2025-02-01"
---

# Code Prompting

**Summary:**  
Denne seksjonen beskriver teknikker som gjør LLM-er mer pålitelige for kodegenerering, feilsøking, refaktorering og strukturert teknisk output. Fokus ligger på klarhet, kontekst, eksempler og streng spesifikasjon av format for å sikre korrekt og kjørbar kode.

**Key Points:**

* Kodeprompting krever presise krav, struktur og formatspesifikasjoner.
* Eksempler (few-shot) og kontekst forbedrer stabilitet og kvalitet.
* LLM-er bør styres mot gyldig syntaks, eksplisitte språkvalg og tydelige rammer.
* Modellen må fortelle hva den skal generere, hvordan, og i hvilket format.

**Critical Details:**

## Hvorfor kodeprompting krever mer presisjon

LLM-er er svært flinke til å generere tekstlig kontekst, men kode krever:
* syntaktisk gyldighet  
* logisk struktur  
* samsvar med programmeringsspråk  
* konsistens mellom input og output  
* klar spesifikasjon av rammer (moduler, språk, API-er)  

Uten dette kan modellen generere:
* pseudokode  
* språkblanding  
* feil i indentasjon, imports, dependency-navn  
* funksjoner som ikke samsvarer med krav  

---

## Viktige prinsipper for kodeprompting

### 1. Spesifiser **eksakt språk**

Eksempel:

```

Write valid TypeScript. Do not use JavaScript syntax.

```

### 2. Definer **output-format**

Eksempel:  
* “Return ONLY code in a fenced code block.”  
* “Include no comments unless explicitly requested.”  
* “Follow PEP8 strictly.”  

### 3. Gi **kontekst** og domenekrav

For eksempel:
* API-dokumentasjon  
* eksisterende filstruktur  
* variabelnavn  
* constraints (ingen nettverkskall / ingen globale variabler)

### 4. Bruk **few-shot** for mønstre

Vis modellen hva slags struktur du forventer:

```

Input → Function A
Output → transformed result

Input → Function B
Output → another transformation

```

### 5. Be om **forklaring separat** fra koden

For å unngå at forklaring blandes med kode:

```

First: EXPLAIN.
Second: OUTPUT CLEAN CODE.

```

---

## Eksempler på kodeorienterte teknikker

### Feilsøking

Prompt modellen til å:
* identifisere feil  
* forklare årsak  
* gi patch  
* returnere endret kode  

### Refaktorering

Be om:
* modularisering  
* bedre variabelnavn  
* oppdeling i funksjoner  
* fjerning av duplisert logikk  

### Oversettelse mellom språk

Eksempel:

```

Convert this Python script to idiomatic Go.

```

### Kodegenerering basert på spesifikasjon

Modellen kan generere:
* klasser  
* API-endepunkter  
* datamodeller  
* verktøyfunksjoner  
* testfiler  

### JSON eller schema-styrt kodegenerering

Bruk av schema gir svært presis output:
* OpenAPI  
* JSON Schema  
* TypeScript interfaces

---

## Beste praksis for kodeprompting
* Spesifiser **hvilke biblioteker** som skal brukes (og ikke brukes).  
* Lås fast versjoner om nødvendig (“use Python 3.10 features only”).  
* Be alltid om **valid compilable output**.  
* Hold temperatur lav for deterministisk kode.  
* Bruk få, gode eksempler — ikke lange.  
* Logg prompts for reproduserbarhet.  

---

## Begrensninger
* LLM-er kan generere kode som ser riktig ut, men som ikke kjører.  
* Sikkerhetshull kan oppstå hvis modellen ikke er instruert til defensiv koding.  
* Modellen er ikke en fullverdig kompilator — test alltid i faktisk miljø.  
* Store kodebaser krever segmentering av prompts per modul.

```
