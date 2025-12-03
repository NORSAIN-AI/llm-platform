---
document_id: NPEF-TRB-002
title: "Prompt Troubleshooting Guide (Operativ)"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - troubleshooting
  - operational
  - guide
  - norsain_framework
---

# Prompt Troubleshooting Guide (Operativ)

## 1. Purpose

Denne guiden gir Prompt Owners og Evaluatorer en trinnvis prosedyre for systematisk feilsøking når en produksjonsprompt feiler eller underpresterer i henhold til NPEF-rammeverket.

---

## 2. Stegvis Feilsøking

### Steg 1: Isolasjon og Verifisering

1. **Gjenskap feilen:** Kjør promptet 3 ganger med den feilende inputen.
2. **Identifiser Feilmodus:** Konsultér **Failure Modes Catalogue**. Hvilken feilmodus passer best (Hallucinasjon, Format Drift, etc.)?
3. **Sjekk Logg:** Sjekk `prompt_version_log.md`. Har konfigurasjonen (Temp/Top-P) endret seg nylig?

### Steg 2: Diagnostikk — Start med Parametere

1. **Temperatur:** Hvis feilen er *Hallusinasjon* eller *Inkonsekvent Logikk*, senk temperaturen til **0.1**. Hvis Temp er 0.0, sjekk om Few-Shot er dårlig.
2. **Tokens:** Hvis feilen er *Brutt JSON-syntaks* eller *Avkuttet Output*, øk **Maks Tokens** med 20–30%.
3. **Sampling:** Hvis feilen er *Repetition Loop*, eksperimenter med å justere **Top-P/Top-K** litt (f.eks. Top-P 0.95 -> 0.85).

### Steg 3: Diagnostikk — Struktur og Kjerneinstruksjon

1. **Formatdrift:** Hvis JSON feiler, legg til/styrk Systeminstruksjonen: "Returner **KUN** JSON. Ingen forord, ingen metatekst.".
2. **Few-Shot:** Hvis logikken er feil, revider Few-Shot-eksemplene. Er de **representative og feilfrie**? Inkluder et nytt **Edge Case**-eksempel.
3. **Klarhet:** Reduser instruksjonene i promptet. Er instruksjonene **klare, konsise og entydige**? Unngå dobbelt-negativer.

### Steg 4: Teknikk-Eskalering (Kun hvis Steg 2 & 3 feiler)

1. **Fra Zero-Shot:** Hvis Zero-Shot feiler, gå til **One-Shot/Few-Shot**.
2. **Fra Few-Shot:** Hvis Few-Shot er ustabil, gå til **Few-Shot CoT**.
3. **Fra CoT:** Hvis CoT er ustabil, eskaler til **Self-Consistency** eller **Tree-of-Thoughts (ToT)**. (Husk høyere kostnad).

### Steg 5: Dokumentasjon og Revisjon

1. **Dokumenter Diff:** Loggfør endringen i **Change History Template**.
2. **Re-evaluer:** Kjør det reviderte promptet mot det fullstendige **Test Settet**.
3. **Godkjenning:** Oppdater **Scoring Guide** og få ny godkjenning i loggen.
