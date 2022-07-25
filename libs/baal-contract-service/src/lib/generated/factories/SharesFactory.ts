/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Shares } from "./Shares";

export class SharesFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Shares> {
    return super.deploy(overrides || {}) as Promise<Shares>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Shares {
    return super.attach(address) as Shares;
  }
  connect(signer: Signer): SharesFactory {
    return super.connect(signer) as SharesFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Shares {
    return new Contract(address, _abi, signerOrProvider) as Shares;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "baal",
    outputs: [
      {
        internalType: "contract IBaal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromTimeStamp",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nCheckpoints",
        type: "uint256",
      },
    ],
    name: "getCheckpoint",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromTimeStamp",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "votes",
            type: "uint256",
          },
        ],
        internalType: "struct Shares.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600881526754656d706c61746560c01b6020808301918252835180850190945260018452601560fa1b9084015281519192916200005b9160039162000212565b5080516200007190600490602084019062000212565b5050506000620000886001620000ef60201b60201c565b90508015620000a1576005805461ff0019166101001790555b8015620000e8576005805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50620002f5565b600554600090610100900460ff16156200018a578160ff1660011480156200012a575062000128306200020360201b62000b811760201c565b155b620001825760405162461bcd60e51b815260206004820152602e60248201526000805160206200226083398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b506000919050565b60055460ff808416911610620001e95760405162461bcd60e51b815260206004820152602e60248201526000805160206200226083398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000179565b506005805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b8280546200022090620002b8565b90600052602060002090601f0160209004810192826200024457600085556200028f565b82601f106200025f57805160ff19168380011785556200028f565b828001600101855582156200028f579182015b828111156200028f57825182559160200191906001019062000272565b506200029d929150620002a1565b5090565b5b808211156200029d5760008155600101620002a2565b600181811c90821680620002cd57607f821691505b60208210811415620002ef57634e487b7160e01b600052602260045260246000fd5b50919050565b611f5b80620003056000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063587cde1e116100c35780639dc29fac1161007c5780639dc29fac1461034f5780639fd5a6cf14610362578063a457c2d714610375578063a9059cbb14610388578063dd62ed3e1461039b578063e5a2a2a5146103ae57600080fd5b8063587cde1e146102a05780635c19a95c146102e15780636fcfff45146102f457806370a08231146103145780637ecebe001461032757806395d89b411461034757600080fd5b8063313ce56711610115578063313ce5671461020f578063395093511461021e57806340c10f191461023157806347f761f5146102465780634a9e3e131461027a578063562d190d1461028d57600080fd5b806306fdde0314610152578063095ea7b3146101705780630cdfebfa1461019357806318160ddd146101ea57806323b872dd146101fc575b600080fd5b61015a6103c1565b6040516101679190611d52565b60405180910390f35b61018361017e366004611b5f565b610453565b6040519015158152602001610167565b6101ce6101a1366004611b5f565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b6040805163ffffffff9093168352602083019190915201610167565b6002545b604051908152602001610167565b61018361020a366004611aab565b61046b565b60405160128152602001610167565b61018361022c366004611b5f565b6104ae565b61024461023f366004611b5f565b6104cb565b005b610259610254366004611b5f565b61051f565b60408051825163ffffffff1681526020928301519281019290925201610167565b610244610288366004611b89565b610571565b61024461029b366004611c13565b610762565b6102c96102ae366004611a56565b600a602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610167565b6102446102ef366004611a56565b61080b565b6101ee610302366004611a56565b60096020526000908152604090205481565b6101ee610322366004611a56565b610818565b6101ee610335366004611a56565b600b6020526000908152604090205481565b61015a610833565b61024461035d366004611b5f565b610842565b610244610370366004611ae7565b610876565b610183610383366004611b5f565b610acd565b610183610396366004611b5f565b610b48565b6101ee6103a9366004611a78565b610b56565b600c546102c9906001600160a01b031681565b6060600680546103d090611e88565b80601f01602080910402602001604051908101604052809291908181526020018280546103fc90611e88565b80156104495780601f1061041e57610100808354040283529160200191610449565b820191906000526020600020905b81548152906001019060200180831161042c57829003601f168201915b5050505050905090565b600033610461818585610b90565b5060019392505050565b6000610478848484610cb4565b60006104848533610b56565b905060001981146104a3576104a3853361049e8685611e71565b610b90565b506001949350505050565b6000336104618185856104c18383610b56565b61049e9190611e59565b600c546001600160a01b031633146104fe5760405162461bcd60e51b81526004016104f590611e3a565b60405180910390fd5b6002546001600160ff1b039082011161051b5761051b8282610e7c565b5050565b604080518082018252600080825260209182018190526001600160a01b0394909416845260088152818420928452918252918290208251808401909352805463ffffffff168352600101549082015290565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86660066040516105a39190611c77565b6040519081900381206105bd929146903090602001611d2e565b60408051808303601f1901815282825280516020918201207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf828501526001600160a01b038a16848401526060840189905260808085018990528351808603909101815260a085019093528251929091019190912090925090600090610649908490849060c001611d13565b60405160208183030381529060405280519060200120905060006106a586868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508693925050610f559050565b90506001600160a01b0381166106cd5760405162461bcd60e51b81526004016104f590611e16565b6001600160a01b0381166000908152600b6020526040902080546001810190915588146107255760405162461bcd60e51b8152602060048201526006602482015265216e6f6e636560d01b60448201526064016104f5565b86158061073157504287105b61074d5760405162461bcd60e51b81526004016104f590611da7565b610757818a610f79565b505050505050505050565b600061076e600161104b565b90508015610786576005805461ff0019166101001790555b600c80546001600160a01b0319163317905582516107ab9060069060208601906118d7565b5081516107bf9060079060208501906118d7565b508015610806576005805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b6108153382610f79565b50565b6001600160a01b031660009081526020819052604090205490565b6060600780546103d090611e88565b600c546001600160a01b0316331461086c5760405162461bcd60e51b81526004016104f590611e3a565b61051b82826110e1565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86660066040516108a89190611c77565b6040519081900381206108c2929146903090602001611d2e565b60408051808303601f1901815282825280516020918201206001600160a01b038b81166000818152600b85528581208054600181019091557f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c995880195909552948601528a1660608501526080840189905260a084019190915260c0830187905292509060e00160405160208183030381529060405280519060200120905060008282604051602001610976929190611d13565b60405160208183030381529060405280519060200120905060006109d286868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508693925050610f559050565b90506001600160a01b0381166109fa5760405162461bcd60e51b81526004016104f590611e16565b896001600160a01b0316816001600160a01b031614610a495760405162461bcd60e51b815260206004820152600b60248201526a08585d5d1a1bdc9a5e995960aa1b60448201526064016104f5565b50505083421115610a6c5760405162461bcd60e51b81526004016104f590611da7565b610a77878787610b90565b856001600160a01b0316876001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92587604051610abc91815260200190565b60405180910390a350505050505050565b60003381610adb8286610b56565b905083811015610b3b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104f5565b6104a38286868403610b90565b600033610461818585610cb4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03163b151590565b6001600160a01b038316610bf25760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104f5565b6001600160a01b038216610c535760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104f5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610d185760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104f5565b6001600160a01b038216610d7a5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104f5565b610d85838383611229565b6001600160a01b03831660009081526020819052604090205481811015610dfd5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104f5565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610e34908490611e59565b92505081905550826001600160a01b0316846001600160a01b0316600080516020611f0683398151915284604051610e6e91815260200190565b60405180910390a350505050565b6001600160a01b038216610ed25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104f5565b610ede60008383611229565b8060026000828254610ef09190611e59565b90915550506001600160a01b03821660009081526020819052604081208054839290610f1d908490611e59565b90915550506040518181526001600160a01b03831690600090600080516020611f068339815191529060200160405180910390a35050565b6000806000610f6485856113c0565b91509150610f7181611430565b509392505050565b6000610f8483610818565b11610fbb5760405162461bcd60e51b81526020600482015260076024820152662173686172657360c81b60448201526064016104f5565b6001600160a01b038083166000908152600a6020526040902080548383166001600160a01b031982161790915516610ffc8183610ff786610818565b6115e6565b816001600160a01b0316816001600160a01b0316846001600160a01b03167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4505050565b600554600090610100900460ff161561109b578160ff166001148015611077575061107530610b81565b155b6110935760405162461bcd60e51b81526004016104f590611dc8565b506000919050565b60055460ff8084169116106110c25760405162461bcd60e51b81526004016104f590611dc8565b506005805460ff191660ff92909216919091179055600190565b919050565b6001600160a01b0382166111415760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104f5565b61114d82600083611229565b6001600160a01b038216600090815260208190526040902054818110156111c15760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104f5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906111f0908490611e71565b90915550506040518281526000906001600160a01b03851690600080516020611f068339815191529060200160405180910390a3505050565b6001600160a01b038316158061125b5750600c546001600160a01b03163314801561125b57506001600160a01b038216155b806112eb5750600c60009054906101000a90046001600160a01b03166001600160a01b0316631c97cf3f6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156112b157600080fd5b505af11580156112c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e99190611bf1565b155b6113275760405162461bcd60e51b815260206004820152600d60248201526c217472616e7366657261626c6560981b60448201526064016104f5565b61133082610818565b15801561135357506001600160a01b038216600090815260096020526040902054155b801561135f5750600081115b1561138e576001600160a01b0382166000818152600a6020526040902080546001600160a01b03191690911790555b6001600160a01b038084166000908152600a6020526040808220548584168352912054610806929182169116836115e6565b6000808251604114156113f75760208301516040840151606085015160001a6113eb878285856116c8565b94509450505050611429565b82516040141561142157602083015160408401516114168683836117ab565b935093505050611429565b506000905060025b9250929050565b600081600481111561144457611444611ed9565b141561144d5750565b600181600481111561146157611461611ed9565b14156114aa5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b60448201526064016104f5565b60028160048111156114be576114be611ed9565b141561150c5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104f5565b600381600481111561152057611520611ed9565b14156115795760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104f5565b600481600481111561158d5761158d611ed9565b14156108155760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104f5565b816001600160a01b0316836001600160a01b03161415801561160757508015155b15610806576001600160a01b03831615611668576001600160a01b0383166000908152600960205260408120549081611641576000611653565b61164e856001840361051f565b602001515b9050828103611664868484846117e4565b5050505b6001600160a01b03821615610806576001600160a01b038216600090815260096020526040812054908161169d5760006116af565b6116aa846001840361051f565b602001515b90508281016116c0858484846117e4565b505050505050565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156116f557506000905060036117a2565b8460ff16601b1415801561170d57508460ff16601c14155b1561171e57506000905060046117a2565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611772573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661179b576000600192509250506117a2565b9150600090505b94509492505050565b6000806001600160ff1b038316816117c860ff86901c601b611e59565b90506117d6878288856116c8565b935093505050935093915050565b42831580159061180c57508063ffffffff16611803866001870361051f565b5163ffffffff16145b15611828578161181f866001870361051f565b6020015261188c565b60408051808201825263ffffffff838116825260208083018681526001600160a01b038a166000818152600884528681208b825284528681209551865463ffffffff1916951694909417855590516001948501558252600990529190912090850190555b60408051848152602081018490526001600160a01b038716917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a25050505050565b8280546118e390611e88565b90600052602060002090601f016020900481019282611905576000855561194b565b82601f1061191e57805160ff191683800117855561194b565b8280016001018555821561194b579182015b8281111561194b578251825591602001919060010190611930565b5061195792915061195b565b5090565b5b80821115611957576000815560010161195c565b80356001600160a01b03811681146110dc57600080fd5b60008083601f84011261199957600080fd5b50813567ffffffffffffffff8111156119b157600080fd5b60208301915083602082850101111561142957600080fd5b600082601f8301126119da57600080fd5b813567ffffffffffffffff808211156119f5576119f5611eef565b604051601f8301601f19908116603f01168101908282118183101715611a1d57611a1d611eef565b81604052838152866020858801011115611a3657600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060208284031215611a6857600080fd5b611a7182611970565b9392505050565b60008060408385031215611a8b57600080fd5b611a9483611970565b9150611aa260208401611970565b90509250929050565b600080600060608486031215611ac057600080fd5b611ac984611970565b9250611ad760208501611970565b9150604084013590509250925092565b60008060008060008060a08789031215611b0057600080fd5b611b0987611970565b9550611b1760208801611970565b94506040870135935060608701359250608087013567ffffffffffffffff811115611b4157600080fd5b611b4d89828a01611987565b979a9699509497509295939492505050565b60008060408385031215611b7257600080fd5b611b7b83611970565b946020939093013593505050565b600080600080600060808688031215611ba157600080fd5b611baa86611970565b94506020860135935060408601359250606086013567ffffffffffffffff811115611bd457600080fd5b611be088828901611987565b969995985093965092949392505050565b600060208284031215611c0357600080fd5b81518015158114611a7157600080fd5b60008060408385031215611c2657600080fd5b823567ffffffffffffffff80821115611c3e57600080fd5b611c4a868387016119c9565b93506020850135915080821115611c6057600080fd5b50611c6d858286016119c9565b9150509250929050565b600080835481600182811c915080831680611c9357607f831692505b6020808410821415611cb357634e487b7160e01b86526022600452602486fd5b818015611cc75760018114611cd857611d05565b60ff19861689528489019650611d05565b60008a81526020902060005b86811015611cfd5781548b820152908501908301611ce4565b505084890196505b509498975050505050505050565b61190160f01b81526002810192909252602282015260420190565b938452602084019290925260408301526001600160a01b0316606082015260800190565b600060208083528351808285015260005b81811015611d7f57858101830151858201604001528201611d63565b81811115611d91576000604083870101525b50601f01601f1916929092016040019392505050565b602080825260079082015266195e1c1a5c995960ca1b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252600a9082015269217369676e61746f727960b01b604082015260600190565b602080825260059082015264042c2eae8d60db1b604082015260600190565b60008219821115611e6c57611e6c611ec3565b500190565b600082821015611e8357611e83611ec3565b500390565b600181811c90821680611e9c57607f821691505b60208210811415611ebd57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d72b5f20a86ebc8d2ac51bb36faff3aef16418f4052ce47992fa7e51181f61bb64736f6c63430008070033496e697469616c697a61626c653a20636f6e747261637420697320616c726561";