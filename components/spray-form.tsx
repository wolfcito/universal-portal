'use client';

import { useState } from 'react';
import { AbiCoder, Interface, InterfaceAbi, parseEther, parseUnits } from 'ethers';
import { usePushChainClient } from '@pushchain/ui-kit';
import { PushChain } from '@pushchain/core';
import sprayAbi from '@/abi/spray.abi.json';
import { WalletButton } from './connect-wallet';
import { DebugInfo } from './debug-info';
import { LoadingSpinner } from './loading-spinner';
import { ClientOnly } from './client-only';

const sprayContractAddress = process.env.NEXT_PUBLIC_SPRAY_CONTRACT ?? '';
const isValidSprayContract =
  /^0x[a-fA-F0-9]{40}$/.test(sprayContractAddress);
const sprayInterface = new Interface(sprayAbi as InterfaceAbi);
const abiCoder = AbiCoder.defaultAbiCoder();

function extractRevertReason(error: unknown): string | null {
  const baseError = (error as { cause?: unknown })?.cause ?? error;
  const data =
    typeof (baseError as { data?: unknown })?.data === 'string'
      ? ((baseError as { data: string }).data)
      : typeof (baseError as { error?: { data?: unknown } })?.error?.data === 'string'
        ? ((baseError as { error: { data: string } }).error.data)
        : null;

  if (typeof data === 'string' && data.startsWith('0x')) {
    if (data.startsWith('0x08c379a0')) {
      try {
        const [reason] = abiCoder.decode(['string'], `0x${data.slice(10)}`);
        return String(reason);
      } catch (decodeErr) {
        console.error('Failed to decode revert string', decodeErr);
      }
    }

    try {
      const parsed = sprayInterface.parseError(data);
      const args =
        'args' in parsed && Array.isArray(parsed.args) && parsed.args.length
          ? `: ${parsed.args.map((arg) => String(arg)).join(', ')}`
          : '';
      return `${parsed.name ?? 'Contract error'}${args}`;
    } catch (parseErr) {
      console.error('Failed to parse contract error', parseErr);
    }
  }

  const message =
    typeof (baseError as { shortMessage?: unknown })?.shortMessage === 'string'
      ? (baseError as { shortMessage: string }).shortMessage
      : typeof (baseError as { message?: unknown })?.message === 'string'
        ? (baseError as { message: string }).message
        : null;

  return message ?? null;
}

export function SprayForm() {
  return (
    <ClientOnly fallback={
      <div className="max-w-md mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-lg border">
        <h2 className="text-2xl font-bold mb-4 text-center">SPRAY</h2>
        <div className="flex justify-center">
          <LoadingSpinner message="Initializing app..." />
        </div>
      </div>
    }>
      <SprayFormContent />
    </ClientOnly>
  );
}

function SprayFormContent() {
  const { pushChainClient } = usePushChainClient();
  const [isToken, setIsToken] = useState(false);
  const [tokenAddr, setTokenAddr] = useState('');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!pushChainClient) {
      return alert('Please connect your wallet first');
    }

    if (!isValidSprayContract) {
      return alert('Error: NEXT_PUBLIC_SPRAY_CONTRACT is not configured correctly');
    }

    const lines = input.trim().split('\n');
    if (lines.length === 0 || (lines.length === 1 && lines[0] === '')) {
      return alert('Please enter at least one address and amount');
    }

    const to: string[] = [];
    const amounts: bigint[] = [];

    try {
      for (const line of lines) {
        const [addr, amt] = line.split(',').map((s: string) => s.trim());

        if (!addr || !amt) {
          throw new Error(`Invalid format on line: ${line}. Expected: address,amount`);
        }
        
        // Validate address
        if (!addr.match(/^0x[a-fA-F0-9]{40}$/)) {
          throw new Error(`Invalid address: ${addr}`);
        }
        
        to.push(addr);
        const value = isToken
          ? parseUnits(amt, 18)
          : parseEther(amt);
        amounts.push(value);
      }

      if (isToken) {
        if (!tokenAddr || !/^0x[a-fA-F0-9]{40}$/.test(tokenAddr.trim())) {
          throw new Error('Invalid token contract address. Please provide a valid 0x-prefixed address.');
        }
      }
    } catch (err) {
      alert(`Error al procesar datos: ${err instanceof Error ? err.message : 'Error desconocido'}`);
      return;
    }

    const totalValue = isToken
      ? BigInt(0)
      : amounts.reduce((acc, x) => acc + x, BigInt(0));

    console.log('Preparing transaction with:', {
      isToken,
      tokenAddr: isToken ? tokenAddr : 'N/A',
      recipients: to,
      amounts: amounts.map(a => a.toString()),
      totalValue: totalValue.toString(),
      contract: sprayContractAddress
    });

    try {
      setLoading(true);

      // Encode transaction data using PushChain utils
      const data = PushChain.utils.helpers.encodeTxData({
        abi: sprayAbi,
        functionName: isToken ? 'disperseToken' : 'disperseNative',
        args: isToken
          ? [tokenAddr.trim(), to, amounts]
          : [to, amounts],
      }) as `0x${string}`;

      console.log('Sending transaction...');
      console.log('Transaction details:', {
        to: sprayContractAddress as `0x${string}`,
        value: totalValue.toString(),
        data: data,
      });
      
      // Send the transaction through the universal pattern
      const tx = await pushChainClient.universal.sendTransaction({
        to: sprayContractAddress as `0x${string}`,
        value: totalValue,
        data,
      });

      // Wait for the transaction to be mined
      await tx.wait();
      
      console.log('Transaction successful:', { tx });
      alert(`Success! TxHash: ${tx.hash}`);
      
      // Reset form after success
      setInput('');
      setTokenAddr('');
    } catch (err) {
      console.error('Transaction error:', err);
      const reason = extractRevertReason(err);
      const fallback =
        err instanceof Error && err.message
          ? err.message
          : 'Unknown error';
      alert(`Failed to send transaction${reason ? `: ${reason}` : `: ${fallback}`}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-background to-card p-8 text-card-foreground shadow-xl">
      <div className="flex items-center justify-between rounded-2xl bg-muted/60 p-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Spray console
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            SPRAY
          </h2>
        </div>
        <WalletButton />
      </div>

      <div className="mt-6 space-y-6">
        <div className="rounded-2xl border border-dashed border-primary/30 bg-background/60 p-4">
          <label className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <input
              type="checkbox"
              checked={isToken}
              onChange={() => setIsToken((x: boolean) => !x)}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            Spray ERC-20 Token
          </label>
        </div>

        {isToken && (
          <input
            type="text"
            placeholder="Token contract address"
            value={tokenAddr}
            onChange={(e) => setTokenAddr(e.target.value)}
            className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        )}

        <textarea
          placeholder={`Recipient, Amount (line by line)
            Example:
            0x1234...5678, 0.1
            0xabcd...0678, 0.05`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          rows={6}
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !pushChainClient}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
        >
          {loading ? 'Sending...' : 'Spray'}
        </button>
      </div>

      {/* Debug info - only render during development */}
      {process.env.NODE_ENV === 'development' && <DebugInfo />}
    </div>
  );
}
