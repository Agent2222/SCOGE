export class Scenario {
    constructor(sceneCategory) {
      this.sceneCategory = sceneCategory;
      this.scenes = [];
      this.currentSceneIndex = 0;
    }
  
    addScenes(...scenes) {
      this.scenes.push(...scenes);
    }
  
    show() {
      // Show the current scene on the page
      this.scenes[this.currentSceneIndex].show();
    }

    transition() {
      this.scenes[this.currentSceneIndex].transition();
    }
  
    hide() {
      // Hide the current scene on the page
      this.scenes[this.currentSceneIndex].hide();
    }
  
    load() {
      // Load the resources for all scenes in the scenario
      for (const scene of this.scenes) {
        // if () {
        //   //
        // }
        scene.load();
        // console.log("Wallet Found", this.scene.conditions[0]());
      }
    }
  
    error() {
      // Handle any errors that occur during loading
      console.error('Error loading scenario');
    }
  
    destroy() {
      // Clean up any resources used by the scenario
      for (const scene of this.scenes) {
        scene.destroy();
      }
      this.scenes = [];
      this.currentSceneIndex = 0;
    }
  
    nextScene() {
      // Hide the current scene
      // this.scenes[this.currentSceneIndex].hide();
  
      // Advance to the next scene
      this.currentSceneIndex++;
  
      // If we've reached the end of the scenario, stop
      if (this.currentSceneIndex >= this.scenes.length) {
        this.hide();
        return;
      }
  
      // Show the next scene
      // this.show();
      this.transition();
    }
  
    prevScene() {
      // Hide the current scene
      this.scenes[this.currentSceneIndex].hide();
  
      // Go back to the previous scene
      this.currentSceneIndex--;
  
      // If we're already at the first scene, do nothing
      if (this.currentSceneIndex < 0) {
        this.currentSceneIndex = 0;
        return;
      }
  
      // Show the previous scene
      this.show();
    }
  }
  