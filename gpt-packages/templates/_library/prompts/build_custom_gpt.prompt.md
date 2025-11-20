<!-- Prompt: build_custom_gpt -->

Use this prompt in a builder agent or manual flow to scaffold a new GPT package
from the `custom_gpt` template. The scaffolder will replace placeholders and
apply library includes as defined in `template.manifest.json`.

Example (human-readable):

"Create a new GPT called `Acme Support Assistant` with slug `acme_support`.
Description: "A customer support assistant for Acme's product line."
Owner: "NORSAIN Support"
Include: standard eval_matrix and tone guide"

Notes:

- The scaffolding script should accept a `--sandbox` flag to write to
  `gpt-packages/.sandbox/` for testing.
- Use `{{GPT_NAME}}`, `{{GPT_SLUG}}`, and other placeholders in template files.
