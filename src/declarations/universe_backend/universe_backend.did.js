export const idlFactory = ({ IDL }) => {
  const Perium = IDL.Record({
    'd3' : IDL.Text,
    'cat' : IDL.Text,
    'dep' : IDL.Bool,
    'nfc' : IDL.Text,
    'tag' : IDL.Text,
    'title' : IDL.Text,
    'views' : IDL.Nat,
    'desc' : IDL.Text,
    'lastV' : IDL.Text,
  });
  return IDL.Service({
    'addOrUpdateCCPA' : IDL.Func([IDL.Text, Perium], [], []),
    'adminUser' : IDL.Func([], [IDL.Text], ['query']),
    'allowed2' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'allowed3' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'ccpaTotalSupply' : IDL.Func([], [IDL.Nat], ['query']),
    'custodians' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getBlobChunks' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat, IDL.Nat],
        [IDL.Opt(IDL.Vec(IDL.Vec(IDL.Nat8)))],
        ['query'],
      ),
    'getCCPA' : IDL.Func([], [IDL.Vec(Perium)], ['query']),
    'getPerium' : IDL.Func([IDL.Text], [IDL.Opt(Perium)], ['query']),
    'logo' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'saveBlob' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Opt(IDL.Vec(IDL.Nat8))],
        [],
        [],
      ),
    'setCustodians' : IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    'setLogo' : IDL.Func([IDL.Text], [], []),
    'updateLastViewed' : IDL.Func([IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
