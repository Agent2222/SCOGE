class tooltip extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.tipLibrary = {
            Hi: "Hi, I'm the Digi-Del Agent. I'm here to help you get started with your Digisette Domain.",
            GelCase: "Gel Cases are the currency of the Digisette Domain. You can earn them by completing tasks and challenges.",
            BlueGel: "Blue Digi-Dels are the currency of the Digisette Domain. You can earn them by completing tasks and challenges.",
            RedGel: "Red Digi-Dels are the currency of the Digisette Domain. You can earn them by completing tasks and challenges.",
            YellowGel: "Yellow Digi-Dels are the currency of the Digisette Domain. You can earn them by completing tasks and challenges.",
            WhiteGel: "Red Digi-Dels are the currency of the Digisette Domain. You can earn them by completing tasks and challenges.",
            DomainNumber: "This is the number of the domain you are currently working on. You can switch between domains by clicking on the domain number.",
            Funct: "This is the function of the domain you are currently working on. You can switch between domains by clicking on the function.",
            Sector: "This is the sector of the domain you are currently working on. You can switch between domains by clicking on the sector.",
            Region: "This is the region of the domain you are currently working on. You can switch between domains by clicking on the region.",
            Level: "This is the level of the domain you are currently working on. You can switch between domains by clicking on the level.",
            DomainRank: "This is the rank of the domain you are currently working on. You can switch between domains by clicking on the rank.",
            LordRank: "This is the rank of the Lord of the domain you are currently working on. You can switch between domains by clicking on the rank.",
            Potential: "This is the potential of the domain you are currently working on. You can switch between domains by clicking on the potential.",
            Dg: "This is the Digi-Gel of the domain you are currently working on. You can switch between domains by clicking on the Digi-Gel.",
            Stats: "These are the stats of the domain you are currently working on. You can switch between domains by clicking on the stats.",
            NextLevel: "This is the amount of Digi-Gel you need to reach the next level. You can switch between domains by clicking on the amount.",
            CreatorGlove: "This is the Creator Glove of the domain you are currently working on. You can switch between domains by clicking on the Creator Glove.",
            Digisette: "This is the Digisette of the domain you are currently working on. You can switch between domains by clicking on the Digisette.",
            Player: "This is the Player of the domain you are currently working on. You can switch between domains by clicking on the Player.",
            Seeker: "This is the Seeker of the domain you are currently working on. You can switch between domains by clicking on the Seeker.",
            Shop: "This is the Shop of the domain you are currently working on. You can switch between domains by clicking on the Shop.",
            Inventory: "This is the Inventory of the domain you are currently working on. You can switch between domains by clicking on the Inventory.",
            Profile: "This is the Profile of the domain you are currently working on. You can switch between domains by clicking on the Profile.",
            Beacons: "This is the Beacons of the domain you are currently working on. You can switch between domains by clicking on the Beacons.",
            Settings: "This is the Settings of the domain you are currently working on. You can switch between domains by clicking on the Settings.",
            Newsletter: "This is the Newsletter of the domain you are currently working on. You can switch between domains by clicking on the Newsletter.",
            Cloudhall: "This is the Cloudhall of the domain you are currently working on. You can switch between domains by clicking on the Cloudhall.",
            Mapper: `1. Load Domains First Through Canister or JSON (Choose File Button) / Or RESET ALL if not loading from JSON<br><br>
            - Number keys individually paint the region onto the tile<br>
            - Clicking region color block locks the region painting for faster region painting<br>
            - Click the word Sector to Sector Lock and start painting sectors (click again to unlock)<br>
            - Click the word Terrain to Terrain Lock and start painting terrain (click again to unlock)<br>
            - Function, Material, Visibility, Privacy, and Chapter are edited by the owner of the domain<br>
            - Opacity number changes the opacity of the painted tiles<br><br>
            - None dropdown next to load button selects which data you want to load for all domains. (All, Events, Domains, Agents)<br>
              - "None" clears all painted domains (does not delete data)<br>
              - "All" loads all events, domains, and agents<br>
              - "Events" loads all events (events are not yet implemented)<br>
              - "Domains" loads all domains<br>
              - "Agents" loads all agents (agents are not yet implemented)<br><br>
            - Reset button resets the selected domain<br>
            - Save button saves the selected domain<br>
            - Reset All button resets all domains (!!Reinitializes all domains!!)<br>
            - Save All button saves all domains (then creates a JSON file for download)<br><br>
            - JSON link downloads the JSON file of all domains
            `,
        };
    }

    get active() {
        return this.getAttr('active');
    }

    set active(val) {
        this.setAttr('active', val);
    }

    get data() {
        return this.getAttr('data-help');
    }

    set data(val) {
        this.setAttr('data-help', val);
    }


    static get observedAttributes() {
        return ["active","data-help"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === "true") {
            if (this.shadowRoot.getElementById("main")) {
                this.shadowRoot.getElementById("main").style.display = "grid";
            }
        }
        if (newValue === "false") {
            if (this.shadowRoot.getElementById("main")) {
                this.shadowRoot.getElementById("main").style.display = "none";
            }   
        }
    }

    placeTip(e) {
        var tip = this.shadowRoot.getElementById("main");

        // Get position and dimensions of the hovered element
        var rect = e.getBoundingClientRect();

        var tipHeight = tip.offsetHeight;
        var tipWidth = tip.offsetWidth;
        var tipTop = 0;
        var tipLeft = 0;

        // If the tooltip has more than 10 lines of text, make its height 100%
        if (this.tipLibrary[e.getAttribute("data-help")].split("<br>").length > 10) {
            tip.style.height = "80%";
            tip.style.width = "400pt";
        }

        if (window.compPosition === "left") {
            // Position tooltip above and to the right
            tipTop = rect.top - tipHeight - 10;
            tipLeft = rect.left + rect.width + 10;
        } else {
            // Position tooltip above and to the left
            tipTop = rect.top - tipHeight - 10;
            tipLeft = rect.left - tipWidth - 10;
        }

        // if tooltip height is off the page, move it down
        if (tipTop < 0) {
            tipTop = rect.top + rect.height + 10;
        }

        // Convert position values to account for page scroll
        tip.style.top = (tipTop + window.scrollY) + "px";
        tip.style.left = (tipLeft + window.scrollX) + "px";
        tip.style.opacity = 1;

    }

    hideTip() {
        var tip = this.shadowRoot.getElementById("main");
        tip.style.opacity = 0;
    }

    updateData(e) {
        var data = e.getAttribute("data-help");
        this.shadowRoot.getElementById("tipTitle").innerHTML = `${data}:`;
        this.shadowRoot.getElementById("tipContent").innerHTML = this.tipLibrary[data];
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
                    height: 70pt;
                    width: 200pt;
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 10% 10% 80%;
                    overflow: hidden;
                    background-color: rgba(253, 207, 78,0.9);
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 100;
                    border-radius: 3pt;
                    font-family: "BS-SB";
                    color: #000;
                    letter-spacing: 1px;
                    padding: 10pt 10pt;
                    opacity: 0;
                }
                #tipContent {
                    margin-top: 20pt;
                }
            </style>
            <div id="main">
                <div id="tipHeader">HELP</div>
                <p id="tipTitle">Blue Digi-Dels:</p>
                <p id="tipContent"> +50 Charisma per gel.</p>
            </div>
        `;
    }

}

customElements.define('scoge-tooltip', tooltip);

export {tooltip};