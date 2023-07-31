import { gsap } from "gsap";
import { Typing } from "../../index.js";
import { newScenario } from "../../universe.js";

export class Character {
  constructor(character , sceneName) {
    // Include all character props here
    this.scene = sceneName;
    this.details = character;
    this.persona = character.persona;
    this.currentDialogue = 0;
  }

  sayDialogue() {
    if (this.details.actions[0] === "chat") {
      if (!document.getElementById(`${this.persona.name}_dialogue`)) {
        var dialogueCont = document.createElement(this.details.element.type);
      dialogueCont.classList.add(this.details.element.class);
      dialogueCont.setAttribute("id", `${this.persona.name}_dialogue`);
      var textContent = document.createElement("p");
      textContent.setAttribute("id", `${this.details.element.class}_${this.persona.name}`);
      dialogueCont.style.backgroundColor = this.details.element.backgroundColor;
      dialogueCont.style.height = this.details.element.height;
      dialogueCont.style.width = this.details.element.width;
      dialogueCont.style.position = this.details.element.position;
      dialogueCont.style.bottom = this.details.element.bottom;
      dialogueCont.style.top = this.details.element.top;
      dialogueCont.style.left = this.details.element.left;
      dialogueCont.style.right = this.details.element.right;
      dialogueCont.style.zIndex = this.details.element.zIndex;
      dialogueCont.style.borderRadius = this.details.element.borderRadius;
      dialogueCont.style.borderTop = this.details.element.border;
      dialogueCont.style.borderBottom = this.details.element.border;
      dialogueCont.borderRadius = "10px";
      //
      // dialogueCont.innerHTML = `${this.persona.dialogue.intro}`;
      //
      dialogueCont.style.padding = this.details.element.padding;
      dialogueCont.style.transform = "scale(0)";
      dialogueCont.style.transformOrigin = "bottom left";
      // dialogueCont.addEventListener("click", () => {
      //   // newScenario.scenario.nextScene();
      //   // console.log(window.currentsSx);
      //   window.currentSx.nextScene();
      // });
      // Dialogue Pointer
      var dialoguePointer = document.createElement("div");
      dialoguePointer.classList.add("dialoguePointer");
      dialoguePointer.setAttribute("id", `${this.persona.name}_pointer`);
      dialoguePointer.style.position = "absolute";
      dialoguePointer.style.width = this.details.element.pointer.width;
      dialoguePointer.style.height = this.details.element.pointer.height;
      dialoguePointer.style.bottom = this.details.element.pointer.bottom;
      dialoguePointer.style.left = this.details.element.pointer.left;
      dialoguePointer.style.zIndex = this.details.element.pointer.zIndex;
      dialoguePointer.style.transform = this.details.element.pointer.transform;
      dialoguePointer.style.borderLeft = this.details.element.pointer.borderleft;
      //
      document.getElementById(`char_${this.persona.name}`).appendChild(dialogueCont);
      gsap.to(dialogueCont, {
        duration: 1,
        delay: 1.2,
        transform: "scale(1)",
        ease: "power4.out",
      });
      dialogueCont.appendChild(textContent);
      dialogueCont.appendChild(dialoguePointer);
      }
      var dialogueText = new Typing(
        this.persona.dialogue.text[this.currentDialogue].txt,
        `${this.details.element.class}_${this.persona.name}`,
        this.speed = this.details.pns.speed
      );
      dialogueText.action = () => {
        eval(this.persona.dialogue.text[this.currentDialogue].action);
      }
      setTimeout(() => {
        dialogueText.start();
        if (this.currentDialogue === this.persona.dialogue.text.length) {
          // Remove Choice button
        }
      }, 1800);

      dialogueText.onTypingComplete = () => {
        if (this.persona.dialogue.multi === true && this.currentDialogue < this.persona.dialogue.text.length) {
          this.currentDialogue++;
          const element = document.getElementById("choice1");
          const newElement = element.cloneNode(true); 
          element.parentNode.replaceChild(newElement, element);
          setTimeout(() => {
            newElement.innerHTML = "NEXT";
          }, 1000);
          newElement.addEventListener("click", () => {
            document.getElementById(`${this.persona.name}_dialogue`).remove();
            document.getElementById("choice1").style.animation = "";
            this.sayDialogue();
          });

          document.getElementById("choice1").style.animation = "blinkingChoice 2s infinite";
          
          if (this.currentDialogue === this.persona.dialogue.text.length) {
            setTimeout(() => {
              document.getElementById("choice1").remove();
            }, 800);
            setTimeout(() => {
              gsap.to(dialogueCont, {
                duration: 1,
                transform: "scale(0)",
                ease: "power4.out",
              });
            }, 7000);
          }
        }
      };
    }
  }

  enterScene() {
    var characterCont = document.createElement("div");
    var characterImg = document.createElement("img");
    var charPersona = this.details.persona;
    characterCont.classList.add(`charContainer`);
    characterCont.setAttribute("id", `char_${charPersona.name}`);
    characterCont.style.height = this.details.pns.height;
    characterCont.style.width = this.details.pns.width;
    characterCont.style.position = this.details.pns.position;
    characterCont.style.bottom = this.details.pns.bottom;
    characterCont.style.top = this.details.pns.top;
    characterCont.style.left = this.details.pns.left;
    characterCont.style.right = this.details.pns.right;
    characterCont.style.opacity = "0%";
    characterCont.style.zIndex = this.details.pns.zIndex;
    characterImg.src = this.persona.images.default;
    characterImg.style.height = "100%";
    characterImg.style.width = "auto";
    characterImg.style.objectFit = "contain";
    // characterCont.style.filter = `blur(${this.details.pns.blur})`;
    characterImg.style.filter = `brightness(${this.details.pns.brightness}) blur(${this.details.pns.blur})`;
    characterCont.appendChild(characterImg);
    document.getElementById(`currentSceneView`)?.appendChild(characterCont);
    gsap.to(characterCont, {
      duration: 1,
      delay: 1,
      opacity: 1,
      stagger: 0.5,
      ease: "power4.out",
    });
    if (this.details.pns.left === "auto") {
      gsap.to(characterCont, {
        duration: 2,
        delay: 1,
        right: this.details.pns.rightTo,
        ease: "power4.out",
      });
    } else {
      gsap.to(characterCont, {
        duration: 2,
        delay: 1,
        left: this.details.pns.leftTo,
        ease: "power4.out",
      });
    }
  }
}
