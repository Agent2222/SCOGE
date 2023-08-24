class uniMenuAgent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
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
                    display: grid;
                    grid-template-columns: 60% 40%;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
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
                    font-size: .7em;
                    letter-spacing: 2px;
                    background-color: rgba(0, 0, 0, 0.5);
                }
            </style>
            <div id="main">
                <div id="agentChat">
                    <div id="chat">
                        Hello, I'm Leslie.
                    </div>
                </div>
                <div id="agentProfile">
                    <img id="agentImg" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/CC-Lesli-1.png" alt="Avatar" style="width:100%">
                </div>
            </div>
        `;
    }

}

customElements.define('uni-menu-agent', uniMenuAgent);

export {uniMenuAgent};