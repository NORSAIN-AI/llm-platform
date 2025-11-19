---
name: Bug Report
about: Rapportér en feil som påvirker funksjonalitet, scripts, GPT-pakker eller dokumentasjon
title: '[BUG] '
labels: ['bug']
assignees: []
---

# Bug Report

## 1. Sammendrag

En kort og presis beskrivelse av feilen.

**Eksempel:**
"Markdownlint feiler på MD022 i flere template-filer etter siste merge."

---

## 2. Forventet oppførsel

Hva forventet du skulle skje?

---

## 3. Faktisk oppførsel

Hva skjedde i stedet?

- Feilmeldinger / stacktraces
- CI-jobber som feilet
- Output fra scripts (`npm run validate`, `npx markdownlint-cli2`, etc.)

---

## 4. Reproduksjon

Beskriv tydelige steg for å gjenskape feilen:

1. …
2. …
3. …
4. …

> Inkluder **presise paths** der det er relevant
> (f.eks. `gpt-packages/<gpt>/knowledge/01.foundation/...` eller `scripts/…`)

---

## 5. Miljøinformasjon

**Development environment:**

- OS:
- Node-versjon:
- npm-versjon:
- Editor: (VS Code, Web, IntelliJ)
- Copilot-modell brukt (dersom relevant):

**CI-environment (valgfritt):**

- GitHub Actions Runner: ubuntu-latest
- Workflow:
  - [ ] ci.yml
  - [ ] validate-gpts.yml
  - [ ] auto-pr.yml

---

## 6. Påvirkningsområde (velg det som gjelder)

- [ ] Scripts (`scripts/**`)
- [ ] GPT-pakker (`gpt-packages/**`)
- [ ] Actions (`gpt-packages/**/actions`)
- [ ] Knowledge (`gpt-packages/**/knowledge`)
- [ ] Instruction.md (`gpt-packages/**/instructions`)
- [ ] CI (`.github/workflows/**`)
- [ ] Dokumentasjon (`docs/**`)
- [ ] Repo-struktur / templates
- [ ] Annet (forklar under)

---

## 7. Severity (obligatorisk)

Velg en:

- [ ] **Critical** – Blokkerer utvikling eller main-branch, CI stopper
- [ ] **High** – Breaker funksjon eller scripts, men kan omgås midlertidig
- [ ] **Medium** – Feil i dokumentasjon eller templates
- [ ] **Low** – Layout, formatering, regelforstyrrelser (markdownlint etc.)

---

## 8. Logs, output eller skjermbilder

Legg ved:

- Feilmeldinger fra CI
- Output fra validering
- Output fra `npm run validate`
- Skjermbilder eller CLI-logs

```text
<lim log-output her>
```
