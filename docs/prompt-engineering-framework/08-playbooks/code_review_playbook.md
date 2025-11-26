---
document_id: NPEF-PLB-003
title: "Code Review Prompting Playbook"
version: "1.0.0"
status: "Approved"
owner: "Engineering Lead"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - playbooks
  - code
  - refactoring
  - best_practices
---

# Code Review Prompting Playbook

## 1. Purpose
Denne Playbooken sikrer at prompts for kodehåndtering (generering, refaktorering, debugging) oppfyller NORSAINs strenge krav til syntaks, kvalitet og sikkerhet.

---

## 2. Obligatoriske Regler for Kode-prompts

### 2.1 Struktur og Format
* **Mal:** MÅ bruke **Code Template**.
* **Output:** Alltid be om **fenced code block** (```<language>...```). Ingen forklaringer skal blandes inn.
* **Eksplisitt Språk:** MÅ spesifisere nøyaktig språk og stilstandard (f.eks., "Idiomatisk Python etter PEP8," "TypeScript med Prettier-konvensjoner").

### 2.2 Resonnement og Kontroll
* **Temperatur:** Skal settes til **0.0–0.1** (Greedy Decoding) for å unngå kreative feil eller "pseudokode".
* **CoT for Logikk:** Bruk intern **CoT** for å bryte ned funksjonell logikk og feilsøking før koden genereres ("Først: Analyser feilårsak. Deretter: Generer patch.").

### 2.3 Roller og Begrensninger
* **Rolle:** Må settes til "Senior Developer," "Sikkerhetsanalytiker," eller "DevOps Engineer".
* **Sikkerhetsbegrensning:** Inkluder alltid begrensninger som: "Ingen hardkodede credentials," "Sanitér input," "Bruk defensiv koding".

---

## 3. Eksempler på Kode Prompt (Essens)

| Seksjon | Essensielt Innhold |
| :--- | :--- |
| **System** | "Du er en Senior Python Developer. Returner KUN gyldig kode i én kodeblokk." |
| **Rolle** | "Din oppgave er å sikre at denne koden er optimal for en produksjonsserver." |
| **Instruksjon** | "Tenk steg for steg internt for å identifisere sårbarheter. Refaktorer deretter." |
| **Konfig.** | Temp=0.0, Top-P=0.9. |