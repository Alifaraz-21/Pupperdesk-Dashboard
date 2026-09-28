"use client";

import { useState } from "react";
import { CreditCard, Globe, Scissors, User } from "lucide-react";
import Button from "@/components/ui/Button";

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? "bg-primary" : "bg-muted-foreground/30"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function SectionCard({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="font-semibold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, defaultValue, placeholder }: { label: string; defaultValue?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}

const durations = ["30 min", "60 min", "90 min", "120 min"];
const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
];

export default function SettingsSections() {
  const [portalEnabled, setPortalEnabled] = useState(false);
  const [duration, setDuration] = useState("60 min");
  const [slots, setSlots] = useState<string[]>(["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]);

  const toggleSlot = (slot: string) => {
    setSlots((prev) => (prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]));
  };

  return (
    <div className="space-y-6">
      <SectionCard
        icon={Globe}
        title="Client Portal"
        description="A branded page where your clients can schedule appointments, view their status, and pay invoices."
      >
        <div className="flex items-center justify-between rounded-lg border border-border p-3">
          <span className="text-sm font-medium">{portalEnabled ? "Enabled" : "Disabled"}</span>
          <Toggle checked={portalEnabled} onChange={setPortalEnabled} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Client Portal URL</label>
          <p className="mb-1.5 text-xs text-muted-foreground">
            Share this with all your clients — they log in with their own account to see their info.
          </p>
          <code className="block truncate rounded-md bg-muted px-3 py-2 text-xs text-foreground">
            pupperdesk.com/t/john-grooming/portal
          </code>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">New Client Signup URL</label>
          <p className="mb-1.5 text-xs text-muted-foreground">
            Send this to a new client so they can create their account. Or use the per-client invite link from the
            Clients page to pre-link their account.
          </p>
          <code className="block truncate rounded-md bg-muted px-3 py-2 text-xs text-foreground">
            pupperdesk.com/t/john-grooming/signup
          </code>
        </div>
        {!portalEnabled && (
          <p className="text-xs text-muted-foreground">
            Toggle the switch above to make the portal accessible to clients.
          </p>
        )}
      </SectionCard>

      <SectionCard
        icon={CreditCard}
        title="Payment Settings"
        description="Connect your Stripe account to receive payments from clients"
      >
        <p className="text-sm text-muted-foreground">
          Connect your Stripe account to accept invoice payments from your clients. Payments will be deposited
          directly into your bank account.
        </p>
        <Button variant="outline" size="sm">Connect Stripe Account</Button>

        <div className="border-t border-border pt-4">
          <p className="text-sm font-medium text-foreground">Offline Payments</p>
          <p className="mt-1 text-sm text-muted-foreground">Configure how clients can pay you offline.</p>
          <div className="mt-3">
            <Field label="Make Checks Payable To" placeholder="e.g. John's Grooming LLC" />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Shown to clients when they choose to pay by check through the client portal.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard icon={User} title="Profile" description="Your personal information">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" defaultValue="John Carter" />
          <Field label="Phone" defaultValue="(555) 987-6543" />
        </div>
      </SectionCard>

      <SectionCard icon={Scissors} title="Business" description="Your business information">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Business Name" defaultValue="John Grooming" />
          <Field label="Location" defaultValue="Austin, TX" />
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">Service Catalog</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your services, pricing, and packages from the Services page.
          </p>
          <Button variant="outline" size="sm" className="mt-2">Manage Services</Button>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Boarding Capacity</label>
          <p className="mb-1.5 text-xs text-muted-foreground">
            Maximum number of dogs you can board at one time. Customers will be blocked from booking when you&rsquo;re
            full.
          </p>
          <input
            type="number"
            defaultValue={50}
            className="h-10 w-32 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Bio</label>
          <textarea
            rows={3}
            placeholder="Tell customers a bit about your business..."
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </SectionCard>

      <SectionCard
        icon={Scissors}
        title="Grooming Schedule"
        description="Configure the time slots you offer for grooming appointments"
      >
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Appointment duration</label>
          <div className="flex flex-wrap gap-2">
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                  duration === d
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:bg-accent"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Available time slots</label>
          <p className="mb-2 text-xs text-muted-foreground">Check the hours you&rsquo;re available to take appointments</p>
          <div className="flex flex-wrap gap-2">
            {timeSlots.map((slot) => (
              <label
                key={slot}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  slots.includes(slot) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={slots.includes(slot)}
                  onChange={() => toggleSlot(slot)}
                />
                {slot}
              </label>
            ))}
          </div>
        </div>
      </SectionCard>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
