import { getGameProgress } from "../game/levels/ch1";

// Canisters
// const canisterId = import.meta.env.VITE_universe_backend_canister_Id;
const canisterId = "wnunb-baaaa-aaaag-aaoya-cai";

// Whitelist 
const whitelist = [canisterId];

// Is Wallet Connected
export async function isPlugConnected() {
    return await window.ic.plug.isConnected();
}

// Get Principal
export async function getPrincipal() {
    await window.ic.plug.createAgent({whitelist});
    const agent = window.ic.plug.agent
    const principal = await agent.getPrincipal();
    return principal.toText();
}

// Connect Plug Wallet
export async function connectToPlug() {   
    // Add onConnectionUpdate to close/restart when identity is switched ***
    const connected = await isPlugConnected();

    if (!connected) {
        try {
            await window.ic.plug.requestConnect({
                whitelist,
            });
        } catch  (e) {
            console.log(e);
            return "";
        }
    }

    const principalId = await getPrincipal();
    document.getElementById("st2Ans2").removeEventListener("click",connectToPlug);
    document.getElementById("st2Ans2").addEventListener("click",getGameProgress);
    moveForward();
    return principalId;
}

export function moveForward() {
    var subText2 = document.getElementById("subText2");
    subText2.style.gridTemplateColumns = "1fr";
    document.getElementById("st2Ans1").style.display = "none";
    document.getElementById("st2Ans2").style.display = "block";
    document.getElementById("st2Ans3").style.display = "none";
    document.getElementById("st2Ans2").innerHTML = "Thank you System.";
    document.getElementById("st2Ans2").setAttribute("click", "getGameProgress()"
);
}

export async function checkConnectedToPlug() {
    const connected = await isPlugConnected();
    return connected;
}