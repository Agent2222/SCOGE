import {
    dragElement
} from "../universe";
import { Principal } from "@dfinity/principal";
import coinbaseLogo from "../../assets/images/wallets/coinbase.png";
import metamaskLogo from "../../assets/images/wallets/metamask.png";
import plugLogo from "../../assets/images/wallets/plug.png";
import rainbowLogo from "../../assets/images/wallets/rainbow.png";
import stoicLogo from "../../assets/images/wallets/stoic.png";
import smartLogo from "../../assets/images/wallets/smart.png";
import statsImg from "../../assets/images/cards/digi-stats-1.jpg";
import mainCover from "../../assets/images/covers/scoge-uni-cover-1.jpg";
import { adminMenu,  enterTaosCity} from "../universe";
import { idlFactory } from "../../src/declarations/universe_backend/universe_backend.did.js";

import {
    createThirdwebClient,
    getContract,
    readContract
} from "thirdweb";
import {
    createWallet,
    injectedProvider,
    ecosystemWallet
} from "thirdweb/wallets";
import {
    base,
    sepolia
} from "thirdweb/chains";
import {
    resolveName
} from "thirdweb/extensions/ens";

export const client = createThirdwebClient({
    clientId: "0122a915b52dd5f35d9bbc909a2b3341",
});

export var forgeable = [];

class compWallets extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        window.ethNFTS = [];
        this.currentWallet = null;
        this.nftloading = false;
        this.icpPrincipal = null;
        this.icpActor = null;
        this.plugPk = null;
        // const canister = "7mfck-baaaa-aaaah-acuqq-cai";
        this.local = "http://127.0.0.1:8080/";
        this.canLocal = "bd3sg-teaaa-aaaaa-qaaba-cai";
        this.deploy = "https://ic0.app";
        this.canDeploy = 'wnunb-baaaa-aaaag-aaoya-cai';
        this.taosLocal = 'bd3sg-teaaa-aaaaa-qaaba-cai';
        this.whitelist = [this.canDeploy, this.taosLocal];
        // whitelist, deploy

        this.availableWallets = [{
                name: "Coinbase Wallet",
                logo: coinbaseLogo,
                link: "https://www.coinbase.com/wallet"
            },
            {
                name: "Rainbow",
                logo: rainbowLogo
            },
            // {
            //     name: "MetaMask",
            //     logo: metamaskLogo
            // },
            {
                name: "Plug",
                logo: plugLogo
            },
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

    async isAdmin(address) {
        const custCheck = await this.icpActor.allowed2(address).then((result) => {
            console.log("allowed", result);
            return result;
          }).catch((error) => {
            console.error("Error checking permission:", error);
          });
    }

    /////////////////////////////
    // Connect to MetaMask
    /////////////////////////////
    async connectMetaMask() {
        const wallet = createWallet("io.metamask"); // pass the wallet id
        // if user has metamask installed, connect to it
        if (injectedProvider("io.metamask")) {
            await wallet.connect({
                client
            }).then((res) => {
                this.resolveLogin(res, wallet, false);
                window.currentWallet = wallet.getAccount().address;
            }).catch((err) => {
                console.log(err)
                this.shadowRoot.getElementById('MetaMask').style.opacity = ".5";
                this.shadowRoot.getElementById('MetaMask-text').innerHTML = `*TEMPORARILY OFFLINE*`;
            })
        }

        // open wallet connect modal so user can scan the QR code and connect
        else {
            await wallet.connect({
                client,
                walletConnect: {
                    showQrModal: true
                },
            }).then((res) => {
                this.resolveLogin(res, wallet, false);
            })
        }
    }

    /////////////////////////////
    // Connect to Coinbase Wallet
    /////////////////////////////
    async connectCoinbase() {
        // const wallet = ecosystemWallet("ecosystem.hooli", {
        //     partnerId: "com.coinbase.wallet",
        //   });
        const wallet = createWallet("com.coinbase.wallet"); // pass the wallet id
        // // if user has coinbase wallet installed, connect to it
        if (injectedProvider("com.coinbase.wallet")) {
            await wallet.connect({
                client
            }).then(async (res) => {
                this.resolveLogin(res, wallet, false);
                window.currentWallet = wallet.getAccount().address;
            }).catch((err) => {
                console.log(err)
                this.shadowRoot.getElementById('Coinbase Wallet').style.opacity = ".5";
                this.shadowRoot.getElementById('Coinbase Wallet-text').innerHTML = `*TEMPORARILY OFFLINE*`;
            })
        }

        // open wallet connect modal so user can scan the QR code and connect
        else {
            await wallet.connect({
                client,
                walletConnect: {
                    showQrModal: true
                },
            }).then((res) => {
                this.resolveLogin(res, wallet, false);
            });
        }
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
        console.log(wallet);
        // if user has rainbow wallet installed, connect to it
        if (injectedProvider("me.rainbow")) {
            await wallet.connect({
                client
            }).then(async (res) => {
                this.resolveLogin(res, wallet, false);
                window.currentWallet = wallet.getAccount().address;
            }).catch((err) => {
                console.log(err)
                this.shadowRoot.getElementById('Rainbow').style.opacity = ".5";
                this.shadowRoot.getElementById('Rainbow-text').innerHTML = `*TEMPORARILY OFFLINE*`;
            })
        }

        // open wallet connect modal so user can scan the QR code and connect
        else {
            await wallet.connect({
                client,
                walletConnect: {
                    showQrModal: true
                },
            }).then((res) => {
                this.resolveLogin(res, wallet, false);
            });
        }
    }

    /////////////////////////////
    // Connect to Plug Wallet
    /////////////////////////////
    async connectPlug(whitelist, host) {
        if (window.ic === undefined) {
            console.log("Plug not found - Get Plug Wallet");
            this.shadowRoot.getElementById('Plug').style.opacity = ".5";
            this.shadowRoot.getElementById('Plug-text').innerHTML = `*Plug not found - Get Plug Wallet*`;
            return;
        } else {
            // Scenario - Returning User
            let connected = false;
            try {
                connected = await window.ic.plug.isConnected();
            } catch (e) {
                console.error(e);
            }

            if (connected === false) {
                // Scenario - User has a plug wallet but is not connected
                this.plugPk = await window.ic.plug
                    .requestConnect({
                        whitelist: whitelist,
                        host: host,
                        timeout: 50000,
                    })
                    .catch((e) => {
                        console.error("Connect Wallet", e);
                        this.shadowRoot.getElementById('Rainbow').style.opacity = ".5";
                        this.shadowRoot.getElementById('Rainbow-text').innerHTML = `*TEMPORARILY OFFLINE*`;
                    });

                const principal = await window.ic.plug.getPrincipal().catch((e) => {
                    console.log("Get Principal", e);
                });
                
                this.icpPrincipal = Principal.fromUint8Array(principal._arr).toString();

                var res = {
                    address: this.icpPrincipal
                };
                var wallet = {}
                this.resolveLogin(res, wallet, true);

            } else if (connected === true) {
                // Scenario - User has a plug wallet and is connected
                console.log("Connected");
                const principal = await window.ic.plug.getPrincipal().catch((e) => {
                    console.log("Get Principal", e);
                });
                
                this.icpPrincipal = Principal.fromUint8Array(principal._arr).toString();

                var res = {
                    address: this.icpPrincipal
                };
                var wallet = {}
                this.resolveLogin(res, wallet, true);
                
                this.icpActor = await window.ic.plug.createActor({
                    canisterId: "wnunb-baaaa-aaaag-aaoya-cai",
                    interfaceFactory: idlFactory,
                });

                document.getElementById("ccpaModal").icpActor = this.icpActor;

                const custCheck = await this.icpActor.allowed3(principal).then((result) => {
                  console.log("allowed", result);
                  if (result === true) {
                    adminMenu();
                  }
                  return result;
                }).catch((error) => {
                  console.error("Error checking permission:", error);
                });

            }
        }
    }


    /////////////////////////////
    // Connect to Stoic Wallet
    /////////////////////////////

    async resolveLogin(res, wallet, isIcp) {
        this.connectTransition();
        setTimeout(() => {
            document.getElementById("forgeModal").shadowRoot.getElementById("loadingModal").startLoading();
        }, 500);
        window.currentWallet = res.address;

        document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenuExit").setAttribute("data-connected", "true");
        var el = document.getElementById("getUniMenu").shadowRoot.getElementById("menuloginBut");
        document.getElementById("getUniMenu").openFullMenu(el);

        if (isIcp === true) {
            // ICP CODE
            console.log("ICP WALLET");
            let username = this.icpPrincipal.slice(0, 3) + "..." + this.icpPrincipal.slice(-4) + "&nbsp;&nbsp;>";
            this.shadowRoot.getElementById("username").innerHTML = username.replace(">", "");
            document.getElementById("getUniMenu").shadowRoot.getElementById("menuloginBut").innerHTML = username;

            this.shadowRoot.getElementById("logout").addEventListener("click", async () => {
                window.ic.plug.disconnect().then(() => {
                    this.disconnectTransition();
                }).catch((err) => {
                    console.log("disconnect error", err);
                });
            });

            this.shadowRoot.querySelector(".newGameButton").addEventListener("click", async () => {
                // this.taos().bind(this);
            });

            // this.initForge();
            this.shadowRoot.querySelector(".forgeMastersButton").addEventListener("click", async () => {
                document.getElementById("forgeModal").shadowRoot.getElementById("forgeCode").style.display = "grid";
                document.getElementById("forgeModal").initForge();
            }); 

            setTimeout(() => {
                document.getElementById("forgeModal").spinAction();
                document.getElementById("forgeModal").shadowRoot.getElementById("loadingModal").stopLoading();
            }, 500);
            // document.getElementById("forgeModal").setAttribute("active", "loaded");

            return;
        } else {
            // ETH CODE
            console.log("ETH WALLET");
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

            // $CDSK
            this.shadowRoot.querySelector(".marketButton").addEventListener("click", async () => {
                // open new tab
                window.open('https://dexscreener.com/base/0x66d57d9d6b59c2d2ae3f31eb22926bd08833956f', '_blank');
            });

            this.shadowRoot.querySelector(".newGameButton").addEventListener("click", async () => {
                // this.taos().bind(this);
            }); 

            // this.initForge();
            this.shadowRoot.querySelector(".forgeMastersButton").addEventListener("click", async () => {
                document.getElementById("forgeModal").shadowRoot.getElementById("forgeCode").style.display = "grid";
                document.getElementById("forgeModal").initForge();
            }); 

            this.shadowRoot.getElementById("logout").addEventListener("click", async () => {
                await wallet.disconnect().then(() => {
                    this.disconnectTransition();
                }).catch((err) => {
                    console.log("disconnect error", err);
                });
            });
        }

    }

    buildWalletButons() {
        let walletsCont = this.shadowRoot.getElementById("walletsCont");
        this.availableWallets.forEach(wallet => {
            let walletBut = document.createElement("div");
            walletBut.classList.add("walletBut");
            walletBut.id = wallet.name
            walletBut.innerHTML = `
                <div class="walletLogo">
                    <img src="${wallet.logo}" style="height: 100%;"/>
                </div>
                <div class="walletName
                " id="${wallet.name}-text">${wallet.name}</div>`;
            walletsCont.appendChild(walletBut);

            switch (wallet.name) {
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
                    });
                    break;
                case "Plug":
                    walletBut.addEventListener("click", () => {
                        this.connectPlug(this.whitelist, this.deploy);
                    });
                    break;
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
            window.open('https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x394bc54133c50d37429f08a2d558018b7fc1c14d', '_blank');
        });
        this.shadowRoot.getElementById("accountCard").addEventListener("click", () => {
            window.open('https://www.youtube.com/watch?v=UsgbSmDMZZg', '_blank');
        });
    }

    connectTransition() {
        let el1main = this.shadowRoot.getElementById("walletsCont");
        let el1head = this.shadowRoot.getElementById("header");
        let el2main = this.shadowRoot.getElementById("connectedCont");
        let el2head = this.shadowRoot.getElementById("headerConnected");
        if (this.shadowRoot.getElementById("infoCont1")) {
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
            }).catch((err) => {
                console.log("Error", err);
            });
            if (balance > 0) {
                ownedNFTs.push({
                    id: i,
                    balance: balance
                });
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
                ownedNFTs2.push({
                    id: i,
                    balance: balance
                });
            }
        }

        window.ethNFTS = [];

        for (let nftObj in ownedNFTs) {
            let nft = await this.tokenDataETH(ownedNFTs[nftObj].id, this.contract);
            window.ethNFTS.push({
                id: ownedNFTs[nftObj].id,
                count: 0,
                qty: Number(ownedNFTs[nftObj].balance),
                nft: nft
            });
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
            window.ethNFTS.push({
                id: firstLength + ownedNFTs2[nftObj].id,
                count: 0,
                qty: Number(ownedNFTs2[nftObj].balance),
                nft: nft
            });
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
                ownedNFTs3.push({
                    id: i,
                    balance: balance
                });
            }
        }

        for (let nftObj in ownedNFTs3) {
            let nft = await this.tokenDataETH(ownedNFTs3[nftObj].id, this.forgeable);
            forgeable.push({
                id: ownedNFTs3[nftObj].id,
                count: 0,
                qty: Number(ownedNFTs3[nftObj].balance),
                nft: nft
            });
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
                ownedNFTs4.push({
                    id: i,
                    balance: balance
                });
            }
        }

        for (let nftObj in ownedNFTs4) {
            let nft = await this.tokenDataETH(ownedNFTs4[nftObj].id, this.guide);
            window.ethNFTS.push({
                id: ownedNFTs4[nftObj].id,
                count: 0,
                qty: Number(ownedNFTs4[nftObj].balance),
                nft: nft
            });
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
                window.ethNFTS.unshift({
                    id: 0,
                    count: 0,
                    qty: 1,
                    nft: nft2
                })
            } else { // NO BEACON
                if (window.ethNFTS.length < 6) {
                    const beacBal = await readContract({
                        contract: this.limitedTech,
                        method: "function totalSupply(uint256) view returns (uint256)",
                        params: [0],
                    }).then(async (res) => {
                        if (res != 0) {
                            let nft1 = await this.tokenDataETH(1, this.limitedTech);
                            window.ethNFTS.unshift({
                                id: 1,
                                count: 0,
                                qty: 1,
                                nft: nft1
                            });
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
                // this.shadowRoot.getElementById("actionButCont").addEventListener("click", this.taos);
                this.shadowRoot.querySelectorAll(".button")[0]?.classList.remove("inactive");
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
                httpUrl = data.replace("ipfs://", "https://52ecc14ce71f7fe5cfc6f381627730cc.ipfscdn.io/ipfs/");
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
        // setTimeout(() => {
        //     document.getElementById("miniAgent").setAttribute("status", "intro");
        //     document.getElementById("miniAgent").toggle();
        // }, 59000)
        // setTimeout(() => {
        //     alert("THEY'RE ONTO YOU, GET OUT!");
        //     setTimeout(() => {
        //         location.reload();
        //     }, 1000)
        // }, 60000)
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

            img.onload = function () {
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
                    background-color: rgba(0, 0, 0, 0.8);
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
                    grid-template-rows: 55% 5% 1fr;
                }

                #accountCard {
                    cursor: pointer;
                    transition: .5s all;
                }

                #accountCard img {
                    width: 100%;
                }
                #accountCard:hover {
                    scale: 1.02;
                }

                #accountDesc {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1em;
                    text-align: center;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: .8em;
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
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr 1fr ;
                    grid-template-columns: 1fr;
                    justify-items: center;
                    align-items: end;
                    width: 100%;
                }

                .button, .preButton, .newButton {
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

                .newButton {
                    border: 1px solid var(--primary);
                    color: var(--primary);
                }

                .newButton:hover {
                    background-color: var(--primary);
                    color: black;
                    font-family: 'BS-B';
                }

                #username {
                    text-transform: uppercase;
                }

                .inactive {
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    opacity: .3;
                }

                .inactive:hover {
                    background-color: var(--accent);
                    color: black;
                    font-family: "BS-B";
                    text-decoration: line-through;
                }

                .inactive2 {
                    border: 1px solid var(--primary);
                    color: var(--primary);
                    opacity: .5;
                }

                .inactive2:hover {
                    background-color: var(--primary);
                    color: black;
                    font-family: "BS-B";
                    text-decoration: line-through;
                }

                .forgeMastersButton {
                    animation: buttonPulse 1.5s infinite;
                }
                    
                @keyframes buttonPulse {
                    0% {
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(255, 0, 45, 1);
                    }
                    50% {
                        transform: scale(1.05);
                        box-shadow: 0 0 0 30px rgba(255, 0, 45, 0);
                    }
                    100% {
                        transform: scale(1);
                         box-shadow: 0 0 0 0 rgba(255, 0, 45, 0);
                    }
                }

            </style>
            <div id="main" data-domType="shadow">
                <comp-close-btn></comp-close-btn>
                <div id="header">LOG-IN</div>
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
                            <img src="${mainCover}" id="lgimg" style="width: 100%; height: auto;"/>
                        </div>
                        <div id="accountDesc">
                            Version: 0.0.6
                        </div>
                        <div id="actionButCont">
                            <div class="newButton newGameButton inactive2">NEW GAME</div>
                            <div class="button continueButton inactive">CONTINUE</div>
                            <div class="button forgeMastersButton">FORGE MASTERS</div>
                            <div class="button marketButton">$CDSK</div>
                        </div>
                    </div>
                </div>
                <div id="infoCont1">Create Wallet</div>
                <div id="infoCont2">$CDSK Uniswap</div>
            </div>
        `;
    }

}

customElements.define('wallets-modal', compWallets);

export {
    compWallets
};