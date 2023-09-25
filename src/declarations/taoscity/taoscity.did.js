export const idlFactory = ({ IDL }) => {
  const Domain = IDL.Record({
    'x' : IDL.Text,
    'y' : IDL.Text,
    'id' : IDL.Nat,
    'region' : IDL.Text,
    'function' : IDL.Text,
    'terrain' : IDL.Text,
    'owner' : IDL.Text,
    'sector' : IDL.Nat,
    'privacy' : IDL.Bool,
    'strength' : IDL.Nat64,
    'endurance' : IDL.Nat64,
    'chapter' : IDL.Text,
    'visibility' : IDL.Bool,
    'material' : IDL.Text,
    'health' : IDL.Nat64,
  });
  const NftError = IDL.Variant({
    'UnauthorizedOperator' : IDL.Null,
    'SelfTransfer' : IDL.Null,
    'TokenNotFound' : IDL.Null,
    'UnauthorizedOwner' : IDL.Null,
    'NotFound' : IDL.Null,
    'SelfApprove' : IDL.Null,
    'OperatorNotFound' : IDL.Null,
    'ExistedNFT' : IDL.Null,
    'OwnerNotFound' : IDL.Null,
    'Other' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : Domain, 'err' : NftError });
  const taoscity = IDL.Service({
    'batchUpdateDomains' : IDL.Func(
        [IDL.Vec(Domain), IDL.Principal],
        [],
        ['oneway'],
      ),
    'clearDomain' : IDL.Func([IDL.Nat, Domain, IDL.Principal], [], ['oneway']),
    'getAllDomains' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(Domain)],
        ['query'],
      ),
    'getDomain' : IDL.Func([IDL.Nat], [Result], ['query']),
    'getDomainByPID' : IDL.Func([IDL.Text], [IDL.Vec(Domain)], ['query']),
    'getDomainsTotalSupply' : IDL.Func([], [IDL.Nat], ['query']),
    'getOwnedDomains' : IDL.Func([], [IDL.Vec(Domain)], ['query']),
    'getUnOwnedDomains' : IDL.Func([], [IDL.Vec(Domain)], ['query']),
    'initTaosCity' : IDL.Func([IDL.Principal], [], ['oneway']),
    'updateDomain' : IDL.Func([IDL.Nat, Domain, IDL.Principal], [Result], []),
  });
  return taoscity;
};
export const init = ({ IDL }) => { return []; };
