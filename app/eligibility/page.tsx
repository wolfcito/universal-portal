import { Info, ShieldHalf, Siren, Sparkles, UserCheck } from "lucide-react";

const stampMatrix = [
  {
    provider: "Gitcoin Passport",
    weight: 8,
    checks: ["CEX KYC", "Social graph", "Proof of Humanity"],
    status: "Pre-integrado (score API)",
    action: "Connect Passport → fetch stamps → calcular score ≥ 15",
  },
  {
    provider: "BrightID",
    weight: 6,
    checks: ["Web-of-trust", "Context guardian"],
    status: "Badge validado",
    action: "Escanear QR BrightID → registrar hash → boost 1.15x",
  },
  {
    provider: "Farcaster",
    weight: 4,
    checks: ["Unique username", "Onchain verification"],
    status: "PoC onchain listo",
    action: "Leer `fid`, verificación onchain → elegible + push noti",
  },
  {
    provider: "Human Passport",
    weight: 4,
    checks: ["Modular PoI", "Privacidad preservada"],
    status: "Opt-in",
    action: "Validar credencial zero-knowledge → boost 1.05x",
  },
];

const protections = [
  {
    title: "Threshold dinámico",
    description:
      "Eligibilidad base: Passport ≥ 15 o BrightID. Boost máximo combinando Farcaster + Human Passport.",
  },
  {
    title: "Rate limits & heurísticas",
    description:
      "Cooldowns por IP/device, alertas si múltiples claims por `universalSigner`, comparación heurística de balance/edad.",
  },
  {
    title: "Appeals sin fricción",
    description:
      "Formulario corto con upload opcional → ticket en Push Chat para revisión manual dentro del equipo.",
  },
  {
    title: "Privacidad por diseño",
    description:
      "Escogemos stamps que no exigen biometría. Uso de hashes y verificaciones off-chain firmadas para minimizar exposiciones.",
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
              Anti-Sybil · Defensa en profundidad
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Eligibility clara, score transparente.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Combinamos stamps verificables, heurísticas ligeras y UX sin fricciones.
              El participante sabe qué necesita y cómo mejorar su score antes de intentar el claim.
            </p>
            <div className="flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-sm">
              <Info className="h-10 w-10 rounded-full bg-muted p-2 text-primary" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Eligibility básica · Necesitas al menos una de las rutas:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Gitcoin Passport score <span className="font-semibold">≥ 15</span>
                  </li>
                  <li>
                    BrightID verificado + Quest onchain completada
                  </li>
                  <li>
                    Farcaster verificado + Human Passport (boost opcional)
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
                  <span className="font-semibold text-muted-foreground">Farcaster verificado</span>
                  <span className="font-semibold text-foreground">ON</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted">
                  <div className="h-2 w-[65%] rounded-full bg-primary/60" />
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-primary/10 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Resultado (mock)
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
              Este estimador vive dentro del claim flow para que nadie gaste gas sin saber si calificará.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Stamps priorizados para el MVP
            </h2>
            <p className="text-sm text-muted-foreground">
              Cada stamp agrega puntos ponderados. Se documentan en el README los endpoints y contratos necesarios.
            </p>
            <div className="space-y-4">
              {stampMatrix.map((stamp) => (
                <div key={stamp.provider} className="rounded-2xl border bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold">{stamp.provider}</p>
                      <p className="text-xs uppercase tracking-wide text-primary/80">
                        Peso {stamp.weight}
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
                    Riesgos conocidos
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Granjas que comparten stamps, falsos negativos que fallan en Passport.
                  </p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Señales adicionales: actividad previa en Push Chain, balance mínimo.</li>
                <li>Cooldown soft: 1 claim por 12h por IP/device. Registro en backend ligero.</li>
                <li>Appeals directo por Push Chat con respuesta SLA &lt; 24h.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Sparkles className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Integraciones siguientes
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Modularizamos para agregar nuevas credenciales sin tocar el claim core.
                  </p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Passport v3 score endpoint + caching.</li>
                <li>BrightID context-checker (GraphQL) para verificar relaciones sospechosas.</li>
                <li>Attestaciones EAS emitidas por partners de Project G.U.D.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <UserCheck className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Cómo medimos
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Métricas se exponen en la pantalla de métricas y se auditan en el README.
                  </p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>% de rechazos por falta de stamps.</li>
                <li>% de usuarios con BrightID verificado.</li>
                <li>Median score global + percentil 90.</li>
                <li>Tiempo promedio desde elegibilidad → claim.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
