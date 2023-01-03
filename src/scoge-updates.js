
class scogeUpdates extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get updates() {
    return this.getAttribute("updates");
  }

  set updates(val) {
    this.setAttribute("updates", val);
  }

  static get observedAttributes() {
    return ["updatese"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "updates") {
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
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
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
            #updatesModal {
              width: 40%;
              height: 40%;
              background-color: rgba(0, 0, 0, 0.8);
              position: absolute;
              right: 30%;
              top: 30%;
              z-index: 3;
              padding: 20px;
            }
            #embed {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              margin-top: 20px;
            }
            @media screen and (max-width: 769px) {
            }
         </style>
         <div id="updatesModal">
            <h2 style="color: black; font-family: 'BS-R'; font-size: 1rem; text-align: left; margin: 0; padding: 0;">SCOGÉ Radio S2 - EP1</h2>
            <!-- 
            <p style="color: var(--secondary); font-family: 'BS-R'; font-size: 1rem; text-align: left; margin: 0; padding: 0;">This is the first episode of the second season of SCOGÉ Radio.</p> -->
            <div id="closeBtn" style="position: absolute; right: 0; top: 0; padding: 10px; cursor: pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div id="embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9wxyJZVKlGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </div>
         `;
  }
}

customElements.define("scoge-updates", scogeUpdates);

export { scogeUpdates };

 