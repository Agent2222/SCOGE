
var currentPage = 1;
var currentBtsPage = 1;

class dtCampaign extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get campaign() {
    return this.getAttribute("camp");
  }

  set campaign(val) {
    this.setAttribute("camp", val);
  }

  static get observedAttributes() {
    return ["camp"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "camp") {
      this.render();
    }
  }
  
  // A function to move the "campaign" element to right 0%.
  openCampaign() {
    document.getElementById("updatesModal").style.display = "none";
    this.shadow.getElementById("campaignComp").style.transition = "1s all";
    this.shadow.getElementById("campaignComp").style.right = "0%";
    closeInvestor();
    clearShop();
    clearSettings();
    clearFilter();
  }

  // Close the campaign
  closeCampaign() {
    this.shadow.getElementById("yt").src = "https://www.youtube.com/embed/WPccRLEvxW4";
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Mobile
      this.shadow.getElementById("campaignComp").style.transition = "1s all";
      this.shadow.getElementById("campaignComp").style.right = "-100%";
      window.isMobile = true;
    } else {
      // Desktop
      this.shadow.getElementById("campaignComp").style.transition = "1s all";
      this.shadow.getElementById("campaignComp").style.right = "-70%";
    }
  }

  // A function to animate the "looks" element to horizontally scroll slowly
  pageScroll() {
    var looks = this.shadow.querySelector("#looks");
    looks.scrollLeft += 1;
    setTimeout(this.pageScroll.bind(this), 10);
    // when the scroll reaches the end, reset it to the beginning
    if (looks.scrollLeft == looks.scrollWidth - looks.clientWidth) {
      looks.scrollLeft = 0;
    }
  }

  // Campaign interface
  nextImage() {
    // reset current page to 1 if it is greater than 8
    if (currentPage >= 10) {
      currentPage = 0;
    }
    currentPage++;
    this.shadow.getElementById("gImg").src = `https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-ch1-${currentPage}.webp`;
  }

  previousImage() {
    // reset current page to 1 if it is greater than 8
    if (currentPage <= 1) {
      currentPage = 10;  
    } else {
      currentPage--;
    }
    this.shadow.getElementById("gImg").src = `https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-ch1-${currentPage}.webp`;
  }

  nextBtsImage() {
    // reset current page to 1 if it is greater than 8
    if (currentBtsPage >= 46) {
      currentBtsPage = 0;
    }
    currentBtsPage++;
    this.shadow.getElementById("btsImg").src = `https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-${currentBtsPage}.webp`;
  }

  preBtsImage() {
    // reset current page to 1 if it is greater than 8
    if (currentBtsPage <= 1) {
      currentBtsPage = 46;
    } else {
      currentBtsPage--;
    }
    this.shadow.getElementById("btsImg").src = `https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-${currentBtsPage}.webp`;
  }

// Functions
  connectedCallback() {
    this.render();
    this.pageScroll();
    document.getElementById("campaignBut").addEventListener("click", this.openCampaign.bind(this));
    this.shadow.getElementById("campIcon").addEventListener("click", this.closeCampaign.bind(this));
    this.shadow.getElementById("nextGalleryImg").addEventListener("click", this.nextImage.bind(this));
    this.shadow.getElementById("preGalleryImg").addEventListener("click", this.previousImage.bind(this));
    this.shadow.getElementById("nextBtsImg").addEventListener("click", this.nextBtsImage.bind(this));
    this.shadow.getElementById("preBtsImg").addEventListener("click", this.preBtsImage.bind(this));
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
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            :root {
              --primary: #ff002d;
              --secondary: #b5d3d1;
              --accent: #94be8c;
            }
            /* width */
            ::-webkit-scrollbar {
              width: 10px;
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
            #campaignComp {
              width: 70%;
              height: 98%;
              background: black;
              position: fixed;
              top: 0;
              right: -70%;
              z-index: 5;
              font-family: "BS-R";
              padding-top: 2%;
              overflow-y: visible;
              overflow-x: visible;
              transition: 1s;
            }
            #header {
              height: auto%;
              width: 98%;
              float: left;
              padding-left: 2%;
              padding-bottom: 2%;
            }
            #head {
              font-size: 34px;
            }
            #sub {
              margin-bottom: 2%;
              color: var(--accent);
            }
            #body {
              padding-right: 30%;
              color: var(--primary);
              letter-spacing: 1px;
            }
            #campGallery {
              width: 100%;
              height: auto;
              float: left;
              margin-bottom: 2%;
              position: relative;
            }
            #campGallery img {
              width: 100%;
            }
            #looks {
              height: 60%;
              width: 100%;
              overflow-y: hidden;
              overflow-x: scroll;
              float: left;
              margin-bottom: 2%;
            }
            #looks img {
              height: 100%;
            }
            #film {
              width: 100%;
              height: 65%;
              float: left;
              margin-bottom: 4%;
            }
            #campIcon {
              width: 4%;
              height: 4%;
              position: absolute;
              left: -4%;
              top: 9.3%;
              z-index: 5;
              background-color: #ff002d;
              border-right: none;
              border-top-left-radius: 8%;
              border-bottom-left-radius: 8%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              font-family: "BS-R";
              color: white;
              cursor: pointer;
              font-size: 12px;
            }
            #scrollBody {
              width: 100%;
              height: 100%;
              float: left;
              overflow-y: scroll;
              overflow-x: hidden;
            }
            #imageInterface, #imageInterface2 {
              position: absolute;
              width: 10%;
              height: 5%;
              background-color: rgba(0, 0, 0, 0.8);
              bottom: 5%;
              left: 45%;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              border-radius:6px;
            }
            #preGalleryImg, #preBtsImg {
              transform: rotate(180deg);
            }
            .arrow {
              transition: 0.3s;
              cursor: pointer;
            }
            .arrow:hover {
              color: var(--secondary);
            }
            #btsGallery {
              width: 100%;
              height: 90%;
              overflow: hidden;
              float: left;
              display: flex;
              justify-content: center;
              position: relative;
              margin-top: 2%;
            }
            #btsGallery img {
              height: 100%;
            }
            #credits {
              width: 100%;
              height: 60%;
              float: left;
              padding:5%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
              color: var(--secondary);
              font-size: 12px;
            }
            .primary {
              color: var(--primary);
            }
            .secondary {
              color: var(--secondary);
            }
            #film iframe {
              width: 100%;
              height: 100%;
            }
            @media screen and (max-width: 769px) {
              #campIcon {
                display: none;
              }
              #campaignComp {
                width: 100%;
                height: 80%;
                background: black;
                position: fixed;
                top: 20%;
                right: -100%;
                z-index: 4;
                font-family: "BS-R";
                padding-top: 2%;
                overflow-y: visible;
                overflow-x: visible;
                transition: 1s;
              }
              #credits {
                padding-bottom: 90%;
              }
              #body {
                height: 100%;
                width: 96%;
              }
              #header {
                height: auto;
                padding-bottom: 2%;
              }
              #film {
                height: 40%;
              }
              #film iframe {
                height: 100%;
              }
              #preGalleryImg {
                display: none;
              }
              #imageInterface  span {
                display: none;
              }
              #imageInterface {
                grid-template-columns: 1fr;
                border-radius: 0;
                width: 15%;
                height: 15%;
                left: auto;
                right: 5%;
                border-radius: 5px;
              }
              #nextGalleryImg {
                font-size: 30px;
              }
              #preBtsImg {
                display: none;
              }
              #imageInterface2  span {
                display: none;
              }
              #imageInterface2 {
                grid-template-columns: 1fr;
                border-radius: 0;
                width: 15%;
                height: 10%;
                left: auto;
                bottom: 47.5%;
                right: 5%;
                border-radius: 5px;
              }
              #nextBtsImg {
                font-size: 30px;
              }
              #gImg {
                width: auto !important;
                height: 100%;
              }
              #galleryimg {
                height: 100%;
                width: auto;
                display: flex;
                justify-content: center;
              }
              #campGallery {
                height: 60%;
              }
              .arrow:hover {
                color: var(--primary);
              }
            }
         </style>
         <div id="campaignComp">
            <div id="campIcon">
              X
            </div>
            <div id="scrollBody">
            <div id="header">
              <div id="head">CH. 1 - REACCLIMATE</div>
              <div id="sub">FW22/SS23</div>
              <div id="body">On the outskirts of T.A.O.S City lie several old-world desolate mansions inhabited by self-exiled creators known to many as oracles. Migrants from nations in stark contrast to T.A.O.S City often seek these oracles to aid in their assimilation into the vast city, and avoid conviction from a predatory group of conservative citizens known as enforcers. Successful assimilated migrants tend to travel for days to visit several oracles, each specializing in a single task. Unsuccessful, convicted migrants have described the oracle experience as a process of remembering something they had long forgotten. A process to reacclimate.</div>
            </div>
            <div id="campGallery">
              <div id="imageInterface">
                <div id="preGalleryImg" class="arrow">&#9658;</div>
                <span>|</span>
                <div id="nextGalleryImg" class="arrow">&#9658;</div>
              </div>
              <div id="galleryimg">
              <img id="gImg" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/scoge-campaign-1.webp" alt=""/>
              </div>
            </div>
            <div id="looks">
              <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGÉ-CH1-Looks.jpeg" alt=""/>
            </div>
            <div id="film">
            <iframe id="yt" width="100%" height="630" src="https://www.youtube.com/embed/WPccRLEvxW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div id="btsGallery">
              <div id="imageInterface2">
                <div id="preBtsImg" class="arrow">&#9658;</div>
                <span>|</span>
                <div id="nextBtsImg" class="arrow">&#9658;</div>
              </div>
              <img id="btsImg" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/bts/scoge-bts-1.webp"/>
            </div>
            <div id="credits">
              <div>
                <h4><span class="primary">CREDITS</span></h4>
                <span class="primary">DIRECTOR:</span></br>
                SCOGÉ<br/></br>
                <span class="primary">CAMPAIGN PHOTOGRAPHER:</span></br>
                LIHI BROSH<br/></br>
                <span class="primary">PRESENTATION PHOTOGRAPHERS:</span></br>
                ZOE LEMBECK<br/>
                AQUA ROSE<br/></br>
                <span class="primary">STYLIST:</span></br>
                RUSSIAN<br/>
                TIWA<br/>
                KWIN VALENCIA<br/></br>
                <span class="primary">HAIR:</span></br>
                SOLEIL DAVIS<br/><br/>
                <span class="primary">MAKEUP:</span></br>
                EMMA ELIZABETH<br/><br/>
                <span class="primary">PRODUCTION ASST.:</span></br> 
                TIARA MITCHELL<br/>
                ZOIA AMADI</br>
                HARRISON LOVE<br/><br/>
                <span class="primary">MODELS:</span><br/>
                DIANDRA FORREST<br/>
                CAVIER COLEMAN<br/>
                JJ PINCKNEY<br/>
                KHALIL HENLEY<br/>
                STEPHAN LINTON
              </div>
              <div>
                <h4><span class="primary">DJ:</span></h4r></br> 
                KII<br/>
                RUSSIAN<br/><br/>
                <span class="primary">GUEST PRESENTATION PHOTOGRAPHER:</span><br/>
                MEHOW<br/>
                NICKY L<br/><br/>
                <span class="primary">AI GRAPHIC ASSISTANT:</span><br/>
                DALL-E<br/><br/>
                <span class="primary">PRESENTED BY:</span></br>
                IDEAL GLASS STUDIOS<br/><br/>
                <span class="primary">SPECIAL THANKS TO:</span></br>
                WILLARD MORGAN<br/>
                MIKE OKERSON<br/>
              </div>
            </div>
            </div>
         </div>
         `;
  }
}

customElements.define("scoge-camp", dtCampaign);

export { dtCampaign };

