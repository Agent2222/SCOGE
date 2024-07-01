import Debug "mo:base/Debug";
// import Cycles "mo:base/ExperimentalCycles";
import T "metadata";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
import Buffer "mo:base/Buffer";
import Option "mo:base/Option";
import Result "mo:base/Result";

shared (msg) actor class taoscity() {

  Debug.print(debug_show ("CALLER", msg.caller));

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

  /////////////////
  // Stable state //
  /////////////////

  // Canister Admin principal
  private stable let admin : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";
  // Canister controller canister principal
  private stable let admin2 : Text = "pzf4c-tunkg-cx6cq-wquml-hvydb-rku72-o45ud-b7ote-64ctg-mtxls-oqe";
  // Canister controller canister principal
  private stable let owner : Text = "[Canister br5f7-7uaaa-aaaaa-qaaca-cai] 2vxsx-fae";
  // Custodians
  private stable let custodians_ : [Principal] = [Principal.fromText("qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe"), Principal.fromText("pzf4c-tunkg-cx6cq-wquml-hvydb-rku72-o45ud-b7ote-64ctg-mtxls-oqe")];

  // stable array for domains
  private stable var domains_ : [var T.Domain] = [var];

  // Cycles balance storage
  // private stable var cycles_ : Nat = Cycles.balance();

  /////////////////
  // Constructor //
  /////////////////
  public shared (init_msg) func initTaosCity(caller : Principal) {
    assert (allowed(caller));
    // var batch1 : Nat = 500;
    var batch : Nat = 16319;
    // 32.6 Epochs at 500 domains per epoch
    var x : [var T.Domain] = Array.init<T.Domain>(
      batch,
      {
        id : Nat = 0;
        x : Text = "0";
        y : Text = "0";
        owner : Text = "null";
        region : Text = "null";
        sector : Nat = 0;
        function : Text = "null"; // First selection free, then pay to change
        material : Text = "null";
        visibility : Bool = false;
        privacy : Bool = false;
        chapter : Text = "null";
        health : Nat64 = 0;
        strength : Nat64 = 0;
        endurance : Nat64 = 0;
        terrain : Text = "null";
      },
    );

    domains_ := x;
  };

  //////////////////
  // Query methods
  //////////////////

  func min(a : Nat, b : Nat) : Nat {
    if (a < b) {
      return a;
    } else {
      return b;
    };
  };

  public query func getAllDomains(start : Nat, batchSize : Nat) : async [T.Domain] {
    var domainList : [T.Domain] = [];
    let total = domains_.size();
    // Determine the range for this batch
    // let end = min(start + batchSize, total);

    // Extract the range of domains for the batch
    for (i in Iter.range(start, batchSize)) {
      // Fetch the domain at position 'i'
      let domain = domains_[i];
      domainList := Array.append<T.Domain>(domainList, [domain]);
    };
    return domainList;
  };

  // get domain by index
  public query func getDomain(index : Nat) : async Result.Result<T.Domain, NftError> {
    if (index < domains_.size()) {
      #ok(domains_[index]);
    } else {
      #err(#NotFound);
    };
  };

  // get domain by PID / Token Index
  public query func getDomainByPID(pid : Text) : async [T.Domain] {
    var ownedDomainsByPrin : [T.Domain] = [];
    for (domain in domains_.vals()) {
      if (domain.owner == ?pid) {
        ownedDomainsByPrin := Array.append<T.Domain>(ownedDomainsByPrin, [domain]);
      };
    };
    return ownedDomainsByPrin;
  };

  // get owned domains
  public query func getOwnedDomains() : async [T.Domain] {
    var ownedDomains : [T.Domain] = [];
    for (domain in domains_.vals()) {
      if (domain.owner != "null") {
        ownedDomains := Array.append<T.Domain>(ownedDomains, [domain]);
      };
    };
    return ownedDomains;
  };

  // get unowned domains
  public query func getUnOwnedDomains() : async [T.Domain] {
    var unOwnedDomains : [T.Domain] = [];
    for (domain in domains_.vals()) {
      if (domain.owner == "null") {
        unOwnedDomains := Array.append<T.Domain>(unOwnedDomains, [domain]);
      };
    };
    return unOwnedDomains;
  };

  // get domains total supply
  public query func getDomainsTotalSupply() : async Nat {
    return domains_.size();
  };

  //////////////////
  // Update methods
  //////////////////

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

  // isAllowed
  public query func isAllowed(caller : Principal) : async Bool {
    return allowed(caller);
  };

  // update domain by index
  public shared (init_msg) func updateDomain(index : Nat, domain : T.Domain, caller : Principal) : async Result.Result<T.Domain, NftError> {
    // Debug.print(debug_show (init_msg.caller));
    assert (allowed(caller));
    if (index < domains_.size()) {
      domains_[index] := domain;
      #ok(domains_[index]) // NOT RETURNING THE UPDATED DOMAIN
    } else {
      #err(#NotFound);
    };
  };

  // batch update domains
  public shared (init_msg) func batchUpdateDomains(domains : [T.Domain], caller : Principal) {
    assert (allowed(caller));
    for (domain in domains.vals()) {
      domains_[domain.id] := domain;
    };
  };

  // Clear domain by index
  public shared (init_msg) func clearDomain(index : Nat, domain : T.Domain, caller : Principal) {
    assert (allowed(caller));
    domains_[index] := {
      id : Nat = 0;
      x : Text = "0";
      y : Text = "0";
      owner : Text = "null";
      region : Text = "null";
      sector : Nat = 0;
      function : Text = "null";
      material : Text = "null";
      visibility : Bool = false;
      privacy : Bool = false;
      chapter : Text = "null";
      health : Nat64 = 0;
      strength : Nat64 = 0;
      endurance : Nat64 = 0;
      terrain : Text = "null";
    };
  };

  //////////////////
  // Character Agents Future
  //////////////////

};
