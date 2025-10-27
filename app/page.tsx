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
    title: "Universal Spray / Airdrop",
    subtitle: "Send from any chain into Push Chain (Donut).",
    description:
      "Native and ERC-20 batch flows powered by the universal signer. Includes pre-flight simulation, throttling limits, and live notifications.",
    icon: SquareStack,
    href: "/spray",
  },
  {
    title: "Anti-Sybil Scoring",
    subtitle: "Layered defense without sacrificing UX.",
    description:
      "Supports Gitcoin Passport, BrightID, Farcaster, and Human Passport with dynamic thresholds for eligibility and boosts.",
    icon: ShieldCheck,
    href: "/eligibility",
  },
  {
    title: "Activation Quests",
    subtitle: "Onchain, social, and learning missions.",
    description:
      "Layer3-style micro quests that warm up users before claiming and lift their score.",
    icon: Workflow,
    href: "/quests",
  },
];

const infra = [
  {
    title: "Donut Testnet Essentials",
    items: [
      { label: "RPC HTTP", value: "https://rpc.pushchain.tech" },
      { label: "RPC WSS", value: "wss://rpc.pushchain.tech/ws" },
      { label: "Chain ID", value: "12227331" },
      { label: "Explorer", value: "https://explorer.pushchain.tech" },
      { label: "Faucet", value: "https://faucet.push.org" },
      { label: "Network name", value: "Push Chain Donut" },
    ],
  },
  {
    title: "Universal SDK Hooks",
    items: [
      { label: "Signer", value: "`universalSigner`" },
      { label: "Tx helper", value: "`pushChainClient.universal.sendTransaction`" },
      { label: "Notif core", value: "Push Chat + Notifications" },
      { label: "UI Kit", value: "@pushchain/ui-kit" },
    ],
  },
];

const flow = [
  {
    title: "1. Import audiences",
    detail:
      "Upload CSV/JSON files, dedupe recipients, and calculate allocations. Choose between quick sprays or Merkle trees ready for onchain publishing.",
  },
  {
    title: "2. Strengthen identity",
    detail:
      "Request stamps, balance friction versus privacy, and preview the score with optional boosters.",
  },
  {
    title: "3. Activate with quests",
    detail:
      "Short missions (micro transaction, social proof, knowledge check) that unlock eligibility gates or reward multipliers.",
  },
  {
    title: "4. Universal claim",
    detail:
      "Any chain → Push Chain. Secure claim with Merkle proof, simulation preview, and Push-powered receipt.",
  },
];

const metrics = [
  {
    title: "Anti-Sybil Effectiveness",
    value: "82%",
    description: "% of wallets with ≥1 stamp reaching the threshold.",
  },
  {
    title: "Time to Claim",
    value: "3m 40s",
    description: "Onboarding to successful claim in the sandbox flow.",
  },
  {
    title: "Average Gas Cost",
    value: "~45k gas",
    description: "Merkle claim on Donut versus direct spray (testnet).",
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
              Universal App · Push Chain Donut
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Universal Portal: Spray/Airdrop + Anti-Sybil + Quests
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Deploython-ready demo built to highlight cross-chain writes into Push Chain, efficient distribution tooling, layered anti-Sybil scoring, and activation quests that are easy to follow during a live presentation.
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
                  Connect on Ethereum, execute the claim on Push Chain Donut via `pushChainClient.universal.sendTransaction`.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border bg-background p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-9 w-9 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Eligibility Snapshot</p>
                  <p className="text-xs text-muted-foreground">
                    Passport ≥ 15 or BrightID + Farcaster = 1.2x boost
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
                  Eligibility approved, quest completed, claim confirmed.
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
              Alignment with Project G.U.D and Donut infrastructure
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              We emphasize visible UX, composability, and measurement. The
              building blocks below are documented in the README and mirrored in deployment scripts.
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
              Deploython Focus
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              What do judges evaluate? Visible functionality and clear design.
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              The demo tells the full story in under three minutes. We reinforce the highlights with an admin board, an eligibility checker, and actionable metrics.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span className="rounded-full border border-dashed px-3 py-1">
                Focused UX
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
                  One-week MVP, ready to iterate toward mainnet.
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  Days 1-2:
                </span>{" "}
                Imports, simulations, universal signer UI.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Days 3-4:
                </span>{" "}
                Anti-Sybil scoring, initial quests, polished copy.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Days 5-7:
                </span>{" "}
                Notifications, metrics, demo script, visual polish.
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
