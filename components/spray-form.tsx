'use client';

import { useState } from 'react';
import { parseEther, parseUnits } from 'ethers';
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
        functionName: isToken ? 'sprayToken' : 'sprayEther',
        args: isToken
          ? [tokenAddr, to, amounts]
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
      alert(`Failed to send transaction: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-lg border">
      <div className="flex justify-between items-center">
        <h2 className="flex text-3xl font-bold mb-4">SPRAY</h2>
        <WalletButton />  
      </div>
      
      
      <div className="mt-4">
        <div className="space-y-2 mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isToken}
              onChange={() => setIsToken((x: boolean) => !x)}
              className="mr-2"
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
            className="w-full mb-4 p-2 border rounded bg-background text-foreground placeholder:text-muted-foreground"
          />
        )}

        <textarea
          placeholder={`Recipient, Amount (line by line)
            Example:
            0x1234...5678, 0.1
            0xabcd...0678, 0.05`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full mb-4 p-2 border rounded text-sm bg-background placeholder:text-muted-foreground font-mono"
          rows={5}
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !pushChainClient}
          className="w-full py-3 bg-purple-500 text-primary-foreground rounded hover:bg-purple-500/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Sending...' : 'Spray'}
        </button>
      </div>
      
      {/* Debug info - only render during development */}
      {process.env.NODE_ENV === 'development' && <DebugInfo />}
    </div>
  );
}
