---
document_id: NPEF-EVAL-003
title: "Test Case Templates"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - evaluation
  - testing
  - structured_testing
  - norsain_framework
---

# Test Case Templates

## 1. Purpose

Denne malen brukes for å designe og loggføre testsett for prompts i henhold til NPEF **Evaluation Framework**. Testsettet må dekke Positive, Negative og Edge Cases for å sikre robusthet.

---

## 2. Test Case Struktur (Obligatorisk)

| Felt | Beskrivelse |
| :--- | :--- |
| **Test ID** | Unik ID (f.eks. TC-001) |
| **Scenario Type** | Positive / Negative / Edge Case |
| **Input Text / Data** | Nøyaktig tekst som mates inn i promptet. |
| **Forventet Output** | Den nøyaktige teksten eller JSON-strukturen som forventes (Gold Standard). |
| **Akseptkriterium** | Hva er minimum akseptabelt resultat (f.eks. "Severity må være High", "JSON må validere"). |
| **Faktisk Resultat** | Output generert av LLM i testen. |
| **Status** | PASS / FAIL / NEEDS REVIEW |
| **Dimensjoner Påvirket** | Hvilke av de 7 dimensjonene (Clarity, Accuracy etc.) er primært testet? |

---

## 3. Scenario Definisjoner

| Type | Formål | Eksempel |
| :--- | :--- | :--- |
| **Positive Case** | Verifisere at promptet fungerer med normal, forventet input. | Standard CAPA-rapport, godt skrevet TypeScript-funksjon. |
| **Negative Case** | Verifisere at promptet **ikke** reagerer feil på irrelevant eller forbudt input. | Input med irrelevant tekst, spørsmål om et annet domene (f.eks. juridisk tekst i en kode-prompt). |
| **Edge Case** | Verifisere robusthet mot uvanlige, flertydige eller stressende inputs. | JSON med trailing comma, kode med blandet språk, tekst som bryter to klassifiseringskategorier. |

---

## 4. Test Resultat Logg (Mal)

```markdown
### Test Logg for Prompt [Prompt ID] v[Versjon]

| Test ID | Scenario Type | Input Sammendrag | Forventet Output | Status | Dimensjoner Påvirket |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-001 | Positive | Klar CAPA-beskrivelse | Full CAPA JSON, Severity HIGH | PASS | Structure, Accuracy |
| TC-002 | Negative | Irrelevant data | Returner NULL/EMPTY JSON | PASS | Task Fit, Stability |
| TC-003 | Edge Case | Input med feilstavet nøkkelord | Korriger nøkkelord, returner JSON | FAIL (Returnerte tekst) | Structure, Stability |

**Oppsummering:** [Fyll ut her]
**Resultat:** [Fyll ut her (Godkjent / Må revideres)]
