---
document_id: NPEF-VC-003
title: "Prompt Diff Guidelines"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - version_control
  - diff_review
  - prompt_engineering
  - norsain_framework
---

# Prompt Diff Guidelines

## 1. Purpose

Dette dokumentet beskriver hvordan endringer i prompts skal analyseres, sammenlignes og vurderes før de godkjennes.  
Riktig diff-review er avgjørende for:

- kvalitet og presisjon  
- forutsigbarhet i output  
- kompatibilitet med eksisterende systemer  
- IMS/QMS-dokumentkontroll  
- sporbarhet og audit-ready historikk  

Dette dokumentet inngår som del av modul **04_version_control**.

---

## 2. When to Perform a Prompt Diff

Et diff-review skal alltid gjennomføres når:

- promptet får **ny minor- eller majorversjon**  
- output-format endres  
- system/rolleinstrukser endres  
- eksempler (few-shot) endres  
- modellvalg eller temperatur endres  
- det finnes risiko for påvirkning av downstream-systemer  
- endringen gjelder QMS/IMS/risiko-prosesser  

---

## 3. What to Compare in a Diff Review

### 3.1 Prompt Structure

Sammenlign:

- Task  
- Context  
- Rules  
- Constraints  
- Output Format  
- Examples (one-shot/few-shot)  
- Model configuration (temp, top-P, top-K)  

### 3.2 Behavioural Impact

Vurder:

- Endrer dette modellens oppførsel vesentlig?  
- Øker eller reduserer variasjon?  
- Kan det introdusere hallucinasjoner eller formatdrift?  

### 3.3 Safety & Compliance

Sjekk:

- Har sikkerhetsregler blitt fjernet/forandret?  
- Er språk eller innhold påvirket slik at det bryter policy/QMS?  
- Trenger det nye promptet ekstra validering?  

### 3.4 Integration Impact

Finn ut:

- Påvirker endringen systemer som:  
  - API-integrasjoner  
  - dokumentgenerering  
  - CAPA-prosesser  
  - dashboarder  
  - datamodeller  
- Kan eksisterende outputs knekke pipelines?

---

## 4. Tools for Diff Review

Du kan bruke:

- Git (PR diff, side-by-side visning)  
- VS Code diff viewer  
- GitHub pull request inline diffs  
- Notion page history  
- Text compare-verktøy (Meld, Kaleidoscope, Beyond Compare)  

For prompts som er >1500 tokens anbefales side-by-side diff for oversikt.

---

## 5. How to Conduct a Diff Review (Procedure)

### Step 1 — Analyze Textual Differences

- Se gjennom all endret tekst  
- Marker viktige endringer  
- Identifiser potensielle risikoer  

### Step 2 — Evaluate Semantic Impact

- Har meningen i instruksene endret seg?  
- Er logikken endret i eksempler?  
- Påvirkes forventet output?  

### Step 3 — Run a Behavioural Test

- Kjør minimum:  
  - 2 positive tests  
  - 1 negative test  
  - 1 edge case  
- Sammenlign gamle vs nye resultater  

### Step 4 — Document Findings

Bruk `change_history_templates.md`.

### Step 5 — Approve or Request Changes

- **Approved** hvis ingenting bryter kravene  
- **Needs Revision** hvis kritiske endringer identifiseres  
- **Rejected** ved sikkerhets- eller QMS-risiko  

---

## 6. Diff Review Checklist

- [ ] Strukturendringer forstått?  
- [ ] Endringer i system/rolleinstruks?  
- [ ] Endrer endringen output-format?  
- [ ] Er eksemplene oppdatert på en måte som påvirker mønsteret?  
- [ ] Endrer temperatur eller sampling output-stabilitet?  
- [ ] Har du gjennomført en minitest med før/etter sammenligning?  
- [ ] Er endringen loggført i `prompt_version_log.md`?  
- [ ] Er filen evaluert på nytt etter NPEF-rammeverket?  
- [ ] Har en godkjenner signert endringen?  

---

## 7. Example Diff Review (Realistic)

```

Prompt ID: P-002
Old Version: 0.8.0
New Version: 0.9.0

Key Differences:

* Added new section: "Error diagnostics"
* Updated few-shot examples to show error JSON
* Changed temperature from 0.3 → 0.1
* Minor rewording in tone instructions

Impact:

* Increased determinism
* More consistent output structure
* No adverse effects on existing integrations

Testing:

* Before/after comparison: 4/4 tests matched expected patterns
* No regressions detected

Decision: Approved
Reviewer: Lead Architect

```

---

## 8. Governance Alignment

Dette dokumentet støtter:

- NORSAIN NPEF Governance  
- IMS/QMS 2025 dokumentkontroll  
- ISO 9001: kontinuerlig forbedring + dokumentstyring  
- ISO 27001: endringskontroll  
- AI Evaluation Best Practices 2024–2025  

---
