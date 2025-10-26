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
  reason: "Passport ≥ 15 + BrightID verificado + quest stake simbólico",
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
              Claim · Universal Write
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Reclama tus recompensas directo en Push Chain (Donut).
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Verifica tu score, genera la prueba Merkle (si aplica) y ejecuta la transacción universal.
              UX enfocada en claridad: elegibilidad antes de gastar gas, vista previa de montos y notificaciones integradas.
            </p>
            <div className="rounded-2xl border bg-card p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Pasos rápidos
              </p>
              <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Conecta tu wallet (cualquier L1/L2 compatible).
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Ejecuta verificación → score + status en segundos.
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Si elegible, firma y envía tx universal hacia Donut.
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
                    Verificando…
                  </>
                ) : (
                  <>
                    Verificar elegibilidad
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
                    Resultado
                  </p>
                  <p className="text-sm text-foreground">
                    {status === "eligible"
                      ? "Elegible con boost activo."
                      : status === "rejected"
                        ? "Revisa stamps pendientes."
                        : "Completa la verificación para conocer tu status."}
                  </p>
                </div>
              </div>
              {status === "eligible" && (
                <div className="mt-4 space-y-2 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-primary">
                  <p>
                    Score total: <span className="font-semibold text-foreground">{mockResult.score}</span>
                  </p>
                  <p>
                    Boost aplicado: <span className="font-semibold text-foreground">{mockResult.boost}x</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {mockResult.reason}
                  </p>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    Ejecutar claim universal
                    <Sparkles className="h-4 w-4" />
                  </button>
                </div>
              )}
              {status === "idle" && (
                <p className="mt-4 text-xs text-muted-foreground">
                  Tip: permite a tus usuarios ver el resultado antes de firmar. Ahorra gas y reduce tickets de soporte.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Checklist de seguridad</h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-sm">
                <ClipboardList className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Simulación previa</p>
                  <p>Usamos `pushChainClient.universal.sendTransaction` con simulación antes de ejecutar para mostrar gas y posibles fallos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-sm">
                <Copy className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Transparencia de pruebas</p>
                  <p>El usuario puede descargar su Merkle proof o exportar las evidencias de quests para auditar.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-sm">
                <Sparkles className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Notificación inmediata</p>
                  <p>Push envía un recibo con hash, monto y boost aplicado. En caso de fallo, se ofrece reintento guiado.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">¿Qué medimos aquí?</h2>
            <div className="rounded-3xl border bg-card p-6 shadow-lg">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Conversion funnel:</span>{" "}
                  Entradas al verificador → claims confirmados.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Errores:</span>{" "}
                  Motivos más frecuentes (prueba incorrecta, score insuficiente, cooldown activo).
                </p>
                <p>
                  <span className="font-semibold text-foreground">Tiempo:</span>{" "}
                  Desde “Verificar” hasta hash confirmado (para ajustar UX).
                </p>
              </div>
              <div className="mt-5 rounded-2xl border border-dashed bg-muted/50 p-4 text-xs text-muted-foreground">
                <p className="font-semibold uppercase tracking-wide">Próximos pasos</p>
                <ul className="mt-2 space-y-2">
                  <li>Integrar MerkleDistributor real.</li>
                  <li>Crear endpoint de scoring en backend (cache + rate limit).</li>
                  <li>Automatizar notificación con plantillas Push.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
