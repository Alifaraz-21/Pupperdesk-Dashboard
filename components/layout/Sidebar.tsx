"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ExternalLink, PawPrint } from "lucide-react";
import { navItems } from "@/lib/nav";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-card transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-border px-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <PawPrint className="h-5 w-5 text-primary transition-transform group-hover:-rotate-12" />
            </div>
            <span className="truncate font-serif text-xl font-bold text-foreground">
              John Grooming
            </span>
          </Link>
          <button
            className="hidden rounded-full p-2 hover:bg-accent lg:flex"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <nav className="flex-1 space-y-1.5 overflow-y-auto p-4">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  active
                    ? "text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
                style={active ? { backgroundColor: "var(--site-primary, var(--primary))" } : undefined}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="flex-1">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-4">
          <button
            type="button"
            title="Preview only — not connected to a live client portal"
            className="flex w-full cursor-not-allowed items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground/60"
          >
            <ExternalLink className="h-5 w-5 flex-shrink-0" />
            <span>Client Portal</span>
          </button>
        </div>
      </aside>
    </>
  );
}
