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
                <input type="range" min="0" max="100" value="50" class="slider" id="mapperVisSlider">
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
    }
}

// Limit Regions
// Release Limit Regions
// Map Events
// Map Rivals
// Map Athorities
// Map Obatacles