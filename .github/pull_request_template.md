# Pull Request – NORSAIN GPT Platform

> Under finner du en **profesjonell, streng og NGAS-tilpasset** Pull Request-mal for `norsain-gpt-platform`.
> Plassering: `.github/PULL_REQUEST_TEMPLATE.md`

## 1. Summary

Kort og presist: hva ble endret, lagt til eller fjernet?

---

## 2. Problem / Gap Addressed

Beskriv hvorfor endringen er nødvendig:

- Hvilket problem eller brudd ble oppdaget?
- Hvilket behov, krav eller NGAS-regel adresseres?
- Henvis gjerne til issue-nummer eller rapport-ID.

---

## 3. Changes Introduced

Gi en tydelig oversikt over hva som faktisk er endret:

### Scope (velg det som gjelder)

- [ ] Instructions (`gpt-packages/**/instructions`)
- [ ] Knowledge files (`gpt-packages/**/knowledge`)
- [ ] Actions / OpenAPI (`gpt-packages/**/actions`)
- [ ] Scripts (`scripts/**`)
- [ ] Docs (`docs/**`)
- [ ] CI / workflows (`.github/workflows/**`)
- [ ] Templates (`gpt-packages/_template/**`)
- [ ] No NGAS-impact
- [ ] Other (specify):

### Details

- Kort punktliste over konkrete endringer (1–5 linjer, maks).

---

## 4. Knowledge File Integrity (hvis relevant)

Hvis PR påvirker _knowledge_:

- [ ] Filnavn følger `NN.NN_snake_case.md`
- [ ] YAML-frontmatter validert
- [ ] Maks 20 files per GPT-pakke overholdt
- [ ] Plassert i riktig kategori / mappe
- [ ] Ingen duplisering av innhold

---

## 5. Validation Performed

### Lokale sjekker

Kjørte du følgende?

```bash
npm ci
npm run validate --if-present
npm run generate-index --if-present
npm run lint --if-present
npm run typecheck --if-present
npm test --if-present
```

Noter resultater:

- CI-lokalt passerte?
- Index generert uten feil?
- Markdownlint problemer løst?
- Scripts (scaffold/validate/index) fungerer?

### GPT-pakkevalidering

Hvis GPT-pakker ble endret:

- [ ] `validate-gpts.yml` passerte lokalt (styrer 20-fils-regel + struktursjekk)
- [ ] Ingen brudd på NGAS-arkitektur

---

## 6. Screenshots / Examples (Optional)

Legg kun ved dersom det hjelper en reviewer å forstå endringen.

---

## 7. Checklist (obligatorisk)

- [ ] Commit message følger NORSAIN conventions (feat/fix/chore/docs/refactor)
- [ ] PR-beskrivelse er fullstendig
- [ ] Ingen uventede diffs
- [ ] Ingen endring i repo-struktur uten eksplisitt grunn
- [ ] Alle relevante scripts kjører grønt
- [ ] NGAS-regler fulgt (instructions, knowledge, actions)
- [ ] CI går grønt
- [ ] Reviewer Notes fylt ut (hvis nødvendig)

---

## 8. Reviewer Notes

Kort informasjon som hjelper reviewer:

- Scope-avklaringer
- Endepunkter som er sensitive
- Filer som krever ekstra oppmerksomhet
- Eventuell migrasjon som må gjøres
