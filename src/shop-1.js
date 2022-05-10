import Commerce from "@chec/commerce.js";
import '@power-elements/stripe-elements';
// import Stripe from "stripe";

const VITE_CommerceKey =  import.meta.env.VITE_CommerceKey;
const VITE_StripeKey = import.meta.env.VITE_StripeKey;
// Init Commerce
const commerce = new Commerce(`${VITE_CommerceKey}`, true);
// // Init Stripe
// var stripe = Stripe(`${VITE_StripeKey}`);
// var elements = stripe.elements(); 
var allProducts = [];
var productsLoaded = false;
var currentShopProduct;
var shopPage = 1;
var currentCart;
var cartEmpty = true;
var selectedPSize = "";
var countriesObj = {};
var variantAbbr = "";
var countriesAdded = false;
var shippingMethodValue;
var shippingM = [];
var shippingId = "";
var card;
var stripeElements;
var pComplete;

class mobileShop1 extends HTMLElement {
     constructor() {
         super();
         this.shadow = this.attachShadow({mode: "open"})
     }

     get product() {
         return this.getAttribute('product');
     }

     set product(val) {
         this.setAttribute('product', val)
     }

     static get observedAttributes() {
         return ["product"];
     }

     attributeChangedCallback( prop, oldVal, newVal) {
        if (prop === 'product') {
            this.render()
        }
     }

     // SHOP

     // Close shop  
     closeMobileShop = () => {
        document.getElementById("mobileShop").style.display = "none";
     }

     // LoadShop
     loadShop = async () => {
        this.shadow.getElementById("LoadBG").style.display = "grid";
        var shopParent = this.shadow.getElementById("mb1");
        await commerce.products
    .list({sortDirection: 'desc'})
    .then((product) => allProducts.push(product.data));
    allProducts[0].forEach((product) => {
    var productCont = document.createElement("div");
    productCont.setAttribute("class", "productContainer");
    productCont.setAttribute("id", product.id);
    // productCont.setAttribute("onclick", `viewProduct(this)`);
    this.shadow.getElementById("productEdition").addEventListener('click', this.toggleTerms);
    productCont.addEventListener('click', this.viewProduct);
    shopParent.appendChild(productCont);
    productCont.innerHTML = `
    <img class="shopProducts" style="opacity:0%;" onload="imageFade(this)" src="${product.assets[0].url}">
    `;
    productsloaded = true;
    this.shadow.getElementById("LoadBG").style.display = "none";
    });
    commerce.cart.empty();
     }

     // Open Product View
    viewProduct = (e) => {
        var currentProduct = e.target.parentElement.id;
        currentShopProduct = allProducts[0].filter((product) => {
          return product.id.includes(`${currentProduct}`);
        });
        this.shadow.getElementById("mb2").style.display = "block";
        shopPage = 2;
        // Name
        this.shadow.getElementById("pName").innerHTML = `
        ${currentShopProduct[0].name}`;
        // Cat
        currentShopProduct[0].categories.forEach((category) => {
            if (category.name === "É") {
              this.shadow.getElementById("eSymbol1").style.display = "block";
            }
            if (category.name === "SÉ") {
               this.shadow.getElementById("eSymbol2").style.display = "block";
            }
          });
        // Desc
        this.shadow.getElementById("pDesc").innerHTML =
          currentShopProduct[0].description;
        // Price
        this.shadow.getElementById("proPrice").innerHTML =
          currentShopProduct[0].price.formatted_with_symbol;
        // Check Availability
        if (currentShopProduct[0].inventory.available === 0) {
            this.shadow.getElementById("archived").style.display = "grid";
        }
        // Images
        var imageContainer = this.shadow.getElementById("allImages");
        var imageCount = 0;
        this.shadow.getElementById(
          "mainImageCont"
        ).src = `${currentShopProduct[0].assets[0].url}`;
        currentShopProduct[0].assets.forEach((image) => {
            if (imageCount <= 3) {
                var imageElement = document.createElement("img");
                imageElement.setAttribute("src", `${image.url}`);
                imageElement.setAttribute("id", `${image.url}`);
                imageElement.addEventListener('click', this.changeToMainPic);
                imageContainer.appendChild(imageElement);
                imageCount++
            }
            if (image.filename === "sizeChart.png") {
                this.shadow.getElementById("noti").innerHTML = `
                <img class="sizeChartImage" src="${image.url}"/>
              `
                this.shadow.getElementById("pSizeGuide").addEventListener('click', this.noti1)
              }
        });
        // Check Size Availability
        this.checkSize();
    };

    // CHECK SIZE AVAILABILITY 
    checkSize = () => {
        currentShopProduct[0].variant_groups[0].options.forEach((size) => {
            this.shadow.getElementById(`${size.name}`).style.opacity = "100%";
            this.shadow.getElementById(`${size.name}`).style.cursor = "pointer";
            this.shadow.getElementById(`${size.name}`).addEventListener('click', this.selectSize);
          if (size.name === "SingleSize") {
            var theRest = this.shadow.querySelectorAll(".sizeButtons");
            this.shadow.getElementById("sizesCont").style.gridTemplateColumns =
              "1fr";
              this.shadow.getElementById("sizesCont").style.justifyItems = "end";
            theRest.forEach((element) => {
              if (element.id != "SingleSize") {
                element.style.display = "none";
              }
            });
            this.shadow.getElementById("SingleSize").style.display = "grid";
          }
        });
    }

    // Noti 1
    noti1 = () => {
        this.shadow.getElementById("noti").style.display = "block";
        if (pComplete === true) {
            this.shadow.getElementById("noti").addEventListener('click', this.return);
            pComplete = false;
        } else {
            this.shadow.getElementById("noti").addEventListener('click', this.closeNoti);
        }
        
    }
    closeNoti = () => {
        this.shadow.getElementById("noti").style.display = "none";
        pComplete = false;
    }

    // Return Sizes to normal
    returnSize = () => {
    var theRest = this.shadow.querySelectorAll(".sizeButtons");
    theRest.forEach((element) => {
        if (element.id != "SingleSize") {
        element.style.display = "grid";
        }
        this.shadow.getElementById(element.id).style.opacity = ".3";
    });
    this.shadow.getElementById("SingleSize").style.display = "none";
    this.shadow.getElementById("sizesCont").style.gridTemplateColumns =
        "1fr 1fr 1fr 1fr";
    this.shadow.getElementById("sizesCont").style.justifyItems = "center";
    };

    // Change to Main Imag
    changeToMainPic = (e) => {
    var selectedImg = e.target.id;
    this.shadow.getElementById(
        "mainImageCont"
    ).src = `${selectedImg}`;
    };

    // Retun Button 
    return = () => {
        var main = this.shadow.getElementById("main");
        var allProPage = this.shadow.getElementById("mb1");
        var proPage = this.shadow.getElementById("mb2");
        var cartPage = this.shadow.getElementById("mb3");
        var inputPage = this.shadow.getElementById("checkoutInputs");
        var shipBut = this.shadow.getElementById("shippingButton");
        // var cartItemsPage = this.shadow.getElementById("cartItems");
        var confirmPage = this.shadow.getElementById("mb4");
        this.shadow.getElementById("cartItems").innerHTML = "";
        this.shadow.getElementById("addItemButton").innerHTML = "< SELECT SIZE";
        this.shadow.getElementById("archived").style.display = "none";
        this.shadow.getElementById("LoadBG").innerHTML = `<div class="loader"></div>`;
        this.shadow.getElementById("noti").style.display = "none";
        switch (shopPage) {
            case 1:
                this.closeMobileShop();
            break;
            case 2:
                proPage.style.display = "none";
                this.shadow.getElementById("allImages").innerHTML = "";
                this.shadow.getElementById("eSymbol1").style.display = "none";
                this.shadow.getElementById("eSymbol2").style.display = "none";
                this.returnSize();
                shopPage = 1;
            break;
            case 3:
                cartPage.style.display = "none";
                proPage.style.display = "none";
                this.shadow.getElementById("allImages").innerHTML = "";
                this.returnSize();
                selectedPSize = "";
                this.shadow.getElementById("addItemButton").removeAttribute("onclick");
                this.shadow.getElementById("cartStatus").removeEventListener('click', this.checkout);
                this.shadow.getElementById("cartStatus").addEventListener('click', this.viewCart);
                this.shadow.getElementById("cartStatus").innerHTML = "VIEW CART"
                shopPage = 1;
            break;
            case 4:
                inputPage.style.display = "none";
                shipBut.innerHTML = "SHIPPING & BILLING";
                shipBut.removeEventListener('click', this.return);
                shipBut.addEventListener('click', this.shipping);
                this.viewCart();
                shopPage = 3;
            break;
            case 5:
                // Close Shop, return thinsg to normal
                cartPage.style.display = "none";
                inputPage.style.display = "none";
                proPage.style.display = "none";
                this.shadow.getElementById("allImages").innerHTML = "";
                this.shadow.getElementById("noti").removeEventListener('click', this.return);
                this.returnSize();
                selectedPSize = "";
                shopPage = 1;
                this.shadow.getElementById("LoadBG").innerHTML = `<div class="loader"></div>`;
            break;
        }
    }

    // Choose Size Variant
    selectSize = (e) => {
        var theRest = this.shadow.querySelectorAll(".sizeButtons");
        theRest.forEach((element) => {
            this.shadow.getElementById(element.id).style.backgroundColor = "";
            this.shadow.getElementById(element.id).style.color = "";
        });
    if (e.target.style.opacity === "1") {
      selectedPSize = e.target.id;
      this.shadow.getElementById("addItemButton")
        .addEventListener("click", this.addToCart);
        e.target.style.color = "white";
        e.target.style.backgroundColor = "#ff002d";
        this.shadow.getElementById("addItemButton").innerHTML = "ADD TO CART";
    } else {
      selectedPSize = "";
      this.shadow
        .getElementById("addItemButton")
        .removeEventListener("click", this.addToCart);
    }
    var sizeElements = document.getElementsByClassName("sizeButtons");
    for (let i = 0; i < sizeElements.length; i++) {
      sizeElements[i].style.color = "#ff002d";
    }
    };

    // Prep Cart and Add To Cart
    addToCart = async () => {
        this.shadow.getElementById("cartItems").innerHTML = "";
        this.shadow.getElementById("addItemButton").innerHTML = "ADDING";
        this.shadow.getElementById("LoadBG").innerHTML = `<div class="loader"></div>`;
        var selectedVariant = currentShopProduct[0].variant_groups[0].options.filter(
        (variant) => {
            return variant.name.includes(`${selectedPSize}`);
        }
        );
        this.shadow.getElementById("LoadBG").style.display = "grid";
        commerce.cart
        .retrieve()
        .then((cart) => {
            currentCart = cart;
        })
        .then(() => {
            if (cartEmpty === false) {
                var currentItem = currentCart.line_items.filter(obj => {
                    return obj.product_id === currentShopProduct[0].id})
                if (currentShopProduct[0].inventory.available > 0 && currentItem[0].quantity <= currentShopProduct[0].inventory.available - 1) {
                        commerce.cart
                .add(currentShopProduct[0].id, 1, {
                    [currentShopProduct[0].variant_groups[0].id]: selectedVariant[0].id,
                })
                .then(() => {
                    cartEmpty = false;
                    commerce.cart.retrieve().then((cart) => {
                    currentCart = cart;
                    this.shadow.getElementById("LoadBG").style.display = "none";
                    this.shadow.getElementById("addItemButton").innerHTML = "< SELECT SIZE";
                    this.shadow.getElementById("cartStatus").innerHTML = "VIEW CART";
                    var sizeElements = this.shadow.querySelectorAll(".sizeButtons");
                    sizeElements.forEach((size) => {
                        this.shadow.getElementById(`${size.id}`).style.color = "";
                        this.shadow.getElementById(`${size.id}`).style.backgroundColor = "";
                    });
                    // Update Total
                    this.shadow.getElementById("totalPrice").innerHTML =
                        cart.subtotal.formatted_with_symbol;
                    });
                    // productAdded();
                    selectedPSize = "";
                    this.shadow.getElementById("addItemButton").removeAttribute("onclick");
                    this.shadow.getElementById("cartStatus").addEventListener('click', this.viewCart);
                }); 
                } else {
                    this.shadow.getElementById("LoadBG").style.display = "none";
                    this.shadow.getElementById("addItemButton").innerHTML = "MAX INVENTORY";
                }
            } else {
                    commerce.cart
                .add(currentShopProduct[0].id, 1, {
                    [currentShopProduct[0].variant_groups[0].id]: selectedVariant[0].id,
                })
                .then(() => {
                    cartEmpty = false;
                    selectedPSize = "";
                    commerce.cart.retrieve().then((cart) => {
                    currentCart = cart;
                    this.shadow.getElementById("LoadBG").style.display = "none";
                    this.shadow.getElementById("addItemButton").innerHTML = "< SELECT SIZE";
                    this.shadow.getElementById("cartStatus").innerHTML = "VIEW CART";
                    this.shadow.getElementById("addItemButton").removeEventListener("click", this.addToCart);
                    var sizeElements = this.shadow.querySelectorAll(".sizeButtons");
                    sizeElements.forEach((size) => {
                        this.shadow.getElementById(`${size.id}`).style.color = "";
                        this.shadow.getElementById(`${size.id}`).style.backgroundColor = "";
                    });
                    // Update Total
                    this.shadow.getElementById("totalPrice").innerHTML =
                        cart.subtotal.formatted_with_symbol;
                    });
                    // productAdded();
                    selectedPSize = "";
                    this.shadow.getElementById("addItemButton").removeAttribute("onclick");
                    this.shadow.getElementById("cartStatus").addEventListener('click', this.viewCart);
                });    
            }
        });
    };

    // VIEW CART
    viewCart = () => {
        shopPage = 3;
        this.shadow.getElementById("mb3").style.display = "block";
        this.shadow.getElementById("addItemButton").innerHTML = "< SELECT SIZE";
        var cartBut = this.shadow.getElementById("cartStatus");
        this.shadow.getElementById("shippingButton").addEventListener('click', this.shipping);
        cartBut.innerHTML = "CHECKOUT";
        cartBut.removeEventListener('click', this.viewCart);
        cartBut.removeEventListener('click', this.checkout);
        // Add Line Items
        variantAbbr = "";
        currentCart.line_items.forEach((lineitem) => {
            var lineItemElement = document.createElement("div");
            lineItemElement.setAttribute("class", "productCont");
            this.shadow
            .getElementById("cartItems")
            .appendChild(lineItemElement);
            switch (lineitem.selected_options[0].option_name) {
            case "Small":
                variantAbbr = "S";
                break;
            case "Medium":
                variantAbbr = "M";
                break;
            case "Large":
                variantAbbr = "L";
                break;
            case "XLarge":
                variantAbbr = "XL";
                break;
            case "2XLarge":
                variantAbbr = "2XL";
                break;
            case "3XLarge":
                variantAbbr = "3XL";
                break;
            }
            lineItemElement.innerHTML = `
                <div class="pcLeft">
                    <img src="${lineitem.image.url}"> 
                </div>
                <div class="pcRight">
                    <p class="cartProName">${lineitem.name}</p>
                    <p class="cartProQty" id="${lineitem.name}Qty">QTY: <span class="active">(${lineitem.quantity})${variantAbbr}</span></p>
                    <p class="cartProPrice">${lineitem.price.formatted_with_symbol}</p>
                    <div class="quantityChange" name="${lineitem.product_id}">
                        <span class="active dec changeQty" id="${lineitem.id}" name="dec">-</span>
                        <span>|</span>
                        <span class="active inc changeQty" id="${lineitem.id}" name="inc">+</span>
                    </div>
                </div>
            `
            this.shadow.getElementById("termsButton").addEventListener('click', this.toggleTerms);
            var allElements = this.shadow.querySelectorAll('.changeQty');
            allElements.forEach((selectedEl)=>{
                selectedEl.addEventListener('click', this.changeQty);
            });
            lineItemElement.setAttribute("id", `${lineitem.id}Parent`);
        });
    }

    // TERMS
    toggleTerms = () => {
        this.noti1();
        this.shadow.getElementById("noti").innerHTML = `
        <div id="terms">
         <h1 class="alt">Terms & Conditions</h1><p>For designs marked with an <span class="active">(‘É’)</span> or <span class="active">(‘SÉ’)</span> please allow 15 working days for your order to be dispatched and tracking information.</p><p>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p><h2 class="alt">Shipping:</h2><p>Design prices include express shipping costs. For expedited shipping please contact info@scoge.co. </p><h2 class="alt">Returns & Exchanges:</h2><p>Please email info@scoge.co if you have any questions prior to purchase. Please view design size charts before purchasing for sizing clarification.</p><h2 class="alt">Finishes:</h2><p>Our designs exhibit intentional rough finishes and/or unconventional fittings. Designs labeled with an <span class="active">('SÉ')</span> are categorized as highly limited explorations, and are personally signed by its designer Starnilas Oge.</p><h2 class="alt"> Faulty Items:</h2><p>If you believe you received a faulty item, ie. Incorrect item, Incorrect Size, or Incomplete order, Please contact us via info@scoge.co with photos of the fault and your order number. All claims need to be logged within 7 days of receiving the item. Refunds will be processed if the item is proven faulty. We reserve the right to refuse a return if it does not meet our standards. Items stained or dirty will not be accepted.</p><h2 class="alt">Exchanges:</h2><p>SCOGÉ does not cover shipping costs for returns/exchanges. Returns, Refunds and Exchanges will be processed once the item is received in its original condition.</p>
         <h2 class="alt">Privacy:</h2><p>SCOGÉ highly respects your Privacy & Security. In developing SCOGÉ we are actively working to convert the entire SCOGÉ technical stack to a decentralized web3 stack. Any personal information received will not be shared with any third parties.</p><h2 class="alt">Taxes, Duties and Border Charges:</h2><p>SCOGÉ is not responsible for Taxes, Duties, Border Charges or Duty Reimbursement on any international orders. Please check your country’s border charges before making a purchase.</p><p>If you have any questions or concerns please do not hesitate to contact us before making your purchase. <span class="active">Info@Scoge.co</span></p>
        </div>
         `
    }

    // CHECK QTY
    checkQuantity = (product) => {
        var currentProd = allProducts[0].filter(obj => {
            return obj.id === product;
        })
        return currentProd[0].inventory.available;
    }

    // INC DEC
    changeQty = (e) => {
        this.shadow.getElementById("LoadBG").style.display = "grid";
        var item = e.target.getAttribute("id");
        var productM = e.target.parentElement.getAttribute("name");
        var qty = this.checkQuantity(productM);
        if (e.target.getAttribute('name') === "inc") {
            var selectedItem = currentCart.line_items.filter(obj => {
                return obj.id === item;
            })
            if (qty >= 2 && selectedItem[0].quantity <= qty -1) {
            commerce.cart.update(`${item}`, {quantity: selectedItem[0].quantity + 1}).then((response) => {
                this.shadow.getElementById("cartItems").innerHTML = "";
                this.shadow.getElementById("LoadBG").style.display = "none";
                this.shadow.getElementById("totalPrice").innerHTML = response.cart.subtotal.formatted_with_symbol;
                currentCart = response.cart;
                this.viewCart();
              });
            return 
            } else {
                e.target.style.opacity = ".3";
                this.shadow.getElementById("LoadBG").style.display = "none";
            }
        }
        if (e.target.getAttribute('name') === "dec") {
            var selectedItem = currentCart.line_items.filter(obj => {
                return obj.id === item;
            })
            commerce.cart.update(`${item}`, {quantity: selectedItem[0].quantity - 1}).then((response) => {
                this.shadow.getElementById("cartItems").innerHTML = "";
                this.shadow.getElementById("LoadBG").style.display = "none";
                this.shadow.getElementById("totalPrice").innerHTML = response.cart.subtotal.formatted_with_symbol;
                currentCart = response.cart;
                this.viewCart();
                if (response.cart.total_items === 0) {
                  var cartBut = this.shadow.getElementById("cartStatus");
                  cartEmpty = true;
                  this.return();
                  cartBut.innerHTML = "CART EMPTY";
                  cartBut.removeEventListener('click', this.viewCart);
                  this.shadow.getElementById("cartStatus").removeEventListener('click', this.checkout);
                  selectedPSize = "";
                }
              });
            return
        }
    }
    // SHIPING DEETS
    shipping = () => {
        shopPage = 4;
        var shipCut = this.shadow.getElementById("shippingButton");
        var cartBut = this.shadow.getElementById("cartStatus");
        this.shadow.getElementById("checkoutInputs").style.display = "grid";
        shipCut.innerHTML = "VIEW CART";
        shipCut.removeAttribute('click', this.shipping);
        shipCut.addEventListener('click', this.return);
        cartBut.innerHTML = "PAY NOW";
        cartBut.addEventListener('click', this.checkout);
        if (countriesAdded === false) {
            countriesAdded = true;
            // Add Country Inputs
            commerce.services.localeListCountries().then((response) => {
              countriesObj = response.countries;
              Object.keys(response.countries).forEach((country) => {
                var countryEl = document.createElement("option");
                var countrySelect = this.shadow.getElementById("inputCN");
                countryEl.setAttribute("value", country);
                countryEl.setAttribute("title", country);
                countryEl.innerHTML = `${countriesObj[country].substr(0, 20)}`;
                countrySelect.appendChild(countryEl);
              });
            });
          }
        this.shadow.getElementById("inputCN").addEventListener('change',this.states);
        this.shadow.getElementById("card-element").innerHTML = `
        <stripe-elements publishable-key="${VITE_StripeKey}" id="sCard" hide-postal-code
                 show-error generate="token" action="/my-endpoint">
        </stripe-elements>`
        //
        this.shadow.getElementById("sCard").addEventListener('ready', (e) => {
            card = e.path[0].element;
            var token = e.path[0].stripe.createToken(card);
            stripeElements = e.path[0].stripe;
        })
    }

    // States
    states = () => {
        var select = this.shadow.getElementById("inputCN");
        var selectedCountry = select.options[select.selectedIndex].value;
        var us2 = select.options[select.selectedIndex].title;
        var totalPrice = this.shadow.getElementById("totalPrice");
        this.shadow.getElementById("inputST").innerHTML = ``;
        if (selectedCountry === "US") {
          // countryEl.setAttribute("selected","");
          this.shadow.getElementById("inputSP").value = "$0.00 Free Shipping";
          shippingMethodValue = 1;
          totalPrice.innerHTML = currentCart.subtotal.formatted_with_symbol;
        }
        if (selectedCountry != "US") {
          this.shadow.getElementById("inputSP").value = "$70.00 Intl Shipping";
          shippingMethodValue = 3;
          totalPrice.innerHTML = `$${currentCart.subtotal.raw + 70}.00`;
        }
        if (us2 === "US2") {
          this.shadow.getElementById("inputSP").value = "$130.00 - Next Day";
          shippingMethodValue = 2;
          totalPrice.innerHTML = `$${currentCart.subtotal.raw + 130}.00`;
        }
        commerce.services.localeListSubdivisions(selectedCountry).then((response) => {
          var allStates = response.subdivisions;
          Object.keys(response.subdivisions).forEach((state) => {
            var stateEl = document.createElement("option");
            var stateSelect = this.shadow.getElementById("inputST");
            if (Object.keys(response.subdivisions).length <= 1) {
              var sel = document.createElement("option");
              sel.innerHTML = `Not Available.`;
              select.options[select.selectedIndex].innerHTML = "Select Country";
              this.shadow.getElementById("inputST").appendChild(sel);
            } else {
              stateEl.setAttribute("value", allStates[state]);
              stateEl.setAttribute("id", state);
              stateEl.innerHTML = allStates[state].substring(0, 20);
              stateSelect.appendChild(stateEl);
            }
          });
        });
    };

    // Checkout
    checkout = async () => {
        var fn = this.shadow.getElementById("inputFN").value;
        var ln = this.shadow.getElementById("inputLN").value;
        var address = this.shadow.getElementById("inputBD").value;
        var shippingMethod = this.shadow.getElementById("inputSP").value;
        var em = this.shadow.getElementById("inputEM").value;
        var cit = this.shadow.getElementById("inputCY").value;
        var zc = this.shadow.getElementById("inputZC").value;
        var sa = this.shadow.getElementById("inputSA").value;
        var select1 = this.shadow.getElementById("inputCN");
        var select2 = this.shadow.getElementById("inputST");
        var selectedCountry = select1.options[select1.selectedIndex].value;
        var selectedState = select2.options[select2.selectedIndex].id;
        var checkoutBut = this.shadow.getElementById("cartStatus");
        checkoutBut.removeEventListener('click', this.checkout);
        this.shadow.getElementById("LoadBG").innerHTML = `<div class="loader"></div>`;
        this.shadow.getElementById("LoadBG").style.display = "grid";
        setTimeout(() => {
            if (pComplete === false) {
                this.shadow
                .getElementById("LoadBG")
                .addEventListener("click", this.return);
                // FIX ABOVE
              this.shadow.getElementById("LoadBG").innerHTML =
                "<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your billing information and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>";
            }
        }, 20000);
        await commerce.checkout
          .generateToken(currentCart.id, { type: "cart" })
          .catch(() => {
            console.log("Couldnt Generate Token");
            this.shadow
              .getElementById("LoadBG")
              .addEventListener("click", this.return);
              // FIX ABOVE
            this.shadow.getElementById("LoadBG").innerHTML =
              "<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br>Please check your Internet Connection and try again.<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>";
          })
          .then(async (checkout) => {
            commerce.checkout
              .getShippingOptions(checkout.id, {
                country: selectedCountry,
              })
              .then(async (response) => {
                if (shippingMethodValue === 1) {
                  shippingId = response[0].id;
                }
                if (shippingMethodValue === 3) {
                  shippingId = response[0].id;
                }
                if (shippingMethodValue === 2) {
                  shippingId = response[1].id;
                }
                var fullName = `${fn} ${ln}`;
                const paymentMethodResponse = await stripeElements.createPaymentMethod({
                  type: "card",
                  card
                })             
                .catch((response)=> {
                    console.log(`THIS ERROR ${response}`);
                    this.shadow.getElementById("LoadBG").style.display = "none";
                    checkoutBut.addEventListener('click', this.checkout);
                  });
                if (paymentMethodResponse.error) {
                  // There was some issue with the information that the customer entered into the payment details form.
                  this.shadow.getElementById("LoadBG").style.display = "none";
                  console.log(paymentMethodResponse.error.message);
                  this.shadow
                    .getElementById("LoadBG")
                    .addEventListener("click", this.return);
                  this.shadow.getElementById(
                    "LoadBG"
                  ).innerHTML = `<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br>${paymentMethodResponse.error.message}<br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;
                  return;
                }
                try {
                  const order = await commerce.checkout.capture(checkout.id, {
                    customer: {
                      firstname: `${fn}`,
                      lastname: `${ln}`,
                      email: `${em}`,
                    },
                    extra_fields: {
                      extr_DWy4oG4dY56Jx2: `${sa}`,
                    },
                    shipping: {
                      name: `${fullName}`,
                      street: `${address}`,
                      town_city: `${cit}`,
                      county_state: `${selectedState}`,
                      postal_zip_code: `${zc}`,
                      country: `${selectedCountry}`,
                    },
                    fulfillment: {
                      shipping_method: `${shippingId}`,
                    },
                    billing: {
                      name: `${fullName}`,
                      street: `${address}`,
                      town_city: `${cit}`,
                      county_state: `${selectedState}`,
                      postal_zip_code: `${zc}`,
                      country: `${selectedCountry}`,
                    },
                    payment: {
                      gateway: "stripe",
                      stripe: {
                        payment_method_id: paymentMethodResponse.paymentMethod.id,
                      },
                    },
                  });
                  this.return;
                  this.purchaseComplete();
                // Confimation Page
                this.noti1();
                this.shadow.getElementById("noti").innerHTML = `
                <div id="orderConfirmed">
                    <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/bankoo-map.png"/>
                    <h2>Order Placed!</h2>
                    <h3>Thank you for shopping at SCOGÉ.</h3>
                    <h4>Your order confirmation number is:<br><span class="active" id="confirmNumber">${order.customer_reference}</span></h4>
                    <p class="light-font">Your order is being processed. You will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information.<br><br> All orders are shipped from our NYC office and aim to provide the fastest and most convenient shipping possible. Our main carriers include fedex, ups, usps, dhl and dpex.</p>
                    <br><br>
                    <p>For any questions or inquiries please email <span class="active">INFO@SCOGE.CO</span></p>
                </div>
                `
                  this.shadow.getElementById(
                    "inputCN"
                  ).innerHTML = `<option value="US" title="US">US</option>
                                          <option value="US" title="US2">US - Next Day Air</option>`;
                  cartEmpty = true;
                  card.clear();
                  // Clear Form Inputs
                  return;
                } catch (response) {
                  // There was an issue with capturing the order with Commerce.js
                  console.log(response);
                  this.shadow
                    .getElementById("LoadBG")
                    .addEventListener("click", this.return);
                  this.shadow.getElementById(
                    "LoadBG"
                  ).innerHTML = `<p style='text-align:center;padding-left:5%;padding-right:5%;font-family:BS-R; cursor:pointer;'>There was a problem processing your order.<br><br><span style="color:#b5d3d1;">${response.data.error.message}</span><br><br><br>If the problem persist, please email<br> info@scoge.co for help with your order.<br><br>( RETURN )<p>`;
                  console.log("Catch ERROR");
                  console.log(response);
                  return;
                } finally {
                  // Any loading state can be removed here.
                }
              });
          });
    };

    // PURCHASE COMPLETE
    purchaseComplete = () => {
        var checkoutBut = this.shadow.getElementById("cartStatus");
        this.shadow.getElementById("cartItems").innerHTML = "";
        this.shadow.getElementById("LoadBG").style.display = "none";
        this.shadow.getElementById("cartItems").innerHTML = "";
        this.shadow.getElementById("totalPrice").innerHTML = `$0`;
        checkoutBut.innerHTML = "CART EMPTY";
        shopPage = 5;
        pComplete = true;
        this.shadow.getElementById("addItemButton").innerHTML = "< SELECT SIZE";
        this.shadow.getElementById("shippingButton").addEventListener('click', this.shipping);
        this.shadow.getElementById("shippingButton").removeEventListener('click', this.return);
        // commerce.cart
        // .retrieve()
        // .then((cart) => {
        //     currentCart = cart;
        // })
    }

    // SHOP END

     connectedCallback() {
         this.render();
         this.loadShop();
        this.shadow.getElementById("returnButton").addEventListener('click', this.return.bind(this));
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
                font-family: "BS-B";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Bold.svg");
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-R";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Regular.svg");
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-SB";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-SemiBold.svg");
                font-weight: 600;
                font-style: normal;
            }
            @font-face {
                font-family: "BS-I";
                src: url("https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/fonts/BioSans-Italic.svg");
                font-weight: normal;
                font-style: italic;
            }
            #main {
                background-color: black;
                width: 100%;
                height: 100%;
                position: fixed;
                left: 0;
                top: 0;
                z-index:20;
                font-family: "BS-R";
            }
            ::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #ff002d;
                opacity: 0.9; /* Firefox */
              }
            #noti {
                display: none;
                height: 100%;
                width: 100%;
                position: fixed;
                left: 0;
                top: 0;
                background-color: rgba(0,0,0,.9);
                z-index: 5;
            }
            #noti img {
                height: 100%;
                position: absolute;
                left: -40%;
            }
            #header {
                height: 8%;
                width: 90%;
                overflow: hidden;
                padding: 2% 5%;
                float:left;
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr 1fr;
                align-items: center; 
                border-bottom: 1px solid #ff002d;
            }
            #header img {
                width: 90%;
            }
            #footer {
                width: 88%;
                height: 8%;
                padding: 2% 6%;
                background-color: #b5d3d1;
                color: #ff002d;
                float:left;
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                font-size: 20px;
                font-family: "BS-SB";
            }
            #cartStatus {
                justify-self: end;
            }
            #returnButton {
                width: 50%;
                float: right;
                border: 1px solid #ff002d;
                padding: 4% 2%;
                text-align: center;
                justify-self: end;
            }
            #mainBody {
                height: 80%;
                width: 100%;
                float:left;
                overflow: hidden;
                background-color: black;
            }
            #mb1 {
                display: grid;
                background-color: white;
                height: 100%;
                width: 100%;
                grid-template-columns: 1fr 1fr;
                overflow: scroll;
            }
            #mb2 {
                display: none;
                height: 80%;
                width: 100%;
                background-color: black;
                position: absolute;
                z-index: 2;
                overflow: hidden;
            }
            #mb3 {
                display: none;
                height: 80%;
                width: 100%;
                background-color: black;
                position: absolute;
                z-index: 3;
            }
            #mb4 {
                display: none;
                height: 72%;
                width: 100%;
                background-color: black;
                position: absolute;
                z-index: 4;
                overflow: hidden;
            }
            .productContainer {
                width: 100%;
                float: left;
                position: relative;
            }
            .productContainer img {
                width: 100%;
                overflow: hidden;
              }
            #mainImage {
                height: 50%;
                width: 100%;
                float:left;
                overflow: scroll;
                background-color: white;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
            }
            #mainImage img {
                width: 100%;    
            }
            #allImages {
                height: 15%;
                width: 100%;
                overflow: hidden;
            }
            #allImages img {
                width: 25%;
                float:left;
            }
            #productInfo {
                height: 18%;
                width: 90%;
                float: left;
                padding: 5% 5%;
            }
            #pDesc {
                font-size: 12px;
            }
            #pSizeGuide {
                font-size: 14px;
                color: #b5d3d1;
            }
            #leftInfo {
                width: 80%;
                height: 100%;
                float: left;
            }
            #rightInfo {
                width: 20%;
                height: 100%;
                float: left;
            }
            #proPrice {
                float: right;
                font-family: "BS-SB";
                font-size: 18px;
            }
            #pCat {
                color: #b5d3d1;
                width: 10%;
                margin: 0%;
                padding: 0%;
            }
            #sizeSelection {
                height: 12%;
                width: 100%;
                float: left;
            }
            #addItemButton {
                width: 50%;
                height: 100%;
                background-color: #94be8c;
                color: black;
                float: left;
                font-family: "BS-SB";
                font-size: 18px;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
            }
            #sizesCont {
                height: 100%;
                width: 50%;
                background-color: black;
                float: left;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
            }
            .sizeButtons {
                height: 100%;
                width: 100%;
                float: left;
                background-color: black;
                display: grid;
                justify-items: center;
                align-items: center;
                border-top: .5px solid white;
                opacity: 0.3;
            }
            .sizeButtons:hover {
                background-color: #ff002d;
                color: white;
            }
            #cartItems {
                height: 80%;
                width: 100%;
                float: left;
                background-color: black;
                overflow: scroll;
            }
            #checkoutInputs {
                display: none;
                height: 75%;
                width: 95%;
                float: left;
                padding-left: 5%;
                padding-top: 5%;
                background-color: black;
                position: absolute;
                z-index: 2;
                grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                grid-template-columns: 45% 45%;
                grid-column-gap: 5%;
                grid-row-gap: 2%;
            }
            .checkoutInput {
                background-color: rgba(0,0,0,0);
                border: 1px solid #ff002d;
                color: #b5d3d1;
                padding-left: 5%;
                outline: none;
            }
            #inputEM {
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                padding-left: 5%;
            }
            #inputBD {
                grid-row-start: 4;
                grid-row-end: 5;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                padding-left: 5%;
            }
            #inputCY {
                grid-row-start: 5;
                grid-row-end: 6;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                padding-left: 5%;
            }
            #inputSA {
                grid-row-start: 7;
                grid-row-end: 9;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                padding-left: 5%;
            }
            .input11 {
                grid-row-start: 11;
                grid-row-end: 12;
                grid-column-start: 1;
                grid-column-end: 3;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: start;
                z-index: 3;
                background-color: rgba(0,0,0,0);
                border: 1px solid #ff002d;
                color: #b5d3d1;
                outline: none;
                overflow-y: visible;
            }
            #stripeLogo {
                width: 80%;
                grid-row-start: 10;
                grid-row-end: 11;
            }
            stripe-elements::part(stripe) {
                background-color: rgba(0,0,0,0);
                border: none;
                border-radius: 0px;
                box-shadow: none;
                width: 100%;
                color: #b5d3d1;
                --stripe-elements-base-color: green;
              }
            stripe-elements {
                --stripe-elements-base-color: #b5d3d1;
                --stripe-elements-base-icon-color: #b5d3d1;
                --stripe-elements-base-font-size: 14px;
            }
            #termsButton {
                height: 10%;
                width: 100%;
                background-color: white;
                float: left;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
                color: black;
                font-family: "BS-SB";
                font-size: 10px;
            }
            #terms {
                width: 90%;
                height: 90%;
                padding: 5%;
                overflow: scroll;
            }
            #shippingButton {
                height: 10%;
                width: 100%;
                background-color: #94be8c;
                float: left;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
                color: black;
                font-family: "BS-SB";
            }
            .productCont {
                width: 100%;
                height: 40%;
                background-color: black;
                overflow: hidden;
                border-bottom: 1px solid #ff002d;
            }
            .pcLeft {
                width: 35%;
                height: 90%;
                overflow: hidden;
                padding-top: 3%;
                padding-left: 5%;
                float: left;
            }
            .pcRight {
                width: 55%;
                height: 97%;
                overflow: hidden;
                padding-top: 3%;
                padding-Right: 5%;
                float: left;
                text-align: right;
            }
            .pcLeft img {
                height: 100%;
            }
            .cartProName {
                font-size: 12px;
                margin-bottom: 0px;
            }
            .cartProQty {
                font-family: "BS-SB";
                margin-top: 1%;
                font-size: 18px;
                margin-bottom: 0px;
            }
            .cartProPrice {
                font-family: "BS-SB";
                margin-top: 1%;
                font-size: 20px;
                margin-bottom: 1%;
            }
            .quantityChange {
                font-family: "BS-SB";
                font-size: 40px;
                margin-top: 10%;
            }
            .quantityChange span {
                padding-left: 14%;
            }
            .active {
                color: #b5d3d1;
            }
            .alt {
                color: #94be8c;
            }
            #LoadBG {
                width: 100%;
                height: 80%;
                background-color: rgba(0, 0, 0, 0.678);
                position: absolute;
                display: none;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                align-items: center;
                justify-items: center;
                z-index:4;
              }
              .loader {
                border: 2px solid #94be8c1;
                border-radius: 50%;
                border-top: 2px solid #ff002d;
                width: 100px;
                height: 100px;
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 2s linear infinite;
              }
              @-webkit-keyframes spin {
                0% {
                  -webkit-transform: rotate(0deg);
                }
                100% {
                  -webkit-transform: rotate(360deg);
                }
              }
              
              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              #archived {
                  width: 100%;
                  height: 100%;
                  background-color: #ff002d;
                  color: white;
                  display: none;
                  z-index: 3;
                  grid-template-columns: 1fr;
                  grid-template-rows: 1fr;
                  align-items: center;
                  justify-items: center;
                  letter-spacing: 10px;
              }
              #card-element {
                color: #ff002d;
              }
              .light-font {
                font-family: "BS-L";
              }
              #orderConfirmed {
                width: 88%;
                height: 100%;
                padding-left: 6%;
                padding-right: 6%;
                position: absolute;
                z-index: 4;
                background-color: black;
                font-family: "BS-R";
              }
              #orderConfirmed img {
                margin-top: 10%;
                width: 50%;
                height: auto;
                position: relative;
                left: 25%;
              }
              #productEdition {
                  position: absolute;
                  right: 5%;
                  bottom: 15%;
                  font-family: "BS-SB";
              }
              #eSymbol1 {
                display: none;
              }
              #eSymbol2 {
                display: none;
            }
         </style>
         <div id="main">
            <div id="noti">
            </div>
            <div id="header">
                <img src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/SCOGÉ Logo-red.png"/>
                <div id="returnButton">
                    RETURN
                </div>
            </div>
            <div id="mainBody">
                <div id="LoadBG">
                    <div class="loader"></div>
                </div>
                <div id="mb4">
                    Confirmation Page
                </div> 
                <div id="mb3">
                    <div id="checkoutInputs">
                        <input class="checkoutInput" id="inputFN" placeholder="First Name" value="">
                        <input class="checkoutInput" id="inputLN" placeholder="Last Name" value="">
                        <input class="checkoutInput" id="inputEM" placeholder="Email" value="">
                        <select class="checkoutInput" id="inputCN" value="Country" type="text" placeholder="Country" value="">
                            <option value="Select Country" title="Select">Select Country</option>
                            <option value="US" title="US">US</option>
                            <option value="US" title="US2">US - Next Day</option>
                        </select>
                        <select class="checkoutInput" id="inputST" type="text" placeholder="State" value="US-NY">
                            <option value="Select State" title="Select">Select State</option>
                            <option value="Select Country First">Select Country First</option>
                        </select>
                        <input class="checkoutInput" id="inputBD" placeholder="Billing Address" value="">
                        <input class="checkoutInput" id="inputCY" placeholder="Town / City" value="">
                        <input class="checkoutInput" id="inputZC" placeholder="Post / Zip Code" value="">
                        <input class="checkoutInput" id="inputSP" value="$0 Free Ship">
                        <input class="checkoutInput" id="inputSA" placeholder="Shipping Address (If different from billing)" value="">
                        <img id="stripeLogo" src="https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/Logos/stripe-red.png"/>
                        <div class="input11" id="card-element"></div>
                   </div>
                    <div id="cartItems">
                        <div class="productCont">
                            <div class="pcLeft">
                                <img src="../assets/images/shoptest/shop2.jpg"> 
                            </div>
                            <div class="pcRight">
                                <p class="cartProName">TESTING PRO NAME</p>
                                <p class="cartProQty">QTY:<span>1</span></p>
                                <p class="cartProPrice">$400</p>
                                <div class="quantityChange">
                                    <span>-</span>
                                    <span>|</span>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div class="productCont">
                            <div class="pcLeft">
                                <img src="../assets/images/shoptest/shop4.jpg"> 
                            </div>
                            <div class="pcRight">
                                <p class="cartProName">TESTING PRO NAME</p>
                                <p class="cartProQty">QTY: <span class="active">1</span></p>
                                <p class="cartProPrice">$400</p>
                                <div class="quantityChange">
                                    <span class="active">-</span>
                                    <span>|</span>
                                    <span class="active">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="termsButton">
                        INFO, TERMS & CONDITIONS
                    </div>
                    <div id="shippingButton">
                        SHIPPING & BILLING
                    </div>
                </div>
                <div id="mb2">
                    <div id="mainImage">
                        <img id="mainImageCont" src="../assets/images/shoptest/shop3.jpg">
                    </div>
                    <div id="allImages">
                    </div>
                    <div id="productInfo">  
                        <div id="leftInfo">
                            <span id="pName"></span>
                            <p id="pDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, earum.</p>
                            <div id="pSizeGuide">[ SIZE GUIDE ]</div>
                        </div>
                        <div id="rightInfo">
                            <span id="proPrice">$400</span>
                            <div id="productEdition" class="active"><span id="eSymbol1">(É)</span><span id="eSymbol2">(SÉ)</span></div>
                        </div>
                    </div>
                    <div id="sizeSelection">
                        <div id="archived">ARCHIVED</div>
                        <div id="sizesCont">
                            <div class="sizeButtons" id="Small">S</div>
                            <div class="sizeButtons" id="Medium">M</div>
                            <div class="sizeButtons" id="Large">L</div>
                            <div class="sizeButtons" id="XLarge">XL</div>
                            <div class="sizeButtons" id="SingleSize" style="display:none;">Single Size</div>
                        </div>
                        <div id="addItemButton">
                           < SELECT SIZE
                        </div>
                    </div>
                </div>
                <div id="mb1"></div>
            </div>
            <div id="footer">
                <div style="border-right: 1px solid #ff002d">
                    Total: <span id="totalPrice">$0</span>
                </div>
                <div id="cartStatus">
                    CART EMPTY
                </div>
            </div>
         </div>
         `
     }
}

customElements.define("mobile-shop1", mobileShop1);

export {mobileShop1};