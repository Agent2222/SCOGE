import { TypingPlus } from "../src//index.js";

class uniMenuAgent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.dialogue;
        this.intro = "Ok, so here's your Digisette Domain Development setup interface. You'll be able setup domain from here.";
    }

    get active() {
        return this.getAttr('active');
    }

    set active(val) {
        this.setAttr('active', val);
    }

    get position() {
        return this.getAttribute('position');
    }

    get location() {
        return this.getAttribute('location');
    }

    static get observedAttributes() {
        return ["active", "position"];
    }

    mainLocation() {
        this.shadowRoot.getElementById("chat").style.backgroundColor = "rgba(0,0,0,0.85)";
        this.shadowRoot.getElementById("agentProfile").style.backgroundColor = "rgba(0,0,0,0.85)";
    }

    left() {
        var chat = this.shadowRoot.getElementById("chat");
        var agentImg = this.shadowRoot.getElementById("agentProfile");
        var main = this.shadowRoot.getElementById("main");
        main.style.gridTemplateColumns = "40% 60%";
        agentImg.style.right = "auto";
        agentImg.style.left = "2%";
        main.appendChild(agentImg);
        main.appendChild(chat);
        this.shadowRoot.getElementById("agentImg").style.transform = "scaleX(-1)"
    }

    right() {
        var chat = this.shadowRoot.getElementById("chat");
        var agentImg = this.shadowRoot.getElementById("agentProfile");
        var main = this.shadowRoot.getElementById("main");
        main.style.gridTemplateColumns = "60% 40%";
        agentImg.style.right = "2%";
        agentImg.style.left = "auto";
        // main.appendChild(chat);
        main.appendChild(agentImg);
        this.shadowRoot.getElementById("agentImg").style.transform = "scaleX(1)"
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === "true") {
            var pos = this.position;
            this.shadowRoot.getElementById("main").style.display = "grid";
            if (pos === "left") {
                setTimeout(()=> {
                    this.left();
                }, 100)
            }
            if (this.location === "main") {
                setTimeout(()=> {
                    this.mainLocation();
                }, 100)
            }
            setTimeout(() => {
                this.shadowRoot.getElementById("agentImg").style.transition = "all .8s ease-in-out";
                this.shadowRoot.getElementById("agentImg").style.right = "0%";
                var intro = this.intro
                this,this.shadowRoot.getElementById("ddLogo").style.display = "block";
                var el = this.shadowRoot.getElementById("chat");
                this.dialogue = new TypingPlus(intro,el,60);
                setTimeout(() => {
                    el.innerHTML = "";
                    if (!window.miniDialogueStarted) {
                        this.dialogue.start();
                        window.miniDialogueStarted = true;
                    } else {
                        this.shadowRoot.getElementById("chat").innerHTML = this.intro;
                    }
                }, 500);
            }, 500);
        }
        if (newValue === "false") {
            setTimeout(() => {
                this.shadowRoot.getElementById("agentImg").style.transition = "all .8s ease-in-out";
                this.shadowRoot.getElementById("agentImg").style.right = "-100%";
                this,this.shadowRoot.getElementById("ddLogo").style.display = "none";
            }, 500);
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                // :host {
                //     display: block;
                //     position: relative;
                //     width: 100%;
                //     height: 100%;
                //     overflow: hidden;
                // }
                
                // :host([active]) {
                //     display: block;
                //     position: relative;
                //     width: 100%;
                //     height: 100%;
                //     overflow: hidden;
                // }

                #main {
                    height: 100%;
                    width: 100%;
                    display: none;
                    grid-template-columns: 60% 40%;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                #agentProfile {
                    height: 100%;
                    width: 40%;
                    border: 1px solid #ff002d;
                    border-radius: 50%;
                    position: absolute;
                    overflow: hidden;
                    right: 2%;
                    top: 6%;
                    scale: 0.8;
                    transition: all .2s ease-in-out;
                    cursor: pointer;
                }

                #agentChat {
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                #chat {
                    height: 50%;
                    width: 70%;
                    font-family: 'Roboto', sans-serif;
                    color: #ff002d;
                    border-top: 1px solid #ff002d;
                    border-bottom: .5px solid #ff002d;
                    margin-top: 6%;
                    border-radius: 10px;
                    padding: 5%;
                    text-transform: uppercase;
                    font-size: .8em;
                    letter-spacing: 2px;
                    background-color: rgba(0, 0, 0, 0.5);
                }
                #agentImg {
                    right: -100%;
                    position: absolute;
                    z-index: 2;
                }

                #help {
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    left: 8%;
                    bottom: 5%;
                    border-radius: 20px;
                    background-color: rgba(0, 0, 0, 0.85);
                    border: 1px solid var(--primary);
                    z-index: 10;
                    font-family: "BS-R";
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .2s ease-in-out;
                    cursor: pointer;
                }

                #help:hover {
                    border: 1px solid var(--secondary);
                    scale: 1.1;
                    color: var(--secondary);
                }

                #ddLogo {
                    animation: domainWF 20s ease-in-out infinite;
                    z-index: -1;
                    display: none;
                  }
      
                  @keyframes domainWF {
                    0% {
                      transform: scale(1);
                      opacity: 0;
                    }
                    10% {
                      opacity: 1;
                    }
                    70% {
                      opacity: 1;
                    }
                    100% {
                      transform: scale(7) translateY(5%);
                      opacity: 0;
                    }
                  }
            </style>
            <div id="main">
                <div id="agentChat">
                    <div id="chat">
                    </div>
                </div>
                <div id="help">H</div>
                <div id="agentProfile">
                    <img id="agentImg" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/CC-Lesli-1.png" alt="Avatar" style="width:100%">
                    <img src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/graphics/domain-wireframe.png" alt="Domain Development" id="ddLogo" style="height:100%">
                </div>
            </div>
        `;
    }

}

customElements.define('uni-menu-agent', uniMenuAgent);

export {uniMenuAgent};