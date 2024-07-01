import { gsap } from "gsap";
import { Principal } from "@dfinity/principal";
import { Actor, HttpAgent } from "@dfinity/agent";
import idlFactory1 from "../src/uniHelpers/erc721.did.js";
import { idlFactory } from "../src/declarations/taoscity/taoscity.did.js";
import { getAllUserNFTs } from "@psychedelic/dab-js";
import { endLoading, enterTaosCity, loading, soundtrack } from "./universe.js";
import { story } from "./game/SceneManager.js";
import {StoicIdentity} from "ic-stoic-identity";
import { getDigisette } from "./uniHelpers/citycentral.js";
import { createThirdwebClient, getContract } from "thirdweb";
import { base } from "thirdweb/chains";

const canister = "7mfck-baaaa-aaaah-acuqq-cai";

export const ethclient = createThirdwebClient({
  clientId: "a7f34678c8f921d05824641db058ef4a",
  secretKey: "KUVFY2ISLPzPqLozDepsLKC0my-KGIh5rdANUw2cB_DcVTwulp4tzByYkq-XLGNZtD0B0js8_gCgvWRQr6DATQ",
});

export const ethChain = base;

export var lord = {
  principal: null,
  balance: null,
  nfts: null,
};

export async function getNFTCollections(principal) {
    var textV = Principal.fromUint8Array(principal._arr).toString();
    // let agent = new HttpAgent({ host: "https://ic0.app" });
    let agent = window.ic.plug.agent;
    try {
      const collections = await getAllUserNFTs({
        agent: agent,
        user: textV,
      });
    
      console.log("NFTs", collections);
      if (collections !== undefined) {
        collections.forEach((nft) => {
          var nftElement = document.createElement("div");
          nftElement.classList.add("nftElement");
          nftElement.setAttribute("id", `${nft.name}`);
          var nftImage = document.createElement("img");
          nftImage.classList.add("nftImage");
          nftImage.setAttribute("src", `${nft.icon}`);
          nftImage.setAttribute("id", `${nft.name}_img`);
          nftElement.appendChild(nftImage);
          document.getElementById("getUniMenu").shadowRoot.querySelector(".it3").appendChild(nftElement);
        });
      }
  
      // Find an NFT with the name "Panda Queen" and print its "description"
      var digisette = collections.find((nft) => nft.name === "Digisette Pre-Alpha");
      console.log("Digisette", digisette);

      var dgTest = await getDigisette([Number(digisette.tokens[0].index)]);

      try {
        const uint8Array = new Uint8Array(dgTest[0][1].nonfungible.metadata[0]);
        const decoder = new TextDecoder('utf-8');
        const utf8String = decoder.decode(uint8Array);
      console.log("Digisette Test", utf8String);
      } catch (e) {
        console.log("Digisette Error", e);
      }
      
      if (digisette !== undefined) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("NFTs Error", err);
    }    
  // }
}

export async function connectPlugWallet(whitelist, host) {
  var view = document.querySelector(".currentScene");
  if (window.ic === undefined) {
    console.log("Plug not found - Get Plug Wallet");
    // connectError();
    // Scenario - New User. User Does not have a plug wallet
    return;
  } else {
    // Scenario - Returning User
    let connected = false;
    try {
      connected = await window.ic.plug.isConnected();
    } catch (e) {
      console.error(e);
    }

    // Callback to print sessionData
    const onConnectionUpdate = () => {
      console.log(window.ic.plug.sessionManager.sessionData);
    };

    if (connected === false) {
      // Scenario - User has a plug wallet but is not connected
      const plugpublicKey = await window.ic.plug
        .requestConnect({
          whitelist: whitelist,
          host: host,
          timeout: 50000,
        })
        .catch((e) => {
          //   var error = {e};
          //   connectError(error);
          console.error("Connect Wallet", e);
        });
      console.log("pk", plugpublicKey);

      const principal = await window.ic.plug.getPrincipal().catch((e) => {
        console.log("Get Principal", e);
      });

      lord.principal = principal;

      gsap.to(view, {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.5,
        duration: 1,
        onComplete: () => {
          view?.remove();
        },
      });
      loading();
      getNFTCollections(principal).then((nftCheck) => {
        endLoading(); 
        if (nftCheck === true) {
          enterTaosCity();
        } else {
          story("DigisetteIntro");
        }
      });
    } else if (connected === true) {
      // Scenario - User has a plug wallet and is connected
      gsap.to(view, {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.5,
        duration: 1,
        onComplete: () => {
          view?.remove();
        },
      });
      console.log("Connected");
      const principal = await window.ic.plug.getPrincipal().catch((e) => {
        console.log("Get Principal", e);
      });

      lord.principal = principal;

      const plugActor = await window.ic.plug.createActor({
        canisterId: "23tad-vaaaa-aaaag-abvwq-cai",
        interfaceFactory: idlFactory,
      });

      const custCheck = await plugActor.isAllowed(principal).then((result) => {
        console.log("Is Allowed", result);
        return result;
      }).catch((error) => {
        console.error("Error checking permission:", error);
      });

      // DO THE SAME ABOVE FOR STOIC BELOW

      loading();
      getNFTCollections(principal).then((nftCheck) => {
        if (nftCheck === true) {
          enterTaosCity(custCheck).then((result) => {
            endLoading();
          });
        } else {
          endLoading();
          story("DigisetteIntro");
        }
      });
      document.getElementById("universe").style.filter = "blur(0px)";
    }
  }
}

export const connectStoicWallet = async (canisterId) => {
  var view = document.querySelector(".currentScene");
  gsap.to(view, {
    opacity: 0,
    filter: "blur(10px)",
    scale: 1.5,
    duration: 1,
    onComplete: () => {
      view?.remove();
    },
  });
  StoicIdentity.load().then(async identity => {
    if (identity !== false) {
      //ID is a already connected wallet!
    } else {
      //No existing connection, lets make one!
      identity = await StoicIdentity.connect();
    }
    
    //Lets display the connected principal!
    canisterId = canisterId[0];
  const principal = identity.getPrincipal()

  lord.principal = principal;

  console.log("Principal", principal);

  loading();
  getNFTCollections(principal).then((nftCheck) => {
    endLoading();
    if (nftCheck === true) {
      enterTaosCity();
    } else {
      story("DigisetteIntro");
    }
  }).catch((e) => {
    console.log("NFTs Error", e);
  });
    
    //Create an actor canister
    const actor = Actor.createActor(idlFactory1, {
      agent: new HttpAgent({
        identity,
      }),
      canisterId,
    });
    
    //Disconnect after
    StoicIdentity.disconnect();

    return principal;
  })
};

//   // CANISTER (Change in local / production)
//   // Create Actor
export const createActor1 = async (can, idl) => {
  const suUiActor = await window.ic.bitfinityWallet
    .createActor({
      canisterId: can,
      interfaceFactory: idl,
    })
    .catch((e) => {
      console.log("creatActorError", e);
    });
  return suUiActor;
};

  // Error
  export const connectError = async (error) => {
    var shadow = document.getElementById("getUniMenu").shadowRoot;
    shadow.getElementById("menuLoadingScreen").style.display = "none";
    shadow.getElementById("menuLoadingScreen3").style.display = "none";
    soundtrack.stop('menuLoading1');
    soundtrack.setVolume('menuError1', 0.4);
    soundtrack.play('menuError1');
    shadow.getElementById("menuMessage").style.display = "grid";
    switch (error.e.result?.error_code || error.e.message) {
      case "IC0501":
        shadow.getElementById("menuMessage").innerHTML = `
        <div>
          <div id="menuMessageHead">MAINTENANCE ERROR</div>
          <div id="menuMessageText">We're on it!</div>
          <div id="menuMessageBody">City Central has been notified and will resolve the issue. In the meantime, try refreshing your connection and attempting again.</div>
        </div>`
        break;
      case "The agent creation was rejected.":
        shadow.getElementById("menuMessage").innerHTML = `
        <div>
          <div id="menuMessageHead">DISCONNECTED WALLET</div>
          <div id="menuMessageText">You'll need it to continue.</div>
          <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;cursor:default;">T.A.O.S City's Plug wallet is the best of its class. Share any concerns with City Central in the <span style="text-decoration:underline;color: var(--accent);cursor:pointer;">Feedback</span> section.</div>
          </div>
        </div>`
        shadow.querySelector("#menuMessageBody").addEventListener("click", () => {
          var el = {
            target: shadow.querySelector("#fm-menu2")
          }
          // var el2 = {
          //   target: shadow.querySelector("#menuHelp")
          // }
          shadow.querySelector("#uniMenuFeedback").click(el);
        });
        break;
      default:
        shadow.getElementById("menuMessage").innerHTML = `
        <div>
          <div id="menuMessageHead">NEURAL CHIP ERROR</div>
          <div id="menuMessageText">We're on it!</div>
          <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;">Seems like something went wrong with your Digisette. LX-Comm has been notified. In the meantime, try <span style="color:var(--accent);"><a href="#" onclick="location.reload()">refreshing</a></span> your connection and attempting again.</div>
        </div>`
        break;
    }
    // Canister Error
    // Default No Wallet Error
    // Alternative General Something Went Wrong Error
    // shadow.getElementById("menuMessage").innerHTML = `
    //     <div>
    //     <div id="menuMessageHead">${errors.error}</div>
    //     <div id="menuMessageText">${errors.message}</div>
    //     <div id="menuMessageBody">${errors.body}</div>
    //     <div id="menuMessageCTA">${errors.cta}</div>
    //   </div>
    // `
    // if (errors.etaActive === false) {
    //   shadow.getElementById("menuMessageCTA").style.display = "none";
    // }
  }

  /////////////////////////////
  // Connect to MetaMask
  /////////////////////////////

  /////////////////////////////
  // Connect to Coinbase Wallet
  /////////////////////////////

  /////////////////////////////
  // Connect to Rainbow Wallet
  /////////////////////////////