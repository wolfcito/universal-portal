'use client';

import { PushUniversalAccountButton } from '@pushchain/ui-kit';
import { ClientOnly } from './client-only';
import { LoadingSpinner } from './loading-spinner';

export function WalletButton() {
  return (
    <ClientOnly fallback={<div className="p-3 bg-muted text-muted-foreground rounded-lg"><LoadingSpinner message="Loading wallet..." /></div>}>
      <div className="space-y-2">
        <PushUniversalAccountButton />
      </div>
    </ClientOnly>
  );
}
