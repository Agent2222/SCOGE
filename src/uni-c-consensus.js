import { gsap } from "gsap";

class uniConsensus extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.commentsOpen = false;
        this.selectedCategory = 'bottoms';
        this.voteProgress = 50;
        this.userVoted = false;
        this.userVote = null;
        this.mainPercent = 25;
        this.catPercent = {
            vcBottoms: {
                votes: 200,
                percent: 30,
                comments: []
            },
            vcSuits: {
                votes: 200,
                percent: 25,
                comments: []
            },
            vcTop: {
                votes: 70,
                percent: 10,
                comments: []
            },
            vcShoes: {
                votes: 50,
                percent: 5,
                comments: []
            },
            vcHead: {
                votes: 50,
                percent: 5,
                comments: []
            },
            vcHands: {
                votes: 0,
                percent: 0,
                comments: []
            },
            vcPants: {
                votes: 0,
                percent: 0,
                comments: []
            },
            vcTshirt: {
                votes: 75,
                percent: 25,
                comments: []
            },
            vcShorts: {
                votes: 200,
                percent: 0,
                comments: []
            }
        }
        this.startDate = "6|15|23";
        this.endDate =  "7|15|23";
    }

    get active() {
        return this.getAttr('active');
    }

    set active(val) {
        this.setAttr('active', val);
    }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'true') {
            this.render();
        }
        if (newVal === 'false') {
            this.shadow.host.style.transition = "all .4s ease-in-out";
            this.shadow.host.style.transform = "scale(1.5)";
            this.shadow.host.style.opacity = "0";
            setTimeout(() => {
                this.shadow.host.style.display = "none";
            }, 300);
            if (this.shadow.getElementById('dgr')) {
                document.getElementById('ringView')?.appendChild(this.shadow.getElementById('dgr'));
            }
        }
        if (newVal === 'true') {
            this.shadow.getElementById('digisetteRing').appendChild(document.getElementById('dgr'));
            this.shadow.host.style.display = "block";
            this.shadow.host.style.transition = "all .4s ease-in-out";
            setTimeout(() => {
                this.shadow.host.style.transform = "scale(1)";
                this.shadow.host.style.opacity = "1";
            }, 200);
            this.shadow.getElementById('avatarImg').style.animmationPlayState = "running";
            this.shadow.getElementById('vaL').style.animmationPlayState = "running";
            this.shadow.getElementById('vaR').style.animmationPlayState = "running";
        }
    }

    toggleComments() {
        if (this.commentsOpen === false) {
            this.shadow.getElementById('commentsBlock').style.transform = "scale(1)";
            this.shadow.getElementById('commentsBut').style.border = "1px solid var(--accent)";
            this.shadow.getElementById('commentsBut').style.color = "var(--accent)";
            this.commentsOpen = true;
            return;
        }
        if (this.commentsOpen === true) {
            this.shadow.getElementById('commentsBlock').style.transform = "scale(0)";
            this.shadow.getElementById('commentsBut').style.border = "1px solid var(--primary)";
            this.shadow.getElementById('commentsBut').style.color = "var(--primary)";
            this.commentsOpen = true;
            this.commentsOpen = false;
            return;
        }
    }

    animatePercent(val) {
        const percent = this.shadow.getElementById('bgPer');
        const percent2 = this.shadow.getElementById('bgPerBlur');
        
        if (val < this.mainPercent) {
          this.movingDown = setInterval(() => {
            this.mainPercent--;
            percent.innerHTML = this.mainPercent + "%";
            percent2.innerHTML = this.mainPercent + "%";
            if (val === this.mainPercent) {
              clearInterval(this.movingDown);
            }
          }, 30);
        }
        if (val > this.mainPercent) {
            this.movingUp = setInterval(() => {
                this.mainPercent++;
                percent.innerHTML = this.mainPercent + "%";
                percent2.innerHTML = this.mainPercent + "%";
                
                if (val === this.mainPercent) {
                clearInterval(this.movingUp);
                }
            }, 30);
        }

      }
      

    selectCategory(e) {
        this.animatePercent(this.catPercent[e.target.id].percent);
        this.shadow.querySelectorAll('.voteCategory').forEach((el) => {
            var catImage = this.shadow.getElementById('avImg');
            var voteText = this.shadow.getElementById('choice');
            gsap.fromTo(voteText, {scale: 1}, {scale: 0.88, duration: 0.3, ease: "power1.inOut"});
            if (e.target.classList.contains("voteCategory")) {
                this.shadow.querySelectorAll('.selectedCategory').forEach((el) => {
                    el.classList.remove("selectedCategory");
                    el.classList.add("voteCategory");
                });
                el.classList.remove("voteCategory");
                el.classList.add("selectedCategory");
                switch (el.id) {
                    case 'vcBottoms':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-pants1.png";
                        voteText.innerHTML = "BOTTOMS";
                        this.selectCategory = 'vcBottoms';
                    break;
                    case 'vcSuits':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-suit1.png";
                        voteText.innerHTML = "SUITS";
                        this.selectCategory = 'vcSuits';
                    break;
                    case 'vcTop':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-top1.png";
                        voteText.innerHTML = "TOPS";
                        this.selectCategory = 'vcTop';
                    break;
                    case 'vcShoes':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-shoes1.png";
                        voteText.innerHTML = "SHOES";
                        this.selectCategory = 'vcShoes';
                    break;
                    case 'vcHead':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-head1.png";
                        voteText.innerHTML = "HEAD";
                        this.selectCategory = 'vcHead';
                    break;
                    case 'vcHands':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-hands1.png";
                        voteText.innerHTML = "HAND";
                        this.selectCategory = 'vcHands';
                    break;
                    case 'vcPants':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-pants1.png";
                        voteText.innerHTML = "PANTS";
                        this.selectCategory = 'vcPants';
                    break;
                    case 'vcTshirt':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-tshirt1.png";
                        voteText.innerHTML = "T-SHIRT";
                        this.selectCategory = 'vcTshirt';
                    break;
                    case 'vcShorts':
                        catImage.src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-shorts1.png";
                        voteText.innerHTML = "SHORTS";
                        this.selectCategory = 'vcShorts';
                    break;
                }
                return;
            }
        });
        // e.target.classList.add('selectedCategory');
    }

    castVote() {
        this.userVote = this.selectCategory;
        this.shadow.querySelectorAll('.vCat').forEach((el) => {
            if (el.id === this.userVote) {
                el.classList.remove("selectedCategory");
                el.classList.add("votedFor");
                this.shadow.getElementById('voteText').innerHTML = "VOTED";
                this.shadow.querySelectorAll('.voteArrow').forEach((el) => {
                    el.style.opacity = "0";
                    el.style.animmationPlayState = "paused";
                });
            } else {
                el.classList.remove("votedFor");
                el.classList.remove("selectedCategory");
                el.classList.add("voteCategory");
            }
        });
    }

    closeConsensus() {
        this.setAttribute('active', 'false');
    }

    connectedCallback() {
        this.render();
        this.shadow.getElementById('closeConsensus').addEventListener('click', this.closeConsensus.bind(this));
        this.shadow.getElementById('commentsBut').addEventListener('click', this.toggleComments.bind(this));
        this.shadow.querySelectorAll('.vCat').forEach((el) => {
            el.addEventListener('click', this.selectCategory.bind(this));
        });
        this.shadow.getElementById('voteText').addEventListener('click', this.castVote.bind(this));
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
                    opacity: 0;
                    transform: scale(1.5);
                }
                ::-webkit-scrollbar {
                    width: 1.5px;
                  }
      
                  /* Track */
                  ::-webkit-scrollbar-track {
                    background: black; 
                  }
                  
                  /* Handle */
                  ::-webkit-scrollbar-thumb {
                    background: var(--accent);
                  }
      
                  /* Handle on hover */
                  ::-webkit-scrollbar-thumb:hover {
                    background: var(--secondary); 
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
                    overflow-y: scroll; 
                    overflow-x: hidden;
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
                    user-select: none;
                    pointer-events: none;
                }
                #myRange::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 25pt;
                    height: 25pt;
                    background: black;
                    border-radius: 50%;
                    border: 2px solid #ff002d;
                    cursor: pointer;
                    user-select: none;
                    pointer-events: none;
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
                    transition: transform .3s ease-in-out;
                }
                .voteCategory:hover {
                    background-color: rgba(255,255,255,0.1);
                    transform: scale(.96);
                }

                .selectedCategory {
                    width: 100%;
                    height: 10%;
                    display: grid;
                    grid-template-columns: 40% 40% 20%;
                    grid-template-rows: 1fr;
                    font-family: "BS-R";
                    justify-items: start;
                    align-items: center;
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    margin-top: 2%;
                    transform: scale(0.96);
                    border-radius: .2em;
                    background-color: rgba(0,0,0,0.3);
                    cursor: pointer;
                    transition: .3s ease-in-out;
                    pointer-events: none;
                }

                .votedFor {
                    width: 100%;
                    height: 10%;
                    display: grid;
                    grid-template-columns: 40% 40% 20%;
                    grid-template-rows: 1fr;
                    font-family: "BS-B";
                    justify-items: start;
                    align-items: center;
                    border: 1px solid var(--accent);
                    color: black;
                    margin-top: 2%;
                    transform: scale(0.96);
                    border-radius: .2em;
                    background-color: var(--accent);
                    cursor: pointer;
                    transition: .3s ease-in-out;
                    pointer-events: none;
                }

                .voteCategoryName {
                    font-size: 1.5em;
                    text-transform: uppercase;
                    font-family: "BS-I";
                    letter-spacing: 0.1em;
                    padding-left: 10%;
                    user-select: none;
                    pointer-events: none;
                }
                .voteCategoryVotes {
                    user-select: none;
                    pointer-events: none;
                }
                .voteCategoryPercent {
                    font-size: 3em;
                    justify-self: end;
                    padding-right: 15%;
                    user-select: none;
                    pointer-events: none;
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
                    color: var(--secondary);
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
                #closeConsensus {
                    width: 35pt;
                    height: 35pt;
                    position: fixed;
                    top: 5%;
                    right: 3%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1em;
                    color: var(--primary);
                    border: 1px solid var(--primary);
                    background-color: rgba(0,0,0,0.8);
                    border-radius: 2pt;
                    cursor: pointer;
                    transition: .3s all;
                    font-family: "BS-R";
                    z-index: 6;
                }

                #closeConsensus:hover {
                    color: var(--accent);
                    border: 1px solid var(--accent);
                    transform: scale(1.2);
                    font-size: 1.6em;
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
                    transition: .3s all;
                }

                #voteText:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: "BS-B";
                    transform: scale(1.1);
                    letter-spacing: 0.4em;
                }

                .voteArrow {
                    width: 20%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.8em;
                    color: var(--accent);
                    user-select: none;
                    transition: .3s all;
                }

                #vaL {
                    animation: pulseArrowLeft 2s infinite ease-out;
                    animation-play-state: playing;
                }

                #vaR {
                    animation: pulseArrowRight 2s infinite ease-out;
                    animation-play-state: playing;
                }

                @keyframes pulseArrowLeft {
                    0% {
                        transform: translateX(10%)  scale(1.2);
                    }
                    50% {
                        transform: translateX(-30%)  scale(1);
                    }
                    100% {
                        transform: translateX(10%)  scale(1.2);
                    }
                }

                @keyframes pulseArrowRight {
                    0% {
                        transform: translateX(-10%)  scale(1.2);
                    }
                    50% {
                        transform: translateX(30%)  scale(1);
                    }
                    100% {
                        transform: translateX(-10%) scale(1.2);
                    }
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
                    animation: pulse 3.5s infinite ease-out;
                    animation-play-state: playing;
                }

                #commentsBlock {
                    width: 50vh;
                    height: 70vh;
                    position: absolute;
                    bottom: 12vh;
                    right: 5%;
                    background-color: rgba(0,0,0,0.8);
                    border-radius: .8em;
                    z-index: 5;
                    border-top: 1px solid var(--accent);
                    border-bottom: 1px solid var(--accent);
                    padding: 2%;
                    transition: .3s all;
                    transform: scale(0);
                    transform-origin: bottom right;
                }

                .comment {
                    width: 100%;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    justify-items: space-between;
                    align-items: start;
                    border-radius: .2em;
                    padding-bottom: 5%;
                    border-bottom: .5px solid var(--primary);
                    user-select: none;
                }

                .commentText {
                    font-family: "BS-R";
                    color: var(--secondary);
                }

                .commenter {
                    margin-bottom: 2%;
                    font-family: "GM-I";
                    color: var(--accent);
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                    15% {
                        transform: scale(1);
                    }
                    25% {
                        transform: scale(1);
                        opacity: .5;
                    }
                    50% {
                        transform: scale(1);
                        opacity: .5;
                    }
                    75% {
                        transform: scale(1);
                        opacity: .5;
                    }
                    100% {
                        transform: scale(1);
                        opacity: .5;
                    }
                }

                #avatarBase {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #commentsButton {
                    width: 10%;
                    height: 5%;
                    position: fixed;
                    bottom: 5%;
                    right: 3%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: row;
                }
                #commentsText {
                    color: var(--secondary);
                    font-family: "BS-R";
                    font-size: .8em;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    user-select: none;
                }
                #commentsBut {
                    width:  30pt;
                    height: 30pt;
                    border: 1px solid var(--primary);
                    color: var(--primary);
                    background-color: rgba(0,0,0,0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1em;
                    font-family: "BS-R";
                    transition: .3s all;
                    cursor: pointer;
                }
                #commentsBut:hover {
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    transform: scale(1.2);
                }

            </style>
            <div id="view">
                <div id="voteSection">
                    <div id="digisetteRing">
                    </div>
                    <div id="votingHeader">
                        Citizens Production Consensus Portal
                    </div>
                    <div id="votesBlock">
                        <div class="vCat voteCategory" id="vcBottoms">
                            <div class="voteCategoryName">Bottoms</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcBottoms.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcBottoms.percent}%</div>
                        </div>
                        <div class="vCat selectedCategory" id="vcSuits">
                            <div class="voteCategoryName">Suits</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcSuits.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcSuits.percent}%</div>
                        </div>
                        <div class="vCat voteCategory" id="vcTop">
                            <div class="voteCategoryName">Tops</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcTop.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcTop.percent}%</div>
                        </div>
                        <div class="vCat voteCategory" id="vcShoes">
                            <div class="voteCategoryName">Shoes</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcShoes.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcShoes.percent}%</div>
                        </div>
                        <div class="vCat voteCategory" id="vcHead">
                            <div class="voteCategoryName">Head Acc</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcHead.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcHead.percent}%</div>
                        </div>
                        <div class="vCat voteCategory" id="vcHands">
                            <div class="voteCategoryName">Hand Acc</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcHands.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcHands.percent}%</div>
                        </div>
                        <div class="vCat voteCategory" id="vcPants">
                            <div class="voteCategoryName">Pants</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcPants.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcPants.percent}%</div>
                        </div>
                        <div class="vCat voteCategory" id="vcTshirt">
                            <div class="voteCategoryName">T-shirt</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcTshirt.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcTshirt.percent}%</div>
                        </div>
                        <div class="vCat voteCategory" id="vcShorts">
                            <div class="voteCategoryName">Shorts</div>
                            <div class="voteCategoryVotes">${this.catPercent.vcShorts.votes} Unique Votes</div>
                            <div class="voteCategoryPercent">${this.catPercent.vcShorts.percent}%</div>
                        </div>
                    </div>
                    <div id="votesProgress">
                        <div id="voteSliderCont">
                            <input type="range" min="0" max="100" value="100" class="slider" id="myRange">
                            <div id="Sliderdetail">
                                <div id="vsStart">START: ${this.startDate}</div>
                                <div id="vsEnd">END: ${this.endDate}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="visualSection">
                    <div id="closeConsensus">x</div>
                    <div id="commentsBlock">
                        <div class="comment">
                            <div class="commenter">
                                Lord Bananaman
                            </div>
                            <div class="commentText">
                                Would love to see some more color options for the suits!
                            </div>
                        </div>
                    </div>
                    <div id="commentsButton">
                        <div id="commentsText">COMMENTS</div>
                        <div id="commentsBut">C</div>
                    </div>
                    <div id="pecentageBlock">
                        <div id="avatar">
                            <div id="avatarImg">
                                <img id="avImg" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-suit1.png" alt="">
                            </div>
                            <div id="avatarBase">
                                <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-base1.png" alt="">
                            </div>
                        </div>  
                        <div id="bgpBlock">
                            <div id="bgPer" class="bgpercent">${this.mainPercent}%</div>
                            <div id="bgPerBlur" class="bgpercent">${this.mainPercent}%</div>
                        </div>
                        <div id="citizensChose">OF CITIZENS CHOSE</div>
                        <div id="choice">SUIT</div>
                        <div id="votingButton">
                            <div id="cta">
                                <div class="voteArrow" id="vaL">>></div>
                                <div id="voteText">VOTING CLOSED</div>
                                <div class="voteArrow" id="vaR"><<</div>
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