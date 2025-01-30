/* eslint-disable no-unused-vars */
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;
// import * as BABYLON from "@babylonjs/core";
// import { GameManager } from "./game/GameManger.js";
import { getUniMenu } from "../src/dt-uniMenu.js";
import { scogeShop } from "../src/scoge-shop-2.js";
import { scogeRsvp } from "../src/scoge-rsvp.js";
import { dtMusic } from "./dt-scogeMusic.js";
import { dtInvestors } from "../src/dt-investors";
import { dtGallery } from "../src/dt-gallery.js";
import { CombinationLock } from "../src/dt-lock.js";
import { dialogueBox } from "../src/dialogueBox.js";
import { uniMenuAgent } from "../src/uni-c-miniAgent.js";
import { MainDialogue } from "./typing.js";
import { SeekDialogue } from "./seeking.js";
import { SoundtrackManager } from "./soundtrack.js";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from '@dfinity/principal';
import { idlFactory } from "../src/declarations/universe_backend/universe_backend.did.js";
// import the closeCampaign function from dt-campaign.js
import { mintingScreen } from "../src/mint.js";
// import { dialogue } from "./game/dialogue.js";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import { Configuration, OpenAIApi } from "openai";
import { universe } from "./universe.js";
import { uniConsensus } from "./uni-c-consensus.js";
import { uni3dViewer } from "./uni-c-3dModel.js";
import { uniDomainDev } from "./uni-c-domaindev.js";
import { checkInitialState } from "../src/game/SceneManager.js";
import { emoter } from "./uniComponents/emoter.js";
import { tooltip } from "./uniHelpers/tooltip.js";
// import { client } from "./uniHelpers/thirdWeb.js";

// Components
import { closeButton } from "./subComponents/sc-close-btn.js";
import { compWallets } from "./uniComponents/comp-wallets.js";
import { compForge } from "./uniComponents/comp-forge.js";
import { compLoading } from "./subComponents/sc-loading.js";
import { compCCPA } from "./comp-ccpa.js";
import { compAdmin } from "./comp-admin.js";

// Analytics
import { inject } from "@vercel/analytics"

// Statics
import mainvid1 from "../assets/video/scoge-c2-1.mp4";
import mainvid2 from "../assets/video/scoge-c2-2.mp4";
import main1poster from "../assets/video/scoge-c2-1-poster.jpg";
import currentImg from "../assets/images/bgs/scoge-8-24.webp";
import Img2 from "../assets/images/bgs/scoge-10-24.webp";

var staticVids = [mainvid1, mainvid2];
var bgs = [currentImg, Img2];

// // randomly select a video and assign it to a variable
// var randomStaticVid = staticVids[Math.floor(Math.random() * staticVids.length)];

// // randomly select a image and assign it to a variable
var randomIntro = bgs[Math.floor(Math.random() * bgs.length)];

try {
  inject();
} catch (err) {
  console.log(err)
}

// if (randomStaticVid === mainvid1) {
//   // change poster of portalVideo to match the video
//   document.getElementById("portalVideo").poster = main1poster;
// }

document.getElementById("mainImg").src = randomIntro;

var beacons;
var beaconsBuilt = false; 

const dsheet = "https://script.google.com/macros/s/AKfycbydI7j2TrYlfW15ESG4gDPo4m0g_KlijM5KZvdSSVnBiTpVpWiMMnE9wzYOG3IdAJEV2w/exec";

function addBeacons(data) {
  var beacons = data;
  beacons.forEach((beacon) => {
    if (beacon.Active === true && beaconsBuilt === false) {
      var beaconEl = document.createElement("div");
      beaconEl.setAttribute("class", beacon.Class);
      beaconEl.setAttribute("id", beacon.Id);
      beaconEl.setAttribute("data-headline", beacon.Headline);
      beaconEl.setAttribute("data-message", beacon.Message);
      beaconEl.innerHTML = `
      <div class="beaconOrigin">
          <div class="beaconIdenIcon">${beacon.Icon}</div>
          <div class="beaconSender">${beacon.Sender}</div>
        </div>
        <div class="beaconPreview">
          ${beacon.Preview}
      </div>
      `
      beaconEl.addEventListener("click", (e) => {
        document.getElementById("getUniMenu").openBeaconMessage(e);
      });

      if (beacon.live === true) {
        beaconEl.classList.add("blinking");
        document.getElementById("getUniMenu").blinkingBeacon();
        beaconEl.style.animation = "beaconBlinking3 1s infinite";
      }

      document.getElementById("getUniMenu").shadowRoot.getElementById("beaconsBody").appendChild(beaconEl);
      
    }
  });
  beaconsBuilt = true;
}

  // Beacons
async function getBeacons() {
    try {
      const response = await fetch(`${dsheet + "?focus=beacons"}`, {
        method: "GET",
        mode: "cors",
      });

      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        beacons = data;

        // beacons.forEach((beacon) => {
        //   if (beacon.live === true) {
        //     document.getElementById("getUniMenu").blinkingBeacon();
        //   }
        // });

        addBeacons(beacons);
        return data;
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
}

getBeacons();

function reminder() {
  var reminder = document.createElement("div");
  reminder.setAttribute("class", "reminder");
  reminder.innerHTML = `<div>
    Reminder: This is a non-fictional universe. All characters and events are non-fictional.<br>Agents won't forget.<br><br><br><br>
    <div id="closeReminder">- Understood -</div>
  </div>
  `;

  // randomly decide if the reminder should be displayed
  var displayReminder = Math.random() < 0.5;

  if (displayReminder) {
    document.getElementById("main").appendChild(reminder);
    document.getElementById("closeReminder").addEventListener("click", () => {
      document.querySelector(".reminder").remove();
    });
  }
}

reminder();

// // Check size on Start
window.sizeInit = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile
    window.isMobile = true;
    document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenuIcon").style.display = "block";
    document.getElementById("getUniMenu").shadowRoot.getElementById("loadingText").style.display = "none";
    var videoEls = document.querySelectorAll(".videoEl");
    videoEls.forEach((videoEl) => {
      videoEl.setAttribute("class", "mobileVideo");
    });
    document.getElementById("getUniMenu").shadowRoot.getElementById("gdLoginBut").style.pointerEvents = "none";
    document.getElementById("getUniMenu").shadowRoot.getElementById("gdLoginBut").style.userSelect = "none";
    document.getElementById("getUniMenu").shadowRoot.getElementById("gdLoginBut").innerHTML = "(LOGIN) DESKTOP ONLY";
  } else {
    // Desktop
  }
};

setTimeout(() => {
  window.sizeInit();
}, 1000);

window.entry = () => {
  var consensusBlock = document.createElement("uni-consensus");
  consensusBlock.setAttribute("active", "false");
  consensusBlock.setAttribute("id", "compConsensus");
  document.getElementById("main").appendChild(consensusBlock);
  checkInitialState();
}

window.entry();

const VITE_ScogeI = import.meta.env.VITE_ScogeI;
const VITE_ably = import.meta.env.VITE_ably;
const VITE_combination = import.meta.env.VITE_Combination;

  window.ably = new Ably.Realtime({
  key: VITE_ably,
  clientId: "Test"
})

// Globals
var notiActive = false;
var infiniteActive = false;
var pgleft = 1;
var pgright = 2;
var sketch1Count = 3;
var sketch2Count = 2;
var sketch3Count = 1;
var intro1 = false;
var countriedAdded = false;
var ngHidden = false;
var shopActive = "closed";
var settingsActive = false;
window.dbm = false;
window.shoploaded = false;
window.viewThisProduct = "";
window.investorsView = false;
window.urlParamsActive = null;
window.inUniverse = false;
window.productsloaded = false;
window.currentMenuTab = null;
window.tempIn = false;
var ci = "false";
// Connection Status
window.connectionState = false;

console.log("COPYRIGHT 2024 - SCOGE Inc. - ALL RIGHTS RESERVED");

// Init Soundtrack
const soundtrack = new SoundtrackManager();

// Notifications
const noti = {
  enter: `Click and Drag to Navigate.`,
  shop: `Access Shop through symbol below.`,
  book2222: `These people seem familiar.`,
  mirror: `Perfect,^200 the suit works.`,
  computer: `Not right now.`,
  magazine: `Gotta add the new images I found.`,
  newslet: `Subscibe for all updates.`,
  newTest: `TESTING THE NEW NOTIFICATIONS`,
  dist: `Distributed Via: SCOGÉ Locale 1 - 254 Broome St, NYC.`,
  scoge: "SCOGÉ",
  map: "You can't runaway from your destiny.",
  dyg: "Close but not quite... It's best on your Desktop.",
};

const learn = [
  "SCOGÉ - Noun - Meaning: Between Worlds.",
  "Bankoo resembles Earth but has distinctive natural phenomena.",
  "Pronounced: S-CO-J.",
  `Email "Subscribe!" to info@scoge.co.`,
  "Discovered by Starnilas Oge.",
  "Known Continents of Bankoo are Alansana, Sanset, and Seeloo.",
  "Full access via Desktop.",
];

// Check Window Size
window.isMobile = false;

function start() {
  universe();
    window.dbm = true;
    // ci = "bankoo";
    if (ci === "false") {
      window.galleryActive = true;
      window.view = "gallery";
      window.universeSystem();
      document.getElementById("getInvestors").setAttribute("invest","active");
      // enterTaosCity();
      // document.getElementById("portalVideo").style.display = "block";
      document.getElementById("seekModal").style.pointerEvents = "auto";
      // gsap.to('#videoGallery', {duration: 2, opacity: 1, y: 0, ease: "power2.out"});
      // gsap.to("#videoGallery", { duration: 1, filter: "blur(0px)", ease: "power2.inOut"});
      ci = "true";
      // document.getElementById("portalVideo").src = randomStaticVid;
      // document.getElementById("portalVideo").src = mainvid2;
      // document.getElementById("portalVideo")?.play();
    }
}

start();

// Check Size on Resize
window.addEventListener("resize", function () {
   if (window.currentMenuTab != "settings" && window.matchMedia("(min-width: 800px)").matches) {
    window.reloaduniverseSystem(); 
   }
  if (window.matchMedia("(max-width: 768px)").matches) {
    var shopMenuBut = document.getElementById("shopBut");
    window.isMobile = true;
    window.termsOpen = false;
    document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu").style.overflowX = "hidden";
    //
  } else {
    window.isMobile = false;
  }
});

window.onload = () => {
  window?.getParamsDesktop();
}

window.shopping = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    window.openMobile();
  }
};

// Toggle MobileShop
window.openMobile = () => {
  document.getElementById("mobileShop").style.display = "block";
};

export default window.initNoti2 = (name) => {
  switch (name) {
    case "Mirror1":
      //
      break;
    case "Entrance":
      //
      break;
    case "Symbol":
      //
      break;
    case "2222":
      //
      break;
    case "PC":
      //
      break;
    case "magazine":
      //
      break;
  }
};

// World --------------------------------------------------------------------------------

var continents = {
  c1: {
    name: "1 - ALANSANA",
    text: "The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOGÉ Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-1.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-2.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-3.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-4.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-1.jpg"/>`,
  },
  c2: {
    name: "2 - FAALSANA",
    text: "No concrete data discovered for the 2nd Continent. Few sources indicate a region of migrants from various origins. ",
    images: `<img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world0.jpg"/>`,
  },
  c3: {
    name: "3 - SANSET",
    text: "The 3rd Continent is widely known for having the harshest and most fluctuating weather conditions, due to its size and position between two oceanic gravity pockets. Its inhabitants frequently dress in garments that heavily wrap the body and can easily be removed when conditions drastically shift.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-1.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-2.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-3.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-1.jpg"/>`,
  },
  c4: {
    name: "4 - NAME UNKNOWN",
    text: "On the 4th Continent, you’ll find its inhabitants retain and nurture a unique sense of metaphysical intuition and practice. They adorn themselves in talismans reshaped into what could be considered garments but have little regard for the conventional dress.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-2.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-1.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-3.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-4.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-2.jpg"/>`,
  },
  c5: {
    name: "5 - CONTINENT UNKNOWN",
    text: "No concrete data discovered for the 5th  Continent. Few sources indicate it to be an ally of the 7th Continent.",
    images: `<img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world0.jpg"/>`,
  },
  c6: {
    name: "6 - NAME UNKNOWN",
    text: "The mountainous inhabitants of the 6th Continent are highly regarded for their study of natural materials and their relation to the human body. They live among dangerous innovations but protect themselves with garments infused with protective physical and metaphysical properties- mostly darker-toned, as the continent is limited to elements that produce dark dyes.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-1.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-2.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-3.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-4.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-5.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-1.jpg"/>`,
  },
  c7: {
    name: "7 - SEELOO",
    text: "Little is known about the 7th Continent and its elusive inhabitants throughout Bankoo. Those who’ve managed to reach it beyond the protection of the 4th and 5th Continent have reported a land of dreams and abstraction- where artifacts, people, and land are one-and-the-same.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-2.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-3.jpg"/>
    <img src="https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>`,
  },
};
var worldName = document.getElementById("worldConName");
var worldText = document.getElementById("worldConText");
var worldMain = document.getElementById("worldMain");
var allMenu = document.querySelectorAll(".worldMenuInner");
var worldBottom = document.getElementById("worldBottom");

// Change world text and BG
window.changeWorld = (obj) => {
  var selected = obj.id;
  worldBottom.scrollTop = 0;
  allMenu.forEach((menu) => {
    menu.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    menu.style.color = "black";
    document.getElementById(`${selected}In`).style.backgroundColor = "red";
    document.getElementById(`${selected}In`).style.color = "white";
  });
  switch (selected) {
    case "world1":
      worldName.innerHTML = continents.c1.name;
      worldText.innerHTML = continents.c1.text;
      worldMain.style.backgroundImage =
        "url('https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c1.images;
      break;
    case "world2":
      worldName.innerHTML = continents.c2.name;
      worldText.innerHTML = continents.c2.text;
      worldMain.style.backgroundImage =
        "url('https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c2.images;
      break;
    case "world3":
      worldName.innerHTML = continents.c3.name;
      worldText.innerHTML = continents.c3.text;
      worldMain.style.backgroundImage =
        "url('https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c3.images;
      break;
    case "world4":
      worldName.innerHTML = continents.c4.name;
      worldText.innerHTML = continents.c4.text;
      worldMain.style.backgroundImage =
        "url('https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')";
      worldBottom.innerHTML = continents.c4.images;
      break;
    case "world5":
      worldName.innerHTML = continents.c5.name;
      worldText.innerHTML = continents.c5.text;
      worldMain.style.backgroundImage =
        "url('https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-1-2.jpg')";
      worldBottom.innerHTML = continents.c5.images;
      break;
    case "world6":
      worldName.innerHTML = continents.c6.name;
      worldText.innerHTML = continents.c6.text;
      worldMain.style.backgroundImage =
        "url('https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')";
      worldBottom.innerHTML = continents.c6.images;
      break;
    case "world7":
      worldName.innerHTML = continents.c7.name;
      worldText.innerHTML = continents.c7.text;
      worldMain.style.backgroundImage =
        "url('https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')";
      worldBottom.innerHTML = continents.c7.images;
      break;
  }
};
// Expanding World Image Cotainer
var expandDiv = document.getElementById("worldBottom");
var speed = 5;
function expanding() {
  var scrolltop = expandDiv.scrollTop; // get number of pixels document has scrolled vertically
  var scrollAndSpeed = scrolltop / speed;
  //Expand using transform
  //expandDiv.style.transform = "scalex( " + Math.min(Math.max(scrollAndSpeed, 1), 10) + ")";

  //Or using width
  expandDiv.style.height = Math.min(Math.max(scrollAndSpeed, 34), 68) + "%";
}

// Check if on World
window.isWorld = () => {
  expandDiv.addEventListener(
    "scroll",
    function () {
      // on page scroll
      requestAnimationFrame(expanding); // call parallaxing()
    },
    false
  );
};

// TAP TO ENTER
window.worldTap = () => {
  document.getElementById("worldEntrance").style.transition = "5s all";
  document.getElementById("worldEntrance").style.opacity = "0%";
  setTimeout(() => {
    document.getElementById("worldEntrance").style.display = "none";
  }, 3500);
};

// World -------------------------------------------------------------------------------- END
// INFITE -------------------------------------------------------------------------------
// window.activateInfinite = () => {
//   window.logoMove(6, 3, 16, 1);
//   if (BABYLON.Engine.isSupported()) {
//     document.getElementById("renderCanvas").style.transition = "5s all";
//     // let game = new GameManager("renderCanvas");
//     if (infiniteActive === false) {
//       // if (window.ic === undefined) {
//       //   // Add text to get wallet and return once done.
//       //   // Refresh Page
//       //   document.getElementById("getWallet").style.display = "block";
//       //   return "";
//       // }
//       document.getElementById("renderCanvas").style.display = "block";
//       document.getElementById("renderCanvas").style.opacity = "0";
//       new GameManager("renderCanvas");
//       infiniteActive = true;
//     } else {
//       if (intro1 === false) {
//         //
//         intro1 = true;
//       }
//       //
//       document.getElementById("settingsMenu").style.opacity = "0%";
//       setTimeout(()=>{
//         document.getElementById("settingsMenu").style.display = "none";
//       },1000)
//       settingsActive = false;
//       var shopMenuBut = document.getElementById("shopBut");
//       var canvas = document.getElementById("renderCanvas");
//       canvas.height = window.innerHeight;
//       canvas.width = window.innerWidth;
//       document.getElementById("shop").style.opacity = "0%";
//       document.getElementById("shop").style.visibility = "hidden";
//       document.getElementById("povRight").style.opacity = "0%";
//       document.getElementById("povLeft").style.opacity = "0%";
//       setTimeout(() => {
//         document.getElementById("povRight").style.visibility = "hidden";
//         document.getElementById("povLeft").style.visibility = "hidden";
//       }, 500);
//       document.getElementById("tandc").style.display = "none";
//       document.getElementById("tandc").style.opacity = "0%";
//       shopMenuBut.innerHTML = "SHOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//       shopActive = "closed";
//       window.termsOpen = false;
//       //
//       window.inUniverse = true;
//       window.getGameProgress();
//       window.logoMove(6, 3, 16, 1);
//       document.getElementById("destiny").pause();
//       document.getElementById("renderCanvas").style.opacity = "1";
//       window.clearMainUi();
//     }
//   }
// };

// Setup Book Images
window.setupBook = (obj) => {
  var Book2222 = document.getElementById("B2222");
  var selected = obj.id;
  if (selected === "bookleft") {
    Book2222.innerHTML = `<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${(pgleft -= 2)}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${(pgright -= 2)}.jpg" style="margin-left:10%;">`;
    if (selected === "bookleft" && pgleft <= 0) {
      pgleft = 1;
      pgright = 2;
      Book2222.remove();
    }
    return;
  }
  if (selected === "bookright") {
    Book2222.innerHTML = `<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${(pgleft += 2)}.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-${(pgright += 2)}.jpg" style="margin-left:10%;">`;
    if (selected === "bookright" && pgright >= 15) {
      pgleft = 1;
      pgright = 2;
      Book2222.remove();
    }
    return;
  }
};

// Setup Sketches
window.setupSketches = () => {
  var Book2222 = document.getElementById("BSketch");
  if (sketch3Count === 3) {
    Book2222.innerHTML = `<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-1.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-2.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-3.jpg">`;
    sketch3Count = 1;
    sketch2Count = 2;
    sketch1Count = 3;
    Book2222.remove();
    return;
  }
  if (sketch3Count === 2) {
    Book2222.innerHTML = `<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch1Count--}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;
    return;
  }
  if (sketch3Count === 1) {
    Book2222.innerHTML = `<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${(sketch1Count -= 2)}.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch2Count++}.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" onclick="setupSketches()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-${sketch3Count++}.jpg">`;
    return;
  }
};

// Setup Magazine Page
window.setupMagazine = () => {
  var Book2222 = document.getElementById("BMAG");
  Book2222.remove();
};
// SAY SCOGÉ //
window.sayScoge = () => {
  document.getElementById("scoge").play();
};

// LOGO MOVE
window.logoMove = (up, whereto, size, speed) => {
  var logo = document.getElementById("logo");
  logo.style.transition = `${speed}s all`;
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile
  } else {
    // Desktop
    logo.style.left = `${whereto}%`;
    logo.style.width = `${size}%`;
    logo.style.top = `${up}%`;
  }
};
// SHOP DEACTIVATE BUTTONS
window.dActiveBut = () => {
  var settings = document.getElementById("settingsBut");
  var extra = document.getElementById("extraBut");
  if (shopActive === "closed") {
    settings.style.opacity = "25%";
    extra.style.opacity = "25%";
    settings.removeAttribute("onclick");
    extra.setAttribute("onclick", "");
  } else {
    settings.style.opacity = "100%";
    extra.style.opacity = "100%";
    settings.setAttribute("onclick", "openSettings();");
    extra.setAttribute("onclick", "openExtra();");
  }
};

// ClearMainUI
window.clearMainUi = () => {
  var menu = document.getElementById("gMenu");
  var logo = document.getElementById("logo");
  var settingsMenu = document.getElementById("settingsMenu");
  var textTop = document.getElementById("subText1");
  var textBottom = document.getElementById("subText2");
  menu.style.transition = "2s all";
  logo.style.transition = "2s all";
  textTop.style.transition = "2s all";
  textBottom.style.transition = "2s all";
  if (window.inUniverse === true) {
    setTimeout(()=> {
          // Move
    menu.style.left = "10%";
    logo.style.left = "30%";
    // Opacity
    menu.style.opacity = "0";
    logo.style.opacity = "0%";
    setTimeout(()=> {
      textTop.style.bottom = "49%";
      textTop.style.opacity = "100%";
      setTimeout(()=> {
        textBottom.style.bottom = "45%";
        // textBottom.style.opacity = "";
      },500);
    },1000);
    setTimeout(()=> {
      menu.style.display = "none";
      logo.style.display = "none";
      settingsMenu.style.display = "none";
    },3000);
    },2000);
  } else {
    menu.style.display = "block";
    logo.style.display = "block";
    settingsMenu.style.display = "grid";
    textTop.style.bottom = "44%";
    textTop.style.opacity = "0%";
    textBottom.style.bottom = "40%";
    textBottom.style.opacity = "0%";
    setTimeout(()=> {
                // Move
    menu.style.left = "6%";
    logo.style.left = "3%";
    // Opacity
    menu.style.opacity = "100%";
    logo.style.opacity = "100%";
    },1000)
    setTimeout(()=> {
      textBottom.style.display = "none";
      textTop.style.display = "none";
    })
  }
}

// Main Menu System
window.mainMenuPosition = (bg,p1,p2,p3,p4) => {
  var menu = document.querySelectorAll(".mainMenuBut");
  var menuItems = document.getElementById("")
  menu.forEach((menuItem)=> {
    menuItem.style.backgroundColor = bg;
    switch (menuItem.id) {
      case "shopBut":
        document.getElementById("shopBut").style.left = p1;
        break;
      case "newGameBut":
        document.getElementById("newGameBut").style.left = p2;
        break;
      case "settingsBut":
      document.getElementById("settingsBut").style.left = p3;
      break;
      case "subscribeBut":
      document.getElementById("subscribeBut").style.left = p4;
      break;
    }
  });
}

// Open Investors
window.activateInvestors = () => {
  document.getElementById("getInvestors").style.display = "block";
}

// Open Investors
window.openInvestors = () => {
  document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition = "1s all";
  document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right = "0%";
}

window.closeInvestor = () => {
  document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition = "1s all";
  document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right = "-100%";
}
window.periumActor = async () => {
    // var canisterId = "bd3sg-teaaa-aaaaa-qaaba-cai";
    var canisterId = "wnunb-baaaa-aaaag-aaoya-cai";
    var live = "https://ic0.app";
    var local = "http://127.0.0.1:4943";
    let agent = new HttpAgent({ host: live });
    // let agent =  window.ic.plug.agent;
    const actor = Actor.createActor(idlFactory, {
        agent,
        canisterId,
    });
    agent.fetchRootKey();
    return actor;
}

// URL PARAMS OPEN SHOP
var viewThisProduct = "";
var ccpa = null;
window.getParamsDesktop = async () => {
  const params = new URLSearchParams(location.search)
  viewThisProduct = params.get("Product");
  ccpa = params.get("ccpa");
  if (params.size > 0 && window.urlParamsActive === "shop") {
    window.urlParamsActive = "shop";
  }
 if (params.size > 0 && viewThisProduct != "shop") {
  window.urlParamsActive = true;
 }
  window.investorsView = params.get("Investors");
  if (window.investorsView === "true") {
    window.activateInvestors();
  }
  if (ccpa != null && window.isMobile == true) {
    var ccpaEl = document.createElement("scoge-ccpa");
    ccpaEl.setAttribute("active", "true");
    ccpaEl.setAttribute("id", "ccpaModal");
    // ccpaEl.setAttribute("data-perium", `false`);
    ccpaEl.style.position = "absolute";
    ccpaEl.style.top = "0";
    ccpaEl.style.left = "0";
    ccpaEl.style.zIndex = "100";
    document.getElementById("main").appendChild(ccpaEl);
    ccpaEl.setAttribute("data-perium", `${ccpa}`);
    window.perium = ccpa;
    var date = new Date();
    var convertedDate = date.toISOString();
    var pActor = await window.periumActor();
    pActor.updateLastViewed(ccpa, convertedDate).then((res) => {
      console.log("Updated", res);
    }).catch((err) => {
      console.log("Error", err);
    });
  }
  if (viewThisProduct != null) {
    console.log("Checker", viewThisProduct);
  }
}

// -----------------------------------------------
// -----------------------------------------------

// ------ Seek
var seekActive = false;
var seeking = false;
window.seekType = "content";
window.conversationHistory = [""];
window.sameConvo = false;
window.digiFormDislayed = false;
window.newsFormDisplayed = false;
window.contactFormDisplayed = false;
window.form1Active = false;
window.form2Active = false;
window.galleryActive = false;
window.galleryEntry = false;
window.digiPre = false;
window.view = "seeking";
window.galleryType = "video";

window.sub = () => {
  var form = document.querySelector("#subGeneral");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("genSubLoad").style.opacity = "100%";
    gsap.to("#genSubLoad", {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "none" // use linear easing for a constant speed
    });
    let data = new FormData(form);
    fetch("https://script.google.com/macros/s/AKfycbwyfpqK5BOPXAZnGpXc0e6szgHqYwXfX7jajbDNEENP7Et0l36InKzVUECe9ENCBO7uhA/exec?focus=products", {
      method: "POST",
      body: data,
      mode: "cors"
    }).then(res => res.text()).then(data => {
      var block = document.getElementById("subGeneral");
      var newEl = document.createElement("span");
      newEl.setAttribute("id", "done");
      newEl.innerHTML = `Done!`;
      block.appendChild(newEl);
      form.reset();
      gsap.to("#done", {opacity: 0, duration: 1, ease: "power2.out", onComplete: function() {
      block.removeChild(newEl);
      }
    })
    gsap.to("#genSubLoad", {opacity: 0, duration: 1, ease: "power2.out"
  })
    });
  });
}

window.sub2 = () => {
  var form2 = document.querySelector("#subGeneral2");
  form2.addEventListener("submit", (event) => {
    document.getElementById('genCat2').value = `${document.getElementById('genInput3').value}`;
    event.preventDefault();
    document.getElementById("genSubLoad2").style.opacity = "100%";
    gsap.to("#genSubLoad2", {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "none" // use linear easing for a constant speed
    });
    let data = new FormData(form2);
    fetch("https://script.google.com/macros/s/AKfycbwyfpqK5BOPXAZnGpXc0e6szgHqYwXfX7jajbDNEENP7Et0l36InKzVUECe9ENCBO7uhA/exec", {
      method: "POST",
      body: data,
      mode: "cors"
    }).then(res => res.text()).then(data => {
      var confirm = document.getElementById("genSubLoad2");
      form2.reset();
      // Cancel any existing tweens of #genSubLoad2
      gsap.killTweensOf("#genSubLoad2");

      // Reset the rotation of #genSubLoad2
      gsap.set("#genSubLoad2", { rotation: 0 });

      confirm.innerHTML = `Sent.`;
      setTimeout(() => {
        gsap.to("#genSubLoad2", {opacity: 0, duration: 1, ease: "power2.out"
      });
        setTimeout(() => {
          confirm.innerHTML = `|`;
        }, 1000);
      }, 3000);
    })
  });
}

export class Typing {
  constructor(text, elementId, speed = 50) {
    this.text = text;
    this.element = document.getElementById(elementId);
    this.currentIndex = 0;
    this.delay = speed;
    this.onTypingComplete = null; // The callback function for typing completion
    this.action = null;
  }

  start() {
    if (this.action) {
      this.action();
    }
    this.intervalId = setInterval(() => {
      if (this.currentIndex < this.text.length) {
        this.element.textContent += this.text.charAt(this.currentIndex);
        this.currentIndex++;
      } else {
        clearInterval(this.intervalId);
        if (this.onTypingComplete) {
          this.onTypingComplete(); // Trigger the callback if it exists
        }
      }
    }, this.delay);
  }
}


window.galleryHelp = new Typing("Click to move forward.", "simpleNoti", speed = 80);

export class TypingPlus {
  constructor(text, element, speed = 50) {
    this.text = text;
    this.element = element;
    this.currentIndex = 0;
    this.currentDialogue = 0;
    this.delay = speed;
    this.onTypingComplete = () => {
      if (this.text[this.currentDialogue].waiter === true) {
        //
      } else {
        // Create a new span element
        const spanElement = document.createElement('span');
        const lineBreak = document.createElement('br');
        const lineBreak2 = document.createElement('br');
        spanElement.className = 'continueBut';
        spanElement.textContent = '[ CONTINUE ]';
        spanElement.addEventListener("click", () => {
          this.next();
        })
        // Append the new span element to the existing element
        this.element.appendChild(lineBreak);
        this.element.appendChild(lineBreak2);
        this.element.appendChild(spanElement);
      }
    }
    this.action = null;
  }

  start() {
    if (this.action) {
      this.action();
    }
    this.intervalId = setInterval(() => {
      if (this.currentIndex < this.text.length) {
        this.element.textContent += this.text.charAt(this.currentIndex);
        soundtrack.setVolume("typing-1", 0.8);
        soundtrack.stop("typing-1");
        soundtrack.play("typing-1");
        this.currentIndex++;
      } else {
        clearInterval(this.intervalId);
        if (this.onTypingComplete) {
          this.onTypingComplete(); // Trigger the callback if it exists
        }
      }
    }, this.delay);
  }

  next() {
    //
    alert("HI")
  }

  switch() {
    //
  }

}
// ------ Simple Typing End
