import { CharacterData } from "./characterData";
import { gsap } from "gsap";

export class Character {
  constructor(name) {
    this.name = name;
    this.data = null;
  }

  async loadData() {
    // Check if the character data is already loaded
    if (this.data) {
      return;
    }

    // Check if the character data is available in the CharacterData object
    const locationNames = Object.keys(CharacterData);
    for (const locationName of locationNames) {
      const characters = CharacterData[locationName];
      const character = characters.find(c => c.name === this.name);
      if (character) {
        this.data = character;
        return;
      }
    }
  }

  sayDialogue() {
    console.log(`${this.name}: ${this.data.dialogue.intro}`);
  }

  enterScene() {
    var characterCont = document.createElement("div");
    var scene = document.querySelector(".sceneBg");
    var characterImg = document.createElement("img");
    characterCont.classList.add("character");
    characterCont.setAttribute("id", this.name);
    characterCont.style.height = "80%";
    characterCont.style.width = "auto";
    characterCont.style.position = "absolute";
    characterCont.style.bottom = "0";
    characterCont.style.left = "-100px";
    characterCont.style.opacity = "0%";
    characterCont.style.zIndex = "10";
    characterImg.src = this.data.images[0];
    characterImg.style.height = "100%";
    characterImg.style.width = "100%";
    characterImg.style.objectFit = "contain";
    characterCont.appendChild(characterImg);
    scene.appendChild(characterCont);
    var character = document.querySelector(`#${this.name}`);
    gsap.to(character, {
      duration: 1,
      delay: 1,
      opacity: 100,
      ease: "power4.out",
    });
    gsap.to(character, {
        duration: 2,
        delay: 1,
        left: "100px",
        ease: "power4.out",
    });
  }
}
