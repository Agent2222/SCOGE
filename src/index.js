//
import Commerce from "@chec/commerce.js";
// import loadStripe from "stripe";
// import * as BABYLON from "@babylonjs/core";
// import { GameManager } from "./game/GameManger.js";
import { mobileShop1 } from "./shop-1.js";
import { getWallet } from "../src/getWallet.js";
import { dtMusic } from "../src/dt-scogeMusic.js";
import { dtCampaign } from "../src/dt-campaign.js";
import { dtSubscribe } from "../src/dt-subscribe.js";
// import the closeCampaign function from dt-campaign.js
window.closeCampaign = dtCampaign.closeCampaign;
// import { mintingScreen } from "../src/mint.js";
// import { dialogue } from "./game/dialogue.js";
// import { getGameProgress } from "../src/game/levels/ch1";

const VITE_CommerceKey = import.meta.env.VITE_CommerceKey;
const VITE_StripeKey = import.meta.env.VITE_StripeKey;
// const fleekP = import.meta.env.VITE_fleekP;
// const fleekS = import.meta.env.VITE_fleekS;

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
window.urlParamsActive = false;
window.inUniverse = false;

// Init Commerce
const commerce = new Commerce(`${VITE_CommerceKey}`, true);
console.log("COPYRIGHT 2022 - SCOGÉ Inc. - ALL RIGHTS RESERVED");

// // Init Stripe
var stripe = Stripe(`${VITE_StripeKey}`);
const elements = stripe.elements();

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
    shopActive = "closed";
    window.termsOpen = false;
    //
  } else {
    // Desktop
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

// Shop Button
window.toggleShop = () => {
  var confirm = document.getElementById("orderConfirm");
  var shopMenuBut = document.getElementById("shopBut");
  var filter = document.getElementById("shopFilter");
  // Disable some menu items below
  clearSettings();
  document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.transition = "1s all";
  document.getElementById("getCamp").shadowRoot.getElementById("campaignComp").style.right = "-70%";
  document.getElementById("shop").style.transition = "1s all";
  document.getElementById("povImageColumnLeft").innerHTML = "";
  switch (shopActive) {
    case "closed":
      filter.style.display = "grid";
      setTimeout(() => {
        filter.style.opacity = "100%";
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
      var clearFilter = document.getElementById("all");
      window.filterShop(clearFilter);
      filter.style.opacity = "0%";
      setTimeout(() => {
        filter.style.display = "none";
      }, 1000);
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
  clearShop();
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
    .list({ sortDirection: "desc" })
    .then((product) => {
      allProducts.push(product.data);
    })
  allProducts[0].forEach((product) => {
    var productCont = document.createElement("div");
    console.log(product);
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
      sectionDesc.innerHTML = `<h2>Art</h2>
      <h4>SCOGÉ Limited Edition 1-of-1 Art from Discovery 1 Collection.</h4>`;
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


// URL PARAMS OPEN SHOP
// window.getParamsDesktop = () => {
//   const params = new URLSearchParams(location.search)
//   viewThisProduct = params.get("Product");
//   urlParamsActive = true;
//   toggleShop();
// }

// window.mainMenuPosition("black","0%","8%","36%","56%")
// window.mainMenuPosition("","0%","0%","0%","0%","0%")
