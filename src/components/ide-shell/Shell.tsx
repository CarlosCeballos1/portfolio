"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { StatusBar } from "./StatusBar";
import { CommandPalette } from "./CommandPalette";

export function Shell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile sidebar on navigation. Derived during render (not an
  // effect) per the "adjusting state when a prop changes" pattern, since an
  // effect here would cause an extra render pass on every route change.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setSidebarOpen(false);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((v) => !v);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="flex h-dvh flex-col">
      <TopBar onToggleSidebar={() => setSidebarOpen((v) => !v)} onOpenPalette={() => setPaletteOpen(true)} />
      <div className="flex min-h-0 flex-1">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
      </div>
      <StatusBar />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </div>
  );
}
