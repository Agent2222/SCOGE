// Check Initial State

export function checkInitialState() {
    var CHECK_INITIAL_STATE = {
        wallet: null,
        walletConnected: false,
        digisette: null,
        digisetteBaseStat: null,
    }
    // Check Wallet
    if (window.ic) {
        //
        console.log("Wallet Connected", window.ic);
    } else {
        console.log("Wallet Not Connected");
        return;
    }

    // Check Wallet Connected
    // Check Digisette
    // Check Digisette Base Stat
    // Initiate Scenario
    return {
        type: CHECK_INITIAL_STATE
    }
}