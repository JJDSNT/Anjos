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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/Anjos/manifest.json" />
        <link rel="apple-touch-icon" href="/Anjos/icon-192x192.png" />
        <link rel="icon" href="/Anjos/favicon.ico" />
        <meta name="theme-color" content="#2b77ad" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
