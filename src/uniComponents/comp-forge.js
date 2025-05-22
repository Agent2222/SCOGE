import { dragElement } from "../universe";
import statsImg from "../../assets/images/cards/digi-stats-1.jpg";
import leftArrow from "../../assets/images/icons/left-arrow.png";
import magnaCase1 from "../../assets/images/cards/scoge_magna-case-1.jpg";
import { forgeable } from "./comp-wallets";
import { gsap } from "gsap/gsap-core";
import { SoundtrackManager2 } from "../soundtrack";

import sButton from "../../assets/sound/Forge-Masters/forge-button-1.mp3";
import sCodeComplete from "../../assets/sound/Forge-Masters/forge-codeComplete-1.mp3";
import sCodeShift from "../../assets/sound/Forge-Masters/forge-codeshift-1.mp3";
import sCountdown from "../../assets/sound/Forge-Masters/forge-countdown-1.mp3";
import sDiscovered from "../../assets/sound/Forge-Masters/forge-discovered-1.mp3";
import sDesc from "../../assets/sound/Forge-Masters/forge-open-desc-1.mp3";
import sShiftCode from "../../assets/sound/Forge-Masters/forge-shiftCode-1.mp3";
import sStartPulse from "../../assets/sound/Forge-Masters/forge-StartPulse-1.mp3";
import sTimeReset from "../../assets/sound/Forge-Masters/forge-timerReset-1.mp3";
import sSoundtrack from "../../assets/sound/Forge-Masters/forge-soundtrack-1.mp3";


export const forgelib = async () => {
    const httpUrl = "https://uqjdj-siaaa-aaaag-aaoxq-cai.icp0.io/assets/nfts/fgLib.json";
    const response = await fetch(httpUrl);
    const lib = await response.json();
    return lib;
}

class compForge extends HTMLElement {
    constructor() {
        super();
        this.soundtrack = null;
        this.attachShadow({mode: 'open'});
        this.marketLink = "https://opensea.io/collection/scoge-1";
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
        this.centerVal = null;
        this.movingRight = false;
        this.codeColorPositon = ["s","a","p"]
        this.currentNumbersFin = [];
        this.colorOpts = null;
        this.keyAr = null;
        this.fp = 0;
        this.forgeComplete = false;
        this.alphanumericArray = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        this.forgeGoal = [];
        this.forgeEndur = 30000;
        this.scale = 1;
        this.intervalTime = 50;
        this.currentConnector = "connector";
        this.decrement  = (1 / (this.forgeEndur / this.intervalTime));
        this.forgeDecay = null;
        this.decayGate = true;
        this.colorsBase = ["var(--primary)", "var(--secondary)", "var(--accent)"];
        this.colorOptions = ["var(--primary)", "var(--secondary)", "var(--accent)"];
        this.forgeSoundtrack = null;
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
                        hash = nft.nft.image.replace("ipfs://", "https://52ecc14ce71f7fe5cfc6f381627730cc.ipfscdn.io/ipfs/");
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
                                this.shadowRoot.getElementById("forgeMain").style.display = "grid";
                                this.shadowRoot.getElementById("inventoryMainLoading").style.display = "none";
                                this.shadowRoot.getElementById("marketTabSelect").classList.remove("inactiveTab");

                                this.shadowRoot.querySelectorAll(".imTab").forEach((el) => {
                                    el.addEventListener("click", (e) => {
                                        this.selectTab(e);
                                    });
                                });

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

    mint() {}

    burn() {}

    openPack() {}

    buildMarket(e1, e2) {
       //
    }

    loadSoundtrack() {

        this.forgeSoundtrack = [
            { key: "forge-button-1", src: sButton, artist: 'Forge', title: 'forge-button-1' },
            { key: "forge-codeComplete-1", src: sCodeComplete, artist: 'Forge', title: 'forge-codeComplete-1' },
            { key: "forge-codeshift-1", src: sCodeShift, artist: 'Forge', title: 'forge-codeshift-1' },
            { key: "forge-countdown-1", src: sCountdown, artist: 'Forge', title: 'forge-countdown-1' },
            { key: "forge-discovered-1", src: sDiscovered, artist: 'Forge', title: 'forge-discovered-1' },
            { key: "forge-open-desc-1", src: sDesc, artist: 'Forge', title: 'forge-open-desc-1' },
            { key: "forge-shiftCode-1", src: sShiftCode, artist: 'Forge', title: 'forge-shiftCode-1' },
            { key: "forge-StartPulse-1", src: sStartPulse, artist: 'Forge', title: 'forge-StartPulse-1' },
            { key: "forge-timeReset-1", src: sTimeReset, artist: 'Forge', title: 'forge-timeReset-1' },
            { key: "forge-soundtrack-1", src: sSoundtrack, artist: 'Forge', title: 'forge-soundtrack-1' }
        ]

        this.soundtrack = new SoundtrackManager2(this.forgeSoundtrack);
        this.soundtrack.importNewTracks();
    }

    openCheckout(checkout) {
        let mainCont = this.shadowRoot.getElementById("marketCheckout");
        let coCont = this.shadowRoot.getElementById("marketCheckoutModal");

        mainCont.style.backgroundColor = "rgba(0,0,0,0.4)";
        mainCont.style.userSelect = "auto";
        mainCont.style.pointerEvents = "auto";

        coCont.style.bottom = "0%";
    }

    closeCheckout() {
        let mainCont = this.shadowRoot.getElementById("marketCheckout");
        let coCont = this.shadowRoot.getElementById("marketCheckoutModal");

        mainCont.style.backgroundColor = "rgba(0,0,0,0.0)";
        mainCont.style.userSelect = "none";
        mainCont.style.pointerEvents = "none";

        coCont.style.bottom = "-70%";
    }

    buildCheckout() {}

    pay() {
        this.shadowRoot.getElementById("forgeMain").style.display = "none";
        this.shadowRoot.getElementById("marketMain").style.display = "none";
        this.shadowRoot.getElementById("loadingIcon").style.display = "block";
        this.shadowRoot.getElementById("inventoryMainLoading").style.display = "grid";
        this.shadowRoot.getElementById("loadingText").innerHTML = "ASSET INBOUND";
        document.getElementById("forgeModal").shadowRoot.getElementById("loadingModal").startLoading();

        // TEMP 
        setTimeout(() => {
            document.getElementById("forgeModal").shadowRoot.getElementById("loadingModal").stopLoading();
            this.shadowRoot.getElementById("forgeMain").style.display = "grid";
            this.shadowRoot.getElementById("marketMain").style.display = "grid";
            this.shadowRoot.getElementById("loadingIcon").style.display = "none";
            this.shadowRoot.getElementById("loadingText").innerHTML = "LOADING INVENTORY";
            this.shadowRoot.getElementById("inventoryMainLoading").style.display = "none";
        }, 8000);
    }

    payConfirm() {

    }

    payError() {}

    selectTab(e) {
        let tabs = this.shadowRoot.querySelectorAll(".imTab");
        let mainForge = this.shadowRoot.getElementById("forgeMain");
        let mainMarket = this.shadowRoot.getElementById("marketMain");
        let beacon = this.shadowRoot.getElementById("mCaseBeacon");
        let forger = document.getElementById("forgeModal").shadowRoot?.getElementById("mainForge");

        tabs.forEach((tab) => {
            if (tab.id != "imTabSpacer") {
                tab.classList.add("nonSelImTab");
            }
        })
        e.target.classList?.remove("nonSelImTab");

         // get the custom element named comp-close-btn in #forgeCard 

        switch (e.target.id) {
            case "forgeTabSelect":
                mainForge.style.display = "grid";
                mainMarket.style.display = "none";
                this.shadowRoot.getElementById("forgeCard").querySelector("comp-close-btn").shadowRoot.getElementById("main").click();
                dragElement(this.shadowRoot.getElementById("mainForge"), true);
            break;
            case "marketTabSelect":
                mainForge.style.display = "none";
                beacon.style.display = "none";
                mainMarket.style.display = "grid";
                this.shadowRoot.getElementById("forgeCard").querySelector("comp-close-btn").shadowRoot.getElementById("main").click();
                dragElement(this.shadowRoot.getElementById("mainForge"), true);
            break;
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
        this.selectTab({target: { id: "forgeTabSelect" }});
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
        this.selectTab({target: { id: "forgeTabSelect" }});
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
        // #main
        this.shadowRoot.getElementById("forgerCont").setAttribute("class", "xPre2");
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
        this.shadowRoot.getElementById("forgeBut").addEventListener("click", () => {
            this.shadowRoot.getElementById("forgeCode").style.display = "grid";
            // this.shadowRoot.getElementById("connectorSpiral").style.display = "none";
            this.initForge();
        })
    }

    // this.allVal = this.shadowRoot.querySelectorAll(".val");
    // this.leftVal = this.shadowRoot.getElementById(".leftVal");
    // this.rightVal = this.shadowRoot.getElementById(".rightVal");

    async lockUp() {
        // forgeCode
        this.soundtrack.stop('forge-button-1');
        this.soundtrack.play('forge-button-1');
        this.centerVal.forEach(async(ele)=> {
            if (this.movingRight === false) {
                gsap.timeline()
                .to(ele, { y: 200, duration: 0.05, ease: "power1.inOut" }) 
                .to(ele, { y: -200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { y: 200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { y: 0, duration: 0.1, ease: "power1.inOut" })

                var numberEl2 = this.shadowRoot.querySelectorAll(".centerVal");
                var currentNumbers = numberEl2[0].innerHTML;
                let result2 = await this.isNumericPromise(numberEl2[0].innerHTML);
        
                if (result2 === true) {
                    if (Number(currentNumbers) === 9) {
                        numberEl2.forEach((el1) => {
                            el1.innerHTML = "A";
                        })
                        return;
                    } else {
                        numberEl2.forEach((el1) => {
                            el1.innerHTML = Number(currentNumbers) +1;
                        })
                    }
                    return;
                } else {
                    // letters
                    if (currentNumbers === "Z") {
                        numberEl2.forEach((el1) => {
                            el1.innerHTML = 0;
                        })
                        return;
                    } else {
                        const index = this.alphanumericArray.indexOf(currentNumbers);
                        numberEl2.forEach((el1) => {
                            el1.innerHTML = this.alphanumericArray[(index + 1) % this.alphanumericArray.length];
                        })
                    }
                }
            }
        })

        this.trippleCheck();
    }

    randomVal() {
        return new Promise((resolve,reject) => {
            try {
                const result = Math.floor(Math.random() * 37);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    }

    async initForge(difficulty) {
        // Add switch statement for difficulty
        // this.fp = 2;
        // this.forgeEndur = 5000;
        console.log("initForge");
        this.forgeDecayChecker();
        window.soundtrack.setVolume("forgeInit", 0.7);
        window.soundtrack.play('forgeInit');
        this.soundtrack.play('forge-soundtrack-1');
        this.soundtrack.play('forge-countdown-1');
        this.soundtrack.loop('forge-soundtrack-1');
        this.soundtrack.loop('forge-countdown-1');
        this.soundtrack.play('forge-StartPulse-1');

        this.shadowRoot.getElementById("forgeFocus").style.display = "block";
        
        // center #mainForge in the screen based on the width and height of the screen and the element
        var forgeFocus = this.shadowRoot.getElementById("mainForge");
        var forgeFocusRect = forgeFocus.getBoundingClientRect();
        var forgeFocusWidth = forgeFocusRect.width;
        var forgeFocusHeight = forgeFocusRect.height;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var forgeFocusX = (windowWidth - forgeFocusWidth) / 2;
        var forgeFocusY = (windowHeight - forgeFocusHeight) / 2;
        forgeFocus.style.left = `${forgeFocusX}px`;
        forgeFocus.style.top = `${forgeFocusY}px`;


        this.colorOpts = Math.floor(Math.random() * this.colorOptions.length);
        this.keyAr = this.shadowRoot.querySelectorAll(".connect");

        for (let i = 0; i < 3; i++) {
            var key = await this.randomVal();
            // var key = await Math.floor(Math.random() * 37);
            this.keyAr[i].innerHTML = this.alphanumericArray[key];
            this.forgeGoal.push(this.alphanumericArray[key]);
        }

        switch (this.colorOpts) {
            case 0:
                this.keyAr[0].style.color = this.colorOptions[0];
                this.keyAr[1].style.color = this.colorOptions[1];
                this.keyAr[2].style.color = this.colorOptions[2];
            break;
            case 1:
                this.keyAr[0].style.color = this.colorOptions[1];
                this.keyAr[1].style.color = this.colorOptions[2];
                this.keyAr[2].style.color = this.colorOptions[0];
            break;
            case 2:
                this.keyAr[0].style.color = this.colorOptions[2];
                this.keyAr[1].style.color = this.colorOptions[0];
                this.keyAr[2].style.color = this.colorOptions[1];
            break;
        }

        var card = this.shadowRoot.getElementById("forgeSelection");
        gsap.to(card, {
            transform: "translateX(0px)", 
            duration: 0.3, 
            ease: "power1.inOut" 
        })
        card.style.position = "sticky";
        if (this.forgeComplete === false) {
            setTimeout(()=> {
                var spiral1 = this.shadowRoot.getElementById("connectorSpiral");
                gsap.to(spiral1, {
                    transform: "scale(2)",
                    delay: .5, 
                    opacity: 0,
                    duration: 0.2, 
                    ease: "power1.inOut" 
                })
            },400)
        }
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.lockLeft();
            }, 50 * i)
        }

        this.shadowRoot.querySelectorAll(".connect").forEach((el) => {
            if (el.innerHTML === "undefined") {
                this.decayGate = true;
                this.fp = null;
                clearInterval(this.forgeDecay);
                this.scale = 0;
                this.forgeDecayChecker();
            }
        });

    }

    isSameCode(value, position) {
        return new Promise((resolve,reject) => {
            try {
                const result = this.isMatch(value, position);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    }

    forgeDecayChecker() {
        var connector = this.shadowRoot.getElementById("connector");
        var connector2 = this.shadowRoot.getElementById("connector2");
        var connector3 = this.shadowRoot.getElementById("connector3");
        clearInterval(this.forgeDecay);
        // this.scale = 1;
        this.forgeDecay = setInterval(() => {
            this.scale -= this.decrement; // Reduce the scale
            if (this.scale <= 0 && this.decayGate === true) {
                clearInterval(this.forgeDecay); // Stop when scale reaches 0
                this.scale = 1;

                switch (this.fp) {
                    case 0:
                        this.soundtrack.stop('forge-soundtrack-1');
                        this.soundtrack.stop('forge-countdown-1');
                        console.log("Forge Failed"," - Checking FP", this.fp);
                        clearInterval(this.forgeDecay);
                        // clearInterval(document.getElementById("forgeModal").forgeDecay);
                        this.scale = 1;
                        this.fp = 0;
                        this.currentConnector = "connector";
                        this.shadowRoot.getElementById("forgeFailed").style.display = "grid";
                        this.shadowRoot.getElementById("connectorSpiral").style.opacity = "1";
                        this.decayGate = false;
                        gsap.to(connector, { 
                            rotation: 0, // Rotate 360 degrees
                            duration: 3,   // Duration of 2 seconds
                            ease: "power3.inOut", // Easing function
                            scale: 1
                        });
                        gsap.to(connector2, { 
                            top: "37%",
                            rotation: 0, // Rotate 360 degrees
                            duration: 2,   // Duration of 2 seconds
                            ease: "power3.inOut", // Easing function
                            zIndex: 0
                        });
                        gsap.to(connector3, { 
                            bottom: "37%",
                            rotation: 0, // Rotate 360 degrees
                            duration: 2,   // Duration of 2 seconds
                            ease: "power3.inOut", // Easing function
                            zIndex: 0
                        });
                        setTimeout(() => {
                            connector2.style.display = "block";
                            connector3.style.display = "block";
                        }, 3000);
                        this.decayGate = false;
                    break;
                    case 1:
                        this.forgeGoal = [];
                        console.log("Decayed 1", this.forgeGoal);
                        this.initForge();
                        this.scale = 1;
                        this.currentConnector = "connector";
                        this.fp = 0;
                        // this.forgeDecayChecker();
                        gsap.to(connector2, { 
                            top: "37%",
                            rotation: 3600, // Rotate 360 degrees
                            duration: 2,   // Duration of 2 seconds
                            ease: "power3.inOut", // Easing function
                            zIndex: 0
                        });
                        setTimeout(() => {
                            connector2.style.display = "none";
                        }, 2000)
                    break;
                    case 2:
                        this.forgeGoal = [];
                        console.log("Decayed 2", this.forgeGoal);
                        this.initForge();
                        this.scale = 1;
                        this.currentConnector = "connector";
                        this.fp = 1;
                        this.forgeDecayChecker();
                        gsap.to(connector3, { 
                            top: "37%",
                            rotation: 3600, // Rotate 360 degrees
                            duration: 2,   // Duration of 2 seconds
                            ease: "power3.inOut", // Easing function
                            zIndex: 0
                        });
                        setTimeout(() => {
                            connector3.style.display = "none";
                        }, 2000)
                        // alert("Two Lives Left");
                    break;
                    case null:
                        this.soundtrack.stop('forge-soundtrack-1');
                        this.soundtrack.stop('forge-countdown-1');
                        console.log("Calling NULL");
                        this.scale = 1;
                        this.currentConnector = "connector";
                        this.shadowRoot.getElementById("forgeError").style.display = "grid";
                        this.shadowRoot.getElementById("forgeSuccess").style.display = "none";
                        this.fp = 0;
                        gsap.to(connector, { 
                            rotation: 0, // Rotate 360 degrees
                            duration: 3,   // Duration of 2 seconds
                            ease: "power3.inOut", // Easing function
                            scale: 1
                        });
                        gsap.to(connector2, { 
                            top: "37%",
                            rotation: 0, // Rotate 360 degrees
                            duration: 2,   // Duration of 2 seconds
                            ease: "power3.inOut", // Easing function
                            zIndex: 0
                        });
                        gsap.to(connector3, { 
                            bottom: "37%",
                            rotation: 0, // Rotate 360 degrees
                            duration: 2,   // Duration of 2 seconds
                            ease: "power3.inOut", // Easing function
                            zIndex: 0
                        });
                        setTimeout(() => {
                            connector2.style.display = "block";
                            connector3.style.display = "block";
                        }, 3000);
                        this.decayGate = false;
                        setTimeout(() => {
                            document.getElementById("forgeModal").shadowRoot.getElementById("connectorSpiral").style.opacity = "1";
                        }, 1200);
                    break;
                }
                return;
            }

            this.shadowRoot.getElementById(this.currentConnector).style.transform = `scale(${this.scale})`;
        }, this.intervalTime);
    }

    async trippleCheck() {
        var check = await this.isSameCode(this.leftVal[0], 0)
        var check2 = await this.isSameCode(this.centerVal[0], 1)
        var check3 = await this.isSameCode(this.rightVal[0], 2)

        if (check === true && check2 === true && check3 === true) {
            console.log("fp", this.fp);
            switch (this.fp) {
                case 0:
                    console.log("Calling Here 1");
                    // decay algorithm
                    // this.forgeDecayChecker();
                    this.forgeLvlPass(1);
                    this.fp = 1; 
                break;
                case 1:
                    // decay algorithm
                    console.log("Calling Here 2");
                    // this.forgeDecayChecker();
                    this.forgeLvlPass(2);
                    // this.fp = 2;
                break;
                case 2:
                    // decay algorithm
                    console.log("Calling Here 3");
                    this.forgeLvlPass(3);
                    clearInterval(this.forgeDecay);
                    // this.fp = 0;
                break;
                case null:
                    console.log("Calling Here 4");
                    // decay algorithm
                    this.fp = 0; 
                    // this.forgeDecayChecker();
                    this.forgeLvlPass(1);
                break;
            }
            return true;
        }
    }

    forgeLvlPass(lvl) {
        var connector = this.shadowRoot.getElementById("connector");
        var connector2 = this.shadowRoot.getElementById("connector2");
        var connector3 = this.shadowRoot.getElementById("connector3");
        this.forgeGoal = [];
        console.log("Forge Level Passed");
        switch(lvl) {
            case 1:
                this.soundtrack.play('forge-codeComplete-1');
                clearInterval(this.forgeDecay);
                this.scale = 1;
                this.fp = 1;
                connector2.style.display = "block";
                setTimeout(() => {
                    gsap.to(connector2, {
                        top: "7%",
                        duration: .3,
                        ease: "power3.inOut",
                        zIndex: 1
                    })
                    this.soundtrack.play('forge-timeReset-1');
                }, 500)
                gsap.to(connector, { 
                    rotation: 3600, // Rotate 360 degrees
                    duration: 2,   // Duration of 2 seconds
                    ease: "power3.inOut" // Easing function
                });
            break;
            case 2:
                this.soundtrack.play('forge-codeComplete-1');
                clearInterval(this.forgeDecay);
                this.scale = 1; 
                this.fp = 2;
                connector3.style.display = "block";
                setTimeout(() => {
                    gsap.to(connector3, {
                        bottom: "7%",
                        duration: .3,
                        ease: "power3.inOut",
                        zIndex: 1
                    })
                    this.soundtrack.play('forge-timeReset-1');
                }, 500)
                gsap.to(connector, { 
                    rotation: 0, // Rotate 360 degrees
                    duration: 2,   // Duration of 2 seconds
                    ease: "power3.inOut" // Easing function
                });
            break;
            case 3: 
                clearInterval(this.forgeDecay);
                this.scale = 1;
                this.decayGate = false;
                this.fp = 0;
                gsap.to(connector, { 
                    rotation: 3960, // Rotate 360 degrees
                    duration: 3,   // Duration of 2 seconds
                    ease: "power3.inOut", // Easing function
                    transform: "scale(1)",
                });
                gsap.to(connector2, { 
                    top: "37%",
                    rotation: 3600, // Rotate 360 degrees
                    duration: 2,   // Duration of 2 seconds
                    ease: "power3.inOut", // Easing function
                    zIndex: 0
                });
                gsap.to(connector3, { 
                    bottom: "37%",
                    rotation: 3600, // Rotate 360 degrees
                    duration: 2,   // Duration of 2 seconds
                    ease: "power3.inOut", // Easing function
                    zIndex: 0
                });
                setTimeout(() => {
                    document.getElementById("forgeModal").shadowRoot.getElementById("connectorSpiral").style.opacity = "1";
                }, 500)
                this.shadowRoot.getElementById("forgeSuccess").style.display = "grid";
                this.forgeComplete = true;
                setTimeout(() => {
                    this.forgeComplete = false;
                    connector2.style.display = "none";
                    connector3.style.display = "none";
                }, 3000);
                // connector.style.transform = "scale(1)";
            break;
        }

        this.initForge();
    }

    isMatch(value, position) {
        var valColor = null;
        switch (window.getComputedStyle(value).color) {
            case "rgb(255, 0, 45)":
                valColor = "var(--primary)";
            break;
            case "rgb(148, 190, 140)":
                valColor = "var(--accent)";
            break;
            case "rgb(181, 211, 209)":
                valColor = "var(--secondary)";
            break;
        }
        if (value.innerHTML === this.forgeGoal[position] && valColor === this.shadowRoot.querySelectorAll(".connect")[position].style.color) {
            return true;
        } else {
            return false;
        }
    }

    isNumericPromise(value) {
        return new Promise((resolve, reject) => {
            try {
                const result = this.isNumeric(value);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }    

    async lockDown() {
        this.soundtrack.stop('forge-button-1');
        this.soundtrack.play('forge-button-1');
        this.centerVal.forEach(async (ele)=> {
            if (this.movingRight === false) {
                gsap.timeline()
                .to(ele, { y: -200, duration: 0.05, ease: "power1.inOut" }) 
                .to(ele, { y: 200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { y: -200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { y: 0, duration: 0.1, ease: "power1.inOut" })

                var numberEl2 = this.shadowRoot.querySelectorAll(".centerVal");
                var currentNumbers = numberEl2[0].innerHTML;
                let result2 = await this.isNumericPromise(numberEl2[0].innerHTML);
        
                if (result2 === true) {
                    if (Number(currentNumbers) === 0) {
                        numberEl2.forEach(async (el1) => {
                            el1.innerHTML = "Z";
                        })
                        return;
                    } else {
                        numberEl2.forEach(async (el1) => {
                            el1.innerHTML = Number(currentNumbers) -1;
                        })
                    }
                    return;
                } else {
                    // letters
                    if (currentNumbers === "A") {
                        numberEl2.forEach(async (el1) => {
                            el1.innerHTML = 9;
                        })
                        return;
                    } else {
                        const index = this.alphanumericArray.indexOf(currentNumbers);
                        numberEl2.forEach(async (el1) => {
                            el1.innerHTML = this.alphanumericArray[(index - 1) % this.alphanumericArray.length];
                        })
                    }
                }
            }
        })
        this.trippleCheck();
    }

    isNumeric(str) {
        if (typeof str != "string") return false; // we only process strings!  
        return !isNaN(str) && !isNaN(parseFloat(str)); // use parseFloat to filter out non-number strings
    }

    lockLeft(e) {
        //
        // e.keyCode == 37
        this.soundtrack.stop('forge-shiftCode-1');
        this.soundtrack.play('forge-shiftCode-1');
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
            if (result2 === true) {
                if (Number(currentNumbers[1]) === 0) {
                    el1.innerHTML = "Z";
                } else {
                    el1.innerHTML = Number(currentNumbers[1]) -1;
                }
                return;
            } else {
                // letters
                if (currentNumbers[1] === "A") {
                    el1.innerHTML = 9;
                } else {
                    const index = this.alphanumericArray.indexOf(currentNumbers[1]);
                    el1.innerHTML = this.alphanumericArray[(index - 1) % this.alphanumericArray.length];
                }
            }
        })
        numberEl2.forEach((el2) => {
            if (result3 === true) {
                if (Number(currentNumbers[2]) === 0) {
                    el2.innerHTML = "Z";
                } else {
                    el2.innerHTML = Number(currentNumbers[2]) -1;
                }
                return;
            } else {
                // letters
                if (currentNumbers[2] === "A") {
                    el2.innerHTML = 9;
                } else {
                    const index = this.alphanumericArray.indexOf(currentNumbers[2]);
                    el2.innerHTML = this.alphanumericArray[(index - 1) % this.alphanumericArray.length];
                }
            }
        })
        numberEl3.forEach((el3) => {
            if (result1 === true) {
                if (Number(currentNumbers[0]) === 0) {
                    el3.innerHTML = "Z";
                } else {
                    el3.innerHTML = Number(currentNumbers[0]) -1;
                }
                return;
            } else {
                // letters
                if (currentNumbers[0] === "A") {
                    el3.innerHTML = 9;
                } else {
                    const index = this.alphanumericArray.indexOf(currentNumbers[0]);
                    el3.innerHTML = this.alphanumericArray[(index - 1) % this.alphanumericArray.length];
                }
            }
        })
        this.trippleCheck();

    }

    lockRight() {
        //
        // e.keyCode == 39
        this.codeColor("right");
        this.soundtrack.stop('forge-shiftCode-1');
        this.soundtrack.play('forge-shiftCode-1');
        this.allVal.forEach((ele)=> {
            if (this.movingRight === false) {
                gsap.timeline()
                .to(ele, { x: -200, duration: 0.05, ease: "power1.inOut" }) 
                .to(ele, { x: 200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { x: -200, duration: 0.1, ease: "power1.inOut" }) 
                .to(ele, { x: 0, duration: 0.1, ease: "power1.inOut" })
            }
        })

        var numberEl1 = this.shadowRoot.querySelectorAll(".leftVal");
        var numberEl2 = this.shadowRoot.querySelectorAll(".centerVal");
        var numberEl3 = this.shadowRoot.querySelectorAll(".rightVal");
        var currentNumbers = [numberEl1[0].innerHTML, numberEl2[0].innerHTML, numberEl3[0].innerHTML];
        
        let result1 = this.isNumeric(numberEl1[0].innerHTML);
        let result2 = this.isNumeric(numberEl2[0].innerHTML);
        let result3 = this.isNumeric(numberEl3[0].innerHTML);

        numberEl1.forEach((el1) => {
            if (result3 === true) {
                if (Number(currentNumbers[2]) === 9) {
                    el1.innerHTML = "A";
                } else {
                    el1.innerHTML = Number(currentNumbers[2]) +1;
                }
                return;
            } else {
                // letters
                if (currentNumbers[2] === "Z") {
                    el1.innerHTML = 0;
                } else {
                    const index = this.alphanumericArray.indexOf(currentNumbers[2]);
                    el1.innerHTML = this.alphanumericArray[(index + 1) % this.alphanumericArray.length];
                }
            }
        })
        numberEl2.forEach((el2) => {
            if (result1 === true) {
                if (Number(currentNumbers[0]) === 9) {
                    el2.innerHTML = "A";
                } else {
                    el2.innerHTML = Number(currentNumbers[0]) +1;
                }
                return;
            } else {
                // letters
                if (currentNumbers[0] === "Z") {
                    el2.innerHTML = 0;
                } else {
                    const index = this.alphanumericArray.indexOf(currentNumbers[0]);
                    el2.innerHTML = this.alphanumericArray[(index + 1) % this.alphanumericArray.length];
                }
            }
        })
        numberEl3.forEach((el3) => {
            if (result2 === true) {
                if (Number(currentNumbers[1]) === 9) {
                    el3.innerHTML = "A";
                } else {
                    el3.innerHTML = Number(currentNumbers[1]) +1;
                }
                return;
            } else {
                // letters
                if (currentNumbers[1] === "Z") {
                    el3.innerHTML = 0;
                } else {
                    const index = this.alphanumericArray.indexOf(currentNumbers[1]);
                    el3.innerHTML = this.alphanumericArray[(index + 1) % this.alphanumericArray.length];
                }
            }
        })
        this.trippleCheck();
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

    addToCollection() {
        // Display sending animation
        // Send the forged NFT to the users wallet
        // Sendt items used to forge to the base scoge wallet
        // Display success message
        // reload collection section
    }

    addToLeaderboard() {
        // Display leaderboard
        // Move to position animation
        // Add user to leaderboard or update user score
        // Display share to warpcast or twitter button
    }

    connectedCallback() {
        this.render();
        this.loadSoundtrack();
        this.allVal = this.shadowRoot.querySelectorAll(".val");
        this.centerVal = this.shadowRoot.querySelectorAll(".centerVal");
        this.leftVal = this.shadowRoot.querySelectorAll(".leftVal");
        this.rightVal = this.shadowRoot.querySelectorAll(".rightVal");
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

        // TEMP
        this.shadowRoot.getElementById("continueForgeBut").addEventListener("click", () => {
            var main = this.shadowRoot.getElementById("mainForge");
            var forgeFocus = this.shadowRoot.getElementById("forgeFocus");
            var card = this.shadowRoot.getElementById("forgeSelection");
            
            main.style.left = "5%";
            main.top = "";
            main.bottom = "5%";
            forgeFocus.style.display = "none";
            card.style.position = "absolute";
            this.shadowRoot.getElementById("forgeFailed").style.display = "none";
            this.shadowRoot.getElementById("mainForge").querySelector("comp-close-btn").shadowRoot.getElementById("main").click();
            this.shadowRoot.querySelector("#forgeSelection").style.transform = "translateX(500px)";
        });

        this.shadowRoot.getElementById("mainForge").querySelector("comp-close-btn").shadowRoot.getElementById("main").addEventListener("click", () => {
            this.soundtrack.stop('forge-soundtrack-1');
            this.soundtrack.stop('forge-countdown-1');
            this.forgeGoal = [];
            this.forgeComplete = false;

            var main = this.shadowRoot.getElementById("mainForge");
            var forgeFocus = this.shadowRoot.getElementById("forgeFocus");
            var card = this.shadowRoot.getElementById("forgeSelection");
            
            main.style.left = "5%";
            main.top = "";
            main.bottom = "5%";
            forgeFocus.style.display = "none";
            card.style.position = "absolute";
            
            this.shadowRoot.getElementById("forgerOptions").style.display = "none";
            this.shadowRoot.getElementById("forgeFailed").style.display = "none";
            this.shadowRoot.getElementById("forgeError").style.display = "none";
            this.shadowRoot.querySelector("#forgeSelection").style.transform = "translateX(500px)";

            var connector = this.shadowRoot.getElementById("connector");
            var connector2 = this.shadowRoot.getElementById("connector2");
            var connector3 = this.shadowRoot.getElementById("connector3");
            clearInterval(this.forgeDecay); // Stop when scale reaches 0
            this.scale = 1;
            this.scale = 1;
            this.currentConnector = "connector";
            // this.shadowRoot.getElementById("forgeError").style.display = "grid";
            this.shadowRoot.getElementById("forgeSuccess").style.display = "none";
            this.fp = 0;
            gsap.to(connector, { 
                rotation: 0, // Rotate 360 degrees
                duration: 3,   // Duration of 2 seconds
                ease: "power3.inOut", // Easing function
                scale: 1
            });
            gsap.to(connector2, { 
                top: "37%",
                rotation: 0, // Rotate 360 degrees
                duration: 2,   // Duration of 2 seconds
                ease: "power3.inOut", // Easing function
                zIndex: 0
            });
            gsap.to(connector3, { 
                bottom: "37%",
                rotation: 0, // Rotate 360 degrees
                duration: 2,   // Duration of 2 seconds
                ease: "power3.inOut", // Easing function
                zIndex: 0
            });
            setTimeout(() => {
                connector2.style.display = "block";
                connector3.style.display = "block";
            }, 3000);
            this.decayGate = false;
            setTimeout(() => {
                document.getElementById("forgeModal").shadowRoot.getElementById("connectorSpiral").style.opacity = "1";
            }, 1200);
            clearInterval(this.forgeDecay); // Stop when scale reaches 0
            this.scale = 1;
            this.shadowRoot.getElementById(this.currentConnector).style.transform = `scale(${this.scale})`;
        });

        this.shadowRoot.getElementById("restartForgeBut").addEventListener("click", () => {
            this.initForge();
        });
        
        this.shadowRoot.querySelector(".marketItemBuyNow").addEventListener("click", () => {
            this.openCheckout();
        });
        this.shadowRoot.querySelector("#coModalCloseBut").addEventListener("click", () => {
            this.closeCheckout();
        });
        this.shadowRoot.querySelector("#pb").addEventListener("click", () => {
            this.pay();
        });
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
                    z-index: 21;
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

                @keyframes flyAndFade {
                    0% {
                        transform: translateX(220px);
                        opacity: 0;
                    }
                    25% {
                        opacity: 1;
                    }
                    75% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(-220px);
                        opacity: 0;
                    }
                }

                #inventory {
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

                #connector, #connector2, #connector3 {
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

                #connector2 {
                    display: none;
                    transform: scale(.8);
                    overflow: hidden;
                    z-index: 1;
                }
                    
                #connector3 {
                    display: none;
                    top: auto;
                    transform: scale(.8);
                    overflow: hidden;
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

                #inventoryMenuHead {
                    width: 100%;
                    height: 12%;
                    color: Var(--primary);
                    display: grid;
                    grid-template-columns: 25% 25% 50%;
                    grid-template-rows: 1fr;
                    justify-content: start;
                    align-items: center;
                    font-size: 1.2rem;
                    letter-spacing: 2px;
                    z-index: 2;
                    position: absolute;
                    cursor: grab;
                    font-size: .8em;
                }

                .imTab {
                    border-right: 1px solid var(--primary);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                #imTabSpacer, .nonSelImTab {
                    border-bottom: 1px solid var(--primary);
                    transition: .3s all;
                }

                #imTabSpacer {
                    cursor: grab;
                }

                .nonSelImTab:hover {
                    background-color: var(--primary);
                    color: var(--secondary);
                    font-family: 'BS-B';
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
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 15% 10% 30% 25%;
                    justify-content: center;
                    align-items: center;
                    padding-left: 3%;
                    padding-right: 3%;
                    margin-top: 9%;
                    border-top: 1px solid var(--primary);
                }

                #inventoryMainLoading {
                    width: 94%;
                    height: 90%;
                    position: absolute;
                    justify-content: center;
                    align-items: center;
                    padding-left: 3%;
                    padding-right: 3%;
                    margin-top: 4%;
                    left: 0;
                    top: 0;
                    z-index: 7;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    user-select: none;
                    pointer-events: none;
                }

                #inventoryMainLoadingcont {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    flex-direction: column;
                    letter-spacing: 2px;
                }

                .pleaseWait {
                    color: var(--accent);
                    font-size: .7rem;
                    animation: blink 2s infinite;
                    margin-top: 2%;
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
                    overflow-x: hidden;
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
                    z-index: -1;
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

                #connectorSpiral, #connectorSpiral2, #connectorSpiral3 {
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

                .inactiveTab {
                    text-decoration: line-through;
                    color: #850118;
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
                    width: 35% !important;
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
                    z-index: 11;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: 1fr;
                    display: none;
                }

                #forgeStatus {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
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

                #forgeFocus {
                    display: none;
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background-color: rgba(0,0,0,0.9);
                    z-index: 20;
                }

                #forgeDemo {
                    width: 10%;
                    height: 5%;
                    position: absolute;
                    left: 45%;
                    bottom: 10%;
                    border: 1px solid var(--primary);
                    border-radius: 5px;
                    font-family: "BS-B";
                    opacity: 0.5;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                #forgeSelection {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10;
                    background-color: black;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    overflow: hidden;
                    transform: translateX(500px);
                }

                #forgeSelection img {
                    height: 100%;
                    width: auto;
                    object-fit: contain;
                    transform: scale(1.5);
                }

                #forgeSuccess, #forgedFailed, #forgeError {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-color: rgba(0,0,0,0.9);
                    z-index: 2;
                    display: none;
                    grid-template-columns: 1fr;
                    justify-items: center;
                    align-content: center;
                    padding-left: 2%;
                }

                .fStatusBlock {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-color: rgba(0,0,0,0.9);
                    z-index: 2;
                    display: none;
                    grid-template-columns: 1fr;
                    justify-items: center;
                    align-content: center;
                    padding-left: 2%;
                }

                #fs1 {
                    font-size: 1.2em;
                    color: var(--accent);
                    letter-spacing: 5px;
                }
                    
                #fs2 {
                    font-size: 2em;
                    letter-spacing: 30px;
                    color: var(--accent);
                }

                 .fs3 {
                    width: 30%;
                    height: 60%;
                    padding: 1% 3%;
                    margin-top: 5%;
                    border: 1px solid var(--accent);
                    letter-spacing: 2px;
                    color: var(--accent);
                    text-align: center;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .3s all;
                    cursor: pointer;
                }

                 .fs3:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: "BS-B";
                 }


                #marketMain {
                    width: 94%;
                    height: 87%;
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr%;
                    justify-content: center;
                    align-items: center;
                    padding-left: 3%;
                    padding-right: 3%;
                    margin-top: 9%;
                    border-top: 1px solid var(--primary);
                }

                #marketCheckout {
                    display: grid;
                    width: 100%;
                    height: 86%;
                    background-color: rgba(0,0,0,0.0);
                    position: absolute;
                    z-index: 8;
                    margin-top: 9%;
                    left: 0;
                    top: 0;
                    pointer-events: none;
                    user-select: none;
                    transition: .3s all;
                }

                #marketCheckoutModal {
                    width: 100%;
                    height: 70%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 20% 80%;
                    justify-items: center;
                    align-items: center;
                    background-color: black;
                    border-radius: 10px;
                    position: absolute;
                    left: 0;
                    bottom: -70%;
                    border-top: .5px solid var(--primary);
                    overflow: hidden;
                    transition: .3s all;
                }

                #coDeetCont {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #coModalCloseBut {
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    right: 0;
                    top: 0;
                    font-size: 1em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-left: 1px solid var(--primary);
                    border-bottom: 1px solid var(--primary);
                    cursor: pointer;
                }

                #coModalCloseBut:hover {
                    font-family: "BS-B";
                    font-size: 1.2em;
                }

                #coLineItems {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    border-right: .5px solid #850118;
                    padding-right: 5%;
                    padding-left: 5%;
                    overflow-y: auto;
                    gap: 5%;
                }

                .colineItem {
                    width: 100%;
                    height: 75px;
                    display: grid;
                    grid-template-columns: 30% 70%;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    border: .5px solid var(--accent);
                    border-radius: 10px;
                    overflow: hidden;
                    color: var(--accent);
                    user-select: none;
                }

                .liThumbnail {
                    width: 100%;
                    height: 100%;
                    border-right: .5px solid var(--accent);
                }

                .liThumbnail img {
                    width: 100%;
                    height: auto;
                }
                
                .liDetails {
                    width: 80%;
                    height: 80%;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    padding-left: 10%;
                    font-size: .8rem;
                }

                .liName {
                    margin-bottom: 5%;
                }

                #coHead {
                    width: 92%;
                    height: 100%;
                    letter-spacing: 2px;
                    padding-left: 8%;
                    font-size: .9em;
                    display: flex;
                    align-items: center;
                }

                #coPay {
                    width: 90%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 15% 25% 30% 30%;
                    justify-content: center;
                    align-items: center;
                    padding-left: 5%;
                    padding-right: 5%;
                    color: var(--accent);
                }

                #payHead {
                    align-self: start;
                }

                #liPriceEth {}

                #liPV {}

                #liPriceUsd {
                    opacity: 0.5;
                }

                #pcButton {
                    justify-self: end;
                }

                #pb {
                    width: 100px;
                    padding: 5%;
                    text-align: center;
                    border-radius: 5px;
                    border: 1px solid var(--accent);
                    letter-spacing: 2px;
                    color: var(--accent);
                    transition: .3s all;
                    cursor: pointer;
                }

                #pb:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: "BS-B";
                }

                #liTotal {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-content: start;
                    align-items: start;
                }

                #coTotalHead {}

                #liTotalVals {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-items: end;
                    text-align: end;
                }

                #coPayConfirm {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

                #pcStatus {
                    font-size: .8em;
                    color: var(--primary);
                    visibility: hidden;
                    text-transform: uppercase;
                }

                #liTotalEth {}
                
                #liTV {}

                #liTotalUsd {
                    opacity: 0.5;
                }

                #payAccount {
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    opacity: 0.5;
                }

                #marketItems {
                    width: 90%;
                    height: 90%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: auto;
                    padding: 5%;
                    padding-top: 2%;
                    overflow-y: auto;
                    gap: 20px;
                    margin-top: 1%;
                }

                .marketItem {
                    width: 100%;
                    height: 275px;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    border: .5px solid #850118;
                    border-radius: 10px;
                    overflow: hidden;
                    background-color: black;
                    position: relative;
                    cursor: pointer;
                    transition: .2s all;
                }

                .marketItem:hover > .quickAddItems {
                    display: flex;
                }

                .marketItem:hover .marketItemBuyNow {
                    bottom: 0%;
                }

                .marketItem:hover {
                    border: 1px solid var(--accent);
                }

                .quickAddItems {
                    display: none;
                    position: absolute;
                    top: 5%;
                    right: 10%;
                    width: 30px;
                    height: 30px;
                    border: 1px solid var(--accent);
                    border-radius: 15px;
                    background-color: var(--accent);
                    align-items: center;
                    justify-content: center;
                    color: black;
                    font-family: "BS-B";
                    font-size: 1.5em;
                    transition: .2s all;
                }

                .quickAddItems:hover {
                    background-color: var(--secondary);
                }

                .marketItemImage {
                    width: 100%;
                    height: auto;
                    // border-bottom: 1px solid var(--primary);
                }

                .marketItemImage img {
                    width: 100%;
                    height: auto;
                }

                .marketItemDeets {
                    width: 90%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    font-size: .9rem;
                    padding-left: 10%;
                    position: relative;
                    text-transform: uppercase;
                }

                .marketItemBuyNow {
                    position: absolute;
                    height: 50%;
                    width: 80%;
                    bottom: -50%;
                    background-color: var(--accent);
                    color: black;
                    font-family: "BS-B";
                    display: flex;
                    justify-content: space-between;
                    padding-right: 10%;
                    padding-left: 10%;
                    align-items: center;
                    text-transform: uppercase;
                    transition: .3s all;
                }

                .marketItemBuyNow:hover {
                    background-color: var(--secondary);
                }

                #loadingIcon {
                    display: none;
                    width: 150px;
                    height: auto;
                    transform: translateY(220px);
                    animation: flyAndFade 3.5s ease-in-out infinite;
                }

                #loadingIcon img {
                    width: 100%;
                    height: auto;
                }

                #loadingText {}

                .demo {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    position: absolute;
                    z-index: 10;
                    opacity: .08;
                    color: var(--accent);
                    pointer-events: none;
                    user-select: none;
                    font-family: "BS-B";
                    font-size: 15em;
                }

            </style>
            <div id="forgeFocus">
                <div id="forgeDemo">
                    <div class="demo">FORGE MASTERS DEMO</div>
                    <div id="hint">*USE ARROW KEYS</div>
                </div>
            </div>
            <div id="mainForge" data-domType="shadow">
                <comp-close-btn></comp-close-btn>
                <div id="inventory">
                    <div id="header">
                        <div>INVENTORY</div>
                        <div id="reload">&#8635;</div>
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
                        <div id="forgeSelection">
                            <img src="${magnaCase1}">
                        </div>
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
                    <div id="connector2">
                        <div id="connectorSpiral2">
                            <svg class="beaconLines" id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
                        </div>
                    </div>
                    <div id="connector3">
                        <div id="connectorSpiral3">
                            <svg class="beaconLines" id="uniMenuBeaconsSvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.71 52.83"><defs><style>.cls-1{fill:#ff002d;}</style></defs><path class="cls-1" d="M32.35,16.19a.65.65,0,0,1-.64-.65V3.93a.65.65,0,1,1,1.29,0V15.54A.65.65,0,0,1,32.35,16.19Z"/><path class="cls-1" d="M32.35,51.26a.65.65,0,0,1-.64-.65V39A.65.65,0,1,1,33,39V50.61A.66.66,0,0,1,32.35,51.26Z"/><path class="cls-1" d="M55.69,27.92H44.08a.65.65,0,1,1,0-1.3H55.69a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M20.63,27.92H9a.65.65,0,0,1-.64-.65A.65.65,0,0,1,9,26.62H20.63a.65.65,0,0,1,0,1.3Z"/><path class="cls-1" d="M40.64,19.63a.7.7,0,0,1-.46-.19.66.66,0,0,1,0-.92L48.4,10.3a.65.65,0,0,1,.92.92L41.1,19.44A.68.68,0,0,1,40.64,19.63Z"/><path class="cls-1" d="M15.85,44.42a.63.63,0,0,1-.46-.19.66.66,0,0,1,0-.92l8.22-8.21a.64.64,0,0,1,.91.91l-8.21,8.22A.63.63,0,0,1,15.85,44.42Z"/><path class="cls-1" d="M48.86,44.42a.63.63,0,0,1-.46-.19L40.18,36a.65.65,0,0,1,.92-.91l8.22,8.21a.66.66,0,0,1,0,.92A.65.65,0,0,1,48.86,44.42Z"/><path class="cls-1" d="M24.06,19.63a.65.65,0,0,1-.45-.19l-8.22-8.22a.65.65,0,0,1,.92-.92l8.21,8.22a.64.64,0,0,1,0,.92A.66.66,0,0,1,24.06,19.63Z"/></svg>
                        </div>
                    </div>
                </div>
                <div id="forger">
                    <div id="inventoryMenuHead">
                        <div class="imTab" id="forgeTabSelect">FORGE</div>
                        <div class="imTab nonSelImTab inactiveTab" id="marketTabSelect">MARKETPLACE</div>
                        <div class="imTab" id="imTabSpacer"></div>
                    </div>
                    <div id="mCaseBeacon" class="xButAll">
                        <div id="mainDescBeacon">
                            <div id="mainText">
                                A 1ST GEN HBK BEACON, USED TO CALL IN LOST MAGNA CASE'S.<br>THIS ONE STILL WORKS, GIVE IT A TRY!
                            </div>
                        </div>
                        <div style="text-align: center;" id="secText">
                                Join the whitelist to receive a beacon for upcoming $CDSK and MagnaCase drops!<br>Enter your email below to be added to the list. 
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
                                <input id="sendBeaconBut" type="submit" value="JOIN WHITELIST">
                            </div>
                        </form>
                    </div>
                    <div id="forgeCode" class="xPre1">
                        <div id="forgeStatus">
                            <div id="forgeSuccess" class="fStatusBlock">
                                 <div id="fs1">FORGE</div>
                                 <div id="fs2">SUCCESSFUL</div>
                                 <div class="fs3" id="addToInventory">ADD TO INVENTORY</div>
                            </div>
                            <div id="forgeFailed" class="fStatusBlock">
                                <div id="fs1" style="color: #ff002d;">FORGE</div>
                                <div id="fs2" style="color: #ff002d;">FAILED</div>
                                <div class="fs3" id="continueForgeBut">CONTINUE</div>
                            </div>
                            <div id="forgeError" class="fStatusBlock">
                                <div id="fs1" style="color: #ff002d;">FORGE</div>
                                <div id="fs2" style="color: #ff002d;">ERROR</div>
                                <div class="fs3" id="restartForgeBut">RESTART</div>
                            </div>
                        </div>
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
                    <div id="inventoryMainLoading">
                        <div class="demo">DEMO</div>
                        <div id="inventoryMainLoadingcont">
                            <div id="loadingIcon">
                                <img src="https://storage.scoge.co/scogeUniverse/graphics/magna-transport2.png">
                            </div>
                            <div id="loadingText">LOADING INVENTORY</div>
                            <div class="pleaseWait">PLEASE WAIT.</div>
                        </div>
                    </div>
                    <div id="marketMain">
                        <div class="demo">DEMO</div>
                        <div id="marketCheckout">
                            <div id="marketCheckoutModal">
                                <div id="coHead">CHECKOUT</div>
                                <div id="coModalCloseBut">X</div>
                                <div id="coDeetCont">
                                    <div id="coLineItems">
                                        <div class="colineItem">
                                            <div class="liThumbnail">
                                                <img src="https://dd.dexscreener.com/ds-data/tokens/base/0x394bc54133c50d37429f08a2d558018b7fc1c14d.png?size=xl&key=bab96f">
                                            </div>
                                            <div class="liDetails">
                                                <div class="liName">Testing #22082</div>
                                                <div class="liPriceEth"><span class="liPV">0.013</span> ETH</div>
                                                <div class="liPriceUsd">$34.70</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="coPay">
                                        <div id="payHead">PAYMENT</div>
                                        <div id="payAccount">
                                            <div id="payThumb">Placer</div>
                                            <div id="payAccount">Placer</div>
                                        </div>
                                        <div id="liTotal">
                                            <div id="coTotalHead">TOTAL</div>
                                            <div id="liTotalVals">
                                                <div id="liTotalEth"><span id="liTV">0.013</span> ETH</div>
                                                <div id="liTotalUsd">$34.70</div>
                                            </div>
                                        </div>
                                        <div id="coPayConfirm">
                                            <div id="pcStatus">Testing</div>
                                            <div id="pcButton">
                                                <div id="pb">PAY</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="marketItems">
                            <div class="marketItem" id="marketNft">
                                <div class="quickAddItems">+</div>
                                <div class="marketItemImage">
                                    <img src="https://dd.dexscreener.com/ds-data/tokens/base/0x394bc54133c50d37429f08a2d558018b7fc1c14d.png?size=xl&key=bab96f">
                                </div>
                                <div class="marketItemDeets">
                                    <div class="mItemName">Testing #22082</div>
                                    <div class="mItemCost"><span class="mCostVal">0.0012</span> ETH</div>
                                    <div class="marketItemBuyNow">
                                        <div class="mBuyNowBut">Buy Now</div>
                                        <div class="mBuyNowPrice">0.0012 ETH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="forgeMain">
                        <div id="mainDesc1">
                            <div id="badMemory1" class="insufMem hidden">
                                INSUFFICIENT MEMORY
                            </div>
                            <div>
                                - SELECT UP TO <span style="color:var(--accent);">6</span> INVENTORY ITEMS - <br>TO BEGIN THE FORGING PROCESS
                            </div>
                        </div>
                        <div id="mainDesc2">
                            <div id="badMemory2" class="insufMem hidden">
                                ! Additional stats required to use this memory !
                            </div>
                            <div></div>
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
                    <div id="forgerCont" class="xPre">
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