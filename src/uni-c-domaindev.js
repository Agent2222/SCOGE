class uniDomainDev extends HTMLElement {
    constructor() {
        super() 
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

    attributeChangedCallback(name, oldValue, newValue) {
        // if (name === 'active') {
        //     this.render();
        // }
    }

    close() {
        this.active = false;
        // this.setAttribute('active', 'false');
        this.shadow.host.style.right = '-40%';
    }

    open() {
        this.active = true;
        // this.setAttribute('active', 'true');
        this.shadow.host.style.right = '0';
    }

    increaseStat(e) {
        var selected = e.target
        var selected2 = () => {
            if (e.target.id.includes('domain')) {
                return this.shadowRoot.getElementById(`${e.target.id.replace('domain', 'lord')}`);
            } else {
                return this.shadowRoot.getElementById(`${e.target.id.replace('lord', 'domain')}`);
            }
        };
        var selectedLength = selected.querySelectorAll('div').length;
        
        if (selectedLength < 10 && selected2().querySelectorAll('div').length > 0) {
            var statPill = document.createElement('div');
            statPill.classList.add('expPill');
            this.shadowRoot.querySelector(`#${e.target.id}`).appendChild(statPill);
        }
        this.removeStat(e);
    }

    // increaseStat2(e) {
    //     var selected = e
    //     var selectedLength = selected.querySelectorAll('div').length;
    //     if (selectedLength < 10) {
    //         var statPill = document.createElement('div');
    //         statPill.classList.add('expPill');
    //         this.shadowRoot.querySelector(`#${e.id}`).appendChild(statPill);
    //     }
    //     this.removeStat(e);
    // }


    removeStat(e) {
        var selected = e.target
        var selectedLength = selected.querySelectorAll('div').length;
        if (e.target.id.includes('domain') && selectedLength != 0) {
            var firstChild = this.shadow.getElementById(`${e.target.id.replace('domain', 'lord')}`).querySelector('div');
            firstChild.remove();
        } else {
            var firstChild2 = this.shadow.getElementById(`${e.target.id.replace('lord', 'domain')}`).querySelector('div');
            firstChild2.remove();
        }
    }

    // shiftStats(e) {
    //     console.log("here",e);

    //     var selectedDomains = this.shadowRoot.querySelectorAll('.sbLeft');
    //     var selectedLords = this.shadowRoot.querySelectorAll('.sbRight');

    //     var allStatSections = this.shadowRoot.querySelectorAll('.statBars');

    //     allStatSections.forEach(stat => {
    //     var selectedLength = stat.querySelectorAll('div').length;
    //     if (stat.id.includes('domain') && selectedLength >= 0) {
    //         console.log("H4",stat);
    //         this.increaseStat2(stat);
    //         // var firstChild = this.shadow.getElementById(`${stat.id.replace('domain', 'lord')}`)?.querySelector('div');
    //         // if (firstChild != null) {
    //         //     firstChild.remove();
    //         // }
    //     } else {
    //         // var firstChild2 = this.shadow.getElementById(`${stat.id.replace('lord', 'domain')}`)?.querySelector('div');
    //         // if (firstChild2 != null) {
    //         //     firstChild2.remove();
    //         // }
    //     }
    //     });
        
    // }

    connectedCallback() {
        this.render();

        this.shadowRoot.querySelector('#exitBut').addEventListener('click', () => {
            this.close();
        });

        this.shadow.querySelectorAll('.statBars').forEach(stat => {
            stat.addEventListener('click', (e) => {
                this.increaseStat(e);
            });
        });

        // this.shadow.querySelectorAll('.dash').forEach(stat => {
        //     stat.addEventListener('click', (e) => {
        //         this.shiftStats(e);
        //     }); 
        // });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    width: 40%;
                    height: 100%;
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: 100;
                    transition: all 0.3s ease-in-out;
                }
                #main {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 4% 96%;
                    grid-template-rows: 1fr;
                    font-family: "GM-I";
                }
                #mainCont {
                    font-family: "BS-R";
                }
                #vertBanner {
                    width: 50%;
                    height: 400%;
                }
                #bannerText {
                    width: 100%;
                    height: 100%;
                    writing-mode: vertical-rl !important;
                    text-orientation: mixed !important;
                    transform: rotate(180deg);
                    align-self: center;
                    font-size: .7rem;
                    letter-spacing: 0.3rem;
                    overflow: hidden;
                    animation: repeating 1010s linear infinite;
                }
                @keyframes repeating {
                    0% {
                      transform: rotate(180deg) translateY(60%);
                    }
                    50% {
                      transform: rotate(180deg) translateY(0%);
                    }
                    100% {
                        transform: rotate(180deg) translateY(60%);
                      }
                  }
                #mainCont {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 25% 15% 15% 33% 12%;
                    jsutify-items: center;
                    align-items: center;
                    overflow: hidden;
                }
                #agentComp {
                    width: 100%;
                    height: 100%;
                }
                #assets {
                    width: 100%;
                    height: 100%;
                    background-color: blue;
                }
                #inputs1 {
                    width: 100%;
                    height: 100%;
                    margin-top: 5%;
                    margin-bottom: 5%;
                }
                #potential {
                    width: 100%;
                    height: 100%;
                }
                #buttons {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    font-family: "BS-R";
                }
                .button {
                    width: 50%;
                    height: 40%;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1rem;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: all 0.2s ease-in-out;
                    letter-spacing: 0.1rem;
                    font-size: 0.9rem;
                }
                #exitBut {
                    color: #ff002d;
                    border: 1px solid #ff002d;
                    margin-left: 10%;
                    transition: all 0.2s ease-in-out;
                }
                #exitBut:hover {
                    background-color: #ff002d;
                    color: black;
                    font-size: 1.2rem;
                    letter-spacing: 0.3rem;
                    font-family: "BS-B";
                }
                #regBut {
                    color: var(--accent);
                    border: 1px solid var(--accent);
                    justify-self: end;
                    margin-right: 10%;
                }
                #assetsCont {
                    width: 90%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    overflow: hidden;
                    padding-left: 5%;
                    padding-right: 5%;
                }

                .inventoryItem {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    border-radius: 5px;
                    overflow: hidden;
                    position: relative;
                }

                .inventoryItem img {
                    width: 70%;
                    height: auto;
                    object-fit: cover;
                }
                .multiplier {
                    position: absolute;
                    right: 20%;
                    bottom: 15%;
                    font-size: .8rem;
                }
                #assetDigisette img {
                    width: 90% !important;
                    height: auto !important;
                }
                #inventoryItem1 img {
                    width: 100% !important;
                    height: auto !important;
                }
                #inputs1 {
                    width: 93%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr 1fr;
                    align-items: center;
                    justify-items: start;
                    padding-left: 5%;
                    padding-right: 2%;
                }
                .inputRow {
                    width: 96%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 18% 32% 16% 34%;
                    column-gap: 2%;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: start;
                }
                input {
                    width: 80%;
                    height: 60%;
                    border-radius: 5px;
                    color: #ff002d;
                    background-color: transparent;
                    border: 1px solid #ff002d;
                    padding-left: 10%;
                }
                input:focus {
                    outline: none !important;
                }
                select {
                    width: 92%;
                    height: 60%;
                    border-radius: 5px;
                    color: #ff002d;
                    background-color: transparent;
                    border: 1px solid #ff002d;
                    padding-left: 10%;
                }
                #subFunc {
                    width: 95%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    margin-right: 5%;
                }
                #potential {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 20% 80%;
                    align-items: center;
                    justify-items: start;
                }
                #potHeader {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 20% 60% 20%;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                }
                #potStats {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    align-items: center;
                }
                .statLine {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 35% 30% 35%;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: start;
                }
                .statBars {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 4%;
                    justify-items: start;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                }
                .statBars:hover {
                    border-bottom: 1px solid var(--accent);
                }
                .sbLeft {
                    align-items: end;
                    flex-direction: row-reverse;
                }
                .sbRight {
                    align-items: start;
                    flex-direction: row;
                }
                .expPill {
                    width: 6pt;
                    height: 65%;
                    margin-top: 2%;
                    border: 1px solid var(--accent);
                    border-radius: 5px;
                    user-select: none;
                    pointer-events: none;
                }
                .statName {
                    text-align: center;
                    font-size: .9rem;
                    justify-self: center;
                    letter-spacing: 0.1rem;
                    user-select: none;
                }
                select:focus {
                    outline: none !important;
                }
                #dH1 {
                    justify-self: start;
                    margin-left: 20%;
                    align-self: end;
                    font-size:.9rem;
                    letter-spacing: 0.1rem;
                }
                #dH3 {
                    justify-self: end;
                    align-self: end;
                    margin-right: 20%;
                    font-size:.9rem;
                    letter-spacing: 0.1rem;
                    text-align: right;
                }
                #dH2 {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-self: center;
                    align-items: end;
                    text-align: center;
                    font-size:1.3rem;
                    letter-spacing: 0.3rem;
                    pointer-events: none;
                    user-select: none;
                }
                .rank{
                    color: var(--secondary);
                }
                .dash {
                    color: var(--secondary) !important;
                    cursor: pointer !important;
                    pointer-events: all !important;
                    transition: all 0.2s ease-in-out;
                }
                .dash:hover {
                    scale: 1.1;
                }
            </style>
            <div id="main">
                <div id="vertBanner">
                    <div id="bannerText">DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT</div>
                </div>
                <div id="mainCont">
                    <div id="agentComp">
                        <uni-menu-agent active="true"></uni-menu-agent>
                    </div>
                    <div id="assetsCont">
                        <div class="inventoryItem" id="assetDigisette">
                            <img src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Digisette-1-2.png" alt="digisette">
                            <div class="multiplier" id="ii1multi">x2</div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem1">
                            <img id="ii1" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Clear-DigiGelCase-1.png">
                            <div class="multiplier" id="ii2multi">x2</div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem2">
                            <img id="ii2" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Blue-DigiGel-1.png">
                            <div class="multiplier" id="ii3multi">x2</div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem3">
                            <img id="ii3" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Red-DigiGel-1.png">
                            <div class="multiplier" id="ii4multi">x2</div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem4">
                            <img id="ii4" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Yellow-DigiGel-1.png">
                            <div class="multiplier" id="ii5multi">x2</div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem5">
                            <img id="ii5" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/White-DigiGel-1.png">
                            <div class="multiplier" id="ii6multi">x2</div>
                        </div>
                    </div>
                    <div id="inputs1">
                        <div class="inputRow">
                            <div class="inputLabel">SECTOR</div>
                            <input id="sectorSelect" value="3">
                            <div class="inputLabel">DOMAIN #</div>
                            <input type="number" value="0" min="1" max="9000" id="domainSelect">
                        </div>
                        <div class="inputRow">
                            <div class="inputLabel">REGION</div>
                            <select id="regionSelect">
                                <option value="1">LX INDUSTRY</option>
                                <option value="2">WEST WING RIVER</option>
                                <option value="3">OUTERLANDS</option>
                                <option value="4">THE 12TH</option>
                                <option value="5">PORTS OF ALANSABA</option>
                                <option value="6">FALCONS HEART</option>
                                <option value="7">EAST WING RIVER</option>
                                <option value="8">SUSTAINER TOWN</option>
                                <option value="9">ALANS ILSES</option>
                                <option value="0">CITY CENTRAL</option>
                            </select>
                            <div class="inputLabel">FUNCTION</div>
                            <select id="functionSelect">
                                <option value="1">DISCOURSE</option>
                                <option value="2">GALLERIST</option>
                                <option value="3">MEMORY YARD</option>
                                <option value="4">SEER HAVEN</option>
                            </select>
                        </div>
                        <div class="inputRow">
                            <div class="inputLabel">LEVEL</div>
                            <select id="levelSelect">
                                <option value="1">SUB-TERRAIN</option>
                                <option value="1">GROUND</option>
                                <option value="2">MID</option>
                                <option value="3">SKY</option>
                            </select>
                            <div></div>
                            <div id="subFunc">
                                <select id="f2Select">
                                    <option value="1">F2 ()</option>
                                </select>
                                <select id="f3Select">
                                    <option value="1">F3 (}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="potential">
                        <div id="potHeader">
                            <div id="dH1" class="headerNames"><span class="rank" id="domainRank">FOUNDATION</span><br>DOMAIN</div>
                            <div id="dH2">
                                <div class="dash" id="domainDash"><</div> POTENTIAL <div class="dash" id="lordDash">></div>
                            </div>
                            <div id="dH3" class="headerNames"><span class="rank" id="lordRank">SUPREME</span><br>LORD</div>
                        </div>
                        <div id="potStats">
                            <div></div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainEndurance">
                                    <div class="expPill"></div>
                                    <div class="expPill"></div>
                                </div>
                                <div class="statName">ENDURANCE</div>
                                <div class="statBars sbRight" id="lordEndurance">
                                    <div class="expPill"></div>
                                    <div class="expPill"></div>
                                    <div class="expPill"></div>
                                    <div class="expPill"></div>
                                </div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainCharisma">
                                    <div class="expPill"></div>
                                </div>
                                <div class="statName">CHARISMA</div>
                                <div class="statBars sbRight" id="lordCharisma">
                                    <div class="expPill"></div>
                                    <div class="expPill"></div>
                                </div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainStrength"></div>
                                <div class="statName">STRENGTH</div>
                                <div class="statBars sbRight" id="lordStrength"></div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainVis"></div>
                                <div class="statName">VISIBILITY</div>
                                <div class="statBars sbRight" id="lordVis"></div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainHealth"></div>
                                <div class="statName">HEALTH</div>
                                <div class="statBars sbRight" id="lordHealth"></div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainSpeed"></div>
                                <div class="statName">SPEED</div>
                                <div class="statBars sbRight" id="lordSpeed"></div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainSight"></div>
                                <div class="statName">SIGHT</div>
                                <div class="statBars sbRight" id="lordSight"></div>
                            </div>
                        </div>
                    </div>
                    <div id="buttons">
                        <div id="exitBut" class="button">EXIT</div>
                        <div id="regBut" class="button">REGISTER</div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('uni-c-domaindev', uniDomainDev);

export { uniDomainDev };