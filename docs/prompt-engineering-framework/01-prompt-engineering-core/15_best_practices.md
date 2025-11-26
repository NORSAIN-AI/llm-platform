### FILE START: 15_best_practices.md

```markdown
---
title: "Prompt Engineering — Best Practices"
source: "22365_3_Prompt Engineering_v7"
part: "15"
date: "2025-02-01"
---

# Best Practices

**Summary:**  
Denne seksjonen samler de viktigste prinsippene for å lykkes med prompt engineering. Den dekker struktur, klarhet, modellkonfigurasjon, testing, evaluering og dokumentasjon — og fungerer som en operativ “gold standard” for daglig bruk.

**Key Points:**
* Klare instrukser og eksplisitt struktur gir best resultater.
* Lav temperatur gir presisjon; høy temperatur gir kreativitet.
* Dokumentasjon, iterasjon og testing er helt avgjørende.
* Kombiner teknikker strategisk (CoT, few-shot, schema, kontrakter).

**Critical Details:**

## Overordnede prinsipper
- En god prompt er **klar**, **konsis** og **presis**.  
- Spesifiser alltid:
  - hva modellen skal gjøre  
  - hvordan den skal gjøre det  
  - hvilket format output skal være i  
- Unngå uklarheter og dobbeltbetydninger.

---

## Struktur som grunnmur
Modeller leverer bedre når du gir:
- klare instruksjoner  
- eksplisitte formatkrav  
- faste maler  
- tydelige seksjoner  

Eksempel på grunnstruktur:
```

Task:
Context:
Instructions:
Output Format:
Constraints:

```

---

## Modellkonfigurasjon
- **Lav temperatur** → fakta, presisjon, determinisme  
- **Høy temperatur** → kreativitet, variasjon  
- Kontroller top-K og top-P ved behov  
- Sett realistiske token-limiter  
- Dokumenter alltid konfigurasjonen du bruker

---

## Bruk av eksempler
- Few-shot gir best strukturert output  
- Eksempler må være:
  - riktige  
  - representative  
  - konsise  
- Inkluder *edge cases* når robusthet er viktig

---

## CoT og resonnering
- Be eksplisitt om stegvis resonnement.  
- Kombiner gjerne CoT med self-consistency for tung logikk.  
- Trim resonnementet om du bare trenger konklusjonen.

---

## Validering og struktur
- Bruk **JSON**, **YAML** eller **schema-guidet output** for presisjon.  
- Kjør reparasjonsvalidering ved behov (se kapittel 16).  
- Unngå fritekst hvis data skal brukes programmatisk.

---

## Teststrategi
- Test prompts på forskjellige inputs.  
- Evaluer output mot:
  - korrekthet  
  - struktur  
  - stabilitet  
  - konsistens  
- Utfør både:
  - positive tests (forventet input)  
  - negative tests (uvanlige inputs)

---

## Dokumentasjon
- Bruk versjonskontroll for prompts (tabellmodell anbefalt).  
- Logg:
  - mål  
  - prompt  
  - modellvalg  
  - parametere  
  - resultater  
- Ta vare på “best performing prompts”.

---

## Vanlige feil å unngå
- For lange prompts uten struktur  
- Motstridende instrukser i samme prompt  
- For høy temperatur i presisjonsoppgaver  
- Eksempler som inneholder feil  
- Uklare formatkrav  
- For mange roller samtidig

---

## Kombinasjon av teknikker
Kombiner teknikker strategisk for høyest kvalitet:

- **System + Role + Context** → styring, identitet, domenepresisjon  
- **Few-shot + CoT** → strukturert resonnering  
- **Schema + JSON** → maskinlesbar presisjon  
- **Step-back + CoT** → dypere logikk  
- **Self-consistency + ToT** → komplekse problemer  
- **ReAct** → agent-oppgaver og verktøykall  

---

## Operativ sjekkliste
En god prompt bør:
- ha ett tydelig mål  
- beskrive oppgaven eksplisitt  
- inkludere kontekst ved behov  
- bruke riktig teknikk (zero-shot, few-shot, CoT …)  
- kontrollere modellparametere  
- spesifisere format  
- teste og evalueres  
- dokumenteres  

```