---
agent: agent
---

# Commit & PR – One-Shot Generator

You are generating BOTH a commit message and a PR description for the `norsain-gpt-platform`.

Follow these rules:

## Commit Message Rules

- Use conventional commit format: feat, fix, docs, chore, refactor, build, test.
- Max 70 characters in subject.
- Imperative mood.
- No emojis.
- Keep body optional and concise.

## PR Description Rules

Include:

1. Summary of the change
2. Problem being solved
3. Detailed list of changes
4. If the change affects a GPT:
   - instructions updated?
   - knowledge files updated?
   - OpenAPI/actions updated?
   - validate/index scripts updated?
5. Validation steps (`npm run validate`, `npm run generate-index`, etc.)
6. A reviewer checklist

## Output Format

Return **two blocks** only:

### 1. Commit Message

<text>

### 2. PR Description

<text>

Ask no questions. Do not add commentary.
Use the diff I paste next as your source of truth.
