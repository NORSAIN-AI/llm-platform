---
applyTo: \*\*
---

# NORSAIN GPT Platform – Globale Chat-instruksjoner

Disse instruksjonene gjelder for **all AI-assistanse i dette repoet**.

Repoet er en plattform for NORSAIN sine **Custom GPT-er**, ikke et generelt produktrepo.

---

## 1. Prosjektkontekst

All AI-assistanse skal støtte hovedformålet:

- utvikle, vedlikeholde og kvalitetssikre NORSAIN sine **Custom GPT-pakker**
- håndtere **kunnskap, instruksjoner, actions og GPT-metadata**
- generere **struktur, indeks og validering** via scripts
- støtte arbeidet til **Copilot-agenter og agent-prompter**

Kjerneområder i repoet:

- `gpt-packages/` – GPT-pakker (instructions, knowledge, actions, gpt.json)
- `.github/agents/` – Copilot-agenter
- `.github/chat/` – chat-instruksjoner
- `scripts/` – scaffolding, validering, index-generering (TypeScript)
- `docs/` – dokumentasjon, eval-matriser, standarder

---

## 2. Teknologistack og stil

- Primærstack: **TypeScript/Node (ESM)**
- Sekundært: Java/Python kun når eksplisitt etterspurt

Krav til kodeforslag:

- Lesbar, vedlikeholdbar kode – ingen magi
- Moderne TypeScript: `async/await`, rene moduler, små funksjoner
- Del opp i filer når det gir mening
- For scripts: alltid `.ts` (ESM), bruk `fs/promises` og `node:`-imports

---

## 3. Svarstruktur i dette repoet

Når du genererer svar relatert til repoet, bruk alltid:

1. **Tilnærming** – kort hva du gjør
2. **Struktur** – paths / mappeoppsett i kodeblokk
3. **Konkrete forslag** – komplette filer (Markdown/JSON/TS)
4. **Neste steg** – hva utvikler bør gjøre videre (kort)

Unngå lange, ustrukturerte tekstvegger uten konkrete filer.

---

## 4. Sikkerhet og hemmeligheter

- Aldri generer tokens, secrets, API-nøkler eller passord
- Bruk alltid miljøvariabler eller GitHub Secrets i eksempler
- Ikke svekk autentisering, validering eller sikkerhetsmekanismer
- Hvis brukeren ber om noe risikabelt:
  - foreslå et sikrere alternativ
  - forklar kort hvorfor

---

## 5. Scope-begrensninger

AI i dette repoet skal:

- fokusere på **GPT-plattformen**, ikke ekstern produktarkitektur
- ikke lage store applikasjoner; kun støtteverktøy, GPT-pakker og docs
- ikke introdusere nye toppnivåmapper uten eksplisitt instruks
- ikke introdusere nye tredjepartsbibliotek i scripts uten å begrunne det

---

## 6. Scripts (gjelder når brukeren eksplisitt jobber i `scripts/`)

Når du lager eller endrer scripts i `scripts/**`:

- Språk: **TypeScript (ESM)**
- Bruk moderne imports:
  ```ts
  import fs from 'node:fs/promises';
  import path from 'node:path';
  ```
- Scripts skal være:
  - små og fokusert på én oppgave
  - modulære
  - trygge på filoperasjoner (ingen sletting uten eksplisitt beskjed)
- Output: alltid komplett, kjørbar `.ts`-fil i én kodeblokk
- Forklar kort hvordan scriptet kjøres (f.eks. `npx ts-node ...` eller `npm run ...`)

---

## 7. Språk og presisjonsnivå

- Svar på samme språk som brukeren (normalt norsk)
- Bruk teknisk, presis og strukturert stil
- Forklar valg kort når det finnes flere fornuftige alternativer

---

## 8. Når du må be om avklaring

Still **ett presist spørsmål** når:

- GPT-navn mangler, men er nødvendig
- det er uklart om endringer gjelder `_template` eller en konkret GPT
- bruker ber om “refaktorer alt” uten scope
- path ikke finnes og kan være flere steder

Gi 2–3 konkrete forslag til retning og be brukeren velge.
