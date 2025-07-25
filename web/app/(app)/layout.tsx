import Navbar from "@/lib/modules/layout/navbar";
import { body } from "@/utils/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suitmedia",
  description: "Projek Pendaftaran Magang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
