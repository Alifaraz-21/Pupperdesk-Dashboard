"use client";

import { useState, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import AiAssistantButton from "./AiAssistantButton";

export default function DashboardShell({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-muted">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col lg:ml-72">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-6">
          <div className="space-y-6 pb-16">{children}</div>
        </main>
      </div>
      <AiAssistantButton />
    </div>
  );
}
