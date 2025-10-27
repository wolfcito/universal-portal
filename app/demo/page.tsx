import { ArrowRight, ListRestart, Play, StepForward } from "lucide-react";

const steps = [
  {
    title: "1. Connect wallet on chain A",
    detail:
      "Open Universal Portal, connect the wallet (e.g., Ethereum Sepolia) via the universal signer, and show the debug info.",
    highlight: "Highlight the universal signer working cross-chain.",
  },
  {
    title: "2. Complete a quick quest",
    detail:
      "Open the quests screen, mark the onchain mission (min tx on Donut), and show the Push notification.",
    highlight: "Emphasize the educational experience and mobile-friendly CTA.",
  },
  {
    title: "3. Pass eligibility",
    detail:
      "Navigate to the Eligibility view. Showcase the estimated score (Passport ≥ 15 + BrightID) and the 1.2x boost.",
    highlight: "Explain defense in depth and lightweight appeals.",
  },
  {
    title: "4. Claim on Push Chain (Donut)",
    detail:
      "On the claim screen, review the form, preview amounts, run the verification, and click Execute universal claim.",
    highlight: "Mention `pushChainClient.universal.sendTransaction` and the Merkle proof.",
  },
  {
    title: "5. Instant notification",
    detail:
      "Trigger the Push notification with hash, amount, and boost applied. Optionally open the support chat.",
    highlight: "Reinforce Push's core value (alerts + chat).",
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
            Deploython storyboard
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Clear narrative for judges and community. Illustrates the universal flow (chain A → Push Chain),
            how we fight Sybils, and the quests UX. Every step includes a highlight and technical callout.
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
            Keep the demo fluid: preload Spray, Eligibility, Quests, and Claim tabs before starting.
            Close with the Push notifications modal for a strong finish.
          </p>
        </div>
      </section>
    </main>
  );
}
