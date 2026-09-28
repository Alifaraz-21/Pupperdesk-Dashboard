"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Plus } from "lucide-react";
import Button from "@/components/ui/Button";

const days = [
  { label: "Sun", date: "Dec 20", count: 0 },
  { label: "Mon", date: "Dec 21", count: 0 },
  { label: "Tue", date: "Dec 22", count: 0 },
  { label: "Wed", date: "Dec 23", count: 0 },
  { label: "Thu", date: "Dec 24", count: 1 },
  { label: "Fri", date: "Dec 25", count: 1 },
  { label: "Sat", date: "Dec 26", count: 0 },
];

const tabs = ["Month View", "Week View", "Grooming", "Pending"] as const;

const rooms = [
  { room: "Room 1", bookings: ["Charlie · Emily", "Charlie · Emily"] },
];

export default function AppointmentsBoard() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Week View");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-1 rounded-lg bg-muted p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="rounded-xl border bg-card p-4 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button className="rounded-md p-1.5 hover:bg-accent" aria-label="Previous week">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-semibold text-foreground">Dec 20 – Dec 26, 2026</span>
            <button className="rounded-md p-1.5 hover:bg-accent" aria-label="Next week">
              <ChevronRight className="h-4 w-4" />
            </button>
            <Button variant="outline" size="sm">Today</Button>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Home className="h-3.5 w-3.5 text-primary" /> Boarding
            </span>
            <span className="flex items-center gap-1.5">🐕 Training</span>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <div className="grid min-w-[640px] grid-cols-7 gap-2">
            {days.map((d) => (
              <div key={d.date} className="rounded-lg border border-border p-2 text-center">
                <p className="text-xs font-medium text-muted-foreground">{d.label}</p>
                <p className="text-sm font-semibold text-foreground">{d.date}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {d.count} {d.count === 1 ? "dog" : "dogs"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {rooms.map((r) => (
            <div key={r.room} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className="w-16 shrink-0 text-sm font-semibold text-foreground">{r.room}</span>
              <div className="flex flex-wrap gap-2">
                {r.bookings.map((b, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 text-sm font-medium text-primary hover:underline">
          Show all 50 rooms
        </button>
      </div>
    </div>
  );
}

export function AppointmentsHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Appointments</h1>
        <p className="text-muted-foreground">Manage bookings across boarding, daycare and grooming</p>
      </div>
      <Button size="sm">
        <Plus className="h-3.5 w-3.5" />
        New Appointment
      </Button>
    </div>
  );
}
