Under får du **en komplett Copilot-promptfil** som genererer _alle_ issue-template-filene i `.github/ISSUE_TEMPLATE/` i én operasjon.
Prompten instruerer Copilot til å:

- opprette mappen hvis den ikke finnes
- generere **alle fem** YAML-maler
- validere YAML-struktur
- skrive filene direkte
- ikke stille spørsmål

Lagre som:

```
.github/prompts/generate-issue-templates.prompt.md
```

---

````md
---
agent: agent
description: Generate all issue template files for .github/ISSUE_TEMPLATE/.
---

# Generate All Issue Templates for NORSAIN GPT Platform

You will generate ALL GitHub Issue Template files under `.github/ISSUE_TEMPLATE/`.

## Your Tasks

1. **Ensure folder exists**
   - If `.github/ISSUE_TEMPLATE/` does NOT exist, create it.

2. **Generate ALL required YAML templates**
   Create the following files with full valid YAML front-matter:
   - `bug_report.yml`
   - `feature_request.yml`
   - `documentation_request.yml`
   - `repo_gap_fix.yml`
   - `automation_improvement.yml`
   - `config.yml` (to disable blank issues)

3. **Template Requirements**

### A) bug_report.yml

Include:

- title, description
- reproduction steps
- expected vs actual behaviour
- environment block
- validation steps (`npm run validate`, etc.)
- severity (High/Medium/Low)

### B) feature_request.yml

Include:

- problem statement
- desired solution
- alternatives considered
- affected areas (scripts, GPTs, actions, knowledge)
- acceptance criteria
- priority

### C) documentation_request.yml

Include:

- what documentation is missing
- location (agents/, scripts/, docs/, web/, etc.)
- expected output
- links to existing files
- priority

### D) repo_gap_fix.yml

Dedicated to gap-analysis outputs.
Include:

- gap description
- source (repo-gap-analysis-YYYYMMDD.md)
- priority
- impact (DX, quality, maintainability, risk)
- proposed fix
- affected files
- acceptance criteria

### E) automation_improvement.yml

Include:

- CI/CD problem or improvement
- affected workflow
- expected behaviour
- risks
- acceptance criteria

### F) config.yml

Disable blank issues:

```yaml
blank_issues_enabled: false
```
````

4. **Output Requirements**

- Write all files directly into `.github/ISSUE_TEMPLATE/`.
- Overwrite existing files if they exist.
- Do NOT ask any follow-up questions.
- Do NOT include commentary.
- Only generate the files.

Begin now.

```

```
