import { playerCoor, domain } from "../universe.js";
import { idlFactory } from "../../src/declarations/taoscity/taoscity.did.js";
import { Principal } from "@dfinity/principal";
import { Actor, HttpAgent } from "@dfinity/agent";
import BigNumber from "bignumber.js";
import { createActor1 } from "../wallets";
import { IDL } from '@dfinity/candid';
import { dragElement } from "../universe.js";
import { lord } from "../wallets.js";
// import e from "cors";

var canvas = document.getElementById("universe");
var ctx = canvas.getContext("2d");
var mapperFillOpacity = 0.5;
var img = document.createElement("img");
var taosIdl = idlFactory;
var mapping = [];
var loadScope = null;
var regionLock = {
    locked: false,
    region: null,
};
var sectorLock = {
    locked: false,
    sector: null,
}
var terrainLock = {
    locked: false,
    terrain: null,
}
var selectDomain = {
    id : 0,
    x : "0",
    y : "0",
    owner : "null",
    region : "null",
    sector : 0,
    function: "null",
    material : "null",
    visibility : false,
    privacy : false,
    chapter : "null",
    health : 0,
    strength : 0,
    endurance : 0,
    terrain : "null"
}

export const sectorKey = {
    1: {
        id: "Sector 1",
        baseStats: {
            endurance: 2,
            charisma: 1,
            strength: 3,
            visibility: 1,
            health: 0,
            speed: 0,
            sight: 3,
        }
    },
    2: {
        id: "Sector 2",
        baseStats: {
            endurance: 0,
            charisma: 1,
            strength: 2,
            visibility: 1,
            health: 0,
            speed: 0,
            sight: 6,
        }
    },
    3: {
        id: "Sector 3",
        baseStats: {
            endurance: 2,
            charisma: 0,
            strength: 3,
            visibility: 1,
            health: 0,
            speed: 0,
            sight: 4,
        }
    },
    4: {
        id: "Sector 4",
        baseStats: {
            endurance: 0,
            charisma: 3,
            strength: 2,
            visibility: 2,
            health: 0,
            speed: 1,
            sight: 2,
        }
    }
}

export const domainKey = {
    1: {
        region: "LX Industry",
        color: "brown",
        id: "1b1",
        baseStats: {
            endurance: 1,
            charisma: 3,
            strength: 2,
            visibility: 1,
            health: 0,
            speed: 2,
            sight: 1,
        }
    },
    2: {
        region: "West Wing River",
        color: "cadetblue",
        id: "1b2",
        baseStats: {
            endurance: 1,
            charisma: 2,
            strength: 0,
            visibility: 3,
            health: 1,
            speed: 1,
            sight: 2,
        }
    },
    3: {
        region: "Outerlands",
        color: "purple",
        id: "1b3",
        baseStats: {
            endurance: 1,
            charisma: 3,
            strength: 1,
            visibility: 2,
            health: 0,
            speed: 1,
            sight: 2,
        }
    },
    4: {
        region: "The 12th",
        color: "darkolivegreen",
        id: "1b4",
        baseStats: {
            endurance: 0,
            charisma: 2,
            strength: 0,
            visibility: 0,
            health: 0,
            speed: 4,
            sight: 4,
        }
    },
    5: {
        region: "Ports of Alansana",
        color: "yellow",
        id: "1b5",
        baseStats: {
            endurance: 0,
            charisma: 2,
            strength: 0,
            visibility: 3,
            health: 0,
            speed: 3,
            sight: 2,
        }
    },
    6: {
        region: "Falcons Heart",
        color: "blue",
        id: "1b6",
        baseStats: {
            endurance: 0,
            charisma: 4,
            strength: 3,
            visibility: 0,
            health: 0,
            speed: 0,
            sight: 3,
        }
    },
    7: {
        region: "East Wing River",
        color: "red",
        id: "1b7",
        baseStats: {
            endurance: 0,
            charisma: 1,
            strength: 0,
            visibility: 3,
            health: 0,
            speed: 3,
            sight: 3,
        }
    },
    8: {
        region: "Sustainer Town",
        color: "orange",
        id: "1b8",
        baseStats: {
            endurance: 2,
            charisma: 0,
            strength: 0,
            visibility: 1,
            health: 3,
            speed: 0,
            sight: 4,
        }
    },
    9: {
        region: "Alans Isles",
        color: "gray",
        id: "1b9",
        baseStats: {
            endurance: 1,
            charisma: 1,
            strength: 0,
            visibility: 3,
            health: 1,
            speed: 0,
            sight: 4,
        }
    },
    0: {
        region: "City Central",
        color: "darkslategray",
        id: "1b0",
        baseStats: {
            endurance: 0,
            charisma: 2,
            strength: 0,
            visibility: 3,
            health: 0,
            speed: 1,
            sight: 4,
        }
    },
}

export const functionKey = {
    1: {
        id: "Discourse",
        baseStats: {
            endurance: 0,
            charisma: 3,
            strength: 0,
            visibility: 2,
            health: 0,
            speed: 0,
            sight: 5,
        }
    },
    2: {
        id: "Gallerist",
        baseStats: {
            endurance: 0,
            charisma: 4,
            strength: 0,
            visibility: 3,
            health: 0,
            speed: 2,
            sight: 1,
        }
    },
    3: {
        id: "Memory Yard",
        baseStats: {
            endurance: 0,
            charisma: 3,
            strength: 0,
            visibility: 2,
            health: 0,
            speed: 0,
            sight: 5,
        }
    },
    4: {
        id: "Seer Haven",
        baseStats: {
            endurance: 1,
            charisma: 2,
            strength: 0,
            visibility: 3,
            health: 1,
            speed: 0,
            sight: 3,
        }
    }
}

export const levelKey = {
    1: {
        id: "Sub Level",
        baseStats: {
            endurance: 0,
            charisma: 1,
            strength: 2,
            visibility: 3,
            health: 0,
            speed: 2,
            sight: 2
        }
    },
    2: {
        id: "Ground Level",
        baseStats: {
            endurance: 0,
            charisma: 3,
            strength: 0,
            visibility: 2,
            health: 0,
            speed: 1,
            sight: 4
        }
    },
    3: {
        id: "Mid Level",
        baseStats: {
            endurance: 1,
            charisma: 3,
            strength: 1,
            visibility: 0,
            health: 2,
            speed: 2,
            sight: 1
        }
    },
    4: {
        id: "Sky Level",
        baseStats: {
            endurance: 1,
            charisma: 2,
            strength: 0,
            visibility: 3,
            health: 1,
            speed: 1,
            sight: 2
        }
    }
}

var $ = (x) => {
    const el = document.querySelectorAll(x);
    if (el.length > 1) {
        return el;
    } else if (el.length === 1) {
        return el[0];
    }
};

export var mapperActive = false;

// DESCRIPTION: CLEARS SQUARE AND REPAINTS IT
export function clearSquare() {
    ctx.clearRect(playerCoor.x, playerCoor.y + 4, 18, 18);
    // ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
    img.onload = function () {
        ctx.drawImage(img, playerCoor.x, playerCoor.y + 4, 18, 18, playerCoor.x, playerCoor.y +4, 18, 18);
    };
    img.src = "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg";
}

export function activateMapper() {
    var mapperBut = document.getElementById("viewMapper");
    var camera = document.getElementById("camera");
    var uniEvents = document.querySelectorAll(".uniEvents");
    var uniMenu = document.getElementById("getUniMenu");
    var powerUp = document.getElementById("powerUp1");
    var miniAgent = document.getElementById("miniAgent");
    var ring = document.getElementById("ringView");
    if (window.mapperActive === true) {
        mapperBut.style.border = "1px solid var(--primary)";
        uniEvents.forEach((event) => {
            event.style.display = "block";
        });
        uniMenu.style.opacity = "1";
        uniMenu.style.pointerEvents = "auto";
        powerUp.style.display = "block";
        ring.style.display = "block";
        miniAgent.style.opacity = "1";
        miniAgent.style.pointerEvents = "auto";
        window.mapperActive = false;
        document.getElementById("mapperUI").remove();
        return;
    } else {
        mapperBut.style.border = "1px solid var(--accent)";
        uniEvents.forEach((event) => {
            event.style.display = "none";
        });
        uniMenu.style.opacity = "0";
        uniMenu.style.pointerEvents = "none";
        powerUp.style.display = "none";
        ring.style.display = "none";
        miniAgent.style.opacity = "0";
        miniAgent.style.pointerEvents = "none";
        window.mapperActive = true;
        var mapperUI = document.createElement("div");
        mapperUI.innerHTML = `
            <div id="mapperSaving">
               <div id="savingText">SAVING...</div>
            </div>
            <div id="mapperHeader">
                <div id="mapperTitle" data-help="Mapper">MAPPER</div>
                <div id="mapperJson"><a id="jsonLink">>JSON<</a></div>
                <div id="mapperClose">x</div>
            </div>
            <div id="domainStats">
                <div class="mLeftSect">
                    <div id="domainNumberL">Domain:</div>
                    <div id="domainSectorL">Sector:</div>
                    <div id="domainOwnerL">Owner:</div>
                    <div id="domainFunctL">Function:</div>
                    <div id="domainMaterialL">Material:</div>
                    <div id="domainVisL">Visibility:</div>
                    <div id="domainPrivacyL">Privacy:</div>
                    <div id="domainChapterL">Chapter:</div>
                    <div id="domainTerrainL">Terrain:</div>
                    <div id="domainRegionL">Region:</div>
                </div>
                <div class="mRightSect">
                    <div id="domainNumber">_</div>
                    <div id="domainSector">_</div>
                    <div id="domainOwner">unowned</div>
                    <div id="domainFunct">_</div>
                    <div id="domainMaterial">_</div>
                    <div id="domainVis">_</div>
                    <div id="domainPrivacy">_</div>
                    <div id="domainChapter">_</div>
                    <div id="domainTerrain">_</div>
                    <div id="domainReg">_</div>
                </div>
            </div>
            <div id="domainRegion">
                <div id="labels">
                    <div class="label" id="lb1" data-name"">1</div>
                    <div class="label" id="lb2" data-name"">2</div>
                    <div class="label" id="lb3" data-name"">3</div>
                    <div class="label" id="lb4" data-name"">4</div>
                    <div class="label" id="lb5" data-name"">5</div>
                    <div class="label" id="lb6" data-name"">6</div>
                    <div class="label" id="lb7" data-name"">7</div>
                    <div class="label" id="lb8" data-name"">8</div>
                    <div class="label" id="lb9" data-name"">9</div>
                    <div class="label" id="lb0" data-name"">0</div>
                </div>
                <div id="labelDesc">
                    <div id="mapperSelected">Selected:</div>
                    <div id="mapperSelectedSel">_</div>
                </div>
            </div>
            <div id="mapperSelectors">
                <div id="mapperSelectorLabels">
                    <div class="mapperSelectorLabel" id="sectorSelector">Sector</div>
                    <div class="mapperSelectorLabel">Function</div>
                    <div class="mapperSelectorLabel">Material</div>
                    <div class="mapperSelectorLabel">Visibility</div>
                    <div class="mapperSelectorLabel">Privacy</div>
                    <div class="mapperSelectorLabel">Chapter</div>
                    <div class="mapperSelectorLabel" id="terrainSelector">Terrain</div>
                </div>
                <div id="mapperSelectorValues">
                    <select id="mapperSelectSector">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select id="mapperSelectFunction">
                        <option value="null">null</option>
                        <option value="Gallerist">Gallerist</option>
                        <option value="Seer Haven">Seer Haven</option>
                        <option value="Discourse">Discourse</option>
                        <option value="Memory Yard">Memory Yard</option>
                    </select>
                    <select id="mapperSelectMaterial">
                        <option value="null">null</option>
                        <option value="Oracles Mansion">Oracles Mansion</option>
                        <option value="Spa Anamoly">Spa Anamoly</option>
                        <option value="Discovery 1">discovery 1</option>
                        <option value="User">User</option>
                    </select>
                    <select id="mapperSelectVis">
                        <option value="null">null</option>
                        <option value="Visible">Visible</option>
                        <option value="Hidden">Hidden</option>
                    </select>
                    <select id="mapperSelectPri">
                        <option value="null">null</option>
                        <option value="Public">Public</option>
                        <option value="Private">Pivate</option>
                    </select>
                    <select id="mapperSelectChapter">
                        <option value="All">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <select id="mapperSelectTerrain">
                        <option value="W">Water</option>
                        <option value="N">Nature</option>
                        <option value="C">City</option>
                        <option value="H">Harbor</option>
                        <option value="I">Interior</option>
                        <option value="O">Outerlands</option>
                    </select>
                </div>
            </div>
            <div id="mapperVis">
                <div id="opacitySect">
                    <div id="mapperVisLabel">Opacity</div>
                    <input type="number" min="0.1" max="0.9" step="0.1" value="${mapperFillOpacity}" id="mapperVisSlider">
                </div>
                <div id="mapperTypeLoader">
                    <select id="selScope">
                        <option value="None">None</option>
                        <option value="All">All</option>
                        <option value="Events">Events</option>
                        <option value="Domains">Domains</option>
                        <option value="Agents">Agents</option>
                    </select>
                    <div id="mapperTypeLoaderBut">LOAD</div>
                </div>
                <div id="mapperUpload">
                    <input type="file" id="fileInput" accept=".json"></input>
                    <div id="output"></div>
                </div>
            </div>
            <div id="mapperDecisionButtons">
                <div class="mapperButs" id="clearBut1">
                    <div id="mapperClearBut1">RESET</div>
                </div>
                <div class="mapperButs" id="saveBut1">
                    <div id="mapperSaveBut1">SAVE</div>
                </div>
                <div class="mapperButs" id="clearBut2">
                    <div id="mapperClearBut2">RESET ALL</div>
                </div>
                <div class="mapperButs" id="saveBut2">
                    <div id="mapperSaveBut2">SAVE<br>ALL</div>
                </div>
            </div>
        `;
        mapperUI.id = "mapperUI";
        camera.appendChild(mapperUI);
        selectInit();
        var mTitle = document.getElementById("mapperTitle");
        mTitle.addEventListener("click", (e) => {
            if (mTitle.style.color === "var(--accent)") {
                document.getElementById("mapperUI").onmousedown = null;
                document.onmouseup = null;
                document.onmousemove = null;
                mTitle.style.color = "var(--primary)";
                return
            } else {
                dragElement(mapperUI, true);
                mTitle.style.color = "var(--accent)";
                return
            }
        });
        document.getElementById("clearBut1").addEventListener("click", () => {
            resetDomain(domain);
        });
        document.getElementById("saveBut1").addEventListener("click", () => {
            updateDomain(domain);
        });
        document.getElementById("clearBut2").addEventListener("click", () => {
            resetAll();
        });
        document.getElementById("saveBut2").addEventListener("click", () => {
            saveAll();
        });
        document.getElementById("mapperClose").addEventListener("click", () => {
            window.mapperActive = false;
            document.getElementById("mapperUI").remove();
        });
        document.getElementById("mapperTypeLoaderBut").addEventListener("click", () => {
            if (loadScope === "None") {
                clearPaintedDomains();
                return;
            } else if (loadScope === "All") {
                loadAllDomains();
                showTerrain();
            } else if (loadScope === "Events") {
                // loadEvents();
            } else if (loadScope === "Domains") {
                loadAllDomains();
            } else if (loadScope === "Agents") {
                // loadAgents();
            }
        });
        document.addEventListener("keydown", (e) => {
            var selectedName = document.getElementById("mapperSelectedSel");
            // If Arrow Keys
            if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
                document.getElementById("domainNumber").innerHTML = domain;
                document.getElementById("domainSector").innerHTML = mapping[domain].sector;
                // document.getElementById("domainTerrain").innerHTML = mapping[domain].terrain;
                switch (mapping[domain].terrain) {
                    case "W":
                        document.getElementById("domainTerrain").innerHTML = "Water";
                        break;
                    case "N":
                        document.getElementById("domainTerrain").innerHTML = "Nature";
                        break;
                    case "C":
                        document.getElementById("domainTerrain").innerHTML = "City";
                        break;
                    case "H":
                        document.getElementById("domainTerrain").innerHTML = "Harbor";
                        break;  
                    case "I":
                        document.getElementById("domainTerrain").innerHTML = "Interior";
                        break;
                    case "O":
                        document.getElementById("domainTerrain").innerHTML = "Outerlands";
                        break;
                }
                document.getElementById("domainReg").innerHTML = mapping[domain].region;
                mapping[domain].id = Number(domain);
                selectDomain.id = Number(domain);
                if (regionLock.locked === true) {
                    var r = regionLock.region;
                    clearSquare();
                    ctx.fillStyle = domainKey[r].color;
                    selectedName.innerHTML = domainKey[r].region;
                    ctx.globalAlpha = mapperFillOpacity;
                    ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                    mapping[domain].region = domainKey[r].region;
                    selectDomain.region = domainKey[r].region;
                    mapping[domain].x = String(playerCoor.x);
                    mapping[domain].y = String(playerCoor.y);
                    selectDomain.x = String(playerCoor.x);
                    selectDomain.y = String(playerCoor.y);
                }
                if (sectorLock.locked === true) {
                    // var s = sectorLock.sector;
                    var sectorNum = document.getElementById("mapperSelectSector").value;
                    clearSquare();

                    ctx.font = "10px Arial";
                    ctx.fillStyle = "yellow";
                    ctx.fillText(sectorNum, playerCoor.x + 9, playerCoor.y + 13);

                    mapping[domain].sector = Number(sectorNum);
                    selectDomain.sector = Number(sectorNum);
                    selectDomain.x = String(playerCoor.x);
                    selectDomain.y = String(playerCoor.y);
                }
                if (terrainLock.locked === true) {
                    // var t = terrainLock.terrain;
                    var terrainNum = document.getElementById("mapperSelectTerrain").value;
                    console.log(terrainNum);
                    clearSquare();

                    ctx.font = "10px Arial";
                    ctx.fillStyle = "yellow";
                    // ctx.fillText(terrainNum, playerCoor.x + 9, playerCoor.y + 9);
                    ctx.fillText(terrainNum, playerCoor.x, playerCoor.y + 13);

                    // mapping[domain].terrain = terrainNum || null;
                    mapping[domain].terrain = String(terrainNum);
                    selectDomain.terrain = String(terrainNum);
                    selectDomain.x = String(playerCoor.x);
                    selectDomain.y = String(playerCoor.y);
                }
            }

            // 1 key
            if (e.keyCode == 49) {
                clearSquare();
                ctx.fillStyle = domainKey[1].color;
                selectedName.innerHTML = domainKey[1].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[1].region;
                selectDomain.region = domainKey[1].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
            // 2 key
            if (e.keyCode == 50) {
                clearSquare();
                ctx.fillStyle = domainKey[2].color;
                selectedName.innerHTML = domainKey[2].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                var d1 = domain;
                var d2 = domain
                mapping[domain].region = domainKey[2].region;
                selectDomain.region = domainKey[2].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
                // mapMapping(d2, "Falcons Heart", null, null, "Oracles Mansion", false, false, "All");
                // console.log(mapping);
            }
            // 3 key
            if (e.keyCode == 51) {
                clearSquare();
                ctx.fillStyle = domainKey[3].color;
                selectedName.innerHTML = domainKey[3].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[3].region;
                selectDomain.region = domainKey[3].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
            // 4 key
            if (e.keyCode == 52) {
                clearSquare();
                ctx.fillStyle = domainKey[4].color;
                selectedName.innerHTML = domainKey[4].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[4].region;
                selectDomain.region = domainKey[4].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
            // 5 key
            if (e.keyCode == 53) {
                clearSquare();
                ctx.fillStyle = domainKey[5].color;
                selectedName.innerHTML = domainKey[5].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[5].region;
                selectDomain.region = domainKey[5].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
            // 6 key
            if (e.keyCode == 54) {
                clearSquare();
                ctx.fillStyle = domainKey[6].color;
                selectedName.innerHTML = domainKey[6].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[6].region;
                selectDomain.region = domainKey[6].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
            // 7 key
            if (e.keyCode == 55) {
                clearSquare();
                ctx.fillStyle = domainKey[7].color;
                selectedName.innerHTML = domainKey[7].region;
                ctx.globalAlpha = mapperFillOpacity;
                // ctx.globalCompositeOperation = "multiply"; // Set the blend mode
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[7].region;
                selectDomain.region = domainKey[7].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
            // 8 key
            if (e.keyCode == 56) {
                clearSquare();
                ctx.fillStyle = domainKey[8].color;
                selectedName.innerHTML = domainKey[8].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[8].region;
                selectDomain.region = domainKey[8].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
            // 9 key
            if (e.keyCode == 57) {
                clearSquare();
                ctx.fillStyle = domainKey[9].color;
                selectedName.innerHTML = domainKey[9].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[9].region;
                selectDomain.region = domainKey[9].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
            // 0 key
            if (e.keyCode == 48) {
                clearSquare();
                ctx.fillStyle = domainKey[0].color;
                selectedName.innerHTML = domainKey[0].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y + 4, 18, 18);
                mapping[domain].region = domainKey[0].region;
                selectDomain.region = domainKey[0].region;
                mapping[domain].x = String(playerCoor.x);
                mapping[domain].y = String(playerCoor.y);
                selectDomain.x = String(playerCoor.x);
                selectDomain.y = String(playerCoor.y);
            }
        });
    }
}

 const intActor = async () => {
    // var canisterId = "bd3sg-teaaa-aaaaa-qaaba-cai";
    var canisterId = "23tad-vaaaa-aaaag-abvwq-cai";
    var live = "https://ic0.app";
    var local = "http://127.0.0.1:4943";
    // let agent = new HttpAgent({ host: local });
    let agent =  window.ic.plug.agent;
    const actor = Actor.createActor(idlFactory, {
        agent,
        canisterId,
    });
    agent.fetchRootKey();
    return actor;
}

//////////////

function mapMapping(domain, region, sector, owner, funct, material, visibility, privacy, chapter, health, strength, endurance,terrain) {
    var d = {
        id: domain,
        owner: owner,
        region: region,
        sector : sector,
        function: funct,
        material: material,
        visibility: visibility,
        privacy: privacy,
        chapter: chapter,
        health: health,
        strength: strength,
        endurance: endurance,
        terrain: terrain
    }
    mapping[domain] = d;
    return d;
}

//////////////

async function getDomain(domainNum) {
    console.log("SAVING DOMAIN");
    var act = await intActor();
    var test = await act.getDomain(domainNum).catch((err) => {
        console.log(err);
    });
    console.log("SAVED DOMAIN", test.ok);
}

//////////////

// async function loadAllDomains() {
//     var act = await intActor();
//     var batches = [
//         10000,
//         16319
//     ];
//     var allDomainsMain = [];
//     var notComplete = true;
//     console.log("LOADING ALL DOMAINS");
//     for (var i = 0; i < batches.length; i++) {
//         if (batches[i] === 10000) {
//             try {
//             var domainBatch1 = await act.getAllDomains(0, 10000)
//             allDomainsMain = allDomainsMain.concat(domainBatch1)
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         if (batches[i] === 16319) {
//             try {
//             var domainBatch2 = await act.getAllDomains(10001, 16318)
//             allDomainsMain = allDomainsMain.concat(domainBatch2)
//             mapping = allDomainsMain;
//             mapping.forEach((mapDomain) => {
//                 if (mapDomain.region != "null" && mapDomain.x != "0") {
//                     paintDomain(Number(mapDomain.id));
//                 }
//             });
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     }
//     console.log("LOADED ALL DOMAINS");
//    return allDomainsMain;
// }

export async function loadAllDomains() {
    var act = await intActor();
    // Updated batches array to include a new value for the third batch
    var batches = [5440, 10880, 16318]; // Assuming 20000 as the start of the third batch
    var allDomainsMain = [];
    console.log("LOADING ALL DOMAINS");
    for (var i = 0; i < batches.length; i++) {
        try {
            if (i === 0) { // First batch
                var domainBatch1 = await act.getAllDomains(0, batches[i]);
                allDomainsMain = allDomainsMain.concat(domainBatch1);
            } else { // Subsequent batches
                var domainBatch = await act.getAllDomains(batches[i - 1] + 1, batches[i]);
                allDomainsMain = allDomainsMain.concat(domainBatch);
            }
        } catch (err) {
            console.log(err);
        }
    }
    // Additional operations on allDomainsMain, if needed
    console.log("LOADED ALL DOMAINS");
    return allDomainsMain;
}


//////////////

async function updateDomain(domainNum) {
    console.log("SAVING DOMAIN");
    try {
    var act = await intActor();
    var domainStatus = await act.updateDomain(domainNum, selectDomain, lord.principal)
    } catch (err) {
        console.log(err);
    }
    console.log("SAVED DOMAIN", domainStatus);
}

//////////////


async function saveAsJson(data) {
    let largeObject = data

    const bigIntReplacer = (key, value) => 
    typeof value === 'bigint' ? value.toString() + 'n' : value;

    let blob = new Blob([JSON.stringify(largeObject, bigIntReplacer)], {type: 'application/json'});

    let a = document.getElementById('jsonLink');
    a.href = URL.createObjectURL(blob);
    a.style.color = "var(--accent)";
    a.download = 'tc-bu-data.json';
    a.click();
}

//////////////

async function saveAll() {
    // Save All
    document.getElementById("mapperSaving").style.display = "grid";
    console.log("SAVING ALL DOMAINS");
    try {
    var act = await intActor();
    // console.log(mapping)
    var allDomainsStatus = await act.batchUpdateDomains(mapping, lord.principal).catch((err) => {
        console.log(err);
        document.getElementById("mapperSaving").style.animation = "none";   
        setTimeout(() => {
            document.getElementById("mapperSaving").style.display = "none";
        }, 10000);
    });
    var allDomainsStatus2 = await loadAllDomains()
    } catch (err) {
        console.log(err);
        document.getElementById("savingText").innerHTML= "ERROR SAVING - Check Console";
    }
    // saveAsJson(allDomainsStatus2);
    saveAsJson(mapping);
    console.log("SAVED ALL DOMAINS", allDomainsStatus2);
    document.getElementById("mapperSaving").style.display = "none";
}

//////////////

async function resetDomain(domainNum) {
    // Reset Domain
    try {
    var act = await intActor();
    var clearedDomain = {
        id : domainNum,
        x : "0",
        y : "0",
        owner : "null",
        region : "null",
        sector : 0,
        function: "null",
        material : "null",
        visibility : false,
        privacy : false,
        chapter : "null",
        health : 0,
        strength : 0,
        endurance : 0,
        terrain : "null"
    }
    mapping[domainNum] = clearedDomain;
    var domainStatus = await act.updateDomain(domainNum, clearedDomain)
    } catch (err) {
            console.log(err);
    }
    console.log("SAVED DOMAIN", domainStatus);
}

//////////////

async function resetAll() {
    // Reset All
    try {
        var act = await intActor();
        var domainsResetStatus = await act.initTaosCity(lord.principal)
        // Load All
        // Assign id to each domain
    } catch (err) {
            console.log(err);
    }
    console.log("SAVED DOMAIN", domainsResetStatus);
}

//////////////

async function uploadJson() {
 // Get the file input element
 const fileInput = document.getElementById('fileInput');
        
 // Listen for changes in the input
 fileInput.addEventListener('change', function() {
     const file = fileInput.files[0];

     if (file) {
         // Create a FileReader to read the file
         const reader = new FileReader();

         // Define a callback function to handle the file reading
         reader.onload = async function(event) {
             const jsonContent = event.target.result;

             // Parse the JSON content into a JavaScript object
             try {
                 const jsonData = await JSON.parse(jsonContent);

                 // You can now use jsonData as your variable
                //  console.log('JSON data:', jsonData);
                 mapping = jsonData;

                // INITIALIZING MAPPING (**IF STARTING OVER**)
                //  for (var i = 0; i < mapping.length; i++) {
                //     mapping[i].id = i;
                //     mapping[i].sector = 0;
                //     mapping[i].health = 0;
                //     mapping[i].strength = 0;
                //     mapping[i].endurance = 0;
                //  }

                 console.log("Loaded JSON");
                 document.getElementById('output').textContent = "JSON Loaded"
                //  mapping?.forEach((mapDomain) => {
                //     if (mapDomain.region != "null" && mapDomain.x != "0") {
                //         paintDomain(Number(mapDomain.id));
                //     }
                // });
             } catch (error) {
                 console.error('Error parsing JSON:', error);
                 alert('Invalid JSON file');
             }
         };

         // Read the file as text
         reader.readAsText(file);
     }
 });
}

//////////////

function selectInit() {
    // Select Function
    paintLock();
    sectorLockFunc();
    terrainLockFunc();
    uploadJson();
    $("#mapperSelectFunction").addEventListener("change", (e) => {
        selectDomain.function = e.target.value;
        mapping[domain].function = e.target.value;
        $("#domainFunct").innerHTML = e.target.value;
    });
    // Select Material
    $("#mapperSelectMaterial").addEventListener("change", (e) => {
        selectDomain.material = e.target.value;
        mapping[domain].material = e.target.value;
        $("#domainMaterial").innerHTML = e.target.value;
    });
    // Select Visibility
    $("#mapperSelectVis").addEventListener("change", (e) => {
        selectDomain.visibility = e.target.value;
        mapping[domain].visibility = e.target.value;
        $("#domainVis").innerHTML = e.target.value;
    });
    // Select Privacy
    $("#mapperSelectPri").addEventListener("change", (e) => {
        selectDomain.privacy = e.target.value;
        mapping[domain].privacy = e.target.value;
        $("#domainPrivacy").innerHTML = e.target.value;
    });
    // Select Chapter
    $("#mapperSelectChapter").addEventListener("change", (e) => {
        selectDomain.chapter = e.target.value;
        mapping[domain].chapter = e.target.value;
        $("#domainChapter").innerHTML = e.target.value;
    });
    // Select Sector
    $("#mapperSelectSector").addEventListener("change", (e) => {
        selectDomain.sector = e.target.value;
        mapping[domain].sector = e.target.value;
        $("#domainSector").innerHTML = e.target.value;
    });
    // Select Terrain
    $("#mapperSelectTerrain").addEventListener("change", (e) => {
        selectDomain.terrain = e.target.value;
        mapping[domain].terrain = e.target.value;
        $("#domainTerrain").innerHTML = e.target.value;
    });
    // Select Opacity
    $("#mapperVisSlider").addEventListener("input", (e) => {
        mapperFillOpacity = e.target.value;
    });
    // Select Scope 
    $("#selScope").addEventListener("change", (e) => {
        loadScope = e.target.value;
    });
}

//////////////

function paintDomain(dom) {
    clearSquare();
    var foundObj = Object.values(domainKey).find((key) => key.region === mapping[dom].region);
    ctx.fillStyle = foundObj.color;
    ctx.globalAlpha = mapperFillOpacity;
    var x = Number(mapping[dom].x);
    var y = Number(mapping[dom].y);
    ctx.fillRect( x, y + 4, 18, 18);
}

//////////////

function showSectors(dom) {
    clearSquare();
    var foundObj = Object.values(domainKey).find((key) => key.sector === mapping[dom].sector);
    var x = Number(mapping[dom].x);
    var y = Number(mapping[dom].y);
    ctx.fillText(foundObj.sector, x + 9, y + 9);
}

//////////////

function showTerrain(dom) {
    clearSquare();
    var foundObj = Object.values(domainKey).find((key) => key.terrain === mapping[dom].terrain);
    var x = Number(mapping[dom].x);
    var y = Number(mapping[dom].y);
    ctx.fillText(foundObj.terrain, x + 9, y + 9);
}

//////////////

function clearPaintedDomains() {
    mapping.forEach((domain) => {
        ctx.clearRect(domain.x, domain.y, 18, 18);
        img.onload = function () {
            ctx.drawImage(img, domain.x, domain.y, 18, 18, domain.x, domain.y, 18, 18);
        };
        img.onload = function () {
            ctx.drawImage(img, 0, 0, img.width, img.height);
            // make a 18px by 18px grid overlay
            ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
            for (var x = 0; x < img.width; x += 18) {
              ctx.fillRect(x, 0, 1, img.height);
            }
            for (var y = 0; y < img.height; y += 18) {
              ctx.fillRect(0, y, img.width, 1);
            }
          };
        img.src = "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg";
    });
}   

//////////////

function paintLock() {
    document.querySelectorAll(".label").forEach((label) => {
        label.addEventListener("click", (e) => {
            document.querySelectorAll(".label").forEach((label) => {
                if (e.target.id != label.id) {
                    label.style.border = "none";
                } else {
                    if (label.style.border === "3px solid lightgreen") {
                        label.style.border = "none";
                        regionLock.locked = false;
                        regionLock.region = null;
                        console.log(regionLock);
                        return;
                    } else {
                        label.style.border = "3px solid lightgreen";
                        regionLock.region = Number(e.target.id.replace("lb", ""));
                        regionLock.locked = true;
                        console.log(regionLock);
                    }
                }
            });
        });
    });
}

//////////////

function sectorLockFunc() {
    document.getElementById("sectorSelector").addEventListener("click", (e) => {
        var el = document.getElementById("sectorSelector");
        if (sectorLock.locked === false) {
            el.style.color = "var(--accent)";
            sectorLock.locked = true;
            console.log(sectorLock);
            return;
        } else {
            el.style.color = "var(--primary)";
            sectorLock.locked = false;
            console.log(sectorLock);
        }
    });
}

//////////////

function terrainLockFunc() {
    document.getElementById("terrainSelector").addEventListener("click", (e) => {
        var el = document.getElementById("terrainSelector");
        if (terrainLock.locked === false) {
            el.style.color = "var(--accent)";
            terrainLock.locked = true;
            return;
        } else {
            el.style.color = "var(--primary)";
            terrainLock.locked = false;
            console.log(terrainLock);
        }
    });
}

// Limit Regions
// Release Limit Regions
// Map Events
// Map Rivals
// Map Athorities
// Map Obatacles

// Add LOAD, CLEAR, EVENT IDENTIFIER

// Initialize Loacation HUD (Region Name, Sector Number, Domain Stats, etc)
export const initLocationHUD = async (domain, mapping2) => {
    var element = document.getElementById("locHud");
    if (!document.getElementById("locHud")) {
        var hud = document.createElement("div");
        hud.id = "locHud";
        document.getElementById("camera").appendChild(hud);
    } else {
        if (element.innerHTML != mapping2[domain].region) {
            element.innerHTML = mapping2[domain].region;
            setTimeout(() => { 
                element.style.opacity = 1;
            }, 300);
            setTimeout(() => {
                element.style.opacity = 0;
            }, 4000);
        }
    }
};

// Domain Function Types(Static elements)
// Terrain Sounds
// Terrain Speed Variations
// Discover Domain Action (Generates new image or video for domain)
// Domain Highlight Styles
// Same Domain Player Interaction
// Initialize NPCS (Static and Dynamic characters)


// Base Digisette (Base NFTs)

// Tourist Passes

// Discovered Memory (Based on Digisette)

// Initialize Challenges (Bad Guys, Obstacles, Hot Spots etc)

// Cut Scenee Loader (Builds up over discovery of new areas)

// Cost (Energy, Time, Money, etc to discover new areas)

// Reward (Energy, Time, Money, etc recieved by performing certain task and missions)

// Amplify Domain

// Sabotage Domain

// Domain 9 Axis data

// CH-SC

// Travel Restrictions (Water, Flight, Region, Sector, etc - Based on experience)