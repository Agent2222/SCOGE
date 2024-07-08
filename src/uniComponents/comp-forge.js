import { dragElement } from "../universe";
import statsImg from "../../assets/images/cards/digi-stats-1.jpg";
import leftArrow from "../../assets/images/icons/left-arrow.png";
import { forgeable } from "./comp-wallets";
import { gsap } from "gsap/gsap-core";

export const forgelib = async () => {
    const httpUrl = "https://uqjdj-siaaa-aaaag-aaoxq-cai.icp0.io/assets/nfts/fgLib.json";
    const response = await fetch(httpUrl);
    const lib = await response.json();
    return lib;
}

class compForge extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.marketLink = "https://zora.co/collect/base:0x321a5b87ed0008c05503b3429e218d48c1419d29";
        this.memoryAvailable = false;
        this.loadedImagesCount = 0;
        this.selectedNfts = [];
        this.obj = [];
        this.count = 0; 
        this.exsIndex = null;
        this.elStats = {
            element: null,
            img: null,
            stat: null
        }
        this.allAttributesTotal = {
            TCAT: 0,
            TCHA: 0,
            TBAS: 0
        };
        this.flib = null;
        this.forgeOptions = [];
        this.refineOptions = [];
        this.allVal = null;
        this.leftVal = null;
        this.rightVal = null;
        this.movingRight = false;
        this.codeColorPositon = ["s","a","p"]
        this.currentNumbersFin = [];
    }

    get active() {
        return this.getAttribute('active');
    }

    set active(val) {
        this.setAttribute('active', val);
    }


    static get observedAttributes() {
        return ["active"];
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        if (name === "active") {
            if (newValue === "loaded") {
                this.flib = await forgelib();
                this.shadowRoot.querySelectorAll(".card").forEach((card) => {
                    card.remove();
                });
                let loadedImagesCount = 0;
                const totalImages = window.ethNFTS.length - 1;
                window.ethNFTS.forEach((nft) => {
                    let card = document.createElement("div");
                    let buttons = document.createElement("div");
                    let selBut = document.createElement("div");
                    let qtyInd = document.createElement("div");

                    qtyInd.id = `nftQty${nft.id}`;
                    qtyInd.classList.add("nftQty")
                    qtyInd.innerHTML = '0';
                    qtyInd.addEventListener("click", () => {
                        nft.count = 0;
                        this.shadowRoot.getElementById(`nftQty${nft.id}`).innerHTML = `0`;
                        for (let i = 0; i < this.selectedNfts.length; i++) {
                            if (this.selectedNfts[i].id === nft.id) {
                                this.selectedNfts.splice(i, 1);
                                break;
                            }
                        }
                    })

                    selBut.innerHTML = "SELECT";
                    selBut.id = `viewnft${nft.id}2`;
                    selBut.setAttribute("data-nftId2", `${nft.id}`);
                    if (nft.nft.name === "HBK Beacon") {
                        buttons.innerHTML = `
                        <div class="selFButton" style="border-bottom: 1px solid var(--accent)" data-nftId="${nft.id}" data-beacon="true" id="selnft${nft.id}">SELECT</div>
                        <div class="selFButton" data-nftId="${nft.id}" data-beacon="true" id="viewnft${nft.id}">VIEW</div>
                    `;
                    } else {
                        buttons.innerHTML = `
                        <div class="selFButton" style="border-bottom: 1px solid var(--accent)" data-nftId="${nft.id}" id="selnft${nft.id}">SELECT</div>
                        <div class="selFButton" data-nftId="${nft.id}" id="viewnft${nft.id}">VIEW</div>
                    `;
                    }

                    buttons.id = "cardButtons";
                    card.classList.add("card");
                    let img = new Image();
                    card.appendChild(img);
                    card.appendChild(buttons);
                    buttons.appendChild(qtyInd);
                    var hash = null;
                    if (nft.nft.image.includes("ipfs://")) {
                        hash = nft.nft.image.replace("ipfs://", "https://a7f34678c8f921d05824641db058ef4a.ipfscdn.io/ipfs/");
                    } else {
                        hash = nft.nft.image;
                    }
                    // var hash = nft.nft.image
                    let nftImg = hash;
                    img.src = hash;
                    img.onload = () => {
                        card.classList.add("imgloaded");
                        loadedImagesCount++;
                        if (loadedImagesCount -1 < window.ethNFTS.length) {
                            setTimeout(() => {
                                this.spinAction();
                                document.getElementById("forgeModal").shadowRoot.getElementById("loadingModal").stopLoading();
                            }, 200);
                        }
                    };
                    card.appendChild(img);

                    var stats = null

                    if (nft.nft.attributes) {
                        stats = {
                            cat: nft.nft?.attributes[0]?.value,
                            col: nft.nft?.attributes[1]?.value,
                            bas: nft.nft?.attributes[2]?.value
                        }
                    } else {
                        stats = {
                            cat: "X",
                            col: "X",
                            bas: "X"
                        }
                    }
                    
                    this.shadowRoot.getElementById("availableCards").appendChild(card);
                    
                    this.shadowRoot.getElementById(`selnft${nft.id}`).addEventListener("click", (e) => {
                        this.selectCard(e, nftImg, stats)
                    });

                    this.shadowRoot.getElementById(`viewnft${nft.id}`).addEventListener("click", (e) => {
                        this.viewCard(e, nftImg, stats);
                    });
                    
                });

                this.shadowRoot.getElementById(`select2`).addEventListener("click", (e) => {
                    this.selectCard2();
                });
                
            }
        }
    }

    withTimeout(promise, timeout) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject(new Error('Request timed out'));
            }, timeout);
    
            promise.then(
                (value) => {
                    clearTimeout(timer);
                    resolve(value);
                },
                (error) => {
                    clearTimeout(timer);
                    reject(error);
                }
            );
        });
    }

    viewCard(e, nftImg, stats) {
        this.shadowRoot.querySelector(`.nftQty2`).style.display = "none";
        var card = Number(e.target.getAttribute("data-nftId"));
        this.shadowRoot.getElementById("selCardImge").src = nftImg;
        this.shadowRoot.getElementById("forgeCard").style.opacity = "1";
        this.shadowRoot.getElementById("forgeCard").style.transform = "scaleX(1)";
        this.spinAction();
        this.shadowRoot.getElementById("catVal").innerText = stats.cat;
        this.shadowRoot.getElementById("colVal").innerText = stats.col;
        this.shadowRoot.getElementById("basVal").innerText = stats.bas;
        this.shadowRoot.getElementById("expCard").scrollTo(0, 0);
        this.shadowRoot.getElementById("select2").setAttribute("data-nftid2", card);
        if (window.ethNFTS[card]?.count > 0) {
            this.shadowRoot.querySelector(`.nftQty2`).style.display = "flex";
        }
        this.elStats.element = e.target;
        this.elStats.img = nftImg;
        this.elStats.stat = stats;
    }

    selectCard(e, nftImg, stats) {
        var card = Number(e.target.getAttribute("data-nftId"));
        var type = e.target.getAttribute("data-beacon");
        if (type === "true" ) {
            this.viewCard(e, nftImg, stats)
            this.shadowRoot.getElementById("mCaseBeacon").style.display = "grid";
            this.shadowRoot.getElementById("waladd").innerHTML = window.currentWallet;
            var forger = document.getElementById("forgeModal").shadowRoot?.getElementById("mainForge");
            forger.onmousedown = null;
            document.onmouseup = null;
            document.onmousemove = null;
            forger.style.transition = ".3s all";
            this.shadowRoot.getElementById("select2").style.display = "none";
            this.shadowRoot.getElementById("forgeMain").style.display = "none";
        }
        this.incQty(card, e);
        this.checkForgeOptions();
    }

    selectCard2() {
        var nftId = Number(this.shadowRoot.getElementById("select2").getAttribute("data-nftId2"));
        var type = this.elStats.element.getAttribute("data-beacon");
        if (type === "true" ) {
            var forger = document.getElementById("forgeModal").shadowRoot?.getElementById("mainForge");
            forger.onmousedown = null;
            document.onmouseup = null;
            document.onmousemove = null;
            forger.style.transition = ".3s all";
            this.shadowRoot.getElementById("waladd").innerHTML = window.currentWallet;
            this.shadowRoot.getElementById("mCaseBeacon").style.display = "grid";
            this.shadowRoot.getElementById("select2").style.display = "none";
            this.shadowRoot.getElementById("forgeMain").style.display = "none";
        } 
        this.incQty(nftId);
        this.checkForgeOptions();
    }

    spinAction() {
        var el = this.shadowRoot.getElementById("connectorSpiral");
        if (el.style.transform === "rotate(360deg)") {
            el.style.transform = "rotate(0deg)";
        } else {
            el.style.transform = "rotate(360deg)";
        }

    }
    
    checkMemory() {
        if (this.memoryAvailable === true) {
            this.openMemory();
        } else {
            this.noFMemory();
        }
    }

    openMemory() {
        this.shadowRoot.getElementById("forgeMemory").style.transform = "scaleX(1)";
        this.shadowRoot.getElementById("forgeMemory").style.opacity = "1";
        this.shadowRoot.getElementById("fmemBut").style.display = "none";
        this.spinAction();
    }

    insuffMemory() {
        var inMem = this.shadowRoot.querySelectorAll(".insufMem");
        inMem.forEach((mem) => {
            mem.setAttribute("class", "insufMem");
        });
        setTimeout(() => {
            inMem.forEach((mem) => {
                mem.setAttribute("class", "insufMem hidden");
            });
        }, 5000);
    }

    noFMemory() {
        this.shadowRoot.getElementById("noMemory").style.display = "flex";
        this.shadowRoot.getElementById("fmemBut").style.display = "none";
        setTimeout(() => {
            this.shadowRoot.getElementById("noMemory").style.display = "none";
            this.shadowRoot.getElementById("fmemBut").style.display = "flex";
        }, 1000);
    }

    sendBeacon() {
        var mainText = this.shadowRoot.getElementById("mainText");
        var secText = this.shadowRoot.getElementById("secText");
        var inputArea = this.shadowRoot.getElementById("mcBeaconInput");
        var but = this.shadowRoot.getElementById("sendBeaconBut");
        mainText.innerHTML = "IT WORKED, A MAGNA CASE IS INBOUND!<br>KEEP A LOOK OUT FOR IT.";
        secText.innerHTML = "Tthats it for the HBK. Looks like the power source is shot.<br>Try forging it down. Might get some good<br>materials from it.";
        inputArea.innerHTML = "";
        setTimeout(() => {
            this.shadowRoot.getElementById("mCaseBeacon").remove();
            this.shadowRoot.getElementById("forgeMain").style.display = "grid";
        },5000)
        if (but.innerHTML != "FORGE") {
            but.removeEventListener("click", this.sendBeaconData)
        }
        but.innerHTML = "FORGE";
        but.addEventListener("click", () => {
            this.shadowRoot.getElementById("mCaseBeacon").remove();
            this.shadowRoot.getElementById("forgeMain").style.display = "grid";
        })
        this.shadowRoot.getElementById("mainForge").style.transition = "";
        this.shadowRoot.getElementById("selnft1").remove();
        this.shadowRoot.getElementById("viewnft1").remove();
    }

    cloaked() {}

    ringOwner() {}

    incQty(card, e) {
        // check nft qty, increment, then reset to 1 when reach end.
        for (let nft in window.ethNFTS) {
            if (window.ethNFTS[nft].id === card) {
                if (window.ethNFTS[nft].count < window.ethNFTS[nft].qty) {
                    window.ethNFTS[nft].count++
                    this.selSystem(window.ethNFTS[card], e)
                    this.shadowRoot.getElementById(`nftQty${window.ethNFTS[nft].id}`).innerHTML = `${window.ethNFTS[nft].count}`;
                    this.shadowRoot.querySelector(`.nftQty2`).style.display = "flex";
                    this.shadowRoot.querySelector(`.nftQty2`).innerHTML = `${window.ethNFTS[nft].count}`;
                    break;
                } else {
                    this.shadowRoot.querySelector(`.nftQty2`).style.display = "none";
                }
            }
        }
    }

    selSystem(nft, e) {
        var parent = e?.target.parentNode;
        var grandParent = parent.parentNode;
        // Check if the NFT already exists in the array
        const existingNftIndex = this.selectedNfts.findIndex(selection => selection.token.nft.name === nft.nft.name);

        this.exsIndex = existingNftIndex;
    
        if (this.exsIndex !== -1) {
            // If it exists, increment the quantity
            if (this.count < 6) {
                this.selectedNfts[this.exsIndex].token.count + 1;
            } else {
                // If the array is full, reset the array and all elements
                this.shadowRoot.querySelectorAll(".nftQty").forEach((el) => {
                    setTimeout((() => {
                        el.innerHTML = "0";
                    }),100)
                    el.innerHTML = "0";
                    window.ethNFTS.forEach((nft) => {
                        nft.count = 0;
                    })
                    this.count = 0;
                })
                this.selectedNfts = [];
                this.shadowRoot.getElementById("forgerOptions").innerHTML = "";
                this.shadowRoot.getElementById("forgerOptions").style.display = "none";
                this.shadowRoot.getElementById("forgeMain").style.display = "grid";
                this.shadowRoot.querySelectorAll(".card").forEach((el) => {
                    el.classList.remove("selectedCard");
                })
                this.shadowRoot.querySelector(`.nftQty2`).style.display = "none";
            }
            this.count = 0;
            this.selectedNfts.forEach((nft) => {
                this.count += nft.token.count;
            })
            return;
        } else {
            if (this.count < 6) {
                // If it doesn't exist and the array is not full, add the NFT
                this.flib.forEach((entry) => {
                    if (entry.name === nft?.nft.name && nft.nft.description != "FORGE Edition") {
                        this.selectedNfts.push({iid: entry.itemId, token: nft});
                    }
                })
                if (nft?.nft.description === "FORGE Edition") {
                    this.selectedNfts.push({iid: null, token: nft});
                }

                grandParent.classList.add("selectedCard");
            } else {
                // If the array is full, reset the array and all elements
                this.shadowRoot.querySelectorAll(".nftQty").forEach((el) => {
                    setTimeout((() => {
                        el.innerHTML = "0";
                    }),100)
                    el.innerHTML = "0";
                    window.ethNFTS.forEach((nft) => {
                        nft.count = 0;
                    })
                    this.count = 0;
                })
                this.selectedNfts = [];
                this.shadowRoot.getElementById("forgerOptions").style.display = "none";
                this.shadowRoot.getElementById("forgeMain").style.display = "grid";
                this.shadowRoot.getElementById("forgerOptions").innerHTML = "";
                this.shadowRoot.querySelectorAll(".card").forEach((el) => {
                    el.classList.remove("selectedCard");
                })
                this.shadowRoot.querySelector(`.nftQty2`).style.display = "none";
            }
        }

        this.count = 0;
        this.selectedNfts.forEach((nft) => {
            this.count += nft.token.count;
        })
    }

    checkForgeOptions() {
        // Def - Items that cant be forged
        // Ref - Items that can be forged down
        // Raw - Items that can be forged up
        this.forgeOptions = [];
        this.refineOptions = [];
        this.allAttributesTotal = {
            TCAT: 0,
            TCHA: 0,
            TBAS: 0
        };

        this.selectedNfts.forEach((nft) => {
            this.allAttributesTotal.TCAT += Number(nft.token.nft.attributes[0]?.value); 
            this.allAttributesTotal.TCHA += Number(nft.token.nft.attributes[1]?.value); 
            this.allAttributesTotal.TBAS += Number(nft.token.nft.attributes[2]?.value); 
        })

        this.forgeOptions = [];
        this.shadowRoot.getElementById("forgerOptions").innerHTML = "";
        this.flib.forEach((entry) => {
            // Filter out null items from baseReg
            const nonNullBaseReg = entry.criteria.baseReg.filter((reg) => reg.item != "null");

                // Check if nonNullBaseReg is empty
            if (nonNullBaseReg.length === 0) {
                return; // Skip this entry
            }

            // console.log(nonNullBaseReg);
            // Check if all non-null items are present in selectedNfts
            const allItemsPresent = nonNullBaseReg.every((reg) => {
                const requiredCount = nonNullBaseReg.filter(item => item.item === reg.item).length;
                const nft = this.selectedNfts.find((nft) => nft.iid === reg.item);
        
                if (nft && nft.token.count >= requiredCount) {
                    return true;
                } else {
                    return false;
                }
            });

            if (allItemsPresent) {
                // console.log("item", entry.name)
                if (this.allAttributesTotal.TCAT >= entry.criteria.statReq.tcat && this.allAttributesTotal.TCHA >= entry.criteria.statReq.tcha && this.allAttributesTotal.TBAS >= entry.criteria.statReq.tbas) {
                    this.shadowRoot.getElementById("forgerOptions").style.display = "grid";
                    this.shadowRoot.getElementById("forgeMain").style.display = "none";
                    // this.forgeOptions.push(entry.name);
                    this.loadForgeOption(entry);
                }
            }
        });
    }

    async loadForgeOption(entry) {
        forgeable.forEach((item) => {
            if (item.nft.name === entry.name) {
                this.forgeOptions.push(item);
            }
        })
        this.shadowRoot.getElementById("forgerOptions").innerHTML = "";

        this.forgeOptions.forEach((option) => {
            var el = document.createElement("div");
            el.classList.add("fOption");
            el.innerHTML = `
                <div class="optionImg">
                    <img src="${option.nft.customImage}">
                    <img class="blurImg" src="${option.nft.customImage}">
                </div>
                <div id="opt${option.id}" class="selButton">VIEW</div>
            `
            this.shadowRoot.getElementById("forgerOptions").appendChild(el);
            this.shadowRoot.getElementById(`opt${option.id}`).addEventListener("click", () => this.viewForgeOption(option))
        })
    }

    viewForgeOption(option) {
        this.shadowRoot.getElementById("forgerOptions").style.display = "none";
        this.shadowRoot.getElementById("forgerCont").style.display = "grid";
        this.shadowRoot.getElementById("forgerCont").innerHTML = `
            <div id="forgeDetails">
                <div id="forgeItemDesc">
                    ${option.nft.description}
                </div>
                <ul id="forgeStats1">
                    <li>${option.nft.name}</li>
                    <li>Item Type</li>
                    <li>Item Stats</li>
                </ul>
                <br>
                <ul id="forgeStats2">
                    <li>Item Name</li>
                    <li>Item Type</li>
                </ul>
            </div>
            <div id="forgeOutput">
                <div id="outDeets"><span style="font-size:1em; color:var(--primary);">OUTPUT  </span><span id="outputQty">1x</span>-<span id="outputName">${option.nft.name}</span></div>
                <div id="outputImg">
                    <img src="${option.nft.customImage}">
                    <img  class="blurImg" src="${option.nft.customImage}">
                </div>
                <div id="forgeBut">FORGE</div>
            </div>
        `;
    }

    // this.allVal = this.shadowRoot.querySelectorAll(".val");
    // this.leftVal = this.shadowRoot.getElementById(".leftVal");
    // this.rightVal = this.shadowRoot.getElementById(".rightVal");

    lockUp() {
        // forgeCode
        this.allVal.forEach((ele)=> {
            if (this.movingRight === false) {
                gsap.timeline()
                .to(ele, { y: -200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { y: 0, duration: 0.1, ease: "power1.inOut" });
              // Move back to original position
            }
        })
    }

    lockDown() {
        this.allVal.forEach((ele)=> {
            if (this.movingRight === false) {
                gsap.timeline()
                .to(ele, { y: 200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { y: 0, duration: 0.1, ease: "power1.inOut" });
              // Move back to original position
            }
        })
    }

    isNumeric(str) {
        if (typeof str != "string") return false; // we only process strings!  
        return !isNaN(str) && !isNaN(parseFloat(str)); // use parseFloat to filter out non-number strings
    }

    lockLeft(e) {
        //
        // e.keyCode == 37
        this.codeColor("left");
        this.allVal.forEach((ele)=> {
            gsap.timeline()
            .to(ele, { x: 200, duration: 0.05, ease: "power1.inOut" }) 
            .to(ele, { x: -200, duration: 0.1, ease: "power1.inOut" }) 
            .to(ele, { x: 200, duration: 0.1, ease: "power1.inOut" }) 
            .to(ele, { x: 0, duration: 0.1, ease: "power1.inOut" })
        })

        var numberEl1 = this.shadowRoot.querySelectorAll(".leftVal");
        var numberEl2 = this.shadowRoot.querySelectorAll(".centerVal");
        var numberEl3 = this.shadowRoot.querySelectorAll(".rightVal");
        var currentNumbers = [numberEl1[0].innerHTML, numberEl2[0].innerHTML, numberEl3[0].innerHTML];
        
        let result1 = this.isNumeric(numberEl1[0].innerHTML);
        let result2 = this.isNumeric(numberEl2[0].innerHTML);
        let result3 = this.isNumeric(numberEl3[0].innerHTML);

        numberEl1.forEach((el1) => {
            if (result1 === true) {
                el1.innerHTML = Number(currentNumbers[1]) -1;
            } else {
                // letters
                el1.innerHTML = currentNumbers[1];
            }
        })
        numberEl2.forEach((el2) => {
            if (result2 === true) {
                el2.innerHTML = Number(currentNumbers[2]) -1;
            } else {
                // letters
                el2.innerHTML = currentNumbers[2];
            }
        })
        numberEl3.forEach((el3) => {
            if (result3 === true) {
                el3.innerHTML = Number(currentNumbers[0]) -1;
            } else {
                // letters
                el3.innerHTML = currentNumbers[0];
            }
        })

    }

    lockRight() {
        //
        // e.keyCode == 39
        this.codeColor("right");
        this.allVal.forEach((ele)=> {
            if (this.movingRight === false) {
                gsap.timeline()
                .to(ele, { x: -200, duration: 0.05, ease: "power1.inOut" }) 
                .to(ele, { x: 200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { x: -200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { x: 0, duration: 0.1, ease: "power1.inOut" })
            }
        })
        // this.movingRight === true;
        // setTimeout(() => {
        //     this.movingRight === false;
        // },200)
    }

    codeColor(direction) {
        let one = this.shadowRoot.getElementById("fc1");
        let two = this.shadowRoot.getElementById("fc2");
        let three = this.shadowRoot.getElementById("fc3");

        if (direction === "left") {
            if (this.codeColorPositon[0] === "s") {
                this.codeColorPositon[0] = "a";
                this.codeColorPositon[1] = "p";
                this.codeColorPositon[2] = "s";
                one.style.color = "var(--accent)";
                one.style.backgroundColor = "var(--accent)";
                two.style.color = "var(--primary)";
                two.style.backgroundColor = "var(--primary)";
                three.style.color = "var(--secondary)";
                three.style.backgroundColor = "var(--secondary)";
                return;
            }
    
            if (this.codeColorPositon[0] === "a") {
                this.codeColorPositon[0] = "p";
                this.codeColorPositon[1] = "s";
                this.codeColorPositon[2] = "a";
                one.style.color = "var(--primary)";
                one.style.backgroundColor = "var(--primary)";
                two.style.color = "var(--secondary)";
                two.style.backgroundColor = "var(--secondary)";
                three.style.color = "var(--accent)";
                three.style.backgroundColor = "var(--accent)";
                return;
            }
    
            if (this.codeColorPositon[0] === "p") {
                this.codeColorPositon[0] = "s";
                this.codeColorPositon[1] = "a";
                this.codeColorPositon[2] = "p";
                one.style.color = "var(--secondary)";
                one.style.backgroundColor = "var(--secondary)";
                two.style.color = "var(--accent)";
                two.style.backgroundColor = "var(--accent)";
                three.style.color = "var(--primary)";
                three.style.backgroundColor = "var(--primary)";
                return;
            }
            return;
        } else {
            if (this.codeColorPositon[0] === "s") {
                this.codeColorPositon[0] = "p";
                this.codeColorPositon[1] = "s";
                this.codeColorPositon[2] = "a";
                one.style.color = "var(--primary)";
                one.style.backgroundColor = "var(--primary)";
                two.style.color = "var(--secondary)";
                two.style.backgroundColor = "var(--secondary)";
                three.style.color = "var(--accent)";
                three.style.backgroundColor = "var(--accent)";
                return;
            }
    
            if (this.codeColorPositon[0] === "a") {
                this.codeColorPositon[0] = "s";
                this.codeColorPositon[1] = "a";
                this.codeColorPositon[2] = "p";
                one.style.color = "var(--secondary)";
                one.style.backgroundColor = "var(--secondary)";
                two.style.color = "var(--accent)";
                two.style.backgroundColor = "var(--accent)";
                three.style.color = "var(--primary)";
                three.style.backgroundColor = "var(--primary)";
                return;
            }
    
            if (this.codeColorPositon[0] === "p") {
                this.codeColorPositon[0] = "a";
                this.codeColorPositon[1] = "p";
                this.codeColorPositon[2] = "s";
                one.style.color = "var(--accent)";
                one.style.backgroundColor = "var(--accent)";
                two.style.color = "var(--primary)";
                two.style.backgroundColor = "var(--primary)";
                three.style.color = "var(--secondary)";
                three.style.backgroundColor = "var(--secondary)";
                return;
            }
        }

    }

    connectedCallback() {
        this.render();
        this.allVal = this.shadowRoot.querySelectorAll(".val");
        this.leftVal = this.shadowRoot.getElementById("leftVal");
        this.rightVal = this.shadowRoot.getElementById("rightVal");
        this.shadowRoot.getElementById("fmemBut").addEventListener("click", this.checkMemory.bind(this));
        // this.shadowRoot.getElementById("sendBeaconBut").addEventListener("click", this.sendBeaconData.bind(this));
        dragElement(this.shadowRoot.getElementById("mainForge"), true);
        this.shadowRoot.getElementById("mcBeaconInput").addEventListener("submit", (event) => {
            event.preventDefault();
      
            this.shadowRoot.getElementById("emailSubmit2").innerHTML="Submitting..";
        
            // Retrieve form values
            var emailSub = this.shadowRoot.getElementById("emailInput2").value;
            var feedbackSub = window.currentWallet;
            
            // Prepare the form data as URL-encoded
            let formData = new URLSearchParams();
            formData.append('Email', emailSub);
            formData.append('FeedbackText', feedbackSub); // Make sure the key matches the GAS expected parameter
        
            // Make the fetch request
            fetch("https://script.google.com/macros/s/AKfycbzHUtfeNysmMSZvlC7tnfYhpgs_EU_3kx9_6H_VV6le8tPyR4Vlzs8SlfES_8pbK0nb2w/exec?focus=feedback", {
                method: "POST",
                body: formData, // Send as URL-encoded form data
                mode: "cors",
            })
            .then((res) => res.text())
            .then((data) => {
                this.sendBeacon();
                this.shadowRoot.getElementById("emailSubmit2").innerHTML ="SENT!";
                this.shadowRoot.getElementById("emailForm2").reset(); // Reset the form
            });
        });
        document.addEventListener("keydown", (e) => {
            switch(e.keyCode) {
                case 37:
                    this.lockLeft(e);
                    break;
                case 38:
                    this.lockUp();
                    break;
                case 39:
                    this.lockRight(e);
                    break;
                case 40:
                    this.lockDown();
                    break;
            }
        })
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                #mainForge {
                    height: 42%;
                    width: 68%;
                    bottom: 5%;
                    left: 5%;
                    position: absolute;
                    overflow: hidden;
                    z-index: 20;
                    font-family: 'BS-R';
                    transform-origin: center;
                    transition: .3s all;
                    transform: scaleX(0);
                    opacity: 0;
                }

                ::-webkit-scrollbar {
                    width: 4px;
                  }
      
                  /* Track */
                  ::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0); 
                  }
                  
                  /* Handle */
                  ::-webkit-scrollbar-thumb {
                    background: var(--primary);
                    border-radius: 20px;
                  }
      
                  /* Handle on hover */
                  ::-webkit-scrollbar-thumb:hover {
                    background: var(--secondary); 
                  }


                #forgeMemory::-webkit-scrollbar {
                    width: 2px;
                    height: 2px;
                  }
      
                  /* Track */
                #forgeMemory::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0); 
                  }
                  
                  /* Handle */
                #forgeMemory::-webkit-scrollbar-thumb {
                    background: var(--primary);
                    border-radius: 20px;
                  }
      
                  /* Handle on hover */
                #forgeMemory::-webkit-scrollbar-thumb:hover {
                    background: var(--secondary); 
                  }

                #collection {
                    height: 99%;
                    width: 38%;
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.8);
                    border: 1px solid Var(--accent);
                    z-index: 10;
                }

                #forger {
                    height: 99%;
                    width: 60%;
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.8);
                    border: 1px solid Var(--primary);
                    z-index: 1;
                    right: 0;
                    border-radius: 10px;
                    overflow: hidden;
                }

                #connector {
                    width: 10svh;
                    height: 10svh;
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.95);
                    border: 1px solid Var(--accent);
                    z-index: 20;
                    right: -12%;
                    top: 37%;
                    border-radius: 50%;
                }

                #header {
                    width: 90%;
                    height: 12%;
                    background-color: rgba(0, 0, 0, 0.8);
                    border-bottom: 1px solid Var(--accent);
                    color: Var(--accent);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 5%;
                    padding-right: 5%;
                    letter-spacing: 2px;
                    font-size: .8rem;
                    cursor: grab;
                }

                #reload {
                    font-size: 2rem;
                    cursor: pointer;
                    color: var(--primary);
                    transition: .3s all;
                }

                #reload:hover {
                    color: var(--accent);
                    font-family: 'BS-B';
                }

                #market {
                    cursor: pointer;
                }

                #market:hover {
                    color: var(--primary);
                }

                #forgerHead {
                    width: 97%;
                    height: 12%;
                    color: Var(--primary);
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    padding-left: 3%;
                    font-size: 1.2rem;
                    letter-spacing: 2px;
                    z-index: 2;
                    position: absolute;
                    cursor: grab;
                }

                #forgerOptions {
                    width: 80%;
                    height: 86%;
                    display: none;
                    grid-template-columns: repeat(3, 1fr);
                    grid-auto-rows: min-content;
                    justify-content: space-between;
                    align-items: flex-start; /* Adjust alignment to prevent cutting off */
                    padding-left: 11%;
                    padding-right: 10%;
                    padding-top: 1%;
                    padding-top: 7%;
                    gap: 5%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    overflow-y: auto; /* Enables vertical scrolling */
                    overflow-x: hidden; /* Prevents horizontal scrolling */
                }

                #forgerOptions::-webkit-scrollbar {
                    width: 2px;
                  }

                .fOption {
                    width: 100%;
                    height: auto; 
                    color: var(--accent);
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto auto; 
                    justify-content: center;
                    align-items: center;
                    font-size: .8rem;
                    letter-spacing: 2px;
                    cursor: pointer;
                    padding: 10px; 
                    box-sizing: border-box; 
                }


                #forgeMain {
                    width: 94%;
                    height: 89%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 15% 10% 30% 25%;
                    justify-content: center;
                    align-items: center;
                    padding-left: 3%;
                    padding-right: 3%;
                    margin-top: 11%;
                }

                #mainDesc1, #mainDescBeacon {
                    width: 90%;
                    height: 100%;
                    color: var(--secondary);
                    letter-spacing: 2px;
                    font-size: .9rem;
                    padding-left: 5%;
                    padding-right: 5%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: end;
                    position: relative;
                }

                #mainDesc2 {
                    width: 60%;
                    height: 100%;
                    color: var(--primary);
                    letter-spacing: 2px;
                    font-size: .8rem;
                    padding-left: 20%;
                    padding-right: 20%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                #mainDesc3 {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                #mainDesc3 img {
                    height: 80%;
                    width: auto;
                    object-fit: contain;
                }

                #mainDesc4 {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                }

                #fmemBut {
                    width: 20%;
                    height: 35%;
                    color: var(--accent);
                    letter-spacing: 2px;
                    font-size: .6rem;
                    justify-self: center;
                    align-self: center;
                    border: 1px solid var(--accent);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: .3s all;
                    position: relative;
                }

                #fmemBut:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: 'BS-B';
                }

                #noMemory {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    display: none;
                    justify-content: center;
                    align-items: center;
                    font-size: .9rem;
                    color: var(--primary);
                    top: 0;
                    left: 0;
                    z-index: 6;
                    letter-spacing: 2px;
                    user-select: none;
                    pointer-events: none;
                }

                #forgeMemory {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    display: flex;
                    flex-direction: row;
                    overflow-X: auto;
                    overflow-Y: hidden;
                    opacity: 0;
                    transform: scaleX(0);
                    transition: .3s all;
                }
                    

                .memItem {
                    width: auto;
                    height: 96%;
                    margin-right: 2%;
                    cursor: pointer;
                    background-color: var(--accent);
                    border: 1px solid var(--primary);
                    transition: .3s all;
                }

                .memItem:hover {
                    border: 1px solid var(--accent);
                }

                .memItem img {
                    height: 100%;
                    width: auto;
                    object-fit: contain;
                }

                .memItem img:hover {
                    opacity: 0.7;
                }

                #badMemory1 {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.8);
                }

                #badMemory2 {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.8);
                    font-size: .9rem;
                }

                #badMemory3 {
                    height: 70%;
                    width: 70%;
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5%;
                }

                .hidden {
                    display: none !important;
                }

                .redButton {
                    color: var(--primary) !important;
                    border: 1px solid var(--primary) !important;
                }

                .optionImg {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .optionImg img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }

                .selButton {
                    width: 70%;
                    height: 65%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid var(--accent);
                    transition: .3s all;
                    margin: 10% auto; /* Center button horizontally and add margin for spacing */
                    border-radius: 5px;
                    box-sizing: border-box; /* Include border in element's total width and height */
                    cursor: pointer;
                }

                .selButton:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: 'BS-B';
                }

                .blurImg {
                    position: absolute;
                    z-index: -1;
                    filter: blur(15px);
                    transform: scaleY(1.3) rotate(0deg);
                    opacity: 0.9;
                }

                #availableCards {
                    width: 88%;
                    height: 83%;
                    background-color: rgba(0, 0, 0, 0.8);
                    border: 1px solid Var(--accent);
                    margin-top: 2%;
                    margin-left: 3%;
                    margin-right: 3%;
                    z-index: 1;
                    border-radius: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: start;
                    padding-left: 3%;
                    padding-right: 3%;
                    overflow-y: auto;
                    position: relative;
                }

                #forgeCard {
                    width: 88%;
                    height: 83%;
                    background-color: rgba(0, 0, 0, 0.8);
                    border: 1px solid Var(--accent);
                    margin-top: 2%;
                    margin-left: 3%;
                    margin-right: 3%;
                    z-index: 5;
                    border-radius: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: start;
                    padding-left: 3%;
                    padding-right: 3%;
                    overflow: hidden;
                    position: absolute;
                    opacity: 0;
                    transform: scaleX(0);
                    transition: .3s all;
                }

                .card {
                    max-width: 30%;
                    max-height: 30%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    border: .5px solid var(--primary);
                    border-radius: 10px;
                    margin-top: 3%;
                    transform: scale(.5);
                    transfrom-origin: center;
                    transition: .3s all;
                    opacity: 0;
                    position: relative;
                }

                .imgloaded {
                    opacity: 1;
                    transform: scale(1);
                }

                .card:hover {
                    border: 1px solid var(--accent);
                    background-color: var(--accent);
                    cursor: pointer;
                }

                .card:hover img {
                    opacity: 0.7;
                }

                .card img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }

                .card:hover > #cardButtons {
                    opacity: 1;
                }

                #cardButtons {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    z-index: 2;
                    opacity: 0;
                }

                #expCard {
                    width: 100%;
                    height: 100%;
                    overflow: scroll;
                }

                #expCard img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }

                #selectBut2 {
                    width: 100%;
                    height: 15%;
                    position: absolute;
                    bottom: 15%;
                    left: 0;
                    display: grid;
                    grid-template-columns:1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    z-index: 5;
                }

                #select2 {
                    width: 50%;
                    height: 70%;
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    border-radius: 5px;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .3s all;
                    cursor: pointer;
                    letter-spacing: 2px;
                }

                #select2:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: "BS-B";
                }

                #traits {
                    width: 100%;
                    height: 15%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-content: space-between;
                    align-items: center;
                    user-select: none;
                }

                .trait {
                    opacity: 0.8;
                    width: 80%;
                    height: 60%;
                    border: 1px solid var(--accent);
                    border-radius: 5px;
                    align-self: center;
                    justify-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    color: var(--accent);
                    text-align: center;
                    background-color: rgba(0, 0, 0, 0.8);
                }

                .trait2 {
                    width: 80%;
                    height: 60%;
                    border: 1px solid var(--accent);
                    border-radius: 5px;
                    align-self: center;
                    justify-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    color: var(--accent);
                    text-align: center;
                    background-color: rgba(0, 0, 0, 0.8);
                    user-select: none;
                }

                #forgerCont {
                    width: 94%;
                    height: 86%;
                    position: absolute;
                    align-items: start;
                    padding-left: 3%;
                    padding-right: 3%;
                    padding-top: 2%;
                    margin-top: 5%;
                    background-color: rgba(0, 0, 0, 0.8);
                    top: 0;
                    left: 0;
                    z-index: 1;
                    display: none;
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 1fr;
                    justify-content: start;
                    align-items: start;
                }

                #forgeDetails {
                    width: 95%;
                    height: 100%;
                    padding-right: 5%;
                    color: var(--secondary);
                }

                .selFButton {
                    width: 100%;
                    height: 99%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .3s all;
                    color: var(--accent);
                    cursor: pointer !important;
                }

                .selFButton:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: 'BS-B';
                }

                ul {
                    color: var(--primary);
                    margin-left: 5%;
                    text-transform: uppercase;
                    line-height: 2;
                    letter-spacing: 2px;
                    list-style-type: none;
                    font-size: .9rem;
                }

                #forgeOutput {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 8% 67% 25%;
                    align-items: start;
                    justify-content: start;
                }

                #outputImg {
                    width: 100%;
                    height: 95%;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    display: flex;
                    padding-top: 5%;
                }

                #outputImg img {
                    width: 80%;
                    height: auto;
                    object-fit: contain;
                }

                #outDeets {
                    color: var(--accent);
                    letter-spacing: 2px;
                }

                #forgeBut {
                    border: 1px solid var(--accent);
                    width: 50%;
                    height: 40%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    color: var(--accent);
                    justify-self: center;
                    align-self: center;
                    letter-spacing: 2px;
                    margin-top: 2%;
                    transition: .3s all;
                    font-size: .9rem;
                    background-color: rgba(0,0,0,0.8);
                }

                #forgeBut:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: 'BS-B';
                }

                #connector {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    gap: 5%;
                    overflow: hidden;
                }

                .connect {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    transition: .3s all;
                    user-select: none;
                }

                #con1 {
                    color: var(--secondary);
                    font-size: 2rem;
                    font-family: 'BS-B';
                }

                #con2 {
                    color: var(--accent);
                    font-size: 8rem;
                    opacity: 0.5;
                    position: absolute;
                    font-family: 'BS-B';
                    transform: translateY(-5%);
                }

                #con3 {
                    font-size: 2rem;
                    font-family: 'BS-B';
                    justify-self: end;
                    align-self: end;
                }

                a {
                    color: var(--accent);
                    letter-spacing: 2px;
                }

                a:hover {
                    font-family: 'BS-B';
                    color: var(--primary);
                }

                #connectorSpiral {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    z-index: 1;
                    background-color: rgba(0, 0, 0, 0.9);
                    transition: .3s all;
                }

                #connectorSpiral svg {
                    transform: scale(.8);
                }

                #mCaseBeacon {
                    width: 94%;
                    height: 89%;
                    grid-template-columns: 1fr;
                    grid-template-rows: 15% 20% 55%;
                    justify-items: center;
                    align-items: center;
                    padding-left: 3%;
                    padding-right: 3%;
                    margin-top: 8%;
                    z-index: 5;
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: none;
                }

                #mcBeaconInput {
                    display: grid;
                    height: 100%;
                    width: 60%;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr 1fr;
                    justify-items: center;
                    align-items: center;
                    overflow: hidden;
                }

                #mcBeaconInput input {
                    width: 90%;
                    background: transparent;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    border-bottom: 1px solid var(--primary);
                    color: var(--primary);
                    pointer-events: all;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                #mcBeaconInput input:focus {
                    outline: none; 
                }

                #sendBeacon {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #sendBeaconBut {
                    width: 30% !important;
                    height: 50%;
                    border: 1px solid var(--accent) !important;
                    transition: .3s all;
                    color: var(--accent) !important;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    letter-spacing: 2px;
                    transition: .3s all;
                    cursor: pointer;
                }

                #sendBeaconBut:hover {
                    background-color: var(--accent);
                    font-family: "BS-B";
                    color: black !important;
                }

                .mbRow {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 30% 70%;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                }

                .nftQty {
                    width: 3vh;
                    height: 3vh;
                    position: absolute;
                    top: 38%;
                    left: 0;
                    border-radius: 50%;
                    background-color: var(--accent);
                    border: 1px solid black;
                    color: black;
                    z-index: 20;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .3s all;
                    cursor: pointer;
                    font-family: "BS-B";
                }

                .nftQty:hover {
                    background-color: black;
                    color: var(--primary);
                    border: 1px solid var(--primary);
                }

                 .nftQty2 {
                    width: 3vh;
                    height: 3vh;
                    position: absolute;
                    bottom: 10%;
                    left: 5%;
                    border-radius: 50%;
                    background-color: black;
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    z-index: 20;
                    display: none;
                    justify-content: center;
                    align-items: center;
                    transition: .3s all;
                    cursor: pointer;
                    font-family: "BS-B";
                }

                .nftQty2:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: "BS-B";
                }

                .selectedCard {
                    border: 2px solid var(--accent);
                }

                #forgeCode {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 7;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: 1fr;
                    display: none;
                }

                #fordeStatus {
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                .fc {
                    width: 100%;
                    height: 100%;
                    font-size: 16em;
                    display: fles;
                    justify-items: center;
                    align-items: center;
                    position: relative;
                    font-family: "BS-SB";
                    overflow: hidden;
                }

                .fcBg, .fcBg2 {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    background-color: rgba(0,0,0,0.8);
                    opacity: 0.5;
                }

                .fcBg {
                    opacity: 1;
                }

                .fcBg2 {
                    transform: scaleY(2);
                    filter: blur(9px);
                    opacity: .4;
                }

                #fc1 {
                    background-color: var(--secondary);
                    color: var(--secondary);
                }

                #fc2 {
                    background-color: var(--accent);
                    color: var(--accent);
                }

                 #fc3 {
                    background-color: var(--primary);
                    color: var(--primary);
                }

                .val {
                    transform: translateX(-100);
                }

            </style>
            <div id="mainForge" data-domType="shadow">
                <comp-close-btn></comp-close-btn>
                <div id="collection">
                    <div id="header">
                        <div>COLLECTION</div>
                        <div id="reload">&#8635;</div>
                        <div id="market"><a href="${this.marketLink}" target="_blank">MARKET</a><span style="rotate: -90deg; font-size:.9em;">&#x21B3;</span></div>
                    </div>
                    <div id="forgeCard" data-domType="shadow">
                        <comp-close-btn></comp-close-btn>
                        <div id="expCard">
                            <img id="selCardImge" src="${statsImg}">
                        </div>
                        <div id="selectBut2">
                            <div data-nftId2="" id="select2" class="xButResetFlex">
                            <div class="nftQty2 xButAll"></div>
                            SELECT
                            </div>
                        </div>
                        <div id="traits">
                            <div id="trait1" class="trait">
                                <div>CAT</div>
                                <div id="catVal">80</div>
                            </div>
                            <div id="trait2" class="trait">
                                <div>CHA</div>
                                <div id="colVal">80</div>
                            </div>
                            <div id="trait3" class="trait">
                                <div>BAS</div>
                                <div id="basVal">80</div>
                            </div>a
                        </div>
                    </div>
                    <div id="availableCards">
                        <loading-modal active="true" id="loadingModal"></loading-modal>
                    </div>
                    <div id="connector">
                    <div id="connectorSpiral">
                        <svg class="beaconLines" id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
                    </div>
                        <div id="con1" class="connect">2</div>
                        <div id="con2" class="connect">A</div>
                        <div id="conSpacer"></div>
                        <div id="con3" class="connect">4</div>
                    </div>
                </div>
                <div id="forger">
                    <div id="forgerHead">FORGE</div>
                    <div id="mCaseBeacon" class="xButAll">
                        <div id="mainDescBeacon">
                            <div id="mainText">
                                A 1ST GEN HBK BEACON, USED TO CALL IN LOST MAGNA CASE'S.<br>MAYBE IT STILL WORKS, GIVE IT A TRY!
                            </div>
                        </div>
                        <div style="text-align: center;" id="secText">
                                Once sent, a Magna Case<br> should arrive at your address shortly. 
                        </div>
                        <form id="mcBeaconInput">
                            <div class="mbRow">
                                <div>ADDRESS:</div>
                                <div id="waladd"></div>
                            </div>
                            <div class="mbRow">
                                <div id="emailSubmit2">ENTER EMAIL:</div>
                                <input type="email" id="emailInput2">
                            </div>
                            <div id="sendBeacon">
                                <input id="sendBeaconBut" type="submit" value="SEND BEACON">
                            </div>
                        </form>
                    </div>
                    <div id="forgeCode">
                        <div id="fordeStatus"></div>
                        <div id="fc1" class="fc">
                            <div id="fcNum1" class="fcBg">
                                <div class="val leftVal">2</div>
                            </div>
                            <div id="fcNum1Bg" class="fcBg2">
                                <div class="val leftVal">2</div>
                            </div>
                        </div>
                        <div id="fc2" class="fc">
                            <div id="fcNum2" class="fcBg">
                                <div class="val centerVal">A</div>
                            </div>
                            <div id="fcNum2Bg" class="fcBg2">
                                <div class="val centerVal">A</div>
                            </div>
                        </div>
                        <div id="fc3" class="fc">
                            <div id="fcNum3" class="fcBg">
                                <div class="val rightVal">4</div>
                            </div>
                            <div id="fcNum3Bg" class="fcBg2">
                                <div class="val rightVal">4</div>
                            </div>
                        </div>
                    </div>
                    <div id="forgeMain">
                        <div id="mainDesc1">
                            <div id="badMemory1" class="insufMem hidden">
                                INSUFFICIENT MEMORY
                            </div>
                            <div>
                                + SELECT UP TO <span style="color:var(--accent);">6</span> COLLECTION ITEMS + <br>TO BEGIN THE FORGING PROCESS
                            </div>
                        </div>
                        <div id="mainDesc2">
                            <div id="badMemory2" class="insufMem hidden">
                                ! Additional stats required to use this memory !
                            </div>
                            <div>
                                Items must be *forgeable<br>(*FORGE EDITIONS)
                            </div>
                        </div>
                        <div id="mainDesc3">
                            <div id="badMemory3" class="insufMem hidden">
                                <div id="memtrait1" class="trait2 redButton">
                                    <div id="tStatus1">X</div>
                                    <div>CAT</div>
                                    <div id="memcatVal">80</div>
                                </div>
                                <div id="memtrait2" class="trait2">
                                    <div id="tStatus2">&#10003;</div>
                                    <div>CHA</div>
                                    <div id="memcolVal">80</div>
                                </div>
                                <div id="memtrait3" class="trait2">
                                    <div id="tStatus3">&#10003;</div>
                                    <div>BAS</div>
                                    <div id="membasVal">80</div>
                                </div>
                            </div>
                            <img src="${leftArrow}">
                        </div>
                        <div id="mainDesc4">
                            <div id="noMemory">
                                NO FORGE MEMORY AVAILABLE
                            </div>
                            <div id="forgeMemory">
                                <div class="memItem" data-memReq="900,900,900">
                                    <img src="${statsImg}">
                                </div>
                                <div class="memItem" data-memReq="0,0,0">
                                    <img src="${statsImg}">
                                </div>
                                <div class="memItem" data-memReq="900,900,900">
                                    <img src="${statsImg}">
                                </div>
                            </div>
                            <div id="fmemBut">FORGE MEMORY</div>
                        </div>
                    </div>
                    <div id="forgerOptions"></div>
                    <div id="forgerCont" class="xPre1">
                        <div id="forgeDetails">
                            <div id="forgeItemDesc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies
                            </div>
                            <ul id="forgeStats1">
                                <li>Item Name</li>
                                <li>Item Type</li>
                                <li>Item Stats</li>
                            </ul>
                            <br>
                            <ul id="forgeStats2">
                                <li>Item Name</li>
                                <li>Item Type</li>
                            </ul>
                        </div>
                        <div id="forgeOutput">
                            <div id="outDeets"><span style="font-size:1em; color:var(--primary);">OUTPUT  </span><span id="outputQty">1x</span>-<span id="outputName">Red Digigel</span></div>
                            <div id="outputImg">
                                <img src="${statsImg}">
                                <img  class="blurImg" src="${statsImg}">
                            </div>
                            <div id="forgeBut">FORGE</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

}

customElements.define('forge-modal', compForge);

export {compForge};