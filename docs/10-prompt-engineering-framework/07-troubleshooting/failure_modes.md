---
document_id: NPEF-TRB-001
title: "Failure Modes & Diagnostics Catalogue"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - troubleshooting
  - failure_modes
  - diagnostics
  - json_repair
---

# Failure Modes & Diagnostics Catalogue

## 1. Purpose

Denne katalogen identifiserer de vanligste feilmodiene LLM-er utviser i produksjon og gir en rask guide for årsaksanalyse og korrigerende tiltak. Dette sikrer at Prompt Director kan veilede brukeren gjennom feilsøking i henhold til beste praksis.

---

## 2. Katalog over Feilmodi

| Feilmodus | Symptomer | Primær Årsak | Korrigerende Tiltak |
| :--- | :--- | :--- | :--- |
| **2.1 Hallucinasjon** | Legger til fakta eller detaljer som ikke finnes i input. | Høy Temperatur. Uklare instruksjoner/kontekst. | Sett **Temp = 0.0–0.1**. Styrk **Context** og **Constraints** ("Ikke legg til fakta"). |
| **2.2 Format Drift** | Blander fritekst og JSON. Legger til "Her er svaret:" før JSON-blokken. | Svak **Systeminstruksjon**. Mangel på **Few-Shot** for struktur. | **A:** Bruk Few-Shot. **B:** Styrk Systeminstruksjon: "Returner KUN JSON. Ingen forklaring." |
| **2.3 Repetition Loop** | Modellen gjentar ord eller fraser i en loop, ofte ved lav eller ekstremt høy temperatur. | Ubalansert **Temp, Top-K, Top-P**. | Juster **Temperatur** (flytt den litt fra 0.0 eller 1.0). Juster **Top-K/Top-P** for å åpne/lukke prediksjonsrommet. |
| **2.4 Brutt JSON-syntaks** | Mangler klammer (`{`, `}`), kommafeil, eller bruker enkeltanførselstegn. | Token Limit nådd. Modellen er for lite deterministisk. | **A:** Øk **Token Limit**. **B:** Implementer **JSON Repair**-logikk. **C:** Sett Temp = 0.0. |
| **2.5 Inkonsekvent Logikk** | Riktig svar i Steg 1, feil svar i Steg 3 i CoT. | Dårlig CoT-struktur. Problemet er for komplekst for enkel CoT. | Gå fra CoT til **Self-Consistency** eller **Tree-of-Thoughts (ToT)**. |
| **2.6 Overfitting** | Promptet fungerer perfekt på testdata, men feiler i produksjon. | **Few-Shot** eksemplene var for like. | **A:** Bytt ut Few-Shot med mer **varierte eksempler** (inkluder edge cases). **B:** Bruk **APE** for å finne mer generelle prompts. |

---

## 3. Feilsøkingsprinsipp (The Golden Rule)

> **"Korrekt CoT-resonnement foran Kompleks Format."** Hvis modellen tenker riktig, men formaterer feil, er problemet **Structure**. Hvis modellen tenker feil, er problemet **Technique** eller **Context**.
