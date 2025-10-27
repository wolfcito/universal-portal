import { Info, ShieldHalf, Siren, Sparkles, UserCheck } from "lucide-react";

const stampMatrix = [
  {
    provider: "Gitcoin Passport",
    weight: 8,
    checks: ["CEX KYC", "Social graph", "Proof of Humanity"],
    status: "Pre-integrated (score API)",
    action: "Connect Passport → fetch stamps → calculate score ≥ 15",
  },
  {
    provider: "BrightID",
    weight: 6,
    checks: ["Web-of-trust", "Context guardian"],
    status: "Badge validated",
    action: "Scan BrightID QR → register hash → apply 1.15x boost",
  },
  {
    provider: "Farcaster",
    weight: 4,
    checks: ["Unique username", "Onchain verification"],
    status: "Onchain PoC ready",
    action: "Read `fid`, verify onchain → eligible + push notification",
  },
  {
    provider: "Human Passport",
    weight: 4,
    checks: ["Modular PoI", "Privacy preserved"],
    status: "Opt-in",
    action: "Validate zero-knowledge credential → boost 1.05x",
  },
];

const protections = [
  {
    title: "Dynamic threshold",
    description:
      "Base eligibility: Passport ≥ 15 or BrightID. Max boost by combining Farcaster + Human Passport.",
  },
  {
    title: "Rate limits & heuristics",
    description:
      "Cooldown per IP/device, alerts if multiple claims from the same `universalSigner`, heuristic balance/age checks.",
  },
  {
    title: "Low-friction appeals",
    description:
      "Short form with optional upload → Push Chat ticket for lightweight manual review.",
  },
  {
    title: "Privacy by design",
    description:
      "Select stamps that avoid biometrics. Use hashed data and signed off-chain verifications to minimize exposure.",
  },
];

export default function EligibilityPage() {
  return (
    <main className="bg-background">
      <section className="border-b bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <ShieldHalf className="h-4 w-4" />
              Anti-Sybil · Commercial-grade defenses
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Stop bots without slowing paying users.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Combine verifiable stamps, smart heuristics, and friendly copy so customers see exactly how to qualify. Every control is adjustable, every rule is explained, and the UX keeps momentum high.
            </p>
            <div className="flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-sm">
              <Info className="h-10 w-10 rounded-full bg-muted p-2 text-primary" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Clear paths to eligibility; choose at least one route:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Gitcoin Passport score <span className="font-semibold">≥ 15</span>
                  </li>
                  <li>
                    BrightID verified + onchain quest completed
                  </li>
                  <li>
                    Farcaster verified + Human Passport (optional boost)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Score estimator (sandbox)
            </p>
            <div className="mt-6 space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-muted-foreground">Passport score</span>
                  <span className="font-semibold text-foreground">18 / 25</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted">
                  <div className="h-2 w-[72%] rounded-full bg-primary" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-muted-foreground">BrightID boost</span>
                  <span className="font-semibold text-foreground">+15%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted">
                  <div className="h-2 w-[100%] rounded-full bg-primary/80" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-muted-foreground">Farcaster verified</span>
                  <span className="font-semibold text-foreground">ON</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted">
                  <div className="h-2 w-[65%] rounded-full bg-primary/60" />
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-primary/10 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Result (mock)
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Score total <strong className="text-foreground">23.7</strong>
                </span>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Eligible + Boost 1.2x
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              This estimator lives inside the claim flow so nobody spends gas without knowing if they qualify.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              High-trust signals we launch with
            </h2>
            <p className="text-sm text-muted-foreground">
              Each stamp adds weighted points with documentation ready for due diligence. Show prospects the path today and layer in new credentials tomorrow.
            </p>
            <div className="space-y-4">
              {stampMatrix.map((stamp) => (
                <div key={stamp.provider} className="rounded-2xl border bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold">{stamp.provider}</p>
                      <p className="text-xs uppercase tracking-wide text-primary/80">
                        Weight {stamp.weight}
                      </p>
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {stamp.status}
                    </span>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {stamp.checks.map((check) => (
                      <li key={check} className="rounded-full border border-dashed px-3 py-1">
                        {check}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-foreground">{stamp.action}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Siren className="h-10 w-10 rounded-full bg-destructive/10 p-2 text-destructive" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Known risks
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We watch for stamp-farming rings and edge cases so your support team stays ahead of issues.
                  </p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Additional signals: prior Push Chain activity, minimum balance.</li>
                <li>Soft cooldown: 1 claim per 12h per IP/device. Logged in a lightweight backend.</li>
                <li>Appeals via Push Chat with a sub-24h response SLA.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Sparkles className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Next integrations
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Modular design lets us add new credentials without touching the claim core.
                  </p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Passport v3 score endpoint + caching.</li>
                <li>BrightID context-checker (GraphQL) to inspect suspicious links.</li>
                <li>EAS attestations issued by Project G.U.D partners.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <UserCheck className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    How we measure
                  </p>
              <p className="text-sm text-muted-foreground">
                    Share these KPIs in board decks, with metrics synced to the dashboard and the README so everyone sees the same truth.
              </p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>% of rejections due to missing stamps.</li>
                <li>% of users with verified BrightID.</li>
                <li>Global median score + 90th percentile.</li>
                <li>Average time from eligibility → claim.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
