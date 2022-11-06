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
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface LibraryV2Interface extends ethers.utils.Interface {
  functions: {
    "addBook(bytes6,uint8)": FunctionFragment;
    "borrow(bytes6)": FunctionFragment;
    "getAvailableBooks()": FunctionFragment;
    "getBookHistory(bytes6)": FunctionFragment;
    "getFee()": FunctionFragment;
    "getStock(bytes6)": FunctionFragment;
    "hasBorrowed()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "returnBook()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addBook",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "borrow", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getAvailableBooks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBookHistory",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "getStock", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "hasBorrowed",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnBook",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addBook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableBooks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBookHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getStock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasBorrowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "returnBook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "BookBorrowed(bytes6,address)": EventFragment;
    "BookReturned(bytes6,address)": EventFragment;
    "NewBook(bytes6,uint8)": EventFragment;
    "NewDepositFallback(address)": EventFragment;
    "NewDepositReceive(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BookBorrowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BookReturned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewBook"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDepositFallback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDepositReceive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type BookBorrowedEvent = TypedEvent<
  [string, string],
  { _isbn: string; _address: string }
>;

export type BookBorrowedEventFilter = TypedEventFilter<BookBorrowedEvent>;

export type BookReturnedEvent = TypedEvent<
  [string, string],
  { _isbn: string; _address: string }
>;

export type BookReturnedEventFilter = TypedEventFilter<BookReturnedEvent>;

export type NewBookEvent = TypedEvent<
  [string, number],
  { _isbn: string; _qty: number }
>;

export type NewBookEventFilter = TypedEventFilter<NewBookEvent>;

export type NewDepositFallbackEvent = TypedEvent<
  [string],
  { _address: string }
>;

export type NewDepositFallbackEventFilter =
  TypedEventFilter<NewDepositFallbackEvent>;

export type NewDepositReceiveEvent = TypedEvent<[string], { _address: string }>;

export type NewDepositReceiveEventFilter =
  TypedEventFilter<NewDepositReceiveEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface LibraryV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibraryV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addBook(
      _isbn: BytesLike,
      _qty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrow(
      _isbn: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAvailableBooks(overrides?: CallOverrides): Promise<[string[]]>;

    getBookHistory(
      _isbn: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStock(_isbn: BytesLike, overrides?: CallOverrides): Promise<[number]>;

    hasBorrowed(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnBook(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBook(
    _isbn: BytesLike,
    _qty: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrow(
    _isbn: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAvailableBooks(overrides?: CallOverrides): Promise<string[]>;

  getBookHistory(
    _isbn: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getFee(overrides?: CallOverrides): Promise<BigNumber>;

  getStock(_isbn: BytesLike, overrides?: CallOverrides): Promise<number>;

  hasBorrowed(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnBook(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBook(
      _isbn: BytesLike,
      _qty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    borrow(_isbn: BytesLike, overrides?: CallOverrides): Promise<void>;

    getAvailableBooks(overrides?: CallOverrides): Promise<string[]>;

    getBookHistory(
      _isbn: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getFee(overrides?: CallOverrides): Promise<BigNumber>;

    getStock(_isbn: BytesLike, overrides?: CallOverrides): Promise<number>;

    hasBorrowed(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    returnBook(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BookBorrowed(bytes6,address)"(
      _isbn?: null,
      _address?: null
    ): BookBorrowedEventFilter;
    BookBorrowed(_isbn?: null, _address?: null): BookBorrowedEventFilter;

    "BookReturned(bytes6,address)"(
      _isbn?: null,
      _address?: null
    ): BookReturnedEventFilter;
    BookReturned(_isbn?: null, _address?: null): BookReturnedEventFilter;

    "NewBook(bytes6,uint8)"(_isbn?: null, _qty?: null): NewBookEventFilter;
    NewBook(_isbn?: null, _qty?: null): NewBookEventFilter;

    "NewDepositFallback(address)"(
      _address?: null
    ): NewDepositFallbackEventFilter;
    NewDepositFallback(_address?: null): NewDepositFallbackEventFilter;

    "NewDepositReceive(address)"(_address?: null): NewDepositReceiveEventFilter;
    NewDepositReceive(_address?: null): NewDepositReceiveEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addBook(
      _isbn: BytesLike,
      _qty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrow(
      _isbn: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAvailableBooks(overrides?: CallOverrides): Promise<BigNumber>;

    getBookHistory(
      _isbn: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFee(overrides?: CallOverrides): Promise<BigNumber>;

    getStock(_isbn: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    hasBorrowed(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnBook(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBook(
      _isbn: BytesLike,
      _qty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrow(
      _isbn: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAvailableBooks(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBookHistory(
      _isbn: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStock(
      _isbn: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasBorrowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnBook(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
