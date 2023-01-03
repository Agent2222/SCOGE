//
import Commerce from "@chec/commerce.js";
// import loadStripe from "stripe";
// import * as BABYLON from "@babylonjs/core";
// import { GameManager } from "./game/GameManger.js";
import { mobileShop1 } from "./shop-1.js";
import { dtMusic } from "../src/dt-scogeMusic.js";
import { dtCampaign } from "../src/dt-campaign.js";
import { dtSubscribe } from "../src/dt-subscribe.js";
import { getUniMenu } from "../src/dt-uniMenu.js";
import { scogeUpdates } from "../src/scoge-updates.js";
import { dtInvestors } from "../src/dt-investors";
import { dialogueBox } from "../src/dialogueBox.js";
import { MainDialogue } from "./typing.js";
import { SoundtrackManager } from "./soundtrack.js";
import { idlFactory } from "./backend/universe_backend/src/declarations/universe_backend/universe_backend.did.js";
import { Principal } from '@dfinity/principal';
import fleekStorage from '@fleekhq/fleek-storage-js';
// import { getAllUserNFTs } from '@psychedelic/dab-js';
// import the closeCampaign function from dt-campaign.js
import { mintingScreen } from "../src/mint.js";
// import { dialogue } from "./game/dialogue.js";
// import { getGameProgress } from "../src/game/levels/ch1";

window.closeCampaign = dtCampaign.closeCampaign;

const VITE_CommerceKey = import.meta.env.VITE_CommerceKey;
const VITE_StripeKey = import.meta.env.VITE_StripeKey;
const fleekP = import.meta.env.VITE_fleekP;
const fleekS = import.meta.env.VITE_fleekS;

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
window.shoploaded = false;
window.viewThisProduct = "";
window.investorsView = false;
window.urlParamsActive = false;
window.inUniverse = false;
window.productsloaded = false;

// Init Commerce
const commerce = new Commerce(`${VITE_CommerceKey}`, true);
console.log("COPYRIGHT 2022 - SCOGÉ Inc. - ALL RIGHTS RESERVED");

// // Init Stripe
var stripe = Stripe(`${VITE_StripeKey}`);
const elements = stripe.elements();

// Init Soundtrack
const soundtrack = new SoundtrackManager();
soundtrack.addTracks();

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
// FOCUS
window.isMobile = false;
// window.encouraged = false;

// Check Size on Resize
window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    var shopMenuBut = document.getElementById("shopBut");
    //
    document.getElementById("shop").style.opacity = "0%";
    document.getElementById("shop").style.visibility = "hidden";
    document.getElementById("povRight").style.opacity = "0%";
    document.getElementById("povLeft").style.opacity = "0%";
    setTimeout(() => {
      document.getElementById("povRight").style.visibility = "hidden";
      document.getElementById("povLeft").style.visibility = "hidden";
    }, 500);
    document.getElementById("tandc").style.display = "none";
    document.getElementById("tandc").style.opacity = "0%";
    document.getElementById("uniBut").style.display = "none";
    document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right = "-100%";
    shopActive = "closed";
    window.termsOpen = false;
    //
  } else {
    // Desktop
    document.getElementById("uniBut").style.display = "block";
    document.getElementById("shop").style.opacity = "100%";
    document.getElementById("shop").style.visibility = "visible";
    document.getElementById("mobileShop").style.display = "none";
    window.isMobile = false;
    window.logoMove(6, 3, 16, 1);
  }
});

// Check size on Start
window.sizeInit = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile
    // const node = document.createElement('mobile-shop1')
    // node.setAttribute("product","product1");
    // node.setAttribute("id","mobileShop");
    // node.setAttribute("style","display:none;");
    // document.getElementById("main").appendChild(node)
    document.getElementById("uniBut").style.display = "none";
    window.isMobile = true;
  } else {
    // Desktop
    // window.getParamsDesktop();
  }
};

window.shopping = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    openMobile();
    clearScreen();
  } else {
    toggleShop();
  }
};

// clear screen
window.clearScreen = () => {
  var shadow = document.getElementById("getCamp").shadowRoot;
    shadow.getElementById("campaignComp").style.transition = "1s all";
    shadow.getElementById("campaignComp").style.right = "-100%";
    clearFilter();
    clearSettings();
    clearShop();
}

// Toggle MobileShop
window.openMobile = () => {
  document.getElementById("mobileShop").style.display = "block";
};

// Play Destiny
window.destiny = () => {
  var destiny = document.getElementById("destiny");
  destiny.play();
  destiny.loop = true;
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
// Cler filter 
window.clearFilter = () => {
  var filter = document.getElementById("shopFilter");
  var clearFilter = document.getElementById("all");
  window.filterShop(clearFilter);
  filter.style.opacity = "0%";
  setTimeout(() => {
    filter.style.display = "none";
  }, 1000);
};
// Shop Button
window.toggleShop = () => {
  var confirm = document.getElementById("orderConfirm");
  var shopMenuBut = document.getElementById("shopBut");
  var filter = document.getElementById("shopFilter");
  var bg = document.getElementById("shopBG");
  bg.style.transition = ".5s all";
  // Disable some menu items below
  clearSettings();
  document.getElementById("updatesModal").style.display = "none";
  document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition = "1s all";
  document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right = "-70%";
  document.getElementById("shop").style.transition = "1s all";
  document.getElementById("povImageColumnLeft").innerHTML = "";
  switch (shopActive) {
    case "closed":
      filter.style.display = "grid";
      bg.style.display = "block";
      setTimeout(() => {
        filter.style.opacity = "100%";
        bg.style.opacity = "100%";
      }, 1000);
      setTimeout(() => {
        if (window.productsloaded === false) {
          document.getElementById("divLoadBG2").style.display = "grid";
        }
        document.getElementById("shop").style.right = "0%";
        document.getElementById("shopIcon").innerHTML = "X";
      }, 500);
      shopActive = "open";
      break;
    case "open":
      window.clearFilter();
      bg.style.opacity = "0%";
      setTimeout(() => {
        bg.style.display = "none";
      }, 500);
      clearShop();
      break;
    case "POVopen":
      document.getElementById("shop").style.overflowX = "scroll";
      shopActive = "open";
      var leftPOV = document.getElementById("povLeft");
      var rightPOV = document.getElementById("povRight");
      var checkDeets = document.getElementById("shopCheckoutDetails");
      checkDeets.style.transition = "1s all";
      checkDeets.style.visibility = "hidden";
      checkDeets.style.opacity = "0%";
      leftPOV.style.transition = "1s all";
      rightPOV.style.transition = "1s all";
      leftPOV.style.opacity = "0%";
      rightPOV.style.opacity = "0%";
      setTimeout(() => {
        rightPOV.style.visibility = "hidden";
        leftPOV.style.visibility = "hidden";
      }, 500);
      document.getElementById("tandc").style.display = "none";
      document.getElementById("tandc").style.opacity = "0%";
      document.getElementById("povImageColumnRight").innerHTML = "";
      window.returnSize();
      document.getElementById("eSymbol1").style.display = "none";
      document.getElementById("eSymbol2").style.display = "none";
      window.termsOpen = false;
      if (confirm.style.display === "block") {
        confirm.style.display = "none";
      }
      var sizeElements = document.getElementsByClassName("shopProduct");
      for (let i = 0; i < sizeElements.length; i++) {
        sizeElements[i].style.color = "black";
      }
      selectedPSize = "";
      document.getElementById("addToBagBut").innerHTML = "Select a size";
      break;
  }
};

// SETTINGS Button
window.openSettings = () => {
  document.getElementById("updatesModal").style.display = "none";
  window.clearFilter();
  clearShop();
  closeInvestor();
  var shadow = document.getElementById("getCamp").shadowRoot
  document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition = "1s all";
  document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right = "-70%";
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile
    shadow.getElementById("campaignComp").style.transition = "1s all";
    shadow.getElementById("campaignComp").style.right = "-100%";
  } else {
    // Desktop
    shadow.getElementById("campaignComp").style.transition = "1s all";
    shadow.getElementById("campaignComp").style.right = "-70%";
  }
  var menu = document.getElementById("settingsMenu");
  document.getElementById("settingsMenu").style.display = "grid";
  settingsActive = true;
    setTimeout(() => {
      menu.style.opacity = "100%";
    }, 300);
};

window.sysCheck = () => {
  document.addEventListener("keydown", function checkKeys(event){
    console.log("activated")
    if (event.key === "i") {
      ci = true;
      setTimeout(()=> {
        ci = false;
      } , 1000);
    }
    if (event.key === "c" && ci === true) {
      document.getElementById("uniBut").removeEventListener("click", systemNoti);
      document.getElementById("uniBut").addEventListener("click", universeSystem);
      soundtrack.play("scoge1");
    }
  });
}

// Clear Shop
window.clearShop = () => {
  document.getElementById("shop").style.right = "-70%";
  document.getElementById("shopIcon").innerHTML = "(0)";
  document.getElementById("shopIcon").setAttribute("onclick", "toggleShop()");
  document.getElementById("povRight").style.opacity = "0%";
  document.getElementById("povLeft").style.opacity = "0%";
  setTimeout(() => {
    document.getElementById("povRight").style.visibility = "hidden";
    document.getElementById("povLeft").style.visibility = "hidden";
  }, 500);
  document.getElementById("tandc").style.display = "none";
  document.getElementById("tandc").style.opacity = "0%";
  shopActive = "closed";
  window.termsOpen = false;
}

// Clear Settings
window.clearSettings = () => {
  document.getElementById("settingsMenu").style.transition = "1s all";
  document.getElementById("settingsMenu").style.opacity = "0%";
  setTimeout(() => {
    document.getElementById("settingsMenu").style.display = "none";
  },1000)
  settingsActive = false;
}

// World --------------------------------------------------------------------------------

var continents = {
  c1: {
    name: "1 - ALANSANA",
    text: "The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOGÉ Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-4.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world1-1.jpg"/>`,
  },
  c2: {
    name: "2 - FAALSANA",
    text: "No concrete data discovered for the 2nd Continent. Few sources indicate a region of migrants from various origins. ",
    images: `<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world0.jpg"/>`,
  },
  c3: {
    name: "3 - SANSET",
    text: "The 3rd Continent is widely known for having the harshest and most fluctuating weather conditions, due to its size and position between two oceanic gravity pockets. Its inhabitants frequently dress in garments that heavily wrap the body and can easily be removed when conditions drastically shift.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world3-1.jpg"/>`,
  },
  c4: {
    name: "4 - NAME UNKNOWN",
    text: "On the 4th Continent, you’ll find its inhabitants retain and nurture a unique sense of metaphysical intuition and practice. They adorn themselves in talismans reshaped into what could be considered garments but have little regard for the conventional dress.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-4.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world4-2.jpg"/>`,
  },
  c5: {
    name: "5 - CONTINENT UNKNOWN",
    text: "No concrete data discovered for the 5th  Continent. Few sources indicate it to be an ally of the 7th Continent.",
    images: `<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world0.jpg"/>`,
  },
  c6: {
    name: "6 - NAME UNKNOWN",
    text: "The mountainous inhabitants of the 6th Continent are highly regarded for their study of natural materials and their relation to the human body. They live among dangerous innovations but protect themselves with garments infused with protective physical and metaphysical properties- mostly darker-toned, as the continent is limited to elements that produce dark dyes.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-4.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-5.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world6-1.jpg"/>`,
  },
  c7: {
    name: "7 - SEELOO",
    text: "Little is known about the 7th Continent and its elusive inhabitants throughout Bankoo. Those who’ve managed to reach it beyond the protection of the 4th and 5th Continent have reported a land of dreams and abstraction- where artifacts, people, and land are one-and-the-same.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-2.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-3.jpg"/>
    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world7-1.jpg"/>`,
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
        "url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c1.images;
      break;
    case "world2":
      worldName.innerHTML = continents.c2.name;
      worldText.innerHTML = continents.c2.text;
      worldMain.style.backgroundImage =
        "url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c2.images;
      break;
    case "world3":
      worldName.innerHTML = continents.c3.name;
      worldText.innerHTML = continents.c3.text;
      worldMain.style.backgroundImage =
        "url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c3.images;
      break;
    case "world4":
      worldName.innerHTML = continents.c4.name;
      worldText.innerHTML = continents.c4.text;
      worldMain.style.backgroundImage =
        "url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')";
      worldBottom.innerHTML = continents.c4.images;
      break;
    case "world5":
      worldName.innerHTML = continents.c5.name;
      worldText.innerHTML = continents.c5.text;
      worldMain.style.backgroundImage =
        "url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-1-2.jpg')";
      worldBottom.innerHTML = continents.c5.images;
      break;
    case "world6":
      worldName.innerHTML = continents.c6.name;
      worldText.innerHTML = continents.c6.text;
      worldMain.style.backgroundImage =
        "url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')";
      worldBottom.innerHTML = continents.c6.images;
      break;
    case "world7":
      worldName.innerHTML = continents.c7.name;
      worldText.innerHTML = continents.c7.text;
      worldMain.style.backgroundImage =
        "url('https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/World/world-bg-3.jpg')";
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
window.activateInfinite = () => {
  window.logoMove(6, 3, 16, 1);
  if (BABYLON.Engine.isSupported()) {
    document.getElementById("renderCanvas").style.transition = "5s all";
    // let game = new GameManager("renderCanvas");
    if (infiniteActive === false) {
      // if (window.ic === undefined) {
      //   // Add text to get wallet and return once done.
      //   // Refresh Page
      //   document.getElementById("getWallet").style.display = "block";
      //   return "";
      // }
      document.getElementById("renderCanvas").style.display = "block";
      document.getElementById("renderCanvas").style.opacity = "0";
      new GameManager("renderCanvas");
      infiniteActive = true;
    } else {
      if (intro1 === false) {
        //
        intro1 = true;
      }
      //
      document.getElementById("settingsMenu").style.opacity = "0%";
      setTimeout(()=>{
        document.getElementById("settingsMenu").style.display = "none";
      },1000)
      settingsActive = false;
      var shopMenuBut = document.getElementById("shopBut");
      var canvas = document.getElementById("renderCanvas");
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      document.getElementById("shop").style.opacity = "0%";
      document.getElementById("shop").style.visibility = "hidden";
      document.getElementById("povRight").style.opacity = "0%";
      document.getElementById("povLeft").style.opacity = "0%";
      setTimeout(() => {
        document.getElementById("povRight").style.visibility = "hidden";
        document.getElementById("povLeft").style.visibility = "hidden";
      }, 500);
      document.getElementById("tandc").style.display = "none";
      document.getElementById("tandc").style.opacity = "0%";
      shopMenuBut.innerHTML = "SHOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      shopActive = "closed";
      window.termsOpen = false;
      //
      window.inUniverse = true;
      getGameProgress();
      window.logoMove(6, 3, 16, 1);
      document.getElementById("destiny").pause();
      document.getElementById("renderCanvas").style.opacity = "1";
      window.clearMainUi();
    }
  }
};

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

// -----------------------------------   SHOP  ---------------------------------------------------
var currentShopProduct;
// Open Product POV Screen
window.povOpen = (obj) => {
  var currentProduct = obj.id;
  window.mainMenuPosition("black","0%","0%","0%","0%");
  currentShopProduct = allProducts[0].filter((product) => {
    return product.id.includes(`${currentProduct}`);
  });
  shopActive = "POVopen";
  var leftPOV = document.getElementById("povLeft");
  var rightPOV = document.getElementById("povRight");
  leftPOV.style.transition = "1s all";
  rightPOV.style.transition = "1s all";
  document.getElementById("povRight").style.visibility = "visible";
  document.getElementById("povLeft").style.visibility = "visible";
  leftPOV.style.opacity = "100%";
  rightPOV.style.opacity = "100%";
  document.getElementById("scroll").style.display = "block";
  // Name
  document.getElementById("shopProductName").innerHTML = `
  ${currentShopProduct[0].name} <span class="blue" id="eSymbol1" style="display:none;" onclick="toggleTerms()">(É)</span><span class="blue" id="eSymbol2" style="display:none;" onclick="toggleTerms()">(SÉ)</span>
  `;
  currentShopProduct[0].categories.forEach((category) => {
    if (category.name === "É") {
      document.getElementById("eSymbol1").style.display = "block";
    }
    if (category.name === "SÉ") {
      document.getElementById("eSymbol2").style.display = "block";
    }
  });
  // Desc
  document.getElementById("shopProductDesc").innerHTML =
    currentShopProduct[0].description;
  // Price
  document.getElementById("shopProductPrice").innerHTML =
    currentShopProduct[0].price.formatted_with_symbol;
  // Qty Remaining
  if (currentShopProduct[0].inventory.available <= 10) {
    document.getElementById(
      "shopProductAvailable"
    ).innerHTML = `(LIMITED QUANTITY)`;
  } else {
    document.getElementById("shopProductAvailable").innerHTML = ``;
  }
  // E Check
  // Images
  var imageContainer = document.getElementById("povImageColumnLeft");
  document.getElementById(
    "povImageColumnRight"
  ).style.backgroundImage = `url("${currentShopProduct[0].assets[2].url}")`;
  currentShopProduct[0].assets.forEach((image) => {
    var imageElement = document.createElement("img");
    if (image.filename === "sizeChart.png") {
      imageElement.setAttribute("class", "sizeChartImage");
      imageElement.setAttribute("src", `${image.url}`);
      imageElement.setAttribute("id", `${image.filename}`);
      document.getElementById("povImageColumnRight").appendChild(imageElement);
    } else {
      imageElement.setAttribute("class", "leftPOVimages");
      imageElement.setAttribute("src", `${image.url}`);
      imageElement.setAttribute("id", `${image.url}`);
      imageElement.setAttribute("onclick", "changeToMainPic(this)");
      imageContainer.appendChild(imageElement);
    }
  });
  // Check Size Availability
  currentShopProduct[0].variant_groups[0].options.forEach((size) => {
    document.getElementById(`${size.name}`).style.opacity = "100%";
    document.getElementById(`${size.name}`).style.cursor = "pointer";
    if (size.name === "SingleSize") {
      var theRest = document.querySelectorAll(".shopProduct");
      document.getElementById("shopProductSizes").style.gridTemplateColumns =
        "1fr";
      document.getElementById("shopProductSizes").style.justifyItems = "end";
      theRest.forEach((element) => {
        if (element.id != "SingleSize") {
          element.style.display = "none";
        }
      });
      document.getElementById("SingleSize").style.display = "block";
    }
  });
  // If Cart Created Show Shopping Bag
  if (cartEmpty != true) {
    window.productAdded();
  }
};
// Return Sizes to normal
window.returnSize = () => {
  var theRest = document.querySelectorAll(".shopProduct");
  theRest.forEach((element) => {
    if (element.id != "SingleSize") {
      element.style.display = "block";
    }
    document.getElementById(element.id).style.opacity = ".3";
  });
  document.getElementById("SingleSize").style.display = "none";
  document.getElementById("shopProductSizes").style.gridTemplateColumns =
    "1fr 1fr 1fr 1fr 1fr 1fr";
  document.getElementById("shopProductSizes").style.justifyItems = "center";
};
// Change to Main Imag
window.changeToMainPic = (obj) => {
  var selectedImg = obj.id;
  document.getElementById(
    "povImageColumnRight"
  ).style.backgroundImage = `url("${selectedImg}")`;
};
// Size Guide On Hover
window.sizeGuideOn = () => {
  // Make Dynamic ****
  document.getElementById("sizeChart.png").style.transition = "1s all";
  document.getElementById("sizeChart.png").style.opacity = "100%";
  document.getElementById("gMenu").style.transition = "1s all";
  document.getElementById("gMenu").style.opacity = "0%";
};
window.sizeGuideOff = () => {
  // Make Dynamic ****
  document.getElementById("sizeChart.png").style.transition = "1s all";
  document.getElementById("sizeChart.png").style.opacity = "0%";
  document.getElementById("gMenu").style.transition = "1s all";
  document.getElementById("gMenu").style.opacity = "100%";
};
// PRODUCT ADDED
window.productAdded = () => {
  document.getElementById("shopCheckoutDetails").style.transition = "1s all";
  document.getElementById("shopCheckoutDetails").style.visibility = "visible";
  document.getElementById("shopCheckoutDetails").style.opacity = "100%";
};
// TEST Purchase
window.purchaseComplete = () => {
  document.getElementById("orderConfirm").style.display = "block";
  document.getElementById("orderConfirm").innerHTML = `
  <img style="width: 30%;" src="./assets/images/world/bankoo-map.png"/>
  <h2>Order Placed!</h2>
  <h3>Thank you for shopping at SCOGÉ.</h3>
  <h4>Your order confirmation number is: <span class="blue" id="confirmNumber"></span></h4>
  <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
  <br><br>
  <p>For any questions or inquiries please email <span class="blue">INFO@SCOGE.CO</span></p>
  `
};
// Toggle Terms And Conditions
window.termsOpen = false;
window.toggleTerms = () => {
  var terms = document.getElementById("tandc");
  var menu = document.getElementById("gMenu");
  if (terms.style.display === "block") {
    document.getElementById("tandc").style.transition = ".5s all";
    document.getElementById("tandc").style.display = "none";
    document.getElementById("tandc").style.opacity = "0%";
    menu.style.display = "block";
    window.termsOpen = false;
    return;
  } else if (terms.style.display != "block") {
    document.getElementById("tandc").innerHTML = `
    <h1>Terms & Conditions</h1><p>For designs marked with an <span class="blue">(‘É’)</span> or <span class="blue">(‘SÉ’)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2>Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2>Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2>Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="blue">('SÉ')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2>Exchanges:</h2><p>SCOGÉ does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p><h2>Privacy:</h2><p>SCOGÉ highly respects your Privacy & Security. In developing SCOGÉ we are actively working to convert the entire SCOGÉ technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2>Taxes, Duties and Border Charges:</h2><p>SCOGÉ is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country’s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="blue">Info@Scoge.co</span></p>
    `
    document.getElementById("tandc").style.transition = ".5s all";
    document.getElementById("tandc").style.display = "block";
    document.getElementById("tandc").style.opacity = "100%";
    menu.style.display = "none";
    window.termsOpen = true;
    terms.scrollTop = 0;
    return;
  }
};

// Shop Products
var allProducts = [];
window.productsloaded = false;
// Create Product Elements
window.loadShop = async () => {
  document.getElementById("divLoadBG2").style.display = "grid";
  var shopParent = document.getElementById("allShopProducts");
  await commerce.products
    .list({ limit: 100, sortDirection: "desc" })
    .then((product) => {
      allProducts.push(product.data);
    })
  allProducts[0].forEach((product) => {
    var productCont = document.createElement("div");
    productCont.setAttribute("class", "productContainer");
    productCont.setAttribute("id", product.id);
    product.categories.forEach((category) => {
      // add category name as a class
      productCont.classList.add(category.name);
    });
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Mobile
    } else {
      productCont.setAttribute("onmouseover", "shopOnHover(this)");
      productCont.setAttribute("onmouseout", "shopOutHover(this)");
      productCont.setAttribute("onclick", "povOpen(this)");
    }
    shopParent.appendChild(productCont);
    productCont.innerHTML = `
    <img class="shopProductsOver" src="${product.assets[1].url}">
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${product.assets[0].url}">
    <div class="pcDetails">
    <p class="pcProductName">${product.name}</p>
    <p class="pcProductPrice">${product.price.formatted_with_symbol}</p>
</div>
    `;
    window.productsloaded = true;
    document.getElementById("divLoadBG2").style.display = "none";
  });
  if (urlParamsActive === true) {
    povOpen(document.getElementById(viewThisProduct));
    window.history.replaceState({}, document.title, "/" + "index.html");
  };
  commerce.cart.empty();
};

// Image Fade
window.imageFade = (obj) => {
  var selected = obj;
  selected.style.transition = "all 2s";
  selected.style.opacity = "1";
};

// Change Shop Image On Hover
window.shopOnHover = (obj) => {
  var productId = obj.id;
  var current = document.getElementById(productId);
  current.getElementsByTagName("img")[1].style.opacity = "0%";
  current.getElementsByTagName("img")[0].style.opacity = "100%";
};

window.shopOutHover = (obj) => {
  var productId = obj.id;
  var current = document.getElementById(productId);
  current.getElementsByTagName("img")[0].style.opacity = "0%";
  current.getElementsByTagName("img")[1].style.opacity = "100%";
};

// Cart
var currentCart;
var cartEmpty = true;
var selectedPSize = "";
// Choose Size Variant
window.selectSize = (obj) => {
  if (obj.style.opacity === "1") {
    selectedPSize = obj.id;
    document.getElementById("addToBagBut").innerHTML = "Add To Bag";
    document
      .getElementById("addToBagBut")
      .setAttribute("onclick", "addToCart()");
  } else {
    selectedPSize = "";
    document
      .getElementById("addToBagBut")
      .removeAttribute("onclick", "addToCart()");
  }
  var sizeElements = document.getElementsByClassName("shopProduct");
  for (let i = 0; i < sizeElements.length; i++) {
    sizeElements[i].style.color = "black";
  }
  obj.style.color = "#ff002d";
};
// Countries
var countriesObj = {};
// Prep Cart and Add To Cart
window.addToCart = async () => {
  document.getElementById("shoppingBag").innerHTML = "";
  var selectedVariant = currentShopProduct[0].variant_groups[0].options.filter(
    (variant) => {
      return variant.name.includes(`${selectedPSize}`);
    }
  );
  // var selectedVariant = currentShopProduct.variant_groups[0].options
  document.getElementById("divLoadBG").style.display = "grid";
  commerce.cart
    .retrieve()
    .then((cart) => {
      currentCart = cart;
    })
    .then(() => {
      commerce.cart
        .add(currentShopProduct[0].id, 1, {
          [currentShopProduct[0].variant_groups[0].id]: selectedVariant[0].id,
        })
        .then(() => {
          cartEmpty = false;
          commerce.cart.retrieve().then((cart) => {
            currentCart = cart;
            document.getElementById("divLoadBG").style.display = "none";
            document.getElementById("addToBagBut").innerHTML = "Select a size";
            var sizeElements = document.getElementsByClassName("shopProduct");
            for (let i = 0; i < sizeElements.length; i++) {
              sizeElements[i].style.color = "";
            }
            // Add Line Items
            window.variantAbbr = "";
            cart.line_items.forEach((lineitem) => {
              var lineItemElement = document.createElement("div");
              lineItemElement.setAttribute("class", "bagProducts");
              document
                .getElementById("shoppingBag")
                .appendChild(lineItemElement);
              switch (lineitem.selected_options[0].option_name) {
                case "Small":
                  window.variantAbbr = "S";
                  break;
                case "Medium":
                  window.variantAbbr = "M";
                  break;
                case "Large":
                  window.variantAbbr = "L";
                  break;
                case "XLarge":
                  window.variantAbbr = "XL";
                  break;
                case "2XLarge":
                  window.variantAbbr = "2XL";
                  break;
                case "3XLarge":
                  window.variantAbbr = "3XL";
                  break;
              }
              lineItemElement.innerHTML = `
                  <div class="bagProduct">
                      <div class="bagPOver" id="${lineitem.id}">
                          <p id="test1sizeQty">(${lineitem.quantity})${window.variantAbbr}</p>
                      </div>
                      <div class="bagPRemove" id="${lineitem.id}" onclick="removeLineItem(this)">REMOVE</div>
                  </div>
                `;
              lineItemElement.setAttribute("id", `${lineitem.id}Parent`);
              // Line Item BG Image
              document.getElementById(
                lineitem.id
              ).style.backgroundImage = `url(${lineitem.image.url})`;
            });
            // Update Total
            document.getElementById("carTotal").innerHTML =
              cart.subtotal.formatted_with_symbol;
          });
          window.productAdded();
          selectedPSize = "";
          document.getElementById("addToBagBut").removeAttribute("onclick");
        });
    });
  if (countriedAdded === false) {
    countriedAdded = true;
    // Add Country Inputs
    commerce.services.localeListCountries().then((response) => {
      countriesObj = response.countries;
      Object.keys(response.countries).forEach((country) => {
        var countryEl = document.createElement("option");
        var countrySelect = document.getElementById("input9");
        countryEl.setAttribute("value", country);
        countryEl.setAttribute("title", country);
        countryEl.innerHTML = `${countriesObj[country].substr(0, 20)}`;
        countrySelect.appendChild(countryEl);
      });
    });
  }
};
// Remove Line Item
window.removeLineItem = (obj) => {
  document.getElementById("divLoadBG").style.display = "grid";
  var item = obj.id;
  commerce.cart.remove(item).then((response) => {
    document.getElementById(`${item}Parent`).remove();
    document.getElementById("divLoadBG").style.display = "none";
    document.getElementById("carTotal").innerHTML =
      response.cart.subtotal.formatted_with_symbol;
    currentCart = response.cart;
    if (response.cart.total_items === 0) {
      cartEmpty = true;
      countriedAdded = false;
      document.getElementById("shopCheckoutDetails").style.transition =
        "1s all";
      document.getElementById("shopCheckoutDetails").style.visibility =
        "hidden";
      document.getElementById("shopCheckoutDetails").style.opacity = "0%";
      document.getElementById("input9").innerHTML = `
      <option value="Select Country" title="Select">Select Country</option>
                                <option value="US" title="US">US</option>
                                <option value="US" title="US2">US - Next Day Air</option>
      `;
    }
  });
};
// Shipping
window.shippingMethodValue;
window.states = () => {
  var select = document.getElementById("input9");
  var selectedCountry = select.options[select.selectedIndex].value;
  var us2 = select.options[select.selectedIndex].title;
  var totalPrice = document.getElementById("carTotal");
  document.getElementById("input7").innerHTML = ``;
  if (selectedCountry === "US") {
    // countryEl.setAttribute("selected","");
    document.getElementById("input4").value = "$0.00 Free Shipping";
    window.shippingMethodValue = 1;
    totalPrice.innerHTML = currentCart.subtotal.formatted_with_symbol;
  }
  if (selectedCountry != "US") {
    document.getElementById("input4").value = "$70.00 Intl Shipping";
    window.shippingMethodValue = 3;
    totalPrice.innerHTML = `$${currentCart.subtotal.raw + 70}.00`;
  }
  if (us2 === "US2") {
    document.getElementById("input4").value = "$130.00 - Next Day Air";
    window.shippingMethodValue = 2;
    totalPrice.innerHTML = `$${currentCart.subtotal.raw + 130}.00`;
  }
  commerce.services.localeListSubdivisions(selectedCountry).then((response) => {
    var allStates = response.subdivisions;
    Object.keys(response.subdivisions).forEach((state) => {
      var stateEl = document.createElement("option");
      var stateSelect = document.getElementById("input7");
      if (Object.keys(response.subdivisions).length <= 1) {
        var sel = document.createElement("option");
        sel.innerHTML = `Not Available.`;
        select.options[select.selectedIndex].innerHTML = "Select Country";
        document.getElementById("input7").appendChild(sel);
      } else {
        stateEl.setAttribute("value", allStates[state]);
        stateEl.setAttribute("id", state);
        stateEl.innerHTML = allStates[state].substring(0, 20);
        stateSelect.appendChild(stateEl);
      }
    });
  });
};
// CHECKOUT
// Create our card inputs
var style = {
  base: {
    color: "black",
  },
};
const card = elements.create("card", { style });
card.mount("#card-element");
// Capture Order
var shippingM = [];
window.shippingId = "";
window.checkOut = async () => {
  var fn = document.getElementById("input1").value;
  var ln = document.getElementById("input2").value;
  var address = document.getElementById("input3").value;
  var shippingMethod = document.getElementById("input4").value;
  var em = document.getElementById("input5").value;
  var cit = document.getElementById("input6").value;
  var zc = document.getElementById("input8").value;
  var sa = document.getElementById("input10").value;
  var select1 = document.getElementById("input9");
  var select2 = document.getElementById("input7");
  var selectedCountry = select1.options[select1.selectedIndex].value;
  var selectedState = select2.options[select2.selectedIndex].id;
  document.getElementById("divLoadBG").style.display = "grid";
  setTimeout(() => {
    document
      .getElementById("divLoadBG")
      .setAttribute("onclick", "closeLoadE()");
    document.getElementById("divLoadBG").innerHTML =
      "<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>";
  }, 20000);
  await commerce.checkout
    .generateToken(currentCart.id, { type: "cart" })
    .catch(() => {
      console.log("Couldnt Generate Token");
      document
        .getElementById("divLoadBG")
        .setAttribute("onclick", "closeLoadE()");
      document.getElementById("divLoadBG").innerHTML =
        "<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>";
    })
    .then(async (checkout) => {
      commerce.checkout
        .getShippingOptions(checkout.id, {
          country: selectedCountry,
        })
        .then(async (response) => {
          if (window.shippingMethodValue === 1) {
            window.shippingId = response[0].id;
          }
          if (window.shippingMethodValue === 3) {
            window.shippingId = response[0].id;
          }
          if (window.shippingMethodValue === 2) {
            window.shippingId = response[1].id;
          }
          var fullName = `${fn} ${ln}`;
          const paymentMethodResponse = await stripe.createPaymentMethod({
            type: "card",
            card,
          });
          if (paymentMethodResponse.error) {
            // There was some issue with the information that the customer entered into the payment details form.
            document.getElementById("divLoadBG").style.display = "none";
            console.log(paymentMethodResponse.error.message);
            document
              .getElementById("divLoadBG")
              .setAttribute("onclick", "closeLoadE()");
            document.getElementById(
              "divLoadBG"
            ).innerHTML = `<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${paymentMethodResponse.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;
            return;
          }
          try {
            const order = await commerce.checkout.capture(checkout.id, {
              customer: {
                firstname: `${fn}`,
                lastname: `${ln}`,
                email: `${em}`,
              },
              extra_fields: {
                extr_DWy4oG4dY56Jx2: sa,
              },
              shipping: {
                name: `${fullName}`,
                street: `${address}`,
                town_city: `${cit}`,
                county_state: `${selectedState}`,
                postal_zip_code: `${zc}`,
                country: `${selectedCountry}`,
              },
              fulfillment: {
                shipping_method: `${window.shippingId}`,
              },
              billing: {
                name: `${fullName}`,
                street: `${address}`,
                town_city: `${cit}`,
                county_state: `${selectedState}`,
                postal_zip_code: `${zc}`,
                country: `${selectedCountry}`,
              },
              payment: {
                gateway: "stripe",
                stripe: {
                  payment_method_id: paymentMethodResponse.paymentMethod.id,
                },
              },
            });
            // console.log("THIS IS THE ORDER", order);
            setTimeout(() => {
              window.closeLoadE();
            }, 20000);
            window.closeLoadE();
            document.getElementById("confirmNumber").innerHTML =
              order.customer_reference;
            window.purchaseComplete();
            document.getElementById("shopCheckoutDetails").style.transition =
              "1s all";
            document.getElementById("shopCheckoutDetails").style.visibility =
              "hidden";
            document.getElementById("shopCheckoutDetails").style.opacity = "0%";
            document.getElementById(
              "input9"
            ).innerHTML = `<option value="US" title="US">US</option>
                                    <option value="US" title="US2">US - Next Day Air</option>`;
            document.getElementById("shoppingBag").innerHTML = "";
            cartEmpty = true;
            document.getElementById("shopCheckoutDetails").style.opacity = "0%";
            card.clear();
            // Clear Form Inputs
            return;
          } catch (response) {
            // There was an issue with capturing the order with Commerce.js
            document
              .getElementById("divLoadBG")
              .setAttribute("onclick", "closeLoadE()");
            document.getElementById(
              "divLoadBG"
            ).innerHTML = `<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${response.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;
            console.log("Catch ERROR");
            console.log(response);
            return;
          } finally {
            // Any loading state can be removed here.
          }
        });
    });
};
// Close Error Loading Message
window.closeLoadE = () => {
  document.getElementById("divLoadBG").innerHTML = `<div class="loader"></div>`;
  document.getElementById("divLoadBG").removeAttribute("onclick");
  document.getElementById("divLoadBG").style.display = "none";
  card.clear();
};
// Crypto Coming Soon
window.ccsOn = () => {
  document.getElementById("crypto").innerHTML = "Coming Soon";
};
window.ccsOff = () => {
  document.getElementById("crypto").innerHTML = "Pay with Crypto";
};
// Shop Filter
window.filterShop = (e) => {
  var sectionDesc = document.getElementById("sectionDesc");
  var selected = e.id;
  // if input is not all then deselect all
  if (selected !== "all") {
    document.getElementById("all").checked = false;
  };
  // when all is selected deselect all other filters inputs
  switch (selected) {
    case "all":
      sectionDesc.innerHTML = `<h2>All Products</h2>
      <h4>SCOGÉ Shop - Collection pieces, gifts and more.</h4>`;
      document.getElementById("all").checked = true;
      document.getElementById("tops").checked = false;
      document.getElementById("bottoms").checked = false;
      document.getElementById("accessories").checked = false;
      document.getElementById("art").checked = false;
      document.getElementById("gifts").checked = false;
      // document.getElementById("dresses").checked = false;
      document.querySelectorAll(".productContainer").forEach((item) => {
        item.style.display = "block";
      });
      break;
    case "tops":
      sectionDesc.innerHTML = `<h2>Tops</h2>
      <h4>SCOGÉ T-Shirts, Hoodies, Shirts and Jackets.</h4>`;
      document.getElementById("all").checked = false;
      document.getElementById("tops").checked = true;
      document.getElementById("bottoms").checked = false;
      document.getElementById("accessories").checked = false;
      document.getElementById("art").checked = false;
      document.getElementById("gifts").checked = false;
      // document.getElementById("dresses").checked = false;
      document.querySelectorAll(".productContainer").forEach((item) => {
        if (!item.classList.contains("tops")) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        };
      }
      );
      break;
    case "bottoms":
      sectionDesc.innerHTML = `<h2>Bottoms</h2>
      <h4>SCOGÉ Pants, Shorts, and Joggers.</h4>`;
      document.getElementById("all").checked = false;
      document.getElementById("tops").checked = false;
      document.getElementById("bottoms").checked = true;
      document.getElementById("accessories").checked = false;
      document.getElementById("art").checked = false;
      document.getElementById("gifts").checked = false;
      // document.getElementById("dresses").checked = false;
      document.querySelectorAll(".productContainer").forEach((item) => {
        if (!item.classList.contains("bottoms")) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        };
      }
      );
      break;
    case "accessories":
      sectionDesc.innerHTML = `<h2>Accessories</h2>
      <h4>SCOGÉ Hats & More.</h4>`;
      document.getElementById("all").checked = false;
      document.getElementById("tops").checked = false;
      document.getElementById("bottoms").checked = false;
      document.getElementById("accessories").checked = true;
      document.getElementById("art").checked = false;
      document.getElementById("gifts").checked = false;
      // document.getElementById("dresses").checked = false;
      document.querySelectorAll(".productContainer").forEach((item) => {
        if (!item.classList.contains("accessories")) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        };
      }
      );
      break;
    case "art":
      sectionDesc.innerHTML = `<h2>Artwork</h2>
      <h4>SCOGÉ Limited Edition 1-of-1 Artworks from Discovery 1 Collection.</h4>`;
      document.getElementById("all").checked = false;
      document.getElementById("tops").checked = false;
      document.getElementById("bottoms").checked = false;
      document.getElementById("accessories").checked = false;
      document.getElementById("art").checked = true;
      document.getElementById("gifts").checked = false;
      // document.getElementById("dresses").checked = false;
      document.querySelectorAll(".productContainer").forEach((item) => {
        if (!item.classList.contains("art")) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        };
      }
      );
      break;
    case "gifts":
      sectionDesc.innerHTML = `<h2>Gifts</h2>
      <h4>SCOGÉ pieces wrapped, boxed, and ready to gift.</h4>`;
      document.getElementById("all").checked = false;
      document.getElementById("tops").checked = false;
      document.getElementById("bottoms").checked = false;
      document.getElementById("accessories").checked = false;
      document.getElementById("art").checked = false;
      document.getElementById("gifts").checked = true;
      // document.getElementById("dresses").checked = false;
      document.querySelectorAll(".productContainer").forEach((item) => {
        if (!item.classList.contains("gifts")) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        };
      }
      );
      break;
    // case "dresses":
    //   document.getElementById("all").checked = false;
    //   document.getElementById("tops").checked = false;
    //   document.getElementById("bottoms").checked = false;
    //   document.getElementById("accessories").checked = false;
    //   document.getElementById("art").checked = false;
    //   document.getElementById("gifts").checked = false;
    //   document.getElementById("dresses").checked = true;
    //   document.querySelectorAll(".productContainer").forEach((item) => {
    //     if (!item.classList.contains("dresses")) {
    //       item.style.display = "none";
    //     } else {
    //       item.style.display = "block";
    //     };
    //   }
    //   );
    //   break;
  }
}

// -----------------------------------   SHOP END  -----------------------------------------------
// SAY SCOGÉ //
window.sayScoge = () => {
  document.getElementById("scoge").play();
  clearScreen();
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
  if (inUniverse === true) {
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
  document.getElementById("investBut").style.display = "block";
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile
    document.getElementById("settingsBut").style.display = "none";
  }
}

// Open Investors
window.openInvestors = () => {
  document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition = "1s all";
  document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right = "-70%";
  document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition = "1s all";
  document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right = "0%";
}

window.closeInvestor = () => {
  document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.transition = "1s all";
  document.getElementById("getInvestors").shadowRoot.getElementById("investorComp").style.right = "-100%";
}

// URL PARAMS OPEN SHOP
window.getParamsDesktop = () => {
  const params = new URLSearchParams(location.search)
  // viewThisProduct = params.get("Product");
  // urlParamsActive = true;
  investorsView = params.get("Investors");
  if (investorsView === "true") {
    activateInvestors();
  }
  // toggleShop();
}

// -----------------------------------------------
// -----------------------------------------------
// UNIVERSE SYSTEM

var universeCanvas = document.querySelector("#universe");
var exploreUI = document.querySelector("#exploreUI");
var previewUI = document.getElementById("previewUI");
var expBox = document.getElementById("explore");
var pinUi = document.getElementById("getUniMenu").shadowRoot.getElementById("pinMenu");
var locked = document.getElementById("getUniMenu").shadowRoot.getElementById("locked");
var moveMenu = document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu");
var playerPos = {x: 0, y: 0};
var selectionPos = {x: 0, y: 0};
var selectionBoxPosition = {x: 0, y: 0};
var cityPosition = {x: 0, y: 0};
var convertedSelPos;
var convertedCursorPos;
var tileSize = 18;
var travelSp = 1000;
var playerNum = 0;
var msL = 50;
var msR = 50;
var msU = 50;
var msD = 50;
var speedBoost = 36;
var movementPaused = false;
var timeoutHandle1;
var timeoutHandle2;
var previewOpen = false;
var landActivated = false;
var sessionData = {};
var ci = false;
window.suUiActor = null;
const suIDL = idlFactory;
var user = {
  principal: null,
  balance: null,
  pk: null,
  nfts: null
};
var uiState = {
  nftsLoaded: false,
}
const VITE_canister = import.meta.env.VITE_universe_backend_canister_Id;
const whitelist = [VITE_canister];
const host = "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=wnunb-baaaa-aaaag-aaoya-cai";
const localhost = "http://127.0.0.1:8080/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai";
let getAllUserNFTs;
// BEFORE LAUNCH !!!!!!!!!
// Rebuilding Actors Across Account Switches

document.getElementById("settingsBut").addEventListener("click", openSettings);
window.onload = () => {
  sizeInit();
  loadShop();
  getParamsDesktop();
  document.getElementById("uniBut").addEventListener("click", systemNoti);
  sysCheck();
}

window.universeSystem = async () => {
  var uniCtx = universeCanvas.getContext("2d");
  var img = document.createElement("img");
  var cam = document.getElementById("camera");
  soundtrack.stop('menuEntrance1');
  soundtrack.play('menuEntrance1');
  // Check for browser support
  if (navigator.userAgent.includes("Brave") || navigator.userAgent.includes("Firefox") || navigator.userAgent.includes("Chrome")) {
  // The browser is Brave, Firefox, or Chrome
    console.log("The browser is Brave, Firefox, or Chrome");
    // Import the getAllUserNFTs function if someCondition is true
    getAllUserNFTs = await import('@psychedelic/dab-js').then(module => module.getAllUserNFTs);
    document.querySelector("#universe").style.display = "block";
    setTimeout(()=> {
      document.querySelector("#universe").style.opacity = "100%";
    },100);
    img.onload = function() {
      uniCtx.drawImage(img, 0, 0, img.width, img.height);
      // make a 18px by 18px grid overlay
      uniCtx.fillStyle = "rgba(255, 255, 255, 0.08)";
      for (var x = 0; x < img.width; x += tileSize) {
        uniCtx.fillRect(x, 0, 1, img.height);
      }
      for (var y = 0; y < img.height; y += tileSize) {
        uniCtx.fillRect(0, y, img.width, 1);
      }
    }
    img.src = "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg";
    cam.scrollTo(990,0);
    // prevent scrolling under scrollto(990,0) and activate scrolling over scrollto(990,0)
    cam.addEventListener("scroll", function() {
      if (cam.scrollLeft < 990) {
        cam.scrollTo(990,0);
      }
      cam.style.overflowY = "hidden";
    }
    , {passive: false});
    // disable scrolling with mouse wheel
    cam.addEventListener("wheel", function(e) {
      e.preventDefault();
    }
    , {passive: false});
    adminUI();
    // add event listener to mousemove
    universeCanvas.addEventListener("mousemove", mousePos);
    // add event listener to mouseclick
    universeCanvas.addEventListener("click", selectedPos);
    openLocationCard();
    window.playerPos();
  } else {
    // The browser is not Brave, Firefox, or Chrome
    alert("The browser is not Brave, Firefox, or Chrome");
  }
  //
}

// Admin UI
window.adminUI = () => {
  var uiWindow = document.createElement("div");
  var columnDiv = document.createElement("div");
  var rowDiv = document.createElement("div");
  var selectionPosDiv = document.createElement("div");
  var pixelPosDiv = document.createElement("div");
  var selectPosBoxDiv = document.createElement("div");
  var playerCordDiv = document.createElement("div");
  document.getElementById("selection").style.display = "block";
  uiWindow.id = "adminUI";
  columnDiv.id = "DebugColumn";
  rowDiv.id = "DebugRow";
  selectionPosDiv.id = "selectionPos";
  pixelPosDiv.id = "pixelPos";
  selectPosBoxDiv.id = "selectPosBox";
  playerCordDiv.id = "playerCord";
  uiWindow.appendChild(pixelPosDiv);
  uiWindow.appendChild(columnDiv);
  uiWindow.appendChild(rowDiv);
  uiWindow.appendChild(selectionPosDiv);
  uiWindow.appendChild(selectPosBoxDiv);
  uiWindow.appendChild(playerCordDiv);
  document.getElementById("main").appendChild(uiWindow);
  dragElement(document.getElementById("adminUI"),true);
  dragElement(document.getElementById("exploreUI"),true);
  selectionPosDiv.innerHTML = "Selected Tile:"
  columnDiv.innerHTML = "Column:";
  rowDiv.innerHTML = "Row:";
  pixelPosDiv.innerHTML = "X: , Y:";
  selectPosBoxDiv.innerHTML = "SelBoxTile:";
  playerCordDiv.innerHTML = "Player Coordinates:";
  initSelection();
  moveSelection();
  window.moveMenu();
}

// mouse position
window.mousePos = (e) => {
  // get mouse position
  var rect = universeCanvas.getBoundingClientRect();
  playerPos.x = Math.round((e.clientX - rect.left) / tileSize);
  playerPos.y = Math.round((e.clientY - rect.top) / tileSize);
  pixelPos.x = e.clientX - rect.left;
  pixelPos.y = e.clientY - rect.top;
  // innerHTML mouse position to adminUI
  document.getElementById("DebugColumn").innerHTML = "Column: " + playerPos.x;
  document.getElementById("DebugRow").innerHTML = "Row: " + playerPos.y;
  document.getElementById("pixelPos").innerHTML = "X: " + pixelPos.x + ", " + "Y: " + pixelPos.y;
}

// selection position
window.selectedPos = (e) => {
  // get mouse position
  document.getElementById("explore").style.display = "block";
  var rect = universeCanvas.getBoundingClientRect();
  exploreUI.style.transform = "scale(0)";
  selectionPos.x = Math.round((e.clientX - (rect.left + 9)) / tileSize);
  selectionPos.y = Math.round((e.clientY - (rect.top + 9)) / tileSize);
  // innerHTML mouse position to adminUI
  var deduct = 170 - selectionPos.x;
  document.getElementById("selectionPos").innerHTML = "Selected Tile: " + ((170 - deduct) + (170 * selectionPos.y));
  playerNum = ((170 - deduct) + (170 * selectionPos.y));
  convertedCursorPos = ((170 - deduct) + (170 * selectionPos.y));
  previewUI.innerHTML = "Land " + playerNum;
  previewUI.style.color = "blue";
  // move explore box to pointer and snap to nearest grid position
  expBox.style.left = (e.clientX - (expBox.offsetWidth / 2)) + "px";
  expBox.style.top = (e.clientY - (expBox.offsetHeight / 2)) + "px";
  expBox.style.left = (Math.round((expBox.offsetLeft - rect.left) / tileSize) * tileSize) + rect.left + "px";
  expBox.style.top = (Math.round((expBox.offsetTop - rect.top) / tileSize) * tileSize) + rect.top + "px";
  // display previewUI and position it 18px to the right of the explore box and the bottom of the preview box is 18px above the explore box top edge
  previewUI.style.display = "block";
  previewUI.style.left = (expBox.offsetLeft + expBox.offsetWidth + 18) + "px";
  previewUI.style.top = (expBox.offsetTop - 108) + "px";
  // if position is less than 215px from the top edge of the canvas, move previewUI to the bottom of the explore box
  previewUI.style.transformOrigin = "bottom left";
  if (expBox.offsetTop < 215) {
    previewUI.style.top = (expBox.offsetTop + expBox.offsetHeight + 18) + "px";
    previewUI.style.transformOrigin = "top left";
  }
  // if position is 215px from the right edge of the screen, move previewUI to the left of the explore box
  if (expBox.offsetLeft > (window.innerWidth - 215)) {
    previewUI.style.left = (expBox.offsetLeft - previewUI.offsetWidth - 18) + "px";
    previewUI.style.transformOrigin = "bottom right";
  }
  // if position is less than 215px from the left edge of the screen, move previewUI to the right of the explore box
  if (expBox.offsetLeft < 215) {
    previewUI.style.transformOrigin = "bottom left";
  }
  // scale previewUI to 1x from bottom left corner
  // previewUI.style.transformOrigin = "bottom left";
  if (previewOpen == false) {
    previewUI.style.transform = "scale(1)";
    previewOpen = true;
    timeoutHandle1 = setTimeout(() => {
      previewUI.style.transform = "scale(0)";
      previewOpen = false;
    }, 3000);
    return;
  } 
  if (previewOpen == true) {
    clearTimeout(timeoutHandle1);
    timeoutHandle1 = setTimeout(() => {
      previewUI.style.transform = "scale(0)";
      previewOpen = false;
    }, 3000);
    return;
  }
}

// DRAG
function dragElement(elmnt, on) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (on === false) {
    return;
  }
  pinUi.style.borderTop = "2px solid rgba(225, 225, 225, 0.8)";
  pinUi.style.borderLeft = "2px solid rgba(225, 225, 225, 0.8)";
  pinUi.style.filter = "blur(0px)";
  pinUi.setAttribute("class", "unpinned");
  locked.style.opacity = "0";
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Deactivate Menu Drag
window.deactivateDrag = () => {
  moveMenu.onmousedown = null;
  document.onmouseup = null;
  document.onmousemove = null;
  pinUi.style.borderTop = "4px solid #ff002d";
  pinUi.style.borderLeft = "4px solid #ff002d";
  pinUi.setAttribute("class", "pinned");
  locked.style.opacity = "1";
}

// Pin Menu
window.pinMenu = () => {
  if (pinUi.getAttribute("class") == "pinned") {
    dragElement(moveMenu, true);
    pinUi.setAttribute("class", "unpinned");
    return;
  }
  if (pinUi.getAttribute("class") == "unpinned") {
    deactivateDrag();
    pinUi.setAttribute("class", "pinned");
    moveMenu.style.transition = "1s";
    moveMenu.style.top = "36px";
    moveMenu.style.left = "36px";
    document.getElementById("getUniMenu").toggleMenu();
    setTimeout(() => {
      moveMenu.style.transition = "";
    }, 1200);
    return;
  }
}

window.playerPos = () => {
  var box = document.getElementById("selection");
 // get position of the canvas element relative to the viewport 
 var rect = universeCanvas.getBoundingClientRect();
 // get position of the selection box relative to the viewport
 var boxRect = box.getBoundingClientRect();
 // get position of the selection box relative to the canvas element
 var boxPos = {
   x: Math.round((boxRect.left - rect.left + 2)),
   y: Math.round((boxRect.top - rect.top + 2))
 }
 var convertedBoxPos = {
   x: Math.round(boxPos.x / tileSize),
   y: Math.round(Math.round(boxPos.y / tileSize))
 }
 var deduct = 170 - convertedBoxPos.x;
 var position = (170 - deduct) + (convertedBoxPos.y * 170);
 document.getElementById("selectPosBox").innerHTML = `Player Position: ${position}`;
 convertedSelPos = (170 - deduct) + (convertedBoxPos.y * 170);
 cityPosition.x = boxPos.x;
 cityPosition.y = boxPos.y;
 document.getElementById("playerCord").innerHTML = `Player Coordinates: ${cityPosition.x}, ${cityPosition.y}`;
}

window.moveSelection = () => {
  var box = document.getElementById("selection");
  var window18Height = window.innerHeight / tileSize;
  var window18Width = window.innerWidth / tileSize;
  var topCenter = window18Height / 2;
  var leftCenter = window18Width / 2;
  selectionBoxPosition.x = leftCenter * tileSize;
  selectionBoxPosition.y = topCenter * tileSize;
  // make a event listeniner for arrow keys and move the selection box 18px in the direction of the arrow key pressed starting from its current position if window is not scrolling. Stop from moving at the edge of the window screen size. 
  document.addEventListener("keydown", function(e) {
    exploreUI.style.transform = "scale(0)";
    if (e.keyCode == 37) {
      if (selectionBoxPosition.x > 0) {
        if (movementPaused == false) {
          selectionBoxPosition.x -= tileSize;
          movementPaused = true;
          setTimeout(() => {
            movementPaused = false;
          }, msL);
        }
      }
    }
    if (e.keyCode == 38) {
      if (selectionBoxPosition.y > 0) {
        if (movementPaused == false) {
          selectionBoxPosition.y -= tileSize;
          movementPaused = true;
          setTimeout(() => {
            movementPaused = false;
          }, msU);
        }
      }
    }
    if (e.keyCode == 39) {
      if (selectionBoxPosition.x < (window18Width * tileSize) - tileSize) {
        if (movementPaused == false) {
          selectionBoxPosition.x += tileSize;
          movementPaused = true;
          setTimeout(() => {
            movementPaused = false;
          }, msR);
        }
      }
    }
    if (e.keyCode == 40) {
      if (selectionBoxPosition.y < (window18Height * tileSize) - tileSize) {
        if (movementPaused == false) {
          selectionBoxPosition.y += tileSize;
          movementPaused = true;
          setTimeout(() => {
            movementPaused = false;
          }, msD);
        }
      }
    }
    box.style.left = selectionBoxPosition.x + "px";
    box.style.top = selectionBoxPosition.y + "px";
    window.playerPos();
    // if space bar is pressed open the explore UI
    if (e.keyCode == 32) {
        window.exploreOpenHelper();
    }
  }
  );
  // scroll the camera element when the selection box reaches the edge of the window screen size 
  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 37) {
      if (selectionBoxPosition.x == 0) {
        document.getElementById("camera").scrollLeft -= tileSize;
      }
    }
    if (e.keyCode == 38) {
      if (selectionBoxPosition.y == 0) {
        document.getElementById("camera").scrollTop -= tileSize;
      }
    }
    if (e.keyCode == 39) {
      if (selectionBoxPosition.x == (window18Width * tileSize) - tileSize) {
        document.getElementById("camera").scrollLeft += tileSize;
      }
    }
    if (e.keyCode == 40) {
      if (selectionBoxPosition.y == (window18Height * tileSize) - tileSize) {
        document.getElementById("camera").scrollTop += tileSize;
      }
    }
  }
  );
}

window.initSelection = () => {
  // get window size
  var windowWidth = window.innerWidth / tileSize;
  var windowHeight = window.innerHeight / tileSize;
  // position selection box in the center of the window
  var selectionBox = document.getElementById("selection");
  selectionBox.style.left = (windowWidth / 2) * tileSize + "px";
  selectionBox.style.top = (windowHeight / 2) * tileSize + "px";
}

// Open Location Card
window.openLocationCard = () => {
  universeCanvas.addEventListener("dblclick", () => {
    document.getElementById("previewUI").style.transform = "scale(0)";
  if (convertedSelPos === convertedCursorPos) {
    window.exploreOpenHelper();
  } else {
    var adminUI = document.getElementById("adminUI");
    adminUI.style.opacity = "1";
    setTimeout(() => {
      adminUI.style.opacity = "0";
    }, 5000)
  }
  })
}

// Explore Open Helper 
window.exploreOpenHelper = () => {
  // scale exploreUI to 1 and position it 18px to the right of the selection box if the space to the right of the selection box is greater than the width of the exploreUI element, if not position it 18px to the left of the selection box.
  var exploreUISize = document.getElementById("exploreUI").offsetWidth;
  if (selectionBoxPosition.x < (window.innerWidth / tileSize) * tileSize - 18 - exploreUISize) {
    exploreUI.style.left = selectionBoxPosition.x + tileSize + 18 + "px";
  } else {
    exploreUI.style.left = selectionBoxPosition.x - 18 - exploreUISize + "px";
  }
  exploreUI.style.transform = "scale(1)";
  if (landActivated === false) {
    exploreUI.style.width = "200px";
    exploreUI.style.height = "92px";
    exploreUI.style.top = selectionBoxPosition.y - 92 + "px";
    clearTimeout(timeoutHandle2);
    timeoutHandle2 = setTimeout(() => {
      exploreUI.style.transform = "scale(0)";
    }, 6000);
  } else {
    exploreUI.style.width = "540px";
    exploreUI.style.height = "810px";
  }
}

// Move menu 
window.moveMenu = () => {
  var canvas = document.getElementById("universe");
  moveMenu.style.display = "block";
  var uniMenu = document.getElementById("getUniMenu").shadowRoot.getElementById("menuItems");
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  var text = document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".uniMenuTxt");
  // MenuSounds
  text.forEach(el => {
    el.addEventListener("mouseout", () => {
      soundtrack.setVolume('menuMove3', 0.5);
      soundtrack.stop('menuMove3');
      soundtrack.play('menuMove3');
    });
  })
  //
  uniMenu.childNodes.forEach(el => {
    if (el.id != "uniMenuItems") {
      soundtrack.stop('menuLoading1');
    }
    el.addEventListener("click", () => {
      clearAndSelectMenu(el.id);
      soundtrack.stop('menuEnter3');
      soundtrack.play('menuEnter3');
    });
    switch (el.id) {
      case "uniMenuShop":
        el.addEventListener("click", () => {
          dragElement(moveMenu, true);
          shadow.getElementById("fm-enhancements").style.display = "grid";
          shadow.getElementById("fm-header-headline").style.opacity = "0%";
          shadow.getElementById("fm-header-headline").style.pointerEvents = "none";
          shadow.getElementById("fm-help").style.display = "none";
          shadow.getElementById("fm-feedback").style.display = "none";
          shadow.getElementById("fm-settings").style.display ="none";
          shadow.getElementById("fm-profile").style.display = "none";
          shadow.getElementById("fm-enhancements").innerHTML = `<img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/universe/nft-shop.webp" alt="NFT Shop" id="nftShop">`;
          shadow.getElementById("nftShop").addEventListener("click", () => {
            document.getElementById("getNfts").toggleNftScreen();
            canvas.style.filter = "blur(5px)";
            shadow.getElementById("uniMenu").style.filter = "blur(10px)";
          });
          shadow.getElementById("fm-inventory").style.display = "none";
          shadow.getElementById("menuLoadingScreen").style.display = "none";
          shadow.getElementById("menuMessage").style.display ="none";
        }
        );
        break;
      case "uniMenuItems":
        el.addEventListener("click", () => {
          dragElement(moveMenu, true);
          window.openInventory();
          shadow.getElementById("fm-help").style.display = "none";
          shadow.getElementById("fm-feedback").style.display = "none";
          shadow.getElementById("fm-settings").style.display ="none";
          shadow.getElementById("fm-enhancements").style.display = "none";
          shadow.getElementById("fm-profile").style.display = "none";
          // change style of menu tabs
          el.setAttribute("class", "menuTabs selectedMenu2");
          shadow.getElementById("uniMenuItemsSvg").childNodes.forEach(el => {
            el.style.fill = "white";
          });
          shadow.getElementById("uniMenuHelp").setAttribute("class", "menuTabs");
          shadow.getElementById("uniMenuHelpSvg").childNodes.forEach(el => {
            el.style.stroke = "#ff002d";
          });
        });
        break;
      case "uniMenuProfile":
        el.addEventListener("click", () => {
          shadow.getElementById("fm-profile").style.display = "grid";
          shadow.getElementById("fm-help").style.display = "none";
          shadow.getElementById("fm-inventory").style.display = "none";
          shadow.getElementById("fm-feedback").style.display = "none";
          shadow.getElementById("fm-settings").style.display ="none";
          shadow.getElementById("fm-enhancements").style.display = "none";
          shadow.getElementById("menuLoadingScreen").style.display ="none";
          shadow.getElementById("menuMessage").style.display ="none";
          shadow.getElementById("fm-header").style.display = "grid";
          shadow.getElementById("fm-header-headline").style.opacity = "100%";
          shadow.getElementById("fm-header-headline").style.pointerEvents = "auto";
          deactivateDrag();
        });
        break;
      case "uniMenuSettings":
        el.addEventListener("click", () => {
          shadow.getElementById("fm-help").style.display = "none";
          shadow.getElementById("fm-inventory").style.display = "none";
          shadow.getElementById("fm-feedback").style.display = "none";
          shadow.getElementById("fm-enhancements").style.display = "none";
          shadow.getElementById("fm-profile").style.display = "none";
          shadow.getElementById("fm-settings").style.display ="grid";
          shadow.getElementById("menuLoadingScreen").style.display ="none";
          shadow.getElementById("menuMessage").style.display ="none";
          shadow.getElementById("fm-header").style.display = "grid";
          shadow.getElementById("fm-header-headline").style.opacity = "0%";
          shadow.getElementById("fm-header-headline").style.pointerEvents = "none";
          deactivateDrag();
        } );
        break;
      case "uniMenuHelp":
        el.addEventListener("click", () => {
          dragElement(moveMenu, true);
          shadow.getElementById("fm-help").style.display = "grid";
          shadow.getElementById("fm-inventory").style.display = "none";
          shadow.getElementById("fm-feedback").style.display = "none";
          shadow.getElementById("fm-settings").style.display ="none";
          shadow.getElementById("fm-enhancements").style.display = "none";
          shadow.getElementById("fm-profile").style.display = "none";
          shadow.getElementById("menuLoadingScreen").style.display ="none";
          shadow.getElementById("menuMessage").style.display ="none";
          shadow.getElementById("fm-header").style.display = "grid";
          shadow.getElementById("fm-header-headline").style.opacity = "100%";
          shadow.getElementById("fm-header-headline").style.pointerEvents = "all";
        }
        );
        break;
      case "uniMenuFeedback":
        el.addEventListener("click", () => {
          shadow.getElementById("fm-help").style.display = "none";
          shadow.getElementById("fm-inventory").style.display = "none";
          shadow.getElementById("fm-enhancements").style.display = "none";
          shadow.getElementById("fm-profile").style.display = "none";
          shadow.getElementById("fm-settings").style.display ="none";
          shadow.getElementById("fm-header").style.display = "grid";
          shadow.getElementById("menuLoadingScreen").style.display ="none";
          shadow.getElementById("fm-header-headline").style.opacity = "0%";
          shadow.getElementById("fm-header-headline").style.pointerEvents = "none";
          shadow.getElementById("menuMessage").style.display ="none";
          shadow.getElementById("fm-feedback").style.display = "grid";
          shadow.getElementById("fm-feedback").addEventListener("click", () => {
            deactivateDrag();
          });
          deactivateDrag();
        });
        break;
      case "uniMenuExit":
        el.addEventListener("click", () => {
          window.showMenu();
          dragElement(moveMenu, true);
          soundtrack.stop('menuExitSys1');
          soundtrack.play('menuExitSys1');
        }
        );
        break;
      }
  });
    //
    dragElement(moveMenu, true);
    hideMenu();
}

window.headlineSwtich = (e) => {
  var headline = document.getElementById("getUniMenu").shadowRoot.getElementById("fm-header-headline");
  switch (e) {
    case "inventory":
      headline.innerHTML = "Inventory";
      break;
    case "help":
      headline.innerHTML = "Help";
      break;
    case "feedback":
      headline.innerHTML = "Feedback";
      break;
    case "settings":
      headline.innerHTML = "Settings";
      break;
    case "profile":
      headline.innerHTML = "Profile";
      break;
    case "enhancements":
      headline.innerHTML = "Enhancements";
      break;
    default:
      headline.innerHTML = "Menu";
  }
}

// Clear and select menu items
window.clearAndSelectMenu = (e) => {
  var uniMenu = document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".menuTabs");
  uniMenu.forEach(el => {
    if (el.id === e && el.id !== "uniMenuExit") {
      el.setAttribute("class", "menuTabs selectedMenu2");
      document.getElementById("getUniMenu").shadowRoot.getElementById(`${el.id}Svg`).childNodes.forEach(el => {
        el.style.stroke = "white";
        // el.style.fill = "white";
      });
    } else {
      el.setAttribute("class", "menuTabs");
      document.getElementById("getUniMenu").shadowRoot.getElementById(`${el.id}Svg`).childNodes.forEach(el => {
        el.style.stroke = "#ff002d";
        el.style.fill = "#ff002d";
      }
      );
    }
  })
}

// Hide default menu
window.hideMenu = () => {
    var menu1 = document.getElementById("gMenu");
    var menu4 = document.getElementById("logo");
    var subscribeEl = document.getElementById("subscribeComp");
    var musicEl = document.getElementById("music");
    var settings = document.getElementById("settingsMenu");
    // slowly fade out the menu and logo elements and make them unclickable
    menu1.style.opacity = "0";
    menu4.style.opacity = "0";
    subscribeEl.style.opacity = "0";
    musicEl.style.opacity = "0";
    menu1.style.pointerEvents = "none";
    menu4.style.pointerEvents = "none";
    subscribeEl.style.pointerEvents = "none";
    musicEl.style.pointerEvents = "none";
    settings.style.zIndex = "2";
}

// Show default menu
window.showMenu = () => {
    var moveMenu = document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu");
    var menu1 = document.getElementById("gMenu");
    var menu4 = document.getElementById("logo");
    var subscribeEl = document.getElementById("subscribeComp");
    var musicEl = document.getElementById("music");
    var settings = document.getElementById("settingsMenu");
    // slowly fade in the menu and logo elements and make them clickable
    menu1.style.opacity = "1";
    menu4.style.opacity = "1";
    subscribeEl.style.opacity = "1";
    musicEl.style.opacity = "1";
    menu1.style.pointerEvents = "auto";
    menu4.style.pointerEvents = "auto";
    subscribeEl.style.pointerEvents = "auto";
    musicEl.style.pointerEvents = "auto";
    settings.style.zIndex = "3";
    document.querySelector("#universe").style.opacity= "0%";
    setTimeout(()=> {
      document.querySelector("#universe").style.display = "none";
    },1000);

    // remove playerPos div
    document.getElementById("selection").style.display = "none";
    // hide the selection box
    document.getElementById("explore").style.display = "none";
    previewUI.style.transform = "scale(0)";
    moveMenu.style.display = "none";
}

// Open inventory / wallet
window.openInventory = async () => {
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  var loading = shadow.getElementById("menuLoadingScreen");
  console.log(uiState);
  if (uiState.nftsLoaded === false) {
    loading.style.display = "grid";
    soundtrack.play('menuLoading1');
    await connectWallet().then(() => {
      shadow.getElementById("fm-inventory").style.display = "block";
      shadow.getElementById("fm-header").style.display = "grid";
      shadow.getElementById("fm-enhancements").style.display = "none";
    });
  } else {
    shadow.getElementById("fm-inventory").style.display = "block";
    shadow.getElementById("fm-header").style.display = "grid";
    shadow.getElementById("fm-enhancements").style.display = "none";
  }
}

// Connect wallet
window.connectWallet = async () => {
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  const connected = await window.ic.plug.isConnected().catch((e) => {
    console.error(e);
  });
  // Callback to print sessionData
  const onConnectionUpdate = () => {
    // Do something when connection is updated
    console.log(window.ic.plug.sessionManager.sessionData)
  }
  //
  if (connected === false) {
    try {
      const plugpublicKey = await window.ic.plug.requestConnect(
        {
          whitelist,
          localhost,
          onConnectionUpdate,
          timeout: 50000
        }
      );
      createActor().catch((e) => {
        console.log("Create Actor",e);
      });
      // Get the user principal id
      const principalId = await window.ic.plug.agent.getPrincipal().catch((e) => {
        console.error("Get Principal",e);
      });
      user.principal = `${principalId}`;
      const result = await window.ic.plug.requestBalance().catch((e) => {
        console.error("Get Balance",e);
      });
      user.balance = result;
      user.pk = plugpublicKey;
      console.log(user);
      //
      playerState();
      getNFTCollections();
    } catch (e) {
      console.error(e);
    }
  } else if (connected === true) {
    if (window.suUiActor === null) {
      await createActor();
    }
    sessionData = window.ic.plug.sessionManager.sessionData;
    var p2 = sessionData.principalId;
    user.principal = `${p2}`;
    getNFTCollections(p2);
    playerState();
  } else { 
    shadow.getElementById("menuLoadingScreen").style.display = "none";
    soundtrack.stop('menuLoading1');
    soundtrack.setVolume('menuError1', 0.4);
    soundtrack.play('menuError1');
    shadow.getElementById("menuMessage").style.display = "grid";
    // document.getElementById("getWallet").style.display = "block";
  }
}

// Get NFTs
const getNFTCollections = async (p2) => {
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  const principal = `${user.principal}`;
  const collections = await getAllUserNFTs(
    { user: principal || p2 }
  ).catch((e) => {
    console.log("Get NFTs",e);
  });
  user.nfts = collections;
  var nftDisplay = document.createElement("div");
  var image = document.createElement("img");
  nftDisplay.setAttribute("class", "Inventory-Image-Cont");
  nftDisplay.appendChild(image);
  image.src = `${user.nfts[0].tokens[0].url}`;
  shadow.getElementById("inventory-images").appendChild(nftDisplay);
  shadow.getElementById("inventoryInnerText").innerHTML = `${user.nfts[0].description}`;
  console.log("NFT Pulled Successfully");
  shadow.getElementById("menuLoadingScreen").style.display = "none";
  soundtrack.stop('menuLoading1');
  uiState.nftsLoaded = true;
}

// player state
const playerState = async () => {
  const metadata = await window.suUiActor.metadata();
  const admin = await window.suUiActor.adminUser();
  if (admin === user.principal) {
    alert("Welcome Amin of the Scoge Universe!");
  }
}

// Create Actor
const createActor = async () => {
      // Create an actor to interact with the NNS Canister
      // we pass the NNS Canister id and the interface factory
      console.log("Check Calling createActor");
      window.suUiActor = await window.ic.plug.createActor({
        canisterId: VITE_canister,
        interfaceFactory: suIDL,
      }).catch((e) => {
        console.log("Error is Here", e);
      });
};

// Upcoming
window.systemNoti = async () => {
  document.getElementById("updatesModal").style.display = "block";
  document.getElementById("getCamp").closeCampaign();
}
    
// const fleek = async () => {
//   const files = await fleekStorage.listFiles({
//     apiKey: '',
//     apiSecret: '',
//     prefix: 'Sounds',
//     getOptions: [
//       'bucket',
//       'key',
//       'hash',
//       'publicUrl'
//     ],
//   })
//   console.log(files)
// }

// fleek();

// const element = document.getElementById('dialogueModal').shadowRoot.getElementById('diaMain');
// element.innerHTML = '';
// const string = 'Hello, world *this* is a test';
// const options = {
//   speed: 50,
//   specialText1: "specialText1",
//   specialText2: "specialText2",
// };

// const typing = new Typing('Hello, World! ^This is $] some special text1 *And this $is some special $text2', element, options);

// typing.type();

const dialogue = new MainDialogue('NPC Name', 'friendly', [
  {
    text: 'Hello, $how are you? $] Are you doing well?',
    choices: [
      {
        text: "I'm doing well, thanks.",
        action: () => console.log("NPC Name: That's great to hear!")
      },
      {
        text: "I'm not doing so well.",
        action: () => console.log("NPC Name: I'm sorry to hear that.")
      }
    ]
  },
  {
    text: 'What brings you here?',
    choices: [
      {
        text: "I'm here to buy something.",
        action: () => console.log("NPC Name: What would you like to buy?")
      },
      {
        text: "I'm here to sell something.",
        action: () => console.log("NPC Name: What would you like to sell?")
      }
    ]
  }
  // (npc, tone, lines) 
]);

