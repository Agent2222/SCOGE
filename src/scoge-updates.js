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
  closeModal = () => {
    document.getElementById("updatesModal").style.display = "none";
  }

  Glow = () => {
    this.shadow.getElementById("updatesModal").style.transition = "all 0.3s ease-in-out";
    this.shadow.getElementById("updatesModal").style.boxShadow = "0 0 10px 0 var(--primary)";
    this.shadow.getElementById("updatesModal").style.border = "1px solid var(--primary)";
  }

  unGlow = () => {
    this.shadow.getElementById("updatesModal").style.transition = "all 0.3s ease-in-out";
    this.shadow.getElementById("updatesModal").style.boxShadow = "0 0 10px 0 var(--accent)";
    this.shadow.getElementById("updatesModal").style.border = "1px solid var(--accent)";
  }

  connectedCallback() {
    this.render();
    this.shadow.getElementById("closeBtn").addEventListener("click", this.closeModal);
    this.shadow.getElementById("closeBtn").addEventListener("mouseover", this.Glow);
    this.shadow.getElementById("closeBtn").addEventListener("mouseout", this.unGlow);
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
                src: url("../assets/fonts/Garamond-Regular.ttf");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "Garamond";
                src: url("https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/Garamond-Regular.svg");
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
            a { 
              color: var(--primary);
              text-decoration: underline;
            }
            a:hover {
              color: var(--secondary);
            }
            a:visited {
              color: var(--primary);
            }
            #mainBody {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.9);
              left: 0;
              top: 0;
              position: fixed;
              z-index: 4;
              overflow: hidden;
            }
            #updatesModal {
              width: 40%;
              height: 40%;
              background-color: rgba(0, 0, 0, 0.9);
              position: absolute;
              left: 30%;
              top: 30%;
              z-index: 6;
              padding: 20px;
              border-radius: 10px;
              border: 1px solid black;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 80% 20%;
              border: 1px solid var(--accent);
              box-shadow: 0 0 10px 0 var(--accent);
              overflow: hidden;
            }
            #leftPan {
              width: 95%;
              height: 100%;
              font-family: "BS-R";
              font-size: 1.6rem;
              color: var(--accent);
              padding-right: 5%;
              overflow: hidden;
            }
            #leftPan p {
              font-family: "Garamond";
              font-size: 1.3rem;
              color: var(--secondary);
              line-height: 1.1;
              margiin-top: 0;
            }
            #rightPan {
              width: 100%;
              height: 100%;
              background-image: url("https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/s-Uni-sq.jpg");
              background-size: cover;
            }
            #footer {
              width: 100%;
              height: 100%;
            }
            #closeBtn {
              transition: all 0.3s ease-in-out;
            }
            #closeBtn:hover {
              transform: scale(1.1);
              rotate: 90deg;
            }
            h3 {
              margin-top: 0;
            }
            @media screen and (max-width: 769px) {
              #mainBody {
                display: none !important;
              }
            }
         </style>
         <div id="mainBody">
         <div id="updatesModal">
            <div id="closeBtn" style="position: absolute; right: 0; top: 0; padding: 10px; cursor: pointer;">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div id="leftPan">
              <h3>Join the SCOGÉ Universe Mailing List</h3>
              <p>Get early access to the SCOGÉ Universe launching on the <span><a href="https://internetcomputer.org/" target="_blank">Internet Computer</a></span> and receive updates on our upcoming stories and 'NMC' Token. Don't miss out on this opportunity to join us on this thrilling journey.</p>
            </div>
            <div id="rightPan">
            </div>
            <div id="footer">
              <scoge-subscribe subscribe="subscribe" id="subscribeComp2" width="90%" height="10%"></scoge-subscribe>
            </div>
         </div>
         </div>
         `;
  }
}

customElements.define("scoge-updates", scogeUpdates);

export { scogeUpdates };

 