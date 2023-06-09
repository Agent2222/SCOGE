import { chatRoom } from "./uniHelpers/chat.js";
import { uniPlayers } from "./uniHelpers/players.js";

export async function initAbly() {
  const VITE_ably = import.meta.env.VITE_ably;

  const ably = new Ably.Realtime.Promise(VITE_ably);
  await ably.connection.once("connected");
  console.log("Connected to Ably!");

  const roomName = "alphaTestersChat";
  const roomDescription = "1st Chat Room for Alpha Testers";
  window.room1 = chatRoom.create(roomName, roomDescription);
  window.room1.setIo(ably);

  // get the channel to subscribe to
  const channel = ably.channels.get("alphaTestersChat");

  /* 
  Subscribe to a channel. 
  The promise resolves when the channel is attached 
  (and resolves synchronously if the channel is already attached).
*/
  await channel.subscribe("greeting", (message) => {
    console.log("Received a greeting message in realtime: " + message.data);
    console.log(window.room1);
    window.room1.addMessage(message.data);
    const messageElement = document.createElement("div");
    const messagesDiv = document.getElementById("chatRoom1");
    messageElement.setAttribute("class", "chatMessageContainer");
    // messageElement.innerText = `${data.sender}: ${data.message}`;
    messageElement.innerHTML = `
  <div class="messageAvatar self">
    <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/squ-3.jpg"/>
  </div>
  <div class="messageBody">
    <div class="messageSender">Damion</div>
    <p class="messageText">${message.data}</p>
  </div>
  `;
    messagesDiv?.appendChild(messageElement);
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

  await channel.publish("greeting", "hello!");

  ably.close(); // runs synchronously
  console.log("Closed the connection to Ably.");

  /////////////////////////////
  // Universe Players
  /////////////////////////////

  const room2Name = "alphaTesters";
  const room2Description = "Alpha Testers";
  window.uniPlayer = {
    playerId: Math.floor(Math.random() * 100),
    playerName: "Damion",
    x: 0,
    y: 0,
  };
  window.room2 = uniPlayers.create(room2Name, room2Description);
  window.room2.setIo(ably);
  var playerInt = false;
  var otherPlayers = [];

  await channel.subscribe("lords", (data) => {
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
    document.getElementById(`${data.playerData.playerId}`).style.top =
      data.playerData.y;
    document.getElementById(`${data.playerData.playerId}`).style.left =
      data.playerData.x;
  });
}
