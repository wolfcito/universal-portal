import Link from "next/link";
import {
  ArrowRight,
  BellDot,
  CircleDot,
  Clock,
  Globe,
  Network,
  ShieldCheck,
  Sparkle,
  Sprout,
  SquareStack,
  Workflow,
} from "lucide-react";

const pillars = [
  {
    title: "Spray / Airdrop Universal",
    subtitle: "Envía desde cualquier chain hacia Push Chain (Donut).",
    description:
      "Batch nativo + ERC-20 con universalSigner. Integraremos simulación previa, throttling y notificaciones en tiempo real.",
    icon: SquareStack,
    href: "/spray",
  },
  {
    title: "Anti-Sybil Scoring",
    subtitle: "Defensa por capas sin comprometer la UX.",
    description:
      "Compatibilidad con Gitcoin Passport, BrightID, Farcaster y Human Passport. Threshold dinámico para eligibility y boosts.",
    icon: ShieldCheck,
    href: "/eligibility",
  },
  {
    title: "Quests Activadoras",
    subtitle: "Misiones onchain, sociales y de aprendizaje.",
    description:
      "Orquestamos quests cortas tipo Layer3 para calentar a los usuarios antes del claim y subir su score.",
    icon: Workflow,
    href: "/quests",
  },
];

const infra = [
  {
    title: "Donut Testnet Essentials",
    items: [
      { label: "RPC HTTP", value: "https://rpc.pushchain.tech" },
      { label: "RPC WSS", value: "wss://rpc.pushchain.tech/ws" },
      { label: "Chain ID", value: "12227331" },
      { label: "Explorer", value: "https://explorer.pushchain.tech" },
      { label: "Faucet", value: "https://faucet.push.org" },
      { label: "Network name", value: "Push Chain Donut" },
    ],
  },
  {
    title: "Universal SDK Hooks",
    items: [
      { label: "Signer", value: "`universalSigner`" },
      { label: "Tx helper", value: "`pushChainClient.universal.sendTransaction`" },
      { label: "Notif core", value: "Push Chat + Notifications" },
      { label: "UI Kit", value: "@pushchain/ui-kit" },
    ],
  },
];

const flow = [
  {
    title: "1. Importa audiencias",
    detail:
      "Carga CSV/JSON, valida duplicados y calcula montos. Sprays rápidos o Merkle Trees listos para onchain.",
  },
  {
    title: "2. Refuerza identidad",
    detail:
      "Solicita stamps, balancea fricción/privacidad y previsualiza el score con boosters opcionales.",
  },
  {
    title: "3. Activa con quests",
    detail:
      "Misiones cortas (tx mínima, social proof, knowledge check) que entregan eligibility gating o multiplicadores.",
  },
  {
    title: "4. Claim universal",
    detail:
      "Desde cualquier chain → Push Chain. Claim seguro con Merkle proof, simulación y recibo vía Push Notif.",
  },
];

const metrics = [
  {
    title: "Eficacia Anti-Sybil",
    value: "82%",
    description: "% de wallets con ≥1 stamp y score ≥ threshold.",
  },
  {
    title: "Tiempo a Claim",
    value: "3m 40s",
    description: "Desde onboarding hasta claim exitoso en sandbox.",
  },
  {
    title: "Costo promedio",
    value: "~45k gas",
    description: "Merkle claim en Donut vs spray directo (testnet).",
  },
];

export default function LandingPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-20">
          <div className="flex flex-1 flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Sparkle className="h-4 w-4" />
              Universal App · Push Chain Donut
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Universal Portal: Spray/Airdrop + Anti-Sybil + Quests
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Demo listo para Deploython Project G.U.D. Diseñado para mostrar
              cross-chain write hacia Push Chain, distribución eficiente, defensa
              en profundidad contra Sybil y misiones de activación fáciles de
              seguir. Copy bilingüe corto listo para demo:{" "}
              <span className="font-medium text-foreground">
                “Claim your Donut rewards safely · Recompensas sin Sybils”.
              </span>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/spray"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Abrir Spray Console
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Script de Demo
                <Clock className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="rounded-2xl border bg-card p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    {metric.title}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-3xl border bg-card p-6 shadow-xl">
            <div className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4">
              <Network className="h-10 w-10 rounded-full border bg-background p-2 text-primary" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Universal TX Flow
                </p>
                <p className="text-sm text-foreground">
                  Conecta en Ethereum, ejecuta claim en Push Chain Donut con
                  `pushChainClient.universal.sendTransaction`.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border bg-background p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-9 w-9 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Eligibility Snapshot</p>
                  <p className="text-xs text-muted-foreground">
                    Passport ≥ 15 o BrightID + Farcaster = Boost 1.2x
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-3 text-xs text-muted-foreground">
                <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                  <span>Stamp score</span>
                  <span className="font-semibold text-foreground">18 / 25</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                  <span>Quest progress</span>
                  <span className="font-semibold text-foreground">2 / 3</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                  <span>Claim stage</span>
                  <span className="font-semibold text-primary">Listo</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-dashed bg-background/80 p-4">
              <BellDot className="h-8 w-8 text-primary" />
              <div className="space-y-1">
                <p className="text-sm font-semibold">Push Notifications</p>
                <p className="text-xs text-muted-foreground">
                  Eligibilidad aprobada, completaste quest, claim confirmado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col gap-3 rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon className="h-9 w-9 rounded-full bg-primary/10 p-2 text-primary transition-transform group-hover:scale-110" />
                <div>
                  <h3 className="text-lg font-semibold">{pillar.title}</h3>
                  <p className="text-sm text-primary/80">{pillar.subtitle}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Ver pantalla
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y bg-muted/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:py-20 lg:flex-row">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Globe className="h-3.5 w-3.5" />
              Cross-chain → Push Chain
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Encaje con Project G.U.D y Donut infra
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Ponemos énfasis en UX visible, composabilidad y medición. Los
              bloques siguientes se documentan en README y se replican en scripts
              de despliegue.
            </p>
            <div className="mt-6 grid gap-4">
              {flow.map((stage) => (
                <div
                  key={stage.title}
                  className="rounded-2xl border bg-card/80 p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-primary">
                    {stage.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            {infra.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border bg-card p-5 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase text-muted-foreground">
                  {block.title}
                </p>
                <div className="mt-4 space-y-3">
                  {block.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-2 text-xs sm:text-sm"
                    >
                      <span className="font-medium text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="font-semibold text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <CircleDot className="h-3.5 w-3.5" />
              Deploython Focus
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              ¿Qué se evalúa? Funcionalidad visible y diseño claro.
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              El demo muestra la historia completa en menos de 3 minutos.
              Reforzamos los highlights con un tablero admin, verificador de
              elegibilidad y métricas accionables.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span className="rounded-full border border-dashed px-3 py-1">
                UX enfocada
              </span>
              <span className="rounded-full border border-dashed px-3 py-1">
                Notificaciones Push
              </span>
              <span className="rounded-full border border-dashed px-3 py-1">
                Cross-chain ready
              </span>
              <span className="rounded-full border border-dashed px-3 py-1">
                Airdrop seguro
              </span>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-lg">
            <div className="flex items-center gap-3 rounded-2xl bg-primary/10 p-4 text-primary">
              <Sprout className="h-8 w-8" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">
                  Roadmap corto
                </p>
                <p className="text-xs text-primary/90">
                  MVP en 1 semana, listo para iterar hacia mainnet.
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  Día 1-2:
                </span>{" "}
                Import + simulaciones + UI universal signer.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Día 3-4:
                </span>{" "}
                Score Anti-Sybil, quests iniciales, copy bilingüe.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Día 5-7:
                </span>{" "}
                Notificaciones, métricas, script demo, polish visual.
              </p>
            </div>
            <Link
              href="/admin"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Ver tablero Admin
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
