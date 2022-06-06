actor {
    stable var currentProgress: Nat = 0;

    public func incrementProgress(): async Nat {
        currentProgress += 1;
        return currentProgress;
    };
    public query func getProgress(): async Nat {
        return currentProgress;
    };
};
