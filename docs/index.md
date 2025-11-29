# NORSAIN GPT Platform – Dokumentasjon

Denne dokumentasjonen samler retningslinjer, modeller og arbeidsflyt for hvordan NORSAIN
bruker og forvalter språkmodeller i `llm`.

Hovedområder:

- **Modellvalg og strategi**
- **Modellkatalog**
- **Governance og risiko**
- **Planlegging og backlog**
- **Testing og kvalitet**

---

## 1. Modellvalg og strategi

Hvordan vi velger riktig modell til riktig oppgave, med fokus på kost, latency, kvalitet og risiko.

- [Model selection strategy](model-selection-strategy.md)

Bruk denne siden som “golden path” når du skal velge modell til nye GPT-pakker, agenter eller actions.

---

## 2. Modellkatalog

Oversikt over modeller vi bruker eller vurderer, med kort beskrivelse av styrker, svakheter og typiske use case.

- [Modellkatalog – oversikt](models/_index.md)

Enkeltmodeller:

- [Claude Haiku 4.5](models/claude-haiku-4.5.md)
- [Claude Sonnet 4.5](models/claude-sonnet-4.5.md)
- [Gemini 2.5 Pro](models/gemini-2.5-pro.md)
- [GPT-4.1](models/gpt-4.1.md)
- [GPT-4o](models/gpt-4o.md)
- [GPT-5 Mini](models/gpt-5-mini.md)
- [GPT-5 Codex](models/gpt-5-codex.md)
- [GPT-5.1](models/gpt-5.1.md)
- [GPT-5.1 Codex](models/gpt-5.1-codex.md)
- [GPT-5](models/gpt-5.md)
- [Grok Code Fast 1](models/grok-code-fast-1.md)
- [Raptor Mini](models/raptor-mini.md)

---

## 3. Governance og risiko

Styring, overvåkning og rapportering rundt modellbruk.

- [Model governance dashboard](governance/model-governance-dashboard.md)

Her samler vi KPI-er, risikoindikatorer og beslutningsgrunnlag knyttet til modellbruk i NORSAIN.

---

## 4. Planlegging og backlog for GPT-pakker

Planlegging av arbeid på GPT-pakker, templates og relaterte scripts.

- [Planning index](planning/INDEX.md)
- [TODOs for GPT packages](planning/TODOs-gpt-packages.md)

Bruk disse sidene som arbeidsflate for å planlegge neste iterasjoner på GPT-pakker og modellbiblioteket.

---

## 5. Testing og kvalitet

Standard for testing av GPT-relatert kode (spesielt i TypeScript/Node).

- [Vitest standard](testing/vitest-standard.md)

Denne beskriver hvordan vi setter opp Vitest, hvilke krav vi har til dekning og hvordan testskript bør organiseres.

---

## 6. Navigasjon og videre arbeid

Ønsket bruksmønster:

- Start her i `index.md` for å få oversikt.
- Gå videre inn på:
  - modellvalg → `model-selection-strategy.md`
  - konkrete modeller → `models/`
  - governance → `governance/`
  - planlegging → `planning/`
  - testing → `testing/`

Når nye sider legges til under `docs/`, oppdater:

- denne `index.md` med relevante lenker, og
- `_sidebar.md` hvis du bruker et verktøy som støtter det (f.eks. docsify).

_Sist oppdatert: TODO – fyll inn dato når denne siden endres._
