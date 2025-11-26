---
title: "Prompt Engineering — Introduction"
source: "22365_3_Prompt Engineering_v7"
part: "01"
date: "2025-02-01"
---

# Introduction

**Summary:**  
Denne seksjonen forklarer hva et prompt er, hvorfor prompt engineering er nødvendig, og hvilke faktorer som påvirker kvaliteten på generert output. Den etablerer grunnforståelsen for hvordan LLM-er predikerer tekst og hvorfor iterativ forbedring er nødvendig.

**Key Points:**
* Et prompt er input som styrer modellens prediksjon.
* Alle kan skrive prompts, men gode prompts krever bevisste valg.
* Modellvalg, konfigurasjoner, stil, struktur og kontekst påvirker resultatet.

**Critical Details:**

## Hva er et prompt?
- Et **prompt** er teksten (eventuelt multimodale input) som en LLM bruker til å generere output.  
- Selv om alle kan skrive et prompt, er **effektive prompts komplekse** fordi mange variabler påvirker resultatet:
  - Modellvalg  
  - Modellens treningsdata  
  - Temperatur, top-k/top-p, token-limit  
  - Ordvalg, stil, tone  
  - Kontekst og format

## Hvorfor prompt engineering?
- Dårlig utformede prompts gir:
  - uklare eller tvetydige resultater  
  - unøyaktigheter  
  - manglende evne til å produsere ønsket struktur  
- Prompt engineering er **iterativt**: man justerer, tester, evaluerer og forbedrer.

## Hvordan LLM-er jobber
- En LLM er en **prediksjonsmaskin**: den forutsier neste token basert på tidligere tokens og treningsdata.
- Etter hvert predikert token oppdateres sekvensen, og modellen fortsetter prediksjonen.
- God prompt engineering handler om å **sette opp modellen for å forutsi riktig sekvens**.

## Relevans til Gemini / Vertex AI
- Når man bruker Gemini i Vertex AI eller API-er, kan man eksplisitt styre:
  - temperatur  
  - top-p/top-k  
  - andre sampling-innstillinger  
- Dette gir mer presise og reproduserbare resultater enn chat-grensesnittet.

## Oppgaver LLM-er kan løse via prompts
- tekstsammendrag  
- informasjonsekstraksjon  
- Q&A  
- klassifisering  
- generering (tekst, kode)  
- oversettelse  
- kodeforståelse og dokumentasjon  
- resonnering

01_introduction.md
02_llm_output_configuration.md
03_prompting_techniques.md
04_zero_shot.md
05_one_shot_few_shot.md
06_system_role_contextual.md
07_step_back.md
08_chain_of_thought.md
09_self_consistency.md
10_tree_of_thoughts.md
11_react.md
12_automatic_prompt_engineering.md
13_code_prompting.md
14_multimodal.md
15_best_practices.md
16_json_repair.md
17_working_with_schemas.md
18_summary.md
19_endnotes.md
