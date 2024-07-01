import { SoundtrackManager } from "../soundtrack.js";

const soundtrack = new SoundtrackManager();

class compLoading extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    get active() {
        return this.getAttribute('active');
    }

    set active(val) {
        this.setAttribute('active', val);
    }


    static get observedAttributes() {
        return ["active"];
    }

    startLoading() {
        this.shadowRoot.getElementById("main").style.display = "grid";
        soundtrack.play('loading-1');
    }
 
    stopLoading() {
        this.shadowRoot.getElementById("main").style.display = "none";
        soundtrack.stop('loading-1');
      }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "active") {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                #main {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    background-color: teal;
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 6;
                }

                .LoadBox {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.9);
                    z-index: 7;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    font-family: "BS-B";
                    font-size: 1.5em;
                    color: var(--accent);
                    letter-spacing: 2px;
                }

                .loadIcon {
                    width: 300px;
                    height: 300px;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    animation: spin 10s linear infinite, pulse 3s ease-in-out infinite;
                    border: 5px dotted var(--accent);
                    border-radius: 50%;
                }
                    
                .loadinScreen {
                    position: absolute;
                    animation: blink 4s ease-in-out infinite;
                    }
                    @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                    
                @keyframes pulse {
                    0% {
                        scale: 1;
                    }
                    50% {
                        scale: .8;
                    }
                    100% {
                        scale: 1;
                    }
                }
                    
                @keyframes blink {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            </style>
            <div id="main">
                <div id="menuLoadingScreen" class="LoadBox">
                    <div id="loading" class="loadinScreen">LOADING...</div>
                <div class="loadIcon"></div>
              </div>
            </div>
        `;
    }

}

customElements.define('loading-modal', compLoading);

export {compLoading};