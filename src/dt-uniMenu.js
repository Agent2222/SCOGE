// import { SoundtrackManager } from "./soundtrack.js";
import { story } from "./game/SceneManager.js";
import { newScenario, loading, endLoading, dragElement } from "./universe.js";
import { getNFTCollections } from "./wallets.js";
import { connectError } from "./wallets.js";
import { gsap } from "gsap";
// import { Configuration, OpenAIApi } from "openai";
import { myFirstDrug } from "./universe.js";

import comGlove from "../assets/images/icons/combat-glove.png";
import comAvatar from "../assets/images/icons/combat-avatar.png";
import mainLogo from "../assets/images/sl-r.png";

window.dtmenuOpen = false;
window.dtfullMenuOpen = false;

const dsheet = "https://script.google.com/macros/s/AKfycbzHUtfeNysmMSZvlC7tnfYhpgs_EU_3kx9_6H_VV6le8tPyR4Vlzs8SlfES_8pbK0nb2w/exec";

const VITE_ScogeI = import.meta.env.VITE_ScogeI;
// const soundtrack2 = new SoundtrackManager();
const fleekP = import.meta.env.VITE_fleekP;
const fleekS = import.meta.env.VITE_fleekS;

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
    this.domainIntroSeen = true;
    this.beaconInterval = null;
    this.shadow = this.attachShadow({ mode: "open" });
    this.defaultSource = `<img src="https://storage.scoge.co/scogeUniverse/uniMenu/DIGISHOP-1.png" alt="NFT Shop" id="nftShop">`
    this.beacons = null;
    this.digiLink = "https://yuku.app/launchpad/hmz4w-fiaaa-aaaah-admlq-cai";
    this.patreonLink = "https://www.patreon.com/_scoge_";
    this.variableDataMessages = [
      {
        name: "Intro",
        from: "CITY-CENTRAL",
        head: "ROM ACTIVATED",
        preview: "Your Digisette ROM is activated!",
        message: "You are currently using the SCOGÉ Digisette ROM, providing limited access to their latest collections and most recent beacons.<br><br>Full access is granted to Digisette holders—the new guard of T.A.O.S City Lords. Visit the shop to *purchase your Digisette today. (*Select garments come equipped with a Digisette).",
        buttonText: "HOLO-SUPPORT",
        action: "controls()",
      },
      {
        name: "Intro",
        from: "CITY-CENTRAL",
        head: "DIGISETTE SYSTEM ONLINE",
        preview: "Welcome to Digisette!",
        message: "Welcome to the SCOGÉ Digisette System. Your Digisette is now online and ready for use.<br><br>Contact our Holo-Support team below for control assistance.",
        buttonText: "HOLO-SUPPORT",
        action: "controls()",
      },
      {
        name: "Video",
        from: "UNKNOWN",
        head: "H/L ZONE 5",
        preview: "Holding / Loading Zone 5",
        message: `<iframe id="ytVideo" width="100%" height="315"  style="z-index:-1; user-select:none;" src="https://www.youtube-nocookie.com/embed/ZxxTNwgL37s?si=fBzvjh4a2fzZ4M0V&amp;controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        buttonText: "VIEW",
        action: "viewRR()",
      }
    ];
  }

  get uniMenu() {
    return this.getAttribute("uniMenu");
  }

  set uniMenu(val) {
    this.setAttribute("uniMenu", val);
  }

  static get observedAttributes() {
    return ["unimenu", "fullscreen"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (newVal === "taoscity") {
      this.loggedIn();
      this.headerTabs.forEach((element) => {
        element.addEventListener("click", (e) => {
          this.switchMenuTabs(e);
        });
      });
    // if (prop === "fullscreen" && newVal === "true") {
    //   this.shadow.getElementById("fsSlider").classList.add("active");
    // } else {
    //   this.shadow.getElementById("fsSlider").classList.remove("active");
    // }
      // Remove offline message
   }
    // if (newVal === "loggedIn") {
    //   this.variableDataMessages.shift();
    //   this.render();
    //   this.loggedIn();
    //   this.headerTabs.forEach((element) => {
    //     element.addEventListener("click", (e) => {
    //       this.switchMenuTabs(e);
    //     });
    //   });
    //   // Remove offline message
    // }
  }

  updateVarBeacon() {
    var beaconPage = this.shadow.getElementById("beaconsBody");
    var beaconEl = document.createElement("div");
    beaconEl.setAttribute("class", "beacon tut");
    beaconEl.id = "newvarBeacon";
    beaconEl.setAttribute("data-headline", this.variableDataMessages[1].head);
    beaconEl.setAttribute("data-message", this.variableDataMessages[1].message);
    beaconEl.innerHTML = `
        <div class="beaconOrigin">
          <div class="beaconIdenIcon">!</div>
          <div class="beaconSender">${this.variableDataMessages[0].from}</div>
        </div>
        <div class="beaconPreview">
          ${this.variableDataMessages[0].preview}
        </div>`
    beaconPage.appendChild(beaconEl);
    beaconEl.addEventListener("click", (e) => {
      this.openBeaconMessage(e);
      setTimeout(() => {
        var ba1 = document.getElementById("beaconAction1");
        ba1.innerHTML = this.variableDataMessages[1].buttonText;
        ba1.addEventListener("click", () => {
          story("Controls");
        });
      }, 300);
    });
  }

  blinkingBeacon() {
    this.shadow.getElementById("menuBeacons").innerHTML = "New Beacon!";
    const beaconIcon = this.shadow.getElementById("uniMenuBeacons");
    const beaconIcon2 = this.shadow.getElementById("uniMenuBeaconsSvg").childNodes;
  
    // Store the interval ID as an instance property
    this.beaconInterval = setInterval(() => {
      beaconIcon.style.animation = "beaconBlinking 1s infinite";
      beaconIcon2.forEach((icon) => {
        icon.style.animation = "beaconBlinking2 1s infinite";
      });
    }, 1000);
  }
  
  stopBlinkingBeacon() {
    console.log("stopBlinkingBeacon");
    this.shadow.getElementById("menuBeacons").innerHTML = "Beacons";
    const beaconIcon = this.shadow.getElementById("uniMenuBeacons");
    const beaconIcon2 = this.shadow.getElementById("uniMenuBeaconsSvg").childNodes;
  
    // Clear the interval stored in this.beaconInterval
    clearInterval(this.beaconInterval);
  
    // Remove the animation styles
    beaconIcon.style.animation = "none";
    beaconIcon2.forEach((icon) => {
      icon.style.animation = "none";
    });

    document.getElementById("getUniMenu").shadowRoot.querySelector(".blinking").style.animation = "none";
  }

  loggedIn() {
      this.updateVarBeacon();
      // soundtrack2.loop("pegasus");
      // soundtrack2.play("pegasus");
      var newBeacon = this.shadow.getElementById("newvarBeacon")
      this.shadow.getElementById("varBeacon")?.replaceWith(newBeacon);
    this.shadow.getElementById("uniMenuExit").style.display = "none";
    this.shadow.getElementById("uniMenuCloudHall").style.display = "grid";
    // Temp Domain Dev Show
    this.shadow.querySelectorAll(".romOffline").forEach((off) => {
      off.style.display = "none";
    });
    this.shadow.getElementById("domainUnDev").style.display = "block";
    this.shadow.getElementById("unDev1").innerHTML = "WELCOME TO YOUR DIGISETTE SYSTEM";
    // Temp
    myFirstDrug();
    // this.shadow.getElementById("beaconNoti").style.display = "block";
    var beaconPage = this.shadow.getElementById("beaconsBody");
    var beaconEl = document.createElement("div");
    beaconEl.setAttribute("class", "beacon tut");
    beaconEl.setAttribute("data-headline", "UNKNOWN ITEM DETECTED");
    beaconEl.setAttribute("data-message", "An unknown item has been detected on you.<br>Unable to identify its origin. Someone was able to get pass our sensors.<br><br> Classification: Trash.<br><br>Sending a snapshot to SCOGÉ HQ for further analysis.");
    beaconEl.innerHTML = `<div class="beaconOrigin">
    <div class="beaconIdenIcon">!</div>
    <div class="beaconSender">SYSTEM ALERT</div>
  </div>
  <div class="beaconPreview">
    Unknown item detected.
  </div>`;
    beaconEl.addEventListener("click", (e) => {
      this.openBeaconMessage(e);
      // Add scenario
    });
    beaconPage.appendChild(beaconEl);
  }

  parseCSV(csvData) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const result = [];
  
    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(',');
      if (currentLine.length !== headers.length) {
        continue; // Skip lines with mismatched data
      }
      const rowData = {};
      for (let j = 0; j < headers.length; j++) {
        const value = currentLine[j].trim();
        rowData[headers[j]] = value;
      }
      result.push(rowData);
    }
  
    return result;
  }

  musicLevel() {
    this.shadow.getElementById("myRange2").addEventListener("input", (e) => {
      switch (e.target.value) {
        case "0":
        // soundtrack2.setVolume("pegasus", 0.0);
        // soundtrack2.loop("pegasus");
        // soundtrack2.pause("pegasus");
        e.target.value = 0;
        break;
        case "1":
        // soundtrack2.setVolume("pegasus", 0.1);
        // soundtrack2.play("pegasus");
        e.target.value = 1;
        break;
        case "2":
        // soundtrack2.setVolume("pegasus", 0.25);
        e.target.value = 2;
        break;
        case "3":
        // soundtrack2.setVolume("pegasus", 0.50);
        e.target.value = 3;
        break;
        case "4":
        // soundtrack2.setVolume("pegasus", 0.75);
        e.target.value = 4;
        break;
        case "5":
        // soundtrack2.setVolume("pegasus", 1);
        e.target.value = 5;
        break;
      }
    });
  }

  // Beacons
  // async getBeacons() {
  //   fetch('https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeData/beacons1.csv')
  // .then(response => response.text())
  // .then(data => {
  //   // Parse and process the data as needed
  //   this.beacons = this.parseCSV(data);
  //   var beaconPage = this.shadow.getElementById("beaconsBody")
  //   this.beacons.forEach((beacon) => {
  //     var beaconEl = document.createElement("div");
  //     beaconEl.setAttribute("class", "beacon tut");
  //     beaconEl.setAttribute("data-headline", beacon.Headline);
  //     beaconEl.setAttribute("data-message", beacon.Body);
  //     beaconEl.innerHTML = `
  //     <div class="beaconOrigin">
  //       <div class="beaconIdenIcon">!</div>
  //       <div class="beaconSender">${beacon.Sender}</div>
  //     </div>
  //     <div class="beaconPreview">
  //       ${beacon.Preview}
  //     </div>
  //   </div>
  //     `;
  //     beaconEl.addEventListener("click", (e) => {
  //       this.openBeaconMessage(e);
  //     });
  //     beaconPage.appendChild(beaconEl);
  //   });
  // })
  // .catch(error => {
  //   console.error(error);
  // });
  // }

  // open menu
  toggleMenu(e) {
    const menu = this.shadow.querySelector("#uniMenu");
    const menuIcon = this.shadow.querySelector("#uniMenuIcon");
    const menuItems = this.shadow.querySelector("#menuItems");
    const menuHeader = this.shadow.querySelector("#menuHeader");
    const refresh = this.shadow.querySelector("#refresh");
    var bagLength = document.getElementById("shop2")?.bag.length;
    var checkoutBuilt = document.getElementById("shop2")?.checkoutBuilt;
    if (checkoutBuilt === true) {
      document.getElementById("shop2").hideCheckout();
      document.getElementById("shop2").endCoSession();
    }
    if (bagLength > 0) {
      if (document.getElementById("altBagIcon")) {
        document.getElementById("altBagIcon").style.display = "grid";
      }
    }
    // Mobile Menu
    if (window.isMobile === true) {
      if (window.dtmenuOpen === false) {
        document.getElementById("shop2").setAttribute("active","false");
        this.closeFullMenu();
        document.getElementById("shop2").shadowRoot.querySelector("#productInfo").style.pointerEvents = "none";
        // menuIcon.style.transform = "scale(2.2) rotate(180deg) translateX(10px)";
        var m1 = this.shadowRoot.getElementById("mi1");
        var m2 = this.shadowRoot.getElementById("mi2");
        var m3 = this.shadowRoot.getElementById("mi3");
        gsap.to(m1, {
          duration: 0.5,
          rotate: 45,
          translateY: 12
        })
        gsap.to(m3, {
            duration: 0.5,
            rotate: -45,
            translateY: -12
        })
        gsap.to(m2, {
            opacity: 0
        })
        menuHeader.style.height = "20%";
        setTimeout(() => {
          menu.style.maxHeight = "80%";
          menu.style.top = "10svh";
        }, 150);
        window.dtmenuOpen = true;
        menu.style.transition = "all 0.3s ease-in-out";
        this.shadowRoot.getElementById("uniMenuShop").style.visibility = "visible";
        return;
      } else {
        // Desktop Menu
        this.closeFullMenu();
        menuHeader.style.height = "100%";
        menu.style.maxHeight = "12%";
        if (e?.target.id === "menuEnhancements") {
          menu.style.top = "2svh";
        } else if (e?.target.id === "uniMenuShop") {
          menu.style.top = "2svh";
        } else if (e?.target.id === "uniMenuShopSvg") {
          menu.style.top = "2svh";
        } else if (e?.target.id === "uniMenuIcon") {
          menu.style.top = "2svh";
        } else {
          menu.style.top = "75svh";
        }
        var mm1 = this.shadowRoot.getElementById("mi1");
        var mm2 = this.shadowRoot.getElementById("mi2");
        var mm3 = this.shadowRoot.getElementById("mi3");
        gsap.to(mm1, {
          duration: 0.5,
          rotate: 0,
          translateY: 0
        })
        gsap.to(mm3, {
            duration: 0.5,
            rotate: 0,
            translateY: 0
        })
        gsap.to(mm2, {
            opacity: 1
        })
        menuItems.style.maxHeight = "0%";
        menuItems.style.overflow = "hidden";
        window.dtmenuOpen = false;
        refresh.style.animationPlayState = "paused";
        this.shadowRoot.getElementById("uniMenuShop").style.visibility = "hidden";
        return;
      }
    } else {
      // Desktop Menu
      var moveMenu = document.getElementById("getUniMenu").shadowRoot?.getElementById("uniMenu");
      // dragElement(moveMenu, true);
      if (window.dtmenuOpen === false) {
        this.closeFullMenu();
        var mmm1 = this.shadowRoot.getElementById("mi1");
        var mmm2 = this.shadowRoot.getElementById("mi2");
        var mmm3 = this.shadowRoot.getElementById("mi3");
        gsap.to(mmm1, {
          duration: 0.5,
          rotate: 0,
          translateY: 0
        })
        gsap.to(mmm3, {
            duration: 0.5,
            rotate: 0,
            translateY: 0
        })
        gsap.to(mmm2, {
            opacity: 1
        })
        // menu.style.transition = "all 0.3s ease-in-out";
        // menu.style.maxHeight = "50%";
        setTimeout(() => {
          menuHeader.style.height = "100%";
          window.dtmenuOpen = true;
          menu.setAttribute("class", "collapsed");
        }, 150);
        this.shadowRoot.getElementById("uniMenuShop").style.opacity = "0";
        return;
      } 
      else {
        document.getElementById("shop2").shopOpen = false;
        document.getElementById("shop2").bagOpen = false;
        document.getElementById("shop2").largeGalOpen = false;
        document.getElementById("shop2").checkoutOpen = false;
        document.getElementById("shop2").setAttribute("active","false");
        dragElement(moveMenu, true);
        this.closeFullMenu();
        menuHeader.style.height = "20%";
        setTimeout(() => {
          menu.removeAttribute("class", "collapsed");
        }, 150);
        var mmmm1 = this.shadowRoot.getElementById("mi1");
        var mmmm2 = this.shadowRoot.getElementById("mi2");
        var mmmm3 = this.shadowRoot.getElementById("mi3");
        gsap.to(mmmm1, {
          duration: 0.5,
          rotate: 45,
          translateY: 12
        })
        gsap.to(mmmm3, {
            duration: 0.5,
            rotate: -45,
            translateY: -12
        })
        gsap.to(mmmm2, {
            opacity: 0
        })
        menuItems.style.maxHeight = "0%";
        menuItems.style.overflow = "hidden";
        window.dtmenuOpen = false;
        refresh.style.animationPlayState = "paused";
        this.shadowRoot.getElementById("uniMenuShop").style.opacity = "1";
        return;
      }
    }
  }
  // open full menu
  openFullMenu(e) {
    const menu = this.shadow.querySelector("#uniMenu");
    const fullMenu = this.shadow.querySelector("#fullMenu");
    const fullMenuBg = this.shadow.querySelector("#fullMenuBG");
    const menuItems = this.shadow.querySelector("#menuItems");
    const refresh = this.shadow.querySelector("#refresh");
    if (window.isMobile === true) {
      this.toggleMenu(e);
      this.shadow.appendChild(fullMenu);
      if (window.dtfullMenuOpen === false) {
        // menu.style.overflowX = "visible";
        fullMenu.style.height = "100%";
        fullMenuBg.style.transform = "scaleY(1)";
        window.dtfullMenuOpen = true;
        refresh.style.display = "block";
        refresh.style.animationPlayState = "running";
        return;
      }
      this.shadow.getElementById("beaconNoti").style.display = "none";
    } else {
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
  }

  closeFullMenu() {
    const menu = this.shadow.querySelector("#uniMenu");
    const fullMenu = this.shadow.querySelector("#fullMenu");
    const fullMenuBg = this.shadow.querySelector("#fullMenuBG");
    const refresh = this.shadow.querySelector("#refresh");
    if (window.isMobile === true) {
      //  Mobile
      fullMenu.style.height = "0%";
      fullMenuBg.style.transform = "scaleY(0)";
      refresh.style.animationPlayState = "paused";
      refresh.style.display = "none";
      window.dtfullMenuOpen = false;
    } else {
      // Desktop
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
  }

  // Send Feedback
  sendFeedback(event) {
    // Event.preventDefault(); // Prevent the form from being submitted the traditional way
    event.preventDefault();
    var email = this.shadow.getElementById("feedbackEmailInput").value;
    var feedback = this.shadow.getElementById("feedbackInput").value;
    // Validate the form values here, if necessary
    // Submit the form
    this.shadow.getElementById("feedbackForm").submit();
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.getElementById("getUniMenu").setAttribute("fullscreen", "true");
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        document.getElementById("getUniMenu").setAttribute("fullscreen", "false");
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
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        // Do something with the file, e.g., upload it to a server or display it
        console.log("Selected file:", file);

        // Display the selected image in the 'proImg' element
        const reader = new FileReader();
        reader.onload = (e) => {
          const blob = new Blob([e.target.result], { type: file.type });
          console.log("Blob:", blob);
          const url = URL.createObjectURL(blob);
          proImg2.src = url;
          proImg2.style.filter = "brightness(1)";

          // Store the Blob object for later use (e.g., for saving)
          this.imageBlob = blob;
        };

        reader.readAsArrayBuffer(file);
      }
    });
    proImg.addEventListener("click", () => {
      fileInput.click();
    });
    proSave.addEventListener("click", () => {
      // this.saveProfileTemp();
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
  // async saveProfileTemp() {
  //   let proImg = this.shadow.getElementById("proImgSect");
  //   let proImg2 = this.shadow.getElementById("proImg");
  //   let proImg3 = this.shadow.getElementById("editImgIcon");
  //   let proText = this.shadow.getElementById("profileDesc");
  //   let proEdit = this.shadow.getElementById("proEdit");
  //   let proSave = this.shadow.getElementById("proSave");
  //   let proName = this.shadow.getElementById("proLabelName");
  //   let proIden = this.shadow.getElementById("proLabelIdentity");
  //   let proEmail = this.shadow.getElementById("proLabelEmail");
  //   const blob = this.imageBlob;

  //   // Convert blob to array of arrays to match the expected type
  //   const arrayBuffer = await this.readBlobAsArrayBuffer(blob);
  //   const CHUNK_SIZE = 1024; // set the chunk size as per your requirements
  //   const uint8Array = new Uint8Array(arrayBuffer);
  //   const byteChunks = [];
  //   for (let i = 0; i < uint8Array.length; i += CHUNK_SIZE) {
  //     byteChunks.push(uint8Array.slice(i, i + CHUNK_SIZE));
  //   }
  //   const vectorOfVectors = byteChunks.map((byteChunk) =>
  //     Array.from(byteChunk)
  //   );

  //   const configuration = new Configuration({
  //     apiKey: VITE_ScogeI,
  //   });
  //   const openai = new OpenAIApi(configuration);
  //   var convertedToBankoo = await openai
  //     .createChatCompletion({
  //       model: "gpt-3.5-turbo",
  //       messages: [
  //         {
  //           role: "user",
  //           content: `Convert ${proText.value} to speak from a futuristic sci-fi perspective`,
  //         },
  //       ],
  //       max_tokens: 40,
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   const openai2 = new OpenAIApi(configuration);
  //   const newImage = await openai2.createImage({
  //     prompt: convertedToBankoo.data.choices[0].message.content,
  //     n: 1,
  //     size: "512x512",
  //   });

  //   console.log("newImage:", newImage);
  //   document.getElementById("GenImgCont")?.remove();
  //   var ImageCont = document.createElement("div");
  //   var newImageCont = document.createElement("img");
  //   var genPara = document.createElement("p");
  //   genPara.innerHTML = convertedToBankoo.data.choices[0].message.content;
  //   newImageCont.src = newImage.data.data[0].url;
  //   ImageCont.appendChild(newImageCont);
  //   ImageCont.appendChild(genPara);
  //   ImageCont.setAttribute("id", "GenImgCont");
  //   ImageCont.addEventListener("click", () => {
  //     ImageCont.remove();
  //   });
  //   document.getElementById("camera").appendChild(ImageCont);

  //   console.log("byteArray:", vectorOfVectors);
  //   // Alias
  //   nmcProps.alias = proName.value;
  //   // Email
  //   nmcProps.email = proEmail.value;
  //   // Identity
  //   nmcProps.identifier = proIden.value;
  //   // Earth Image
  //   // nmcProps.earthImage = [vectorOfVectors];
  //   // Bankoo Image
  //   // Earth Text
  //   nmcProps.earthText = [proText.value];
  //   // Bankoo Text
  //   nmcProps.bankooText = [convertedToBankoo.data.choices[0].message.content];
  //   // Send
  //   var prin = await window.ic.bitfinityWallet.getPrincipal();
  //   console.log(nmcProps);
  //   window.suUiActor.updateTemp(prin, 0, [nmcProps]);
  //   console.log("Saved Temp Profile");
  // }

  vidInvestigate() {
    document.getElementById("beaconAction1").remove();
  }

  // Open Beacon Messgae
  async openBeaconMessage(e) {
    // Temp Filler
    var data = await e.target.getAttribute("data-message");
    var data2 = await e.target.getAttribute("data-headline");
    var selected = e.target;
    document.getElementById("beaconPan")?.remove();
    var beaconEl = document.createElement("div");
    var messageData = data;
    var messageData2 = data2;
    // document.querySelectorAll(".beaconLines").forEach((line) => {
    //   line.style.animationPlayState = "running";
    // });
    document
      .getElementById("collectionGallery")
      .shadowRoot.getElementById("collectionGallery").style.transform =
      "scaleX(0)";
    beaconEl.setAttribute("class", "beaconPanel");
    beaconEl.setAttribute("id", "beaconPan");
    var messageBody1 = "";
    if (e.target.id === "videoBeacon") {
      messageBody1 = `${messageData}`;
    } else {
      messageBody1 = `<div id="beaconTutBody">${messageData}</div>`;
    }
    beaconEl.innerHTML = `
    <div id="beaconBody">
        <div id="beaconTutHead">${messageData2}</div>
        ${messageBody1}
        <div id="beaconTutActions">
            <div class="beaconActions" data-action="${data2}" id="beaconAction1">INVESTIGATE</div>
            <div class="beaconActions" id="beaconAction2">"OK, GOT IT!"</div>
        </div>
    </div>
    <div id="beaconTutIcon">
        <svg class="beaconLines" id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
    </div>
    <div id="beaconBG">
        <svg class="beaconLines" id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
        <svg class="beaconLines" id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
    </div>
    `;
    if (window.isMobile === true) {
      // mobile
      var shad = document.getElementById("getUniMenu").shadowRoot;
      var headline1 = shad.getElementById("beaconTutHead");
      this.shadowRoot.getElementById("fullMenu").appendChild(beaconEl);
      this.shadowRoot.getElementById("beaconPan").style.display = "block";
      this.shadowRoot.getElementById("beaconAction2")?.addEventListener("click", () => {
        this.shadowRoot.getElementById("beaconPan")?.remove();
        selected.querySelector(".beaconIdenIcon").style.opacity = "0";
        this.stopBlinkingBeacon();
      });
      if (headline1.innerHTML === "H/L ZONE 5") {
        // document.getElementById("beaconAction2").style.marginTop = "8%";
        this.vidInvestigate();
      }
      this.shadowRoot.getElementById("beaconAction1")?.addEventListener("click", () => {
        this.shadowRoot.getElementById("beaconPan")?.remove();
        // this.shadow.getElementById(".beaconAction1").innerHTML = "INVESTIGATE";
        this.shadowRoot.querySelector(".beaconIdenIcon").style.opacity = "0";
        this.stopBlinkingBeacon();
      });
    } else {
      // desktop
      document.getElementById("camera").appendChild(beaconEl);
      dragElement(beaconEl, true);
      document.getElementById("beaconPan").style.display = "block";
      var headline2 = document.getElementById("beaconTutHead");
      if (headline2.innerHTML === "H/L ZONE 5") {
        document.getElementById("beaconAction2").style.marginTop = "8%";
        this.vidInvestigate();
        this.stopBlinkingBeacon();
      }
      document
        .getElementById("beaconAction2")
        ?.addEventListener("click", () => {
          document.getElementById("beaconPan")?.remove();
          this.stopBlinkingBeacon();
        });
      document
        .getElementById("beaconAction1")
        ?.addEventListener("click", (e) => {
          this.shadowRoot.getElementById("beaconPan")?.remove();
          selected.querySelector(".beaconIdenIcon").style.opacity = "0";
          this.stopBlinkingBeacon();
          var action = e.target.getAttribute("data-action");
          if (action === "UNKNOWN ITEM DETECTED") {
            newScenario("StangeNote");
          }
        });
    }
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
        this.shadow.querySelector(`.${tabClass}1`).style.display = "block";
        this.shadow.querySelector(`.${tabClass}2`).style.display = "none";
        this.shadow.querySelector(`.${tabClass}3`).style.display = "none";
        tab1.setAttribute("class", `men-active ${tabClass} selectedMenu`);
        tab2.setAttribute("class", `men-active ${tabClass}`);
        tab3.setAttribute("class", `men-active ${tabClass}`);
        if (tabClass === "ct") {
          this.shadow.querySelector(`.${tabClass}1`).style.display = "grid";
        }
        break;
      case "fm-menu2":
        this.shadow.querySelector(`.${tabClass}1`).style.display = "none";
        this.shadow.querySelector(`.${tabClass}2`).style.display = "grid";
        this.shadow.querySelector(`.${tabClass}3`).style.display = "none";
        tab1.setAttribute("class", `men-active ${tabClass}`);
        tab2.setAttribute("class", `men-active ${tabClass} selectedMenu`);
        tab3.setAttribute("class", `men-active ${tabClass}`);
        if (tabClass === "ct") {
            document.getElementById("compConsensus").setAttribute("active", "true");
        }
        break;
      case "fm-menu3":
        this.shadow.querySelector(`.${tabClass}1`).style.display = "none";
        this.shadow.querySelector(`.${tabClass}2`).style.display = "none";
        this.shadow.querySelector(`.${tabClass}3`).style.display = "grid";
        tab1.setAttribute("class", `men-active ${tabClass}`);
        tab2.setAttribute("class", `men-active ${tabClass}`);
        tab3.setAttribute("class", `men-active ${tabClass} selectedMenu`);
        if (tabClass === "it") {
          this.shadow.querySelector(`.${tabClass}3`).style.display = "flex";
        }
        break;
    }
  }

  // View Gallery
  viewGallery() {
    this.shadow.querySelectorAll(".collectionTab").forEach((element) => {
      element.addEventListener("click", (e) => {
        document
          .getElementById("collectionGallery")
          .shadowRoot.getElementById("collectionGallery").style.transform =
          "scaleX(1)";
        document
          .getElementById("collectionGallery")
          .shadowRoot.getElementById("collectionGallery").style.opacity = "1";
        document.getElementById("collectionGallery")?.selectCollection(e);
        this.shadow.querySelectorAll(".collectionTab").forEach((element) => {
          if (e.target.id === element.id) {
            element.setAttribute("class", "collectionTab collectionTabActive");
          } else {
            element.setAttribute("class", "collectionTab");
          }
        });
      });
    });
  }

  connectedCallback() {
    this.render();
    this.viewGallery();
    this.musicLevel();

    this.shadowRoot.getElementById("comBut").addEventListener("click", () => {
      window.soundtrack.setVolume("combatOff-1", 0.7);
      window.soundtrack.play(`combatOff-1`);
    })
    this.shadow.getElementById("PatreonBut").addEventListener("click", () => {
      window.open(this.patreonLink);
    });
    this.shadow.getElementById("gdBuyBut2").addEventListener("click", () => {
      if (this.domainIntroSeen === null) {
        story("DomainDevelopment");
      }
      if (this.domainIntroSeen === false) {
        story("DomainDevelopmentSetup");
        this.domainIntroSeen = true;
        this.shadow.getElementById("gdBuyBut2").innerHTML = "Domain Development";
        return;
      } else if (this.domainIntroSeen === true) {
        document.getElementById("compDomainDev").setAttribute("active", "true");
        pinMenu();
      }
    });
    this.shadow.getElementById("cloudHallGarmentImg").addEventListener("click", () => {
      document.getElementById("compConsensus").setAttribute("active", "true");
    });
    this.shadow.getElementById("gdBuyBut").addEventListener("click", () => {
      if (document.getElementById("forgeModal").shadowRoot.getElementById("mainForge").style.transform === "scaleX(1)") {
        document.getElementById("forgeModal").shadowRoot.getElementById("mainForge").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("forgeModal").shadowRoot.getElementById("mainForge").style.opacity = "1";
        }, 200);
      } else {
        document.getElementById("forgeModal").shadowRoot.getElementById("mainForge").style.transform = "scaleX(1)";
        document.getElementById("forgeModal").shadowRoot.getElementById("mainForge").style.opacity = "1";
      }
    });
    this.shadow.getElementById("fsToggle").addEventListener("click", () => {
      this.toggleFullScreen();
    });
    this.shadow.querySelector("#uniMenuIcon").addEventListener("click", () => {
      this.toggleMenu();
    });
    this.shadow.querySelector("#uniMenuIcon2").addEventListener("click", () => {
      this.closeFullMenu();
    });
    this.tabs = this.shadow.querySelectorAll(".menuTabs");
    this.tabs.forEach((element) => {
      if (element.id != "uniMenuExit") {
        element.addEventListener("click", (e) => {
          this.openFullMenu(e);
        });
      } else {
        element.addEventListener("click", (e) => {
          var data = this.shadowRoot.getElementById("uniMenuExit").getAttribute("data-connected");
          if (data === "true") {
            this.openFullMenu(e);
          } else {
            this.closeFullMenu();
          }
        });
      }
    });
    this.headerTabs = this.shadow.querySelectorAll(".men-active");
    // this.headerTabs.forEach((element) => {
    //   element.addEventListener("click", (e) => {
    //     this.switchMenuTabs(e);
    //   });
    // });
    this.form = this.shadow.querySelector("#feedbackForm");
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.shadow.getElementById("menuLoadingScreen2").style.display = "grid";
      let data = new FormData(this.form);
      fetch(
        "https://script.google.com/macros/s/AKfycbzHUtfeNysmMSZvlC7tnfYhpgs_EU_3kx9_6H_VV6le8tPyR4Vlzs8SlfES_8pbK0nb2w/exec?focus=feedback",
        {
          method: "POST",
          body: data,
          mode: "cors",
        }
      )
        .then((res) => res.text())
        .then((data) => {
          this.form.reset();
          this.shadow.getElementById("menuLoadingScreen2").style.display =
            "none";
          this.shadow.getElementById("feedbackHeadline").style.color =
            "var(--accent)";
          this.shadow.getElementById("feedbackHeadline").innerHTML =
            "Outstanding feedback citizen!";
          setTimeout(() => {
            this.shadow.getElementById("feedbackHeadline").style.color =
              "var(--primary)";
            this.shadow.getElementById("feedbackHeadline").innerHTML =
              "This City needs more people like you!";
          }, 3000);
        });
    });

    this.shadow.getElementById("emailForm").addEventListener("submit", (event) => {
      event.preventDefault();

      this.shadow.getElementById("emailSubmit").value="Submitting..";
  
      // Retrieve form values
      var emailSub = this.shadow.getElementById("emailInput").value;
      var feedbackSub = "SUBSCRIBED";
      
      // Prepare the form data as URL-encoded
      let formData = new URLSearchParams();
      formData.append('Email', emailSub);
      formData.append('FeedbackText', feedbackSub); // Make sure the key matches the GAS expected parameter
  
      // Make the fetch request
      fetch("https://script.google.com/macros/s/AKfycbzHUtfeNysmMSZvlC7tnfYhpgs_EU_3kx9_6H_VV6le8tPyR4Vlzs8SlfES_8pbK0nb2w/exec?focus=feedback", {
          method: "POST",
          body: formData, // Send as URL-encoded form data
          mode: "cors",
      })
      .then((res) => res.text())
      .then((data) => {
        this.shadow.getElementById("emailSubmit").style.color = "var(--accent)";
          this.shadow.getElementById("emailSubmit").value="SUBSCRIBED!";
          setTimeout(() => {
            this.shadow.getElementById("emailSubmit").style.color = "";
              this.shadow.getElementById("emailSubmit").value="SUBSCRIBE";
          }, 2000);
          this.shadow.getElementById("emailForm").reset(); // Reset the form
      });
  });
  

    this.shadow
      .querySelector("#menuMessageBody")
      .addEventListener("click", () => {
        var el = {
          target: this.shadow.querySelector("#fm-menu2"),
        };
        var el2 = {
          target: this.shadow.querySelector("#menuBeacons"),
        };
        this.shadow.querySelector("#uniMenuBeacons").click(el);
        // this.switchMenuTabs(el);
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
    this.beacons.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.openBeaconMessage(e);
      });
    });
    // CRUD
    this.shadow.getElementById("proEdit").addEventListener("click", (e) => {
      this.editProfile(e);
    });
    // this.getBeacons();
    // Add methods above this method
    // Ex. btn.addEventListener('click', this.method.bind(this))
    // NOTE: Render clears all code because of innerHtml
  }

  render() {
    this.shadow.innerHTML = `
         <style>
            @font-face {
                font-family: "BS-B";
                src: url("https://storage.scoge.co/scogeFonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storage.scoge.co/scogeFonts/BioSans-Regular.ttf");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storage.scoge.co/scogeFonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storage.scoge.co/scogeFonts/BioSans-Italic.svg");
                font-weight: normal;
                font-style: italic;
            }
            @font-face {
              font-family: "GM-I";
              src: url("https://storage.scoge.co/scogeFonts/DMSans-Italic.ttf");
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
              max-height: 70%;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              z-index: 11;
              position: absolute;
              top: 5vh;
              left: 36px;
              background-color: rgba(0, 0, 0, 0.7);
              border-left: 2px solid #ff002d;
              border-bottom: 2px solid #ff002d;
              border-top: 2px solid #ff002d;
              border-right: 2px solid #ff002d;
              font-family: "BS-R";
              font-size: 16px;
              display: none;
              transition: height 0.5s ease;
              overflow-x: hidden;
              margin-bottom: 20%;
              font-family: "BS-R";
            }
            #uniMenuLogo {
              width: 100%;
            }
            
            #uniMenu.collapsed {
              width: 260px;
              max-height: 10%;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              z-index: 11;
              position: absolute;
              top: 25vh;
              left: 36px;
              background-color: rgba(0, 0, 0, 0.7);
              border-left: 2px solid #ff002d;
              border-bottom: 2px solid #ff002d;
              border-top: 2px solid #ff002d;
              border-right: 2px solid #ff002d;
              font-family: "BS-R";
              font-size: 16px;
              display: block;
              transition: height 0.5s ease;
              overflow: hidden;
              margin-bottom: 20%;
              font-family: "BS-R";
            }

            #menuHeader {
              display: grid;
              width: 88%;
              height: 20%;
              overflow: hidden;
              grid-template-columns: 1fr;
              grid-template-rows: 70% 30%;
              align-items: center;
              justify-items: center;
              border-radius: 10px 10px 0 0;
              z-index: 6;
              position: absolute;
              padding: 2% 6%;
              transition: all 0.5s ease;
              cursor: grab;
              user-select: none;
              sticky: top;
              top: 0;
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
              font-size: 1em;
              justify-self: end;
              transform: rotate(0deg);
              cursor: pointer;
              transition: all 0.5s ease;
              pointer-events: auto;
            }
            #uniMenuIcon:hover {
              color: white;
            }

            .menuIcon {
              height: 2px;
              width: 40px;
              background-color: #ff002d;
              border-radius: 4px;
              margin-top: 10px;
              user-select: none;
            }

            // #mi1 {
            //   transform: rotate(45deg) translateY(14px);
            // }

            // #mi2 {
            //   transform: rotate(-45deg) translateY(-5px);
            // }

            // #mi3 {
            //   opacity: 0;
            // }
          
            #menuItems {
              display: grid;
              width: 100%;
              height: 100%;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr !important; 
              transition: all 0.5s ease;
              // overflow: hidden;
              transition: all 0.5s ease;
              border-bottom-left-radius: 10px;
              z-index: 6;
              position: relative;
              margin-top: 34%;
              cursor: pointer;
              overflow-y: hidden;
              overflow-x: hidden;
            }
            #menuItems div {
              padding: 5px 10px;
            }

            #menuItems svg {
              width: 80%;
            }
            #menuItems > div:hover {
              background-color: #ff002d !important;
              color: white !important;
            }
            #menuItems > div:hover .cls-1 {
              stroke: white !important;
            }
            #menuItems > #uniMenuExit:hover .cls-1 {
              stroke: white !important;
              fill: white !important;
            }
            #menuItems > #uniMenuCloudHall:hover .cls-1 {
              stroke: white !important;
              fill: white !important;
            }
            #menuItems > #uniMenuShop:hover .cls-1 {
              stroke: white !important;
              fill: white !important;
            }
            .uniMenuTxt {
              transition: all 0.5s ease;
            }
            #menuItems > div:hover .uniMenuTxt {
              transform: translateX(40px);
            }
            #fullMenu {
              width: 0px;
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
              transform: scaleX(0);
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

            #uniMenuCloudHall {
              display: none;
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
            .men-deactive {
              background-color: rgba(0, 0, 0, 0.8);
              border: .2px solid var(--primary);
              color: var(--secondary);
              opacity: .2 !important;
              cursor: default !important;
              user-select: none !important;
              pointer-events: none !important;
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
              cursor: pointer;
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
              font-size: .9em;
              font-family: "Garamond";
              color: var(--secondary);
              letter-spacing: 2px;
            }
            .inventoryInnerText {
              font-family: "Garamond";
              color: var(--secondary);
            }
            #fm-menu3 {
              // opacity: .6;
            }
            .it1 {
              width: 94%;
              height: 100%;
              display: block;
              overflow: hidden;
              letter-spacing: 1px;
              font-size: .9em;
              padding-left: 6%;
              padding-top: 3%;
              overflow: hidden;
            }

            .collectionTab {
              width: 100%;
              height: 15%;
              padding-bottom: 10px;
              cursor: pointer;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              transition: all 0.5s ease;
              display: grid;
              grid-template-columns: 10% 90%;
              grid-template-rows: 1fr;
            }

            .collectionTabActive {
              color: var(--accent);
              background-color: rgba(0, 0, 0, 0.8);
              letter-spacing: 5px;
              padding-left: 40px;
            }

            .collectionTab:hover {
              color: var(--accent);
              background-color: rgba(0, 0, 0, 0.8);
              letter-spacing: 5px;
              padding-left: 40px;
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
              color: var(--accent);
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
              border: 5px dotted var(--accent);
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
              display: block !important;
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
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 20px;
              background-color: transparent;
              cursor: default;
              user-select: none;
            }
            
            #fm-feedback input[type="email"] {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              box-sizing: border-box;
              background-color: transparent;
              border: .5px solid var(--primary);
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
              border: 1px solid var(--primary);
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
              font-family: "BS-R";
              resize: none;
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
              float: right;
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
              cursor: pointer;
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
            #notiTogSect, .settingsSectionsSlider, .saveButs {
              // opacity: 30%;
              // user-select: none;
              // pointer-events: none;
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
              animation-play-state: paused;
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

            #romOffline {
              width: 88%;
              height: 88%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.9);
              grid-template-columns: 1fr;
              grid-template-rows: 16% 49% 35%;
              z-index: 7;
              padding: 6%;
              display: none;
              font-family: "GM-I";
            }

            #warpLock {
              width: 88%;
              height: 88%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.95);
              z-index: 7;
              padding: 6%;
              display: none;
              font-family: "GM-I";
              grid-template-columns: 1fr;
              grid-template-rows: 10% 90%;
            }

            #agentsAndPatrons {
              width: 88%;
              height: 88%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.9);
              z-index: 7;
              padding: 6%;
              display: none;
              font-family: "GM-I";
              grid-template-columns: 1fr;
              grid-template-rows: 10% 58% 17% 20%;
            }

            #PatreonBut {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              font-size: 1.5em;
              border-radius: 5px;
              letter-spacing: 2px;
              cursor: pointer;
              transition: 0.3s all;
              position: relative;
              margin-top: 5%;
              letter-spacing: 2px;
            }

            #patText {
              font-family: "BS-B";
            }


            #PatreonBut:hover {
              background-color: var(--accent);
              color: var(--secondary);
              font-family: "BS-B";
              text-shadow: 0 0 5px black;
              letter-spacing: 12px;
            }

            #newsletterHead {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              font-size: .6em;
              letter-spacing: 2px;
            }

            #emailForm {
              display: grid;
              grid-template-columns: 60% 40%;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: start;
            }

            #emailInput {
              width: 100%;
              height: 50%;
              background: transparent;
              border-top: none;
              border-left: none;
              border-right: none;
              border-bottom: 1px solid var(--accent);
              color: var(--secondary);
              letter-spacing: 2px;
              font-family: "GM-I";
            }

            #emailInput:focus {
              outline: none;
            }

            #emailInput::placeholder {
              color: var(--primary);
              opacity: 1; /* Firefox */
            }
            
            #emailInput::-ms-input-placeholder { /* Edge 12 -18 */
              color: var(--primary);
            }

            #emailSubmit {
              background: transparent;
              border: none;
              color: var(--accent);
              font-family: "GM-I";
              font-size: 1em;
              width: 80%;
              height: 50%;
              justify-self: end;
              transition: 0.3s all;
              text-align: right;
              cursor: pointer;
            }

            #emailSubmit:hover {
              color: var(--accent);
              letter-spacing: 4px;
            }

            #dgromD1, #agentssPage {
              font-family: "GM-I";
              width: 100%;
              height: 98%;
              display: grid;
              grid-template-columns: 80% 20%;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: start;
              letter-spacing: 1px;
              padding-top: 2%;
            }

            #dgHead {
              font-size: 1.2em;
              letter-spacing: 20px;
              user-select: none;
            }

            #dgChangelog {
              font-size: 0.7em;
              text-decoration: underline;
              justify-self: end;
              letter-spacing: 2px;
              cursor: pointer;
            }

            #dgromD2 {
              width: 100%;
              height: 10%;
              margin-top: 0;
              padding-top: 0;
              float: left;
              position: relative;
            }

            .offline {
              position: absolute;
              font-family: "GM-I";
              font-size: 2.5em;
              color: #ff002d;
              width: 70%;
              height: 100%;
              padding-left: 30%;
              letter-spacing: 1px;
            }

            #dgromD2-2{
              transform: scaleX(1.8) scaleY(.9);
              filter: blur(6px);
              opacity: 0.8;
            }

            #dgromD3 {
              width: 90%;
              height: 20%;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 5%;
              float: left;
            }

            #dgromD3 img {
              height: 100%;
            }

            #domainUnDev {
              width: 80%;
              height: 90%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.9);
              z-index: 7;
              padding-left: 10%;
              padding-right: 10%;
              padding-top: 10%;
              display: none;
              font-family: "GM-I";
            }

            #unDev1 {
              font-family: "GM-I";
              font-size: .8em;
              color: white;
              width: 75%;
              height: 5%;
              padding-left: 25%;
              letter-spacing: 1px;
              float: left;
            }

            #unDev2 {
              width: 100%;
              height: 10%;
              margin-top: 0;
              padding-top: 0;
              float: left;
              position: relative;
            }

            #unDev2-2 {
              transform: scaleX(1.5) scaleY(.9) translateX(10px);
              filter: blur(6px);
              opacity: 0.8;
            }

            #unDev3 {
              width: 90%;
              height: 20%;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 5%;
              float: left;
              position: absolute;
              bottom: 0;
              left: 0;
            }

            #unDev3 img {
              width: 100%;
            }


            #unDev4 {
              width: 90%;
              height: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 5%;
              float: left;
              text-align: center;
            }

            .unReg {
              position: absolute;
              font-family: "GM-I";
              font-size: 1.5em;
              color: #ff002d;
              width: 90%;
              height: 100%;
              padding-left: 10%;
              letter-spacing: 1px;
            }


            .ddLogButtons {
              width: 60%;
              height: 30%;
              background-color: rgba(0, 0, 0, 0.8);
              border-radius: 5px;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              color: var(--accent);
              letter-spacing: 1px;
              font-size: .9em;
              border-left: 1px solid var(--accent);
              border-right: 1px solid var(--accent);
              transition: 0.3s all ease-in-out;
              cursor: pointer;
            }

            #comSim {
              height: 100%;
              width: 90%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: start;
              cursor: pointer;
              transition: 0.3s all;
              overflow: hidden;
              padding-left: 5%;
              padding-right: 5%;
              position: relative;
            }

            #comBut {
              position: absolute;
              width: 45%;
              height: 25%;
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              border: 1px solid var(--primary);
              justify-self: center;
              align-self: center;
              color: var(--primary);
              border-radius: 5px;
              cursor: pointer;
            }

            #comBut:hover {
              background-color: var(--primary);
              color: black;
              font-family: "BS-B";
            }

            .comImg {
              height: 100%;
              overflow: hidden;
            }

            .comImg img {
              height: 100%;
              width: auto;
              object-fit: contain;
            }

            #comIcon2 {
              justify-self: end;
              padding-right: 7%;
            }

            #comButText1 {
              font-size: .8em;
              letter-spacing: 2px;
            }

            #comButText2 {
              font-size: .7em;
            }

            .glowButton {
              box-shadow: 0px 0px 10px var(--accent);
            }

            .glowButton:hover {
              border: 1px solid var(--accent);
            }

            .buttonTxt {
              position: absolute;
              opacity: 1;
            }

            .bgImg {
              width: 100%;
              height: 100%;
              background-size: cover;
              background-position: center;
              padding: 0%;
              margin: 0%;
              opacity: 0.8;
            }

            #mintBG {
              background-image: url("https://storage.scoge.co/scogeUniverse/uniMenu/digisette-icon.jpg");
            }

            #syncBG {
              background-image: url("https://storage.scoge.co/scogeUniverse/uniMenu/sync-icon.jpg");
            }

            #loginBG {
              background-image: url("https://storage.scoge.co/scogeUniverse/uniMenu/grid.jpg");
            }

            #patronBG {
              background-image: url("https://storage.scoge.co/scogeUniverse/uniMenu/patron3.jpg");
            }

            #dgromD4 {
              width: 95%;
              height: 90%;
              display: grid;
              grid-template-columns: 50% 50%;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: start;
              grid-gap: 5%;
              margin-top: 5%;
            }

            #ddLogo {
              animation: domainWF 20s ease-in-out infinite;
              pointer-events: none;
              user-select: none;
            }

            @keyframes domainWF {
              0% {
                transform: scale(1);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              70% {
                opacity: 1;
              }
              100% {
                transform: scale(7) translateX(5%) translateY(5%);
                opacity: 0;
              }
            }

            @keyframes domainWFFlicker {
              0% {
                filter: blur(0px) contrast(.9);
              }
              10% {
                filter: blur(.2px)  contrast(.8);
              }
              70% {
                filter: blur(0px) contrast(1);
              }
              100% {
                filter: blur(.5px);
              }
            }

            @keyframes beaconBlinking {
              0% {
                background-color: var(--primary);
                color: white;
                }
              50% {
                  border: none;
                  background-color: transparent;
                }
              100% {
                background-color: var(--primary);
                color: white;
                } 
            }

            @keyframes beaconBlinking2 {
              0% {
                fill: white;
                stroke: white;
                }
              50% {
                
                }
              100% {
                fill: white;
                stroke: white;
                } 
            }

              @keyframes beaconBlinking3 {
              0% {
                border: 1px solid var(--primary);
                }
              50% {
                  border-top: 1px solid var(--accent);
                  border-left: none;
                  border-right: none;
                  border-bottom: none;
                }
              100% {
                  border: 1px solid var(--primary);
                } 
            }


            .romLogButtons {
              width: 100%;
              height: 90%;
              background-color: rgba(0, 0, 0, 0.8);
              border-radius: 5px;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              color: var(--primary);
              letter-spacing: 1px;
              font-size: .9em;
              transition: 0.3s all ease-in-out;
              cursor: pointer;
              position: relative;
            }

            #syncStart {
              justify-items: start;
              align-items: end;
              font-size: 1em;
              background-size: cover;
              background-position: center;
              opacity: 0.6;
              box-shadow: 0px 0px 10px var(--primary);
              cursor: default;
            }

            #syncStartBut {
              bottom: 3%;
              left: 8%;
            }

            #mintStartBut {
              bottom: 3%;
              right: 8%;
            }

            #gdBuyBut {
              color: var(--primary);
              justify-items: end;
              align-items: end;
              font-size: 1em;
              background-size: cover;
              background-position: center;
            }

            #gdBuyBut:hover {
              background-color: var(--accent);
              color: var(--secondary);
              font-family: "BS-B";
              letter-spacing: 2px;
            }

            #gdBuyBut2:hover {
              background-color: var(--accent);
              color: black;
              font-family: "BS-B";
              letter-spacing: 2px;
              scale: 1.1;
            }

            .cDot {
              color: var(--accent);
              padding-right: 5px;
            }
            
             #fm-enhancements img {
              width: 90%;
              height: auto;
              object-fit: contain;
            }

            #loadingText {
              display: none;
            }

            #fm-cloudHall {
              width: 100%;
              height: 100%;
            }

            #cloudHallBody {
              width: 100%;
              height: 100%;
              display: grid;
            }

            .ct1 {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 20% 80%;
              width: 100%;
              height: 80%;
              margin-top: 20%;
              align-items: center;
              justify-content: center;
            }

            #cloudHallImg {
              width: 60%;
              align-self: center;
              justify-self: center;
              opacity: .7;
            }

            #cloudHallText {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-content: center;
              text-align: center;
              color: var(--accent);
              letter-spacing: 2px;
            }


            .ct2 {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              width: 100%;
              height: 80%;
              margin-top: 20%;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }

            #cloudHallGarmentImg {
              height: 100%;
              align-self: center;
              justify-self: center;
              opacity: .7;
              cursor: pointer;
              transition: 0.3s all ease-in-out;
            }

            #cloudHallGarmentImg:hover {
              scale: 1.1;
            }

            .it3 {
              display: none;
              justify-content: start !important;
              align-items: start !important;
              gap: 10px;
              margin-left: 10%;
            }
          
            .nftElement {
              width: 70pt;
              height: 70pt;
              border-radius: 50%;
              overflow: hidden;
              cursor: pointer;
              background-color: #ff002d;
            }

            .nftElement img:hover {
              scale: 1.3;
              opacity: 0.6;
            }
          
            .nftElement img {
              width: 100%;
              height: 100%;
              scale: 1.1;
              transition: 0.3s all ease-in-out;
            }       
            
            .actionArrows {
              width: 20%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.8em;
              color: var(--accent);
              user-select: none;
              transition: .3s all;
          }

          #aaL {
              animation: pulseArrowLeft 2s infinite ease-out;
              animation-play-state: playing;
          }

          #aaR {
              animation: pulseArrowRight 2s infinite ease-out;
              animation-play-state: playing;
          }

          @keyframes pulseArrowLeft {
              0% {
                  transform: translateX(10%)  scale(1.2);
              }
              50% {
                  transform: translateX(-30%)  scale(1);
              }
              100% {
                  transform: translateX(10%)  scale(1.2);
              }
          }

          @keyframes pulseArrowRight {
              0% {
                  transform: translateX(-10%)  scale(1.2);
              }
              50% {
                  transform: translateX(30%)  scale(1);
              }
              100% {
                  transform: translateX(-10%) scale(1.2);
              }
          }

            @media screen and (max-width: 800px) {
              #uniMenu {
                width: 80%;
                max-height: 12%;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                z-index: 11;
                position: absolute;
                top: 75svh;
                left: 39px;
                background-color: rgba(0, 0, 0, 0.7);
                border-left: 2px solid #ff002d;
                border-bottom: 2px solid #ff002d;
                border-top: 2px solid #ff002d;
                border-right: 2px solid #ff002d;
                font-family: "BS-R";
                font-size: 16px;
                transition: height 0.5s ease;
                overflow: hidden;
                margin-bottom: 20%;
                font-family: "BS-R";
                display: none;
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
                position: absolute;
                padding: 2% 6%;
                transition: all 0.5s ease;
                cursor: move;
                user-select: none;
                sticky: top;
                top: 0;
              }
              #uniMenuIcon {
                display: none;
                color: #ff002d !important;
                padding-right: 8pt;
              }

              #loadingText {
                display: block;
                position: absolute;
                top: 10%;
                right: 5%;
                letter-spacing: 1px;
                animation: blink 2s ease-in-out infinite;
                font-family: "BS-R";
              }

              #fullMenu {
                left: 0;
                top: 0;
                width: 100%;
                height: 0%;
                position: absolute;
                z-index: 5;
                // transformOrigin: top !important;
                font-family: "BS-R";
              }

              #romOffline {
                width: 90%;
                height: 95%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.9);
                z-index: 7;
                padding-left: 5%;
                padding-right: 5%;
                padding-bottom: 5%;
                grid-template-columns: 1fr;
                grid-template-rows: 8% 15% 75%;
                display: none;
                font-family: "GM-I";
              }

              #uniMenuIcon2 {
                display: none;
              }

              .collectionTab {
                font-size: 1.2em;
                height: 10%;
                padding-botton: 5px !important;
              }

              .beacon {
                width: 85%;
                height: 60px;
              }

              #fm-settings {
                width: 95%;
                height: 84%;
                display: none;
                padding: 5%;
                color: var(--secondary);
                position: absolute;
              }

              #feedbackForm {
                margin-top: 10%;
              }

              #fm-feedback {
                position: absolute;
                height: 100%;
                width: 90%;
                margin: 20px auto;
                padding-top: 10px;
                padding-left: 5%;
                padding-right: 5%;
                display: none;
                grid-template-columns: 1fr;
                grid-template-rows: 10% 60%;
              }

              #fm-feedback textarea {
                width: 100%;
                height: 50% !important;
                padding: 12px 20px;
              }

              #feedbackButton {
               width: 50% !important;
               margin-left: 25% !important;
               float: left !important;
               transform: scale(1.3) !important;
              }

              .beacon {
                z-index: 15;
              }

              /* BEACON TUT */
              .beaconPanel {
                width: 90%;
                height: 68%;
                position: fixed;
                z-index: 4;
                right: 5%;
                top: 5%;
                background-color: rgba(0, 0, 0, 0.8);
                border-bottom: 1px solid var(--accent);
                border-top: 1px solid var(--accent);
                /* box-shadow: 0px -10px 10px -10px var(--accent); */
                box-shadow: 0px 10px 10px -10px var(--accent),  0px -10px 10px -10px var(--accent), inset 0px 10px 10px -10px var(--accent), inset 0px -10px 10px -10px var(--accent);
                border-radius: 10px;
                display: none;
                user-select: auto;
                pointer-events: auto;
                cursor: grab;
              }

              #beaconAction1 {
                display: none;
              }

              #beaconAction2 {
                width: 70%;
              }

              #beaconBG {
                width: 100%;
                height: 100%;
                justify-items: center;
                align-items: center;
                position: absolute;
                overflow: hidden;
              }

              #beaconBG svg {
              opacity: .1;
              stroke: none;
              pointer-events: none;
              user-select: none;
              }

              #beaconBG svg path {
                stroke: rgb(0, 0, 0, 0.9);
                stroke-width: 1px;
                fill: var(--accent);
              }

              #beaconBG svg:nth-child(1) {
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                justify-self: center;
                transform: scale(2);
                animation: Scale 10s infinite;
                animation-play-state: running;
              }

              #beaconBG svg:nth-child(2) {
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                justify-self: center;
                transform: rotate(25deg) scale(.9);
                animation: Scale2 10s infinite;
                animation-play-state: running;
              }

              @keyframes Scale {
                0% {
                  transform: scale(2.3);
                  opacity: .15;
                }
                50% {
                  transform: scale(1.7);
                  opacity: .1;
                }
                100% {
                  transform: scale(2.3);
                  opacity: .15;
                }
              }

              @keyframes Scale2 {
                0% {
                  transform: scale(2) rotate(25deg);
                  opacity: .1;
                }
                50% {
                  transform: scale(3) rotate(25deg);
                  opacity: .1.6;
                }
                100% {
                  transform: scale(2) rotate(25deg) ;
                  opacity: .1;
                }
              }

              #beaconTutIcon {
                position: absolute;
                width: 50px;
                height: 50px;
                left: 45%;
                bottom: -30px;
                padding: 5px;
                border: 1px solid var(--accent);
                box-shadow: 0px 0px 5px 1px var(--accent);
                background-color: rgb(0, 0, 0, 0.9);
                border-radius: 50%;
                overflow: hidden;
                display: grid;
                justify-items: center;
                align-items: center;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                transition: transform .5s;
                cursor: pointer;
                z-index: 10;
              }

              #beaconBody{
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 3;
              }

              #beaconTutHead {
                height: 15%;
                font-family: "BS-R";
                font-size: 1.1em;
                letter-spacing: 2px;
                width: 100%;
                display: flex;
                text-align: center;
                align-items: end;
                justify-content: center;
              }

              #beaconTutBody {
                height: 45%;
                font-family: "BS-R";
                color: var(--secondary);
                font-size: .9em;
                width: 90%;
                letter-spacing: 1px;
                padding-left: 5%;
                padding-right: 5%;
                display: flex;
                text-align: left;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
              }
              
              #beaconTutActions {
                height: 30%;
                font-family: "BS-R";
                font-size: .9em;
                letter-spacing: 2px;
                width: 100%;
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: center;
              }

              .beaconActions {
                width: 25%;
                height: 30%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: "BS-R";
                font-size: .9em;
                letter-spacing: 2px;
                color: var(--accent);
                border: 1px solid var(--accent);
                cursor: pointer;
                transition: .3s all;
              }
              .portalsBlock {
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
              }

              .portalsBlock > a {
                fill: var(--secondary);
                transition: .3s all;
                cursor: pointer;
                padding-top: 20px;
              }

              #fm-enhancements {
                width: 100%;
                height: 74%;
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr !important;
                align-items: start;
                justify-items: center;
                cursor: pointer;
              }

              .mobileShopOpts {
                width: auto;
                height: 90%;
                padding: 5%;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
                font-family: "GM-I";
                letter-spacing: 1px;
              }

              .mShopLabel {
                position: absolute !important;
              }

              #nftShop img {
                height: auto !important;
                width: 50% !important;
              }


              #fashionShop img {
                height: auto !important;
                width: 75% !important;
              }

              #fashionShop div {
                justify-self: start !important;
                padding-left: 10% !important;
              }

              #nftShop div {
                justify-self: end !important;
                padding-right: 10% !important;
              }

              #dgromD4 {
                height: 20%;
                width: 100%;
                margin-top: 20%;
              }

              #agentsAndPatrons {
                width: 88%;
                height: 96%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.9);
                z-index: 7;
                padding: 6%;
                display: none;
                font-family: "GM-I";
                grid-template-columns: 1fr;
                grid-template-rows: 5% 40% 12% 48%;
              }
              
              #emailForm {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr;
                justify-items: center;
                align-items: senter;
                align-self: start;
                height: 30%;
              }
              
              #newsletterHead {
                font-size: 0.7em;
              }
              

              #PatreonBut #patText {
                font-family: "BS-B";
                letter-spacing: 12px;
              }

              #emailSubmit {
                border: 1px solid var(--accent);
                width: 80%;
                height: 70%;
                justify-self: center;
                text-align: center;
                letter-spacing: 4px;
                font-family: "BS-R";
              }


              #warpLock {
                height: 95%;
              }

              #comSim {
                background-size: cover;
                box-shadow: 0px 0px 10px var(--primary);
                font-family: "BS-B";
                opacity: 0.6;
                text-shadow: 0 0 5px black;
              }

              #dgromD4 {
                width: 100%;
                height: 90%;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 20% 40%;
                justify-items: start;
                align-items: start;
                grid-gap: 5%;
                margin-top: 5%;
                margin-bottom: 40%;
              }

              #mintStartBut {
                bottom: auto;
                right: auto;
                left: auto;
                align-self: center;
                justify-self: center;
                font-size: 1.8em;
                letter-spacing: 4px;
                font-family: "BS-B";
                color: var(--accent);
              }

              #syncStartBut {
                bottom: auto;
                right: auto;
                left: auto;
                align-self: center;
                justify-self: center;
                font-family: "BS-B";
                font-size: 1.2em;
                text-shadow: 0 0 5px black;
              }

              #gdBuyBut .bgImg {
                opacity: 1;
              }

              #gdBuyBut {
                border: 1px solid var(--accent);
              }

              #emailInput::placeholder {
                color: var(--secondary);
              }

              #PatreonBut {
                background-color: var(--accent);
                color: var(--secondary);
                font-family: "BS-B";
                text-shadow: 0 0 5px black;
                letter-spacing: 12px;
              }

            }

         </style>
         <div id="uniMenu">
         <div id="beaconNoti">
          <svg id="beaconNotiSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
         </div>
            <div id="refresh"></div>
            <div id="menuHeader">
              <div id="topMenu">
               <img id="uniMenuLogo" src="${mainLogo}" draggable="false">
               <div id="loadingText">Loading...</div>
               <div id="uniMenuIcon">
                <div class="menuIcon" id="mi1"></div>
                <div class="menuIcon" id="mi2"></div>
                <div class="menuIcon" id="mi3"></div>
               </div>
              </div>
              <div id="uniVersion">
                Universe - v. 0.0.6
              </div>
            </div>
            <div id="menuItems">
              <div id="uniMenuShop" class="menuTabs">
                <div>
                  <svg id="uniMenuShopSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                  <defs>
                  <style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;}.cls-2{fill:#ff002d;}</style>
                  </defs>
                  <path class="cls-1" d="M289.4,192.1c24.7-36.5,65.7-58.8,110.6-58.8c73.7,0,133.3,59.7,133.3,133.3v82.4c0,9.2,7.5,16.7,16.7,16.7c9.2,0,16.7-7.5,16.7-16.7v-11.6c10,5.8,16.7,16.5,16.7,28.9c0,18.4-14.9,33.3-33.3,33.3s-33.3-14.9-33.3-33.3c0-9.2-7.5-16.7-16.7-16.7s-16.7,7.5-16.7,16.7c0,36.8,29.9,66.7,66.7,66.7s66.7-29.9,66.7-66.7c0-31.1-21.3-57.2-50.1-64.6v-35.1v0h116.7c9.2,0,16.7,7.4,16.7,16.7V650c0,9.2-7.4,16.7-16.7,16.7H116.7c-9.2,0-16.7-7.4-16.7-16.7V283.3c0-9.2,7.4-16.7,16.7-16.7h116.7v83.4c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7v-12.6c10,5.8,16.7,16.5,16.7,28.9c0,18.4-14.9,33.3-33.3,33.3c-18.4,0-33.3-14.9-33.3-33.3c0-9.2-7.5-16.7-16.7-16.7c-9.2,0-16.7,7.5-16.7,16.7c0,36.8,29.9,66.7,66.7,66.7s66.7-29.9,66.7-66.7c0-31.1-21.3-57.2-50.1-64.6v-35.2h215.5c9.2,0,16.7-7.5,16.7-16.7s-7.5-16.7-16.7-16.7H116.7c-27.6,0-50,22.4-50,50V650c0,27.6,22.4,50,50,50h566.7c27.6,0,50-22.4,50-50V283.3c0-27.6-22.4-50-50-50h-120C547.9,157.3,480.6,100,400,100c-56,0-107.4,27.9-138.2,73.5c-5.2,7.6-3.1,18,4.5,23.1C273.9,201.8,284.3,199.8,289.4,192.1z"/>
                  </svg>
                </div>
                <div class="uniMenuTxt" id="menuEnhancements">Inventory</div>
              </div>
              <div id="uniMenuItems" class="menuTabs">
                <div>
                  <svg id="uniMenuItemsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;}.cls-2{fill:#ff002d;}</style></defs><path class="cls-1" d="M3.62,17.8,32,32.08a.73.73,0,0,0,.35.09.74.74,0,0,0,.36-.09L61.09,17.8a.79.79,0,0,0,.44-.72.81.81,0,0,0-.46-.71L32.69,3.08a.79.79,0,0,0-.67,0L3.64,16.37a.79.79,0,0,0,0,1.43Z"/><path class="cls-2" d="M61.07,25.5,54.9,22.6a.81.81,0,0,0-1.06.39A.79.79,0,0,0,54.23,24l4.68,2.2L32.35,39.61,5.79,26.24l4.61-2.15a.8.8,0,0,0-.68-1.45L3.64,25.5a.77.77,0,0,0-.46.7.82.82,0,0,0,.44.73L32,41.21a.85.85,0,0,0,.35.08.86.86,0,0,0,.36-.08L61.09,26.93a.82.82,0,0,0,.44-.73A.78.78,0,0,0,61.07,25.5Z"/><path class="cls-2" d="M61.07,35,54.9,32.13a.79.79,0,0,0-1.06.38.81.81,0,0,0,.39,1.06l4.68,2.19L32.35,49.13,5.79,35.76l4.61-2.15a.81.81,0,0,0,.38-1.06.79.79,0,0,0-1.06-.38L3.64,35a.78.78,0,0,0-.46.71.82.82,0,0,0,.44.72L32,50.73a.72.72,0,0,0,.35.08.73.73,0,0,0,.36-.08L61.09,36.45a.82.82,0,0,0,.44-.72A.8.8,0,0,0,61.07,35Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuInventory">Collections</div>
              </div>
              <div id="uniMenuProfile" class="menuTabs">
                <div>
                  <svg id="uniMenuProfileSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M31.5,26.12A11.42,11.42,0,1,1,42.92,14.7,11.43,11.43,0,0,1,31.5,26.12Zm0-21.55A10.13,10.13,0,1,0,41.63,14.7,10.15,10.15,0,0,0,31.5,4.57Z"/><path class="cls-1" d="M45.79,49.82h-28a.65.65,0,0,1-.64-.65V39.49a14.66,14.66,0,1,1,29.32,0v9.68A.65.65,0,0,1,45.79,49.82ZM18.41,48.53H45.15v-9a13.37,13.37,0,1,0-26.74,0Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuProfile">Agents</div>
              </div>
              <div id="uniMenuBeacons" class="menuTabs">
                <div>
                  <svg id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuBeacons">Beacons</div>
              </div>
              <div id="uniMenuSettings" class="menuTabs">
                <div>
                  <svg id="uniMenuSettingsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M61.26,13.89H24a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,13.89Z"/><path class="cls-1" d="M18.21,13.89H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,13.89Z"/><path class="cls-1" d="M61.26,28.27H46.64a.8.8,0,0,1-.8-.8.79.79,0,0,1,.8-.79H61.26a.79.79,0,0,1,.8.79A.8.8,0,0,1,61.26,28.27Z"/><path class="cls-1" d="M42.62,28.27H4.28a.79.79,0,0,1-.79-.8.79.79,0,0,1,.79-.79H42.62a.79.79,0,0,1,.8.79A.8.8,0,0,1,42.62,28.27Z"/><path class="cls-1" d="M61.26,42.64H22.19a.79.79,0,0,1-.8-.79.8.8,0,0,1,.8-.8H61.26a.8.8,0,0,1,.8.8A.79.79,0,0,1,61.26,42.64Z"/><path class="cls-1" d="M18.21,42.64H4.28a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8H18.21a.8.8,0,0,1,.8.8A.79.79,0,0,1,18.21,42.64Z"/><path class="cls-1" d="M18.21,20.28a.79.79,0,0,1-.79-.8V5.37a.79.79,0,0,1,.79-.8.8.8,0,0,1,.8.8V19.48A.8.8,0,0,1,18.21,20.28Z"/><path class="cls-1" d="M18.21,49.7a.79.79,0,0,1-.79-.8V34.79a.79.79,0,0,1,.79-.79.79.79,0,0,1,.8.79V48.9A.8.8,0,0,1,18.21,49.7Z"/><path class="cls-1" d="M46.64,34.59a.8.8,0,0,1-.8-.8V19.48a.79.79,0,0,1,.8-.79.79.79,0,0,1,.79.79V33.79A.79.79,0,0,1,46.64,34.59Z"/></svg>  
                </div>
                <div class="uniMenuTxt" id="menuSettings">Chronogate</div>
              </div>
              <div id="uniMenuFeedback" class="menuTabs">
                <div>
                  <svg id="uniMenuFeedbackSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:none;stroke:#ff002d;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-1" d="M14.08,41.05h23L48.9,49a1.27,1.27,0,0,0,2-1V40.42c2.3-1,5.08-3.09,5.08-5.92V11.87a6.56,6.56,0,0,0-6.54-6.55H14.08a6.55,6.55,0,0,0-6.54,6.55V34.5A6.55,6.55,0,0,0,14.08,41.05Z"/><line class="cls-1" x1="15.21" y1="14.75" x2="47.49" y2="14.75"/><line class="cls-1" x1="15.21" y1="21.75" x2="47.49" y2="21.75"/><line class="cls-1" x1="15.6" y1="28.74" x2="47.88" y2="28.74"/></svg>
                </div>
                <div class="uniMenuTxt" id="menuFeedback">Emissary</div>
              </div>
              <div id="uniMenuExit" class="menuTabs" data-connected="false">
                <div>
                  <svg version="1.1" id="uniMenuExitSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve">
                <style type="text/css">
                  .cls-1{fill:#FF002D;}
                </style>
                <path class="cls-1" d="M650,175l-7.5-7.5C600,120,537.5,105,537.5,105C462.5,82.5,345,132.5,240,235c-87.5,82.5-140,182.5-140,257.5
                  c0,10.1,2.5,20,2.5,30c5,50,37.5,102.5,64.9,127.5c35.1,35,80,52.5,130,52.5c82.5,0,180.1-47.6,270-132.5
                  C707.5,432.5,742.5,270,650,175z M250,542.5c0-32.5,35-100,110-175c72.6-72.5,147.6-92.5,182.5-100c-17.5,47.6-55,105-110,160.1
                  c-52.5,50-112.5,89.9-165,110C262.5,540,255,540,250,542.5z M275,270c82.5-82.5,170-122.6,225-122.6c17.5,0,32.5,5.1,42.5,15
                  c10.1,10,15,30,12.5,52.5c-30,2.4-132.5,19.9-230,117.5C262.5,395,197.5,485,202.5,547.5c-15,0-30.1-5-37.5-12.5
                  c-5.1-5-10.1-12.5-12.5-22.5c0,0-2.5-12.5-2.5-20C152.5,430,200,342.5,275,270z M532.5,532.5c-120,120-257.5,152.4-330,82.5
                  c-5.1-5.1-10.1-10.1-15-17.6c5,2.5,12.5,2.5,20,2.5c22.5,0,50-5,77.4-15C345,562.5,410,520,467.5,462.5C555,375,605,275,605,202.5
                  l2.5,2.4l7.5,5C685,282.5,650,417.5,532.5,532.5z"/>
                </svg>
                </div>
                <div class="uniMenuTxt" id="menuloginBut">Log-in</div>
              </div>
              <div id="uniMenuCloudHall" class="menuTabs">
                <div>
                  <svg version="1.1" id="uniMenuCloudHallSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve">
                <style type="text/css">
                  .cls-1{fill:#FF002D;}
                </style>
                <path class="cls-1" d="M650,175l-7.5-7.5C600,120,537.5,105,537.5,105C462.5,82.5,345,132.5,240,235c-87.5,82.5-140,182.5-140,257.5
                  c0,10.1,2.5,20,2.5,30c5,50,37.5,102.5,64.9,127.5c35.1,35,80,52.5,130,52.5c82.5,0,180.1-47.6,270-132.5
                  C707.5,432.5,742.5,270,650,175z M250,542.5c0-32.5,35-100,110-175c72.6-72.5,147.6-92.5,182.5-100c-17.5,47.6-55,105-110,160.1
                  c-52.5,50-112.5,89.9-165,110C262.5,540,255,540,250,542.5z M275,270c82.5-82.5,170-122.6,225-122.6c17.5,0,32.5,5.1,42.5,15
                  c10.1,10,15,30,12.5,52.5c-30,2.4-132.5,19.9-230,117.5C262.5,395,197.5,485,202.5,547.5c-15,0-30.1-5-37.5-12.5
                  c-5.1-5-10.1-12.5-12.5-22.5c0,0-2.5-12.5-2.5-20C152.5,430,200,342.5,275,270z M532.5,532.5c-120,120-257.5,152.4-330,82.5
                  c-5.1-5.1-10.1-10.1-15-17.6c5,2.5,12.5,2.5,20,2.5c22.5,0,50-5,77.4-15C345,562.5,410,520,467.5,462.5C555,375,605,275,605,202.5
                  l2.5,2.4l7.5,5C685,282.5,650,417.5,532.5,532.5z"/>
                </svg>
                </div>
                <div class="uniMenuTxt" id="menuCloudHall">CloudHall 12</div>
              </div>
            </div>
            <div id="fullMenu">
              <div id="romOffline">
                <div id="dgromD1">
                  <div id="dgHead">DIGISETTE</div>
                  <div id="dgChangelog"></div>
                </div>
                <div id="comSim">
                  <div id="comIcon1" class="comImg">
                    <img src="${comGlove}">
                  </div>
                  <div id="comBut">
                    <div id="comButText1">COMBAT SIMULATOR</div>
                    <div id="comButText2">Version 0.1 (OFFLINE)</div>
                  </div>
                  <div id="comIcon2" class="comImg">
                     <img src="${comAvatar}">
                  </div>
                </div>
                <div id="dgromD4">
                  <div class="romLogButtons" id="syncStart">
                    <div class="bgImg" id="syncBG"></div>
                    <div class="buttonTxt" id="syncStartBut">SYNC</div>
                  </div>
                  <div class="romLogButtons glowButton" id="gdBuyBut">
                    <div class="bgImg" id="mintBG"></div>
                    <div class="buttonTxt" id="mintStartBut">FORGE</div>
                  </div>
                </div>
              </div>
              <div id="domainUnDev">
                <div id="unDev1">
                  DIGISETTE ROM
                </div>
                <div id="unDev2">
                  <div class="unReg" id="unDev2-1">REGISTER YOUR DOMAIN</div>
                  <div class="unReg" id="unDev2-2">REGISTER YOUR DOMAIN</div>
                </div>
                <div id="unDev4">
                  <span class="actionArrows" id="aaL">>></span>
                  <div class="ddLogButtons" id="gdBuyBut2">Visit T.C. Domain Development Center</div>
                  <span class="actionArrows" id="aaR"><<</span>
                </div>
                <div id="unDev3">
                  <img src="https://storage.scoge.co/scogeUniverse/uniMenu/domain-wireframe.png" alt="Domain Development" id="ddLogo">
                </div>
              </div>
              <div id="agentsAndPatrons">
                <div id="agentssPage">
                  <div id="dgHead">AGENTS</div>
                  <div id="dgChangelog"></div>
                </div>
                <div id="PatreonBut" class="glowButton">
                  <div class="bgImg" id="patronBG"></div>
                  <div class="buttonTxt" id="patText">PATREON</div>
                </div>
                <div id="newsletterHead">CLICK ABOVE TO JOIN OUR EXCLUSIVE PATREON, OR SUBSCRIBE TO THE SCOGÉ NEWSLETTER BELOW FOR UPDATES.</div>
                <form id="emailForm">
                  <input type="email" id="emailInput" placeholder="ENTER YOUR EMAIL" required>
                  <input type="submit" id="emailSubmit" value="SUBSCRIBE">
                </form>
              </div>
              <div id="warpLock">
                <div id="agentssPage">
                  <div id="dgHead">CHRONOGATE</div>
                  <div id="dgChangelog"></div>
                </div>
                <combination-lock active="active" id="cLock"></combination-lock>
              </div>
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
                  <span id="fm-menu3" class="men-active ht">Lords</span>
                </div>
                <div id="uniMenuIcon2">
                  &#8682;
                </div>
              </div>
              <div id="fm-enhancements">
              </div>
              <div id="fm-inventory">
                <div id="inventoryBody">
                  <div class="inventory-tabs it1">
                      <div class="collectionTab" id="collection3"><span class="cDot">&#9658;</span>FW23 - Ch.2 ALAN & EVIE</div>
                      <div class="collectionTab" id="collection2"><span class="cDot">&#9658;</span>SS23 - Ch.1 REACCLIMATE</div>
                      <div class="collectionTab" id="collection1"><span class="cDot">&#9658;</span>FW22 - Discovery 1</div>
                  </div>
                  <div class="inventory-tabs it2">
                    <div class="inventory-text">
                      <span class="itHead">Domain/s:</span>
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
                    </div>
                    <div id="invetory-enh-images">
                      <div id="landCardCont">
                          <div class="Inventory-Image-Cont getNew">
                            ADD NEW
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                          <div class="Inventory-Image-Cont">
                            <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="inventory-tabs it3" style="display:none;"></div>
                </div>
                <div id="inventory-cta" style="display:none;">
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
                    <img id="proImg" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/TAOS-CITY-IDC.png">
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
                    <label class="switch" id="fsToggleLabel">
                    <input type="checkbox" id="fsToggle">
                    <span class="slider round" id="fsSlider"></span>
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
                    <input type="range" min="0" max="5" value="2" class="soundSlider1" id="myRange">
                  </div>
                </div>
                <div class="settingsSectionsSlider">
                  <div>Music</div>
                  <div>
                    <input type="range" min="0" max="5" value="5" class="soundSlider1" id="myRange2">
                  </div>
                </div>
                <!--
                <div id="creditsSect">
                    <div id="creditsBut">Credits</div>
                    <div id="creditNames">Sountrack: ROTS Worldwide</div>
                </div>
                -->
                <div class="saveButs">
                  <div id="settingsSave">Save</div>
                </div>
              </div>
              <div id="fm-beacons">
                <div class="beacon-tabs ht1" id="beaconsBody">
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
                <div id="feedbackHeadline">Contact SCOGÉ</div>
                <form id="feedbackForm">
                  <input type="email" name="Email" id="feedbackEmailInput" placeholder="Email:" maxlength="45">
                  <textarea id="feedbackInput" name="FeedbackText" placeholder="Message:" maxlength="320"></textarea>
                  <input id="feedbackButton" type="submit">
                </form>
              </div>
              <div id="fm-cloudHall">
                <div id="cloudHallBody">
                  <div class="cloudHall-tabs ct1">
                    <img src="https://storage.scoge.co/scogeUniverse/uniMenu/tc-dd-seal.png" alt="CloudHall 12" id="cloudHallImg">
                    <div id="cloudHallText">GRAND COUNCIL CENTER<br>- UNDER CONSTRUCTION -</div>
                  </div>
                  <div class="cloudHall-tabs ct2">
                    <img src="https://storage.scoge.co/scogeUniverse/avatars/avatar-base1.png" alt="CloudHall 12" id="cloudHallGarmentImg">
                  </div>
                  <div class="cloudHall-tabs ct3">
                  </div>
                </div>
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
