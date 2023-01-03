import { SoundtrackManager } from "./soundtrack.js";
var menuOpen = true;
var fullMenuOpen = true;
const soundtrack2 = new SoundtrackManager();
soundtrack2.addTracks();

class getUniMenu extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get uniMenu() {
    return this.getAttribute("uniMenu");
  }

  set uniMenu(val) {
    this.setAttribute("uniMenu", val);
  }

  static get observedAttributes() {
    return ["uniMenu"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "uniMenu") {
      this.render();
    }
  }
  // open menu
  toggleMenu() {
    const menu = this.shadow.querySelector("#uniMenu");
    const menuIcon = this.shadow.querySelector("#uniMenuIcon");
    const menuItems = this.shadow.querySelector("#menuItems");
    const menuHeader = this.shadow.querySelector("#menuHeader"); 
    if (menuOpen === false) {
      menuIcon.style.transform = "rotate(180deg)";
      menu.style.height = "auto";
      menuHeader.style.height = "100%";
      menuOpen = true;
      return;
    } else {
      menuHeader.style.height = "100%";
      setTimeout(() => { menu.style.height = "10%"; }, 150);
      // menu.style.height = "10%";
      menuIcon.style.transform = "rotate(0deg)";
      menuItems.style.height = "0%";
      menuItems.style.overflow = "hidden";
      menuOpen = false;
      this.closeFullMenu();
      return;
    }
  }
  // open full menu
  openFullMenu() {
    const menu = this.shadow.querySelector("#uniMenu");
    const fullMenu = this.shadow.querySelector("#fullMenu");
    const fullMenuBg = this.shadow.querySelector("#fullMenuBG");
    const menuItems = this.shadow.querySelector("#menuItems");
    if (fullMenuOpen === false) {
      menu.style.overflowX = "visible";
      fullMenu.style.width = "500px";
      fullMenuBg.style.transform = "scaleX(1)";
      menu.style.borderBottomRightRadius = "0px";
      menu.style.borderTopRightRadius = "0px";
      menu.style.borderRight = "0px solid black";
      fullMenuOpen = true;
      return;
    }
  }

  closeFullMenu() {
    const menu = this.shadow.querySelector("#uniMenu");
    const fullMenu = this.shadow.querySelector("#fullMenu");
    const fullMenuBg = this.shadow.querySelector("#fullMenuBG");
    fullMenu.style.width = "0px";
      fullMenuBg.style.transform = "scaleX(0)";
      setTimeout(() => {
        menu.style.borderBottomRightRadius = "10px";
        menu.style.borderTopRightRadius = "10px";
        menu.style.borderRight = "2px solid #ff002d";
       }, 500);
    fullMenuOpen = false;
    // soundtrack2.stop('menuExit1');
    // soundtrack2.play('menuExit1');
  }

  // Switch Menu Tabs 
  switchMenuTabs(e) {
    var selectedTab = e.target.id;
    var tabClass = e.target.classList[1];
    var tab1 = this.shadow.querySelector("#fm-menu1");
    var tab2 = this.shadow.querySelector("#fm-menu2");
    var tab3 = this.shadow.querySelector("#fm-menu3");
    // var currentTab = this.shadow.querySelector(".currentTab");
    switch (selectedTab) {
      case "fm-menu1":
        this.shadow.querySelector(`.${tabClass}1`).style.display = "grid";
        this.shadow.querySelector(`.${tabClass}2`).style.display = "none";
        this.shadow.querySelector(`.${tabClass}3`).style.display = "none";
        tab1.setAttribute("class", `men-active ${tabClass} selectedMenu`);
        tab2.setAttribute("class", `men-active ${tabClass}`);
        tab3.setAttribute("class", `men-active ${tabClass}`);
        break;
      case "fm-menu2":
        this.shadow.querySelector(`.${tabClass}1`).style.display = "none";
        this.shadow.querySelector(`.${tabClass}2`).style.display = "grid";
        this.shadow.querySelector(`.${tabClass}3`).style.display = "none";
        tab1.setAttribute("class", `men-active ${tabClass}`);
        tab2.setAttribute("class", `men-active ${tabClass} selectedMenu`);
        tab3.setAttribute("class", `men-active ${tabClass}`);
        break;
      case "fm-menu3":
        this.shadow.querySelector(`.${tabClass}1`).style.display = "none";
        this.shadow.querySelector(`.${tabClass}2`).style.display = "none";
        this.shadow.querySelector(`.${tabClass}3`).style.display = "grid";
        tab1.setAttribute("class", `men-active ${tabClass}`);
        tab2.setAttribute("class", `men-active ${tabClass}`);
        tab3.setAttribute("class", `men-active ${tabClass} selectedMenu`);
        break;  
    }
  }

  connectedCallback() {
    this.render();
    this.shadow.querySelector("#uniMenuIcon").addEventListener("click", () => {
      this.toggleMenu();
    });
    this.shadow.querySelector("#uniMenuIcon2").addEventListener("click", () => {
      this.closeFullMenu();
    });
    this.tabs = this.shadow.querySelectorAll(".menuTabs");
    this.tabs.forEach(element => {
      if (element.id != "uniMenuExit") {
        element.addEventListener("click", () => {
          this.openFullMenu();
        });
      } else {
        element.addEventListener("click", () => {
          this.closeFullMenu();
          fullMenuOpen = false;
        });
      }
    });
    this.headerTabs = this.shadow.querySelectorAll(".men-active")
    this.headerTabs.forEach(element => {
      element.addEventListener("click", (e) => {
        this.switchMenuTabs(e);
      });
    });
    this.shadow.querySelector("#switch23").addEventListener("click", () => {
      var el = {
        target: this.shadow.querySelector("#fm-menu3")
      }
      this.switchMenuTabs(el);
    });
    this.shadow.getElementById("pinMenu").addEventListener("click", () => {
      pinMenu();
    });
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
            a {
              text-decoration: none;
            }
            a:hover {
              color: var(--accent) !important;
              transition: 0.3s;
            }
            a:link {
              color: var(--secondary);
            }
            a:visited {
              color: var(--secondary);
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            input[type="range"] {
              -webkit-appearance: none;
              width: 100%;
              height: 8px;
              background: transparent;
              outline: none;
              margin: 20px 0;
            }
            
            input[type="range"]::-webkit-slider-runnable-track {
              background: linear-gradient(to right, transparent 2px, #ff002d 2px, transparent 6px);
              background-size: calc(96% / 5) 8px;
            }
            
            input[type="range"]::-moz-range-track {
              background: linear-gradient(to right, transparent 2px, #ff002d 2px, transparent 6px);
              background-size: calc(96% / 5) 8px;
            }
            
            input[type="range"]::-ms-track {
              background: transparent;
              border-color: transparent;
              color: transparent;
            }
            
            input[type="range"]::-ms-fill-lower {
              background: linear-gradient(to right, transparent 2px, #ff002d 2px, transparent 6px);
              background-size: calc(96% / 5) 8px;
            }
            
            input[type="range"]::-ms-fill-upper {
              background: linear-gradient(to right, transparent 2px, #ff002d 2px, transparent 6px);
              background-size: calc(96% / 5) 8px;
            }
            
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              background: var(--accent);
              border: none;
              height: 16px;
              width: 16px;
              border-radius: 50%;
            }
            
            input[type="range"]::-moz-range-thumb {
              background: var(--accent);
              border: none;
              height: 16px;
              width: 16px;
              border-radius: 50%;
            }
            
            input[type="range"]::-ms-thumb {
              background: var(--accent);
              border: none;
              height: 16px;
              width: 16px;
              border-radius: 50%;
            }
                    
            .active {
              color: var(--secondary);
              cursor: pointer;
              transition: 0.3s;
            }
            .active:hover {
              color: var(--accent) !important;
            }
            .alt {
              color: var(--accent);
              cursor: pointer;
              transition: 0.3s;
            }
            .alt:hover {
              color: var(--secondary) !important;
            }
            /* width */
            ::-webkit-scrollbar {
              width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: black; 
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: var(--accent);
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: var(--secondary); 
            }
            #uniMenu {
              width: 260px;
              height: auto;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              z-index: 7;
              position: relative;
              top: 36px;
              left: 36px;
              background-color: rgba(0, 0, 0, 0.7);
              border-left: 2px solid #ff002d;
              border-bottom: 2px solid #ff002d;
              border-top: 2px solid #ff002d;
              font-family: "BS-R";
              font-size: 16px;
              display: none;
              transition: height 0.5s ease;
            }
            #uniMenuLogo {
              width: 100%;
            }
            #menuHeader {
              display: grid;
              width: 88%;
              height: 100%;
              overflow: hidden;
              grid-template-columns: 1fr;
              grid-template-rows: 70% 30%;
              align-items: center;
              justify-items: center;
              border-radius: 10px 10px 0 0;
              z-index: 6;
              position: relative;
              padding: 2% 6%;
              margin-bottom: 6%;
              transition: all 0.5s ease;
              cursor: move;
              user-select: none;
            }
            #uniVersion {
              display: grid;
              width: 100%;
              height: auto;
              justify-items: start;
              font-size: 0.8em;
              padding-left: 10px;
              user-select: none;
            }
            #topMenu {
              display: grid;
              width: 100%;
              height: 100%;
              grid-template-columns: 70% 30%;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              z-index: 6;
            }
            #uniMenuIcon {
              font-size: 2em;
              justify-self: end;
              transform: rotate(180deg);
              cursor: pointer;
              transition: all 0.5s ease;
            }
            #uniMenuIcon:hover {
              color: white;
            }
            #menuItems {
              display: grid;
              width: 100%;
              height: auto;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
              transition: all 0.5s ease;
              // overflow: hidden;
              transition: all 0.5s ease;
              border-bottom-left-radius: 10px;
              z-index: 6;
              position: relative;
              cursor: pointer;
              overflow: hidden;
            }
            #menuItems div {
              padding: 5px 10px;
            }
            #menuItems > div:hover {
              background-color: #ff002d !important;
              color: white !important;
            }
            #menuItems > div:hover .cls-1 {
              stroke: white !important;
            }
            .uniMenuTxt {
              transition: all 0.5s ease;
            }
            #menuItems > div:hover .uniMenuTxt {
              transform: translateX(40px);
            }
            #fullMenu {
              width: 500px;
              height: 100%;
              position: absolute;
              left: 260px;
              top: -2px;
              background-color: rgba(0, 0, 0, 0.7);
              z-index: 6;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              transition: all 0.5s ease;
              transform-origin: left;
              overflow: hidden;
            }
            #fullMenuBG {
              width: 500px;
              height: 100%;
              position: absolute;
              left: 260px;
              top: -2px;
              filter: blur(2px);
              z-index: 5;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              transform-origin: left;
              transform: scaleX(1);
              transition: all 0.5s ease;
              border-right: 2px solid white;
              border-bottom: 2px solid white;
              border-top: 2px solid white;
            }
            .menuTabs {
              display: grid;
              grid-template-columns: 20% 80%;
              grid-template-rows: 1fr;
              width: 100%;
              align-items: center;
              border-bottom: 1px solid black;
              user-select: none;
            }
            #fm-header {
              width: 100%;
              height: 16%;
              display: grid;
              grid-template-columns: 85% 15%;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              text-shadow: 0 0 5px black;
              font-family: "BS-B";
              float: left;
              cursor: move;
              user-select: none;
            }
            #uniMenuIcon2 {
              font-size: 2em;
              justify-self: start;
              transform: rotate(-90deg);
              cursor: pointer;
              transition: all 0.5s ease;
            }
            #uniMenuIcon2:hover {
              color: white;
            }
            #fm-header-headline {
              width: 100%;
              height: 100%;
              font-size: 1em;
              display: flex;
              justify-items: center;
              align-items: center;
              padding-left: 30px;
              opacity: 1;
              // pointer-events: none;
            }
            #fm-header-headline span {
              padding: 10px 14px;
              text-transform: uppercase;
              font-size: 0.7em;
              margin-right: 10px;
              cursor: pointer;
              transition: all 0.3s ease;
              letter-spacing: 1px;
            }
            .men-active {
              background-color: rgba(0, 0, 0, 0.8);
            }
            #fm-header-headline:hover > .men-active:hover {
              background-color: #ff002d;
              color: white;
            }
            #fm-enhancements {
              width: 100%;
              height: 74%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
            }
            #fm-enhancements img {
              width: 100%;
              height: auto;
              object-fit: contain;
            }
            #fm-inventory {
              width: 100%;
              height: 84%;
              float: left;
              overflow: hidden;
              display: none;
            }
            #inventory-images {
              height: 40%;
              width: auto;
              overflow-y: hidden;
              overflow-x: scroll;
              margin-left: 18px;
              margin-right: 18px;
              display: flex;
            }
            .Inventory-Image-Cont {
              height: 100%;
              margin-right: 10px;
              width: auto;
            }
            .Inventory-Image-Cont img {
              height: 100%;
              width: auto;
            }
            #fm-menu3 {
              // opacity: .6;
            }
            #inventory-text {
              height: 38%;
              width: auto;
              padding-right: 18px;
              padding-left: 18px;
              padding-top: 1%;
              padding-bottom: 1%;
              font-family: "BS-R";
              font-size: 0.8em;
              line-height: 1.5em;
            }
            #inventory-text > span {
              background-color: rgba(0, 0, 0, 0.8);
              letter-spacing: 1px;
            }
            .selectedMenu {
              background-color: #ff002d;
              color: white;
            }
            .selectedMenu2 {
              background-color: #ff002d;
              color: white;
            }
            #uniMenuHelpSvg path {
              stroke: white;
            }
            #inventory-cta {
              height: 20%;
              width: 100%;
              display: flex;
              justify-content: end;
              align-items: center;
            }
            #invCtaBut {
              width: 100px;
              height: 30px;
              background-color: var(--secondary);
              color: black;
              font-family: "BS-R";
              margin-right: 30px;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              transition: all 0.5s ease;
              cursor: pointer;
            }
            #invCtaBut:hover {
              background-color: #ff002d;
              color: white;
            }
            #menuMessage {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.9);
              z-index: 7;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              text-align: center;
              font-family: "BS-B";
              font-size: 1.5em;
              color: #ff002d;
            }
            #menuMessageHead {
              animation: blink 1s infinite;
              transition: all 0.5s ease;
            }
            #menuMessageText {
              font-size: .7em;
              font-family: "BS-R";
            }
            #menuLoadingScreen {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.9);
              z-index: 7;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-family: "BS-B";
              font-size: 1.5em;
              color: #ff002d;
            }
            #loadIcon {
              width: 300px;
              height: 300px;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              animation: spin 10s linear infinite, pulse 3s ease-in-out infinite;
              border: 5px dotted #ff002d;
              border-radius: 50%;
            }
            #loading {
              position: absolute;
              animation: blink 4s ease-in-out infinite;
            }
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            @keyframes pulse {
              0% {
                scale: 1;
              }
              50% {
                scale: .8;
              }
              100% {
                scale: 1;
              }
            }
            @keyframes blink {
              0% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
            #fm-help {
              width: 100%;
              height: 84%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-cotent: start;
            }
            .help-tabs {
              width: 95%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr;
              align-items: center;
              justify-cotent: start;
              padding-left: 5%;
            }
            .ht1 {
              display: grid;
            }
            .ht2 {
              width: 80%;
              height: 75%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: start;
              justify-cotent: start;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 25%;
              font-size: 1em;
            }
            .ht3 {
              width: 80%;
              height: 75%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: start;
              justify-cotent: start;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 25%;
              font-size: 1em;
            }
            .helpSection {
              display: flex;
              width: 100%;
              height: 20%;
              align-items: center;
              justify-content: start;
            }
            .arrow {
              font-size: 40px;
              border: 1px solid #ff002d;
              height: 40px;
              width: 40px;
              display:flex;
              justify-content: center;
              align-items: center;
              border-radius: 10px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 0.7);
              color: var(--secondary);
            }
            #leftArr {
              transform: rotate(180deg);
            }
            #upArr {
              transform: rotate(-90deg);
            }
            #downArr {
              transform: rotate(90deg);
            }
            #spaceHelp {
              width: auto;
              height: auto;
              padding: 10px 80px;
              border: 1px solid #ff002d;
              border-radius: 5px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 0.7);
              color: var(--secondary);
            }
            #leftHelp {
              width: auto;
              height: auto;
              padding: 30px 15px;
              border: 1px solid #ff002d;
              border-radius: 5px;
              margin-right: 20px;
              background-color: rgba(0, 0, 0, 0.7);
              color: var(--secondary);
            }
            .helpText {
              color: var(--accent);
            }
            .boxesUi {
              width: 18px;
              height: 18px;
              border: 2px solid #ff002d;
              margin-right: 20px;
            }
            .boxOP {
              border: 2px solid yellow;
            }
            #fm-feedback {
              width: 80%;
              max-width: 500px;
              margin: 20px auto;
              padding-top: 10px;
              padding-left: 20px;
              padding-right: 20px;
              display: none;
              flex-direction: column;
            }
            
            #fm-feedback #feedbackHeadline {
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 20px;
              background-color: transparent;
              text-align: center;
              cursor: default;
              user-select: none;
            }
            
            #fm-feedback input[type="email"] {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              background-color: transparent;
              border: 1px solid var(--secondary);
              font-size: 16px;
              color: var(--secondary);
              vertical-align: top;
              border-radius: 5px;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              overflow-wrap: break-word; /* wrap the text when it reaches the edge */
            }
            
            #fm-feedback textarea {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              background-color: transparent;
              border: 1px solid var(--secondary);
              font-size: 16px;
              color: var(--secondary);
              vertical-align: top;
              border-radius: 5px;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              overflow-wrap: break-word; /* wrap the text when it reaches the edge */
              font-family: "BS-R";
            }
                        
            #fm-feedback #feedbackInput {
              width: 100%;
              height: 150px; /* increase the height of the feedback input */
            }
            
            #fm-feedback #feedbackButton {
              width: 30%;
              justify-self: end;
              background-color: transparent;
              color: var(--accent);
              padding: 8px 20px;
              margin: 8px 0;
              border: 1px solid var(--accent);
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 600;
              text-align: center;
              user-select: none;
            }
            
            #fm-feedback #feedbackButton:hover {
              background-color: var(--accent);
              color: black;
            }

            #fm-feedback input[type="email"]::placeholder {
              color: var(--secondary);
            }
            #fm-feedback input[type="email"]:focus {
              outline: none; 
            }
            #fm-feedback textarea:focus {
              outline: none; 
            }
            #fm-feedback textarea::placeholder {
              color: var(--secondary);
            }
          
            #pinMenu {
              width: 54px;
              height: 54px;
              position: absolute;
              z-index: 5;
              left: -27px;
              top: -27px;
              border-top: 2px solid rgba(225, 225, 225, 0.8);
              border-left: 2px solid rgba(225, 225, 225, 0.8);
              border-top-left-radius: 20%;
              filter: blur(1px);
              transition: all 0.2s ease-in-out;
              cursor: pointer;
            }
            #pinMenu:hover {
              border-top: 4px solid #ff002d !important;
              border-left: 4px solid #ff002d !important;
            }
            #locked {
              font-size: 1em;
              position: absolute;
              right: -80px;
              top: -5px;
              opacity: 0;
              transition: all 0.2s ease-in-out;
              cursor: pointer;
              user-select: none;
            }
            #locked:hover {
              color: rgba(225, 225, 225, 0.8) !important;
            }
            #fm-settings {
              width: 95%;
              height: 84%;
              display: none;
              padding: 5%;
              color: var(--secondary);
            }
            .settingsSections {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 40% 1fr;
              grid-template-rows: 1fr;
            }
            .settingsSections > div {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: center;
            }
            .settingsSectionsSlider {
              width: 94%;
              height: 100%;
              display: grid;
              grid-template-columns: 40% 1fr;
              grid-template-rows: 1fr;
              padding-right: 6%;
            }
            .settingsSectionsSlider > div {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: center;
            }
            /* The switch - the box around the slider */
            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 24px;
            }

            /* Hide default HTML checkbox */
            .switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            /* The slider */
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: var(--primary);
              -webkit-transition: .4s;
              transition: .4s;
            }

            .toggleBoxes {
              width: 100%;
              height: 100%;
              display: grid;
              // grid-template-columns: 1fr;
              // grid-template-rows: 1fr;
              justify-content: center;
              align-items: center;
            }

            .slider:before {
              position: absolute;
              content: "";
              height: 18px;
              width: 18px;
              left: 4px;
              bottom: 3px;
              background-color: white;
              -webkit-transition: .4s;
              transition: .4s;
            }

            input:checked + .slider {
              background-color: var(--accent);
            }

            input:focus + .slider {
              box-shadow: 0 0 1px var(--secondary);
            }

            input:checked + .slider:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(34px);
            }

            /* Rounded sliders */
            .slider.round {
              border-radius: 24px;
            }

            .slider.round:before {
              border-radius: 50%;
            }
            .saveButs {
              width: 100%;
              height: 50px;
              display: flex;
              justify-content: flex-end;
            }
            .saveButs div {
              width: 100px;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 2px solid var(--accent);
              border-radius: 5px;
              cursor: pointer;
              user-select: none;
              margin-right: 5%;
              color: var(--accent);
              transition: all 0.2s ease-in-out;
            }
            .saveButs div:hover {
              background-color: var(--accent);
              color: black;
            }
            #creditNames {
              justify-self: end;
              padding-right: 10%;
            }
            #creditsSect {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 20% 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
            }
            #creditsBut {
              width: 100%;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 2px solid var(--primary);
              border-radius: 5px;
              color: var(--secondary);
            }
            .soundSlider1 {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
            }
            #fm-profile {
              width: 92%;
              height: 84%;
              padding-left: 4%;
              padding-right: 4%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 60% 25% 15%;
            }
            #profileMain {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
              overflow: hidden;
            }
            #proImgSect {
              width: 100%;
              height: auto;
            }
            #proImg {
              width: 100%;
              height: auto;
            }
            #profileDesc {
              width: 100%;
              height: 88%;
              padding-top: 2%;
            }
            #profileButs {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: end;
              align-items: center;
            }
            .editButs {
              width: 100px;
              height: 60%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 2px solid var(--primary);
              border-radius: 5px;
              color: var(--secondary);
              cursor: pointer;
              margin-left: 5%;
            }
            .proInfoSect {
              width: 95%;
              height: auto%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
              padding-left: 5%;
            }
            .proInfoInput {
              text-align: right;
              color: var(--secondary);
            }
            .proLabel {
              user-select: none;
            }
            #profileDesc {
              color: var(--secondary);
            }
         </style>
         <div id="uniMenu">
            <div id="menuHeader">
              <div id="topMenu">
               <img id="uniMenuLogo" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/SCOGÉ_Logo-red.png" draggable="false">
               <div id="uniMenuIcon">&#8682;</div>
              </div>
              <div id="uniVersion">
                Universe - v. 0.0.1
              </div>
            </div>
            <div id="menuItems">
              <div id="uniMenuShop" class="menuTabs">
                <div>
                  <svg id="uniMenuShopSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.6 52.83"><defs><style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-1" d="M49.63,6.44l2.66,2.65a7.31,7.31,0,0,1,0,10.3L38.67,33,25.73,20.05,39.34,6.44A7.28,7.28,0,0,1,49.63,6.44Z"/><path class="cls-1" d="M14.72,46.66,12.07,44a7.28,7.28,0,0,1,0-10.29L25.68,20.1l13,12.95L25,46.66A7.31,7.31,0,0,1,14.72,46.66Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuEnhancements">Enhancements</div>
              </div>
              <div id="uniMenuItems" class="menuTabs">
                <div>
                  <svg id="uniMenuItemsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;}.cls-2{fill:#ff002d;}</style></defs><path class="cls-1" d="M3.62,17.8,32,32.08a.73.73,0,0,0,.35.09.74.74,0,0,0,.36-.09L61.09,17.8a.79.79,0,0,0,.44-.72.81.81,0,0,0-.46-.71L32.69,3.08a.79.79,0,0,0-.67,0L3.64,16.37a.79.79,0,0,0,0,1.43Z"/><path class="cls-2" d="M61.07,25.5,54.9,22.6a.81.81,0,0,0-1.06.39A.79.79,0,0,0,54.23,24l4.68,2.2L32.35,39.61,5.79,26.24l4.61-2.15a.8.8,0,0,0-.68-1.45L3.64,25.5a.77.77,0,0,0-.46.7.82.82,0,0,0,.44.73L32,41.21a.85.85,0,0,0,.35.08.86.86,0,0,0,.36-.08L61.09,26.93a.82.82,0,0,0,.44-.73A.78.78,0,0,0,61.07,25.5Z"/><path class="cls-2" d="M61.07,35,54.9,32.13a.79.79,0,0,0-1.06.38.81.81,0,0,0,.39,1.06l4.68,2.19L32.35,49.13,5.79,35.76l4.61-2.15a.81.81,0,0,0,.38-1.06.79.79,0,0,0-1.06-.38L3.64,35a.78.78,0,0,0-.46.71.82.82,0,0,0,.44.72L32,50.73a.72.72,0,0,0,.35.08.73.73,0,0,0,.36-.08L61.09,36.45a.82.82,0,0,0,.44-.72A.8.8,0,0,0,61.07,35Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuInventory">Inventory</div>
              </div>
              <div id="uniMenuProfile" class="menuTabs">
                <div>
                  <svg id="uniMenuProfileSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M31.5,26.12A11.42,11.42,0,1,1,42.92,14.7,11.43,11.43,0,0,1,31.5,26.12Zm0-21.55A10.13,10.13,0,1,0,41.63,14.7,10.15,10.15,0,0,0,31.5,4.57Z"/><path class="cls-1" d="M45.79,49.82h-28a.65.65,0,0,1-.64-.65V39.49a14.66,14.66,0,1,1,29.32,0v9.68A.65.65,0,0,1,45.79,49.82ZM18.41,48.53H45.15v-9a13.37,13.37,0,1,0-26.74,0Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuProfile">Profile</div>
              </div>
              <div id="uniMenuSettings" class="menuTabs">
                <div>
                  <svg id="uniMenuSettingsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M61.26,13.89H24a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,13.89Z"/><path class="cls-1" d="M18.21,13.89H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,13.89Z"/><path class="cls-1" d="M61.26,28.27H46.64a.8.8,0,0,1-.8-.8.79.79,0,0,1,.8-.79H61.26a.79.79,0,0,1,.8.79A.8.8,0,0,1,61.26,28.27Z"/><path class="cls-1" d="M42.62,28.27H4.28a.79.79,0,0,1-.79-.8.79.79,0,0,1,.79-.79H42.62a.79.79,0,0,1,.8.79A.8.8,0,0,1,42.62,28.27Z"/><path class="cls-1" d="M61.26,42.64H22.19a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,42.64Z"/><path class="cls-1" d="M18.21,42.64H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,42.64Z"/><path class="cls-1" d="M18.21,20.28a.79.79,0,0,1-.79-.8V5.37a.79.79,0,0,1,.79-.8.8.8,0,0,1,.8.8V19.48A.8.8,0,0,1,18.21,20.28Z"/><path class="cls-1" d="M18.21,49.7a.79.79,0,0,1-.79-.8V34.79a.79.79,0,0,1,.79-.79.79.79,0,0,1,.8.79V48.9A.8.8,0,0,1,18.21,49.7Z"/><path class="cls-1" d="M46.64,34.59a.8.8,0,0,1-.8-.8V19.48a.79.79,0,0,1,.8-.79.79.79,0,0,1,.79.79V33.79A.79.79,0,0,1,46.64,34.59Z"/></svg>  
                </div>
                <div class="uniMenuTxt" id="menuSettings">Settings</div>
              </div>
              <div id="uniMenuHelp" class="menuTabs selectedMenu2">
                <div>
                  <svg id="uniMenuHelpSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuHelp">Help</div>
              </div>
              <div id="uniMenuFeedback" class="menuTabs">
                <div>
                  <svg id="uniMenuFeedbackSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-1" d="M14.08,41.05h23L48.9,49a1.27,1.27,0,0,0,2-1V40.42c2.3-1,5.08-3.09,5.08-5.92V11.87a6.56,6.56,0,0,0-6.54-6.55H14.08a6.55,6.55,0,0,0-6.54,6.55V34.5A6.55,6.55,0,0,0,14.08,41.05Z"/><line class="cls-1" x1="15.21" y1="14.75" x2="47.49" y2="14.75"/><line class="cls-1" x1="15.21" y1="21.75" x2="47.49" y2="21.75"/><line class="cls-1" x1="15.6" y1="28.74" x2="47.88" y2="28.74"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuFeedback">Feedback</div>
              </div>
              <div id="uniMenuExit" class="menuTabs">
                <div>
                  <svg id="uniMenuExitSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.05 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M57.56,50.14H22.43a.64.64,0,0,1-.63-.64V32.61a.64.64,0,1,1,1.27,0V48.86H56.93V4.24H23.07V21.45a.64.64,0,1,1-1.27,0V3.6A.64.64,0,0,1,22.43,3H57.56a.64.64,0,0,1,.64.64V49.5A.64.64,0,0,1,57.56,50.14Z"/><path class="cls-1" d="M35.38,27.66H8.07a.64.64,0,1,1,0-1.27H35.38a.64.64,0,0,1,0,1.27Z"/><path class="cls-1" d="M13.89,32.39a.63.63,0,0,1-.37-.12L6.88,27.54a.64.64,0,0,1,0-1l6.64-4.73a.63.63,0,0,1,.89.15.65.65,0,0,1-.15.89L8.35,27l5.91,4.2a.64.64,0,0,1-.37,1.16Z"/></svg>
                </div>
                <div class="uniMenuTxt">Exit</div>
              </div>
            </div>
            <div id="fullMenu">
              <div id="menuMessage">
                <div>
                  <div id="menuMessageHead">GET WALLET</div>
                  <div id="menuMessageText">You do not have a wallet.</div>
                </div>
              </div>
              <div id="menuLoadingScreen">
                <div id="loading">LOADING...</div>
                <div id="loadIcon"></div>
              </div>
              <div id="fm-header">
                <div id="fm-header-headline">
                  <span id="fm-menu1" class="men-active ht selectedMenu">Player</span>
                  <span id="fm-menu2" class="men-active ht">Wallet</span>
                  <span id="fm-menu3" class="men-active ht">Network</span>
                </div>
                <div id="uniMenuIcon2">
                  &#8682;
                </div>
              </div>
              <div id="fm-enhancements"></div>
              <div id="fm-inventory">
                <div id="inventory-images">
                </div>
                <div id="inventory-text">
                  <p>Inventory</p>
                  <span id="inventoryInnerText">
                    This iten is not for sale. It is a gift from the creator. You can trade it with other users. This is a limited edition item. There are 1,000 of this item in existence. The highest quality of this edition is 1,000. The lowest quality of this edition is 1. The current quality of this edition is 1,000. The current price of this edition is 0.00 ICP.
                  </span>
                </div>
                <div id="inventory-cta">
                  <div id="invCtaBut">USE</div>
                </div>
              </div>
              <div id="fm-profile">
                <div id="profileMain">
                  <div id="proImgSect">
                    <img id="proImg" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/ui.png">
                  </div>
                  <div id="proInfo">
                    <div class="proInfoSect">
                      <div class="proLabel">Name:</div>
                      <div id="proLabelName" class="proInfoInput">Daniel lans</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Identifier:</div>
                      <div id="proLabelIdentity" class="proInfoInput">Male</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Rank:</div>
                      <div id="proLabelRank" class="proInfoInput">1</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Email:</div>
                      <div id="proLabelEmail" class="proInfoInput">Daniell@gmail.com</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Progress:</div>
                      <div id="proLabelProgress" class="proInfoInput">50%</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Power Ups:</div>
                      <div id="proLabelEnh" class="proInfoInput">() - () - ()</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Class:</div>
                      <div id="proLabelClass" class="proInfoInput">4</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Domains:</div>
                      <div id="proLabelDom" class="proInfoInput">1, 20, 13</div>
                    </div>
                  </div>
                </div>
                <div id="profileDesc">
                  Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. Tomorrow I will be foolish, so I want to change the world again. In the end, I will be wise, so I will change myself again.
                </div>
                <div id="profileButs">
                  <div id="proEdit" class="editButs">Edit</div>
                  <div id="proSave" class="editButs">Save</div>
                </div>
              </div>
              <div id="fm-settings">
                <div class="settingsSections">
                  <div>Toggle Fullscreen</div>
                  <div class="toggleBoxes">
                    <label class="switch">
                    <input type="checkbox" checked="checked">
                    <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div class="settingsSections">
                  <div>Notifications</div>
                  <div class="toggleBoxes">
                    <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div class="settingsSectionsSlider">
                  <div>Sound</div>
                  <div>
                    <input type="range" min="0" max="5" value="3" class="soundSlider1" id="myRange">
                  </div>
                </div>
                <div class="settingsSectionsSlider">
                  <div>Music</div>
                  <div>
                    <input type="range" min="0" max="5" value="3" class="soundSlider1" id="myRange">
                  </div>
                </div>
                <!--
                <div id="creditsSect">
                    <div id="creditsBut">Credits</div>
                    <div id="creditNames">Sountrack: ROTS Worldwide</div>
                </div>
                -->
                <div class="saveButs">
                  <div>Save</div>
                </div>
              </div>
              <div id="fm-help">
                <div class="help-tabs ht1">
                  <div class="helpSection">
                    <div class="arrow" id="leftArr">&#8227;</div>
                    <div class="arrow" id="upArr">&#8227;</div>
                    <div class="arrow" id="rightArr">&#8227;</div>
                    <div class="arrow" id="downArr">&#8227;</div>
                    <div class="helpText">Move Player</div>
                  </div>
                  <div class="helpSection">
                    <div id="spaceHelp">SPACE</div>
                    <div class="helpText">Interact</div>
                  </div>
                  <div class="helpSection">
                    <div id="leftHelp">LEFT CLICK</div>
                    <div class="helpText">Explore / Action</div>
                  </div>
                  <div class="helpSection">
                    <div class="boxesUi"></div>
                    <div class="helpText">Player</div>
                  </div>
                </div>
                <div class="help-tabs ht2">
                  <div>
                    Citizens across T.A.O.S City use the <span class="active"><a href="https://plugwallet.ooo/" target="_blank">Plug Wallet</a></span> to manage and secure digital assets on their Internet Computer.<br><br>The Plug Wallet allows you to create and manage your digital identity, send and receive payments, participate in governance, and interact with applications and services on the <span class="active" id="switch23">decentralized network</span>.
                  </div>
                </div>
                <div class="help-tabs ht3">
                <div>
                  T.A.O.S City's network is powered by the <span class="active"><a href="https://internetcomputer.org/" target="_blank">Internet Computer</a></span>, a revolutionary decentralized network powered by the ICP token.<br><br>In a city fragmented by distinct governors, the Internet Computer offers citizens in each sector a tool to build powerful neural apps and contracts, free from the tyrannical, centralized old internet. With <span class="active"><a href="https://www.coinbase.com/price/internet-computer" target="_blank">ICP</a></span> (aka RedDisks/Reds) citizens are building a brighter world.
                </div>
              </div>
              </div>
              <div id="fm-feedback">
                <div id="feedbackHeadline">Help make T.A.O.S City better.</div>
                <input type="email" id="feedbackEmailInput" placeholder="Email" value="" maxlength="45">
                <textarea id="feedbackInput" placeholder="Enter your feedback here..." maxlength="320"></textarea>
                <div id="feedbackButton">SEND</div>
              </div>
            </div>
            <div id="fullMenuBG"></div>
            <div id="pinMenu">
              <div id="locked">UNLOCK</div>
            </div>
            <div id="adMenu"></div>
         </div>
         `;
  }
}

customElements.define("scoge-unimenu", getUniMenu);

export { getUniMenu };
