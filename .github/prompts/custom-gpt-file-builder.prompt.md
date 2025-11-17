# Custom GPT File Builder Prompt

Brukes for å generere nye core-filer i en GPT-pakke (instruksjon, changelog, OpenAPI utvidelser, referanse-dokumenter).

Velg filtype og følg respektive regler:

## Instruksjonsfil (instructions/main.md)
Struktur:
1. Identity & Purpose
2. Scope
3. Behaviour Rules
4. Constraints
5. Safety Rules
6. Signal–Response Patterns
7. Output Requirements

Skriv kort, presist, systemorientert.

## Changelog
Format:
```
## <version> - YYYY-MM-DD
### Added
- ...
### Changed
- ...
### Fixed
- ...
```

## OpenAPI Utvidelse (actions/schema.json)
- OpenAPI 3.1
- Legg til nye paths med operationId
- Minimal beskrivelse, kun nødvendige schemas

## Referansefil
- H1 tittel
- Kort listeform der mulig
- Lenker til primærkilder

Output: Full fil klar til commit.
