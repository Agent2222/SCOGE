class closeButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    get active() {
        return this.getAttribute('parent');
    }

    set active(val) {
        this.setAttribute('parent', val);
    }


    static get observedAttributes() {
        return ["parent"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // if (name === "active") {
        //     this.render();
        // }
    }

    close() {
        // <comp-close-btn></comp-close-btn>
        let parentNode = this.shadowRoot.getRootNode().host // 1st parent
        let grandParentNode = parentNode.parentNode; // 2nd parent
        let greatGrandParentNode = grandParentNode.parentNode; // 3rd parent component element its inside
        let greatGreatGrandParentNode = greatGrandParentNode.getRootNode().host; // 4th parent Component its inside
        var domStyle = grandParentNode.getAttribute('data-domType');
        // Check element size ratio to detemine how to close it
        if (domStyle === 'shadow') {
            let mainEl = greatGreatGrandParentNode.id
            let secondaryEl = grandParentNode.id
            let selected = document.getElementById(mainEl).shadowRoot.getElementById(secondaryEl);

            // Inner Close
            if (document.getElementById(mainEl).shadowRoot.querySelectorAll(".xPre2")[0]) {
                console.log("HERE")
                if (document.getElementById(mainEl).shadowRoot.querySelectorAll(".xPre2")[0].style.display === "grid") {
                    document.getElementById(mainEl).shadowRoot.querySelectorAll(".xPre2")[0].style.display = "none";
                    document.getElementById(mainEl).shadowRoot.getElementById("forgerOptions").style.display = "grid";
                    return;
                }
                return;
            }

            //PreClose
            if (document.getElementById(mainEl).shadowRoot.querySelectorAll(".xPre1")[0]) {
                if (document.getElementById(mainEl).shadowRoot.querySelectorAll(".xPre1")[0].style.display === "grid") {
                    document.getElementById(mainEl).shadowRoot.querySelectorAll(".xPre1")[0].style.display = "none";
                    document.getElementById(mainEl).shadowRoot.getElementById("forgerOptions").style.display = "grid";
                    return;
                }
            }
            

            selected.style.transition = ".3s ease-in-out";
            selected.style.transformOrigin = "center";
            selected.style.transform = "scaleX(0)";
            selected.style.opacity = "0";
            document.getElementById(mainEl).shadowRoot.querySelectorAll(".xButAll").forEach((el)=> {
                el.style.display = "none";
            })
            document.getElementById(mainEl).shadowRoot.querySelectorAll(".xButResetFlex").forEach((el)=> {
                el.style.display = "flex";
            })
        } else {
            let mainEl = greatGreatGrandParentNode.id
            let secondaryEl = grandParentNode.id
            let selected = document.getElementById(mainEl).getElementById(secondaryEl);
            selected.style.transform = "scaleX(0)";
            selected.style.opacity = "0";
        }
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('#main').addEventListener('click', this.close.bind(this));
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                #main {
                    width: 5vh;
                    height: 5vh;
                    border: 1px solid Var(--primary);
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    border-top-right-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 20;
                    color: var(--primary);
                    cursor: pointer;
                    transition: 0.3s all;
                    font-family: 'BS-R';
                    background-color: rgba(0, 0, 0, 0.8);
                }
                #main:hover {
                    font-size: 1.8rem;
                }
            </style>
            <div id="main">
                X
            </div>
        `;
    }

}

customElements.define('comp-close-btn', closeButton);

export {closeButton};