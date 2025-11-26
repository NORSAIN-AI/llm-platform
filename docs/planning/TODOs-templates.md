# TODOs — Templates & Knowledge (next build)

Denne filen beskriver konkrete oppgaver vi kan gjøre på ny branch `feat/templates-knowledge-v1` for å bygge opp templates, _library-snippets, og kunnskapsfiler.

## Mål
- Legge til / dokumentere nye template-roots (f.eks. `backend_core_architect`) i `gpt-packages/templates/`.
- Utvide `_library/` med reusable instruction-, knowledge- og eval-snippets.
- Legge til validering og scaffolding-tester som sikrer at nye templates kan genereres og valideres automatisk.

## Oppgaver (prioritert)

### Branch: feat/templates-knowledge-v1
- [ ] Opprett `gpt-packages/templates/backend_core_architect/` (minimal scaffold)
- [ ] Lag `template.manifest.json` i ny template-root med `library_includes`-eksempel
- [ ] Legg inn `gpt.json.template` og placeholder `instructions/` NGAS 01–09

### Library ( _library )
- [ ] Legg til `_library/instructions/generic_safety_block.template.md`
- [ ] Legg til `_library/knowledge/norsain_language_tone_guide.template.md`
- [ ] Legg til `_library/evals/eval_matrix.template.md`
- [ ] Legg til `_library/prompts/build_custom_gpt.prompt.md`

### Scripts & validation
- [ ] Oppdater `scripts/scaffolding.mts` for å lese `template.manifest.json` og `library_includes`
- [ ] Legg til integration test som scafolder en template til `.sandbox/` og kjører `validate-gpt`

### Dokumentasjon & plan
- [ ] Oppdater `gpt-packages/templates/README.md` med nye arketypenoter
- [ ] Lag `docs/templates/index.md` med oversikt og eksempel på scaffold-workflow
- [ ] Legg til test-cases eller manual steps i `docs/planning/CHECKLIST.md`

---

Hvis du ønsker kan jeg også opprette noen av filene ovenfor som tomme templates eller eksempler på denne branchen — si hvilke du vil at jeg starter med. 
