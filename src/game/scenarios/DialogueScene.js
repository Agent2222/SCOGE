
import { Scenario } from "../scenarios/Scenarios.js";
import { Character } from "../characters/Character.js";
import { connectPlugWallet, connectStoicWallet } from "../../wallets.js";
import { gsap } from "gsap";
import { newScenario } from "../../universe.js";
import { openNote1 } from "../../game/SceneManager.js";

// const canister = "7mfck-baaaa-aaaah-acuqq-cai";
const local = "http://127.0.0.1:8080/";
const canLocal = "bd3sg-teaaa-aaaaa-qaaba-cai";
const deploy = "https://ic0.io";
const canDeploy = "wnunb-baaaa-aaaag-aaoya-cai";
const whitelist = [canDeploy];

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
    this.chInSc = [];
  }

  // shows the scene on the page
  show() {
    if (!document.getElementById("currentSceneView")) {
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
  }

  transition() {

    document.querySelectorAll(".charContainer").forEach((char) => {
      
      // Remove who isnt in the next scene
      if (!this.chInSc.includes(char.id)) {
        //  not found in the scene
        gsap.to(char, {
          duration: 1,
          transform: "translateX(10vw)",
          opacity: 0,
          ease: "power4.out",
        });
        setTimeout(() => {
          char.remove();
          // remove ch id from chInSc
          this.chInSc = this.chInSc.filter((ch) => ch != `char_${char.id}`);
        }, 1000);
      }

      // Add who is in the next scene except the ones already in the scene
      if (this.chInSc.includes(char.id)) {
        this.characters.forEach((character) => {
          if (`char_${character.persona.name}` === char.id) {

            // Already in the scene
            gsap.to(char, {
              duration: 1,
              height: character.details.pns.height,
              zIndex: character.details.pns.zIndex,
              right: character.details.pns.rightTo,
            });

            document.querySelectorAll(".sceneElement").forEach((ch) => {
              gsap.to(ch, {
                translateX: "-15vw",
                ease: "ease-in-out",
              });
            });

            char.children[0].style.filter = `brightness(${character.details.pns.brightness}) blur(${character.details.pns.blur})`
            character.sayDialogue(char.id);

            // Remove Dialogue if not chat
            if (character.details.actions[0] != "chat") {
              gsap.to(document.getElementById(`${char.id.replace("char_","")}_dialogue`), {
                duration: 1,
                transform: "scale(0)",
                ease: "power4.out",
              });
              setTimeout(() => {
                document.getElementById(`${char.id.replace("char_","")}_dialogue`).remove();
              }, 1000);
            }

            return;
            
          } 

          // find if char is in the scene and not in the chInSc if so add
          this.chInSc.forEach((ch) => {
            if (character.persona.name != ch) {
              console.log(`"Not in the scene" ${char.id}`);
              if (!document.getElementById(`char_${character.persona.name}`)) {
                character.enterScene(character.persona.name);
              }
              return;
            }
          });

        });
      }

    });

    // Do the same for elements
    
  }
  

  // hides the scene on the page
  hide() {
    var view = document.getElementById(`currentSceneView`);
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
    if (!document.getElementById(`currentSceneView`)){
    this.cScene = document.createElement("div");
    this.cScene.classList.add("currentScene");
    this.cScene.setAttribute("id", `currentSceneView`);
    this.cScene.style.zIndex = 10;
    this.cScene.style.position = "absolute";
    this.cScene.style.top = 0;
    this.cScene.style.left = 0;
    this.cScene.style.width = "100%";
    this.cScene.style.height = "100%";
    this.cScene.style.backgroundColor = this.scene.bg;
    this.cScene.style.opacity = 0;
    }
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
        el.setAttribute("id", `${element.id}-cont`);
        el.style.zIndex = 11;
        el.style.position = element.position;
        el.style.top = element.top;
        el.style.bottom = element.bottom;
        el.style.left = element.left;
        el.style.width = element.width;
        el.style.height = element.height;
        el3Img.setAttribute("id", `${element.id}-img`);
        el3Img.setAttribute("class", "sceneElementImg");
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
          el2Img.setAttribute("class", "sceneElementImg");
          el3Img.src = element.src;
          el2Img.style.width = "100%";
          el2Img.style.height = "auto";
          el2Img.style.filter = "blur(50px)";
          el.appendChild(el2Img);
        }
        el.appendChild(el3Img);
        // Actions
        el.addEventListener("click", () => {
          const actions = {
            "connectPlugWallet()": () => connectPlugWallet(whitelist, deploy),
            "connectStoicWallet()": () => connectStoicWallet(whitelist),
            "openNote1()": () => openNote1(),
            "getDigisette()": () => {
              window.open("https://yumi.io/launchpad/detail/hmz4w-fiaaa-aaaah-admlq-cai", "_blank");
            }
            // add other actions here
          };
        
          if (actions[element.action] && window.newElLink == null) {
            console.log("Action: ", element.action);
            actions[element.action]();
          } else {
            window.open('https://yumi.io/launchpad/detail/hmz4w-fiaaa-aaaah-admlq-cai', "_blank");
          }
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
    
    // Choices
    if (!document.getElementById("choices")) {
     var choices = document.createElement("div");
    choices.classList.add("choices");
    choices.setAttribute("id", "choices");
    this.scene.choices.forEach((choice, index) => {
      var choiceCont = document.createElement("div");
      choiceCont.classList.add("choice");
      choiceCont.setAttribute("id", `choice${index + 1}`);
      choiceCont.innerText = choice;
      choices.appendChild(choiceCont);
      if (choice.includes("LEAVE")) {
        choiceCont.addEventListener("click", () => {
          this.hide();
        });
        this.cScene.appendChild(choices);
        return;
      }
      else {
        choiceCont.addEventListener("click", () => {
          // newScenario.scenario.nextScene();
          // window.testScn.nextScene();
          window.currentScenario.nextScene();
        });
        this.cScene.appendChild(choices);
      }
    });
  } else {
    // Change Choices
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
    this.chInSc = this.scene.characters?.map((character) => `char_${character.persona.name}`);
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
