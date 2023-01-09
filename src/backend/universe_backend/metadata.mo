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

    public type NMCProperties = {
        identifier: Text;
        alias: Text;
        email: Text;
        domains: ?[Nat64];
        pillType: Text;
        landNumber: Nat64;
        landRank: Nat64;
        rank: Nat64;
        netClass: ?Text;
        powerUps: ?[Nat64];
        progress: Nat64;
        discovered: ?[Text];
        discoveredProgress: ?Float;
        xp: ?Nat64;
        power: ?Nat64;
        mental: ?Nat64;
        physical: ?Nat64;
        health: ?Nat64;
        speed: ?Nat64;
        sight: ?Nat64;
        endurance: ?Float;
        network: ?[Text];
        soundLevel: ?Float;
        musicLevel: ?Float;
        fsOn: ?Bool;
        notiOn: ?Bool;
        imageURI: Text;
        videoURI: ?Text;
        story: ?Text;
        category: Text;
        linked: ?Bool;
        bankooImage: ?[Nat8];
        bankooText: ?[Text];
        earthImage: ?[Nat8];
        earthText: ?[Text];
        data: ?[Nat8];
        ancestorsNames: ?[Text];
        ancestorsImages: ?[Nat8];
        styles: ?[Text];
    };

    public type Stats = {
        cycles : Nat;
        total_transactions : Nat;
        total_unique_holders : Nat;
        total_supply : Nat;
    };
}