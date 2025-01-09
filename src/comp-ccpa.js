import { SoundtrackManager } from "./soundtrack.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { idlFactory } from "../src/declarations/universe_backend/universe_backend.did.js";
import { Actor, HttpAgent } from "@dfinity/agent";

//Static Assets
import previousBut from "../assets/images/assets1/previous-primary-1.png";
import playBut from "../assets/images/assets1/play-primary-1.png";
import sendBut from "../assets/images/assets1/arrow-primary-1.png";
import globes from "../assets/images/assets1/SCOGE_BankooGraphic.png";
import banner from "../assets/images/assets1/SCOGE_Banner.png";
import arrowAccent from "../assets/images/assets1/arrow-accent-1.png";
import pauseBut from "../assets/images/assets1/pause-primary-1.png";
import periumRetrieve from "../assets/sound/perium-retrieve.mp3";

class compCCPA extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.currentSonic = null;
        this.sonicPlaying = false;
        this.currentSonicTrack = 0;
        this.sonicPaused = false;
        this.pured1 = null;
        this.pured2 = null;
        this.loadedPerium = {
            nfc: "",
            dep: false,
            tag: "",
            cat: "",
            title: "",
            d1: null,
            d2: null,
            d3: "",
            desc: "",
            views: null,
            lastV: ""
        };
        this.Perium = {
            number: "030904988920",
            type: "video", 
            title: "FIRST CONTACT",
            body: {
              image: "https://i.seadn.io/s/raw/files/32b04f51b5f2244e18181de948afc9fb.jpg?auto=format&dpr=1&w=1000",
              text:["This isn't first contact.", "You already know everything about us.", "You just have to remember."],
              video : 'https://firebasestorage.googleapis.com/v0/b/fusion-intl.appspot.com/o/extra%2FVisions_1.mp4?alt=media&token=6bb587ce-2d07-4d9f-9162-43ff5093d827',
              audio: {
                image: "https://firebasestorage.googleapis.com/v0/b/fusion-intl.appspot.com/o/extra%2Frtd.jpg?alt=media&token=34f3b873-ec8b-4c64-81d3-c4df510b8668", 
                track: "https://firebasestorage.googleapis.com/v0/b/fusion-intl.appspot.com/o/extra%2Frtd.mp3?alt=media&token=9feb8e28-f589-4483-af33-b942682d6303",
                trackName: "1. Rainbow To Daughter",
                title: "The Last Bastion"
              }
            }
          }
        // NOTES
        // LIBRARY FEATURE WILL BE ADDED IN THE FUTURE ONCE DIGISETTE FEATURE IS COMPLETE
        // ADDED TO INDEX GETPARAMDESKTOP FUNC
    }

    get active() {
        return this.getAttribute('active');
    }

    set active(val) {
        this.setAttribute('active', val);
    }


    static get observedAttributes() {
        return ["active", "data-perium"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "active") {
            this.render();
        }
        if (name === "data-perium" && newValue === "trueAdmin") {
            this.getPerium();
        }
        if (name === "data-perium" && newValue != "true") {
            this.getPerium({id: newValue, env: "prod"});
        }
    }

    parseTextToArray(text) {
        return text.split(',').map(sentence => sentence.trim()).filter(sentence => sentence !== '');
    }

    fileReader(cat, file) {
        switch(cat) {
            case "note":
                var textArray = this.parseTextToArray(file);
                this.loadedPerium.d3 = textArray;
                break;
            case "image":
                const blobRaw = new Blob([file]);
                const blobURL = URL.createObjectURL(blobRaw);
                this.loadedPerium.d1 = blobURL;
                break;
            case "video":
                const blobRaw2 = new Blob([file]);
                const blobURL2 = URL.createObjectURL(blobRaw2);
                this.loadedPerium.d1 = blobURL2;
                // Optional: Revoke the Blob URL after the video loads to free memory
                // preview.onloadeddata = () => {
                //     URL.revokeObjectURL(blobURL);
                // };
                break;
            case "sonic":
                let blobRaw3 = new Blob([file], {type: 'audio/mpeg'});
                let blobURL3 = URL.createObjectURL(blobRaw3);
                this.loadedPerium.d2 = blobURL3;
                break;
        }
    }

    ccpaCta() {
        this.shadowRoot.getElementById("ctaSendButton").addEventListener("click", (event) => {
            event.preventDefault();
        
            // Retrieve form values
            var emailSub = this.shadowRoot.getElementById("emailInput2").value;
            var feedbackSub = "CCAP VIEWER";
            
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
                this.shadowRoot.getElementById("mcBeaconInput").reset(); // Reset the form
                this.shadowRoot.getElementById("mcBeaconInput").innerHTML = "RECIEVED.";
                this.shadowRoot.getElementById("mcBeaconInput").style.gridTemplateRows = "1fr";
                this.shadowRoot.getElementById("mcBeaconInput").style.letterSpacing = "1px";
                // setTimeout(() => {}, 3000);
            });
        });
    }

    async periumActor() {
        // var canisterId = "bd3sg-teaaa-aaaaa-qaaba-cai";
        var canisterId = "wnunb-baaaa-aaaag-aaoya-cai";
        var live = "https://ic0.app";
        var local = "http://127.0.0.1:4943";
        let agent = new HttpAgent({ host: live });
        // let agent =  window.ic.plug.agent;
        const actor = Actor.createActor(idlFactory, {
            agent,
            canisterId,
        });
        agent.fetchRootKey();
        return actor;
    }
    

    async getPerium(periumData) {
        var envData = {
            id: "periumId",
            env: null
        }

        if (periumData != null) {
            envData = periumData;
        }

        if (envData.env != null) {
            var actor = await this.periumActor(); 
            const perium = await actor.getPerium(envData.id).then((result) => {
                this.loadedPerium = result[0];
                this.shadowRoot.getElementById("paNum").innerHTML = this.loadedPerium.nfc;
                this.shadowRoot.getElementById("pIntroNum").innerHTML = this.loadedPerium.nfc;
                this.shadowRoot.getElementById("paNum2").innerHTML = `[${this.loadedPerium.cat}]`;
                this.shadowRoot.getElementById("singleAction").innerHTML = "ACCESS";
                this.shadowRoot.getElementById("singleAction").style.animation = "none";
                this.shadowRoot.getElementById("singleAction").style.border = "1px solid var(--accent)";
                this.shadowRoot.getElementById("singleAction").style.color = "var(--accent)";
                this.shadowRoot.getElementById("singleAction").addEventListener("click", () => {
                    var retrieve = new Audio(periumRetrieve);
                    setTimeout(() => {
                        retrieve.play();
                    }, 500);
                    this.findPerium();
                });
                return result;
              }).catch((error) => {
                this.shadowRoot.getElementById("singleAction").innerHTML = "ERROR";
                this.shadowRoot.getElementById("singleAction").style.animation = "none";
                this.shadowRoot.getElementById("singleAction").style.border = "1px solid var(--primary)";
                this.shadowRoot.getElementById("singleAction").style.color = "var(--primary)";
                console.error("Error checking permission:", error);
            });
            return;
        } else {
            this.shadowRoot.getElementById("paNum").innerHTML = this.loadedPerium.nfc;
            this.shadowRoot.getElementById("pIntroNum").innerHTML = this.loadedPerium.nfc;
            this.shadowRoot.getElementById("paNum2").innerHTML = `[${this.loadedPerium.cat}]`;
            this.shadowRoot.getElementById("singleAction").addEventListener("click", () => {
                this.findPerium();
            });
        }

    }

    exitBut(page) {
        switch(page) {
            case "main":
                gsap.to(this.shadowRoot.host, {duration: .5, scale: 2, opacity: 0, ease: "power2.inOut"});
                setTimeout(() => {
                    document.getElementById("ccpaModal").remove();
                }, 700);

                // clear url params
                window.history.pushState({}, document.title, "/" + "");

                break;
        }
    }

    findPerium() {
        var button1 = this.shadowRoot.getElementById("singleAction");
        var exitBut = this.shadowRoot.getElementById("exitBut");
        // rotate the avatars
        this.shadowRoot.getElementById("singleAction").innerHTML = "LOADING";
        gsap.to(this.shadowRoot.getElementById("loadGlobes"), {duration: .5, opacity: 1, ease: "power2.inOut"});
        gsap.to(this.shadowRoot.getElementById("loadGlobes"), {duration: 1.5, rotation: 630, ease: "power2.inOut", delay: .6});
        gsap.to(this.shadowRoot.getElementById("ccpaAvatar"), {duration: 1, rotation: -180, ease: "power2.inOut", delay: .3});
        gsap.to(this.shadowRoot.getElementById("introScreen"), {duration: .5, scale: 10, ease: "power2.inOut", delay: 2.4});
        gsap.to(this.shadowRoot.getElementById("introScreen"), {duration: .5, opacity: 0, ease: "power2.inOut", delay: 2.4});

        setTimeout(() => {
            this.shadowRoot.getElementById("pdNum").style.visibility = "hidden";
            // button1.innerHTML = "LIBRARY";
            button1.style.visibility = "hidden";
            exitBut.style.display = "grid";
            this.shadowRoot.getElementById("phantomScroller").style.pointerEvents = "auto";

            exitBut.addEventListener("click", () => {
                this.exitBut("main");
            });
        }, 2500);

        gsap.to(this.shadowRoot.getElementById("scrollIntro"), {duration: .5, opacity: 1, ease: "power2.inOut", delay: 2.4});

        gsap.to(this.shadowRoot.getElementById("ccapBanner"), {duration: .5, scale: 1, ease: "power2.inOut", delay: 2.4});

        setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);

            var selElement = this.shadowRoot.getElementById("scrollIntro");
            var trigElement = this.shadowRoot.getElementById("sb4");

            gsap.set(this.shadowRoot.getElementById("scrollIntro"), {
                scale: 1,
                opacity: 1
            });
    
            gsap.to(this.shadowRoot.getElementById("scrollIntro"), {
                scale: 5, // Scale up to 3x its original size
                opacity: 0, // Fade out to 0 opacity
                scrollTrigger: {
                    trigger: this.shadowRoot.getElementById("sb2"),  // Element that triggers the animation
                    scroller: this.shadowRoot.getElementById("phantomScroller"), // Explicit scroll container
                    start: "top center",   // Animation starts when the element's top hits the center of the viewport
                    end: "center center",     // Animation ends when the element's bottom reaches the top of the viewport
                    scrub: true,           // Sync the animation to the scroll progress
                    //markers: true          // (Optional) Show start and end markers for debugging
                }
            });

            gsap.to(this.shadowRoot.getElementById("header"), {
                opacity: 1, // Fade out to 0 opacity
                scrollTrigger: {
                    trigger: this.shadowRoot.getElementById("sb2"),  // Element that triggers the animation
                    scroller: this.shadowRoot.getElementById("phantomScroller"), // Explicit scroll container
                    start: "top center",   // Animation starts when the element's top hits the center of the viewport
                    end: "bottom center",     // Animation ends when the element's bottom reaches the top of the viewport
                    scrub: true,           // Sync the animation to the scroll progress
                    //markers: true          // (Optional) Show start and end markers for debugging
                }
            });
        }, 2400);

        // console.log("loaded Perium", this.loadedPerium);
        this.buildPages(this.loadedPerium);
    }

    playToggleSonic() {
        if (this.currentSonic === null) {
            this.fileReader("sonic", this.loadedPerium.d2);
            this.currentSonic = new Audio(this.loadedPerium.d2);
        }

        if (this.sonicPlaying === false) {
            this.sonicPlaying = true;
            this.shadowRoot.getElementById("playSymbol").src = pauseBut;
            this.currentSonic.play()

            this.shadowRoot.getElementById("ac2").style.animation = "rotateAlbum 8s linear infinite";
    
            this.currentSonic.addEventListener("ended", () => {
                this.shadowRoot.getElementById("playSymbol").src = playBut;
                this.sonicPlaying = false;
                this.shadowRoot.getElementById("ac2").style.animation = "none";
            });
            return;
        }

        if (this.sonicPaused === false) {
            this.currentSonic.pause();
            this.shadowRoot.getElementById("playSymbol").src = playBut;
            this.sonicPaused = true;
            this.shadowRoot.getElementById("ac2").style.animation = "none";
            return;
        } else {
            this.currentSonic.play();
            this.shadowRoot.getElementById("playSymbol").src = pauseBut;
            this.sonicPaused = false;
            this.shadowRoot.getElementById("ac2").style.animation = "rotateAlbum 8s linear infinite";
            return;
        }
    }

    restartSonic() {
        this.currentSonic.pause();
        this.currentSonic.currentTime = 0;
        this.currentSonic.play();
        this.shadowRoot.getElementById("playSymbol").src = pauseBut;
        this.sonicPaused = false;
    }

    buildPages(perium) {
        this.shadowRoot.getElementById("pTitle2").innerHTML = this.loadedPerium.title;
        switch(perium.cat) {
            case "note":
                this.fileReader("note", this.loadedPerium.d3);
                console.log("loadedD3", this.loadedPerium.d3);
                for (let i = 0; i < this.loadedPerium.d3.length; i++) {

                    // if (i === 0) {
                    //     var player = document.createElement("div");
                    //     player.innerHTML = `[ PLAY ]`;
                    //     player.id = "notePlayerToggle";
                    //     player.style.zIndex = 2;
                    //     this.shadowRoot.getElementById("periumPages").appendChild(player);

                    //     gsap.to(player, {
                    //         opacity: 1, // Fade out to 0 opacity
                    //         scrollTrigger: {
                    //             trigger: this.shadowRoot.getElementById(`sb${i+2}`), 
                    //             scroller: this.shadowRoot.getElementById("phantomScroller"),
                    //             start: "top center", 
                    //             end: "bottom center",  
                    //             scrub: true,          
                    //             //markers: true  
                    //         }
                    //     });
                    // }

                    var newPage = document.createElement("div");
                    newPage.innerHTML = this.loadedPerium.d3[i];
                    newPage.classList.add("ccpaNote");
                    newPage.id = "page" + i;
                    newPage.style.zIndex = i;
                    this.shadowRoot.getElementById("periumPages").appendChild(newPage);

                    gsap.to(newPage, {
                        opacity: 1, // Fade out to 0 opacity
                        scrollTrigger: {
                            trigger: this.shadowRoot.getElementById(`sb${i+2}`), 
                            scroller: this.shadowRoot.getElementById("phantomScroller"),
                            start: "top center", 
                            end: "bottom center",  
                            scrub: true,          
                            //markers: true  
                        }
                    });

                    gsap.to(newPage, {
                        opacity: 0, // Fade out to 0 opacity
                        scrollTrigger: {
                            trigger: this.shadowRoot.getElementById(`sb${i+2}`), 
                            scroller: this.shadowRoot.getElementById("phantomScroller"),
                            start: "bottom center", 
                            end: "top center",  
                            scrub: true,          
                            //markers: true  
                        }
                    });
                }

                this.shadowRoot.getElementById("pCat").innerHTML = "NOTE:";

                break;
            case "image":
                
                for (let i = 0; i < 2; i++) {
                    this.shadowRoot.getElementById("sb5").style.display = "none";
                     
                    if (i === 0) {
                        this.fileReader("image", this.loadedPerium.d1);
                        var newPage = document.createElement("div");
                        newPage.innerHTML = `<img src="${this.loadedPerium.d1}" style="width: 90%; height: auto;"/>`;
                        newPage.classList.add("page");
                        newPage.id = "page" + i;
                        newPage.style.zIndex = i;
                        this.shadowRoot.getElementById("periumPages").appendChild(newPage);
                        gsap.to(newPage, {
                            opacity: 1, // Fade out to 0 opacity
                            scrollTrigger: {
                                trigger: this.shadowRoot.getElementById(`sb${i+2}`), 
                                scroller: this.shadowRoot.getElementById("phantomScroller"),
                                start: "top center", 
                                end: "bottom center",  
                                scrub: true,          
                                // markers: true  
                            }
                        });
                    }

                    if (i === 1) {
                        this.fileReader("image", this.loadedPerium.d1);
                        var newPage = document.createElement("div");
                        newPage.innerHTML = this.loadedPerium.d3;
                        newPage.classList.add("ccpaNote");
                        newPage.id = "page" + i;
                        newPage.style.zIndex = i;
                        this.shadowRoot.getElementById("periumPages").appendChild(newPage);
                        gsap.to(newPage, {
                            opacity: 1, // Fade out to 0 opacity
                            scrollTrigger: {
                                trigger: this.shadowRoot.getElementById(`sb${i+2}`), 
                                scroller: this.shadowRoot.getElementById("phantomScroller"),
                                start: "top center", 
                                end: "bottom 300px",  
                                scrub: true,          
                                // markers: true  
                            }
                        });
                    }

                    gsap.to(newPage, {
                        opacity: 0, // Fade out to 0 opacity
                        scrollTrigger: {
                            trigger: this.shadowRoot.getElementById(`sb${i+2}`), 
                            scroller: this.shadowRoot.getElementById("phantomScroller"),
                            start: "bottom center", 
                            end: "top center",  
                            scrub: true,          
                            //markers: true  
                        }
                    });
                }

                this.shadowRoot.getElementById("pCat").innerHTML = "IMAGE:";
                break;
            case "video":
                this.shadowRoot.getElementById("sb4").style.display = "none";
                this.shadowRoot.getElementById("sb5").style.display = "none";

                this.fileReader("video", this.loadedPerium.d1);

                var newPage = document.createElement("div");
                newPage.innerHTML = `<video width="100%" height="100%" autoplay muted loop><source src="${this.loadedPerium.d1}" type="video/mp4"></video>`;
                newPage.classList.add("page");
                newPage.classList.add("ccpaVideo");
                newPage.id = "page" + 0;
                newPage.style.zIndex = 0;
                this.shadowRoot.getElementById("periumPages").appendChild(newPage);
                gsap.to(newPage, {
                    opacity: 1, // Fade out to 0 opacity
                    scrollTrigger: {
                        trigger: this.shadowRoot.getElementById(`sb${2}`), 
                        scroller: this.shadowRoot.getElementById("phantomScroller"),
                        start: "top center", 
                        end: "bottom 200px",  
                        scrub: true,          
                        // markers: true  
                    }
                });

                this.shadowRoot.getElementById("pCat").innerHTML = "REALITY RECREATION:";

                break;
            case "sonic":
                this.fileReader("image", this.loadedPerium.d1);
                // this.shadowRoot.getElementById("sb4").style.display = "none";
                this.shadowRoot.getElementById("sb5").style.display = "none";
                var newPage = document.createElement("div");
                newPage.innerHTML = `
                <div id="audioInner">
                    <div class="blankDiv"></div>
                    <div id="albumCover">
                        <img id="ac1" src="${this.loadedPerium.d1}" style="width: 100%; height: auto;"/>
                        <img id="ac2" src="${this.loadedPerium.d1}" style="width: 100%; height: auto;"/>
                    </div>
                    <div id="sonic">
                        <div id="metaData">
                            <div>${this.loadedPerium.title}</div>
                            <div>${this.loadedPerium.desc}</div>
                        </div>
                        <div id="customControls">
                            <img class="audioButtons" id="restartSonic" src="${previousBut}" style="width: auto; height:50px;"/>
                            <img class="audioButtons" id="playSymbol" src="${playBut}" style="width: auto; height: 60px;"/>
                            <div class="blankDiv"></div>
                        </div>
                    </div>
                    <div class="blankDiv"></div>
                </div>
                `;
                newPage.classList.add("page");
                newPage.classList.add("ccpaSonic");
                newPage.id = "page" + 0;
                newPage.style.zIndex = 0;
                this.shadowRoot.getElementById("periumPages").appendChild(newPage);
                gsap.to(newPage, {
                    opacity: 1, // Fade out to 0 opacity
                    scrollTrigger: {
                        trigger: this.shadowRoot.getElementById(`sb${2}`), 
                        scroller: this.shadowRoot.getElementById("phantomScroller"),
                        start: "top center", 
                        end: "bottom 200px",  
                        scrub: true,          
                        // markers: true  
                    }
                });
                this.shadowRoot.getElementById("playSymbol").addEventListener("click", () => {
                    this.playToggleSonic();
                });
                this.shadowRoot.getElementById("restartSonic").addEventListener("click", () => {   
                    this.restartSonic();
                });
                this.shadowRoot.getElementById("pCat").innerHTML = "SONIC:";
                break;
            default:
                this.shadowRoot.getElementById("pCat").innerHTML = "NOTE:";
        }
    }

    connectedCallback() {
        this.render();
        // this.ccpaCta();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 50;
                    scale: 2;
                    opacity: 0;
                }
                
                // :host([active]) {
                //     display: block;
                //     position: relative;
                //     width: 100%;
                //     height: 100%;
                //     overflow: hidden;
                // }

                /* width */
                ::-webkit-scrollbar {
                    width: 0px;
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

                #main {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    background-color: rgba(0, 0, 0, 0.9);
                    font-family: "BS-R";
                }

                #header {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 12%;
                    width: 100%;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    letter-spacing: 1px;
                    opacity: 0;
                    user-select: none;
                    pointer-events: none;  
                    background-image: linear-gradient(180deg, black, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));  
                }

                #pTitle {
                    color: var(--accent);
                    text-align: center;
                }

                #footer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 20%;
                    width: 100%;
                    color: var(--accent);
                    z-index: 1;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 15% 85%;
                    justify-items: center;
                    align-items: center;
                    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), black);  
                }

                #pdNum {   
                    width: 100%;
                    height: 100%;
                    color: var(--accent);
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    letter-spacing: 2px;
                }

                #ccpaButttons {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-items: center;
                    align-items: center;
                }

                #exitButCont {
                    // visibility: hidden;
                    width: 100%;
                    height: 100%;
                    display grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    justify-self: center;
                }

                .button {
                    border: 1px solid var(--accent);
                    border-radius: 10px;
                    width: 120px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    justify-self: center;
                    align-items: center;
                    letter-spacing: 1px;
                }   

                .exit {
                    border: 1px solid var(--primary);
                    color: var(--primary);
                    display: none;
                }

                #doubleAction {
                    display: none;
                }

                #mainCont {
                    position: absolute;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    overflow: hidden; 
                }

                #scrollIntro {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    user-select: none;
                    pointer-events: none;
                    z-index: 1;
                    opacity: 0;
                    user-select: none;
                    pointer-events: none;
                }

                #ccapBanner {
                   transform: scale(.5);
                }

                #ccapBanner {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 8% 84% 8%;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                }

                #banner1 {
                    width: auto;
                    height: auto;
                    justify-self: end;
                    overflow: hidden;
                }

                #banner2 {
                    width: auto;
                    height: auto;
                    justify-self: start;
                    overflow: hidden;
                }
                    
                #periumIntro {
                    width: 100%;
                    height: 30%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    letter-spacing: 1px;
                    text-align: center;
                }

                #scrollIcons {
                    width: 100%;
                    height: 50%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 40% 60%;
                    align-self: start;
                    justify-content: srart;
                    align-items: start;
                    overflow: hidden;
                }

                #scrollIcon1 {
                    width: 50px;
                    height: 50px;
                    justify-self: center;
                    align-self: start;
                    animation: blinkingAndMoving 1.5s infinite;
                }

                 #scrollIcon2 {
                    width: 30px;
                    height: 30px;
                    justify-self: center;
                    align-self: start;
                    opacity: 30%;
                    animation: blinkingAndMoving2 1.5s infinite;
                }

                .blankDiv {
                    width: 100%;
                    height: 100%;
                }

                #introScreen {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    user-select: none;
                    pointer-events: none;
                }

                #ccpaCont {
                    min-height: 300px;
                    min-width: 300px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid var(--primary);
                    border-radius: 175px;
                    padding: 20px;
                    font-family: "BS-R";
                    letter-spacing: 1px;
                }

                #ccpaAvatar {
                    width: 18%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    margin: 20px;
                    position: absolute;
                    z-index: 1;
                }

                #ccpaAvatar img {
                    width: 100%;
                    height: auto;
                }

                #avatar1 {
                    margin-bottom: 20px;
                }

                #avatar2 {
                    margin-top: 20px;
                    transform: rotate(180deg);
                }

                #loadGlobes {
                    width: 125%;
                    position: absolute;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    z-index: 0;
                    opacity: 0;
                    pointer-events: none;
                    user-select: none;
                }

                .globeG1 {
                    width: 120px;
                    height: auto;
                    margin: 10px;
                }

                #blg1 {
                    justify-self: start;
                }

                #blg2 {
                    justify-self: end;
                }

                #phantomScroller {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow-y: scroll;
                    z-index: 0;
                    pointer-events: none;
                }

                #periumPages {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    z-index: 0;
                    pointer-events: none;
                    user-select: none;
                }

                .page {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    font-size: 20px;
                    opacity: 0;
                    pointer-events: none;
                    user-select: none;
                }

                .ccpaNote {
                     width: 80%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    font-size: 20px;
                    opacity: 0;
                    pointer-events: none;
                    user-select: none;
                    padding-left: 10%;
                    padding-right: 10%;
                    font-size: 1.1em;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    line-height: 1.5em;
                }

                #notePlayerToggle {
                    width: 100%;
                    position: absolute;
                    top: 12%;
                    left: 0%;
                    color: var(--accent);
                    letter-spacing: 1px;
                    opacity: 0;
                    text-align: center;
                }

                .ccpaSonic {
                    width: 80%;
                    height: 100%;
                    padding-left: 10%;
                    padding-right: 10%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                }

                #audioInner {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 10% 50% 20% 20%;
                    justify-content: center;
                    align-items: center;
                }

                #albumCover {
                    position: relative;
                }

                #ac1 {
                    z-index: 2;
                    position: absolute;
                }

                #ac2 {
                    z-index: 1;
                    transform: scale(1.3) scaleX(2) rotate(1deg);
                    filter: blur(30px);
                    opacity: 50%;
                }

                #sonic {
                    align-self: start;
                    z-index: 10;
                }

                #metaData {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-content: start;
                    align-items: center;
                    font-family: "BS-R";
                    text-align: center;
                }

                #customControls {
                    width: 100%;
                    height: 50%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    margin-top: 40px;
                }

                #walletModal {
                    display: none;
                }

                #periumGallery {
                    display: none;
                }

                .audioButtons {
                    pointer-events: auto;
                }

                #sb1 {
                    background-color: lightcoral;
                }
                
                #sb2 {
                    background-color: yellow;
                }
            
                #sb3 {
                    background-color: green;
                }
                
                #sb4 {
                    background-color: orange;
                }
                
                #sb5 {
                    background-color: lightblue;
                }

                .scrollBox {
                    width: auto;
                    height: 500px;
                    opacity: 0%;
                }

                .ccpaVideo {
                    scale: 1.3;
                }

                 #cta {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                    opacity: 0;
                    pointer-events: none;
                    user-select: none;
                }

                #mcBeaconInput {
                    width: 100%;
                    height: 50%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-items: center;
                    align-items: center;
                }

                .mbRow {
                    width: 60%;
                    display: grid;
                    grid-template-columns: 30% 70%;
                    grid-template-rows: 1fr;
                    justify-content: center;
                    align-items: center;
                    align-self: end;
                }

                #emailInput2 {
                    width: 100%;
                    background: transparent;
                    border: none;
                    border-bottom: .5px solid var(--primary);
                    color: var(--primary);
                    text-transform: uppercase;
                }

                #emailInput2:focus {
                    outline: none;
                }

                #sendBeacon {
                    width: 100%;
                    height: 65%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                }

                #sendBeaconBut {
                    display: none;
                }

                #ctaSendButton {
                    width: 50px;
                    align-self: start;
                    opacity: 60%;
                }

                #paNum {
                    text-transform: uppercase;
                }

                #singleAction {
                    animation: blinkingAndMoving 1.5s infinite;
                    border: 1px solid var(--primary);
                    color: var(--primary);
                }

                #paNum2 {
                    text-transform: uppercase;
                }

                @keyframes blinkingAndMoving {
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

                @keyframes blinkingAndMoving2 {
                    0% {
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }

                @keyframes rotateAlbum {
                    0% {
                        transform: scale(1.3) scaleX(2) rotate(0deg);
                    }
                    100% {
                        transform: scale(1.3) scaleX(2) rotate(360deg);
                    }
                }
            </style>
            <div id="main">
                <div id="header">
                    <div id="pLabels">
                        <div id="pHostLabel">
                            <span>PERIUM HOST:</span><span id="pHost">UNKNOWN</span>
                        </div>
                        <div id="pTitle">
                            <span id="pCat">NOTE:</span><span id="pTitle2">BIRTH OF A LEADER</span>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div id="pdNum">
                        <span>PA:</span><span id="paNum">${this.loadedPerium.nfc}</span>
                    </div>
                    <div id="ccpaButttons">
                        <div id="actionButCont">
                            <div id="singleAction" class="button">LOADING..</div>
                            <div id="doubleAction">
                                <div id="listBut" class="smButton"></div>
                                <div id="gridBut" class="smButton"></div>
                            </div>
                        </div>
                        <div id="exitButCont">
                            <div id="exitBut" class="button exit">EXIT</div>
                        </div>
                    </div>
                </div>
                <div id="mainCont">
                    <div id="phantomScroller">
                        <div id="sb1" class="scrollBox"></div>
                        <div id="sb2" class="scrollBox"></div>
                        <div id="sb3" class="scrollBox"></div>
                        <div id="sb4" class="scrollBox"></div>
                        <div id="sb5" class="scrollBox"></div>
                    </div>
                    <div id="cta">
                        <form id="mcBeaconInput">
                            <div class="mbRow">
                                <span id="emailSubmit2">E-MAIL:</span>
                                <input type="email" id="emailInput2">
                            </div>
                            <div id="sendBeacon">
                                <input id="sendBeaconBut" type="submit" value="SEND BEACON">
                                <img id="ctaSendButton" src="${sendBut}"/>
                            </div>
                        </form>  
                    </div>
                    <div id="walletModal"></div>
                    <div id="periumGallery"></div>
                    <div id="periumPages">
                    </div>
                    <div id="introScreen"> 
                        <div id="ccpaCont">
                            <div id="ccpaAvatar">
                                <img id="avatar1" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-base1.png"/>
                                <img id="avatar2" src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/avatar/avatar-base1.png"/>
                            </div>
                            <div id="loadGlobes">
                                <img id="blg1" class="globeG1" src="${globes}"/>
                                <img id="blg2" class="globeG1" src="${globes}"/>
                            </div>
                            <div id="ccpaCircle">CITY CENTRAL PERIUM ARCHIVE</div>
                        </div> 
                    </div>
                    <div id="scrollIntro">
                        <div class="blankDiv"></div>
                        <div id="ccapBanner">
                            <img id="banner1" src="${banner}"/>
                            <div id="periumIntro">
                                <div style="color:var(--secondary)">
                                    <span>PA:</span>
                                    <span id="pIntroNum">${this.loadedPerium.nfc}</span>
                                </div>
                                <div>
                                    <span id="paNum2">[NOTE]</span>
                                    <span>PERIUM FOUND</span>
                                </div>
                                <div style="color:var(--accent)">SCROLL UP TO VIEW</div>
                            </div>
                            <img id="banner2" src="${banner}"/>
                        </div>
                        <div id="scrollIcons">
                            <img id="scrollIcon1" src="${arrowAccent}"/>
                            <img id="scrollIcon2" src="${arrowAccent}"/>
                        </div>
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => {
            gsap.to(this.shadowRoot.host, {duration: .5, scale: 1, opacity: 1, ease: "power2.inOut"});
        }, 1000);
    }
}

customElements.define('scoge-ccpa', compCCPA);

export {compCCPA};