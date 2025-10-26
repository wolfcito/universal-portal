'use client';

import { usePushChainClient } from '@pushchain/ui-kit';

export function DebugInfo() {
  const { pushChainClient } = usePushChainClient();

  return (
    <div className="mt-4 p-4 bg-muted text-muted-foreground rounded-lg border">
      <h3 className="text-lg font-semibold mb-2">Debug Info</h3>
      <div className="space-y-2 text-sm">
        <div>
          <strong>PushChain Client:</strong> {pushChainClient ? '✅ Ready' : '❌ Not Ready'}
        </div>
        <div>
          <strong>Network:</strong> TESTNET
        </div>
        <div>
          <strong>Spray Contract:</strong> 0x6A9d2E8c356E254f50689aEa5D1E5E8FeaAB03a6
        </div>
        <div>
          <strong>Contract Valid:</strong> ✅ Sí
        </div>
        <div>
          <strong>UI Kit Version:</strong> 1.1.25
        </div>
        <div>
          <strong>Core Version:</strong> 0.1.41
        </div>
      </div>
    </div>
  );
} 