import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Universal Portal · Spray + Anti-Sybil + Quests",
  description:
    "Universal App demo for Push Chain (Donut): native/ERC20 spray, anti-Sybil scoring, and activation quests.",
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
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <footer className="border-t bg-muted/20">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                  <p>Universal Portal · Push Chain (Donut) · Demo MVP</p>
                  <p>Built for Project G.U.D Deploython · Spray/Airdrop + Anti-Sybil + Quests</p>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
