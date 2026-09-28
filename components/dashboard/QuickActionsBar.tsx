"use client";

import Link from "next/link";
import { CalendarPlus, FileText, PawPrint, UserPlus } from "lucide-react";

const actions = [
  { href: "/clients", icon: UserPlus, label: "New Client" },
  { href: "/pets", icon: PawPrint, label: "Add Pet" },
  { href: "/appointments", icon: CalendarPlus, label: "Schedule" },
  { href: "/billing", icon: FileText, label: "Invoice" },
];

export default function QuickActionsBar() {
  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 lg:left-[calc(50%+9rem)]">
      <div className="flex items-center gap-1 rounded-2xl border border-border bg-card p-2 shadow-lg">
        {actions.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
            <span className="whitespace-nowrap text-[10px] font-semibold">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
