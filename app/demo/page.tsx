import { ArrowRight, ListRestart, Play, StepForward } from "lucide-react";

const steps = [
  {
    title: "1. Connect from any chain",
    detail:
      "Open Universal Portal, connect on Ethereum Sepolia (or another L2), and spotlight the universal signer that makes cross-chain onboarding effortless.",
    highlight: "Lead with the frictionless first impression buyers care about.",
  },
  {
    title: "2. Unlock a quick quest",
    detail:
      "Show the quests screen, complete the Donut micro-transaction, and surface the Push notification that proves engagement.",
    highlight: "Sell the activation moment and why retention teams love it.",
  },
  {
    title: "3. Pass eligibility instantly",
    detail:
      "Navigate to Eligibility, display the score preview (Passport ≥ 15 + BrightID boost), and explain how humans glide through while bots stall out.",
    highlight: "Position Sybil resistance as a growth lever, not a blocker.",
  },
  {
    title: "4. Claim on Push Chain Donut",
    detail:
      "Visit the claim view, recap the reward, run verification, and execute `pushChainClient.universal.sendTransaction` with confidence.",
    highlight: "Anchor the narrative on trust, transparency, and speedy settlement.",
  },
  {
    title: "5. Close with instant proof",
    detail:
      "Trigger the Push notification with tx hash, reward amount, and applied boost. Offer the support chat as white-glove follow-up.",
    highlight: "Reinforce Push's promise: every key event is confirmed in real time.",
  },
];

export default function DemoPage() {
  return (
    <main className="bg-background">
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <Play className="h-4 w-4" />
            Demo Script · 2-3 min
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            Storyboard for winning demos
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Give investors, partners, and judges the polished walkthrough they expect. Each step blends the commercial storyline with the technical proof points that back it up.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <ol className="space-y-6">
          {steps.map((step) => (
            <li key={step.title} className="rounded-3xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <StepForward className="mt-1 h-6 w-6 text-primary" />
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold">{step.title}</h2>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <ArrowRight className="h-3.5 w-3.5" />
                    {step.highlight}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-3xl border border-dashed bg-muted/40 p-6 text-center text-sm text-muted-foreground">
          <ListRestart className="mx-auto mb-3 h-6 w-6 text-primary" />
          <p className="font-semibold text-foreground">
            Presentation tip
          </p>
          <p className="mt-2">
            Keep the energy high: preload Spray, Eligibility, Quests, and Claim, then end on the notifications modal so decision-makers walk away seeing the full lifecycle.
          </p>
        </div>
      </section>
    </main>
  );
}
