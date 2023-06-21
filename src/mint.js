import idlFactory from "./uniHelpers/erc721.did";
import { createActor1 } from "./wallets";
import { Principal } from "@dfinity/principal";

var availablePill = false;
var mainScreenOpen = false;
const canister = "7mfck-baaaa-aaaah-acuqq-cai";

var alphaCollectionImage = "";

// const IDL = createActor1(canister, idlFactory);
// console.log("here", IDL);

// const serviceDefinitions = idlFactory({ IDL });
// console.log(
//   "here", serviceDefinitions);

class mintingScreen extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get nft() {
    return this.getAttribute("mint");
  }

  set nft(val) {
    this.setAttribute("mint", val);
  }

  static get observedAttributes() {
    return ["mint"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "mint") {
      this.render();
    }
  }

  test = async () => {
    const IDL = await createActor1(canister, idlFactory);
    var minter = await IDL.getMinter();
    console.log("here test", minter);
  };

  mintNFT = async (user) => {
    let metaData = [];
    let categoryList = [
        "Art",
        "3D/Animation",
        "Collectibles",
        "Sports",
        "Music",
        "Utility",
        "Trading Cards",
        "Virtual Worlds",
        "Domain Names",
        "Other",
    ];
    let metaJson = {
        category: categoryList[2],
        name: 'Digisette Pre-Alpha',
        description: 'Limited edition pre-alpha 1 of 450 Digisette.',
        url: `https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/SCOGE-Digisette-Alpha-Collection.jpg`,
        attributes: [
          {
            ringType: "",
        domains: [
          {
            number: 0,
            lord: "",
            rank: 0,
            power: 0,
            defense: 0,
            xp: 0,
            functions: [],
            positiveEvents: 0,
            negativeEvents: 0,
            privacy: false,
            sanitize: false,
          }
        ],
        rank: 0,
        powerUps: [0],
        progress: 0,
        xp: 0,
        linked: false,
        earthName: "",
        bankooName: "",
        email: "",
        earthImage: "",
        earthText: "",
        bankooImage: "",
        bankooText: "",
        ownedStyles: [0],
        discovered: [""],
        discoveredProgress: 0.0,
        power: 0,
        mental: 0,
        physical: 0,
        health: 0,
        speed: 0,
        sight: 0,
        endurance: 0,
        playerLocation: 0,
        soundLevel: 0,
        musicLevel: 0,
        fsOn: false,
        notiOn: false,
        networkClass: "",
        network: [""],
        story: {
          title: "",
          text: "",
          imagesUri: [""],
          videoUri: "",
        },
        ancestorsNames: [""],
        ancestorsImages: [""],
        battles: 0,
	      battleRank: 0.0,
	      soul: 0.0,
        inventory: [0],
          }
        ],
        mimeType: 'image',
        thumb: `example`,
        timestamp: +new Date(),
    };
    const unitArr = new TextEncoder().encode(JSON.stringify(metaJson));
    metaData = [Array.from(unitArr)];

    if (user.match(/-/)) {
        user = { principal: Principal.fromText(user) };
    } else {
        user = { address: user };
    }

    let params = {
        to: user,
        metadata: metaData.length === 0 ? [] : metaData,
    };

    const IDL = await createActor1(canister, idlFactory);
    var minter = await IDL.availableCycles();
    var mint = await IDL.mintNFT(params);
    var tokens = await IDL.tokens(user);
    // d
    // let res = await createActor1(canister, idlFactory).mintNFT(params);
    console.log("Mint Test", tokens);
    return tokens;
} 

  // Get Wallet Start
  // Close Get Wallet
  toggleNftScreen = () => {
    var mainScreen = this.shadow.getElementById("mainScreen");
    var viewing = this.shadow.getElementById("svgBox");
    var canvas = document.getElementById("universe");
    var menuShadow = document.getElementById("getUniMenu").shadowRoot;
    mainScreen.style.transition = "1s all";
    viewing.style.display = "block";
    viewing.style.transition = ".5s all";
    canvas.style.transition = "1s all";
    if (mainScreenOpen === false) {
      canvas.style.filter = "blur(5px)";
      menuShadow.getElementById("uniMenu").style.filter = "blur(10px)";
      document.getElementById("selection").style.filter = "blur(10px)";
      mainScreen.style.display = "grid";
      setTimeout(() => {
        mainScreen.style.opacity = "100%";
        mainScreenOpen = true;
      }, 200);
      return;
    } else {
      viewing.style.display = "none";
      menuShadow.getElementById("uniMenu").style.filter = "blur(0px)";
      document.getElementById("selection").style.filter = "blur(0px)";
      menuShadow.getElementById("nftShop").style.opacity = "80%";
      canvas.style.filter = "blur(0px)";
      mainScreen.style.opacity = "0%";
      setTimeout(() => {
        mainScreen.style.display = "none";
        mainScreenOpen = false;
      }, 1000);
      return;
    }
    // document.getElementById("getNfts").style.display = "none";
    return;
  };
  goGetPlug = () => {
    window.open("https://plugwallet.ooo/", "_blank")?.focus();
  };

  // Reacc
  reacc = () => {
    var vid = this.shadow.getElementById("videoM");
    vid.style.transition = "5s all";
    vid.play();
    vid.style.display = "block";
    setTimeout(() => {
      vid.style.opacity = "100%";
    }, 500);
    setTimeout(() => {
      document.getElementById("getUniMenu").toggleMenu();
      document.getElementById("getNfts").toggleNftScreen();
    }, 5000);
    vid.onended = function () {
      document.getElementById("updatesModal").style.display = "block";
      vid.style.transition = "1s all";
      vid.style.opacity = "0%";
      setTimeout(() => {
        vid.style.display = "none";
      }, 1000);
    };
  };

  reload = () => {
    location.reload;
  };

  async suIDL() {
    const su = await createActor1(canister, { idlFactory });
    return su;
  }

  // Get Supply
  async getSupply() {
    const res = await IDL.supply("");
    console.log(res);
    // if ('ok' in res) return Number(res.ok);
    return res;
  }

  // Switch Pills
  pillSelection = (e) => {
    var selected = String(e.target.id);
    var pills = this.shadow.querySelectorAll(".pills");
    var desc = this.shadow.getElementById("desc");
    var cost = this.shadow.getElementById("cost");
    var button = this.shadow.getElementById("button");
    var buttonbg = this.shadow.getElementById("mintButton");
    var screen = this.shadow.getElementById("mainScreen");
    screen.style.transition = "1s all";
    var sources = {
      red: "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Yellow-DigiGel-1.png",
      black:
        "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Digisette-1-2.png",
      blue: "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/White-DigiGel-1.png",
      white: "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/White-DigiGel-1.png"
    };
    switch (selected) {
      case "red":
        pills[0].src = sources.blue;
        pills[1].src = sources.red;
        pills[2].src = sources.black;
        pills[0].setAttribute("id", "blue");
        pills[1].setAttribute("id", "red");
        pills[2].setAttribute("id", "black");
        this.shadow
          .getElementById("mintButton")
          .removeEventListener("click", this.reacc);
        this.shadow
          .getElementById("mintButton")
          .addEventListener("click", () => this.mintNFT(`qpbuq-myqvw-yoaff-265ad-5g6xu-wx5dl-zzd7y-y6oak-zo4uf-x3ozb-dqe`));
        desc.innerHTML = "YOU'LL BE ABLE TO AFFECT REALITY WITH THIS.";
        cost.innerHTML = "IT’LL COST YOU 10 [ICP].";
        button.innerHTML = "UNAVAILABLE";
        button.style.color = "#ff002d";
        buttonbg.style.backgroundColor = "black";
        buttonbg.style.border = "1px solid black";
        availablePill = false;
        // screen.style.boxShadow = "inset 0 0 100px rgba(0,0,0,.9)";
        // screen.style.backgroundColor = "rgba(145,212,202,.4)";
        break;
      case "black":
        pills[0].src = sources.red;
        pills[1].src = sources.black;
        pills[2].src = sources.blue;
        pills[0].setAttribute("id", "red");
        pills[1].setAttribute("id", "black");
        pills[2].setAttribute("id", "blue");
        desc.innerHTML = "A GIFT FROM THE ORACLE'S";
        // desc.innerHTML = "HERE’S A TEMPORARY PILL YOU CAN TAKE.";
        cost.innerHTML = "IT WONT COST YOU A THING.";
        button.innerHTML = "TAKE IT";
        this.shadow
          .getElementById("mintButton")
          .addEventListener("click", this.reacc);
        button.style.color = "";
        availablePill = true;
        buttonbg.style.border = "";
        buttonbg.style.backgroundColor = "";
        // screen.style.boxShadow = "inset 0 0 100px rgba(0,0,0,.9)";
        // screen.style.backgroundColor = "rgba(0,0,0,.4)";
        break;
      case "blue":
        pills[0].src = sources.black;
        pills[1].src = sources.blue;
        pills[2].src = sources.red;
        pills[0].setAttribute("id", "black");
        pills[1].setAttribute("id", "blue");
        pills[2].setAttribute("id", "red");
        this.shadow
          .getElementById("mintButton")
          .removeEventListener("click", this.reacc);
        desc.innerHTML = "THIS IS WHAT YOU'LL NEED TO REMEMBER.";
        cost.innerHTML = "IT’LL COST YOU 5 [ICP].";
        button.innerHTML = "UNAVAILABLE";
        button.style.color = "#ff002d";
        buttonbg.style.backgroundColor = "black";
        buttonbg.style.border = "none";
        availablePill = false;
        // screen.style.boxShadow = "inset 0 0 100px rgba(0,0,0,.9)";
        // screen.style.backgroundColor = "rgba(164,219,251,.4)";
        break;
    }
  };

  // Get Wallet END
  connectedCallback() {
    this.render();
    // this.loadShop();
    this.shadow
      .getElementById("svgBox")
      .addEventListener("click", this.toggleNftScreen.bind(this));
    this.shadow.querySelectorAll(".pills").forEach((pill) => {
      pill.addEventListener("click", this.pillSelection);
    });
    this.shadow
      .getElementById("mintButton")
      .addEventListener("click", this.reacc);
    // this.hereTest = this.test();
    // Add Event handlers to rendered html below
    // Must use this.shadow to access dom.
    // Add methods above this method
    // Ex. btn.addEventListener('click', this.method.bind(this))
    // NOTE: Render clears all code because of innerHtml
  }

  render() {
    this.shadow.innerHTML = `
         <style>
            @font-face {
                font-family: "BS-B";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
                font-weight: normal;
                font-style: italic;
            }
            #mainScreen {
              width: 100%;
              height: 100%;
              position: fixed;
              left: 0;
              top: 0;
              color: red;
              z-index: 8;
              background: rgba(0,0,0,.8);
              box-shadow: inset 0 0 800px black;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-family: "BS-R";
              opacity: 0%;
            }
            #testCanvas {
              width: 100%;
              height: 100%;
              position: fixed;
              left: 0;
              top: 0;
              background-image: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/test/Screen Shot 2022-06-16 at 9.29.19 PM.png");
              background-size: cover;
              filter: blur(9px);
              z-index: 6;
            }
            #innerScreen {
              height: 100%;
              width: 50%;
            }
            #nftAssetGallery {
              width: 30%;
              height: 80%;
              float: left;
              margin-top: 10%;
              margin-bottom: 10%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr;
              align-items: center;
              justify-items: center;
            }
            #nftAssetGallery img {
              width: 70%;
            }
            #mintUiActions {
              width: 70%;
              height: 80%;
              float: left;
              margin-top: 10%;
              margin-bottom: 10%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
            }
            #mintUiActionsInner {
              width: 100%;
              height: 30%;
            }
            #texts {
              width: 90%;
              height: 40%;
              padding: 5% 5%;
              float: left;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
              align-items: center;
              justify-items: start;
              grid-row-gap: 8px;
            }
            #texts span {
              width: auto;
              font-size: 12px !important;
              background-color: black;
              letter-spacing: 2px;
              padding: 1% 2%;
            }
            #buttons {
              width: 100%;
              height: 30%;
              float: left;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: end;
            }
            .spacer {
              background-color: rgba(0,0,0,0) !important;
            }
            #mintButton {
              width: 30%;
              height: 70%;
              float: right;
              margin-right: 20%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-size: 20px;
              color: var(--accent);
              border: 1px solid var(--accent);
              transition: .5s all;
              border-radius: 5px;
              cursor: pointer;
            }
            #mintButton:hover {
              font-family: "BS-B";
              background-color: var(--accent);
              color: black !important;
              letter-spacing: 2px;
              font-size: 22px;
            }
            .alt {
              color: #94be8c;
            }
            .active {
              color: #b5d3d1;
              transition: .5s all;
            } 
            #uiIcon {
              // height: 40%;
              // width: 40%;
              position: fixed;
              right: 0;
              top: 0;
              z-index: 8;
              transition: .5s all;
            }
            #uiIcon img {
              height: 100%;
            }
             #svgBox {
              height: 8%;
              position: fixed;
              right: 5%;
              bottom: 45%;
              transition: .5s all;
              display: none;
              z-index: 7;
              stroke: #ff002d;
              cursor: pointer;
              transition: .5s all;
              transform-origin: bottom;
            }
            #svgBox:hover {
              transform: scale(1.2);
            }
            #svgBox #arrow {
              height: 100%;
              transition: .5s all;
              font-size: 4.5em;
              margin-bottom: 2%;
            }
            #svgBox:hover > span {
              opacity: 100% !important;
              transform: scale(1.1);
            }
            #videoM {
              height: 100%;
              position: fixed;
              left: 0;
              top: 0;
              z-index: 10;
              display: none;
              opacity: 0%;
              transition: 5s all;
            }
            a {
              color: #ff002d;
              letter-spacing: 2px;
              font-family: "BS-R";
            }
            a:link {
              color: #ff002d;
            }
            a:active {
              color: #ff002d;
            }
            #exit {
              font-family: "BS-R";
              width: 100%;
              align-items: center;
              text-align: center;
              margin-top: 20%;
            }
            .pills {
              transition: .5s all;
            }
            .pills:hover {
              transform: scale(1.1);
              opacity: 100% !important;
            }
         </style>
         <video id="videoM" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/videos/Alpha-End-Scoge.mp4">
         </video>
         <div id="mainScreen">
            <div id="innerScreen">
              <div id="nftAssetGallery">
                <img class="pills" id="red" style="opacity:31%;" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Yellow-DigiGel-1.png"/>
                <img class="pills" id="black" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Digisette-1-2.png"/>
                <img class="pills" id="blue" style="opacity:31%;" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/White-DigiGel-1.png"/>
              </div>
              <div id="mintUiActions">
                <div id="mintUiActionsInner">
                  <div id="texts">
                    <span class="spacer"></span>
                    <span id="desc">A GIFT FROM THE ORACLE'S</span>
                    <span class="active" id="cost">IT WONT COST YOU A THING.</span>
                    <span class="spacer"></span>
                  </div>
                  <div id="buttons">
                    <div id="mintButton">
                      <span id="button">TAKE IT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div id="uiIcon">
         <div id="svgBox">
          <div id="arrow">&#8682;</div>
          <div id="exit">Exit</div>
         </div>
        </div>
         `;
  }
}

customElements.define("mint-screen", mintingScreen);

export { mintingScreen };
