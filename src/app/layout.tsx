import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medhavi Monish",
  description: "AI Blacksmith forging intelligence from scratch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <base href="./" /> 
      </head>
      <body className="bg-soot text-pale font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

