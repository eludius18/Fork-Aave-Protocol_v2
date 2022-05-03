/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IPriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "getAssetPrice(address)": FunctionFragment;
    "setAssetPrice(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetPrice",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPriceOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPriceOracleInterface;

  functions: {
    getAssetPrice(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getAssetPrice(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setAssetPrice(
      asset: string,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAssetPrice(address,uint256)"(
      asset: string,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getAssetPrice(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setAssetPrice(
    asset: string,
    price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAssetPrice(address,uint256)"(
    asset: string,
    price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAssetPrice(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAssetPrice(
      asset: string,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAssetPrice(address,uint256)"(
      asset: string,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAssetPrice(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAssetPrice(
      asset: string,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAssetPrice(address,uint256)"(
      asset: string,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetPrice(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAssetPrice(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAssetPrice(
      asset: string,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAssetPrice(address,uint256)"(
      asset: string,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
