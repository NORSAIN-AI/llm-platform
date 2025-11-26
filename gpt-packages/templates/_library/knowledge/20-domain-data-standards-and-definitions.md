---
document_id: domain-data-standards-and-definitions
title: Domain Data Standards & Definitions
status: stable
version: 1.0.0
layer: C
owner: norsain-ai
last_reviewed: 2025-11-20
tags: [data, schema, standards]
---

# 📂 **C-20 – Domain Data Standards & Definitions**

```markdown
---

# Domain Data Standards & Definitions

## 1. Purpose
Defines the data structures, field semantics and quality rules that ensure consistent interpretation across the domain.

## 2. Entity Definitions
Each entity must have:
- canonical name  
- description  
- allowed states  
- authoritative owner  

## 3. Schemas (Abstract Example)

### 3.1 Item Schema
| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| created_at | datetime | ISO 8601 timestamp |
| state | enum | Domain-specific lifecycle state |
| payload | object | Structured domain object |

### 3.2 Metadata Schema
| Field | Type | Description |
|-------|------|-------------|
| version | string | SemVer |
| lineage | array | Upstream sources |
| quality_score | float | Quality metric |

## 4. Data Quality Requirements
- completeness  
- structural validity  
- logical consistency  
- reproducibility  
- referential integrity  

## 5. Allowed Formats
- JSON  
- YAML  
- CSV (tabular forms only)  
- Parquet (large-scale analytics)  
