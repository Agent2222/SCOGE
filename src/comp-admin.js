class compAdmin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.icpActor = null;
        this.periumArchive = null;
        this.selectedPerium = "";
        this.windowOpen = false;
        this.tempPerium = null;
        window.blobBlock = false;
        this.pred2 = null;
        this.pred1 = null;
        this.d1Chunks = null;
        this.d2Chunks = null;
        this.Perium = {
            nfc: "",
            dep: false,
            tag: "",
            cat: "[note]",
            title: "",
            d1: [],
            d2: [],
            d3: "",
            desc: "",
            views: null,
            lastV: ""
        }
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
            // this.render();
            if (newValue === "true") {
                this.openAdmin();
            }
        }
    }

    openAdmin() {
        var selected = this.shadowRoot.getElementById("main");
        selected.style.transition = ".3s ease-in-out";
        selected.style.transformOrigin = "center";
        selected.style.transform = "scaleX(1)";
        selected.style.opacity = "100%";
        selected.style.pointerEvents = "auto";  
        this.getArchive();
    }

    addRow(perium) {
        var currentPerium = perium;

        var row = document.createElement('div');
        var ccpaLength = this.shadowRoot.querySelector('#Body').children.length + 1;
        row.setAttribute('class', 'row');

        if (currentPerium === undefined) {
            row.innerHTML = `
            <div>${ccpaLength}.</div>
            <input id="periumNfc${ccpaLength}" value=""></input>
            <select id="periumDep${ccpaLength}" value="NO">
                <option>YES</option>
                <option selected>NO</option>
            </select>
            <input id="periumTag${ccpaLength}" value=""></input>
            <select id="periumCat${ccpaLength}">
                <option>note</option>
                <option>image</option>
                <option>video</option>
                <option>sonic</option>
            </select>
            <input id="periumTitle${ccpaLength}" value=""></input>
            <input type="file" id="fileInput1-${ccpaLength}" accept="text/plain, video/*, audio/*, image/*"/>
            <input type="file" id="fileInput2-${ccpaLength}" accept="text/plain, video/*, audio/*, image/*"/>
            <input id="periumD3${ccpaLength}" value=""></input>
            <input id="periumDesc${ccpaLength}" value=""></input>
            <div>-</div>
            <div>-</div>
            <div class="actionBut" id="viewBut${ccpaLength}">
                <img src="/assets/images/assets1/svg/view.svg">
            </div>
            <div class="actionBut" id="saveBut${ccpaLength}">
                <img src="/assets/images/assets1/svg/save.svg">
            </div>
            `;

            // add event listenners to file inputs to get file data. Make is capture blob data
            row.querySelector(`#fileInput1-${ccpaLength}`).addEventListener('change', async (e) => {
                console.log("Input 1 Changed", this.Perium);

                let fileInput1 = this.shadowRoot.getElementById(`fileInput1-${ccpaLength}`).files;

                this.pred1 = fileInput1[0];

                const arrayBuffer = await this.pred1.arrayBuffer(); // Read file as ArrayBuffer
                const blob = new Uint8Array(arrayBuffer); // Convert to Uint8Array

                // this.Perium.d1 = blob;
                this.d1Chunks = blob;
            });

            row.querySelector(`#fileInput2-${ccpaLength}`).addEventListener('change', async (e) => {
                console.log("Input 2 Changed", this.Perium);

                let fileInput2 = this.shadowRoot.getElementById(`fileInput2-${ccpaLength}`).files;
                
                this.pred2 = fileInput2[0];

                const arrayBuffer = await this.pred2.arrayBuffer(); // Read file as ArrayBuffer
                const blob = new Uint8Array(arrayBuffer); // Convert to Uint8Array

                // this.Perium.d2 = blob;
                this.d2Chunks = blob;
            });

            this.shadowRoot.querySelector('#Body').appendChild(row);

            this.shadowRoot.getElementById(`saveBut${ccpaLength}`).addEventListener('click', (e) => {
                var id = ccpaLength;
                this.savePerium(id);
            });

            this.shadowRoot.getElementById(`viewBut${ccpaLength}`).addEventListener('click', (e) => {
                var id = ccpaLength;
                console.log("Viewing Perium", this.Perium);
                this.viewPerium(id, undefined);
            });
            return;
        } else {
            row.innerHTML = `
            <div class="live">${ccpaLength}.</div>
            <input id="periumNfc${ccpaLength}" value="${perium.nfc}"></input>
            <select id="periumDep${ccpaLength}" value="NO">
                <option>YES</option>
                <option selected>NO</option>
            </select>
            <input id="periumTag${ccpaLength}" value="${perium.tag}"></input>
            <select id="periumCat${ccpaLength}" value="${perium.cat}">
                <option>note</option>
                <option>image</option>
                <option>video</option>
                <option>sonic</option>
            </select>
            <input id="periumTitle${ccpaLength}" value="${perium.title}"></input>
            <input id="fileInput1-${ccpaLength}"/>
            <input id="fileInput2-${ccpaLength}"/>
            <input id="periumD3${ccpaLength}" value="${perium.d3}"></input>
            <input id="periumDesc${ccpaLength}" value="${perium.desc}"></input>
            <div>${perium.views}</div>
            <div>${perium.lastV}</div>
            <div class="actionBut" id="viewBut${ccpaLength}">
                <img src="/assets/images/assets1/svg/view.svg">
            </div>
            <div class="actionBut" id="saveBut${ccpaLength}">
                <img src="/assets/images/assets1/svg/save.svg">
            </div>
            `;
            this.shadowRoot.querySelector('#Body').appendChild(row);

            switch (perium.cat) {
                case "note":
                    this.shadowRoot.getElementById(`periumCat${ccpaLength}`).selectedIndex = 0;
                    break;
                case "image":
                    this.shadowRoot.getElementById(`periumCat${ccpaLength}`).selectedIndex = 1;
                    break;
                case "video":
                    this.shadowRoot.getElementById(`periumCat${ccpaLength}`).selectedIndex = 2;
                    break;
                case "sonic":
                    this.shadowRoot.getElementById(`periumCat${ccpaLength}`).selectedIndex = 3;
                    break;
            }

            switch (perium.dep) {
                case true:
                    this.shadowRoot.getElementById(`periumDep${ccpaLength}`).selectedIndex = 0;
                    break;
                case false:
                    this.shadowRoot.getElementById(`periumDep${ccpaLength}`).selectedIndex = 1;
                    break;
            }

            this.shadowRoot.getElementById(`saveBut${ccpaLength}`).addEventListener('click', (e) => {
                this.savePerium(perium.nfc);
            });

            this.shadowRoot.getElementById(`viewBut${ccpaLength}`).addEventListener('click', (e) => {
                console.log("Viewing Perium", this.Perium);
                this.viewPerium(ccpaLength, perium.nfc);
            });
        }
        
    }

    async uploadChunks(nfc, field, blob, chunkSize = 1_800_000) {
        const totalChunks = Math.ceil(blob.length / chunkSize);
    
        for (let i = 0; i < totalChunks; i++) {
            const chunk = blob.slice(i * chunkSize, (i + 1) * chunkSize);
    
            try {
                // ✅ Convert Uint8Array to standard JavaScript array
                const chunkArray = Array.from(chunk);
    
                // ✅ Wrap in an option (`?vec nat8`) by using `[chunkArray]`
                await this.icpActor.saveBlob(nfc, field, [chunkArray]); // Send as `opt vec nat8`
    
                console.log(`Uploaded chunk ${i + 1}/${totalChunks} for ${field}`);
            } catch (err) {
                console.error(`Error uploading chunk ${i + 1}:`, err);
                return;
            }
        }
    
        console.log(`${field} upload complete!`);
    }
    
    

    async recomposeChunks(chunks) {
        return new Uint8Array(chunks.flat());
    }

    savePerium(id) {
        // stage perium data 
        this.Perium.nfc = this.shadowRoot.getElementById(`periumNfc${id}`).value;
        var dep = this.shadowRoot.getElementById(`periumDep${id}`).value;

        if (dep === "YES") {
            this.Perium.dep = true;
        } else {
            this.Perium.dep = false;
        }

        this.Perium.tag = this.shadowRoot.getElementById(`periumTag${id}`).value;
        this.Perium.cat = this.shadowRoot.getElementById(`periumCat${id}`).value;
        this.Perium.title = this.shadowRoot.getElementById(`periumTitle${id}`).value;
        this.Perium.d3 = this.shadowRoot.getElementById(`periumD3${id}`).value;
        this.Perium.desc = this.shadowRoot.getElementById(`periumDesc${id}`).value;
        this.Perium.views = 0;
        this.Perium.lastV = "-";

        this.selectedPerium = this.Perium.nfc;

        // Get object from this.periumArchive that has nfc that matches the selected perium
        var tempPerium = this.periumArchive?.find((id) => {
            return id.nfc === this.selectedPerium;
        });

        if (tempPerium != undefined) {
            console.log("no perium found");
            this.Perium.views = tempPerium.views;
        }

        var date = new Date();
        var ConvertedDate = date.toISOString();
        this.Perium.lastV = ConvertedDate;

        var preSave = document.createElement('div');
        preSave.setAttribute('class', 'preSave');
        preSave.innerHTML = `
            <div id="saveText">Are you sure you want to save this perium?</div>
            <div id="savePeriumButtons">
                <div id="confirmSave">YES</div>
                <div id="cancelSave">NO</div>
            </div>
        `;
        preSave.querySelector('#confirmSave').addEventListener('click', () => {
            console.log("Saving Perium", this.Perium);
            this.confirmSave();
        });
        preSave.querySelector('#cancelSave').addEventListener('click', () => {
            preSave.remove();
        });
        this.shadowRoot.getElementById('main').appendChild(preSave);
    }

    async confirmSave() {
        this.shadowRoot.querySelector('#saveText').innerHTML = "Saving Perium...";
        this.shadowRoot.querySelector('#saveText').style.animation = "loadBlink 1s ease-in-out infinite";

        const custCheck = await this.icpActor.addOrUpdateCCPA(this.Perium.nfc, this.Perium).then((result) => {

            switch (this.Perium.cat) {
                case "video":
                    this.uploadChunks(this.Perium.nfc, "d1", this.d1Chunks).then(() => {
                        this.shadowRoot.querySelector('#saveText').innerHTML = "Perium Saved!";
                        this.shadowRoot.querySelector('#saveText').style.animation = "none";
                        this.shadowRoot.querySelector('#cancelSave').remove();
                        this.shadowRoot.querySelector('#confirmSave').innerHTML = "CLOSE";
                        this.shadowRoot.querySelector('#savePeriumButtons').style.gridTemplateColumns = "100%";
                        this.shadowRoot.getElementById("Body").innerHTML = "";
                        this.getArchive();
                    });
                    break;
                case "sonic":
                    this.uploadChunks(this.Perium.nfc, "d1", this.d1Chunks).then(() => {
                        console.log("Uploaded Image Chunks");
                        this.uploadChunks(this.Perium.nfc, "d2", this.d2Chunks).then(() => {
                            console.log("Uploaded Sonic Chunks");
                            this.shadowRoot.querySelector('#saveText').innerHTML = "Perium Saved!";
                            this.shadowRoot.querySelector('#saveText').style.animation = "none";
                            this.shadowRoot.querySelector('#cancelSave').remove();
                            this.shadowRoot.querySelector('#confirmSave').innerHTML = "CLOSE";
                            this.shadowRoot.querySelector('#savePeriumButtons').style.gridTemplateColumns = "100%";
                            this.shadowRoot.getElementById("Body").innerHTML = "";
                            this.getArchive();
                        });
                    });
                    break;
                case "image":  
                    this.uploadChunks(this.Perium.nfc, "d1", this.d1Chunks).then(() => {
                        this.shadowRoot.querySelector('#saveText').innerHTML = "Perium Saved!";
                        this.shadowRoot.querySelector('#saveText').style.animation = "none";
                        this.shadowRoot.querySelector('#cancelSave').remove();
                        this.shadowRoot.querySelector('#confirmSave').innerHTML = "CLOSE";
                        this.shadowRoot.querySelector('#savePeriumButtons').style.gridTemplateColumns = "100%";
                        this.shadowRoot.getElementById("Body").innerHTML = "";
                        this.getArchive();
                    });
                    break;
            } 
            return result;
          }).catch((error) => {
            console.error("Error saving perium", error);
            this.shadowRoot.querySelector('#saveText').innerHTML = "Perium Save Error! Check data and try again.";
            this.shadowRoot.querySelector('#saveText').style.animation = "none";
            this.shadowRoot.querySelector('#confirmSave').remove();
            this.shadowRoot.querySelector('#cancelSave').innerHTML = "CLOSE";
            this.shadowRoot.querySelector('#savePeriumButtons').style.gridTemplateColumns = "100%";
        });
    }

    async getArchive() {
        //
        const custCheck = await this.icpActor.getCCPA().then((result) => {
            this.periumArchive = result;
            return result;
          }).catch((error) => {
            console.error("Error checking permission:", error);
        });

        this.periumArchive.forEach((perium) => {
            this.addRow(perium);
        });
    }

    findPerium() {
        //
    }

    filterPeriums() {
        //
    }

    async getPeriumChunks(nfc, field, chunkSize = 1_800_000) {
        let allChunks = [];
        let startIndex = 0;
      
        while (true) {
          // Fetch chunks from the backend
          const chunks = await this.icpActor.getBlobChunks(nfc, field, chunkSize, startIndex);
      
          if (!chunks || chunks.length === 0) {
            // Stop fetching if no more chunks are returned
            break;
          }

          progress = Math.round((startIndex / this.loadedPerium.d1.length) * 100);
          console.log("Progress: ", progress);    
      
          // Add the fetched chunks to the array
          allChunks.push(...chunks);
          startIndex += chunks.length; // Increment the start index
        }
      
        // Recompose all chunks into a single Uint8Array
        return new Uint8Array(allChunks.flat());
    };

    async viewPerium(id, nfc) {
        var previewBody = document.createElement('div');
        var closeBut = document.createElement('div');

        // stage perium data 
        this.Perium.nfc = this.shadowRoot.getElementById(`periumNfc${id}`).value;
        this.Perium.dep = this.shadowRoot.getElementById(`periumDep${id}`).value;
        this.Perium.tag = this.shadowRoot.getElementById(`periumTag${id}`).value;
        this.Perium.cat = this.shadowRoot.getElementById(`periumCat${id}`).value;
        this.Perium.title = this.shadowRoot.getElementById(`periumTitle${id}`).value;
        this.Perium.d3 = this.shadowRoot.getElementById(`periumD3${id}`).value;
        this.Perium.desc = this.shadowRoot.getElementById(`periumDesc${id}`).value;

        this.selectedPerium = this.Perium.nfc;

        // Get object from this.periumArchive that has nfc that matches the selected perium
        this.tempPerium = this.periumArchive.find(async (id) => {
            return await id === this.selectedPerium;
        });

        if (this.tempPerium != undefined) {
            this.Perium.views = this.tempPerium.views;
            this.Perium.lastV = this.tempPerium.lastViewed;
            window.blobBlock = true;
            this.pred1 = this.tempPerium.d1;
            this.pred2 = this.tempPerium.d2;



            switch (this.Perium.cat) {
                case "image":
                    this.getPeriumChunks(this.tempPerium.nfc, "d1").then((result) => {
                        this.Perium.d1 = result;
                        this.tempPerium.d1 = result;
                        console.log("result", result);
                    });
                    break;
                case "video":
                    this.getPeriumChunks(this.tempPerium.nfc, "d1").then((result) => {
                        this.Perium.d1 = result;
                        this.tempPerium.d1 = result;
                    });
                    break;
                case "sonic":
                    this.getPeriumChunks(this.tempPerium.nfc, "d1").then((result) => {
                        this.Perium.d1 = result;
                        this.tempPerium.d1 = result;
                        console.log("result", result);
                    });
                    this.getPeriumChunks(this.tempPerium.nfc, "d2").then((result) => {
                        this.Perium.d2 = result;
                        this.tempPerium.d2 = result;
                        console.log("result", result);
                    });
                    break;
                default:
                    this.Perium.d1 = this.tempPerium.d1;
                    this.Perium.d2 = this.tempPerium.d2;
                    break;
            }

            // switch (this.Perium.cat) {
            //     case "video":
            //         this.recomposeChunks(this.tempPerium.d1).then((result) => {
            //             this.Perium.d1 = result;
            //         });
            //         break;
            //     case "sonic":
            //         this.recomposeChunks(this.tempPerium.d1).then((result) => {
            //             this.Perium.d1 = result;
            //         });
            //         this.recomposeChunks(this.tempPerium.d2).then((result) => {
            //             this.Perium.d2 = result;
            //         });
            //         break;
            //     default:
            //         this.Perium.d1 = this.tempPerium.d1;
            //         this.Perium.d2 = this.tempPerium.d2;
            //         break;
            // }

            // this.recomposeChunks(this.tempPerium.d1).then((result) => {
            //     this.Perium.d1 = result;
            // });

            // this.recomposeChunks(this.tempPerium.d2).then((result) => {
            //     this.Perium.d2 = result;
            // });

            // // this.Perium.d1 = this.tempPerium.d1;
            // // this.Perium.d2 = this.tempPerium.d2;
        }

        closeBut.innerHTML = "X";
        previewBody.setAttribute('class', 'ccpaPreviewBody');
        closeBut.id = 'ccpaPreviewClose';

        var previewInnerBody = document.createElement('div');
        previewInnerBody.setAttribute('class', 'ccpaPreviewInnerBody');
        previewInnerBody.innerHTML = `
            <scoge-ccpa active="true" data-perium="false" data-tempPerium="false" id="ccpa"></scoge-ccpa>
        `;
        previewBody.appendChild(previewInnerBody);
        previewBody.appendChild(closeBut);
        this.shadowRoot.getElementById('main').appendChild(previewBody);
        closeBut.addEventListener('click', () => {
            this.Perium.d1 = this.pred1;
            this.Perium.d2 = this.pred2;
            this.shadowRoot.getElementById('ccpa').loadedPerium.d1 = this.pred1;
            this.shadowRoot.getElementById('ccpa').loadedPerium.d2 = this.pred2;
            if (this.shadowRoot.getElementById("ccpa").currentSonic != null) {
                this.shadowRoot.getElementById("ccpa").currentSonic.pause();
                this.shadowRoot.getElementById("ccpa").currentSonic = null;
                this.shadowRoot.getElementById("ccpa").sonicPlaying = false;
            }
            previewBody.remove();
        });

        this.shadowRoot.getElementById('ccpa').loadedPerium = this.Perium;

        if (this.tempPerium != undefined) {
            this.shadowRoot.getElementById('ccpa').setAttribute('data-perium', 'trueAdmin');
            this.shadowRoot.getElementById('ccpa').setAttribute('data-tempperium', 'true');
            console.log("Temp Perium", this.tempPerium);
            this.shadowRoot.getElementById('ccpa').loadedPerium = this.tempPerium;
            return;
        } else {
            this.shadowRoot.getElementById('ccpa').setAttribute('data-perium', 'trueAdmin');
        }
    }

    uploadData(event) {
        const file  = event.target.files[0];
        console.log(file);
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('#addPerium').addEventListener('click', () => {
            this.addRow();
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: grid;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 1000;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    pointer-events: none;
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
                    width: 1px;
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
                    height: 90%;
                    width: 95%;
                    border: 1px solid var(--primary);
                    border-radius: 10px;
                    position: relative;
                    overflow: hidden;
                    background-color: rgba(0, 0, 0, 0.95);
                    pointer-events: none;
                    transform-origin: center;
                    transform: scaleX(0);
                    opacity: 0;
                }

                #header {
                    height: 5.6%;
                    width: 100%;
                    border-bottom: 1px solid var(--primary);
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 5% 6% 78% 6% 5%;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    color: var(--primary);
                    user-select: none;
                }

                #keyHead {
                    height: 5%;
                    width: 100%;
                    border-bottom: .05px solid var(--faintPrimary);
                }

                #addPerium {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    cursor: pointer;
                }

                #downloadData, #database {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    cursor: pointer;
                }

                #adminOptions {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 50% 50%;
                    justify-items: center;
                    align-items: center;
                }

                #database {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: end;
                    width: 95%;
                    padding-right: 5%;
                }

                #ccpaBut {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: start;
                    width: 95%;
                    padding-left: 5%;
                }

                #keyHead {
                    display: grid;
                    grid-template-columns: 5% 10% 5% 5% 5% 10% 7.5% 7.5% 7.5% 12.5% 5% 10% 5% 5%;
                    justify-items: center;
                    align-items: center;
                    color: var(--primary);
                    font-size: 1rem;
                    font-family: "BS-R";
                }

                .row {
                    display: grid;
                    grid-template-columns: 5% 10% 5% 5% 5% 10% 7.5% 7.5% 7.5% 12.5% 5% 10% 5% 5%;
                    justify-items: center;
                    align-items: center;
                    font-size: 1rem;
                    font-family: "BS-R";
                    color: var(--primary);
                    border-bottom: 1px solid var(--faintPrimary);
                }

                .row:hover {
                    color: var(--accent);
                }

                #keyHead div {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    border-right: 1px solid var(--faintPrimary);
                }

                #Body {
                    height: 89.4%;
                    width: 100%;
                    overflow-y: auto;
                    overflow-x: hidden;
                }

                input, select {
                    height: 100%;
                    width: 100%;
                    background-color: transparent;
                    border: none;
                    color: var(--primary);
                    font-size: 1rem;
                    font-family: "BS-R";
                    text-align: center;
                }

                input:focus, select:focus {
                    outline: 1px solid var(--accent);   
                }

                .row:hover input, .row:hover select {
                    color: var(--accent);
                }

                svg:hover path, svg:hover rect {
                    fill: var(--accent);
                }

                #ccpaBut img {
                    filter: invert(1) saturate(0.6) ;
                }

                .actionBut:hover img {
                    filter: invert(1) saturate(0.6) ;
                }

                .preSave {
                    width: 500px;
                    height: 25%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 70% 30%;
                    justify-items: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.95);
                    border: 1px solid var(--primary);
                    border-radius: 10px;
                    font-family: "BS-R";
                }

                #savePeriumButtons {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    border-top: 1px solid var(--primary);
                }

                #confirmSave {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    cursor: pointer;
                    color: var(--accent);
                    border-right: 1px solid var(--primary);
                    overflow: hidden;
                    transition: .3s ease-in-out;
                }

                #confirmSave:hover {
                    background-color: var(--accent);
                    color: black;
                }

                #cancelSave {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    cursor: pointer;
                    overflow: hidden;
                    transition: .3s ease-in-out;
                }

                #cancelSave:hover {
                    background-color: var(--primary);
                    color: black;
                }

                .ccpaPreviewBody {
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    justify-items: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.9);
                    z-index: 10;
                    font-family: "BS-R";
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .ccpaPreviewInnerBody {
                    width: 25%;
                    height: 90%;
                    background-color: rgba(0, 0, 0, 0.9);
                    z-index: 20;
                    font-family: "BS-R";
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: grid;
                    grid-template-columns: 1fr ;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    text-align: center;
                }

                #ccpaPreviewClose {
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    top: 45%;
                    right: 30%;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    color: var(--primary);
                    font-size: 1rem;
                    cursor: pointer;
                    border: 1px solid var(--primary);
                    border-radius: 50%;
                    transition: .5s ease-in-out;
                }

                #ccpaPreviewClose:hover {
                    background-color: var(--primary);
                    color: black;
                    font-size: 1.5rem;
                    rotate: 360deg;
                }

                @keyframes loadBlink {
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

            </style>
            <div id="main" data-domType="shadow">
                <comp-close-btn></comp-close-btn>
                <div id="header">
                    <div id="addPerium">    
                        <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="100%" viewBox="0 0 612 612" version="1.1">
                            <path d="M 268.667 65.667 C 268.300 66.033, 268 112.158, 268 168.167 L 268 270 171.500 270 L 75 270 75 306 L 75 342 171.500 342 L 268 342 268 444.500 L 268 547 304.995 547 L 341.991 547 342.245 444.750 L 342.500 342.500 439.250 342.245 L 536 341.990 536 306 L 536 270.010 439.250 269.755 L 342.500 269.500 342.245 167.250 L 341.991 65 305.662 65 C 285.681 65, 269.033 65.300, 268.667 65.667" stroke="none" fill="#ff002d" fill-rule="evenodd"/>
                        </svg>
                    </div>
                    <div id="downloadData">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="100%" viewBox="0 0 612 612" version="1.1">
                        <path d="M 296.286 61.386 C 284.649 65.202, 276.187 73.888, 272.883 85.408 C 272.406 87.072, 272.005 142.318, 271.992 208.176 C 271.979 274.034, 271.702 328.612, 271.377 329.459 C 271.052 330.307, 270.372 331, 269.866 331 C 269.360 331, 248.438 310.481, 223.374 285.401 C 171.645 233.641, 172.611 234.400, 159.433 235.231 C 147.431 235.987, 139.387 241.611, 134.216 252.861 C 132.115 257.431, 131.820 259.277, 132.218 265.361 C 132.521 270.008, 133.473 274.071, 134.944 277 C 138.166 283.418, 286.277 431.723, 293.416 435.682 C 300.196 439.440, 311.059 439.623, 318 436.094 C 321.161 434.487, 345.171 411.167, 398.699 357.714 C 484.658 271.874, 480.575 276.657, 479.826 262.643 C 478.988 246.986, 468.557 236.321, 453.035 235.252 C 448.018 234.906, 445.222 235.286, 441 236.888 C 435.994 238.787, 431.416 243.059, 390 284.483 C 364.761 309.726, 343.721 329.993, 342.750 329.995 C 341.443 329.999, 340.998 329.177, 340.992 326.750 C 340.987 324.962, 340.974 272.650, 340.963 210.500 C 340.952 148.350, 340.551 94.472, 340.071 90.771 C 337.801 73.251, 325.285 61.451, 307.894 60.436 C 303.178 60.160, 298.974 60.504, 296.286 61.386 M 65.355 431.011 C 59.250 432.261, 51.752 436.380, 48.187 440.440 C 42.459 446.964, 41.784 451.714, 42.238 482.292 C 42.585 505.684, 42.902 510.201, 44.500 514.500 C 52.039 534.793, 67.891 547.054, 93 552.015 C 96.885 552.783, 160.181 553.008, 308.500 552.784 C 501.880 552.492, 519.039 552.332, 525.315 550.772 C 545.516 545.749, 560.739 532.624, 567.550 514.358 C 569.094 510.215, 569.420 505.416, 569.763 481.756 C 570.114 457.506, 569.949 453.361, 568.449 448.846 C 566.543 443.107, 560.423 436.238, 554.889 433.627 C 542.309 427.691, 526.814 430.614, 518.070 440.573 C 513.324 445.978, 512.741 448.164, 511.958 463.500 C 511.501 472.458, 510.691 478.760, 509.708 481 C 506.724 487.806, 501.274 493.718, 495.267 496.668 L 489.500 499.500 306 499.500 L 122.500 499.500 117.873 497.220 C 111.451 494.056, 106.182 488.631, 103.155 482.067 C 100.942 477.268, 100.508 474.638, 100.009 463 C 99.347 447.598, 98.222 444.240, 91.770 438.411 C 84.645 431.974, 74.511 429.135, 65.355 431.011" stroke="none" fill="#ff002d" fill-rule="evenodd"/>
                    </svg>
                    </div>
                    <div id="adminOptions">
                        <div id="database">
                            <img src="/assets/images/assets1/svg/database.svg">
                        </div>
                        <div id="ccpaBut">
                            <img src="/assets/images/assets1/svg/ccpa.svg">
                        </div>
                    </div>
                    <div class="blank"></div>
                    <div class="blank"></div>
                </div>
                <div id="keyHead">
                    <div>#</div>
                    <div>NFC</div>
                    <div>DEP</div>
                    <div>TAG</div>
                    <div>CAT</div>
                    <div>TITLE</div>
                    <div>D1</div>
                    <div>D2</div>
                    <div>D3</div>
                    <div>DESC</div>
                    <div>VIEWS</div>
                    <div>LAST-V</div>
                    <div></div>
                    <div></div>
                </div>
                <div id="Body"></div>
            </div>
        `;
    }

}

customElements.define('scoge-admin', compAdmin);

export {compAdmin};