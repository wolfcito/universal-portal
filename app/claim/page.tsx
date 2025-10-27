"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Copy,
  HandCoins,
  Loader2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type ClaimStatus = "idle" | "checking" | "eligible" | "rejected";

const mockResult = {
  score: 23.7,
  boost: 1.2,
  reason: "Passport ≥ 15 + BrightID verified + symbolic stake quest",
};

export default function ClaimPage() {
  const [status, setStatus] = useState<ClaimStatus>("idle");

  const handleCheck = () => {
    setStatus("checking");
    setTimeout(() => {
      setStatus("eligible");
    }, 1200);
  };

  return (
    <main className="bg-background">
      <section className="border-b bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <HandCoins className="h-4 w-4" />
              Claim · Universal write
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Deliver rewards with clarity and confidence.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Let users verify their score, surface Merkle proofs, and execute the universal transaction without second guessing. The flow prioritizes transparency so support tickets stay low and satisfaction stays high.
            </p>
            <div className="rounded-2xl border bg-card p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Quick steps
              </p>
              <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Connect your wallet from any compatible L1/L2. No context switching required.
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Run verification to surface score + status before any gas is spent.
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  If eligible, sign and send the universal tx toward Donut with full proof transparency.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <div className="space-y-4 text-sm">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Wallet address
                </span>
                <input
                  type="text"
                  placeholder="0xabc...123"
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Merkle proof / Quest evidence
                </span>
                <textarea
                  placeholder="0x123,0x456,..."
                  rows={3}
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </label>
              <button
                type="button"
                onClick={handleCheck}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {status === "checking" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    Check eligibility
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 rounded-2xl border bg-muted/40 p-4 text-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-9 w-9 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Result
                  </p>
                  <p className="text-sm text-foreground">
                    {status === "eligible"
                      ? "Eligible with an active boost."
                      : status === "rejected"
                        ? "Review pending stamps."
                        : "Complete the check to see your status."}
                  </p>
                </div>
              </div>
              {status === "eligible" && (
                <div className="mt-4 space-y-2 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-primary">
                  <p>
                    Total score: <span className="font-semibold text-foreground">{mockResult.score}</span>
                  </p>
                  <p>
                    Applied boost: <span className="font-semibold text-foreground">{mockResult.boost}x</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {mockResult.reason}
                  </p>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    Execute universal claim
                    <Sparkles className="h-4 w-4" />
                  </button>
                </div>
              )}
              {status === "idle" && (
                <p className="mt-4 text-xs text-muted-foreground">
                  Tip: previewing eligibility before signing builds trust, saves gas, and keeps support queues clear.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Trust checklist</h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-sm">
                <ClipboardList className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Pre-flight simulation</p>
                  <p>Simulate every transaction with `pushChainClient.universal.sendTransaction` so finance teams see costs and risks upfront.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-sm">
                <Copy className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Transparent proofs</p>
                  <p>Let users download Merkle proofs or quest evidence for auditability and compliance conversations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-sm">
                <Sparkles className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Instant notification</p>
                  <p>Push fires receipts with hash, amount, and applied boost, and guides retries automatically if something fails.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Conversion metrics to spotlight</h2>
            <div className="rounded-3xl border bg-card p-6 shadow-lg">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Conversion funnel:</span>{" "}
                  Checker entries → confirmed claims, ready for investor or partner updates.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Errors:</span>{" "}
                  Most common reasons (invalid proof, insufficient score, cooldown active) so teams can triage fast.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Timing:</span>{" "}
                  From "Check" to confirmed hash, giving a tangible proof of customer effort saved.
                </p>
              </div>
              <div className="mt-5 rounded-2xl border border-dashed bg-muted/50 p-4 text-xs text-muted-foreground">
                <p className="font-semibold uppercase tracking-wide">Next steps</p>
                <ul className="mt-2 space-y-2">
                  <li>Integrate the production MerkleDistributor for mainnet launches.</li>
                  <li>Ship a backend scoring endpoint (cache + rate limit) for enterprise SLAs.</li>
                  <li>Automate notifications with Push templates for consistent brand voice.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
