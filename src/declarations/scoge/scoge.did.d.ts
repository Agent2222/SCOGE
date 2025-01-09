import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account {
  'nft' : [] | [NFT],
  'owner' : Principal,
  'subaccount' : [] | [Subaccount],
}
export interface AppMetadata {
  'permissions' : DappPermissions,
  'name' : string,
}
export interface DappPermissions {
  'permissions' : Value,
  'data' : ICRC16,
  'read' : Value,
  'write' : Value,
}
export type ICRC16 = { 'Int' : bigint } |
  { 'Map' : Array<{ 'key' : string, 'value' : ICRC16 }> } |
  { 'Nat' : bigint } |
  { 'Set' : Array<ICRC16> } |
  { 'Nat16' : number } |
  { 'Nat32' : number } |
  { 'Nat64' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Bool' : boolean } |
  { 'Int8' : number } |
  { 'Ints' : Array<bigint> } |
  { 'Nat8' : number } |
  { 'Nats' : Array<bigint> } |
  { 'Text' : string } |
  { 'Bytes' : Uint8Array | number[] } |
  { 'Int16' : number } |
  { 'Int32' : number } |
  { 'Int64' : bigint } |
  { 'Option' : [] | [ICRC16] } |
  { 'Floats' : Array<number> } |
  { 'Float' : number } |
  { 'Principal' : Principal } |
  { 'Array' : Array<ICRC16> } |
  { 'ValueMap' : Array<[ICRC16, ICRC16]> } |
  {
    'Class' : Array<
      { 'value' : ICRC16, 'name' : string, 'immutable' : boolean }
    >
  };
export interface Metadata {
  'xp' : bigint,
  'bankooText' : Array<string>,
  'mental' : bigint,
  'ringType' : string,
  'powerUps' : Array<bigint>,
  'styles' : Array<string>,
  'alias' : string,
  'notiOn' : boolean,
  'networkClass' : string,
  'fsOn' : boolean,
  'imageCompData' : Array<bigint>,
  'rank' : bigint,
  'network' : Array<string>,
  'ancestorsNames' : Array<string>,
  'email' : string,
  'sight' : bigint,
  'speed' : bigint,
  'discoveredProgress' : number,
  'story' : Story,
  'progress' : bigint,
  'musicLevel' : number,
  'domains' : Array<bigint>,
  'landRank' : bigint,
  'category' : string,
  'landNumber' : bigint,
  'endurance' : number,
  'power' : bigint,
  'physical' : bigint,
  'identifier' : string,
  'ancestorsImages' : Array<bigint>,
  'soundLevel' : number,
  'earthText' : Array<string>,
  'linked' : boolean,
  'playerLocation' : bigint,
  'health' : bigint,
  'discovered' : Array<string>,
}
export interface MetadataValue { 'key' : string, 'value' : Value }
export interface NFT { 'id' : bigint, 'metadata' : Array<MetadataValue> }
export interface Story {
  'title' : string,
  'imagesUri' : Array<string>,
  'text' : string,
  'videoURI' : string,
}
export type Subaccount = Uint8Array | number[];
export type Value = { 'Int' : bigint } |
  { 'Map' : Array<[string, Value]> } |
  { 'Nat' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Bool' : boolean } |
  { 'Text' : string } |
  { 'Float' : number } |
  { 'Array' : Array<Value> };
export interface _SERVICE {
  'icrc60_add_app' : ActorMethod<[string, AppMetadata], undefined>,
  'icrc60_burn' : ActorMethod<[bigint], [] | [bigint]>,
  'icrc60_mint' : ActorMethod<[Array<MetadataValue>], bigint>,
  'icrc60_update_app_permissions' : ActorMethod<
    [string, DappPermissions],
    [] | [string]
  >,
  'icrc60_update_metadata' : ActorMethod<
    [bigint, Array<MetadataValue>],
    [] | [bigint]
  >,
  'icrc7_atomic_batch_transfers' : ActorMethod<[], [] | [boolean]>,
  'icrc7_balance_of' : ActorMethod<[Array<Account>], Array<bigint>>,
  'icrc7_collection_metadata' : ActorMethod<[], Array<[string, Value]>>,
  'icrc7_default_take_value' : ActorMethod<[], [] | [bigint]>,
  'icrc7_description' : ActorMethod<[], [] | [string]>,
  'icrc7_logo' : ActorMethod<[], [] | [string]>,
  'icrc7_max_memo_size' : ActorMethod<[], [] | [bigint]>,
  'icrc7_max_query_batch_size' : ActorMethod<[], [] | [bigint]>,
  'icrc7_max_take_value' : ActorMethod<[], [] | [bigint]>,
  'icrc7_max_update_batch_size' : ActorMethod<[], [] | [bigint]>,
  'icrc7_name' : ActorMethod<[], string>,
  'icrc7_owner_of' : ActorMethod<[Array<bigint>], Array<[] | [Account]>>,
  'icrc7_permitted_drift' : ActorMethod<[], [] | [bigint]>,
  'icrc7_supply_cap' : ActorMethod<[], [] | [bigint]>,
  'icrc7_symbol' : ActorMethod<[], string>,
  'icrc7_token_metadata' : ActorMethod<
    [Array<bigint>],
    Array<Array<[] | [Array<[string, Value]>]>>
  >,
  'icrc7_tokens' : ActorMethod<[[] | [bigint], [] | [bigint]], Array<bigint>>,
  'icrc7_tokens_of' : ActorMethod<
    [Account, [] | [bigint], [] | [bigint]],
    Array<bigint>
  >,
  'icrc7_total_supply' : ActorMethod<[], bigint>,
  'icrc7_tx_window' : ActorMethod<[], [] | [bigint]>,
  'metadataToICRC7' : ActorMethod<[Metadata], Array<MetadataValue>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
