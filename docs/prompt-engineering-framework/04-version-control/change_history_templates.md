Her kommer neste fil i modul A — **`change_history_templates.md` (v1.0)** — ren, produksjonsklar Markdown med profesjonell struktur og YAML-frontmatter.

---

# **`change_history_templates.md` (v1.0)**

**COPY–PASTE READY**

```markdown
---
document_id: NPEF-VC-002
title: "Prompt Change History Templates"
version: "1.0.0"
status: "Approved"
owner: "NORSAIN AI Engineering"
created: "2025-02-01"
updated: "2025-02-01"
tags:
  - version_control
  - change_history
  - prompt_engineering
  - norsain_framework
---

# Prompt Change History Templates

## Purpose
Dette dokumentet definerer standardiserte maler for å dokumentere endringer i alle prompts i NORSAIN Prompt Engineering Framework (NPEF).  
Målet er å sikre tydelig sporbarhet, god dokumentkontroll og etterlevelse av IMS/QMS-krav.

Dette inngår som en del av **versjonskontroll-modulen** (04_version_control).

---

# 1. Simple Change Entry Template

Brukes for små justeringer som ikke endrer hovedlogikken dramatisk.

```

Prompt ID:
Prompt Name:
Previous Version:
New Version:
Date:
Author:
Type of Change: (Bugfix / Improvement / Clarification / Model update / Format change)
Description of Change:
Reason for Change:
Impact on Output:
Linked Evaluation: (test results / scorecard)
Approval Status: (Approved / Experimental)
Approver:

```

---

# 2. Extended Change Entry Template  
For større endringer som påvirker integrasjoner, kvalitet, sikkerhet, eller produksjonssystemer.

## 2.1 Metadata

```

Prompt ID:
Prompt Name:
Affected Workflows:
Affected Systems / Integrations:
Change Owner:
Reviewer:
Approver:
Version (Old → New):
Date:

```

---

## 2.2 Detailed Change Description

```

1. What changed exactly?

   * Updated prompt sections:
   * Added / removed rules:
   * Modified system/role/context instructions:
   * Updated examples / schemas:
   * Updated model configuration:

2. Rationale (Why was this change needed?)

   * Issue / defect / CAPA reference:
   * Alignment with governance, QMS, or compliance:
   * Risk reduction or stability improvement:

3. Expected impact

   * Expected improvement:
   * Potential risks:
   * Required follow-up actions:

```

---

## 2.3 Testing & Validation

```

1. Testcases executed:

   * Positive cases:
   * Negative cases:
   * Edge cases:

2. Test results summary:

   * Passed cases:
   * Failing cases:
   * Improvements noted:

3. Regression check:

   * Any new issues introduced?

4. Score re-evaluation:

   * Clarity:
   * Structure:
   * Stability:
   * Accuracy:
   * Safety:
   * Efficiency:

```

---

## 2.4 Approval

```

Decision: (Approved / Rejected / Needs Revision)
Approver:
Approval Date:
Comments:

```

---

# 3. Examples

## Simple Entry Example

```

Prompt ID: P-002
Prompt Name: Engineering Code Reviewer
Previous Version: 0.8.0
New Version: 0.9.0
Date: 2025-02-01
Author: Engineering Lead
Type of Change: Improvement
Description: Added explicit JSON error diagnostics section.
Reason: Improve accuracy for TypeScript analysis.
Impact: More consistent output; no breaking changes.
Approval Status: Approved
Approver: Tech Lead

```

## Extended Entry Example

```

Prompt ID: P-004
Prompt Name: CAPA Root Cause Analyzer
Affected Workflows: QMS CAPA, Audit Investigation
Affected Systems: QMS Dashboard, NORSAIN IMS
Change Owner: QMS Manager
Reviewer: AI Engineer
Approver: CTO
Version: 1.2.0 → 1.3.0
Date: 2025-02-01

Detailed Change:

* Updated structure: Added 'RootCauseEvidence' field
* Reworked examples to match IMS 2025 requirements
* Added schema validation step
* Strengthened safety rules for compliance language

Rationale:

* Audit findings required more consistent evidence tracking
* Internal governance update to QMS CAPA format (JAN 2025)

Testing:

* 5 positive cases (all passed)
* 3 edge cases (2 passed, 1 updated needed → fixed)
* Regression: none
* Score improved from 27/35 → 32/35

Approval:

* Approved for Production
  Approval Date: 2025-02-01

```

---

# 4. Governance Requirements

Dette dokumentet støtter krav fra:

- NORSAIN Prompt Governance (NPEF)
- NORSAIN IMS/QMS 2025
- ISO 9001: Dokumentstyring
- ISO 27001: Endringshåndtering
- ISO 31000: Risikovurderinger
- AI-systemstyring 2025 (best practice)

---