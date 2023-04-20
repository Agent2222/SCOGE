// UNIVERSE SYSTEM 
import { SoundtrackManager } from "./soundtrack.js";
import { idlFactory } from "./declarations/universe_backend/universe_backend.did.js";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import { chatRoom } from './uniHelpers/chat.js';
import { uniPlayers } from "./uniHelpers/players.js";

// Init Soundtrack
export async function universe() {
const soundtrack = new SoundtrackManager();

// US VARS
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
window.connected = false;
var tempLandEx = ["1435","3162","2849","6208"]
window.suUiActor = null;
window.landActivated = false;
window.chatActive = false;
window.domainType = "";
// window.getAllUserNFTs = {};i
// export const suIDL = idlFactory;
const suIDL = idlFactory;
window.user = {
  principal: null,
  balance: null,
  pk: null,
  nfts: null
};
var uiState = {
  nftsLoaded: false,
}
// eslint-disable-next-line no-unused-vars
const VITE_canister = import.meta.env.VITE_universe_backend_canister_Id;
const can2 = "ryjl3-tyaaa-aaaaa-aaaba-cai"
const whitelist = [can2];
// eslint-disable-next-line no-unused-vars
const host = "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=wnunb-baaaa-aaaag-aaoya-cai";
// BEFORE LAUNCH !!!!!!!!!
// Rebuilding Actors Across Account Switches

window.universeSystem = async () => {
  var uniCtx = universeCanvas.getContext("2d");
  var img = document.createElement("img");
  var cam = document.getElementById("camera");
  soundtrack.stop('menuEntrance1');
  soundtrack.play('menuEntrance1');
  // Check for browser support
  if (navigator.userAgent.includes("Brave") || navigator.userAgent.includes("Firefox") || navigator.userAgent.includes("Chrome")) {
  // The browser is Brave, Firefox, or Chrome
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
    // add event listener to mousemove
    universeCanvas.addEventListener("mousemove", window.mousePos);
    // add event listener to mouseclick
    universeCanvas.addEventListener("click", window.selectedPos);
    // Focus and Blur events
    // eslint-disable-next-line no-unused-vars
    document.addEventListener("focus", event => {
      typing = true;
    }, true);
        // eslint-disable-next-line no-unused-vars
    document.addEventListener("blur", event => {
      typing = false;
    }, true);
    //    
    // 
    var uniEvent = document.createElement("div");
    var uniEvent2 = document.createElement("div");
    var uniEvent3 = document.createElement("div");
    var uniEvent4 = document.createElement("div");
    //
    uniEvent.id = "uniEvent";
    uniEvent.setAttribute("class", "uniEvents")
    document.getElementById("camera").appendChild(uniEvent);
    //
    uniEvent2.id = "uniEvent2";
    uniEvent2.setAttribute("class", "uniEvents")
    document.getElementById("camera").appendChild(uniEvent2);
    //
    uniEvent3.id = "uniEvent3";
    uniEvent3.setAttribute("class", "uniEvents")
    document.getElementById("camera").appendChild(uniEvent3);
    //
    uniEvent4.id = "uniEvent4";
    uniEvent4.setAttribute("class", "uniEvents")
    document.getElementById("camera").appendChild(uniEvent4);
    //
    window.adminUI();
    window.openLocationCard();
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
  var playerScreenCoor = document.createElement("div");
  document.getElementById("selection").style.display = "block";
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
  dragElement(document.getElementById("adminUI"),true);
  dragElement(document.getElementById("exploreUI"),true);
  selectionPosDiv.innerHTML = "Selected Tile:"
  columnDiv.innerHTML = "Column:";
  rowDiv.innerHTML = "Row:";
  pixelPosDiv.innerHTML = "X: , Y:";
  selectPosBoxDiv.innerHTML = "SelBoxTile:";
  playerCordDiv.innerHTML = "Player Coordinates:";
  playerScreenCoor.innerHTML = "Player Screen Coord:";
  window.initSelection();
  window.moveSelection();
  window.moveMenu();
}

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
  document.getElementById("pixelPos").innerHTML = "X: " + window.pixelPos.x + ", " + "Y: " + window.pixelPos.y;
}

// selection position
window.selectedPos = (e) => {
  window.chatActive = false;
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
    window.deactivateDrag();
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
 cityPosition.x = boxPos.x - 2;
 cityPosition.y = boxPos.y - 2;
 document.getElementById("playerCord").innerHTML = `Player Coordinates: ${cityPosition.x}, ${cityPosition.y}`;
 document.getElementById("playerScreenCoor").innerHTML = `Player Screen Coordinates: ${boxRect.left}, ${Math.round(boxRect.top)+2}`;
//
window.uniPlayer.x = box.style.left;
window.uniPlayer.y = box.style.top;
socket.emit('players', { 
  roomId: room2Name, 
  playerId: window.uniPlayer.playerId, 
  playerData: window.uniPlayer
});
//
  if (`${position}` === tempLandEx[0] || `${position}` === tempLandEx[1] || `${position}` === tempLandEx[2] || `${position}` === tempLandEx[3]) {
    window.landActivated = true;
    document.getElementById("selection").style.animationPlayState = "running";
    document.getElementById("selection").style.animation = "whiteBoxGlow 1s infinite";
    // place a div with an exclamation mark in the center of it positioned 8px absolute from the top and left of the selection box
    document.getElementById("selection").innerHTML = `<div id="exclamationMark" style="position: absolute; top: 8px; left: 8px; width: 18px; height: 18px; background-color: #ff002d; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 18px; color: #fff; font-weight: 700;">!</div>`;
    //
    if (`${position}` === tempLandEx[0]) {
      window.domainType = "canon";
      exploreUI.innerHTML = tempCont1;
      return;
    } else  if (`${position}` === tempLandEx[1]) {
      window.domainType = "world";
      exploreUI.innerHTML = tempCont2;
      return;
    } else  if (`${position}` === tempLandEx[2]) {
      window.domainType = "world";
      exploreUI.innerHTML = tempCont3;
      return;
    } else  if (`${position}` === tempLandEx[3]) {
      window.domainType = "chat";
      exploreUI.innerHTML = chatDomTemplate;
      // exploreUI.onmousedown = null;
      var messagespre = window.room1.getMessages();
      messagespre?.forEach((message) => {
        const mEl = document.createElement('div');
        const mDiv = document.getElementById('chatRoom1');
        mEl.setAttribute('class', 'chatMessageContainer');
        // messageElement.innerText = `${data.sender}: ${data.message}`;
        mEl.innerHTML = `
        <div class="messageAvatar self">
          <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
        </div>
        <div class="messageBody">
          <div class="messageSender">Damion</div>
          <p class="messageText">${message}</p>
        </div>
      `;
        mDiv.appendChild(mEl);
      });
      exploreUI.addEventListener('keyup', () => {
        dragElement(document.getElementById("exploreUI"),true);
      });
      document.getElementById("chatTextArea").addEventListener('click', () => {
        exploreUI.onmousedown = null;
        document.getElementById("chatInput1").focus();
      });
      document.getElementById("sendBut").addEventListener('click', () => {
        var messageInput = document.getElementById("chatInput1");
        const message = messageInput.value.trim();
        if (message) {
          window.room1.addMessage(message);
          socket.emit('newMessage', { roomName, message });
          messageInput.value = '';
        }
      });
      return;
    }
    return;
  } else {
    window.landActivated = false;
    document.getElementById("selection").style.animationPlayState = "paused";
    document.getElementById("selection").style.animation = "none";
    document.getElementById("selection").innerHTML = "";
    exploreUI.innerHTML = "";
  }
}

window.moveSelection = () => {
  document.removeEventListener("keydown", window.checkKeys);
  var box = document.getElementById("selection");
  var window18Height = window.innerHeight / tileSize;
  var window18Width = window.innerWidth / tileSize;
  var topCenter = window18Height / 2;
  var leftCenter = window18Width / 2;
  selectionBoxPosition.x = leftCenter * tileSize;
  selectionBoxPosition.y = topCenter * tileSize;
  // make a event listeniner for arrow keys and move the selection box 18px in the direction of the arrow key pressed starting from its current position if window is not scrolling. Stop from moving at the edge of the window screen size. 
  document.addEventListener("keydown", function(e) {
    if (window.chatActive != true) {
      exploreUI.style.transform = "scale(0)";
      dragElement(document.getElementById("exploreUI"),true);
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

var tempCont1 = `<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<h1>Ch.1 - Reacclimate</h1>
<p>In the distant land of T.A.O.S City, there exists a hidden world of self-exiled creators, known as the Oracles. These Oracles reside in ancient, desolate mansions on the outskirts of the city, and possess a wealth of knowledge and experience that is sought after by migrants from far-off lands. These migrants come to T.A.O.S City in search of a new life, but often find themselves lost and alone in a vast and unfamiliar place. They turn to the Oracles for guidance, seeking to avoid the wrath of the city's enforcers, a powerful and ruthless group of conservative citizens.
<br><br>
The journey to visit the Oracles is not an easy one. Many must travel for days, through treacherous and unforgiving terrain, in order to reach the Oracles' remote dwellings. But those who are successful in their quest are rewarded with a profound understanding of themselves and the world around them. The Oracles' teachings help the migrants to remember something that they had long forgotten, and to reacclimate to the new and strange land they now call home.
<br><br>
This is the story of one such migrant, and their journey to find the Oracles, to discover the truth about themselves, and to make a place for themselves in the world of T.A.O.S City. It is a story of struggle and sacrifice, of hope and perseverance, and of the power of the human spirit to overcome even the greatest of challenges.
</p>`
var tempCont2 = `
<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<div id="tempVidHead">Ch.2 - Prologue 1</div>
<div id="tempVidCon">
  <video id="tempVid" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Chapter2-Prologue-1-HD.mp4" controls></video>
</div>
`
var tempCont3 = `
<div class="cannonIcon">
<img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<div id="tempVidHead2">Speak Easy</div>
<div id="tempVidCon2">
  <video id="tempVid2" src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/nightout.mp4" controls></video>
</div>
`
var chatDomTemplate = `
<div class="cannonIcon">
  <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/Bankoo-Main-1Inch-red-Outline.png" alt="cannonIcon">
</div>
<div class="domainFunction">
  <div class="domainHeader">
    <div class="doaminOwner">LORD AMINA</div>
    <div class="domainName">TC-BARGE-1</div>
  </div>
  <div class="domainInfo">
    <div class="domainLordImg">
      <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
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
        <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
      </div>
      <div class="messageBody">
        <div class="messageSender">Damion</div>
        <p class="messageText">Hey, whats up! This isnt what I meant when I said I wanted to see the barge. However sometimes you have to see what other things are about first hand.</p>
      </div>
    </div>
    <div class="chatMessageContainer">
      <div class="messageAvatar self">
        <img src="https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/red-s1.jpg"/>
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
`

// Explore Open Helper 
window.exploreOpenHelper = () => {
  // scale exploreUI to 1 and position it 18px to the right of the selection box if the space to the right of the selection box is greater than the width of the exploreUI element, if not position it 18px to the left of the selection box.
  var exploreUISize = document.getElementById("exploreUI").offsetWidth;
  if (typing === false) {
    if (selectionBoxPosition.x < (window.innerWidth / tileSize) * tileSize - 18 - exploreUISize) {
      exploreUI.style.left = selectionBoxPosition.x + tileSize + 18 + "px";
    } else {
      exploreUI.style.left = selectionBoxPosition.x - 18 - exploreUISize + "px";
    }
    exploreUI.style.transform = "scale(1)";
    if (window.landActivated === false) {
      exploreUI.style.width = "128px";
      exploreUI.style.height = "20px";
      exploreUI.style.top = selectionBoxPosition.y - 92 + "px";
      clearTimeout(timeoutHandle2);
      timeoutHandle2 = setTimeout(() => {
        exploreUI.style.transform = "scale(0)";
      }, 6000);
      exploreUI.innerHTML = `
      <div id="unclaimedBox">
        <div id="unclaimed">UNCLAIMED LAND</div>
      </div>
      `
      return;
    } else {
      // Add switch case for different domain functions(catgories)
      exploreUI.style.width = "540px";
      exploreUI.style.height = "810px";
      if (window.domainType === "chat") {
        window.chatActive = true;
        document.getElementById("uniEvent4").setAttribute("style", "animation: none;");
      }
      // window.deactivateDrag();
      // BELOW TEMP OPTION
      exploreUI.style.top = (window.innerHeight - 810) / 2 + "px";
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
}

// Move menu 
window.moveMenu = () => {
  var canvas = document.getElementById("universe");
  moveMenu.style.display = "block";
  var uniMenu = document.getElementById("getUniMenu").shadowRoot.getElementById("menuItems");
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  var text = document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".uniMenuTxt");
  var headerTabs = document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".men-active");
  var getNewButtons = document.getElementById("getUniMenu").shadowRoot.querySelectorAll(".getNew");
  //
  getNewButtons.forEach(el => {
    el.addEventListener("click", () => {
      document.getElementById("getNfts").toggleNftScreen();
    });
  });
  // MenuSounds
  text.forEach(el => {
    el.addEventListener("mouseout", () => {
      soundtrack.setVolume('menuMove3', 0.5);
      soundtrack.stop('menuMove3');
      soundtrack.play('menuMove3');
    });
  });
  //
  uniMenu.childNodes.forEach(el => {
    if (el.id != "uniMenuItems") {
      soundtrack.stop('menuLoading1');
    }
    el.addEventListener("click", () => {
      window.clearAndSelectMenu(el.id);
      soundtrack.stop('menuEnter3');
      soundtrack.play('menuEnter3');
    });
    switch (el.id) {
      case "uniMenuShop":
        el.addEventListener("click", (e) => {
          dragElement(moveMenu, true);
          shadow.getElementById("fm-enhancements").style.display = "grid";
          shadow.getElementById("fm-header-headline").style.opacity = "0%";
          shadow.getElementById("fm-header-headline").style.pointerEvents = "none";
          shadow.getElementById("fm-beacons").style.display = "none";
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
          window.headlineSwtich(e);
        }
        );
        break;
      case "uniMenuItems":
        el.addEventListener("click", (e) => {
          window.headlineSwtich(e);
          setTimeout(() => {
            window.headlineSwtich(e);
          },500)
          dragElement(moveMenu, true);
          window.openInventory();
          shadow.getElementById("fm-beacons").style.display = "none";
          shadow.getElementById("fm-feedback").style.display = "none";
          shadow.getElementById("fm-settings").style.display ="none";
          shadow.getElementById("fm-inventory").style.display = "grid";
          shadow.getElementById("fm-enhancements").style.display = "none";
          shadow.getElementById("fm-profile").style.display = "none";
          shadow.getElementById("fm-header").style.display = "grid";
          shadow.getElementById("fm-header-headline").style.opacity = "100%";
          shadow.getElementById("fm-header-headline").style.pointerEvents = "auto";
          // change style of menu tabs
          el.setAttribute("class", "menuTabs selectedMenu2");
          shadow.getElementById("uniMenuItemsSvg").childNodes.forEach(el => {
            el.style.fill = "white";
          });
          shadow.getElementById("uniMenuBeacons").setAttribute("class", "menuTabs");
          shadow.getElementById("uniMenuBeaconsSvg").childNodes.forEach(el => {
            el.style.stroke = "#ff002d";
          });
          //
          headerTabs.forEach(el => {
            if (el.id === "fm-menu1") {
              var selEl = { target: document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")}
              document.getElementById("getUniMenu").switchMenuTabs(selEl);
              el.setAttribute("class", "mmen-active it selectedMenu");
            } else {
              el.setAttribute("class", "men-active it");
            }
          });
        });
        break;
      case "uniMenuProfile":
        el.addEventListener("click", (e) => {
          window.headlineSwtich(e);
          setTimeout(() => {
            window.headlineSwtich(e);
          },500)
          window.openInventory();
          shadow.getElementById("fm-profile").style.display = "grid";
          shadow.getElementById("fm-header").style.display = "grid";
          shadow.getElementById("fm-header-headline").style.opacity = "100%";
          shadow.getElementById("fm-beacons").style.display = "none";
          shadow.getElementById("fm-inventory").style.display = "none";
          shadow.getElementById("fm-feedback").style.display = "none";
          shadow.getElementById("fm-settings").style.display ="none";
          shadow.getElementById("fm-enhancements").style.display = "none";
          shadow.getElementById("menuLoadingScreen").style.display ="none";
          shadow.getElementById("fm-header-headline").style.pointerEvents = "auto";
          headerTabs.forEach(el => {
            if (el.id === "fm-menu1") {
              var selEl = { target: document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")}
              document.getElementById("getUniMenu").switchMenuTabs(selEl);
              el.setAttribute("class", "mmen-active ht selectedMenu");
            }
          });
          window.deactivateDrag();
        });
        break;
      case "uniMenuSettings":
        el.addEventListener("click", (e) => {
          shadow.getElementById("fm-beacons").style.display = "none";
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
          window.headlineSwtich(e);
          window.deactivateDrag();
        } );
        break;
      case "uniMenuBeacons":
        el.addEventListener("click", (e) => {
          dragElement(moveMenu, true);
          document.getElementById("getUniMenu").shadowRoot.getElementById("beaconNoti").style.display = "none";
          shadow.getElementById("fm-beacons").style.display = "grid";
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
          window.headlineSwtich(e);
          headerTabs.forEach(el => {
            if (el.id === "fm-menu1") {
              var selEl = { target: document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1")}
              document.getElementById("getUniMenu").switchMenuTabs(selEl);
              el.setAttribute("class", "mmen-active ht selectedMenu");
            } else {
              el.setAttribute("class", "men-active ht");
            }
          });
        }
        );
        break;
      case "uniMenuFeedback":
        el.addEventListener("click", (e) => {
          shadow.getElementById("feedbackHeadline").innerHTML = "Help make T.A.O.S City better.";
          shadow.getElementById("fm-beacons").style.display = "none";
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
            window.deactivateDrag();
          });
          window.headlineSwtich(e);
          window.deactivateDrag();
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
    window.hideMenu();
}

window.headlineSwtich = (e) => {
  var selected = e.target.id;
  var h1 = document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu1");
  var h2 = document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu2");
  var h3 = document.getElementById("getUniMenu").shadowRoot.getElementById("fm-menu3");
  switch (selected) {
    case "menuInventory":
      h1.innerHTML = "Land & Enhancements";
      h2.innerHTML = "Assets";
      h3.innerHTML = "Sync";
      h1.style.opacity = "100%";
      h1.style.userSelect = "auto";
      h2.style.opacity = "100%";
      h2.style.userSelect = "auto";
      h3.style.opacity = "0%";
      h3.style.userSelect = "none";
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
      h3.innerHTML = "Citizen";
      h1.style.opacity = "100%";
      h1.style.userSelect = "auto";
      h2.style.opacity = "100%";
      h2.style.userSelect = "auto";
      h3.style.opacity = "100%";
      h3.style.userSelect = "auto";
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
    var menu4 = document.getElementById("logo");
    // slowly fade out the menu and logo elements and make them unclickable
    menu4.style.opacity = "0";
    menu4.style.pointerEvents = "none";
    document.getElementById("uniEvent").style.display = "block";
    document.getElementById("uniEvent2").style.display = "block";
    document.getElementById("uniEvent3").style.display = "block";
    document.getElementById("uniEvent4").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("welcome").style.pointerEvents = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("intro").style.opacity = "0%";
    document.getElementById("introLogo").style.userSelect = "none";
    document.getElementById("introLogo").style.pointerEvents = "none";
    document.getElementById("introLogo").style.cursor = "pointer";
}

// Show default menu
window.showMenu = () => {
    var moveMenu = document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu");
    document.querySelector("#universe").style.opacity= "0%";
    setTimeout(()=> {
      document.querySelector("#universe").style.display = "none";
    },1000);

    // remove playerPos div
    document.getElementById("selection").style.display = "none";
    document.getElementById("uniEvent")?.remove();
    document.getElementById("uniEvent2").remove();
    document.getElementById("uniEvent3").remove();
    document.getElementById("uniEvent4").remove();
    // hide the selection box
    document.getElementById("explore").style.display = "none";
    previewUI.style.transform = "scale(0)";
    moveMenu.style.display = "none";
    document.getElementById("adminUI").remove();
    document.getElementById("welcome").style.display = "grid";
    document.getElementById("welcome").style.pointerEvents = "auto";
    document.getElementById("intro").style.display = "grid";
    document.getElementById("intro").style.opacity = "100%";
    document.getElementById("introLogo").style.userSelect = "auto";
    document.getElementById("introLogo").style.pointerEvents = "auto";
    document.getElementById("introLogo").style.cursor = "pointer";
    document.getElementById("introLogo").addEventListener("click", () => {
      window.universeSystem();
    });
}

// Open inventory / wallet
window.openInventory = async () => {
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  var loading = shadow.getElementById("menuLoadingScreen");
  var loading2 = shadow.getElementById("menuLoadingScreen3");
  if (uiState.nftsLoaded === false) {
    loading.style.display = "grid";
    loading2.style.display = "grid";
    soundtrack.loop('menuLoading1');
    soundtrack.play('menuLoading1');
    await window.connectWallet().catch((error) => {
      console.log(error);
    });
    // .then(() => {
    //   shadow.getElementById("fm-inventory").style.display = "block";
    //   shadow.getElementById("fm-header").style.display = "grid";
    //   shadow.getElementById("fm-enhancements").style.display = "none";
    // });
  } else {
    shadow.getElementById("fm-inventory").style.display = "grid";
    shadow.getElementById("fm-header").style.display = "grid";
    shadow.getElementById("fm-enhancements").style.display = "none";
  }
}

// Connect wallet
window.connectWallet = async () => {
  if (window.ic === undefined) {
    console.log("Plug not found - Get Plug Wallet");
    connectError();
    return;
  } else {
    console.log(window.ic)
    // window.connected = await window.ic.plug.isConnected().catch((e) => {
    //   console.error(e);
    // });
    window.connected = await window.ic.bitfinityWallet.isConnected()
    console.log(window.connected)
  }
  // Callback to print sessionData
  // const onConnectionUpdate = () => {
  //   // Do something when connection is updated
  //   // console.log(window.ic.plug.sessionManager.sessionData)
  // }
  //
  if (window.connected === false) {
      // const plugpublicKey = await window.ic.plug.requestConnect(
      //   {
      //     whitelist: whitelist,
      //     host: host,
      //     onConnectionUpdate,
      //     timeout: 50000
      //   }
      // ).catch((e) => {
      //   var error = {e};
      //   connectError(error);
      //   console.error("Connect Wallet",e);
      // });
      const publicKey = await window.ic.bitfinityWallet.requestConnect({
        whitelist: whitelist,
        timeout: 50000,
      }).catch((e) => {
        var error = {e};
        connectError(error);
        console.error("Connect Wallet",e);
      });
      //
      // const agent = await window.ic.plug.agent;
      //
      await createActor().catch((e) => {
        console.log("Create Actor",e);
      })
      // Get the user principal id
      const principalId = await window.ic.bitfinityWallet.getPrincipal().catch((e) => {
        console.error("Get Principal",e);
      });
      window.user.principal = `${principalId}`;
      window.user.pk = publicKey;
      //
      // Import the getAllUserNFTs function if someCondition is true
      playerState();
      // getNFTCollections();
  } else if (window.connected === true) {
    await createActor().catch((error) => {
      console.log(error);
    });
    // getNFTCollections();
    playerState();
  } else { 
    connectError();
    // document.getElementById("getWallet").style.display = "block";
  }
}

// Get NFTs
// const getNFTCollections = async () => {
//   var agent = window.ic.plug.sessionManager.sessionData.agent;
//   var shadow = document.getElementById("getUniMenu").shadowRoot;
//   const collections = await getAllUserNFTs(
//     {
//       agent,
//       user: user.principal
//     }
//   ).then((collection)=>{
//     user.nfts = collection;
//     var nftDisplay = document.createElement("div");
//     var image = document.createElement("img");
//     nftDisplay.setAttribute("class", "Inventory-Assets-Cont");
//     nftDisplay.appendChild(image);
//     image.src = `${user.nfts[0].tokens[0].url}`;
//     shadow.getElementById("assetsCont").appendChild(nftDisplay);
//     // shadow.getElementById("inventoryInnerText").innerHTML = `${user.nfts[0].description}`;
//     shadow.getElementById("menuLoadingScreen").style.display = "none";
//     shadow.getElementById("menuLoadingScreen3").style.display = "none";
//     soundtrack.stop('menuLoading1');
//     uiState.nftsLoaded = true;
//   }).catch((e) => {
//     var error = {e}
//     connectError("getAllUserNFTs",error);
//   });
// }

// player state
const playerState = async () => {
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  console.log(window.suUiActor);
  const admin = await window.suUiActor.adminUser().catch((e) => {
    console.log("Get Admin", {e});
    var error = {e}
    if (window.dmb === false) {
      attn(error);
    }
  }).catch((error) => {
    console.log(error);
  });
  if (admin === window.user.principal) {
    console.log("Admin Logged in");
  } else {
    shadow.getElementById("menuLoadingScreen").style.display = "none";
    shadow.getElementById("menuLoadingScreen3").style.display = "none";
    soundtrack.stop('menuLoading1');
    uiState.nftsLoaded = true;
  }
}

// CANISTER (Change in local / production)
// Create Actor
const createActor = async () => {
      // Create an actor to interact with the NNS Canister
      // we pass the NNS Canister id and the interface factory
      window.user.principal = await window.ic.bitfinityWallet.getPrincipal();
      // console.log(window.ic.infinityWallet);
      window.suUiActor = await window.ic.bitfinityWallet.createActor({
        canisterId: can2,
        interfaceFactory: suIDL,
        host: "http://localhost:8080/"
      }).catch((e) => {
        console.log("creatActor", e);
      });
};

// Error 
const connectError = async (error) => {
  var shadow = document.getElementById("getUniMenu").shadowRoot;
  shadow.getElementById("menuLoadingScreen").style.display = "none";
  shadow.getElementById("menuLoadingScreen3").style.display = "none";
  soundtrack.stop('menuLoading1');
  soundtrack.setVolume('menuError1', 0.4);
  soundtrack.play('menuError1');
  shadow.getElementById("menuMessage").style.display = "grid";
  switch (error.e.result?.error_code || error.e.message) {
    case "IC0501":
      shadow.getElementById("menuMessage").innerHTML = `
      <div>
        <div id="menuMessageHead">MAINTENANCE ERROR</div>
        <div id="menuMessageText">We're on it!</div>
        <div id="menuMessageBody">City Central has been notified and will resolve the issue. In the meantime, try refreshing your connection and attempting again.</div>
      </div>`
      break;
    case "The agent creation was rejected.":
      shadow.getElementById("menuMessage").innerHTML = `
      <div>
        <div id="menuMessageHead">DISCONNECTED WALLET</div>
        <div id="menuMessageText">You'll need it to continue.</div>
        <div id="menuMessageBody" style="text-decoration:none;width:70% !important;margin-left:15%;cursor:default;">T.A.O.S City's Plug wallet is the best of its class. Share any concerns with City Central in the <span style="text-decoration:underline;color: var(--accent);cursor:pointer;">Feedback</span> section.</div>
        </div>
      </div>`
      shadow.querySelector("#menuMessageBody").addEventListener("click", () => {
        var el = {
          target: shadow.querySelector("#fm-menu2")
        }
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
      </div>`
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
}

const attn = async (error) => {
  let data = new FormData();
  data.append("Email", "ATTN: RELOAD");
  data.append("FeedbackText", `${error.e.props.Message}`);
  fetch("https://script.google.com/macros/s/AKfycbxOuAozKPY70nQqWzkD_mYHnd954KrUZuRnGNrmGnA4j3l3nSMYuNssqiJMqn7Z4u064w/exec", {
  method: "POST",
  body: data,
  mode: "cors"
})
.then(res => res.text())
}

// Upcoming
window.systemNoti = async () => {
//
}

// RSVP
window.rsvp = async () => {
  document.getElementById("rsvpModal").style.display = "block";
}

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

// const dialogue = new MainDialogue('NPC Name', 'friendly', [
//   {
//     text: 'Hello, $how are you? $] Are you doing well?',
//     choices: [
//       {
//         text: "I'm doing well, thanks.",
//         action: () => console.log("NPC Name: That's great to hear!")
//       },
//       {
//         text: "I'm not doing so well.",
//         action: () => console.log("NPC Name: I'm sorry to hear that.")
//       }
//     ]
//   },
//   {
//     text: 'What brings you here?',
//     choices: [
//       {
//         text: "I'm here to buy something.",
//         action: () => console.log("NPC Name: What would you like to buy?")
//       },
//       {
//         text: "I'm here to sell something.",
//         action: () => console.log("NPC Name: What would you like to sell?")
//       }
//     ]
//   }
//   // (npc, tone, lines) 
// ]);

// SOCKET IO

const socket = io('http://localhost:3001');

// Set the socket.io instance for the chat room
const roomName = "alphaTestersChat";
const roomDescription = '1st Chat Room for Alpha Testers';
window.room1 = chatRoom.create(roomName, roomDescription);
window.room1.setIo(socket);

// Test Beacon Config
// var beacons = [window.room1];

// Receive and display messages
socket.on('newMessage', (data) => {
  console.log("Here 2", {data});
  console.log(window.room1);
  window.room1.addMessage(data.message);
  const messageElement = document.createElement('div');
  const messagesDiv = document.getElementById('chatRoom1');
  messageElement.setAttribute('class', 'chatMessageContainer');
  // messageElement.innerText = `${data.sender}: ${data.message}`;
  messageElement.innerHTML = `
  <div class="messageAvatar self">
    <img src="https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
  </div>
  <div class="messageBody">
    <div class="messageSender">Damion</div>
    <p class="messageText">${data.message}</p>
  </div>
  `;
   messagesDiv?.appendChild(messageElement);
  if (window.dtfullMenuOpen === false && window.chatActive === false) {
    document.getElementById("getUniMenu").shadowRoot.getElementById("beaconNoti").style.display = "block";
  }
  if (window.chatActive === false) {
    var newBeacon = document.createElement('div');
    document.getElementById("uniEvent4").setAttribute("style", "animation: whiteBoxInnerGlow 2s infinite;");
    newBeacon.setAttribute('class', 'beacon tut');
    newBeacon.setAttribute('data-message', `${data.message}`);
    newBeacon.addEventListener('click', (e) => {
      document.getElementById("getUniMenu").openBeaconMessage(e);
    });
    newBeacon.innerHTML = `
        <div class="beaconOrigin">
          <div class="beaconIdenIcon">!</div>
          <div class="beaconSender">${data.roomName}</div>
        </div>
        <div class="beaconPreview">
          ${data.message.substring(0,25)}...
        </div>
    `;
    document.getElementById("getUniMenu").shadowRoot.getElementById("beaconsBody").appendChild(newBeacon);
  }
});

// Universe Players
// Set the socket.io instance for the chat room
const room2Name = "alphaTesters";
const room2Description = 'Alpha Testers';
window.uniPlayer = {
  playerId: Math.floor(Math.random()*100), 
  playerName: "Damion",
  x: 0, 
  y: 0
};
window.room2 = uniPlayers.create(room2Name, room2Description);
window.room2.setIo(socket);
var playerInt = false;
var otherPlayers = [];


// Receive and display messages
socket.on('players', (data) => {
  if (playerInt === false) {
    var player1 = uniPlayers.create(data.playerId, data.playerData);
    player1.renderPlayer(data.playerData);
    otherPlayers.push(data.playerData.playerId); 
    playerInt = true;
    return;
  }
  if (otherPlayers.includes(data.playerData.playerId) === false) {
    otherPlayers.push(data.playerData.playerId);
    window.room2.renderPlayer(data.playerData);
  }
  document.getElementById(`${data.playerData.playerId}`).style.top = data.playerData.y;
  document.getElementById(`${data.playerData.playerId}`).style.left = data.playerData.x;
});


// TOOLTIP
window.elementHelp = async (e) => {
  document.getElementById("elHelp")?.remove();
  console.log(e.clientX, e.clientY);
  const elHelp = document.createElement("div");
  elHelp.setAttribute("id", "elHelp");
  elHelp.setAttribute("class", "tooltip");
  elHelp.innerHTML = `<strong>+2 Stealth</strong> - Consequences unknown!`;
  document.body.appendChild(elHelp);
  // Please elHelp above the mouse
  elHelp.style.top = `${e.clientY - 90}px`;
  elHelp.style.left = `${e.clientX - 0}px`;
}

// document.addEventListener("click", (e) => {
//   window.elementHelp(e);
// });

// const callback = (changes) => {
//   console.log('Array has been modified:', changes);
// };

// window.beacons = async () => {
//   const proxy = new Proxy(beacons, {
//     set: (target, property, value) => {
//       const result = Reflect.set(target, property, value);
//       callback({property, value});
//       return result;
//     }
//   });
// }

// window.beacons();

return {
  dragElement
};

}