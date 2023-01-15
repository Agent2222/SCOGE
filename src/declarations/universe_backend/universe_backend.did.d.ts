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
export interface NMCProperties {
  'xp' : [] | [bigint],
  'earthImage' : [] | [Uint8Array],
  'bankooText' : [] | [Array<string>],
  'mental' : [] | [bigint],
  'powerUps' : [] | [BigUint64Array],
  'styles' : [] | [Array<string>],
  'alias' : string,
  'notiOn' : [] | [boolean],
  'netClass' : [] | [string],
  'data' : [] | [Uint8Array],
  'fsOn' : [] | [boolean],
  'rank' : bigint,
  'network' : [] | [Array<string>],
  'ancestorsNames' : [] | [Array<string>],
  'email' : string,
  'bankooImage' : [] | [Uint8Array],
  'sight' : [] | [bigint],
  'speed' : [] | [bigint],
  'discoveredProgress' : [] | [number],
  'story' : [] | [string],
  'imageURI' : string,
  'progress' : bigint,
  'musicLevel' : [] | [number],
  'domains' : [] | [BigUint64Array],
  'landRank' : bigint,
  'pillType' : string,
  'category' : string,
  'landNumber' : bigint,
  'endurance' : [] | [number],
  'power' : [] | [bigint],
  'physical' : [] | [bigint],
  'identifier' : string,
  'videoURI' : [] | [string],
  'ancestorsImages' : [] | [Uint8Array],
  'soundLevel' : [] | [number],
  'earthText' : [] | [Array<string>],
  'linked' : [] | [boolean],
  'playerLocation' : bigint,
  'health' : [] | [bigint],
  'discovered' : [] | [Array<string>],
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
  'properties' : Array<NMCProperties>,
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
  'mint' : ActorMethod<[Principal, bigint, Array<NMCProperties>], Result_3>,
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
