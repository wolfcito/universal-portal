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
    title: "Eficacia anti-Sybil",
    value: "82%",
    description: "% wallets aprobadas con ≥ 1 stamp.",
    icon: ShieldCheck,
  },
  {
    title: "Tasa de finalización de quests",
    value: "64%",
    description: "Usuarios que completaron 3/3 quests base.",
    icon: Trophy,
  },
  {
    title: "Tiempo a primer claim",
    value: "3m 40s",
    description: "Desde onboarding → tx confirmada.",
    icon: Timer,
  },
  {
    title: "CTR notificaciones",
    value: "71%",
    description: "Push open rate vs entregados.",
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
    label: "Spray directo",
    gas: 78000,
    color: "bg-primary/60",
  },
];

const rejectionReasons = [
  { label: "Score insuficiente", value: 46 },
  { label: "Quest onchain faltante", value: 28 },
  { label: "Cooldown activo", value: 14 },
  { label: "Prueba inválida", value: 12 },
];

export default function MetricsPage() {
  return (
    <main className="bg-background">
      <section className="border-b bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Activity className="h-4 w-4" />
              Métricas · MVP Deploython
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Indicadores accionables para spray, anti-Sybil y quests.
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Esta vista responde rápido: ¿nuestro scoring funciona?, ¿qué tan bien convierten las quests?,
              ¿cuánto gas gastamos?, ¿estamos entregando valor? Adaptada para presentar en demo o revisar con stakeholders.
            </p>
            <div className="rounded-2xl border bg-card p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Objetivos MVP
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Eficacia anti-Sybil &gt; 70%.</li>
                <li>Tasa de finalización de quests &gt; 60%.</li>
                <li>Tiempo a claim &lt; 5 minutos.</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              KPIs destacados
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
                  Porcentaje de aprobación semanal
                </p>
                <p className="text-sm text-muted-foreground">
                  Tendencia mock basada en sandbox (objetivo &gt; 75%).
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground md:grid-cols-4">
              {["Semana 1", "Semana 2", "Semana 3", "Semana 4"].map((label, index) => {
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
                    Rechazos por motivo
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
                    Experimentos próximos
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Qué probar después del Deploython.
                  </p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Segmentar boosters por antigüedad en Push Chain.</li>
                <li>Usar notificaciones dirigidas (personalización por score).</li>
                <li>A/B test de copy en quests para subir completion rate.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Costos estimados</h2>
            <p className="text-sm text-muted-foreground">
              Comparamos spray directo vs Merkle claim. El objetivo es mantener el gas por beneficiario lo más bajo posible.
            </p>
            <div className="space-y-3">
              {comparisons.map((item) => (
                <div key={item.label} className="rounded-2xl border bg-card p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">Gas estimado</p>
                  <div className="mt-3 h-3 rounded-full bg-muted">
                    <div
                      className={`h-3 rounded-full ${item.color}`}
                      style={{ width: `${Math.min(item.gas / 1000, 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {item.gas.toLocaleString()} unidades (mock - Donut RPC)
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
                  Historias para contar
                </p>
                <p className="text-xs text-muted-foreground">
                  Datos para la demo y el README.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">82% eficacia</span> demuestra que las capas anti-Sybil funcionan sin bloquear usuarios legítimos.
              </p>
              <p>
                <span className="font-semibold text-foreground">64% quests completadas</span> valida el enfoque educativo tipo Layer3.
              </p>
              <p>
                <span className="font-semibold text-foreground">Gas optimizado</span> gracias al MerkleDistributor y a la simulación previa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
