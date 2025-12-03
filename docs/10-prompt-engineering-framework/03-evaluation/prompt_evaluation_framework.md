---
document_id: NPEF-EVAL-001
title: "Prompt Evaluation Framework"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - prompt_engineering
  - evaluation
  - llm_quality
  - norsain_framework
---

# Prompt Evaluation Framework (NPEF)

## 1. Purpose

Dette rammeverket definerer en standardisert metode for å evaluere, kvalitetssikre og godkjenne alle prompts som brukes i NORSAIN-systemer, dokumentasjon, agenter, GPT-roller og automatiserte LLM-arbeidsflyter.  
Målet er å sikre:

- konsekvent kvalitet  
- repeterbarhet og sporbarhet  
- redusert risiko (hallucinasjon, formatdrift, feil tolking)  
- produksjonsklare prompts som oppfyller krav i IMS/QMS  

Dette er en obligatorisk standard for alle kritiske prompts i organisasjonen.

---

## 2. Scope

Gjelder følgende prompttyper:

- **Systemprompts** (GPT-roller, agenter, MCP)  
- **Funksjonsprompts** (analyse, klassifisering, generering, kode)  
- **Prosessintegrerte prompts** (QMS, IMS, Engineering workflows)  
- **Playbook-baserte prompts**  
- **LLM-kontrakter** (schema-basert output)  

Gjelder for alle modeller: GPT-5.x, Claude 3, Gemini, Grok, open-source modeller m.fl.

---

## 3. Evaluation Dimensions (7-punkt standard)

Hver prompt vurderes mot syv kjerne-dimensjoner på en 1–5 skala.  
Se scoring-guide i egen fil.

### 3.1 Clarity

Hvor entydig og presist promptet uttrykker oppgaven.

### 3.2 Task Fit

Hvor godt output samsvarer med ønsket resultat og bruksscenario.

### 3.3 Structure & Format

Hvor konsistent modellen følger format, struktur, schema eller JSON-krav.

### 3.4 Stability

Variasjon mellom kjøringer. Stabilitet er kritisk ved systemintegrasjon.

### 3.5 Accuracy & Fidelity

Grad av korrekthet og relevans i generert svar.

### 3.6 Safety & Compliance

Samsvar med interne NORSAIN-regler, IMS/QMS-krav og modellpolicyer.

### 3.7 Efficiency

Tokenbruk, etterarbeid og ytelse måles samlet.

---

## 4. Evaluation Process (Lifecycle)

### Step 1 — Define Prompt Goal

- Formål  
- Bruksscenario  
- Hvilken modell  
- Mottakere / systemer

### Step 2 — Draft Prompt

- Velg teknikk (zero-shot, few-shot, CoT, schema etc.)  
- Strukturér (Task, Context, Rules, Examples, Output Format)

### Step 3 — Create Test Set

Må inneholde:

- positive cases (3–5)  
- negative cases (2–3)  
- edge cases (2–3)  

Testcases lagres i `test_case_templates.md`.

### Step 4 — Execute Tests

- Kjør testsettet på valgt modell/modellfamilie  
- Loggfør resultater og output  

### Step 5 — Score Prompt

- Evaluer basert på scoring-guide (1–5 per dimensjon)  
- Registrer score i versjonslogg og evalueringsmatrise  

### Step 6 — Review & Improve

- Identifiser svakheter  
- Oppdater prompttekst, struktur eller teknikk  
- Re-test til akseptkriterier møtes  

### Step 7 — Approve or Reject

Prompts merkes:

- **Approved**  
- **Experimental**  
- **Deprecated**  

### Step 8 — Document & Version

Logg endringer i `prompt_version_log.md`.

---

## 5. Acceptance Thresholds (Standard)

### Minimum

Et prompt skal ha følgende minimumsverdier for produksjon:

| Dimension            | Threshold |
|----------------------|-----------|
| Clarity              | ≥ 4       |
| Task Fit             | ≥ 4       |
| Structure & Format   | ≥ 4       |
| Stability            | ≥ 4       |
| Accuracy             | ≥ 4       |
| Safety & Compliance  | 5         |
| Efficiency           | ≥ 3       |

### Domain-critical prompts (QMS/IMS/Compliance)

Krav:

- Alt ≥ 4  
- Safety = 5  
- Structure & Format = 5  
- Accuracy ≥ 4.5 (intern score)  

---

## 6. Documentation Requirements

Følgende *må* dokumenteres for hvert produksjonsprompt:

- Prompt ID  
- Prompt Name  
- Version  
- Prompt Owner  
- Date Updated  
- Model + Config (temperature, top-P, top-K, max tokens)  
- Testcases  
- Evaluation Scorecard  
- Approval Status  
- Links to related playbooks/schemas  

---

## 7. Roles & Responsibilities

### Prompt Owner

- Oppretter, vedlikeholder og oppdaterer prompt  
- Kjører evaluering og dokumenterer alt

### Evaluator

- Uavhengig test og scoring  
- Fag-/funksjonsansvarlig

### Approver

- Godkjenner promps for produksjon  
- Typisk: Tech Lead, QMS-ansvarlig, System Owner

---

## 8. Example Evaluation Snapshot (Realistic)

```

Prompt ID: P-004
Name: CAPA Root Cause Analyzer
Version: 1.3
Model: gpt-5.1
Evaluator: QMS Manager

Scores:

* Clarity: 5
* Task Fit: 5
* Structure: 5
* Stability: 4
* Accuracy: 5
* Safety: 5
* Efficiency: 4

Decision: Approved for Production
Notes: Strong stability; full compliance with IMS 2025.

```

---

## 9. Integration With NPEF

Dette rammeverket fungerer sammen med:

- `/03_evaluation/scoring_guide.md`  
- `/03_evaluation/test_case_templates.md`  
- `/04_version_control/prompt_version_log.md`  
- `/05_templates/` (for gjenbrukbare promptmaler)  
- `/08_playbooks/` (domenespesifikke oppsett)  

Dette gjør kvalitetskontrollen komplett og sporbar.

---

## 10. Versioning and Change Management

Alle endringer må:

- dokumenteres i `prompt_version_log.md`  
- referere til evaluering  
- vise tydelige diff-endringer (tekst, regler, eksempler)  
- gjennomgå review før godkjenning  

---

## 11. Compliance Alignment

Rammeverket er designet for å støtte:

- ISO 9001 (kvalitet)  
- ISO 14001 (miljø)  
- ISO 27001 (sikkerhet)  
- ISO 31000 (risiko)  
- NIST generelle AI-evaluation prinsipper  

---

## 12. Final Notes

Dette er en **obligatorisk standard** i NORSAIN-systemet.  
Ingen kritiske prompts skal tas i bruk uten formell evaluering og dokumentert godkjenning etter dette rammeverket.

---
