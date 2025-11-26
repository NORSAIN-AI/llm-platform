---
document_id: NPEF-PLB-005
title: "API Documentation Prompting Playbook"
version: "1.0.0"
status: "Approved"
owner: "Engineering Lead"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - playbooks
  - documentation
  - writing
  - json_schema
---

# API Documentation Prompting Playbook

## 1. Purpose
Denne Playbooken sikrer at LLM-generert API-dokumentasjon er **konsistent, strukturert og fullstendig**, egnet for publisering og bruk i utvikler-miljøer.

---

## 2. Obligatoriske Regler for Dokumentasjons-prompts

### 2.1 Struktur og Format
* **Mal:** Bruk **Writing Template** med strengt spesifisert output-format (f.eks. Tabellformat, Markdown-overskrifter, eller OpenAPI YAML).
* **Nøyaktighet:** Bruk **Few-Shot** for å demonstrere riktig format og detaljnivå (f.eks. hvordan en respons-header skal beskrives).

### 2.2 Innholds- og Stilkontroll
* **Rolle:** Må settes til "Teknisk Skribent" eller "API Lead".
* **Tone:** Strengt **informativ, nøytral og presis**. Ingen salgsfremmende språk.
* **CoT:** Bruk intern **CoT** for å sikre at modellen har identifisert *alle* funksjonskall, parametere og feilhåndteringssteg før dokumentasjonen skrives.

### 2.3 Felt-Mapping
* **Mapping:** Hvis kilde er kode eller schema, be modellen om å krysstjekke og *mappe* input-felter mot output-felter, og beskrive dette i et avsnitt.

---

## 3. Eksempler på Dokumentasjons Prompt (Essens)

| Seksjon | Essensielt Innhold |
| :--- | :--- |
| **System** | "Du skal returnere kun teknisk dokumentasjon i ren Markdown." |
| **Rolle** | "Du er en teknisk skribent. Målgruppen er backend-utviklere." |
| **Instruksjon** | "Basert på funksjonen, skriv full OpenAPI-spesifikasjon, inkludert 200/400 responser." |
| **Konfig.** | Temp=0.1, Top-P=0.9. |