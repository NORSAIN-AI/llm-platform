---
title: "Zero-Shot Prompting"
source: "22365_3_Prompt Engineering_v7"
part: "04"
date: "2025-02-01"
---

# Zero-Shot Prompting

**Summary:**  
Zero-shot prompting er den enkleste prompting-formen og brukes når modellen kun får en instruksjon og input-tekst, uten eksempler. Seksjonen forklarer hvordan teknikken fungerer, når den er egnet, og hvilke parametere som sikrer stabile og presise resultater.

**Key Points:**

* Zero-shot = oppgave uten eksempler.
* Egnet for enkle og veldefinerte oppgaver.
* Krever presise instrukser og lav temperatur.
* Dokumentasjon av prompt-iterasjoner er en beste praksis.

**Critical Details:**

## Hva er Zero-Shot
* En **zero-shot prompt** består kun av:
  * en oppgavebeskrivelse  
  * eventuelt input-tekst som skal analyseres  
* Ingen demonstrasjoner eller eksempler gis, i motsetning til one-shot og few-shot.
* Fungerer best når:
  * modellen allerede har lært oppgavetypen gjennom treningsdata  
  * output-formatet er enkelt (f.eks. kategorisering eller kort svar)

## Hvorfor bruke Zero-Shot
* Raskest å sette opp.  
* Minimalt med kontekst nødvendig.  
* God start for prototyping før man går videre til one-shot/few-shot.  
* Forutsigbar når oppgaven er enkel og modellen er sterk.

## Viktige kvalitetsfaktorer
* Instruksjonen må være **krystallklar**, ellers blir resultatet tvetydig.  
* Lav temperatur anbefales, spesielt for klassifisering og faktabasert arbeid.  
* Output-formatet bør beskrives eksplisitt om man ønsker struktur.

## Eksempel fra dokumentet (kondensert)
* Oppgave: Klassifisere en filmomtale som POSITIVE / NEUTRAL / NEGATIVE.  
* Modell: gemini-pro  
* Temperatur: 0.1  
* Token-limit: 5  
* Observasjon: ord som *disturbing* og *masterpiece* i samme tekst gjør klassifisering vanskeligere – modellen må tolke helheten.

Eksempelstrukturen i dokumentet viser:
* tydelig definert mål  
* presis prompttekst  
* spesifikke modell-parametere  
* dokumentert output  

Dette etablerer en standard for god prompt-versjonskontroll.

## Når Zero-Shot ikke fungerer optimalt

Zero-shot har begrensninger når:
* kompleks logikk kreves  
* output må følge et spesifikt format  
* modellen trenger å se et mønster før den kan imitere det  
* oppgaven krever kontekst eller domenekunnskap  

I slike tilfeller bør man gå videre til:
* **one-shot prompting** (ett eksempel)  
* **few-shot prompting** (flere eksempler)  

## Beste praksis
* Dokumenter alltid:
  * mål  
  * modellvalg  
  * parametere  
  * prompttekst  
  * resultat / evaluering  
* Bruk tabellformat for å loggføre iterasjoner.  
* Start med zero-shot, og øk kompleksiteten bare når modellen feiler.
