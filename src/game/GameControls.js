
export class Controls {
  constructor(mapping, player, camera, mapEvents) {
    this.mapEvents = mapEvents;
    this.mapping = mapping;
    this.player = player;
    this.camera = camera;

    this.keys = {};
    this.controls = {
        up: "ArrowUp",
        down: "ArrowDown",
        left: "ArrowLeft",
        right: "ArrowRight",
        action: " ",
        tip: "t",
        system: "s",
      };
    this.init();
  }

  init() {
    // Key Down event listener
    document.addEventListener("keydown", (event) => {
      this.keys[event.key] = true;
      // console.log('keydown event\n\n' + 'key: ' + event.key);

      // Toggle MiniAgent System
      if (this.keys[this.controls.system] && window.loggedIn === true) {
        document.getElementById("miniAgent").toggle();
      }

    //   movement();

      // Move Sound
      if (
         this.keys[this.controls.up] ||
         this.keys[this.controls.down] ||
         this.keys[this.controls.left] ||
         this.keys[this.controls.right] &&
        window.loggedIn === true
      ) {
        window.soundtrack.movement(true);
        movement();
      }
    });

    // Key Up event listener
    document.addEventListener("keyup", (event) => {
        this.keys[event.key] = false;
      // console.log('keyup event\n\n' + 'key: ' + event.key);

      // Stop Sound
      if (
        !(
            this.keys[this.controls.up] ||
            this.keys[this.controls.down] ||
            this.keys[this.controls.left] ||
            this.keys[this.controls.right]
        ) &&
        window.loggedIn === true
          && window.movementBlock === false
      ) {
        window.soundtrack.movement(false);
      }
    });

    // Game Loop
    const gameloop = () => {
      requestAnimationFrame(gameloop);
    };

    // NOTE: AD SOUND EFFECTS TO EACH ACTION
    const movement = (mapping) => {
      if (window.movementBlock === false ) {
        // The new move selection
        if (this.keys[this.controls.up]) {
          // this.camera.moveCamera("up");
          this.camera.domainZoom();
          // this.camera.autoMovePlayer(this.mapEvents.domainToDomainHelper(1447, 4045));
        }
        if (this.keys[this.controls.down]) {
          this.camera.moveCamera("down");
        }
        if (this.keys[this.controls.left]) {
          this.camera.moveCamera("left");
        }
        if (this.keys[this.controls.right]) {
          this.camera.moveCamera("right");
        }
      }
    };

    gameloop();
  }
}
