// Camera Shift
// Player is in the center of the screen
// If there is no more map to the left the player begins to mover to the left
// If there is no more map to the right the player begins to move to the right
// If there is no more map to the top the player begins to move to the top
// If there is no more map to the bottom the player begins to move to the bottom
// If the player is in the center of the screen the x and y axis the player does not move, but the camera does

// Each player has a self camera that is determined by the dimensions of their screen

// the self camera is mapped to the same start vector for all players while the player position will be the initial start point or the last position of the player before the session ended.

// If the players screen is larger than the start point the player will be positioned on the start point

// USE CANVAS SHIFT TO MOVE THE CAMERA

// Keep track of the player to avoid cheating

// Funcitons will be STARTPOINT. SELFCAM, MAINCAM

import { regionPassCheck } from "../uniHelpers/mapper";

export class Camera {
  constructor(mapping, player, mapEvents, multiplayer) {
    this.mapping = mapping;
    this.player = player;
    this.mapEvents = mapEvents;
    this.multiplayer = multiplayer;

    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;

    this.canvas = document.getElementById("universe");
    this.canvas2 = document.getElementById("uniPlayers");

    this.playerWidth = player.playerBox.offsetWidth;
    this.playerHeight = player.playerBox.offsetHeight;
    this.playerX = player.playerBox.offsetLeft;
    this.playerY = player.playerBox.offsetTop;
    this.playerCenterX = this.playerX + this.playerWidth / 2;
    this.playerCenterY = this.playerY + this.playerHeight / 2;
    this.playerLeft = this.playerX;
    this.playerRight = this.playerX + this.playerWidth;
    this.playerTop = this.playerY;
    this.playerBottom = this.playerY + this.playerHeight;

    this.canvasWidth = this.mapEvents.canvas.offsetWidth;
    this.canvasHeight = this.mapEvents.canvas.offsetHeight;

    this.cameraX1 = 0;
    this.cameraX2 = 0;
    this.cameraY = 0;
    this.tileSize = 18;
    this.step = 18;

    this.minX1 = 0;
    this.maxX1 = 0;
    this.minX2 = 0;
    this.maxX2 = 0;

    this.minY = 0;
    this.maxY = 0;

    // dynamic start poinnt and dynamic maxx and minn
    this.tempStartX = 990;
    this.tempStartY = 0;

    this.remainingPixels = null;
    this.remainingPixelsLeft = null;

    this.tolerance = 5;

    this.pass = null;

    this.autorun = null;
  }

  async moveCamera(direction) {
    var randomNumber = Math.floor(Math.random() * 1000);

    this.pass = await regionPassCheck(
      null,
      null,
      this.player.domain,
      this.mapping
    );

    switch (direction) {
      case "right":
        if (this.pass.right !== true) {
          this.shiftOrMove("right");
        }
        break;
      case "left":
        if (this.pass.left !== true) {
          this.shiftOrMove("left");
        }
        break;
      case "up":
        if (this.pass.up !== true) {
          this.shiftOrMove("up");
        }
        break;
      case "down":
        if (this.pass.down !== true) {
          this.shiftOrMove("down");
        }
        break;
    }

    this.pass = await regionPassCheck(
      null,
      null,
      this.player.domain,
      this.mapping
    );

    // console.log("Pass:", this.pass);

    // Remaining pixels to the right
    //  this.remainingPixels = this.canvas.width - (window.innerWidth + this.cameraX);
    // console.log(`Remaining pixels: ${this.remainingPixels}`);
    // this.remainingPixels = this.canvas.width - (window.innerWidth + this.cameraX);
    // console.log(`Remaining pixels: ${this.remainingPixels}`);

    // // Remaining pixels to the left
    // // this.remainingPixelsLeft = (this.canvas.width - window.innerWidth) / 2;
    // // console.log(`Remaining pixels left: ${this.remainingPixelsLeft}`);
    // this.remainingPixelsLeft = Math.abs(this.canvas.getBoundingClientRect().left);
    // console.log(`Remaining pixels left: ${this.remainingPixelsLeft}`);
  }

  shiftOrMove(direction) {
    // Calculate boundaries
    this.maxX1 = this.canvasWidth - this.tempStartX - this.viewportWidth;
    this.minX1 = -this.tempStartX;
    this.maxY = this.canvasHeight - this.tempStartY - this.viewportHeight;
    this.minY = -this.tempStartY;

    // Center of window x-axis
    var windowCenterX = this.viewportWidth / 2;
    var windowCenterY = this.viewportHeight / 2;
    var playerXFixed = this.player.playerBox.getBoundingClientRect().left;
    var playerYFixed = this.player.playerBox.getBoundingClientRect().top;

    switch (direction) {
      case "right":
        if (this.cameraX1 < this.maxX1 && playerXFixed >= windowCenterX) {
          // Move only the camera
          this.cameraX1 = Math.min(this.cameraX1 + this.step, this.maxX1);
          this.canvas.style.transform = `translate(${-this.cameraX1}px, ${-this.cameraY}px)`;
          this.canvas2.style.transform = `translate(${-this.cameraX1}px, ${-this.cameraY}px)`;
        } else if (this.cameraX1 >= this.maxX1 || playerXFixed < windowCenterX) {
          // Move only the player
          this.player.movePlayer("right");
        }
        break;

      case "left":
        if (this.cameraX1 > this.minX1 && playerXFixed <= windowCenterX) {
          // Move only the camera
          this.cameraX1 = Math.max(this.cameraX1 - this.step, this.minX1);
          this.canvas.style.transform = `translate(${-this.cameraX1}px, ${-this.cameraY}px)`;
          this.canvas2.style.transform = `translate(${-this.cameraX1}px, ${-this.cameraY}px)`;
        } else if (
          this.cameraX1 <= this.minX1 ||
          playerXFixed > windowCenterX
        ) {
          // Move only the player
          this.player.movePlayer("left");
        }
        break;

      case "up":
        if (this.cameraY > this.minY && playerYFixed <= windowCenterY) {
          // Move only the camera
          this.cameraY = Math.max(this.cameraY - this.step, this.minY);
          this.canvas.style.transform = `translate(${-this.cameraX1}px, ${-this.cameraY}px)`;
          this.canvas2.style.transform = `translate(${-this.cameraX1}px, ${-this.cameraY}px)`;
        } else if (this.cameraY <= this.minY || playerYFixed > windowCenterY) {
          // Move only the player
          this.player.movePlayer("up");
        }
        break;

      case "down":
        if (this.cameraY < this.maxY && playerYFixed >= windowCenterY) {
          // Move only the camera
          this.cameraY = Math.min(this.cameraY + this.step, this.maxY);
          this.canvas.style.transform = `translate(${-this.cameraX1}px, ${-this.cameraY}px)`;
          this.canvas2.style.transform = `translate(${-this.cameraX1}px, ${-this.cameraY}px)`;
        } else if (this.cameraY >= this.maxY || playerYFixed < windowCenterY) {
          // Move only the player
          this.player.movePlayer("down");
        }
        break;
    }
    // Update player position if movement is required
    this.player.playerPosition();
    this.multiplayer.direction = direction;
    this.multiplayer.channels[1]?.presence.update({ data: this.player.uniPlayer });

    if (this.multiplayer.rooms[0].players.length > 1) {
      this.multiplayer.getPlayersInRoom(1);
      this.multiplayer.updatePlayerInRoom(this.player.uniPlayer, 1);
      this.mapEvents.clearPlayerShadow(direction, Number(this.player.uniPlayer.previousX), Number(this.player.uniPlayer.previousY));
      return;
    } else {
      this.multiplayer.getPlayersInRoom(1);
      this.multiplayer.updatePlayerInRoom(this.player.uniPlayer, 1);
      this.mapEvents.clearPlayerShadow(direction, Number(this.player.uniPlayer.previousX), Number(this.player.uniPlayer.previousY));
      this.multiplayer.createShadowPlayer(this.player.uniPlayer); 
    }
  }


  autoMovePlayer = ({dir1, steps1, dir2, steps2}) => {
    var count1 = 0;
    var complete1 = false;
    var count2 = 0;
    var complete2 = false;

    if (dir2 === null) {
      complete2 = true;
    }

    if (this.autorun === null) {
      window.movementBlock = true;

      this.autorun = setInterval(() => {
        if (count1 < steps1) {
          this.shiftOrMove(dir1);
          window.soundtrack.movement(true);
          count1++;
        }
  
        if (count1 >= steps1) {
          complete1 = true;
  
          if (dir2 !== null && count2 < steps2) {
            this.shiftOrMove(dir2);
            count2++;
          }
  
          if (count2 >= steps2) {
            complete2 = true;
            window.soundtrack.movement(false);
          }
        }
  
        if ( complete1 === true && complete2 === true) {
          clearInterval(this.autorun);
          this.autorun = null;
          window.movementBlock = false;
          return true;
        }
      }, 100);
    }
  }

  domainZoom() {
    let canvas = document.getElementById("universe");
    let selectionBox = document.getElementById("selection");
    let selx = selectionBox.offsetLeft;
    let sely = selectionBox.offsetTop;

    canvas.style.transition = "transform .8s ease-in-out";
    canvas.style.transformOrigin = `${selx}px ${sely}px`;

    canvas.style.transform = `scale(10)`;
    selectionBox.style.opacity = "0";

    window.movementBlock = true;
    window.soundtrack.movement(false);
  }

  domainZoomReturn = (domain) => {}

}
