

var currentPage = 1;
var currentBtsPage = 1;
var inventoryTotal = 2000;
var lexBio = "Advisor Lex Fenwick (The Dow Jones, WSJ) brings a wealth of experience and connections to the table. Fenwick is a media and technology expert with over 30 years of experience in the industry. He has a long history of success in launching and scaling companies, and his experience will be invaluable in helping SCOGÉ reach its full potential.";
var clefBio = "Advisor Wyclef Jean (musician, philanthropist) brings a wealth of experience and connections to the table. Jean is a well-known musician and philanthropist with a strong connection to the Haitian community. His involvement with SCOGÉ will help raise awareness of the brand and attract new customers."
var ogeBio = "Founder and Creative Director Starnilas Oge is a self-taught web developer and seasoned fashion designer with a strong background in marketing and brand development. Oge has also developed and directed an artist residency program in Japan for 5 years, giving him a well-rounded perspective on the creative process. Additionally, he has experience working with major consumer brands such as Liberty Fairs and Pearlman Aesthetic Surgery."

class dtInvestors extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.open = false;
  }

  get invest() {
    return this.getAttribute("invest");
  }

  set invest(val) {
    this.setAttribute("invest", val);
  }

  static get observedAttributes() {
    return ["invest"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    // if (prop === "invest") {
    //   this.render();
    // }
    if (newVal === "active") {
      this.shadow.getElementById("investorComp").style.zIndex = "5";
      setTimeout(()=> {
        this.closeInvestor();
      }, 1000)
    }
  }

  // when each menu item is clicked, it will smoothly scroll to the corresponding section 5% above the top of the screen
  // scrollToMenu() {
  //   var allMnenuItems = this.shadow.querySelectorAll(".menu-item");
  //   allMnenuItems.forEach((item) => {
  //     item.addEventListener("click", (e) => {
  //       var section = e.target.getAttribute("id");
  //       var sectionEl = this.shadow.getElementById(section.replace("Menu","Sect"));
  //       var sectionTop = sectionEl.offsetTop;
  //       var sectionTopOffset = sectionTop - 200;
  //       if (section === "dataMenu") {
  //         sectionTopOffset = sectionTop - 0;
  //       }
  //       if (section === "aboutMenu") {
  //         sectionTopOffset = sectionTop - 50;
  //       }
  //       this.shadow.getElementById("scrollBody").scrollTo({
  //         top: sectionTopOffset,
  //         behavior: "smooth",
  //       });
  //       // change the menu item color to secondary color and the rest to primary color
  //       allMnenuItems.forEach((item) => {
  //         item.style.color = "var(--primary)";
  //         item.style.borderBottom = "var(--primary) 1px solid";
  //       }
  //       );
  //       e.target.style.color = "var(--secondary)";
  //       e.target.style.borderBottom = "var(--secondary) 1px solid";
  //     });
  //     // when section is -100px from the top of the screen, change the menu item color to secondary color and the rest to primary color
  //     this.shadow.getElementById("scrollBody").addEventListener("scroll", () => {
  //       var scrollPos = this.shadow.getElementById("scrollBody").scrollTop;
  //       allMnenuItems.forEach((item) => {
  //         var section = item.getAttribute("id");
  //         var sectionEl = this.shadow.getElementById(section.replace("Menu","Sect"));
  //         var sectionTop = sectionEl.offsetTop;
  //         if (scrollPos >= sectionTop - 200) {
  //           allMnenuItems.forEach((item) => {
  //             item.style.color = "var(--primary)";
  //             item.style.borderBottom = "var(--primary) 1px solid";
  //           });
  //           item.style.color = "var(--secondary)";
  //           item.style.borderBottom = "var(--secondary) 1px solid";
  //         }
  //         // if scroll reaches the bottom of the page, change the contact menu item color to secondary color and the rest to primary color
  //         if (scrollPos >= this.shadow.getElementById("scrollBody").scrollHeight - this.shadow.getElementById("scrollBody").clientHeight - 100) {
  //           allMnenuItems.forEach((item) => {
  //             item.style.color = "var(--primary)";
  //             item.style.borderBottom = "var(--primary) 1px solid";
  //           });
  //           this.shadow.getElementById("contactMenu").style.color = "var(--secondary)";
  //           this.shadow.getElementById("contactMenu").style.borderBottom = "var(--secondary) 1px solid";
  //         }
  //       });
  //     })
  //   }
  //   );
  // }
  
  // A function to move the "campaign" element to right 0%.
  openInvestor() {
    this.shadow.getElementById("investorComp").style.transition = "1s all";
    this.shadow.getElementById("investorComp").style.right = "0%";
    // clearShop();
    // clearSettings();
    // clearFilter();
  }

  // Close the campaign
  closeInvestor() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Mobile
      this.shadow.getElementById("investorComp").style.transition = "1s all";
      this.shadow.getElementById("investorComp").style.right = "-100%";
      window.isMobile = true;
    } else {
      // Desktop
      this.shadow.getElementById("investorComp").style.transition = "1s all";
      if (this.open === false) {
        this.shadow.getElementById("investorComp").style.right = "0%";
        this.shadow.getElementById("campIcon").innerHTML = "X";
        this.open = true;
        return;
      } else {
        this.shadow.getElementById("investorComp").style.right = "-70%";
        this.open = false;
        this.shadow.getElementById("campIcon").innerHTML = "$";
      }
    }
  }

  // A function to animate the "looks" element to horizontally scroll slowly
  // pageScroll() {
  //   var looks = this.shadow.querySelector("#looks");
  //   looks.scrollLeft += 1;
  //   setTimeout(this.pageScroll.bind(this), 10);
  //   // when the scroll reaches the end, reset it to the beginning
  //   if (looks.scrollLeft == looks.scrollWidth - looks.clientWidth) {
  //     looks.scrollLeft = 0;
  //   }
  //   // Stop the scroll when the mouse is over the "#looks" element and resume when the mouse is out of the "looks" element
  //   looks.addEventListener("mouseover", () => {
  //     looks.scrollLeft += 0;
  //   }
  //   );
  // }

  // Campaign interface
  nextImage() {
    // reset current page to 1 if it is greater than 8
    if (currentPage >= 2) {
      currentPage = 0;
    }
    currentPage++;
    this.shadow.getElementById("gImg").src = `https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`;
  }

  previousImage() {
    // reset current page to 1 if it is greater than 8
    if (currentPage <= 1) {
      currentPage = 2;  
    } else {
      currentPage--;
    }
    this.shadow.getElementById("gImg").src = `https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-about-${currentPage}.webp`;
  }

  nextBtsImage() {
    // reset current page to 1 if it is greater than 8
    if (currentBtsPage >= 9) {
      currentBtsPage = 0;
    }
    currentBtsPage++;
    this.shadow.getElementById("btsImg").src = `https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`;
  }

  preBtsImage() {
    // reset current page to 1 if it is greater than 8
    if (currentBtsPage <= 1) {
      currentBtsPage = 9;
    } else {
      currentBtsPage--;
    }
    this.shadow.getElementById("btsImg").src = `https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/scoge-traction-${currentBtsPage}.jpg`;
  }

    // Sliders Sum
   slidersTotal() {
      var avgRetailSlider = this.shadow.getElementById("avgRetailSlider").value;
      var dtcQtySlider = this.shadow.getElementById("dtcQtySlider").value;
      var accountsSlider = this.shadow.getElementById("accountsSlider").value;
      var wsOrderSlider = this.shadow.getElementById("wsOrderSlider").value;
      var slidersSum = ((avgRetailSlider * dtcQtySlider) + ((avgRetailSlider/2)* (wsOrderSlider * accountsSlider)));
      // put slider sum in finalTotal element with thousands separator
      this.shadow.getElementById("finalTotal").innerHTML = slidersSum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  sliders() {
    // change budNum when budgetSlider changes. Add thousands separator
    this.shadow.getElementById("budgetSlider").addEventListener("input", function() {
      this.slidersTotal();
      this.shadow.getElementById("budNum").innerHTML = this.shadow.getElementById("budgetSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      inventoryTotal = this.shadow.getElementById("budgetSlider").value / this.shadow.getElementById("avgPCSlider").value;
      this.shadow.getElementById("dtcQtySlider").max = inventoryTotal;
      this.shadow.getElementById("wsOrderSlider").max = inventoryTotal;
      // this.shadow.getElementById("wsOrderSlider").value = inventoryTotal;
      // this.shadow.getElementById("dtcQtySlider").value = inventoryTotal;
      this.shadow.getElementById("dcqNum").innerHTML = Math.round(inventoryTotal);
      this.shadow.getElementById("wqtyNum").innerHTML = Math.round(inventoryTotal)
    } .bind(this));
    // change avrNum when averageSlider changes.
    this.shadow.getElementById("avgRetailSlider").addEventListener("input", function() {
      this.slidersTotal();
      this.shadow.getElementById("avrNum").innerHTML = this.shadow.getElementById("avgRetailSlider").value;
    } .bind(this));
    // change avpNum when avgPCSlider changes.
    this.shadow.getElementById("avgPCSlider").addEventListener("input", function() {
      this.slidersTotal();
      inventoryTotal = this.shadow.getElementById("budgetSlider").value / this.shadow.getElementById("avgPCSlider").value;
      console.log(inventoryTotal);
      this.shadow.getElementById("dtcQtySlider").max = inventoryTotal;
      this.shadow.getElementById("wsOrderSlider").max = inventoryTotal;
      this.shadow.getElementById("avpNum").innerHTML = this.shadow.getElementById("avgPCSlider").value;
    } .bind(this));
    // change dcqNum when dtcQtySlider changes. Add thousands separator
    this.shadow.getElementById("dtcQtySlider").addEventListener("input", function() {
      this.slidersTotal();
      this.shadow.getElementById("wrperSlider").value = 0;
      this.shadow.getElementById("wrP1").innerHTML = "-";
      this.shadow.getElementById("wrP2").innerHTML = "-";
      this.shadow.getElementById("dcqNum").innerHTML = this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } .bind(this));
    // change waNum when accountsSlider changes.
    this.shadow.getElementById("accountsSlider").addEventListener("input", function() {
      this.slidersTotal();
      this.shadow.getElementById("waNum").innerHTML = this.shadow.getElementById("accountsSlider").value;
    } .bind(this));
    // change wqtyNum when wsOrderSlider changes. Add thousands separator
    this.shadow.getElementById("wsOrderSlider").addEventListener("input", function() {
      this.slidersTotal();
      this.shadow.getElementById("wrperSlider").value = 0;
      this.shadow.getElementById("wrP1").innerHTML = "-";
      this.shadow.getElementById("wrP2").innerHTML = "-";
      this.shadow.getElementById("wqtyNum").innerHTML = this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // get value of wsOrderSlider / 2000 * 100
      var wsOrderSliderPer = this.shadow.getElementById("wsOrderSlider").value;
      // change wrperSlider value to respective range in wrperSlider value
    }
    .bind(this));
    // correlate wrperSlider min to 100% and max to 100%, with 0 to 50%. Change wrP1 to the min correlation and wrP2 to the max correlation.
    this.shadow.getElementById("wrperSlider").addEventListener("input", function() {
      this.slidersTotal();
      var number = this.shadow.getElementById("wrperSlider").value/2 + 50;
      var number2 = this.shadow.getElementById("wrperSlider").value/2 - 50;
      this.shadow.getElementById("wrP1").innerHTML = Math.round(Math.abs(number2));
      this.shadow.getElementById("wrP2").innerHTML = + Math.round(number);
      // change dtcQtySlider value to be (number2)% of the value of wsOrderSlider
      this.shadow.getElementById("wsOrderSlider").value = Math.round(inventoryTotal * (Math.abs(number2)/100));
      this.shadow.getElementById("wqtyNum").innerHTML = this.shadow.getElementById("wsOrderSlider").value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // change wsOrderSlider value to be (number)% of the value of dtcQtySlider
      this.shadow.getElementById("dtcQtySlider").value = Math.round(inventoryTotal * (number/100));
      this.shadow.getElementById("dcqNum").innerHTML = this.shadow.getElementById("dtcQtySlider").value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } .bind(this));
    // correlate wrP1
  }

  // Change memberName, memberProf, and memberBio when team image is clicked. team1 is clef, teamMain is oge, team2 is lex.
  team() {
    // this.shadow.getElementById("team1").addEventListener("click", function() {
    //   this.shadow.getElementById("memberName").innerHTML = "Wyclef Jean";
    //   this.shadow.getElementById("memberProf").innerHTML = "Musician, Philanthropist";
    //   this.shadow.getElementById("memberBio").innerHTML = clefBio;
    // } .bind(this));
    this.shadow.getElementById("teamMain").addEventListener("click", function() {
      this.shadow.getElementById("memberName").innerHTML = "Starnilas Oge";
      this.shadow.getElementById("memberProf").innerHTML = "Founder & Creative Director";
      this.shadow.getElementById("memberBio").innerHTML = ogeBio;
    } .bind(this));
    this.shadow.getElementById("team2").addEventListener("click", function() {
      this.shadow.getElementById("memberName").innerHTML = "Lex Fenwick";
      this.shadow.getElementById("memberProf").innerHTML = "The Dow Jones, WSJ";
      this.shadow.getElementById("memberBio").innerHTML = lexBio;
    } .bind(this));
  }

// Functions
  connectedCallback() {
    this.render();
    // this.pageScroll();
    // document.getElementById("investBut").addEventListener("click", this.openInvestor.bind(this));
    this.shadow.getElementById("campIcon").addEventListener("click", this.closeInvestor.bind(this));
    // this.shadow.getElementById("nextGalleryImg").addEventListener("click", this.nextImage.bind(this));
    // this.shadow.getElementById("preGalleryImg").addEventListener("click", this.previousImage.bind(this));
    // this.shadow.getElementById("nextBtsImg").addEventListener("click", this.nextBtsImage.bind(this));
    // this.shadow.getElementById("preBtsImg").addEventListener("click", this.preBtsImage.bind(this));
    // this.sliders();
    // this.team();
    // this.scrollToMenu();
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
                src: url("https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
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
            #investorComp {
              width: 70%;
              height: 98%;
              background: black;
              position: fixed;
              top: 0;
              right: -70%;
              z-index: 4;
              font-family: "BS-R";
              padding-top: 2%;
              overflow-y: visible;
              overflow-x: visible;
              transition: 1s;
            }
            #header {
              height: 8%;
              width: 98%;
              float: left;
              padding-left: 2%;
              padding-bottom: 2%;
              position: -webkit-sticky; /* Safari */
              position: sticky;
              top:0;
              z-index:4;
              background-color: rgba(0,0,0,.9);
            }
            #head {
              font-size: 34px;
            }
            #sub {
              margin-bottom: 2%;
              color: var(--accent);
            }
            .body {
              width: 90%;
              color: var(--primary);
              font-size: 1em;
              line-height: 2em;
              padding-left: 5%;
              letter-spacing: 1px;
              padding-bottom: 2%;
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
              height: 40%;
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
              height: auto;
              overflow: hidden;
              float: left;
              display: flex;
              justify-content: center;
              position: relative;
              margin-top: 2%;
            }
            #btsGallery img {
              width: 100%;
            }
            #runway {
              width: 80%;
              height: auto;
              float: left;
              padding-left:10%;
              padding-right:10%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              color: var(--secondary);
              font-size: 12px;
              margin-bottom: 5%;
            }
            #runwayBody {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              letter-spacing: 1px;
              line-height: 2em;
            }
            #runwayInner {
              display: grid;
              grid-template-columns: 1fr;
              grid-tenplate-rows: 1fr 1fr 1fr 1fr 1fr;
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
            #menuHead {
              height: 10%;
              padding-right: 8%;
              display: none;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              margin-bottom: 5%;
              color: var(--primary);
            }
            #team {
              width: 100%;
              height: 50%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
            }
            #close {
              width: 100%;
              height: 40% !important;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              margin-top: 10%;
            }
            #teamImg {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr;
            }
            .profile img {
              width: 60%;
              border-radius: 10px;
            }
            .advisors {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: center;
            }
            .advisors img {
              width: 30%;
              transition: .8s all;
            }
            #teamMain {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
            }
            #teamMain img {
              transition: .8s all;
            }
            .advisors img:hover {
              width: 35%;
            }
            #menuHead div {
              padding-bottom: 2px;
              border-bottom: 1px solid var(--primary);
            }
            .generalImages {
              width: 100%;
            }
            .generalImages img {
              width: 100%;
            }
            #projections {
              width: 80%;
              height: 40%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 10% 70% 20%;
              overflow: hidden;
              padding-top: 5%;
              margin-bottom: 5%;
              margin-left: 10%;
              margin-right: 10%;
              padding-left: 2%;
              display: none;
            }
            #pProjBody {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            }
            #pProjFooter {
              display: grid;
              grid-template-columns: 50% 20% 30%;
              grid-template-rows: 1fr;
              justify-items: center;
              align-items: center;
              color: var(--accent);
            }
            .pElement {
              display: grid;
              grid-template-columns: 20% 30% 50%;
              grid-template-rows: 1fr;
              justify-items: start;
              align-items: start;
            }
            .numberEl {
              padding-left: 5%;
              color: var(--accent);
            }
            #finalNumber {
              font-size: 28px;
            }
            .slidebox {
              display:block;
              width: 90%;
              padding-left: 5%;
              padding-right: 5%;
            }
            .slider {
              -webkit-appearance: none;
              width: 100%;
              height: 2px;
              background: var(--primary);
              outline: none;
              opacity: 0.7;
              -webkit-transition: .2s;
              transition: opacity .2s;
            }
            
            .slider:hover {
              opacity: 1;
            }
            
            .slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 10px;
              background: var(--accent);
              cursor: pointer;
            }
            
            .slider::-moz-range-thumb {
              width: 10px;
              height: 10px;
              background: var(--accent);
              cursor: pointer;
            }
            .pElHead {
              color: var(--secondary);
            }
            .body2 {
              width: 80%;
              color: var(--primary);
              font-size: 1em;
              line-height: 2em;
              padding-left: 10%;
              padding-right: 10%;
              letter-spacing: 1px;
              margin-bottom: 5%;
              margin-top: 5%;
            }
            h1 {
              padding-left: 5%;
              color: var(--secondary);
            }
            ol, ul {
              color: var(--accent);
            }
            .prime {
              color: var(--primary);
            }
            .acc {
              color: var(--accent);
            }
            .sec {
              color: var(--secondary);
            }
            .profile {
              cursor: pointer;
            }
            #pdfDL {
              text-decoration: underline;
              color: var(--accent);
            }
            #pdfDL:hover {
              color: var(--secondary);
            }
            .menu-item {
              cursor: pointer;
            }
            #contactSect {
              width: 80%;
              height: 20%;
              padding-left: 10%;
              padding-right: 10%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              align-items: center;
              justify-items: center;
              margin-top: 0%;
              margin-bottom: 15%;
            }
            #contact {
              background-color: var(--primary);
              color: white;
              padding: 2% 4%;
              border-radius: 5px;
              transition: .5s all;
              cursor: pointer;
              font-size: 14px;
            }
            #contact a {
              color: white;
              text-decoration: none;
            }
            #contact:hover {
              background-color: var(--secondary);
              color: black;
              font-weight: bold;
              font-size: 16px;
            }
            #contact:hover a {
              color: black;
            }
            .deckImage {
              width: 100%;
              margin-bottom: 10%;
            }
            @media screen and (max-width: 769px) {
              #head {
                font-size: 1.8em;
              }
              #contactSect {
                width: 80%;
                height: 20%;
                margin-top: 10%;
                margin-bottom: 150px;
              }
              #close {
                width: 100%;
                height: 40% !important;
                margin-top: 10%;
              }
              #campIcon {
                display: none;
              }
              #investorComp {
                width: 100%;
                height: 100% !important;
                background: black;
                position: fixed;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto !important;
                top: 0%;
                right: 0%;
                padding-top: 5%;
                z-index: 8;
                font-family: "BS-R";
                overflow-y: visible;
                overflow-x: visible;
                transition: 1s;
              }

              #projections {
                grid-template-columns: 1fr;
                grid-template-rows: 5% 80% 15% !important;
                width: 90%;
                margin-left: 5%;
                margin-right: 5%;
                padding-left: 0%;
                height: auto !important;
                padding-top: 0%;
                display: none;
              }
              .pElement {
                width: 100%;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                grid-row-gap: 10%;
                margin-bottom: 5%;
              }
              #pProjFooter {
                grid-template-columns: 5% 40% 55%;
                height: auto;
                margin-top: 50px;
              }
              .numberEl {
                width: 90%;
                text-align: right;
              }
              #runwayBody {
                display: grid;
                grid-template-columns: 1fr;
                letter-spacing: 1px;
                line-height: 2em;
                font-size: 1.2em !important;
              }
              #menuHead {
                height: 10%;
                width: 100%;
                display: none;
                grid-template-columns: 1fr 1fr 1fr 1fr; 
                grid-template-rows: auto;
                grid-row-gap: 5px;
                align-items: center;
                justify-items: center;
                margin-bottom: 5%;
                color: var(--primary);
              }
              #runway {
                padding-bottom: 5%%;
              }
              #body {
                height: 100%;
                width: 96%;
              }
              #header {
                width: 98%;
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
                background-color: var(--accent);
                grid-template-columns: 1fr;
                border-radius: 0;
                width: 10%;
                height: 10%;
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
                background-color: var(--accent);
                grid-template-columns: 1fr;
                border-radius: 0;
                width: 10%;
                height: 20%;
                left: auto;
                bottom: 10.5%;
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
         <div id="investorComp">
            <div id="campIcon">
              X
            </div>
            <div id="scrollBody">
            <div id="header">
              <div id="head">SCOGÉ Seed Raise</div>
              <div id="sub"><span class="acc" style="cursor:pointer;"><a href='' id="pdfDL" target="_blank">(Download PDF)</a></span></div>
              <div id="menuHead">
                <div style="color: var(--secondary); border-color:var(--secondary);" id="introMenu" class="menu-item">INTRO</div>
                <div id="aboutMenu" class="menu-item">PROBLEM</div>
                <div id="productMenu" class="menu-item">NEWS</div>
                <div id="edgeMenu" class="menu-item">SOLUTION</div>
                <div id="modelMenu" class="menu-item">ABOUT</div>
                <div id="newsMenu" class="menu-item">DREAM</div>
                <div id="growthMenu" class="menu-item">TRACTION</div>
                <div id="tractionMenu" class="menu-item">TREND</div>
                <div id="raiseMenu" class="menu-item">OPPURTUNITY</div>
                <div id="dataMenu" class="menu-item">MODEL</div>
                <div id="teamMenu" class="menu-item">RAISE</div>
                <div id="contactMenu" class="menu-item">CONTACT</div>
              </div>
            </div>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-1-2.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-2.jpg"/>
            <div id="film">
              <iframe id="yt" width="100%" height="630" src="https://www.youtube.com/embed/f_yQrIwtgYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-3.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-4.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-5.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-6.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-7.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-8.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-9.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-10.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-11.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-12.jpg"/>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-13.jpg"/>
            <div class="body2">
            <span class="acc" style="font-size:24px;">Use of funds:</span><br>5 year runway.
            </div>
            <div id="runway">
                <div id=runwayBody>
                  <div class="runwayInner">
                    <p class="prime">HIRING - $1.2M</p>
                    <p>4 FULL-TIME EMPLOYEES<br><span class="acc">$300K ANNUALLY</span></p>
                    <p>SALES DIRECTOR:<br>MANAGES FINANCE, WHOLESALE<br>ACCOUNTS, AND RETAIL</p>
                    <p>CFO / OPERATIONS DIRECTOR:<br>MANAGES FINANCE AND<br>RESOURCE ALLOCATION</p>
                    <p>MARKETING DIRECTOR:<br>MANAGES GROWTH STRATEGY</p>
                    <p>CREATIVE DIRECTOR:<br>DESIGNS AND DEVELOPS<br>PRODUCTS</p>
                  </div>
                  <div class="runwayInner">
                    <p class="prime">OPERATIONS - $500k</p>
                    <p>OFFICE/RETAIL</p>
                    <p>1 DUAL PURPOSE OFFICE/RETAIL SPACE.<br><span class="acc">$70K ANNUALLY</span></p>
                    <p>RETAIL BUILD OUT:<br><span class="acc">$20K ONE TIME BUILD OUT</span></p>
                    <p>OVERHEAD EXPENSES:<br><span class="acc">$10K ANNUALLY</span></p>
                    <p>20K, 4 YEAR BUFFER<br>RETAIL PROFIT RE-INVESTED<br>INTO PRODUCTION GROWTH.</p>
                  </div>
                  <div class="runwayInner">
                    <p class="prime">PRODUCT - $300k</p><p>SAMPLING & PRODUCTION</p>
                    <p>2 SAMPLING SEASONS<br><span class="acc">$20K ANNUALLY</span></p>
                    <p>2 PRODUCTION SEASONS<br><span class="acc">$40K ANNUALLY</span></p>
                    <p></p>
                    <p></p>
                  </div>
                  <div class="runwayInner">
                    <p class="prime">GROWTH - $500k</p><p>CONTENT & MARKETING</p>
                    <p>CONTENT DEVELOPMENT FOR<br>USE ON WEB, PR, ADS AND SOCIAL<br><span class="acc">$25K ANNUALLY</span></p>
                    <p>2 FASHION SHOWS SEASONS<br><span class="acc">$40K ANNUALLY</span></p>
                    <p>ADS<br><span class="acc">$20K ANNUALLY</span></p>
                    <p>GUREILLA MARKETING<br><span class="acc">$10,000 ANNUALLY</span></p>
                    <p>COMMUNITY RETAIL EVENTS<br><span class="acc">$5K ANNUALLY</span></p>
                  </div>
                </div>
            </div>
            <img class="deckImage" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/investor/si-24-14.jpg"/>
              <div id="projections">
                <div id="pProjHead">FINANCIAL PROJECTIONS</div>
                <div id="pProjBody">
                  <div class="pElement">
                    <div class="pElHead">Production Budget</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="100" max="500000" value="500000" id="budgetSlider">
                    </div>
                    <div class="numberEl">$<span id="budNum">500,000</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Avg. Product Cost</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="20" max="500" value="0" id="avgPCSlider">
                     </div>
                    <div class="numberEl">$<span id="avpNum">0</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Avg. Retail</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="100" max="2000" value="0" id="avgRetailSlider">
                    </div>
                    <div class="numberEl">$<span id="avrNum">0</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Wholesale % / DTC %</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="-100" max="100" value="0" id="wrperSlider">
                     </div>
                    <div class="numberEl"><span id="wrP1">50</span>% WS / <span id="wrP2">50</span>% DTC</div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">DTC Qty</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="0" max="2000" value="0" id="dtcQtySlider">
                     </div>
                    <div class="numberEl"><span id="dcqNum">0</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Wholesale Order Qty.</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="0" max="2000" value="0" id="wsOrderSlider">
                     </div>
                    <div class="numberEl"><span id="wqtyNum">0</span></div>
                  </div>
                  <div class="pElement">
                    <div class="pElHead">Wholesale Accounts</div>
                    <div class="slidebox">
                      <input class="slider" type="range" min="0" max="50" value="1" id="accountsSlider">
                     </div>
                    <div class="numberEl"><span id="waNum">1</span></div>
                  </div>
                </div>
                <div id="pProjFooter">
                  <div></div>
                  <div>Est. Annual Revenue</div>
                  <div id="finalNumber">$<span id="finalTotal">0</span></div>
                </div>
              </div>
            <div id="close">
              <div class="body2 acc" style="text-align:center; font-size:1.5em;">
                If you're interested in building the next great luxury fashion brand catering to an untapped global market, let's chat.
              </div>
            </div>
            <div id="contactSect">
              <div id="contact"><a href="https://calendly.com/scoge/30min" target="_black">SCHEDULE CALL</a></div>
            </div>
            </div>
         </div>
         `;
  }
}

customElements.define("scoge-investors", dtInvestors);

export { dtInvestors };

