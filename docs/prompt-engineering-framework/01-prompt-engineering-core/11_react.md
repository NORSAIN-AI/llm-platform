### FILE START: 11_react.md

```markdown
---
title: "ReAct (Reason + Act)"
source: "22365_3_Prompt Engineering_v7"
part: "11"
date: "2025-02-01"
---

# ReAct (Reason + Act)

**Summary:**  
ReAct kombinerer resonnement (Chain-of-Thought) og handling (f.eks. verktøykall, søk, API-trinn) i én integrert prompting-teknikk. Den brukes primært i agent-lignende workflows der modellen både må tenke høyt og utføre operasjonelle steg.

**Key Points:**
* Kombinerer **resonnering** (tankeprosess) og **handling** (operasjonelle steg).
* Brukes i agentsystemer som krever verktøykall, søk, navigasjon eller flertrinns arbeidsflyter.
* Gir fleksibel, men kontrollert autonomi.
* Krever presise rammer for sikkerhet, struktur og begrensninger.

**Critical Details:**

## Hva er ReAct?
ReAct står for **Reason + Act** og er en prompting-strategi som lar modellen:

1. **Resonnere** eksplisitt (“Thought: …”)  
2. **Utføre handlinger** (“Action: …”)  
3. **Observere resultater**  
4. **Loop’e** frem til en løsning  

Denne syklusen ligner måten agenter jobber i frameworks som LangChain, AutoGPT og verktøybaserte LLM-arbeidsflyter.

---

## Hvorfor ReAct fungerer
ReAct gir modellen en eksplisitt måte å:
- avklare egne resonnementer  
- utføre konkrete operasjoner  
- korrigere seg selv basert på observerte resultater  

Dette gir en betydelig forbedring i:
- flerstegs problemløsning  
- informasjonsinnhenting  
- planlegging  
- navigasjon  
- arbeidsflyter som krever eksterne systemer  

---

## Struktur i en typisk ReAct-prompt
En effektiv ReAct-prompt bruker en konsekvent struktur:

```

Thought: I need to understand the problem.
Action: search("keyword")
Observation: Search returned XYZ.

Thought: Based on the result...
Action: calculate(...)
Observation: ...

```

ReAct-prompting fungerer fordi det gir modellen et rammeverk for å operere likt en agent.

---

## Begrensninger
- Krever strenge grenser for å hindre uautoriserte handlinger.  
- Kan bli ustabil hvis tankekjeden ikke er godt rammet inn.  
- Egner seg best i miljøer der handlinger faktisk kan utføres (API, verktøy, søk).

---

## Eksempel (fra dokumentet)
Selv om dokumentet ikke går i dybden på ReAct, er prinsippet implisitt koblet til teknikkene:
- Resonneringsmetoder (CoT, self-consistency)  
- Handlingslogikk (strukturert output, JSON, verktøy)  

Bruken av ReAct er naturlig i scenarioer som:
- JSON-uttrekk  
- datarensing  
- kodegenerering  
- API-orienterte pipelines  
- tracerbaserte arbeidsflyter  

---

## Beste praksis
- Definer eksplisitt hva slags handlinger som er **tillatt**.  
- Separér Reason og Action med klare markører (“Thought:”, “Action:” osv.).  
- Legg inn kontrollspørsmål som:  
  - “Are you certain?”  
  - “Check your reasoning.”  
- Bruk lav temperatur for presisjon.  
- Kombiner med:
  - CoT  
  - Toolformer-lignende strukturer  
  - JSON som output-format  

```