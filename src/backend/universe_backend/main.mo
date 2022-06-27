import Array "mo:base/Array";
import Error "mo:base/Error";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Int "mo:base/Int";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import Option "mo:base/Option";
import P "mo:base/Prelude";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Bool "mo:base/Bool";
import Metadata "metadata";
import Cycles "mo:base/ExperimentalCycles";
import D "mo:base/Debug";
import Float64 "mo:base/Float";

actor Dip721Nft {
    // public type Vec = {
    //     Text;
    //      {
    //         Nat64Content : Nat64;
    //         Nat32Content : Nat32;
    //         BoolContent : Bool;
    //         Nat8Content : Nat8;
    //         Int64Content : Int64;
    //         IntContent : Int;
    //         NatContent : Nat;
    //         Nat16Content : Nat16;
    //         Int32Content : Int32;
    //         Int8Content : Int8;
    //         FloatContent : Float64;
    //         Int16Content : Int16;
    //         BlobContent : [Nat8];
    //         NestedContent : Vec;
    //         Principal : Principal;
    //         TextContent : Text;
    //     }
    // };

    public type SupportedInterface = {
        Burn : Null;
        Mint : Null;
        Approval : Null;
        TransactionHistory: Null;
    };

    public type TxEvent = {
        time : Nat64;
        operation : Text;
        details : [(Text, Metadata.GenericValue )];
        caller : Principal;
    };

    public type NftError = {
        #SelfTransfer;
        #TokenNotFound;
        #NotFound;
        #SelfApprove;
        #OperatorNotFound;
        #UnauthorizedOwner;
        #UnauthorizedOperator;
        #ExistedNFT;
        #OwnerNotFound;
        #Other : Text;
    };

    // Variables
    // Canister State Here
    stable var ledger : [var Metadata.TokenMetadata] = [var];
    stable var blackPillsBeta : Nat = 200;
    stable var logo_ : ?Text = ?"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-logo-square2.jpg";
    stable var name_ : ?Text = ?"SCOGE_Dip721";
    stable var created_at_ : Nat64 = Nat64.fromNat(Int.abs(Time.now()));
    stable var upgraded_at_ : Nat64 = Nat64.fromNat(Int.abs(Time.now()));
    stable var custodians_ : [Principal] = [];
    stable var symbol_ : ?Text = ?"SCOGÉ";
    stable var cycles_ : Nat = Cycles.balance();
    stable var total_transactions_ : Nat = Cycles.balance();
    stable var total_unique_holders_ : Nat = Cycles.balance();
    stable var total_supply_ : Nat = blackPillsBeta;
    stable var owner : Text = "pzf4c-tunkg-cx6cq-wquml-hvydb-rku72-o45ud-b7ote64ctg-mtxls-oqe";
    stable var supportedInterface_ : [SupportedInterface] = [];
    // @DIP721

    // Check for allowed prin
    func allowed(id: Principal) : Bool {
        Option.isSome(Array.find(custodians_, func (x: Principal) : Bool {
           return x == id
        }))
    };

    // QUERY FUNCTIONS

    // metadata: () -> (Metadata) query;
    public query func metadata () : async (Metadata.Metadata) {
        {
            logo = logo_;
            name = name_;
            created_at = created_at_;
            upgraded_at = upgraded_at_;
            custodians = custodians_;
            symbol = symbol_;
        }
    };

    // stats: () -> (Stats) query;
    public query func stats () : async (Metadata.Stats) {
        {
            cycles = cycles_;
            total_transactions = total_transactions_;
            total_unique_holders = total_unique_holders_;
            total_supply = total_supply_;
        }
    };

    // logo : () -> (opt text) query;
    public query func logo () : async ?Text {
        return logo_
    };

    // name : () -> (opt text) query;
    public query func name () : async ?Text {
        return name_
    };

    // symbol : () -> (opt text) query;
    public query func symbol () : async ?Text {
        return symbol_
    };

    // custodians : () -> (vec principal) query;
    public query func custodians () : async ([Principal]) {
        return custodians_
    };

    // cycles : () -> (nat) query;
    public query func cycles () : async (Nat) {
        return cycles_
    };

    // totalUniqueHolders : () -> (nat) query;
      public query func totalUniqueHolders () : async (Nat) {
        return total_unique_holders_
    };

    // tokenMetadata : (nat) -> (variant { Ok : TokenMetadata; Err : NftError }) query;
    public query func tokenMetadata ( tokedId :  Nat) : async Result.Result<Metadata.TokenMetadata, NftError> {
        if (tokedId < ledger.size()) {
            #ok(ledger[tokedId]);
        } else {
            #err(#TokenNotFound);
        };
    }; 

    // balanceOf: (principal) -> (variant { Ok : nat; Err : NftError }) query;
    // How many nfts does the user own?
    public query func balanceOf ( user : Principal) : async Result.Result<Nat,NftError> {
        if (ledger.size() != 0) {
        #ok(Array.filter<Metadata.TokenMetadata>(Array.freeze(ledger), func (token) {
            token.owner == ?user;
        }).size())
        } else {
            #err(#NotFound);
        }
    }; 

    // ownerOf : (nat) -> (variant { Ok : opt principal; Err : NftError }) query;
    // Who owns this NFT?
    public query func ownerOf ( tokedId : Nat) : async Result.Result<?Principal, NftError> {
        if (tokedId < ledger.size()) {
            #ok(ledger[tokedId].owner);
        } else {
            #err(#TokenNotFound);
        };
    };

    // ownerTokenIdentifiers : (principal) -> (variant { Ok : vec nat; Err : NftError }) query;

    // operatorTokenIdentifiers : (principal) -> (variant { Ok : vec nat; Err : NftError }) query;

    // ownerTokenMetadata : (principal) -> (variant { Ok : vec TokenMetadata; Err : NftError }) query;
    public query func ownerTokenMetadata ( user : Principal) : async Result.Result<[Metadata.TokenMetadata], NftError> {
        #ok(
            Array.filter<Metadata.TokenMetadata>(Array.freeze(ledger), func (token) {
                token.owner == ?user;
            })
        );
    };

    // operatorOf : (nat) -> (variant { Ok : opt principal; Err : NftError }) query;
    public query func operatorOf ( tokedId : Nat) : async Result.Result<?Principal, NftError> {
        if (tokedId < ledger.size()) {
            #ok(ledger[tokedId].operator);
        } else {
            #err(#TokenNotFound);
        };
    };

    // operatorTokenMetadata : (principal) -> (variant { Ok : vec TokenMetadata; Err : NftError }) query;
    public query func operatorTokenMetadata ( user : Principal) : async Result.Result<[Metadata.TokenMetadata], NftError> {
        #ok(
            Array.filter<Metadata.TokenMetadata>(Array.freeze(ledger), func (token) {
                token.operator == ?user;
            })
        );
    };

    // supportedInterfaces : () -> (vec SupportedInterface) query;
    public query func supportedInterfaces () : async ([SupportedInterface]) {
        return supportedInterface_;
    };

    // totalSupply : () -> (nat) query;
    public query func totalSupply () : async Nat {
        return ledger.size();
    };

    // UPDATE METHODS
    // mint : (principal, nat, vec record { text; GenericValue }) -> (variant { Ok : nat; Err : NftError });
    public shared ({ caller }) func mint ( 
        // Who are we minting too?
        to : Principal, 
        // Which token are we minting?
        tokedId : Nat,
        // Metadata of Token Minting
        properties : [(Text, Metadata.NftProperties)],
    ) : async Result.Result<Nat, NftError> {
        ledger := Array.tabulateVar<Metadata.TokenMetadata>(ledger.size() +1, func (i) {
            if (i < ledger.size()) {
                ledger[i];
            } else {
                {
                    transferred_at = null;
                    transferred_by = null;
                    owner = ?to;
                    operator = ?to;
                    properties = properties;
                    is_burned = false;
                    token_identifier = i;
                    burned_at = null;
                    burned_by = null;
                    approved_at = null;
                    approved_by = null;
                    minted_at = Nat64.fromNat(Int.abs(Time.now()));
                    minted_by = caller;
                };
            };
        });
        #ok(ledger.size() - 1);
    };

    // setCustodians : (vec principal) -> ();
    public shared(msg) func setCustodians (newCustodian : [Principal]) : async () {
        if (msg.caller == Principal.fromText(owner)) {
            custodians_ := newCustodian;
        };
    };

    // setSymbol : (text) -> ();
     // *** BY CUSTODIAN
    public shared(msg) func setSymbol (newSymbol : Text) : async () {
        if (allowed(msg.caller)) {
            symbol_ := ?newSymbol;
        };
    };

    // setName : (text) -> ();
    // Sets Name of NFt Canister
     // *** BY CUSTODIAN
    public shared(msg) func setName (newName : Text) : async () {
        if (allowed(msg.caller)) {
            name_ := ?newName;
        };
    };

    // setLogo : (text) -> ();
    // *** BY CUSTODIAN
    public shared(msg) func setLogo (newLogo : Text) : async () {
        if (allowed(msg.caller)) {
            logo_ := ?newLogo;
        };
    };

    // BURN INTERFACE **
    // burn : (nat) -> (variant { Ok : nat; Err : NftError });

    // TRANSATION INTERFACE **
    // transaction : (nat) -> (variant { Ok : TxEvent; Err : NftError }) query;
    // totalTransactions : () -> (nat) query;
    
    // APPROVAL INTERFACE **
    // approve : (principal, nat) -> (variant { Ok : nat; Err : NftError });
    // setApprovalForAll : (principal, bool) -> (variant { Ok : nat; Err : NftError });
    // isApprovedForAll : (principal, principal) -> (variant { Ok : bool; Err : NftError }) query;

    // TRANSFER INTERFACE **
    // transfer : (principal, nat) -> (variant { Ok : nat; Err : NftError });
    // transferFrom : (principal, principal, nat) -> (variant { Ok : nat; Err : NftError });

    // HISTORY INTERFACE **
}