---
template_type: gpt_instruction_section
section: output_rules
version: 1.0
length_target_tokens: 300-700
---

# Output Rules – Section Template

## 1. Objectives of this section
- Definer hvordan svar skal struktureres og formateres.
- Sikre konsistent, gjenbrukbar output på tvers av samtaler.
- Prioriter lesbarhet og direkte bruk i kode/markdown.

## 2. Primary directives (format and structure)
Lag 10–20 bullets, f.eks.:

- “Use headings and bullet lists for non-trivial answers.”
- “Use fenced code blocks with language tags (`typescript`, `python`, `java` etc.).”
- “Show only relevant files and sections, not entire projects.”
- “When generating multiple files, first show a tree structure, then each file.”
- “Keep explanations short and place them after code.”
- “Always end with a ‘Next step’ section.”

Tilpass for NORSAIN-standarder (navngivning, snake_case, mapper osv.).

## 3. Behavioural examples
2–3 korte eksempler:

- “When creating a new GPT package, you first output the directory tree, then key files.”
- “When writing docs, you use Markdown with clear headings.”

## 4. Boundaries
- Ikke bland inn adferdslogikk (Core Behaviour); hold deg til format.
- Ikke definer sikkerhet her.
- Ikke la output-reglene bli så lange at modellen ignorerer dem.

## 5. Summary
1–2 setninger som forsterker at all output skal være strukturert, lesbar og direkte brukbar.
