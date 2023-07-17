
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
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 15% 5% 65% 15%;
                }
                #digisetteRing {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    user-select: none;
                    pointer-events: none;
                }
                #votingHeader {
                    font-family: "BS-I";
                    text-transform: uppercase;
                    color: var(--accent);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2em;
                    letter-spacing: 0.1em;
                }
                #votesBlock {
                    width: 80%;
                    height: 95%;
                    background-color: rgba(0,0,0,0.6);
                    margin-left: 10%;
                    margin-right: 10%;
                    border-bottom: 1px solid #ff002d;
                    border-top: 1px solid #ff002d;
                    border-radius: 1em;
                    margin-top: 5%;
                    display: flex;
                    flex-direction: column;
                    align-items: space-evenly;  
                }
                #voteSliderCont {
                    width: 80%;
                    height: 70%;
                    margin-left: 10%;
                    margin-right: 10%;
                    display: grid;
                    position: relative;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    font-family: "BS-R";
                    padding-bottom: 5%;
                    margin-bottom: 5%;
                }
                #myRange {
                    align-self: center;
                    position: absolute;
                    width: 100%;
                    -webkit-appearance: none;
                    height: 1px;
                    background: var(--secondary);
                    z-index: 1;
                }
                #myRange::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 25pt;
                    height: 25pt;
                    background: black;
                    border-radius: 50%;
                    border: 1px solid #ff002d;
                    cursor: pointer;
                }
                #vsStart {
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-start;
                    color: var(--secondary);
                    font-size: 1em;
                    letter-spacing: 0.1em;
                }
                #vsEnd {
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                    color: var(--secondary);
                    font-size: 1em;
                    letter-spacing: 0.1em;
                }
                #Sliderdetail {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    position: inherit;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    pointer-events: none;
                    user-select: none;
                }
                .voteCategory {
                    width: 100%;
                    height: 10%;
                    display: grid;
                    grid-template-columns: 40% 40% 20%;
                    grid-template-rows: 1fr;
                    font-family: "BS-R";
                    justify-items: start;
                    align-items: center;
                    border: 1px solid #ff002d;
                    margin-top: 2%;
                    transform: scale(0.88);
                    border-radius: .2em;
                    background-color: rgba(0,0,0,0.3);
                    cursor: pointer;
                    transition: .3s ease-in-out;
                }
                .voteCategory:hover {
                    background-color: rgba(255,255,255,0.1);
                    transform: scale(.96);
                }
                .voteCategoryName {
                    font-size: 1.5em;
                    text-transform: uppercase;
                    font-family: "BS-I";
                    letter-spacing: 0.1em;
                    padding-left: 10%;
                }
                .voteCategoryVotes {}
                .voteCategoryPercent {
                    font-size: 3em;
                    justify-self: end;
                    padding-right: 15%;
                }
                #visualSection {
                    width: 100%;
                    height: 100%;
                    display: block;
                    position: relative;
                    z-index: 1;
                }
                #pecentageBlock {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                #bgpBlock {
                    width: 100%;
                    height: 45%;
                }
                .bgpercent {
                    width: 100%;
                    height: 100%;
                    font-family: "BS-R";
                    position: absolute;
                    font-size: 30em;
                    right: 0;
                    top: -5%;
                    user-select: none;
                    pointer-events: none;
                    text-align: right;
                    filter: saturate(1.6);
                }
                #bgPerBlur {
                    transform: scaleX(2.5) scaleY(0.9) translateX(10%) translateY(-2%);
                    filter: blur(30px);
                    opacity: 0.7;
                    mix-blend-mode: screen;
                }
                #citizensChose {
                    width: 90%;
                    height: 10%;
                    text-align: right;
                    font-family: "BS-R";
                    font-size: 1.3em;
                    padding-right: 10%;
                    display: grid;
                    align-items: center;
                    justify-items: end;
                    letter-spacing: 0.4em;
                }
                #choice {
                    width: 60%;
                    height: 10%;
                    text-align: right;
                    font-family: "BS-I";
                    font-size: 4em;
                    padding-right: 40%;
                    display: grid;
                    align-items: center;
                    justify-items: end;
                    letter-spacing: 0.1em;
                }
                #votingButton {
                    width: 60%;
                    height: 30%;
                    margin-left: 40%;
                    display: grid;
                    justify-items: start;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    margin-top: 5%;
                }
                #cta {
                    width: 60%;
                    height: 18%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-family: "BS-R";
                }
                #voteText {
                    width: 50%;
                    height: 100%;
                    font-size: 1.1em;
                    text-transform: uppercase;
                    background-color: rgba(0,0,0,0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    letter-spacing: 0.2em;
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    cursor: pointer;
                }
                .voteArrow {
                    width: 20%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.8em;
                    color: var(--accent);
                }
                #avatar {
                    width: 30%;
                    height: 50%;
                    padding-top: 25%;
                    padding-bottom: 25%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                    margin-left: 5%;
                }
                #avatarImg {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                    opacity: 0.5;
                }
                #avatarBase {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            </style>
            <div id="view">
                <div id="voteSection">
                    <div id="digisetteRing">
                        <uni-3dviewer active="false"></uni-3dviewer>
                    </div>
                    <div id="votingHeader">
                        Citizens Apparel Production Consensus
                    </div>
                    <div id="votesBlock">
                        <div class="voteCategory" id="vcBottoms">
                            <div class="voteCategoryName">Bottoms</div>
                            <div class="voteCategoryVotes">200 Unique Vites</div>
                            <div class="voteCategoryPercent">30%</div>
                        </div>
                        <div class="voteCategory" id="vcSuits">
                            <div class="voteCategoryName">Suits</div>
                            <div class="voteCategoryVotes">200 Unique Vites</div>
                            <div class="voteCategoryPercent">25%</div>
                        </div>
                    </div>
                    <div id="votesProgress">
                        <div id="voteSliderCont">
                            <input type="range" min="0" max="100" value="50" class="slider" id="myRange">
                            <div id="Sliderdetail">
                                <div id="vsStart">START</div>
                                <div id="vsEnd">END</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="visualSection">
                    <div id="thoughtsButton"></div>
                    <div id="pecentageBlock">
                        <div id="avatar">
                            <div id="avatarImg">
                                <img src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-suit1.png" alt="">
                            </div>
                            <div id="avatarBase">
                                <img src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-base1.png" alt="">
                            </div>
                        </div>  
                        <div id="bgpBlock">
                            <div id="bgPer" class="bgpercent">50%</div>
                            <div id="bgPerBlur" class="bgpercent">50%</div>
                        </div>
                        <div id="citizensChose">OF CITIZENS CHOSE</div>
                        <div id="choice">SUIT</div>
                        <div id="votingButton">
                            <div id="cta">
                                <div class="voteArrow">>></div>
                                <div id="voteText">PRODUCE</div>
                                <div class="voteArrow"><<</div>
                            </div>
                        </div>
                    </div>
                    <div id="videoBg"></div>
                </div>
            </div>
        `;
    }

}

customElements.define('uni-consensus', uniConsensus);

export { uniConsensus };