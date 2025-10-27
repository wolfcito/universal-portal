"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Coins,
  Flame,
  NotebookPen,
  Rocket,
  ThumbsUp,
  Trophy,
} from "lucide-react";

type Quest = {
  id: string;
  title: string;
  type: "onchain" | "social" | "knowledge";
  description: string;
  reward: string;
  proof: string;
};

const quests: Quest[] = [
  {
    id: "onchain-01",
    title: "Min tx on Donut",
    type: "onchain",
    description:
      "Send 0.001 DON to our sandbox address using the universal signer. Simulate first and capture the hash.",
    reward: "+4 score · unlocks base claim",
    proof: "Tx hash on Push Chain (Donut)",
  },
  {
    id: "social-01",
    title: "Follow the Push channel",
    type: "social",
    description:
      "Follow the official Project G.U.D channel on Push and enable notifications for quest broadcasts.",
    reward: "+2 score · welcome notification",
    proof: "Push channel subscription",
  },
  {
    id: "knowledge-01",
    title: "Knowledge Check Express",
    type: "knowledge",
    description:
      "Answer 3 quick questions (What is a Merkle root? How do we validate sybil resistance? Which chain do we target?).",
    reward: "+3 score · 1.05x boost",
    proof: "Form / signed message",
  },
  {
    id: "social-02",
    title: "Farcaster Cast",
    type: "social",
    description:
      "Post a cast using #UniversalPortal and include your Donut address. Amplify social reputation.",
    reward: "+2 score · Farcaster eligibility boost",
    proof: "FID + cast URL",
  },
  {
    id: "onchain-02",
    title: "Symbolic stake",
    type: "onchain",
    description:
      "Stake 0.002 DON into the community-lock pool. Adds skin in the game and deters bots.",
    reward: "+5 score · 1.1x boost",
    proof: "Stake event on `CommunityLock` contract",
  },
];

const typeCopy: Record<Quest["type"], string> = {
  onchain: "Onchain",
  social: "Social",
  knowledge: "Knowledge",
};

export default function QuestsPage() {
  const [completed, setCompleted] = useState<string[]>(["social-01", "knowledge-01"]);

  const toggleCompletion = (questId: string) => {
    setCompleted((prev) =>
      prev.includes(questId) ? prev.filter((id) => id !== questId) : [...prev, questId]
    );
  };

  const completionRate = Math.round((completed.length / quests.length) * 100);

  return (
    <main className="bg-background">
      <section className="border-b bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Rocket className="h-4 w-4" />
              Quests · Human activation
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Short missions that turn curiosity into loyalty.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Mix onchain, social, and learning actions to educate wallets and increase intent. Progress updates in real time and unlocks claiming the moment requirements are hit.
            </p>
            <div className="flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm">
              <BadgeCheck className="h-10 w-10 rounded-full bg-muted p-2 text-primary" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">
                  MVP rule: complete 1 onchain quest + 1 social quest + the knowledge check.
                </p>
                <p className="mt-2">
                  Every quest grows the score. Selected ones unlock multipliers so customers feel rewarded for going deeper.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Progress (sandbox)
                </p>
                <p className="text-3xl font-bold text-foreground">{completionRate}%</p>
                <p className="text-xs text-muted-foreground">
                  {completed.length} / {quests.length} quests completed
                </p>
              </div>
              <Trophy className="h-12 w-12 rounded-full bg-primary/10 p-3 text-primary" />
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3">
                <span>Potential boost</span>
                <span className="font-semibold text-foreground">1.25x</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3">
                <span>Estimated time</span>
                <span className="font-semibold text-foreground">~8 minutes</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3">
                <span>Notification</span>
                <span className="font-semibold text-primary">Instant Push</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Quest board MVP</h2>
            <p className="text-sm text-muted-foreground">
              Mark quests to simulate the journey. In production we sync with indexers/oracles.
            </p>
            <div className="space-y-4">
              {quests.map((quest) => {
                const isCompleted = completed.includes(quest.id);
                return (
                  <button
                    key={quest.id}
                    type="button"
                    onClick={() => toggleCompletion(quest.id)}
                    className="group flex w-full flex-col gap-3 rounded-2xl border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold">{quest.title}</p>
                        <span className="text-xs uppercase tracking-wide text-primary/80">
                          {typeCopy[quest.type]}
                        </span>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                          isCompleted
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? "Completed" : "Pending"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{quest.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-primary">
                        <Flame className="h-3.5 w-3.5" />
                        {quest.reward}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                        <NotebookPen className="h-3.5 w-3.5" />
                        Proof: {quest.proof}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <aside className="flex flex-col gap-4 rounded-3xl border bg-card p-6 shadow-lg">
            <div className="flex items-center gap-3 rounded-2xl bg-primary/10 p-4 text-primary">
              <Coins className="h-10 w-10" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">
                  Multipliers
                </p>
                <p className="text-xs text-primary/80">
                  Combine quests and Anti-Sybil to unlock richer rewards without diluting your budget.
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Base boost:</span>{" "}
                1.0x. Climbs to 1.1x when users finish one quest of each type.
              </p>
              <p>
                <span className="font-semibold text-foreground">Maximum boost:</span>{" "}
                1.3x with BrightID + Farcaster verification + symbolic stake.
              </p>
              <p>
                Push notifies each achievement so your community team can celebrate or assist in seconds.
              </p>
            </div>
            <div className="rounded-2xl border border-dashed bg-muted/40 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Measurement
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Quest completion rate.</li>
                <li>Average completion time by quest type.</li>
                <li>Notification CTR (opened vs. delivered).</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-primary/10 p-4 text-sm text-primary">
              <ThumbsUp className="mb-2 h-6 w-6" />
              <p>
                UX tip: keep calls-to-action short and mobile-first so users can pause, resume, and still feel momentum toward the claim.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
