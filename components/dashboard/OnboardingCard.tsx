"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, PawPrint, Share2, Sparkles, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const steps = [
  {
    number: 1,
    icon: Share2,
    title: "Share your booking link",
    description:
      "This is your custom booking page — send it to your clients so they can book you directly.",
  },
  {
    number: 2,
    icon: Users,
    title: "Add your first client",
    description: "If you already have customers, you can import them all at once.",
  },
  {
    number: 3,
    icon: Sparkles,
    title: "Customize your site",
    description: 'Add your logo, set your colors, and write a quick "about" so customers know it\u2019s you.',
  },
];

export default function OnboardingCard() {
  const [copied, setCopied] = useState(false);
  const bookingLink = "pupperdesk.com/t/john-grooming"; // demo link, not live

  return (
    <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background py-6 shadow-sm">
      <div className="space-y-6 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <PawPrint className="h-6 w-6 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-serif text-xl font-bold text-foreground">
              Welcome to Pupper Desk!
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Three quick steps to get rolling. Most folks finish in under 5 minutes.
            </p>
          </div>
        </div>

        {/* Step 1 */}
        <div className="space-y-3 rounded-xl border border-border bg-card p-4">
          <div className="flex items-start gap-3">
            <StepBadge n={1} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{steps[0].title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{steps[0].description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <code className="flex-1 truncate rounded-md bg-muted px-3 py-2 font-mono text-xs text-foreground sm:text-sm">
              {bookingLink}
            </code>
            <Button
              size="sm"
              className="shrink-0"
              onClick={() => {
                navigator.clipboard?.writeText(bookingLink).catch(() => {});
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            >
              {copied ? <Check className="mr-1.5 h-3.5 w-3.5" /> : <Copy className="mr-1.5 h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy link"}
            </Button>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-start gap-3">
            <StepBadge n={2} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{steps[1].title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{steps[1].description}</p>
            </div>
            <Button as={Link} href="/clients" variant="outline" size="sm" className="shrink-0">
              Add
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-start gap-3">
            <StepBadge n={3} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{steps[2].title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{steps[2].description}</p>
            </div>
            <Button as={Link} href="/settings" variant="outline" size="sm" className="shrink-0">
              Customize
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
      {n}
    </div>
  );
}
