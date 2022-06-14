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

actor Dip721Nft {

    // TYPES
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
        properties : [(Text, GenericValue )];
        is_burned : Bool;
        token_identifier : Nat;
        burned_at : ?Nat64;
        burned_by : ?Principal;
        approved_at : ?Nat64;
        approved_by : ?Principal;
        minted_at : Nat64;
        minted_by : Principal;
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
    public type Stats = {
        cycles : Nat;
        total_transactions : Nat;
        total_unique_holders : Nat;
        total_supply : Nat;
    };

    // Variables
    stable var ledger : [var TokenMetadata] = [var];
    stable var cat1NftsRemaining : Nat = 5000;
    stable var cat2NftsRemaining : Nat = 1000;
    stable var cat3NftsRemaining : Nat = 450;

    // @DIP721

    // DATA STRUCTURES
    // {"data", BlobContent(<blob asset data of the NFT>)}
    // {"location", TextContent(<asset URL of the NFT>)}
    // {"thumbnail", TextContent(<thumbnail URL of the NFT>)}

    // FUNCTIONS
    // metadata: () -> (Metadata) query;
    // stats: () -> (Stats) query;
    // logo : () -> (opt text) query;
    // setLogo : (text) -> ();
    // name : () -> (opt text) query;
    // setName : (text) -> ();
    // symbol : () -> (opt text) query;
    // setSymbol : (text) -> ();
    // custodians : () -> (vec principal) query;
    // setCustodians : (vec principal) -> ();
    // cycles : () -> (nat) query;
    // totalUniqueHolders : () -> (nat) query;

    // tokenMetadata : (nat) -> (variant { Ok : TokenMetadata; Err : NftError }) query;
    public query func tokenMetadata ( tokedId :  Nat) : async Result.Result<TokenMetadata, NftError> {
        if (tokedId < ledger.size()) {
            #ok(ledger[tokedId]);
        } else {
            #err(#TokenNotFound);
        };
    }; 

    // balanceOf: (principal) -> (variant { Ok : nat; Err : NftError }) query;
    public query func balanceOf ( user : Principal) : async Nat {
        Array.filter<TokenMetadata>(Array.freeze(ledger), func (token) {
            token.owner == ?user;
        }).size();
    }; 

    // ownerOf : (nat) -> (variant { Ok : opt principal; Err : NftError }) query;
    public query func ownerOf ( tokedId : Nat) : async Result.Result<?Principal, NftError> {
        if (tokedId < ledger.size()) {
            #ok(ledger[tokedId].owner);
        } else {
            #err(#TokenNotFound);
        };
    };

    // ownerTokenIdentifiers : (principal) -> (variant { Ok : vec nat; Err : NftError }) query;

    // ownerTokenMetadata : (principal) -> (variant { Ok : vec TokenMetadata; Err : NftError }) query;
    public query func ownerTokenMetadata ( user : Principal) : async Result.Result<[TokenMetadata], NftError> {
        #ok(
            Array.filter<TokenMetadata>(Array.freeze(ledger), func (token) {
                token.owner == ?user;
            })
        )
    };

    // operatorOf : (nat) -> (variant { Ok : opt principal; Err : NftError }) query;
    // operatorTokenIdentifiers : (principal) -> (variant { Ok : vec nat; Err : NftError }) query;
    // operatorTokenMetadata : (principal) -> (variant { Ok : vec TokenMetadata; Err : NftError }) query;
    // supportedInterfaces : () -> (vec SupportedInterface) query;

    // totalSupply : () -> (nat) query;
    public query func totalSupply () : async Nat {
        return ledger.size();
    };

    // approve : (principal, nat) -> (variant { Ok : nat; Err : NftError });
    // setApprovalForAll : (principal, bool) -> (variant { Ok : nat; Err : NftError });
    // isApprovedForAll : (principal, principal) -> (variant { Ok : bool; Err : NftError }) query;
    // transfer : (principal, nat) -> (variant { Ok : nat; Err : NftError });
    // transferFrom : (principal, principal, nat) -> (variant { Ok : nat; Err : NftError });

    // UPDATE METHODS

    // mint : (principal, nat, vec record { text; GenericValue }) -> (variant { Ok : nat; Err : NftError });
    public shared ({ caller }) func mint ( 
        // Who are we minting too?
        to : Principal, 
        // Which token are we minting?
        tokedId : Nat,
        // Metadata of Token Minting
        properties : [(Text, GenericValue)],
    ) : async Result.Result<Nat, NftError> {
        ledger := Array.tabulateVar<TokenMetadata>(ledger.size() +1, func (i) {
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


    // burn : (nat) -> (variant { Ok : nat; Err : NftError });
    // transaction : (nat) -> (variant { Ok : TxEvent; Err : NftError }) query;
    // totalTransactions : () -> (nat) query;

    // type SupportedInterface = variant {
    //     Burn;
    //     Mint;
    //     Approval;
    //     TransactionHistory
    // };
    // type TxEvent = record {
    //     time : nat64;
    //     operation : text;
    //     details : vec record { text; GenericValue };
    //     caller : principal;
    // };
    // type Vec = vec record {
    //     text;
    //     variant {
    //         Nat64Content : nat64;
    //         Nat32Content : nat32;
    //         BoolContent : bool;
    //         Nat8Content : nat8;
    //         Int64Content : int64;
    //         IntContent : int;
    //         NatContent : nat;
    //         Nat16Content : nat16;
    //         Int32Content : int32;
    //         Int8Content : int8;
    //         FloatContent : float64;
    //         Int16Content : int16;
    //         BlobContent : vec nat8;
    //         NestedContent : Vec;
    //         Principal : principal;
    //         TextContent : text;
    //     };
    // };

}