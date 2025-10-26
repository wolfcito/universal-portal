import { SprayForm } from "@/components/spray-form";
import Link from "next/link";

export default function SprayPage() {
  return (
    <main className="bg-background py-12">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Spray / Airdrop Console
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Diseña y ejecuta sprays nativos o de tokens ERC-20 hacia Push Chain
            (Donut) usando el patrón de Universal Apps. Carga destinatarios,
            simula montos y ejecuta la transacción con tu cuenta conectada.
          </p>
          <div className="mt-6 grid gap-4 rounded-lg border bg-card p-4 text-sm text-card-foreground">
            <div>
              <h2 className="font-semibold">Checklist previo</h2>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                <li>Wallet conectada vía universal signer</li>
                <li>CSV/JSON convertido a formato `address,amount`</li>
                <li>Montos expresados en ETH o unidades token (18 decimales)</li>
              </ul>
            </div>
            <div>
              <span className="mr-2 font-semibold text-foreground">
                ¿Necesitas publicar un Merkle Root?
              </span>
              <Link
                href="/admin"
                className="inline-flex items-center text-primary underline-offset-4 hover:underline"
              >
                Ir al tablero de administración
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <SprayForm />
        </div>
      </section>
    </main>
  );
}
