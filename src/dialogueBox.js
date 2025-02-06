class dialogueBox extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    get dialogue() {
      return this.getAttribute("dialogue");
    }
  
    set dialogue(val) {
      this.setAttribute("dialogue", val);
    }
  
    static get observedAttributes() {
      return ["dialogue"];
    }
  
    attributeChangedCallback(prop, oldVal, newVal) {
      if (prop === "dialogue") {
        this.render();
      }
    }
    
  
  // Functions
  
    connectedCallback() {
      this.render();
      // Add Event handlers to rendered html below
      // Must use this.shadow to access dom.
      // Add methods above this method
      // Ex. btn.addEventListener('click', this.method.bind(this))
      // NOTE: Render clears all code because of innerHtml
    }
  
    render() {
      this.shadow.innerHTML = `
           <style>
              @font-face {
                  font-family: "BS-R";
                  src: url("https://storage.scoge.co/scogeFonts/BioSans-Regular.svg");
                  font-weight: normal;
                  font-style: normal;
              }
              :root {
                --primary: #ff002d;
                --secondary: #b5d3d1;
                --accent: #94be8c;
              }
              ::placeholder {
                color: #b5d3d1;
              }
              #dialogue {
                position: absolute;
                background-color: yellow;
                z-index: 4;
                white-space: nowrap;
              }
              #diaMain {
                width: auto;
                height: auto;
                background-color: black;
                color: var(--primary);
                z-index: 10;
                padding: .5rem;
                white-space: nowrap;
                font-family: "American Typewriter", "BS-R";
                letter-spacing: 1px;
              }
              @media screen and (max-width: 769px) {
              }
           </style>
           <div id="dialogue">
              <div id="diaMain">
              </div>
           </div>
           `;
    }
  }
  
  customElements.define("scoge-dialogue", dialogueBox);
  
  export { dialogueBox };
  
   