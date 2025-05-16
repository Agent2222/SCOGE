export class GameManager {
  constructor(canvasId) {
    this.canvasId = canvasId;
    // this.initialize();
  }

  async initialize() {
    const [{ default: MainSceneManager }, BABYLON] = await Promise.all([
      import("./MainSceneManager.js"),
      import("@babylonjs/core"),
      import("babylonjs-loaders"),
    ]);

    this.canvas = document.getElementById(this.canvasId);
    this.engine = new BABYLON.Engine(this.canvas, true, { stencil: true });
    this.engine.enableOfflineSupport = true;

    this.mainSceneManager = new MainSceneManager(this);
    this.CurrentScene = this.mainSceneManager.createScene();

    this.engine.runRenderLoop(() => {
      this.CurrentScene.render();
    });

    window.addEventListener("resize", () => {
      this.engine.resize();
    });

    this.loadModel(1);
  }
}

// Unverse Game Manager
export class scogeUniverse {
  constructor(mapping) {
    this.mapping = mapping;
    this.player = null;
    this.multiplayer = null;
    this.controls = null;
    this.camera = null;
    this.map = null;
    this.mapEvents = null;
    this.uniCtx = null;
    this.initialize();
  }

  async initialize() {
    this.createMap();
    // Initialize game players
    const { Player } = await import("/src/game/GamePlayers.js");
    const { Controls } = await import("/src/game/GameControls.js");
    const { Camera } = await import("/src/game/GameCamera.js");
    const { Multiplayer_Ably } = await import("/src/game/GameMultiPlayer.js");
    const { emoter } = await import ("../uniComponents/emoter.js");
    this.player = await new Player(this.mapping, this.mapEvents, this.multiplayer);
    this.multiplayer = await new Multiplayer_Ably(this.player, this.mapEvents);
    this.camera = await new Camera(this.mapping, this.player, this.mapEvents, this.multiplayer);
    this.controls = await new Controls(this.mapping, this.player, this.camera, this.mapEvents);
    await this.player.playerPosition();
    // this.initializeElements();
  }

  shutdown() {
    // Shutdown game players
  }

  async createMap() {
    var uniCanvas = document.querySelector("#universe")
    var uniCanvas2 = document.querySelector("#uniPlayers");
    var uniCtx = uniCanvas.getContext("2d");
    var img = document.createElement("img");
    var cam = document.getElementById("camera");
    var tileSize = 18;

    uniCanvas.style.display = "block";
    uniCanvas2.style.display = "block";
    uniCanvas2.style.opacity = "1";

    img.onload = function () {
      var medianX = window.innerWidth / 2;
      var viewWidth = window.innerWidth;
      var viewHeight = window.innerHeight;
      var mapPadding = null;

      var mapPaddingFunc = () => {
        var val1 = (viewWidth - img.width) / 2;
        if (val1 < 0) {
          return 0;
        }
        return val1;
      };

      mapPadding = mapPaddingFunc();
      this.camPadding = mapPadding;
      document.querySelector("#universe").style.marginLeft = `${mapPadding}px`;

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

    cam.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );

    uniCanvas.addEventListener("mousemove", window.mousePos);
    uniCanvas.addEventListener("click", window.selectedPos);

    document.addEventListener(
      "focus",
      (event) => {
        typing = true;
      },
      true
    );

    document.addEventListener(
      "blur",
      (event) => {
        typing = false;
      },
      true
    );

    const { MapEvents } = await import("/src/game/mapEvents.js");
    this.mapEvents = await new MapEvents(this.mapping);
  }

  initializeElements() {
    let camera = document.createElement("div");
    let locationHud = document.createElement("div");
    let ringView = document.createElement("div");
    let ring = document.createElement("uni-3dviewer");
    let selection = document.createElement("div");
    let players = document.createElement("div");
    let canvas = document.createElement("canvas");
    let previewUI = document.createElement("div");
    let exploreUI = document.createElement("div");
    let shopBG = document.createElement("div");
    let consensus = document.createElement("uni-consensus");
    let emoter = document.createElement("uni-c-emoter");
    let domainDev = document.createElement("uni-c-domain-dev");
    let main = document.getElementById("main");

    camera.id = "camera";
    locationHud.id = "locHud";
    ringView.id = "ringView";
    ring.id = "dgr";
    selection.id = "selection";
    players.id = "players";
    canvas.id = "universe";
    previewUI.id = "previewUI";
    exploreUI.id = "exploreUI";
    shopBG.id = "shopBG";
    consensus.id = "compConsensus";
    emoter.id = "compEmoter";

    ring.setAttribute("active", "false");
    canvas.setAttribute("width", "3060px");
    canvas.setAttribute("height", "1728px");
    canvas.setAttribute("style", "display: block; margin-left: 0px;");
    consensus.setAttribute("active", "false");
    consensus.setAttribute(
      "style",
      "transition: 0.4s ease-in-out; transform: scale(1.5); opacity: 0; display: none;"
    );
    emoter.setAttribute("active", "false");
    domainDev.setAttribute("active", "false");

    camera.appendChild(locationHud);
    camera.appendChild(ringView);
    camera.appendChild(selection);
    camera.appendChild(players);
    camera.appendChild(canvas);

    ringView.appendChild(ring);

    main.appendChild(camera);
    main.appendChild(previewUI);
    main.appendChild(exploreUI);
    main.appendChild(shopBG);
    main.appendChild(consensus);
    main.appendChild(emoter);
    main.appendChild(domainDev);
  }

  // Dynamically import modules

  // Initialize game visuals
  // initializeElements();

  // Initialize game sounds
  // Initialize game networking
  // Initialize game state
  // Initialize game loop
  // Initialize game UI
  // Initialize game events
  // Initialize game settings
  // Initialize game data
  // Initialize game analytics
  // Initialize game storage
  // Initialize game assets
  // Initialize game performance
  // Initialize game security
  // Initialize game debugging
  // Initialize game testing
  // Initialize game deployment
  // Initialize game updates
  // Initialize game monetization
  // Initialize game localization
  // Initialize game accessibility
  // Initialize game community
  // Initialize game marketing
  // Initialize game support
  // Initialize game documentation
  // Initialize game feedback
  // Initialize game legal
  // Initialize game branding
  // Initialize game licensing
  // Initialize game compliance
  // Initialize game versioning
  // Initialize game migration
}
