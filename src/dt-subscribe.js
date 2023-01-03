
class dtSubscribe extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get subscribe() {
    return this.getAttribute("subscribe");
  }

  set subscribe(val) {
    this.setAttribute("subscribe", val);
  }

  get width() {
    return this.getAttribute("width");
  }
  
  set width(val) {
    this.setAttribute("width", val);
  }
  
  get height() {
    return this.getAttribute("height");
  }
  
  set height(val) {
    this.setAttribute("height", val);
  }

  static get observedAttributes() {
    return ["subscribe","width", "height"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "subscribe") {
      this.render();
    }
    if (prop === "subscribe" || prop === "width" || prop === "height") {
      this.render();
    }
  }
  

// Functions
  clearform() {
    this.shadow.getElementById("mce-EMAIL").value = "";
  }

  connectedCallback() {
    this.render();
    this.shadow.getElementById("sub").addEventListener("click", this.clearform.bind(this));
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
            #subscribeSect {
              width: 25%;
              height: 4%;
              position: absolute;
              bottom: 7%;
              right: 0%;
              z-index: 4;
              opacity: 80%;
              transition: 0.5s;
            }
            #subscribeSect:hover {
              opacity: 100%;
            }
            #subscribeInput {
              width: 80%;
              height: 100%;
              border: none;
              color: var(--primary);
              font-family: "BS-R";
              font-size: 10px;
              padding-left: 2%;
              letter-spacing: 1px;
              text-transform: uppercase;
              background-color: rgba(0, 0, 0, 0.8);
            }
            #subscribeInput:focus {
              outline: none;
            }
            #mc-embedded-subscribe {
              background-color: var(--accent);
              height: 100%;
              width: 100%;
              border: none;
              font-size: 11px;
              cursor: pointer;
              transition: 0.3s;
            }
            #mc-embedded-subscribe:hover {
              background-color: var(--primary);
              color: var(--secondary);
            }
            #mc-embedded-subscribe-form {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
            }
            #mc_embed_signup_scroll {
              width: 100%;
              height: 100%;
              display: flex;
            }
            @media screen and (max-width: 769px) {
              #subscribeSect {
                width: 100%;
                height: 6%;
                bottom: 10%;
                background-color: black;
                opacity: 100%;
                border-top: .2px solid var(--accent);
                z-index: 5;
              }
              #mc_embed_signup_scroll {
                width: 95%;
                margin-left: 5%;
                display: grid;
                grid-template-columns: 80% 20% 0% !important;
                grid-template-rows: 1fr;
              }
              #subscribeInput {
                font-size: 12px;
                width: 100% !important;
              }
            }
         </style>
         <div id="subscribeSect" style="width: ${this.width}; height: ${this.height}">
            <form action="https://scoge.us3.list-manage.com/subscribe/post?u=06502830cf2008a1155da093a&amp;id=467d798f05&amp;f_id=00ba43e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                <input type="email" id="subscribeInput" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="SIGN UP TO BE NOTIFIED ON DROPS." required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_06502830cf2008a1155da093a_467d798f05" tabindex="-1" value=""></div>
                <div class="clear" id="sub"><input type="submit" value="ENTER" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              </div>
            </form>
         </div>
         `;
  }
}

customElements.define("scoge-subscribe", dtSubscribe);

export { dtSubscribe };

 