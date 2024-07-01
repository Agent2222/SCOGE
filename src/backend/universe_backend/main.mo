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
  // Variables
  private var _nmcProps : [T.NMCProperties] = [({
    // ** Visual Identifier **
    ringType : Text = "";
    landRank : Nat64 = 0;
    rank : Nat64 = 0;
    powerUps : [Nat64] = [0];
    progress : Nat64 = 0;
    xp : Nat64 = 0;
    category : Text = "";
    linked : Bool = false;
    // ** Player Info **
    identifier : Text = "";
    alias : Text = "";
    email : Text = "";
    // earthImage: [Nat8] = [];
    earthText : [Text] = [""];
    styles : [Text] = [""];
    // ** Player Stats **
    discovered : [Text] = [""];
    discoveredProgress : Float = 0.0;
    power : Nat64 = 0;
    mental : Nat64 = 0;
    physical : Nat64 = 0;
    health : Nat64 = 0;
    speed : Nat64 = 0;
    sight : Nat64 = 0;
    endurance : Float = 0.0;
    domains : [Nat64] = [0];
    playerLocation : Nat64 = 0;
    // ** Player Settings **
    soundLevel : Float = 0.0;
    musicLevel : Float = 0.0;
    fsOn : Bool = false;
    notiOn : Bool = false;
    // ** Player Network **
    networkClass : Text = "";
    network : [Text] = [""];
    // ** Land Info **
    landNumber : Nat64 = 0;
    story = {
      title : Text = "";
      text : Text = "";
      imagesUri : [Text] = [""];
      videoURI : Text = "";
    };
    // bankooImage: [Blob] = [];
    bankooText : [Text] = [""];
    imageCompData : [Nat8] = [0];
    // ** History **
    ancestorsNames : [Text] = [""];
    ancestorsImages : [Nat8] = [0];
  })];

  // Testing upgrade

  // Canister State Here
  private stable var admin : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";
  private stable var admin2 : Text = "pzf4c-tunkg-cx6cq-wquml-hvydb-rku72-o45ud-b7ote-64ctg-mtxls-oqe";

  private stable var custodians_ : [Principal] = [Principal.fromText(admin)];
  private stable var symbol_ : ?Text = ?"SCOGÉ";
  private stable var _cycles_ : Nat = Cycles.balance();
  private stable var _owner : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";

  // HOME PAGE
  private stable var logo_ : ?Text = ?"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-logo-square2.jpg";
  private stable var appVersion : ?Text = ?"0.6";
  // private stable var backgroundVideoArray : ?[Blob] = [];
  // private stable var backgroundImageArray : ?[Blob] = [var];
  // private stable var menuItems : ?[MenuItem] = [var];

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

  // QUERY FUNCTIONS
  // logo : () -> (opt text) query;
  public query func logo() : async ?Text {
    return logo_;
  };

  // name : () -> (opt text) query;
  // public query func name() : async ?Text {
  //   return name_;
  // };

  // admin : () -> (text) query;
  public query func adminUser() : async Text {
    return admin;
  };

  // symbol : () -> (opt text) query;
  public query func symbol() : async ?Text {
    return symbol_;
  };

  // custodians : () -> (vec principal) query;
  public query func custodians() : async ([Principal]) {
    return custodians_;
  };

  // public query func alphaLedger() : async (Nat) {
  //   return digisetteAlphaLedger.size();
  // };
  // UPDATE METHODS
  // setCustodians : (vec principal) -> ();
  public shared (init_msg) func setCustodians(newCustodian : [Principal]) : async () {
    if (init_msg.caller == Principal.fromText(admin2)) {
      custodians_ := newCustodian;
    };
  };
  // setLogo : (text) -> ();
  // *** BY CUSTODIAN
  public shared (init_msg) func setLogo(newLogo : Text) : async () {
    if (allowed(init_msg.caller)) {
      logo_ := ?newLogo;
    };
  };
};
