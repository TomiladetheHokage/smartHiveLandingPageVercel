import { Metadata } from "next";
import React from "react";
import  "./globals.css"

export const metadata: Metadata = {
  title: "Smarthive | SMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
