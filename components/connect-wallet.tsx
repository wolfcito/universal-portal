'use client';

import { PushUniversalAccountButton } from '@pushchain/ui-kit';
import { ClientOnly } from './client-only';
import { LoadingSpinner } from './loading-spinner';

export function WalletButton() {
  const CustomLoader = () => (
    <div className="flex items-center gap-2 rounded-full border border-dashed border-primary/40 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
      <span className="h-3 w-3 animate-spin rounded-full border-[2px] border-primary/20 border-t-primary" />
      <span>Loading Spray wallet…</span>
    </div>
  );

  return (
    <ClientOnly fallback={<div className="p-3 bg-muted text-muted-foreground rounded-lg"><LoadingSpinner message="Loading wallet..." /></div>}>
      <div className="space-y-2">
        <PushUniversalAccountButton uid="spray" loadingComponent={<CustomLoader />} />
      </div>
    </ClientOnly>
  );
}
