import Text "mo:base/Text";
import Buffer "mo:base/Buffer";
import Nat64 "mo:base/Nat64";
import Nat8 "mo:base/Nat8";
import Bool "mo:base/Bool";
module {

  public type Metadata = {
    logo : ?Text;
    name : ?Text;
    created_at : Nat64;
    upgraded_at : Nat64;
    custodians : [Principal];
    symbol : ?Text;
  };

  public type TokenMetadata = {
    transferred_at : ?Nat64;
    transferred_by : ?Principal;
    owner : ?Principal;
    operator : ?Principal;
    properties : [(NMCProperties)];
    is_burned : Bool;
    token_identifier : Nat;
    burned_at : ?Nat64;
    burned_by : ?Principal;
    approved_at : ?Nat64;
    approved_by : ?Principal;
    minted_at : Nat64;
    minted_by : Principal;
  };

  public type GenericValue = {
    Nat64Content : Nat64;
    Nat32Content : Nat32;
    BoolContent : Bool;
    Nat8Content : Nat8;
    Int64Content : Int64;
    IntContent : Int;
    NatContent : Nat;
    Nat16Content : Nat16;
    Int32Content : Int32;
    Int8Content : Int8;
    FloatContent : Float;
    Int16Content : Int16;
    BlobContent : [Nat8];
    NestedContent : [Text];
    Principal : Principal;
    TextContent : Text;
  };

  public type ImageArray = [Nat8];
  public type ImageArrayArray = [ImageArray];

  public type NMCProperties = {
    // ** Visual Identifier **
    ringType : Text;
    landRank : Nat64;
    rank : Nat64;
    powerUps : [Nat64];
    progress : Nat64;
    xp : Nat64;
    category : Text;
    linked : Bool;
    // ** Player Info **
    identifier : Text;
    alias : Text;
    email : Text;
    // earthImage: [Nat8];
    earthText : [Text];
    styles : [Text];
    // ** Player Stats **
    discovered : [Text];
    discoveredProgress : Float;
    power : Nat64;
    mental : Nat64;
    physical : Nat64;
    health : Nat64;
    speed : Nat64;
    sight : Nat64;
    endurance : Float;
    domains : [Nat64];
    playerLocation : Nat64;
    // ** Player Settings **
    soundLevel : Float;
    musicLevel : Float;
    fsOn : Bool;
    notiOn : Bool;
    // ** Player Network **
    networkClass : Text;
    network : [Text];
    // ** Land Info **
    landNumber : Nat64;
    story : object {
      title : Text;
      text : Text;
      imagesUri : [Text];
      videoURI : Text;
    };
    // bankooImage: [Blob];
    bankooText : [Text];
    imageCompData : [Nat8];
    // ** History **
    ancestorsNames : [Text];
    ancestorsImages : [Nat8];
  };

  public type Stats = {
    cycles : Nat;
    total_transactions : Nat;
    total_unique_holders : Nat;
    total_supply : Nat;
  };

  public type Domain = {
    id : Nat;
    x : Text;
    y : Text;
    owner : Text;
    region : Text;
    sector : Nat;
    function : Text;
    material : Text;
    visibility : Bool;
    privacy : Bool;
    chapter : Text;
    health : Nat64;
    strength : Nat64;
    endurance : Nat64;
    terrain : Text;
  };

  //type declarations for HTTP requests, HTTP responses, management canister, etc...
};
