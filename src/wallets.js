import { gsap } from "gsap";
import { Principal } from "@dfinity/principal";
import { HttpAgent } from "@dfinity/agent";
import idlFactory from "../src/uniHelpers/erc721.did.js";
import { getAllUserNFTs } from "@psychedelic/dab-js";
import { enterTaosCity } from "./universe.js";

const canister = "7mfck-baaaa-aaaah-acuqq-cai";

export const getNFTCollections = async () => {
  // const principal = 'qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe';
  
  const principal = window.ic.plug.getPrincipal();
  var textV = Principal.fromUint8Array(principal._arr).toString();
  let agent = new HttpAgent({ host: "https://ic0.app" });
  try {
    const collections = await getAllUserNFTs({
      agent: agent,
      user: textV,
    });
  
    // console.log("NFTs", collections);

    // Find an NFT with the name "Panda Queen" and print its "description"
    const digisette = collections.find((nft) => nft.name === "Digisette Pre-Alpha");
    
    if (digisette !== undefined) {
      return true;
    }
  } catch (err) {
    console.log("NFTs Error", err);
  }  
};

export const connectPlugWallet = async (whitelist, host) => {
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
      // console.log("Not Connected");
      // console.log("W/H", whitelist, host);
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
      gsap.to(view, {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.5,
        duration: 1,
        onComplete: () => {
          view?.remove();
        },
      });
      // const nftCheck = await getNFTCollections();
      console.log("NFT Check", nftCheck);
      // document.getElementById("universe").style.filter = "blur(0px)";
      enterTaosCity();
      // document.querySelectorAll(".uniEvents").forEach((el) => {
      //   el.style.opacity = 1;
      // });
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
      const nftCheck = await getNFTCollections();
      console.log("NFT Check", nftCheck);
      document.getElementById("universe").style.filter = "blur(0px)";
      enterTaosCity();
      // document.querySelectorAll(".uniEvents").forEach((el) => {
      //   el.style.opacity = 1;
      // });
    }
  }
};

export const nftCheck = getNFTCollections();

//////////////////////////////////////////////////
// Bitfinity Wallet
//////////////////////////////////////////////////

const getNFTCollectionsBit = async () => {
  const principal = 'gdcab-izhzj-7yhxv-ym7jd-wduwn-2nlcy-em7ts-6q7zs-kf5z4-swdod-nqe';
  let agent = new HttpAgent({ host: "https://ic0.app" });
  
  // Call the function directly with the required parameters
  try {
    const collections = await getAllUserNFTs({
      agent: agent,
      user: principal,
    });
  
    console.log("NFTs", collections);
  } catch (err) {
    console.log("NFTs Error", err);
  }  
};

export const connectBitFinityWallet = async (whitelist, host) => {
  var view = document.querySelector(".currentScene");
  if (window.ic === undefined) {
    console.log("Plug not found - Get BitFinity Wallet");
    // connectError();
    // Scenario - New User. User Does not have a plug wallet
    return;
  } else {
    // Scenario - Returning User
    const connected = await window.ic.bitfinityWallet
      .isConnected()
      .catch((e) => {
        console.error(e);
      });

    // // Callback to print sessionData
    // const onConnectionUpdate = () => {
    //     console.log(window.ic.plug.sessionManager.sessionData)
    // }

    if (connected === false) {
      // Scenario - User has a plug wallet but is not connected
      console.log(whitelist, host);
      const bitpublicKey = await window.ic.bitfinityWallet
        .requestConnect({
          whitelist: whitelist,
          timeout: 50000,
        })
        .catch((e) => {
          //   var error = {e};
          //   connectError(error);
          console.error("Connect Wallet", e);
        });
      console.log("pk", bitpublicKey);
      gsap.to(view, {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.5,
        duration: 1,
        onComplete: () => {
          view?.remove();
        },
      });
      getNFTCollectionsBit();
      document.getElementById("universe").style.filter = "blur(0px)";
      document.querySelectorAll(".uniEvents").forEach((el) => {
        el.style.opacity = 1;
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
      getNFTCollectionsBit();
      console.log("Connected");
      document.getElementById("universe").style.filter = "blur(0px)";
      document.querySelectorAll(".uniEvents").forEach((el) => {
        el.style.opacity = 1;
      });
    }
  }
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

// export function verifyDigisette() {}

//   // player state
//   const playerState = async () => {
//     var shadow = document.getElementById("getUniMenu").shadowRoot;
//     console.log(window.suUiActor);
//     const admin = await window.suUiActor.adminUser().catch((e) => {
//       console.log("Get Admin", {e});
//       var error = {e}
//       if (window.dmb === false) {
//         attn(error);
//       }
//     }).catch((error) => {
//       console.log(error);
//     });
//     if (admin === window.user.principal) {
//       console.log("Admin Logged in");
//     } else {
//       shadow.getElementById("menuLoadingScreen").style.display = "none";
//       shadow.getElementById("menuLoadingScreen3").style.display = "none";
//       soundtrack.stop('menuLoading1');
//       uiState.nftsLoaded = true;
//     }
//   }

//   // Error
//   const connectError = async (error) => {
//     var shadow = document.getElementById("getUniMenu").shadowRoot;
//     shadow.getElementById("menuLoadingScreen").style.display = "none";
//     shadow.getElementById("menuLoadingScreen3").style.display = "none";
//     soundtrack.stop('menuLoading1');
//     soundtrack.setVolume('menuError1', 0.4);
//     soundtrack.play('menuError1');
//     shadow.getElementById("menuMessage").style.display = "grid";
//     switch (error.e.result?.error_code || error.e.message) {
//       case "IC0501":
//         shadow.getElementById("menuMessage").innerHTML = `
//         <div>
//           <div id="menuMessageHead">MAINTENANCE ERROR</div>
//           <div id="menuMessageText">We're on it!</div>
//           <div id="menuMessageBody">City Central has been notified and will resolve the issue. In the meantime, try refreshing your connection and attempting again.</div>
//         </div>`
//         break;
//       case "The agent creation was rejected.":
//         shadow.getElementById("menuMessage").innerHTML = `
//         <div>
//           <div id="menuMessageHead">DISCONNECTED WALLET</div>
//           <div id="menuMessageText">You'll need it to continue.</div>
//           <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;cursor:default;">T.A.O.S City's Plug wallet is the best of its class. Share any concerns with City Central in the <span style="text-decoration:underline;color: var(--accent);cursor:pointer;">Feedback</span> section.</div>
//           </div>
//         </div>`
//         shadow.querySelector("#menuMessageBody").addEventListener("click", () => {
//           var el = {
//             target: shadow.querySelector("#fm-menu2")
//           }
//           // var el2 = {
//           //   target: shadow.querySelector("#menuHelp")
//           // }
//           shadow.querySelector("#uniMenuFeedback").click(el);
//         });
//         break;
//       default:
//         shadow.getElementById("menuMessage").innerHTML = `
//         <div>
//           <div id="menuMessageHead">NEURAL CHIP ERROR</div>
//           <div id="menuMessageText">We're on it!</div>
//           <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;">Seems like something went wrong with your Digisette. LX-Comm has been notified. In the meantime, try <span style="color:var(--accent);"><a href="#" onclick="location.reload()">refreshing</a></span> your connection and attempting again.</div>
//         </div>`
//         break;
//     }
//     // Canister Error
//     // Default No Wallet Error
//     // Alternative General Something Went Wrong Error
//     // shadow.getElementById("menuMessage").innerHTML = `
//     //     <div>
//     //     <div id="menuMessageHead">${errors.error}</div>
//     //     <div id="menuMessageText">${errors.message}</div>
//     //     <div id="menuMessageBody">${errors.body}</div>
//     //     <div id="menuMessageCTA">${errors.cta}</div>
//     //   </div>
//     // `
//     // if (errors.etaActive === false) {
//     //   shadow.getElementById("menuMessageCTA").style.display = "none";
//     // }
//   }

//   const attn = async (error) => {
//     let data = new FormData();
//     data.append("Email", "ATTN: RELOAD");
//     data.append("FeedbackText", `${error.e.props.Message}`);
//     fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec", {
//     method: "POST",
//     body: data,
//     mode: "cors"
//   })
//   .then(res => res.text())
//   }
