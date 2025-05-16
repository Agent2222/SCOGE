
import { initAbly } from "../../src/index";

export var channel = null;

export class Multiplayer_Ably {
  constructor(player, mapEvents) {
    this.mapEvents = mapEvents;
    this.direction = null;
    this.playerOnline = false;
    this.ably = initAbly(); // Initialize Ably SDK
    // this.rooms = [
    //   {
    //     roomId: 1,
    //     roomType: "City",
    //     players: [],
    //   },
    //   {
    //     roomId: 2,
    //     roomType: "Chat",
    //     public: true,
    //     messages: [],
    //     players: [],
    //   },
    // ];
    this.rooms = [];
    this.uniPlayer = player.uniPlayer;
    // this.uniPlayer = {
    //     playerId: Multiplayer_Ably.generatePlayerId(),
    //     name: "Anonymous",
    //     x: corX,
    //     y: corY,
    //     speed: 2,
    //     direction: "down",
    //     emote: null,
    // };
    this.currentRoom = null;
    this.channels = {}; // Store channel references
    this.initPlayer();
  }

  async initPlayer(wallet) {
    await this.connect().catch((err) => {
      console.error("Error connecting to Ably:", err);
    });

    this.playerOnline = true;
    console.log(`Player ${this.uniPlayer} added to the game`);

    this.joinRoom(1, this.uniPlayer);
    
    // Chennel send for emotes
    console.log("Channel", this.channels[1]);
    channel = this.channels[1];
    document.getElementById("compEmoter").setAttribute("active", "true");
  }

  createShadowPlayer(player) {
    // console.log("Shadow Player", player);
    var uniCanvas = document.querySelector("#uniPlayers");
    var playerCtx = uniCanvas.getContext("2d");

    var cordX = null;
    var cordY = null;

    cordX = Number(String(player.x).replace("px", ""));
    cordY = Number(String(player.y).replace("px", ""));

    // Draw the border
    playerCtx.beginPath();
    playerCtx.rect(cordX, cordY, 18, 18);
    playerCtx.lineWidth = 2;
    playerCtx.strokeStyle = "#dadcd57f";
    playerCtx.stroke();
    playerCtx.closePath();
  }

  // Connect to Ably using the connection state change event
  // https://ably.com/docs/connect/states
  async connect() {
    return new Promise((resolve, reject) => {
      this.ably.connection.once("connected", () => {
        console.log("Connected to Ably realtime service!");
        this.playerOnline = true;
        resolve();
      });

      this.ably.connection.once("failed", (err) => {
        console.error("Connection to Ably failed:", err);
        reject(err);
      });
    });
  }

  // Properly close the Ably connection
  // https://ably.com/docs/connect/states#connection-state-lifecycle
  disconnect() {
    if (this.currentRoom) {
      this.leaveRoom(this.currentRoom.roomId);
    }

    // Close all channel subscriptions first
    Object.keys(this.channels).forEach((roomId) => {
      if (this.channels[roomId]) {
        this.channels[roomId].detach();
      }
    });

    // Close the connection
    if (this.ably && this.ably.connection) {
      this.ably.connection.close();
      this.playerOnline = false;
      console.log("Disconnected from Ably");
    }
  }

  // Create a room with a corresponding Ably channel
  // https://ably.com/docs/channels
  createRoom(roomName, roomType, isPublic = true) {
    const newRoomId =
      this.rooms.length > 0
        ? Math.max(...this.rooms.map((room) => room.roomId)) + 1
        : 1;

    const newRoom = {
      roomId: newRoomId,
      roomType: roomType,
      roomName: roomName,
      public: isPublic,
      messages: [],
      players: [],
      createdAt: new Date().toISOString(),
    };

    this.rooms.push(newRoom);

    // Create Ably channel for this room
    // https://ably.com/docs/channels
    const channelName = `room-${newRoomId}`;
    this.channels[newRoomId] = this.ably.channels.get(channelName);

    console.log(`Room joined: ${roomName} (ID: ${newRoomId})`);

    this.joinRoom(newRoomId, this.uniPlayer);
    return newRoom;
  }

  // Clean up a room and its associated channel
  destroyRoom(roomId) {
    const roomIndex = this.rooms.findIndex((room) => room.roomId === roomId);

    if (roomIndex === -1) {
      console.error(`Room with ID ${roomId} not found`);
      return false;
    }

    // Remove all players from the room
    const room = this.rooms[roomIndex];
    room.players.forEach((player) => {
      this.removePlayerFromRoom(player.id, roomId);
    });

    // Detach from the Ably channel
    // https://ably.com/docs/channels#detach
    if (this.channels[roomId]) {
      this.channels[roomId].detach((err) => {
        if (err) {
          console.error(`Error detaching from room ${roomId} channel:`, err);
        } else {
          console.log(`Successfully detached from room ${roomId} channel`);
        }
      });
      delete this.channels[roomId];
    }

    // Remove the room from the rooms array
    this.rooms.splice(roomIndex, 1);
    console.log(`Room ${roomId} destroyed`);
    return true;
  }

  // Join a room and subscribe to its channel events
  async joinRoom(roomId, player) {
    const room = this.getRoom(roomId);

    if (!room) {
      console.error(`Room with ID ${roomId} not found`);
      this.createRoom("TAOS City", "City", true);
      return false;
    }

    // Check if player is already in the room
    const playerExists = room.players.some((p) => p.id === player.id);
    if (playerExists) {
      console.log(`Player ${player.id} is already in room ${roomId}`);
      return true;
    }

    // // Add player to room
    room.players.push(player);
    // console.log("ROOM PLAYWERS", room.players);

    // Get the channel for this room
    const channelName = `room-${roomId}`;
    this.channels[roomId] = this.ably.channels.get(channelName);

    console.log("Room", room, "channel", this.channels[roomId]);

    // this.channels[roomId].subscribe("player-join", (message) => {
    //   console.log(`Player joined: ${message}`);
    // });

    // this.channels[roomId].subscribe("player-leave", (message) => {
    //   console.log(`Player left: ${message.data.playerId}`);
    //   // Remove player from local room data if it's not the current player
    //   if (message.data.playerId !== this.uniPlayer?.id) {
    //     this.removePlayerFromRoom(message.data.playerId, roomId);
    //   }
    // });

    // this.channels[roomId].subscribe("player-update", (message) => {
    //   // Update player data in local room state
    //   if (
    //     message.data.player &&
    //     message.data.player.id !== this.uniPlayer?.id
    //   ) {
    //     this.updatePlayerInRoom(message.data.player, roomId);
    //   }
    // });

    // this.channels[roomId].subscribe("message", (message) => {
    //   if (room.messages) {
    //     room.messages.push(message.data);
    //   }
    // });

    this.subscribeToPlayerPresence(roomId, {});

    this.channels[roomId].presence.enter(
     this.uniPlayer,
      (err) => {
        if (err) {
          console.error(`Error entering presence for room ${roomId}:`, err);
        }
      }
    );

    // this.channels[roomId].presence.update(
    //   this.uniPlayer,
    //   (err) => {
    //     if (err) {
    //       console.error(`Error updating presence:`, err);
    //     }
    //   }
    // );

    this.currentRoom = room;
    console.log(`Player ${player.id} joined room ${roomId}`);
    return true;
  }

  // Leave a room and clean up subscriptions
  leaveRoom(roomId, playerId) {
    const room = this.getRoom(roomId);

    if (!room) {
      console.error(`Room with ID ${roomId} not found`);
      return false;
    }

    if (!playerId && this.uniPlayer) {
      playerId = this.uniPlayer.id;
    }

    if (!playerId) {
      console.error("No player ID provided");
      return false;
    }

    // Remove player from room data
    this.removePlayerFromRoom(playerId, roomId);

    if (this.channels[roomId]) {
      // Leave presence
      this.channels[roomId].presence.leave(
        {
          playerId: playerId,
        },
        (err) => {
          if (err) {
            console.error(`Error leaving presence for room ${roomId}:`, err);
          }
        }
      );

      // Publish leave event
      this.channels[roomId].publish(
        "player-leave",
        {
          playerId: playerId,
          timestamp: new Date().toISOString(),
        },
        (err) => {
          if (err) {
            console.error(`Error publishing leave event:`, err);
          }
        }
      );

      // Unsubscribe from all events
      this.channels[roomId].unsubscribe();

      // Detach from the channel
      this.channels[roomId].detach();
      delete this.channels[roomId];
    }

    if (this.currentRoom && this.currentRoom.roomId === roomId) {
      this.currentRoom = null;
    }

    console.log(`Player ${playerId} left room ${roomId}`);
    return true;
  }

  // Update a player's data in a specific room and publish the change
  updatePlayerInRoom(player, roomId) {
    const room = this.getRoom(roomId);

    if (!room) {
      return false;
    }

    const playerIndex = room.players.findIndex((p) => p.playerId === player.playerId);

    if (playerIndex === -1) {
      // Player not in room yet, add them
      room.players.push(player);
      console.log(`Player ${player.id} added to room ${roomId}`);
    } else {
      // Update existing player
      room.players[playerIndex] = { ...room.players[playerIndex], ...player };
    }

    this.mapEvents.clearPlayerShadow(this.direction, Number(this.uniPlayer.previousX), Number(this.uniPlayer.previousY));
    this.getPlayersInRoom(1);

    return true;
  }

  // Remove a player from a room's data
  removePlayerFromRoom(playerId, roomId) {
    const room = this.getRoom(roomId);

    if (!room) {
      console.error(`Room with ID ${roomId} not found, creating new room`);
      return false;
    }

    const playerIndex = room.players.findIndex((p) => p.playerId === playerId);

    if (playerIndex === -1) {
      console.warn(`Player ${playerId} not found in room ${roomId}`);
      return false;
    }

    room.players.splice(playerIndex, 1);
    
    return true;
  }

  // Get a room by its ID
  getRoom(roomId) {
    return this.rooms.find((room) => room.roomId === roomId) || null;
  }

  // Get all players across all rooms
  getAllPlayers() {
    const allPlayers = [];

    this.rooms.forEach((room) => {
      room.players.forEach((player) => {
        if (!allPlayers.some((p) => p.id === player.id)) {
          allPlayers.push(player);
        }
      });
    });

    return allPlayers;
  }

  // Get all players in a specific room
  getPlayersInRoom(roomId) {
    const room = this.getRoom(roomId);

    if (!room) {
      console.error(`Room with ID ${roomId} not found`);
      return [];
    }

    room.players.forEach((player) => {
      this.createShadowPlayer(player);
      if (player.emote !== null) {
        this.drawEmoteAtCoords(player.x, player.y, player.emote);
      } else {
        // this.mapEvents.clearPlayerShadow(this.direction, Number(player.previousX), Number(player.previousY));
      }
    })
  }

  testShat() {
    // await this.channels[roomId].subscribe("player-join", (message) => {
    //   console.log(`Player joined: ${message}`);
    // });

    // await this.channels[roomId].subscribe("player-leave", (message) => {
    //   console.log(`Player left: ${message.data.playerId}`);
    //   // Remove player from local room data if it's not the current player
    //   if (message.data.playerId !== this.uniPlayer?.id) {
    //     this.removePlayerFromRoom(message.data.playerId, roomId);
    //   }
    // });

    // await this.channels[roomId].subscribe("player-update", (message) => {
    //   // Update player data in local room state
    //   if (
    //     message.data.player &&
    //     message.data.player.id !== this.uniPlayer?.id
    //   ) {
    //     this.updatePlayerInRoom(message.data.player, roomId);
    //   }
    // });

    // await this.channels[roomId].subscribe("message", (message) => {
    //   if (room.messages) {
    //     room.messages.push(message.data);
    //   }
    // });
  }

  // Send a message to a specific room
  // https://ably.com/docs/channels/publish
  sendMessage(roomId, message) {
    const room = this.getRoom(roomId);

    if (!room) {
      console.error(`Room with ID ${roomId} not found`);
      return false;
    }

    if (!this.channels[roomId]) {
      console.error(`Not connected to room ${roomId}`);
      return false;
    }

    const messageData = {
      id: new Date().getTime(),
      sender: this.uniPlayer ? this.uniPlayer.id : "system",
      senderName: this.uniPlayer?.name || "System",
      content: message,
      timestamp: new Date().toISOString(),
    };

    // Publish message to channel
    this.channels[roomId].publish("message", messageData, (err) => {
      if (err) {
        console.error(`Error publishing message:`, err);
        return false;
      }

      // Store message locally
      if (room.messages) {
        room.messages.push(messageData);
      }
    });

    // Use below for real-time chat updates
    //   const proxy = new Proxy(this.messages, {
    //     set: (target, property, value) => {
    //       const result = Reflect.set(target, property, value);
    //       this.callback({property, value});
    //       return result;
    //     }
    //   });
    //   proxy.push(message);

    return true;
  }

  // Get message history for a room
  // https://ably.com/docs/channels/history
  async getMessageHistory(roomId, limit = 100) {
    const room = this.getRoom(roomId);

    if (!room) {
      console.error(`Room with ID ${roomId} not found`);
      return [];
    }

    if (!this.channels[roomId]) {
      console.error(`Not connected to room ${roomId}`);
      return room.messages || [];
    }

    try {
      // Get history from Ably
      const history = await this.channels[roomId].history({ limit: limit });

      // Extract messages and update local storage
      const messages = history.items.map((item) => item.data).reverse();

      if (room.messages) {
        // Merge with local messages, removing duplicates
        const messageIds = new Set(room.messages.map((m) => m.id));
        const newMessages = messages.filter((m) => !messageIds.has(m.id));
        room.messages = [...room.messages, ...newMessages];
      } else {
        room.messages = messages;
      }

      return room.messages;
    } catch (err) {
      console.error(`Error getting message history:`, err);
      return room.messages || [];
    }
  }

  // Get all messages for a room
  getMessages(roomId) {
    const room = this.getRoom(roomId);

    if (!room || !room.messages) {
      return [];
    }

    return room.messages;
  }

  // Get currently online players in a room using presence
  async getOnlinePlayers(roomId) {
    const room = this.getRoom(roomId);

    if (!room) {
      console.error(`Room with ID ${roomId} not found`);
      return [];
    }

    if (!this.channels[roomId]) {
      console.error(`Not connected to room ${roomId}`);
      return [];
    }

    try {
      // Get presence data from Ably
      const presenceData = await this.channels[roomId].presence.get();

      console.log("Presence Data", presenceData);

      // Extract player IDs and info
      const onlinePlayers = presenceData.map((member) => {
        return member;
      });

      console.log(`Online players in room ${roomId}:`, onlinePlayers);

      return onlinePlayers;
    } catch (err) {
      console.error(`Error getting online players:`, err);
      return [];
    }
  }

  // Subscribe to presence changes (players joining/leaving)
  subscribeToPlayerPresence(roomId, callbacks = {}) {
    const room = this.getRoom(roomId);

    // Subscribe to enter events (player joining)
    this.channels[roomId].presence.subscribe("enter", async (member) => {
      console.log(`Player ${member} entered the room`);
      let data = JSON.parse(JSON.stringify(member.data));

      // this.rooms[0].players.push(data);
     
      // Get players in room
      // let onlineplayers = await this.getOnlinePlayers(1);
      // console.log("Online Players", onlineplayers);
    });

    // Subscribe to leave events (player leaving)
    this.channels[roomId].presence.subscribe("leave", (member) => {
      console.log(`Player ${member.data.data.playerId} left the room`);

      // Remove player from our local room data
      this.removePlayerFromRoom(member.data.data.playerId, roomId);

      // Call user callback if provided
      if (callbacks.onPlayerLeave) {
        callbacks.onPlayerLeave(member.data);
      }
    });

    // Subscribe to update events (player status update)
    this.channels[roomId].presence.subscribe("update", (member) => {
      // convert json data to object
      let data = JSON.parse(JSON.stringify(member.data));

      // // Update player in local room data
      this.updatePlayerInRoom(data.data, roomId);

      // this.getPlayersInRoom(1);
      // Call user callback if provided
      // if (callbacks.onPlayerUpdate) {
      //   callbacks.onPlayerUpdate(member.data); 
      // }
    });

    return true;
  }

  // Unsubscribe from presence events
  unsubscribeFromPlayerPresence(roomId) {
    if (!this.channels[roomId]) {
      console.error(`Not connected to room ${roomId}`);
      return false;
    }

    this.channels[roomId].presence.unsubscribe();
    return true;
  }

  // Check if a player is in a room
  isPlayerInRoom(playerId, roomId) {
    const room = this.getRoom(roomId);

    if (!room) {
      return false;
    }

    return room.players.some((p) => p.id === playerId);
  }

  // Subscribe to a specific event in a room
  // https://ably.com/docs/channels/subscribe
  subscribeToEvent(roomId, eventName, callback) {
    if (!this.channels[roomId]) {
      console.error(`Not connected to room ${roomId}`);
      return false;
    }

    this.channels[roomId].subscribe(eventName, (message) => {
      callback(message.data, message);
    });

    return true;
  }

  // Publish a custom event to a room
  // https://ably.com/docs/channels/publish
  publishEvent(roomId, eventName, data) {
    if (!this.channels[roomId]) {
      console.error(`Not connected to room ${roomId}`);
      return false;
    }

    this.channels[roomId].publish(
      eventName,
      {
        ...data,
        senderId: this.uniPlayer?.id || "system",
        timestamp: new Date().toISOString(),
      },
      (err) => {
        if (err) {
          console.error(`Error publishing ${eventName} event:`, err);
          return false;
        }
      }
    );

    return true;
  }

  // Handle connection state changes
  // https://ably.com/docs/connect/states
  setupConnectionStateHandling() {
    this.ably.connection.on("connected", () => {
      console.log("Connected to Ably!");
      this.playerOnline = true;

      // Rejoin current room if any
      if (this.currentRoom && this.uniPlayer) {
        this.joinRoom(this.currentRoom.roomId, this.uniPlayer);
      }
    });

    this.ably.connection.on("disconnected", () => {
      console.log("Disconnected from Ably");
      this.playerOnline = false;
    });

    this.ably.connection.on("failed", (err) => {
      console.error("Connection to Ably failed:", err);
      this.playerOnline = false;
    });

    this.ably.connection.on("suspended", () => {
      console.warn("Connection to Ably suspended");
      this.playerOnline = false;
    });
  }

  // Get connection state
  // https://ably.com/docs/connect/states
  getConnectionState() {
    if (!this.ably || !this.ably.connection) {
      return "not_initialized";
    }

    return this.ably.connection.state;
  }

  // Utility method to generate a unique player ID
  static generatePlayerId() {
    return `player-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  async drawEmoteAtCoords(cordX, cordY, emote) {
    // let emote = await import("/assets/images/icons/emotes/network-emote.png");

    var em = `${emote}`;
    let uniCanvas = document.querySelector("#uniPlayers");
    let ctx = uniCanvas.getContext("2d");
    let img = new Image();

    // draw black circle background 
    ctx.beginPath();
    ctx.arc(cordX + 20, cordY + 20, 14, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fill();
    ctx.closePath();

    ctx.font = "18px Arial";
    ctx.fillText(emote, cordX + 9, cordY + 27);
  }
}
