'use client';

import React from 'react';
import { ClientOnly } from '@/components/client-only';
import { LoadingSpinner } from '@/components/loading-spinner';

// Component rendered only on the client
function PushWalletProvider({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Provider, setProvider] = React.useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [PushUI, setPushUI] = React.useState<any>(null);

  React.useEffect(() => {
    // Dynamic import only on the client
    import('@pushchain/ui-kit').then((mod) => {
      setProvider(() => mod.PushUniversalWalletProvider);
      setPushUI(() => mod.PushUI);
    });
  }, []);

  if (!Provider || !PushUI) {
    return <LoadingSpinner message="Initializing wallet..." />;
  }

  return (
    <Provider 
    config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}
    themeOverrides={{
      '--pwauth-btn-connect-border-radius': '7px',
      '--pwauth-btn-connect-bg-color': '#6247e5',
      '--pwauth-btn-connect-color': '#fff',
    }}
    >
      {children}
    </Provider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly fallback={<LoadingSpinner message="Loading app..." />}>
      <PushWalletProvider>
        {children}
      </PushWalletProvider>
    </ClientOnly>
  );
}
