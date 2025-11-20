# Copilot Workspace Instructions for NORSAIN GPT Platform

Dette dokumentet definerer hvordan GitHub Copilot skal arbeide i `norsain-gpt-platform`.
Det er en **global arbeidsinstruks** for Copilot i dette repoet, og styrer hvordan Copilot
leser, foreslår og endrer filer.

Målet er å:

- bevare en **konsistent, NGAS-kompatibel** GPT-plattform
- bruke **templatesystemet** riktig
- unngå “frihåndsarkitektur” og utilsiktet rot.

---

## 1. Mandat og scope

Copilot skal i dette repoet primært hjelpe med:

- TypeScript / ESM-kode i `scripts/**`
- GPT-pakkestruktur i `gpt-packages/**`
- dokumentasjon i `docs/**` og `reports/**`
- agenter, prompts og workflows under `.github/**`

Copilot skal **ikke**:

- introdusere nye toppnivåmapper eller fundamentalt endre arkitekturen
- skrive inn secrets, tokens eller nøkler noen steder
- gjøre destruktive endringer uten svært tydelig instruks (sletting, flytting av mange filer osv.).

---

## 2. Repoarkitektur (for Copilot)

For Copilot er disse områdene viktigst:

- `.github/`
  - `agents/` – agent-spesifikasjoner for Copilot/VS Code-agenter
  - `prompts/` – prompt-maler og hjelpeprompts
  - øvrige mapper for chat-/instruksjonsfiler som beskrevet i `REPO_STRUCTURE.md`
- `gpt-packages/`
  - `<gpt_name>/` – konkrete GPT-pakker
  - `templates/`
    - `custom_gpt/` – kanonisk mal for nye GPT-pakker
    - `_library/` – delte maler (instructions/knowledge/evals/logs/prompts) når etablert
- `scripts/`
  - `scaffold-gpt.mts` – scaffold-logikk
  - `validate-gpt.mts` – valideringslogikk
  - `generate-index.mts` – generering av knowledge-indekser
- `docs/` – dokumentasjon, inkl. planfiler under `docs/planning/`
- `reports/` – analyser og rapporter (bl.a. `REPO_STRUCTURE.md`)

Copilot skal alltid forholde seg til **faktisk struktur** i `REPO_STRUCTURE.md` og
`gpt-packages/templates/README.md` før den foreslår nye filer/mapper.

---

## 3. Generelle regler for Copilot i dette repoet

1. **Les før du skriver**
   - Les relevante filer (README, templates/README, scripts, agent-filer) før du foreslår endringer.
2. **Ikke finn på nye strukturer**
   - Bruk eksisterende mønstre: mapper, filnavn, YAML-frontmatter, NGAS-konvensjoner.
3. **Ikke endre arkitektur uten mandat**
   - Ingen nye toppnivåmapper.
   - Ingen flytting av mange filer uten eksplisitt beskjed.
4. **Ingen secrets**
   - Aldri foreslå å sjekke inn tokens, nøkler eller hemmelig konfig.
5. **Hold forslag PR-vennlige**
   - Små, fokuserte endringer som kan ligge i én PR med tydelig scope.

---

## 4. GPT-pakker under `gpt-packages/`

### 4.1 Prod-pakker

En **prod-GPT-pakke** under `gpt-packages/<slug>/` skal som hovedregel ha:

```text
gpt-packages/<slug>/
  gpt.json
  gpt_metadata/
  actions/
  instructions/
    01_identity.md
    02_purpose.md
    03_core_behaviour.md
    04_constraints.md
    05_safety.md
    06_output_rules.md
    07_interaction_rules.md
    08_ask_vs_infer.md
    09_end_rules.md
  knowledge/
    00.01_knowledge_index.md
    (øvrige knowledge-filer, maks totalt 20)
```

Copilot skal:

- foreslå strukturer som speiler **`templates/custom_gpt`** og NGAS 01–09
- ikke fjerne disse mappene/filene uten svært tydelig instruks.

### 4.2 Sandbox-pakker

- **Sandbox/test-GPT-er** skal ligge under:
  `gpt-packages/.sandbox/<slug>/`
- Copilot skal **standard** legge eksperimentelle forslag hit, ikke rett i prod-områdene,
  med mindre brukeren eksplisitt ber om en prod-pakke.

---

## 5. Knowledge-filer (NGAS)

Knowledge-filer ligger i `knowledge/`-treet til en GPT-pakke.

Regler:

- **Maks 20 knowledge-filer** per GPT-pakke (totalt, uavhengig av undermapper).
- Filnavn skal følge mønsteret:

  ```text
  NN.NN_snake_case.md
  ```

  Eksempel: `00.01_language_tone_guide.md`, `02.03_backend_architecture.md`.

- Det er **tillatt med undermapper** i `knowledge/` (f.eks. `01.foundation/`, `02.architecture/`),
  så lenge totalen er ≤ 20 filer.

- Alle knowledge-filer skal ha **YAML-frontmatter** øverst (minst id/title/version/status),
  og innhold i ren, faktabasert prosa. Ingen system-instruksjoner i `knowledge/`.

Copilot skal aldri:

- foreslå å gå over 20 knowledge-filer
- blande system-instruksjoner, rolle-beskrivelser og slikt inn i knowledge-filer
  (det hører hjemme i `instructions/`).

---

## 6. Instruction-filer (NGAS 01–09)

Instruction-filer er GPT-ens systemprompt og skal ligge i `instructions/` som
separate filer:

- `01_identity.md`
- `02_purpose.md`
- `03_core_behaviour.md`
- `04_constraints.md`
- `05_safety.md`
- `06_output_rules.md`
- `07_interaction_rules.md`
- `08_ask_vs_infer.md`
- `09_end_rules.md`

Copilot skal:

- holde disse **korte, presise og systemorienterte**
- unngå narrative historier, eksempler og lange forklaringer her
- ikke blande inn domain-knowledge (det hører i `knowledge/`).

Ved endringer i disse filene:

- Copilot skal være ekstra konservativ
- helst foreslå små, målrettede endringer, ikke full omskriving, med mindre brukeren ber om det.

---

## 7. Actions / OpenAPI og eval-filer

### 7.1 Actions / OpenAPI

Filer i `actions/` og eventuelle `openapi.json`-filer skal:

- være **gyldig JSON**
- følge **OpenAPI 3.1**
- ha rene, modellvennlige schemaer (ingen kommentarer inni JSON).

Copilot skal:

- ikke endre eksisterende actions uten at brukeren peker på hva som skal endres
- holde nye actions små og tydelige (paths, operationId, request/response, schemas)
- unngå business-logikk i beskrivelser (hold det kort og funksjonelt).

### 7.2 Eval-filer

Eval-filer skal typisk inneholde:

- scenario
- input (prompt / samtale)
- forventet oppførsel/resultat
- referanse til NGAS-regler der relevant

Copilot kan hjelpe med å:

- strukturere eval-scenarier
- holde eval-filer konsistente og lett maskinlesbare.

---

## 8. Templatesystemet (`gpt-packages/templates/`)

Copilot skal være lojal mot templatesystemet:

- `gpt-packages/templates/custom_gpt/`
  - base-mal for nye GPT-pakker
  - styres av `template.manifest.json`
- `gpt-packages/templates/_library/` (når etablert)
  - felles maler for instructions, knowledge, evals, logs, prompts
- ev. `_system/`-filer (schema osv.) som beskriver manifest-format og valideringsregler

Regler:

- Nye GPT-pakker skal så langt mulig opprettes ved hjelp av **scaffolding** basert på `custom_gpt`,
  ikke ved håndbygging av struktur.
- Copilot skal lese `gpt-packages/templates/README.md` og `template.manifest.json`
  før den foreslår endringer i templates eller ny struktur.

Copilot skal ikke:

- endre strukturen i `templates/custom_gpt` eller `_library`
  uten eksplisitt beskjed om at det er en arkitekturendring.

---

## 9. Scripts og kommandoer Copilot skal foreslå

Copilot skal bruke og foreslå eksisterende scripts når det gir mening.

Standard-kommandoer:

```bash
# Scaffold ny GPT basert på templates/custom_gpt
npm run scaffold <gpt-name>

# Valider én GPT-pakke
npm run validate <gpt-name>

# Valider alle GPT-pakker
npm run validate

# Generer knowledge-indekser (hvis definert i package.json)
npm run generate-index
npm run generate-index <gpt-name>

# Kvalitetssjekk
npm run lint
npm run format
npm run typecheck

# Full preflight (hvis definert)
npm run preflight
```

Copilot skal:

- foreslå disse når brukeren jobber med `gpt-packages/**` eller `scripts/**`
- ikke finne opp nye script-navn; bruk det som faktisk finnes i `package.json`
  - bruke `tsx scripts/<navn>.mts` kun ved behov for direkte script-kjøring
    (f.eks. feilsøking).

---

## 10. Hva Copilot aldri skal gjøre her

Copilot skal **ikke**:

- lage flere enn 20 knowledge-filer for en GPT-pakke
- skrive secrets, tilgangsnøkler eller passord
- introdusere nye toppnivåmapper (`src/`, `lib/`, osv.) uten klart mandat
- flette sammen flere GPT-pakker i én uten eksplisitt oppdrag
- endre kritiske NGAS-kjernefiler eller templates-strukturen på eget initiativ
- lage store “mega-commits” med blandet scope; forslag skal være små og tematisk rene.

---

## 11. Samspill med agenter og lokale instruksjoner

Dette dokumentet er **global baseline** for Copilot i repoet.

I tillegg finnes:

- **Agent-filer** under `.github/agents/`
  - f.eks. Repo Builder Agent, Dev TODO & Branch Planner, Instruction/Knowledge Builders
- **Prompts** under `.github/prompts/`
- Eventuelle spesifikke instruksjons-/chat-filer omtalt i `REPO_STRUCTURE.md`

Når Copilot jobber innenfor en spesifikk agent-kontekst:

1. Følg **agent-mandatet** i den aktuelle `.agent.md`-filen.
2. Følg **denne** `copilot-instructions.md` for:
   - NGAS-regler
   - struktur og scripts
   - sikkerhet.
3. Der det er konflikt gjelder:
   - sikkerhet og NGAS-begrensninger først,
   - deretter agent-mandatet,
   - deretter lokale prompts.

For branch-navn, commit-struktur og TODO-planer:

- Copilot skal henvise til og/eller følge **Dev TODO & Branch Planner-agenten**,
  ikke finne opp egne, ustrukturerte oppsett.

---

## 12. Filosofi

Copilot skal i dette repoet være:

- **strukturforsterker** – ikke arkitekt på egen hånd
- **NGAS-lojalt verktøy** – ikke improviserende GPT-designer
- en hjelp til å gjøre arbeidet raskere og renere, uten å kompromisse
  på struktur, kvalitet og sikkerhet.
