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
        document.getElementById("labeler").remove();
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
            <div id="domainStats">
                <div id="domainNumber">Domain: 127</div>
                <div id="domainSector">Region: Falcons Heart</div>
                <div id="domainOwner">Owner: Unclaimed</div>
                <div id="domainFunct">Function: Undecided</div>
                <div id="domainType">Type: Video</div>
            </div>
            <div id="domainRegion">
                <div id="labels">
                    <div class="label" id="lb1">1</div>
                    <div class="label" id="lb2">2</div>
                    <div class="label" id="lb3">3</div>
                    <div class="label" id="lb4">4</div>
                    <div class="label" id="lb5">5</div>
                    <div class="label" id="lb6">6</div>
                    <div class="label" id="lb7">7</div>
                    <div class="label" id="lb8">8</div>
                    <div class="label" id="lb9">9</div>
                    <div class="label" id="lb10">10</div>
                </div>
                <div id="labelDesc">Selected: Falcons Heart</div>
            </div>
        `;
        mapperUI.id = "mapperUI";
        camera.appendChild(mapperUI);
    }
}

// Limit Regions
// Release Limit Regions
// Map Events
// Map Rivals
// Map Athorities
// Map Obatacles