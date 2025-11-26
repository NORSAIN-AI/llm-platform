---
document_id: NPEF-PLB-002
title: "Risk Analysis Prompting Playbook"
version: "1.0.0"
status: "Approved"
owner: "Risk Officer"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - playbooks
  - risk
  - iso_31000
  - structured_output
---

# Risk Analysis Prompting Playbook

## 1. Purpose
Denne Playbooken standardiserer prompts for identifisering, klassifisering og evaluering av risikoer i samsvar med ISO 31000-prinsipper og NORSAINs risikomatrise. Målet er å sikre **konsistent klassifisering** og **validerbar output**.

---

## 2. Obligatoriske Regler for Risiko-prompts

### 2.1 Strukturert Output (Kontrakt)
* **Schema:** MÅ bruke **`risk_item.schema.json`**.
* **Format:** Bruk **Multi-Object Extraction** (et array av risikoobjekter).

### 2.2 Resonnement og Vurdering
* **CoT for Matrise:** Bruk obligatorisk **Chain-of-Thought (CoT)** internt for å vurdere `likelihood` og `impact` uavhengig før modellen utleder `risk_level`.
* **Klassifisering:** Alltid bruke `enum` verdiene definert i Schemaet (`low`, `medium`, `high`, `critical`).

### 2.3 Rolle & Kontekst
* **Rolle:** Må settes til "Risk Officer," "ISO 31000 Specialist," eller "Sikkerhetsanalytiker".
* **Kontekst:** Alltid angi **domenet** (f.eks., "Finansrisiko," "IT-sikkerhet," "HMS").

---

## 3. Eksempler på Risiko Prompt (Essens)

| Seksjon | Essensielt Innhold |
| :--- | :--- |
| **System** | Inkluder **Risk Item Schema** og krav: "Returner KUN JSON-array." |
| **Rolle** | "Du er en Risk Officer. Vurder risikoen basert på en 4x4 matrise." |
| **Instruksjon** | "Tenk steg for steg internt for å utlede Likelihood og Impact. Sett status til 'assessed'." |
| **Konfig.** | Temp=0.1, Top-P=0.9. |

### 3. `code_review_playbook.md`

```markdown
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

### 4. `engineering_playbook.md`

```markdown
---
document_id: NPEF-PLB-004
title: "Engineering Prompting Playbook (Generell)"
version: "1.0.0"
status: "Approved"
owner: "Engineering Lead"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - playbooks
  - engineering
  - agent_systems
  - structured_output
---

# Engineering Prompting Playbook (Generell)

## 1. Purpose
Denne Playbooken standardiserer prompts for generell ingeniørbruk, inkludert systemdesign, verktøyflyt, CI/CD-scripts og agent-arkitektur. Fokus ligger på strukturerte verktøykall og flerstegsresonnement.

---

## 2. Obligatoriske Regler for Ingeniør-prompts

### 2.1 Agent Workflow (Verktøybruk)
* **ReAct-modell:** Bruk **ReAct (Reason + Act)** for alle oppgaver som involverer eksterne verktøy, API-kall eller flerstegs datahenting.
* **Struktur:** Følg streng struktur: `Thought: ... Action: [VERKTØY, INPUT] Observation: ...`.
* **Sikkerhet:** Definer eksplisitt hvilke handlinger (`Action`) som er **tillatt**.

### 2.2 Systemdesign og Strategi
* **ToT-modell:** Bruk **Tree-of-Thoughts (ToT)** for arkitekturvalg, strategisk planlegging eller problemer med flere mulige løsninger.
* **CoT:** CoT-steget skal inkludere evaluering av risiko og *trade-offs*.

### 2.3 Struktur og Format
* **Schema:** Bruk **Schema** for input/output av tekniske spesifikasjoner (f.eks. OpenAPI for API, JSON for konfigurasjon).

---

## 3. Eksempler på Engineering Prompt (Essens)

| Seksjon | Essensielt Innhold |
| :--- | :--- |
| **System** | "Du er en DevOps-ekspert. Returner KUN YAML-format for CI/CD-scripts." |
| **Rolle** | "Din oppgave er å designe et kostnadseffektivt skymiljø." |
| **Instruksjon** | "Bruk ReAct-loop for å søke etter kostnader (Action: search). Før deretter resonnementet videre." |
| **Konfig.** | Temp=0.2 (for strategi), Top-P=0.9. |

### 5. `api_documentation_playbook.md`

```markdown
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