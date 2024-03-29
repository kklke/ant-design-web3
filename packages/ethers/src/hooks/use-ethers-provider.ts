import { useMemo } from 'react';
import { FallbackProvider, JsonRpcProvider } from 'ethers-v6';
import type { Chain, Client, Transport } from 'viem';
import { useClient, type Config } from 'wagmi';

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === 'fallback') {
    const providers = (transport.transports as ReturnType<Transport>[]).map(
      ({ value }) => new JsonRpcProvider(value?.url, network),
    );
    if (providers.length === 1) return providers[0];
    return new FallbackProvider(providers);
  }
  return new JsonRpcProvider(transport.url, network);
}

export function useEthersProvider() {
  const client = useClient<Config>();
  return useMemo(() => (client ? clientToProvider(client) : null), [client]);
}
