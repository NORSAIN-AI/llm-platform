---
document_id: chunking-standards-ingest
title: NGAS – Chunking Standards for Knowledge Ingestion
version: 1.0.0
status: stable
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [chunking, ingestion, rag, knowledge, llm]
---

# NGAS – Chunking Standards for Knowledge Ingestion

## 1. Purpose and scope

This document defines how **knowledge sources** (docs, specs, policies, procedures, code docs, etc.) are split into chunks before they are:

- indexed in vector stores, or  
- attached as knowledge files to Custom GPTs and LLM agents.

It is primarily written for:

- platform / data engineers  
- AI architects  
- meta-agents that design or audit RAG/ingestion

It does **not** define:

- how long end-user answers should be (see NGAS-02-OUTPUT), or  
- how user signals about “short / detailed answer” are handled (see NGAS-03-SIGNAL).

This is a **global, role-agnostic** standard and must not tilpasses per agent.

---

## 2. Chunking goals

Chunking is done to:

- Preserve **semantic coherence**
  - each chunk should contain one main idea or closely related content.
- Improve **retrieval quality**
  - chunks should be meaningful units for RAG / knowledge lookup.
- Control **token usage**
  - chunks should neither be so small that they become noise, nor so large that they are hard to retrieve or fit in context.

Good chunking should make it:

- easy to answer precise questions based on relevant sections, and  
- easy to trace answers back to original documents and sections.

---

## 3. Target chunk size

Recommended approximate token ranges:

- **Preferred:** 300–700 tokens per chunk  
- **Minimum:** ~150 tokens  
  - below this, chunks often lack sufficient context.  
- **Maximum:** ~900 tokens  
  - above this, recall precision and context costs typically degrade.

These are **guidelines**, not hard constraints. Certain content types may justify deviations (e.g. short procedures or very dense tables).

Rules of thumb:

- If a section is much shorter than 150 tokens, consider merging it with its nearest parent/child section.  
- If a section is much longer than 900 tokens, consider splitting by logical subsections, headings, or topic changes.

---

## 4. Chunk boundaries and structure

Where possible, chunk boundaries should align with:

- **Headings:**
  - use document structure (`#`, `##`, `###`) as a natural basis.
- **Logical sections:**
  - one process, one concept, one risk area, one component group.
- **Paragraph groups:**
  - avoid cutting chunks mid-sentence eller midt i et logisk avsnitt.

Avoid chunks that:

- mix unrelated topics (e.g. “policy + detailed implementation guide + roadmap” i samme chunk), eller  
- hopper mellom flere dokumenttyper (policy + prosedyre + referat) uten klar sammenheng.

For tabeller og lister:

- tabeller som utgjør én sammenhengende sammenligning eller matrise bør ligge i én chunk, eventuelt med en kort innledningstekst.  
- lange lister med uavhengige elementer kan chunkes i flere deler dersom de overstiger anbefalt lengde.

---

## 5. Metadata and IDs

Hver chunk bør ha nok metadata til å kunne spores og brukes som pålitelig referanse.

Minimum anbefalt metadata:

- `document_id` – ID til originaldokumentet (fra YAML-front matter)  
- `chunk_id` – stabil, unik ID pr. chunk  
- `section_path` – sti som beskriver hvor i dokumentet chunken kommer fra, f.eks.:
  - `3.2 / Risk handling`
  - `§7.5 / Dokumentert informasjon`

I pipeline kan dette lagres som:

- eget metadatafelt i vektordatabase / indekstabell, og/eller  
- tydelig markert i toppen av chunken (f.eks. som en liten YAML-blokk eller kommentar).

Dette gjør det enklere å:

- forklare hvor et svar kommer fra,  
- identifisere hvilke deler av dokumentasjonen som bør oppdateres, og  
- kjøre målrettet re-chunking ved dokumentendringer.

---

## 6. Relationship to output length (user responses)

Chunking-regler i dette dokumentet gjelder **inngående kunnskap**, ikke:

- hvor langt svaret til brukeren skal være, eller  
- hvordan svaret skal deles opp i flere deler.

For bruker-output gjelder:

- **NGAS-02-OUTPUT** – strukturen på svaret (headings, lister, tabeller, kort vs. detaljert), og  
- **NGAS-03-SIGNAL** – hvordan signaler som “kort”, “steg for steg”, “bare kode” tolkes.

Viktig:

- En chunk kan være lengre enn et kort svar, og  
- ett svar kan bygge på flere chunks.  

Chunking skal gjøre det enklere å velge riktige informasjonsbiter, ikke diktere eksakt form på svaret.

---

## 7. Governance

- Denne standarden vedlikeholdes av **NORSAIN Data & Platform** i samarbeid med AI-arkitektur.  
- Endringer i chunkingstandard bør evalueres på:
  - retrieval-kvalitet (precision/recall)  
  - tokenbruk og kostnader  
  - praksis i faktiske RAG- og agentløsninger.

Når chunkingstrategi endres:

- vektordatabaser og indekser bør rebygges for berørte dokumenter, og  
- eventuelle meta-agenter som resonerer om chunking bør oppdateres.

---

## 8. Examples – good vs bad chunking

Eksemplene under er ment som referanse for plattform- og datafolk. De skal hjelpe til med å ta konsistente valg når dokumenter skal deles opp.

### 8.1 Conceptual examples

| Context                                   | Good (✅)                                                                                      | Bad (❌)                                                                                               |
|-------------------------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Lang prosedyre med tydelige delkapitler   | Ett chunk per hoveddel (Formål, Scope, Roller, Prosess-steg, Revisjon), hver innenfor 300–700 tokens.| Ett kjempestort chunk som dekker hele prosedyren (2000+ tokens), vanskelig å treffe spesifikt ved søk.|
| Kort policy-side (~120 tokens)            | Slås sammen med nærliggende relevant seksjon (f.eks. overordnet policykapittel) til ett chunk.       | Egen mini-chunk på 120 tokens uten kontekst, som senere hentes som “støy” uten forankring.            |
| QMS-dokument med både policy og prosess   | Policyen chunkes for seg, prosedyren chunkes som egne chunk(er) med klare grenser.                   | Policy-tekst og detaljert steg-for-steg-prosess blandes i samme chunk.                               |

### 8.2 Structural examples

| Context                                     | Good (✅)                                                                                             | Bad (❌)                                                                                                 |
|---------------------------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Stor risikomatrise med forklaring           | Én chunk med kort innledning + tabell + kort avsnitt om tolkning.                                    | Forklaringen ligger i et annet chunk enn selve tabellen, slik at tabellen hentes uten forklaringsramme.|
| Dokument med mange små underavsnitt         | Slår sammen flere nært beslektede underavsnitt til ett chunk for å sikre tilstrekkelig kontekst.     | Ett chunk per miniatyr-avsnitt (1–2 setninger) som gir mange fragmenterte og meningsløse chunks.       |
| Teknisk design-dokument                     | Chunking etter hovedkomponenter/moduler (API, DB, Auth, Logging), med hver sin semantisk enhet.      | Chunking etter vilkårlige antall tokens uten hensyn til komponent- og ansvarsinndeling.                |

### 8.3 Metadata usage

| Context                                      | Good (✅)                                                                                          | Bad (❌)                                                                                               |
|----------------------------------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Sporing tilbake til originaldokument         | Hver chunk har `document_id`, `chunk_id` og `section_path` lagret i metadata.                     | Ingen metadata, kun ren tekst – vanskelig å forstå hvor svaret faktisk kommer fra.                    |
| Endring i ett kapittel i et dokument         | Kun chunks med relevant `section_path` reindekseres.                                               | Hele dokumentet chunkes på nytt uten kontroll, og tidligere referanser til chunk-id-er blir ubrukelige.|
