import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Perium {
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
  'getBlobChunks' : ActorMethod<
    [string, string, bigint, bigint],
    [] | [Array<Uint8Array | number[]>]
  >,
  'getCCPA' : ActorMethod<[], Array<Perium>>,
  'getPerium' : ActorMethod<[string], [] | [Perium]>,
  'logo' : ActorMethod<[], [] | [string]>,
  'saveBlob' : ActorMethod<
    [string, string, [] | [Uint8Array | number[]]],
    undefined
  >,
  'setCustodians' : ActorMethod<[Array<Principal>], undefined>,
  'setLogo' : ActorMethod<[string], undefined>,
  'updateLastViewed' : ActorMethod<[string, string], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
