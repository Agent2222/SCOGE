
var trackname = "SCOGÉ Radio";
var currentAudio = null;
var currenttrack = 0;
var trackList = [
  {
    artist:"SCOGÉ Radio - Broadcast S3E3",
    link:"https://scoge.s3.us-east-2.amazonaws.com/SCOGE-Radio-S3-E3.mp3"
  }, 
]

class dtMusic extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get music() {
    return this.getAttribute("music");
  }

  set music(val) {
    this.setAttribute("music", val);
  }

  static get observedAttributes() {
    return ["music"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "music") {
      this.render();
    }
  }

// Functions
  playMusic() {
    if (currentAudio === null) {
      currenttrack = Math.floor(Math.random() * trackList.length);
      currentAudio = new Audio(trackList[currenttrack].link);
    this.shadow.getElementById("trackName").innerHTML = trackList[currenttrack].artist;
    currenttrack++;
    }
    currentAudio.play();
    this.shadow.getElementById("playBtn").style.display = "none";
    this.shadow.getElementById("pauseBtn").style.display = "block";
    this.shadow.getElementById("ntxBtn").style.opacity = "1";
    // next random track when current track ends
    currentAudio.addEventListener("ended", () => {
      this.nextRandomTrack();
    });
    this.shadow.getElementById("cat").style.display = "block";
  }
  
  pauseMusic() {
    currentAudio.pause();
    this.shadow.getElementById("playBtn").style.display = "block";
    this.shadow.getElementById("pauseBtn").style.display = "none";
    this.shadow.getElementById("cat").style.display = "none";
  }

  // nextTrack() {
  //   currentAudio.pause();
  //   currentAudio = new Audio(trackList[currenttrack++].link);
  //   console.log(currenttrack);
  //   currentAudio.play();
  //   this.shadow.getElementById("trackName").innerHTML = trackList[currenttrack-1].artist;
  // }

  nextRandomTrack() {
    currentAudio.pause();
    currenttrack = Math.floor(Math.random() * trackList.length);
    currentAudio = new Audio(trackList[currenttrack].link);
    currentAudio.play();
    this.shadow.getElementById("trackName").innerHTML = trackList[currenttrack].artist;
    currentAudio.addEventListener("ended", () => {
      this.nextRandomTrack();
    });
  }

  connectedCallback() {
    this.render();
    this.shadow.querySelector("#playBtn").addEventListener("click", () => {
      this.playMusic();
      this.shadow.getElementById("ntxBtn").style.display = "block";
    });
    this.shadow.querySelector("#pauseBtn").addEventListener("click", () => {
      this.pauseMusic();
    });
    this.shadow.querySelector("#ntxBtn").addEventListener("click", () => {
      this.nextRandomTrack();
    });
    // Add Event handlers to rendered html below
    // Must use this.shadow to access dom.
    // Add methods above this method
    // Ex. btn.addEventListener('click', this.method.bind(this))
    // NOTE: Render clears all code because of innerHtml
  }

  render() {
    this.shadow.innerHTML = `
         <style>
            @font-face {
                font-family: "BS-R";
                src: url("https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            #musicInterface {
                position: absolute;
                // top: 9%;
                right: 0%;
                width: auto;
                height: 8%;
                display: flex;
                align-items: center;
                font-family: "BS-R", sans-serif;
                flex-wrap: wrap;
                gap: 2em;
                padding-left: 3em;
                padding-right: 3em;
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgb(0, 0, 0, 0.9),rgb(0, 0, 0, 0.9)); 
                font-size: 12px;
                z-index: 4;
                border-radius: 0 10px 10px 0;
            }
            #pauseBtn {
              display: none;
            }
            #ntxBtn {
              fill: var(--accent);
              display: none;
            }
            svg {
              fill: var(--primary);
              cursor: pointer;
            }
            svg:hover {
              fill: var(--secondary);
            }
            #cat {
              position: absolute;
              left: -12%;
              filter: contrast(150%);
              display: none;
              padding-bottom: 8px;
            }
            @media screen and (max-width: 769px) {
              #musicInterface {
                width: 90%;
                height: 100%;
                top: auto;
                bottom: auto;
                right: 0%;
                display: grid;
                grid-template-columns: 4fr 1fr 1fr 1fr;
                grid-template-rows: 1fr;
                align-items: center;
                justify-items: center;
                font-size: 14px;
                background-image: none;
                background-color: rgba(0, 0, 0, 1);
                border-top: .2px solid var(--accent);
                border-radius: 5px;
                z-index: 5;
                padding-right: 5%;
                padding-right: 5%;
                overflow: hidden;
                margin-bottom: 5%;
                position: inherit;
              }
              #cat {
                position: fixed;
                right: 5%;
                left: auto;
                bottom: 18%;
                top: auto;
                filter: contrast(1);
                display: none !important;
                width: 150px !important;
                height: 150px !important;
              }
            }
         </style>
         <div id="musicInterface">
            <img id="cat" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/cat.gif" alt="cat" width="70px" height="70px">
            <div style="margin:0;" id="trackName">${trackname}</div>
            <div style="color:var(--accent); cursor:default;">|</div>
            <div>
              <svg id="pauseBtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <svg id="playBtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </div>
            <div><svg id="ntxBtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg></div>
         </div>
         `;
  }
}

customElements.define("scoge-music", dtMusic);

export { dtMusic };

// forward icon svg
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>