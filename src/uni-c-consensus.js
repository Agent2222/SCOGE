import { BABYLON } from "babylonjs-viewer";

class uniConsensus extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    // get active() {
    //     return this.getAttr('active');
    // }

    // set active(val) {
    //     this.setAttr('active', val);
    // }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'true') {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
        setTimeout(() => {
            var dViewer = document.getElementById('digModel');
            this.shadow.getElementById('digisetteRing').appendChild(dViewer);
        }, 3000);
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                :host {
                    display: none;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: rgba(168,206,196,0.15);
                    z-index: 100;
                }
                #view {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 35% 65%;
                    grid-template-rows: 100%;
                    background-color: rgba(255,0,45,0.15);
                }
                #voteSection {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255,0,45,0.15);
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 15% 5% 75% 5%;
                }
                #digisetteRing {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255,0,45,0.15);
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                }
            </style>
            <div id="view">
                <div id="voteSection">
                    <div id="digisetteRing">
                    </div>
                    <div id="votingHeader"></div>
                    <div id="votesBlock"></div>
                    <div id="votesProgress"></div>
                </div>
                <div id="visualSection">
                    <div id="thoughtsButton"></div>
                    <div id="avatar"></div>
                    <div id="votingButton"></div>
                    <div id="pecentageBlock"></div>
                    <div id="videoBg"></div>
                </div>
            </div>
        `;
    }

}

customElements.define('uni-consensus', uniConsensus);

export { uniConsensus };