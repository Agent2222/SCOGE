// UNIVERSE SYSTEM
// import { SoundtrackManager } from "./soundtrack.js";
// import { idlFactory } from "./declarations/universe_backend/universe_backend.did.js";
import {
  chatRoom
} from "./uniHelpers/chat.js";
import {
  uniPlayers
} from "./uniHelpers/players.js";
import {
  Scenario
} from "./game/scenarios/Scenarios.js";
import {
  DialogueScene
} from "./game/scenarios/DialogueScene.js";
import {
  CutScene
} from "./game/scenarios/CutScene.js";
import {
  gsap
} from "gsap";
import {
  story
} from "./game/SceneManager.js";
import {
  activateMapper,
  initLocationHUD,
  regionPassCheck,
  loadAllDomains,
} from "../src/uniHelpers/mapper";
import data from "./sudb.json";
import {
  digisetteData,
  updateMetadata
} from "./uniHelpers/citycentral.js";
import {
  scogeUniverse
} from "./game/GameManger.js";

const dsheet =
  "https://script.google.com/macros/s/AKfycbzHUtfeNysmMSZvlC7tnfYhpgs_EU_3kx9_6H_VV6le8tPyR4Vlzs8SlfES_8pbK0nb2w/exec";

// export const soundtrack = new SoundtrackManager();

var testState = {
  whitelistPrincipals: [{
    principal: "ryjl3-tyaaa-aaaaa-aaaba-cai",
    name: "ryjl3-tyaaa-aaaaa-aaaba-cai",
  }, ],
  admins: ["ryjl3-tyaaa-aaaaa-aaaba-cai"],
  hasPlug: false,
  hasBitfinity: false,
  hasDigisette: false,
  metaJson: {
    category: "megaLord",
    name: "Digisette Pre-Alpha",
    description: "Limited edition pre-alpha 1 of 450 Digisette.",
    url: `https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/SCOGE-Yumi-LaunchCollection Logo.jpg`,
    attributes: [{
      ringType: "",
      domains: [{
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
      }, ],
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
    }, ],
    mimeType: "image",
    thumb: `example`,
    timestamp: +new Date(),
  },
};

export var domainNumber = null;

var camPad = 0;
var loadedGame = null;

export const attn = async (error, np) => {
  let data = new FormData();
  if (error != undefined) {
    data.append("Email", "ATTN: RELOAD");
    data.append("FeedbackText", `${error.e.props.Message}`);
  }
  if (np != undefined) {
    data.append("Email", "ATTN: ENTER TAOS CITY");
    data.append("FeedbackText", `${np}`);
  }
  fetch(
    "https://script.google.com/macros/s/AKfycbwyfpqK5BOPXAZnGpXc0e6szgHqYwXfX7jajbDNEENP7Et0l36InKzVUECe9ENCBO7uhA/exec?focus=feedback", {
      method: "POST",
      body: data,
      mode: "cors",
    }
  ).then((res) => res.text());
};

// MP
var mapping2 = [];

var editorActive = false;

// Test Function Button
const testFunctionButton = () => {
  var testFunction = document.createElement("div");
  testFunction.id = "testFunction";
  testFunction.style.right = "2%";
  testFunction.style.top = "10%";
  testFunction.style.position = "fixed";
  testFunction.style.zIndex = "501";
  testFunction.style.width = "40px";
  testFunction.style.height = "40px";
  testFunction.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  testFunction.style.borderRadius = "10px";
  testFunction.style.border = "1px solid #ff002d";
  testFunction.addEventListener("click", async () => {
    updateMetadata(0, digisetteData);
  });
  document.getElementById("main").appendChild(testFunction);
};

// Editor Button
const editorButton = () => {
  var viewEditor = document.createElement("div");
  viewEditor.id = "viewEditor";
  viewEditor.style.right = "2%";
  viewEditor.style.top = "3%";
  viewEditor.style.position = "fixed";
  viewEditor.style.zIndex = "501";
  viewEditor.style.width = "40px";
  viewEditor.style.height = "40px";
  viewEditor.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  viewEditor.style.borderRadius = "10px";
  viewEditor.style.border = "1px solid #ff002d";
  viewEditor.addEventListener("click", async () => {
    const editorModule = await import("../editor.js");
    var editorState = await editorModule.editor(editorActive);
    if (editorState === false) {
      editorActive = false;
      return;
    }
    if (editorState === true) {
      editorActive = true;
      return;
    }
  });

  document.getElementById("main").appendChild(viewEditor);
};

// Mapper Button
const mapperButton = () => {
  if (!document.getElementById("viewMapper")) {
    var viewMapper = document.createElement("div");
    viewMapper.id = "viewMapper";
    viewMapper.style.right = "6%";
    viewMapper.style.top = "3%";
    viewMapper.style.position = "fixed";
    viewMapper.style.zIndex = "501";
    viewMapper.style.width = "40px";
    viewMapper.style.height = "40px";
    viewMapper.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    viewMapper.style.borderRadius = "10px";
    viewMapper.style.border = "1px solid var(--secondary)";
    document.getElementById("main").appendChild(viewMapper);
  }
  // Mapper
  if (viewMapper) {
    viewMapper.addEventListener("click", () => {
      activateMapper();
    });
  }
};

export const adminMenu = () => {
  if (!document.getElementById("adminMenu")) {
    var adminMenu = document.createElement("div");
    adminMenu.id = "adminMenu";
    adminMenu.style.right = "1%";
    adminMenu.style.top = "3%";
    adminMenu.style.position = "fixed";
    adminMenu.style.zIndex = "501";
    adminMenu.style.width = "auto";
    adminMenu.style.height = "5%";
    adminMenu.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    adminMenu.style.borderRadius = "10px";
    adminMenu.style.border = "1px solid var(--primary)";
    adminMenu.style.textTransform = "uppercase";
    adminMenu.style.fontFamily = "BS-R";
    adminMenu.style.display = "flex";
    adminMenu.style.flexDirection = "row";
    adminMenu.style.fontSize = "12px";
    adminMenu.style.letterSpacing = "1px";
    adminMenu.innerHTML = `
      <div id="adminMapper" class="adminMenuItem" style="width: 150px; height: 100%; display: flex; justify-content: center; align-items: center; cursor: pointer; border-bottom: 1px solid #ff002d;">MAPPER</div>
      <div id="adminRRC" class="adminMenuItem" style="width: 150px; height: 100%; display: flex; justify-content: center; align-items: center; cursor: pointer; border-bottom: 1px solid #ff002d;">RR Creator</div>
      <div id="adminCCPADB" class="adminMenuItem" style="width: 150px; height: 100%; display: flex; justify-content: center; align-items: center; cursor: pointer; border-bottom: 1px solid #ff002d;">CCPA DB</div>
      `;

    document.getElementById("main").appendChild(adminMenu);

    document.getElementById("adminMapper").addEventListener("click", () => {
      activateMapper();
    });
    document.getElementById("adminRRC").addEventListener("click", async () => {
      const editorModule = await import("../editor.js");
      var editorState = await editorModule.editor(editorActive);
      if (editorState === false) {
        editorActive = false;
        return;
      }
      if (editorState === true) {
        editorActive = true;
        return;
      }
    });
    document.getElementById("adminCCPADB").addEventListener("click", () => {
      var el = document.getElementById("ccpaModal");

      if (el.classList.contains("loaded")) {
        var ccpaModal = document
          .getElementById("ccpaModal")
          .shadowRoot.getElementById("main");
        gsap.to(ccpaModal, {
          duration: 0.5,
          opacity: 1,
          scaleX: 1,
          ease: "power2.inOut",
        });
        return;
      }

      document.getElementById("ccpaModal").setAttribute("active", "true");
      document.getElementById("ccpaModal").classList.add("loaded");
      window.adminMode = true;
    });
    return;
  }
};

// Init Soundtrack
export async function universe() {
  const channel = window.ably.channels.get("alphaTestersChat");
  const channel2 = window.ably.channels.get("lordsInTheCity");

  // US VARS
  var universeCanvas = document.querySelector("#universe");
  var exploreUI = document.querySelector("#exploreUI");
  var previewUI = document.getElementById("previewUI");
  var expBox = document.getElementById("explore");
  var locked = document
    .getElementById("getUniMenu")
    .shadowRoot?.getElementById("locked");
  var moveMenu = document
    .getElementById("getUniMenu")
    .shadowRoot?.getElementById("uniMenu");
  var playerPos = {
    x: 0,
    y: 0
  };
  var selectionPos = {
    x: 0,
    y: 0
  };
  var selectionBoxPosition = {
    x: 0,
    y: 0
  };
  var cityPosition = {
    x: 0,
    y: 0
  };
  var convertedSelPos;
  var convertedCursorPos;
  var tileSize = 18;
  var playerNum = 0;
  var msL = 50;
  var msR = 50;
  var msU = 50;
  var msD = 50;
  var movementPaused = false;
  var timeoutHandle1;
  var timeoutHandle2;
  var previewOpen = false;
  var typing = false;
  var actor = null;
  var canon = null;
  var tipActive = false;
  var tipInit = false;
  var tipInit2 = false;
  window.minactive = false;
  window.compPosition = "right";
  window.sendButActive = false;
  window.playerOnline = false;
  window.connected = false;
  window.mapperActive = false;
  window.loggedIn = false;
  window.movementBlock = false
  var tempLandEx = ["1435", "3162", "2849", "6208", "1980"];
  var playing = {
    startVolume: 0.2,
    fullVolume: 0.6,
    running: false,
  };
  window.spoke = {
    spokeAcclimatePlaying: false,
    spokeAcclimate: false,
  };
  window.activeGames = [];
  window.suUiActor = null;
  window.landActivated = false;
  window.chatActive = false;
  window.domainType = "";
  // window.getAllUserNFTs = {};i
  // export const suIDL = idlFactory;
  // const suIDL = idlFactory;
  var uiState = {
    nftsLoaded: false,
  };
  // eslint-disable-next-line no-unused-vars
  // const VITE_canister = import.meta.env.VITE_universe_backend_canister_Id;
  const can2 = "ryjl3-tyaaa-aaaaa-aaaba-cai";
  const whitelist = [can2];
  // eslint-disable-next-line no-unused-vars
  const host =
    "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=wnunb-baaaa-aaaag-aaoya-cai";
  const local = "http://localhost:8080/";
  const localhost =
    "http://127.0.0.1:8080/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai";
  // BEFORE LAUNCH !!!!!!!!!
  // Rebuilding Actors Across Account Switches

  // window.universeSystem = async () => {
  //   // City Elements
  //   var uniEvent = document.createElement("div");
  //   var uniEvent2 = document.createElement("div");
  //   var uniEvent3 = document.createElement("div");
  //   var uniEvent4 = document.createElement("div");
  //   var uniEvent5 = document.createElement("div");
  //   //

  //   window.moveMenu();
  // };

  window.reloaduniverseSystem = async () => {
    var uniCtx = universeCanvas.getContext("2d");
    var img = document.createElement("img");
    var cam = document.getElementById("camera");
    img.onload = function () {
      // clear canvas
      uniCtx.clearRect(0, 0, universeCanvas.width, universeCanvas.height);
      uniCtx.drawImage(img, 0, 0, img.width, img.height);
      // make a 18px by 18px grid overlay
      uniCtx.fillStyle = "rgba(255, 255, 255, 0.08)";
      for (var x = 0; x < img.width; x += tileSize) {
        uniCtx.fillRect(x, 0, 1, img.height);
      }
      for (var y = 0; y < img.height; y += tileSize) {
        uniCtx.fillRect(0, y, img.width, 1);
      }
    };
    img.src =
      "https://storage.scoge.co/scogeUniverse/maps/scoge-taos-city-universe.jpg";
    cam.scrollTo(990, 0);
  };

  // Admin UI
  window.adminUI = () => {
    if (!document.getElementById("adminUI")) {
      var uiWindow = document.createElement("div");
      var columnDiv = document.createElement("div");
      var rowDiv = document.createElement("div");
      var selectionPosDiv = document.createElement("div");
      var pixelPosDiv = document.createElement("div");
      var selectPosBoxDiv = document.createElement("div");
      var playerCordDiv = document.createElement("div");
      var playerScreenCoor = document.createElement("div");
      // REACTIVATE THIS
      // document.getElementById("selection").style.display = "block";
      uiWindow.id = "adminUI";
      columnDiv.id = "DebugColumn";
      rowDiv.id = "DebugRow";
      selectionPosDiv.id = "selectionPos";
      pixelPosDiv.id = "pixelPos";
      selectPosBoxDiv.id = "selectPosBox";
      playerCordDiv.id = "playerCord";
      playerScreenCoor.id = "playerScreenCoor";
      uiWindow.appendChild(pixelPosDiv);
      uiWindow.appendChild(columnDiv);
      uiWindow.appendChild(rowDiv);
      uiWindow.appendChild(selectionPosDiv);
      uiWindow.appendChild(selectPosBoxDiv);
      uiWindow.appendChild(playerCordDiv);
      uiWindow.appendChild(playerScreenCoor);
      document.getElementById("main").appendChild(uiWindow);
    }
    dragElement(document.getElementById("adminUI"), true);
    dragElement(document.getElementById("exploreUI"), true);
    if (selectPosBoxDiv) {
      selectionPosDiv.innerHTML = "Selected Tile:";
    }
    if (columnDiv) {
      columnDiv.innerHTML = "Column:";
      rowDiv.innerHTML = "Row:";
      pixelPosDiv.innerHTML = "X: , Y:";
      selectPosBoxDiv.innerHTML = "SelBoxTile:";
      playerCordDiv.innerHTML = "Player Coordinates:";
      playerScreenCoor.innerHTML = "Player Screen Coord:";
    }
  };

  // mouse position
  window.mousePos = (e) => {
    // get mouse position
    var rect = universeCanvas.getBoundingClientRect();
    playerPos.x = Math.round((e.clientX - rect.left) / tileSize);
    playerPos.y = Math.round((e.clientY - rect.top) / tileSize);
    window.pixelPos.x = e.clientX - rect.left;
    window.pixelPos.y = e.clientY - rect.top;
    // innerHTML mouse position to adminUI
    document.getElementById("DebugColumn").innerHTML = "Column: " + playerPos.x;
    document.getElementById("DebugRow").innerHTML = "Row: " + playerPos.y;
    document.getElementById("pixelPos").innerHTML =
      "X: " + window.pixelPos.x + ", " + "Y: " + window.pixelPos.y;
  };

  // selection position
  window.selectedPos = (e) => {
    window.chatActive = false;
    // get mouse position
    document.getElementById("explore").style.display = "block";
    var rect = universeCanvas.getBoundingClientRect();
    if (
      exploreUI.style.transform === "scale(1)" &&
      window.landActivated === true
    ) {
      window.soundtrack.play("closewindow-1");
    }
    exploreUI.style.transform = "scale(0)";
    selectionPos.x = Math.round((e.clientX - (rect.left + 9)) / tileSize);
    selectionPos.y = Math.round((e.clientY - (rect.top + 9)) / tileSize);
    // innerHTML mouse position to adminUI
    var deduct = 170 - selectionPos.x;
    document.getElementById("selectionPos").innerHTML =
      "Selected Tile: " + (170 - deduct + 170 * selectionPos.y);
    playerNum = 170 - deduct + 170 * selectionPos.y;
    convertedCursorPos = 170 - deduct + 170 * selectionPos.y;
    previewUI.innerHTML = "Domain " + playerNum;
    previewUI.style.color = "blue";

    // convert playerNum back to x and y coordinates on the canvas
    // var x = playerNum % 170;
    // var y = Math.floor(playerNum / 170);
    // selectionBoxPosition.x = x * tileSize;
    // selectionBoxPosition.y = y * tileSize;

    // move explore box to pointer and snap to nearest grid position
    expBox.style.left = e.clientX - expBox.offsetWidth / 2 + "px";
    expBox.style.top = e.clientY - expBox.offsetHeight / 2 + "px";
    expBox.style.left =
      Math.round((expBox.offsetLeft - rect.left) / tileSize) * tileSize +
      rect.left +
      "px";
    expBox.style.top =
      Math.round((expBox.offsetTop - rect.top) / tileSize) * tileSize +
      rect.top +
      "px";
    // display previewUI and position it 18px to the right of the explore box and the bottom of the preview box is 18px above the explore box top edge
    previewUI.style.display = "block";
    previewUI.style.left = expBox.offsetLeft + expBox.offsetWidth + 18 + "px";
    previewUI.style.top = expBox.offsetTop - 108 + "px";
    // if position is less than 215px from the top edge of the canvas, move previewUI to the bottom of the explore box
    previewUI.style.transformOrigin = "bottom left";
    if (expBox.offsetTop < 215) {
      previewUI.style.top = expBox.offsetTop + expBox.offsetHeight + 18 + "px";
      previewUI.style.transformOrigin = "top left";
    }
    // if position is 215px from the right edge of the screen, move previewUI to the left of the explore box
    if (expBox.offsetLeft > window.innerWidth - 215) {
      previewUI.style.left =
        expBox.offsetLeft - previewUI.offsetWidth - 18 + "px";
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
  };

  // DRAG

  // Deactivate Menu Drag
  window.deactivateDrag = () => {
    var pinUi = document
      .getElementById("getUniMenu")
      .shadowRoot?.getElementById("pinMenu");
    moveMenu.onmousedown = null;
    document.onmouseup = null;
    document.onmousemove = null;
    pinUi.style.borderTop = "4px solid #ff002d";
    pinUi.style.borderLeft = "4px solid #ff002d";
    pinUi.setAttribute("class", "pinned");
    locked.style.opacity = "1";
  };

  // Pin Menu
  window.pinMenu = (direction) => {
    var pinUi = document
      .getElementById("getUniMenu")
      .shadowRoot?.getElementById("pinMenu");
    if (pinUi.getAttribute("class") == "pinned") {
      dragElement(moveMenu, true);
      pinUi.setAttribute("class", "unpinned");
      return;
    }
    if (pinUi.getAttribute("class") == "unpinned") {
      window.deactivateDrag();
      pinUi.setAttribute("class", "pinned");
      moveMenu.style.transition = ".5s";
      moveMenu.style.top = "36px";

      if (direction === "right") {
        gsap.to(moveMenu, {
          duration: 1,
          left: "auto",
          right: "36px",
          ease: "power3.out",
        });
      }
      if (direction === "left") {
        gsap.to(moveMenu, {
          duration: 1,
          left: "36px",
          right: "auto",
          ease: "power3.out",
        });
      }

      document.getElementById("getUniMenu").toggleMenu();
      setTimeout(() => {
        moveMenu.style.transition = "";
      }, 1200);
      return;
    }
  };

  const lcCheck = () => {
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    );
  };

  window.moveSelection = () => {
    var box = document.getElementById("selection");
    var window18Height = window.innerHeight / tileSize;
    var window18Width = window.innerWidth / tileSize;
    var topCenter = window18Height / 2;
    var leftCenter = window18Width / 2;
    // selectionBoxPosition.x = leftCenter * tileSize;
    // selectionBoxPosition.y = topCenter * tileSize;
    // Starting Point
    // selectionBoxPosition.x = 206;
    // selectionBoxPosition.y = 143;
    selectionBoxPosition.x = Number(mapping2[1447].x);
    selectionBoxPosition.y = Number(mapping2[1447].y);
    // make a event listeniner for arrow keys and move the selection box 18px in the direction of the arrow key pressed starting from its current position if window is not scrolling. Stop from moving at the edge of the window screen size.

    // Help Tooltip
    // if (tipInit === false) {
    //   tipInit = true;
    //   document.addEventListener("keyup", (e) => {
    //     if (e.keyCode == 72 && window.loggedIn === true) {
    //       alert("Help Tooltip ON");
    //       document.getElementById("miniAgent").setAttribute("status", "help");
    //       if (tipActive === false) {
    //         tipActive = true;
    //         document.getElementById("stt").setAttribute("active", "true");
    //         return;
    //       } else {
    //         document
    //           .getElementById("miniAgent")
    //           .setAttribute("status", "default");
    //         tipActive = false;
    //         document.getElementById("stt").setAttribute("active", "false");
    //       }
    //     }
    //   });
    // }

    // if (tipInit2 === false) {
    //   tipInit2 = true;
    //   document.addEventListener("mousemove", (e) => {
    //     // get element under mouse click
    //     var element = document.elementFromPoint(e.clientX, e.clientY);
    //     if (e.target.shadowRoot) {
    //       var innerElement = element.shadowRoot?.elementFromPoint(
    //         e.clientX,
    //         e.clientY
    //       );
    //       if (innerElement) {
    //         element = innerElement;
    //       }
    //     }
    //     //
    //     if (tipActive === true && element.hasAttribute("data-help")) {
    //       document.getElementById("stt").placeTip(element);
    //       document.getElementById("stt").updateData(element);
    //     } else {
    //       document.getElementById("stt").hideTip();
    //     }
    //   });
    // }

    // KEY CONTROLS
    document.addEventListener("keydown", async function (e) {

      window.soundtrack.setVolume("closewindow-1", 0.4);
      window.soundtrack.setVolume("typing-1", 0.8);

      // PLAYER MOVEMENT 1
      if (window.chatActive != true && window.tempIn === true) {
        dragElement(document.getElementById("exploreUI"), true);

        if (e.keyCode == 37 && window.loggedIn === true) {
          // LEFT
          window.soundtrack.stop("reacclimate-1");
          window.uniPlayer.emote = "";
          const pass = await regionPassCheck(null, null, domain, mapping2);
          if (pass.left != true) {

            if (
              exploreUI.style.transform === "scale(1)" &&
              window.landActivated === true
            ) {
              window.soundtrack.play("closewindow-1");
            }
            exploreUI.style.transform = "scale(0)";
            // if (selectionBoxPosition.x > 0) {
            if (movementPaused == false) {
              selectionBoxPosition.x -= tileSize;
              movementPaused = true;
              setTimeout(() => {
                movementPaused = false;
              }, msL);
            }
            // }
          } else {
            alert("You need to unlock this region to proceed");
          }
        }

        if (e.keyCode == 38 && window.loggedIn === true) {
          // UP
          window.soundtrack.stop("reacclimate-1");
          window.uniPlayer.emote = "";

          if (
            exploreUI.style.transform === "scale(1)" &&
            window.landActivated === true
          ) {
            window.soundtrack.play("closewindow-1");
          }
          exploreUI.style.transform = "scale(0)";
          // if (selectionBoxPosition.y > 0) {
          if (movementPaused == false) {
            selectionBoxPosition.y -= tileSize;
            movementPaused = true;
            setTimeout(() => {
              movementPaused = false;
            }, msU);
          }
          // }
        }
        if (e.keyCode == 39 && window.loggedIn === true) {
          // RIGHT
          window.soundtrack.stop("reacclimate-1");
          window.uniPlayer.emote = "";

          if (
            exploreUI.style.transform === "scale(1)" &&
            window.landActivated === true
          ) {
            window.soundtrack.play("closewindow-1");
          }
          exploreUI.style.transform = "scale(0)";
          // if (selectionBoxPosition.x < window18Width * tileSize - tileSize) {
          if (movementPaused == false) {
            selectionBoxPosition.x += tileSize;
            movementPaused = true;
            setTimeout(() => {
              movementPaused = false;
            }, msR);
          }
          // }
        }
        if (e.keyCode == 40 && window.loggedIn === true) {
          // DOWN
          window.soundtrack.stop("reacclimate-1");
          window.uniPlayer.emote = "";

          if (
            exploreUI.style.transform === "scale(1)" &&
            window.landActivated === true
          ) {
            window.soundtrack.play("closewindow-1");
          }
          exploreUI.style.transform = "scale(0)";
          // if (selectionBoxPosition.y < window18Height * tileSize - tileSize) {
          if (movementPaused == false) {
            selectionBoxPosition.y += tileSize;
            movementPaused = true;
            setTimeout(() => {
              movementPaused = false;
            }, msD);
          }
          // }
        }
        box.style.left = selectionBoxPosition.x + "px";
        box.style.top = selectionBoxPosition.y + "px";
        // window.playerPos();
        // if space bar is pressed open the explore UI
        if (e.keyCode == 32 && window.loggedIn === true) {
          window.exploreOpenHelper();
          window.soundtrack.stop("discovered-1");
          window.uniPlayer.emote = "";
          window.soundtrack.stop("reacclimate-1");
        }
        ///////////////////////
        //// TEMP
        ///////////////////////
        if (e.keyCode == 88 && window.loggedIn === true) {
          document.getElementById("universe").style.filter = "blur(0px)";
          document.getElementById("currentSceneView_scene1").style.display =
            "none";
        }
      } else if (window.chatActive === true && window.tempIn === true) {
        if (
          e.keyCode != 37 ||
          e.keyCode != 38 ||
          e.keyCode != 39 ||
          (e.keyCode != 40 && typing == true)
        ) {
          window.soundtrack.stop("typing-1");
          window.soundtrack.play("typing-1");
        }
      }
    });
    // scroll the camera element when the selection box reaches the edge of the window screen size (Update with sector activations)
    document.addEventListener("keydown", function (e) {
      var ddev = document.getElementById("compDomainDev");
      if (e.keyCode == 37 && window.loggedIn === true) {
        // LEFT
        initLocationHUD(domain, mapping2);
        if (selectionBoxPosition.x == 0 && pass.left != true) {
          document.getElementById("camera").scrollLeft -= tileSize;
        }

        // check if selectionBoxPosition.x is less than 40% of the window width
        if (selectionBoxPosition.x < window18Width * 0.4 * tileSize) {
          window.compPosition = "right";
          if (ddev.getAttribute("active") == "true") {
            ddev.right();
            return;
          }
        }
      }
      if (e.keyCode == 38 && window.loggedIn === true) {
        // UP
        initLocationHUD(domain, mapping2);
        const pass = regionPassCheck(null, null, domain, mapping2);
        if (lcCheck() === true) {
          if (selectionBoxPosition.y <= 9) {
            document.getElementById("camera").scrollTop -= tileSize;
          }
        } else {
          if (selectionBoxPosition.y == 0) {
            document.getElementById("camera").scrollTop -= tileSize;
          }
        }
      }
      if (e.keyCode == 39 && window.loggedIn === true) {
        // RIGHT
        initLocationHUD(domain, mapping2);
        const pass = regionPassCheck(null, null, domain, mapping2);
        if (selectionBoxPosition.x == window18Width * tileSize - tileSize && pass.right != true) {
          document.getElementById("camera").scrollLeft += tileSize;
        }

        // check if selectionBoxPosition.x is greater than 60% of the window width
        if (selectionBoxPosition.x > window18Width * 0.6 * tileSize) {
          window.compPosition = "left";
          if (ddev.getAttribute("active") == "true") {
            ddev.left();
            return;
          }
        }
      }
      if (e.keyCode == 40 && window.loggedIn === true) {
        // DOWN
        initLocationHUD(domain, mapping2);
        const pass = regionPassCheck(null, null, domain, mapping2);
        if (lcCheck() === true) {
          if (selectionBoxPosition.y >= window18Height * tileSize - tileSize) {
            document.getElementById("camera").scrollTop += tileSize;
          }
        } else {
          if (selectionBoxPosition.y == window18Height * tileSize - tileSize) {
            document.getElementById("camera").scrollTop += tileSize;
          }
        }
      }
      var viewEditor = document.getElementById("viewEditor");
      var char = document.getElementById("selection");
      var leftSel = Math.floor(
        window.innerWidth - Number(char.style.left.replace("px", ""))
      );
      var topSel = Math.floor(Number(char.style.top.replace("px", "")));
      var bottomSel = Math.floor(
        window.innerHeight - Number(char.style.top.replace("px", ""))
      );

      if (leftSel < 100 && topSel < 100) {
        viewEditor.style.top = "auto";
        viewEditor.style.bottom = "5%";
      }
      if (leftSel < 100 && bottomSel < 100) {
        viewEditor.style.top = "5%";
        viewEditor.style.bottom = "auto";
      }
    });
  };

  // Open Location Card
  window.openLocationCard = () => {
    universeCanvas.addEventListener("dblclick", () => {
      document.getElementById("previewUI").style.transform = "scale(0)";
      if (convertedSelPos === convertedCursorPos) {
        window.exploreOpenHelper();
      } else {
        var adminUI = document.getElementById("adminUI");
        if (adminUI.style.opacity == "1") {
          adminUI.style.opacity = "0";
          return;
        } else {
          adminUI.style.opacity = "1";
        }
      }
    });
  };

  //////////////////////////////////////////
  // TEMP LOCATION CARD VARIABLES
  //////////////////////////////////////////
  var tempContx = `
  <div id="unclaimedBox">
  <div id="unclaimed">UNCLAIMED DOMAIN</div>
  </div>`;
  var tempCont1 = `<div class="cannonIcon">
  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
  </div>
  <div class="canonStory">
  <div class="listen">[ STOP ]</div>
  <h1>Oracle Mansion</h1>
  <p>In the distant lands of T.A.O.S City, there exists a hidden world of self-exiled creators, known as the Oracles. These Oracles reside in ancient, desolate mansions on the outskirts of the city, and possess a wealth of knowledge and experience that is sought after by migrants from far-off lands. These migrants come to T.A.O.S City in search of a new life, but often find themselves lost and alone in a vast and unfamiliar place. They turn to the Oracles for guidance, seeking to avoid the wrath of the city's enforcers, a powerful and ruthless group of conservative citizens.
  <br><br>
  The journey to visit the Oracles is not an easy one. Many must travel for days, through treacherous and unforgiving terrain, in order to reach the Oracles' remote dwellings. But those who are successful in their quest are rewarded with a profound understanding of themselves and the world around them. The Oracles' teachings help the migrants to remember something that they had long forgotten, and to reacclimate to the new and strange land they now call home.
  </p>
  </div>
  `;
  var tempCont2 = `
  <div class="cannonIcon">
  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
  </div>
  <div id="tempVidHead">Ch.2 - Prologue 1</div>
  <div id="tempVidCon">
    <video id="tempVid" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Chapter2-Prologue-1-HD.mp4" controls></video>
  </div>
  `;
  var tempCont3 = `
  <div class="cannonIcon">
  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
  </div>
  <div id="tempVidHead2">Speak Easy</div>
  <div id="tempVidCon2">
    <video id="tempVid2" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/nightout.mp4" controls></video>
  </div>
  `;
  var chatDomTemplate = `
  <div class="cannonIcon">
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
  </div>
  <div class="domainFunction">
    <div class="domainHeader">
      <div class="doaminOwner">LORD DAMION</div>
      <div class="domainName">TC-BARGE-1</div>
    </div>
    <div class="domainInfo">
      <div class="domainLordImg">
        <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
      </div>
      <div class="domainInfoBlockRight">
        <div class="domainLordText">
          I purchased this barge from a local merchant. I plan to use it as a mobile home for my travels. I'm not sure where I'll go yet, but I'm sure I'll find a place that suits me.
        </div>
        <div class="domainActions">
          <div class="ampButton">AMPLIFY</div>
          <div class="sabButton">SABOTAGE</div>
        </div>
      </div>
    </div>
    <div class="domainFunctStatus">
      <div class="dfsLeft">Created: 9/12/23</div>
      <div class="dfsRight">Last Message: 9:58pm</div>
    </div>
    <div class="chatRoom" id="chatRoom1">
      <div class="chatMessageContainer">
        <div class="messageAvatar self">
          <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
        </div>
        <div class="messageBody">
          <div class="messageSender">Damion</div>
          <p class="messageText">Hey, whats up! This isnt what I meant when I said I wanted to see the barge. However sometimes you have to see what other things are about first hand.</p>
        </div>
      </div>
      <div class="chatMessageContainer">
        <div class="messageAvatar self">
          <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/red-s1.jpg"/>
        </div>
        <div class="messageBody">
          <div class="messageSender">Violet</div>
          <p class="messageText">Damion no one ever told you you look like you belong on a barge?</p>
        </div>
      </div>
    </div>
    <div class="chatInputs" id="chatTextArea">
      <textarea class="chatInputText" id="chatInput1" placeholder="Message..." max-length="320"></textarea>
      <div class="chatInputButtons">
        <div></div>
        <div class="sendMessageButton" id="sendBut">SEND</div>
        <div></div>
      </div>
    </div>
  </div>
  `;

  // Explore Open Helper
  window.exploreOpenHelper = () => {
    // scale exploreUI to 1 and position it 18px to the right of the selection box if the space to the right of the selection box is greater than the width of the exploreUI element, if not position it 18px to the left of the selection box.
    window.soundtrack.setVolume("openwindow-1", 0.4);
    var exploreUISize = document.getElementById("exploreUI").offsetWidth;
    if (typing === false) {
      if (
        selectionBoxPosition.x <
        (window.innerWidth / tileSize) * tileSize - 18 - exploreUISize
      ) {
        exploreUI.style.left = selectionBoxPosition.x + tileSize + 18 + "px";
      } else {
        exploreUI.style.left =
          selectionBoxPosition.x - 18 - exploreUISize + "px";
      }
      if (window.domainType != "canonX") {
        exploreUI.style.transform = "scale(1)";
      }
      if (window.landActivated === false) {
        setTimeout(() => {
          window.soundtrack.play("explore-1");
        }, 100);
        exploreUI.style.width = "128px";
        exploreUI.style.height = "20px";
        exploreUI.style.top = selectionBoxPosition.y - 92 + "px";
        clearTimeout(timeoutHandle2);
        timeoutHandle2 = setTimeout(() => {
          exploreUI.style.transform = "scale(0)";
        }, 6000);
        exploreUI.innerHTML = `
      <div id="unclaimedBox">
        <div id="unclaimed">UNCLAIMED DOMAIN</div>
      </div>
      `;
        return;
      } else {
        // Add switch case for different domain functions(catgories)
        // exploreUI.style.width = "540px";
        // exploreUI.style.height = "80%";
        window.soundtrack.play("openwindow-1");
        if (window.domainType === "chat") {
          window.chatActive = true;
          exploreUI.style.width = "540px";
          exploreUI.style.height = "80%";
          exploreUI.style.top =
            (100 - Number(exploreUI.style.height.replace("%", ""))) / 2 + "vh";
          // document
          //   .getElementById("uniEvent4")
          //   .setAttribute("style", "animation: none;");
        }

        if (window.domainType === "world") {
          exploreUI.style.width = "540px";
          exploreUI.style.height = "810px";
          window.soundtrack.play("openwindow-1");
          // document
          //   .getElementById("uniEvent4")
          //   .setAttribute("style", "animation: none;");
        }

        if (window.domainType === "canon") {
          exploreUI.style.width = "540px";
          exploreUI.style.height = "60vh";
          window.soundtrack.play("openwindow-1");
          setTimeout(() => {
            if (window.spoke.spokeAcclimate === false) {
              window.soundtrack.play("reacclimate-1");
              window.spoke.spokeAcclimatePlaying = true;
            }
          }, 200);
          //
          document
            .getElementById("collectionGallery")
            .shadowRoot.getElementById("collectionGallery").style.transform =
            "scaleX(1)";
          document
            .getElementById("collectionGallery")
            .shadowRoot.getElementById("collectionGallery").style.opacity = "1";
          var target = {
            target: {
              id: canon
            }
          };
          document
            .getElementById("collectionGallery")?.selectCollection(target);
        }

        if (window.domainType === "canonX") {
          window.soundtrack.play("openwindow-1");
          document
            .getElementById("collectionGallery")
            .shadowRoot.getElementById("collectionGallery").style.transform =
            "scaleX(1)";
          document
            .getElementById("collectionGallery")
            .shadowRoot.getElementById("collectionGallery").style.opacity = "1";
          var target2 = {
            target: {
              id: canon
            }
          };
          document
            .getElementById("collectionGallery")?.selectCollection(target2);
        }
        // window.deactivateDrag();
        // BELOW TEMP OPTION
        exploreUI.style.top =
          (100 - Number(exploreUI.style.height.replace("vh", ""))) / 2 + "vh";
        var vid = document.getElementById("tempVid");
        var vid2 = document.getElementById("tempVid2");
        if (vid?.src != "") {
          vid?.play();
        }
        if (vid2?.src != "") {
          vid2?.play();
        }
      }
    }
  };

  //////////////////////////////////////////
  // Move menu UNIMENU
  //////////////////////////////////////////
  window.moveMenu = () => {
    var canvas = document.getElementById("universe");
    var moveMenu = document
      .getElementById("getUniMenu")
      .shadowRoot?.getElementById("uniMenu");
    if (moveMenu) {
      moveMenu.style.display = "block";
    }
    var uniMenu = document
      .getElementById("getUniMenu")
      .shadowRoot?.getElementById("menuItems");
    var shadow = document.getElementById("getUniMenu").shadowRoot;
    var text = document
      .getElementById("getUniMenu")
      .shadowRoot?.querySelectorAll(".uniMenuTxt");
    var headerTabs = document
      .getElementById("getUniMenu")
      .shadowRoot?.querySelectorAll(".men-active");
    var getNewButtons = document
      .getElementById("getUniMenu")
      .shadowRoot?.querySelectorAll(".getNew");
    var tabs = document
      .getElementById("getUniMenu")
      .shadowRoot?.querySelectorAll(".menuTabs");
    //
    getNewButtons?.forEach((el) => {
      el.addEventListener("click", () => {
        document.getElementById("getNfts").toggleNftScreen();
      });
    });
    // MenuSounds
    text?.forEach((el) => {
      el.addEventListener("mouseout", () => {
        window.soundtrack?.setVolume("menuMove3", 0.5);
        window.soundtrack?.stop("menuMove3");
        if (soundtrack?.paused) {
          window.soundtrack?.play("menuMove3");
        } else {
          soundtrack?.stop("menuMove3");
          window.soundtrack?.play("menuMove3");
        }
      });
    });
    //
    uniMenu?.childNodes.forEach((el) => {
      if (el.id != "uniMenuItems") {
        window.soundtrack.stop("menuLoading1");
      }
      el.addEventListener("click", () => {
        window.clearAndSelectMenu(el.id);
        if (soundtrack.paused) {
          window.soundtrack.play("menuEnter3");
        } else {
          window.soundtrack.stop("menuEnter3");
          window.soundtrack.play("menuEnter3");
        }
      });

      var patrons = shadow.getElementById("agentsAndPatrons");
      var warpLock = shadow.getElementById("warpLock");

      switch (el.id) {
        case "uniMenuShop":
          el.addEventListener("click", (e) => {
            window.currentMenuTab = "shop";
            shadow.getElementById("romOffline").style.display = "none";
            patrons.style.display = "none";
            warpLock.style.display = "none";
            dragElement(moveMenu, true);
            shadow.getElementById("domainUnDev").style.display = "none";
            shadow.getElementById("fm-enhancements").style.display = "grid";
            shadow.getElementById("fm-header-headline").style.opacity = "0%";
            shadow.getElementById("fm-header-headline").style.pointerEvents =
              "none";
            shadow.getElementById("fm-beacons").style.display = "none";
            shadow.getElementById("fm-feedback").style.display = "none";
            shadow.getElementById("fm-cloudHall").style.display = "none";
            shadow.getElementById("fm-settings").style.display = "none";
            shadow.getElementById("fm-profile").style.display = "none";
            if (window.isMobile === true) {
              window.dtmenuOpen = false;
              document.getElementById("shop2").setAttribute("active", "true");
            } else {
              window.dtmenuOpen = false;
              pinMenu("left");
              document.getElementById("shop2").setAttribute("active", "true");
            }
            shadow.getElementById("fm-inventory").style.display = "none";
            shadow.getElementById("menuLoadingScreen").style.display = "none";
            shadow.getElementById("menuMessage").style.display = "none";
            window.headlineSwtich(e);
          });
          break;
        case "uniMenuItems":
          el.addEventListener("click", (e) => {
            window.headlineSwtich(e);
            shadow.querySelector(`.it3`).style.display = "none";
            patrons.style.display = "none";
            warpLock.style.display = "none";
            window.currentMenuTab = "inventory";
            shadow.getElementById("romOffline").style.display = "none";
            if (window.tempIn === true) {
              shadow.getElementById("domainUnDev").style.display = "block";

              headerTabs.forEach((el) => {
                if (el.id === "fm-menu2") {
                  var selEl = {
                    target: document
                      .getElementById("getUniMenu")
                      .shadowRoot.getElementById("fm-menu2"),
                  };
                  selEl.target.style.display = "block";
                  shadow.getElementById("fm-menu1").style.display = "none";
                  shadow.querySelector(".it1").style.display = "none";
                  shadow.querySelector(".it2").style.display = "grid";
                  el.setAttribute("class", "it selectedMenu");
                } else {
                  el.setAttribute("class", "men-active it");
                }
              });
              //
            } else
              [
                headerTabs.forEach((el) => {
                  if (el.id === "fm-menu1") {
                    var selEl = {
                      target: document
                        .getElementById("getUniMenu")
                        .shadowRoot.getElementById("fm-menu1"),
                    };
                    el.setAttribute("class", "it selectedMenu");
                  } else {
                    el.setAttribute("class", "men-deactive it");
                  }
                }),
                (shadow.getElementById("domainUnDev").style.display = "none"),
              ];
            dragElement(moveMenu, true);
            window.openInventory();
            shadow.getElementById("fm-beacons").style.display = "none";
            shadow.getElementById("fm-feedback").style.display = "none";
            shadow.getElementById("fm-settings").style.display = "none";
            shadow.getElementById("fm-inventory").style.display = "grid";
            shadow.getElementById("fm-cloudHall").style.display = "none";
            shadow.getElementById("fm-enhancements").style.display = "none";
            shadow.getElementById("fm-profile").style.display = "none";
            shadow.getElementById("fm-header").style.display = "grid";
            shadow.getElementById("fm-header-headline").style.opacity = "100%";
            shadow.getElementById("fm-header-headline").style.pointerEvents =
              "auto";
            // change style of menu tabs
            el.setAttribute("class", "menuTabs selectedMenu2");
            shadow
              .getElementById("uniMenuItemsSvg")
              .childNodes.forEach((el) => {
                el.style.fill = "white";
              });
            shadow
              .getElementById("uniMenuBeacons")
              .setAttribute("class", "menuTabs");
            shadow
              .getElementById("uniMenuBeaconsSvg")
              .childNodes.forEach((el) => {
                el.style.stroke = "#ff002d";
              });
            //
            setTimeout(() => {
              window.headlineSwtich(e);
            }, 500);
          });
          break;
        case "uniMenuProfile":
          el.addEventListener("click", (e) => {
            window.headlineSwtich(e);
            shadow.getElementById("fm-menu1").style.display = "block";
            window.currentMenuTab = "profile";
            if (window.tempIn === false) {
              // shadow.getElementById("romOffline").style.display = "block";
              patrons.style.display = "grid";
            } else {
              shadow.getElementById("domainUnDev").style.display = "block";
            }
            setTimeout(() => {
              window.headlineSwtich(e);
            }, 500);
            window.openInventory();
            shadow.getElementById("fm-profile").style.display = "grid";
            shadow.getElementById("fm-header").style.display = "grid";
            shadow.getElementById("fm-header-headline").style.opacity = "100%";
            shadow.getElementById("fm-beacons").style.display = "none";
            shadow.getElementById("fm-cloudHall").style.display = "none";
            shadow.getElementById("fm-inventory").style.display = "none";
            shadow.getElementById("fm-feedback").style.display = "none";
            shadow.getElementById("fm-settings").style.display = "none";
            shadow.getElementById("fm-enhancements").style.display = "none";
            warpLock.style.display = "none";
            shadow.getElementById("menuLoadingScreen").style.display = "none";
            shadow.getElementById("fm-header-headline").style.pointerEvents =
              "auto";
            headerTabs.forEach((el) => {
              if (el.id === "fm-menu1") {
                var selEl = {
                  target: document
                    .getElementById("getUniMenu")
                    .shadowRoot.getElementById("fm-menu1"),
                };
                el.setAttribute("class", "mmen-active ht selectedMenu");
              }
            });
            window.deactivateDrag();
          });
          break;
        case "uniMenuSettings":
          el.addEventListener("click", (e) => {
            window.headlineSwtich(e);
            window.currentMenuTab = "settings";
            shadow.getElementById("romOffline").style.display = "none";
            patrons.style.display = "none";
            warpLock.style.display = "grid";
            shadow.getElementById("domainUnDev").style.display = "none";
            shadow.getElementById("fm-beacons").style.display = "none";
            shadow.getElementById("fm-inventory").style.display = "none";
            shadow.getElementById("fm-feedback").style.display = "none";
            shadow.getElementById("fm-enhancements").style.display = "none";
            shadow.getElementById("fm-profile").style.display = "none";
            shadow.getElementById("fm-settings").style.display = "grid";
            shadow.getElementById("menuLoadingScreen").style.display = "none";
            shadow.getElementById("menuMessage").style.display = "none";
            shadow.getElementById("fm-cloudHall").style.display = "none";
            shadow.getElementById("fm-header").style.display = "grid";
            shadow.getElementById("fm-header-headline").style.opacity = "0%";
            shadow.getElementById("fm-header-headline").style.pointerEvents =
              "none";
            window.deactivateDrag();
          });
          break;
        case "uniMenuBeacons":
          el.addEventListener("click", (e) => {
            window.headlineSwtich(e);
            shadow.getElementById("fm-menu1").style.display = "block";
            window.currentMenuTab = "beacons";
            shadow.getElementById("romOffline").style.display = "none";
            patrons.style.display = "none";
            warpLock.style.display = "none";
            shadow.getElementById("domainUnDev").style.display = "none";
            dragElement(moveMenu, true);
            document
              .getElementById("getUniMenu")
              .shadowRoot.getElementById("beaconNoti").style.display = "none";
            shadow.getElementById("fm-beacons").style.display = "grid";
            shadow.getElementById("fm-inventory").style.display = "none";
            shadow.getElementById("fm-feedback").style.display = "none";
            shadow.getElementById("fm-settings").style.display = "none";
            shadow.getElementById("fm-enhancements").style.display = "none";
            shadow.getElementById("fm-profile").style.display = "none";
            shadow.getElementById("menuLoadingScreen").style.display = "none";
            shadow.getElementById("menuMessage").style.display = "none";
            shadow.getElementById("fm-cloudHall").style.display = "none";
            shadow.getElementById("fm-header").style.display = "grid";
            shadow.getElementById("fm-header-headline").style.opacity = "100%";
            shadow.getElementById("fm-header-headline").style.pointerEvents =
              "all";
            headerTabs.forEach((el) => {
              if (el.id === "fm-menu1") {
                var selEl = {
                  target: document
                    .getElementById("getUniMenu")
                    .shadowRoot.getElementById("fm-menu1"),
                };
                // document.getElementById("getUniMenu").switchMenuTabs(selEl);
                el.setAttribute("class", "mmen-active ht selectedMenu");
              } else {
                el.setAttribute("class", "men-deactive ht");
              }
            });
          });
          break;
        case "uniMenuFeedback":
          el.addEventListener("click", (e) => {
            // window.headlineSwtich(e);
            window.currentMenuTab = "feedback";
            shadow.getElementById("romOffline").style.display = "none";
            patrons.style.display = "none";
            warpLock.style.display = "none";
            shadow.getElementById("domainUnDev").style.display = "none";
            if (window.loggedIn === true) {
              shadow.getElementById("feedbackHeadline").innerHTML =
                "Help us make T.A.O.S City better";
            } else {
              shadow.getElementById("feedbackHeadline").innerHTML =
                "Contact SCOGÉ";
            }
            shadow.getElementById("fm-beacons").style.display = "none";
            shadow.getElementById("fm-inventory").style.display = "none";
            shadow.getElementById("fm-enhancements").style.display = "none";
            shadow.getElementById("fm-profile").style.display = "none";
            shadow.getElementById("fm-settings").style.display = "none";
            shadow.getElementById("fm-header").style.display = "grid";
            shadow.getElementById("menuLoadingScreen").style.display = "none";
            shadow.getElementById("fm-header-headline").style.opacity = "0%";
            shadow.getElementById("fm-header-headline").style.pointerEvents =
              "none";
            shadow.getElementById("menuMessage").style.display = "none";
            shadow.getElementById("fm-cloudHall").style.display = "none";
            shadow.getElementById("fm-feedback").style.display = "grid";
            shadow
              .getElementById("fm-feedback")
              .addEventListener("click", () => {
                window.deactivateDrag();
              });
            window.deactivateDrag();
          });
          break;
        case "uniMenuExit":
          el.addEventListener("click", () => {
            if (window.isMobile != true) {
              window.currentMenuTab = "signin";
              if (
                document
                .getElementById("walletsModal")
                .shadowRoot.getElementById("main").style.transform ===
                "scaleX(1)"
              ) {
                document
                  .getElementById("walletsModal")
                  .shadowRoot.getElementById("main").style.opacity = "0";
                setTimeout(() => {
                  document
                    .getElementById("walletsModal")
                    .shadowRoot.getElementById("main").style.opacity = "1";
                }, 200);
              } else {
                document
                  .getElementById("walletsModal")
                  .shadowRoot.getElementById("main").style.transform =
                  "scaleX(1)";
                document
                  .getElementById("walletsModal")
                  .shadowRoot.getElementById("main").style.opacity = "1";
              }
              shadow.getElementById("romOffline").style.display = "grid";
              patrons.style.display = "none";
              warpLock.style.display = "none";
            } else {
              document
                .getElementById("getUniMenu")
                .shadowRoot.getElementById("menuloginBut").innerHTML =
                "DESKTOP ONLY";
              setTimeout(() => {
                document
                  .getElementById("getUniMenu")
                  .shadowRoot.getElementById("menuloginBut").innerHTML =
                  "Universe";
              }, 2000);
            }
          });
          break;
        case "uniMenuCloudHall":
          el.addEventListener("click", (e) => {
            window.headlineSwtich(e);
            shadow.getElementById("fm-menu1").style.display = "block";
            window.currentMenuTab = "cloudHall";
            patrons.style.display = "none";
            warpLock.style.display = "none";
            if (window.tempIn === false) {
              shadow.getElementById("romOffline").style.display = "grid";
            } else {
              shadow.getElementById("romOffline").style.display = "none";
              shadow.getElementById("domainUnDev").style.display = "none";
            }
            shadow.getElementById("fm-beacons").style.display = "none";
            shadow.getElementById("fm-inventory").style.display = "none";
            shadow.getElementById("fm-enhancements").style.display = "none";
            shadow.getElementById("fm-profile").style.display = "none";
            shadow.getElementById("fm-settings").style.display = "none";
            shadow.getElementById("menuMessage").style.display = "none";
            shadow.getElementById("fm-feedback").style.display = "none";
            shadow.getElementById("menuLoadingScreen").style.display = "none";
            shadow.getElementById("fm-header").style.display = "grid";
            shadow.getElementById("fm-header-headline").style.opacity = "100%";
            shadow.getElementById("fm-header-headline").style.pointerEvents =
              "auto";
            shadow.getElementById("fm-cloudHall").style.display = "grid";
            headerTabs.forEach((el) => {
              if (el.id === "fm-menu1") {
                el.setAttribute("class", "mmen-active ct selectedMenu");
                var selEl = {
                  target: document
                    .getElementById("getUniMenu")
                    .shadowRoot.getElementById("fm-menu1"),
                };
                // document.getElementById("getUniMenu").switchMenuTabs(selEl);
              } else {
                el.setAttribute("class", "men-active ct");
              }
            });
            setTimeout(() => {
              window.headlineSwtich(e);
            }, 1000);
          });
          break;
      }
    });
    //
    dragElement(moveMenu, true);
  };

  //////////////////////////////////////////
  // HEADLINE SWITCH UNIMENU 
  //////////////////////////////////////////
  window.headlineSwtich = (e) => {
    var selected = e.target.id;
    var h1 = document
      .getElementById("getUniMenu")
      .shadowRoot.getElementById("fm-menu1");
    var h2 = document
      .getElementById("getUniMenu")
      .shadowRoot.getElementById("fm-menu2");
    var h3 = document
      .getElementById("getUniMenu")
      .shadowRoot.getElementById("fm-menu3");
    switch (selected) {
      case "menuInventory":
        h1.innerHTML = "Collections";
        h2.innerHTML = "Domains & Gels";
        h3.innerHTML = "Assets";
        h1.style.opacity = "100%";
        h1.style.userSelect = "auto";
        h2.style.opacity = "100%";
        h2.style.userSelect = "auto";
        h3.style.opacity = "100%";
        h3.style.userSelect = "auto";
        break;
      case "menuProfile":
        h1.innerHTML = "Earth";
        h2.innerHTML = "Bankoo";
        h1.style.opacity = "100%";
        h1.style.userSelect = "auto";
        h2.style.opacity = "100%";
        h2.style.userSelect = "none";
        h3.style.opacity = "0%";
        h3.style.userSelect = "none";
        break;
      case "menuBeacons":
        h1.innerHTML = "All";
        h2.innerHTML = "Domain";
        h3.innerHTML = "Lords";
        h1.style.opacity = "100%";
        h1.style.userSelect = "auto";
        h2.style.opacity = "100%";
        h2.style.userSelect = "auto";
        h3.style.opacity = "100%";
        h3.style.userSelect = "auto";
        break;
      case "menuCloudHall":
        h1.innerHTML = "Grand Council";
        h2.innerHTML = "Garment Gaurd";
        h1.style.opacity = "100%";
        h1.style.userSelect = "auto";
        h2.style.opacity = "100%";
        h2.style.userSelect = "none";
        h3.style.opacity = "0%";
        h3.style.userSelect = "none";
        break;
      case "menuFeedback":
        //
        break;
      case "menuSettings":
        //
        break;
      case "menuEnhancements":
        //
        break;
      default:
        //
    }
  };

  //////////////////////////////////////////
  // Clear and select menu items UNIMENU
  //////////////////////////////////////////
  window.clearAndSelectMenu = (e) => {
    var shadow = document.getElementById("getUniMenu").shadowRoot;
    var uniMenu = document
      .getElementById("getUniMenu")
      .shadowRoot.querySelectorAll(".menuTabs");
    uniMenu.forEach((el) => {
      if (el.id === e) {
        el.setAttribute("class", "menuTabs selectedMenu2");
        if (shadow.getElementById(`${el.id}Svg`).hasChildNodes()) {
          shadow.getElementById(`${el.id}Svg`).childNodes.forEach((el) => {
            if (el.nodeName === "path") {
              // Found the <path> element
              // Perform your desired actions on it
              el.style.stroke = "white";
              el.style.fill = "white";
            }
          });
        }
      } else {
        el.setAttribute("class", "menuTabs");
        if (
          document
          .getElementById("getUniMenu")
          .shadowRoot.getElementById(`${el.id}Svg`)
          .hasChildNodes()
        ) {
          document
            .getElementById("getUniMenu")
            .shadowRoot.getElementById(`${el.id}Svg`)
            .childNodes.forEach((el) => {
              if (el.nodeName === "path") {
                el.style.stroke = "#ff002d";
                el.style.fill = "#ff002d";
              }
            });
        }
      }
    });
  };

  // Open inventory / wallet
  window.openInventory = async () => {
    var shadow = document.getElementById("getUniMenu").shadowRoot;
    var loading = shadow.getElementById("menuLoadingScreen");
    var loading2 = shadow.getElementById("menuLoadingScreen3");
    // if (uiState.nftsLoaded === false) {
    //   loading.style.display = "grid";
    //   loading2.style.display = "grid";
    //   soundtrack.loop('menuLoading1');
    //   soundtrack.play('menuLoading1');
    //   // await window.connectWallet().catch((error) => {
    //   //   console.log(error);
    //   // });
    //   // .then(() => {
    //   //   shadow.getElementById("fm-inventory").style.display = "block";
    //   //   shadow.getElementById("fm-header").style.display = "grid";
    //   //   shadow.getElementById("fm-enhancements").style.display = "none";
    //   // });
    // } else {
    //   shadow.getElementById("fm-inventory").style.display = "grid";
    //   shadow.getElementById("fm-header").style.display = "grid";
    //   shadow.getElementById("fm-enhancements").style.display = "none";
    // }
    shadow.getElementById("fm-inventory").style.display = "grid";
    shadow.getElementById("fm-header").style.display = "grid";
    shadow.getElementById("fm-enhancements").style.display = "none";
  };

  // player state
  const playerState = async () => {
    var shadow = document.getElementById("getUniMenu").shadowRoot;
    const admin = await window.suUiActor
      .adminUser()
      .catch((e) => {
        console.log("Get Admin", {
          e
        });
        var error = {
          e
        };
        if (window.dmb === false) {
          attn(error, null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // if (admin === lord.principal) {
    //   console.log("Admin Logged in");
    // } else {
    //   shadow.getElementById("menuLoadingScreen").style.display = "none";
    //   shadow.getElementById("menuLoadingScreen3").style.display = "none";
    //   soundtrack.stop("menuLoading1");
    //   uiState.nftsLoaded = true;
    // }
  };

  // Error
  const connectError = async (error) => {
    var shadow = document.getElementById("getUniMenu").shadowRoot;
    shadow.getElementById("menuLoadingScreen").style.display = "none";
    shadow.getElementById("menuLoadingScreen3").style.display = "none";
    window.soundtrack.stop("menuLoading1");
    window.soundtrack.setVolume("menuError1", 0.4);
    window.soundtrack.play("menuError1");
    shadow.getElementById("menuMessage").style.display = "grid";
    switch (error.e.result?.error_code || error.e.message) {
      case "IC0501":
        shadow.getElementById("menuMessage").innerHTML = `
      <div>
        <div id="menuMessageHead">MAINTENANCE ERROR</div>
        <div id="menuMessageText">We're on it!</div>
        <div id="menuMessageBody">City Central has been notified and will resolve the issue. In the meantime, try refreshing your connection and attempting again.</div>
      </div>`;
        break;
      case "The agent creation was rejected.":
        shadow.getElementById("menuMessage").innerHTML = `
      <div>
        <div id="menuMessageHead">DISCONNECTED WALLET</div>
        <div id="menuMessageText">You'll need it to continue.</div>
        <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;cursor:default;">T.A.O.S City's Plug wallet is the best of its class. Share any concerns with City Central in the <span style="text-decoration:underline;color: var(--accent);cursor:pointer;">Feedback</span> section.</div>
        </div>
      </div>`;
        shadow
          .querySelector("#menuMessageBody")
          .addEventListener("click", () => {
            var el = {
              target: shadow.querySelector("#fm-menu2"),
            };
            // var el2 = {
            //   target: shadow.querySelector("#menuHelp")
            // }
            shadow.querySelector("#uniMenuFeedback").click(el);
          });
        break;
      default:
        shadow.getElementById("menuMessage").innerHTML = `
      <div>
        <div id="menuMessageHead">NEURAL CHIP ERROR</div>
        <div id="menuMessageText">We're on it!</div>
        <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;">Seems like something went wrong with your Digisette. LX-Comm has been notified. In the meantime, try <span style="color:var(--accent);"><a href="#" onclick="location.reload()">refreshing</a></span> your connection and attempting again.</div>
      </div>`;
        break;
    }
    // Canister Error
    // Default No Wallet Error
    // Alternative General Something Went Wrong Error
    // shadow.getElementById("menuMessage").innerHTML = `
    //     <div>
    //     <div id="menuMessageHead">${errors.error}</div>
    //     <div id="menuMessageText">${errors.message}</div>
    //     <div id="menuMessageBody">${errors.body}</div>
    //     <div id="menuMessageCTA">${errors.cta}</div>
    //   </div>
    // `
    // if (errors.etaActive === false) {
    //   shadow.getElementById("menuMessageCTA").style.display = "none";
    // }
  };

  // Upcoming
  window.systemNoti = async () => {
    //
  };

  // RSVP
  window.rsvp = async () => {
    document.getElementById("rsvpModal").style.display = "block";
  };

  // Multiplayer
  await window.ably.connection.once("connected");
  console.log("Connected!");

  const roomName = "alphaTestersChat";
  const roomDescription = "1st Chat Room for Alpha Testers";
  window.room1 = chatRoom.create(roomName, roomDescription);
  window.room1.setIo(window.ably);

  // get the channel to subscribe to
  //////////////////////////////////////////
  // CHAT ROOM
  //////////////////////////////////////////
  await channel.subscribe("chatRoom1", (message) => {
    window.room1.addMessage(message.data.roomMessage);
    const messageElement = document.createElement("div");
    const messagesDiv = document.getElementById("chatRoom1");
    messageElement.setAttribute("class", "chatMessageContainer");
    // messageElement.innerText = `${data.sender}: ${data.message}`;
    messageElement.innerHTML = `
    <div class="messageAvatar self">
      <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-chat.png"/>
    </div>
    <div class="messageBody">
      <div class="messageSender">Unidentified Lord</div>
      <p class="messageText">${message.data.roomMessage}</p>
    </div>
    `;
    messagesDiv?.appendChild(messageElement);
    // soundtrack.setVolume("newmessage-1", 0.8);
    // soundtrack.play("newmessage-1");
    if (window.dtfullMenuOpen === false && window.chatActive === false) {
      document
        .getElementById("getUniMenu")
        .shadowRoot.getElementById("beaconNoti").style.display = "block";
    }
    if (window.chatActive === false) {
      var newBeacon = document.createElement("div");
      document
        .getElementById("uniEvent4")
        .setAttribute("style", "animation: whiteBoxInnerGlow 2s infinite;");
      newBeacon.setAttribute("class", "beacon tut");
      newBeacon.setAttribute("data-message", `${message.data}`);
      newBeacon.addEventListener("click", (e) => {
        document.getElementById("getUniMenu").openBeaconMessage(e);
      });
      newBeacon.innerHTML = `
        <div class="beaconOrigin">
          <div class="beaconIdenIcon">!</div>
          <div class="beaconSender">${message.data}</div>
        </div>
        <div class="beaconPreview">
          ${message.data.substring(0, 25)}...
        </div>
    `;
      document
        .getElementById("getUniMenu")
        .shadowRoot.getElementById("beaconsBody")
        .appendChild(newBeacon);
    }
  });

  if (window.playerOnline === false) {
    // Universe Players
    // const room2Name = "alphaTesters";
    // const room2Description = "Alpha Testers";
    var tempPlayerId = Math.floor(Math.random() * 100);
    window.uniPlayer = {
      playerId: tempPlayerId,
      playerName: "Damion",
      x: 0,
      y: 0,
      emote: null,
    };
    // window.room2 = uniPlayers.create(room2Name, room2Description);
    // window.room2.setChannel(channel2);
    // var playerInt = false;
    // var otherPlayers = [];

    // channel2.presence.subscribe("enter", (member) => {
    //   // console.log("A NEW PLAYER HAS ARRIVED", member.data);
    // });

    // channel2.presence.enter(window.uniPlayer);
    window.playerOnline = true;
    return;
  }

  // TOOLTIP
  // window.elementHelp = async (e) => {
  //   document.getElementById("elHelp")?.remove();
  //   const elHelp = document.createElement("div");
  //   elHelp.setAttribute("id", "elHelp");
  //   elHelp.setAttribute("class", "tooltip");
  //   elHelp.innerHTML = `<strong>+2 Stealth</strong> - Consequences unknown!`;
  //   document.body.appendChild(elHelp);
  //   // Please elHelp above the mouse
  //   elHelp.style.top = `${e.clientY - 90}px`;
  //   elHelp.style.left = `${e.clientX - 0}px`;
  // }

  // document.addEventListener("click", (e) => {
  //   window.elementHelp(e);
  // });
  // const VITE_canister = import.meta.env.VITE_universe_backend_canister_Id;

  return {
    dragElement,
  };
}

// Instantiate scenario
export const newScenario = async (name) => {
  var scenario = new Scenario();
  var scenes = [];
  // fetch scns.json and load it into the editor
  // const data = await import('./sudb.json').catch((error) => {
  //   console.log(error);
  // });
  //
  for (var i = 0; i < data.SUD.Scenarios[name].length; i++) {
    if (data.SUD.Scenarios[name][i].activated.gate === 0) {
      scenes.push(new DialogueScene(data.SUD.Scenarios[name][i]));
    }
  }
  scenario.addScenes(...scenes);
  scenario.load();
  // check conditions
  scenario.show();
  return scenario;
};

export const newCutScene = async (name) => {
  var cutScene = new Scenario();
  var scenes = [];

  if (data.SUD.CutScenes[name].activated.gate === 0) {
    scenes.push(new CutScene(data.SUD.CutScenes[name]));
  }
  
  cutScene.addScenes(...scenes);
  cutScene.load();
  // check conditions
  cutScene.show();
  return cutScene;
} 

// Instantiate Editor Scenario
export const newEditorScenario = async (name, scene) => {
  var scenario = new Scenario();
  var scenes = [];
  // fetch scns.json and load it into the editor
  // const data = await import('./sudb.json').catch((error) => {
  //   console.log(error);
  // });
  //////////////////////////////////
  scenes.push(new DialogueScene(data.SUD.Scenarios[name][scene]));
  scenario.addScenes(...scenes);
  scenario.load();
  // check conditions
  scenario.show();
  return scenario;
};

// Instantiate Editor CutScene
export const newEditorCutScene = async (name) => {
  var cutScene = new Scenario();
  var scenes = [];
  // fetch scns.json and load it into the editor
  // const data = await import('./sudb.json').catch((error) => {
  //   console.log(error);
  // });
  //////////////////////////////////
  scenes.push(new CutScene(data.SUD.CutScenes[name]));
  cutScene.addScenes(...scenes);
  cutScene.load();
  // check conditions
  cutScene.show();
  return cutScene;
}


//////////////////////////////////////////
// ENTER TAOS CITY
//////////////////////////////////////////
export async function enterTaosCity(custCheck) {
  // Temporary
  loading();
  window.loggedIn = true;
  try {
    // Get user saga  (PLUGIN QUERY FUNCTION)
    const saga = "foundation";

    switch (saga) {
      case "foundation":
        mapping2 = await loadAllDomains();
        break;
      default:
        console.log("Saga Error");
    }

  } catch (error) {
    console.log("Mapping Error", error);
  }
  setTimeout(() => {
    document.getElementById("seekModal")?.remove();
    if (window.minactive === false) {
      document.getElementById("miniAgent").setAttribute("status", "intro");
      document.getElementById("miniAgent").setAttribute("active", "true");
      window.minactive === true;
    }
  }, 1000);
  const lcCheck = () => {
    if (custCheck === true) {
      // adminMenu();
      testFunctionButton();
    }
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      custCheck === true
    );
  };
  var check = lcCheck();
  if (window.loggedIn === false && check != true) {
    attn(null, "New Player Logged In");
    window.loggedIn = true;
  }
  window.tempIn = true;
  endLoading();

  story("NewGame");

  loadedGame = new scogeUniverse(mapping2);

  let forger = document
    .getElementById("forgeModal")
    .shadowRoot.getElementById("mainForge");
  forger.style.transform = "scaleX(0)";
  forger.style.opacity = "0";
  document
    .getElementById("walletsModal")
    .shadowRoot.getElementById("main").style.transform = "scaleX(0)";
  document
    .getElementById("walletsModal")
    .shadowRoot.getElementById("main").style.opacity = "0";
  window.soundtrack.play("menuEntrance1");
  window.soundtrack.setVolume("dgOnline-1", 0.4);
  window.soundtrack.play("dgOnline-1");
  //

  var uniMenu = document.getElementById("getUniMenu").shadowRoot;
  //
  // uniMenu.getElementById("uniMenuTxt").innerHTML = "CONTACT CC";
  //
  // setTimeout(() => {
  //   document.getElementById("seekModal").style.display = "none";
  // }, 2000);
  setTimeout(() => {
    window.pinMenu("right");
  }, 800);

  uniMenu.getElementById("menuFeedback").innerHTML = "City Central";
  uniMenu.getElementById("menuProfile").innerHTML = "Profile";
  uniMenu.getElementById("feedbackHeadline").innerHTML =
    "Help us make T.A.O.S City better.";
  uniMenu.getElementById("feedbackInput").placeholder =
    "Send feedback, or Contact City-Central here.";
  document.getElementById("dgr").setAttribute("active", "true");
  document.getElementById("getUniMenu").setAttribute("uniMenu", "taoscity");
  document.getElementById("camera").style.pointerEvents = "auto";
  window.openLocationCard();
  // window.playerPos();
  setTimeout(() => {
    document.querySelector("#universe").style.opacity = "100%";
  }, 100);
  document.getElementById("players").style.display = "block";
  document.getElementById("selection").style.display = "block";
  document.querySelectorAll(".uniPlayer").forEach((el) => {
    el.style.display = "block";
  });
  var powerUp = document.createElement("div");
  powerUp.setAttribute("id", "powerUp1");
  powerUp.setAttribute("class", "powerUps");
  powerUp.innerHTML = `
  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/graphics/crglove.png"/>
  `;
  document.getElementById("camera").appendChild(powerUp);
  powerUp.addEventListener("click", () => {
    window.soundtrack.setVolume("combatOff-1", 0.7);
    window.soundtrack.setVolume("combatOff-2", 0.7);
    window.soundtrack.play(`combatOff-${Math.floor(Math.random() * 2) + 1}`);
  });
  window.adminUI();
  // uniMenu.getElementById("it1").style.display = "none";
}

export function myFirstDrug() {
  document.querySelectorAll(".uniEvents").forEach((el, index) => {
    if (el.id === "uniEvent3" || el.id === "uniEvent5") {
      gsap.to(el, {
        delay: index * 0.5, // Increase the delay for each element
        duration: 1,
        opacity: 1,
      });
    }
  });
}

//////////////////////////////////////////
//  LOADING SCREEN
//////////////////////////////////////////
export function loading() {
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  var loading = shadow.getElementById("menuLoadingScreen");
  var loading2 = shadow.getElementById("menuLoadingScreen3");
  loading.style.display = "grid";
  loading2.style.display = "grid";
  window.soundtrack.loop("menuLoading1");
  window.soundtrack.play("menuLoading1");
}

export function endLoading() {
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  var loading = shadow.getElementById("menuLoadingScreen");
  var loading2 = shadow.getElementById("menuLoadingScreen3");
  loading.style.display = "none";
  loading2.style.display = "none";
  window.soundtrack.stop("menuLoading1");
}

//////////////////////////////////////////
// DRAG ELEMENT
//////////////////////////////////////////
export function dragElement(elmnt, on) {
  var locked = document
    .getElementById("getUniMenu")
    .shadowRoot?.getElementById("locked");
  var pinUi = document
    .getElementById("getUniMenu")
    .shadowRoot?.getElementById("pinMenu");
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (on === false) {
    return;
  }

  if (pinUi) {
    pinUi.style.borderTop = "2px solid rgba(225, 225, 225, 0.8)";
    pinUi.style.borderLeft = "2px solid rgba(225, 225, 225, 0.8)";
    pinUi.style.filter = "blur(0px)";
    pinUi.setAttribute("class", "unpinned");
    locked.style.opacity = "0";
  }

  if (document.getElementById(elmnt?.id + "header")) {
    document.getElementById(elmnt?.id + "header").onmousedown = dragMouseDown;
  } else {
    if (elmnt) {
      elmnt.onmousedown = dragMouseDown;
    }
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

    // Disable transitions
    elmnt.style.transition = "none";
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;

    // Re-enable transitions
    elmnt.style.transition = ".3s all";
  }
}

//////////////////////////////////////////
//  PLAYER COORDINATES VARIABLE
//////////////////////////////////////////
export var playerCoor = {
  x: 0,
  y: 0,
};

//////////////////////////////////////////
//  DOMAIN VARIABLE
//////////////////////////////////////////
export var domain = null;