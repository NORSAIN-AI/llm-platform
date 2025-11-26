---
title: "Prompting Techniques — Overview"
source: "22365_3_Prompt Engineering_v7"
part: "03"
date: "2025-02-01"
---

# Prompting Techniques (Overview)

**Summary:**  
Denne seksjonen gir et helhetlig overblikk over de viktigste prompting-teknikkene som brukes for å styre LLM-er. Den forklarer hvorfor klare instrukser gir bedre resultater, og introduserer konseptene som utdypes i senere moduler som zero-shot, few-shot, system/rolle/kontekst, step-back, CoT og selvkonsistens.

**Key Points:**
* Klare instrukser gir mer relevante og presise svar.
* Prompting drar fordel av hvordan LLM-er er trent og hvordan de predikerer tekst.
* Flere teknikker kan kombineres for bedre kontroll og presisjon.

**Critical Details:**

## Hvorfor prompting-teknikker er nødvendige
- LLM-er er **instruksjonsfølsomme** — presise instrukser gir presise resultater.  
- Uklare prompts fører ofte til:
  - avsporing  
  - uønsket kreativitet  
  - unøyaktige eller ustrukturerte svar  
- Prompting-teknikker er et rammeverk for å systematisk forbedre output.

## Hovedgrupper av prompting-teknikker (intro)
Dokumentet dekker følgende teknikker i dybden i senere kapitler:

### 1. **Zero-Shot Prompting**
- Ingen eksempler.  
- Kun instruks + tekst.  
- Effektivt for enkle oppgaver.

### 2. **One-Shot & Few-Shot Prompting**
- Ett eller flere eksempler for å vise modellen format, logikk og forventning.  
- Hjelper med mønstergjenkjenning og struktur.

### 3. **System-, Role- & Contextual Prompting**
- System: definerer modellens ramme og regler.  
- Rolle: gir modellen en identitet eller posisjon.  
- Kontekst: gir bakgrunnsinfo som styrer tolkning og output.

### 4. **Step-Back Prompting**
- Får modellen til å ta et "metaperspektiv" før problemløsing.  
- Aktiverer bredere kunnskap og gir bedre slutninger.

### 5. **Chain of Thought (CoT)**
- Ber modellen forklare logikken stegvis.  
- Kritisk for komplekse resonneringsoppgaver.

### 6. **Self-Consistency**
- Kjører flere CoT-svar og plukker majoritetsresultatet.  
- Øker presisjon, spesielt i logiske problemer.

### 7. **Tree-of-Thoughts (ToT)**
- Utforsker flere løsningsveier som et søketre.  
- For avansert beslutningstaking og bransjeoppgaver.

### 8. **ReAct**
- Kombinerer *reasoning* og *acting* (handlinger/verktøy).  
- For agentsystemer og verktøy-integrerte arbeidsflyter.

### 9. **Automatic Prompt Engineering (APE)**
- LLM-en forbedrer sitt eget prompt.  
- Iterativ prompt-generering → optimal kvalitet.

### 10. **Kode-, multimodal- og strukturert prompting**
- Fokus på kodegenerering, bildeforståelse og datastrukturering.

## Viktige generelle prinsipper
- **Klarhet > alt**  
- **Gi modellen struktur → få struktur tilbake**  
- **Prompting er iterativt, ikke statisk**  
- **Dokumentasjon av hver promptversjon er kritisk**  
- **Modellkonfigurasjoner (temperatur / top-K / top-P) og prompttekst må sees i sammenheng**

