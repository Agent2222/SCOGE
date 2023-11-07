import { soundtrack } from "../universe";
import { gsap } from "gsap";
import { channel2ex } from "../universe";

class emoter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.emotes = false;
    }

    get active() {
        return this.getAttr('active');
    }

    set active(val) {
        this.setAttr('active', val);
    }


    static get observedAttributes() {
        return ["active"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === "true") {
            this.activate();
        }
    }

    openEmotes() {
        if (window.mapperActive === false) {
        gsap.to(this.shadowRoot.getElementById("main"), {
            duration: .3, 
            ease: "power4.out", 
            y: 0,
            opacity: 1
        });
        this.emotes = true;
        setTimeout(() => {
            gsap.to(this.shadowRoot.getElementById("main"), {
                duration: .3, 
                ease: "power4.out", 
                y: 100,
                opacity: 0
            });
            this.emotes = false;
        }, 2000);
        } else {
            alert("Activated");
        }
    }

    activate() {
        document.addEventListener('keydown', (e) => {
            var player =  document.getElementById("selection");
            if (e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 53 || e.keyCode === 54 || e.keyCode === 55 || e.keyCode === 56 || e.keyCode === 57 || e.keyCode === 48) {
                if (this.emotes === false) {
                    this.openEmotes();
                    return;
                }
            }
            if (e.keyCode === 49 && this.emotes === true) {
                soundtrack.play("explore-1");
                window.uniPlayer.emote = "👋";
                player.innerHTML = `<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">👋</div>`;
                channel2ex.presence.update({ data: window.uniPlayer });
            } else if (e.keyCode === 50 && this.emotes === true) {
                soundtrack.play("explore-1");
                window.uniPlayer.emote = "😆";
                channel2ex.presence.update({ data: window.uniPlayer });
                player.innerHTML = `<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">😆</div>`;
            } else if (e.keyCode === 51 && this.emotes === true) {
                soundtrack.play("explore-1");
                window.uniPlayer.emote = "🍻";
                channel2ex.presence.update({ data: window.uniPlayer });
                player.innerHTML = `<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">🍻</div>`;
            } else if (e.keyCode === 52 && this.emotes === true) {
                soundtrack.play("explore-1");
                window.uniPlayer.emote = "🚨";
                channel2ex.presence.update({ data: window.uniPlayer });
                player.innerHTML = `<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">🚨</div>`;
            } else if (e.keyCode === 53 && this.emotes === true) {
                // soundtrack.play("explore-1");
                // window.uniPlayer.emote = "💥";
                // channel2.presence.update({ data: window.uniPlayer });
            } else if (e.keyCode === 54 && this.emotes === true) {
                // soundtrack.play("explore-1");
                // window.uniPlayer.emote = "🕹";
                // channel2.presence.update({ data: window.uniPlayer });
            } else if (e.keyCode === 55 && this.emotes === true) {
                // soundtrack.play("explore-1");
                // window.uniPlayer.emote = "📸";
                // channel2.presence.update({ data: window.uniPlayer });
            } else if (e.keyCode === 56 && this.emotes === true) {
                soundtrack.play("explore-1");
                window.uniPlayer.emote = "💤";
                channel2ex.presence.update({ data: window.uniPlayer });
                player.innerHTML = `<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">💤</div>`;
            } else if (e.keyCode === 57 && this.emotes === true) {
                // soundtrack.play("explore-1");
                // window.uniPlayer.emote = "🌐";
                // channel2.presence.update({ data: window.uniPlayer });
            } else if (e.keyCode === 48 && this.emotes === true) {
                soundtrack.play("explore-1");
                window.uniPlayer.emote = "💬";
                channel2ex.presence.update({ data: window.uniPlayer });
                player.innerHTML = `<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">💬</div>`;
            }
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                #main {
                    position: absolute;
                    height: 4%;
                    width: 35%;
                    left: 32.5%;
                    bottom: 5%;
                    z-index: 100;
                    display: grid;
                    grid-template-columns: repeat(10, 1fr);
                    overflow: hidden;
                    background-color: rgba(0, 0, 0, .8);
                    border-radius: 10px;
                    border: .5px solid #ff002d;
                    font-family: "BS-R";
                    transform: translateY(100px);
                    opacity: 0;
                }

                .emote {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: .1s ease-in-out;
                }

                .emote:hover {
                    background-color: #ff002d;
                    color: var(--secondary);
                }

                .emo {
                    font-size: 1.3rem;
                    transition: .3s ease-in-out;
                }

                .emote:hover .emo {
                    font-size: 1.8rem;
                }

                .inactive {
                    opacity: .3;
                    cursor: default;
                }

            </style>
            <div id="main">
                <div class="emote"> 
                    <div class="key">1</div>
                    <div class="emo">👋</div>
                </div>
                <div class="emote"> 
                    <div class="key">2</div>
                    <div class="emo">😆</div>
                </div>
                <div class="emote"> 
                    <div class="key">3</div>
                    <div class="emo">🍻</div>
                </div>
                <div class="emote"> 
                    <div class="key">4</div>
                    <div class="emo">🚨</div>
                </div>
                <div class="emote inactive"> 
                    <div class="key">5</div>
                    <div class="emo">💥</div>
                </div>
                <div class="emote inactive"> 
                    <div class="key">6</div>
                    <div class="emo">🕹</div>
                </div>
                <div class="emote inactive"> 
                    <div class="key">7</div>
                    <div class="emo">📸</div>
                </div>
                <div class="emote"> 
                    <div class="key">8</div>
                    <div class="emo">💤</div>
                </div>
                <div class="emote inactive"> 
                    <div class="key">9</div>
                    <div class="emo">🌐</div>
                </div>
                <div class="emote"> 
                    <div class="key">0</div>
                    <div class="emo">💬</div>
                </div>
            </div>
        `;
    }

}

customElements.define('uni-c-emoter', emoter);

export {emoter};