import MainSceneManager from "./MainSceneManager.js";
import * as BABYLON from "@babylonjs/core";
import "babylonjs-loaders";

export class GameManager {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.engine = new BABYLON.Engine(this.canvas, true, { stencil: true });
    this.engine.enableOfflineSupport = true;

    this.mainSceneManager = new MainSceneManager(this);
    this.CurrentScene = this.mainSceneManager.createScene();

    // The render function
    this.engine.runRenderLoop(() => {
      this.CurrentScene.render();
    });

    // Resize the babylon engine when the window is resized
    window.addEventListener(
      "resize",
      () => {
        this.engine.resize();
      },
      false
    );
  }

  initialize() {
    // this.loadModel(1);
    this.loadModel(1);
  }
}