# Universal Portal · Spray/Airdrop + Anti-Sybil + Quests (Push Chain Donut)

Demo-ready UI for the Project G.U.D Deploython. It showcases a Universal App that lets anyone spray native/erc20 assets, combine layered anti-Sybil defenses, activate users with quests, and execute a universal claim towards Push Chain (Donut).

The current scope focuses on product storytelling and UX flows (no onchain mutations besides the already wired spray console). Every screen mirrors the narrative requested in the brief so the workflow can be demoed end-to-end.

## Quick start

```bash
pnpm install
pnpm dev
```

The app runs on `http://localhost:3000`. Wallet connectivity relies on `@pushchain/ui-kit`, so run it in a browser that can inject wallets or in a desktop with Push Wallet installed.

## Routes & use cases

| Route | Purpose | Highlights |
| --- | --- | --- |
| `/` | Landing | Storyboard: Spray + Anti-Sybil + Quests. Donut infra quick reference. |
| `/spray` | Spray console | Already functional native/ERC-20 spray using `pushChainClient.universal.sendTransaction`. |
| `/eligibility` | Anti-Sybil | Threshold definition, stamp weights (Gitcoin Passport, BrightID, Farcaster, Human Passport), risk notes, metrics a seguir. |
| `/quests` | Quest board | Onchain + social + knowledge missions estilo Layer3. Toggleable mock completion + boosts. |
| `/claim` | Claim UX | Verificador de score, mock Merkle proof, botón para disparar el claim universal, checklist de seguridad. |
| `/admin` | Admin board | Flujo CSV/JSON → validación → simulación → publicación Merkle/spray. Historial de lotes y métricas instantáneas. |
| `/metrics` | KPI dashboard | Métricas MVP: eficacia anti-Sybil, quest completion, tiempo a claim, CTR notificaciones, costos estimados. |
| `/demo` | Demo script | Guía 2–3 minutos enumerando pasos para la presentación oficial. |

## Donut testnet essentials

- RPC HTTP: `https://rpc.pushchain.tech`
- RPC WebSocket: `wss://rpc.pushchain.tech/ws`
- Chain ID: `12227331`
- Explorer: `https://explorer.pushchain.tech`
- Faucet: `https://faucet.push.org`
- Network name: `Push Chain Donut`

Universal write signature (already in code):

```ts
const tx = await pushChainClient.universal.sendTransaction({
  to: sprayContractAddress,
  value,
  data,
});
await tx.wait();
```

## Anti-Sybil (defensa en profundidad)

- **Threshold base**: Gitcoin Passport score ≥ 15 **o** BrightID verificado.  
- **Boosts**:
  - BrightID + Farcaster verified: 1.15x
  - Human Passport (opt-in): 1.05x adicional
  - Quest “stake simbólico”: +5 score
- **Estampillas prioritarias**:
  - Gitcoin Passport: peso 8 (KYC/KYB, social graph, PoH)
  - BrightID: peso 6 (web-of-trust)
  - Farcaster: peso 4 (unicidad onchain)
  - Human Passport: peso 4 (modular PoI)
- **Heurísticas**: cooldown suave (1 claim/12h por IP/device), chequeos de saldo/antigüedad, detección de duplicados en lotes.
- **Appeals**: formulario breve + chat Push para resolver falsos negativos.

## Quests (activación + pruebas humanas)

- **Tipos**: onchain (tx mínima, stake simbólico), social (follow/cast), knowledge (quiz breve).
- **Validación**: oráculos/indexers para tx hash + endpoints de stamps; todo se refleja en score y boosters.
- **UX**: mobile-first, copy bilingüe corto, notificaciones Push para cada hito, posibilidad de retomar progreso.

## Distribución (spray + Merkle)

- **Spray directo**: batch con límites soft, simulación previa, reporting de gas. Pensado para envíos rápidos donde el emisor asume el costo.
- **Merkle Distributor** (mock UI, pronto contrato): import CSV/JSON, generación de root, publicación onchain, claim con prueba.
- **Admin board**: 4 pasos (upload → validar → simular → publicar) con historial de lotes y métricas clave (duplicados, wallets bloqueadas, límite por lote).

## Métricas MVP

- Eficacia anti-Sybil: 82% (mock) — objetivo > 70%.
- Quest completion: 64% (usuarios que completan 3/3 misiones base).
- Tiempo a primer claim: 3m 40s (sandbox).
- CTR notificaciones Push: 71% (deliveries vs opens).
- Gas por beneficiario (estimado Donut): Merkle claim ~45k, spray directo ~78k.

## Riesgos & mitigación

- **Falsos positivos/negativos**: appeals ligeros + nivel “basic reward” para usuarios borderline.
- **Bots/granjas**: límites por device, stake simbólico opt-in, análisis de patrones en backend.
- **Fricción KYC**: opciones privacy-preserving (BrightID, Human Passport) sin biometría para MVP.
- **Desalineo con Project G.U.D**: demo recalca universal write + notificaciones + UX visible.

## Próximos pasos sugeridos

1. Conectar backend ligero (Node/Edge) para cachear Passport score y registrar cooldowns.
2. Integrar contrato `MerkleDistributor` + generación de proofs desde admin board.
3. Automatizar notificaciones usando plantillas Push.
4. Añadir reporte exportable (CSV/JSON + logs) para auditoría post-claim.

## Créditos

- **Front**: Next.js 16 + TypeScript + TailwindCSS.
- **Wallet**: `@pushchain/ui-kit` con `PushUniversalWalletProvider`.
- **Spray contract**: `0x6A9d2E8c356E254f50689aEa5D1E5E8FeaAB03a6` (Donut testnet, mock).
