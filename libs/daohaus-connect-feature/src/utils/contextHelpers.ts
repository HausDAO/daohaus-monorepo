import { ReactSetter } from '@daohaus/common-utilities';
import { SafeAppWeb3Modal } from '@gnosis.pm/safe-apps-web3modal';
import { providers } from 'ethers';

import { switchChainOnMetaMask } from './metamask';
import {
  ModalEvents,
  ModalOptions,
  WalletStateType,
  NetworkConfig,
} from './types';

export const numberToHex = (number: number) => {
  return `0x${number.toString(16)}`;
};
export const getModal = () => {
  const modal = new SafeAppWeb3Modal();
  return modal;
};
export const isMetamaskProvider = (
  provider: providers.Web3Provider | undefined | null
) => provider?.connection?.url === 'metamask';
export const defaultWalletValues = {
  provider: null,
  chainId: null,
  address: null,
  connectWallet: async () => undefined,
  disconnect: () => undefined,
  isConnecting: true,
  isConnected: false,
  isMetamask: false,
  networks: {},
  switchNetwork: () => undefined,
};
export const handleSetProvider = async ({
  provider,
  networks,
  defaultChainId,
  handleModalEvents,
  setWalletState,
}: {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  provider: any;
  networks: NetworkConfig;
  defaultChainId: string;
  handleModalEvents?: ModalEvents;
  setWalletState: ReactSetter<WalletStateType>;
}) => {
  const ethersProvider = new providers.Web3Provider(provider);
  let chainId: string =
    typeof provider.chainId === 'number'
      ? numberToHex(provider.chainId)
      : provider.chainId;

  if (!networks[chainId]) {
    if (!defaultChainId) {
      handleModalEvents &&
        handleModalEvents('error', {
          code: 'UNSUPPORTED_NETWORK',
          message: `Network not supported, please switch to one of the supported networks`,
        });
      return;
    }
    const success =
      isMetamaskProvider(ethersProvider) &&
      (await switchChainOnMetaMask(networks, defaultChainId));
    if (!success) {
      handleModalEvents &&
        handleModalEvents('error', {
          code: 'UNSUPPORTED_NETWORK',
          message: `Network not supported, please switch to ${networks[defaultChainId].name}`,
        });
      return;
    }
    chainId = defaultChainId;
  }

  const signerAddress = await ethersProvider.getSigner().getAddress();
  setWalletState({
    provider: ethersProvider,
    chainId,
    address: signerAddress,
  });
};

export const handleConnectWallet = async ({
  setConnecting,
  handleModalEvents,
  setWalletProvider,
  networks,
  disconnect,
}: {
  setConnecting: ReactSetter<boolean>;
  handleModalEvents?: ModalEvents;
  networks: NetworkConfig;
  setWalletProvider: ReactSetter<WalletStateType>;
  disconnect: () => Promise<void>;
}) => {
  try {
    setConnecting(true);
    const modal = getModal();
    const modalProvider = await modal.requestProvider();
    await setWalletProvider(modalProvider);

    const _isGnosisSafe = await modal.isSafeApp();

    if (!_isGnosisSafe) {
      modalProvider.on('accountsChanged', () => {
        disconnect();
        handleModalEvents && handleModalEvents('accountsChanged');
      });
      modalProvider.on('chainChanged', () => {
        handleModalEvents && handleModalEvents('chainChanged');
        if (!networks[modalProvider.chainId]) {
          disconnect();
          handleModalEvents &&
            handleModalEvents('error', {
              code: 'UNSUPPORTED_NETWORK',
              message: `You have switched to an unsupported chain, Disconnecting from Metamask...`,
            });
        }
        setWalletProvider(modalProvider);
      });
    }
  } catch (web3Error) {
    console.error(web3Error);
    disconnect();
  } finally {
    setConnecting(false);
  }
};

export const loadWallet = async ({
  connectWallet,
  setConnecting,
  web3modalOptions,
}: {
  connectWallet: () => Promise<void>;
  setConnecting: ReactSetter<boolean>;
  web3modalOptions: ModalOptions;
}) => {
  const isMetamaskUnlocked =
    (await window.ethereum?._metamask?.isUnlocked?.()) ?? false;
  const modal = getModal();
  const _isGnosisSafe = await modal.isSafeApp();

  if (isMetamaskUnlocked && (_isGnosisSafe || web3modalOptions.cacheProvider)) {
    await connectWallet();
  } else {
    setConnecting(false);
  }
};

export const loadProfile = async () => {
  // const haus = Haus.create(ENDPOINTS.RPC);
  // typecasting here. If this function is called, then address is string
  // const profile = await haus.profile.get(address as string);
};
export const handleSwitchNetwork = async (
  _chainId: string | number,
  networks: NetworkConfig
) => {
  const chainId: string =
    typeof _chainId === 'number' ? numberToHex(_chainId) : _chainId;
  if (!networks[chainId]) {
    throw new Error(`No network configuration for chainId: ${chainId}`);
  }
  if (!window.ethereum?.isMetaMask) {
    throw new Error('Switching chain is only supported in Metamask');
  }
  await switchChainOnMetaMask(networks, chainId);
};
