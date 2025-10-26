import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Spray",
  description: "Spray tokens or Ether to multiple addresses in one transaction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen bg-background text-foreground"
      >
        <Providers>
          <ThemeProvider>
            <ThemeToggle />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
