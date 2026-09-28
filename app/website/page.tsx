import DashboardShell from "@/components/layout/DashboardShell";
import { Globe } from "lucide-react";

export default function WebsitePage() {
  return (
    <DashboardShell>
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Website</h1>
        <p className="text-muted-foreground">Customize your public booking page</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border bg-card p-16 text-center shadow-sm">
        <Globe className="h-10 w-10 text-muted-foreground" />
        <p className="text-muted-foreground">
          Website builder preview coming soon — not included in this mockup.
        </p>
      </div>
    </DashboardShell>
  );
}
