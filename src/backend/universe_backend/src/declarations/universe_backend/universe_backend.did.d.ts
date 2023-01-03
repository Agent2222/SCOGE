import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Metadata {
  'logo' : [] | [string],
  'name' : [] | [string],
  'created_at' : bigint,
  'upgraded_at' : bigint,
  'custodians' : Array<Principal>,
  'symbol' : [] | [string],
}
export type NftError = { 'UnauthorizedOperator' : null } |
  { 'SelfTransfer' : null } |
  { 'TokenNotFound' : null } |
  { 'UnauthorizedOwner' : null } |
  { 'NotFound' : null } |
  { 'SelfApprove' : null } |
  { 'OperatorNotFound' : null } |
  { 'ExistedNFT' : null } |
  { 'OwnerNotFound' : null } |
  { 'Other' : string };
export interface NftProperties {
  'xp' : bigint,
  'ownerText' : [] | [Array<string>],
  'data' : [] | [Uint8Array],
  'rank' : bigint,
  'ownerImage' : [] | [Uint8Array],
  'discoveredProgress' : [] | [number],
  'story' : [] | [string],
  'imageURI' : string,
  'progress' : bigint,
  'category' : string,
  'videoURI' : [] | [string],
  'linked' : [] | [boolean],
  'discovered' : [] | [Array<string>],
}
export type Result = { 'ok' : TokenMetadata } |
  { 'err' : NftError };
export type Result_1 = { 'ok' : Array<TokenMetadata> } |
  { 'err' : NftError };
export type Result_2 = { 'ok' : [] | [Principal] } |
  { 'err' : NftError };
export type Result_3 = { 'ok' : bigint } |
  { 'err' : NftError };
export interface Stats {
  'cycles' : bigint,
  'total_transactions' : bigint,
  'total_unique_holders' : bigint,
  'total_supply' : bigint,
}
export interface SupportedInterface {
  'Burn' : null,
  'Mint' : null,
  'Approval' : null,
  'TransactionHistory' : null,
}
export interface TokenMetadata {
  'transferred_at' : [] | [bigint],
  'transferred_by' : [] | [Principal],
  'owner' : [] | [Principal],
  'operator' : [] | [Principal],
  'approved_at' : [] | [bigint],
  'approved_by' : [] | [Principal],
  'properties' : Array<[string, NftProperties]>,
  'is_burned' : boolean,
  'token_identifier' : bigint,
  'burned_at' : [] | [bigint],
  'burned_by' : [] | [Principal],
  'minted_at' : bigint,
  'minted_by' : Principal,
}
export interface _SERVICE {
  'adminUser' : ActorMethod<[], string>,
  'balanceOf' : ActorMethod<[Principal], Result_3>,
  'custodians' : ActorMethod<[], Array<Principal>>,
  'cycles' : ActorMethod<[], bigint>,
  'logo' : ActorMethod<[], [] | [string]>,
  'metadata' : ActorMethod<[], Metadata>,
  'mint' : ActorMethod<
    [Principal, bigint, Array<[string, NftProperties]>],
    Result_3
  >,
  'name' : ActorMethod<[], [] | [string]>,
  'operatorOf' : ActorMethod<[bigint], Result_2>,
  'operatorTokenMetadata' : ActorMethod<[Principal], Result_1>,
  'ownerOf' : ActorMethod<[bigint], Result_2>,
  'ownerTokenMetadata' : ActorMethod<[Principal], Result_1>,
  'setCustodians' : ActorMethod<[Array<Principal>], undefined>,
  'setLogo' : ActorMethod<[string], undefined>,
  'setName' : ActorMethod<[string], undefined>,
  'setSymbol' : ActorMethod<[string], undefined>,
  'stats' : ActorMethod<[], Stats>,
  'supportedInterfaces' : ActorMethod<[], Array<SupportedInterface>>,
  'symbol' : ActorMethod<[], [] | [string]>,
  'tokenMetadata' : ActorMethod<[bigint], Result>,
  'totalSupply' : ActorMethod<[], bigint>,
  'totalUniqueHolders' : ActorMethod<[], bigint>,
}
