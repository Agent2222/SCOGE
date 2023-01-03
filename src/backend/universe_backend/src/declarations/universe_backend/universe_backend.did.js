export const idlFactory = ({ IDL }) => {
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
  const Result_3 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : NftError });
  const Metadata = IDL.Record({
    'logo' : IDL.Opt(IDL.Text),
    'name' : IDL.Opt(IDL.Text),
    'created_at' : IDL.Nat64,
    'upgraded_at' : IDL.Nat64,
    'custodians' : IDL.Vec(IDL.Principal),
    'symbol' : IDL.Opt(IDL.Text),
  });
  const NftProperties = IDL.Record({
    'xp' : IDL.Nat64,
    'ownerText' : IDL.Opt(IDL.Vec(IDL.Text)),
    'data' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'rank' : IDL.Nat64,
    'ownerImage' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'discoveredProgress' : IDL.Opt(IDL.Float64),
    'story' : IDL.Opt(IDL.Text),
    'imageURI' : IDL.Text,
    'progress' : IDL.Nat64,
    'category' : IDL.Text,
    'videoURI' : IDL.Opt(IDL.Text),
    'linked' : IDL.Opt(IDL.Bool),
    'discovered' : IDL.Opt(IDL.Vec(IDL.Text)),
  });
  const Result_2 = IDL.Variant({
    'ok' : IDL.Opt(IDL.Principal),
    'err' : NftError,
  });
  const TokenMetadata = IDL.Record({
    'transferred_at' : IDL.Opt(IDL.Nat64),
    'transferred_by' : IDL.Opt(IDL.Principal),
    'owner' : IDL.Opt(IDL.Principal),
    'operator' : IDL.Opt(IDL.Principal),
    'approved_at' : IDL.Opt(IDL.Nat64),
    'approved_by' : IDL.Opt(IDL.Principal),
    'properties' : IDL.Vec(IDL.Tuple(IDL.Text, NftProperties)),
    'is_burned' : IDL.Bool,
    'token_identifier' : IDL.Nat,
    'burned_at' : IDL.Opt(IDL.Nat64),
    'burned_by' : IDL.Opt(IDL.Principal),
    'minted_at' : IDL.Nat64,
    'minted_by' : IDL.Principal,
  });
  const Result_1 = IDL.Variant({
    'ok' : IDL.Vec(TokenMetadata),
    'err' : NftError,
  });
  const Stats = IDL.Record({
    'cycles' : IDL.Nat,
    'total_transactions' : IDL.Nat,
    'total_unique_holders' : IDL.Nat,
    'total_supply' : IDL.Nat,
  });
  const SupportedInterface = IDL.Record({
    'Burn' : IDL.Null,
    'Mint' : IDL.Null,
    'Approval' : IDL.Null,
    'TransactionHistory' : IDL.Null,
  });
  const Result = IDL.Variant({ 'ok' : TokenMetadata, 'err' : NftError });
  return IDL.Service({
    'adminUser' : IDL.Func([], [IDL.Text], ['query']),
    'balanceOf' : IDL.Func([IDL.Principal], [Result_3], ['query']),
    'custodians' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'cycles' : IDL.Func([], [IDL.Nat], ['query']),
    'logo' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'metadata' : IDL.Func([], [Metadata], ['query']),
    'mint' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Vec(IDL.Tuple(IDL.Text, NftProperties))],
        [Result_3],
        [],
      ),
    'name' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'operatorOf' : IDL.Func([IDL.Nat], [Result_2], ['query']),
    'operatorTokenMetadata' : IDL.Func([IDL.Principal], [Result_1], ['query']),
    'ownerOf' : IDL.Func([IDL.Nat], [Result_2], ['query']),
    'ownerTokenMetadata' : IDL.Func([IDL.Principal], [Result_1], ['query']),
    'setCustodians' : IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    'setLogo' : IDL.Func([IDL.Text], [], []),
    'setName' : IDL.Func([IDL.Text], [], []),
    'setSymbol' : IDL.Func([IDL.Text], [], []),
    'stats' : IDL.Func([], [Stats], ['query']),
    'supportedInterfaces' : IDL.Func(
        [],
        [IDL.Vec(SupportedInterface)],
        ['query'],
      ),
    'symbol' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'tokenMetadata' : IDL.Func([IDL.Nat], [Result], ['query']),
    'totalSupply' : IDL.Func([], [IDL.Nat], ['query']),
    'totalUniqueHolders' : IDL.Func([], [IDL.Nat], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
