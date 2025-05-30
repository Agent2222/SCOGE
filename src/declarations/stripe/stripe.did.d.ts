import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'createCheckoutSession' : ActorMethod<[string], string>,
  'getSecretData' : ActorMethod<[], string>,
  'getSessionStatus' : ActorMethod<[string], string>,
  'updateSecretData' : ActorMethod<[string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
