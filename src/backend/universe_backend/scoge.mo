import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Nat16 "mo:base/Nat16";
import Nat32 "mo:base/Nat32";
import Nat64 "mo:base/Nat64";
import Int "mo:base/Int";
import Int8 "mo:base/Int8";
import Int16 "mo:base/Int16";
import Int32 "mo:base/Int32";
import Int64 "mo:base/Int64";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Blob "mo:base/Blob";
import Array "mo:base/Array";
import Option "mo:base/Option";
import Float "mo:base/Float";
import Bool "mo:base/Bool";
import Iter "mo:base/Iter";

actor Scoge_ICRC60 {

    // Define custom types
    type Subaccount = Blob;

    type Account = {
        owner : Principal;
        subaccount : ?Subaccount;
        // Extended types
        nft : ?NFT;
    };

    // Generic value in accordance with ICRC-3
    type Value = {
        #Blob : Blob;
        #Text : Text;
        #Nat : Nat;
        #Int : Int;
        #Array : [Value];
        #Map : [(Text, Value)];
        // Extended types
        #Bool : Bool;
        #Float : Float;
    };

    // ICRC-16 type for nested and complex data structures
    type ICRC16 = {
        #Int : Int;
        #Int8 : Int8;
        #Int16 : Int16;
        #Int32 : Int32;
        #Int64 : Int64;
        #Ints : [Int];
        #Nat : Nat;
        #Nat8 : Nat8;
        #Nat16 : Nat16;
        #Nat32 : Nat32;
        #Nat64 : Nat64;
        #Float : Float;
        #Text : Text;
        #Bool : Bool;
        #Blob : Blob;
        #Class : [{ name : Text; value : ICRC16; immutable : Bool }];
        #Principal : Principal;
        #Floats : [Float];
        #Nats : [Nat];
        #Array : [ICRC16];
        #Option : ?ICRC16;
        #Bytes : [Nat8];
        #ValueMap : [(ICRC16, ICRC16)];
        #Map : [{ key : Text; value : ICRC16 }];
        #Set : [ICRC16];
    };

    // ICRC-60 Specific Types
    type MetadataValue = {
        key : Text;
        value : Value;
        // permissions: ?Permission; // Optional permissions field
    };

    type TransferArg = {
        from_subaccount : ?Blob; // The subaccount to transfer the token from
        to : Account;
        token_id : Nat;
        memo : ?Blob;
        created_at_time : ?Nat64;
    };

    type TransferResult = {
        #Ok : Nat; // Transaction index for successful transfer
        #Err : TransferError;
    };

    type TransferError = {
        #NonExistingTokenId;
        #InvalidRecipient;
        #Unauthorized;
        #TooOld;
        #CreatedInFuture : { ledger_time : Nat64 };
        #Duplicate : { duplicate_of : Nat };
        #GenericError : { error_code : Nat; message : Text };
        #GenericBatchError : { error_code : Nat; message : Text };
    };

    // ICRC-60 Specific Transfer Args using ICRC16 for metadata
    type DynamicStageArg = {
        token_id : Nat;
        metadata : ICRC16;
        memo : ?Blob;
        created_at_time : ?Nat64;
    };

    // Permission model
    type DappPermissions = {
        read : Value;
        write : Value;
        permissions : Value;
        data : ICRC16;
    };

    type Permission = {
        read : [Principal]; // Principals allowed to read
        write : [Principal]; // Principals allowed to write
    };

    type NFT = {
        id : Nat;
        metadata : [MetadataValue];
    };

    // Struct for storing application permissions and data
    type AppMetadata = {
        name : Text;
        permissions : DappPermissions;
    };

    type Story = {
        title : Text;
        text : Text;
        imagesUri : [Text];
        videoURI : Text;
    };

    type Metadata = {
        ringType : Text;
        landRank : Nat;
        rank : Nat;
        powerUps : [Nat];
        progress : Nat;
        xp : Nat;
        category : Text;
        linked : Bool;
        identifier : Text;
        alias : Text;
        email : Text;
        earthText : [Text];
        styles : [Text];
        discovered : [Text];
        discoveredProgress : Float;
        power : Nat;
        mental : Nat;
        physical : Nat;
        health : Nat;
        speed : Nat;
        sight : Nat;
        endurance : Float;
        domains : [Nat];
        playerLocation : Nat;
        soundLevel : Float;
        musicLevel : Float;
        fsOn : Bool;
        notiOn : Bool;
        networkClass : Text;
        network : [Text];
        landNumber : Nat;
        story : Story;
        bankooText : [Text];
        imageCompData : [Nat];
        ancestorsNames : [Text];
        ancestorsImages : [Nat];
    };

    // State variables
    stable var collectionMetadata : [(Text, Value)] = [];
    stable var totalSupply : Nat = 0;
    stable var supplyCap : ?Nat = ?1000;
    stable var maxQueryBatchSize : ?Nat = null;
    stable var maxUpdateBatchSize : ?Nat = null;
    stable var defaultTakeValue : ?Nat = null;
    stable var maxTakeValue : ?Nat = null;
    stable var maxMemoSize : ?Nat = null;
    stable var atomicBatchTransfers : ?Bool = null;
    stable var txWindow : ?Nat = null;
    stable var permittedDrift : ?Nat = null;
    stable var tokenMetadata : [[(Text, Value)]] = [];
    stable var ownerOf : [Account] = [];
    stable var balanceOf : [Nat] = [];
    stable var tokens : [Nat] = [];
    // stable var transfers : [TransferArg] = [];
    stable var dynamicMetadata : [var [MetadataValue]] = [var []]; // ICRC-60 Specific: Dynamic Metadata for NFTs
    stable var appMetadata : [(Text, AppMetadata)] = []; // ICRC-60 Specific: App Metadata

    // ICRC-7 Methods

    // Retrieves collection-level metadata
    public query func icrc7_collection_metadata() : async [(Text, Value)] {
        return collectionMetadata;
    };

    //WORKING//
    // Retrieves the symbol of the token
    public query func icrc7_symbol() : async Text {
        return "SYMBOL"; // Replace with the actual symbol
    };

    //WORKING//
    // Retrieves the name of the token
    public query func icrc7_name() : async Text {
        return "Token Name"; // Replace with the actual name
    };

    //WORKING//
    // Retrieves the description of the token
    public query func icrc7_description() : async ?Text {
        return ?"Token Description"; // Replace with the actual description
    };

    //WORKING//
    // Retrieves the logo URL of the token
    public query func icrc7_logo() : async ?Text {
        return ?"https://example.com/logo.png"; // Replace with the actual logo URL
    };

    //WORKING//
    // Retrieves the total supply of tokens
    public query func icrc7_total_supply() : async Nat {
        return totalSupply;
    };

    //WORKING//
    // Retrieves the supply cap of the token
    public query func icrc7_supply_cap() : async ?Nat {
        return supplyCap;
    };

    //WORKING//
    // Retrieves the maximum batch size for queries
    public query func icrc7_max_query_batch_size() : async ?Nat {
        return maxQueryBatchSize;
    };

    //WORKING//
    // Retrieves the maximum batch size for updates
    public query func icrc7_max_update_batch_size() : async ?Nat {
        return maxUpdateBatchSize;
    };

    //WORKING//
    // Retrieves the default take value for batch operations
    public query func icrc7_default_take_value() : async ?Nat {
        return defaultTakeValue;
    };

    //WORKING//
    // Retrieves the maximum take value for batch operations
    public query func icrc7_max_take_value() : async ?Nat {
        return maxTakeValue;
    };

    //WORKING//
    // Retrieves the maximum size of memo fields
    public query func icrc7_max_memo_size() : async ?Nat {
        return maxMemoSize;
    };

    //WORKING//
    // Checks if atomic batch transfers are supported
    public query func icrc7_atomic_batch_transfers() : async ?Bool {
        return atomicBatchTransfers;
    };

    //WORKING//
    // Retrieves the transaction window size
    public query func icrc7_tx_window() : async ?Nat {
        return txWindow;
    };

    //WORKING//
    // Retrieves the permitted drift for transactions
    public query func icrc7_permitted_drift() : async ?Nat {
        return permittedDrift;
    };

    //WORKING//
    public query func icrc7_token_metadata(token_ids : [Nat]) : async [[?[(Text, Value)]]] {
        // Initialize the result array with the same size as token_ids
        var result : [var [?[(Text, Value)]]] = Array.tabulateVar(
            token_ids.size(),
            func(_ : Nat) : [?[(Text, Value)]] {
                return [null];
            },
        );

        // Iterate over the token_ids to populate the result array
        let iter = Iter.fromArray(token_ids);
        Iter.iterate(
            iter,
            func(id : Nat, i : Nat) {
                if (id < dynamicMetadata.size()) {
                    let metadata : [MetadataValue] = dynamicMetadata[id];
                    // Convert MetadataValue to [(Text, Value)]
                    let convertedMetadata : [(Text, Value)] = Array.map<MetadataValue, (Text, Value)>(
                        metadata,
                        func(mv : MetadataValue) : (Text, Value) {
                            return (mv.key, mv.value);
                        },
                    );
                    result[i] := [?convertedMetadata];
                } else {
                    result[i] := [null];
                };
            },
        );

        return Array.freeze(result);
    };

    ////////BROKEN/////////
    // Retrieves the owner of specific tokens
    public query func icrc7_owner_of(token_ids : [Nat]) : async [?Account] {
        var result : [var ?Account] = Array.tabulateVar(
            token_ids.size(),
            func(_ : Nat) : ?Account {
                return null;
            },
        );

        let iter = Iter.fromArray(token_ids);
        Iter.iterate(
            iter,
            func(id : Nat, i : Nat) {
                if (id < ownerOf.size()) {
                    result[i] := ?ownerOf[id];
                };
            },
        );

        return Array.freeze(result);
    };

    ////////BROKEN/////////
    // Retrieves the balance of specific accounts
    public query func icrc7_balance_of(accounts : [Account]) : async [Nat] {
        let result : [var Nat] = Array.init<Nat>(accounts.size(), 0);
        let iter = Iter.fromArray(accounts);
        Iter.iterate(
            iter,
            func(account : Account, i : Nat) {
                var balance : Nat = 0;
                let ownerIter = Iter.fromArray(ownerOf);
                Iter.iterate(
                    ownerIter,
                    func(acc : Account, idx : Nat) {
                        if (acc.owner == account.owner and acc.subaccount == account.subaccount) {
                            balance := balanceOf[idx];
                            return;
                        };
                    },
                );
                result[i] := balance;
            },
        );
        return Array.freeze(result);
    };

    //WORKING//
    // Retrieves a batch of tokens
    public query func icrc7_tokens(prev : ?Nat, take : ?Nat) : async [Nat] {
        let start = Option.get(prev, 0);
        let takeValue = Option.get(take, tokens.size());
        let end = start + takeValue;

        // Create an array of indices
        let indices = Array.tabulate<Nat>(
            tokens.size(),
            func(i : Nat) : Nat {
                i;
            },
        );

        // Filter tokens based on the computed range
        let filteredTokens = Array.filter<Nat>(
            indices,
            func(index : Nat) : Bool {
                index >= start and index < end
            },
        );

        // Map the filtered indices to tokens
        let result = Array.map<Nat, Nat>(
            filteredTokens,
            func(index : Nat) : Nat {
                tokens[index];
            },
        );

        return result;
    };

    //UKNOWN//
    // Retrieves tokens owned by a specific account
    public query func icrc7_tokens_of(account : Account, prev : ?Nat, take : ?Nat) : async [Nat] {
        let start = Option.get(prev, 0);
        let takeValue = Option.get(take, tokens.size());
        let end = start + takeValue;

        // Filter tokens owned by the specified account
        let accountTokens = Array.filter<Nat>(
            tokens,
            func(tokenId : Nat) : Bool {
                ownerOf[tokenId] == account;
            },
        );

        // Create an array of indices to slice
        let filteredIndices = Array.tabulate<Nat>(
            accountTokens.size(),
            func(i : Nat) : Nat {
                i;
            },
        );

        // Filter indices based on the computed range
        let rangeIndices = Array.filter<Nat>(
            filteredIndices,
            func(index : Nat) : Bool {
                index >= start and index < end
            },
        );

        // Map the filtered indices to tokens
        let result = Array.map<Nat, Nat>(
            rangeIndices,
            func(index : Nat) : Nat {
                accountTokens[index];
            },
        );

        return result;
    };

    // Performs a batch of token transfers
    // public func icrc7_transfer(transfers : [TransferArg]) : async [?TransferResult] {
    //     let iter = Iter.fromArray(transfers);
    //     let resultIter = Iter.map(
    //         iter,
    //         func(transfer : TransferArg) : ?TransferResult {
    //             // Check for errors and process the transfer
    //             if (not isValidTokenId(transfer.token_id)) {
    //                 return ? #Err(#NonExistingTokenId);
    //             };
    //             if (not isValidRecipient(transfer.to)) {
    //                 return ? #Err(#InvalidRecipient);
    //             };
    //             if (not isAuthorized(transfer.from_subaccount, transfer.token_id)) {
    //                 return ? #Err(#Unauthorized);
    //             };
    //             if (isTooOld(transfer.created_at_time)) {
    //                 return ? #Err(#TooOld);
    //             };
    //             if (isCreatedInFuture(transfer.created_at_time)) {
    //                 return ? #Err(#CreatedInFuture { ledger_time = Option.unwrap(transfer.created_at_time) });
    //             };
    //             if (isDuplicate(transfer)) {
    //                 return ? #Err(#Duplicate { duplicate_of = transfer.token_id });
    //             };

    //             // Perform the transfer
    //             performTransfer(transfer);
    //             return ? #Ok(transfer.token_id);
    //         },
    //     );
    //     return Iter.toArray(resultIter);
    // };

    // // ICRC-60 Specific Methods

    ////////BROKEN/////////
    // Mints a new token with metadata
    public func icrc60_mint(metadata : [MetadataValue]) : async Nat {
        // Generate a new token ID using the current totalSupply
        let newTokenId = totalSupply;

        // Create new dynamic metadata array with the new token metadata
        let newDynamicMetadata : [var [MetadataValue]] = Array.tabulateVar(
            dynamicMetadata.size() + 1,
            func(i : Nat) : [MetadataValue] {
                if (i < dynamicMetadata.size()) {
                    return dynamicMetadata[i];
                } else {
                    return metadata;
                };
            },
        );
        dynamicMetadata := newDynamicMetadata;

        // Create new tokens array with the new token ID
        let newTokens : [Nat] = Array.tabulate(
            tokens.size() + 1,
            func(i : Nat) : Nat {
                if (i < tokens.size()) {
                    return tokens[i];
                } else {
                    return newTokenId;
                };
            },
        );
        tokens := newTokens;

        totalSupply += 1;
        return newTokenId;
    };

    // Finds the index of an element in an array
    func indexOf<T>(array : [T], element : T) : ?Nat {
        let iter = Iter.fromArray(array);
        var index : ?Nat = null;
        Iter.iterate(
            iter,
            func(el : T, i : Nat) {
                if (el == element) {
                    index := ?i;
                };
            },
        );
        return index;
    };

    // Burns a token
    public func icrc60_burn(token_id : Nat) : async ?Nat {
        let indexOpt = indexOf<Nat>(tokens, token_id);
        switch (indexOpt) {
            case (?index) {
                // Filter out the token to burn
                let newTokens : [Nat] = Array.tabulate<Nat>(
                    tokens.size() - 1,
                    func(i : Nat) : Nat {
                        if (i < index) {
                            return tokens[i];
                        } else {
                            return tokens[i + 1];
                        };
                    },
                );
                tokens := newTokens;

                // Filter out the metadata for the burned token
                let newDynamicMetadata : [var [MetadataValue]] = Array.tabulateVar<[MetadataValue]>(
                    dynamicMetadata.size() - 1,
                    func(i : Nat) : [MetadataValue] {
                        if (i < index) {
                            return dynamicMetadata[i];
                        } else {
                            return dynamicMetadata[i + 1];
                        };
                    },
                );
                dynamicMetadata := newDynamicMetadata;

                totalSupply -= 1;
                return ?token_id;
            };
            case null {
                return null;
            };
        };
    };

    // Updates metadata for a token
    public func icrc60_update_metadata(token_id : Nat, metadata : [MetadataValue]) : async ?Nat {
        let indexOpt = indexOf<Nat>(tokens, token_id);
        switch (indexOpt) {
            case (?index) {
                dynamicMetadata[index] := metadata;
                return ?token_id;
            };
            case null {
                return null;
            };
        };
    };

    // Adds a new app to the icrc60:apps node
    public func icrc60_add_app(appName : Text, newAppMetadata : AppMetadata) : async () {
        // Create a new mutable array with the new size
        let newAppMetadataArray : [var (Text, AppMetadata)] = Array.tabulateVar<(Text, AppMetadata)>(
            appMetadata.size() + 1,
            func(i : Nat) : (Text, AppMetadata) {
                if (i < appMetadata.size()) {
                    return appMetadata[i];
                } else {
                    return (appName, newAppMetadata);
                };
            },
        );

        // Update the state variable with the new mutable array
        appMetadata := Array.freeze(newAppMetadataArray);
    };

    // Updates the permissions for an existing app
    public func icrc60_update_app_permissions(appName : Text, newPermissions : DappPermissions) : async ?Text {
        var foundIndex : ?Nat = null;

        // Find the index of the app with the given name
        var i : Nat = 0;
        while (i < appMetadata.size() and foundIndex == null) {
            if (appMetadata[i].0 == appName) {
                foundIndex := ?i;
            };
            i += 1;
        };

        // Update the permissions if the app is found
        switch (foundIndex) {
            case (?index) {
                // Create a mutable copy of the appMetadata array
                var newAppMetadataArray : [var (Text, AppMetadata)] = Array.thaw(appMetadata);

                // Update the permissions for the found app
                let (name, metadata) = newAppMetadataArray[index];
                newAppMetadataArray[index] := (name, { metadata with permissions = newPermissions });

                // Freeze the mutable array and update the state variable
                appMetadata := Array.freeze(newAppMetadataArray);
                return ?appName;
            };
            case null {
                return null;
            };
        };
    };

    // Retrieves the metadata for an app
    public func metadataToICRC7(metadata : Metadata) : async [MetadataValue] {
        return [
            { key = "ringType"; value = #Text(metadata.ringType) },
            { key = "landRank"; value = #Nat(metadata.landRank) },
            { key = "rank"; value = #Nat(metadata.rank) },
            {
                key = "powerUps";
                value = #Array(Array.map<Nat, Value>(metadata.powerUps, func(x : Nat) : Value { #Nat(x) }));
            },
            { key = "progress"; value = #Nat(metadata.progress) },
            { key = "xp"; value = #Nat(metadata.xp) },
            { key = "category"; value = #Text(metadata.category) },
            { key = "linked"; value = #Bool(metadata.linked) },
            { key = "identifier"; value = #Text(metadata.identifier) },
            { key = "alias"; value = #Text(metadata.alias) },
            { key = "email"; value = #Text(metadata.email) },
            {
                key = "earthText";
                value = #Array(Array.map<Text, Value>(metadata.earthText, func(x : Text) : Value { #Text(x) }));
            },
            {
                key = "styles";
                value = #Array(Array.map<Text, Value>(metadata.styles, func(x : Text) : Value { #Text(x) }));
            },
            {
                key = "discovered";
                value = #Array(Array.map<Text, Value>(metadata.discovered, func(x : Text) : Value { #Text(x) }));
            },
            {
                key = "discoveredProgress";
                value = #Float(metadata.discoveredProgress);
            },
            { key = "power"; value = #Nat(metadata.power) },
            { key = "mental"; value = #Nat(metadata.mental) },
            { key = "physical"; value = #Nat(metadata.physical) },
            { key = "health"; value = #Nat(metadata.health) },
            { key = "speed"; value = #Nat(metadata.speed) },
            { key = "sight"; value = #Nat(metadata.sight) },
            { key = "endurance"; value = #Float(metadata.endurance) },
            {
                key = "domains";
                value = #Array(Array.map<Nat, Value>(metadata.domains, func(x : Nat) : Value { #Nat(x) }));
            },
            { key = "playerLocation"; value = #Nat(metadata.playerLocation) },
            { key = "soundLevel"; value = #Float(metadata.soundLevel) },
            { key = "musicLevel"; value = #Float(metadata.musicLevel) },
            { key = "fsOn"; value = #Bool(metadata.fsOn) },
            { key = "notiOn"; value = #Bool(metadata.notiOn) },
            { key = "networkClass"; value = #Text(metadata.networkClass) },
            {
                key = "network";
                value = #Array(Array.map<Text, Value>(metadata.network, func(x : Text) : Value { #Text(x) }));
            },
            { key = "landNumber"; value = #Nat(metadata.landNumber) },
            {
                key = "story";
                value = #Map([
                    ("title", #Text(metadata.story.title)),
                    ("text", #Text(metadata.story.text)),
                    ("imagesUri", #Array(Array.map<Text, Value>(metadata.story.imagesUri, func(x : Text) : Value { #Text(x) }))),
                    ("videoURI", #Text(metadata.story.videoURI)),
                ]);
            },
            {
                key = "bankooText";
                value = #Array(Array.map<Text, Value>(metadata.bankooText, func(x : Text) : Value { #Text(x) }));
            },
            {
                key = "imageCompData";
                value = #Array(Array.map<Nat, Value>(metadata.imageCompData, func(x : Nat) : Value { #Nat(x) }));
            },
            {
                key = "ancestorsNames";
                value = #Array(Array.map<Text, Value>(metadata.ancestorsNames, func(x : Text) : Value { #Text(x) }));
            },
            {
                key = "ancestorsImages";
                value = #Array(Array.map<Nat, Value>(metadata.ancestorsImages, func(x : Nat) : Value { #Nat(x) }));
            },
        ];
    };

    // Helper functions

    // // Validates if a token ID is valid
    // private func isValidTokenId(token_id : Nat) : Bool {
    //     return token_id < tokens.size();
    // };

    // // Validates if the recipient is valid
    // private func isValidRecipient(to : Account) : Bool {
    //     // Implement recipient validation logic here
    //     return true;
    // };

    // // Validates if the transfer is authorized
    // private func isAuthorized(from_subaccount : ?Blob, token_id : Nat) : Bool {
    //     // Implement authorization logic here
    //     return true;
    // };

    // // Checks if the transfer is too old
    // private func isTooOld(created_at_time : ?Nat64) : Bool {
    //     // Implement logic to check if the transfer is too old
    //     return false;
    // };

    // // Checks if the transfer is created in the future
    // private func isCreatedInFuture(created_at_time : ?Nat64) : Bool {
    //     // Implement logic to check if the transfer is created in the future
    //     return false;
    // };

    // // Checks if the transfer is a duplicate
    // private func isDuplicate(transfer : TransferArg) : Bool {
    //     // Implement logic to check for duplicate transfers
    //     return false;
    // };

    // // Performs the transfer logic
    // private func performTransfer(transfer : TransferArg) {
    //     // Implement the transfer logic here
    // };

    //     Compatible with EXT interface
    // ext-core
    // balance: query (request : BalanceRequest) -> async BalanceResponse;

    // transfer: shared (request : TransferRequest) -> async TransferResponse;

    // nonfungible
    // bearer: shared query (token : TokenIdentifier) -> async Result<AccountIdentifier, CommonError>;

    // mintNFT: shared (request : MintRequest) -> async ();

    // common
    // metadata: shared query (token : TokenIdentifier) -> async Result<Metadata, CommonError>;

    // supply: shared query (token : TokenIdentifier) -> async Result<Balance, CommonError>;

    // allowance
    // allowance: shared query (request : AllowanceRequest) -> async async Result<Balance, CommonError>;

    // approve: shared (request : ApproveRequest) -> async ();

    // other
    // batchMintNFT: shared (request : vec MintRequest) -> async ();
    

    // getTokenIdentifier : (nat) -> (text) query;

    // extensions : () -> (vec text) query;

    // Transfer support address
    // By setting principal mapping address, support using address when transfer
};
