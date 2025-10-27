'use client';

import { usePushChainClient } from '@pushchain/ui-kit';

const sprayContractAddress = process.env.NEXT_PUBLIC_SPRAY_CONTRACT ?? '';
const isValidSprayContract =
  /^0x[a-fA-F0-9]{40}$/.test(sprayContractAddress);

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
          <strong>Spray Contract:</strong> {sprayContractAddress || 'Not set'}
        </div>
        <div>
          <strong>Contract Valid:</strong> {isValidSprayContract ? '✅ Yes' : '❌ No'}
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
