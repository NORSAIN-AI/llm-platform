---
agent: agent
---
# Commit & PR Prompt for NORSAIN GPT Platform

You are assisting with a commit and PR for the `norsain-gpt-platform` repository.
Follow these strict requirements:

## Commit Message Rules
- Use conventional commits: feat, fix, refactor, docs, chore, test, perf, build.
- Keep the subject line ≤ 70 characters.
- Write it in imperative form ("add", "update", "fix").
- Include a short body only if needed.
- No emojis. No fluff. No marketing language.

## PR Description Rules
- Start with a crisp summary of the change.
- State the purpose and impact.
- If the change affects any GPT pack, describe:
  - instructions changed?
  - knowledge changed?
  - actions changed?
  - validation rules touched?
- Link to scripts used (scaffold/validate/index).
- Include validation steps the reviewer can run.
- Add a checklist at the end.

## Your Task
Given my staged changes (I will paste them next), generate:

1. A clean commit message
2. A complete PR description
3. A reviewer checklist

Ask no questions. Return only the final commit + PR text.
