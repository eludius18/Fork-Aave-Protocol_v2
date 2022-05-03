/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LendingPoolCollateralManager } from "./LendingPoolCollateralManager";

export class LendingPoolCollateralManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingPoolCollateralManager> {
    return super.deploy(
      overrides || {}
    ) as Promise<LendingPoolCollateralManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolCollateralManager {
    return super.attach(address) as LendingPoolCollateralManager;
  }
  connect(signer: Signer): LendingPoolCollateralManagerFactory {
    return super.connect(signer) as LendingPoolCollateralManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolCollateralManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolCollateralManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "principal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidatedCollateralAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "receiveAToken",
        type: "bool",
      },
    ],
    name: "LiquidationCall",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ReserveUsedAsCollateralDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ReserveUsedAsCollateralEnabled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "debtAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "receiveAToken",
        type: "bool",
      },
    ],
    name: "liquidationCall",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b506129ef806100246000396000f3fe608060405234801561001057600080fd5b506004361061002a5760003560e01c8062a718a91461002f575b600080fd5b610073600480360360a081101561004557600080fd5b506001600160a01b0381358116916020810135821691604082013516906060810135906080013515156100f2565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156100b657818101518382015260200161009e565b50505050905090810190601f1680156100e35780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6001600160a01b0380861660009081526035602090815260408083208885168452818420948816845260369092528220919260609261012f61274e565b6040805160208082018352845482526038546034548451631f94a27560e31b815294516101c1958f95603595909460379490936001600160a01b039091169263fca513a8926004808301939192829003018186803b15801561019057600080fd5b505afa1580156101a4573d6000803e3d6000fd5b505050506040513d60208110156101ba57600080fd5b5051610971565b610140860152506101d892508b9150859050610e37565b60408301819052602083018290526101408301516101fd928792879287929091610f3a565b6102008301526101e08201819052600090600981111561021957fe5b600981111561022457fe5b1461024257806101e001518161020001519550955050505050610967565b6004808501546001600160a01b039081166101808401819052604080516370a0823160e01b8152928d169383019390935291516370a0823191602480820192602092909190829003018186803b15801561029b57600080fd5b505afa1580156102af573d6000803e3d6000fd5b505050506040513d60208110156102c557600080fd5b50518152604081015160208201516102ea91611388916102e491611077565b906110da565b6060820181905288116102fd5787610303565b80606001515b60808201819052815161031e91869186918f918f91906111c4565b6101208301819052610100830191909152608082015111156103465761012081015160808201525b866104085760008b6001600160a01b03166370a082318361018001516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561039f57600080fd5b505afa1580156103b3573d6000803e3d6000fd5b505050506040513d60208110156103c957600080fd5b505161010083015190915081101561040657600560405180604001604052806002815260200161343560f01b815250965096505050505050610967565b505b6104118361143d565b80608001518160400151106104b45760068301546080820151600185015460408051637a94c56560e11b81526001600160a01b038e811660048301526024820194909452600160801b9092046001600160801b0316604483015251919092169163f5298aca91606480830192600092919082900301818387803b15801561049757600080fd5b505af11580156104ab573d6000803e3d6000fd5b505050506105d8565b60408101511561054d57600683015460408281015160018601548251637a94c56560e11b81526001600160a01b038e811660048301526024820193909352600160801b9091046001600160801b03166044820152915192169163f5298aca9160648082019260009290919082900301818387803b15801561053457600080fd5b505af1158015610548573d6000803e3d6000fd5b505050505b6005830154604082015160808301516001600160a01b0390921691639dc29fac918c9161057991611507565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156105bf57600080fd5b505af11580156105d3573d6000803e3d6000fd5b505050505b600483015460808201516105fb9185918d916001600160a01b0316906000611549565b8615610777578061018001516001600160a01b03166370a08231336040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561065357600080fd5b505afa158015610667573d6000803e3d6000fd5b505050506040513d602081101561067d57600080fd5b50516101608201526101808101516101008201516040805163f866c31960e01b81526001600160a01b038d8116600483015233602483015260448201939093529051919092169163f866c31991606480830192600092919082900301818387803b1580156106ea57600080fd5b505af11580156106fe573d6000803e3d6000fd5b505050508061016001516000141561077257336000908152603660205260409020600785015461073b908290600160a01b900460ff16600161197c565b60405133906001600160a01b038e16907e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f290600090a3505b61082f565b6107808461143d565b61018081015161010082015161079d9186918e9190600090611549565b610180810151610100820151600186015460408051636b81068560e11b81526001600160a01b038e8116600483015233602483015260448201949094526001600160801b03909216606483015251919092169163d7020d0a91608480830192600092919082900301818387803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b505050505b8051610100820151141561089a576007840154610859908390600160a01b900460ff16600061197c565b886001600160a01b03168b6001600160a01b03167f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd60405160405180910390a35b600483015460808201516108c0916001600160a01b038d81169233929190911690611a20565b886001600160a01b03168a6001600160a01b03168c6001600160a01b03167fe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e0052868460800151856101000151338d60405180858152602001848152602001836001600160a01b03168152602001821515815260200194505050505060405180910390a46000604051806040016040528060028152602001611a1b60f11b81525095509550505050505b9550959350505050565b60008060008060006109816127e8565b61098a8a611a80565b156109a8576000806000806000199550955095509550955050610e29565b600060e08201525b878160e001511015610d885760e08101516109cc908b90611a85565b6109d557610d78565b60e0810151600090815260208a81526040808320546001600160a01b03166101e085018190528352908d90529020610a0c81611b04565b506080860181905260c08601929092525060a0840191909152600a0a6020808401919091526101e08301516040805163b3596f0760e01b81526001600160a01b0392831660048201529051918b169263b3596f0792602480840193829003018186803b158015610a7b57600080fd5b505afa158015610a8f573d6000803e3d6000fd5b505050506040513d6020811015610aa557600080fd5b5051825260c082015115801590610ac7575060e0820151610ac7908c90611b2f565b15610be8578060040160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610b3057600080fd5b505afa158015610b44573d6000803e3d6000fd5b505050506040513d6020811015610b5a57600080fd5b50516040830181905260208301518351600092610b819291610b7b91611bb5565b90611c0e565b610120840151909150610b949082611077565b61012084015260a0830151610bba90610bae908390611bb5565b61016085015190611077565b61016084015260c0830151610be090610bd4908390611bb5565b61018085015190611077565b610180840152505b60e0820151610bf8908c90611c50565b15610d76578060050160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610c6157600080fd5b505afa158015610c75573d6000803e3d6000fd5b505050506040513d6020811015610c8b57600080fd5b8101908080519060200190929190505050826060018181525050610d438160060160009054906101000a90046001600160a01b03166001600160a01b03166370a082318f6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610d0c57600080fd5b505afa158015610d20573d6000803e3d6000fd5b505050506040513d6020811015610d3657600080fd5b5051606084015190611077565b6060830181905260208301518351610d6f92610d639291610b7b91611bb5565b61014084015190611077565b6101408301525b505b60e08101805160010190526109b0565b600081610120015111610d9c576000610db1565b610120810151610160820151610db191611c0e565b610160820152610120810151610dc8576000610ddd565b610120810151610180820151610ddd91611c0e565b6101808201819052610120820151610140830151610dfa92611ccf565b610100820181905261012082015161014083015161016084015161018090940151919850965091945090925090505b965096509650965096915050565b6005810154604080516370a0823160e01b81526001600160a01b0385811660048301529151600093849316916370a08231916024808301926020929190829003018186803b158015610e8857600080fd5b505afa158015610e9c573d6000803e3d6000fd5b505050506040513d6020811015610eb257600080fd5b50516006840154604080516370a0823160e01b81526001600160a01b038881166004830152915191909216916370a08231916024808301926020929190829003018186803b158015610f0357600080fd5b505afa158015610f17573d6000803e3d6000fd5b505050506040513d6020811015610f2d57600080fd5b5051909590945092505050565b60006060610f4788611cfd565b1580610f595750610f5787611cfd565b155b15610f805750506040805180820190915260018152601960f91b602082015260069061106c565b670de0b6b3a76400008510610fb25750506040805180820190915260028152611a1960f11b602082015260049061106c565b600080610fbe8a611d0d565b118015610fed57506007890154604080516020810190915288548152610fed91600160a01b900460ff16611b2f565b90508061101757505060408051808201909152600280825261343360f01b6020830152915061106c565b84158015611023575083155b1561104c5750506040805180820190915260028152610d0d60f21b60208201526003915061106c565b50506040805180820190915260028152611a1b60f11b6020820152600091505b965096945050505050565b6000828201838110156110d1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b60008215806110e7575081155b156110f4575060006110d4565b81611388198161110057fe5b0483111560405180604001604052806002815260200161068760f31b815250906111a85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561116d578181015183820152602001611155565b50505050905090810190601f16801561119a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506127106002815b0483850201816111bc57fe5b049392505050565b6000806000806000603460009054906101000a90046001600160a01b03166001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b15801561121a57600080fd5b505afa15801561122e573d6000803e3d6000fd5b505050506040513d602081101561124457600080fd5b50519050611250612882565b816001600160a01b031663b3596f078b6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561129d57600080fd5b505afa1580156112b1573d6000803e3d6000fd5b505050506040513d60208110156112c757600080fd5b5051604080830191909152805163b3596f0760e01b81526001600160a01b038b8116600483015291519184169163b3596f0791602480820192602092909190829003018186803b15801561131a57600080fd5b505afa15801561132e573d6000803e3d6000fd5b505050506040513d602081101561134457600080fd5b505160608201526113548c611b04565b5060c085015260208401525061136b90508b611d18565b60a0820181905260408201516113b8916113889190600a0a611bb5565b610b7b83602001516102e48560c00151600a0a6113b28e8860600151611bb590919063ffffffff16565b90611bb5565b608082018190528710156114215786935061141a81602001516114146113f28460c00151600a0a8560600151611bb590919063ffffffff16565b610b7b8560a00151600a0a6113b28a8860400151611bb590919063ffffffff16565b90611d22565b925061142c565b806080015193508792505b50919a909950975050505050505050565b60068101546040805163b1bf962d60e01b815290516000926001600160a01b03169163b1bf962d916004808301926020929190829003018186803b15801561148457600080fd5b505afa158015611498573d6000803e3d6000fd5b505050506040513d60208110156114ae57600080fd5b505160018301546003840154919250600160801b8082046001600160801b03908116939216910464ffffffffff166000806114ec8787868887611e15565b915091506114fe878787858588611fce565b50505050505050565b60006110d183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506121b7565b6115516128bf565b60058601546001600160a01b031680825260408051637b98f4df60e11b8152815163f731e9be92600480840193919291829003018186803b15801561159557600080fd5b505afa1580156115a9573d6000803e3d6000fd5b505050506040513d60408110156115bf57600080fd5b50805160209182015160c084015260408084019190915260018801546006890154825163b1bf962d60e01b8152925161166394600160801b9093046001600160801b0316936001600160a01b039092169263b1bf962d9260048082019391829003018186803b15801561163157600080fd5b505afa158015611645573d6000803e3d6000fd5b505050506040513d602081101561165b57600080fd5b505190612211565b60e082018190526007870154604083015160c08401516001600160a01b03909216926329db497d928992899289928992919061169e8f6122c2565b6040518963ffffffff1660e01b815260040180896001600160a01b03168152602001886001600160a01b031681526020018781526020018681526020018581526020018481526020018381526020018281526020019850505050505050505060606040518083038186803b15801561171557600080fd5b505afa158015611729573d6000803e3d6000fd5b505050506040513d606081101561173f57600080fd5b50805160208083015160409384015160a086015260808501526060840182905282518084019093526002835261353360f01b908301526001600160801b0310156117ca5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b506080810151604080518082019091526002815261353560f01b6020820152906001600160801b03101561183f5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b5060a08101516040805180820190915260028152610d4d60f21b6020820152906001600160801b0310156118b45760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b5060608181015160028801805460808086015160038c0180546001600160801b03199081166001600160801b038085169190911790925560a0808a015191909516828816178216600160801b82841681029190911790965560018e01546040805198895260208901949094528784019190915280821697870197909752939095049092169183019190915291516001600160a01b038816927f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a928290030190a2505050505050565b604080518082019091526002815261373760f01b6020820152608083106119e45760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b5081600202600101816119f85760006119fb565b60015b60ff16901b826002026001016001901b19846000015416178360000181905550505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052611a7a9085906122cd565b50505050565b511590565b60006080821060405180604001604052806002815260200161373760f01b81525090611af25760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b50509051600360029092021c16151590565b5461ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b60006080821060405180604001604052806002815260200161373760f01b81525090611b9c5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b5050815160016002830281019190911c16151592915050565b600082611bc4575060006110d4565b82820282848281611bd157fe5b04146110d15760405162461bcd60e51b815260040180806020018281038252602181526020018061296f6021913960400191505060405180910390fd5b60006110d183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612485565b60006080821060405180604001604052806002815260200161373760f01b81525090611cbd5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b50509051600160029092021c16151590565b600082611cdf5750600019611cf6565b611cf383611ced86856110da565b906124ea565b90505b9392505050565b5467010000000000000016151590565b5460101c61ffff1690565b5460301c60ff1690565b604080518082019091526002815261035360f41b602082015260009082611d8a5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b5060408051808201909152600280825261068760f31b6020830152830490612710821904851115611dfc5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b50828161271086020181611e0c57fe5b04949350505050565b600285015460009081906001600160801b031685858215611f9f576000611e3c84886125e0565b9050611e48818a612211565b604080518082019091526002815261353160f01b60208201529093506001600160801b03841115611eba5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b5060018b0180546001600160801b0319166001600160801b0385161790558915611f9d5760028b0154600090611f0090600160801b90046001600160801b031689612626565b9050611f0c818a612211565b6040805180820190915260028152611a9960f11b60208201529093506001600160801b03841115611f7e5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b505060018b0180546001600160801b03808516600160801b0291161790555b505b600399909901805464ffffffffff60801b1916600160801b4264ffffffffff1602179055989650505050505050565b611fd661290d565b611fdf876122c2565b6101208201819052611ff157506121af565b8660050160009054906101000a90046001600160a01b03166001600160a01b031663797743386040518163ffffffff1660e01b815260040160806040518083038186803b15801561204157600080fd5b505afa158015612055573d6000803e3d6000fd5b505050506040513d608081101561206b57600080fd5b508051602080830151604084015160609094015164ffffffffff1661014086015260a0850193909352918352908201526120a58686612211565b60808201526120b48684612211565b606082015260a08101516101408201516120d6919064ffffffffff851661262f565b60c0820181905260208201516120eb91612211565b6040820181905260808201518251606084015161211693926121109290918391611077565b90611507565b60e0820181905261012082015161212d91906110da565b6101008201819052156114fe5760048088015461010083015160408051637df5bd3b60e01b81529384019190915260248301879052516001600160a01b0390911691637df5bd3b91604480830192600092919082900301818387803b15801561219557600080fd5b505af11580156121a9573d6000803e3d6000fd5b50505050505b505050505050565b600081848411156122095760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b505050900390565b600082158061221e575081155b1561222b575060006110d4565b816b019d971e4fe8401e74000000198161224157fe5b0483111560405180604001604052806002815260200161068760f31b815250906122ac5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b506b033b2e3c9fd0803ce80000006002816111b0565b5460401c61ffff1690565b6122df826001600160a01b0316612705565b612330576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b6020831061236e5780518252601f19909201916020918201910161234f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146123d0576040519150601f19603f3d011682016040523d82523d6000602084013e6123d5565b606091505b50915091508161242c576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115611a7a5780806020019051602081101561244857600080fd5b5051611a7a5760405162461bcd60e51b815260040180806020018281038252602a815260200180612990602a913960400191505060405180910390fd5b600081836124d45760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b5060008385816124e057fe5b0495945050505050565b604080518082019091526002815261035360f41b6020820152600090826125525760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b5060408051808201909152600280825261068760f31b6020830152830490670de0b6b3a76400008219048511156125ca5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561116d578181015183820152602001611155565b508281670de0b6b3a764000086020181611e0c57fe5b6000806125f44264ffffffffff8516611507565b905061261e61260161273e565b6301e133806126108785611bb5565b8161261757fe5b0490611077565b949350505050565b60006110d18383425b6000806126438364ffffffffff8616611507565b90508061265a5761265261273e565b915050611cf6565b6000198101600060028311612670576000612675565b600283035b90506301e133808704600061268a8280612211565b905060006126988284612211565b9050600060026126ac846113b28a8a611bb5565b816126b357fe5b049050600060066126ca846113b289818d8d611bb5565b816126d157fe5b0490506126f5816126ef84816126e78a8e611bb5565b6126ef61273e565b90611077565b9c9b505050505050505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061261e575050151592915050565b6b033b2e3c9fd0803ce800000090565b60405180610220016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600060028111156127d457fe5b815260200160008152602001606081525090565b604051806102400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600064ffffffffff168152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220a6917930f400cbd9d4acee0275b6f05aeb05720b406dda669229665efceb5ca364736f6c634300060c0033";
