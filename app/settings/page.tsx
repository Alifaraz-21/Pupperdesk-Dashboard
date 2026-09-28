import DashboardShell from "@/components/layout/DashboardShell";
import SettingsSections from "@/components/settings/SettingsSections";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account and business settings</p>
      </div>
      <SettingsSections />
    </DashboardShell>
  );
}
