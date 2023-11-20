import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

class scogeShop extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.requestOpen = false;
        this.requestTogAdded1 = false;
        this.requestTogAdded2 = false;
        this.requestArray = [];
        this.rsentadded = false;
        this.externalOpen = null;
        this.sliding = false;
        this.largeGalOpen = false;
        this.selectedLook = null;
        this.lookCollection = null;
        this.currentProduct = null;
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

    // smoothScroll() {
    //     var el = this.shadowRoot.getElementById("products");
    //     let t1 = gsap.to(el, {
    //         x: -400,
    //         scrollTrigger: el
    //     });
    // }

    progressScript() {
        const sliderEl = this.shadowRoot.getElementById("sliderEl");
        const sliderValue = sliderEl.value;
        sliderEl.style.background = `linear-gradient(to right, #ff002d ${sliderValue}%, #486965 ${sliderValue}%)`;
      }

    attributeChangedCallback(name, oldValue, newValue) {
        var main = this.shadowRoot.getElementById("main");
        if (newValue === "true") {
            gsap.to(main, {
                scale: 1,
                duration: 0.5,
                opacity: 1,
                pointerEvents: "auto"
            })
            this.shadowRoot.getElementById("products").scrollLeft = 0;
            return;
        }
        if (newValue === "false") {
            gsap.to(main, {
                scale: 1.5,
                duration: 0.5,
                opacity: 0,
                pointerEvents: "none"
            })
            setTimeout(()=> {
                this.shadowRoot.getElementById("products").scrollLeft = 0;
            }, 1000)
        }
    }

// Beacons
async getProducts() {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwyfpqK5BOPXAZnGpXc0e6szgHqYwXfX7jajbDNEENP7Et0l36InKzVUECe9ENCBO7uhA/exec?focus=products",
        {
          method: "GET",
          mode: "cors",
        }
      );
  
      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        this.products = data;
        return data;
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }  

  async loadShop() {
    this.products.forEach((product) => {
        if (product.Active === true) {
        // Viewport Images
        var viewImgCont = document.createElement("div");
        var viewImgImg = document.createElement("img");
        var strip = this.shadowRoot.getElementById("thumbnails");
        viewImgCont.classList.add("viewProd");
        viewImgImg.classList.add("viewProdImg");
        viewImgCont.id = product.Id;
        viewImgImg.loading = "lazy";
        viewImgImg.src = product.Look1;
        viewImgCont.appendChild(viewImgImg);
        strip.appendChild(viewImgCont);
        // Main Image Block
        var productCont = document.createElement("div");
        var productImg = document.createElement("img");
        var shadowImg = document.createElement("img");
        var loading = document.createElement("div");
        var line = document.createElement("div");
        loading.classList.add("loadingSpinner");
        loading.id = `load_${product.Id}`;
        line.classList.add("loadingLine");
        var container = this.shadowRoot.getElementById("products");
        productCont.classList.add("productCont");
        shadowImg.classList.add("shadow");
        productImg.classList.add("productImg");
        productCont.id = `look_${product.Id}`;
        productImg.loading = "lazy";
        shadowImg.loading = "lazy";
        productImg.src = product.Look1;
        shadowImg.src = product.Look1;
        loading.appendChild(line);
        productCont.appendChild(loading);
        productCont.appendChild(productImg);
        productCont.appendChild(shadowImg);
        container.appendChild(productCont);
        this.shadowRoot.getElementById(`load_${product.Id}`).style.display = "grid";
        if (productImg.complete) {
            productImg.classList.add("loaded");
            this.shadowRoot.getElementById(`load_${product.Id}`).style.display = "none";
        } else {
            productImg.addEventListener("load", () => {
                productImg.classList.add("loaded");
                this.shadowRoot.getElementById(`load_${product.Id}`).style.display = "none";
            });
        }
        if (viewImgImg.complete) {
            viewImgImg.classList.add("loaded");
        } else {
            viewImgImg.addEventListener("load", () => {
                viewImgImg.classList.add("loaded");
            });
        }
        productCont.addEventListener("click", (e) => {
            this.shadowRoot.getElementById("explore")?.remove();
            this.toggleExplore(e);
        })
        }
    })
    for (let i = 0; i < 2; i++) {
        var spacer = document.createElement("div");
        spacer.classList.add("productCont");
        spacer.style.pointerEvents = "none";
        this.shadowRoot.getElementById("products").appendChild(spacer);
    }
    if (window.isMobile === true) {
        this.shadowRoot.getElementById("look0").remove();
    }
  }

  toggleExplore(e) {
    if (!this.shadowRoot.getElementById("explore")) {
        var selected = e.target
        var explore = document.createElement("div");
        var container = this.shadowRoot.getElementById("products");
        var product1 = document.createElement("div");
        var product2 = document.createElement("div");
        product1.id = `${selected.id}_product_1`;
        product2.id = `${selected.id}_product_2`;
        explore.id = `explore`;
        //
        var item = this.products[Number(e.target.id.replace("look_",""))- 1];
        this.selectedLook = item;
        var ch = this.shadowRoot.getElementById("chapter");
        switch (item.Chapter) {
            case 0:
                ch.innerHTML = "Prelude - Discovery 1";
                this.lookCollection = "Prelude - Discovery 1";
            break;
            case 1:
                ch.innerHTML = "Chapter 1. Reacclimate";
                this.lookCollection = "Chapter 1. Reacclimate";
            break;
            case 2:
                ch.innerHTML = "Chapter 2. Alan & Evie";
                this.lookCollection = "Chapter 2. Alan & Evie";
            break;
            case 3:
                ch.innerHTML = "Chapter 3. Digisette";
                this.lookCollection = "Chapter 3. Digisette";
            break;
            default:
                ch.innerHTML = "Core";
                this.lookCollection = "Core";
            break;
        }
        if (this.requestOpen === true) {
            this.toggleRequest(e);
        }
        if (item?.Product3 != "null") {
            explore.style.gridTemplateRows = "1fr 1fr 1fr";
            explore.innerHTML = `
            <div class="productCTA">
                <div class="productImgInner" id="Product1Img">
                    <div class="loadingSpinner" id="load_P1" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp1" loading="lazy" src='${item.Product1}'/>
                </div>
                <div id="Product1" class="rcta" data-name="${item?.P1Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1">REQUEST</div>
            </div>
            <div class="productCTA">
                <div class="productImgInner" id="Product2Img">
                    <div class="loadingSpinner" id="load_P2" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp2" loading="lazy" src="${item.Product2}"/>
                </div>
                <div id="Product2" class="rcta" data-name="${item?.P2Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P2">REQUEST</div>
            </div>
            <div class="productCTA">
                <div class="productImgInner" id="Product3Img">
                    <div class="loadingSpinner" id="load_P3" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp3" loading="lazy" src="${item.Product3}"/>
                </div>
                <div id="Product3" class="rcta" data-name="${item?.P3Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P3">REQUEST</div>
            </div>
            `
        } else if (item?.Product2 != "null") {
            explore.style.gridTemplateRows = "1fr 1fr";
            explore.innerHTML = `
            <div class="productCTA">
                <div class="productImgInner" id="Product1Img">
                    <div class="loadingSpinner" id="load_P1" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp1" loading="lazy" src="${item?.Product1}"/>
                </div>
                <div id="Product1" class="rcta" data-name="${item?.P1Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1">REQUEST</div>
            </div>
            <div class="productCTA">
                <div class="productImgInner" id="Product2Img">
                    <div class="loadingSpinner" id="load_P2" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp2" loading="lazy" src="${item?.Product2}"/>
                </div>
                <div id="Product2" class="rcta" data-name="${item?.P2Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P2">REQUEST</div>
            </div>
            `
        } else {
            explore.style.gridTemplateRows = "1fr";
            explore.innerHTML = `
            <div class="productCTA">
                <div class="productImgInner" id="Product1Img">
                    <div class="loadingSpinner" id="load_P1" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp1" loading="lazy" src="${item?.Product1}"/>
                </div>
                <div id="Product1" class="rcta" data-name="${item?.P1Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1">REQUEST</div>
            </div>
            `
            // if (item?.Garment === false ) {
            //     setTimeout(()=> {
            //         this.shadowRoot.getElementById("Product1").innerHTML = "CLAIM";
            //     },200)
            // }
            if (item?.P1External === true ) {
                setTimeout(()=> {
                    this.shadowRoot.getElementById("Product1").innerHTML = "ACQUIRE";
                },200)
            }
            if (item?.P2External === true ) {
                setTimeout(()=> {
                    this.shadowRoot.getElementById("Product2").innerHTML = "ACQUIRE";
                },200)
            }
            if (item?.P3External === true ) {
                setTimeout(()=> {
                    this.shadowRoot.getElementById("Product3").innerHTML = "ACQUIRE";
                },200)
            }
        }
        //
        //
        selected.insertAdjacentElement('afterend', explore);
        explore.style.transition = ".5s all";
        setTimeout(() => {
            explore.style.transform = "scaleX(1)";
            var imgs = this.shadowRoot.querySelectorAll(".exImg");
            if (this.shadowRoot.getElementById(`load_P1`)) {
                this.shadowRoot.getElementById(`load_P1`).style.display = "grid";
            }
            if (this.shadowRoot.getElementById(`load_P2`)) {
                this.shadowRoot.getElementById(`load_P2`).style.display = "grid";
            }
            if (this.shadowRoot.getElementById(`load_P3`)) {
                this.shadowRoot.getElementById(`load_P3`).style.display = "grid";
            }
            imgs.forEach((imgEl) => {
                if (imgEl.complete) {
                    imgEl.classList.add("loaded");
                    if (this.shadowRoot.getElementById(`load_P1`)) {
                        this.shadowRoot.getElementById(`load_P1`).style.display = "none";
                    }
                    if (this.shadowRoot.getElementById(`load_P2`)) {
                        this.shadowRoot.getElementById(`load_P2`).style.display = "none";
                    }
                    if (this.shadowRoot.getElementById(`load_P3`)) {
                        this.shadowRoot.getElementById(`load_P3`).style.display = "none";
                    }
                } else {
                    imgEl.addEventListener("load", () => {
                        imgEl.classList.add("loaded");
                        if (this.shadowRoot.getElementById(`load_P1`)) {
                            this.shadowRoot.getElementById(`load_P1`).style.display = "none";
                        }
                        if (this.shadowRoot.getElementById(`load_P2`)) {
                            this.shadowRoot.getElementById(`load_P2`).style.display = "none";
                        }
                        if (this.shadowRoot.getElementById(`load_P3`)) {
                            this.shadowRoot.getElementById(`load_P3`).style.display = "none";
                        }
                    });
                }
            })
        },100)
        const containerWidth = container.clientWidth;
        const targetPosition = explore.offsetLeft;
        const targetWidth = explore.clientWidth;
        const scrollPosition = targetPosition - (containerWidth - targetWidth) / 2;
    
        container.scrollLeft = scrollPosition;

        var buts = this.shadowRoot.querySelectorAll(".rcta");
        buts.forEach((button) => {
            button.addEventListener("click", (e) => {
                this.toggleRequest(e)
            })
        })
        var exImgs = this.shadowRoot.querySelectorAll(".exImg");
        exImgs.forEach((el) => {
            el.addEventListener("click", (e) => {
                this.largeGalleryToggle(e);
            })
        })
    } else {
        //
    }
  }

  toggleRequest(e) {
    var selected =  e.target.id;
    var product = this.shadowRoot.getElementById(selected).getAttribute("data-name");
    var body = this.shadowRoot.getElementById("request");
    var external = this.shadowRoot.getElementById("linkOutPage");
    //
    var lookNum = this.shadowRoot.getElementById(selected).getAttribute("data-look");
    var choicePre = this.shadowRoot.getElementById(selected).getAttribute("data-p");
    var choice = choicePre + "External";
    var link = choicePre + "ExtLink";
    var item = Number(lookNum);
    //
    this.shadowRoot.getElementById("reqProduct").value = product;
    var pinnerArray = this.shadowRoot.querySelectorAll(".productImgInner");
    pinnerArray.forEach((el) => {
        if (el.id.replace("Img", "") === selected && pinnerArray.length > 1) {
            el.style.border = "1px solid var(--accent)";
        } else {
            el.style.border = "none";
        }
        //
        if (this.externalOpen != true && e.target.innerHTML === "REQUEST") {
            // Local 
            this.shadowRoot.getElementById("request").style.pointerEvents = "none";
            this.shadowRoot.getElementById("request").style.transition = ".3s all"
            this.shadowRoot.getElementById("request").style.opacity = "0";
            this.requestOpen = false;
            return;
        } else if (this.externalOpen === true && e.target.innerHTML === "REQUEST") {
            // External
            this.shadowRoot.getElementById("linkOutPage").style.pointerEvents = "none";
            this.shadowRoot.getElementById("linkOutPage").style.transition = ".3s all"
            this.shadowRoot.getElementById("linkOutPage").style.opacity = "0";
            this.requestOpen = false;
            this.externalOpen = false;
        }
    })
    this.shadowRoot.querySelectorAll(".rcta").forEach((el) => {
        if (el.id.replace("Img", "") === selected) {
            el.style.border = "1px solid var(--accent)";
            el.style.color = "var(--accent)";
        } else {
            el.style.border = "";
            el.style.color = "";
        }
        if (this.externalOpen != true && e.target.innerHTML === "REQUEST") {
            // Local 
            this.shadowRoot.getElementById("request").style.pointerEvents = "none";
            this.shadowRoot.getElementById("request").style.transition = ".3s all"
            this.shadowRoot.getElementById("request").style.opacity = "0";
            this.requestOpen = false;
            return;
        } else if (this.externalOpen === true && e.target.innerHTML === "REQUEST") {
            // External
            this.shadowRoot.getElementById("linkOutPage").style.pointerEvents = "none";
            this.shadowRoot.getElementById("linkOutPage").style.transition = ".3s all"
            this.shadowRoot.getElementById("linkOutPage").style.opacity = "0";
            this.requestOpen = false;
            this.externalOpen = false;
        }
    })
    //
    if (this.requestOpen === false) {
            this.shadowRoot.getElementById("main").style.backgroundColor = "rgba(0,0,0,1)";
        if (this.products[item][choice] != true) {
            // local
            this.externalOpen = false;
            this.shadowRoot.getElementById("request").style.pointerEvents = "auto";
            gsap.to(body, {
                duration: .3,
                opacity: "100%",
            })
            this.requestOpen = true;
            this.shadowRoot.getElementById("returnBut").setAttribute("data-look", `${lookNum}`)
            if (this.requestTogAdded1 === false) {
                this.requestTogAdded1 = true;
                this.shadowRoot.getElementById("returnBut").addEventListener("click", (e) => {
                    this.toggleRequest(e)
                });
            }
            return;
        } else {
            // External
            var linkEl = this.shadowRoot.getElementById("link1");
            var linkname = choicePre + "ExtName";
            var pName = choicePre + "Name";
            var bodyText = choicePre + "Details";
            linkEl.href = this.products[item][link];
            linkEl.innerHTML = this.products[item][linkname];
            this.shadowRoot.getElementById("loBody").innerHTML = this.products[item][bodyText];
            this.shadowRoot.getElementById("reqLinkProduct").innerHTML = this.products[item][pName];
            this.shadowRoot.getElementById("shopNow").href = this.products[item][link];
            this.shadowRoot.getElementById("gTag").innerHTML = this.products[item].Type + ":";
            this.externalOpen = true;
            this.shadowRoot.getElementById("linkOutPage").style.pointerEvents = "auto";
            gsap.to(external, {
                duration: .3,
                opacity: "100%",
            })
            this.requestOpen = true;
            this.shadowRoot.getElementById("returnButLink").setAttribute("data-look", `${lookNum}`)
            if (this.requestTogAdded2 === false) {
                this.requestTogAdded2 = true;
                this.shadowRoot.getElementById("returnButLink").addEventListener("click", (e) => {
                    this.toggleRequest(e)
                });
            }
        }
        return;
    } 
    else if (e.target.innerHTML != "REQUEST") {
        this.shadowRoot.getElementById("main").style.backgroundColor = "rgba(0,0,0,.90)";
        if (this.externalOpen != true) {
            // Local 
            this.shadowRoot.getElementById("request").style.pointerEvents = "none";
            this.shadowRoot.getElementById("request").style.transition = ".3s all"
            this.shadowRoot.getElementById("request").style.opacity = "0";
            this.requestOpen = false;
            return;
        } else {
            // External
            this.shadowRoot.getElementById("linkOutPage").style.pointerEvents = "none";
            this.shadowRoot.getElementById("linkOutPage").style.transition = ".3s all"
            this.shadowRoot.getElementById("linkOutPage").style.opacity = "0";
            this.requestOpen = false;
            this.externalOpen = false;
        }
    }
  }

  toggleReq() {
    this.largeGalleryToggle();
    switch (this.currentProduct) {
        case 1:
            this.shadowRoot.getElementById("Product1").click();
        break;
        case 2:
            this.shadowRoot.getElementById("Product2").click();
        break;
        case 3:
            this.shadowRoot.getElementById("Product3").click();
        break;
    }
  }

  largeGalleryToggle(e) {
    var gal = this.shadowRoot.getElementById("productInfo");
    //
    if (e) {
        var collectionName = this.shadowRoot.getElementById("idCollection");
        var productName = this.shadowRoot.getElementById("idName");
        var productDesc = this.shadowRoot.getElementById("idDesc");
        switch (e.target.id) {
            case "pp1":
                collectionName.innerHTML = this.lookCollection;
                productName.innerHTML = this.selectedLook.P1Name;
                productDesc.innerHTML = this.selectedLook.P1Details;
                this.currentProduct = 1;
            break;
            case "pp2":
                collectionName.innerHTML = this.lookCollection;
                productName.innerHTML = this.selectedLook.P2Name;
                productDesc.innerHTML = this.selectedLook.P2Details;
                this.currentProduct = 2;
            break;
            case "pp3":
                collectionName.innerHTML = this.lookCollection;
                productName.innerHTML = this.selectedLook.P3Name;
                productDesc.innerHTML = this.selectedLook.P3Details;
                this.currentProduct = 3;
            break;
        }
    } 

    if (this.largeGalOpen === false) {
        //
        var largeImages = this.selectedLook["p" + this.currentProduct + "AltQty"];
        this.shadowRoot.getElementById("InfoImgs").innerHTML = "";
        for (let i = 1; i < largeImages + 1; i++) {
            var img = document.createElement("img");
            img.src = `https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeShop/alts/P${this.currentProduct}-L${this.selectedLook.Look}-c${this.selectedLook.Chapter}-SCOGE-alt${i}.png`;
            this.shadowRoot.getElementById("InfoImgs").appendChild(img);
        }
        //
        this.largeGalOpen = true;
        gsap.to(gal, {
            scale: 1,
            duration: 0.5,
            opacity: 1,
            pointerEvents: "auto"
        })
        return;
    } else {
        gsap.to(gal, {
            scale: 1.5,
            duration: 0.5,
            opacity: 0,
            pointerEvents: "none"
        })
        setTimeout(()=> {
            this.shadowRoot.getElementById("InfoImgs").scrollTop = 0;
        }, 600)
        this.largeGalOpen = false;
    }
  }

  submitRequest() {
    this.form = this.shadowRoot.getElementById("request");
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.shadowRoot.getElementById("menuLoadingScreen2").style.display = "grid";
      let data = new FormData(this.form);
      fetch(
        "https://script.google.com/macros/s/AKfycbwyfpqK5BOPXAZnGpXc0e6szgHqYwXfX7jajbDNEENP7Et0l36InKzVUECe9ENCBO7uhA/exec?focus=requests",
        {
          method: "POST",
          body: data,
          mode: "cors",
        }
      )
        .then((res) => res.text())
        .then((data) => {
          this.form.reset();
          this.shadowRoot.getElementById("menuLoadingScreen2").style.display =
            "none";
        this.shadowRoot.getElementById("reqSent").style.display = "grid";
        if (this.rsentadded === false) {
            this.shadowRoot.getElementById("rsBut").addEventListener("click", (e) => {
                this.toggleRequest(e);
                setTimeout(() => {
                    this.shadowRoot.getElementById("reqSent").style.display = "none";
                },300)
            })
            this.rsentadded = true;
        }
        //   this.shadow.getElementById("feedbackHeadline").style.color =
        //     "var(--accent)";
        //   this.shadow.getElementById("feedbackHeadline").innerHTML =
        //     "Outstanding feedback citizen!";
        //   setTimeout(() => {
        //     this.shadow.getElementById("feedbackHeadline").style.color =
        //       "var(--primary)";
        //     this.shadow.getElementById("feedbackHeadline").innerHTML =
        //       "This City needs more people like you!";
        //   }, 3000);
        });
    });
  }
  
  syncedSlide( ){
    var products = this.shadowRoot.querySelector("#products");
    var thumbs = this.shadowRoot.getElementById("thumbnails");
    var slider = this.shadowRoot.getElementById("sliderEl");
    products.addEventListener("scroll", () => {
        if (this.sliding === false) {
        var scrollPer = slider.value / 110;
        var scrollPer2 = slider.value / 205;
        var scrollVal = products.scrollWidth * scrollPer;
        var scrollVal2 = thumbs.scrollWidth * scrollPer2;
        const sliderEl = this.shadowRoot.getElementById("sliderEl");
        const sliderValue = sliderEl.value;
        sliderEl.style.background = `linear-gradient(to right, #ff002d ${sliderValue}%, #486965 ${sliderValue}%)`;
        slider.value = products.scrollLeft / 118;
        thumbs.scrollLeft = scrollVal2;
        }
    })

    slider.addEventListener("input", () => {
        // products.style.scrollBehavior = "auto";
        this.sliding = true;
        var scrollPer = slider.value / 110;
        var scrollPer2 = slider.value / 205;
        var scrollVal = products.scrollWidth * scrollPer;
        var scrollVal2 = thumbs.scrollWidth * scrollPer2;
        const sliderEl = this.shadowRoot.getElementById("sliderEl");
        const sliderValue = sliderEl.value;
        sliderEl.style.background = `linear-gradient(to right, #ff002d ${sliderValue}%, #486965 ${sliderValue}%)`;
        thumbs.scrollLeft = scrollVal2;
        products.scrollLeft = scrollVal;
    })

    slider.addEventListener("mouseout", () => {
        setTimeout(() => {
            this.sliding = false;
        }, 1000);
    })

    // let t1 = gsap.timeline({
    //     defaults: {
    //         ease:"none"
    //     },
    //     scrollTrigger: {
    //         trigger: products,
    //         pin: true,
    //         scrub: 2,
    //         end: () =>  "+=" + products.offsetWidth
    //     }
    // })

    // t1.to(products, {
    //     xPercent: -66
    // })
    // products.addEventListener("wheel", (e) => {
    //     //   products.style.scrollBehavior = "auto";
    //     var scrollPer = slider.value / 110;
    //     var scrollPer2 = slider.value / 205;
    //     var scrollVal = products.scrollWidth * scrollPer;
    //     var scrollVal2 = thumbs.scrollWidth * scrollPer2;
    //     if (e.deltaY > 0) {
    //         // Scroll down: Increase horizontal scroll position
    //         products.scrollLeft += 40; // Adjust the value as needed
    //     } else {
    //         // Scroll up: Decrease horizontal scroll position
    //         products.scrollLeft -= 40; // Adjust the value as needed
    //     }
    //     slider.value = products.scrollLeft / 118;
    //     const sliderEl = this.shadowRoot.getElementById("sliderEl");
    //     const sliderValue = sliderEl.value;
    //     sliderEl.style.background = `linear-gradient(to right, #ff002d ${sliderValue}%, #486965 ${sliderValue}%)`;
    //     thumbs.scrollLeft = scrollVal2;
    // })
  }
  

   async connectedCallback() {
        this.render();
       await this.getProducts();
        this.loadShop();
        // this.shadowRoot.getElementById("sliderEl").addEventListener("input", this.progressScript.bind(this));
        this.shadowRoot.getElementById("submitRequest").addEventListener("click", this.submitRequest.bind(this));
        this.shadowRoot.getElementById("closePI").addEventListener("click", this.largeGalleryToggle.bind(this))
        this.shadowRoot.getElementById("requestPI").addEventListener("click", this.toggleReq.bind(this));
        // setTimeout(() => {
        //     this.smoothScroll();
        // }, 300)
        this.syncedSlide();
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

                :root {
                    --black : black;
                    --primary: #ff002d;
                    --secondary: #b5d3d1;
                    --accent: #94be8c;
                    --regular: "BS-R", sans-serif;
                    --tileSize: 18px;
                    --accent2: #486965;
                  }
                  

                #main {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 80% 10% 10%;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    background-color: rgba(0,0,0,0.90);
                    z-index: 10;
                    font-family: "BS-R";
                    scale: 1.5;
                    pointer-events: none;
                    opacity: 0;
                }

                /* width */
                ::-webkit-scrollbar {
                 width: 0px;
                 height: 0px;
               }
             
               /* Track */
               ::-webkit-scrollbar-track {
                 background: var(--black); 
               }
               
               /* Handle */
               ::-webkit-scrollbar-thumb {
                 background: var(--accent);
               }
             
               /* Handle on hover */
               ::-webkit-scrollbar-thumb:hover {
                 background: var(--secondary); 
               }

                #strip {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    position: relative;
                    overflow-x: scroll;
                }

                #miniViewport {
                    width: 15%;
                    height: 90%;
                    justify-self: center;
                    align-self: center;
                    border: .5px solid #486965;
                    position: absolute;
                    z-index: 5;
                    pointer-events: none;
                }

                #thumbnails {
                    height: 100%;
                    width: 10%;
                    padding-left: 45%;
                    padding-right: 45%;
                    display: flex;
                    flex-direction: row;
                    overflow-x: scroll;
                    cursor: pointer;
                    -webkit-user-select: none; /* Safari */
                    -ms-user-select: none; /* IE 10 and IE 11 */
                    user-select: none; /* Standard syntax */
                    z-index: 10;
                    pointer-events: none;
                }

                .viewProd {
                    height: 70%;
                    min-width: 50px;
                    margin-right: 1%;
                    align-self: center;
                    float: left;
                    display: grid;
                    overflow: hidden;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    -webkit-user-select: none; /* Safari */
                    -ms-user-select: none; /* IE 10 and IE 11 */
                    user-select: none; /* Standard syntax */
                }

                .viewProdImg {
                    min-height: 100%;
                    max-width: 70%;
                    justify-self: center;
                    object-fit: contain;
                    -webkit-user-select: none; /* Safari */
                    -ms-user-select: none; /* IE 10 and IE 11 */
                    user-select: none; /* Standard syntax */
                    opacity: 0;
                    transition: opacity .3s ease-in-out;
                }

                .exImg {
                    opacity: 0;
                    transition: opacity .3s ease-in-out;
                    cursor: pointer;
                }

                .loaded {
                    opacity: 1 !important;
                }

                #slider {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 40% 60%;
                    justify-items: center;
                    align-items: center;
                }

                #sliderEl {
                    width: 90%;
                    height: 1%;
                    margin-top: 25px;
                    align-self: start;
                    -webkit-appearance: none; 
                    appearance: none;
                    background: #486965;
                    outline: none;
                    -webkit-transition: .2s; 
                    transition: opacity .2s;
                    z-index:5;
                }

                #sliderEl::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    border-radius: 9px;
                    background: #ff002d;
                    cursor: pointer;
                    transition: .2s ease-in-out;
                  }
                  
                  /* Track: Mozilla Firefox */
                  input[type="range"]::-moz-range-track {
                    width: 90%;
                    height: 2%;
                  }

                #chapter {
                    padding-top: 1%;
                    z-index: 2;
                    letter-spacing: 2px;
                    align-self: start;
                    justify-self: center;
                }

                #products {
                    height: 80%;
                    width: 90%;
                    padding-bottom: 3%;
                    padding-top: 17vh;
                    padding-left: 5%;
                    padding-right: 5%;
                    display: flex;
                    flex-direction: row;
                    overflow-x: scroll;
                    scroll-behavior: smooth;
                }

                .productCont {
                    height: 100%;
                    min-width: 22%;
                    margin-right: 1%;
                    cursor: pointer;
                    position: relative;
                    user-select: none;
                }

                .productCont:hover > .shadow {
                    opacity: .7;
                }

                .shadow {
                    top: 0;
                    left: 0;
                    height: 100%;
                    object-fit: contain;
                    pointer-events: none;
                    filter: blur(15px);
                    transform: scaleX(1.3) scaleY(.95);
                    opacity: 0;
                    transition: .5s all;
                }

                .productImg {
                    top: 0;
                    left:0;
                    height: 100%;
                    object-fit: contain;
                    pointer-events: none;
                    z-inden: 2;
                    position: absolute;
                    z-index: 3;
                    opacity: 0;
                    transition: opacity .5s ease-in-out;
                    cursor: pointer;
                }

                #explore {
                    height: 100%;
                    min-width: 22%;
                    margin-right: 1%;
                    z-index: 2;
                    transition: .3s all;
                    transform: scaleX(0);
                    transform-origin: left;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                }

                .productCTA {
                    width: 100%
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 80% 20%;
                    justify-items: center;
                    align-items: center;
                    overflow: hidden;
                }

                .productImgInner {
                    width: 80%;
                    height: 90%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                }

                .productImgInner img {
                    height: 100%;
                    width: auto;
                    object-fit: cover;
                }

                .rcta {
                    border: .5px solid #ff002d;
                    padding: 2% 5%;
                    letter-spacing: 2px;
                    font-size: .8em;
                    cursor: pointer;
                    transition: .3s all;
                }

                .rcta:hover {
                    border: 1px solid #94be8c;
                    color: #94be8c;
                }

                #linkOutPage {
                    width: 31%;
                    height: 64%;
                    position: fixed;
                    right: 0%;
                    border-left: 1px solid #ff002d;
                    top: 14%;
                    z-index: 8;
                    background-color: black;
                    opacity: 0;
                    padding-left: 2%;
                    padding-right: 5%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    user-select: none;
                    pointer-events: none;
                }

                #request {
                    width: 31%;
                    height: 64%;
                    position: fixed;
                    right: 0%;
                    border-left: 1px solid #ff002d;
                    top: 14%;
                    z-index: 5;
                    background-color: black;
                    opacity: 0;
                    pointer-events: none;
                    padding-left: 2%;
                    padding-right: 5%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    user-select: none;
                    display: relative;
                }

                .inputs1 {
                    width: 50%;
                    background: transparent;
                    border-left: none;
                    border-right: none;
                    border-top: none;
                    border-bottom: 1px solid #ff002d;
                    margin-left: 5%;
                    color: #ff002d;
                    letter-spacing: 2px;
                }

                .inputs1:focus {
                    outline: none;
                    color: var(--secondary);
                }

                #reqText {
                    width: 100%;
                    min-height 100%;
                    background: transparent;
                    border: 1px solid #ff002d;
                    color: var(--secondary);
                    letter-spacing: 2px;
                    resize: none;
                    margin-top: 2%;
                    padding: 2%;
                    font-family: "BS-R";
                }

                #reqText:focus {
                    outline: none;
                }

                #submitSect  {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                }

                #submitSectLink  {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-items: center;
                    align-items: center;
                }

                #shopNow {
                    width: 40%;
                    height: 55%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    justify-self: center;
                    align-self: start;
                    border-bottom: 1px solid var(--accent);
                    text-align: center;
                    transition: scale 0.3s;
                    cursor: pointer
                }

                a {
                    text-decoration: none;
                    color: var(--accent);
                }

               #returnButLink {
                    width: 40%;
                    height: 55%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    justify-self: center;
                    align-self: end;
                    border-bottom: 1px solid #ff002d;
                    text-align: center;
                    transition: scale 0.3s;
                    cursor: pointer
                }


                #shopNow:hover  {
                    scale: 1.1;
                    border: 1px solid var(--accent); 
                }

                #returnButLink:hover  {
                    scale: 1.1;
                    border: 1px solid #ff002d; 
                }

                #submitRequest {
                    width: 50%;
                    height: 55%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    justify-self: end;
                    border-bottom: 1px solid var(--accent);
                    color: var(--accent);
                    text-align: center;
                    cursor: pointer;
                    transition: scale 0.3s;
                    background: transparent;
                    outline: none;
                    border-left: none;
                    border-right: none;
                    border-top: none;
                }

                #submitRequest:hover {
                    scale: 1.1;
                    border: 1px solid var(--accent); 
                }

                #returnBut {
                    width: 50%;
                    height: 55%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    justify-self: start;
                    border-bottom: 1px solid #ff002d;
                    text-align: center;
                    transition: scale 0.3s;
                    cursor: pointer
                }

                #returnBut:hover, #returnButLink:hover  {
                    scale: 1.1;
                    border: 1px solid #ff002d; 
                }

                .requestText {
                    color: var(--secondary);
                }

                #requestDeet2 {
                    letter-spacing: 2px;
                    font-size: .8em;
                }

                #requestHead {
                    color: var(--accent);
                    letter-spacing: 2px;
                }

                #reqProduct {
                    background: transparent;
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    margin-left: 2%;
                    padding: 2% 4%;
                    text-align: center;
                    user-select: none;
                    pointer-events: none;
                }

                #gTag {
                    width: 98%;
                    margin-left: 2%;
                    text-align: center;
                }

                #loBody {
                    width: 78%;
                    margin-left: 2%;
                    padding-left: 10%;
                    padding-right: 10%;
                    text-align: start;
                    margin-bottom: 2%;
                    color: var(--secondary);
                    letter-spacing: 2px;
                    font-size: .8em;
                    line-height: 2;
                }

                #loHeader {
                    width: 98%;
                    margin-left: 2%;
                    text-align: center;
                    margin-bottom: 2%;
                    color: var(--accent);
                    letter-spacing: 2px;
                }

                #reqLinkProduct {
                    width: 40%;
                    background: transparent;
                    color: var(--accent);
                    margin-left: 28%;
                    padding: 2% 4%;
                    text-align: center;
                    user-select: none;
                    pointer-events: none;
                    letter-spacing: 2px;
                }

                #avail {
                    font-size:.8em;
                }

                #market {
                    text-decoration: underline;
                    font-size: 1em !important;
                    margin-top: 2%;
                }

                #reqSent {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #0f0f0f;
                    z-index: 8;
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    align-items: center;
                    justify-items: center;
                    font-family: "BS-R";
                    font-size: 1em;
                    color: var(--accent);
                }

                #reqSentText {
                    width: 60%;
                    height: 40%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    align-items: center;
                    justify-items: center;
                    text-align: center;
                    letter-spacing: 2px;
                    align-self: end;
                    font-size: .8em;
                }

                #rsBut {
                    border-bottom: 1px solid var(--accent);
                    padding: 1% 4%;
                    color: var(--accent);
                    align-self: start;
                    cursor: pointer;
                    transition: scale .3s;
                    margin-top: 5%;
                }

                #rsBut:hover {
                    scale: 1.1;
                    border: 1px solid var(--accent);
                }

                .LoadBox {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #0f0f0f;
                    z-index: 7;
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    font-family: "BS-B";
                    font-size: 1.5em;
                    color: #ff002d;
                  }
                  .loadIcon {
                    width: 300px;
                    height: 300px;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    animation: spin 10s linear infinite, pulse 3s ease-in-out infinite;
                    border: 5px dotted #ff002d;
                    border-radius: 50%;
                  }
                  .loadinScreen {
                    position: absolute;
                    animation: blink 4s ease-in-out infinite;
                  }

                  #productInfo {
                    width: 90%;
                    height: 100%;
                    position: fixed;
                    left: 0%;
                    top: 0%;
                    z-index: 12;
                    background-color: black;
                    opacity: 0%;
                    padding-left: 5%;
                    padding-right: 5%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    user-select: none;
                    pointer-events: none;
                    scale: 1.5;
                  }
                  
                  #InfoDesc {
                    width: 20%;
                    position: absolute;
                    z-index:5;
                    top: 2%;
                    right: 3%;
                    font-size: 1em;
                    padding-left: 5%;
                    padding-top: 2%;
                    text-align: right;
                  }

                  #closePI {
                    position: absolute;
                    text-align: center;
                    padding: .6% 2.2%;
                    border-bottom: 1px solid var(--primary);
                    z-index:5;
                    bottom: 5%;
                    left: 3%;
                    letter-spacing: 2px;
                    transition: .3s all;
                    cursor: pointer;
                  }

                  #requestPI {
                    position: absolute;
                    text-align: center;
                    padding: .6% 2.2%;
                    color: var(--accent);
                    border-bottom: 1px solid var(--accent);
                    z-index:5;
                    bottom: 5%;
                    right: 3%;
                    letter-spacing: 2px;
                    transition: .3s all;
                    cursor: pointer;
                  }

                  #requestPI:hover {
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    letter-spacing: 4px;
                  }
                  
                  #closePI:hover {
                    border: 1px solid var(--primary);
                    letter-spacing: 4px;
                  }

                  #InfoImgs {
                    width: 100%;
                    height: 100%;
                    overflow-y: scroll;
                    scroll-behavior: smooth;
                  }

                  #InfoImgs img {
                    width: 100%;
                  }

                  @keyframes spin {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                  @keyframes pulse {
                    0% {
                      scale: 1;
                    }
                    50% {
                      scale: .8;
                    }
                    100% {
                      scale: 1;
                    }
                  }
                  @keyframes blink {
                    0% {
                      opacity: 1;
                    }
                    50% {
                      opacity: 0;
                    }
                    100% {
                      opacity: 1;
                    }
                  }

                  .loadingSpinner {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    z-index: 10;
                    user-select: none;
                    pointer-events: none;
                  }

                  .loadingLine {
                    position: absolute;
                    width: 50px;
                    height: 2px;
                    background-color: red;
                    justify-self: center;
                    align-self: center;
                    animation: spin 4s infinite;
                  }

                @media screen and (max-width: 800px) {
                    #InfoImgs {
                        padding-top: 150px;
                    }

                    #InfoDesc {
                        top: auto;
                        bottom: 150px;
                        padding-left: 10%;
                        user-select: none;
                        pointer-events: none;
                    }

                    .productCont {
                        height: 100%;
                        min-width: 80%;
                        margin-right: 1%;
                        cursor: pointer;
                        position: relative;
                        user-select: none;
                    }
                    #explore {
                        height: 100%;
                        min-width: 100%;
                        margin-right: 1%;
                        z-index: 2;
                        transition: .3s all;
                        transform: scaleX(0);
                        transform-origin: left;
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr 1fr;
                    }
    
                    #linkOutPage {
                        width: 90%;
                        height: 70% !important;
                        position: fixed;
                        right: auto;
                        border-left: none;
                        z-index: 12;
                        background-color: black !important;
                        opacity: 0;
                        padding-top: 10% !important;
                        padding-bottom: 20% !important;
                        padding-left: 5%;
                        padding-right: 5%;
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                        user-select: none;
                        pointer-events: none;
                    }

                    #request {
                        width: 90%;
                        height: 70% !important;
                        position: fixed;
                        border:none;
                        right: auto;
                        z-index: 11;
                        background-color: black !important;
                        opacity: 0;
                        pointer-events: none;
                        padding-top: 10% !important;
                        padding-bottom: 20% !important;
                        padding-left: 5%;
                        padding-right: 5%;
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                        user-select: none;
                    }
                    #reqText {
                        width: 96%;
                        min-height 100%;
                        background: transparent;
                        border: 1px solid #ff002d;
                        color: var(--secondary);
                        letter-spacing: 2px;
                        resize: none;
                        margin-top: 2%;
                        padding: 2%;
                        font-family: "BS-R";
                    }


                    #submitSect  {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr 1fr;
                        justify-items: center;
                        align-items: center;
                    }

                    #returnBut, #submitRequest {
                        justify-self: center;
                        margin-bottom: 10%;
                    }

                    #submitRequest {
                        grid-row: 1;
                    }

                    #shopNow, #returnButLink {
                        width: 50%;
                    }

                    #loBody {
                        width: 98%;
                        margin-left: 2%;
                        padding-left: 0%;
                        padding-right: 0%;
                        text-align: start;
                        margin-bottom: 2%;
                        color: var(--secondary);
                        letter-spacing: 2px;
                        font-size: .8em;
                        line-height: 2;
                    }
                    #sliderEl::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 20px;
                        height: 20px;
                        border-radius: 10px;
                        background: #ff002d;
                        cursor: pointer;
                        transition: .2s ease-in-out;
                      }
                }
                  
            </style>
            <div id="main">
                <div id="productInfo">
                    <div id="InfoDesc">
                        <div id="idCollection">Test</div><br><br>
                        <div id="idName">100% Cotton</div><br><br>
                        <div id="idDesc">Top:</div>
                    </div>
                    <div id="InfoImgs">
                        <img src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeShop/P2-L4-cC-SCOGE.png"/>
                    </div>
                    <div id="closePI">< RETURN</div>
                    <div id="requestPI">REQUEST</div>
                </div>
                <div id="linkOutPage">
                  <div id="loHeader">
                    <span id="avail">Available now, exclusively at</span><br><div id="market"><a href="" target="_blank" id="link1">Empower Global Online Shop</a></div>
                  </div>
                  <div id="loProduct">
                    <div style="color: var(--primary)l; letter-spacing: 2px;" id="gTag">Garment:</div><div id="reqLinkProduct">Black Natulitus Top</div>
                  </div>
                  <div id="loBody">
                    This versatile piece features a classic black hue that pairs effortlessly with any outfit. Its premium fabric offers a soft touch against your skin, and the flattering fit adds a touch of elegance to your look. 
                  </div>
                  <div id="submitSectLink">
                    <a href="" target="_blank" id="shopNow">SHOP NOW</a>
                    <div id="returnButLink">< Return</div>
                  </div>
                </div>
                <form id="request">
                    <div id="reqSent">
                        <div id="reqSentText">- Request Sent -<br><br>Your request is in, and we're delighted you're considering our unique garments. We'll review your details and respond shortly.
                        </div>
                        <div id="rsBut"> < Return </div>
                    </div>
                    <div id="menuLoadingScreen2" class="LoadBox">
                        <div id="loading" class="loadinScreen">SENDING...</div>
                        <div class="loadIcon"></div>
                    </div>
                    <div id="requestHead">
                        Online request to purchase select SCOGÉ garments.
                    </div>
                    <div>
                        <span style="color: var(--secondary)">Garment/s:</span> <input name="Product" id="reqProduct" value="Black Natulitus Top"/>
                    </div>
                    <div class="requestText">
                        Email:<input type="email" name="Email" class="inputs1" placeholder="Email"/> *
                    </div>
                    <div class="requestText">
                        Name:<input type="text" name="Name" class="inputs1"  placeholder="Name"/> *
                    </div>
                    <div class="requestText">
                        Do you have any requirements?<br>
                        <textarea id="reqText" name="Requirements" maxlength="500" rows="6"/></textarea>
                    </div>
                    <div id="requestDeet2">
                        * After submitting your request, and upon approval, you will receive additional details to finalize your purchase.<br><br>
                        * Prices of our garments are indicative. (They depend of material availabilty and extra request)
                    </div>
                    <div id="submitSect">
                        <div id="returnBut">< Return</div>
                        <input id="submitRequest" type="submit">
                    </div>
                </form>
                <div id="products">
                  <div class="productCont" id="look0" style="user-select:none; pointer-events:none;
                  "></div>
                </div>
                <div id="strip">
                    <div id="miniViewport"></div>
                    <div id="thumbnails"></div>
                </div>
                <div id="slider">
                    <input id="sliderEl" type="range" value="0" min="0" step=".01" max="100"/>
                    <div id="chapter"></div>
                </div>
            </div>
        `;
    }

}

customElements.define('scoge-shop', scogeShop);

export {scogeShop};