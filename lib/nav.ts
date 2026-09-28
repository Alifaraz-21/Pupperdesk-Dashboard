import {
  LayoutDashboard,
  Users,
  Heart,
  Calendar,
  CreditCard,
  Globe,
  Settings,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/pets", label: "Pets", icon: Heart },
  { href: "/appointments", label: "Appointments", icon: Calendar },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/website", label: "My Website", icon: Globe },
  { href: "/settings", label: "Settings", icon: Settings },
];
