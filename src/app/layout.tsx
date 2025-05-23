import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medhavi Monish",
  description: "AI Blacksmith forging intelligence from scratch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-white text-black">
        {children}
      </body>
    </html>
  );
}
