---
agent: norsain-repo-builder-agent
---

## description: Kjør pre-commit, git add, commit og PR etter hver endringsrunde i NORSAIN-repoer.

# NORSAIN – Post-round Commit & PR Workflow

Du jobber i et NORSAIN-repo (f.eks. `norsain-gpt-platform`, `norsain-tools`, osv.).

Målet med denne prompten er å automatisere en trygg standardflyt **etter en endringsrunde**:

1. Kjør relevante sjekker (pre-commit).
2. Stage alle endringer.
3. Foreslå en _Conventional Commit_-melding, få godkjenning og commite.
4. Lage et strukturert PR-forslag (og ev. opprette PR via `gh pr create` hvis tilgjengelig).

Bruk denne workflowen hver gang denne prompten kjøres.

---

## 0. Forutsetninger

- Du antar at:
  - Brukeren står i riktig repo-root i terminalen.
  - Repoet bruker **Conventional Commits**.
  - Branch er allerede opprettet (ikke på `main` / `master` direkte).

Hvis noe av dette ikke stemmer, gi en kort beskjed og foreslå konkret kommando (f.eks. `git checkout -b feat/...`) i stedet for å gjette.

---

## 1. Oversikt over endringer

1. Kjør:

   ```bash
   git status -sb
   ```

2. Presenter kort for brukeren:
   - hvilke filer som er nye / endret / slettet
   - om det finnes unstaged / staged changes.

3. Hvis det **ikke** er noen endringer:
   - si tydelig at det ikke er noe å commite
   - avslutt.

---

## 2. Kjør pre-commit (hvis tilgjengelig)

1. Sjekk om `.pre-commit-config.yaml` finnes i repoet.
2. Hvis ja, kjør:

   ```bash
   pre-commit run --all-files
   ```

3. Hvis `pre-commit` ikke er installert eller kommandoen feiler:
   - vis feilmelding for brukeren
   - ikke stopp alt, men informer at commit bør gjøres først etter at problemet er fikset.

4. Hvis repoet har en dokumentert standard-kommando for checks (f.eks. `npm run lint`, `npm test`), og det er lett å oppdage i `package.json`:
   - foreslå eller kjør den også **etter avtale med bruker**.

---

## 3. Stage alle endringer

1. Kjør:

   ```bash
   git add -A
   ```

2. Kjør deretter:

   ```bash
   git status -sb
   ```

3. Bekreft at alle relevante filer nå er staged.
   - Hvis enkelte filer _ikke_ skal være med (f.eks. genererte artefakter, lokale config-filer), foreslå å unstage dem eksplisitt med `git restore --staged <fil>`.

---

## 4. Foreslå commit-melding (Conventional Commits)

Bruk følgende regler:

- Typer: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `perf`, `build`.
- Emne (subject) maks 70 tegn.
- Imperativ form på engelsk: “add”, “update”, “fix”, “refactor”, “document”.
- Ingen emojis, ingen “marketing-språk”.

### 4.1. Analyser endringene

1. Bruk `git diff --cached` til å forstå hva som er endret.
2. Oppsummer kort:
   - hvilke deler av systemet som er berørt (mapper / nøkkelfiler)
   - hovedtypen endring (feature, docs, refactor, test, osv.).

### 4.2. Foreslå commit-melding

1. Foreslå **én primær** commit-melding, f.eks.:

   ```text
   feat: add NORSAIN GPT Architect templates for custom GPT scaffolding
   ```

2. Hvis det er naturlig, foreslå maks 2–3 alternativer (forskjellig type/ordlyd).
3. Vis for brukeren:
   - foreslått type (`feat`/`docs`/…)
   - hele meldingen.
4. Be eksplisitt om godkjenning eller justering:
   - “Vil du bruke denne meldingen, eller endre type/tekst?”

---

## 5. Commit

Når commit-meldingen er godkjent:

1. Kjør:

   ```bash
   git commit -m "TYPE: subject line..."
   ```

2. Hvis commit feiler (f.eks. pga. pre-commit hook):
   - vis feil
   - stopp og be brukeren fikse feilen før du forsøker igjen.

3. Når commit er vellykket:
   - vis kort logg:

     ```bash
     git log -1 --oneline
     ```

---

## 6. Forbered PR (Pull Request)

1. Finn:
   - gjeldende branch-navn:

     ```bash
     git rev-parse --abbrev-ref HEAD
     ```

   - oppstrøms-branch (typisk `origin/main` eller repo-standard).

2. Sjekk om `gh` (GitHub CLI) er tilgjengelig:

   ```bash
   gh --version
   ```

3. Hvis `gh` er tilgjengelig og repoet ser ut til å være på GitHub:
   - forbered en PR-beskrivelse i markdown.
   - Bruk følgende struktur:

     ```md
     ## Summary

     Kort, konkret beskrivelse av hva som er gjort (1–3 setninger).

     ## Details

     - Viktige filer / komponenter som er endret.
     - Evt. nye scripts eller templates.
     - Evt. påvirkning på andre systemer.

     ## Validation

     - [x] pre-commit run --all-files
     - [ ] npm test
     - [ ] annen verifikasjon (fyll ut)

     ## Notes

     - Evt. breaking changes
     - Ting som bør sjekkes ekstra nøye i review
     ```

4. Vis PR-beskrivelsen til brukeren for godkjenning/justering.

---

## 7. Opprette PR (valgfritt, via `gh`)

Når PR-tekst er godkjent:

1. Hvis `gh` er tilgjengelig:
   - foreslå kommando:

     ```bash
     gh pr create        --title "SAMME SOM COMMIT ELLER EN KORT VARIANT"        --body-file <(cat << 'EOF'
     ... PR-body her ...
     EOF
     )
     ```

   - eller en enklere:

     ```bash
     gh pr create --title "..." --body "..."
     ```

2. Spør eksplisitt brukeren:
   - “Skal jeg opprette PR nå med denne tittelen og denne beskrivelsen?”
3. Bare kjør `gh pr create` hvis brukeren sier ja.

Hvis `gh` ikke er tilgjengelig:

- Presenter PR-tittel og body i chatten.
- Be brukeren opprette PR manuelt via GitHub UI.

---

## 8. Avslutning

Når commit (og ev. PR) er håndtert:

- Oppsummer kort:
  - commit-hash og message
  - ev. PR-lenke eller branch-navn som det skal opprettes PR fra.
- Foreslå neste steg, f.eks.:
  - “Neste: opprett ny arbeidsrunde på samme branch”
  - eller “Neste: lag en ny branch for neste feature”.

Du skal alltid være eksplisitt på hva som er:

- allerede gjort (med kommandoer),
- og hva brukeren selv må gjøre videre.
