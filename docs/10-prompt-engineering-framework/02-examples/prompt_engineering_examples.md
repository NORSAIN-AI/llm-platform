# prompt_engineering_examples.md

# Practical Examples: Applying Prompt Engineering Techniques

Denne filen demonstrerer hvordan de ulike teknikkene fra hoveddokumentet brukes i praksis. Eksemplene er utformet som ferdige, direkte anvendbare maler som kan benyttes i reelle arbeidsprosesser, utvikling, analyse og automatisering.

Filen dekker spekteret fra grunnleggende (Zero-Shot) til avanserte autonome mønstre (APE, ReAct, ToT).

---

## 1. Zero-Shot Example

**Use-case:** Klassifisere kundehenvendelser.

**Prompt:**

```text
Classify the customer message below into one of these categories:
- BILLING
- TECHNICAL ISSUE
- CANCELLATION
- GENERAL QUESTION

Message: "Hi, my invoice total looks wrong this month."
```

**Hva dette viser:**

- Ren instruksjon uten eksempler.
- Egnet når kategoriene er klare og oppgaven er kjent for modellen.

---

## 2. One-Shot Example

**Use-case:** Stilbasert tekstgenerering.

**Prompt:**

```text
Example:
Input: "Create a short travel tip for Paris."
Output: "For an authentic experience, explore the hidden cafés around Canal Saint-Martin."

Now do the same style for this input:
"Create a short travel tip for Berlin."
```

**Hva dette viser:**

- Ett eksempel styrer tone og format.

---

## 3. Few-Shot Example

**Use-case:** Strukturert datauttrekk i JSON.

**Prompt:**

```text
Extract the information into JSON using this format:
{
  "product": "string",
  "price": "number",
  "in_stock": "boolean"
}

Examples:
Input: "Red mug for 12.99, available now"
Output: {"product": "Red mug", "price": 12.99, "in_stock": true}

Input: "Blue chair, 85 dollars, currently sold out"
Output: {"product": "Blue chair", "price": 85, "in_stock": false}

Now process this input:
"Black notebook, 4.5 USD, available"
```

**Hva dette viser:**

- Flere eksempler gir sterk struktur og mønster.

---

## 4. System + Role + Context Example

**Use-case:** Profesjonelle rapporter.

**Prompt:**

```text
You are a senior sustainability analyst.
System rules:
- Always return structured reports.
- No exaggeration, only evidence-based statements.
- Tone: formal, objective.

Context: This company wants a CO2-impact summary for their electric delivery fleet.

Task: Produce a concise executive assessment with:
- Key metrics
- Observed risks
- Improvement recommendations
```

**Hva dette viser:**

- Rolle setter tone og kompetansenivå.
- System setter regler.
- Kontekst gir domene.

---

## 5. Step-Back Example (Basic)

**Use-case:** Idéutvikling.

**Prompt:**

```text
Before generating ideas, list the 5 most important principles for effective mobile app onboarding.

Then, based on those principles, propose 3 onboarding flows for a meditation app.
```

**Hva dette viser:**

- Først generell forståelse, deretter spesifikk løsning.

---

## 6. Chain-of-Thought Example

**Use-case:** Kompleks problemløsning.

**Prompt:**

```text
Solve this problem step by step.

"A shop sells pens at 3 for 10 dollars. How much do 12 pens cost?"
```

**Hva dette viser:**

- Stegvis logikk → bedre korrekthet.

---

## 7. Self-Consistency Example

**Use-case:** Flertydige analyser.

**Prosess:**

Kjør denne prompten 5 ganger:

```text
Classify the email as IMPORTANT or NOT IMPORTANT.
Explain your reasoning step by step.
```

Velg sluttresultatet som flest genereringer foreslår.

**Hva dette viser:**

- Majority vote øker nøyaktighet.

---

## 8. Tree-of-Thoughts Example (Basic)

**Use-case:** Strategiutvikling.

**Prompt:**

```text
Step 1: Generate three possible strategies for reducing churn in a SaaS platform.
Step 2: For each strategy, list pros and cons.
Step 3: Select the strongest and expand it into a 3-step implementation plan.
```

**Hva dette viser:**

- Flerveis resonnering → bedre beslutningskvalitet.

---

## 9. ReAct Example (Basic)

**Use-case:** Agent-lignende problemløsning.

**Prompt:**

```text
Thought: I need to understand where to find documentation.
Action: search("API authentication guide")
Observation: <<result>>

Thought: Use the observation to answer the question.
Action: respond("Based on the documentation, here is the correct authentication flow...")
```

**Hva dette viser:**

- Samspill mellom tanke og handling.

---

## 10. APE (Automatic Prompt Engineering) Example

**Use-case:** Enkel optimalisering.

**Prompt:**

```text
Here is a prompt. Generate 5 improved variants and rank them by clarity and output stability.

Prompt: "Summarize this article."
```

**Hva dette viser:**

- Automatisert forbedring.

---

## 11. Code Prompting Example

**Use-case:** Refaktorering.

**Prompt:**

```text
Rewrite the code below into clean, idiomatic TypeScript.
- No comments.
- Keep the same functionality.
- Improve naming.

<code here>
```

**Hva dette viser:**

- Kodekrav må være eksplisitte.

---

## 12. Multimodal Prompting Example

**Use-case:** Dokumentanalyse.

**Prompt:**

```text
Based on the provided image of the invoice, extract:
- vendor
- invoice number
- total amount
- due date

Return result as JSON.
```

**Hva dette viser:**

- Kombinerer visuell og tekstlig forståelse.

---

## 13. JSON Repair Example

**Use-case:** Automatisk validering.

**Prompt:**

```text
Fix this JSON so that it becomes valid, without changing any values:

{"name": "A", "age": 30,}
```

**Hva dette viser:**

- Reparasjon uten datatap.

---

## 14. Schema Example

**Use-case:** Strukturert datainnsamling.

**Prompt:**

```text
Use this schema:
{
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "rating": {"type": "number"},
    "tags": {"type": "array"}
  },
  "required": ["name", "rating"]
}

Extract data from this text accordingly:
"The film Interstellar, often rated 9 out of 10, is known for its space themes."
```

**Hva dette viser:**

- Schema styrer struktur.

---

## 15. APE – Optimization Pattern (Advanced)

**Use-case:** Omskriving av svak prompt til profesjonell system-prompt.

**Prompt (Input):**

```text
Role: You are an Expert Prompt Engineer using the APE methodology.
Task: Optimize the user's draft prompt.
Constraint: Apply "Chain of Thought" and "Positive Constraints".

User Draft: "I need a bot to check my code and tell me if it is safe."

Optimization Steps:
1. Analyze intent (Code Security Review).
2. Identify missing context (Language, Standards).
3. Generate optimized prompt.
```

**Forventet Output:**

```markdown
### OPTIMIZED PROMPT
Role: You are a Senior Security Auditor specializing in Static Application Security Testing (SAST).
Task: Analyze the provided code snippets for security vulnerabilities (OWASP Top 10).
Format: Output a table with columns [Line Number | Vulnerability | Severity | Fix].
Constraint: Be strict. Do not approve code with High severity issues.
```

---

## 16. APE – Variation & Selection Pattern (Advanced)

**Use-case:** Utforskning av prompt-space.

**Prompt:**

```text
Task: Generate 3 distinct prompt variations for a "Customer Service Bot" handling refunds.
Goal: Maximize empathy while adhering to strict policy.

Variation 1: Focus on Rule-Compliance.
Variation 2: Focus on Customer De-escalation.
Variation 3: Balanced Hybrid approach.

Output format: JSON list of strings.
```

**Hva dette viser:**

- Evolusjonær prompt-design før implementasjon.

---

## 17. APE – Self-Correction Loop (Advanced)

**Use-case:** Refleksjon og forbedring.

**Prompt:**

```text
Draft Prompt: "Write a marketing email."

Critique Task:
1. Identify weaknesses in the draft (Too vague, no target audience, no tone).
2. Propose specific improvements.
3. Rewrite the prompt based on the critique.

Final Prompt: "Write a persuasive B2B marketing email targeting CTOs. Focus on ROI and time-saving. Use a professional but energetic tone."
```

---

## 18. Step-Back Prompting (Advanced)

**Use-case:** Arkitektur eller juridisk analyse.

**Prompt Template:**

```text
User Query: "[Specific problem details...]"

Task:
1. Step Back: Identify the generic principles behind the problem.
2. Contextualize: Apply these principles to the NORSAIN infrastructure context.
3. Solve: Provide the final grounded answer.
```

---

## 19. Tree of Thoughts (ToT) Pattern (Advanced)

**Use-case:** Strategisk rådgivning / feilsøking.

**Prompt Template:**

```text
Role: You are a Strategic Advisor.
Task: Recommend the best database strategy for Project X.

Method (Tree of Thoughts):
1. Brainstorm: Propose 3 distinct solutions.
2. Evaluate: List Pros, Cons, and Risks.
3. Select: Remove the 2 weakest options.
4. Refine: Deep-dive into the winning approach.
```

---

## 20. ReAct Pattern (Simulation)

**Use-case:** Simulerte verktøyhandlinger eller agentflyt.

**Prompt Template:**

```text
Task: Answer the user's question by breaking it down into actions.

Cycle:
1. THOUGHT: What do I need to know?
2. ACTION: [Search Knowledge Base] or [Run Calculation]
3. OBSERVATION: [Result]
4. Repeat steps until ready.
5. FINAL ANSWER: Provide the consolidated result.

User Query: "What is the impact of the new ISO policy on our AWS setup?"
```
