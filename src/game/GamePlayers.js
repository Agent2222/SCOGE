import { ICWebSocketManager } from "../uniHelpers/WebSocketManager";

export class Player {
  constructor(mapping, mapEvents) {
    this.mapping2 = mapping;
    this.mapEvents = mapEvents;
    this.domain = null;

    this.playerBox = document.getElementById("selection");

    this.playerPos = { x: 0, y: 0 };
    this.selectionPos = { x: 0, y: 0 };
    this.selectionBoxPosition = { x: 0, y: 0 };
    this.cityPosition = { x: 0, y: 0 };
    this.sconvertedSelPos = null;
    this.convertedCursorPos = null;
    this.tileSize = 18;
    this.playerNum = 0;
    this.msL = 50;
    this.msR = 50;
    this.msU = 50;
    this.msD = 50;
    this.movementPaused = false;

    this.playerX = this.playerBox.offsetLeft;
    this.playerY = this.playerBox.offsetTop;
    this.playerCenterX = this.playerX + this.playerWidth / 2;
    this.playerCenterY = this.playerY + this.playerHeight / 2;

    this.playerId =  Math.floor(Math.random() * 100); // change to principal

    this.playerCoor = { x: 0, y: 0 };
    this.uniPlayer = {
      playerId: this.playerId,
      playerName: "Damion" + this.playerId,
      x: 0,
      y: 0,
      emote: null,
    };

    this.playerId = this.uniPlayer.playerId;
    this.playerName = this.uniPlayer.playerName;
    this.x = this.uniPlayer.x;
    this.y = this.uniPlayer.y;
    this.emote = this.uniPlayer.emote;

    // this.controls.init();
    this.initMainPlayer(mapping);
    this.socket = null;
  }

  initMainPlayer(mapping2) {
    let box = this.playerBox;
    let window18Height = window.innerHeight / 18;
    let window18Width = window.innerWidth / 18;
    let topCenter = window18Height / 2;
    let leftCenter = window18Width / 2;

    this.selectionBoxPosition.x = Number(mapping2[1447].x);
    this.selectionBoxPosition.y = Number(mapping2[1447].y);

    // convert to 18x18 grid absolute position
    box.style.left = `${this.selectionBoxPosition.x}px`;
    box.style.top = `${this.selectionBoxPosition.y}px`;

    this.playerPosition();
  }

  movePlayer(direction) {
    this.playerPosition();

    let getPlayerPos = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
    // Get left and top x and y of the player
    getPlayerPos.left = this.playerBox.getBoundingClientRect().left;
    getPlayerPos.top = this.playerBox.getBoundingClientRect().top + 5;
    getPlayerPos.right = this.playerBox.getBoundingClientRect().right;
    getPlayerPos.bottom = this.playerBox.getBoundingClientRect().bottom;

    switch (direction) {
      case "left":
        if (this.movementPaused == false && getPlayerPos.left > 0) {
          this.selectionBoxPosition.x -= this.tileSize;
          this.playerBox.style.left = `${this.selectionBoxPosition.x}px`;
          this.movementPaused = true;
          setTimeout(() => {
            this.movementPaused = false;
          }, this.msL);
        }
        break;
      case "right":
        if (
          this.movementPaused == false &&
          getPlayerPos.right + this.tileSize < window.innerWidth
        ) {
          this.selectionBoxPosition.x += this.tileSize;
          this.playerBox.style.left = `${this.selectionBoxPosition.x}px`;
          this.movementPaused = true;
          setTimeout(() => {
            this.movementPaused = false;
          }, this.msR);
        }
        break;
      case "up":
        if (this.movementPaused == false && getPlayerPos.top > 0) {
          this.selectionBoxPosition.y -= this.tileSize;
          this.playerBox.style.top = `${this.selectionBoxPosition.y}px`;
          this.movementPaused = true;
          setTimeout(() => {
            this.movementPaused = false;
          }, this.msU);
        }
        break;
      case "down":
        if (
          this.movementPaused == false &&
          getPlayerPos.bottom + this.tileSize < window.innerHeight
        ) {
          this.selectionBoxPosition.y += this.tileSize;
          this.playerBox.style.top = `${this.selectionBoxPosition.y}px`;
          this.movementPaused = true;
          setTimeout(() => {
            this.movementPaused = false;
          }, this.msD);
        }
        break;
      default:
    }
  }

  playerPosition() {
    this.uniPlayer.previousX = this.uniPlayer.x;
    this.uniPlayer.previousY = this.uniPlayer.y;

    var box = this.playerBox;
    // get position of the canvas element relative to the viewport
    var rect = this.mapEvents.canvas.getBoundingClientRect();
    // get position of the selection box relative to the viewport
    var boxRect = box.getBoundingClientRect();
    // get position of the selection box relative to the canvas element
    var boxPos = {
      x: Math.round(boxRect.left - rect.left),
      y: Math.round(boxRect.top - rect.top),
    };
    var convertedBoxPos = {
      x: Math.floor(boxPos.x / this.tileSize),
      y: Math.floor(boxPos.y / this.tileSize),
    };
    var deduct = 170 - convertedBoxPos.x;
    let position = convertedBoxPos.x + convertedBoxPos.y * (rect.width / this.tileSize) + 170;

    document.getElementById("selectPosBox").innerHTML =
      `Player Position: ${position}`;

    this.convertedSelPos = 170 - deduct + convertedBoxPos.y * 170;
    this.cityPosition.x = boxPos.x - 2;
    this.cityPosition.y = boxPos.y - 2;

    document.getElementById("playerCord").innerHTML =
      `Player Coordinates: ${this.cityPosition.x}, ${this.cityPosition.y}`;

    this.playerCoor.x = this.cityPosition.x;
    this.playerCoor.y = this.cityPosition.y;
    this.domain = position;

    document.getElementById("playerScreenCoor").innerHTML =
      `Player Screen Coordinates: ${boxRect.left}, ${
        Math.round(boxRect.top) + 2
      }`;

    // // Temp
    // window.activeGames.forEach((game) => {
    //   if (game === "The Guide") {
    //     const theGuideElement = document.getElementById("theGuide");
    //     const selectionElement = document.getElementById("selection");

    //     if (!theGuideElement || !selectionElement) {
    //       // One of the elements is missing, return false as they can't collide
    //       return false;
    //     }

    //     const theGuideRect = theGuideElement.getBoundingClientRect();
    //     const selectionRect = selectionElement.getBoundingClientRect();

    //     // Calculate the minimum distance (9 pixels)
    //     const minDistance = -18;

    //     // Check for collision with minimum distance
    //     const isCollidingWithMinDistance = !(
    //       theGuideRect.right + minDistance < selectionRect.left ||
    //       theGuideRect.left - minDistance > selectionRect.right ||
    //       theGuideRect.bottom + minDistance < selectionRect.top ||
    //       theGuideRect.top - minDistance > selectionRect.bottom
    //     );

    //     if (isCollidingWithMinDistance) {
    //       story("FoundTheGuide");
    //       myFirstDrug();
    //     }
    //   }
    // });

    //
    this.uniPlayer.x = this.cityPosition.x;
    this.uniPlayer.y = this.cityPosition.y + 5;

    window.uniPlayer.x = this.cityPosition.x;
    window.uniPlayer.y = this.cityPosition.y;
    
    window.uniPlayer.playerId = this.playerId;
    window.uniPlayer.playerName = this.playerName;

    // channel2.presence.update({ data: this.uniPlayer });

    if (
      `${position}` === this.mapEvents.activeLandEvents[0] ||
      `${position}` === this.mapEvents.activeLandEvents[1] ||
      `${position}` === this.mapEvents.activeLandEvents[2] ||
      `${position}` === this.mapEvents.activeLandEvents[3] ||
      `${position}` === this.mapEvents.activeLandEvents[4]
    ) {
      window.soundtrack.loop("discovered-1");
      window.soundtrack.setVolume("discovered-1", 0.8);
      window.soundtrack.play("discovered-1");
      window.landActivated = true;
      document.getElementById("selection").style.animationPlayState = "running";
      document.getElementById("selection").style.animation =
        "whiteBoxGlow 1s infinite";
      // place a div with an exclamation mark in the center of it positioned 8px absolute from the top and left of the selection box
      document.getElementById("selection").innerHTML =
        `<div id="exclamationMark" style="position: absolute; top: 8px; left: 8px; width: 18px; height: 18px; background-color: #ff002d; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 18px; color: #fff; font-weight: 700;">!</div>`;
      //
      // if (`${position}` === this.mapEvents.activeLandEvents[0]) {
      //   window.domainType = "canon";
      //   canon = "collection2";
      //   exploreUI.innerHTML = tempCont1;
      //   document.querySelector(".listen").addEventListener("click", () => {
      //     if (window.spoke.spokeAcclimatePlaying === false) {
      //       window.soundtrack.play("reacclimate-1");
      //       document.querySelector(".listen").innerHTML = "STOP";
      //       window.spoke.spokeAcclimatePlaying = true;
      //       return;
      //     } else {
      //       window.soundtrack.stop("reacclimate-1");
      //       document.querySelector(".listen").innerHTML = "LISTEN";
      //       window.spoke.spokeAcclimatePlaying = false;
      //     }
      //   });
      //   return;
      // } else if (`${position}` === this.mapEvents.activeLandEvents[1]) {
      //   window.domainType = "canonX";
      //   canon = "collection3";
      //   // exploreUI.innerHTML = tempCont2;
      //   exploreUI.innerHTML = "";
      //   return;
      // } else if (`${position}` === this.mapEvents.activeLandEvents[2]) {
      //   window.domainType = "world";
      //   exploreUI.innerHTML = tempCont3;
      //   return;
      // } else if (`${position}` === this.mapEvents.activeLandEvents[3]) {
      //   window.domainType = "chat";
      //   exploreUI.innerHTML = chatDomTemplate;
      //   // exploreUI.onmousedown = null;
      //   var messagespre = window.room1.getMessages();
      //   messagespre?.forEach((message) => {
      //     const mEl = document.createElement("div");
      //     const mDiv = document.getElementById("chatRoom1");
      //     mEl.setAttribute("class", "chatMessageContainer");
      //     // messageElement.innerText = `${data.sender}: ${data.message}`;
      //     mEl.innerHTML = `
      //      <div class="messageAvatar self">
      //        <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-chat.png"/>
      //      </div>
      //      <div class="messageBody">
      //        <div class="messageSender">Unidentified Lord</div>
      //        <p class="messageText">${message}</p>
      //      </div>
      //    `;
      //     mDiv.appendChild(mEl);
      //   });
      //   exploreUI.addEventListener("keyup", () => {
      //     dragElement(document.getElementById("exploreUI"), true);
      //   });
      //   document
      //     .getElementById("chatTextArea")
      //     .addEventListener("click", () => {
      //       exploreUI.onmousedown = null;
      //       document.getElementById("chatInput1").focus();
      //     });
      //   document
      //     .getElementById("sendBut")
      //     .addEventListener("click", async () => {
      //       var messageInput = document.getElementById("chatInput1");
      //       const message = messageInput.value.trim();
      //       if (message) {
      //         window.room1.addMessage(message);
      //         await channel.publish("chatRoom1", {
      //           roomMessage: message,
      //         });
      //         window.soundtrack.setVolume("sendmessage-1", 0.8);
      //         window.soundtrack.play("sendmessage-1");
      //         messageInput.value = "";
      //       }
      //     });
      //   return;
      // } else if (`${position}` === this.mapEvents.activeLandEvents[4]) {
      //   window.domainType = "canonX";
      //   canon = "collection1";
      //   // exploreUI.innerHTML = tempCont2;
      //   exploreUI.innerHTML = "";
      //   return;
      // }
      return;
    } else {
      window.soundtrack.stop("discovered-1");
      window.domainType = "canon";
      window.landActivated = false;
      document.getElementById("selection").style.animationPlayState = "paused";
      document.getElementById("selection").style.animation = "none";
      document.getElementById("selection").innerHTML = "";
      // exploreUI.innerHTML = "";
    }
  }
}


async function tempMultiPlayer() {
  await window.ably.connection.once("connected");

  const roomName = "alphaTestersChat";
  const roomDescription = "1st Chat Room for Alpha Testers";
  window.room1 = chatRoom.create(roomName, roomDescription);
  window.room1.setIo(window.ably);

  // get the channel to subscribe to

  await channel.subscribe("chatRoom1", (message) => {
    // console.log(message)
    // console.log("Received a greeting message in realtime: " + message.data.roomMessage);
    // console.log(window.room1);
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
    const room2Name = "alphaTesters";
    const room2Description = "Alpha Testers";
    window.uniPlayer = {
      playerId: Math.floor(Math.random() * 100),
      playerName: "Damion",
      x: 0,
      y: 0,
      emote: null,
    };
    window.room2 = uniPlayers.create(room2Name, room2Description);
    window.room2.setChannel(channel2);
    var playerInt = false;
    var otherPlayers = [];

    channel2.presence.subscribe("enter", (member) => {
      // console.log("A NEW PLAYER HAS ARRIVED", member.data);
      console.log("A NEW PLAYER HAS ARRIVED");
    });
    channel2.presence.subscribe("update", (member) => {
      if (playerInt === false) {
        var playerGroup1 = uniPlayers.create("PlayerGroup1");
        playerGroup1.renderPlayer(member.data.data);
        otherPlayers.push(member.data.data.playerId);
        playerInt = true;
        return;
      }
      if (otherPlayers.includes(member.data.data.playerId) === false) {
        otherPlayers.push(member.data.data.playerId);
        window.room2.renderPlayer(member.data.data);
      }
      document.getElementById(`${member.data.data.playerId}`).style.top =
        member.data.data.y;
      document.getElementById(`${member.data.data.playerId}`).style.left =
        member.data.data.x;
      // Update Emote if changed
      if (document.getElementById(`${member.data.data.playerId}`)) {
        if (
          document
            .getElementById(`${member.data.data.playerId}`)
            .getAttribute("emote") !== member.data.data.emote
        ) {
          document
            .getElementById(`${member.data.data.playerId}`)
            .setAttribute("emote", member.data.data.emote);
          document.getElementById(`${member.data.data.playerId}`).innerHTML =
            `<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">${member.data.data.emote}</div>`;
        }
        if (
          document
            .getElementById(`${member.data.data.playerId}`)
            .getAttribute("emote") === ""
        ) {
          document.getElementById(`${member.data.data.playerId}`).innerHTML =
            "";
        }
      }
    });
    channel2.presence.subscribe("leave", (member) => {
      // console.log("MemberData", member.data);
      document.getElementById(`${member.data.data.playerId}`).remove();
    });

    channel2.presence.enter(window.uniPlayer);
    window.playerOnline = true;
    return;
  }
}
