import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Perium {
  'd1' : Uint8Array | number[],
  'd2' : Uint8Array | number[],
  'd3' : string,
  'cat' : string,
  'dep' : boolean,
  'nfc' : string,
  'tag' : string,
  'title' : string,
  'views' : bigint,
  'desc' : string,
  'lastV' : string,
}
export interface _SERVICE {
  'addOrUpdateCCPA' : ActorMethod<[string, Perium], undefined>,
  'adminUser' : ActorMethod<[], string>,
  'allowed2' : ActorMethod<[string], boolean>,
  'allowed3' : ActorMethod<[Principal], boolean>,
  'ccpaTotalSupply' : ActorMethod<[], bigint>,
  'custodians' : ActorMethod<[], Array<Principal>>,
  'getCCPA' : ActorMethod<[], Array<Perium>>,
  'getPerium' : ActorMethod<[string], [] | [Perium]>,
  'logo' : ActorMethod<[], [] | [string]>,
  'setCustodians' : ActorMethod<[Array<Principal>], undefined>,
  'setLogo' : ActorMethod<[string], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
