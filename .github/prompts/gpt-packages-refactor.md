````prompt
---
agent: norsain-repo-builder-agent
description: Refaktorér root-mappen agents/ til gpt-packages/ i norsain-gpt-platform.
---

# Oppdrag – Bytt navn på root-`agents/` til `gpt-packages/`

Du jobber i repoet `norsain-gpt-platform`.

Målet er å:
- unngå navnekonflikt med `.github/agents/` (Copilot-agenter)
- gjøre det tydelig at root-mappen inneholder **GPT-pakker**, ikke Copilot-agenter
- oppdatere all relevant dokumentasjon og scripts slik at alt peker på `gpt-packages/`.

Du skal **ikke** endre `.github/agents/` eller referanser som eksplisitt peker dit.

---

## 1. Identifiser dagens struktur

1. Finn root-mappen `agents/` i repoet (på samme nivå som f.eks. `scripts/`, `src/`, osv.).
2. Bekreft at det i tillegg finnes `.github/agents/` (denne skal være uendret).
3. Noter kort:
   - hva som ligger under root-`agents/` (f.eks. GPT-pakker, templates osv.)
   - hvilke scripts som refererer til denne mappen (grep etter `agents/` i repoet).

---

## 2. Gi root-mappen nytt navn: `gpt-packages/`

1. Bruk `git mv` til å bytte navn:

   ```bash
   git mv agents gpt-packages
   ```

2. Etterpå skal root-strukturen ligne:

  # GPT Packages Refactor Prompt

  ```prompt
  ---
  agent: norsain-repo-builder-agent
  description: Refaktorér root-mappen agents/ til gpt-packages/ i norsain-gpt-platform.
  ---

  # Oppdrag – Bytt navn på root-`agents/` til `gpt-packages/`

  Du jobber i repoet `norsain-gpt-platform`.

  Målet er å:
  - unngå navnekonflikt med `.github/agents/` (Copilot-agenter)
  - gjøre det tydelig at root-mappen inneholder **GPT-pakker**, ikke Copilot-agenter
  - oppdatere all relevant dokumentasjon og scripts slik at alt peker på `gpt-packages/`.

  Du skal **ikke** endre `.github/agents/` eller referanser som eksplisitt peker dit.

  ---

  ## 1. Identifiser dagens struktur

  1. Finn root-mappen `agents/` i repoet (på samme nivå som f.eks. `scripts/`, `src/`, osv.).
  2. Bekreft at det i tillegg finnes `.github/agents/` (denne skal være uendret).
  3. Noter kort:
     - hva som ligger under root-`agents/` (f.eks. GPT-pakker, templates osv.)
     - hvilke scripts som refererer til denne mappen (grep etter `agents/` i repoet).

  ---

  ## 2. Gi root-mappen nytt navn: `gpt-packages/`

  1. Bruk `git mv` til å bytte navn:

     ```bash
     git mv agents gpt-packages
     ```

  2. Etterpå skal root-strukturen ligne:

     ```text
  gpt-packages/
    templates/
      custom_gpt/
        ...
    <andre GPT-pakker>/
  .github/
    agents/
      ...
     ```

  3. Sørg for at `.github/agents/` er urørt.

  ---

  ## 3. Oppdater referanser i kode og scripts

  Du må oppdatere alle referanser til root-`agents/` til `gpt-packages/`.

  1. Søk i repoet etter strenger som:
     - `agents/`
     - `"agents"`
     - `./agents`
  2. For hver match:
     - Hvis den peker på root-mappen (typisk `agents/...` fra prosjektrot):
       - Endre til `gpt-packages/...`.
     - Hvis den peker på `.github/agents/`:
       - La den stå uendret.

  Typiske steder som må oppdateres:

  - `scripts/scaffold-gpt.mts`
  - andre scripts under `scripts/` som jobber med GPT-pakker (validate, generate-index, osv.)
  - eventuelle `*.prompt.md` eller `.md`-filer som beskriver path-er til GPT-pakker
  - eventuelle testfiler som refererer til `agents/...`

  Eksempler på endringer:

  - Fra:
    ```ts
    const TEMPLATE_ROOT = path.join(rootDir, "agents", "templates");
    ```
    Til:
    ```ts
    const TEMPLATE_ROOT = path.join(rootDir, "gpt-packages", "templates");
    ```

  - Fra:
    ```text
    agents/
      templates/
        custom_gpt/
    ```
    Til:
    ```text
    gpt-packages/
      templates/
        custom_gpt/
    ```

  Pass på at referanser som eksplisitt nevner `.github/agents/` **ikke** endres.

  ---

  ## 4. Oppdater REPO_STRUCTURE og README

  1. Åpne `REPO_STRUCTURE.md` (og ev. `README.md` hvis den beskriver `agents/`).
  2. Endre:
     - alle struktureksempler fra `agents/` → `gpt-packages/`
     - eventuelle forklarende avsnitt: skriv nå at `gpt-packages/` inneholder GPT-pakker (gpt.json, instructions, knowledge, actions).
  3. Legg inn én kort setning i REPO_STRUCTURE eller README:

     > Root-mappen `gpt-packages/` inneholder Custom GPT-pakkene (gpt.json, instructions, knowledge, actions).
     > `.github/agents/` er reservert for Copilot- og repo-agenter.

  ---

  ## 5. Justér templates-path hvis nødvendig

  Hvis du tidligere har lagt opp en struktur som:

  ```text
  agents/
    templates/
      custom_gpt/
        ...
  ```

  skal dette nå være:

  ```text
  gpt-packages/
    templates/
      custom_gpt/
        ...
  ```

  1. Sørg for at `templates/` ligger under `gpt-packages/`, ikke i rotkatalogen.
  2. Hvis det finnes referanser til `agents/templates/...` i scripts eller prompts:
     - endre til `gpt-packages/templates/...`.

  Dette gjelder også `templates-cleanup.prompt.md` eller tilsvarende prompts du bruker internt:
  - Du kan enten:
    - oppdatere dem til å bruke `gpt-packages/templates/...`, eller
    - la dem referere til nytt navn eksplisitt i tekst.

  ---

  ## 6. Kjør en enkel verifikasjon

  Etter refaktoreringen:

  1. Kjør:
     ```bash
     npm test
     ```
     eller relevante script som bruker GPT-pakkene (f.eks. scaffold/validate/generate-index).
  2. Opprett en test-GPT med scaffolderen for å verifisere at alt peker riktig:

     ```bash
     npm run scaffold test_gpt
     ```

  3. Sjekk at:
     - den nye GPT-en havner under `gpt-packages/test_gpt/`
     - alle forventede filer (gpt.json, instructions, knowledge, actions) er på plass.

  ---

  ## 7. Commit-struktur

  Lag ryddige commits, f.eks.:

  1. `refactor: rename root agents directory to gpt-packages`
  2. `refactor: update scripts and docs to use gpt-packages path`
  3. `test: verify scaffold and validation work with gpt-packages`

  I PR-beskrivelsen:
  - Forklar kort hvorfor endringen er gjort (skille mellom GPT-pakker og `.github/agents/`).
  - Beskriv hvilke scripts som er berørt.
  - Beskriv hvordan du verifiserte endringene (scaffold + ev. tester).

  ```
````
