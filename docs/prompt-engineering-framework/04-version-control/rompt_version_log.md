---
document_id: NPEF-VC-001
title: "Prompt Version Log"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - version_control
  - prompt_engineering
  - norsain_framework
---

# Prompt Version Log

Dette dokumentet fungerer som den offisielle, sentrale versjonsloggen for alle prompts brukt innen NORSAIN AI-systemer, GPT-roller, agenter, QMS/IMS-prosesser og automatiserte arbeidsflyter.

Alle produksjonskritiske prompts **må** registreres her.

---

## 1. Structure of the Log

Hver prompt får sin egen linje i tabellen med følgende felter:

| Field | Description |
|-------|-------------|
| **Prompt ID** | Unik identifikator (f.eks. P-001) |
| **Name / Use-case** | Kort navn eller funksjon |
| **Owner** | Rolle/person ansvarlig |
| **Model(s)** | Primær LLM som brukes |
| **Current Version** | Versjonsnummer (semver) |
| **Status** | Draft / Experimental / Approved / Deprecated |
| **Last Updated** | Dato |
| **Notes** | Tilleggsinfo, funn, avhengigheter |

---

## 2. Prompt Version Registry

Fyll inn nye rader når prompts skapes eller oppdateres.

| Prompt ID | Name / Use-case            | Owner              | Model(s)     | Current Version | Status       | Last Updated | Notes |
|-----------|----------------------------|--------------------|--------------|-----------------|--------------|--------------|-------|
| P-001     | QMS CAPA Summarizer        | QMS Manager        | gpt-5.1      | 1.2.0           | Approved     | 2025-02-01   | Linked to QMS Playbook |
| P-002     | Engineering Code Reviewer  | Engineering Lead   | gpt-5-codex  | 0.9.0           | Experimental | 2025-02-01   | Requires additional edge-case tests |
| P-003     | Risk Assessment Generator  | Risk Officer       | gpt-5.1      | 1.0.0           | Approved     | 2025-02-01   | Schema-validated JSON output |

---

## 3. Version Numbering (SemVer)

Alle prompts følger **Semantic Versioning (SemVer)**:

- **MAJOR** = store endringer, potensielt bakover-inkompatible  
- **MINOR** = forbedringer uten å bryte integrasjoner  
- **PATCH** = små rettelser og presiseringer  

Eksempler:

- `2.0.0` – nytt oppsett eller nytt format  
- `1.3.0` – ny seksjon, ekstra regel, forbedret stabilitet  
- `1.3.2` – presisering eller skrivefeil rettet  

---

## 4. Status Definitions

| Status | Meaning |
|--------|---------|
| **Draft** | Under utvikling, ikke testet |
| **Experimental** | Under evaluering, ikke klar for produksjon |
| **Approved** | Evaluert og godkjent; produksjonsklar |
| **Deprecated** | Skal ikke lenger brukes; kun historikk |

---

## 5. Update Procedure

1. Oppdater prompt → lag ny versjon  
2. Test + evaluer (se Evaluations-modulen)  
3. Oppdater **prompt_version_log.md**  
4. Gjennomfør diff-review  
5. Få godkjenning (Approver)  
6. Endre status om nødvendig  

---

## 6. Governance & Compliance

Denne versjonsloggen oppfyller krav fra:

- NORSAIN GPT Governance  
- NORSAIN IMS/QMS 2025  
- ISO 9001 (dokumentkontroll)  
- ISO 27001 A.12 (endringskontroll)  
- AI-modellstyring beste praksis 2024–2025  

---

## 7. Archive Policy

- Gamle versjoner skal bevares i repoet  
- `Deprecated` prompts markeres tydelig, men fjernes aldri  
- Loggen skal aldri slettes eller skrives over  

---

# End of Document
