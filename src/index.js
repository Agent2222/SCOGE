//
import Commerce from "@chec/commerce.js";
import loadStripe from "stripe";
import BABYLON from "babylonjs";
import { GameManager } from "./js/GameManger";

console.log(import.meta.env.VITE_CommerceKey);
const VITE_CommerceKey =  import.meta.env.VITE_CommerceKey;
const VITE_StripeKey = import.meta.env.VITE_StripeKey;

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

// Init Commerce
const commerce = new Commerce(`${VITE_CommerceKey}`, true);

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
window.isMobile = false;
// window.encouraged = false;
window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile
  } else {
    // Desktop
  }
});
window.sizeInit = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile
    window.isMobile = true;
  } else {
    // Desktop
  }
};

// Play Destiny
window.destiny = () => {
  var destiny = document.getElementById("destiny");
  destiny.volume = 0.1;
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
// Toggle Shop
var shopActive = "closed";
window.toggleShop = () => {
  var confirm = document.getElementById("orderConfirm");
  var shopMenuBut = document.getElementById("shopBut");
  window.closeEmail();
  window.dActiveBut();
  window.endInter();
  document.getElementById("settingsMenu").style.opacity = "0%";
  settingsActive = false;
  document.getElementById("shop").style.transition = "1s all";
  document.getElementById("povImageColumnLeft").innerHTML = "";
  document.getElementById("extrasCont").style.transition = "1s all";
  document.getElementById("extrasCont").style.opacity = "0%";
  document.getElementById("extrasCont").style.width = "0%";
  extraOpen = false;
  switch (shopActive) {
    case "closed":
      setTimeout(() => {
        if (window.productsloaded === false) {
          document.getElementById("divLoadBG2").style.display = "grid";
        }
        document.getElementById("shop").style.opacity = "100%";
        document.getElementById("shop").style.visibility = "visible";
      }, 500);
      window.globeMove1(75);
      window.logoMove(6, 3, 16, 1);
      shopMenuBut.innerHTML = "< RETURN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      shopActive = "open";
      break;
    case "open":
      setTimeout(() => {
        window.globeMove1(4);
        window.logoMove(25, 35, 30, 1);
      }, 300);
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
      break;
    case "POVopen":
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
        sizeElements[i].style.color = "#ff002d";
      }
      selectedPSize = "";
      document.getElementById("addToBagBut").innerHTML = "Select a size";
      break;
  }
};

// World --------------------------------------------------------------------------------

var continents = {
  c1: {
    name: "1 - ALANSANA",
    text: "The people of the 1st continent are heavily affected by altitude class division, which strongly reflects on their dress. However, the cultural phenomenon of the T.A.O.S Entertainment company in partnership with SCOGÉ Worldwide has created a range of unifying T.A.O.S printed garments that remedy the division between ground and sky inhabitants.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="/assets/images/world/look/world1-1.jpg"/>
    <img src="/assets/images/world/look/world1-2.jpg"/>
    <img src="/assets/images/world/look/world1-3.jpg"/>
    <img src="/assets/images/world/look/world1-4.jpg"/>
    <img src="/assets/images/world/look/world1-1.jpg"/>`,
  },
  c2: {
    name: "2 - CONTINENT UNKNOWN",
    text: "No concrete data discovered for the 2nd Continent. Few sources indicate a region of migrants from various origins. ",
    images: `<img src="/assets/images/world/look/world0.jpg"/>`,
  },
  c3: {
    name: "3 - SANSET",
    text: "The 3rd Continent is widely known for having the harshest and most fluctuating weather conditions, due to its size and position between two oceanic gravity pockets. Its inhabitants frequently dress in garments that heavily wrap the body and can easily be removed when conditions drastically shift.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="/assets/images/world/look/world3-1.jpg"/>
    <img src="/assets/images/world/look/world3-2.jpg"/>
    <img src="/assets/images/world/look/world3-3.jpg"/>
    <img src="/assets/images/world/look/world3-1.jpg"/>`,
  },
  c4: {
    name: "4 - NAME UNKNOWN",
    text: "On the 4th Continent, you’ll find its inhabitants retain and nurture a unique sense of metaphysical intuition and practice. They adorn themselves in talismans reshaped into what could be considered garments but have little regard for the conventional dress.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="/assets/images/world/look/world4-2.jpg"/>
    <img src="/assets/images/world/look/world4-1.jpg"/>
    <img src="/assets/images/world/look/world4-3.jpg"/>
    <img src="/assets/images/world/look/world4-4.jpg"/>
    <img src="/assets/images/world/look/world4-2.jpg"/>`,
  },
  c5: {
    name: "5 - CONTINENT UNKNOWN",
    text: "No concrete data discovered for the 5th  Continent. Few sources indicate it to be an ally of the 7th Continent.",
    images: `<img src="/assets/images/world/look/world0.jpg"/>`,
  },
  c6: {
    name: "6 - NAME UNKNOWN",
    text: "The mountainous inhabitants of the 6th Continent are highly regarded for their study of natural materials and their relation to the human body. They live among dangerous innovations but protect themselves with garments infused with protective physical and metaphysical properties- mostly darker-toned, as the continent is limited to elements that produce dark dyes.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="/assets/images/world/look/world6-1.jpg"/>
    <img src="/assets/images/world/look/world6-2.jpg"/>
    <img src="/assets/images/world/look/world6-3.jpg"/>
    <img src="/assets/images/world/look/world6-4.jpg"/>
    <img src="/assets/images/world/look/world6-5.jpg"/>
    <img src="/assets/images/world/look/world6-1.jpg"/>`,
  },
  c7: {
    name: "7 - SEELOO",
    text: "Little is known about the 7th Continent and its elusive inhabitants throughout Bankoo. Those who’ve managed to reach it beyond the protection of the 4th and 5th Continent have reported a land of dreams and abstraction- where artifacts, people, and land are one-and-the-same.",
    images: `<img id="scroll" src="assets/images/scroll.png"/>
    <img src="/assets/images/world/look/world7-1.jpg"/>
    <img src="/assets/images/world/look/world7-2.jpg"/>
    <img src="/assets/images/world/look/world7-3.jpg"/>
    <img src="/assets/images/world/look/world7-1.jpg"/>`,
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
        "url('./assets/images/world/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c1.images;
      break;
    case "world2":
      worldName.innerHTML = continents.c2.name;
      worldText.innerHTML = continents.c2.text;
      worldMain.style.backgroundImage =
        "url('./assets/images/world/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c2.images;
      break;
    case "world3":
      worldName.innerHTML = continents.c3.name;
      worldText.innerHTML = continents.c3.text;
      worldMain.style.backgroundImage =
        "url('./assets/images/world/world-bg-2.jpg')";
      worldBottom.innerHTML = continents.c3.images;
      break;
    case "world4":
      worldName.innerHTML = continents.c4.name;
      worldText.innerHTML = continents.c4.text;
      worldMain.style.backgroundImage =
        "url('./assets/images/world/world-bg-3.jpg')";
      worldBottom.innerHTML = continents.c4.images;
      break;
    case "world5":
      worldName.innerHTML = continents.c5.name;
      worldText.innerHTML = continents.c5.text;
      worldMain.style.backgroundImage =
        "url('./assets/images/world/world-bg-1-2.jpg')";
      worldBottom.innerHTML = continents.c5.images;
      break;
    case "world6":
      worldName.innerHTML = continents.c6.name;
      worldText.innerHTML = continents.c6.text;
      worldMain.style.backgroundImage =
        "url('./assets/images/world/world-bg-3.jpg')";
      worldBottom.innerHTML = continents.c6.images;
      break;
    case "world7":
      worldName.innerHTML = continents.c7.name;
      worldText.innerHTML = continents.c7.text;
      worldMain.style.backgroundImage =
        "url('./assets/images/world/world-bg-3.jpg')";
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
  if (BABYLON.Engine.isSupported()) {
    document.getElementById("renderCanvas").style.transition = "5s all";
    // let game = new GameManager("renderCanvas");
    if (infiniteActive === false) {
      document.getElementById("renderCanvas").style.display = "block";
      document.getElementById("renderCanvas").style.opacity = "0";
      // document.getElementById("bankooMapCont").style.visibility = "hidden";
      new GameManager("renderCanvas");
      infiniteActive = true;
    } else {
      if (intro1 === false) {
        //
        intro1 = true;
      }
      document.getElementById("destiny").pause();
      document.getElementById("renderCanvas").style.opacity = "1";
      document.getElementById("bankooMapCont").style.opacity = "0";
      document.getElementById("bankooMapCont").style.display = "none";
    }
  }
};
// Toggle Infinite
window.toggleInfinite = () => {
  var infState = document.getElementById("bankooMapCont");
  if (infState.style.display === "grid") {
    window.activateInfinite();
    return;
  }
  if (infState.style.display === "none") {
    document.getElementById("bankooMapCont").style.opacity = "1";
    document.getElementById("bankooMapCont").style.display = "grid";
    // document.getElementsByClassName("hud")[0].remove();
    return;
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
// Check for Screen Type
window.checkScreenSize = (obj) => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile
    document.getElementById("mobileOnly").style.display = "block";
  } else {
    // Desktop
    window.povOpen(obj);
  }
};
window.closeMobileOnly = () => {
  document.getElementById("mobileOnly").style.display = "none";
};
// Open Product POV Screen
window.povOpen = (obj) => {
  var currentProduct = obj.id;
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
  document.getElementById(
    "shopProductAvailable"
  ).innerHTML = `(${currentShopProduct[0].inventory.available}) REMAINING`;
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
};
// Toggle Terms And Conditions
window.termsOpen = false;
window.toggleTerms = () => {
  var terms = document.getElementById("tandc");
  if (terms.style.display === "block") {
    document.getElementById("tandc").style.transition = ".5s all";
    document.getElementById("tandc").style.display = "none";
    document.getElementById("tandc").style.opacity = "0%";
    window.termsOpen = false;
    return;
  } else if (terms.style.display != "block") {
    document.getElementById("tandc").style.transition = ".5s all";
    document.getElementById("tandc").style.display = "block";
    document.getElementById("tandc").style.opacity = "100%";
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
  var shopParent = document.getElementById("allShopProducts");
  await commerce.products
    .list()
    .then((product) => allProducts.push(product.data));
  allProducts[0].forEach((product) => {
    var productCont = document.createElement("div");
    productCont.setAttribute("class", "productContainer");
    productCont.setAttribute("id", product.id);
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Mobile
    } else {
      productCont.setAttribute("onmouseover", "shopOnHover(this)");
      productCont.setAttribute("onmouseout", "shopOutHover(this)");
    }
    productCont.setAttribute("onclick", "checkScreenSize(this)");
    shopParent.appendChild(productCont);
    productCont.innerHTML = `
    <div class="pcDetails">
        <p class="pcProductName">${product.name}</p>
        <p class="pcProductPrice">${product.price.formatted_with_symbol}</p>
    </div>
    <img class="shopProductsOver" src="${product.assets[1].url}">
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${product.assets[0].url}">
    `;
    window.productsloaded = true;
    document.getElementById("divLoadBG2").style.display = "none";
  });
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
    sizeElements[i].style.color = "#ff002d";
  }
  obj.style.color = "#b5d3d1";
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
    color: "#ff002d",
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
// -----------------------------------   SHOP END  -----------------------------------------------
// SAY SCOGÉ //
window.sayScoge = () => {
  document.getElementById("scoge").play();
};
// MOVE GLOBE
window.globeMove1 = (whereto) => {
  var globe = document.getElementById("bankooMapCont");
  var globeOverImg1 = document.getElementById("globeOverImg1");
  globeOverImg1.style.transition = "1s all";
  globe.style.right = `${whereto}%`;
  if (globe.style.right > `4%`) {
    globeOverImg1.style.opacity = "0%";
    return;
  }
  // if (globe.style.right <= `4%`) {
  //   globeOverImg1.style.opacity = "100%";
  //   return;
  // }
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
// COMPLETE
window.connectBut = () => {
  var emailInput = document.getElementById("mce-EMAIL");
  emailInput.style.transition = "1s all";
  if (emailInput.style.width != "35%") {
    emailInput.style.width = "35%";
    emailInput.style.marginRight = "5%";
    document.getElementById("connect").innerHTML = "< SUBSCRIBE";
    document.getElementById("connect").setAttribute("onclick", "subscribe()");
    return;
  }
};
// SUBSCRIBE
window.subscribe = () => {
  var form = document.getElementById("mc-embedded-subscribe-form");
  form.submit();
  form.reset();
  window.closeEmail();
};
// CLOSE EMAIL INPUT
window.closeEmail = () => {
  var emailInput = document.getElementById("mce-EMAIL");
  document.getElementById("connect").innerHTML =
    "CONNECT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  document.getElementById("connect").setAttribute("onclick", "connectBut()");
  emailInput.style.width = "0%";
  emailInput.style.marginRight = "0%";
};
// GLOBE IMG ANI
var globeImgAni = 0;
var life;
window.globeImgAni = () => {
  var globeOverImg1 = document.getElementById("globeOverImg1");
  globeOverImg1.style.transition = "4s all";
  setTimeout(() => {
    globeOverImg1.style.opacity = "100%";
  }, 6000);
  life = setInterval(() => {
    globeOverImg1.style.opacity = "0%";
    setTimeout(() => {
      if (globeImgAni === 0) {
        globeOverImg1.src = "./assets/images/red-s1-2.jpg";
        globeImgAni = 1;
      } else {
        globeOverImg1.src = "./assets/images/red-s1.jpg";
        globeImgAni = 0;
      }
    }, 4005);
    setTimeout(() => {
      globeOverImg1.style.opacity = "100%";
    }, 6000);
    return;
  }, 14000);
};
// SETTINGS
var settingsActive = false;
window.openSettings = () => {
  var menu = document.getElementById("settingsMenu");
  if (settingsActive === false) {
    setTimeout(() => {
      menu.style.opacity = "100%";
    }, 300);
    document.getElementById("extrasCont").style.opacity = "0%";
    extraOpen = false;
    window.globeMove1(75);
    window.logoMove(6, 3, 16, 1);
    window.endInter();
    settingsActive = true;
    return;
  } else {
    if (shopActive != "closed") {
      menu.style.opacity = "0%";
      settingsActive = false;
      return;
    }
    menu.style.opacity = "0%";
    setTimeout(() => {
      window.globeMove1(4);
      window.logoMove(25, 35, 30, 1);
      window.globeImgAni();
    }, 300);
    settingsActive = false;
    return;
  }
};
// FullScreen
window.fullOn = () => {
  var main = document.getElementById("main");
  main.requestFullscreen();
  document.getElementById("fsOn").style.color = "#b5d3d1";
  document.getElementById("fsOff").style.color = "";
};
window.fullOff = () => {
  document.exitFullscreen();
  document.getElementById("fsOff").style.color = "#b5d3d1";
  document.getElementById("fsOn").style.color = "#ff002d";
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
    settings.setAttribute("onclick", "openSettings();closeEmail();");
    extra.setAttribute("onclick", "openExtra();closeEmail();");
  }
};
// VOLUME SLIDER
window.volumeSlider = (obj) => {
  var value = obj.value;
  var selected = document.getElementById("destiny");
  selected.volume = `0.${value}`;
};
// OPEN EXTRA
var extraOpen = false;
window.openExtra = () => {
  var imageWindow = document.getElementById("extrasCont");
  if (extraOpen === false) {
    imageWindow.style.width = "100%";
    setTimeout(() => {
      imageWindow.style.opacity = "100%";
    }, 300);
    window.globeMove1(75);
    window.logoMove(6, 3, 16, 1);
    window.endInter();
    extraOpen = true;
    document.getElementById("settingsMenu").style.opacity = "0%";
    settingsActive = false;
    setTimeout(() => {
      document.getElementById("globeOverImg1").style.opacity = "0%";
    }, 1000);
    setTimeout(() => {
      document.getElementById("ctc").style.opacity = "0%";
    }, 5000);
    return;
  }
  if (extraOpen === true) {
    document.getElementById("extrasCont").style.transition = "1s all";
    document.getElementById("extrasCont").style.width = "0%";
    window.globeImgAni();
    imageWindow.style.opacity = "0%";
    extraOpen = false;
    setTimeout(() => {
      window.globeMove1(4);
      window.logoMove(25, 35, 30, 1);
    }, 300);
    return;
  }
};
// Clear Interval
window.endInter = () => {
  var Image = document.getElementById("globeOverImg1");
  clearInterval(life);
  Image.style.opacity = "0%";
};
// EXTRA NEXT IMAGE
var currentExtraNumber = 2;
window.nextExImg = () => {
  var image = document.getElementById("extraImages");
  if (currentExtraNumber <= 37) {
    document.getElementById("globeOverImg1").style.opacity = "0%";
    image.src = `https://scoge.s3.us-east-2.amazonaws.com/extra/scoge-22-bts-${currentExtraNumber}.jpg`;
    currentExtraNumber++;
  } else {
    currentExtraNumber = 2;
    window.openExtra();
    document.getElementById("extrasCont").style.width = "0%";
    image.src = `https://scoge.s3.us-east-2.amazonaws.com/extra/scoge-22-bts-1.jpg`;
  }
  return;
};
