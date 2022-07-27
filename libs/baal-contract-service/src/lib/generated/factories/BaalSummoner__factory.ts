/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type { BaalSummoner, BaalSummonerInterface } from '../BaalSummoner';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_template',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_gnosisSingleton',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_gnosisFallbackLibrary',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_gnosisMultisendLibrary',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_gnosisSafeProxyFactory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_moduleProxyFactory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_lootSingleton',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_sharesSingleton',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'proxy',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'masterCopy',
        type: 'address',
      },
    ],
    name: 'ModuleProxyCreation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'baal',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'loot',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'shares',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'safe',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'existingSafe',
        type: 'bool',
      },
    ],
    name: 'SummonBaal',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'masterCopy',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'initializer',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'saltNonce',
        type: 'uint256',
      },
    ],
    name: 'deployModule',
    outputs: [
      {
        internalType: 'address',
        name: 'proxy',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: '_calls',
        type: 'bytes[]',
      },
      {
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
    ],
    name: 'encodeMultisend',
    outputs: [
      {
        internalType: 'bytes',
        name: 'encodedMultisend',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gnosisFallbackLibrary',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gnosisMultisendLibrary',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gnosisSingleton',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lootSingleton',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sharesSingleton',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'initializationParams',
        type: 'bytes',
      },
      {
        internalType: 'bytes[]',
        name: 'initializationActions',
        type: 'bytes[]',
      },
      {
        internalType: 'uint256',
        name: '_saltNonce',
        type: 'uint256',
      },
    ],
    name: 'summonBaal',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'initializationParams',
        type: 'bytes',
      },
      {
        internalType: 'bytes[]',
        name: 'initializationActions',
        type: 'bytes[]',
      },
      {
        internalType: 'uint256',
        name: '_saltNonce',
        type: 'uint256',
      },
    ],
    name: 'summonBaalAndSafe',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'template',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x6101406040523480156200001257600080fd5b5060405162001791380380620017918339810160408190526200003591620000a2565b6001600160601b0319606098891b811660805296881b871660a05294871b861660c05292861b851660e052600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055831b82166101005290911b16610120526200017c565b600080600080600080600080610100898b031215620000c057600080fd5b8851620000cd8162000163565b60208a0151909850620000e08162000163565b60408a0151909750620000f38162000163565b60608a0151909650620001068162000163565b60808a0151909550620001198162000163565b60a08a01519094506200012c8162000163565b60c08a01519093506200013f8162000163565b60e08a0151909250620001528162000163565b809150509295985092959890939650565b6001600160a01b03811681146200017957600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205160601c611568620002296000396000818161014d0152818161032e015261066e0152600081816101a70152818161030d015261064d0152600081816101260152818161034f0152818161068f0152610c6c0152600081816101ce0152610c9001526000818160a80152610ad101526000818160ff0152818161027201526105a401526115686000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063ad9d9a1211610066578063ad9d9a121461016f578063d61f27ae14610182578063d9118ce7146101a2578063f0fa28b9146101c9578063f1ab873c146101f057600080fd5b806321d56a43146100a35780634a8b0b32146100e75780636f2ddd93146100fa578063881e4ea414610121578063a234661814610148575b600080fd5b6100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100ca6100f5366004611017565b610203565b6100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6100ca61017d366004611017565b61053a565b610195610190366004610fb2565b61087a565b6040516100de91906113d7565b6100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6100ca6101fe366004610f5a565b610941565b6000808080610214888a018a611146565b6040805160048082526024820183526020820180516001600160e01b0316632d77bef360e11b1790526001549251633c6ae1cf60e21b815295985093965091945090926000926001600160a01b039092169163f1ab873c9161029c917f00000000000000000000000000000000000000000000000000000000000000009187918d91016112bb565b602060405180830381600087803b1580156102b657600080fd5b505af11580156102ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ee9190610f36565b905060006103056102ff8a8c611488565b8361087a565b9050600086867f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000898760405160200161038697969594939291906113ea565b60408051601f198184030181529082905263a4f9edbf60e01b825291506001600160a01b0384169063a4f9edbf906103c29084906004016113d7565b600060405180830381600087803b1580156103dc57600080fd5b505af11580156103f0573d6000803e3d6000fd5b50505050826001600160a01b0316638009ba1f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561042d57600080fd5b505afa158015610441573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104659190610f36565b6001600160a01b0316836001600160a01b031663f460124d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104a757600080fd5b505afa1580156104bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104df9190610f36565b604080516001600160a01b03898116825260016020830152928316928716917f211ecb4ba40076c0ce1a21fd90fea438543486baf1b8741ec26cba8138aee0d9910160405180910390a450909b9a5050505050505050505050565b6000808061054a878901896110e3565b6040805160048082526024820183526020820180516001600160e01b0316632d77bef360e11b1790526001549251633c6ae1cf60e21b8152949650929450926000926001600160a01b039092169163f1ab873c916105ce917f00000000000000000000000000000000000000000000000000000000000000009187918c91016112bb565b602060405180830381600087803b1580156105e857600080fd5b505af11580156105fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106209190610f36565b9050600061062e8288610a8d565b9050600061064561063f8a8c611488565b8461087a565b9050600086867f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000087876040516020016106c697969594939291906113ea565b60408051601f198184030181529082905263a4f9edbf60e01b825291506001600160a01b0385169063a4f9edbf906107029084906004016113d7565b600060405180830381600087803b15801561071c57600080fd5b505af1158015610730573d6000803e3d6000fd5b50505050836001600160a01b0316638009ba1f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561076d57600080fd5b505afa158015610781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a59190610f36565b6001600160a01b0316846001600160a01b031663f460124d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107e757600080fd5b505afa1580156107fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081f9190610f36565b604080516001600160a01b03878116825260006020830152928316928816917f211ecb4ba40076c0ce1a21fd90fea438543486baf1b8741ec26cba8138aee0d9910160405180910390a450919b9a5050505050505050505050565b60608060005b84518110156108fd578160008560008885815181106108a1576108a16114ee565b6020026020010151518986815181106108bc576108bc6114ee565b60200260200101516040516020016108d996959493929190611205565b604051602081830303815290604052915080806108f5906114c5565b915050610880565b508060405160240161090f91906113d7565b60408051601f198184030181529190526020810180516001600160e01b03166346c07f8560e11b179052949350505050565b60006109858484805190602001208460405160200161096a929190918252602082015260400190565b60405160208183030381529060405280519060200120610cfd565b90506000816001600160a01b0316846040516109a191906111e9565b6000604051808303816000865af19150503d80600081146109de576040519150601f19603f3d011682016040523d82523d6000602084013e6109e3565b606091505b5050905080610a455760405162461bcd60e51b815260206004820152602360248201527f6465706c6f794d6f64756c653a20696e697469616c697a6174696f6e206661696044820152621b195960ea1b60648201526084015b60405180910390fd5b846001600160a01b0316826001600160a01b03167f2150ada912bf189ed721c44211199e270903fc88008c2a1e1e889ef30fe67c5f60405160405180910390a3509392505050565b6000805460408051602080820186905282518083039091018152818301928390526361b69abd60e01b90925283926001600160a01b0316916361b69abd91610af9917f0000000000000000000000000000000000000000000000000000000000000000916044016112ef565b602060405180830381600087803b158015610b1357600080fd5b505af1158015610b27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4b9190610f36565b6040516001600160a01b038616602482015290915060009060440160408051601f19818403018152918152602080830180516001600160e01b031663610b592560e01b17905282519151929350600092610bae928492879284929188910161126a565b6040516020818303038152906040529050600081604051602401610bd291906113d7565b60408051601f19818403018152918152602080830180516001600160e01b03166346c07f8560e11b17905281516001808252818401909352929350600092919082810190803683370190505090508781600081518110610c3457610c346114ee565b6001600160a01b03928316602091820292909201015260405163b63e800d60e01b81529086169063b63e800d90610cbf9084906001907f00000000000000000000000000000000000000000000000000000000000000009088907f0000000000000000000000000000000000000000000000000000000000000000906000908190819060040161131b565b600060405180830381600087803b158015610cd957600080fd5b505af1158015610ced573d6000803e3d6000fd5b50969a9950505050505050505050565b60006001600160a01b038316610d615760405162461bcd60e51b8152602060048201526024808201527f63726561746550726f78793a20616464726573732063616e206e6f74206265206044820152637a65726f60e01b6064820152608401610a3c565b60405172602d8060093d393df3363d3d373d3d3d363d7360681b60208201526bffffffffffffffffffffffff19606085901b1660338201526e5af43d82803e903d91602b57fd5bf360881b60478201526000906056016040516020818303038152906040529050828151602083016000f591506001600160a01b038216610e355760405162461bcd60e51b815260206004820152602260248201527f63726561746550726f78793a206164647265737320616c72656164792074616b60448201526132b760f11b6064820152608401610a3c565b5092915050565b60006001600160401b0380841115610e5657610e56611504565b8360051b6020610e67818301611458565b868152935080840185838101891015610e7f57600080fd5b60009350835b88811015610eba57813586811115610e9b578586fd5b610ea78b828b01610ec7565b8452509183019190830190600101610e85565b5050505050509392505050565b600082601f830112610ed857600080fd5b81356001600160401b03811115610ef157610ef1611504565b610f04601f8201601f1916602001611458565b818152846020838601011115610f1957600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610f4857600080fd5b8151610f538161151a565b9392505050565b600080600060608486031215610f6f57600080fd5b8335610f7a8161151a565b925060208401356001600160401b03811115610f9557600080fd5b610fa186828701610ec7565b925050604084013590509250925092565b60008060408385031215610fc557600080fd5b82356001600160401b03811115610fdb57600080fd5b8301601f81018513610fec57600080fd5b610ffb85823560208401610e3c565b925050602083013561100c8161151a565b809150509250929050565b60008060008060006060868803121561102f57600080fd5b85356001600160401b038082111561104657600080fd5b818801915088601f83011261105a57600080fd5b81358181111561106957600080fd5b89602082850101111561107b57600080fd5b60209283019750955090870135908082111561109657600080fd5b818801915088601f8301126110aa57600080fd5b8135818111156110b957600080fd5b8960208260051b85010111156110ce57600080fd5b96999598505060200195604001359392505050565b600080604083850312156110f657600080fd5b82356001600160401b038082111561110d57600080fd5b61111986838701610ec7565b9350602085013591508082111561112f57600080fd5b5061113c85828601610ec7565b9150509250929050565b60008060006060848603121561115b57600080fd5b83356001600160401b038082111561117257600080fd5b61117e87838801610ec7565b9450602086013591508082111561119457600080fd5b506111a186828701610ec7565b92505060408401356111b28161151a565b809150509250925092565b600081518084526111d5816020860160208601611495565b601f01601f19169290920160200192915050565b600082516111fb818460208701611495565b9190910192915050565b60008751611217818460208c01611495565b808301905060ff60f81b8860f81b1681526001600160601b03198760601b166001820152856015820152846035820152835161125a816055840160208801611495565b0160550198975050505050505050565b60ff60f81b8660f81b1681526001600160601b03198560601b166001820152836015820152826035820152600082516112aa816055850160208701611495565b919091016055019695505050505050565b6001600160a01b03841681526060602082018190526000906112df908301856111bd565b9050826040830152949350505050565b6001600160a01b0383168152604060208201819052600090611313908301846111bd565b949350505050565b6101008082528951908201819052600090610120830190602090818d01845b8281101561135f5781516001600160a01b03168552938301939083019060010161133a565b50505083018a90526001600160a01b0389166040840152828103606084015261138881896111bd565b9150506113a060808301876001600160a01b03169052565b6001600160a01b03851660a08301528360c08301526113ca60e08301846001600160a01b03169052565b9998505050505050505050565b602081526000610f5360208301846111bd565b60e0815260006113fd60e083018a6111bd565b828103602084015261140f818a6111bd565b6001600160a01b03898116604086015288811660608601528781166080860152861660a085015283810360c0850152905061144a81856111bd565b9a9950505050505050505050565b604051601f8201601f191681016001600160401b038111828210171561148057611480611504565b604052919050565b6000610f53368484610e3c565b60005b838110156114b0578181015183820152602001611498565b838111156114bf576000848401525b50505050565b60006000198214156114e757634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461152f57600080fd5b5056fea2646970667358221220737921ff889217e129a2800aa244881df5edcaa5fd419bf25eb5782cef17250964736f6c63430008070033';

type BaalSummonerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaalSummonerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaalSummoner__factory extends ContractFactory {
  constructor(...args: BaalSummonerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _template: PromiseOrValue<string>,
    _gnosisSingleton: PromiseOrValue<string>,
    _gnosisFallbackLibrary: PromiseOrValue<string>,
    _gnosisMultisendLibrary: PromiseOrValue<string>,
    _gnosisSafeProxyFactory: PromiseOrValue<string>,
    _moduleProxyFactory: PromiseOrValue<string>,
    _lootSingleton: PromiseOrValue<string>,
    _sharesSingleton: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaalSummoner> {
    return super.deploy(
      _template,
      _gnosisSingleton,
      _gnosisFallbackLibrary,
      _gnosisMultisendLibrary,
      _gnosisSafeProxyFactory,
      _moduleProxyFactory,
      _lootSingleton,
      _sharesSingleton,
      overrides || {}
    ) as Promise<BaalSummoner>;
  }
  override getDeployTransaction(
    _template: PromiseOrValue<string>,
    _gnosisSingleton: PromiseOrValue<string>,
    _gnosisFallbackLibrary: PromiseOrValue<string>,
    _gnosisMultisendLibrary: PromiseOrValue<string>,
    _gnosisSafeProxyFactory: PromiseOrValue<string>,
    _moduleProxyFactory: PromiseOrValue<string>,
    _lootSingleton: PromiseOrValue<string>,
    _sharesSingleton: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _template,
      _gnosisSingleton,
      _gnosisFallbackLibrary,
      _gnosisMultisendLibrary,
      _gnosisSafeProxyFactory,
      _moduleProxyFactory,
      _lootSingleton,
      _sharesSingleton,
      overrides || {}
    );
  }
  override attach(address: string): BaalSummoner {
    return super.attach(address) as BaalSummoner;
  }
  override connect(signer: Signer): BaalSummoner__factory {
    return super.connect(signer) as BaalSummoner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaalSummonerInterface {
    return new utils.Interface(_abi) as BaalSummonerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaalSummoner {
    return new Contract(address, _abi, signerOrProvider) as BaalSummoner;
  }
}