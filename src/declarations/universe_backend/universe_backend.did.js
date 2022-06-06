export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getProgress' : IDL.Func([], [IDL.Nat], ['query']),
    'incrementProgress' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
