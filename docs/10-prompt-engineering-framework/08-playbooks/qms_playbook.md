---
document_id: NPEF-PLB-001
title: "QMS/IMS Prompting Playbook"
version: "1.0.0"
status: "Approved"
owner: "QMS Manager"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - playbooks
  - qms
  - compliance
  - structured_output
---

# QMS/IMS Prompting Playbook

## 1. Purpose

Denne Playbooken definerer standarder for prompts brukt i Kvalitets- og Intern Styringssystem (QMS/IMS), inkludert CAPA-håndtering, avviksanalyse, og prosedyregenerering. Målet er å sikre **Safety = 5** og **Structure = 5** i samsvar med ISO-standarder.

---

## 2. Obligatoriske Regler for QMS Prompts

### 2.1 Rolle & Kontekst

* **Rolle:** Må settes til "QMS Manager," "Uavhengig Revisor," eller "Compliance Specialist".
* **Tone:** Strengt **formell, objektiv og faktabasert**.

### 2.2 Strukturert Output (Kontrakt)

* **CAPA-uttrekk:** MÅ bruke **`capa_record.schema.json`** for maskinlesbar output.
* **Avviksklassifisering:** MÅ bruke **Classification Template** med kategorier fra QMS-dokumentasjonen (f.eks., PROCESS, SAFETY, TECHNICAL, ADMIN).

### 2.3 Resonnement og Nøyaktighet

* **Rotårsak (Root Cause):** Bruk obligatorisk **Chain-of-Thought (CoT)** eller **Step-Back** for å utlede rotårsaker, for å unngå overfladiske svar.
* **Temperatur:** Skal settes til **0.0–0.1** (maksimal determinisme).

---

## 3. Eksempler på CAPA Prompt (Essens)

| Seksjon | Essensielt Innhold |
| :--- | :--- |
| **System** | Inkluder **CAPA Schema** og krav: "Returner KUN gyldig JSON." |
| **Rolle** | "Du er en QMS Revisor. Analyser avviket objektivt." |
| **Instruksjon** | "Tenk steg for steg internt for å utlede den faktiske rotårsaken (The 5 Whys)." |
| **Konfig.** | Temp=0.1, Top-P=0.8. |
