import { providers } from 'ethers';
import { createContext, useState, useMemo, useContext, ReactNode } from 'react';
import { isValidNetwork } from '@daohaus/common-utilities';
import { handleFireTx, TX, TxRecord } from '../utils/txBuilderUtils';

type TxContext = {
  transactions: TxRecord;
  txAmt: number;
  fireTransaction: (tx: TX) => void;
};

export const TxBuilderContext = createContext<TxContext>({
  transactions: {},
  fireTransaction: () => undefined,
  txAmt: 0,
});

type BuilderProps = {
  chainId: string | undefined | null;
  provider: providers.Web3Provider | undefined | null;
  children: ReactNode;
};

export const TXBuilder = ({ chainId, provider, children }: BuilderProps) => {
  const [transactions, setTransactions] = useState<TxRecord>({});
  const txAmt = useMemo(() => {
    return Object.values(transactions).length;
  }, [transactions]);

  async function fireTransaction(tx: TX) {
    if (!chainId || !isValidNetwork(chainId) || !provider) {
      tx?.lifeCycleFns?.onTxError?.(
        Error('Invalid Network or no Web3 Wallet detected')
      );
      return;
    }
    await handleFireTx({ tx, chainId, provider, setTransactions });
  }

  return (
    <TxBuilderContext.Provider value={{ transactions, fireTransaction, txAmt }}>
      {children}
    </TxBuilderContext.Provider>
  );
};
export const useTxBuilder = () => useContext(TxBuilderContext);
