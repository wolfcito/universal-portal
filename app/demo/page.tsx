import { ArrowRight, ListRestart, Play, StepForward } from "lucide-react";

const steps = [
  {
    title: "1. Conecto wallet en chain A",
    detail:
      "El usuario abre Universal Portal, conecta su wallet (p.ej. Ethereum Sepolia) via universalSigner y observa el debug info.",
    highlight: "Mostrar universal signer funcionando cross-chain.",
  },
  {
    title: "2. Completo una quest rápida",
    detail:
      "Abrimos la pantalla de quests, marcamos la misión onchain (min tx en Donut) y recibimos la notificación Push.",
    highlight: "Resaltar experiencia educativa y CTA mobile-friendly.",
  },
  {
    title: "3. Paso la elegibilidad",
    detail:
      "Vamos a la vista de Eligibility. Mostramos score estimado (Passport ≥ 15 + BrightID) y que el usuario ganó un boost 1.2x.",
    highlight: "Explicar defensa en profundidad y appeals ligeros.",
  },
  {
    title: "4. Claim en Push Chain (Donut)",
    detail:
      "En la pantalla de claim vemos el formulario, previsualizamos montos, corremos la verificación y damos click en Ejecutar claim universal.",
    highlight: "Mencionar `pushChainClient.universal.sendTransaction` y Merkle proof.",
  },
  {
    title: "5. Notificación instantánea",
    detail:
      "Se dispara la Push Notification con hash, monto y boost aplicado. También se abre el chat de soporte opcional.",
    highlight: "Refuerzo del core value de Push (alerts + chat).",
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
            Storyboard para el Deploython
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Narrativa clara para jurado y comunidad. Ilustra el flujo universal (chain A → Push Chain),
            cómo combatimos Sybils y la UX de quests. Cada paso tiene highlight y callout técnico.
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
            Tip de presentación
          </p>
          <p className="mt-2">
            Mantén la demo fluida: abre tabs de Spray, Eligibility, Quests y Claim antes de empezar.
            Usa el modal de notificaciones Push para cierre contundente.
          </p>
        </div>
      </section>
    </main>
  );
}
