import { dragElement } from "../universe";
import coinbaseLogo from "../../assets/images/wallets/coinbase.png";
import metamaskLogo from "../../assets/images/wallets/metamask.png";
import plugLogo from "../../assets/images/wallets/plug.png";
import rainbowLogo from "../../assets/images/wallets/rainbow.png";
import stoicLogo from "../../assets/images/wallets/stoic.png";
import smartLogo from "../../assets/images/wallets/smart.png";
import statsImg from "../../assets/images/cards/digi-stats-1.jpg";
import missing from "../../assets/images/items/scoge-missing-cloak.jpg";
import { enterTaosCity } from "../universe";
import { createThirdwebClient, getContract, readContract } from "thirdweb";
import { createWallet, injectedProvider } from "thirdweb/wallets";
import { base, sepolia } from "thirdweb/chains";
import { resolveName } from "thirdweb/extensions/ens";

export const client = createThirdwebClient({
  clientId: "a7f34678c8f921d05824641db058ef4a",
});

export var forgeable = [];

class compWallets extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        window.ethNFTS = [];
        this.currentWallet = null;
        this.nftloading = false;
        
        this.availableWallets = [
            {
                name: "Coinbase Wallet",
                logo: coinbaseLogo,
                link: "https://www.coinbase.com/wallet"
            },
            {
                name: "Rainbow",
                logo: rainbowLogo
            },
            {
                name: "MetaMask",
                logo: metamaskLogo
            },
            // {
            //     name: "Plug",
            //     logo: plugLogo
            // },
            // {
            //     name: "Stoic",
            //     logo: stoicLogo
            // }
        ];

         this.myChain = base;

        // get a contract
        this.contract = getContract({
            // the client you have created via `createThirdwebClient()`
            client,
            // the chain the contract is deployed on
            chain: this.myChain,
            // the contract's address
            address: "0x321A5b87Ed0008C05503b3429E218D48c1419d29",
        });

        this.guide = getContract({
            // the client you have created via `createThirdwebClient()`
            client,
            // the chain the contract is deployed on
            chain: this.myChain,
            // the contract's address
            address: "0xd8b7edda0dcf5069d5900b43362e96b1832ffc12",
        });


        this.limitedTech = getContract({
            // the client you have created via `createThirdwebClient()`
            client,
            // the chain the contract is deployed on
            chain: this.myChain,
            // the contract's address
            address: "0xB8f11023C0EA546aDa9612cE4cC20911078B58Eb",
        });

        this.rawMaterials = getContract({
            // the client you have created via `createThirdwebClient()`
            client,
            // the chain the contract is deployed on
            chain: this.myChain,
            // the contract's address
            address: "0xf742c17C1C1f51C104F162a389C3DB8F38A3a432",
        });

        this.forgeable = getContract({
            // the client you have created via `createThirdwebClient()`
            client,
            // the chain the contract is deployed on
            chain: this.myChain,
            // the contract's address
            address: "0xC8A557b3d340903a59e61711Cafca2b3999975B0",
        });
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

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "active") {
            this.connectTransition();
        }
    }
    
    /////////////////////////////
    // Connect to MetaMask
    /////////////////////////////
    async connectMetaMask() {
        const wallet = createWallet("io.metamask"); // pass the wallet id
        // if user has metamask installed, connect to it
        if (injectedProvider("io.metamask")) {
        await wallet.connect({ client }).then((res) => {
            this.resolveLogin(res, wallet);
            window.currentWallet = wallet.getAccount().address;
        });
        }
        
        // open wallet connect modal so user can scan the QR code and connect
        else {
        await wallet.connect({
            client,
            walletConnect: { showQrModal: true },
        }).then((res) => {
            this.resolveLogin(res, wallet);
        })
        }
    }

    /////////////////////////////
    // Connect to Coinbase Wallet
    /////////////////////////////
    async connectCoinbase() {
        // const wallet = createWallet("com.coinbase.wallet"); // pass the wallet id
        // // if user has coinbase wallet installed, connect to it
        // if (injectedProvider("com.coinbase.wallet")) {
        //     await wallet.connect({ client }).then(async (res) => {
        //     this.resolveLogin(res, wallet)});
        // }
        
        // // open wallet connect modal so user can scan the QR code and connect
        // else {
        //     await wallet.connect({
        //     client,
        //     walletConnect: { showQrModal: true },
        // }).then((res) => {
        //     this.resolveLogin(res, wallet);
        // });
        // }
        // try {
        //     const address = await provider.request({
        //       method: 'eth_requestAccounts',
        //     }).then(async (res) => {
        //         console.log("HERE",res)
        //       this.resolveLogin({res: {address: res}}, provider); // replace 'wallet' with your actual wallet variable if needed
        //     });
        //   } catch (error) {
        //     console.error('Failed to connect:', error);
        //     // Handle error (e.g., display an error message to the user)
        //   }
    }

    /////////////////////////////
    // Connect to Rainbow Wallet
    /////////////////////////////
    async connectRainbow() {
        const wallet = createWallet("me.rainbow"); // pass the wallet id
        // if user has rainbow wallet installed, connect to it
        if (injectedProvider("me.rainbow")) {
        await wallet.connect({ client }).then(async (res) => {
            this.resolveLogin(res, wallet);
        });
        }
        
        // open wallet connect modal so user can scan the QR code and connect
        else {
            await wallet.connect({
                client,
                walletConnect: { showQrModal: true },
            }).then((res) => {
                this.resolveLogin(res, wallet);
            });
        }
    }

    /////////////////////////////
    // Connect to Plug Wallet
    /////////////////////////////

     /////////////////////////////
    // Connect to Stoic Wallet
    /////////////////////////////

    async resolveLogin(res, wallet) {
            this.connectTransition();
            console.log("connected", res);
            window.currentWallet = res.address;
            this.getScogeAssetsETH(res.address, this.contract);
            setTimeout(() => {
                document.getElementById("forgeModal").shadowRoot.getElementById("loadingModal").startLoading();
            }, 500);
            // Display user's address. Just the first 6 characters for now
            const name = await resolveName({
                client,
                address: res.address,
            }).catch((err) => {
                console.log("resolveName error", err);
            });

            if (name) {
                let el = document.getElementById("getUniMenu").shadowRoot.getElementById("menuloginBut");
                this.shadowRoot.getElementById("username").innerHTML = name;
                el.innerHTML = name + "&nbsp;&nbsp;>";
                } else {
                let username = res.address.slice(0, 6) + "..." + res.address.slice(-4) + "&nbsp;&nbsp;>";

                this.shadowRoot.getElementById("username").innerHTML = username.replace(">", "");

                document.getElementById("getUniMenu").shadowRoot.getElementById("menuloginBut").innerHTML = username;
                }
                
            this.shadowRoot.getElementById("logout").addEventListener("click", async () => {
                await wallet.disconnect().then(() => {
                    this.disconnectTransition();
                }).catch((err) => {
                    console.log("disconnect error", err);
                });
            });

            document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenuExit").setAttribute("data-connected", "true");
            var el = document.getElementById("getUniMenu").shadowRoot.getElementById("menuloginBut");
            document.getElementById("getUniMenu").openFullMenu(el);
    }

    buildWalletButons() {
        let walletsCont = this.shadowRoot.getElementById("walletsCont");
        this.availableWallets.forEach(wallet => {
            let walletBut = document.createElement("div");
            walletBut.classList.add("walletBut");
            walletBut.innerHTML = `
                <div class="walletLogo">
                    <img src="${wallet.logo}" style="height: 100%;"/>
                </div>
                <div class="walletName
                ">${wallet.name}</div>`;
            walletsCont.appendChild(walletBut);

            switch(wallet.name) {
                case "Coinbase Wallet":
                    walletBut.addEventListener("click", () => {
                        this.connectCoinbase();
                    });
                    break;
                case "MetaMask":
                    walletBut.addEventListener("click", () => {
                        this.connectMetaMask();
                    });
                    break;
                case "Rainbow":
                    walletBut.addEventListener("click", () => {
                        this.connectRainbow();
                    });
                    break;
                case "Smart Wallet":
                    walletBut.addEventListener("click", () => {
                        this.connectSmart();
                    }
                    );
                    break;
                // case "Plug":
                //     walletBut.addEventListener("click", () => {
                //         this.connectPlug();
                //     });
                //     break;
                // case "Stoic":
                //     walletBut.addEventListener("click", () => {
                //         this.connectStoic();
                //     });
                //     break;
            }
        });

        this.shadowRoot.getElementById("infoCont1").addEventListener("click", () => {
            this.connectCoinbase();
        });
        this.shadowRoot.getElementById("infoCont2").addEventListener("click", () => {
            window.open('https://zora.co/@scoge', '_blank');
        });
    }
    
    connectTransition() {
        let el1main = this.shadowRoot.getElementById("walletsCont");
        let el1head = this.shadowRoot.getElementById("header");
        let el2main = this.shadowRoot.getElementById("connectedCont");
        let el2head = this.shadowRoot.getElementById("headerConnected");
        if (this.shadowRoot.getElementById("infoCont1") ){
            this.shadowRoot.getElementById("infoCont1").style.display = "none";
        }
        if (this.shadowRoot.getElementById("infoCont2")) {
            this.shadowRoot.getElementById("infoCont2").style.display = "flex";
        }

        if (el1main) {
            el1main.style.opacity = "0";
            el1main.style.pointerEvents = "none";
            el2main.style.display = "grid";
            el2main.style.opacity = "1";
            el2main.style.transform = "scale(1)";
            el1head.style.display = "none";
            el2head.style.display = "grid";
            setTimeout(() => {
                document.getElementById("forgeModal").shadowRoot.getElementById("mainForge").style.transform = "scaleX(1)";
                document.getElementById("forgeModal").shadowRoot.getElementById("mainForge").style.opacity = "1";
            }, 400);
        }
    }

    disconnectTransition() {
        let el1main = this.shadowRoot.getElementById("walletsCont");
        let el1head = this.shadowRoot.getElementById("header");
        let el2main = this.shadowRoot.getElementById("connectedCont");
        let el2head = this.shadowRoot.getElementById("headerConnected");
        let forger = document.getElementById("forgeModal").shadowRoot.getElementById("mainForge");
        let forgeModal = document.getElementById("forgeModal").shadowRoot;
        if (this.shadowRoot.getElementById("infoCont1")) {
            this.shadowRoot.getElementById("infoCont1").style.display = "flex";
        }
        if (this.shadowRoot.getElementById("infoCont2")) {
            this.shadowRoot.getElementById("infoCont2").style.display = "none";
        }
        document.getElementById("forgeModal").shadowRoot.forgeOptions = [];
        el1main.style.opacity = "1";
        el1main.style.pointerEvents = "all";
        el2main.style.display = "none";
        el2main.style.opacity = "0";
        el2main.style.transform = "scale(0)";
        el1head.style.display = "grid";
        el2head.style.display = "none";
        forger.style.transform = "scaleX(0)";
        forger.style.opacity = "0";
        forgeModal.querySelectorAll(".card").forEach((el) => {
            el.remove();
        })
        forgeModal.getElementById("forgerOptions").style.display = "none";
        forgeModal.getElementById("forgerCont").style.display = "none";
        forgeModal.getElementById("forgeMain").style.display = "grid";
        document.getElementById("getUniMenu").shadowRoot.getElementById("menuloginBut").innerHTML = "Log-in";
        document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenuExit").setAttribute("data-connected", "false");
        document.getElementById("getUniMenu").closeFullMenu();
        this.shadowRoot.getElementById("actionButCont").removeEventListener("click", this.taos);
        this.shadowRoot.querySelectorAll(".button")[0].classList.add("inactive");
    }

    async getScogeAssetsETH(add, contract) {
        // var contract = this.contract;
        var limTech = this.limitedTech;
        var ownedNFTs = [];
        var ownedNFTs2 = [];
        var ownedNFTs3 = [];
        var ownedNFTs4 = [];

        for (let i = 0; i < 20; i++) {
            const balance = await readContract({
                contract: contract,
                method: "function balanceOf(address, uint256) view returns (uint256)",
                params: [add, i],
            });
            if (balance > 0) {
                ownedNFTs.push({id: i, balance: balance});
            }
        }

        var firstLength = ownedNFTs.length + 1;

        for (let i = 0; i < 50; i++) {
            const balance = await readContract({
                contract: this.rawMaterials,
                method: "function balanceOf(address, uint256) view returns (uint256)",
                params: [add, i],
            });
            if (balance > 0) {
                ownedNFTs2.push({id: i, balance: balance});
            }
        }

        window.ethNFTS = [];
        
        for (let nftObj in ownedNFTs) {
            let nft = await this.tokenDataETH(ownedNFTs[nftObj].id, this.contract);
            window.ethNFTS.push({id: ownedNFTs[nftObj].id, count: 0, qty: Number(ownedNFTs[nftObj].balance) ,nft: nft});
            // name
            // description
            // image
            // attributes
            // content
            // attributes
                // trait_type
                // value
            // animation_url
        }

        for (let nftObj in ownedNFTs2) {
            let nft = await this.tokenDataETH(ownedNFTs2[nftObj].id, this.rawMaterials);
            window.ethNFTS.push({id: firstLength + ownedNFTs2[nftObj].id, count: 0, qty: Number(ownedNFTs2[nftObj].balance) ,nft: nft});
        }

        ////////////////////////
        var secondLength = ownedNFTs.length + 1;
        for (let i = 0; i < 50; i++) {
            const balance = await readContract({
                contract: this.forgeable,
                method: "function balanceOf(address, uint256) view returns (uint256)",
                params: [add, i],
            });
            if (balance > 0) {
                ownedNFTs3.push({id: i, balance: balance});
            }
        }

        for (let nftObj in ownedNFTs3) {
            let nft = await this.tokenDataETH(ownedNFTs3[nftObj].id, this.forgeable);
            forgeable.push({id: ownedNFTs3[nftObj].id, count: 0, qty: Number(ownedNFTs3[nftObj].balance) ,nft: nft});
        }

        // for (let nftObj in ownedNFTs3) {
        //     let nft = await this.tokenDataETH(ownedNFTs3[nftObj].id, this.rawMaterials);
        //     window.ethNFTS.push({id: secondLength + ownedNFTs2[nftObj].id, count: 0, qty: Number(ownedNFTs3[nftObj].balance) ,nft: nft});
        // }
        ////////////////////////

        ////////////////////////
        var thirdLength = ownedNFTs.length + 1;
        for (let i = 0; i < 50; i++) {
                 const balance = await readContract({
                     contract: this.guide,
                     method: "function balanceOf(address, uint256) view returns (uint256)",
                     params: [add, i],
                 });
                 if (balance > 0) {
                     ownedNFTs4.push({id: i, balance: balance});
                 }
             }
     
        for (let nftObj in ownedNFTs4) {
            let nft = await this.tokenDataETH(ownedNFTs4[nftObj].id, this.guide);
            window.ethNFTS.push({id: ownedNFTs4[nftObj].id, count: 0, qty: Number(ownedNFTs4[nftObj].balance) ,nft: nft});
        }
        //////////////////////



        ////////////////////////
        const beaconHold = await readContract({
            contract: this.limitedTech,
            method: "function balanceOf(address, uint256) view returns (uint256)",
            params: [add, 0],
        }).then(async (res) => {
            if (Number(res) != 0) { //HAS BEACON
                    let nft2 = await this.tokenDataETH(0, this.limitedTech);
                    window.ethNFTS.unshift({id:0, count: 0, qty:1, nft: nft2})
            } else { // NO BEACON
                if (window.ethNFTS.length < 6) {
                    const beacBal = await readContract({
                        contract: this.limitedTech,
                        method: "function totalSupply(uint256) view returns (uint256)",
                        params: [0],
                    }).then( async (res) => {
                        if (res != 0) {
                            let nft1 = await this.tokenDataETH(1, this.limitedTech);
                            window.ethNFTS.unshift({id:1, count: 0, qty:1, nft: nft1});
                        } else {
                            //No more beacons available
                        }
                    })
                } else {
                    // Already has enough nfts, and has no beacon
                }
            }
        })
        ////////////////////////
        window.ethNFTS.forEach((nft) => {
            if (nft.nft.name === "Oracle Cloak") {
                this.shadowRoot.getElementById("lgimg").src = nft.nft.image;
                this.shadowRoot.getElementById("actionButCont").addEventListener("click", this.taos);
                this.shadowRoot.querySelectorAll(".button")[0].classList.remove("inactive");
                this.shadowRoot.getElementById("accountDesc").innerHTML = "This system is still in development. Use this cloak to avoid detection. It wont last for long.";
            }
        }) 

        document.getElementById("forgeModal").setAttribute("active", "loaded");
    }

    async tokenDataETH(index, contract) {
        try {
            const data = await readContract({
                contract: contract,
                method: "function uri(uint256) view returns (string)",
                params: [index],
            });

            // console.log("TEst", data)

            var httpUrl = null;

            if (data.includes("ipfs://")) {
                httpUrl = data.replace("ipfs://", "https://a7f34678c8f921d05824641db058ef4a.ipfscdn.io/ipfs/");
            } else {
                httpUrl = data
            }
            // fetch ipfs data'
            // const httpUrl = data

            // ADD SUPPORT FOR MULTIPLE PREFIXS
            // .replace("ipfs://", "https://ipfs.io/ipfs/");
            const response = await fetch(httpUrl);
            const nft = await response.json();
            
            return nft;

        } catch (error) {
            console.error("Error reading token data:", error);
        }
    }

    taos() {
        enterTaosCity();
        setTimeout(() => {
            document.getElementById("miniAgent").toggle();
        }, 59000)
        setTimeout(() => {
            alert("THEY'RE ONTO YOU, GET OUT!");
            setTimeout(() => {
                location.reload();
            },1000)
        }, 60000)
    }

    reloadNfts() {
        var add = window.currentWallet;
        document.getElementById("walletsModal").getScogeAssetsETH(add, this.contract);
        // rebuild the nft display
        document.getElementById("forgeModal").selectedNfts = [];
        document.getElementById("forgeModal").shadowRoot.getElementById("loadingModal").startLoading();
        document.getElementById("forgeModal").shadowRoot.querySelectorAll(".card").forEach((card) => {
            card.remove();
        });
        let loadedImagesCount = 0;
        const totalImages = window.ethNFTS.length - 1;
        window.ethNFTS.forEach(nft => {
            let card = document.createElement("div");
            let buttons = document.createElement("div");
            buttons.innerHTML = `
                <div class="selFButton" style="border-bottom: 1px solid var(--accent)" data-nftId="${nft.id}" id="selnft${nft.id}">SELECT</div>
                <div class="selFButton" data-nftId="${nft.id}" id="viewnft${nft.id}">VIEW</div>
            `;
            buttons.id = "cardButtons";
            card.classList.add("card");
            let img = new Image();
            card.appendChild(img);
            card.appendChild(buttons);
        
            img.onload = function() {
                card.classList.add("imgloaded");
                loadedImagesCount++;
                if (loadedImagesCount === totalImages) {
                    setTimeout(() => {
                        document.getElementById("forgeModal").shadowRoot.getElementById("loadingModal").stopLoading();
                    }, 2000);
                }
            };
        
            var nftImg = nft.nft.image
            // .replace("ipfs://", "https://ipfs.io/ipfs/");
        
            var stats = null;
            if (nft.nft.attributes) {
                stats = {
                    cat: nft.nft?.attributes[0].value,
                    col: nft.nft?.attributes[1].value,
                    bas: nft.nft?.attributes[2].value
                };
            } else {
                stats = {
                    cat: "X",
                    col: "X",
                    bas: "X"
                };
            }
        
            img.src = nftImg;
        
            this.shadowRoot.getElementById("availableCards")?.appendChild(card);
        
            this.shadowRoot.getElementById(`selnft${nft.id}`)?.addEventListener("click", (e) => {
                // Add your select NFT logic here
            });
        
            this.shadowRoot.getElementById(`viewnft${nft.id}`)?.addEventListener("click", (e) => {
                this.viewCard(e, nftImg, stats);
            });
        });
    }
    

    connectedCallback() {
        this.render();
        dragElement(this.shadowRoot.getElementById("main"), true);
        this.buildWalletButons();
        setTimeout(() => {
            document.getElementById("forgeModal").shadowRoot.getElementById("reload").addEventListener("click", this.reloadNfts.bind(this));
        }, 500);
        // setTimeout(() => {
        //     document.getElementById("walletsModal").setAttribute("active", "connected");
        // }, 5000);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                #main {
                    height: 75%;
                    width: 24%;
                    position: absolute;
                    overflow: hidden;
                    background-color: rgba(0, 0, 0, 0.7);
                    top: 12.5%;
                    right: 5%;
                    z-index: 20;
                    border-radius: 10px;
                    border: 1px solid var(--primary);
                    font-family: 'BS-R';
                    transition: .3s all;
                    transform-origin: center;
                    transform: scaleX(0);
                    opacity: 0;
                }

                #header {
                    width: 95%;
                    height: 7%;
                    font-size: 1.1em;
                    letter-spacing: 4px;
                    display: flex;
                    align-items: center;
                    padding-left: 5%;
                    display: grid;
                    cursor: grab;
                }

                #headerConnected {
                    width: 80%;
                    height: 5%;
                    font-size: 1.1em;
                    letter-spacing: 4px;
                    display: none;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    align-items: center;
                    padding-left: 5%;
                    padding-top: 5%;
                    cursor: grab;
                }

                #mainCont {
                    width: 100%;
                    height: 83%;
                    overflow: hidden;
                }

                #walletsCont {
                    width: 95%;
                    height: 80%;
                    padding-left: 5%;
                    padding-top: 5%;
                    position: absolute;
                    transform-origin: center;
                    transition: .5s all;
                    display: block;
                }

                #infoCont1 {
                    width: 100%;
                    height: 10%;
                    display: flex;
                    align-items: center;
                    color: var(--accent);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .9em;
                    letter-spacing: 2px;
                    text-decoration: underline;
                    cursor: pointer;
                }

                 #infoCont2 {
                    width: 100%;
                    height: 10%;
                    display: none;
                    align-items: center;
                    color: var(--accent);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .9em;
                    letter-spacing: 2px;
                    text-decoration: underline;
                    cursor: pointer;
                }

                .walletBut {
                    width: 90%;
                    height: 11%;
                    display: flex;
                    align-items: center;
                    padding-right: 5%;
                    cursor: pointer;
                    overflow: hidden;
                    margin-bottom: 2%;
                }

                .walletBut:hover {
                    border-bottom: 1px solid var(--accent);
                    color: var(--accent);
                    background-color: black;
                    border-radius: 10px;
                }

                .walletBut:hover > .walletLogo {
                    filter: saturate(100%) hue-rotate(0deg);
                }

                .walletLogo {
                    width: 30%;
                    height: 100%;
                    filter: saturate(19%) hue-rotate(-45deg);
                }

                .walletName {
                    letter-spacing: 2px;
                    font-size: .9em;
                }

                a {
                    color: var(--accent);
                    text-decoration: none;
                    transition: .3s all;
                }

                a:hover {
                    text-decoration: underline;
                    letter-spacing: 3px;
                }

                #logout {
                    display: flex;
                    justify-content: flex-end;
                    cursor: pointer;
                    transition: .3s all;
                    padding-right: 6%;
                    font-size: .7em;
                    text-decoration: underline;
                    color: var(--accent);
                    transition: .3s all;
                    letter-spacing: 3px;
                }

                #logout:hover {
                    letter-spacing: 4px;
                }

                #connectedCont {
                    width: 84%;
                    height: 95%;
                    padding-left: 8%;
                    padding-top: 5%;
                    padding-right: 8%;
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 60% 1fr 1fr 1fr;
                }

                #accountCard {}

                #accountDesc {
                    padding-top: 5%;
                    font-size: 1em;
                    color: var(--secondary);
                }

                #accountStats {
                    display: grid;
                    grid-template-columns: 85% 15%;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    color: var(--primary);
                    font-size: 1em;
                    letter-spacing: 2px;
                }

                #expandBut {
                    height: 30px;
                    width: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: .3s all;
                    font-size: 1.5em;
                    border: 1px solid var(--primary);
                }

                #actionButCont {
                    display: flex;
                    justify-content: center;
                    align-items: end;
                }

                .button {
                    width: 48%;
                    height: 45%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--accent);
                    letter-spacing: 3px;
                    cursor: pointer;
                    transition: .3s all;
                    border: 1px solid var(--accent);
                    border-radius: 5px;
                    font-size: .8em;
                }

                .button:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: 'BS-B';
                }

                #username {
                    text-transform: uppercase;
                }

                .inactive {
                    border: 1px solid var(--primary);
                    color: var(--primary)
                }

                .inactive:hover {
                    background-color: var(--primary);
                    color: black;
                    font-family: "BS-B";
                    text-decoration: line-through;
                }

            </style>
            <div id="main" data-domType="shadow">
                <comp-close-btn></comp-close-btn>
                <div id="header">CONNECT WALLET</div>
                <div id="headerConnected">
                    <div>
                        <div style="font-size:.6em;">Welcome back</div>
                        <div id="username">SCOGE.ETH</div>
                    </div>
                    <div id="logout">logout</div>
                </div>
                <div id="mainCont">
                    <div id="walletsCont"></div>
                    <div id="connectedCont">
                        <div id="accountCard">
                            <img src="${missing}" id="lgimg" style="width: auto; height: 100%;"/>
                        </div>
                        <div id="accountDesc">
                            You'll need a Cloak to boot this up. It's too risky!
                        </div>
                        <div id="accountStats">
                            <div id="stats">
                                <div class="stat">P_A:V0.0.6</div>
                                <div class="stat">CH 0 - Tourist</div>
                                <div class="stat">0x/0x/xx24 ::  x00:00x</div>
                            </div>
                            <div id="expandBut">+</div>
                        </div>
                        <div id="actionButCont">
                            <div class="button inactive">BOOT-UP</div>
                        </div>
                    </div>
                </div>
                <div id="infoCont1">Create Wallet</div>
                <div id="infoCont2">Find A Cloak</div>
            </div>
        `;
    }

}

customElements.define('wallets-modal', compWallets);

export {compWallets};