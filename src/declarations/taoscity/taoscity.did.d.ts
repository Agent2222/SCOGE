import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Domain {
  'x' : string,
  'y' : string,
  'id' : bigint,
  'region' : string,
  'function' : string,
  'terrain' : string,
  'owner' : string,
  'sector' : bigint,
  'privacy' : boolean,
  'strength' : bigint,
  'endurance' : bigint,
  'chapter' : string,
  'visibility' : boolean,
  'material' : string,
  'health' : bigint,
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
export type Result = { 'ok' : Domain } |
  { 'err' : NftError };
export interface taoscity {
  'batchUpdateDomains' : ActorMethod<[Array<Domain>, Principal], undefined>,
  'clearDomain' : ActorMethod<[bigint, Domain, Principal], undefined>,
  'getAllDomains' : ActorMethod<[bigint, bigint], Array<Domain>>,
  'getDomain' : ActorMethod<[bigint], Result>,
  'getDomainByPID' : ActorMethod<[string], Array<Domain>>,
  'getDomainsTotalSupply' : ActorMethod<[], bigint>,
  'getOwnedDomains' : ActorMethod<[], Array<Domain>>,
  'getUnOwnedDomains' : ActorMethod<[], Array<Domain>>,
  'initTaosCity' : ActorMethod<[Principal], undefined>,
  'isAllowed' : ActorMethod<[Principal], boolean>,
  'updateDomain' : ActorMethod<[bigint, Domain, Principal], Result>,
}
export interface _SERVICE extends taoscity {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
