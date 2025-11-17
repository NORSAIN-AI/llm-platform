# Eval Scenario Builder Prompt

Struktur for eval-fil:

```markdown
# Scenario: <kort tittel>

## User Input
<eksempel prompt / bruker-tekst>

## Expected Behaviour
- Punktliste over forventet handling, stil, format

## NGAS Rules
- Henvis eksplisitt til relevante NGAS-dokumenter / prinsipper

## Success Criteria
- Målbare indikatorer på vellykket respons

## Failure Cases
- Eksempler på uakseptabel respons
```

Regler:
- Klar, verifiserbar, ikke narrativ
- Ikke mer enn nødvendig for test
- Ingen emojis

Output: Komplett eval-fil (Markdown).
