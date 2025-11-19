Under får du **to separate chat-instructions-filer**, begge i korrekt 2025-format for Copilot/VS Code Agents, og begge klare til commit.

Strukturen:

```
.github/chat/
  agents.chat.md
  scripts.chat.md
```

Disse er strengt skilt etter scope.

---

# 1. `agents.chat.md`

**Gjelder kun for `agents/**` (alle GPT-pakkene).**

```markdown
---
applyTo: 'agents/**'
---

# Chat Instructions – GPT Packages (agents/**)

Disse instruksjonene gjelder kun for arbeid i `agents/**`, som inneholder alle NORSAIN sine Custom GPT-pakker.

## 1. Formål
Gi presis og konsistent hjelp når brukeren jobber med:
- `instructions/`
- `knowledge/`
- `actions/`
- `gpt.json`

Du skal sikre at alt følger NORSAIN GPT Architecture Standard (NGAS).

## 2. Konvensjoner for GPT-pakker

### Mappestruktur
En GPT-pakke har alltid:
```

agents/<gpt_name>/
instructions/instruction.md
knowledge/
actions/
gpt.json

```

### Filnavn
- `knowledge/` → alltid **nummerert**: `NN.NN_snake_case.md`
- maks **20 kunnskapsfiler**
- `actions/` → kun `.json`, gyldig OpenAPI 3.1
- `instruction.md` skal være produksjonsklar systemprompt
- `gpt.json` skal inneholde navn, beskrivelse, tags og metadata

### Mal
Bruk `_template/` som fasit når noe er uklart.

## 3. Svarstil

Alle svar skal struktureres slik:

1. **Tilnærming**
2. **Foreslått struktur** (kodeblokk med paths)
3. **Konkrete filer** (Markdown/JSON/TS)
4. **Neste steg**

Ingen wall-of-text. Output skal være direkte brukbar.

## 4. Arbeidsgrenser
- Ikke generer produktkode (kun GPT-pakke-innhold).
- Ikke endre filstruktur uten eksplisitt beskjed fra brukeren.
- Ikke foreslå mer enn 20 knowledge-filer.
- Ikke generer actions med hemmeligheter eller credentials.

## 5. Når du må be om avklaring
- GPT-navn mangler
- Filtype eller mappestruktur er tvetydig
- Brukeren ber om “oppgrader hele GPT-en” uten spesifikasjon

Be om **én konkret presisering**, ikke åpne spørsmål.

## 6. Språk og nivå
- Svar på norsk når brukeren gjør det.
- Bruk teknisk, presis og strukturert stil.
- Forklar valg kort når det er flere muligheter.
```

---

# 2. `scripts.chat.md`

**Gjelder kun for `scripts/**` (scaffolding, verifisering, tooling).**

````markdown
---
applyTo: 'scripts/**'
---

# Chat Instructions – Scripts (scripts/**)

Disse instruksjonene gjelder kun for arbeid i `scripts/**`, som inneholder verktøy og automatisering for NORSAIN sin Custom GPT-plattform.

## 1. Formål
Hjelpe utviklere å skrive, forbedre eller gjennomgå:
- scaffolding-scripts (`scaffold-gpt.mts`)
- valideringsscripts (`validate-gpt.mts`)
- index-generering (`generate-index.mts`)
- andre repo-verktøy relatert til GPT-struktur

Kodestil skal være moderne, ryddig og idiomatisk TypeScript.

## 2. Teknisk stil og regler

### Språk
- All kode skal være i **TypeScript** (ES Modules).
- Bruk eksplisitte typer der det øker klarhet.
- Unngå lange funksjoner; bryt opp ansvar.

### Importer
- Bruk moderne import-syntaks:
  ```ts
  import fs from 'node:fs/promises';
  import path from 'node:path';
````

### Programdesign

* Scripts skal være:

  * små
  * modulære
  * fokusert på én oppgave
* Unngå sideeffekter utover skriving/lesing i repoet.

### Filoperasjoner

* Bruk `fs/promises`
* Ikke slette filer uten eksplisitt bekreftelse
* Ikke skrive credentials eller generere hemmeligheter

## 3. Svarstil

Når brukeren ber om et script:

1. **Kort tilnærming**
2. **Foreslått struktur** (paths)
3. **TypeScript-fil** (i kodeblokk)
4. **Instruksjoner for bruk**
5. **Neste steg**

Svar konsist og operativt.

## 4. Arbeidsgrenser

* Ikke generer produktkode (backend, API, UI).
* Ikke foreslå pipelines utenfor repoets mandat.
* Ikke bruk tredjepartsbiblioteker uten at brukeren ber om det.
* Ingen destructiveness uten eksplisitt godkjenning.

## 5. Når be om avklaring

Hvis brukeren ber om:

* script uten å spesifisere GPT-root (`agents/<name>`)
* kompleks operasjon uten omfang (f.eks. "refaktorer scripts/")
* endring av mal uten presisering

Be om én presis avklaring.

## 6. Outputformat

Alle script skal være:

* komplett kjørbare
* valide TypeScript-filer
* klare for commit

Filer leveres alltid i fulltekst i egen kodeblokk.

```
