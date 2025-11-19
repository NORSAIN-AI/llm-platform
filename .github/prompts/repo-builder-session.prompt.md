---
agent: norsain-repo-builder-agent
description: 'Start en strukturert repo- og GAP-gjennomgang for norsain-gpt-platform.'
---

# NORSAIN Repo Builder – Struktur- og GAP-økt

Du jobber i repoet `norsain-gpt-platform`.
Målet med denne økten er å:

1. Få en rask oversikt over dagens struktur.
2. Identifisere hull og inkonsistenser (GAP-analyse).
3. Foreslå konkrete forbedringer i struktur, scripts og GPT-pakker.
4. Levere et konkret sett med filer og endringer som kan implementeres.

## Oppdrag

Når denne prompten kjøres, skal du:

1. **Forstå kontekst**
   - Anta at dette er NORSAIN sin primære plattform for å bygge og vedlikeholde Custom GPT-pakker.
   - Fokuser på mappene:
   - `gpt-packages/`
   - `scripts/`
   - `.github/agents/`
   - `.github/chat/`
   - `.github/workflows/`
   - `docs/`

2. **Gjennomføre en lett GAP-analyse**
   - Beskriv kort:
     - hva som ser komplett ut
     - hva som mangler
     - hvor det er inkonsistent navngiving eller struktur
   - Ikke overdriv – målet er en praktisk, handlingsbar liste.

3. **Foreslå forbedringer**
   - Foreslå konkret:
     - nye mapper eller filer som bør opprettes
     - scripts som bør eksistere (f.eks. validering, index-generering)
     - oppdateringer i `.github/agents` og `.github/chat` hvis noe mangler
   - For hver anbefaling: angi **path** og kort begrunnelse.

4. **Levere konkrete forslag**
   - For 1–3 viktigste tiltak:
     - vis foreslått mappestruktur i en kodeblokk
     - gi fullstendig innhold for nye eller endrede filer (Markdown/JSON/TS)
   - Ikke generer for mange ting på én gang – fokuser på det viktigste først.

5. **Neste steg**
   - Avslutt med en kort seksjon:
     - hva utvikler bør gjøre nå (review, tilpasning, commit)
     - hvilke neste oppgaver Repo Builder Agent kan hjelpe med etterpå

## Svarformat

Svar i denne strukturen:

1. **Oversikt (kort)**
2. **GAP-analyse (punktliste)**
3. **Foreslåtte tiltak (med paths)**
4. **Konkrete filer** (hver i egen kodeblokk)
5. **Neste steg**
