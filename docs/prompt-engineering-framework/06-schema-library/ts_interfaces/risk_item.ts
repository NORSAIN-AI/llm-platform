export interface RiskItem {
  id: string;
  title: string;
  description?: string;
  likelihood: "low" | "medium" | "high";
  impact: "low" | "medium" | "high" | "critical";
  risk_level?: string;
  controls?: string[];
  owner_role: string;
  status: "identified" | "assessed" | "treated" | "accepted" | "closed";
}
