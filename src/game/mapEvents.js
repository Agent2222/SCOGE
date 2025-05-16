export class MapEvents {
  constructor(mapping) {
    this.mapping = mapping;
    this.activeLandEvents = ["1435", "3162", "2849", "6208", "1980"];
    this.canvas = document.getElementById("universe");
    this.currentEvent = [];
    // this.addMapEvent();
    setTimeout(() => {
      this.loadActiveEvents();
    }, 1000);
    console.log("MapEvents initialized", this.mapping);
  }

  domainConversion(domain) {
    //  // convert playerNum back to x and y coordinates
    //  var x = playerNum % 170;s
    //  var y = Math.floor(playerNum / 170);
    //  selectionBoxPosition.x = x * tileSize;
    //  selectionBoxPosition.y = y * tileSize;

    // Convert domain number to coordinates
    let choice = Number(domain);
    let x = choice % 170;
    let y = Math.floor(choice / 170);
    let coordX = x * 18;
    let coordY = y * 18;
    return { coordX, coordY };
  }

  domainToDomainHelper(domain1, domain2) {
    let d1Row = Math.floor(domain1 / 170);
    let d1Col = domain1 % 170;
    let d2Row = Math.floor(domain2 / 170);
    let d2Col = domain2 % 170;

    let dir1 =  null;
    let dir2 = null;
    let steps1 = null;
    let steps2 = null;

    // randomly pick 0 or 1
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      // Start with left or right
      if (d1Col < d2Col) {
        dir1 = "right";
        steps1 = d2Col - d1Col;
      }
      if (d1Col > d2Col) {
        dir1 = "left";
        steps1 = d1Col - d2Col;
      }
      if (d1Row < d2Row) {
        dir2 = "down";
        steps2 = d2Row - d1Row;
      }
      if (d1Row > d2Row) {
        dir2 = "up";
        steps2 = d1Row - d2Row;
      }
      console.log("Direction 1:", dir1, "Steps 1:", steps1, "Direction 2:", dir2, "Steps 2:", steps2);
      return { dir1, steps1, dir2, steps2 };
    } else {
      // Start with up or down
      if (d1Row < d2Row) {
        dir1 = "down";
        steps1 = d2Row - d1Row;
      }
      if (d1Row > d2Row) {
        dir1 = "up";
        steps1 = d1Row - d2Row;
      }
      if (d1Col < d2Col) {
        dir2 = "right";
        steps2 = d2Col - d1Col;
      }
      if (d1Col > d2Col) {
        dir2 = "left";
        steps2 = d1Col - d2Col;
      }
    }

    console.log("Direction 1:", dir1, "Steps 1:", steps1, "Direction 2:", dir2, "Steps 2:", steps2);

    return { dir1, steps1, dir2, steps2 };
  }

  drawMapAtCoords(x, y) {
    var uniCanvas = document.querySelector("#universe");
    var uniCtx = uniCanvas.getContext("2d");
    var img = document.createElement("img");
    var tileSize = 18;

    img.onload = function () {
      uniCtx.drawImage(img, x, y, tileSize, tileSize, x, y, tileSize, tileSize);
    };

    img.src =
      "https://storage.scoge.co/scogeUniverse/maps/scoge-taos-city-universe.jpg";
  }

  clearPlayerShadow(direction, x, y) {
    var uniCanvas = document.querySelector("#uniPlayers");
    var uniCtx = uniCanvas.getContext("2d");
    var img = document.createElement("img");
    var tileSize = 18;

    // celar canvas
    uniCtx.clearRect(0, 0, uniCanvas.width, uniCanvas.height);

    img.onload = function () {
      // uniCtx.drawImage(img, x, y, tileSize, tileSize, x, y, tileSize, tileSize);

      // uniCtx.fillStyle = "rgba(255, 255, 255, 0.08)";
      uniCtx.fillStyle = "rgba(255, 255, 255, 0.08)";

      // Vertical Line Let 
      // uniCtx.fillRect(x, y, 1, tileSize);

      // Horizontal Line Top
      // uniCtx.fillRect(x, y, tileSize, 1);

      // Vertical Line Right
      // uniCtx.fillRect(x + tileSize, y, 1, tileSize);

      // Horizontal Line Bottom
      // uniCtx.fillRect(x, y + tileSize, tileSize, 1);

      switch (direction) {
        case "up":
          // clear left and right
          uniCtx.fillRect(x, y, tileSize, 1);
          uniCtx.fillRect(x, y + tileSize, tileSize, 1);
          break;
        case "down":
          // clear left and right
          uniCtx.fillRect(x, y, tileSize, 1);
          uniCtx.fillRect(x, y + tileSize, tileSize, 1);
          break;
        case "left":
          // clear top and bottom
          uniCtx.fillRect(x, y, 1, tileSize);
          uniCtx.fillRect(x + tileSize, y, 1, tileSize);
          break;
        case "right":
          // clear top and bottom
          uniCtx.fillRect(x, y, 1, tileSize);
          uniCtx.fillRect(x + tileSize, y, 1, tileSize);
          break;
        default:
          break;
      }
    };

    img.src =
      "https://storage.scoge.co/scogeUniverse/maps/scoge-taos-city-universe.jpg";
  }


  addMapEvent(domain, event, visibility) {
    var testContext = this.canvas.getContext("2d");
    // draw onto canvas context with this style: width: 18px;height: 18px;border: 2px solid var(--accent);box-shadow: 0 0 0 4px rgba(216, 197, 51, 0.4);left: 2324px;top: 289px;
    let cords = this.domainConversion(domain);
    // Draw the outer glow/shadow effect first
    // Draw the outer glow/shadow effect first
    this.drawMapAtCoords(cords.coordX, cords.coordY);
    testContext.beginPath();
    testContext.rect(cords.coordX - 4, cords.coordY - 4, 26, 26); // 18+4+4 to account for the shadow extending 4px outward
    testContext.fillStyle = `rgba(216, 197, 51, ${visibility})`;
    testContext.fill();
    testContext.closePath();

    // Clear the inside to create a hollow effect
    // testContext.clearRect(cords.coordX, cords.coordY, 18, 18);
    this.drawMapAtCoords(cords.coordX, cords.coordY);

    // Draw the border
    testContext.beginPath();
    testContext.rect(cords.coordX, cords.coordY, 18, 18);
    testContext.lineWidth = 2;
    testContext.strokeStyle = "#94be8c";
    testContext.stroke();
    testContext.closePath();
  }

  loadActiveEvents() {
    this.activeLandEvents.forEach((event) => {
      this.addMapEvent(event, null, 0.4);
    });
    // this.pulseMapEvent();
  }

  eventFilter(event) {}

  pulseMapEvent() {
    // Pulse map event every 5 seconds.
    setInterval(() => {
      var testContext = this.canvas.getContext("2d");
      let cords = this.domainConversion("1435");
      testContext.beginPath();
      testContext.rect(cords.coordX, cords.coordY, 18, 18);
      testContext.fillStyle = "rgba(216, 197, 51, 0.4)";
      testContext.fill();
      testContext.lineWidth = 2;
      testContext.strokeStyle = "var(--accent)";
      testContext.stroke();
      testContext.closePath();
      setTimeout(() => {
        testContext.clearRect(cords.coordX, cords.coordY, 18, 18);
      }, 300);
    }, 500);
  }

  // Discovered Event
}

// Video Module
// Story Module
// Gallery Module
// Chat Module
// Profile Post Module (Text & Image)
// random encounters
// Shops
