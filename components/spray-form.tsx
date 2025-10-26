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

const sprayContractAddress = '0x6A9d2E8c356E254f50689aEa5D1E5E8FeaAB03a6' as `0x${string}`;

export function SprayForm() {
  return (
    <ClientOnly fallback={
      <div className="max-w-md mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-lg border">
        <h2 className="text-2xl font-bold mb-4 text-center">SPRAY</h2>
        <div className="flex justify-center">
          <LoadingSpinner message="Inicializando aplicación..." />
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
      return alert('Por favor conecta tu wallet primero');
    }

    if (!sprayContractAddress) {
      return alert('Error: SPRAY_CONTRACT no configurado');
    }

    const lines = input.trim().split('\n');
    if (lines.length === 0 || (lines.length === 1 && lines[0] === '')) {
      return alert('Por favor ingresa al menos una dirección y cantidad');
    }

    const to: string[] = [];
    const amounts: bigint[] = [];

    try {
      for (const line of lines) {
        const [addr, amt] = line.split(',').map((s: string) => s.trim());
        
        if (!addr || !amt) {
          throw new Error(`Formato inválido en línea: ${line}. Debe ser: dirección,cantidad`);
        }
        
        // Validar dirección
        if (!addr.match(/^0x[a-fA-F0-9]{40}$/)) {
          throw new Error(`Dirección inválida: ${addr}`);
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
      
      // Codificar los datos de la transacción usando PushChain.utils
      const data = PushChain.utils.helpers.encodeTxData({
        abi: sprayAbi,
        functionName: isToken ? 'sprayToken' : 'sprayEther',
        args: isToken
          ? [tokenAddr, to, amounts]
          : [to, amounts],
      }) as `0x${string}`;

      console.log('Sending transaction...');
      console.log('Transaction details:', {
        to: sprayContractAddress,
        value: totalValue.toString(),
        data: data,
      });
      
      // Enviar la transacción usando el patrón del Universal Counter App
      const tx = await pushChainClient.universal.sendTransaction({
        to: sprayContractAddress,
        value: totalValue,
        data,
      });

      // Esperar a que mine la transacción
      await tx.wait();
      
      console.log('Transaction successful:', { tx });
      alert(`¡Éxito! TxHash: ${tx.hash}`);
      
      // Limpiar el formulario después del éxito
      setInput('');
      setTokenAddr('');
    } catch (err) {
      console.error('Error en la transacción:', err);
      alert(`Error al enviar la transacción: ${err instanceof Error ? err.message : 'Error desconocido'}`);
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
          {loading ? 'Enviando…' : 'Spray'}
        </button>
      </div>
      
      {/* Debug Info - Solo mostrar en desarrollo */}
      {process.env.NODE_ENV === 'development' && <DebugInfo />}
    </div>
  );
}
