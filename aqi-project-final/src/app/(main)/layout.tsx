import type { Metadata } from "next";
import { Itim as ItimFont } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const itim = ItimFont({
  subsets: ["latin", "thai"],
  weight: "400",
  variable: "--font-itim",
});

export const metadata: Metadata = {
  title: "AQI Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="sidebar-area">
            <Sidebar />
          </div>
          <div className="content-area">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
