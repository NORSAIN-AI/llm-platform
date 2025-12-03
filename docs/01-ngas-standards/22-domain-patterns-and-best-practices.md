---
document_id: domain-patterns-and-best-practices
title: Domain Patterns & Best Practices
status: stable
version: 1.0.0
layer: C
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [patterns, best-practices]
---

# Domain Patterns & Best Practices

## 1. Purpose

Document proven structural solutions and anti-patterns in the domain.

## 2. Core Patterns

### 2.1 Canonicalisation First

Always normalise inputs before performing any domain operation.

### 2.2 Metadata Before Storage

No artefact is persisted without complete metadata.

### 2.3 Strict Schema Enforcement

Data must conform to documented schemas (C-20).

### 2.4 Version-Propagation

Downstream systems must receive version metadata.

## 3. Anti-Patterns

- opaque transformations  
- unversioned artefacts  
- non-auditable changes  
- inconsistent naming  

## 4. Best Practice Checklist

- consistent semantics  
- clear entity ownership  
- repeatable workflows  
- complete lineage capture  
