.PHONY: help scaffold validate generate-index gen-repo-structure lint typecheck test format preflight docs-serve

help:
	@echo "Targets:"
	@echo "  make scaffold NAME=<slug>   # Scaffold a new GPT package"
	@echo "  make validate NAME=<slug>   # Run validate against a package (or all if not set)"
	@echo "  make generate-index         # Run generate-index script"
	@echo "  make gen-repo-structure     # Update reports/REPO_STRUCTURE.md snapshot"
	@echo "  make lint                   # Run eslint"
	@echo "  make typecheck              # Run tsc --noEmit"
	@echo "  make test                   # Run vitest"
	@echo "  make preflight              # lint + typecheck + test"
	@echo "  make docs-serve             # Serve docs locally (if docsify or other dev server configured)"

# Use npm run scripts where available
lint:
	npm run lint

typecheck:
	npm run typecheck

test:
	npm run test

format:
	npm run format

preflight: lint typecheck test

scaffold:
	ifndef NAME
		$(error NAME is undefined. Usage: make scaffold NAME=<slug>)
	endif
	npm run scaffold -- $(NAME)

validate:
	ifdef NAME
		npm run validate $(NAME)
	else
		npm run validate
	endif

generate-index:
	npm run generate-index

gen-repo-structure:
	node scripts/generate-repo-structure.mjs

docs-serve:
	@echo "If using docsify, open docs/index.html in browser or run a simple static server:"
	@echo "  npx http-server docs -c-1 -p 8080"
