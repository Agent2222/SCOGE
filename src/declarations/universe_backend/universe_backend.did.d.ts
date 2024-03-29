import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Metadata {
  'logo' : [] | [string],
  'name' : [] | [string],
  'created_at' : bigint,
  'upgraded_at' : bigint,
  'custodians' : Array<Principal>,
  'symbol' : [] | [string],
}
export interface NMCProperties {
  'xp' : bigint,
  'bankooText' : Array<string>,
  'mental' : bigint,
  'ringType' : string,
  'powerUps' : BigUint64Array | bigint[],
  'styles' : Array<string>,
  'alias' : string,
  'notiOn' : boolean,
  'networkClass' : string,
  'fsOn' : boolean,
  'imageCompData' : Uint8Array | number[],
  'rank' : bigint,
  'network' : Array<string>,
  'ancestorsNames' : Array<string>,
  'email' : string,
  'sight' : bigint,
  'speed' : bigint,
  'discoveredProgress' : number,
  'story' : {
    'title' : string,
    'imagesUri' : Array<string>,
    'text' : string,
    'videoURI' : string,
  },
  'progress' : bigint,
  'musicLevel' : number,
  'domains' : BigUint64Array | bigint[],
  'landRank' : bigint,
  'category' : string,
  'landNumber' : bigint,
  'endurance' : number,
  'power' : bigint,
  'physical' : bigint,
  'identifier' : string,
  'ancestorsImages' : Uint8Array | number[],
  'soundLevel' : number,
  'earthText' : Array<string>,
  'linked' : boolean,
  'playerLocation' : bigint,
  'health' : bigint,
  'discovered' : Array<string>,
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
export type Result = { 'ok' : bigint } |
  { 'err' : NftError };
export type Result_1 = { 'ok' : TokenMetadata } |
  { 'err' : NftError };
export type Result_2 = { 'ok' : Array<TokenMetadata> } |
  { 'err' : NftError };
export type Result_3 = { 'ok' : [] | [Principal] } |
  { 'err' : NftError };
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
  'alphaLedger' : ActorMethod<[], bigint>,
  'balanceOf' : ActorMethod<[Principal], Result>,
  'custodians' : ActorMethod<[], Array<Principal>>,
  'logo' : ActorMethod<[], [] | [string]>,
  'metadata' : ActorMethod<[], Metadata>,
  'mint' : ActorMethod<[Principal, bigint, Array<NMCProperties>], Result>,
  'name' : ActorMethod<[], [] | [string]>,
  'operatorOf' : ActorMethod<[bigint], Result_3>,
  'operatorTokenMetadata' : ActorMethod<[Principal], Result_2>,
  'ownerOf' : ActorMethod<[bigint], Result_3>,
  'ownerTokenMetadata' : ActorMethod<[Principal], Result_2>,
  'savetoTemp' : ActorMethod<[Principal, bigint, Array<NMCProperties>], Result>,
  'setCustodians' : ActorMethod<[Array<Principal>], undefined>,
  'setLogo' : ActorMethod<[string], undefined>,
  'setName' : ActorMethod<[string], undefined>,
  'setSymbol' : ActorMethod<[string], undefined>,
  'supportedInterfaces' : ActorMethod<[], Array<SupportedInterface>>,
  'symbol' : ActorMethod<[], [] | [string]>,
  'tempMetaData' : ActorMethod<[bigint], Result_1>,
  'tokenMetadata' : ActorMethod<[bigint], Result_1>,
  'totalSupply' : ActorMethod<[], bigint>,
  'updateTemp' : ActorMethod<[Principal, bigint, Array<NMCProperties>], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
