---
title: "Overall Summary"
source: "22365_3_Prompt Engineering_v7"
part: "18"
date: "2025-02-01"
---

# Summary

**Summary:**  
Denne seksjonen oppsummerer hele dokumentets innhold på tvers av alle 17 foregående kapitler. Den fremhever hovedprinsipper, teknikker og strategier for effektiv prompt engineering, samt hvordan teknikkene kombineres for maksimal kvalitet, stabilitet og kontroll.

**Key Points:**

* Prompt engineering handler om struktur, klarhet, format og kontroll.
* Modellkonfigurasjon (temperatur, top-K, top-P) påvirker alt.
* Teknikker som few-shot, CoT, self-consistency og schema gir stabilitet.
* Dokumentasjon og iterasjon er avgjørende for høykvalitets workflows.

**Critical Details:**

## Fundamentet: Hva prompt engineering er
* Å gi LLM-er presise instrukser for å oppnå ønsket output.  
* Handler om:
  * målformulering  
  * kontekststyring  
  * struktur  
  * formatkrav  
  * modellparametere  
* Den viktigste regelen: **klarhet vinner alltid**.

---

## Modellkonfigurasjon

Dokumentet legger stor vekt på:
* temperatur  
* top-K  
* top-P  
* token-limits  

Lav temperatur for presisjon, høy temperatur for kreativitet.

---

## Teknikker i oversikt

Hele dokumentet beskriver et sett teknikker som fungerer som et verktøysett for eksperter:

### Zero-shot

Rene instrukser uten eksempler.

### One-shot / Few-shot

Eksempler som etablerer ønsket mønster og format.

### System / Role / Context

Modellen får rammer, identitet og informasjon.

### Step-back

Modellen løfter blikket og aktiverer større kunnskapsrom.

### Chain of Thought (CoT)

Stegvis resonnement som øker nøyaktighet.

### Self-consistency

Flere CoT-kjeder → majoritetsvotering.

### Tree-of-Thoughts (ToT)

Utforsker flere resonneringsveier som et tanketre.

### ReAct

Kombinasjon av resonnement og handling.

### Automatic Prompt Engineering (APE)

Iterativ prompt-optimalisering.

### Code prompting

Presis og formatstyrt kodegenerering.

### Multimodal prompting

Kombinerer tekst og bilder for rikere analyser.

### JSON repair

Teknikker for validering og reparasjon av strukturert output.

### Schema-based prompting

Definerer kontrakter som styrer modellens output.

---

## Beste praksis
* Bruk **eksplisitte formatkrav**.  
* Dokumentér alle prompts og iterasjoner.  
* Test prompts mot forskjellige inputs.  
* Bruk schema for strukturerte data.  
* Kombiner teknikker for maksimal effekt.  
* Skill mellom kreativitet og presisjon.  
* Hold prompts korte, men strukturerte.

---

## Sammenheng mellom teknikkene

Teknikkene virker best i kombinasjon:

* **Zero-shot → few-shot → CoT → self-consistency**  
  (stigende presisjon etter behov)

* **System + Role + Context**  
  (full stil-, ramme- og domenekontroll)

* **Schema + JSON repair**  
  (maskinlesbar output)

* **ToT + ReAct**  
  (agenter, verktøy og komplekse problemer)

* **APE + validering**  
  (optimaliserte prompts som utvikler seg over tid)

---

## Konklusjon

Prompt engineering er et fag som kombinerer:

* språklig presisjon  
* systemtenkning  
* modellforståelse  
* teknisk struktur  
* eksperimentering  

Når man mestrer teknikkene i dokumentet, får man:
* mer stabil output  
* færre feil  
* bedre kontroll  
* automatisk validerbar informasjon  
* økt produktivitet i både kode og forretningsprosesser  

Dette opsummeringskapittelet fungerer som en syntese av alt — et fundament for videre arbeid og raffinering.
