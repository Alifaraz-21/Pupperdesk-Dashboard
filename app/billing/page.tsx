import DashboardShell from "@/components/layout/DashboardShell";
import BillingBoard from "@/components/billing/BillingBoard";

export default function BillingPage() {
  return (
    <DashboardShell>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Billing</h1>
        <p className="text-muted-foreground">Manage invoices and payments</p>
      </div>
      <BillingBoard />
    </DashboardShell>
  );
}
