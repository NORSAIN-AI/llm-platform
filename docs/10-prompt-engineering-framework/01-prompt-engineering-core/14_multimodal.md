---
title: "Multimodal Prompting"
source: "22365_3_Prompt Engineering_v7"
part: "14"
date: "2025-02-01"
---

# Multimodal Prompting

**Summary:**  
Multimodal prompting kombinerer tekst med andre datatyper som bilder for å gi LLM-en bredere kontekst og rikere input. Dette gir mer presis forståelse og bedre resultater i oppgaver som krever visuell tolkning, analyse eller kombinasjon av språk og bilde.

**Key Points:**

* Multimodale modeller kan tolke bilder, tekst og annen sensorisk informasjon i samme prompt.
* Egnet for bildeanalyse, dokumentforståelse, diagramtolkning og innholdsbeskrivelser.
* Struktur og presise instrukser er avgjørende for nøyaktige multimodale resultater.

**Critical Details:**

## Hva er multimodal prompting

Multimodal prompting innebærer at du gir modellen både:
* tekstlig input  
* bildefiler eller bildeinnhold  

Modellen kombinerer disse for:
* bedre kontekst  
* mer presis tolkning  
* rikere generering  
* visuell resonnering  

Moderne modeller (f.eks. Gemini) er trent på store mengder bilde-tekst-par, noe som gir svært god generalisering.

---

## Bruksområder

Multimodal prompting brukes i en rekke domener:

### Dokumentanalyse
* Tolkning av PDF-er  
* Skjemagjenkjenning  
* OCR-korreksjon  
* Ekstraksjon av tabeller og struktur

### Visuell analyse
* Klassifisering av objekter  
* Situasjonsforståelse  
* Kamerabilder / overvåkning  
* Bildebasert QA

### Kombinert språk + bilde
* Oppgaveløsning som krever visuell input  
* Forklaring av diagrammer og grafer  
* Teknisk feilsøking gjennom bilder  
* Analyse av brukergrensesnitt

---

## Viktige teknikker for multimodal prompting

### 1. Be om eksplisitt beskrivelse

Eksempler:

```

Describe everything you see in the image.

```

```

Summarize the content of this document page.

```

### 2. Be om struktur

Eksempel:

```

Extract all visible data into JSON with fields:

* title
* labels
* numbers
* entities

```

### 3. Definer domenet

Eksempel:

```

Analyze this wiring diagram as an electrical engineer.

```

### 4. Spesifiser visuelle områder om nødvendig

```

Focus only on the upper-left quadrant of the image.

```

### 5. Kombiner tekstlig og visuell kontekst

```

Based on both the text and image, determine the main issue in this technical setup.

```

---

## Styrker og begrensninger

### Fordeler
* Kombinerer språkforståelse med visuell intelligens  
* Svært kraftig for dokumentanalyse  
* Egnet for inspeksjon og teknisk gjennomgang  
* Gir modeller mulighet til å “se” og beskrive kontekst direkte

### Begrensninger
* Output kan variere hvis bildet er komplekst  
* Noen detaljer kan misforstås uten tydelig instruks  
* Bildekvalitet påvirker nøyaktighet  
* Strukturell utvinning (tabeller/diagrammer) krever presise formatkrav

---

## Beste praksis
* Gi klare, presise, konkrete spørsmål.  
* Be om strukturert output for tekniske eller datatunge bilder.  
* Splitt store dokumenter i sider eller regioner for best resultat.  
* Lag en prompt-mal for dokumentanalyse.  
* Kombiner multimodal prompting med:
  * CoT  
  * JSON-format  
  * schema-validering  
  * domain-role prompting  

```
