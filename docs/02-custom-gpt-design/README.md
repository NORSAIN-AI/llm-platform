---
title: Custom GPT Design
document-id: custom-gpt-design-readme
version: 1.1.0
owner-role: llm-platform
status: active
description: Oversikt, veiviser og struktur for NORSAIN sin Custom GPT Design-standard. Oppdatert for full NGAS v1.1-struktur.
---

# Custom GPT Design


Dette området i dokumentasjonen beskriver **hvordan NORSAIN designer, strukturerer og styrer Custom GPT-er** på en konsistent, skalerbar og deterministisk måte.  
Mappen fungerer som **den normative standarden** for alle GPT-er som bygges i plattformen.

Området dekker:
- Konseptuelt rammeverk (overview)
- Designprinsipper
- Arkitektur
- Persona-design og UI-instruksjoner
- Instruction stack (NGAS)
- Master System Prompt
- Markdown- og dokumentstandarder
- Maler (templates)
- Diagrammer og modeller
- Knowledge, Actions og Evals
- Roadmap for videre arbeid

Dette er derfor *den viktigste dokumentasjonsmappen* for utviklere som lager eller vedlikeholder GPT-er.

---

## Innholdsoversikt

### 00-overview.md
Gir en **høy-nivå forklaring** av hva en NORSAIN Custom GPT er, hvorfor standarden finnes, og hvilke mål plattformen støtter.

### 01-design-principles.md
Samler alle **grunnleggende prinsipper** for design og styring av Custom GPT-er.

### 02-architecture.md
Beskriver **den tekniske arkitekturen** for en Custom GPT:
- system prompt → instruction stack → knowledge → actions → evals
- rollefordeling og samspill mellom lagene
- forholdet til gpt-packages og agents

### persona-design.md
Forklarer **hvordan personas bygges** for GPT-er, med mal og eksempler.

### ui-instruction-guidelines.md
Gir **retningslinjer for UI-instruksjoner** og hvordan disse integreres i GPT-design.

---

## 03-instruction-stack/
Inneholder de 9 normative instruksjonsfilene (NGAS):
1. Identity
2. Purpose
3. Behaviour
4. Constraints
5. Safety
6. Output Rules
7. Interaction Rules
8. Ask-vs-Infer
9. End Rules
Disse utgjør **den autoritative atferdsmodellen** for alle GPT-er.

---

## 04-master-system-prompt/
Her ligger **Master System Prompt**, som fungerer som “orkestratoren” for hele instruction stacken.
Definerer prioritet, reasoning-loop, strukturkrav, markdown/output-krav og recovery-regler.

---

## 05-markdown-standards/
Inneholder:
- `llm-markdown-constraints.md`
- markdownlint-regler (hvis aktuelt)
Sikrer 100 % konsistent formatering og deterministisk output.

---

## 06-templates/
Maler for:
- nye GPT-er
- instruksjonsfiler
- system prompts
- knowledge packs
Gjør det enkelt å lage nye GPT-er som følger standarden.

---

## 07-diagrams/
Plass for diagrammer (mermaid, ascii) som viser arkitektur, dataflyt, reasoning pipelines og knowledge lookup.

---

## 08-knowledge/
Retningslinjer og eksempler for **knowledge-filer**:
- hvordan skrive, strukturere og validere knowledge
- eksempelfiler og .gitkeep for tomme mapper

---

## 09-actions/
Designregler og maler for **actions**:
- hvordan actions defineres og brukes
- eksempler og templates

---

## 10-evals/
Evalueringsmetodikk, eval-suite-maler og testprompter for **evals**:
- hvordan evalueringsfiler bygges
- eksempler og templates

---

## 08-roadmap.md
Beskriver:
- hva som skal bygges videre
- forbedringer for neste versjoner
- plan for LLM Platform v1.1 → v2.0

---

## Anbefalt leserekkefølge

1. `00-overview.md`
2. `01-design-principles.md`
3. `02-architecture.md`
4. `persona-design.md`
5. `ui-instruction-guidelines.md`
6. Instruction stack (03/)
7. Master System Prompt (04/)
8. Markdown standards (05/)
9. Templates (06/)
10. Diagrams (07/)
11. Knowledge (08/)
12. Actions (09/)
13. Evals (10/)
14. Roadmap (08-roadmap.md)

---

## Bruk for utviklere

Når du skal lage en ny GPT:

1. Les overview, principles, architecture, persona-design og UI-instruksjoner
2. Bruk templates i 06/
3. Følg alle NGAS-instruksjoner (03/)
4. Bruk Master System Prompt som base
5. Skriv knowledge, actions og evals etter retningslinjene
6. Verifiser `.md`-output med markdown-standards

---

## Next steps

- Oppdater og fyll ut alle seksjoner med eksempler og maler
- Legg til diagrammer i 07/
- Utvid knowledge, actions og evals med flere eksempler
- Oppdater roadmap med neste milepæler