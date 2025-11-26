---
title: "Chain of Thought (CoT)"
source: "22365_3_Prompt Engineering_v7"
part: "08"
date: "2025-02-01"
---

# Chain of Thought (CoT)

**Summary:**  
Chain-of-Thought prompting instruerer modellen til å forklare resonnementet sitt steg for steg. Ved å eksplisitt generere mellomliggende tanketrinn gir CoT bedre logikk, høyere presisjon og større transparens, spesielt i komplekse oppgaver som krever matematikk, analyse eller multistegs vurderinger.

**Key Points:**
* CoT genererer eksplisitte resonnementstrinn før sluttresultatet.
* Forbedrer nøyaktighet og logisk sammenheng i komplekse problemer.
* Kan kombineres med few-shot eksempler for maksimal effekt.
* Øker tokenbruk og kostnad, men gir mer robuste og etterprøvbare svar.

**Critical Details:**

## Hva er Chain-of-Thought?
- En prompting-teknikk der modellen instrueres til å:
  - tenke stegvis  
  - forklare mellomregning  
  - vise logikk og delresonnement før slutt-svar  
- Eksempelinstruks: **“Let’s think step by step.”**

## Når CoT er nyttig
Chain-of-Thought egner seg spesielt for:
- matematiske problemer  
- logiske resonneringer  
- komplekse vurderinger  
- kodeanalyse  
- planlegging og oppgaveløsning  
- datastrukturering og transformasjon  

LLM-er sliter ofte med matematikk og flerleddede problemer uten CoT, men forbedres dramatisk med stegvis resonnement.

---

## Eksempel fra dokumentet (kondensert)

### Uten CoT (feilsvar)
**Prompt:**  
*When I was 3 years old, my partner was 3 times my age. Now I am 20 years old. How old is my partner?*  
**Output:** 63 (feil)

Modellen bommer fordi den hopper direkte til et svar uten å bryte ned logikken.

### Med CoT (korrekt)
**Prompt:**  
*Let's think step by step.*  
**Output (kondensert):**
- Da jeg var 3 → partner var 9  
- Aldersforskjell = 6  
- Nå er jeg 20 → partner = 26  

Gir riktig svar med tydelig forklaring.

---

## Zero-Shot CoT vs Few-Shot CoT
- **Zero-shot CoT**: Bruker kun setningen “Let’s think step by step.”  
- **Few-shot CoT**: Viser eksempler som demonstrerer riktig resonnement.

Few-shot CoT er vesentlig mer stabilt og presist ved tunge resonnementer.

---

## Fordeler med CoT
- Økt nøyaktighet i komplekse oppgaver  
- Bedre feilsøking (man kan se hvor modellen tenker feil)  
- Mer robuste prompts ved modellbytte  
- Bedre transparens i kritiske anvendelser  

## Ulemper
- Krever flere tokens → høyere kostnader  
- Modellen kan bli for detaljert → behov for trimming  
- CoT-output kan være variabelt ved høy temperatur  

---

## Beste praksis for Chain-of-Thought
- Bruk **lav temperatur** når korrekthet er viktig.  
- Bruk **few-shot** for oppgaver med høy kompleksitet.  
- Trim CoT-output om du kun trenger sluttresultatet.  
- Bruk eksplisitte instrukser som:  
  - “Explain your reasoning step by step.”  
  - “Show the intermediate steps.”  
- Dokumentér CoT-varianter og evaluer kvaliteten.

---

## CoT i kombinasjon med andre teknikker
- **Self-Consistency**: Forsterker CoT ved å kjøre flere resonnementer.  
- **Tree-of-Thoughts**: Utvider CoT ved å utforske flere løsningsveier.  
- **ReAct**: Kombinerer resonnement og handling, særlig nyttig for verktøybruk.  

