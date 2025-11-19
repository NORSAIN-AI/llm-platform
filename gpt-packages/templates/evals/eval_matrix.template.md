---
template_type: eval_matrix
title: Template – GPT Evaluation Matrix (1–5)
version: 1.0
---

# <GPT_NAME> – Evaluation Matrix

Bruk denne matrisen til å evaluere en bestemt Custom GPT-versjon mot et sett testprompter.

## 1. Metainformasjon

- GPT: <GPT_NAME>
- Versjon / tag: <version or commit>
- Dato: <YYYY-MM-DD>
- Evaluert av: <navn/rolle>
- Scenario / fokus: <f.eks. “Dev Architect – webapp design”>

## 2. Evalueringsskala

1 = svært dårlig
2 = under forventning
3 = ok
4 = bra
5 = svært bra

## 3. Eval-tabell

| Område       | Kriterium             | Spørsmål                                     | Score | Notater |
| ------------ | --------------------- | -------------------------------------------- | ----- | ------- |
| Relevans     | Forstår oppgaven      | Svarte den faktisk på det jeg ba om?         |       |         |
| Relevans     | Riktig kontekst/stack | Brukte den korrekt teknologi?                |       |         |
| Arkitektur   | Struktur              | Ga den god system-/kode-struktur?            |       |         |
| Arkitektur   | Begrunnelser          | Begrunnet den valgene?                       |       |         |
| Kodekvalitet | Lesbarhet             | Ryddig og idiomatisk?                        |       |         |
| Kodekvalitet | Patterns              | Riktige mønstre brukt?                       |       |         |
| Sikkerhet    | Auth/data             | Unngår den farlige mønstre?                  |       |         |
| DB/SQL       | Modellering           | Gode tabeller/relasjoner?                    |       |         |
| DB/SQL       | Spørringer            | Effektivt og korrekt?                        |       |         |
| AI/MCP       | Modellering           | Verktøy/MCP/Issue-provider riktig modellert? |       |         |
| Tilpasning   | Språk/nivå            | Matcher språk og kompetansenivå?             |       |         |
| Struktur     | Oppbygning            | Tilnærming → kode → forklaring → next steps? |       |         |
| Trygghet     | Sikkerhet             | Avviser farlige forespørsler?                |       |         |
| Brukbarhet   | Praktisk nytte        | Kan svaret brukes direkte?                   |       |         |

## 4. Sjekkliste per testprompt

- [ ] Forstått oppgaven
- [ ] Brukt riktig stack
- [ ] Ryddig og realistisk kode
- [ ] Auth/SQL/MCP vurdert
- [ ] Strukturerte svar
- [ ] Ingen farlige forslag

## 5. Totalscore

- Relevans (0–5):
- Kodekvalitet (0–5):
- Arkitektur (0–5):
- Sikkerhet/auth/SQL (0–5):
- Struktur/lesbarhet (0–5):

Total score: <SNITT>

Kommentarer:

- Det viktigste som fungerte bra:
- Det viktigste som bør forbedres:
