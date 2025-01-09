export const idlFactory = ({ IDL }) => {
  const ICRC16 = IDL.Rec();
  const Value = IDL.Rec();
  Value.fill(
    IDL.Variant({
      'Int' : IDL.Int,
      'Map' : IDL.Vec(IDL.Tuple(IDL.Text, Value)),
      'Nat' : IDL.Nat,
      'Blob' : IDL.Vec(IDL.Nat8),
      'Bool' : IDL.Bool,
      'Text' : IDL.Text,
      'Float' : IDL.Float64,
      'Array' : IDL.Vec(Value),
    })
  );
  ICRC16.fill(
    IDL.Variant({
      'Int' : IDL.Int,
      'Map' : IDL.Vec(IDL.Record({ 'key' : IDL.Text, 'value' : ICRC16 })),
      'Nat' : IDL.Nat,
      'Set' : IDL.Vec(ICRC16),
      'Nat16' : IDL.Nat16,
      'Nat32' : IDL.Nat32,
      'Nat64' : IDL.Nat64,
      'Blob' : IDL.Vec(IDL.Nat8),
      'Bool' : IDL.Bool,
      'Int8' : IDL.Int8,
      'Ints' : IDL.Vec(IDL.Int),
      'Nat8' : IDL.Nat8,
      'Nats' : IDL.Vec(IDL.Nat),
      'Text' : IDL.Text,
      'Bytes' : IDL.Vec(IDL.Nat8),
      'Int16' : IDL.Int16,
      'Int32' : IDL.Int32,
      'Int64' : IDL.Int64,
      'Option' : IDL.Opt(ICRC16),
      'Floats' : IDL.Vec(IDL.Float64),
      'Float' : IDL.Float64,
      'Principal' : IDL.Principal,
      'Array' : IDL.Vec(ICRC16),
      'ValueMap' : IDL.Vec(IDL.Tuple(ICRC16, ICRC16)),
      'Class' : IDL.Vec(
        IDL.Record({
          'value' : ICRC16,
          'name' : IDL.Text,
          'immutable' : IDL.Bool,
        })
      ),
    })
  );
  const DappPermissions = IDL.Record({
    'permissions' : Value,
    'data' : ICRC16,
    'read' : Value,
    'write' : Value,
  });
  const AppMetadata = IDL.Record({
    'permissions' : DappPermissions,
    'name' : IDL.Text,
  });
  const MetadataValue = IDL.Record({ 'key' : IDL.Text, 'value' : Value });
  const NFT = IDL.Record({
    'id' : IDL.Nat,
    'metadata' : IDL.Vec(MetadataValue),
  });
  const Subaccount = IDL.Vec(IDL.Nat8);
  const Account = IDL.Record({
    'nft' : IDL.Opt(NFT),
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(Subaccount),
  });
  const Story = IDL.Record({
    'title' : IDL.Text,
    'imagesUri' : IDL.Vec(IDL.Text),
    'text' : IDL.Text,
    'videoURI' : IDL.Text,
  });
  const Metadata = IDL.Record({
    'xp' : IDL.Nat,
    'bankooText' : IDL.Vec(IDL.Text),
    'mental' : IDL.Nat,
    'ringType' : IDL.Text,
    'powerUps' : IDL.Vec(IDL.Nat),
    'styles' : IDL.Vec(IDL.Text),
    'alias' : IDL.Text,
    'notiOn' : IDL.Bool,
    'networkClass' : IDL.Text,
    'fsOn' : IDL.Bool,
    'imageCompData' : IDL.Vec(IDL.Nat),
    'rank' : IDL.Nat,
    'network' : IDL.Vec(IDL.Text),
    'ancestorsNames' : IDL.Vec(IDL.Text),
    'email' : IDL.Text,
    'sight' : IDL.Nat,
    'speed' : IDL.Nat,
    'discoveredProgress' : IDL.Float64,
    'story' : Story,
    'progress' : IDL.Nat,
    'musicLevel' : IDL.Float64,
    'domains' : IDL.Vec(IDL.Nat),
    'landRank' : IDL.Nat,
    'category' : IDL.Text,
    'landNumber' : IDL.Nat,
    'endurance' : IDL.Float64,
    'power' : IDL.Nat,
    'physical' : IDL.Nat,
    'identifier' : IDL.Text,
    'ancestorsImages' : IDL.Vec(IDL.Nat),
    'soundLevel' : IDL.Float64,
    'earthText' : IDL.Vec(IDL.Text),
    'linked' : IDL.Bool,
    'playerLocation' : IDL.Nat,
    'health' : IDL.Nat,
    'discovered' : IDL.Vec(IDL.Text),
  });
  return IDL.Service({
    'icrc60_add_app' : IDL.Func([IDL.Text, AppMetadata], [], []),
    'icrc60_burn' : IDL.Func([IDL.Nat], [IDL.Opt(IDL.Nat)], []),
    'icrc60_mint' : IDL.Func([IDL.Vec(MetadataValue)], [IDL.Nat], []),
    'icrc60_update_app_permissions' : IDL.Func(
        [IDL.Text, DappPermissions],
        [IDL.Opt(IDL.Text)],
        [],
      ),
    'icrc60_update_metadata' : IDL.Func(
        [IDL.Nat, IDL.Vec(MetadataValue)],
        [IDL.Opt(IDL.Nat)],
        [],
      ),
    'icrc7_atomic_batch_transfers' : IDL.Func(
        [],
        [IDL.Opt(IDL.Bool)],
        ['query'],
      ),
    'icrc7_balance_of' : IDL.Func(
        [IDL.Vec(Account)],
        [IDL.Vec(IDL.Nat)],
        ['query'],
      ),
    'icrc7_collection_metadata' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Value))],
        ['query'],
      ),
    'icrc7_default_take_value' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_description' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'icrc7_logo' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'icrc7_max_memo_size' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_max_query_batch_size' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_max_take_value' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_max_update_batch_size' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_name' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_owner_of' : IDL.Func(
        [IDL.Vec(IDL.Nat)],
        [IDL.Vec(IDL.Opt(Account))],
        ['query'],
      ),
    'icrc7_permitted_drift' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_supply_cap' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_symbol' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_token_metadata' : IDL.Func(
        [IDL.Vec(IDL.Nat)],
        [IDL.Vec(IDL.Vec(IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, Value)))))],
        ['query'],
      ),
    'icrc7_tokens' : IDL.Func(
        [IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(IDL.Nat)],
        ['query'],
      ),
    'icrc7_tokens_of' : IDL.Func(
        [Account, IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(IDL.Nat)],
        ['query'],
      ),
    'icrc7_total_supply' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc7_tx_window' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'metadataToICRC7' : IDL.Func([Metadata], [IDL.Vec(MetadataValue)], []),
  });
};
export const init = ({ IDL }) => { return []; };
