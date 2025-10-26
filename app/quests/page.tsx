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
    title: "Min Tx en Donut",
    type: "onchain",
    description:
      "Envía 0.001 DON a nuestra address de sandbox usando el universal signer. Simula primero y captura el hash.",
    reward: "+4 score · abre claim básico",
    proof: "Tx hash en Push Chain (Donut)",
  },
  {
    id: "social-01",
    title: "Follow al canal Push",
    type: "social",
    description:
      "Sigue el canal oficial de Project G.U.D en Push y activa notificaciones para broadcast de misiones.",
    reward: "+2 score · notificación de bienvenida",
    proof: "Push channel subscription",
  },
  {
    id: "knowledge-01",
    title: "Knowledge Check Express",
    type: "knowledge",
    description:
      "Responde 3 preguntas rápidas (¿Qué es un Merkle root?, ¿Cómo validamos sybil?, ¿Qué chain usamos?).",
    reward: "+3 score · boost 1.05x",
    proof: "Form / signed message",
  },
  {
    id: "social-02",
    title: "Farcaster Cast",
    type: "social",
    description:
      "Publica un cast con el hashtag #UniversalPortal y pega tu address Donut. Construimos reputación social.",
    reward: "+2 score · elegibilidad Farcaster",
    proof: "FID + cast URL",
  },
  {
    id: "onchain-02",
    title: "Stake simbólico",
    type: "onchain",
    description:
      "Aporta 0.002 DON al pool community-lock. Refuerza skin-in-the-game y dificulta bots.",
    reward: "+5 score · boost 1.1x",
    proof: "Stake event en contrato `CommunityLock`",
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
              Quests · Activaciones humanas
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Misiones cortas, medibles y con boost real.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Combinamos acciones onchain, sociales y de aprendizaje. El panel muestra
              progreso en vivo y desbloquea el claim cuando cumples los requisitos
              mínimos.
            </p>
            <div className="flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm">
              <BadgeCheck className="h-10 w-10 rounded-full bg-muted p-2 text-primary" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Regla MVP: completa 1 quest onchain + 1 social + knowledge check.
                </p>
                <p className="mt-2">
                  Cada quest agrega score. Algunas otorgan boosters para multiplicar tu recompensa final.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Progreso (sandbox)
                </p>
                <p className="text-3xl font-bold text-foreground">{completionRate}%</p>
                <p className="text-xs text-muted-foreground">
                  {completed.length} / {quests.length} quests completas
                </p>
              </div>
              <Trophy className="h-12 w-12 rounded-full bg-primary/10 p-3 text-primary" />
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3">
                <span>Boost potencial</span>
                <span className="font-semibold text-foreground">1.25x</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3">
                <span>Tiempo estimado</span>
                <span className="font-semibold text-foreground">~8 minutos</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3">
                <span>Notificación</span>
                <span className="font-semibold text-primary">Push instantánea</span>
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
              Marca las quests para simular el journey. En producción sincronizamos con indexers/oráculos.
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
                        {isCompleted ? "Completada" : "Pendiente"}
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
                  Onchain + Anti-Sybil = recompensa mayor sin dilución.
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Boost base:</span>{" "}
                1.0x. Sube a 1.1x si completas una quest de cada tipo.
              </p>
              <p>
                <span className="font-semibold text-foreground">Boost máximo:</span>{" "}
                1.3x con BrightID + Farcaster verificado + stake simbólico.
              </p>
              <p>
                Push notifica cada logro. También se puede abrir un chat 1:1 para soporte durante la misión.
              </p>
            </div>
            <div className="rounded-2xl border border-dashed bg-muted/40 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Medición
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Tasa de finalización de quests.</li>
                <li>Tiempo promedio por tipo de quest.</li>
                <li>CTR de notificaciones (Open vs Delivered).</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-primary/10 p-4 text-sm text-primary">
              <ThumbsUp className="mb-2 h-6 w-6" />
              <p>
                UX tip: copy corto, mobile first. Cada quest se puede guardar para retomar desde cualquier device.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
