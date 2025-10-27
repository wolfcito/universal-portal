import {
  Activity,
  BellRing,
  Gauge,
  LineChart,
  ShieldCheck,
  Timer,
  TrendingUp,
  Trophy,
} from "lucide-react";

const kpis = [
  {
    title: "Anti-Sybil effectiveness",
    value: "82%",
    description: "% of wallets approved with ≥ 1 stamp.",
    icon: ShieldCheck,
  },
  {
    title: "Quest completion rate",
    value: "64%",
    description: "Users who completed the 3 core quests.",
    icon: Trophy,
  },
  {
    title: "Time to first claim",
    value: "3m 40s",
    description: "Onboarding → confirmed tx.",
    icon: Timer,
  },
  {
    title: "Notification CTR",
    value: "71%",
    description: "Push open rate vs. delivered.",
    icon: BellRing,
  },
];

const comparisons = [
  {
    label: "Merkle claim",
    gas: 45000,
    color: "bg-primary",
  },
  {
    label: "Direct spray",
    gas: 78000,
    color: "bg-primary/60",
  },
];

const rejectionReasons = [
  { label: "Insufficient score", value: 46 },
  { label: "Missing onchain quest", value: 28 },
  { label: "Cooldown active", value: 14 },
  { label: "Invalid proof", value: 12 },
];

export default function MetricsPage() {
  return (
    <main className="bg-background">
      <section className="border-b bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Activity className="h-4 w-4" />
              Metrics · Growth narrative
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Commercial metrics that keep decision-makers leaning in.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Answer the fast questions stakeholders ask: is scoring working, do quests move the needle, how efficient are we, are notifications delivering value? Perfect for demos, board decks, and follow-up emails.
            </p>
            <div className="rounded-2xl border bg-card p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                MVP targets
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Anti-Sybil effectiveness &gt; 70% to satisfy risk teams.</li>
                <li>Quest completion rate &gt; 60% to prove activation.</li>
                <li>Time to claim &lt; 5 minutes to highlight UX wins.</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Featured KPIs
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {kpis.map((kpi) => {
                const Icon = kpi.icon;
                return (
                  <div key={kpi.title} className="flex flex-col gap-2 rounded-2xl border bg-muted/40 p-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <p className="text-sm font-semibold text-foreground">{kpi.title}</p>
                    <p className="text-2xl font-bold">{kpi.value}</p>
                    <p className="text-xs text-muted-foreground">{kpi.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border bg-card p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <LineChart className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Weekly approval rate
                </p>
                <p className="text-sm text-muted-foreground">
                  Mock trend based on sandbox data that showcases steady growth toward the 75% target.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground md:grid-cols-4">
              {["Week 1", "Week 2", "Week 3", "Week 4"].map((label, index) => {
                const value = [68, 74, 81, 84][index];
                return (
                  <div key={label} className="rounded-2xl border bg-muted/60 p-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wide">{label}</p>
                    <p className="mt-2 text-2xl font-bold text-foreground">{value}%</p>
                    <div className="mt-3 h-2 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Gauge className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Rejections by reason
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                {rejectionReasons.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <span className="font-semibold text-foreground">{item.value}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary/80"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Upcoming experiments
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ideas we test next to keep the story fresh post-Deploython.
                  </p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Segment boosters by tenure on Push Chain to reward loyalists.</li>
                <li>Use targeted notifications with score personalization.</li>
                <li>A/B test quest copy to increase completion rate.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Estimated costs</h2>
            <p className="text-sm text-muted-foreground">
              Compare direct spray versus Merkle claim to show finance teams how we protect budget while scaling reach.
            </p>
            <div className="space-y-3">
              {comparisons.map((item) => (
                <div key={item.label} className="rounded-2xl border bg-card p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">Estimated gas</p>
                  <div className="mt-3 h-3 rounded-full bg-muted">
                    <div
                      className={`h-3 rounded-full ${item.color}`}
                      style={{ width: `${Math.min(item.gas / 1000, 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {item.gas.toLocaleString()} units (mock - Donut RPC)
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Stories to tell
                </p>
                <p className="text-xs text-muted-foreground">
                  Talking points for the demo and README.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">82% effectiveness</span> shows layered Anti-Sybil defenses block abuse without hurting growth.
              </p>
              <p>
                <span className="font-semibold text-foreground">64% quests completed</span> validates the Layer3-style educational approach and ties quests to revenue impact.
              </p>
              <p>
                <span className="font-semibold text-foreground">Optimized gas</span> thanks to the MerkleDistributor and pre-flight simulation, a handle CFOs will appreciate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
