import DashboardShell from "@/components/layout/DashboardShell";
import AppointmentsBoard, { AppointmentsHeader } from "@/components/appointments/AppointmentsBoard";

export default function AppointmentsPage() {
  return (
    <DashboardShell>
      <AppointmentsHeader />
      <AppointmentsBoard />
    </DashboardShell>
  );
}
