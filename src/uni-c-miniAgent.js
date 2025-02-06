// import { TypingPlus } from "../src//index.js";
// import { SoundtrackManager } from "./soundtrack.js";
import { MainDialogue } from "./typing.js";

class uniMenuAgent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.dialogue;
        this.miniOpen = false;
        // this.soundtrack = new SoundtrackManager();
        this.intro = "Ok, so here's your Digisette Domain Development setup interface. You'll be able setup domain from here.";
        this.dialogueBank = {
            intro: [
                {
                  text: "After the recent Digisette recall we're going to have to be really careful.",
                  waiter: null,
                  choices: [
                    {
                      text: "[ CONTINUE ]",
                      action: () => this.dialogue.choose(1)
                    },
                    {
                        text: "[ CONTINUE ]",
                        action: () => this.dialogue.choose(1)
                    }
                  ]
                },
                {
                    text: "All enforcers have orders to bring in anyone they find still using this system.",
                    waiter: null,
                    choices: [
                      {
                        text: "[ CONTINUE ]",
                        action: () => this.dialogue.choose(1)
                      }
                    ]
                  },
                {
                  text: 'This Oracle Cloak should help you maneuver through the city. But be fast!',
                  waiter: null,
                  choices: [
                    {
                      text: "[ OK! ]",
                      action: () => this.dialogue.choose(1)
                    }
                  ]
                },
                {
                    text: 'This Oracle Cloak should help you maneuver through the city. But be fast!',
                    waiter: null,
                    choices: [
                      {
                        text: "[ OK! ]"
                      }
                    ]
                },
                {
                    text: 'This Oracle Cloak should help you maneuver through the city. But be fast!',
                    waiter: null,
                    choices: []
                }
              ]
        }
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

    get status() {
        return this.getAttribute('location');
    }

    static get observedAttributes() {
        return ["active", "position", "status"];
    }

    mainLocation() {
        this.shadowRoot.getElementById("chat").style.backgroundColor = "rgba(0,0,0,0.85)";
        this.shadowRoot.getElementById("agentProfile").style.backgroundColor = "rgba(0,0,0,0.85)";
    }

    left() {
        const chat = this.shadowRoot.getElementById("chat");
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
        const chat = this.shadowRoot.getElementById("chat");
        var agentImg = this.shadowRoot.getElementById("agentProfile");
        var main = this.shadowRoot.getElementById("main");
        main.style.gridTemplateColumns = "60% 40%";
        agentImg.style.right = "2%";
        agentImg.style.left = "auto";
        // main.appendChild(chat);
        main.appendChild(agentImg);
        this.shadowRoot.getElementById("agentImg").style.transform = "scaleX(1)"
    }

    toggle() {
        if (this.miniOpen === true) {
            this.shadowRoot.getElementById("chat").style.transform = "scaleX(0)";
            setTimeout(()=> {
                this.shadowRoot.getElementById("agentProfile").style.transform = "scale(0)";
            }, 290)
            this.miniOpen = false;
            window.soundtrack.setVolume("closewindow-1", 0.8);
            window.soundtrack.play("closewindow-1");
            this.shadowRoot.getElementById("chat").style.pointerEvents = "none";
            this.shadowRoot.getElementById("agentProfile").style.pointerEvents = "none";
            return;
        } else {
            window.soundtrack.setVolume("openwindow-1", 0.8);
            window.soundtrack.play("openwindow-1");
            this.shadowRoot.getElementById("agentProfile").style.transform = "scaleX(1)";
            this.shadowRoot.getElementById("chat").style.pointerEvents = "all";
            this.shadowRoot.getElementById("agentProfile").style.pointerEvents = "all";
            setTimeout(()=> {
                this.shadowRoot.getElementById("chat").style.transform = "scaleX(1)";
            }, 270)
            this.miniOpen = true;
        }   
    }


    engage() {
        this.shadowRoot.getElementById("agentImg").style.transition = "all .8s ease-in-out";
                this.shadowRoot.getElementById("agentImg").style.right = "0%";
                var intro = this.intro
                this,this.shadowRoot.getElementById("ddLogo").style.display = "block";
                var el = this.shadowRoot.getElementById("chat");
                this.shadowRoot.getElementById("help").addEventListener("click", () => {
                    this.toggle();
                });
                // this.dialogue = new TypingPlus(intro,el,60);
                this.dialogue = new MainDialogue("Kat","neutral", this.dialogueBank['intro'])
                this.toggle();
                setTimeout(() => {
                    el.innerHTML = "";
                    if (!window.miniDialogueStarted) {
                        this.dialogue.start();
                        window.miniDialogueStarted = true;
                    } else {
                        this.shadowRoot.getElementById("chat").innerHTML = this.intro;
                    }
                }, 800);
    }

    activate(newValue) {
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
                this.engage();
            }, 500);
    }

    deactivate() {
        setTimeout(() => {
            this.shadowRoot.getElementById("agentImg").style.transition = "all .8s ease-in-out";
            this.shadowRoot.getElementById("agentImg").style.right = "-100%";
            this,this.shadowRoot.getElementById("ddLogo").style.display = "none";
        }, 500);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "active") {
            if (newValue === "true") {
                this.activate(newValue);
            }
            if (newValue === "false") {
                this.deactivate();
            }
        }
        // if (name === "status") {
        //     if (newValue === "help") {
        //         alert("Help");
        //     }
        // }
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
                    pointer-events: none;
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
                    transition: .3s all;
                    transform: scale(0);
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
                    transform-origin: left;
                    transform: scale(0);
                    transition: .3s all;
                    color: var(--secondary);
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
                    pointer-events: auto;
                }

                .continueBut {
                    color: var(--accent);
                    text-align: right;
                    margin-top: 2%;
                    float: right;
                    width: 100%;
                    cursor: pointer;
                    transition: .3s all;
                  }

                  .continueBut:hover {
                    letter-spacing: 2px;
                    text-decoration: underline;
                  }

                #help:hover {
                    border: 1px solid var(--secondary);
                    scale: 1.1;
                    color: var(--secondary);
                }

                .bright {
                    color: var(--accent);
                }

                .bold {
                    font-family: "BS-B";
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
                <div id="help">S</div>
                <div id="agentProfile">
                    <img id="agentImg" src="https://storage.scoge.co/scogeUniverse/characters/CC-Lesli-1.png" alt="Avatar" style="width:100%">
                    <img src="https://storage.scoge.co/scogeUniverse/uniMenu/domain-wireframe.png" alt="Domain Development" id="ddLogo" style="height:100%">
                </div>
            </div>
        `;
    }

}

customElements.define('uni-menu-agent', uniMenuAgent);

export {uniMenuAgent};