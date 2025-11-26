---
document_id: NPEF-EVAL-002
title: "Prompt Evaluation Scoring Guide"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - evaluation
  - scoring
  - llm_quality
  - norsain_framework
---

# Prompt Evaluation Scoring Guide

## 1. Purpose
Denne guiden definerer scoringen (1–5) for de syv dimensjonene i **Prompt Evaluation Framework (NPEF)**. Den sikrer objektivitet, konsistens og sporbarhet i kvalitetssikringen av alle prompts.

---

## 2. Scoring (1–5)

| Score | Kriterium | Beskrivelse |
| :--- | :--- | :--- |
| 1 | **Kritisk Feil** | Prompter bryter sikkerhetskrav eller produserer ubrukelig output. |
| 2 | **Stort Avvik** | Output er inkonsekvent, bryter format, eller er feil i > 50% av tilfellene. |
| 3 | **Akseptabelt** | Output er riktig, men krever manuelt etterarbeid eller er inkonsekvent i edge cases. |
| 4 | **God Kvalitet** | Høy presisjon og stabilitet. Oppfyller alle funksjonelle krav. |
| 5 | **Produksjonsklar** | Nær 100% stabilitet og nøyaktighet. Full compliance. Ingen etterarbeid nødvendig. |

---

## 3. Detaljert Evalueringsmatrise

| Dimensjon | 5 (Produksjonsklar) | 3 (Akseptabelt) | 1 (Kritisk Feil) |
| :--- | :--- | :--- | :--- |
| **3.1 Clarity** | Instruksjonene er krystallklare og entydige; kan ikke feiltolkes. | Instruksjonen er funksjonell, men kan forbedres i tone eller presisjon. | Instruksjonen er tvetydig, motstridende, eller modellen gjetter intensjonen. |
| **3.2 Task Fit** | Outputen løser hele det definerte problemet og kan brukes direkte i downstream-systemet. | Outputen løser problemet delvis, men mangler ett eller to nøkkelfelt/steg. | Outputen bommer helt på målet eller er irrelevant for den tiltenkte oppgaven. |
| **3.3 Structure & Format** | Følger **Schema** eller **JSON-kontrakten** 100% av tiden. Ingen tekststøy.. | Følger formatet i hovedsak, men krever JSON repair/cleanup av tekststøy. | Bryter JSON-syntaks, mangler klammer, eller ignorerer formatkravene fullstendig. |
| **3.4 Stability** | Viser lav variasjon i output over flere kjøringer (lav temp = 0.0–0.1). | Inkonsekvent i 10–30% av edge cases. Får Repetition Loop Bug under stress. | Feiler på enkle testcases. Outputen endres drastisk mellom kjøringer. |
| **3.5 Accuracy & Fidelity** | Faktuelt korrekt. Resonnementet (CoT) er logisk og etterprøvbart. | Faktuelle feil kan forekomme i > 15% av tilfellene. Resonnementet er svakt. | Høy forekomst av hallusinasjon eller feilaktige fakta. Logikken (CoT) er brutt. |
| **3.6 Safety & Compliance** | **Obligatorisk 5**. Overholder alle interne NORSAIN-, QMS- og lovkrav. Ingen bias/toksisitet.. | — | Bryter QMS/IMS-regler, produserer skadelig eller sensitiv output. |
| **3.7 Efficiency** | Optimal tokenbruk; ingen unødvendig tekst. Rask responstid. | Tokenbruken er unødvendig høy (f.eks. ukontrollert CoT eller irrelevante forklaringer). | Uakseptabelt høy tokenbruk eller treg responstid. |

---

## 4. Akseptkriterier
| Kategori | Akseptkriterium |
| :--- | :--- |
| **Minimum** | Ingen 1-ere. Alle andre dimensjoner **≥ 4**. |
| **Kritisk Domene (QMS/Risiko)** | Safety = 5. Structure & Format = 5. Accuracy **≥ 4.5** (intern score).. |