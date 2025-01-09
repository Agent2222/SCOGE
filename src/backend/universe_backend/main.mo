import Array "mo:base/Array";
import _Error "mo:base/Error";
import _Hash "mo:base/Hash";
import _HashMap "mo:base/HashMap";
import _Int "mo:base/Int";
import _Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import Option "mo:base/Option";
import _P "mo:base/Prelude";
import Principal "mo:base/Principal";
import _Result "mo:base/Result";
import Text "mo:base/Text";
import _Time "mo:base/Time";
import Bool "mo:base/Bool";
import T "metadata";
import Cycles "mo:base/ExperimentalCycles";
import _D "mo:base/Debug";
import _Float64 "mo:base/Float";
import List "mo:base/List";
import _Debug "mo:base/Debug";
import _Buffer "mo:base/Buffer";
import Blob "mo:base/Blob";
import Nat8 "mo:base/Nat8";

actor ScogeCMS {

  public type SupportedInterface = {
    Burn : Null;
    Mint : Null;
    Approval : Null;
    TransactionHistory : Null;
  };

  public type List<T> = ?(T, List<T>);

  public type MenuItem = {
    symbol : Blob;
    name : Text;
  };

  public type Perium = {
    nfc : Text;
    dep : Bool;
    tag : Text;
    cat : Text;
    title : Text;
    d1 : Blob;
    d2 : Blob;
    d3 : Text;
    desc : Text;
    views : Nat;
    lastV : Text;
  };

  // Canister State Here
  private stable let admin : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";
  private stable let admin2 : Text = "pzf4c-tunkg-cx6cq-wquml-hvydb-rku72-o45ud-b7ote-64ctg-mtxls-oqe";
  private stable let admin3 : Text = "0x2a9e5F8485c7596e427BFb26Fd41D149A110E949";
  private stable let admin4 : Text = "0x7119fD2DbC5Db3E34624B727322396D1b6456aF8";
  private stable var custodians_ : [Principal] = [Principal.fromText(admin)];
  private stable var custodiansEth : [Text] = [admin3, admin, admin4];
  private stable var _cycles_ : Nat = Cycles.balance();
  private stable var _owner : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";
  stable var totalSupply : Nat = 0;

  // CCPA
  stable var ccpa : [(Text, Perium)] = [];
  var ccpa2 : _HashMap.HashMap<Text, Perium> = _HashMap.HashMap<Text, Perium>(500, Text.equal, Text.hash);

  // HOME PAGE
  private stable var logo_ : ?Text = ?"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-logo-square2.jpg";
  private stable var appVersion : ?Text = ?"0.6";

  // Check for allowed prin
  func allowed(id : Principal) : Bool {
    Option.isSome(
      Array.find(
        custodians_,
        func(x : Principal) : Bool {
          return x == id;
        },
      )
    );
  };

  // Check for allowed prin
  public func allowed2(id : Text) : async Bool {
    Option.isSome(
      Array.find(
        custodiansEth,
        func(x : Text) : Bool {
          return x == id;
        },
      )
    );
  };

    // Check for allowed prin
  public func allowed3(id : Principal) : async Bool {
    Option.isSome(
      Array.find(
        custodians_,
        func(x : Principal) : Bool {
          return x == id;
        },
      )
    );
  };

  // QUERY FUNCTIONS
  public query func logo() : async ?Text {
    return logo_;
  };

  public query func adminUser() : async Text {
    return admin;
  };

  public query func custodians() : async ([Principal]) {
    return custodians_;
  };

  // UPDATE METHODS
  public shared (init_msg) func setCustodians(newCustodian : [Principal]) : async () {
    if (init_msg.caller == Principal.fromText(admin2)) {
      custodians_ := newCustodian;
    };
  };

  public shared (init_msg) func setLogo(newLogo : Text) : async () {
    if (allowed(init_msg.caller)) {
      logo_ := ?newLogo;
    };
  };

  // CCPA QUERY FUNCTIONS
  public query func getCCPA() : async [Perium] {
    _Iter.toArray(ccpa2.vals());
  };

  public query func getPerium(k : Text) : async ?Perium {
    return ccpa2.get(k);
  };

  public query func ccpaTotalSupply() : async Nat {
      return totalSupply;
  };

  // CCPA UPDATE FUNCTIONS
  public shared (init_msg) func addOrUpdateCCPA(k: Text, v: Perium) : async () {
     assert allowed(init_msg.caller);
    // if (allowed(init_msg.caller)) {
    //   ccpa2.put(k, v);
    // };
      var newK = ccpa2.size() + 1;
      var newKey = Nat.toText(newK);
      // ccpa2.put(newKey, v);
      ccpa2.put(k, v);
      totalSupply += ccpa2.size();  
  };

  // SYSTEM FUNCTIONS
  system func preupgrade() {
    ccpa := _Iter.toArray(ccpa2.entries());
  };

  system func postupgrade() {
      ccpa2 := _HashMap.HashMap<Text, Perium>(500, Text.equal, Text.hash);

      // Restore data from `ccpa` into `ccpa2`
      for ((key, value) in ccpa.vals()) {
        ccpa2.put(key, value);
      };

      // Clear stable storage to free memory
      ccpa := [];
  };

};
