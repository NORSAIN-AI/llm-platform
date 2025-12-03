---
title: "One-Shot & Few-Shot Prompting"
source: "22365_3_Prompt Engineering_v7"
part: "05"
date: "2025-02-01"
---

# One-Shot & Few-Shot Prompting

**Summary:**  
Denne seksjonen forklarer hvordan du kan forbedre modellens nøyaktighet og struktur ved å inkludere ett eller flere eksempler i promptet. One-shot gir ett eksempel, mens few-shot viser flere eksempler for å etablere et mønster modellen skal følge.

**Key Points:**

* One-shot = ett eksempel. Few-shot = flere eksempler.
* Eksempler hjelper modellen å lære ønsket struktur, format og logikk.
* Few-shot egner seg svært godt for komplekse eller strukturelle oppgaver.
* Eksemplene må være korrekte, relevante og fri for feil — modellen imiterer dem.

**Critical Details:**

## Hvorfor bruke eksempler
* LLM-er er mønstergjenkjennere. Eksempler:
  * etablerer *format*, *tone*, *struktur* og *logikk*  
  * viser modellen *hva slags output* du forventer  
  * reduserer risiko for hallucinasjon  
* Spesielt viktig for:
  * parsing  
  * strukturert data (JSON, CSV-lignende output)  
  * klassifisering med komplekse kategorier  
  * kreative oppgaver med spesifikk stil  

## One-Shot Prompting
* Gir modellen **ett** eksempel.
* Nyttig når:
  * oppgaven er moderat kompleks  
  * du vil vise struktur, men ønsker kort prompt  
* Risiko: ett eksempel kan forme resultatet for mye dersom eksemplet er ensidig.

### Viktige prinsipper
* Eksemplet må være:
  * korrekt  
  * representativt  
  * språklig presist  
* Unngå irrelevante detaljer — modellen *imiterer alt*.

## Few-Shot Prompting
* Gir modellen **flere eksempler**, typisk 3–5.
* Brukes når:
  * modellen trenger et klarere mønster  
  * output har kompleks struktur  
  * du ønsker konsistens mellom inputs og outputs  
* Jo mer komplekst problemet er, desto viktigere er kvaliteten på eksemplene.

### Antall eksempler
* Dokumentet anbefaler minst **3–5** eksempler for robust mønstergjenkjenning.
* Flere eksempler kan være nødvendig ved:
  * uvanlige datastrukturer  
  * flertydig klassifisering  
  * språklige nyanser  
* Begrensning: input-length (modellens maks tokens).

## Eksempelsammendrag fra dokumentet

**Oppgave:** Parse pizza-bestillinger til gyldig JSON.  
**Modell:** gemini-pro  
**Temperatur:** 0.1  
**Token-limit:** 250  

Eksemplene viser:
* størrelse  
* type  
* ingredienser  
* halv/halv logikk

Modellen imiterer struktur nøyaktig, noe som viser hvor viktig det er at eksemplene er korrekte.

## Kritiske anbefalinger
* **Eksempler må aldri inneholde feil** → modellen reproduserer dem som “fasit”.
* Inkluder **edge cases** dersom robusthet er viktig.
* Hold eksempler konsise og tydelige.
* Unngå overlappende eller selvmotsigende eksempler.
* Dokumentér alltid eksemplene — hver endring kan påvirke modellens atferd.

## Når bruke one-shot vs few-shot

| Situasjon | Anbefaling |
|----------|------------|
| Oppgaven er enkel | Zero-shot eller one-shot |
| Oppgaven krever spesifikk struktur | Few-shot |
| Modellen feiler i zero-shot | Gå til one-shot |
| Output varierer for mye | Legg inn flere og mer konsise eksempler |
| Promptet er langt | Hold deg til 1–2 eksempler |
