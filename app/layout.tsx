import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Inventory Leak Detector — Catch Oversells Before They Happen",
  description: "Real-time Shopify inventory monitoring that detects potential oversell scenarios before they cost you customers and refunds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8e68cc6b-0838-423a-a710-9922d57a635c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
