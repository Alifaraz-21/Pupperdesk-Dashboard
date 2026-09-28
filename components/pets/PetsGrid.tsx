"use client";

import { useState } from "react";
import { AlertTriangle, Cake, Home, Plus, Search, User } from "lucide-react";
import Button from "@/components/ui/Button";

type Pet = {
  name: string;
  breed: string;
  age: string;
  owner: string;
  birthday: string;
  inHouse?: boolean;
  missingVaccine?: boolean;
};

const pets: Pet[] = [
  { name: "Bella", breed: "Labrador Retriever", age: "3 yrs", owner: "Olivia Martinez", birthday: "Feb 22", inHouse: true },
  { name: "Charlie", breed: "Beagle", age: "6 yrs", owner: "Emily Johnson", birthday: "Sep 9", missingVaccine: true },
  { name: "Max", breed: "Golden Retriever", age: "5 yrs", owner: "Daniel Brown", birthday: "Jun 8" },
];

const tabs = [
  { key: "all", label: "All Pets" },
  { key: "house", label: "In House" },
  { key: "vaccines", label: "Missing Vaccines" },
] as const;

export default function PetsGrid() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("all");
  const [query, setQuery] = useState("");

  const filtered = pets
    .filter((p) => (tab === "house" ? p.inHouse : tab === "vaccines" ? p.missingVaccine : true))
    .filter((p) => `${p.name} ${p.owner} ${p.breed}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="rounded-xl border bg-card py-6 shadow-sm">
      <div className="flex flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1 rounded-lg bg-muted p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                tab === t.key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              {t.key === "vaccines" && (
                <span className="ml-1.5 rounded-full bg-destructive/10 px-1.5 text-xs text-destructive">
                  {pets.filter((p) => p.missingVaccine).length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pets..."
              className="h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-56"
            />
          </div>
          <Button size="sm">
            <Plus className="h-3.5 w-3.5" />
            Add Pet
          </Button>
        </div>
      </div>

      <p className="mt-3 px-6 text-sm text-muted-foreground">{filtered.length} / {pets.length} pets</p>

      <div className="mt-4 grid gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((pet) => (
          <div key={pet.name} className="rounded-xl border border-border p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-foreground">{pet.name}</h3>
              {pet.inHouse && (
                <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  <Home className="h-3 w-3" /> In house
                </span>
              )}
              {pet.missingVaccine && (
                <span className="flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
                  <AlertTriangle className="h-3 w-3" /> Vaccines due
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {pet.breed} &bull; {pet.age}
            </p>
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" /> Owner: {pet.owner}
              </p>
              <p className="flex items-center gap-1.5">
                <Cake className="h-3.5 w-3.5" /> Birthday: {pet.birthday}
              </p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-8 text-center text-muted-foreground">No pets match this filter.</p>
        )}
      </div>
    </div>
  );
}
