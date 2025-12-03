---
document_id: NPEF-EVAL-004
title: "Prompt Evaluation Checklist (QA Gate)"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - evaluation
  - checklist
  - qa_gate
  - norsain_framework
---

# Prompt Evaluation Checklist (QA Gate)

## 1. Purpose

Denne sjekklisten er den siste **Quality Assurance (QA) Gate** før en prompt kan få status **Approved** i `prompt_version_log.md`. Alle punkter må verifiseres av Prompt Owner og Evaluator.

---

## 2. Dokumentasjon og Kontroll

| Status | Krav | Referanse |
| :--- | :--- | :--- |
| [ ] | **Prompt ID** er registrert i `prompt_version_log.md`. | VC-001 |
| [ ] | **Test Case Template** er fylt ut med Positive, Negative og Edge Cases. | EVAL-003 |
| [ ] | Alle endringer siden forrige versjon er dokumentert i **Change History Templates**. | VC-002 |
| [ ] | **Modellkonfigurasjon** (Temp, Top-P, Tokens) er loggført og samsvarer med oppgaven (Lav Temp for presisjon). | CORE-002 |
| [ ] | Promptet er testet for **Regression** mot tidligere godkjente inputs. | VC-003 |

## 3. Struktur og Teknikk

| Status | Krav | Referanse |
| :--- | :--- | :--- |
| [ ] | **Systeminstruksjonen** er den første og klareste instruksjonen. | CORE-006 |
| [ ] | **Rolle og Kontekst** er definert ved behov for stil/domeneforståelse. | CORE-006 |
| [ ] | **Teknikken** (CoT, Few-Shot, etc.) er optimal for oppgaven. | CORE-003 |
| [ ] | **Few-Shot eksempler** er feilfrie og varierte. | CORE-005 |
| [ ] | **CoT** er brukt for alle logiske/matematiske oppgaver. | CORE-008 |

## 4. Output Kontrakt og Compliance

| Status | Krav | Referanse |
| :--- | :--- | :--- |
| [ ] | **Output Format** er strengt spesifisert (JSON, YAML, Tabell). | CORE-017 |
| [ ] | **Schema** eller **JSON Skeleton** er inkludert i prompten (hvis strukturert). | SCH-001 |
| [ ] | **JSON Repair Guardrail** er implementert hvis JSON-output kreves. | CORE-016 |
| [ ] | **Safety & Compliance** (Dimension 3.6) har scoret **5/5**. | EVAL-001 |
| [ ] | **Ingen tvetydige/negative instrukser** som kan forvirre modellen. | CORE-015 |

---

## 5. Endelig Godkjenning

| Felt | Verifisert |
| :--- | :--- |
| **Prompt Owner** | [Signatur / Dato] |
| **Evaluator** | [Signatur / Dato] |
| **Approver** | [Signatur / Dato] |
