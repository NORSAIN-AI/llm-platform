# Pull Request Prompt

Strukturér PR-beskrivelsen slik:

## Oversikt
Kort oppsummering av endringen.

## Bakgrunn / Motiv
Hvorfor endringen trengs (problem, mål, NGAS-krav).

## Endringer
Liste over hovedendringer:
- Nye filer / mapper
- Oppdaterte scripts / OpenAPI
- Kunnskapsfiler lagt til / fjernet

## Validering
Hvordan kvalitet verifisert:
- `npm run validate`
- `npm run generate-index`
- OpenAPI 3.1 sjekk (schema.json)
- Manuell inspeksjon av YAML-frontmatter

## Risiko / Impact
Potensielle bivirkninger, migrering, kompatibilitet.

## Oppfølging
Planlagte neste steg eller TODOs.

## Referanser
Lenker til issues, designnotater, NGAS-dokumenter.

Instruksjon til Copilot: Generer PR-beskrivelse basert på gitt diff / endringsliste. Ikke finn på endringer som ikke er beskrevet.
