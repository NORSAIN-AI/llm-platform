# Model Selection Strategy

Purpose

This document defines a practical strategy for selecting language models for NORSAIN GPT Platform workloads. It captures evaluation criteria, trade-offs, and a recommended decision flow so teams can consistently choose an appropriate model for a given task.

## Principles

- Match model capability to task criticality: use stronger models for high-stakes, complex reasoning tasks and smaller models for routine or cost-sensitive tasks.
- Prefer models with longer context windows for use-cases requiring large prompts or many knowledge chunks.
- Prioritise safety, instruction-following and evaluation results over raw benchmarks when production risk exists.
- Measure empirically: prefer A/B testing and evaluation matrices over assumptions.

## Key selection criteria

- Accuracy / reasoning capability: how well the model handles complex, multi-step reasoning and domain-specific correctness.
- Instruction-following: quality of adhering to system prompts and constraints.
- Latency & throughput: acceptable response time for interactive workflows.
- Cost per call: inference cost and total expected monthly spend.
- Context window / token capacity: required prompt + expected response size.
- Safety and hallucination rate: empirical safety checks and guardrails performance.
- Fine-tuning or adapters support: whether the model supports further tuning or instruction tuning as needed.
- Tooling & integrations: compatibility with the action/tooling patterns used in the repo.

## Decision flow (recommended)

1. Classify the task by criticality:
   - High-criticality: security reviews, production architecture decisions, legal/compliance drafts.
   - Medium-criticality: non-production architecture guidance, code examples for engineers.
   - Low-criticality: brainstorming, exploratory notes, generic docs.

2. Estimate token requirements (prompt + expected response). If > context window of inexpensive models, move to larger-context models.

3. Run a small benchmark: select 3 candidate models (cost-efficient, medium, high-capability) and run a representative set of prompts (use the `agents/templates/evals` matrix and scenarios).

4. Evaluate on metrics: relevance, correctness, safety, latency, cost. Use the evaluation matrix and log templates to capture results.

5. Choose model that hits minimum thresholds for correctness and safety while minimizing cost. If no model meets thresholds, consider hybrid patterns (tooling, retrieval-augmented generation, or fine-tuning).

6. Monitor in production: collect logs, run periodic re-evaluations and drift checks.

## Example mappings (illustrative)

- High-accuracy, high-safety tasks: choose the highest-capability model available that fits latency and budget constraints.
- Developer assistance, code generation: prioritize instruction-following and code reliability — prefer models that score well on code evaluation prompts.
- Low-latency UI features: prefer smaller/faster models with caching and retrieval to reduce calls.

## Evaluation process

- Use `agents/templates/evals/eval_scenarios.template.md` to define scenarios and `eval_matrix.template.md` to score models.
- Maintain `agents/templates/evals/eval_log.template.md` entries for each test run.
- Automate benchmarks where possible and store results in CI artifacts.

## Monitoring & lifecycle

- Track key metrics: user-reported issues, hallucination incidents, latency, token usage and cost.
- Re-evaluate quarterly or when usage patterns change.
- If performance or safety degrades, trigger an ADR and run targeted re-benchmarks.

## Next steps

- Create a short benchmark suite derived from common prompts and integrate it into CI so model comparisons are reproducible.
- Add recommended default model names and cost estimates in a private document if required by procurement.


Generated: 2025-11-19
