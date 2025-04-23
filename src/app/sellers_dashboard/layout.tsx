import type { Metadata } from "next";
import { lexend } from "../../../styles/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sahaay - Seller Dashboard",
  description: "Manage your services, bookings, and client interactions.",
};

export default function SellerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-h-screen font-sans antialiased bg-gray-50",
        lexend.className
      )}
    >
      {children}
    </div>
  );
}
