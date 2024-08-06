import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    template: '%s | AWStock',
    default: 'AWStock - Inventory Management',
  },
  description: 'Efficient inventory management solution for your business',
  icons: {
    icon: '../assets/favicons/awstocklogo.ico?v=1',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>
          {children}
        </DashboardWrapper></body>
    </html>
  );
}
