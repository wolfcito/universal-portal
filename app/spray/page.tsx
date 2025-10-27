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
            Design and execute native or ERC-20 sprays into Push Chain (Donut) using the Universal Apps pattern. Upload recipients, simulate amounts, and dispatch the transaction with your connected account.
          </p>
          <div className="mt-6 grid gap-4 rounded-lg border bg-card p-4 text-sm text-card-foreground">
            <div>
              <h2 className="font-semibold">Pre-flight checklist</h2>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                <li>Wallet connected via the universal signer</li>
                <li>CSV/JSON formatted as <code>address,amount</code></li>
                <li>Amounts expressed in ETH or token units (18 decimals)</li>
              </ul>
            </div>
            <div>
              <span className="mr-2 font-semibold text-foreground">
                Need to publish a Merkle Root?
              </span>
              <Link
                href="/admin"
                className="inline-flex items-center text-primary underline-offset-4 hover:underline"
              >
                Go to the admin board
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
