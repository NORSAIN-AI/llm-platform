---
applyTo: \*\*
---

# NORSAIN Custom GPT Platform -- Chat Instructions

Disse instruksjonene gjelder for all AI-assistanse i dette repoet.\
Repoet er en plattform for NORSAIN sine **Custom GPT-er**, ikke et
generelt produktrepo.

------------------------------------------------------------------------

## 1. Prosjektkontekst

All AI-assistanse skal støtte hovedformålet med repoet:

-   utvikle, vedlikeholde og kvalitetssikre NORSAIN sine Custom
    GPT-pakker
-   håndtere kunnskap, instruksjoner, actions og GPT-metadata
-   generere struktur, indeks og validering via scripts
-   støtte arbeidet til Copilot-agenter og agent-prompter

Kjerneområder:

-   `agents/` -- GPT-pakker (instructions, knowledge, actions, gpt.json)
-   `.github/agents/` -- Copilot-agenter
-   `.github/prompts/` -- Prompt-filer for agentbruk
-   `scripts/` -- scaffolding, validering, index-generering (TypeScript)
-   `docs/` -- dokumentasjon, eval-matriser, standarder

------------------------------------------------------------------------

## 2. Teknologistack og stil

-   Primærstack: **TypeScript/Node (ESM)**\
-   Sekundært: Java/Python *kun* når eksplisitt etterspurt

Krav:

-   Lesbar, vedlikeholdbar kode; ingen "magiske" løsninger
-   Moderne TS-praksis: `async/await`, modul-importer, rene moduler
-   Korte funksjoner med tydelig ansvar
-   Del opp i filer når det gir mening

------------------------------------------------------------------------

## 3. Konvensjoner for GPT-pakker (`agents/`)

Når du genererer eller endrer filer under `agents/`:

-   Hver GPT ligger i en mappe: `agents/<snake_case_name>/`

-   Underkataloger:

        instructions/
        knowledge/
        actions/
        gpt.json

-   `knowledge/`:

    -   Maks **20 filer**
    -   Filnavn: `NN.NN_snake_case.md`
    -   Bruk nummerering for oversikt og orden i GPT Builder UI

-   `instructions/`:

    -   Minst én fil: `instruction.md`
    -   Skal inneholde strukturerte systeminstruksjoner

-   `actions/`:

    -   Kun OpenAPI 3.1 JSON-filer
    -   Ingen TS/JS/YAML i actions-mappen

-   `gpt.json`:

    -   Metadata for GPT-en (navn, beskrivelse, tags, osv.)

------------------------------------------------------------------------

## 4. Svarstruktur i chat

Når du genererer svar relatert til repoet, bruk alltid denne strukturen:

1.  **Tilnærming** -- kort hva du kommer til å gjøre\
2.  **Struktur** -- foreslå mapper, filer eller endringer (kodeblokk)\
3.  **Konkrete forslag** -- filinnhold, kode eller maler\
4.  **Neste steg** -- hva utvikler burde gjøre videre

Unngå lange tekstblokker uten konkret output.

------------------------------------------------------------------------

## 5. Språk og presisjonsnivå

-   Svar på samme språk som brukeren (normalt norsk)
-   Vær faglig presis og konkret
-   Bruk riktig terminologi: TypeScript, OpenAPI 3.1, CI, metadata, ES
    Modules
-   Forklar kort *hvorfor* et valg er riktig når flere løsninger finnes

------------------------------------------------------------------------

## 6. Sikkerhet og hemmeligheter

-   Aldri generer: tokens, secrets, API-nøkler, passord
-   Vis alltid bruk av miljøvariabler eller GitHub Secrets
-   Ikke svekk autentisering, validering eller sikkerhetsmekanismer
-   Hvis brukeren ber om risikable eller usikre mønstre:
    -   foreslå et sikrere alternativ
    -   forklar kort hvorfor

------------------------------------------------------------------------

## 7. Scope-begrensninger

AI i dette repoet skal:

-   fokusere på **GPT-plattformen**, ikke ekstern produktarkitektur\
-   ikke generere store "wall of code"-svar når modulær struktur er
    bedre\
-   ikke generere rammeverk, verktøy eller systemer som repoet ikke
    bruker\
-   ikke introdusere nye toppnivåmapper uten eksplisitt instruksjon

------------------------------------------------------------------------

## 8. Når du må be om avklaring

Still ett presist spørsmål når:

-   GPT-navn mangler, men er nødvendig
-   det er uklart om endringer gjelder `_template` eller en konkret GPT
-   brukeren ber om stor restrukturering uten område
-   fil/område ikke eksisterer og kan opprettes i flere steder

Gi 2--3 konkrete alternativer for videre retning.

------------------------------------------------------------------------
