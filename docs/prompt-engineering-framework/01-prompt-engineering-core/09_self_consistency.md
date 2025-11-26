---
title: "Self-Consistency"
source: "22365_3_Prompt Engineering_v7"
part: "09"
date: "2025-02-01"
---

# Self-Consistency

**Summary:**  
Self-consistency bygger videre på Chain-of-Thought ved å generere flere uavhengige resonnementer og velge det mest konsistente sluttresultatet. Metoden øker nøyaktigheten betydelig i problemer som krever logikk, flerstegs analyse eller matematisk presisjon.

**Key Points:**
* LLM-en kjøres flere ganger med samme CoT-prompt.
* Høy temperatur brukes for å generere variasjon i resonnementene.
* Sluttsvaret velges ved “majority vote”.
* Gir dramatisk kvalitetsforbedring i komplekse vurderinger.

**Critical Details:**

## Hva er Self-Consistency?
Self-consistency er en forbedring av Chain-of-Thought hvor:
1. Modellen genererer **flere** steg-for-steg resonnementer.  
2. Man trekker ut **sluttsvaret** fra hvert resonnement.  
3. Man velger **det mest hyppige svaret** som endelig svar.

Dette fungerer som en “ensemble”-tilnærming, tilsvarende flermodellvotering.

---

## Hvorfor det fungerer
- Enkelt-CoT kan gi feil hvis modellen velger en uheldig resonneringsvei.  
- Flere uavhengige resonnementer gir:
  - variasjon  
  - bredere utforskning av løsningsrommet  
  - høyere sannsynlighet for at riktig svar dukker opp flest ganger  
- Kombinerer kreativitet (temperatur) og logikk (stemming).

---

## Hvordan metoden utføres
Fremgangsmåte:

1. **Bruk en CoT-prompt**, f.eks.:  
   *“Classify this email as IMPORTANT or NOT IMPORTANT. Let's think step by step.”*

2. **Sett temperaturen høyt** (0.7–1.0) for å generere variasjon.

3. **Kjør promptet flere ganger**, typisk 5–20 ganger.

4. **Trekk ut sluttkonklusjonen** fra hver generert respons.

5. **Stem** → mest vanlige konklusjon velges som det endelige svaret.

---

## Eksempelsammendrag fra dokumentet

### Oppgave:
Klassifiser en e-post som *IMPORTANT* eller *NOT IMPORTANT*.

### Observasjon:
- Forskjellige forsøk gir forskjellige CoT-resonnementer.
- Noen forsøk fokuserer på potensial for XSS-angrep og kategoriserer e-posten som **IMPORTANT**.
- Andre vurderer tonen som lav-urgens og kategoriserer den som **NOT IMPORTANT**.

### Resultat:
Ved å sammenligne alle sluttkonklusjoner kan man velge majoritetsvurderingen som mest sannsynlige korrekte klassifisering.

---

## Fordeler
- Dramatisk forbedret nøyaktighet i flertydige problemer.  
- Reduserer risiko for feil fra enkeltresonnementer.  
- Transparent metodikk som kan dokumenteres og evalueres.  
- God for sikkerhetskritiske eller analytiske domener.

## Begrensninger
- Høyere tokenkostnad (flere genereringer).  
- Krever aggregasjonslogikk (majoritetsstemming).  
- Kan være tregere i store arbeidsflyter.  

---

## Beste praksis
- Bruk **høy temperatur** for variasjon i resonnement.  
- Hent ut **kun sluttsvaret** — ikke hele resonnementet — for stemmeprosessen.  
- Start med 5 genereringer og øk ved behov.  
- Loggfør alle kandidatsvar i et kontrollskjema.  
- Kombiner gjerne med:
  - Chain-of-Thought  
  - Tree-of-Thoughts (for flerveis utforskning)  

