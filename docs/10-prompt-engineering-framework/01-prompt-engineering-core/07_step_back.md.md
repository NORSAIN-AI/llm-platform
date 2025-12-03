---
title: "Step-Back Prompting"
source: "22365_3_Prompt Engineering_v7"
part: "07"
date: "2025-02-01"
---

# Step-Back Prompting

**Summary:**
Step-back prompting instruerer modellen til å ta et steg tilbake og analysere et problem fra et mer generelt, abstrakt og prinsippielt perspektiv *før* den gir en konkret løsning. Dette forbedrer resonnering, reduserer bias og gir mer robuste, velbegrunnede svar — spesielt i komplekse eller tverrfaglige oppgaver.

**Key Points:**

* Modellen blir bedt om å identifisere hvilke grunnleggende prinsipper som styrer problemet.
* LLM-en aktiverer bredere kunnskap og unngår tidlig tunnellsyn.
* Egner seg for komplekse beslutninger, strategi, planlegging og problemløsning.
* Gir bedre kvalitet enn direkte løsningsforsøk (zero-shot alene).

**Critical Details:**

## Hva Step-Back Prompting er

Step-back prompting er en meta-teknikk:
Modellen får instruks om å løfte blikket, abstraktere problemet og innhente et bredere tolkningsgrunnlag før den presenterer svar.

Dette innebærer:
* identifisering av *problemtypen*
* aktivering av *relevante domeneregler*
* vurdering av *hvilke prinsipper som gjelder*
* etablering av en *teoretisk ramme*

Etter denne analysen gis løsningen — ofte langt mer presis og gjennomarbeidet.

---

## Hvorfor Step-Back fungerer

LLM-er forbedrer kvaliteten når de:
* ikke låser seg for tidlig til én tolkningsretning
* bruker tverrfaglig kunnskap i større grad
* vurderer problemets struktur før løsning

Teknikken:
* reduserer feilresonnement
* øker sammenheng i svar
* forbedrer logikk, prioriteringer og «trade-off»-forståelse
* fremmer selvkorreksjon

---

## Typiske bruksområder

Step-back prompting passer særlig godt for:

* Strategiske vurderinger
* Systemdesign og arkitekturbeslutninger
* Compliance- og risikoanalyse
* Komplekse tekniske beslutninger
* Kreative utforskninger og idégenerering
* Årsaksanalyse (root cause)
* Planlegging og prioritering

Når problemet ikke er trivielt → bruk step-back.

---

## Struktur på en god Step-Back prompt

En effektiv step-back-instruksjon består av to faser:

### Fase A — Step Back

Modellen analyserer problemet fra meta-nivå:
* Hva slags type problem er dette?
* Hvilke prinsipper/styrende faktorer gjelder?
* Hva er den riktige faglige innrammingen?
* Hva er de relevante vurderingskriteriene?

Denne fasen danner et rammeverk.

### Fase B — Apply

Modellen anvender de identifiserte prinsippene på oppgaven:
* bruker rammen fra Fase A
* produserer løsning, plan eller vurdering
* begrunner konklusjoner gjennom prinsipper

---

## Eksempler fra dokumentet (eksemplifisert format)

Eksempler i dokumentet illustrerer at step-back:
* øker kvaliteten på problemløsning
* gir rikere forklaringer
* gjør løsninger mer prinsipielle og mindre tilfeldige

Eksempelstruktur:

1) generell analyse
2) identifisering av riktige prinsipper
3) anvendelse på problem
4) konkludert anbefaling

---

## Beste praksis
* Bruk step-back når oppgaven har strategisk eller kompleks karakter.
* Be eksplisitt om *analyse før løsning*.
* Hold step-back-delen kort, men prinsipiell.
* Unngå å blande inn konkrete detaljer i meta-analysen — disse hører hjemme i løsningsdelen.
* Kombiner gjerne med:
  * Chain-of-Thought for detaljert logikk
  * Self-consistency for kvalitet
  * Rolleprompt (ekspertperspektiv) ved behov

---

## Minimal promptmal

En kompakt, effektiv mal:

> Ta et steg tilbake og vurder dette problemet på et generelt og prinsippielt nivå før du gir løsning.
>
> 1) Hva slags problem er dette?
> 2) Hvilke grunnleggende prinsipper gjelder?
> 3) Bruk dette rammeverket til å gi den endelige løsningen.

---
