export interface CapaRecord {
  id: string;
  issue: string;
  root_cause: string;
  corrective_action?: string;
  preventive_action?: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "open" | "in_progress" | "implemented" | "verified" | "closed";
  owner_role: string;
  created_at: string; // ISO 8601
  updated_at?: string; // ISO 8601
}
