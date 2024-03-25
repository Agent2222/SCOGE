import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const dsheet = "https://script.google.com/macros/s/AKfycbzHUtfeNysmMSZvlC7tnfYhpgs_EU_3kx9_6H_VV6le8tPyR4Vlzs8SlfES_8pbK0nb2w/exec";

gsap.registerPlugin(ScrollTrigger) 

class scogeShop extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.requestOpen = false;
        this.requestTogAdded1 = false;
        this.requestTogAdded2 = false;
        this.requestTogAdded3 = false;
        this.requestArray = [];
        this.rsentadded = false;
        this.externalOpen = null;
        this.sliding = false;
        this.largeGalOpen = false;
        this.selectedLook = null;
        this.lookCollection = null;
        this.currentProduct = null;
        this.bag = [];
        this.bagOpen = false;
        this.checkoutBuilt = false;
        this.pid = null;
        this.pName2 = null;
        this.item = null;
        this.allItemQuantitiesSum = null;
        this.checkoutBuilt = false;
        this.scOpen = false;
        this.scBuilt = false;
        this.prodImg = null;
        this.shopOpen = false;
        this.ch = null;
        this.stripe = Stripe("pk_live_51IbCVzHMfdeKt5zM7eq7VimKhvoak6vkeati23YVPavrVNnYj4oPiE36KBYpy5LYzudDioM5AONK9r26IRA9Tysy00ibywIvec");
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
            this.shopOpen = true;
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
            this.shopOpen = false;
        }
    }

// Beacons
async getProducts() {
    try {
      const response = await fetch(
        `${dsheet + "?focus=products"}`,
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
        // if (this.requestOpen === true) {
        //     this.toggleRequest(e);
        // }
        if (item?.Product3 != "null") {
            explore.style.gridTemplateRows = "1fr 1fr 1fr";
            explore.innerHTML = `
            <div class="productCTA">
                <div class="productImgInner" id="Product1Img">
                    <div class="loadingSpinner" id="load_P1" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp1" loading="lazy" data-name="${item?.P1Name}" data-type="${item?.P1Type}" "data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1" src='${item.Product1}'/>
                </div>
                <div id="Product1" class="rcta" data-name="${item?.P1Name}"data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1">${item?.P1Name}<br>$${item?.P1Price}</div>
            </div>
            <div class="productCTA">
                <div class="productImgInner" id="Product2Img">
                    <div class="loadingSpinner" id="load_P2" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp2" loading="lazy" data-type="${item?.P2Type}" data-name="${item?.P2Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P2" src="${item.Product2}"/>
                </div>
                <div id="Product2" class="rcta" data-name="${item?.P2Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P2">${item?.P2Name}<br>$${item?.P2Price}</div>
            </div>
            <div class="productCTA">
                <div class="productImgInner" id="Product3Img">
                    <div class="loadingSpinner" id="load_P3" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp3" loading="lazy" data-type="${item?.P3Type}" data-name="${item?.P3Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P3" src="${item.Product3}"/>
                </div>
                <div id="Product3" class="rcta" data-name="${item?.P3Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P3">${item?.P3Name}<br>$${item?.P3Price}</div>
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
                    <img class="exImg" id="pp1" loading="lazy" data-type="${item?.P1Type}" data-name="${item?.P1Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1" src="${item?.Product1}"/>
                </div>
                <div id="Product1" class="rcta" data-name="${item?.P1Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1">${item?.P1Name}<br>$${item?.P1Price}</div>
            </div>
            <div class="productCTA">
                <div class="productImgInner" id="Product2Img">
                    <div class="loadingSpinner" id="load_P2" style="display: none;">
                        <div class="loadingLine"></div>
                    </div>
                    <img class="exImg" id="pp2" loading="lazy" data-type="${item?.P2Type}" data-name="${item?.P2Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P2" src="${item?.Product2}"/>
                </div>
                <div id="Product2" class="rcta" data-name="${item?.P2Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P2">${item?.P2Name}<br>$${item?.P2Price}</div>
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
                    <img class="exImg" id="pp1" loading="lazy" data-type="${item?.P1Type}" data-name="${item?.P1Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1" src="${item?.Product1}"/>
                </div>
                <div id="Product1" class="rcta" data-type="${item?.P1Type}" data-name="${item?.P1Name}" data-look="${Number(e.target.id.replace("look_",""))- 1}" data-p="P1">${item?.P1Name}<br>$${item?.P1Price}</div>
            </div>
            `
            // if (item?.Garment === false ) {
            //     setTimeout(()=> {
            //         this.shadowRoot.getElementById("Product1").innerHTML = "CLAIM";
            //     },200)
            // }
            if (item?.P1External === true ) {
                setTimeout(()=> {
                    this.shadowRoot.getElementById("Product1").innerHTML = `${item?.P1Name}<br>${item?.P1Price}`;
                },200)
            }
            if (item?.P2External === true ) {
                setTimeout(()=> {
                    this.shadowRoot.getElementById("Product2").innerHTML = `${item?.P2Name}<br>${item?.P2Price}`;
                },200)
            }
            if (item?.P3External === true ) {
                setTimeout(()=> {
                    this.shadowRoot.getElementById("Product3").innerHTML = `${item?.P3Name}<br>${item?.P3Price}`;
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
                this.toggleRequest(e)
            })
        })
    } else {
        //
    }
  }

  async initialize() {
    this.shadowRoot.getElementById("loadcon").style.display = "grid";
    const lineItems = this.bag.map((item) => {
        return {
          price: item.price,
          quantity: item.quantity,
        };
    });

    try {
    const response = await fetch("/create-checkout-session", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ lineItems }),
      });
    
      const { clientSecret } = await response.json();
    
      const checkout = await this.stripe.initEmbeddedCheckout({
        clientSecret,
      });

      this.ch = checkout;
    
      // Mount Checkout
      checkout.mount('#checkout');
      
      var checkoutScreen = document.getElementById("checkout");
      checkoutScreen.style.scale = "1";
      checkoutScreen.style.pointerEvents = "auto";
      checkoutScreen.style.opacity = "1";
      if (window.isMobile === true) {
        checkoutScreen.style.height = "85svh";
        checkoutScreen.style.paddingTop = "15svh";
        checkoutScreen.style.overflowY = "scroll";
        checkoutScreen.style.zIndex = "11";
      }
    } catch (error) {
        console.error("Error:", error);
        this.shadowRoot.getElementById("loadcon").style.display = "none";
    }

      this.shadowRoot.getElementById("loadcon").style.display = "none";
      document.getElementById("shop2").setAttribute("active", "false");
      this.shadowRoot.getElementById("productInfo").style.pointerEvents = "none";
      this.shadowRoot.getElementById("cartItems").style.pointerEvents = "none";
      this.shadowRoot.getElementById("addtoCart").style.pointerEvents = "none";
  }

async endCoSession() {
    this.ch.embeddedCheckout.destroy();
}

addToBag(pid, size, name, img, desc, price) {
    // quanity adjustment object var
    // add event listener to checkout button if not already added
    // display bag count icon
    // add event listener to bag count icon if not already added
    var lineItem = {
        price: pid,
        quantity: 1,
        adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
        },
        price_data: {
            currency: 'usd',
            product_data: {
              name: name,
              metadata: {
                size: size,
                desc: desc,
                price: price,
              }
            },
            images: [img],
        },
    }

    if (this.bag.length === 0) {
        this.bag.push(lineItem);
        this.shadowRoot.getElementById("shopNowCH").classList.remove("faint");
        if (!document.getElementById("altBagIcon")) {
            var bagIconCont = document.createElement("div");
            bagIconCont.id = "altBagIcon";
            bagIconCont.style.userSelect = "none";
            bagIconCont.style.cursor = "pointer";
            bagIconCont.style.pointerEvents = "auto";
            bagIconCont.style.opacity = "1";
            bagIconCont.style.transition = ".3s all";
            bagIconCont.style.position = "fixed";
            bagIconCont.style.top = "5%";
            bagIconCont.style.right = "2%";
            bagIconCont.style.zIndex = "10";
            bagIconCont.style.display = "grid";
            bagIconCont.style.gridTemplateColumns = "1fr 1fr";
            bagIconCont.style.alignItems = "center";
            bagIconCont.style.justifyItems = "center";
            bagIconCont.style.width = "150px";
            bagIconCont.innerHTML = `
            <div id="bagCtn" style="justify-self:end; font-size:1em; font-family: BS-R;">${this.allItemQuantitiesSum}</div>
            <div id="svgContainer" style="display:block; width:50%;">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                  <defs>
                  <style>.cls-1{fill:#ff002d;stroke:#ff002d;stroke-miterlimit:10;}.cls-2{fill:#ff002d;}</style>
                  </defs>
                  <path class="cls-1" d="M289.4,192.1c24.7-36.5,65.7-58.8,110.6-58.8c73.7,0,133.3,59.7,133.3,133.3v82.4c0,9.2,7.5,16.7,16.7,16.7c9.2,0,16.7-7.5,16.7-16.7v-11.6c10,5.8,16.7,16.5,16.7,28.9c0,18.4-14.9,33.3-33.3,33.3s-33.3-14.9-33.3-33.3c0-9.2-7.5-16.7-16.7-16.7s-16.7,7.5-16.7,16.7c0,36.8,29.9,66.7,66.7,66.7s66.7-29.9,66.7-66.7c0-31.1-21.3-57.2-50.1-64.6v-35.1v0h116.7c9.2,0,16.7,7.4,16.7,16.7V650c0,9.2-7.4,16.7-16.7,16.7H116.7c-9.2,0-16.7-7.4-16.7-16.7V283.3c0-9.2,7.4-16.7,16.7-16.7h116.7v83.4c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7v-12.6c10,5.8,16.7,16.5,16.7,28.9c0,18.4-14.9,33.3-33.3,33.3c-18.4,0-33.3-14.9-33.3-33.3c0-9.2-7.5-16.7-16.7-16.7c-9.2,0-16.7,7.5-16.7,16.7c0,36.8,29.9,66.7,66.7,66.7s66.7-29.9,66.7-66.7c0-31.1-21.3-57.2-50.1-64.6v-35.2h215.5c9.2,0,16.7-7.5,16.7-16.7s-7.5-16.7-16.7-16.7H116.7c-27.6,0-50,22.4-50,50V650c0,27.6,22.4,50,50,50h566.7c27.6,0,50-22.4,50-50V283.3c0-27.6-22.4-50-50-50h-120C547.9,157.3,480.6,100,400,100c-56,0-107.4,27.9-138.2,73.5c-5.2,7.6-3.1,18,4.5,23.1C273.9,201.8,284.3,199.8,289.4,192.1z"/>
                  </svg>
              </div>
            `;
            if (window.isMobile != true) {
                document.getElementById("main").appendChild(bagIconCont);
                bagIconCont.addEventListener("click", () => {
                    this.toggleBag();
                });
                this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
                    return acc + item.quantity;
                }, 0);
                document.getElementById("bagCtn").innerHTML = `${this.allItemQuantitiesSum}`;
            } else {
                this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
                    return acc + item.quantity;
                }, 0);
                this.shadowRoot.getElementById("checkoutBut").innerHTML = `(${this.allItemQuantitiesSum}) CHECKOUT`;
            }
            // document.getElementById("main").appendChild(bagIconCont);
            // bagIconCont.addEventListener("click", () => {
            //     this.toggleBag();
            // });
        }
            // go through bag and add up all quantities
            // this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
            //     return acc + item.quantity;
            // }, 0);
            // document.getElementById("bagCtn").innerHTML = `${this.allItemQuantitiesSum}`;
        return;
    } else {
        var bagCtn = document.getElementById("bagCtn");
        if (this.bag.some((item) => item.price === pid && item.price_data.product_data.metadata.size === size)) {
            var itemIndex = this.bag.findIndex((item) => item.price === pid);
            this.bag[itemIndex].quantity += 1;
            // go through bag and add up all quantities
            this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
                return acc + item.quantity;
            }, 0);
            if (window.isMobile != true) {
                bagCtn.innerHTML = `${this.allItemQuantitiesSum}`;
                bagCtn.innerHTML = `${this.allItemQuantitiesSum}`;
                bagCtn.style.transition = ".3s all";
                bagCtn.style.color = "var(--secondary)";
                bagCtn.style.scale = "1.2";
                setTimeout(()=> {
                    bagCtn.style.scale = "1";
                    bagCtn.style.color = "var(--primary)";
                }, 300);
            } else {
                this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
                    return acc + item.quantity;
                }, 0);
                this.shadowRoot.getElementById("checkoutBut").innerHTML = `(${this.allItemQuantitiesSum}) CHECKOUT`;
            }
            return;
        } else {
            this.bag.push(lineItem);
            // go through bag and add up all quantities
            this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
                return acc + item.quantity;
            }, 0);
            if (window.isMobile != true) {
                bagCtn.innerHTML = `${this.allItemQuantitiesSum}`;
                bagCtn.style.color = "var(--secondary)";
                bagCtn.style.scale = "1.2";
                setTimeout(()=> {
                    bagCtn.style.scale = "1";
                    bagCtn.style.color = "var(--primary)";
                },300);
            } else {
                this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
                    return acc + item.quantity;
                }, 0);
                this.shadowRoot.getElementById("checkoutBut").innerHTML = `(${this.allItemQuantitiesSum}) CHECKOUT`;
            }
        }
    }

}

getSizes(item, pSizes) {
    const myString = this.products[item][pSizes];
    const myArray = myString.split(", ");
    var select = this.shadowRoot.getElementById("cpSizeSel");
    select.innerHTML = "";
    myArray.forEach((size) => {
        var option = document.createElement("option");
        option.value = size;
        option.innerHTML = size;
        select.appendChild(option);
    });
}

sizeChart(cat) {
    var sizeChart = document.createElement("div");
    sizeChart.id = "sizeChart";
    sizeChart.innerHTML = `
    <div id="sizeChartCont">
        <div id="sizeChartHead">
            <div style="justify-self:start; text-transform: uppercase; color: var(--accent); letter-spacing: 2px;">${cat} Sizing</div>
            <div id="sizeChartClose">X</div>
        </div>
        <div id="sizeDetails"></div>
    </div>`
    this.shadowRoot.getElementById("main").appendChild(sizeChart);
    switch (cat) {
        case "Snapback":
            this.shadowRoot.getElementById("sizeDetails").innerHTML = `
            <div class="sizeChartRow1">
                <div>Single Size</div>
                <div>Snapback adjustable hat - 35 Inch Circumference Max.</div>
            </div>
            `
        break;
        case "Hat":
            this.shadowRoot.getElementById("sizeDetails").innerHTML = `
            <div class="sizeChartRow2">
                <div>Size</div>
                <div>Head Circumference</div>
            </div>
            <div class="sizeChartRow2">
                <div>Small</div>
                <div>21" - 21.5"</div>
            </div>
            <div class="sizeChartRow2">
                <div>Medium</div>
                <div>22" - 22.5"</div>
            </div>
            <div class="sizeChartRow2">
                <div>Large</div>
                <div>23" - 23.5"</div>
            </div>
            <div class="sizeChartRow2">
                <div>X-Large</div>
                <div>24" - 24.5"</div>
            </div>
            <div class="sizeChartRow2">
                <div>2X-Large</div>
                <div>25" - 25.5"</div>
            </div>
            `
        break;
        case "Hoodie":
            this.shadowRoot.getElementById("sizeDetails").innerHTML = `
            <div class="sizeChartRow4">
                <div>Size</div>
                <div>Length</div>
                <div>Chest</div>
                <div>Sleeve</div>
            </div>
            <div class="sizeChartRow4">
                <div>Small</div>
                <div>25"</div>
                <div>21.5"</div>
                <div>22"</div>
            </div>
            <div class="sizeChartRow4">
                <div>Medoum</div>
                <div>27.5"</div>
                <div>23.5"</div>
                <div>24"</div>
            </div>
            <div class="sizeChartRow4">
                <div>Large</div>
                <div>29.5"</div>
                <div>24.5"</div>
                <div>25"</div>
            </div>
            <div class="sizeChartRow4">
                <div>X-Large</div>
                <div>31"</div>
                <div>26.5"</div>
                <div>26.5"</div>
            </div>
            `
        break;
        case "Jogger Pants":
            this.shadowRoot.getElementById("sizeDetails").innerHTML = `
            <div class="sizeChartRow4">
                <div>Size</div>
                <div>Waist (Max Stretch)</div>
                <div>Leg Opening (Width)</div>
                <div>Length</div>
            </div>
            <div class="sizeChartRow4">
                <div>Small</div>
                <div>30"</div>
                <div>10"</div>
                <div>34"</div>
            </div>
            <div class="sizeChartRow4">
                <div>Medium</div>
                <div>34"</div>
                <div>10"</div>
                <div>36"</div>
            </div>
            <div class="sizeChartRow4">
                <div>Large</div>
                <div>36"</div>
                <div>11.5"</div>
                <div>39"</div>
            </div>
            <div class="sizeChartRow4">
                <div>X-Large</div>
                <div>38"</div>
                <div>13"</div>
                <div>41"</div>
            </div>
            `
        break;
        case "Track Shorts":
            this.shadowRoot.getElementById("sizeDetails").innerHTML = `
            <div class="sizeChartRow3">
                <div>Size</div>
                <div>Waist (Max Stretch)</div>
                <div>Length</div>
            </div>
            <div class="sizeChartRow3">
                <div>Medium</div>
                <div>18.9"</div>
                <div>17.5"</div>
            </div>
            <div class="sizeChartRow3">
                <div>Large</div>
                <div>21"</div>
                <div>18"</div>
            </div>
            `
        break;
        case "Polo Shirt":
            this.shadowRoot.getElementById("sizeDetails").innerHTML = `
            <div class="sizeChartRow3">
                <div>Size</div>
                <div>Chest Width</div>
                <div>Length</div>
            </div>
            <div class="sizeChartRow3">
                <div>Medium</div>
                <div>18.9"</div>
                <div>26.1"</div>
            </div>
            <div class="sizeChartRow3">
                <div>Large</div>
                <div>21"</div>
                <div>29"</div>
            </div>
            `
        break;
        default:
    }
}

toggleSizeChart(cat) {
    if (this.scBuilt === false) {
        this.sizeChart(cat);
        this.shadowRoot.getElementById("sizeChartClose").addEventListener("click", () => {
            this.toggleSizeChart(cat);
        });
        this.scBuilt = true;
        return;
    } else {
        if (this.scOpen === false) {
            this.shadowRoot.getElementById("sizeChart").style.opacity = "1";
            this.shadowRoot.getElementById("sizeChart").style.pointerEvents = "auto";
            this.scOpen = true;
            return;
        } else {
            this.shadowRoot.getElementById("sizeChart").style.opacity = "0";
            this.shadowRoot.getElementById("sizeChart").style.pointerEvents = "none";
            this.scOpen = false;
        }
    }
}

toggleBag() {
    var bagPage = this.shadowRoot.getElementById("cartPage");
    var icon = document.getElementById("altBagIcon");
    if (this.bagOpen === false && this.bag.length > 0 && this.shopOpen === false) {
        document.getElementById("shop2").setAttribute("active", "true");
        bagPage.style.opacity = "1";
        bagPage.style.scale = "1";
        bagPage.style.pointerEvents = "auto";
        this.bagOpen = true;
        if (icon) {
            icon.style.display = "none";
        }
        this.toggleRequest();
        this.buildBag();
        return;
    }
    else if (this.bagOpen === false && this.bag.length > 0 && this.largeGalOpen === true) {
        bagPage.style.opacity = "1";
        bagPage.style.scale = "1";
        bagPage.style.pointerEvents = "auto";
        this.bagOpen = true;
        if (icon) {
            icon.style.display = "none";
        }
        this.buildBag();
        return;
    } else if (this.largeGalOpen === false && this.bag.length > 0) {
        bagPage.style.opacity = "1";
        bagPage.style.scale = "1";
        bagPage.style.pointerEvents = "auto";
        this.bagOpen = true;
        if (icon) {
            icon.style.display = "none";
        }
        this.toggleRequest();
        this.buildBag();
        return;
    } else if (this.largeGalOpen === true && this.bag.length > 0) {
        if (icon) {
            icon.style.display = "grid";
        }
        bagPage.style.opacity = "0";
        bagPage.style.scale = "2";
        bagPage.style.pointerEvents = "none";
        // this.toggleRequest();
        this.bagOpen = false;
        console.log("Debug 1");
        // this.shadowRoot.getElementById("addToCart").style.opacity = "100%";
        // this.shadowRoot.getElementById("addToCart").style.pointerEvents = "auto";
        this.shadowRoot.getElementById("cartItems").style.opacity = "0";
        this.shadowRoot.getElementById("cartItems").style.pointerEvents = "none";
        this.shadowRoot.getElementById("cartItems").style.scale = "2";
        if (this.requestOpen === true) {
            this.toggleRequest();
        }
        return;
    } else {
        if (icon) {
            icon.style.display = "grid";
        }
        console.log("Debug 2");
        bagPage.style.opacity = "0";
        bagPage.style.scale = "2";
        bagPage.style.pointerEvents = "none";
        this.bagOpen = false;
        this.largeGalleryToggle();
    }
}

decreaseQuantity(e) {
    var index = e.target.id.replace("dec","");
    var item = this.bag[index];
    var bagPage = this.shadowRoot.getElementById("cartPage");
    if (item.quantity > 1) {
        item.quantity -= 1;
        this.buildBag();
        this.shadowRoot.getElementById(`qty${index}`).innerHTML = `${this.bag[index].quantity}`;
    } else {
        this.bag.splice(index, 1);
        this.buildBag();
        this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        if (document.getElementById("bagCtn")) {
        document.getElementById("bagCtn").innerHTML = `${this.allItemQuantitiesSum}`;}
        if (this.bag.length === 0) {
            bagPage.style.opacity = "0";
            bagPage.style.scale = "2";
            this.allItemQuantitiesSum = 0;
            bagPage.style.pointerEvents = "none";
            this.bagOpen = false;
            this.shadowRoot.getElementById("shopNowCH").classList.add("faint");
            this.toggleRequest();
            if (document.getElementById("altBagIcon")) {
            document.getElementById("altBagIcon").style.display = "none";
            }
            // FIX
        }
    }
    this.shadowRoot.getElementById("cartSubTotalVal").innerHTML = `$${this.bag.reduce((acc, item) => {
        return acc + (item.price_data.product_data.metadata.price * item.quantity);
    }, 0)} USD`;
    if (window.isMobile === true) {
        this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        this.shadowRoot.getElementById("checkoutBut").innerHTML = `(${this.allItemQuantitiesSum}) CHECKOUT`;
    }
}

increaseQuantity(e) {
    var index = e.target.id.replace("inc","");
    var item = this.bag[index];
    if (item.quantity < 10) {
        item.quantity += 1;
        this.buildBag();
        this.shadowRoot.getElementById(`qty${index}`).innerHTML = `${this.bag[index].quantity}`;
        this.shadowRoot.getElementById("cartSubTotalVal").innerHTML = `$${this.bag.reduce((acc, item) => {
            return acc + (item.price_data.product_data.metadata.price * item.quantity);
        }, 0)} USD`;
        if (window.isMobile === true) {
            this.allItemQuantitiesSum = this.bag.reduce((acc, item) => {
                return acc + item.quantity;
            }, 0);
            this.shadowRoot.getElementById("checkoutBut").innerHTML = `(${this.allItemQuantitiesSum}) CHECKOUT`;
        }
    } else {
        return;
    }
}

buildBag() {
    this.shadowRoot.getElementById("cartItems").style.opacity = "1";
    this.shadowRoot.getElementById("cartItems").style.pointerEvents = "auto";
    this.shadowRoot.getElementById("cartItems").style.scale = "1";
    this.shadowRoot.getElementById("productInfo").style.pointerEvents = "auto";
    var bagCont = this.shadowRoot.getElementById("cartItems");
    if (document.getElementById("altBagIcon")) {
        document.getElementById("altBagIcon").style.display = "none";
    }
    bagCont.innerHTML = "";
    this.bag.forEach((item) => {
        var bagItem = document.createElement("div");
        var index = this.bag.indexOf(item);
        var dec = document.createElement("div");
        var inc = document.createElement("div");
        var qty = document.createElement("div");
        dec.id = `dec${index}`;
        inc.id = `inc${index}`;
        qty.id = `qty${index}`;
        dec.classList.add("bagItemQuantSub");
        inc.classList.add("bagItemQuantAdd");
        qty.classList.add("bagItemQuant");
        dec.innerHTML = "-";
        inc.innerHTML = "+";
        qty.innerHTML = `${item.quantity}`;
        qty.style.fontSize = "1.2em";
        bagItem.classList.add("bagItem");
        bagItem.id = index;
        bagItem.innerHTML = `
        <div class="bagItemImage"><img src="${item.price_data.images[0]}"/></div>
        <div class="bagItemCont">
            <div class="bagItemName">${item.price_data.product_data.name}</div>
            <div class="bagItemSize">${item.price_data.product_data.metadata.size}</div>
            <div class="bagItemDesc">${item.price_data.product_data.metadata.desc}</div>
            <div class="bagItemPrice">$${item.price_data.product_data.metadata.price} USD</div>
            <div class="bagItemQuantity" id="qtyBlock${index}"></div>
        </div>
        `
        bagCont.appendChild(bagItem);
        this.shadowRoot.getElementById(`qtyBlock${index}`).appendChild(dec);
        this.shadowRoot.getElementById(`qtyBlock${index}`).appendChild(qty);
        this.shadowRoot.getElementById(`qtyBlock${index}`).appendChild(inc);
        this.shadowRoot.getElementById("cartSubTotalVal").innerHTML = `$${this.bag.reduce((acc, item) => {
            return acc + (item.price_data.product_data.metadata.price * item.quantity);
        }, 0)} USD`;
        dec.addEventListener("click", (e) => {
            this.decreaseQuantity(e);
        });
        inc.addEventListener("click", (e) => {
            this.increaseQuantity(e);
        });
    })
}

toggleCheckout() {
    var checkoutScreen = document.getElementById("checkout");
    document.getElementById("checkout").innerHTML = "";
    this.initialize();
    this.checkoutBuilt = true;
    checkoutScreen.style.opacity = "1";
    checkoutScreen.style.pointerEvents = "auto";
    checkoutScreen.style.scale = "1";
    this.shadowRoot.getElementById("productInfo").style.pointerEvents = "none";
    this.shadowRoot.getElementById("cartItems").style.pointerEvents = "none";
    this.shadowRoot.getElementById("addtoCart").style.pointerEvents = "none";
}

hideCheckout() {
    var checkoutScreen = document.getElementById("checkout");
    checkoutScreen.style.opacity = "0";
    checkoutScreen.style.pointerEvents = "none";
    checkoutScreen.style.scale = "2";
}
  
toggleRequest(e) {
    this.largeGalleryToggle(e);
    if (e != undefined) {
        // this.largeGalleryToggle(e);
        var selected =  e.target.id;
        var product = this.shadowRoot.getElementById(selected).getAttribute("data-name");
        this.type = this.shadowRoot.getElementById(selected).getAttribute("data-type");
        //
        var lookNum = this.shadowRoot.getElementById(selected).getAttribute("data-look");
        var choicePre = this.shadowRoot.getElementById(selected).getAttribute("data-p");
    } else {
        this.type = "viewBag";
    }
    var body = this.shadowRoot.getElementById("request");
    var external = this.shadowRoot.getElementById("linkOutPage");
    var atc = this.shadowRoot.getElementById("addtoCart");
    var choice = choicePre + "External";
    var link = choicePre + "ExtLink";
    var item = Number(lookNum);
    //
    this.shadowRoot.getElementById("reqProduct").value = product;
    var pinnerArray = this.shadowRoot.querySelectorAll(".productImgInner");

    // pinnerArray.forEach((el) => {
    //     //
    //     if (this.externalOpen != true) {
    //         // Local 
    //         this.shadowRoot.getElementById("request").style.pointerEvents = "none";
    //         this.shadowRoot.getElementById("request").style.transition = ".3s all"
    //         this.shadowRoot.getElementById("request").style.opacity = "0";
    //         this.requestOpen = false;
    //         return;
    //     } else if (this.externalOpen === true) {
    //         // External
    //         this.shadowRoot.getElementById("linkOutPage").style.pointerEvents = "none";
    //         this.shadowRoot.getElementById("linkOutPage").style.transition = ".3s all"
    //         this.shadowRoot.getElementById("linkOutPage").style.opacity = "0";
    //         this.requestOpen = false;
    //         this.externalOpen = false;
    //     }
    // })
    
    //
    if (this.requestTogAdded1 === false) {
        this.requestTogAdded1 = true;
        this.shadowRoot.getElementById("returnBut").addEventListener("click", (e) => {
            this.toggleRequest(e)
        });
        this.shadowRoot.getElementById("returnBut2")?.addEventListener("click", (e) => {
            this.toggleRequest(e)
        });
    }

    if (this.type === "RTO") {
            // Request to Order
            this.shadowRoot.getElementById("main").style.backgroundColor = "rgba(0,0,0,1)";
            this.externalOpen = false;
            this.shadowRoot.getElementById("request").style.pointerEvents = "auto";
            gsap.to(body, {
                duration: .3,
                opacity: "100%",
            })
            this.requestOpen = true;
            this.shadowRoot.getElementById("returnBut").setAttribute("data-look", `${lookNum}`);
        return;
    } else if (this.type === "EON") {
         // External Order Now
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
        return;
    } else if (this.type === "ATO" || this.type === "MTO") {
        // Available to Order or Made to Order
        this.pid = choicePre + "Pid";
        this.pName2 = choicePre + "Name";
        this.price = choicePre + "Price";
        this.item = item;
        this.prodImg = `Product${choicePre.replace("P","")}`;
        this.desc = choicePre + "Details";
        var pSizes = choicePre + "Sizes";
        this.category = choicePre + "Cat";
        this.getSizes(item, pSizes);
        this.shadowRoot.getElementById("cpSizeSel").setAttribute("data-cat", `${this.products[item][this.category]}`);
        var size = this.shadowRoot.getElementById("cpSizeSel");

        if (size.value === "Single") {
            this.shadowRoot.getElementById("addtoBag").innerHTML = `Add to Bag`;
        } else {
            this.shadowRoot.getElementById("addtoBag").innerHTML = `Add ${size.value} to Bag`;
        }
        
        if (this.scBuilt === false) {
            this.shadowRoot.getElementById("cpSize").addEventListener("click", () => {
                this.shadowRoot.getElementById("addtoBag").innerHTML = `Add ${size.value} to Bag`;
                this.toggleSizeChart(this.products[item][this.category]);
            })
            this.shadowRoot.getElementById("cpSizeSel").addEventListener("change", () => {
                this.shadowRoot.getElementById("addtoBag").innerHTML = `Add ${size.value} to Bag`;
            })
        }

        this.shadowRoot.getElementById("cpDesc").innerHTML = this.products[item][this.desc];
        this.shadowRoot.getElementById("cpPrice").innerHTML = `$${this.products[item][this.price]} USD`;
        this.shadowRoot.getElementById("cpName").innerHTML = this.products[item][this.pName2];
        this.shadowRoot.getElementById("gTag").innerHTML = this.products[item].Type + ":";
        atc.style.pointerEvents = "auto";
        gsap.to(atc, {
            duration: .3,
            opacity: "100%",
        })
        if (this.requestTogAdded3 === false) {
            this.requestTogAdded3 = true;
            // need to be a variable outside of this block
            this.shadowRoot.getElementById("returnButLink3").addEventListener("click", (e) => {
                this.toggleRequest(e)
                var atc = this.shadowRoot.getElementById("addtoCart");
                atc.style.pointerEvents = "none";
                atc.style.opacity = "0";
                atc.style.transition = ".3s all";
            });
            this.shadowRoot.getElementById("shopNowCH").addEventListener("click", () => {
                this.toggleBag();
            })
            this.shadowRoot.getElementById("addtoBag").addEventListener("click", () => {
                var sel = choicePre.replace("P","Product");
                var size2 = this.shadowRoot.getElementById("cpSizeSel");
                this.addToBag(this.products[this.item][this.pid], size2.value, this.products[this.item][this.pName2], this.products[this.item][this.prodImg], this.products[this.item][this.desc], this.products[this.item][this.price]);
            })
        }
        return;
    } else if (this.type === "DAI") {
        // Digital Asset Internal
    } else if (this.type === "viewBag") {
        if (window.dtmenuOpen === false) {
            document.getElementById("getUniMenu").toggleMenu();
            if (this.bag.length > 0) {
                if (document.getElementById("altBagIcon")) {
                    document.getElementById("altBagIcon").style.display = "grid";
                }
            }
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
    var selected =  e?.target.id;
    var type = this.shadowRoot.getElementById(selected)?.getAttribute("data-type");
    var body = this.shadowRoot.getElementById("request");
    var external = this.shadowRoot.getElementById("linkOutPage");
    var atc = this.shadowRoot.getElementById("addtoCart");
    //
    switch (type) {
        case "RTO":
            external.style.pointerEvents = "none";
            external.style.opacity = "0";
            external.style.transition = ".3s all";
            atc.style.pointerEvents = "none";
            atc.style.opacity = "0";
            atc.style.transition = ".3s all";
        break;
        case "EON":
            body.style.pointerEvents = "none";
            body.style.opacity = "0";
            body.style.transition = ".3s all";
            atc.style.pointerEvents = "none";
            atc.style.opacity = "0";
            atc.style.transition = ".3s all";
        break;
        case "ATO":
            body.style.pointerEvents = "none";
            body.style.opacity = "0";
            body.style.transition = ".3s all";
            external.style.pointerEvents = "none";
            external.style.opacity = "0";
            external.style.transition = ".3s all";
        break;
        case "MTO":
            body.style.pointerEvents = "none";
            body.style.opacity = "0";
            body.style.transition = ".3s all";
            external.style.pointerEvents = "none";
            external.style.opacity = "0";
            external.style.transition = ".3s all";
        break;
        // case "DAI":
        //     body.style.pointerEvents = "none";
        //     body.style.opacity = "0";
        //     body.style.transition = ".3s all";
        //     external.style.pointerEvents = "none";
        //     external.style.opacity = "0";
        //     external.style.transition = ".3s all";
        //     atc.style.pointerEvents = "none";
        //     atc.style.opacity = "0";
        //     atc.style.transition = ".3s all";
        // break;
        default:
            body.style.pointerEvents = "none";
            body.style.opacity = "0";
            body.style.transition = ".3s all";
            external.style.pointerEvents = "none";
            external.style.opacity = "0";
            external.style.transition = ".3s all";
            atc.style.pointerEvents = "none";
            atc.style.opacity = "0";
            atc.style.transition = ".3s all";
            if (this.shadowRoot.getElementById("InfoImgs").style.display === "block") {
                atc.style.pointerEvents = "auto";
                atc.style.opacity = "1";
                atc.style.transition = ".3s all";
            }
            this.shadowRoot.getElementById("cartItems").style.opacity = "0";
            this.shadowRoot.getElementById("cartItems").style.pointerEvents = "none";
            this.shadowRoot.getElementById("cartItems").style.scale = "2";
        break;
    }
    //
    if (e) {
        if (e.target.id.includes("Product")) {
            switch (e.target.id) {
                case "Product1":
                    this.currentProduct = 1;
                break;
                case "Product2":
                    this.currentProduct = 2;
                break;
                case "Product3":
                    this.currentProduct = 3;
                break;
            }
        } else {
            switch (e.target.id) {
                case "pp1":
                    this.currentProduct = 1;
                break;
                case "pp2":
                    this.currentProduct = 2;
                break;
                case "pp3":
                    this.currentProduct = 3;
                break;
            }
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

        if (largeImages === 1) {
            this.shadowRoot.getElementById("InfoImgs").style.display = "grid";
            this.shadowRoot.getElementById("InfoImgs").style.gridTemplateColumns = "1fr";
            this.shadowRoot.getElementById("InfoImgs").style.gridTemplateRows = "1fr";
            this.shadowRoot.getElementById("InfoImgs").style.justifyItems = "center";
            this.shadowRoot.getElementById("InfoImgs").style.alignItems = "center";
        } else if (largeImages > 1) {
            this.shadowRoot.getElementById("InfoImgs").style.display = "block";
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
  
  syncedSlide() {
    const products = this.shadowRoot.querySelector("#products");
    const thumbs = this.shadowRoot.getElementById("thumbnails");
    const slider = this.shadowRoot.getElementById("sliderEl");

    // Update slider's max value based on products' scrollWidth
    const updateSliderMax = () => {
        const maxScrollLeft = products.scrollWidth - products.clientWidth;
        slider.max = maxScrollLeft;
    };

    // Call this function once initially, and whenever the content might change
    updateSliderMax();

    products.addEventListener("scroll", () => {
        if (!this.sliding) {
            // Calculate the percentage of the scroll
            const scrollPercent = products.scrollLeft / (products.scrollWidth - products.clientWidth);
            // Update slider value based on scroll percentage
            slider.value = scrollPercent * slider.max;

            // Update thumbnails' scroll position based on slider's value
            const thumbScrollPercent = slider.value / slider.max;
            thumbs.scrollLeft = thumbScrollPercent * (thumbs.scrollWidth - thumbs.clientWidth);

            // Update slider background based on value
            slider.style.background = `linear-gradient(to right, #ff002d ${slider.value * 100 / slider.max}%, #486965 ${slider.value * 100 / slider.max}%)`;
        }
    });

    slider.addEventListener("input", () => {
        this.sliding = true;

        // Calculate the percentage of the slider value
        const sliderPercent = slider.value / slider.max;
        // Update products' and thumbs' scroll position based on slider's value
        products.scrollLeft = sliderPercent * (products.scrollWidth - products.clientWidth);
        thumbs.scrollLeft = sliderPercent * (thumbs.scrollWidth - thumbs.clientWidth);

        // Update slider background based on value
        slider.style.background = `linear-gradient(to right, #ff002d ${slider.value * 100 / slider.max}%, #486965 ${slider.value * 100 / slider.max}%)`;
    });

    slider.addEventListener("mouseout", () => {
        setTimeout(() => {
            this.sliding = false;
        }, 1000);
    });
}


   async connectedCallback() {
        this.render();
        await this.getProducts();
        console.log("products",this.products);
        this.loadShop();
        // this.shadowRoot.getElementById("sliderEl").addEventListener("input", this.progressScript.bind(this));
        this.shadowRoot.getElementById("submitRequest").addEventListener("click", this.submitRequest.bind(this));
        this.shadowRoot.getElementById("returnButLink4").addEventListener("click", this.toggleBag.bind(this))
        this.shadowRoot.getElementById("checkoutBut").addEventListener("click", this.toggleCheckout.bind(this));
        // setTimeout(() => {
        //     this.smoothScroll();
        // }, 300)
        this.syncedSlide();
    }

    // EXTERNAL CSS
    // #checkout {
    //     width: 100%;
    //     height: 100%;
    //     position: fixed;
    //     right: 0;
    //     top: 0;
    //     z-index: 10;
    //     display: grid;
    //     grid-template-columns: 1fr;
    //     grid-template-rows: 1fr;
    //     align-items: center;
    //     justify-items: center;
    //     background-color: white;
    //   }

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
                    height: 100svh;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 80% 10% 10%;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    left: 0;
                    top: 0;
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

               .faint {
                opacity: .2;
                pointer-events: none;
                user-select: none;
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

                .productCTA:hover .rcta {
                    opacity: 1;
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
                    background: #486965 !important;
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

                .productCTA:hover {
                    border: .5px solid var(--accent);
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
                    padding: 2% 5%;
                    letter-spacing: 2px;
                    font-size: .8em;
                    cursor: pointer;
                    transition: .3s all;
                    color: var(--accent);
                    opacity: 0;
                    text-align: center;
                }

                .rcta:hover {
                    color: var(--accent);
                    opacity: 1;
                }

                #linkOutPage {
                    width: 31%;
                    height: 64%;
                    position: fixed;
                    right: 0%;
                    border-left: 1px solid #ff002d;
                    top: 18%;
                    z-index: 10;
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
                    top: 18%;
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

                #addtoCart {
                    width: 31%;
                    height: 64%;
                    position: fixed;
                    right: 0%;
                    border-left: 1px solid #ff002d;
                    top: 18%;
                    z-index: 5;
                    background-color: black;
                    opacity: 0;
                    padding-left: 2%;
                    padding-right: 5%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 10% 10% 5% 10% 10% 10% 25% 20%;
                    user-select: none;
                    display: relative;
                    pointer-events: none;
                }

                #cartPage {
                    width: 31%;
                    height: 64%;
                    position: fixed;
                    right: 0%;
                    border-left: 1px solid #ff002d;
                    top: 18%;
                    z-index: 6;
                    background-color: black;
                    opacity: 0;
                    padding-left: 2%;
                    padding-right: 5%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 20% 5% 5% 5% 10% 10% 25% 20%;
                    user-select: none;
                    display: relative;
                    scale: 2;
                    pointer-events: none;
                    color: var(--accent);
                    transition: .5s all;
                    transform-origin: left;
                }

                #cartSubTotalVal {
                    color: var(--secondary);
                    letter-spacing: 2px;
                }

                .blocker {
                    grid-column: 1 / 3;
                }

                #subbuttonsWrapper, #cartButWrapper {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-items: center;
                    align-items: center;
                    grid-column: 1 / 3;
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

                #cpName, #cpPrice, #cpCat, #cpShip, #cpDesc {
                    color: var(--accent);
                }

                #cpName {
                    font-size: 1.1em;
                }

                #cpPrice {
                    grid-column: 2 / 3;
                }

                #cpCat {
                    grid-column: 1 / 3;
                }

                #cpDesc {
                    grid-column: 1 / 3;
                }

                #cpSize {
                    grid-column: 1 / 3;
                    color: var(--secondary);
                    font-size: .8em;
                    letter-spacing: 2px;
                    cursor: pointer;
                }

                #cpSize:hover {
                    text-decoration: underline;
                    transition: .3s all;
                }

                #addtoBag, #checkoutBut {
                    width: 100%;
                    border: 1px solid var(--accent);
                    grid-column-start: 1;
                    grid-column-end: 3;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    color: var(--accent);
                    transition: .3s all;
                    cursor: pointer !important;
                }

                #addtoBag:hover, #checkoutBut:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: BS-B;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    cursor: pointer !important;
                }

                #checkoutBut {
                    border: 1px solid var(--secondary);
                    background-color: var(--secondary);
                    color: black;
                }

                #checkoutBut:hover {
                    background-color: var(--secondary);
                    color: black;
                    font-family: BS-B;
                    letter-spacing: 4px;
                }

                #returnBut2 {
                    width: 95%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: start;
                    align-items: end;
                }
                
                .viewBag {
                    width: 95%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: end;
                    align-items: end;
                    color: var(--secondary);
                }

                #cpSizeSel {
                    pointer-events: auto;
                    background: transparent;
                    border: 1px solid var(--secondary);
                    color: var(--secondary);
                    outline: none;
                    font-size: .9em;
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

                #shopNow, #shopNowCH {
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

                #shopNowCH {
                    background-color: var(--secondary);
                    color: black;
                }

                a {
                    text-decoration: none;
                    color: var(--accent);
                }

               #returnButLink, #returnButLink3, #returnButLink4 {
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
                    cursor: pointer;
                }

                .jRight {
                    text-align: right;
                }

                #returnButLink4 {
                    color: #ff002d !important;
                }

                #shopNow:hover {
                    scale: 1.1;
                    border: 1px solid var(--accent); 
                }

                #shopNowCH:hover {
                    scale: 1.1;
                    color: black;
                    font-family: BS-B;
                    letter-spacing: 2px;
                }

                #returnButLink:hover, #returnButLink3:hover, #returnButLink4:hover  {
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
                  .loadIcon2 {
                    width: 400px;
                    height: 400px;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    animation: spin 10s linear infinite, pulse 3s ease-in-out infinite;
                    border: 6px dotted var(--accent);
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
                    overflow-x: hidden;
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

                  #InfoImgs {
                    width: 60%;
                    height: 100%;
                    overflow-y: scroll;
                    scroll-behavior: smooth;
                  }

                  #InfoImgs img {
                    width: 100%;
                  }

                  #cartItems {
                    width: 55%;
                    height: 80%;
                    overflow-y: scroll;
                    scroll-behavior: smooth;
                    display: grid;
                    top: 0%;
                    z-index: 6;
                    background-color: black;
                    opacity: 0;
                    padding-left: 5%;
                    padding-right: 2%;
                    padding-top: 10%;
                    padding-bottom: 10%;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto;
                    user-select: none;
                    scale: 2;
                    transition: .5s all;
                    transform-origin: right;
                    position: absolute;
                    grid-row-gap: 2%;
                    pointer-events: none;
                  }

                  .bagItem {
                    width: 95%;
                    height: 250px;
                    display: grid;
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    border: .5px solid var(--accent);
                    color: var(--accent);
                    font-size: .9em;
                  }

                  .bagItemImage {
                    width: 90%;
                    height: 90%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                  }

                .bagItemImage img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .bagItemQuantity {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    }

                .bagItemCont {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 25% 10% 30% 5% 30%;
                    justify-items: start;
                    align-items: center;
                }

                .bagItemQuantAdd {
                    color: var(--secondary);
                    font-size: 1.2em;
                    cursor: pointer;
                    transition: .3s all;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                }

                .bagItemQuantSub {
                    color: var(--primary);
                    font-size: 1.2em;
                    cursor: pointer;
                    transition: .3s all;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                }

                .bagItemQuantAdd:hover, .bagItemQuantSub:hover {
                    scale: 2;
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
                
                #sizeChart {
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    left: 0%;
                    top: 0%;
                    z-index: 20;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    background-color: rgba(0,0,0,0.7);
                    transition: .5s all;
                }

                #sizeChartCont {
                    width: 40%;
                    height: 40%;
                    background-color: black;
                    border: .5px solid var(--primary);
                }

                #sizeChartHead {
                    width: 90%;
                    height: 15%;
                    display: grid;
                    float: left;
                    grid-template-columns: 80% 20%;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    border-bottom: .5px solid var(--primary);
                    padding-left: 10%;
                }

                #sizeChartClose {
                    font-size: 1.5em;
                    cursor: pointer;
                    transition: .3s all;
                    transform: rotate(90deg);
                }

                #sizeChartClose:hover {
                    scale: 1.8;
                    transform: rotate(90deg);
                }

                #sizeDetails {
                    width: 80%;
                    height: 85%;
                    float: left;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    align-items: center;
                    justify-items: center;
                    padding-left: 10%;
                    padding-right: 10%;
                }
                
                .sizeChartRow2 {
                    width: 100%;
                    height: 20%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: start;
                    color: var(--secondary);
                    font-size: .9em;
                }

                .sizeChartRow3 {
                    width: 100%;
                    height: 20%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: start;
                    color: var(--secondary);
                    font-size: .9em;
                }

                .sizeChartRow4 {
                    width: 100%;
                    height: 20%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: start;
                    color: var(--secondary);
                    font-size: .9em;
                }

                #loadcon {
                    width: 100%;
                    height: 100%;
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: rgba(0,0,0,0.6);
                    z-index: 20;
                }

                #loadbox {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                }

                .loadinScreen2 {
                    font-size: 1.2em;
                    color: var(--accent);
                    position: absolute;
                    animation: blink 4s ease-in-out infinite;
                  }
                  @keyframes spin {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }

                @media screen and (max-width: 800px) {
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

                    #shopNowCH {
                        width: 100%;
                        height: 60%;
                    }

                    #returnButLink3 {
                        width: 60%;
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

                      #cartPage {
                        width: 90%;
                        height: 54svh;
                        border-left: none;
                        top: auto;
                        bottom: 0%;
                        padding-left: 5%;
                        padding-right: 5%;
                        position: fixed;
                        grid-template-rows: 20% 5% 5% 5% 10% 10% 10% 20%;
                    }

                    #returnButLink4 {
                        width: 50%;
                    }

                    #cartButWrapper {
                        grid-template-rows: 1fr;
                    }

                    #checkout {
                        height: 85svh !important;
                        padding-top: 15svh !important;
                        overflow-y: scroll;
                    }

                    .loadIcon2 {
                        width: 300px;
                        height: 300px;
                      }

                    #loadcon {
                        background-color: rgba(0,0,0,0.8);
                    }

                      #addtoCart {
                        width: 90%;
                        height: 80svh;
                        margin-bottom: 50%;
                        border-left: none;
                        border-top: 1px solid #ff002d;
                        padding-top: 5%;
                        position: absolute;
                        top: 50svh;
                        float: left;
                        grid-template-rows: 5% 10% 10% 5% 6% 2% 20%;
                      }

                      #checkoutBut {
                        font-family: BS-B;
                      }

                      #sizeChartCont {
                        width: 80%;
                        height: 50%;
                      }

                      #cartItems {
                        width: 90%;
                        height: 25svh;
                        padding-left: 5%;
                        padding-right: 5%;
                        padding-top: 20svh;
                        padding-bottom: 10%;
                        grid-template-columns: 1fr;
                      }

                      .blocker {
                        border-top: 1px solid var(--primary);
                      }

                      #cpSizeSel {
                        pointer-events: auto;
                        background: transparent;
                        border: 1px solid var(--secondary);
                        color: var(--secondary);
                        outline: none;
                        font-size: 1.3em;
                        padding: 2% 8%;
                    }

                    #cpPrice {
                        font-size: 1.1em;
                        justify-self: end;
                    }

                    #cpName {
                        font-size: 1.1em;
                    }

                      #InfoImgs {
                        width: 90%;
                        height: 38svh;
                        padding-left: 5%;
                        padding-right: 5%;
                        padding-top: 12svh;
                        float: left;
                        overflow-y: scroll;
                        scroll-behavior: smooth;
                        position: static;
                      }

                      #productInfo {
                        overflow-y: scroll;
                      }

                      #cpSize {
                        grid-column: 2 / 3;
                        font-size: .9em;
                        padding-top: 5%;
                        text-decoration: underline;
                      }

                    .rcta {
                        font-size: .8em;
                        opacity: 1;
                    }

                    .productCTA:hover {
                        border: none;
                    }

                    #svgContainer, #bagCtn {
                        opacity: 0% !important;
                        pointer-events: none;
                    }
                    
                }
                  
            </style>
            <div id="main">
                <div id="loadcon">
                    <div id="loadbox">
                        <div id="loading" class="loadinScreen2">LOADING CHECKOUT...</div>
                        <div class="loadIcon2"></div>
                    </div>
                </div>
                <div id="productInfo">
                    <div id="InfoImgs">
                        <img src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/scogeShop/P2-L4-cC-SCOGE.png"/>
                    </div>
                    <div id="cartItems"></div>
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
                    <form id="addtoCart">
                        <div id="cpName">Black Natulitus Top</div>
                        <div id="cpPrice">$405 USD</div>
                        <div>
                            <select id="cpSizeSel" name="Size">
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="X-Large">X-Large</option>
                                <option value="Single">Single Size</option>
                            </select>
                        </div>
                        <div id="cpSize">Size Guide</div>
                        <div id="cpDesc">Description</div>
                        <div id="cpCat">Made-to-Order: Ships tomorrow.</div>
                        <div id="addtoBag">Add to Bag</div>
                        <div></div>
                        <div id="subbuttonsWrapper">
                            <div id="shopNowCH" class="faint">VIEW BAG</div>
                            <div id="returnButLink3">< Return</div>
                        </div>
                    </form>
                    <div id="cartPage">
                        <div class="blocker"></div>
                        <div id="cartSubTotal">SUBTOTAL</div>
                        <div id="cartSubTotalVal" class="jRight">$300</div>
                        <div id="cartTax">STATE TAX</div>
                        <div id="cartTaxVal" class="jRight">Included</div>
                        <div id="cartShipping">SHIPPING</div>
                        <div id="cartShippingVal" class="jRight">Free Shipping</div>
                        <div id="cartTotal">TOTAL</div>
                        <div id="cartTotalVal" class="jRight">Calculated at checkout</div>
                        <div id="checkoutBut">CHECKOUT</div>
                        <div></div>
                        <div id="cartButWrapper">
                            <div id="returnButLink4">< Return</div>
                        </div>
                    </div>
                </div>
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