export class uniPlayers {
    constructor(playerGroup) {
      this.playerGroupName = playerGroup;
      this.players = {};
      this.channel = null;
    }
  
    static create(playerGroup) {
      return new uniPlayers(playerGroup);
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
  
    async setChannel(channel) {
      this.channel = channel;
      console.log('Channel set', this.channel);
  
      await this.channel.subscribe('newPlayer', (data) => {
        this.addPlayer(data);
      });
  
      await this.channel.subscribe('playerMoved', (data) => {
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
  