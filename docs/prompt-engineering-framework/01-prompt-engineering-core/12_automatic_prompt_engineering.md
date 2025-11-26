### FILE START: 12_automatic_prompt_engineering.md

```markdown
---
title: "Automatic Prompt Engineering (APE)"
source: "22365_3_Prompt Engineering_v7"
part: "12"
date: "2025-02-01"
---

# Automatic Prompt Engineering (APE)

**Summary:**  
Automatic Prompt Engineering (APE) er praksisen der LLM-en selv genererer, evaluerer og forbedrer prompts gjennom iterative løkker. Dette gir optimaliserte prompts som ofte overgår menneskeskapte varianter, spesielt i komplekse eller struktursensitive oppgaver.

**Key Points:**
* LLM-en genererer nye promptforslag automatisk.
* Iterativ forbedring basert på evaluering og scoring.
* Kan føre til mer robuste, presise og konsistente prompts.
* Egnet for arbeidsflyter der mange tester er nødvendig.

**Critical Details:**

## Hva er Automatic Prompt Engineering?
APE automatiserer arbeidet med prompt engineering ved å la modellen:
1. Generere alternative prompts.  
2. Evaluere resultatene.  
3. Velge de beste variantene.  
4. Iterere videre for å forbedre presisjon, struktur eller kvalitet.

Metoden fungerer som en evolusjonær prosess der prompts “avleses frem” basert på ytelse.

---

## Hvorfor APE er nyttig
- Mennesker lager ofte prompts basert på intuisjon.  
- LLM-er kan utforske hundrevis av varianter raskt.  
- APE gir:
  - bedre output-kvalitet  
  - mer konsistente resultater  
  - forbedret struktur  
  - rask prototyping  
- Særlig nyttig ved:
  - tekstklassifisering  
  - informasjonsekstraksjon  
  - strukturert data (JSON, YAML, tabeller)  
  - kodeoppgaver  

---

## Hvordan APE typisk fungerer
### 1. **Generering av kandidater**
Modellen starter med en baseprompt og genererer varianter:
- omskriving  
- omstrukturering  
- utvidelser  
- forkortelser  
- presiseringer

### 2. **Testing**
Hver prompt testes mot et sett med inputs.

### 3. **Evaluering**
Resultatene evalueres ut fra:
- nøyaktighet  
- struktur  
- format  
- stabilitet  
- konsistens  

### 4. **Seleksjon og iterasjon**
De beste prompts velges og danner grunnlag for neste generasjon.

Dette kan gjentas til modellen når en ønsket standard.

---

## Bruksområder
APE er særlig egnet for:
- store datasett  
- automatiske pipelines  
- verktøy som trenger stabil output  
- situasjoner hvor output må valideres programmatisk  
- AI-agenter som må generere sine egne prompts etter behov

---

## Eksempel på APE-loop (generisk)
```

Base Prompt → Generate Variants → Test → Score → Keep Best → Mutate/Improve → Repeat

```

---

## Begrensninger
- Kan være ressurskrevende (mange genereringer).  
- Krever evalueringslogikk (manuell eller automatisk scoring).  
- Dårlige evalueringsmetoder fører til dårlige prompts.  
- Kan overoptimalisere prompts til spesifikke datasett → dårlig generalisering.

---

## Beste praksis for APE
- Definer klare evalueringsmetrikker før du starter.  
- Bruk testsett med både enkle og edge cases.  
- Logg alle genererte varianter og deres score.  
- Begrens antall iterasjoner for å redusere kostnader.  
- Kombiner APE med:
  - Few-shot  
  - CoT  
  - Self-consistency  
  - JSON validering

```