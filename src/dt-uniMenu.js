import { SoundtrackManager } from "./soundtrack.js";
import { universe } from "./universe.js";

// import { idlFactory } from "./declarations/universe_backend/;universe_backend.did.js";
import { Configuration, OpenAIApi } from "openai";
window.dtmenuOpen = true;
window.dtfullMenuOpen = true;
const VITE_ScogeI = import.meta.env.VITE_ScogeI;
const soundtrack2 = new SoundtrackManager();
// const suIDL = idlFactory;
// console.log({suIDL});
var nmcProps = {
  // ** Visual Identifier **
  ringType: "",
  landRank: 0, 
  rank: 0,
  powerUps: [0],
  progress: 0,
  xp: 0,
  category: "",
  linked: false,
  // ** Player Info **
  identifier: "",
  alias: "",
  email: "",
  // earthImage: [0],
  earthText: [""],
  styles: [""],
  // ** Player Stats **
  discovered: [""],
  discoveredProgress: 0.0,
  power: 0,
  mental: 0,
  physical: 0,
  health: 0,
  speed: 0,
  sight: 0,
  endurance: 0.0,
  domains: [0],
  playerLocation: 0,
  // ** Player Settings **
  soundLevel: 0.0,
  musicLevel: 0.0,
  fsOn: false,
  notiOn: false,
  // ** Player Network **
  networkClass: "",
  network: [""],
  // ** Land Info **
  landNumber: 0,
  story: {
      title: "",
      text: "",
      imagesUri: [""],
      videoURI: "",
  },
  // bankooImage: [0],
  bankooText: [""],
  imageCompData: [0],
  // ** History **
  ancestorsNames: [""],
  ancestorsImages: [0],
};

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
    const refresh = this.shadow.querySelector("#refresh");
    if (window.dtmenuOpen === false) {
      menuIcon.style.transform = "rotate(180deg)";
      menu.style.height = "auto";
      menuHeader.style.height = "100%";
      window.dtmenuOpen = true;
      return;
    } else {
      menuHeader.style.height = "100%";
      setTimeout(() => { menu.style.height = "10%"; }, 150);
      // menu.style.height = "10%";
      menuIcon.style.transform = "rotate(0deg)";
      menuItems.style.height = "0%";
      menuItems.style.overflow = "hidden";
      window.dtmenuOpen = false;
      refresh.style.animationPlayState = "paused";
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
    const refresh = this.shadow.querySelector("#refresh");
    if (window.dtfullMenuOpen === false) {
      menu.style.overflowX = "visible";
      fullMenu.style.width = "500px";
      fullMenuBg.style.transform = "scaleX(1)";
      menu.style.borderBottomRightRadius = "0px";
      menu.style.borderTopRightRadius = "0px";
      menu.style.borderRight = "0px solid black";
      window.dtfullMenuOpen = true;
      refresh.style.display = "block";
      refresh.style.animationPlayState = "running";
      return;
    }
    this.shadow.getElementById("beaconNoti").style.display = "none";
  }

  // Send Feedback
  sendFeedback(event) {
      // Event.preventDefault(); // Prevent the form from being submitted the traditional way
      event.preventDefault();
      var email = this.shadow.getElementById('feedbackEmailInput').value;
      var feedback = this.shadow.getElementById('feedbackInput').value;
      // Validate the form values here, if necessary
      // Submit the form
      this.shadow.getElementById('feedbackForm').submit();
  }

  closeFullMenu() {
    const menu = this.shadow.querySelector("#uniMenu");
    const fullMenu = this.shadow.querySelector("#fullMenu");
    const fullMenuBg = this.shadow.querySelector("#fullMenuBG");
    const refresh = this.shadow.querySelector("#refresh");
    fullMenu.style.width = "0px";
      fullMenuBg.style.transform = "scaleX(0)";
      refresh.style.animationPlayState = "paused";
      refresh.style.display = "none";
      setTimeout(() => {
        menu.style.borderBottomRightRadius = "10px";
        menu.style.borderTopRightRadius = "10px";
        menu.style.borderRight = "2px solid #ff002d";
       }, 500);
       window.dtfullMenuOpen = false;
    // soundtrack2.stop('menuExit1');
    // soundtrack2.play('menuExit1');
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }

  // // Filter Beacons
  // filterBeacons() {
  //   var filter = this.shadow.getElementById("filterInput").value.toUpperCase();
  //   var beaconList = this.shadow.querySelectorAll(".beacon");
  //   for (var i = 0; i < beaconList.length; i++) {
  //     var beacon = beaconList[i];
  //     var beaconName = beacon.querySelector(".beaconName").innerHTML;
  //     if (beaconName.toUpperCase().indexOf(filter) > -1) {
  //       beacon.style.display = "grid";
  //     } else {
  //       beacon.style.display = "none";
  //     }
  //   }
  // }

  // Edit Profile
  editProfile(e) {
    var domain = e?.target;
    let proImg = this.shadow.getElementById("proImgSect");
    let proImg2 = this.shadow.getElementById("proImg");
    let proImg3 = this.shadow.getElementById("editImgIcon");
    let proText = this.shadow.getElementById("profileDesc");
    let proEdit = this.shadow.getElementById("proEdit");
    let proSave = this.shadow.getElementById("proSave");
    let proName = this.shadow.getElementById("proLabelName");
    let proIden = this.shadow.getElementById("proLabelIdentity");
    let proEmail = this.shadow.getElementById("proLabelEmail");
    // Buttons Styling
    proEdit.innerHTML = "CANCEL";
    proSave.style.color = "var(--accent)";
    proSave.style.border = "2px solid var(--accent)";
    proSave.style.opacity = "1";
    proSave.style.pointerEvents = "all";
    // TextArea Styling
    proText.style.pointerEvents = "all";
    proText.readOnly = false;
    proText.style.borderLeft = "1px solid var(--primary)";
    proText.style.borderRight = "1px solid var(--primary)";
    proText.style.borderRadius = "10px";
    proText.style.borderBottom = "none";
    proText.style.resize = "none";
    proText.style.borderTop = "none";
    proText.value = "";
    proText.style.animation = "editBlinking 2s infinite";
    proText.focus();
    // Name Iden Email Styling
    proName.style.animation = "editBlinking 2s infinite";
    proIden.style.animation = "editBlinking 2s infinite";
    proEmail.style.animation = "editBlinking 2s infinite";
    window.deactivateDrag();
    // Image Styling
    proImg.style.borderLeft = "1px solid var(--accent)";
    proImg.style.borderRight = "1px solid var(--accent)";
    proImg3.style.display = "block";
    proImg2.style.filter = "blur(5px)";
    proImg2.style.filter = "brightness(0.2)";
    // Img Upload
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        // Do something with the file, e.g., upload it to a server or display it
        console.log('Selected file:', file);

        // Display the selected image in the 'proImg' element
        const reader = new FileReader();
        reader.onload = (e) => {
          const blob = new Blob([e.target.result], {type: file.type});
          console.log('Blob:', blob);
          const url = URL.createObjectURL(blob);
          proImg2.src = url;
          proImg2.style.filter = "brightness(1)";
        
          // Store the Blob object for later use (e.g., for saving)
         this.imageBlob = blob;
        };
        
        reader.readAsArrayBuffer(file);
      }
    });
    proImg.addEventListener('click', () => {
      fileInput.click();
    });
    proSave.addEventListener('click', () => {
      this.saveProfileTemp();
    });
  }

  // Convert for Bankoo
  convertForBankoo() {
    // Convert Text
    // Convert Image
  }
  
  // Helper function to read a Blob as an ArrayBuffer
  readBlobAsArrayBuffer(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(blob);
    });
  }
  
  // Temp Save Profile
  async saveProfileTemp() {
    let proImg = this.shadow.getElementById("proImgSect");
    let proImg2 = this.shadow.getElementById("proImg")
    let proImg3 = this.shadow.getElementById("editImgIcon");
    let proText = this.shadow.getElementById("profileDesc");
    let proEdit = this.shadow.getElementById("proEdit");
    let proSave = this.shadow.getElementById("proSave");
    let proName = this.shadow.getElementById("proLabelName");
    let proIden = this.shadow.getElementById("proLabelIdentity");
    let proEmail = this.shadow.getElementById("proLabelEmail");
    const blob = this.imageBlob;
    
    // Convert blob to array of arrays to match the expected type
    const arrayBuffer = await this.readBlobAsArrayBuffer(blob);
    const CHUNK_SIZE = 1024; // set the chunk size as per your requirements
    const uint8Array = new Uint8Array(arrayBuffer);
    const byteChunks = [];
    for (let i = 0; i < uint8Array.length; i += CHUNK_SIZE) {
      byteChunks.push(uint8Array.slice(i, i + CHUNK_SIZE));
    }
    const vectorOfVectors = byteChunks.map(byteChunk => Array.from(byteChunk));

    const configuration = new Configuration({
      apiKey: VITE_ScogeI,
      });
      const openai = new OpenAIApi(configuration);
      var convertedToBankoo = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: `Convert ${proText.value} to speak from a futuristic sci-fi perspective`}],
          max_tokens: 40,
        }).catch((error) => {
          console.log(error);
        });     
        
      const openai2 = new OpenAIApi(configuration);
      const newImage = await openai2.createImage({
        prompt: convertedToBankoo.data.choices[0].message.content,
        n: 1,
        size: "512x512"
      });

    console.log('newImage:', newImage);
    document.getElementById("GenImgCont")?.remove();
    var ImageCont = document.createElement("div");
    var newImageCont = document.createElement("img");
    var genPara = document.createElement("p");
    genPara.innerHTML = convertedToBankoo.data.choices[0].message.content;
    newImageCont.src = newImage.data.data[0].url
    ImageCont.appendChild(newImageCont);
    ImageCont.appendChild(genPara);
    ImageCont.setAttribute("id", "GenImgCont");
    ImageCont.addEventListener('click', () => {
      ImageCont.remove();
    });
    document.getElementById("camera").appendChild(ImageCont);

    console.log('byteArray:', vectorOfVectors);
    // Alias
    nmcProps.alias = proName.value;
    // Email
    nmcProps.email = proEmail.value;
    // Identity
    nmcProps.identifier = proIden.value;
    // Earth Image
    // nmcProps.earthImage = [vectorOfVectors];
    // Bankoo Image
    // Earth Text
    nmcProps.earthText = [proText.value];
    // Bankoo Text
    nmcProps.bankooText = [convertedToBankoo.data.choices[0].message.content];
    // Send
    var prin = await window.ic.bitfinityWallet.getPrincipal();
    console.log(nmcProps);
    window.suUiActor.updateTemp(prin,0,[(nmcProps)])
    console.log("Saved Temp Profile");
  }

  // Open Beacon Messgae
  openBeaconMessage(e) {
    // Temp Filler
    var data = e.target.getAttribute("data-message");
    var selected = e.target;
    document.getElementById("beaconPan")?.remove();
    var beaconEl = document.createElement("div");
    var messageData = data;
    beaconEl.setAttribute("class", "beaconPanel");
    beaconEl.setAttribute("id", "beaconPan");
    beaconEl.innerHTML = `
    <div id="beaconBody">
        <div id="beaconTutHead">NEW DOMAIN BEACON!</div>
        <div id="beaconTutBody">${messageData}</div>
        <div id="beaconTutActions">
            <div class="beaconActions" id="beaconAction1">INVESTIGATE</div>
            <div class="beaconActions" id="beaconAction2">"OK, GOT IT!"</div>
        </div>
    </div>
    <div id="beaconTutIcon">
        <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
    </div>
    <div id="beaconBG">
        <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
        <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
    </div>
    `;
    document.getElementById("camera").appendChild(beaconEl);
    document.getElementById("beaconPan").style.display = "block";
    document.getElementById("beaconAction2")?.addEventListener("click", () => {
      document.getElementById("beaconPan")?.remove();
    });
    document.getElementById("beaconAction1")?.addEventListener("click", () => {
      document.getElementById("beaconPan")?.remove();
      selected.querySelector(".beaconIdenIcon").style.opacity = "0";
    });
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
    this.shadow.getElementById("fsToggle").addEventListener("click", () => {this.toggleFullScreen();});
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
          window.dtfullMenuOpen = false;
        });
      }
    });
    this.headerTabs = this.shadow.querySelectorAll(".men-active")
    this.headerTabs.forEach(element => {
      element.addEventListener("click", (e) => {
        this.switchMenuTabs(e);
      });
    });
    this.form = this.shadow.querySelector("#feedbackForm");
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.shadow.getElementById("menuLoadingScreen2").style.display = "grid";
      let data = new FormData(this.form);
      fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec", {
        method: "POST",
        body: data,
        mode: "cors"
      }).then(res => res.text()).then(data => {
        this.form.reset();
        this.shadow.getElementById("menuLoadingScreen2").style.display = "none";
        this.shadow.getElementById("feedbackHeadline").style.color = "var(--accent)";
        this.shadow.getElementById("feedbackHeadline").innerHTML = "Outstanding feedback citizen!";
        setTimeout(() => {
          this.shadow.getElementById("feedbackHeadline").style.color = "var(--primary)";
          this.shadow.getElementById("feedbackHeadline").innerHTML = "This City needs more people like you!";
        }, 3000);
      });
    });
    this.shadow.querySelector("#menuMessageBody").addEventListener("click", () => {
      var el = {
        target: this.shadow.querySelector("#fm-menu2")
      }
      var el2 = {
        target: this.shadow.querySelector("#menuBeacons")
      }
      this.shadow.querySelector("#uniMenuBeacons").click(el);
      this.switchMenuTabs(el);
      window.headlineSwtich(el2);
    });
    // this.shadow.querySelector("#switch23").addEventListener("click", () => {
    //   var el = {
    //     target: this.shadow.querySelector("#fm-menu3")
    //   }
    //   this.switchMenuTabs(el);
    // });
    this.shadow.getElementById("pinMenu").addEventListener("click", () => {
      pinMenu();
    });
    this.beacons = this.shadow.querySelectorAll(".beacon");
    this.beacons.forEach(element => {
      element.addEventListener("click", (e) => {
        console.log(e.target);
        this.openBeaconMessage(e);
      });
    });
    // CRUD
    this.shadow.getElementById("proEdit").addEventListener("click", (e) => {
      this.editProfile(e);
    });
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
              text-decoration: underline;
            }
            a:hover {
              color: var(--primary) !important;
              transition: 0.3s;
            }
            a:link {
              color: var(--alt);
            }
            a:visited {
              color: var(--alt);
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
              color: var(--primary) !important;
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
              border: .2px solid var(--primary);
              color: var(--secondary);
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
              grid-template-columns: 1fr;
              grid-template-rows: 80% 20%;
              align-items: center;
              justify-items: center;
            }
            #inventoryBody {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: ;
              overflow-x: auto;
              overflow-y: hidden;
            }
            #inventory-land-images, #invetory-enh-images {
              height: 100%;
              margin-left: 3%;
              margin-right: 3%;
              overflow-y: hidden;
              overflow-x: auto;
            }
            #landCardCont {
              width: auto;
              height: 100%;
              display: flex;
              flex-wrap: nowrap;
              overflow-x: auto;
            }
            .Inventory-Image-Cont {
              flex: 0 0 auto;
              margin-right: 1%;
              width: 20%;
              height: 98%;
              overflow: hidden;
              border-radius: 5%;
              cursor: pointer;
              border: 1px solid rgba(225, 225, 225, 0.8);
              box-shadow: 0 0 5px rgba(225, 225, 225, 0.9);
              transform: scale(.8);
              transition: all 0.3s ease;
              opacity: 0.8;
            }
            .Inventory-Image-Cont:hover {
              transform: scale(1);
              opacity: 1;
            }
            #landCardCont::-webkit-scrollbar {
              height: 0.5em;
            }
            .Inventory-Image-Cont img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .itHead {
              font-size: 1.1em;
            }
            .inventoryInnerText {
              font-family: "Garamond";
              color: var(--secondary);
            }
            #fm-menu3 {
              // opacity: .6;
            }
            .it1 {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 10% 40% 10% 40%;
              overflow: hidden;
            }
            .itHead {
              margin: 0px;
            }
            .it2 {
              width: 100%;
              height: 100%;
              overflow: auto;
              display: none;
            }
            .inventory-text {
              height: 99%;
              width: 94%;
              padding-right: 3%;
              padding-left: 3%;
              padding-top: 1%;
              font-family: "BS-R";
              font-size: 1em;
              text-align: justify;
              line-height: 1.5em;
              overflow: hidden;
            }
            #inventory-text > span {
              font-family: "Garamond";
              color: var(--secondary);
              letter-spacing: 1px;
            }
            #assetsCont {
              width: 94%;
              height: 94%;
              padding: 3%;
              display: flex;
              flex-wrap: wrap;
            }
            .Inventory-Assets-Cont {
              width: 24%;
              height: 150px;
              border: 1px solid rgba(225, 225, 225, 0.8);
              transform: scale(.9);
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .Inventory-Assets-Cont:hover {
              transform: scale(1);
            }
            .Inventory-Assets-Cont img {
              width: 100%;
              height: 100%;
              border-radius: 5%;
              object-fit: cover;
            }
            .selectedMenu {
              background-color: #ff002d;
              color: white;
            }
            .selectedMenu2 {
              background-color: #ff002d;
              color: white;
            }
            #uniMenuBeaconsSvg path {
              stroke: white;
            }
            #inventory-cta {
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: end;
              align-items: center;
            }
            #invCtaBut {
              width: 100px;
              height: 30px;
              color: var(--accent);
              font-family: "BS-R";
              margin-right: 30px;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              transition: all 0.5s ease;
              cursor: pointer;
              border: 1px solid var(--accent);
              border-radius: 5px;
            }
            #invCtaBut:hover {
              background-color: var(--accent);
              color: black;
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
            #menuMessageBody {
              font-size: .7em;
              font-family: "Garamond";
              margin-top: 30px;
              margin-bottom: 30px;
              transition: all 0.5s ease;
              text-decoration: underline;
              cursor: pointer;
              color: var(--secondary);
              letter-spacing: 1px;
            }
            #menuMessageBody:hover {
              color: var(--primary);
            }
            #menuMessageCTA {
              color: var(--accent);
              font-family: "BS-R";
              border: 1px solid var(--accent);
              font-size: .9em;
              padding-top: 8px;
              padding-bottom: 8px;
              border-radius: 5px;
              transition: all 0.5s ease;
              cursor: pointer;
            }
            #menuMessageCTA a {
              text-decoration: none !important;
            }
            #menuMessageCTA:hover {
              background-color: var(--accent);
              color: black !important;
            }
            #menuMessageCTA:hover a {
              color: black !important;
            }
            .LoadBox {
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
            .loadIcon {
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
            .loadinScreen {
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
            #fm-beacons {
              width: 100%;
              height: 84%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-cotent: start;
            }
            .beacon-tabs {
              width: 95%;
              height: 100%;
              padding-left: 3%;
              color: var(--secondary);
            }
            .ht1 {
              display: grid;
            }
            .ht2 {
              width: 80%;
              height: 95%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 25% 1fr;
              align-items: start;
              justify-cotent: start;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 5%;
              font-size: 1em;
              letter-spacing: 1px;
              line-height: 1.5em;
              text-align: justify;
            }
            .ht3 {
              width: 80%;
              height: 95%;
              display: none;
              grid-template-columns: 1fr;
              grid-template-rows: 25% 1fr;
              align-items: start;
              justify-cotent: start;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 5%;
              font-size: 1em;
              letter-spacing: 1px;
              line-height: 1.5em;
              text-align: justify;
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
              font-family: "Garmond";
              line-height: 1.5em;
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
              height: 70%;
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
              display: none;
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
              border-radius: 10px;
              position: relative;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              cursor: pointer;
              overflow: hidden;
            }
            #proImgSect:hover {
              animation: editBlinking 2s infinite;
            }
            #proImg {
              width: 100%;
              height: auto;
            }
            #profileDesc {
              width: 96%;
              height: 88%;
              padding-top: 2%;
              padding-left: 2%;
              padding-right: 2%;
              font-family: "Garmond";
              background-color: transparent;
              border: none;
              text-align: left;
              readonly: true;
              pointer-events: none;
              font-size: 1em;
            }
            #profileDesc:focus {
              outline: none;
              caret-color: var(--primary);
            }

            @keyframes editBlinking {
              0% {
                border-left: 1px solid var(--accent);
                border-right: 1px solid var(--accent);
              }
              50% {
                border-left: 1px solid var(--primary);
                border-right: 1px solid var(--primary);
              }
              100% {
                border-left: 1px solid var(--accent);
                border-right: 1px solid var(--accent);
              }
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
              border: 2px solid var(--accent);
              border-radius: 5px;
              color: var(--accent);
              cursor: pointer;
              margin-left: 5%;
              transition: all .3s ease-in-out;
            }
            .editButs:hover {
              background-color: var(--accent);
              color: black !important;
            }
            #proSave {
              opacity: 50%;
              pointer-events: none;
            }
            .proInfoSect {
              width: 95%;
              height: auto;
              display: grid;
              grid-template-columns: 40% 60%;
              grid-template-rows: 1fr;
              padding-left: 5%;
            }
            .proInfoInput {
              font-size: .8em;
              text-align: right;
              color: var(--secondary);
              border-radius: 5px;
              margin-bottom: 2px;
              border: none;
              background-color: transparent;
              resize: none;
              width: 100%;
              height: 16px;
            }
            .proInfoInput:focus {
              outline: none;
            }
            .proLabel {
              user-select: none;
              font-size: .9em;
            }
            #profileDesc {
              color: var(--secondary);
            }
            #notiTogSect {
              opacity: 30%;
            }
            #notiToggle {
              user-select: none;
              display: flex;
            }
            .getNew {
              box-shadow: 0 0 5px var(--primary);
              border: 1px solid var(--primary);
              color: var(--primary);
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            .getNew:hover {
              color: var(--secondary);
              font-family: "BS-B";
            }
            #refresh {
              position: absolute;
              z-index: 10;
              left: 0%;
              top: 0%;
              width: 3px;
              height: 100%;
              border-left: 1px solid rgba(255,255,255,0.08);
              box-shadow: 0 0 40px rgba(255,255,255,0.8);
              background-color: rgba(255,255,255,0.08);
              margin:0px;
              animation: refresh 20s infinite;
              animation-timing-function: linear;
              pointer-events: none;
            }
            @keyframes refresh {
              0% {
                transform: translateX(0%);
                opacity: 0%;
              } 
              2% {
                opacity: 100%;
              }
              98% {
                opacity: 100%;
              }
              100% {
                transform: translateX(760px);
                opacity: 0%;
              }
            }
            .beacon {
              width: 85%;
              height: 50px;
              margin-right: 5%;
              display: grid;
              cursor: pointer;
              grid-template-columns: 40% 60%;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              border-top: 1px solid var(--accent);
              background-color: rgba(0,0,0,0.5);
              font-family: "BS-R";
              padding-left: 5%;
              padding-right: 5%;
              margin-bottom: 10px;
              transition: 0.3s all ease-in-out;
              opacity: 1;
            }

            .beacon:hover {
              border-bottom: 1px solid var(--primary);
              border-left: 1px solid var(--primary);
              border-right: 1px solid var(--primary);
            }

            .beaconOrigin {
              height: 100%;
              width: 100%;
              display: grid;
              grid-template-columns: 5% 95%;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              user-select: none;
              pointer-events: none;
            }
            .beaconPreview {
              height: 100%;
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: end;
              align-items: center;
              font-size: 0.7em;
              text-align: right;
              user-select: none;
              pointer-events: none;
            }
            .beaconIdenIcon {
              height: 100%;
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              font-size: 1.5em;
              color: var(--primary);
              user-select: none;
              pointer-events: none;
            }
            .beaconSender {
              color: var(--accent);
              font-size: 0.9em;
              user-select: none;
              pointer-events: none;
            }
            #beaconNoti {
              position: absolute;
              width: 20%;
              height: auto;
              top: 30px;
              left: 280px;
              animation: rotate 10s infinite linear;
              display: none;
            }
            @keyframes rotate {
              0% { transform: rotate(0deg); } 
              100% { transform: rotate(360deg); }
            }
            #editImgIcon {
              position: absolute;
              height: 30%;
              fill: var(--accent);
              z-index: 10;
              display: none;
              transition: 0.3s all ease-in-out;
            }

            #proImgSect:hover > svg  {
              fill: var(--accent);
              height: 35%;
            }
         </style>
         <div id="uniMenu">
         <div id="beaconNoti">
          <svg id="beaconNotiSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
         </div>
            <div id="refresh"></div>
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
              <div id="uniMenuBeacons" class="menuTabs selectedMenu2">
                <div>
                  <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuBeacons">Beacons</div>
              </div>
              <div id="uniMenuSettings" class="menuTabs">
                <div>
                  <svg id="uniMenuSettingsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M61.26,13.89H24a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,13.89Z"/><path class="cls-1" d="M18.21,13.89H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,13.89Z"/><path class="cls-1" d="M61.26,28.27H46.64a.8.8,0,0,1-.8-.8.79.79,0,0,1,.8-.79H61.26a.79.79,0,0,1,.8.79A.8.8,0,0,1,61.26,28.27Z"/><path class="cls-1" d="M42.62,28.27H4.28a.79.79,0,0,1-.79-.8.79.79,0,0,1,.79-.79H42.62a.79.79,0,0,1,.8.79A.8.8,0,0,1,42.62,28.27Z"/><path class="cls-1" d="M61.26,42.64H22.19a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,42.64Z"/><path class="cls-1" d="M18.21,42.64H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,42.64Z"/><path class="cls-1" d="M18.21,20.28a.79.79,0,0,1-.79-.8V5.37a.79.79,0,0,1,.79-.8.8.8,0,0,1,.8.8V19.48A.8.8,0,0,1,18.21,20.28Z"/><path class="cls-1" d="M18.21,49.7a.79.79,0,0,1-.79-.8V34.79a.79.79,0,0,1,.79-.79.79.79,0,0,1,.8.79V48.9A.8.8,0,0,1,18.21,49.7Z"/><path class="cls-1" d="M46.64,34.59a.8.8,0,0,1-.8-.8V19.48a.79.79,0,0,1,.8-.79.79.79,0,0,1,.79.79V33.79A.79.79,0,0,1,46.64,34.59Z"/></svg>  
                </div>
                <div class="uniMenuTxt" id="menuSettings">Settings</div>
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
                  <div id="menuMessageHead">WALLET MISSING</div>
                  <div id="menuMessageText">You'll need one to continue.</div>
                  <div id="menuMessageBody">Learn more about wallets here.</div>
                  <div id="menuMessageCTA"><a href="https://plugwallet.ooo/" target="_blank">GET WALLET</a></div>
                </div>
              </div>
              <div id="menuLoadingScreen" class="LoadBox">
                <div id="loading" class="loadinScreen">LOADING...</div>
                <div class="loadIcon"></div>
              </div>
              <div id="fm-header">
                <div id="fm-header-headline">
                  <span id="fm-menu1" class="men-active ht selectedMenu">All</span>
                  <span id="fm-menu2" class="men-active ht">Domain</span>
                  <span id="fm-menu3" class="men-active ht">Citizen</span>
                </div>
                <div id="uniMenuIcon2">
                  &#8682;
                </div>
              </div>
              <div id="fm-enhancements">
                <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/universe/nft-shop.webp" alt="NFT Shop" id="nftShop">
              </div>
              <div id="fm-inventory">
                <div id="inventoryBody">
                  <div class="inventory-tabs it1">
                    <div class="inventory-text">
                      <span class="itHead">Land:</span>
                      <span class="inventoryInnerText">
                       you own.
                      </span>
                    </div>
                    <div id="inventory-land-images">
                      <div id="landCardCont">
                          <div class="Inventory-Image-Cont getNew">
                            ADD NEW
                          </div>
                      </div>
                    </div>
                    <div class="inventory-text">
                      <span class="itHead">Enhancements:</span>
                      <span class="inventoryInnerText">
                       you have purchased.
                      </span>
                    </div>
                    <div id="invetory-enh-images">
                      <div id="landCardCont">
                          <div class="Inventory-Image-Cont getNew">
                            ADD NEW
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="inventory-tabs it2">
                    <div id="assetsCont">
                    </div>
                  </div>
                  <div class="inventory-tabs it3" style="display:none;"></div>
                </div>
                <div id="inventory-cta">
                  <div id="invCtaBut">USE</div>
                </div>
              </div>
              <div id="fm-profile">
                <div id="menuLoadingScreen3" class="LoadBox">
                  <div id="loading" class="loadinScreen">CONNECTING...</div>
                  <div class="loadIcon"></div>
                </div>
                <div id="profileMain">
                  <div id="proImgSect">
                  <svg version="1.1" id="editImgIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M400,99c-77.2,0-140,62.8-140,140c0,37.5,14.8,80,39.5,113.7c28,38.2,63.7,59.2,100.4,59.2c36.8,0,72.5-21,100.4-59.2
                              C525.2,318.9,540,276.4,540,239C540,161.8,477.2,99,400,99z M400,382c-26.6,0-54.5-17.1-76.4-47c-20.8-28.4-33.7-65.2-33.7-96
                              c0-60.7,49.4-110.1,110.1-110.1S510.1,178.3,510.1,239C510.1,302,458.3,382,400,382z"/>
                            <path d="M400,0C217.6,0,69.2,148.4,69.2,330.8c0,182.4,148.4,330.8,330.8,330.8s330.8-148.4,330.8-330.8S582.4,0,400,0z
                                M400,631.8c-59.9,0-115.7-17.6-162.6-47.8c1.6-45.7,22.3-88.5,57.3-118.3c13.9-11.8,34.2-13.1,50.6-3.2
                              c17.6,10.7,36.1,16.1,54.7,16.1c18.7,0,37.1-5.4,54.7-16.1c16.3-9.9,36.6-8.6,50.4,3.1c35,29.7,55.9,72.7,57.5,118.4
                              C515.7,614.2,459.9,631.8,400,631.8z M590.8,563.4c-6.4-46.7-29.9-89.7-66.3-120.6c-23.7-20-57.9-22.4-85.2-5.8
                              c-25.8,15.6-52.7,15.6-78.5,0c-27.3-16.6-61.6-14.2-85.4,6c-36.4,30.9-59.7,73.8-66.2,120.5C142,508.1,99,424.4,99,330.8
                              c0-166,135-301,301-301c165.9,0,301,135,301,301C701,424.4,658,508.2,590.8,563.4z"/>
                            <path d="M602.4,701H197.6c-8.2,0-14.9,6.7-14.9,14.9c0,8.2,6.7,14.9,14.9,14.9h404.7c8.2,0,14.9-6.7,14.9-14.9
                              C617.3,707.6,610.6,701,602.4,701z"/>
                            <path d="M602.4,770.2H197.6c-8.2,0-14.9,6.7-14.9,14.9s6.7,14.9,14.9,14.9h404.7c8.2,0,14.9-6.7,14.9-14.9
                              C617.3,776.8,610.6,770.2,602.4,770.2z"/>
                          </g>
                        </g>
                      </g>
                    </svg>               
                    <img id="proImg" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/TAOS-CITY-IDC.png">
                  </div>
                  <div id="proInfo">
                    <div class="proInfoSect">
                      <div class="proLabel">Alias:</div>
                      <textarea id="proLabelName" class="proInfoInput">Damion</textarea>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Identifier:</div>
                      <textarea id="proLabelIdentity" class="proInfoInput">Male</textarea>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Email:</div>
                      <textarea id="proLabelEmail" class="proInfoInput">blank@blank.com</textarea>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Rank:</div>
                      <div id="proLabelRank" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Progress:</div>
                      <div id="proLabelProgress" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Power Ups:</div>
                      <div id="proLabelEnh" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Class:</div>
                      <div id="proLabelClass" class="proInfoInput">-</div>
                    </div>
                    <div class="proInfoSect">
                      <div class="proLabel">Domains:</div>
                      <div id="proLabelDom" class="proInfoInput">-</div>
                    </div>
                  </div>
                </div>
                  <textarea id="profileDesc" placeholder="Enter a description for your city.">iWelcome to T.A.O.S City. This interface will allow you to view and update your city profile and developments. No need to come down to City Central!
                  </textarea>
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
                    <input type="checkbox" id="fsToggle">
                    <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div class="settingsSections" id="notiTogSect">
                  <div>Notifications</div>
                  <div class="toggleBoxes">
                    <label class="switch">
                    <input type="checkbox" id="notiToggle">
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
              <div id="fm-beacons">
                <div class="beacon-tabs" id="beaconsBody">
                  <div class="beacon tut">
                    <div class="beaconOrigin">
                      <div class="beaconIdenIcon">!</div>
                      <div class="beaconSender">CITY-CENTRAL</div>
                    </div>
                    <div class="beaconPreview">
                      Welcome to T.A.O.S City. Learn how to...
                    </div>
                  </div>
                  <div class="beacon tut" data-message="Hello Test">
                    <div class="beaconOrigin">
                      <div class="beaconIdenIcon">!</div>
                      <div class="beaconSender">CITY-CENTRAL</div>
                    </div>
                    <div class="beaconPreview">
                      Register your Digisette at...
                    </div>
                  </div>
                  <div class="beacon tut">
                    <div class="beaconOrigin">
                      <div class="beaconIdenIcon">!</div>
                      <div class="beaconSender">CITY-CENTRAL</div>
                    </div>
                    <div class="beaconPreview">
                      Public enhancements are now...
                    </div>
                  </div>
                </div>
                <div class="beacon-tabs ht2">
                </div>
                <div class="beacon-tabs ht3">
              </div>
              </div>
              <div id="fm-feedback">
                <div id="menuLoadingScreen2" class="LoadBox">
                  <div id="loading" class="loadinScreen">SENDING...</div>
                  <div class="loadIcon"></div>
                </div>
                <div id="feedbackHeadline">Help make T.A.O.S City better.</div>
                <form id="feedbackForm">
                  <input type="email" name="Email" id="feedbackEmailInput" placeholder="Email" maxlength="45">
                  <textarea id="feedbackInput" name="FeedbackText" placeholder="Enter your feedback here..." maxlength="320"></textarea>
                  <input id="feedbackButton" type="submit">
                </form>
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
