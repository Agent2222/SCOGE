import Debug "mo:base/Debug";
import Cycles "mo:base/ExperimentalCycles";
import T "metadata";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
import Buffer "mo:base/Buffer";

actor taoscity {

    /////////////////
    // Stable state //
    /////////////////
    
    // Canister Admin principal
     private stable var admin : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";
    // Canister controller canister principal
     private stable var admin2 : Text = "qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe";

    // stable array for domains
    private stable var domains_ : [var T.Domain] = [var];

    // Cycles balance storage
    private stable var cycles_ : Nat = Cycles.balance();

    /////////////////
    // Constructor //
    /////////////////
    public func initTaosCity() { 
    var batch1 : Nat = 500;
    let x : [var T.Domain] = Array.init<T.Domain>(batch1, {
        endurance : ?Nat64 = ?0;
        health : ?Nat64 = ?0;
        id : Nat = 0;
        owner : ?Text = null;
        strength : ?Nat64 = ?0;
      });

      domains_ := x;
    };

    //////////////////
    // Query methods
    //////////////////

    // get domain by index
    public query func getDomain(index : Nat) : async T.Domain {
        return domains_[index];
    };

    // get domain by PID / Token Index
    public query func getDomainByPID(pid : Text) : async [T.Domain] {
          var ownedDomainsByPrin: [T.Domain] = [];
        for (domain in domains_.vals()) {
            if (domain.owner == ?pid) {
                ownedDomainsByPrin := Array.append<T.Domain>(ownedDomainsByPrin, [domain]);
            }
        };
        return ownedDomainsByPrin;
    };

    // get owned domains 
    public query func getOwnedDomains() : async [T.Domain] {
        var ownedDomains: [T.Domain] = [];
        for (domain in domains_.vals()) {
            if (domain.owner != null) {
                ownedDomains := Array.append<T.Domain>(ownedDomains, [domain]);
            }
        };
        return ownedDomains;
    };

    // get unowned domains
    public query func getUnOwnedDomains() : async [T.Domain] {
        var unOwnedDomains: [T.Domain] = [];
        for (domain in domains_.vals()) {
            if (domain.owner == null) {
                unOwnedDomains := Array.append<T.Domain>(unOwnedDomains, [domain]);
            }
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

    // update domain by index
    public func updateDomain(index : Nat, domain : T.Domain) {
        domains_[index] := domain;
    };

    // batch update domains
    public func batchUpdateDomains(domains : [T.Domain]) {
        for (domain in domains.vals()) {
            domains_[domain.id] := domain;
        };
    };

    // Clear domain by index
    public func clearDomain(index : Nat, domain : T.Domain) {
        domains_[index] := {
            endurance : ?Nat64 = ?0;
            health : ?Nat64 = ?0;
            id : Nat = 0;
            owner : ?Text = null;
            strength : ?Nat64 = ?0;
        };
    };

    //////////////////
    // Character Agents Future
    //////////////////


}