export class uniPlayers {
    constructor(roomName, roomDescription) {
      this.roomName = roomName;
      this.roomDescription = roomDescription;
      this.players = {};
      this.io = null;
    }
  
    static create(roomName, roomDescription) {
      return new uniPlayers(roomName, roomDescription);
    }
  
    addPlayer(playerData) {
      const { playerId, playerName, x, y } = playerData;
      const player = { playerId, playerName, x, y };
      this.players[playerId] = player;
      this.renderPlayer(player);
    }
  
    updatePlayerLocation(playerData) {
      const { playerId, x, y } = playerData;
      const player = this.players[playerId];
      if (player) {
        player.x = x;
        player.y = y;
        this.updatePlayerElement(player);
      }
    }
  
    renderPlayer(player) {
      console.log('renderPlayer', player);
      const playerElement = document.createElement('div');
      playerElement.classList.add('uniPlayer');
      playerElement.setAttribute('id', player.playerId);
      playerElement.dataset.playerId = player.playerId;
      playerElement.style.left = player.x + 'px';
      playerElement.style.top = player.y + 'px';
      document.getElementById("players").appendChild(playerElement);
    }
  
    updatePlayerElement(player) {
      const playerElement = document.querySelector(`[data-player-id="${player.playerId}"]`);
      playerElement.style.left = player.x + 'px';
      playerElement.style.top = player.y + 'px';
    }
  
    setIo(io) {
      this.io = io;
      console.log('io set', this.io);
  
      this.io.on('newPlayer', (data) => {
        this.addPlayer(data);
      });
  
      this.io.on('playerMoved', (data) => {
        this.updatePlayerLocation(data);
      });
    }
  
    getIo() {
      return this.io;
    }
  
    getRoomName() {
      return this.roomName;
    }
  
    getRoomDescription() {
      return this.roomDescription;
    }
  
    getRoomData() {
      return {
        roomName: this.roomName,
        roomDescription: this.roomDescription,
        players: this.players,
      };
    }
  }
  