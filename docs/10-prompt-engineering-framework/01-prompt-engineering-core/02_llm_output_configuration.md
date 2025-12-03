---
title: "LLM Output Configuration"
source: "22365_3_Prompt Engineering_v7"
part: "02"
date: "2025-02-01"
---

# LLM Output Configuration

**Summary:**  
Denne seksjonen beskriver hvordan ulike konfigurasjonsparametere – som temperatur, top-K, top-P og token-grenser – påvirker LLM-output. Den forklarer hvordan disse innstillingene samhandler og gir praktiske startverdier for ulike bruksscenarier.

**Key Points:**

* Output-lengde påvirker kostnad, ytelse og kvalitet.
* Temperatur styrer kreativitet og determinisme.
* Top-K og Top-P filtrerer token-kandidater og kontrollerer variasjon.
* Høye verdier gir større frihet og risiko for irrelevans og repetisjonsfeil.

**Critical Details:**

## Output Length
* Bestemmer hvor mange tokens modellen maks kan generere.  
* Kortere output:
  * reduserer kostnader  
  * forbedrer responstid  
  * stopper ikke modellen fra å være “mer konsis” — den **avbryter** bare tidligere  
* Viktig i teknikker som ReAct hvor modellen ellers kan “spinne videre” med unødvendig tekst.

## Sampling Controls: Hvordan modellen velger neste token

LLM-er predikerer en *sannsynlighetsfordeling over tokens*. Sampling-metodene bestemmer hvilken kandidat som faktisk velges.

### Temperatur
* **Lav temperatur (0–0.3)**: deterministisk, faktaorientert, stabil output.  
* **Høy temperatur (0.7–1+)**: kreativt, variert, mindre forutsigbart.  
* Ekstremt høy temperatur → alle tokens blir nesten like sannsynlige.  
* Temperatur 0 ignorerer top-K og top-P (maks sannsynlig token velges).

### Top-K
* Velger kun blant de **K mest sannsynlige tokens**.  
* **K = 1** → rent greedy decoding.  
* Høyt K → flere kandidater → mer kreativitet.

### Top-P (Nucleus Sampling)
* Velger blant de tokens som samlet utgjør **P av sannsynlighetsmassen**.  
* **P ≈ 0.9–1.0** → bredere variasjon.  
* **P = 0** → tilsvarer greedy decoding.

## Hvordan innstillingene samhandler
* Med både temperatur, top-K og top-P aktivert filtreres kandidater etter top-K/top-P før temperatur beregner endelig tokenvalg.
* Ekstreme verdier “overstyrer” ofte andre innstillinger:
  * Temp = 0 → top-K/top-P ignoreres  
  * Top-K = 1 → temperatur/top-P ignoreres  
  * Top-P = 1 → alle tokens kvalifiserer  
* Modeller og API-er kan kombinere disse ulikt – les dokumentasjonen nøye.

## Anbefalte standardinnstillinger
* **Balansed output:** temp 0.2, top-P 0.95, top-K 30  
* **Kreativ output:** temp 0.9, top-P 0.99, top-K 40  
* **Presisjon/eksakt svar:** temp 0  

## Problemer: “Repetition Loop Bug”
* Ved feil kombinasjon av temperatur og sampling kan modellen havne i en loop der samme frase gjentas.
* Oppstår både ved:
  * lav temperatur (over-determinisme)  
  * høy temperatur (over-randomness)  
* Løsning: justér temperatur og top-K/top-P til en bedre balanse.
