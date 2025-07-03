import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PNG to WEBP Converter",
  description: "A next js app to convert png images to webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
