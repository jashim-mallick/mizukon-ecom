"use client";

import Header from "@/components/Header/Header";
import { SessionNavBar } from "@/components/ui/sidebar";
import { useState } from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <div className="flex h-screen">
      <SessionNavBar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {!isSidebarCollapsed && (
        <div
          className="fixed inset-0 z-30 bg-black/40 sm:hidden"
          onClick={() => setIsSidebarCollapsed(true)}
          aria-hidden="true"
        />
      )}

      <div className="flex flex-1 flex-col overflow-auto">
        <Header
          onMenuClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <main className="mx-auto max-w-7xl flex-1 px-6 py-3">{children}</main>
      </div>
    </div>
  );
}
