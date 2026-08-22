import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krish Online Shopping | Best Electric & Home Appliances Sri Lanka",
  description: "Krish Online Shopping - Official store in Delkanda, Nugegoda, Sri Lanka. TV, Washing Machines, Fridges, Air Fryers, Water Heaters, Mixers & Electronics with 24/7 WhatsApp Ordering & Island-wide Delivery.",
  keywords: ["Krish Online Shopping", "Sri Lanka Electric Shop", "Nugegoda Electronics", "Delkanda Appliance Store", "LG Sri Lanka", "Abans Sri Lanka", "Samsung TV Sri Lanka", "WhatsApp Order Electric"],
  openGraph: {
    title: "Krish Online Shopping - Premium Electric Appliances",
    description: "ලංකාවේ අඩුම මිලට QUALITY บඩු, ගෙදරටම ගෙන්වා ගන්න. 24/7 WhatsApp Order: 070 422 0000",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#05091e] text-slate-100 antialiased flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
