class compTemplate extends HTMLElement {
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
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    background-color: teal;
                }
            </style>
            <div id="main">
            </div>
        `;
    }

}

customElements.define('scoge-template', compTemplate);

export {compTemplate};