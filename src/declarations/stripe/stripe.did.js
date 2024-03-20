export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createCheckoutSession' : IDL.Func([IDL.Text], [IDL.Text], []),
    'getSecretData' : IDL.Func([], [IDL.Text], ['query']),
    'getSessionStatus' : IDL.Func([IDL.Text], [IDL.Text], []),
    'updateSecretData' : IDL.Func([IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
