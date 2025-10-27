import Link from "next/link";
import {
  ArrowRight,
  BellDot,
  CircleDot,
  Clock,
  Globe,
  Network,
  ShieldCheck,
  Sparkle,
  Sprout,
  SquareStack,
  Workflow,
} from "lucide-react";

const pillars = [
  {
    title: "Universal Spray Engine",
    subtitle: "Reward any audience in minutes.",
    description:
      "Upload lists from any chain and settle on Push Chain with universal signatures, live simulations, and receipts that keep teams aligned.",
    icon: SquareStack,
    href: "/spray",
  },
  {
    title: "Layered Anti-Sybil Intelligence",
    subtitle: "Protect incentives without killing growth.",
    description:
      "Blend Passport, BrightID, Farcaster, and Human Passport signals with adjustable thresholds so legit users sail through while bots drop off.",
    icon: ShieldCheck,
    href: "/eligibility",
  },
  {
    title: "Activation Quest Studio",
    subtitle: "Convert curious visitors into power users.",
    description:
      "Craft onchain, social, and learning quests that teach the story, warm wallets, and unlock boosted rewards before the claim moment.",
    icon: Workflow,
    href: "/quests",
  },
];
const infra = [
  {
    title: "Donut Testnet - Quick Start",
    items: [
      { label: "Chain ID", value: "42101" },
      { label: "Explorer", value: "https://donut.push.network" },
      { label: "Faucet", value: "https://faucet.push.org" },
      { label: "Network", value: "Push Chain Donut" },
    ],
  },
  {
    title: "Universal SDK - Hooks we use",
    items: [
      { label: "Signer", value: "`universalSigner`" },
      { label: "TX helper", value: "`pushChainClient.universal.sendTransaction`" },
      { label: "Notifications", value: "Push Chat + Notifications" },
      { label: "UI Kit", value: "@pushchain/ui-kit" },
    ],
  },
];

const flow = [
  {
    title: "1) Import and segment audiences",
    detail:
      "Drag in CSV/JSON from any chain, auto-dedupe wallets, and size allocations before choosing spray or Merkle delivery.",
  },
  {
    title: "2) Activate layered identity checks",
    detail:
      "Toggle the right stamp providers, balance friction vs conversion, and show users exactly how to qualify in plain English.",
  },
  {
    title: "3) Drive action with quests",
    detail:
      "Launch micro-quests that teach the product story, trigger aha moments, and stack multipliers so rewards feel earned.",
  },
  {
    title: "4) Settle claims universally",
    detail:
      "Let users connect from their home chain, finalize on Push Chain with simulations and proofs, and close the loop with instant receipts.",
  },
];

const metrics = [
  {
    title: "Qualified wallets",
    value: "82%",
    description: "Wallets that clear Sybil checks without manual review.",
  },
  {
    title: "Speed to reward",
    value: "3m 40s",
    description: "Average journey from landing page to confirmed claim.",
  },
  {
    title: "Gas per claim",
    value: "~45k gas",
    description: "Merkle execution on Donut compared with direct spray.",
  },
];

export default function LandingPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-20">
          <div className="flex flex-1 flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Sparkle className="h-4 w-4" />
              Growth Engine · Push Chain Donut
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Launch high-converting reward campaigns on Push Chain.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Universal Portal packages cross-chain distribution, layered Sybil defense, and gamified quests into one commercial-ready experience. Sell the narrative, ship the campaign, and measure the ROI from day one.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/spray"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Open Spray Console
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Demo Script
                <Clock className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="rounded-2xl border bg-card p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    {metric.title}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-3xl border bg-card p-6 shadow-xl">
            <div className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4">
              <Network className="h-10 w-10 rounded-full border bg-background p-2 text-primary" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Universal TX Flow
                </p>
                <p className="text-sm text-foreground">
                  Connect from Ethereum or any supported L2, finalize on Push Chain Donut with the universal signer, and keep the story consistent on every screen.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border bg-background p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-9 w-9 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Eligibility Snapshot</p>
                  <p className="text-xs text-muted-foreground">
                    Passport ≥ 15 or BrightID + Farcaster = 1.2x boost. Communicate the rules before users spend gas.
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-3 text-xs text-muted-foreground">
                <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                  <span>Stamp score</span>
                  <span className="font-semibold text-foreground">18 / 25</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                  <span>Quest progress</span>
                  <span className="font-semibold text-foreground">2 / 3</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                  <span>Claim stage</span>
                  <span className="font-semibold text-primary">Ready</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-dashed bg-background/80 p-4">
              <BellDot className="h-8 w-8 text-primary" />
              <div className="space-y-1">
                <p className="text-sm font-semibold">Push Notifications</p>
                <p className="text-xs text-muted-foreground">
                  Eligibility approved, quest completed, claim confirmed. Fully branded alerts close the loop with your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col gap-3 rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon className="h-9 w-9 rounded-full bg-primary/10 p-2 text-primary transition-transform group-hover:scale-110" />
                <div>
                  <h3 className="text-lg font-semibold">{pillar.title}</h3>
                  <p className="text-sm text-primary/80">{pillar.subtitle}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  View screen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y bg-muted/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:py-20 lg:flex-row">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Globe className="h-3.5 w-3.5" />
              Cross-chain → Push Chain
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Commercial campaigns powered by Project G.U.D infrastructure
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Replace ad-hoc scripts with a branded experience that is easy to sell. Every building block below is documented, measurable, and mirrored in deployment scripts so you can move from demo to production without rewriting the story.
            </p>
            <div className="mt-6 grid gap-4">
              {flow.map((stage) => (
                <div
                  key={stage.title}
                  className="rounded-2xl border bg-card/80 p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-primary">
                    {stage.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            {infra.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border bg-card p-5 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase text-muted-foreground">
                  {block.title}
                </p>
                <div className="mt-4 space-y-3">
                  {block.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-2 text-xs sm:text-sm"
                    >
                      <span className="font-medium text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="font-semibold text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <CircleDot className="h-3.5 w-3.5" />
              Why teams choose Universal Portal
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Turn every demo into a commercial win.
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Lead with value in under three minutes: showcase cross-chain distribution, human-resistant scoring, and activation quests that actually convert. The supporting views (admin, eligibility, metrics) reinforce the story for buyers and partners.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span className="rounded-full border border-dashed px-3 py-1">
                Conversion-first UX
              </span>
              <span className="rounded-full border border-dashed px-3 py-1">
                Push notifications
              </span>
              <span className="rounded-full border border-dashed px-3 py-1">
                Cross-chain ready
              </span>
              <span className="rounded-full border border-dashed px-3 py-1">
                Secure airdrop
              </span>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <div className="flex items-center gap-3 rounded-2xl bg-primary/10 p-4 text-primary">
              <Sprout className="h-8 w-8" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">
                  Condensed roadmap
                </p>
                <p className="text-xs text-primary/90">
                  One-week MVP, market-ready for pilots and partner showcases.
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  Days 1-2:
                </span>{" "}
                Stand up branded imports, simulations, and universal signer UI.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Days 3-4:
                </span>{" "}
                Launch layered Anti-Sybil scoring, first quests, and sales-ready copy.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Days 5-7:
                </span>{" "}
                Wire up automated notifications, dashboards, and a demo script that closes deals.
              </p>
            </div>
            <Link
              href="/admin"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Open Admin Board
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
