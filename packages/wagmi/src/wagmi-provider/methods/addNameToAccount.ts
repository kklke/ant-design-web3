import type { Account } from '@ant-design/web3-common';
import { getEnsName } from '@wagmi/core';
import type { Config } from 'wagmi';

export async function addNameToAccount(
  config: Config,
  account: Account,
  chainId?: number,
): Promise<Account> {
  const name = await getEnsName(config, {
    address: account.address as `0x${string}`,
    chainId,
  });
  return {
    ...account,
    name: name ?? undefined,
  };
}
