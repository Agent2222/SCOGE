import { newScenario } from "../universe";
// Check Initial State

export function checkInitialState() {
  var CHECK_INITIAL_STATE = {
    wallet: null,
    walletConnected: false,
    digisette: null,
    digisetteBaseStat: null,
  };

  

  // Check Wallet
  if (window.ic) {
    //
    // console.log("Wallet Connected", window.ic);
  } else {
    // console.log("Wallet Not Connected");
    return;
  }

  // Check Wallet Connected
  // Check Digisette
  // Check Digisette Base Stat
  // Initiate Scenario
  return {
    type: CHECK_INITIAL_STATE,
  };
}

export async function story(scenario) {
  switch (scenario) {
    case "Intro":
      window.currentScenario = await newScenario(scenario);
    break;
    case "DigisetteIntro":
      window.currentScenario = await newScenario(scenario);
    break;
    case "Delays":
      window.currentScenario = await newScenario(scenario);
    break;
    case "DomainDevelopment":
        window.currentScenario = await newScenario(scenario);
    break;
    case "DomainDevelopmentSetup":
        window.currentScenario = await newScenario(scenario);
    break;
    case "FoundTheGuide":
        window.currentScenario = await newScenario(scenario);
    break;
    case "Controls":
        window.currentScenario = await newScenario(scenario);
    break;
  }
}

export function openNote1() {
  document.getElementById("note1-img").src =
    "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/graphics/tg-artifact-1-2-2.png";
  document.getElementById("note1-cont").style.width = "100%";
  document.getElementById("note1-cont").style.height = "100%";
  document.getElementById("note1-cont").style.left = "0%";
  document.getElementById("note1-cont").style.top = "0%";
  document.getElementById("note1-cont").style.display = "flex";
  document.getElementById("note1-cont").style.justifyContent = "center";
  document.getElementById("note1-cont").style.alignItems = "center";
  document.querySelectorAll(".sceneElementImg").forEach((child) => {
    child.style.height = "";
    child.style.width = "50%";
    child.style.position = "";
    if (child.id !== "note1-img") {
      child.remove();
    }
  });
  paper();
  // document.getElementById("note1-img").style.height = "auto";
}

export var sector2 = [
  { start: 55, finish: 149 },
  { start: 225, finish: 319 },
  { start: 395, finish: 489 },
  { start: 565, finish: 659 },
  { start: 735, finish: 829 },
  { start: 905, finish: 999 },
  { start: 1075, finish: 1169 },
  { start: 1245, finish: 1339 },
  { start: 1415, finish: 1509 },
  { start: 1585, finish: 1679 },
  { start: 1755, finish: 1849 },
  { start: 1925, finish: 2019 },
  { start: 2095, finish: 2189 },
  { start: 2265, finish: 2359 },
  { start: 2435, finish: 2529 },
  { start: 2605, finish: 2699 },
  { start: 2775, finish: 2869 },
  { start: 2945, finish: 3039 },
  { start: 3115, finish: 3209 },
  { start: 3285, finish: 3379 },
  { start: 3455, finish: 3549 },
  { start: 3625, finish: 3719 },
  { start: 3795, finish: 3889 },
  { start: 3965, finish: 4059 },
  { start: 4135, finish: 4229 },
  { start: 4305, finish: 4399 },
  { start: 4475, finish: 4569 },
  { start: 4645, finish: 4739 },
  { start: 4815, finish: 4909 },
  { start: 4985, finish: 5079 },
  { start: 5155, finish: 5249 },
  { start: 5325, finish: 5419 },
  { start: 5495, finish: 5589 },
  { start: 5665, finish: 5759 },
  { start: 5835, finish: 5929 },
  { start: 6005, finish: 6099 },
  { start: 6175, finish: 6269 },
  { start: 6345, finish: 6439 },
  { start: 6515, finish: 6609 },
  { start: 6685, finish: 6779 },
  { start: 6855, finish: 6949 },
  { start: 7025, finish: 7119 },
  { start: 7195, finish: 7289 },
  { start: 7365, finish: 7459 },
  { start: 7535, finish: 7629 },
  { start: 7705, finish: 7799 },
  { start: 7875, finish: 7969 },
  { start: 8045, finish: 8139 },
  { start: 8215, finish: 8309 },
  { start: 8385, finish: 8479 },
  { start: 8555, finish: 8649 },
  { start: 8725, finish: 8819 },
  { start: 8895, finish: 8989 },
  { start: 9065, finish: 9159 },
  { start: 9235, finish: 9329 },
  { start: 9405, finish: 9499 },
];

export class theGuide {
  constructor(left, top) {
    this.name = "The Guide";
    this.description = "The Guide";
    this.left = left;
    this.top = top;
    this.position = null;
    this.startled = false;
    this.recovering = null
    this.patience = 5000;
    this.action = null;
    this.guide = null;
    this.guidePosition = [];
    this.rect = document.querySelector("#universe").getBoundingClientRect();
    this.guideRect = null;
    this.tileSize = 18;
    this.boxPos = null;
    this.cityPosition = {
        x: null,
        y: null,
    };
  }

  getCoordinatesFromPosition(position) {
    const x = (position % (170 - 2)) * this.tileSize;
    const updatedPosition = (Math.floor(position / (170 - 2))) * this.tileSize;
    const y = updatedPosition;
    return { x, y };
  }

  appear() {
    window.activeGames.push("The Guide");
    var guide = document.createElement("div");
    guide.id = "theGuide";
    guide.style.position = "fixed";
    guide.style.left = this.left + "px";
    guide.style.top = this.top + "px";
    guide.style.opacity = 0;
    document.getElementById("camera").appendChild(guide);
    this.guide = guide;
    this.guideRect = this.guide.getBoundingClientRect();
  }

  getRandomNumber(start, finish) {
    return Math.floor(Math.random() * (finish - start + 1)) + start;
  }

    move() {
        this.guide.style.opacity = 1;
        this.action = setInterval(() => {
            this.boxPos = {
                x: Math.round(this.guideRect.left - this.rect.left + 2),
                y: Math.round(this.guideRect.top - this.rect.top + 2),
              };
              this.convertedBoxPos = {
                x: Math.round(this.boxPos.x / this.tileSize),
                y: Math.round(Math.round(this.boxPos.y / this.tileSize)),
              };
            this.deduct = 170 - this.convertedBoxPos.x;
            this.position = 170 - this.deduct + this.convertedBoxPos.y * 170;
            this.cityPosition.x = this.boxPos.x - 2;
            this.cityPosition.y = this.boxPos.y - 2;
            var randomSectorIndex = Math.floor(Math.random() * sector2.length);
            var randomSector = sector2[randomSectorIndex];
            var randomNumberInSector = this.getRandomNumber(randomSector.start, randomSector.finish);
            // console.log(randomNumberInSector);
            if (this.guidePosition.length === 2) {
                this.guidePosition.splice(1, 1);
            }
            this.guidePosition.unshift(randomNumberInSector);
            const cityPosition = this.getCoordinatesFromPosition(randomNumberInSector);
            this.guide.style.left = cityPosition.x + "px";
            this.guide.style.top = cityPosition.y + "px";
        }, this.patience);
    }

    stop() {
        clearInterval(this.action);
    }

    startled() {
        this.startled = true;
        this.patience = 1000;
        this.recovering = setInterval(() => {
            if (this.patience < 5000 && this.startled === true) {
                this.patience += 1000;
            }
            if (this.patience === 5000) {
                this.startled = false;
                clearInterval(this.recovering);
            }
        }, 1000);
    }
}

export function paper() {
    window.activeGames.push("Paper");
    var uniMenu = document.getElementById("getUniMenu").shadowRoot;
    var fs = uniMenu.getElementById("fsToggle");
    var no = uniMenu.getElementById("notiToggle");
    var sl = uniMenu.getElementById("myRange");
    var ml = uniMenu.getElementById("myRange2");
    uniMenu.getElementById("settingsSave").addEventListener("click", () => {
        if (fs.checked === true && no.checked === false && sl.value === "4" && ml.value === "3") {
            alert("Hello? How did you get activate this connct.. Nevermind. Looks like the paper that was slipped onto you was from a person citizens refer to as The Guide. He's usually found in the throughout city wearing a bright orange staw hat. If he found you, you might find him again. - SCOGÉ HQ");
              if (!document.getElementById("theGuide")) {
                window.guide = new theGuide(-50, -50);
                window.guide.appear();
                window.guide.move();
              }
        }
    });
}