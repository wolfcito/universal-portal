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
| `/` | Landing | Storyboard for Spray + Anti-Sybil + Quests with Donut infra quick reference. |
| `/spray` | Spray console | Functional native/ERC-20 spray powered by `pushChainClient.universal.sendTransaction`. |
| `/eligibility` | Anti-Sybil | Threshold definition, stamp weights (Gitcoin Passport, BrightID, Farcaster, Human Passport), risk callouts, metrics to track. |
| `/quests` | Quest board | Layer3-style onchain, social, and knowledge missions with toggleable mock completion + boosters. |
| `/claim` | Claim UX | Score checker, mock Merkle proof, button to trigger the universal claim, and safety checklist. |
| `/admin` | Admin board | CSV/JSON → validation → simulation → publish Merkle/spray. Batch history with instant metrics. |
| `/metrics` | KPI dashboard | MVP KPIs: anti-Sybil effectiveness, quest completion, time to claim, notification CTR, estimated costs. |
| `/demo` | Demo script | 2–3 minute guide covering the official presentation flow. |

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

## Anti-Sybil (defense in depth)

- **Base threshold**: Gitcoin Passport score ≥ 15 **or** verified BrightID.  
- **Boosts**:
  - BrightID + Farcaster verified: 1.15x
  - Human Passport (opt-in): additional 1.05x
  - “Symbolic stake” quest: +5 score
- **Priority stamps**:
  - Gitcoin Passport: weight 8 (KYC/KYB, social graph, PoH)
  - BrightID: weight 6 (web-of-trust)
  - Farcaster: weight 4 (onchain uniqueness)
  - Human Passport: weight 4 (modular PoI)
- **Heuristics**: soft cooldown (1 claim/12h per IP/device), balance/age checks, duplicate detection in batches.
- **Appeals**: short form + Push chat to resolve false negatives.

## Quests (activation + human proofs)

- **Types**: onchain (micro tx, symbolic stake), social (follow/cast), knowledge (short quiz).
- **Validation**: oracles/indexers for tx hashes + stamp endpoints; everything feeds the score and boosters.
- **UX**: mobile-first, concise copy, Push notifications for each milestone, progress can be resumed on any device.

## Distribution (spray + Merkle)

- **Direct spray**: batches with soft limits, pre-flight simulation, gas reporting. Designed for quick drops where the sender pays the cost.
- **Merkle Distributor** (mock UI, contract coming next): import CSV/JSON, generate the root, publish onchain, claim with proof.
- **Admin board**: four steps (upload → validate → simulate → publish) with batch history and key metrics (duplicates, blocked wallets, batch limit).

## MVP metrics

- Anti-Sybil effectiveness: 82% (mock) — target > 70%.
- Quest completion: 64% (users completing all 3 core quests).
- Time to first claim: 3m 40s (sandbox).
- Push notification CTR: 71% (delivered vs. opened).
- Gas per beneficiary (Donut estimate): Merkle claim ~45k, direct spray ~78k.

## Risks & mitigation

- **False positives/negatives**: lightweight appeals + “basic reward” tier for borderline users.
- **Bots/farms**: per-device limits, optional symbolic stake, backend pattern analysis.
- **KYC friction**: privacy-preserving options (BrightID, Human Passport) without biometrics for the MVP.
- **Misalignment with Project G.U.D**: demo reinforces universal write + notifications + visible UX.

## Suggested next steps

1. Connect a lightweight backend (Node/Edge) to cache Passport scores and record cooldowns.
2. Integrate the `MerkleDistributor` contract + proof generation from the admin board.
3. Automate notifications using Push templates.
4. Add an exportable report (CSV/JSON + logs) for post-claim auditability.

## Credits

- **Front**: Next.js 16 + TypeScript + TailwindCSS.
- **Wallet**: `@pushchain/ui-kit` with `PushUniversalWalletProvider`.
- **Spray contract**: `0x6A9d2E8c356E254f50689aEa5D1E5E8FeaAB03a6` (Donut testnet, mock).
