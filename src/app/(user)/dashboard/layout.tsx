"use client";
import Navbar from "@/components/ui/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section>
        <Navbar />
        {children}
      </section>
  );
}
