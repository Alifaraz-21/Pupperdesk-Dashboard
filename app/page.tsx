import DashboardShell from "@/components/layout/DashboardShell";
import OnboardingCard from "@/components/dashboard/OnboardingCard";
import QuickActionsBar from "@/components/dashboard/QuickActionsBar";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Good afternoon, John!</h1>
        <p className="text-muted-foreground">Let&rsquo;s get your business set up.</p>
      </div>
      <OnboardingCard />
      <QuickActionsBar />
    </DashboardShell>
  );
}
