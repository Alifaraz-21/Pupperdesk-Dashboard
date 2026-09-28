# Pupper Desk — Dashboard (Frontend Preview)

A standalone Next.js frontend for the Pupper Desk admin dashboard, built from
the provided HTML mockups (Dashboard, Clients, Pets, Appointments, Billing,
Settings). This is **frontend only** — there's no backend, no API calls, and
no authentication. All data shown (clients, pets, invoices, etc.) is mock data
hard-coded into the components.

This project is intentionally separate from the `pupperdesk` marketing site —
drop it into its own repo/deploy target.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # run the production build
```

## Pages

| Route            | Purpose                                             |
|-------------------|------------------------------------------------------|
| `/`               | Dashboard home — onboarding checklist, quick actions |
| `/clients`        | Client list with search                              |
| `/pets`           | Pet cards with filter tabs                           |
| `/appointments`   | Week view board with rooms & bookings                |
| `/billing`        | Invoice stats + table (empty state)                  |
| `/settings`       | Portal, payments, profile, business, schedule forms  |
| `/website`        | Placeholder (not built out — out of scope)           |

## What's interactive vs. static

Tabs, the mobile sidebar toggle, the settings toggle switch, time-slot
checkboxes, and the search inputs all use local React state so the UI feels
alive — but nothing persists or calls a server. Buttons like "Connect Stripe
Account," "Save Changes," "Create Invoice," etc. are visual only.

## Live links removed

The original HTML mockups linked to `pupperdesk.com/...` and other live URLs.
Since this is a disconnected frontend mock:

- Sidebar navigation now uses internal Next.js routes (`/clients`, `/pets`, etc.)
  instead of `https://www.pupperdesk.com/...`.
- The booking link and portal/signup URLs in the Dashboard and Settings pages
  are shown as plain text/code snippets (not clickable) with a placeholder
  domain, since there's nothing live to link to.
- The "Client Portal" sidebar item is a disabled-looking button instead of an
  external link.

## Structure

```
app/
  layout.tsx           fonts + metadata
  globals.css          Tailwind v4 tokens (blue tenant theme, matches mockups)
  page.tsx             Dashboard home
  clients/page.tsx
  pets/page.tsx
  appointments/page.tsx
  billing/page.tsx
  settings/page.tsx
  website/page.tsx      placeholder
components/
  layout/               Sidebar, Topbar, DashboardShell, AiAssistantButton
  dashboard/             OnboardingCard, QuickActionsBar
  clients/               ClientsTable
  pets/                  PetsGrid
  appointments/          AppointmentsBoard
  billing/               BillingBoard
  settings/              SettingsSections
  ui/                    Button, Card primitives
lib/
  nav.ts                 sidebar nav config
```

## Theming

Colors live in `app/globals.css` as CSS variables (`--primary`, `--background`,
etc.), following the same token pattern as the marketing site but with a blue
tenant theme to match the mockups. The sidebar's active nav item reads
`--site-primary`/`--site-secondary` first, which is where you'd wire in
per-tenant branding later.
"# Pupperdesk-Dashboard" 
