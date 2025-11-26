# Prompt Engineering Framework

Dette området samler retningslinjer, mønstre og maler for prompt engineering brukt i NORSAIN GPT Platform.
Målet er å gi et lett tilgjengelig, praktisk rammeverk for å skrive, evaluere og vedlikeholde prompts som brukes i `gpt-packages` og andre integrasjoner.

Innhold (forslag):

- 00_introduction.md  — Hva er prompt engineering og hvorfor det er viktig for NORSAIN
- 01_patterns.md      — Vanlige patterns (instruction, few-shot, chain-of-thought, tool-augmented prompts)
- 02_templates.md     — Gjenbrukbare prompt-maler og placeholders
- 03_evaluation.md    — Hvordan evaluere og måle prompt-effekt (metrics, eval-matriser)
- 04_safety.md        — Safety / guardrails for prompts (injections, instruction conflicts)
- 05_examples/        — Katalog med eksempelpregede prompts og brukstilfeller

Neste steg:
- Lage de konkrete markdown-filene under denne mappen.
- Legge inn eval-scenarier som refererer til `_library/evals`-malene.
- Knytte eksempler til relevante GPT-pakker under `gpt-packages/`.

Hvis du vil, kan jeg generere de første filene (`00_introduction.md`, `01_patterns.md`, `02_templates.md`) som utgangspunkt — bekreft hvilke filer du ønsker først.