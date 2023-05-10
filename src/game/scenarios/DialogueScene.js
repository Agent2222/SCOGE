import { Scenario } from "./Scenarios.js";
import { Character } from "../characters/Character.js";
import { connectPlugWallet } from "../../wallets.js";
import { gsap } from "gsap";

export class DialogueScene extends Scenario {
  constructor(scene) {
    super(scene);
    this.scene = scene;
    this.dialogueElement = null;
    this.buttonElement = null;
    this.isVisible = false;
    this.isLoading = false;
    this.onLoad = null;
    this.onError = null;
    this.onHide = null;
    this.onShow = null;
    this.onButtonClick = null;
    this.onImageLoad = null;
    this.onImageError = null;
    this.onDestroy = null;
    this.characters = [];
    this.cScene = null;
    this.conditions = [];
    this.elements = [];
  }

  // shows the scene on the page
  show() {
    this.isVisible = true;
    if (this.onShow) this.onShow();
    // Append BG to body
    document.body.appendChild(this.cScene);
    this.elements.forEach((element) => {
      this.cScene.appendChild(element);
      gsap.to(element, {
        duration: 1,
        delay: 1.5,
        opacity: 1,
        ease: "power2.inOut",
      });
    });
    this.cScene.style.opacity = 1;
    this.characters.forEach((character) => {
      character.enterScene(character.name);
      if (character.details.actions[0] === "chat") {
        character.sayDialogue(character.name);
      }
    });
  }

  // hides the scene on the page
  hide() {
    var view = document.getElementById(`currentSceneView_${this.scene.name}`);
    gsap.to(view, {
      opacity: 0,
      filter: "blur(10px)",
      scale: 1.5,
      duration: 1,
      onComplete: () => {
        view?.remove();
      },
    });
    document.getElementById("universe").style.filter = "blur(0px)";
    this.isVisible = false;
    if (this.onHide) this.onHide();
  }

  // loads the scene resources (e.g. images, data, etc.)
  load() {
    if (this.isLoading) return;
    this.cScene = document.createElement("div");
    this.cScene.classList.add("currentScene");
    this.cScene.setAttribute("id", `currentSceneView_${this.scene.name}`);
    this.cScene.style.zIndex = 10;
    this.cScene.style.position = "absolute";
    this.cScene.style.top = 0;
    this.cScene.style.left = 0;
    this.cScene.style.width = "100%";
    this.cScene.style.height = "100%";
    this.cScene.style.backgroundColor = this.scene.bg;
    this.cScene.style.opacity = 0;
    if (this.scene.characters) {
      // this.scene.characters.forEach((character) => {
      //   const char = new Character(character);
      //   this.characters.push(char);
      // });
      for (let i = 0; i < this.scene.characters.length; i++) {
        this.characters.push(
          new Character(this.scene.characters[i], this.scene.name)
        );
      }
    }
    if (this.scene.elements) {
      this.scene.elements.forEach((element) => {
        const el = document.createElement("div");
        const el3Img = document.createElement("img");
        el.classList.add("sceneElement");
        el.style.zIndex = 11;
        el.style.position = element.position;
        el.style.top = element.top;
        el.style.bottom = element.bottom;
        el.style.left = element.left;
        el.style.width = element.width;
        el.style.height = element.height;
        el3Img.setAttribute("id", element.id);
        el3Img.style.width = "100%";
        el3Img.style.height = "100%";
        el3Img.style.position = "absolute";
        el3Img.style.bottom = "0px";
        el3Img.style.left = "0px";
        el3Img.style.zIndex = 12;
        if (element.shadow === true) {
          const el2Img = document.createElement("img");
          el2Img.src = element.src;
          el2Img.setAttribute("id", "element1Shadow");
          el3Img.src = element.src;
          el2Img.style.width = "100%";
          el2Img.style.height = "auto";
          el2Img.style.filter = "blur(50px)";
          el.appendChild(el2Img);
        }
        el.appendChild(el3Img);
        // Actions
        el.addEventListener("click", () => {
          const funct = new Function(element.action.replace("`${connectPlugWallet()}`", connectPlugWallet()));
          // this.scene.elements[0].action();
          funct();
        });
        this.elements.push(el);
      });
    }
    if (this.scene.conditions) {
      this.scene.conditions.forEach((condition) => {
        var conditionStat = condition;
        this.conditions.push(conditionStat);
      });
    }
    //
    // this.isLoading = true;
    // this.image = new Image();
    // this.image.onload = () => {
    //   this.isLoading = false;
    //   if (this.onLoad) this.onLoad();
    //   if (this.onImageLoad) this.onImageLoad();
    // };
    // this.image.onerror = () => {
    //   this.isLoading = false;
    //   if (this.onError) this.onError();
    //   if (this.onImageError) this.onImageError();
    // };
    // this.image.src = this.props.imageURL;
  }

  // handles any errors that occur during loading
  error() {
    console.log("Error loading resources");
  }

  // cleans up any resources used by the scene
  destroy() {
    if (this.onDestroy) this.onDestroy();
  }

  // sets the dialogue for the scene
  setDialogue(dialogue) {
    this.props.dialogue = dialogue;
    if (this.dialogueElement) {
      this.dialogueElement.innerText = this.scene.dialogue;
    }
  }
}
