---
title: "Working With Schemas"
source: "22365_3_Prompt Engineering_v7"
part: "17"
date: "2025-02-01"
---

# Working With Schemas

**Summary:**  
Denne seksjonen beskriver hvordan schemas (som JSON Schema, strukturerte kontrakter eller faste datamodeller) brukes til å styre LLM-output. Schema-basert prompting gir presis, stabil og maskinlesbar struktur som er kritisk i API-integrasjoner, datasystemer og automatiserte pipelines.

**Key Points:**

* Schemas fungerer som kontrakter mellom prompt og modell.
* Sikrer korrekt struktur, datatyper og format.
* Reduserer feil, variasjon og hallucinasjon i strukturert output.
* Kombineres effektivt med few-shot, JSON repair og validering.

**Critical Details:**

## Hvorfor bruke schemas

LLM-er er gode på genererte mønstre, men svake på presise strukturelle krav uten hjelp.  
Schemas løser dette ved å:

* definere eksakte felt  
* angi tillatte datatyper  
* beskrive obligatoriske og valgfrie felter  
* begrense variasjon  
* redusere risiko for feil i automatiserte prosesser  

Dette er essensielt når output skal brukes videre i systemer som:
* backend-tjenester  
* API-er  
* databehandling  
* valideringspipelines  
* AI-agenter  

---

## Typer schemas som modeller kan bruke
* **JSON Schema** (vanligst og mest robust)  
* **TypeScript interfaces**  
* **OpenAPI models**  
* **Protobuf-lignende strukturer**  
* **YAML-kontrakter**  
* **Egendefinerte feltspesifikasjoner i prompten**

LLM-er responderer best på JSON-lignende strukturer.

---

## Hvordan bruke schema i prompting

### 1. Gi modellen schemaet eksplisitt

Eksempel:

```

Use the following schema:
{
"type": "object",
"properties": {
"title": {"type": "string"},
"year": {"type": "number"},
"genres": {"type": "array"}
},
"required": ["title", "year"]
}

```

### 2. Be modellen følge schema strengt

```

Your output must conform exactly to the schema. Do not add or remove fields.

```

### 3. Kombiner med JSON-validering

```

Validate your output. If invalid, fix the JSON.

```

### 4. Gi eksempler (few-shot) som følger schema

Dette øker nøyaktighet og stabilitet.

---

## Eksempelsammendrag fra dokumentet (kondensert)

Dokumentet viser et eksempel der modellen:

* får et **schema** for en filmomtale  
* får en tekst som input  
* skal generere JSON som matcher nøyaktig  

Modellen instrueres til å:
* trekke ut tittel  
* identifisere årstall  
* hente sjangerkategorier  
* holde seg innenfor feltstruktur  

Schemaet gir rammen som sikrer korrekt datafangst.

---

## Fordeler med schema-basert prompting
* Maskinlesbar og validerbar output  
* Minimalt behov for “cleanup”  
* Reduserer behov for prompt-reparasjon  
* Gir deterministisk struktur (særlig ved temp = 0)  
* Øker robusthet ved modellbytte (overførbarhet)

---

## Begrensninger
* Krever mer arbeid å definere schema.  
* LLM-en kan ha problemer med svært komplekse schemas.  
* Tokenbruk øker når schemaet er langt.  

---

## Beste praksis

### Lag en promptmal

```

Task:
Input:
Schema:
Output Requirements:
Validation Rules:

```

### Hold schemaet enkelt
* Kompleksitet øker risiko for feil.  
* Bruk “required” kun der nødvendig.

### Kombiner med validering
* Automatisk JSON-validator som ajv, Python `jsonschema`, eller lignende.

### Sett temperatur = 0

Gir maksimal stabilitet ved strukturerte data.

### Test med edge cases
* ufullstendig input  
* flertydig informasjon  
* uvanlige datatyper  

---

## Sjekkliste for schema-arbeid
* Er schemaet komplett og korrekt?  
* Har modellen fått schemaet eksplisitt?  
* Er formatkravet helt tydelig?  
* Valideres output maskinelt?  
* Dokumenteres input, output og evalueringsresultat?  

```
