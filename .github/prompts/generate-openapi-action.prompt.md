# Generate OpenAPI Action Prompt

Mål: Legge til eller generere en minimal OpenAPI 3.1 action-spec i `actions/schema.json`.

Krav:
- Filen må være gyldig JSON
- `openapi`: "3.1.0"
- `info`: title, description, version
- Minst ett endpoint i `paths`
- Hver operation: `operationId`, `summary`, (ev. `description`), `parameters` eller `requestBody`, `responses`
- Schemas kun hvis nødvendig

Eksempel på minimal path:
```json
"/summarize": {
  "post": {
    "operationId": "summarizeText",
    "summary": "Summarize input text",
    "requestBody": {
      "required": true,
      "content": {"application/json": {"schema": {"type": "object", "properties": {"text": {"type": "string"}} , "required": ["text"]}}}
    },
    "responses": {
      "200": {"description": "Summary", "content": {"application/json": {"schema": {"type": "object", "properties": {"summary": {"type": "string"}}}}}}
    }
  }
}
```

Instruksjon til Copilot: Generer kun JSON-delene som skal legges inn (ikke forklaring) eller hele filen hvis den mangler.
