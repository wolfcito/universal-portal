"use client";

import { useState } from "react";
import {
  Bolt,
  BotOff,
  CheckCircle2,
  FileBarChart,
  FileSpreadsheet,
  GlobeLock,
  Layers,
  Loader,
  Upload,
  Workflow,
} from "lucide-react";

type Step = "upload" | "validate" | "preview" | "publish";

const mockBatches = [
  {
    id: "batch-001",
    createdAt: "2025-02-08",
    recipients: 128,
    type: "Merkle Root",
    status: "Published",
  },
  {
    id: "batch-002",
    createdAt: "2025-02-09",
    recipients: 42,
    type: "Direct spray",
    status: "Simulated",
  },
  {
    id: "batch-003",
    createdAt: "2025-02-10",
    recipients: 12,
    type: "Merkle Root",
    status: "Pending",
  },
];

export default function AdminPage() {
  const [step, setStep] = useState<Step>("upload");

  const nextStep = () => {
    setStep((current) => {
      if (current === "upload") return "validate";
      if (current === "validate") return "preview";
      if (current === "preview") return "publish";
      return "publish";
    });
  };

  return (
    <main className="bg-background">
      <section className="border-b bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Workflow className="h-4 w-4" />
              Admin · Spray & Merkle
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Operations board: import, validate, and publish distributions.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Designed for small teams. Every step is auditable, with pre-flight simulations and optional anti-Sybil controls.
              This view shows demo-ready mock data.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1">
                <FileSpreadsheet className="h-3.5 w-3.5" />
                CSV / JSON
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1">
                <Layers className="h-3.5 w-3.5" />
                Merkle Builder
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1">
                <GlobeLock className="h-3.5 w-3.5" />
                Anti-Sybil gates
              </span>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Guided flow
            </p>
            <div className="mt-6 space-y-4">
              {[
                { key: "upload", label: "1. Upload dataset", description: "CSV/JSON with address,amount,score" },
                { key: "validate", label: "2. Validate duplicates & stamps", description: "Checksum checks, threshold application" },
                { key: "preview", label: "3. Simulate gas and amounts", description: "Preview direct spray or Merkle claim" },
                { key: "publish", label: "4. Publish root / execute spray", description: "Universal signature + notification" },
              ].map(({ key, label, description }) => {
                const isActive = step === key;
                const isDone =
                  (step === "validate" && key === "upload") ||
                  (step === "preview" && ["upload", "validate"].includes(key)) ||
                  (step === "publish" &&
                    ["upload", "validate", "preview"].includes(key));
                return (
                  <div
                    key={key}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-sm transition-colors ${
                      isActive
                        ? "border-primary bg-primary/10 text-primary"
                        : "bg-card text-muted-foreground"
                    }`}
                  >
                    <div className="mt-0.5">
                      {isDone ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : isActive ? (
                        <Loader className="h-5 w-5 animate-spin text-primary" />
                      ) : (
                        <Layers className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{label}</p>
                      <p className="text-xs">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Advance step (demo)
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Batch history</h2>
            <p className="text-sm text-muted-foreground">
              Clear logs for the Deploython demo. Every batch shows who uploaded it, when, and its current status.
            </p>
            <div className="overflow-hidden rounded-2xl border shadow-sm">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">ID</th>
                    <th className="px-4 py-3 text-left font-semibold">Date</th>
                    <th className="px-4 py-3 text-left font-semibold">Recipients</th>
                    <th className="px-4 py-3 text-left font-semibold">Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {mockBatches.map((batch) => (
                    <tr key={batch.id} className="bg-card/80">
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{batch.id}</td>
                      <td className="px-4 py-3 text-muted-foreground">{batch.createdAt}</td>
                      <td className="px-4 py-3">{batch.recipients}</td>
                      <td className="px-4 py-3">{batch.type}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            batch.status === "Published"
                              ? "bg-primary/10 text-primary"
                              : batch.status === "Simulated"
                                ? "bg-muted text-muted-foreground"
                                : "bg-amber-100 text-amber-600"
                          }`}
                        >
                          {batch.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <aside className="flex flex-col gap-4 rounded-3xl border bg-card p-6 shadow-lg">
            <div className="flex items-center gap-3 rounded-2xl bg-primary/10 p-4 text-primary">
              <FileBarChart className="h-10 w-10" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">
                  Instant metrics
                </p>
                <p className="text-xs text-primary/80">Estimated gas, rejection rates, duplicates detected.</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Duplicates:</span>{" "}
                3 detected (auto-removed with downloadable logs).
              </p>
              <p>
                <span className="font-semibold text-foreground">Blocked wallets:</span>{" "}
                2 for score &lt; 12. Suggest sending them tutorial quests.
              </p>
              <p>
                <span className="font-semibold text-foreground">Direct spray:</span>{" "}
                45 addresses queued, configurable batch limit (100).
              </p>
            </div>
            <div className="rounded-2xl border border-dashed bg-muted/40 p-4 text-xs text-muted-foreground">
              <p className="font-semibold uppercase tracking-wide">Upcoming integrations</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Upload className="mr-2 inline h-4 w-4" />
                  Google Sheets / Airtable integration.
                </li>
                <li>
                  <Bolt className="mr-2 inline h-4 w-4" />
                  Automate simulations via Tenderly / Push RPC sandbox.
                </li>
                <li>
                  <BotOff className="mr-2 inline h-4 w-4" />
                  Alerts when Sybil patterns are detected in a batch.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
