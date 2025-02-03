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
    d3 : Text;
    desc : Text;
    views : Nat;
    lastV : Text;
  };

  public type PeriumMetadata = {
    d1 : ?[Blob];
    d2 : ?[Blob];
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
  
  // Store large Blob data separately
  stable var blobStore: [(Text, PeriumMetadata)] = [];
  var blobStore2: _HashMap.HashMap<Text, PeriumMetadata> = _HashMap.HashMap<Text, PeriumMetadata>(500, Text.equal, Text.hash);

  // HOME PAGE
  private stable var logo_ : ?Text = ?"https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-logo-square2.jpg";
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
  public query func getBlobChunks(nfc: Text, field: Text, chunkSize: Nat, startIndex: Nat): async ?[Blob] {
      let MAX_RESPONSE_SIZE : Nat = 3_000_000; // Hard response limit (~3MB)
      
      let perium = blobStore2.get(nfc);
      
      switch (perium) {
          case (?p) {
              let targetField = if (field == "d1") p.d1 else if (field == "d2") p.d2 else null;
              
              switch (targetField) {
                  case (?chunks) {
                      let totalChunks = Array.size(chunks);
                      if (startIndex >= totalChunks or chunkSize == 0) {
                          return ?[]; // Return empty array if out of bounds
                      };

                      var endIndex = Nat.min(totalChunks, startIndex + chunkSize);
                      var slicedChunks = Array.slice<Blob>(chunks, startIndex, endIndex);

                      // ✅ Ensure the total response size does NOT exceed the 3MB limit
                      var responseSize : Nat = 0;
                      var finalChunks : [Blob] = [];
                      
                      for (chunk in slicedChunks) {
                          let chunkSize = Array.size(Blob.toArray(chunk));
                          
                          if (responseSize + chunkSize > MAX_RESPONSE_SIZE) {
                              return ?finalChunks; // Stop adding more chunks if size limit is reached
                          };

                          finalChunks := Array.append(finalChunks, [chunk]);
                          responseSize += chunkSize;
                      };

                      // ✅ Debugging: Print the actual response size
                      _Debug.print("Returning " # Nat.toText(Array.size(finalChunks)) # " chunks, total size: " # Nat.toText(responseSize) # " bytes");

                      return ?finalChunks;
                  };
                  case null {
                      return null;
                  };
              };
          };
          case null {
              return null;
          };
      };
  };

  // CCPA UPDATE FUNCTIONS
  
  public shared (init_msg) func deletePerium(k : Text) : async () {
    if (allowed(init_msg.caller)) {
      ccpa2.delete(k);
    };
  };

  public shared func saveBlob(nfc: Text, field: Text, chunk: ?Blob): async () {
    // Only proceed if the chunk is not null
    switch (chunk) {
      case (?c) {
        // Retrieve the existing PeriumMetadata object
        let existingPerium = blobStore2.get(nfc);

        switch (existingPerium) {
          case (?perium) {
            // Append the chunk to the appropriate field
            let updatedPerium = {
              d1 = if (field == "d1") {
                // Append the chunk to d1, initialize as empty array if null
                ?Array.append(switch (perium.d1) {
                  case (?d1) d1; // Use existing d1
                  case null [];   // Default to empty array if d1 is null
                }, [c])
              } else {
                perium.d1; // Leave unchanged
              };
              d2 = if (field == "d2") {
                // Append the chunk to d2, initialize as empty array if null
                ?Array.append(switch (perium.d2) {
                  case (?d2) d2; // Use existing d2
                  case null [];   // Default to empty array if d2 is null
                }, [c])
              } else {
                perium.d2; // Leave unchanged
              };
            };

            // Replace the updated Perium object in the HashMap
            blobStore2.put(nfc, updatedPerium);
          };
          case null {
            // Handle the case where the PeriumMetadata object does not exist
            // crete a new PeriumMetadata object with the chunk
            let newPerium = {
              d1 = if (field == "d1") ?[c] else ?[];
              d2 = if (field == "d2") ?[c] else ?[];
            };

            // Add the new PeriumMetadata object to the HashMap
            blobStore2.put(nfc, newPerium);

            // Add the new PeriumMetadata object to the blobStore array
            blobStore := Array.append(blobStore, [(nfc, newPerium)]);
          };
        };
      };
      case null {
        // Do nothing if the chunk is null
        _Debug.print("Received a null chunk. No action taken.");
      };
    };
  };

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
    blobStore := _Iter.toArray(blobStore2.entries());
  };

  public shared func updateLastViewed(nfc: Text, lastViewed: Text): async () {
    let perium = ccpa2.get(nfc);
    switch (perium) {
      case (?p) {
        let updatedPerium = {
          nfc = p.nfc;
          dep = p.dep;
          tag = p.tag;
          cat = p.cat;
          title = p.title;
          d3 = p.d3;
          desc = p.desc;
          views = p.views + 1;
          lastV = lastViewed;
        };
        ccpa2.put(nfc, updatedPerium);
      };
      case null {
        // No Perium data found for this NFC
        _Debug.print("No Perium data found for NFC: " # nfc);
      };
    };
  };

  system func postupgrade() {
      ccpa2 := _HashMap.HashMap<Text, Perium>(500, Text.equal, Text.hash);
      blobStore2 := _HashMap.HashMap<Text, PeriumMetadata>(500, Text.equal, Text.hash);

      // Restore data from `ccpa` into `ccpa2`
      for ((key, value) in ccpa.vals()) {
        ccpa2.put(key, value);
      };

      // Restore data from `blobStore` into `blobStore2`
      for ((key, value) in blobStore.vals()) {
        blobStore2.put(key, value);
      };

      // Clear stable storage to free memory
      ccpa := [];
      blobStore := [];
  };

};
