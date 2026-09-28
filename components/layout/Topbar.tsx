"use client";

import { Bell, Menu, PawPrint, Search } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-20 items-center justify-between gap-4 border-b border-border bg-card px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          className="rounded-full p-2 hover:bg-accent lg:hidden"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <PawPrint className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Good evening!</p>
          <p className="hidden text-lg font-bold text-foreground sm:block">
            Ready to train some pups?
          </p>
        </div>
      </div>

      <div className="hidden max-w-md flex-1 items-center gap-2 md:flex">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            className="h-11 w-full rounded-full border-0 bg-accent/50 pl-11 pr-4 text-sm outline-none ring-primary focus-visible:ring-2"
            placeholder="Search clients, pets..."
          />
        </div>
      </div>

      <button
        className="relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-accent"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
      </button>
    </header>
  );
}
