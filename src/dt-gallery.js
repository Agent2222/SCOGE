import { gsap } from "gsap";

class dtGallery extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.selectedCollection = null;
    this.gallExpanded = false;
    this.srcs = [
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l1.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l10.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l11.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l2.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l3.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l4.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l5.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l6.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l7.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l8.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Optimized/campaign/SCOGE-CH2-l9.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-1.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-2.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-15.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-4.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-18.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-22.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-7.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-34.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-35.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-36.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-29.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-31.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-DY1-IMG-POR-32.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-1.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-2.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-4.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-5.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-6.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-7.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-8.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-9.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-10.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-11.jpg",
      },
      {
        publicUrl:
          "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGÉ-CH1-IMG-POR-12.jpg",
      },
    ];
    this.credits = {
      collection1: [
        {
          category: "DIRECTOR / DESIGNER",
          names: ["SCOGÉ"],
        },
        {
          category: "TALENT",
          names: [
            "Tiara Mitchell",
            "Mari Mbaye",
            "Gabby o'Connor",
            "Cavier Coleman",
            "Michael Pigues Anthony",
            "JJ Pinckney",
            "Dame Mbaye",
            "Miguel Berlanga",
            "Skylar McGraw",
            "Daniel Orosco",
            "Oxford Prince",
            "Maxwell Edwards",
            "Stefanie Murza",
            "Alec Malin",
            "George Garcia",
            "Synead Nicholas",
          ],
        },
        {
          category: "MUA & HAIR",
          names: [
            "Emma Elizabeth",
            "Soleil Davis",
          ],
        },
        {
          category: "ASSISTANTS",
          names: [
            "Marisol Romero",
            "Molly Palmer",
            "Russian",
            "Kii Brown",
            "Zoia Amadi",
            "Chartotta",
          ],
        },
        {
          category: "BTS PHOTO",
          names: ["Zoe Lembeck"],
        },
        {
          category: "SPECIAL THANKS",
          names: [
            "Tiara Mitchell",
            "Mute Models",
            "New York Tokyo",
            "NYFWBLK"
        ],
        },
      ],
      collection2: [
        {
          category: "DIRECTOR / DESIGNER",
          names: ["SCOGÉ"],
        },
        {
          category: "CAMPAIGN PHOTO",
          names: ["Lihi Brosh"],
        },
        {
          category: "PRESENTATION PHOTO",
          names: [
            "Zoe Lembeck",
            "Aqua Rose"
          ],
        },
        {
          category: "STYLIST",
          names: [
            "Russian",
            "Kwin Valencia",
            "Tiwa"
          ],
        },
        {
          category: "HAIR",
          names: ["Soleil Davis"],
        },
        {
          category: "MUA",
          names: ["Emma Elizabeth"],
        },
        {
          category: "PRODUCTION ASSISTANTS",
          names: [
            "Tiara Mitchell",
            "Zoia Amadi",
            "HL"
          ],
        },
        {
          category: "TALENT",
          names: [
            "Diandra Forrest",
            "Cavier Coleman",
            "JJ Pinckney",
            "Khalil Henley",
            "Stephan Linton"
          ],
        },
        {
          category: "DJ'S",
          names: [
            "Kii",
            "Russian"
          ],
        },
        {
          category: "GUEST PHOTOGRAPHERS",
          names: [
            "Mehow",
            "Nicky L."
          ],
        },
        {
          category: "SPECIAL THANKS",
          names: [
            "Willard Morgan",
            "Mike Okerson",
            "Ideal Glass Studios"
          ],
        },
      ],
      collection3: [
        {
          category: "DIRECTOR / DESIGNER",
          names: ["SCOGÉ"],
        },
        {
          category: "PRODUCTION ASSISTANTS & STYLING",
          names: [
            "Marisol Romero",
            "Zoia Amadi",
            "Tiwa Neo"
          ],
        },
        {
          category: "SECOND ASSISTANTS",
          names: [
            "Molly Palmer",
            "Russian",
            "Ondrea Wheeler",
            "Thee Exodus",
            "Ava Lenore"
          ],
        },
        {
          category: "HAIR",
          names: [
            "Jenni Iva Wimmerstedt",
            "April Andreu"
          ],
        },
        {
          category: "PHOTOGRAPHER",
          names: [
            "Bert Vulcain",
            "Alex Korolkovas"
          ],
        },
        {
          category: "FILM",
          names: ["Brian Felix"],
        },
        {
          category: "TALENT",
          names: [
            "JJ Pinckney",
            "Kate Williams",
            "Cavier Coleman",
            "Nashanti Harris",
            "Miguel",
            "Chenoa Jade",
            "Gritt Pack",
            "Jeheli Odidi",
            "Stephan Linton",
            "Amanda Luxe",
           "Mari Malek",
          ],
        },
        {
          category: "PR",
          names: ["Tolani Faloye"],
        },
        {
          category: "VENUE",
          names: ["Flolo Holistic"],
        },
        {
          category: "SOUND / DJ",
          names: ["Sydney Gonzalez"],
        },
        {
          category: "SPECIAL THANKS",
          names: [
            "Jade Netanya",
            "Dfinity Foundation",
            "Drink Frisky"
          ],
        },
      ],
    }
  }

  get gallery() {
    return this.getAttribute("gallery");
  }

  set gallery(val) {
    this.setAttribute("gallery", val);
  }

  static get observedAttributes() {
    return ["gallery"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "gallery") {
      this.render();
    }
  }

  selectCollection(e) {
    this.closeCredits();
    this.shadow.getElementById("galleryMainImages").innerHTML = "";
    this.shadow.getElementById("galGridImages").innerHTML = "";
    switch (e?.target.id) {
      case "collection1":
        this.selectedCollection = "collection1";
        this.srcs.forEach((src) => {
          if (src.publicUrl.includes("DY1")) {
            const img = document.createElement("img");
            img.setAttribute("class", "blackVignette");
            img.id = `${src.publicUrl}_main`;
            img.src = src.publicUrl;
            const img2 = document.createElement("img");
            img2.setAttribute("class", "blackVignette gridImg");
            img2.id = src.publicUrl;
            img2.src = src.publicUrl;
            this.shadow.getElementById("galleryMainImages").appendChild(img);
            this.shadow.getElementById("galGridImages").appendChild(img2);
            img2.addEventListener("click", (e) => {
              this.viewGalGrid();
              const container = this.shadow.getElementById("galleryMainImages");
              container.scrollTop = 0;
              const imageRect = this.shadow.getElementById(`${e.target.id}_main`).getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();
              const offsetTop = imageRect.top - containerRect.top;
              container.scrollTop = offsetTop;
            });
          }
        });
        break;
      case "collection2":
        this.selectedCollection = "collection2";
        this.srcs.forEach((src) => {
          if (src.publicUrl.includes("CH1")) {
            const img = document.createElement("img");
            img.setAttribute("class", "blackVignette");
            img.id = `${src.publicUrl}_main`;
            img.src = src.publicUrl;
            const img2 = document.createElement("img");
            img2.setAttribute("class", "blackVignette gridImg");
            img2.id = src.publicUrl;
            img2.src = src.publicUrl;
            this.shadow.getElementById("galleryMainImages").appendChild(img);
            this.shadow.getElementById("galGridImages").appendChild(img2);
            img2.addEventListener("click", (e) => {
              this.viewGalGrid();
              const container = this.shadow.getElementById("galleryMainImages");
              container.scrollTop = 0;
              const imageRect = this.shadow.getElementById(`${e.target.id}_main`).getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();
              const offsetTop = imageRect.top - containerRect.top;
              container.scrollTop = offsetTop;
            });
          }
        });
        break;
      case "collection3":
        this.selectedCollection = "collection3";
        this.srcs.forEach((src) => {
          if (src.publicUrl.includes("CH2")) {
            const img = document.createElement("img");
            img.setAttribute("class", "blackVignette");
            img.id = `${src.publicUrl}_main`;
            img.src = src.publicUrl;
            const img2 = document.createElement("img");
            img2.setAttribute("class", "blackVignette");
            img2.id = src.publicUrl;
            img2.src = src.publicUrl;
            this.shadow.getElementById("galleryMainImages").appendChild(img);
            this.shadow.getElementById("galGridImages").appendChild(img2);
            img2.addEventListener("click", (e) => {
              this.viewGalGrid();
              const container = this.shadow.getElementById("galleryMainImages");
              container.scrollTop = 0;
              const imageRect = this.shadow.getElementById(`${e.target.id}_main`).getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();
              const offsetTop = imageRect.top - containerRect.top;
              container.scrollTop = offsetTop;
            });
          }
        });
        break;
    }
  }

  viewCredits() {
    this.shadow.getElementById("info").addEventListener("click", () => {
      this.shadow.getElementById("galGridImages").style.display = "none";
      if ( this.shadow.getElementById("galGridInfo").style.display === "none") {
        //
      this.shadow.getElementById("galInfo").innerHTML = "";
      this.shadow.getElementById("galGridInfo").style.display = "grid";
      gsap.to(this.shadow.getElementById("galInfo"), {
        duration: 1,
        transform: "scale(1)",
        ease: "power4.out",
      });
      gsap.to(this.shadow.getElementById("galInfo"), {
        duration: 1,
        opacity: 1,
        ease: "power4.out",
      });
      gsap.to(this.shadow.getElementById("galGridInfo"), {
        duration: 1,
        opacity: 1,
        ease: "power4.out",
      });
      this.shadow.getElementById("galInfo").style.display = "grid";
      switch (this.selectedCollection) {
        case "collection1":
          this.credits.collection1.forEach((credit) => {
            const creditContainer = document.createElement("div");
            creditContainer.setAttribute("class", "creditContainer");
            const namesContainer = document.createElement("div");
            namesContainer.setAttribute("class", "creditNames");
            const cat = document.createElement("div");
            cat.innerHTML = credit.category;
            cat.setAttribute("class", "creditCategory");
            creditContainer.appendChild(cat);
            credit.names.forEach((name) => {
              const n = document.createElement("div");
              n.innerHTML = name;
              n.setAttribute("class", "creditNames");
              namesContainer.appendChild(n);
              creditContainer.appendChild(namesContainer);
              this.shadow.getElementById("galInfo").appendChild(creditContainer);
            });
          });
          break;
        case "collection2":
            this.credits.collection2.forEach((credit) => {
              const creditContainer = document.createElement("div");
              creditContainer.setAttribute("class", "creditContainer");
              const namesContainer = document.createElement("div");
              namesContainer.setAttribute("class", "creditNames");
              const cat = document.createElement("div");
              cat.innerHTML = credit.category;
              cat.setAttribute("class", "creditCategory");
              creditContainer.appendChild(cat);
              credit.names.forEach((name) => {
                const n = document.createElement("div");
                n.innerHTML = name;
                n.setAttribute("class", "creditNames");
                namesContainer.appendChild(n);
                creditContainer.appendChild(namesContainer);
                this.shadow.getElementById("galInfo").appendChild(creditContainer);
              });
            });
            break;
            case "collection3":
              this.credits.collection3.forEach((credit) => {
                const creditContainer = document.createElement("div");
                creditContainer.setAttribute("class", "creditContainer");
                const namesContainer = document.createElement("div");
                namesContainer.setAttribute("class", "creditNames");
                const cat = document.createElement("div");
                cat.innerHTML = credit.category;
                cat.setAttribute("class", "creditCategory");
                creditContainer.appendChild(cat);
                credit.names.forEach((name) => {
                  const n = document.createElement("div");
                  n.innerHTML = name;
                  n.setAttribute("class", "creditNames");
                  namesContainer.appendChild(n);
                  creditContainer.appendChild(namesContainer);
                  this.shadow.getElementById("galInfo").appendChild(creditContainer);
                });
              });
              break;
      } 
      } else {
        gsap.to(this.shadow.getElementById("galInfo"), {
          duration: 1,
          transform: "scale(0.8)",
          ease: "power4.out",
        });
        gsap.to(this.shadow.getElementById("galInfo"), {
          duration: 1,
          opacity: 0,
          ease: "power4.out",
        });
        gsap.to(this.shadow.getElementById("galGridInfo"), {
          duration: 1,
          opacity: 0,
          ease: "power4.out",
        });
        setTimeout(() => {
          this.closeCredits();
        }, 600);
      }
    });
  }

  closeCredits() {
    this.shadow.getElementById("galInfo").style.display = "none";
    this.shadow.getElementById("galGridInfo").style.display = "none";
  }

  viewGalGrid() {
      this.shadow.getElementById("galGridInfo").style.display === "none";
      if (this.shadow.getElementById("galGridInfo").style.display === "none") {
        this.shadow.getElementById("galGridImages").style.display = "grid";
        this.shadow.getElementById("galGridInfo").style.display = "grid";
        gsap.to(this.shadow.getElementById("galGridInfo"), {
          duration: 1,
          opacity: 1,
          ease: "power4.out",
        });
        gsap.to(this.shadow.getElementById("galGridImages"), {
          duration: 1,
          opacity: 1,
          ease: "power4.out",
        });
      } else {
        gsap.to(this.shadow.getElementById("galGridImages"), {
          duration: 1,
          opacity: 0,
          ease: "power4.out",
        });
        gsap.to(this.shadow.getElementById("galGridInfo"), {
          duration: 1,
          opacity: 0,
          ease: "power4.out",
        });
        setTimeout(() => {
          this.closeCredits();
        }, 600);
      }
  }

  closeCollectionGallery() {
    this.shadow.getElementById("close").addEventListener("click", () => {
      this.shadowRoot.getElementById("expandedCollectionSection").style.display = "none";
      document.getElementById("collectionGallery").shadowRoot.getElementById("collectionGallery").style.transform = "scaleX(0)";
      document.getElementById("collectionGallery").shadowRoot.getElementById("collectionGallery").style.opacity = "0";
      var el = this.selectedCollection
      document.getElementById("getUniMenu").shadowRoot.getElementById(el).setAttribute("class", "collectionTab");
      this.shadowRoot.getElementById("collectionGallery").style.width = "50%";
      this.shadowRoot.getElementById("collectionGallery").style.zIndex = "5";
      this.shadowRoot.getElementById("scale").innerHTML = "+";
      this.gallExpanded = false;
      // setTimeout(() => {
      //   this.shadow.getElementById("collectionGallery").style.display = "none";
      // }, 600);
    });
  }

  expandAndShrink() {
    this.shadowRoot.getElementById("scale").addEventListener("click", () => {
      if (this.gallExpanded === false) {
        this.shadowRoot.getElementById("collectionGallery").style.width = "96%";
        this.shadowRoot.getElementById("collectionGallery").style.zIndex = "10";
        this.shadowRoot.getElementById("scale").innerHTML = "-";
        this.shadowRoot.getElementById("expandedCollectionSection").style.display = "grid";
        this.gallExpanded = true;
      } else {
        this.shadowRoot.getElementById("collectionGallery").style.width = "50%";
        this.shadowRoot.getElementById("collectionGallery").style.zIndex = "5";
        this.shadowRoot.getElementById("scale").innerHTML = "+";
        this.shadowRoot.getElementById("expandedCollectionSection").style.display = "none";
        this.gallExpanded = false;
      }
    });
  }

  // Functions
  connectedCallback() {
    this.render();
    this.selectCollection();
    this.viewCredits();
    this.viewGalGrid();
    this.closeCollectionGallery();
    this.expandAndShrink();
    this.shadow.getElementById("grid").addEventListener("click", this.viewGalGrid.bind(this));
    this.shadow.querySelectorAll(".collectionTabEx").forEach((tab) => {
      tab.addEventListener("click", this.selectCollection.bind(this));
    });
    // selectCollection
    // document.getElementById("campaignBut").addEventListener("click", this.openCampaign.bind(this));

    // Add Event handlers to rendered html below
    // Must use this.shadow to access dom.
    // Add methods above this method
    // Ex. btn.addEventListener('click', this.method.bind(this))
    // NOTE: Render clears all code because of innerHtml
  }

  render() {
    this.shadow.innerHTML = `
         <style>
         /* width */
            ::-webkit-scrollbar {
              width: 3px;
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
          #collectionGallery {
            position: fixed;
            width: 50%;
            height: 80%;
            background-color: rgba(0, 0, 0, 0.8);
            right: 2%;
            top: 10%;
            z-index: 5;
            border-radius: 10px;
            border: 1px solid var(--primary);
            font-family: "BS-R";
            overflow: hidden;
            transition: all .3s ease-out;
            opacity: 0;
            transform: scaleX(0);
          }

          #scale {
            width: 5%;
            height: 5%;
            border: 1px solid var(--primary);
            background-color: rgba(0, 0, 0, 0.8);
            position: absolute;
            left: 0px;
            top: 0px;
            border-top-left-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
          }
          #close {
            width: 5%;
            height: 5%;
            border: 1px solid var(--primary);
            background-color: rgba(0, 0, 0, 0.8);
            position: absolute;
            right: 0px;
            top: 0px;
            border-top-right-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
          }

          #close:hover, #scale:hover {
            font-size: 2rem;
            cursor: pointer;
          }

          #gallery {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            overflow-y: scroll;
            overflow-x: hidden;
          }
          #scroll {
            width: 100%;
            height: 5%;
            position: absolute;
            bottom: 2%;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            letter-spacing: 2px;
            font-size: .8rem;
            z-index: 3;
          }

          #gallery img {
            width: 100%;
            height: auto;
            object-fit: contain;
          }

          .blackVignette {
            -webkit-mask-image: radial-gradient(circle, black 60%, transparent 80%);
            mask-image: radial-gradient(circle, black 60%, transparent 80%);
            margin-bottom: 10px;
          }

          #info {
            width: 5%;
            height: 5%;
            position: absolute;
            bottom: 2%;
            left: 2%;
            border: 1px solid var(--primary);
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 10px;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: .8;
            cursor: pointer;
            transform: scale(.8);
            transition: all .3s ease-in-out;
          }
          #grid {
            width: 5%;
            height: 5%;
            position: absolute;
            bottom: 2%;
            right: 2%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 10;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: center;
            align-items: center;
            opacity: .8;
            cursor: pointer;
            transform: scale(.8);
            transition: all .3s ease-in-out;
          }
          #grid div {
            height: 100%;
            width: 100%;
            border: 1px solid var(--primary);
            opacity: .8;
          }

          #grid:hover, #info:hover {
            transform: scale(1);
            opacity: 1;
            font-size: 1.3rem;
          }

          #galGridInfo {
            width: 100%;
            height: 100%;
            display: grid;
            position: absolute;
            top: 0px;
            left: 0px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 4;
            justify-items: center;
            align-items: center;
            border-radius: 10px;
            display: none;
            opacity: 0;
          }

          #galGridImages {
            width: 60%;
            height: 60%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            overflow-y: scroll;
            overflow-x: hidden;
          }
          
          #galGridImages img:hover {
            transition: all .3s ease-in-out;
            cursor: pointer;
          }

          #galGridImages img:hover {
            transform: scale(1.2);
          }

          #galInfo {
            width: 80%;
            height: 80%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows:auto;
            justify-items: center;
            align-items: center;
            font-size: .8rem;
            transform: scale(.8);
            opacity: 0;
          }

          .creditContainer {
            width: 96%;
            height: 96%;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 20% 80%;
            justify-items: start;
            align-items: start;
            padding: 2%;
          }

          .creditCategory {
            font-size: .8rem;
            font-weight: bold;
            letter-spacing: 2px;
          }

          .creditNames {
            color: var(--secondary);
            margin-bottom: 5px;
          }

          #galleryMainImages {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
          }

          #expandedCollectionSection {
            width: 3%;
            height: 20%;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            border-radius: 10px;
            justify-items: center;
            align-items: center;
            position: fixed;
            top: 40%;
            left: 2%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 10;
            font-size: .8rem;
            opacity: .8;
            display: none;
          }

          #expandedCollectionSection:hover {
            opacity: 1;
          }

          .collectionTabEx {
            cursor: pointer;
            transition: all .3s ease-in-out;
          }

          .collectionTabEx:hover {
            font-size: 1.1rem;
            color: var(--accent);
          }

          @media screen and (max-width: 1024px) {
              #collectionGallery {
                width: 90% !important;
                height: 90% !important;
                right: auto !important;
                left: 5% !important;
                top: 5% !important;
                z-index: 20 !important;
              }

          #scale {
            display: none !important;
          }

          #galleryMainImages img {
            height: 90% !important;
            transform: scale(1.8);
          }

          #close {
            width: 45pt;
            height: 45pt;
            font-size: 1.5rem !important;
          }

          #grid {
            display: none !important;
          }

          #info {
            position: absolute !important;
            left: 0px !important;
            bottom: 0px !important;
            width: 45pt;
            height: 45pt;
            border-top-left-radius: 0px !important;
            border-bottom-left-radius: 10px !important;
            border-top-right-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
            transform: scale(1) !important;
            background-color: rgba(0, 0, 0, 0.8) !important;
            font-size: 1.5rem !important;
          }

          #scroll {
            justify-content: end !important;
            padding-right: 5% !important;
            width: 95% !important;
          }

          // #galGridInfo {
          //   grid-template-columns: 1fr !important;
          //   grid-template-rows: auto !important;
          // }

          #galInfo {
            width: 98% !important;
            padding-top: 10% !important;
            padding-left: 2% !important;
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
            overflow-y: scroll !important;
          }

          .creditContainer {
            text-align: center !important;
            justify-items: center !important;
            align-items: center !important;
            font-size: 1rem !important;
            margin-bottom: 30pt !important;
          }

        }

         </style>
         <div id="collectionGallery" data-domType="shadow">
            <div id="expandedCollectionSection">
              <div id="collection3" class="collectionTabEx">FW23</div>
              <div id="collection2" class="collectionTabEx">SS23</div>
              <div id="collection1" class="collectionTabEx">FW22</div>
            </div>
            <div id="scale">+</div>
            <div id="close">x</div>
            <div id="info">i</div>
            <div id="grid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div id="gallery">
              <div id="galGridInfo">
                <div id="galInfo">
                </div>
                <div id="galGridImages">
                  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGE%CC%81-CH1-IMG-POR-2.jpg" alt="gallery">
                  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGE%CC%81-CH1-IMG-POR-2.jpg" alt="gallery">
                  <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeImages/SCOGE%CC%81-CH1-IMG-POR-2.jpg" alt="gallery">
                </div>
              </div>
              <div id="galleryMainImages"></div>
            </div>
            <div id="scroll">- SCROLL -</div>
         </div>
         `;
  }
}

customElements.define("scoge-gallery", dtGallery);

export { dtGallery };
