
var availablePill = false;
var mainScreenOpen = false;

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
      mainScreen.style.display = "grid";
      setTimeout(()=> {
        mainScreen.style.opacity = "100%";
        mainScreenOpen = true;
      },200)
      return;
    } else {
      viewing.style.display = "none";
      menuShadow.getElementById("uniMenu").style.filter = "blur(0px)";
      menuShadow.getElementById("nftShop").style.opacity = "80%";
      canvas.style.filter = "blur(0px)";
      mainScreen.style.opacity = "0%";
      setTimeout(()=> {
        mainScreen.style.display = "none";
        mainScreenOpen = false;
      },1000)
      return;
    }
    // document.getElementById("getNfts").style.display = "none";
    return;
  };
  goGetPlug = () => {
    window.open("https://plugwallet.ooo/", "_blank")?.focus();
  }

  // Reacc
  reacc = () => {
    var vid = this.shadow.getElementById("videoM");
    vid.style.transition = "5s all";
    vid.play();
    vid.style.display = "block";
    setTimeout(()=> {
      vid.style.opacity = "100%";
    },500);
    setTimeout(()=> {
      document.getElementById("getUniMenu").toggleMenu();
      document.getElementById("getNfts").toggleNftScreen();
    },5000)
    vid.onended = function() {
      document.getElementById("updatesModal").style.display = "block";
      vid.style.transition = "1s all";
      vid.style.opacity = "0%";
      setTimeout(()=> {
        vid.style.display = "none";
      },1000)
    } 
  }

  reload = () => {
    location.reload;
  }

  // Switch Pills
  pillSelection = (e) => {
    var selected = String(e.target.id)
    var pills = this.shadow.querySelectorAll(".pills");
    var desc = this.shadow.getElementById("desc");
    var cost = this.shadow.getElementById("cost");
    var button = this.shadow.getElementById("button");
    var screen = this.shadow.getElementById("mainScreen");
    screen.style.transition = "1s all";
    var sources = {
      red : "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/RAG.png",
      black : "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BG1.png",
      blue :  "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BGG.png"
    }
    switch(selected) {
      case "red":
        pills[0].src = sources.blue;
        pills[1].src = sources.red;
        pills[2].src = sources.black;
        pills[0].setAttribute("id", "blue");
        pills[1].setAttribute("id", "red");
        pills[2].setAttribute("id", "black");
        desc.innerHTML = "YOU'LL BE ABLE TO AFFECT REALITY WITH THIS.";
        cost.innerHTML = "IT’LL COST YOU 10 [ICP].";
        button.innerHTML = "UNAVAILABLE";
        button.style.color = "#ff002d";
        availablePill = false;
        screen.style.boxShadow = "inset 0 0 100px rgba(0,0,0,.9)";
        screen.style.backgroundColor = "rgba(145,212,202,.4)";
        break;
      case "black":
        pills[0].src = sources.red;
        pills[1].src = sources.black;
        pills[2].src = sources.blue;
        pills[0].setAttribute("id", "red");
        pills[1].setAttribute("id", "black");
        pills[2].setAttribute("id", "blue");
        desc.innerHTML = "HERE’S A TEMPORARY PILL YOU CAN TAKE.";
        // desc.innerHTML = "HERE’S A TEMPORARY PILL YOU CAN TAKE.";
        cost.innerHTML = "IT WONT COST YOU A THING.";
        button.innerHTML = "TAKE [MINT]";
        this.shadow.getElementById("mintButton").addEventListener('click', this.reacc.bind(this));
        button.style.color = "#94be8c";
        availablePill = true;
        screen.style.boxShadow = "inset 0 0 100px rgba(0,0,0,.9)";
        screen.style.backgroundColor = "rgba(0,0,0,.4)";
        break;
      case "blue":
        pills[0].src = sources.black;
        pills[1].src = sources.blue;
        pills[2].src = sources.red;
        pills[0].setAttribute("id", "black");
        pills[1].setAttribute("id", "blue");
        pills[2].setAttribute("id", "red");
        desc.innerHTML = "THIS IS WHAT YOU'LL NEED TO REMEMBER.";
        cost.innerHTML = "IT’LL COST YOU 5 [ICP].";
        button.innerHTML = "UNAVAILABLE";
        button.style.color = "#ff002d";
        availablePill = false;
        screen.style.boxShadow = "inset 0 0 100px rgba(0,0,0,.9)";
        screen.style.backgroundColor = "rgba(164,219,251,.4)";
        break;
    }
  }


  // Get Wallet END
  connectedCallback() {
    this.render();
    // this.loadShop();
    this.shadow
      .getElementById("svgBox")
      .addEventListener("click", this.toggleNftScreen.bind(this));
    this.shadow.querySelectorAll(".pills").forEach((pill)=> {
      pill.addEventListener('click', this.pillSelection);
    })
    this.shadow.getElementById("mintButton").addEventListener('click', this.reacc.bind(this));
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
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
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
              background: rgba(0,0,0,.3);
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
              background-image: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/test/Screen Shot 2022-06-16 at 9.29.19 PM.png");
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
              background-color: black;
              float: right;
              margin-right: 20%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-size: 20px;
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
            }
            #svgBox svg {
              height: 100%;
              transition: .5s all;
            }
            #svgBox:hover > svg {
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
            }
            .pills {
              transition: .5s all;
            }
            .pills:hover {
              transform: scale(1.1);
              opacity: 100% !important;
            }
         </style>
         <video id="videoM" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/videos/Alpha-End-Scoge.mp4">
         </video>
         <div id="mainScreen">
            <div id="innerScreen">
              <div id="nftAssetGallery">
                <img class="pills" id="red" style="opacity:31%;" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/RAG.png"/>
                <img class="pills" id="black" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BG1.png"/>
                <img class="pills" id="blue" style="opacity:31%;" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/nAssets/BGG.png"/>
              </div>
              <div id="mintUiActions">
                <div id="mintUiActionsInner">
                  <div id="texts">
                    <span class="spacer"></span>
                    <span id="desc">HERE’S A TEMPORARY PILL YOU CAN TAKE.</span>
                    <span class="active" id="cost">IT WONT COST YOU A THING.</span>
                    <span class="spacer"></span>
                  </div>
                  <div id="buttons">
                    <div id="mintButton">
                      <span class="alt" id="button">TAKE [MINT]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div id="uiIcon">
         <div id="svgBox">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.05 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M57.56,50.14H22.43a.64.64,0,0,1-.63-.64V32.61a.64.64,0,1,1,1.27,0V48.86H56.93V4.24H23.07V21.45a.64.64,0,1,1-1.27,0V3.6A.64.64,0,0,1,22.43,3H57.56a.64.64,0,0,1,.64.64V49.5A.64.64,0,0,1,57.56,50.14Z"/><path class="cls-1" d="M35.38,27.66H8.07a.64.64,0,1,1,0-1.27H35.38a.64.64,0,0,1,0,1.27Z"/><path class="cls-1" d="M13.89,32.39a.63.63,0,0,1-.37-.12L6.88,27.54a.64.64,0,0,1,0-1l6.64-4.73a.63.63,0,0,1,.89.15.65.65,0,0,1-.15.89L8.35,27l5.91,4.2a.64.64,0,0,1-.37,1.16Z"/></svg>
          <div id="exit">Exit</div>
         </div>
        </div>
         `;
  }
}

customElements.define("mint-screen", mintingScreen);

export { mintingScreen };