'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { initAnimations } from "./scripts";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
