import { playerCoor, domain } from "../universe.js";

var canvas = document.getElementById("universe");
var ctx = canvas.getContext("2d");
var mapperFillOpacity = 0.5;
var img = document.createElement("img");
var mapping = {}
var key = {
    1: {
        region: "LX Industry",
        color: "brown",
        id: "1b1"
    },
    2: {
        region: "West Wing River",
        color: "cadetblue",
        id: "1b2"
    },
    3: {
        region: "Outerlands",
        color: "purple",
        id: "1b3"
    },
    4: {
        region: "The 12th",
        color: "darkolivegreen",
        id: "1b4"
    },
    5: {
        region: "Ports of Alansana",
        color: "yellow",
        id: "1b5"
    },
    6: {
        region: "Falcons Heart",
        color: "blue",
        id: "1b6"
    },
    7: {
        region: "East Wing River",
        color: "red",
        id: "1b7"
    },
    8: {
        region: "Sustainer Town",
        color: "orange",
        id: "1b8"
    },
    9: {
        region: "Alans Isles",
        color: "gray",
        id: "1b9"
    },
    0: {
        region: "City Central",
        color: "darkslategray",
        id: "1b0"
    },
}

function clearSquare() {
    ctx.clearRect(playerCoor.x, playerCoor.y, 18, 18);
    img.onload = function () {
        ctx.drawImage(img, playerCoor.x, playerCoor.y, 18, 18, playerCoor.x, playerCoor.y, 18, 18);
    };
    img.src = "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg";
}

function mapMapping(domain, region, owner, funct, material, visibility, privacy, chapter) {
    var d = {
        region: region,
        owner: owner,
        function: funct,
        material: material,
        visibility: visibility,
        privacy: privacy,
        chapter: chapter,
    }
    mapping[domain] = d;
}

export function activateMapper() {
    var mapperBut = document.getElementById("mapperBut");
    var camera = document.getElementById("camera");
    var uniEvents = document.querySelectorAll(".uniEvents");
    var uniMenu = document.getElementById("getUniMenu");
    var powerUp = document.getElementById("powerUp1");
    var ring = document.getElementById("ringView");
    if (window.mapperActive == true) {
        mapperBut.style.color = "var(--primary)";
        uniEvents.forEach((event) => {
            event.style.display = "block";
        });
        uniMenu.style.opacity = "1";
        uniMenu.style.pointerEvents = "auto";
        powerUp.style.display = "block";
        ring.style.display = "block";
        window.mapperActive = false;
        document.getElementById("mapperUI").remove();
        return;
    } else {
        mapperBut.style.color = "var(--accent)";
        uniEvents.forEach((event) => {
            event.style.display = "none";
        });
        uniMenu.style.opacity = "0";
        uniMenu.style.pointerEvents = "none";
        powerUp.style.display = "none";
        ring.style.display = "none";
        window.mapperActive = true;
        var mapperUI = document.createElement("div");
        mapperUI.innerHTML = `
            <div id="mapperHeader">
                <div id="mapperTitle">MAPPER</div>
                <div id="mapperClose">x</div>
            </div>
            <div id="domainStats">
                <div class="mLeftSect">
                    <div id="domainNumberL">Domain:</div>
                    <div id="domainSectorL">Region:</div>
                    <div id="domainOwnerL">Owner:</div>
                    <div id="domainFunctL">Lord Function</div>
                    <div id="domainMaterialL">Material:</div>
                    <div id="domainVisL">Visibility:</div>
                    <div id="domainPrivacyL">Privacy:</div>
                    <div id="domainChapterL">Chapter:</div>
                </div>
                <div class="mRightSect">
                    <div id="domainNumber">127</div>
                    <div id="domainSector">Falcons Heart</div>
                    <div id="domainOwner">Unclaimed</div>
                    <div id="domainFunct">Undecided</div>
                    <div id="domainMaterial">Oracles Mansion</div>
                    <div id="domainVis">Hidden / Visible</div>
                    <div id="domainPrivacy">Public / Private</div>
                    <div id="domainChapter">All</div>
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
                    <div class="label" id="lb10" data-name"">10</div>
                </div>
                <div id="labelDesc">
                    <div id="mapperSelected">Selected:</div>
                    <div id="mapperSelectedSel">Falcons Heart</div>
                </div>
            </div>
            <div id="mapperSelectors">
                <div id="mapperSelectorLabels">
                    <div id="mapperSelectorLabel">Lord Function</div>
                    <div id="mapperSelectorLabel">Material</div>
                    <div id="mapperSelectorLabel">Visibility</div>
                    <div id="mapperSelectorLabel">Privacy</div>
                    <div id="mapperSelectorLabel">Chapter</div>
                </div>
                <div id="mapperSelectorValues">
                    <select id="mapperSelectFunction">
                        <option value="1">Billboard</option>
                        <option value="2">Holo Ad</option>
                        <option value="3">Chat</option>
                        <option value="4">Gym</option>
                    </select>
                    <select id="mapperSelectMaterial">
                        <option value="1">Oracles Mansion</option>
                        <option value="2">Spa Anamoly</option>
                        <option value="3">discovery 1</option>
                    </select>
                    <select id="mapperSelectVis">
                        <option value="1">Visible</option>
                        <option value="2">Hidden</option>
                    </select>
                    <select id="mapperSelectPri">
                        <option value="1">Public</option>
                        <option value="2">Pivate</option>
                    </select>
                    <select id="mapperSelectChapter">
                        <option value="1">All</option>
                        <option value="2">1</option>
                        <option value="3">2</option>
                    </select>
                </div>
            </div>
            <div id="mapperVis">
                <div id="mapperVisLabel">Overlay Visibility</div>
                <input type="range" min="0" max="1" step="0.1" value="${mapperFillOpacity}" class="slider" id="mapperVisSlider">
            </div>
            <div class="mapperButs" id="clearBut">
                <div id="mapperClearBut">RESET</div>
            </div>
            <div class="mapperButs" id="saveBut">
                <div id="mapperSaveBut">SAVE ALL</div>
            </div>
        `;
        mapperUI.id = "mapperUI";
        camera.appendChild(mapperUI);
        document.getElementById("mapperClose").addEventListener("click", () => {
            window.mapperActive = false;
            document.getElementById("mapperUI").remove();
        });
        document.addEventListener("keydown", (e) => {
            // 1 key
            var selectedName = document.getElementById("mapperSelectedSel");
            if (e.keyCode == 49) {
                clearSquare();
                ctx.fillStyle = key[1].color;
                selectedName.innerHTML = key[1].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
            // 2 key
            if (e.keyCode == 50) {
                clearSquare();
                ctx.fillStyle = key[2].color;
                selectedName.innerHTML = key[2].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
                var d1 = domain;
                var d2 = domain
                mapMapping(d2, "Falcons Heart", null, null, "Oracles Mansion", false, false, "All");
                console.log(mapping);
            }
            // 3 key
            if (e.keyCode == 51) {
                clearSquare();
                ctx.fillStyle = key[3].color;
                selectedName.innerHTML = key[3].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
            // 4 key
            if (e.keyCode == 52) {
                clearSquare();
                ctx.fillStyle = key[4].color;
                selectedName.innerHTML = key[4].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
            // 5 key
            if (e.keyCode == 53) {
                clearSquare();
                ctx.fillStyle = key[5].color;
                selectedName.innerHTML = key[5].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
            // 6 key
            if (e.keyCode == 54) {
                clearSquare();
                ctx.fillStyle = key[6].color;
                selectedName.innerHTML = key[6].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
            // 7 key
            if (e.keyCode == 55) {
                clearSquare();
                ctx.fillStyle = key[7].color;
                selectedName.innerHTML = key[7].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.globalCompositeOperation = "multiply"; // Set the blend mode
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
            // 8 key
            if (e.keyCode == 56) {
                clearSquare();
                ctx.fillStyle = key[8].color;
                selectedName.innerHTML = key[8].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
            // 9 key
            if (e.keyCode == 57) {
                clearSquare();
                ctx.fillStyle = key[9].color;
                selectedName.innerHTML = key[9].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
            // 0 key
            if (e.keyCode == 48) {
                clearSquare();
                ctx.fillStyle = key[0].color;
                selectedName.innerHTML = key[0].region;
                ctx.globalAlpha = mapperFillOpacity;
                ctx.fillRect(playerCoor.x, playerCoor.y, 18, 18);
            }
        });
    }
}

// Limit Regions
// Release Limit Regions
// Map Events
// Map Rivals
// Map Athorities
// Map Obatacles