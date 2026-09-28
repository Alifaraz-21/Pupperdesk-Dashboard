"use client";

import { useState } from "react";
import { MoreHorizontal, Plus, Search, Upload } from "lucide-react";
import Button from "@/components/ui/Button";

type Client = {
  name: string;
  email: string;
  phone: string;
  status: "active" | "prospect";
  agreements: string;
};

const clients: Client[] = [
  { name: "Olivia Martinez", email: "olivia.martinez@example.com", phone: "(555) 456-7890", status: "active", agreements: "No contracts" },
  { name: "Daniel Brown", email: "daniel.brown@example.com", phone: "(555) 345-6789", status: "active", agreements: "No contracts" },
  { name: "Sarah Williams", email: "sarah.williams@example.com", phone: "(555) 234-5678", status: "prospect", agreements: "No contracts" },
  { name: "Emily Johnson", email: "emily.johnson@example.com", phone: "(555) 123-4567", status: "active", agreements: "No contracts" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

function StatusBadge({ status }: { status: Client["status"] }) {
  const styles =
    status === "active"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-amber-100 text-amber-700";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${styles}`}>
      {status}
    </span>
  );
}

export default function ClientsTable() {
  const [query, setQuery] = useState("");
  const filtered = clients.filter((c) =>
    `${c.name} ${c.email}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="rounded-xl border bg-card py-6 shadow-sm">
      <div className="flex flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-semibold">All Clients</h2>
          <p className="text-sm text-muted-foreground">Manage your client database</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clients..."
              className="h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-56"
            />
          </div>
          <Button variant="outline" size="sm">
            <Upload className="h-3.5 w-3.5" />
            Bulk add
          </Button>
          <Button size="sm">
            <Plus className="h-3.5 w-3.5" />
            Add Client
          </Button>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-y border-border text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-6 py-3 font-medium"></th>
              <th className="px-3 py-3 font-medium">Name</th>
              <th className="px-3 py-3 font-medium">Email</th>
              <th className="px-3 py-3 font-medium">Phone</th>
              <th className="px-3 py-3 font-medium">Status</th>
              <th className="px-3 py-3 font-medium">Agreements</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((client) => (
              <tr key={client.email} className="border-b border-border last:border-0 hover:bg-accent/40">
                <td className="px-6 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {initials(client.name)}
                  </div>
                </td>
                <td className="px-3 py-3 font-medium text-foreground">{client.name}</td>
                <td className="px-3 py-3 text-muted-foreground">{client.email}</td>
                <td className="px-3 py-3 text-muted-foreground">{client.phone}</td>
                <td className="px-3 py-3">
                  <StatusBadge status={client.status} />
                </td>
                <td className="px-3 py-3 text-muted-foreground">{client.agreements}</td>
                <td className="px-6 py-3 text-right">
                  <button className="rounded-md p-1.5 hover:bg-accent" aria-label="More actions">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">
                  No clients match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
