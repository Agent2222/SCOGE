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
import T "metadata";
import Cycles "mo:base/ExperimentalCycles";
import D "mo:base/Debug";
import Float64 "mo:base/Float";
import List "mo:base/List";
import Debug "mo:base/Debug";
import Buffer "mo:base/Buffer";
import Blob "mo:base/Blob";
import Nat8 "mo:base/Nat8";

actor DIP721 {

    public type SupportedInterface = {
        Burn : Null;
        Mint : Null;
        Approval : Null;
        TransactionHistory: Null;
    };

    public type List<T> = ?(T, List<T>);

    public type TxEvent = {
        time : Nat64;
        operation : Text;
        details : [(Text, T.GenericValue )];
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

    private var nmcProps : [T.NMCProperties] = [({
        // ** Visual Identifier **
        ringType: Text = ""; 
        landRank: Nat64 = 0; 
        rank: Nat64 = 0;
        powerUps: [Nat64] = [0]; 
        progress: Nat64 = 0;
        xp: Nat64 = 0;
        category: Text = "";
        linked: Bool = false;
        // ** Player Info **
        identifier: Text = "";
        alias: Text = "";
        email: Text = "";
        // earthImage: [Nat8] = []; 
        earthText: [Text] = [""];
        styles: [Text] = [""];
        // ** Player Stats **
        discovered: [Text] = [""];
        discoveredProgress: Float = 0.0;
        power: Nat64 = 0;
        mental: Nat64 = 0;
        physical: Nat64 = 0;
        health: Nat64 = 0;
        speed: Nat64 = 0;
        sight: Nat64 = 0;
        endurance: Float = 0.0;
        domains: [Nat64] = [0];
        playerLocation: Nat64 = 0;
        // ** Player Settings **
        soundLevel: Float = 0.0;
        musicLevel: Float = 0.0;
        fsOn: Bool = false;
        notiOn: Bool = false;
        // ** Player Network **
        networkClass: Text = "";
        network: [Text] = [""];
        // ** Land Info **
        landNumber: Nat64 = 0;
        story = {
            title: Text = "";
            text: Text = "";
            imagesUri: [Text] = [""];
            videoURI: Text = "";
        };
        // bankooImage: [Blob] = [];
        bankooText: [Text] = [""];
        imageCompData: [Nat8] = [0];
        // ** History **
        ancestorsNames: [Text] = [""];
        ancestorsImages: [Nat8] = [0];
    })];

    // Testing upgrade

    // Canister State Here
    private stable var admin : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";
    private stable var admin2 : Text = "pzf4c-tunkg-cx6cq-wquml-hvydb-rku72-o45ud-b7ote-64ctg-mtxls-oqe";

    private stable var Uniledger : [var T.TokenMetadata] = [var];
    let digisetteAlphaLedger = Buffer.fromArray<T.TokenMetadata>(Array.freeze(Uniledger));
    private stable var digisetteAlphaRings : Nat = 450;
    private stable var logo_ : ?Text = ?"https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-logo-square2.jpg";
    private stable var name_ : ?Text = ?"SCOGE_Dip721";
    private stable var name2_ : ?Text = ?"SCOGE_Dip721MMMMM";
    private stable var created_at_ : Nat64 = Nat64.fromNat(Int.abs(Time.now()));
    private stable var upgraded_at_ : Nat64 = Nat64.fromNat(Int.abs(Time.now()));
    private stable var custodians_ : [Principal] = [Principal.fromText(admin), ];
    private stable var symbol_ : ?Text = ?"SCOGÉ";
    private stable var cycles_ : Nat = Cycles.balance();
    private stable var total_transactions_ : Nat = Cycles.balance();
    private stable var total_unique_holders_ : Nat = Cycles.balance();
    private stable var total_supply_ : Nat = digisetteAlphaRings;
    private stable var owner : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";
    private stable var supportedInterface_ : [SupportedInterface] = [];


    //////////////////////////
    // TEMP DATA
    //////////////////////////
    // Temp Data stprage before migration to Origyn or EXT
    private stable var tempData : [var T.TokenMetadata] = [var];

    // Temp CRUD save data to tempData
     public shared ({ caller }) func savetoTemp ( 
        // Who are we minting too?
        to : Principal, 
        // Which token are we minting?
        tokedId : Nat,
        // Metadata of Token Minting
        properties : [(T.NMCProperties)],
    ) : async Result.Result<Nat, NftError> {
        tempData := Array.tabulateVar<T.TokenMetadata>(tempData.size() +1, func (i) {
            if (i < tempData.size()) {
                tempData[i];
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
        #ok(tempData.size() - 1);
    };

    // Update tempData at index
    public shared ({ caller }) func updateTemp ( 
        to : Principal,
        // Which token are we minting?
        tokedId : Nat,
        // Metadata of Token Minting
        properties : [(T.NMCProperties)],
    ) : async Result.Result<Nat, NftError> {
        tempData := Array.tabulateVar<T.TokenMetadata>(tempData.size(), func (i) {
            if (i == tokedId) {
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
            } else {
                tempData[i];
            };
        });
        #ok(tempData.size() - 1);
    };

    // query tempData at index
    public query func tempMetaData ( tokedId :  Nat) : async Result.Result<T.TokenMetadata, NftError> {
        if (tokedId < tempData.size()) {
            #ok(tempData[tokedId]);
        } else {
            #err(#TokenNotFound);
        };
    }; 

    //////////////////////////
    // END TEMP DATA
    //////////////////////////

    // @DIP721

    // Check for allowed prin
    func allowed(id: Principal) : Bool {
        Option.isSome(Array.find(custodians_, func (x: Principal) : Bool {
           return x == id
        }))
    };

    // QUERY FUNCTIONS

    // metadata: () -> (Metadata) query;
    public query func metadata () : async (T.Metadata) {
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
    public query func stats () : async (T.Stats) {
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

    // admin : () -> (text) query;
    public query func adminUser () : async Text {
        return admin
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

    public query func alphaLedger () : async (Nat) {
        return digisetteAlphaLedger.size();
    };

    // tokenMetadata : (nat) -> (variant { Ok : TokenMetadata; Err : NftError }) query;
    public query func tokenMetadata ( tokedId :  Nat) : async Result.Result<T.TokenMetadata, NftError> {
        if (tokedId < Uniledger.size()) {
            #ok(Uniledger[tokedId]);
        } else {
            #err(#TokenNotFound);
        };
    }; 

    // balanceOf: (principal) -> (variant { Ok : nat; Err : NftError }) query;
    // How many nfts does the user own?
    public query func balanceOf ( user : Principal) : async Result.Result<Nat,NftError> {
        if (Uniledger.size() != 0) {
        #ok(Array.filter<T.TokenMetadata>(Array.freeze(Uniledger), func (token) {
            token.owner == ?user;
        }).size())
        } else {
            #err(#NotFound);
        }
    }; 

    // ownerOf : (nat) -> (variant { Ok : opt principal; Err : NftError }) query;
    // Who owns this NFT?
    public query func ownerOf ( tokedId : Nat) : async Result.Result<?Principal, NftError> {
        if (tokedId < Uniledger.size()) {
            #ok(Uniledger[tokedId].owner);
        } else {
            #err(#TokenNotFound);
        };
    };

    // ownerTokenIdentifiers : (principal) -> (variant { Ok : vec nat; Err : NftError }) query;

    // operatorTokenIdentifiers : (principal) -> (variant { Ok : vec nat; Err : NftError }) query;

    // ownerTokenMetadata : (principal) -> (variant { Ok : vec TokenMetadata; Err : NftError }) query;
    public query func ownerTokenMetadata ( user : Principal) : async Result.Result<[T.TokenMetadata], NftError> {
        #ok(
            Array.filter<T.TokenMetadata>(Array.freeze(Uniledger), func (token) {
                token.owner == ?user;
            })
        );
    };

    // operatorOf : (nat) -> (variant { Ok : opt principal; Err : NftError }) query;
    public query func operatorOf ( tokedId : Nat) : async Result.Result<?Principal, NftError> {
        if (tokedId < Uniledger.size()) {
            #ok(Uniledger[tokedId].operator);
        } else {
            #err(#TokenNotFound);
        };
    };

    // operatorTokenMetadata : (principal) -> (variant { Ok : vec TokenMetadata; Err : NftError }) query;
    public query func operatorTokenMetadata ( user : Principal) : async Result.Result<[T.TokenMetadata], NftError> {
        #ok(
            Array.filter<T.TokenMetadata>(Array.freeze(Uniledger), func (token) {
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
        return Uniledger.size();
    };

    // UPDATE METHODS

    // mint : (principal, nat, vec record { text; GenericValue }) -> (variant { Ok : nat; Err : NftError });
    public shared ({ caller }) func mint ( 
        // Who are we minting too?
        to : Principal, 
        // Which token are we minting?
        tokedId : Nat,
        // Metadata of Token Minting
        properties : [(T.NMCProperties)],
    ) : async Result.Result<Nat, NftError> {
        Uniledger := Array.tabulateVar<T.TokenMetadata>(Uniledger.size() +1, func (i) {
            if (i < Uniledger.size()) {
                Uniledger[i];
            } else {
                {
                    transferred_at = null;
                    transferred_by = null;
                    owner = ?to;
                    operator = ?to;
                    properties = nmcProps;
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
        digisetteAlphaRings := digisetteAlphaRings - 1;
        #ok(Uniledger.size() - 1);
    };

    // setCustodians : (vec principal) -> ();
    public shared(init_msg) func setCustodians (newCustodian : [Principal]) : async () {
        if (init_msg.caller == Principal.fromText(admin2)) {
            custodians_ := newCustodian;
        };
    };

    // setSymbol : (text) -> ();
    // *** BY CUSTODIAN
    public shared(init_msg) func setSymbol (newSymbol : Text) : async () {
        if (allowed(init_msg.caller)) {
            symbol_ := ?newSymbol;
        };
    };

    // setName : (text) -> ();
    // Sets Name of NFt Canister
     // *** BY CUSTODIAN
    public shared(init_msg) func setName (newName : Text) : async () {
        // if (allowed(init_msg.caller)) {
            name_ := ?newName;
        // };
    };

    // setLogo : (text) -> ();
    // *** BY CUSTODIAN
    public shared(init_msg) func setLogo (newLogo : Text) : async () {
        if (allowed(init_msg.caller)) {
            logo_ := ?newLogo;
        };
    };

    // updateNMC
    // public func updateNmc(tokenId: Nat, principal: Principal, metadata: T.NMCProperties) : async Result.Null{
    // let found = false;
    // for i in Iter.range(0, Array.length(Uniledger)) {
    //     if (Uniledger[i].tokenID == tokenId && Uniledger[i].owner == principal) {
    //         Uniledger[i].metadata = metadata;
    //         found = true;
    //         break;
    //     }
    // }
    // if (!found) {
    //     return Result.Err(NftError.TokenNotFound);
    // }
    //     return Result.Ok(Null);
    // }


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

    // system func preupgrade() {
    //     Uniledger := Buffer.toVarArray(digisetteAlphaLedger);
    // };

    // system func postupgrade() {
    //     Uniledger := [var];
    // };
}

