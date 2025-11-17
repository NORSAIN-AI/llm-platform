# Commit Message Prompt

Skriv en presis commit-melding i Conventional Commits-format.

Format:
```
<type>(<scope>): <kort beskrivelse>

<body (valgfritt)>

<footer (valgfritt)>
```

Typer:
- feat: ny funksjonalitet
- fix: feilretting
- docs: dokumentasjon / prompts / README
- chore: vedlikehold / config / tooling
- refactor: kodeendring uten funksjonell endring
- test: tester eller testrelatert struktur
- perf: ytelsesforbedring
- ci: endring i workflow

Scope: kort område (f.eks. agents, scripts, openapi, knowledge, prompts).

Regler:
- Maks 72 tegn i subject
- Ikke punktum på slutten av subject
- Body brukes for detaljer: hva, hvorfor, metodikk
- Referer til validering: "Kjørte `npm run validate` OK" hvis relevant
- Oppgi påvirkede GPT-er eller filer ved større endringer

Eksempler:
```
feat(agents): add summarize action to schema.json
fix(scripts): correct knowledge index path handling
docs(prompts): restore and standardize prompt library
```

Oppgave: Generer en commit-melding basert på diff-beskrivelse du får. Returner kun meldingen.
