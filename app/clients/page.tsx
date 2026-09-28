import DashboardShell from "@/components/layout/DashboardShell";
import ClientsTable from "@/components/clients/ClientsTable";

export default function ClientsPage() {
  return (
    <DashboardShell>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Clients</h1>
        <p className="text-muted-foreground">Manage your client database</p>
      </div>
      <ClientsTable />
    </DashboardShell>
  );
}
