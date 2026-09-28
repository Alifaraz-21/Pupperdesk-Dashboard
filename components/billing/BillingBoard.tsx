"use client";

import { Download, Plus } from "lucide-react";
import Button from "@/components/ui/Button";

const stats = [
  { label: "Paid", value: "$0.00" },
  { label: "Outstanding", value: "$0.00" },
  { label: "Overdue", value: "$0.00" },
  { label: "Drafts", value: "0" },
];

export default function BillingBoard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border bg-card p-4 shadow-sm">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-1 text-2xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-card py-6 shadow-sm">
        <div className="flex flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold">Invoices</h2>
            <p className="text-sm text-muted-foreground">Create and manage client invoices</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-3.5 w-3.5" />
              Export CSV
            </Button>
            <Button size="sm">
              <Plus className="h-3.5 w-3.5" />
              Create Invoice
            </Button>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-y border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Invoice #</th>
                <th className="px-3 py-3 font-medium">Client</th>
                <th className="px-3 py-3 font-medium">Amount</th>
                <th className="px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">Due Date</th>
                <th className="px-6 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-muted-foreground">
                  No invoices yet. Create your first invoice to get started.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
