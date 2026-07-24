import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MedConnect Global | Your Cure, Our Care",
  description: "India's leading international and NRI patients services company. Your trusted healthcare guide to India and UAE.",
  openGraph: {
    title: "MedConnect Global | Your Cure, Our Care",
    description: "India's leading international and NRI patients services company. Your trusted healthcare guide to India and UAE.",
    type: "website",
  },
};

import { FloatingActions } from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable} style={{ margin: 0, padding: 0, fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
