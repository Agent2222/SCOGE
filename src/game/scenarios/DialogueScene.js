import { Scenario } from "./scenarios.js";
import { Character } from "../characters/Character.js";

export class DialogueScene extends Scenario {
    constructor(props) {
      super(props);
      this.props = props;
      this.image = null;
      this.dialogueElement = null;
      this.buttonElement = null;
      this.isVisible = false;
      this.isLoading = false;
      this.onLoad = null;
      this.onError = null;
      this.onHide = null;
      this.onShow = null; // a function to be called when the image scene is shown
      this.onButtonClick = null; // a function to be called when the button is clicked
      this.onImageLoad = null;
      this.onImageError = null;
      this.onDestroy = null;
      this.character = new Character('Alex');
    }
    
    // shows the scene on the page
    show() {
      this.isVisible = true;
      if (this.onShow) this.onShow();

      // Create BG
      const bg = document.createElement('div');
      bg.classList.add('sceneBg');
      bg.style.zIndex = 10;
      bg.style.position = 'absolute';
      bg.style.top = 0;
      bg.style.left = 0;
      bg.style.width = '100%';
      bg.style.height = '100%';
      bg.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
      const el1 = document.createElement('div');
      const el2Img = document.createElement('img');  
      const el3Img = document.createElement('img');  
      el1.classList.add('element1');
      el1.style.zIndex = 11;
      el1.style.position = 'absolute';
      el1.style.top = '45%';
      el1.style.left = '40%';
      el1.style.width = '300px';
      el1.style.height = 'auto';
      el2Img.src = "https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/plugWallet.png";
      el3Img.src = "https://storage.fleek.zone/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/plugWallet.png";
      el2Img.style.width = '100%';
      el2Img.style.height = 'auto';
      el2Img.style.filter = "blur(50px)";
      el3Img.style.width = '100%';
      el3Img.style.height = 'auto';
      el3Img.style.position = 'absolute';
      el3Img.style.top = '0';
      el3Img.style.left = '0';
      el3Img.style.zIndex = 12;
      el1.appendChild(el2Img);
      el1.appendChild(el3Img);

      // Append BG to body
      document.body.appendChild(bg);
      bg.appendChild(el1);
      this.character.loadData();
      this.character.enterScene();
      this.character.sayDialogue();
    }
    
    // hides the scene on the page
    hide() {
      this.isVisible = false;
      if (this.onHide) this.onHide();
    }
    
    // loads the scene resources (e.g. images, data, etc.)
    load() {
      if (this.isLoading) return;
      this.isLoading = true;
      this.image = new Image();
      this.image.onload = () => {
        this.isLoading = false;
        if (this.onLoad) this.onLoad();
        if (this.onImageLoad) this.onImageLoad();
      };
      this.image.onerror = () => {
        this.isLoading = false;
        if (this.onError) this.onError();
        if (this.onImageError) this.onImageError();
      };
      this.image.src = this.props.imageURL;
    }
    
    // handles any errors that occur during loading
    error() {
      console.log('Error loading resources');
    }
    
    // cleans up any resources used by the scene
    destroy() {
      if (this.onDestroy) this.onDestroy();
    }
    
    // sets the image for the scene
    setImage(imageURL) {
      this.props.imageURL = imageURL;
      if (this.image) {
        this.image.src = this.props.imageURL;
        this.load();
      }
    }
    
    // gets the current image for the scene
    getImage() {
      return this.props.imageURL;
    }
    
    // sets the dialogue for the scene
    setDialogue(dialogue) {
      this.props.dialogue = dialogue;
      if (this.dialogueElement) {
        this.dialogueElement.innerText = this.props.dialogue;
      }
    }
    
    // sets the action to be performed when the button is clicked
    setButtonAction(buttonAction) {
      this.props.buttonAction = buttonAction;
      if (this.buttonElement) {
        this.buttonElement.addEventListener('click', this.props.buttonAction);
      }
    }
    
    // sets the element containing the dialogue
    setDialogueElement(dialogueElement) {
      this.dialogueElement = dialogueElement;
      if (this.dialogueElement) {
        this.dialogueElement.innerText = this.props.dialogue;
      }
    }
    
    // sets the element containing the button
    setButtonElement(buttonElement) {
      this.buttonElement = buttonElement;
      if (this.buttonElement) {
        this.buttonElement.addEventListener('click', this.props.buttonAction);
      }
    }
    
    // removes the event listener from the button element
    destroyButtonElement() {
      if (this.buttonElement) {
        this.buttonElement.removeEventListener('click', this.props.buttonAction);
        this.buttonElement = null;
      }
    }
    
    // removes the text from the dialogue element
    destroyDialogueElement() {
      if (this.dialogueElement) {
        this.dialogueElement.innerText = '';
        this.dialogueElement = null;
      }
    }
    
    // removes the image from the scene.
    destroyImage() {
      if (this.image) {
        this.image.onload = null;
        this.image.onerror = null;
        this.image.src = '';
        this.image = null;
      }
    }
  }
  