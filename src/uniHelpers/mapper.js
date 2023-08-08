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
    }
}

// Limit Regions
// Release Limit Regions
// Map Events
// Map Rivals
// Map Athorities
// Map Obatacles