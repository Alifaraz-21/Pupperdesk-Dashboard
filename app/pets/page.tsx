import DashboardShell from "@/components/layout/DashboardShell";
import PetsGrid from "@/components/pets/PetsGrid";

export default function PetsPage() {
  return (
    <DashboardShell>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Pets</h1>
        <p className="text-muted-foreground">View and manage all pets</p>
      </div>
      <PetsGrid />
    </DashboardShell>
  );
}
