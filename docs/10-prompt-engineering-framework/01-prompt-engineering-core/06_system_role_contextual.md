---
title: "System, Role & Contextual Prompting"
source: "22365_3_Prompt Engineering_v7"
part: "06"
date: "2025-02-01"
---

# System, Role & Contextual Prompting

**Summary:**  
Denne seksjonen forklarer hvordan system-, rolle- og kontekstprompting gir bedre kontroll over LLM-output. Ved å definere modellens rammeverk, rolle og situasjonskontekst kan man drastisk forbedre relevans, konsistens, tone og struktur i svarene.

**Key Points:**

* System-prompting definerer modellens overordnede rammer og regler.
* Rolle-prompting tildeler modellen en identitet, tone og perspektiv.
* Kontekstual prompting gir modellen nødvendig bakgrunnsinformasjon for den konkrete oppgaven.
* De tre teknikkene kan kombineres for maksimal presisjon.

**Critical Details:**

## System Prompting

Systemprompten styrer *hva modellen er* og *hvordan den skal fungere*.
* Setter “big picture”-instruksjoner.
* Regulerer:
  * format  
  * struktur  
  * output-regler  
  * begrensninger  
* Eksempel fra dokumentet:
  * Oppgave: klassifisere filmomtaler  
  * Output skulle være **kun label i uppercase**  
  * Temperatur = 1, Top-K = 40, Top-P = 0.8  
* Systemprompt kan brukes til:
  * returnere spesifikke formater (f.eks. JSON)  
  * sikkerhets- og toksisitetskontroll (“Be respectful…”)  
  * streng struktur for integrasjoner  

### Viktige prinsipper for systemprompts
* Være **korte, entydige og ikke-dobbelt tolkbare**.
* Spesifiser alltid output-format eksplisitt.
* Unngå å inkludere eksempler inne i systemprompten (de hører hjemme i few-shot-delen).

---

## Role Prompting

Rolleprompting tildeler modellen en identitet eller persona — f.eks. “du er en revisor”, “du er en reiseguide”, “du er en seniorutvikler”.
* Påvirker:
  * tone  
  * stil  
  * perspektiv  
  * prioriteringer i svar  
* Eksempel fra dokumentet:
  * Rolle: travel guide  
  * Oppgave: foreslå 3 steder å besøke i Amsterdam  
  * Output ble konsistent og domenespesifikk  
* Stilvariasjoner demonstreres (humorous, inspirational, formal etc.).

### Hvorfor rolleprompting fungerer
* Modellen “låser” seg i en fortolkning av rollen.  
* Gir mer konsistente stilistiske valg.  
* Effektiv for:
  * undervisning  
  * rådgivning  
  * simuleringer  
  * emosjonell eller retorisk kommunikasjon  

---

## Contextual Prompting

Kontekstprompting gir modellen den spesifikke situasjonen, bakgrunnsdata eller ramme den skal bruke for å løse oppgaven.
* Modellen trenger kontekst for:
  * nøyaktighet  
  * relevans  
  * bedre forståelse av målgruppe  
* Eksempel fra dokumentet:
  * Blogg om retro 80’s arcade games  
  * Oppgave: foreslå 3 artikler  
  * Output ble presist tematisk og korrekt innrammet  

### Hva kan være kontekst
* Målgruppe  
* Tid, sted, situasjon  
* Domenedata  
* Tidligere tekst eller samtalehistorikk  
* Bedriftsinformasjon / policy  

---

## Hvordan teknikkene kombineres

De tre teknikkene er mest effektive når de brukes sammen:

**Eksempel på kombinasjon:**
* **System:** “Du skal returnere gyldig JSON med disse feltene…”  
* **Rolle:** “Du er en senior dataanalytiker…”  
* **Kontekst:** “Kunden er i finanssektoren og vil ha en risikorapport…”  

Kombinasjonen gir:
* bedre struktur  
* mer konsistent tone  
* høyere presisjon  
* færre hallucinasjoner  

---

## Beste praksis
* Definer alltid *systemprompten først* som grunnmur.  
* Legg på rolleprompt ved behov for stil/identitet.  
* Gi kontekst når oppgaven krever domeneforståelse.  
* Test i flere kombinasjoner og dokumenter resultatet.  
* Bruk lav temperatur for faktiske roller, høyere for kreative roller.  
* Unngå motstridende instruksjoner mellom system, rolle og kontekst.
