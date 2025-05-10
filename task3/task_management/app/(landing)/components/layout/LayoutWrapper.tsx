"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Check if we're in auth or dashboard routes
  const isAuthRoute = pathname?.startsWith("/auth");
  const isDashboardRoute = pathname?.startsWith("/dashboard");

  return (
    <>
      {!isAuthRoute && !isDashboardRoute && (
        <header>
          <Navbar />
        </header>
      )}
      <main className={!isAuthRoute && !isDashboardRoute ? "pt-24" : ""}>
        {children}
      </main>
      {!isAuthRoute && !isDashboardRoute && <Footer />}
    </>
  );
} 