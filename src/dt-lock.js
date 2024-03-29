class CombinationLock extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // Initialize the visible combination to a default value
        this.combination = ['M', 'N', 'O', 'P', 'Q'];
        this.correctCombination = ['U', 'G', 'V', 'U', 'G']; // The correct combination
        this.numLetters = 26; // Number of letters in the alphabet
    }

    get active() {
        return this.getAttribute('active');
    }

    set active(val) {
        this.setAttribute('active', val);
    }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'active') {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    addEventListeners() {
        // Click handlers for the top (previous) and bottom (next) rows
        this.shadowRoot.querySelectorAll('.prev-letter, .next-letter').forEach((button) => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                const direction = e.target.classList.contains('prev-letter') ? 1 : -1;
                this.rotateDial(index, direction);
            });
        });

        // Click handler for the enter button
        this.shadowRoot.querySelector('#enter-button').addEventListener('click', () => {
            if (this.combination.join('') === this.correctCombination.join('')) {
                console.log('Unlocked!');
            } else {
                this.shadowRoot.querySelector('#response').style.display = 'block';
                setTimeout(() => {
                    this.shadowRoot.querySelector('#response').style.display = 'none';
                }, 2000);
            }
        });
    }

    rotateDial(index, direction) {
        let currentCharCode = this.combination[index].charCodeAt(0);
        let newCharCode = ((currentCharCode - 65 + direction + this.numLetters) % this.numLetters) + 65;
        this.combination[index] = String.fromCharCode(newCharCode);
        this.render();
    }

    renderDial(index) {
        let currentCharCode = this.combination[index].charCodeAt(0);
        let prevCharCode = ((currentCharCode - 65 - 1 + this.numLetters) % this.numLetters) + 65;
        let nextCharCode = ((currentCharCode - 65 + 1) % this.numLetters) + 65;

        return `
            <div class="dial" data-index="${index}">
                <div class="prev-letter" data-index="${index}">${String.fromCharCode(prevCharCode)}</div>
                <div class="current-letter" data-index="${index}">${this.combination[index]}</div>
                <div class="next-letter" data-index="${index}">${String.fromCharCode(nextCharCode)}</div>
            </div>
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 100;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    font-family: "BS-R", sans-serif;
                }
                
                #lock-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }
                
                .dial {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 10px;
                }
                
                .current-letter {
                    border: .5px solid #ff002d;
                    border-radius: 5px;
                    color: #ff002d;
                    font-size: 1.2em;
                    padding: 5px;
                    user-select: none;
                    cursor: pointer;
                    font-family: "GM-I";
                    margin: 2px;
                }

                .prev-letter, .next-letter {
                    border: .5px solid #ff002d;
                    border-radius: 5px;
                    color: #ff002d;
                    font-size: .9em;
                    padding: 10px;
                    user-select: none;
                    cursor: pointer;
                    font-family: "GM-I";
                    margin: 1px;
                    opacity: 0.5;
                    transition: opacity 0.3s;
                }

                .prev-letter:hover, .next-letter:hover {
                    opacity: 1;
                }
                
                .current-letter {
                    font-size: 1.6em;
                    padding: 10px 15px;
                    margin-bottom: 15px;
                    margin-top: 15px;
                    background-color: black;
                }

                #separator {
                    width: 80%;
                    border-top: .5px solid #ff002d;
                    border-bottom: none;
                    border-left: none;
                    border-right: none;
                    position: absolute;
                    z-index: -1;
                }

                #enter-button {
                    cursor: pointer;
                    font-size: 1em;
                    user-select: none;
                    position: absolute;
                    bottom: 15%;
                    font-family: "GM-I";
                    letter-spacing: 2px;
                    transition: .3s all;
                }

                #enter-button:hover {
                    letter-spacing: 4px;
                    color: var(--accent);
                }

                #response {
                    position: absolute;
                    top: 20%;
                    font-family: "GM-I";
                    color: #ff002d;
                    font-size: .9em;
                    animation: Blinking .4s infinite;
                    display: none;
                }

                @keyframes Blinking {
                    0% {
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 0;
                    }
                  }
                
                  @media screen and (max-width: 800px) {
                    #enter-button {
                        bottom: 5%;
                    }
                    #enter-button {
                        width: 60%;
                        bottom: 25%;
                        color: var(--accent);
                        border: 1px solid var(--accent);
                        padding: 2%;
                        border-radius: 5px;
                        text-align: center;
                    }
                    :host {
                        height: 80svh;
                    }
                    #response {
                        font-size: 1.1em;
                    }
                  }
            </style>
            <div id="lock-container">
                ${this.combination.map((_, index) => this.renderDial(index)).join('')}
                <div id="enter-button">ENTER</div>
                <div id="response">Incorrect combination.</div>
                <hr id="separator">
            </div>
        `;

        this.addEventListeners();
    }
}

customElements.define('combination-lock', CombinationLock);

export { CombinationLock };
