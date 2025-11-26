---
title: "Tree of Thoughts (ToT)"
source: "22365_3_Prompt Engineering_v7"
part: "10"
date: "2025-02-01"
---

# Tree of Thoughts (ToT)

**Summary:**  
Tree-of-Thoughts er en avansert prompting-teknikk som utvider Chain-of-Thought ved å la modellen utforske flere mulige resonneringsveier som et beslutningstre. Teknikken egner seg til problemer som krever strategisk tenkning, flerveis utforskning og beslutningslogikk.

**Key Points:**
* Modellen genererer flere parallelle tankestier, ikke kun én CoT-linje.
* Passer for oppgaver som krever søk, evaluering, branching og strategi.
* Gir bedre resultater enn lineær CoT i komplekse problemløsningsscenarier.
* Krever klar struktur, eksplisitt stegdeling og eksplisitt branching.

**Critical Details:**

## Hva er Tree-of-Thoughts?
Tree-of-Thoughts (ToT) bygger på idéen om at komplekse problemer krever flere mulige delsteg for å finne en optimal løsning.  
I stedet for én sekvensiell Chain-of-Thought, instruerer ToT modellen til å:

- generere **flere mulige neste steg**  
- evaluere hvert steg  
- velge hvilke steg som skal videreføres  
- utforske dybde eller bredde i resonneringen  

Dette oppretter et “tanketre”.

---

## Hvorfor ToT fungerer
- Mange problemer krever *branching* og sammenligning av alternative løsninger.  
- Lineær CoT mangler evnen til å bakspore eller utforske flere alternativer.  
- ToT gir bedre ytelse i:
  - planlegging  
  - strategi  
  - kreative oppgaver med flere mulige retninger  
  - komplekse problemløsningsscenarier  
  - evaluering av hypotetiske alternativer  

---

## Hvordan metoden bygges opp

### Steg 1 — Del problemet i delsteg  
Prompten instruerer modellen til å identifisere naturlige beslutningspunkter.

### Steg 2 — Generer kandidattanker  
Hvert delsteg får **flere alternative løsninger**.

Eksempel:
- idé A  
- idé B  
- idé C  

### Steg 3 — Evaluer kandidatene  
Modellen vurderer hver kandidat etter kriterier du definerer:
- kvalitet  
- gjennomførbarhet  
- presisjon  
- konsistens  
- risiko  

### Steg 4 — Velg hvilke grener som fortsetter  
Kun de mest lovende tankene går videre.

### Steg 5 — Gjenta prosessen  
Modellen fortsetter til passende dybde eller til et løsningsforslag er modent.

---

## Typiske oppgaver for ToT
- kreativ historiefortelling  
- strategiutvikling  
- planlegging  
- problemløsning med flere mulige veier  
- caseanalyse  
- komposisjon (spillsystemer, narrativ struktur, designvalg)

---

## Forholdet mellom CoT og ToT
| Teknikker | Beskrivelse | Fordel |
|----------|-------------|--------|
| CoT | Én enkelt kjede av resonnement | Rask, billig, lett å tolke |
| ToT | Flere parallelle resonneringsstier | Bedre for komplekse og åpne problemer |

ToT er i praksis en “super-CoT”.

---

## Beste praksis for ToT
- Instruer eksplisitt om **flere alternativer per steg**.  
- Definer evalueringskriterier tydelig.  
- Hold kontroll på output-lengde via token-limit.  
- Bruk medium temperatur for variasjon uten kaos.  
- Unngå for dype trær uten styring — modellen kan “gå seg vill”.  
- Oppfordre modellen til å eliminere dårlige alternativer tidlig.

---

## Eksempelstruktur (generisk)
