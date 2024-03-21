import { gsap } from "gsap";
import { Configuration, OpenAIApi } from "openai";
import { newScenario, newEditorScenario } from "./src/universe";
import { activateMapper } from "./src/uniHelpers/mapper";

const VITE_ScogeI = import.meta.env.VITE_ScogeI;
const configuration = new Configuration({
  apiKey: VITE_ScogeI,
});
const openai = new OpenAIApi(configuration);

var data = null;
var tempData = null;
var currentScenario = null;
var currentScName = null;
var currentScene = null;
var currentCharacter = null;
var currentElement = null;
var selectedElement = null;
var newCharIndex = 0;
var newElIndex = 0;
var allElementsLoaded = false;
var csd = null;
var selectScopeTarget = null;

var defaultTempSceneData = {
  name: "newScene",
  position: 0,
  type: "dialogue",
  bg: "rgba(0,0,0,0.75)",
  activated: {
    land: 0,
    pop: false,
    gate: 0,
    scn: [],
  },
  characters: [],
  elements: [],
};

var tempSceneData = {
  name: "newScene",
  position: 0,
  type: "dialogue",
  bg: "rgba(0,0,0,0.75)",
  activated: {
    land: 0,
    pop: false,
    gate: 0,
    scn: [],
  },
  characters: [],
  elements: [],
};

var templateElementData = {
  id: "newElement",
  type: "div",
  src: "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/charTemplate.png",
  left: "auto",
  right: "10%",
  bottom: "auto",
  top: "5%",
  zIndex: "3",
  width: "auto",
  height: "30%",
  speed: 0.9,
  shadow: true,
  shadowEffect: "0px",
  brightness: "1.0",
  leftTo: "",
  rightTo: "",
  bottomTo: "",
  topTo: "",
  zIndexTo: "",
  widthTo: "",
  heightTo: "",
  shadowEffectTo: "",
  brightnessTo: "",
  action: "",
};

var templateCharacterData = {
  persona: {
    name: "newCharacter",
    location: "newLocation",
    job: "newJob",
    dialogue: {
      intro: "Hello, I will become a new character.",
    },
    images: {
      default:
        "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/char-template.png",
    },
  },
  pns: {
    position: "absolute",
    left: "10%",
    leftTo: "12%",
    right: "auto",
    rightTo: "auto",
    bottom: 0,
    bottomTo: 0,
    top: "auto",
    topTo: "auto",
    zIndex: 1,
    zIndexTo: 1,
    width: "auto",
    widthTo: "auto",
    height: "80%",
    heightTo: "80%",
    speed: 1,
    blur: "0px",
    blurTo: "0px",
    brightness: "1",
    brightnessTo: "1",
  },
  element: {
    class: "chr-textElement",
    type: "div",
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: "10px 10px",
    borderRadius: "10px",
    borderTop: "0.5px solid rgb(255, 0, 45)",
    borderBottom: "0.5px solid rgb(255, 0, 45)",
    width: "350px",
    height: "auto",
    left: "auto",
    right: "-10%",
    bottom: "auto",
    top: "-6%",
    zIndex: 2,
    position: "absolute",
    border: ".5px solid #ff002d",
    pointer: {
      position: "absolute",
      width: "50px",
      height: "50px",
      borderLeft: "1px solid #ff002d",
      bottom: "-60px",
      left: "-30px",
      zIndex: -5,
      transform: "rotate(45deg)",
    },
  },
  actions: ["chat"],
};

export async function editor(editorActive) {
  // fetch scns.json and load it into the editor
  try {
    const response = await fetch("/src/sudb.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();
    tempData = data;
    currentScenario = data.SUD.Scenarios.Intro;
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }

  //
  if (editorActive === false) {
    // Css
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "editor.css";
    document.head.appendChild(linkElement);
    var editorScreen = document.createElement("div");
    var window = document.getElementById("main");
    editorScreen.setAttribute("id", "editorScreen");
    editorScreen.innerHTML = `
            <div id="editorHeader">
                <div id="editorName">R.R.G</div>
                <textarea id="scenarioEdit" placeholder="Enter Scenario"></textarea>
                <div id="generateScenario" class="seBut">GENERATE</div>
                <div id="deleteScenario" class="seBut">DELETE</div>
                <div></div>
                <div class="seBut" id="mapperBut">MAPPER | OFF</div>
            </div>
            <div id="editorLeftPanel">
                <div id="editorSceneGal" class="selectorContainer">
                    <select id="scenarioDropdown" class="editorDropdown"></select>
                    <div id="scenesContainer">
                        <div class="sceneSelectElement" id="newSceneBut">[ NEW SCENE ]</div>
                    </div>
                </div>
                <div id="editorCharGal" class="selectorContainer">
                    <div id="characterSectHeader" class="sectHeader">CHARACTERS</div>
                    <div id="charactersContainer">
                        <div class="sceneSelectElement" id="newCharBut">[ NEW CHARACTER ]</div>
                    </div>
                </div>
                <div id="editorElementGal" class="selectorContainer">
                    <div id="elementSectHeader" class="sectHeader">ELEMENTS</div>
                    <div id="elsContainer">
                        <div class="sceneSelectElement" id="newElBut">[ NEW ELEMENT ]</div>
                    </div>
                </div>
            </div>
            <div id="editorBody">
                <div id="editorbodyHeader">
                    <div id="ebhLeft">
                        <div id="headerScenarioName"><span id="hsn">Intro</span> - [<span id="hsc"></span></div>
                        <div id="headerSceneName"></div>
                    </div>
                    <div id="ebhRight">
                        <div></div>
                        <div></div>
                        <div class="editorButton" id="loadScene">Reset</div>
                    </div>
                </div>
                <div id="editorbodyDisplay"></div>
                <div id="editorbodyElements">
                    <div id="inScene">
                        <div id="inSceneChars">
                            <div id="editorSceneChs" class="inSceneSections">Characters</div>
                        </div>
                        <div id="inSceneCharsDialogues">
                            <div id="editorSceneDias" class="inSceneCard ">Dialogue</div>
                        </div>
                        <div id="inSceneEls">
                            <div id="editorSceneEls" class="inSceneSections">Elements</div>
                        </div>
                    </div>
                    <div id="aiAsst">
                        <textarea id="editorUserInput" placeholder="AI Asst."></textarea>
                        <div id="aiAsstButtons">
                            <select id="aiAsstSelectScope">
                                <option value="scn">SELECT</option>
                                <option value="genCharacter">&#127912; Character</option>
                                <option value="genElement">&#127912; Element</option>
                                <option value="genDialogue">&#127912; Dialogue</option>
                                <option value="genImages">&#127912; Images</option>
                                <option value="charAttDialogue">&#127822; Dialogue</option>
                                <option value="charAttImages">&#127822; Images</option>
                                <option value="charAttDialogue">&#127822; Type</option>
                                <option value="charAttSource">&#127822; Source</option>
                            </select>
                            <div class="aiAsstBut" id="addToScope">ADD</div>
                            <div class="aiAsstBut" id="aiGenerate">GENERATE</div>
                            <div class="aiAsstBut" id="summonAI">ENTER</div>
                        </div>
                        <div id="editorAiOutput"></div>
                    </div>
                </div>
            </div>
            <div id="editorRightPanel">
                <div id="editorRightPanelHeader">
                    <div id="attMain">Attributes</div>
                    <div id="attLock" class="attBut">🔓</div>
                    <div id="attPreview" class="attBut">▶</div>
                </div>
                <div id="editorRightPanelContent">
                    <div class="attribute">
                        <div class="attLabel">Name:</div>
                        <input class="attInput" type="text"  id="scnAttName" value="">
                    </div>
                    <div class="attribute">
                        <div class="attLabel">Type:</div>
                        <input class="attInput" type="text" id="scnAttType" value="">
                    </div>
                    <div class="attribute">
                        <div class="attLabel">BG:</div>
                        <input class="attInput" type="text" id="scnAttBg" value="">
                    </div>
                    <div class="attribute Attgates">
                        <div class="attLabel">Land:</div>
                        <input class="attInput" type="number" id="scnAttAct1" value="">
                        <div class="attLabel">Pop:</div>
                        <select class="attSelect" id="scnAttAct2" style="text-align: center;">
                            <option value="scn">TRUE</option>
                            <option value="scn" selected>FALSE</option>
                        </select>
                    </div>
                     <div class="attribute Attgates">
                        <div class="attLabel">Gate:</div>
                        <input class="attInput" type="number" id="scnAttAct3" value="">
                        <div class="attLabel">Scn:</div>
                        <input class="attInput" type="number" id="scnAttAct4" value="">
                    </div>
                </div>
                <div id="chElAtt"></div>
                <div id="updateAttributes">
                    <select id="updateScopeSelect">
                        <option value="select">SELECT</option>
                        <option value="scene">SCENE</option>
                        <option value="isolated">ISOLATED</option>
                    </select>
                    <div class="editorButton" id="deleteEl">Delete</div>
                    <div class="editorButton" id="saveScene">Save</div>
                </div>
            </div>
        `;
    window.appendChild(editorScreen);
    document.getElementById("loadScene").addEventListener("click", () => {
      document
        .getElementById("editorbodyDisplay")
        .appendChild(document.querySelector(".currentScene"));
    });

    // Scope Select
    document
      .getElementById("aiAsstSelectScope")
      .addEventListener("change", () => {
        selectScopeTarget = document.getElementById("aiAsstSelectScope").value;
      });

    // Load Scenarios
    var scenarioDropdown = document.getElementById("scenarioDropdown");
    for (const scenario in tempData.SUD.Scenarios) {
      var scenarioDropdownOption = document.createElement("option");
      scenarioDropdownOption.setAttribute("value", scenario);
      scenarioDropdownOption.innerHTML = scenario;
      scenarioDropdown.appendChild(scenarioDropdownOption);
    }

    currentScName = scenarioDropdown.value;

    // Select Scenario
    scenarioDropdown.addEventListener("change", () => {
      var currentScenarioScenes =
        tempData.SUD.Scenarios[scenarioDropdown.value];
      currentScenario = tempData.SUD.Scenarios[scenarioDropdown.value];
      document.getElementById("scenesContainer").innerHTML = "";
      currentScenarioScenes.forEach((scene) => {
        var sceneSelectElement = document.createElement("div");
        sceneSelectElement.setAttribute("class", "sceneSelectElement");
        sceneSelectElement.setAttribute("id", scene.name);
        sceneSelectElement.innerHTML = `${scene.name}`;
        sceneSelectElement.addEventListener("click", (e) => {
          loadScene(e.target.id);
        });
        document
          .getElementById("scenesContainer")
          .appendChild(sceneSelectElement);
      });
      var newSceneBut = document.createElement("div");
      newSceneBut.setAttribute("class", "sceneSelectElement");
      newSceneBut.setAttribute("id", "newSceneBut");
      newSceneBut.innerHTML = `[ NEW SCENE ]`;
      document.getElementById("scenesContainer").appendChild(newSceneBut);
      newScene();
      if (allElementsLoaded) {
        document.querySelector(".currentScene")?.remove();
        loadScene(currentScenarioScenes[0]?.name, 0);
      }
    });

    // Load Scenes
    currentScenario.forEach((scene) => {
      tempData = data;
      var sceneSelectElement = document.createElement("div");
      sceneSelectElement.setAttribute("class", "sceneSelectElement");
      sceneSelectElement.setAttribute("data-position", scene.position - 1);
      sceneSelectElement.setAttribute("id", scene.name);
      sceneSelectElement.innerHTML = `${scene.name}`;
      if (scene.name === "scene1") {
        sceneSelectElement.innerHTML = `${scene.name}<span style="float:right; color: var(--accent)">&#9679;</span>`;
        // <span style="float:right;">O</span>
      } else {
        sceneSelectElement.innerHTML = `${scene.name}`;
      }
      sceneSelectElement.addEventListener("click", (e) => {
        if (
          currentScene.elements.find(({ id }) =>
            id.includes("newElementUnsaved")
          )
        ) {
          // Remove elements from currentScene.elements
          currentScene.elements = currentScene.elements.filter(
            ({ id }) => !id.includes("newElementUnsaved")
          );
        }

        if (
          currentScene.characters.find(({ persona }) =>
            persona.name.includes("newCharacterUnsaved")
          )
        ) {
          // Remove characters from currentScene.characters
          currentScene.characters = currentScene.characters.filter(
            ({ persona }) => !persona.name.includes("newCharacterUnsaved")
          );
        }
        if (allElementsLoaded) {
          var pos = e.target.getAttribute("data-position");
          document.querySelectorAll(".currentScene")[0]?.remove();
          loadScene(e.target.id, pos);
          // loadScene(e, scene.position);
        }
        document.getElementById("headerSceneName").style.color = "yellow";
        setTimeout(() => {
          document.getElementById("headerSceneName").style.color = "#ff002d";
        }, 1000);
      });
      document
        .getElementById("scenesContainer")
        .appendChild(sceneSelectElement);
    });

    // Load Scene
    const loadScene = (e, pos) => {
      newCharIndex = 0;
      newElIndex = 0;
      if (document.querySelector(".currentScene") === null) {
        // newScenario(`${currentScName}`);
        newEditorScenario(`${currentScName}`, pos);
        setTimeout(() => {
          document
            .getElementById("editorbodyDisplay")
            ?.appendChild(document.querySelector(".currentScene"));
        }, 1000);
      }
      document.querySelectorAll(".sceneSelectElement").forEach((el) => {
        document.getElementById("scnAttName").setAttribute("class", "attInput");
        document.getElementById("headerSceneName").removeAttribute("class");
        if (el.id === e) {
          document.getElementById(
            e
          ).innerHTML = `${e}<span style="float:right; color: var(--accent)">&#9679;</span>`;
        } else {
          document.getElementById(el.id).innerHTML = `${el.id}`;
        }
      });
      for (const scene in currentScenario) {
        if (currentScenario[scene].name === e) {
          currentScene = currentScenario[scene];
          document.getElementById(
            "hsc"
          ).innerHTML = `${currentScenario[scene].activated}]`;
          document.getElementById(
            "headerSceneName"
          ).innerHTML = `${currentScenario[scene].name}`;
          document.getElementById(
            "scnAttName"
          ).value = `${currentScenario[scene].name}`;
          document.getElementById(
            "scnAttType"
          ).value = `${currentScenario[scene].type}`;
          document.getElementById(
            "scnAttBg"
          ).value = `${currentScenario[scene].bg}`;
          document.getElementById(
            "scnAttAct1"
          ).value = `${currentScenario[scene].activated.land}`;
          document.getElementById(
            "scnAttAct2"
          ).value = `${currentScenario[scene].activated.pop}`;
          if (currentScenario[scene].activated.pop === true) {
            document.getElementById("scnAttAct2").selectedIndex = 0;
          } else {
            document.getElementById("scnAttAct2").selectedIndex = 1;
          }
          document.getElementById(
            "scnAttAct3"
          ).value = `${currentScenario[scene].activated.gate}`;
          document.getElementById("scnAttAct4").value = `${parseInt(
            currentScenario[scene].activated.scn?.join("")
          )}`;

          document.getElementById("inSceneChars").innerHTML = "";
          document.getElementById("inSceneEls").innerHTML = "";
          // Characters
          currentScenario[scene].characters.forEach((character) => {
            var characterName = document.createElement("div");
            characterName.setAttribute("class", "inSceneCard");
            characterName.setAttribute("id", character.persona.name);
            characterName.innerHTML = `${character.persona.name}`;
            document.getElementById("inSceneChars").appendChild(characterName);
            if ("element" in character) {
              var characterDialogue = document.createElement("div");
              characterDialogue.setAttribute("class", "inSceneCard");
              characterDialogue.setAttribute(
                "id",
                `${character.persona.name}-dia`
              );
              characterDialogue.innerHTML = `${character.persona.name} - ${character.actions[0]}`;
              document.getElementById("inSceneCharsDialogues").innerHTML = "";
              document
                .getElementById("inSceneCharsDialogues")
                .appendChild(characterDialogue);
              characterDialogue.addEventListener("click", (e) => {
                selectDialogue(e.target.id);
                if (character.persona.dialogue.pPosition === "left") {
                  document.getElementById("charAttTalkInput").value = "left";
                } else {
                  document.getElementById("charAttTalkInput").value = "right";
                }
              });
            }
            characterName.addEventListener("click", (e) => {
              selectCharacter(e.target.id);
            });
          });
          // Elements
          currentScenario[scene].elements?.forEach((element) => {
            var elementName = document.createElement("div");
            elementName.setAttribute("class", "inSceneCard");
            elementName.setAttribute("id", element.id);
            elementName.innerHTML = `${element.id}`;
            document.getElementById("inSceneEls").appendChild(elementName);
            elementName.addEventListener("click", (e) => {
              selectElement(e.target.id);
            });
          });
        }
      }
      if (allElementsLoaded === true) {
        document.querySelectorAll(".sceneSelectElementChar").forEach((el) => {
          el.remove();
        });
      }
      if (allElementsLoaded === true) {
        document.querySelectorAll(".sceneSelectElementEl").forEach((el) => {
          el.remove();
        });
      }

      // Load Characters
      tempData.SUD.Characters.forEach((character) => {
        var characterSelectElement = document.createElement("div");
        var newCharacter = document.getElementById("newCharBut");
        newCharacter.innerHTML = `[ NEW CHARACTER ]`;
        characterSelectElement.setAttribute("class", "sceneSelectElementChar");
        characterSelectElement.setAttribute("id", `${character.name}_global`);
        var nameFound = currentScene.characters.find(
          ({ persona }) => persona.name === character.name
        );
        if (nameFound) {
          characterSelectElement.innerHTML = `${character.name}<span style="float:right; color: var(--accent)">&#9679;</span>`;
          characterSelectElement.addEventListener("click", (e) => {
            selectCharacter(e.target.id.replace("_global", ""), character.name);
            //
          });
        } else {
          characterSelectElement.innerHTML = `${character.name}`;
          var addClick = () => {
            newCharIndex++;
            var newCharacterToScene = document.createElement("div");
            newCharacterToScene.setAttribute(
              "class",
              "inSceneCard pendingSaveCard"
            );
            newCharacterToScene.setAttribute(
              "id",
              `newCharacterUnsaved-${newCharIndex}`
            );
            newCharacterToScene.innerHTML = `${character.name}`;
            document
              .getElementById("inSceneChars")
              .appendChild(newCharacterToScene);
            // Add to live scene ////////
            newCharacterToScene.addEventListener("click", (e) => {
              selectCharacter(
                e.target.id.replace("_global", ""),
                character.name
              );
            });
            ////////////////////////////
            characterSelectElement.removeEventListener("click", addClick);
            characterSelectElement.innerHTML = `${character.name}<span style="float:right; color: yellow">&#9679;</span>`;
          };
          characterSelectElement.addEventListener("click", addClick);
          characterSelectElement.setAttribute("data-listener", "true");
        }
        document
          .getElementById("charactersContainer")
          .appendChild(characterSelectElement);
        document
          .getElementById("charactersContainer")
          .appendChild(newCharacter);
      });

      // Load Elements
      tempData.SUD.Elements?.forEach((element) => {
        var elementSelectElement = document.createElement("div");
        var newElement = document.getElementById("newElBut");
        newElement.innerHTML = `[ NEW ELEMENT ]`;
        elementSelectElement.setAttribute("class", "sceneSelectElementEl");
        elementSelectElement.setAttribute("id", `${element.id}_global`);
        var elementFound = currentScene.elements?.find(
          ({ id }) => id === element.id
        );
        if (elementFound) {
          elementSelectElement.innerHTML = `${element.id}<span style="float:right; color: var(--accent)">&#9679;</span>`;
          elementSelectElement.addEventListener("click", (e) => {
            selectElement(e.target.id.replace("_global", ""));
          });
        } else {
          elementSelectElement.innerHTML = `${element.id}`;
          var addClick = () => {
            newElIndex++;
            var newElementToScene = document.createElement("div");
            newElementToScene.setAttribute(
              "class",
              "inSceneCard pendingSaveCard"
            );
            newElementToScene.setAttribute(
              "id",
              `"newElementUnsaved"-${newElIndex}`
            );
            newElementToScene.innerHTML = `${element.id}}`;
            document
              .getElementById("inSceneEls")
              .appendChild(newElementToScene);
            newElementToScene.addEventListener("click", (e) => {
              selectElement(e.target.id.replace("_global", ""), element.id);
            });
            elementSelectElement.removeEventListener("click", addClick);
            elementSelectElement.innerHTML = `${element.id}<span style="float:right; color: var(--accent)">&#9679;</span>`;
          };
          elementSelectElement.addEventListener("click", addClick);
          elementSelectElement.setAttribute("data-listener", "true");
        }
        document
          .getElementById("elsContainer")
          .appendChild(elementSelectElement);
        document.getElementById("elsContainer").appendChild(newElement);
      });
      //   document.getElementById("charactersContainer").innerHTML = "";
      allElementsLoaded = true;
    };

    loadScene("scene1", 0);

    // Load Characters

    // AiAsst
    document.getElementById("summonAI").addEventListener("click", async () => {
      document.getElementById("editorAiOutput").innerHTML = `Loading...`;
      var text = document.getElementById("editorUserInput").value;
      var completion = await openai
        .createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: `Hello. ${text}` }],
          max_tokens: 100,
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(completion);
      document.getElementById("editorUserInput").value = "";
      document.getElementById(
        "editorAiOutput"
      ).innerHTML = `${completion.data.choices[0].message.content}`;
    });

    // Select Character
    const selectCharacter = (e, name1) => {
      var sceneView = document.querySelector(".currentScene");
      // get all child elements of sceneView
      var sceneViewChildren = Array.from(sceneView.childNodes);
      if (!sceneViewChildren.find((el) => el.id.includes(`${`char_${e}`}`))) {
        // add templateElementData to currentScene.elements
        if (e.includes("newCharacterUnsaved-")) {
          templateCharacterData.persona.name = e;
          var newChtoScene = document.createElement("div");
          var newChImg = document.createElement("img");
          newChtoScene.classList.add("sceneElement");
          newChtoScene.setAttribute("id", `char_${e}`);
          newChImg.setAttribute(
            "src",
            tempData.SUD.Characters.find(({ name }) => name === name1)?.images
              .default || templateCharacterData.persona.images.default
          );
          newChtoScene.appendChild(newChImg);
          newChtoScene.style.height = templateCharacterData.pns.height;
          newChtoScene.style.width = templateCharacterData.pns.width;
          newChtoScene.style.left = templateCharacterData.pns.left;
          newChtoScene.style.right = templateCharacterData.pns.right;
          newChtoScene.style.top = templateCharacterData.pns.top;
          newChtoScene.style.position = templateCharacterData.pns.position;
          newChtoScene.style.zIndex = templateCharacterData.pns.zIndex;
          newChtoScene.style.position = "absolute";
          newChtoScene.style.opacity = "1";
          newChImg.style.width = "auto";
          newChImg.style.height = "100%";
          newChImg.style.objectFit = "contain";
          document.querySelector(".currentScene").appendChild(newChtoScene);
          currentScene?.characters.push(templateCharacterData);
        } else {
          templateCharacterData.persona.name = e;
          var newChtoScene2 = document.createElement("div");
          var newChImg2 = document.createElement("img");
          var newCharacterToScene = document.createElement("div");
          newCharacterToScene.setAttribute(
            "class",
            "inSceneCard pendingSaveCard"
          );
          newCharacterToScene.setAttribute(
            "id",
            `${e}`
          );
          newCharacterToScene.innerHTML = `${e}`;
          newCharacterToScene.addEventListener("click", (e) => {
            selectCharacter(e.target.id);
          });
          document.getElementById(`${e}_global`).innerHTML = `${e}<span style="float:right; color: yellow;">&#9679;</span>`;
          document.getElementById("inSceneChars").appendChild(newCharacterToScene);
          newChtoScene2.classList.add("sceneElement");
          newChtoScene2.setAttribute("id", `char_${e}`);
          newChImg2.setAttribute(
            "src",
            tempData.SUD.Characters.find(({ name }) => name === name1)?.images
              .default || templateCharacterData.persona.images.default
          );
          newChtoScene2.appendChild(newChImg2);
          newChtoScene2.style.height = templateCharacterData.pns.height;
          newChtoScene2.style.width = templateCharacterData.pns.width;
          newChtoScene2.style.left = templateCharacterData.pns.left;
          newChtoScene2.style.right = templateCharacterData.pns.right;
          newChtoScene2.style.top = templateCharacterData.pns.top;
          newChtoScene2.style.position = templateCharacterData.pns.position;
          newChtoScene2.style.zIndex = templateCharacterData.pns.zIndex;
          newChtoScene2.style.position = "absolute";
          newChtoScene2.style.opacity = "1";
          newChImg2.style.width = "auto";
          newChImg2.style.height = "100%";
          newChImg2.style.objectFit = "contain";
          document.querySelector(".currentScene").appendChild(newChtoScene2);
          currentScene?.characters.push(templateCharacterData);
        }
      }
      //
      selectedElement = `char_${e}`;
      document.getElementById(`char_${e}`).style.border = "1px solid yellow";
      setTimeout(() => {
        document.getElementById(`char_${e}`).style.border = "none";
      }, 1000);
      for (const character in currentScene.characters) {
        if (currentScene.characters[character].persona.name === e) {
          document.getElementById("chElAtt").innerHTML = `
                <div id="charAttName" class="txtAttribute">
                    <div id="charAttNameLabel">Chr Name:</div>
                    <input type="text" id="charAttNameInput" value="${
                      currentScene.characters[character].persona.name
                    }">
                </div>
                <div id="charAttLoc" class="txtAttribute">
                    <div id="charAttLocLabel">Chr Loc:</div>
                    <input type="text" id="charAttLocInput" value="${
                      currentScene.characters[character].persona.location
                    }">
                </div>
                <div id="charAttJob" class="txtAttribute">
                    <div id="charAttJobLabel">Chr Job:</div>
                    <input type="text" id="charAttJobInput" value="${
                      currentScene.characters[character].persona.job
                    }">
                </div>
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">Dialogue:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${
                      currentScene.characters[character].persona.job
                    }"></select>
                </div>
                <div id="charAttImages" class="txtAttribute">
                    <div id="charAttImageLabel">Images:</div>
                    <select type="text" class="attSelect" id="charAttImgInput" value="${
                      currentScene.characters[character].persona.job
                    }"></select>
                </div>
                <div id="charAttActions" class="txtAttribute">
                    <div id="charAttActionsLabel">Chat:</div>
                    <input type="checkbox" id="charAttActionInput" value="${
                      currentScene.characters[character].persona.name
                    }">
                    <label for="charAttActionInput"></label>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${
                      currentScene.characters[character].pns.left
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.left.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${
                      currentScene.characters[character].pns.right
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.right.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${
                      currentScene.characters[character].pns.bottom
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.bottom
                    )}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${
                      currentScene.characters[character].pns.top
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.top.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${
                      currentScene.characters[character].pns.zIndex
                    }</span>
                    <input type="range" min="1" max="100" value="${Number(
                      currentScene.characters[character].pns.zIndex
                    )}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${
                      currentScene.characters[character].pns.width
                    }</span>
                    <input type="range" min="0" max="100" value="${Number(
                      currentScene.characters[character].pns.width.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${
                      currentScene.characters[character].pns.height
                    }</span>
                    <input type="range" min="0" max="200" value="${Number(
                      currentScene.characters[character].pns.height.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="heightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Speed:</div>
                    <span class="sliderAttValue" id="speedValue">${
                      currentScene.characters[character].pns.speed
                    }</span>
                    <input type="range" min="0.0" max="10.0" value="${Number(
                      currentScene.characters[character].pns.speed
                    )}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
                </div>
                <div class="sliderAttribute">
                    <div>Blur:</div>
                    <span class="sliderAttValue" id="blurValue">${
                      currentScene.characters[character].pns.blur
                    }</span>
                    <input type="range" min="0" max="50" value="${Number(
                      currentScene.characters[character].pns.blur.replace(
                        "px",
                        ""
                      )
                    )}" class="slider" id="blurSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright:</div>
                    <span class="sliderAttValue" id="brightnessValue">${
                      currentScene.characters[character].pns.brightness
                    }</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(
                      currentScene.characters[character].pns.brightness
                    )}" class="slider" id="brightnessSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Left To:</div>
                    <span class="sliderAttValue" id="leftToValue">${
                      currentScene.characters[character].pns.leftTo
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.leftTo.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="leftToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right To:</div>
                    <span class="sliderAttValue" id="rightToValue">${
                      currentScene.characters[character].pns.rightTo
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.rightTo.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="rightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom To:</div>
                    <span class="sliderAttValue" id="bottomToValue">${
                      currentScene.characters[character].pns.bottomTo
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.bottomTo
                    )}" class="slider" id="bottomToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Top To:</div>
                    <span class="sliderAttValue" id="topToValue">${
                      currentScene.characters[character].pns.topTo
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.topTo?.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="topToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex To:</div>
                    <span class="sliderAttValue" id="zIndexToValue">${
                      currentScene.characters[character].pns.zIndexTo
                    }</span>
                    <input type="range" min="0" max="100" value="${Number(
                      currentScene.characters[character].pns.zIndexTo
                    )}" class="slider" id="zIndexToSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width To:</div>
                    <span class="sliderAttValue" id="widthToValue">${
                      currentScene.characters[character].pns.widthTo
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[character].pns.width.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="widthToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height To:</div>
                    <span class="sliderAttValue" id="heightToValue">${
                      currentScene.characters[character].pns.heightTo
                    }</span>
                    <input type="range" min="0" max="200" value="${Number(
                      currentScene.characters[character].pns.heightTo?.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="heightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Blur To:</div>
                    <span class="sliderAttValue" id="blurToValue">${
                      currentScene.characters[character].pns.blurTo
                    }</span>
                    <input type="range" min="0" max="100" value="${Number(
                      currentScene.characters[character].pns.blurTo?.replace(
                        "px",
                        ""
                      )
                    )}" class="slider" id="blurToSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright To:</div>
                    <span class="sliderAttValue" id="brightnessToValue">${
                      currentScene.characters[character].pns.brightnessTo
                    }</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(
                      currentScene.characters[character].pns.brightnessTo
                    )}" class="slider" id="brightnessToSlider" data-valueType="##">
                </div>
            `;

          // Clear user input
          document.querySelector("#editorUserInput").innerHTML = "";

          // Characters
          // Change Attribute Value onload
          if (currentScene.characters[character].actions[0] === "chat") {
            document.querySelector("#charAttActionInput").checked = true;
          }
          document.querySelectorAll(".sliderAttValue").forEach((el) => {
            if (el.innerHTML === "auto") {
              document.getElementById(
                el.id.replace("Value", "Slider")
              ).value = 101;
              document.querySelector(
                `#${el.id.replace("Value", "Slider")}`
              ).style.pointerEvents = "none";
            }
            if (el.innerHTML === "") {
              document.getElementById(el.id.replace("Value", "Slider")).value =
                -101;
              document.getElementById(el.id).innerHTML = "-";
            }
          });

          // Checkbox Change
          document.querySelectorAll(".attBut").forEach((el) => {
            el.style.display = "block";
          });
          document
            .querySelector("#charAttActionInput")
            .addEventListener("change", (e) => {
              if (e.target.checked) {
                currentScene.characters[character].actions[0] = "chat";
                document.getElementById(
                  `${currentScene.characters[character].persona.name}_dialogue`
                ).style.display = "block";
                // Update Temp Data
                tempData.SUD.Scenarios[currentScName].forEach((scene) => {
                  scene.characters.forEach((character) => {
                    if (
                      character.persona.name ===
                      selectedElement.replace("char_", "")
                    ) {
                      character.actions[0] = "chat";
                    }
                  });
                });
                // Update Temp Data End
              } else {
                currentScene.characters[character].actions[0] = "none";
                document.getElementById(
                  `${currentScene.characters[character].persona.name}_dialogue`
                ).style.display = "none";
                // Update Temp Data
                tempData.SUD.Scenarios[currentScName].forEach((scene) => {
                  scene.characters.forEach((character) => {
                    if (
                      character.persona.name ===
                      selectedElement.replace("char_", "")
                    ) {
                      character.actions[0] = "";
                    }
                  });
                });
                // Update Temp Data End
              }
            });

          // Locked
          var locked = false;
          document.querySelector("#attLock").addEventListener("click", () => {
            if (locked === false) {
              locked = true;
              document.querySelector("#attLock").innerHTML = "🔒";
              return;
            } else {
              currentScene.characters[character].locked = false;
              document.querySelector("#attLock").innerHTML = "🔓";
              locked = false;
              return;
            }
          });

          // Change Attribute Value on slide
          document.querySelectorAll(".slider").forEach((slider) => {
            var tempchange = tempData.SUD.Scenarios[currentScName]
              .find(({ name }) => name === currentScene.name)
              .characters.find(
                ({ persona }) =>
                  persona.name === selectedElement.replace("char_", "")
              );
            //
            slider.addEventListener("input", (e) => {
              document.querySelector(
                `#${e.target.id.replace("Slider", "Value")}`
              ).innerHTML = e.target.value;
              if (
                document.getElementById("updateScopeSelect").value === "scene"
              ) {
                tempchange.pns[e.target.id.replace("Slider", "")] =
                  e.target.value;
              } else {
                // Save to Characters
              }

              if (e.target.value === "101") {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).innerHTML = "auto";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchange.pns[e.target.id.replace("Slider", "")] =
                    e.target.value;
                } else {
                  // Save to Characters
                }
              }

              if (e.target.value === "-101") {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).innerHTML = "";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchange.pns[e.target.id.replace("Slider", "")] =
                    e.target.value;
                } else {
                  // Save to Characters
                }
              }

              if (
                `${e.target.value}%` !=
                  currentScene.characters[character].pns[
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "%"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchange.pns[e.target.id.replace("Slider", "")] =
                    e.target.value;
                } else {
                  // Save to Characters
                }
              } else if (
                `${e.target.value}px` !=
                  currentScene.characters[character].pns[
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "px"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchange.pns[e.target.id.replace("Slider", "")] =
                    e.target.value;
                } else {
                  // Save to Characters
                }
              } else if (
                Number(e.target.value) !=
                  currentScene.characters[character].pns[
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "#%"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchange.pns[e.target.id.replace("Slider", "")] =
                    e.target.value;
                } else {
                  // Save to Characters
                }
              } else if (
                e.target.value !=
                  currentScene.characters[character].pns[
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "##"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                // Update Temp Data
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchange.pns[e.target.id.replace("Slider", "")] =
                    e.target.value;
                } else {
                  // Save to Characters
                }
              } else {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "#ff002d";
                // Update Temp Data
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchange.pns[e.target.id.replace("Slider", "")] =
                    e.target.value;
                } else {
                  // Save to Characters
                }
                // Update Temp Data End
              }

              //////////////////////
              // Real Time Edit View
              //////////////////////

              var characterElSel = document.getElementById(
                `${selectedElement}`
              );
              // Left
              characterElSel.style.left =
                document.getElementById("leftValue").innerHTML + "%";
              // Right
              characterElSel.style.right =
                document.getElementById("rightValue").innerHTML + "%";
              // Bottom
              characterElSel.style.bottom =
                document.getElementById("bottomValue").innerHTML + "%";
              // Top
              characterElSel.style.top =
                document.getElementById("topValue").innerHTML + "%";
              // zIndex
              characterElSel.style.zIndex =
                document.getElementById("zIndexValue").innerHTML;
              // Width
              characterElSel.style.width =
                document.getElementById("widthValue").innerHTML + "%";
              // Height
              characterElSel.style.height =
                document.getElementById("heightValue").innerHTML + "%";
              // Filter Blur & Brightness
              document.querySelector(
                `#char_${currentScene.characters[character].persona.name} img:first-child`
              ).style.filter = `blur(${
                document.getElementById("blurValue").innerHTML
              }px) brightness(${
                document.getElementById("brightnessValue").innerHTML
              })`;

              if (locked === true) {
                // Left
                document.getElementById("leftToSlider").value =
                  document.getElementById("leftSlider").value;
                document.getElementById("leftToValue").innerHTML =
                  document.getElementById("leftSlider").value;
                // Right
                document.getElementById("rightToSlider").value =
                  document.getElementById("rightSlider").value;
                document.getElementById("rightToValue").innerHTML =
                  document.getElementById("rightSlider").value;
                // Bottom
                document.getElementById("bottomToSlider").value =
                  document.getElementById("bottomSlider").value;
                document.getElementById("bottomToValue").innerHTML =
                  document.getElementById("bottomSlider").value;
                // Top
                document.getElementById("topToSlider").value =
                  document.getElementById("topSlider").value;
                document.getElementById("topToValue").innerHTML =
                  document.getElementById("topSlider").value;
                // zIndex
                document.getElementById("zIndexToSlider").value =
                  document.getElementById("zIndexSlider").value;
                document.getElementById("zIndexToValue").innerHTML =
                  document.getElementById("zIndexSlider").value;
                // Width
                document.getElementById("widthToSlider").value =
                  document.getElementById("widthSlider").value;
                document.getElementById("widthToValue").innerHTML =
                  document.getElementById("widthSlider").value;
                // Height
                document.getElementById("heightToSlider").value =
                  document.getElementById("heightSlider").value;
                document.getElementById("heightToValue").innerHTML =
                  document.getElementById("heightSlider").value;
                // Blur
                document.getElementById("blurToSlider").value =
                  document.getElementById("blurSlider").value;
                document.getElementById("blurToValue").innerHTML =
                  document.getElementById("blurSlider").value;
                // Brightness
                document.getElementById("brightnessToSlider").value =
                  document.getElementById("brightnessSlider").value;
                document.getElementById("brightnessToValue").innerHTML =
                  document.getElementById("brightnessSlider").value;
              }
            });
          });

          // Gsap Preview
          document
            .getElementById("attPreview")
            .addEventListener("click", function () {
              // gsap from to
              gsap.fromTo(
                `#${selectedElement}`,
                {
                  left: document.getElementById("leftSlider").value + "%",
                  bottom: document.getElementById("bottomValue").value + "%",
                  // top: document.getElementById("topValue").innerHTML,
                  zIndex: document.getElementById("zIndexSlider").value,
                  height: document.getElementById("heightSlider").value + "%",
                  filter: `blur(${
                    document.getElementById("blurSlider").value
                  }px) brightness(${
                    document.getElementById("brightnessSlider").value
                  })`,
                },
                {
                  duration: document.getElementById("speedSlider").value,
                  left: document.getElementById("leftToSlider").value + "%",
                  bottom: document.getElementById("bottomToSlider").value + "%",
                  zIndex: document.getElementById("zIndexToSlider").value,
                  height: document.getElementById("heightToSlider").value + "%",
                  filter: `blur(${
                    document.getElementById("blurToSlider").value
                  }px) brightness(${
                    document.getElementById("brightnessToSlider").value
                  })`,
                }
              );
            });

          var characterElSel = document.getElementById(
            `char_${currentScene.characters[character].persona.name}`
          );
          // Left
          characterElSel.style.left =
            document.getElementById("leftValue").innerHTML;
          // Right
          characterElSel.style.right =
            document.getElementById("rightValue").innerHTML + "%";
          // Bottom
          characterElSel.style.bottom =
            document.getElementById("bottomValue").innerHTML + "%";
          // Top
          characterElSel.style.top =
            document.getElementById("topValue").innerHTML + "%";
          // zIndex
          characterElSel.style.zIndex =
            document.getElementById("zIndexValue").innerHTML;
          // Width
          characterElSel.style.width =
            document.getElementById("widthValue").innerHTML + "%";
          // Height
          characterElSel.style.height =
            document.getElementById("heightValue").innerHTML;
          // Filter Blur & Brightness
          document.querySelector(
            `#char_${currentScene.characters[character].persona.name} img:first-child`
          ).style.filter = `blur(${
            document.getElementById("blurValue").innerHTML
          }) brightness(${
            document.getElementById("brightnessValue").innerHTML
          })`;

          // Load Character Dialogues
          var dialogueDropdown = document.querySelector("#charAttTalkInput");
          for (const dialogue in currentScene.characters[character].persona
            .dialogue) {
            // console.log("dialogies", currentScene.characters[character].persona.dialogue[dialogue].substring(0, 16));
            var dialogueOption = document.createElement("option");
            dialogueOption.setAttribute("value", dialogue);
            dialogueOption.innerHTML = dialogue;
            dialogueDropdown.appendChild(dialogueOption);
          }

          // load character images
          var imageDropdown = document.querySelector("#charAttImgInput");
          for (const image in currentScene.characters[character].persona
            .images) {
            // console.log("images", data.SUD.Characters[character].images[image].substring(0, 16));
            var imageOption = document.createElement("option");
            imageOption.setAttribute(
              "value",
              currentScene.characters[character].persona.images[image]
            );
            imageOption.innerHTML = image;
            imageDropdown.appendChild(imageOption);
          }

          // Select Character Dialogues
          // var dialogueDropdown2 = document.querySelector("#charAttTalkInput");
          document
            .querySelector("#charAttTalkInput")
            .addEventListener("change", (e) => {
              document.querySelector(
                `#char_${currentScene.characters[character].persona.name} #${currentScene.characters[character].persona.name}_dialogue`
              ).innerHTML = `<p id="${
                currentScene.characters[character].persona.name
              }_dialogue">${
                currentScene.characters[character].persona.dialogue[
                  e.target.value
                ] || `${e.target.value}`
              }</p>`;
              var dialoguePointer = document.createElement("div");
              dialoguePointer.classList.add("dialoguePointer");
              dialoguePointer.style.position = "absolute";
              dialoguePointer.style.width =
                currentScene.characters[character].element.pointer.width;
              dialoguePointer.style.height =
                currentScene.characters[character].element.pointer.height;
              dialoguePointer.style.bottom =
                currentScene.characters[character].element.pointer.bottom;
              dialoguePointer.style.left =
                currentScene.characters[character].element.pointer.left;
              dialoguePointer.style.zIndex =
                currentScene.characters[character].element.pointer.zIndex;
              dialoguePointer.style.transform =
                currentScene.characters[character].element.pointer.transform;
              dialoguePointer.style.borderLeft =
                currentScene.characters[character].element.pointer.borderleft;
              // append pointer
              document
                .querySelector(
                  `#${currentScene.characters[character].persona.name}_dialogue`
                )
                .appendChild(dialoguePointer);
              document.getElementById("editorUserInput").value = `${
                currentScene.characters[character].persona.dialogue[
                  e.target.value
                ] || `${e.target.value}`
              }`;
            });

          // Select Character Images
          document
            .querySelector("#charAttImgInput")
            .addEventListener("change", (e) => {
              document.querySelector(
                `#char_${currentScene.characters[character].persona.name} img:first-child`
              ).src = e.target.value;
              document.getElementById(
                "editorUserInput"
              ).value = `${e.target.value}`;
            });
        }
      }
    };

    // Select Element
    const selectElement = (e, name1) => {
      var sceneView = document.querySelector(".currentScene");
      // get all child elements of sceneView
      var sceneViewChildren = Array.from(sceneView.childNodes);
      if (!sceneViewChildren.find((el) => el.id.includes(`${`${e}-cont`}`))) {
        // add templateElementData to currentScene.elements
        if (e.includes("newElementUnsaved-")) {
          templateElementData.id = e;
          var newEltoScene = document.createElement("div");
          var newElImg = document.createElement("img");
          newEltoScene.classList.add("sceneElement");
          newEltoScene.setAttribute("id", `${e}-cont`);
          newElImg.setAttribute("id", `${e}-src`);
          newElImg.setAttribute(
            "src",
            tempData.SUD.Elements.find(({ id }) => id === name1)?.src ||
              templateElementData.src
          );
          newEltoScene.appendChild(newElImg);
          newEltoScene.style.height = templateElementData.height;
          newEltoScene.style.width = templateElementData.width;
          newEltoScene.style.left = templateElementData.left;
          newEltoScene.style.right = templateElementData.right;
          newEltoScene.style.top = templateElementData.top;
          newEltoScene.style.position = templateElementData.position;
          newEltoScene.style.zIndex = templateElementData.zIndex;
          newEltoScene.style.position = "absolute";
          newEltoScene.style.opacity = "1";
          newElImg.style.width = "auto";
          newElImg.style.height = "100%";
          newElImg.style.objectFit = "contain";
          document.querySelector(".currentScene").appendChild(newEltoScene);
          console.log("new element added to scene", currentScene.elements);
          currentScene?.elements.push(templateElementData);
        } else {
          templateElementData.id = e;
          var newEltoScene2 = document.createElement("div");
          var newElImg2 = document.createElement("img");
          var newElementToScene2 = document.createElement("div");
          newElementToScene2.setAttribute(
            "class",
            "inSceneCard pendingSaveCard"
          );
          newElementToScene2.setAttribute(
            "id",
            `${e}`
          );
          newElementToScene2.innerHTML = `${e}`;
          newElementToScene2.addEventListener("click", (e) => {
            selectElement(e.target.id, name1);
          });
          document.getElementById(`${e}_global`).innerHTML = `${e}<span style="float:right; color: yellow;">&#9679;</span>`;
          document.getElementById("inSceneEls").appendChild(newElementToScene2);
          newEltoScene2.classList.add("sceneElement");
          newEltoScene2.setAttribute("id", `${e}-cont`);
          console.log("name1", e);
          newElImg2.setAttribute(
            "src",
            tempData.SUD.Elements.find(({ id }) => id === e)?.src || templateElementData.src
          );
          newEltoScene2.appendChild(newElImg2);
          newEltoScene2.style.height = templateElementData.height;
          newEltoScene2.style.width = templateElementData.width;
          newEltoScene2.style.left = templateElementData.left;
          newEltoScene2.style.right = templateElementData.right;
          newEltoScene2.style.top = templateElementData.top;
          newEltoScene2.style.position = templateElementData.position;
          newEltoScene2.style.zIndex = templateElementData.zIndex;
          newEltoScene2.style.position = "absolute";
          newEltoScene2.style.opacity = "1";
          newElImg2.style.width = "auto";
          newElImg2.style.height = "100%";
          newElImg2.style.objectFit = "contain";
          document.querySelector(".currentScene").appendChild(newEltoScene2);
          currentScene?.elements.push(templateElementData);
        }
      }
      //

      //
      selectedElement = `${e}-cont`;
      document.getElementById(selectedElement).style.border =
        "1px solid yellow";
      setTimeout(() => {
        document.getElementById(selectedElement).style.border = "none";
      }, 1000);
      for (const element in currentScene.elements) {
        if (currentScene.elements[element].id === e) {
          document.getElementById("chElAtt").innerHTML = `
            <div id="charAttName" class="txtAttribute">
                <div id="charAttNameLabel">Ele Name:</div>
                <input type="text" id="charAttNameInput" value="${
                  currentScene.elements[element].id
                }">
            </div>
            <div id="charAttJob" class="txtAttribute">
                <div id="charAttJobLabel">Ele Action:</div>
                <input type="text" id="charAttJobInput" value="${
                  currentScene.elements[element].action
                }">
            </div>
            <div id="charAttDialogue" class="txtAttribute">
                <div id="charAttTalkLabel">Type:</div>
                <select type="text" class="attSelect" id="charAttTalkInput" value="${
                  currentScene.elements[element].innerType
                }">
                  <option value="">Image</option>
                  <option value="">Video</option>
                  <option value="">Audio</option>
                </select>
            </div>
            <div id="charAttSource" class="txtAttribute">
                <div id="charAttImageLabel">Source:</div>
                <input type="text" class="attSelect" id="charAttImgInput" value="${
                  currentScene.elements[element].src
                }">
            </div>
            <div id="charAttActions" class="txtAttribute">
                <div id="charAttActionsLabel">Shadow:</div>
                <input type="checkbox" id="charAttActionInput" value="">
                <label for="charAttActionInput"></label>
            </div>
            <div class="sliderAttribute">
                <div>Left:</div>
                <span class="sliderAttValue" id="leftValue">${
                  currentScene.elements[element].left
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].left.replace("%", "")
                )}" class="slider" id="leftSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right:</div>
                <span class="sliderAttValue" id="rightValue">${
                  currentScene.elements[element].right
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].right
                )}" class="slider" id="rightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom:</div>
                <span class="sliderAttValue" id="bottomValue">${
                  currentScene.elements[element].bottom
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].bottom
                )}" class="slider" id="bottomSlider" data-valueType="#%">
            </div>
            <div class="sliderAttribute">
                <div>Top:</div>
                <span class="sliderAttValue" id="topValue">${
                  currentScene.elements[element].top
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].top.replace("%", "")
                )}" class="slider" id="topSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex:</div>
                <span class="sliderAttValue" id="zIndexValue">${
                  currentScene.elements[element].zIndex
                }</span>
                <input type="range" min="1" max="100" value="${Number(
                  currentScene.elements[element].zIndex
                )}" class="slider" id="zIndexSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width:</div>
                <span class="sliderAttValue" id="widthValue">${
                  currentScene.elements[element].width
                }</span>
                <input type="range" min="0" max="100" value="${Number(
                  currentScene.elements[element].width.replace("%", "")
                )}" class="slider" id="widthSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height:</div>
                <span class="sliderAttValue" id="heightValue">${
                  currentScene.elements[element].height
                }</span>
                <input type="range" min="0" max="200" value="${Number(
                  currentScene.elements[element].height.replace("%", "")
                )}" class="slider" id="heightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Speed:</div>
                <span class="sliderAttValue" id="speedValue">${
                  currentScene.elements[element].speed
                }</span>
                <input type="range" min="0.0" max="10.0" value="${Number(
                  currentScene.elements[element].speed
                )}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
            </div>
            <div class="sliderAttribute">
                <div>Blur:</div>
                <span class="sliderAttValue" id="blurValue">${
                  currentScene.elements[element].shadowEffect
                }</span>
                <input type="range" min="0" max="50" value="${Number(
                  currentScene.elements[element].shadowEffect.replace("px", "")
                )}" class="slider" id="blurSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright:</div>
                <span class="sliderAttValue" id="brightnessValue">${
                  currentScene.elements[element].brightness
                }</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(
                  currentScene.elements[element].brightness
                )}" class="slider" id="brightnessSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Left To:</div>
                <span class="sliderAttValue" id="leftToValue">${
                  currentScene.elements[element].leftTo
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].leftTo
                )}" class="slider" id="leftToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right To:</div>
                <span class="sliderAttValue" id="rightToValue">${
                  currentScene.elements[element].rightTo
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].rightTo.replace("%", "")
                )}" class="slider" id="rightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom To:</div>
                <span class="sliderAttValue" id="bottomToValue">${
                  currentScene.elements[element].bottomTo
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].bottomTo
                )}" class="slider" id="bottomToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Top To:</div>
                <span class="sliderAttValue" id="topToValue">${
                  currentScene.elements[element].topTo
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].topTo?.replace("%", "")
                )}" class="slider" id="topToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex To:</div>
                <span class="sliderAttValue" id="zIndexToValue">${
                  currentScene.elements[element].zIndexTo
                }</span>
                <input type="range" min="0" max="100" value="${Number(
                  currentScene.elements[element].zIndexTo
                )}" class="slider" id="zIndexToSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width To:</div>
                <span class="sliderAttValue" id="widthToValue">${
                  currentScene.elements[element].widthTo
                }</span>
                <input type="range" min="-101" max="101" value="${Number(
                  currentScene.elements[element].widthTo.replace("%", "")
                )}" class="slider" id="widthToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height To:</div>
                <span class="sliderAttValue" id="heightToValue">${
                  currentScene.elements[element].heightTo
                }</span>
                <input type="range" min="0" max="200" value="${Number(
                  currentScene.elements[element].heightTo?.replace("%", "")
                )}" class="slider" id="heightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Blur To:</div>
                <span class="sliderAttValue" id="blurToValue">${
                  currentScene.elements[element].shadowEffectTo
                }</span>
                <input type="range" min="0" max="100" value="${Number(
                  currentScene.elements[element].shadowEffectTo?.replace(
                    "px",
                    ""
                  )
                )}" class="slider" id="blurToSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright To:</div>
                <span class="sliderAttValue" id="brightnessToValue">${
                  currentScene.elements[element].brightnessTo
                }</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(
                  currentScene.elements[element].brightnessTo
                )}" class="slider" id="brightnessToSlider" data-valueType="##">
            </div>
        `;

          // Clear user input
          document.querySelector("#editorUserInput").innerHTML = "";

          // Change Attribute Value onload
          if (currentScene.elements[element].shadow === true) {
            document.querySelector("#charAttActionInput").checked = true;
          }
          document.querySelectorAll(".sliderAttValue").forEach((el) => {
            if (el.innerHTML === "auto") {
              document.getElementById(
                el.id.replace("Value", "Slider")
              ).value = 101;
              document.querySelector(
                `#${el.id.replace("Value", "Slider")}`
              ).style.pointerEvents = "none";
            }
            if (el.innerHTML === "") {
              document.getElementById(el.id.replace("Value", "Slider")).value =
                -101;
              document.getElementById(el.id).innerHTML = "-";
            }
          });

          var ElSel = document.getElementById(
            `${currentScene.elements[element].id}-cont`
          );
          // Left
          ElSel.style.left = document.getElementById("leftValue").innerHTML;
          // Right
          ElSel.style.right =
            document.getElementById("rightValue").innerHTML + "%";
          // Bottom
          ElSel.style.bottom =
            document.getElementById("bottomValue").innerHTML + "%";
          // Top
          ElSel.style.top = document.getElementById("topValue").innerHTML + "%";
          // zIndex
          ElSel.style.zIndex = document.getElementById("zIndexValue").innerHTML;
          // Width
          ElSel.style.width =
            document.getElementById("widthValue").innerHTML + "%";
          // Height
          ElSel.style.height = document.getElementById("heightValue").innerHTML;
          // Filter Blur & Brightness
          document.querySelector(
            `#${currentScene.elements[element].id}-cont img:first-child`
          ).style.filter = `blur(${
            document.getElementById("blurValue").innerHTML
          }) brightness(${
            document.getElementById("brightnessValue").innerHTML
          })`;

          //   // Checkbox Change
          //   document.querySelectorAll(".attBut").forEach((el) => {
          //     el.style.display = "block";
          //   });
          //   document
          //     .querySelector("#charAttActionInput")
          //     .addEventListener("change", (e) => {
          //       if (e.target.checked) {
          //         currentScene.characters[character].actions[0] = "chat";
          //         document.getElementById(
          //           `${currentScene.characters[character].persona.name}_dialogue`
          //         ).style.display = "block";
          //       } else {
          //         currentScene.characters[character].actions[0] = "none";
          //         document.getElementById(
          //           `${currentScene.characters[character].persona.name}_dialogue`
          //         ).style.display = "none";
          //       }
          //     });

          // Locked
          var locked = false;
          document.querySelector("#attLock").addEventListener("click", () => {
            if (locked === false) {
              locked = true;
              document.querySelector("#attLock").innerHTML = "🔒";
              return;
            } else {
              currentScene.elements[element].locked = false;
              document.querySelector("#attLock").innerHTML = "🔓";
              locked = false;
              return;
            }
          });

          // Change Attribute Value on slide
          document.querySelectorAll(".slider").forEach((slider) => {
            var tempchangeEl = tempData.SUD.Scenarios[currentScName]
              .find(({ name }) => name === currentScene.name)
              .elements.find(
                ({ id }) => id === selectedElement.replace("-cont", "")
              );
            //
            slider.addEventListener("input", (e) => {
              document.querySelector(
                `#${e.target.id.replace("Slider", "Value")}`
              ).innerHTML = e.target.value;
              if (
                document.getElementById("updateScopeSelect").value === "scene"
              ) {
                tempchangeEl[e.target.id.replace("Slider", "")] =
                  e.target.value;
              }

              if (e.target.value === "101") {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).innerHTML = "auto";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchangeEl[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
              }
              if (e.target.value === "-101") {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).innerHTML = "";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchangeEl[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
              }
              if (
                `${e.target.value}%` !=
                  currentScene.elements[element][
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "%"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchangeEl[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
              } else if (
                `${e.target.value}px` !=
                  currentScene.elements[element][
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "px"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchangeEl[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
              } else if (
                Number(e.target.value) !=
                  currentScene.elements[element][
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "#%"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchangeEl[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
              } else if (
                e.target.value !=
                  currentScene.elements[element][
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "##"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchangeEl[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
              } else {
                console.log("not changed");
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "#ff002d";
                // Update Temp Data
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  tempchangeEl[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
                // Update Temp Data End
              }

              //////////////////////
              // Real Time Edit View
              //////////////////////

              var ElSel = document.getElementById(`${selectedElement}`);
              // Left
              ElSel.style.left =
                document.getElementById("leftValue").innerHTML + "%";
              // Right
              ElSel.style.right =
                document.getElementById("rightValue").innerHTML + "%";
              // Bottom
              ElSel.style.bottom =
                document.getElementById("bottomValue").innerHTML + "%";
              // Top
              ElSel.style.top =
                document.getElementById("topValue").innerHTML + "%";
              // zIndex
              ElSel.style.zIndex =
                document.getElementById("zIndexValue").innerHTML;
              // Width
              ElSel.style.width =
                document.getElementById("widthValue").innerHTML + "%";
              // Height
              ElSel.style.height =
                document.getElementById("heightValue").innerHTML + "%";
              // Filter Blur & Brightness
              document.querySelector(
                `#${currentScene.elements[element].id}-cont img:first-child`
              ).style.filter = `blur(${
                document.getElementById("blurValue").innerHTML
              }px) brightness(${
                document.getElementById("brightnessValue").innerHTML
              })`;

              if (locked === true) {
                // Left
                document.getElementById("leftToSlider").value =
                  document.getElementById("leftSlider").value;
                document.getElementById("leftToValue").innerHTML =
                  document.getElementById("leftSlider").value;
                // Right
                document.getElementById("rightToSlider").value =
                  document.getElementById("rightSlider").value;
                document.getElementById("rightToValue").innerHTML =
                  document.getElementById("rightSlider").value;
                // Bottom
                document.getElementById("bottomToSlider").value =
                  document.getElementById("bottomSlider").value;
                document.getElementById("bottomToValue").innerHTML =
                  document.getElementById("bottomSlider").value;
                // Top
                document.getElementById("topToSlider").value =
                  document.getElementById("topSlider").value;
                document.getElementById("topToValue").innerHTML =
                  document.getElementById("topSlider").value;
                // zIndex
                document.getElementById("zIndexToSlider").value =
                  document.getElementById("zIndexSlider").value;
                document.getElementById("zIndexToValue").innerHTML =
                  document.getElementById("zIndexSlider").value;
                // Width
                document.getElementById("widthToSlider").value =
                  document.getElementById("widthSlider").value;
                document.getElementById("widthToValue").innerHTML =
                  document.getElementById("widthSlider").value;
                // Height
                document.getElementById("heightToSlider").value =
                  document.getElementById("heightSlider").value;
                document.getElementById("heightToValue").innerHTML =
                  document.getElementById("heightSlider").value;
                // Blur
                document.getElementById("blurToSlider").value =
                  document.getElementById("blurSlider").value;
                document.getElementById("blurToValue").innerHTML =
                  document.getElementById("blurSlider").value;
                // Brightness
                document.getElementById("brightnessToSlider").value =
                  document.getElementById("brightnessSlider").value;
                document.getElementById("brightnessToValue").innerHTML =
                  document.getElementById("brightnessSlider").value;
              }
            });
          });

          // Change element type on select

          // // Load Element Type
          // var dialogueDropdown = document.querySelector("#charAttTalkInput")
          // for (const dialogue in currentScene.elements[element].innerType) {
          //     // console.log("dialogies", currentScene.characters[character].persona.dialogue[dialogue].substring(0, 16));
          //     var dialogueOption = document.createElement("option");
          //     dialogueOption.setAttribute("value", dialogue);
          //     dialogueOption.innerHTML = dialogue;
          //     dialogueDropdown.appendChild(dialogueOption);
          // }

          // // load Element images
          // var imageDropdown = document.querySelector("#charAttImgInput")
          // for (const image in currentScene.elements[element].src) {
          //     // console.log("images", data.SUD.Characters[character].images[image].substring(0, 16));
          //     var imageOption = document.createElement("option");
          //     imageOption.setAttribute("value", currentScene.elements[element].persona.images[image]);
          //     imageOption.innerHTML = image
          //     imageDropdown.appendChild(imageOption);
          // }

          // Select Character Dialogues
          // var dialogueDropdown = document.querySelector("#charAttTalkInput")
          // document.querySelector("#charAttTalkInput").addEventListener("change", (e) => {
          //     document.querySelector(`#char_${currentScene.characters[character].persona.name} #${currentScene.characters[character].persona.name}_dialogue`).innerHTML = `<p id="${currentScene.characters[character].persona.name}_dialogue">${currentScene.characters[character].persona.dialogue[e.target.value]}</p>`;
          //     var dialoguePointer = document.createElement("div");
          //     dialoguePointer.classList.add("dialoguePointer");
          //     dialoguePointer.style.position = "absolute";
          //     dialoguePointer.style.width = currentScene.characters[character].element.pointer.width;
          //     dialoguePointer.style.height = currentScene.characters[character].element.pointer.height;
          //     dialoguePointer.style.bottom = currentScene.characters[character].element.pointer.bottom;
          //     dialoguePointer.style.left = currentScene.characters[character].element.pointer.left;
          //     dialoguePointer.style.zIndex = currentScene.characters[character].element.pointer.zIndex;
          //     dialoguePointer.style.transform = currentScene.characters[character].element.pointer.transform;
          //     dialoguePointer.style.borderLeft = currentScene.characters[character].element.pointer.borderleft;
          //     // append pointer
          //     document.querySelector(`#${currentScene.characters[character].persona.name}_dialogue`).appendChild(dialoguePointer);
          //     document.getElementById("editorUserInput").value = `${currentScene.characters[character].persona.dialogue[e.target.value]}`;
          // });

          // Select Character Images
          // document.querySelector("#charAttImgInput").addEventListener("change", (e) => {
          //     document.querySelector(`#char_${currentScene.characters[character].persona.name} img:first-child`).src = e.target.value;
          //     document.getElementById("editorUserInput").value = `${e.target.value}`;
          // });
        }
      }
    };

    // Select Character Dialogue
    const selectDialogue = (e) => {
      selectedElement = `${e}`;
      document.getElementById(selectedElement).style.color = "yellow";
      setTimeout(() => {
        document.getElementById(selectedElement).style.color = "#ff002d";
      }, 1000);
      for (const element in currentScene.characters) {
        if ("element" in currentScene.characters[element]) {
          document.getElementById("chElAtt").innerHTML = `
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">pPosition:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${
                      currentScene.characters[element].persona.dialogue
                        .pPosition
                    }">
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${
                      currentScene.characters[element].element.left
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[element].element.left
                    )}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${
                      currentScene.characters[element].element.right
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[element].element.right.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${
                      currentScene.characters[element].element.bottom
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[element].element.bottom.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${
                      currentScene.characters[element].element.top
                    }</span>
                    <input type="range" min="-101" max="101" value="${Number(
                      currentScene.characters[element].element.top.replace(
                        "%",
                        ""
                      )
                    )}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${
                      currentScene.characters[element].element.zIndex
                    }</span>
                    <input type="range" min="-10" max="100" value="${Number(
                      currentScene.characters[element].element.zIndex
                    )}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${
                      currentScene.characters[element].element.width
                    }</span>
                    <input type="range" min="0" max="600" value="${Number(
                      currentScene.characters[element].element.width.replace(
                        "px",
                        ""
                      )
                    )}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${
                      currentScene.characters[element].element.height
                    }</span>
                    <input type="range" min="0" max="600" value="${Number(
                      currentScene.characters[element].element.height.replace(
                        "px",
                        ""
                      )
                    )}" class="slider" id="heightSlider" data-valueType="%">
                </div>
            `;

          // Onchange
          document
            .querySelector("#charAttTalkInput")
            .addEventListener("change", (e) => {
              if (e.target.value === "left") {
                document.getElementById(
                  `${selectedElement.replace("dialogue", "")}pointer`
                ).style.right = "";
                document.getElementById(
                  `${selectedElement.replace("dialogue", "")}pointer`
                ).style.left = "-30px";
                document.getElementById(
                  `${selectedElement.replace("dialogue", "")}pointer`
                ).style.borderLeft = "1px solid #ff002d";
                document.getElementById(
                  `${selectedElement.replace("dialogue", "")}pointer`
                ).style.borderTop = "0px solid #ff002d";
              } else {
                document.getElementById(
                  `${selectedElement.replace("dialogue", "")}pointer`
                ).style.right = "-30px";
                document.getElementById(
                  `${selectedElement.replace("dialogue", "")}pointer`
                ).style.left = "";
                document.getElementById(
                  `${selectedElement.replace("dialogue", "")}pointer`
                ).style.borderLeft = "0px solid #ff002d";
                document.getElementById(
                  `${selectedElement.replace("dialogue", "")}pointer`
                ).style.borderTop = "1px solid #ff002d";
              }
            });

          // Clear user input
          document.querySelector("#editorUserInput").innerHTML = "";

          // Change Attribute Value onload
          document.querySelectorAll(".sliderAttValue").forEach((el) => {
            if (el.innerHTML === "auto") {
              document.getElementById(
                el.id.replace("Value", "Slider")
              ).value = 101;
              document.querySelector(
                `#${el.id.replace("Value", "Slider")}`
              ).style.pointerEvents = "none";
            }
            if (el.innerHTML === "") {
              document.getElementById(el.id.replace("Value", "Slider")).value =
                -101;
              document.getElementById(el.id).innerHTML = "-";
            }
          });

          var diaElSel = document.getElementById(
            `${currentScene.characters[element].persona.name}_dialogue`
          );
          // Left
          diaElSel.style.left = document.getElementById("leftValue").innerHTML;
          // Right
          diaElSel.style.right =
            document.getElementById("rightValue").innerHTML + "%";
          // Bottom
          diaElSel.style.bottom =
            document.getElementById("bottomValue").innerHTML + "%";
          // Top
          diaElSel.style.top =
            document.getElementById("topValue").innerHTML + "%";
          // zIndex
          diaElSel.style.zIndex =
            document.getElementById("zIndexValue").innerHTML;
          // Width
          diaElSel.style.width =
            document.getElementById("widthValue").innerHTML + "px";
          // Height
          diaElSel.style.height =
            document.getElementById("heightValue").innerHTML;

          // Change Attribute Value on slide
          document.querySelectorAll(".slider").forEach((slider) => {
            var tempchangeDia = tempData.SUD.Scenarios[currentScName]
              .find(({ name }) => name === currentScene.name)
              .characters.find(
                ({ persona }) =>
                  persona.name === selectedElement.replace("_dialogue", "")
              );
            //
            slider.addEventListener("input", (e) => {
              document.querySelector(
                `#${e.target.id.replace("Slider", "Value")}`
              ).innerHTML = e.target.value;
              if (e.target.value === "101") {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).innerHTML = "auto";
              }
              if (e.target.value === "-101") {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).innerHTML = "";
              }
              if (
                `${e.target.value}%` !=
                  currentScene.elements[element][
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "%"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
              } else if (
                `${e.target.value}px` !=
                  currentScene.elements[element][
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "px"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
              } else if (
                Number(e.target.value) !=
                  currentScene.elements[element][
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "#%"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
              } else if (
                e.target.value !=
                  currentScene.elements[element][
                    e.target.id.replace("Slider", "")
                  ] &&
                e.target.getAttribute("data-valueType") === "##"
              ) {
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "yellow";
                // Update Temp Data
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  //
                  tempchangeDia.element[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
                // Update Temp Data End
              } else {
                console.log("not changed");
                document.querySelector(
                  `#${e.target.id.replace("Slider", "Value")}`
                ).style.color = "#ff002d";
                // Update Temp Data
                if (
                  document.getElementById("updateScopeSelect").value === "scene"
                ) {
                  //
                  tempchangeDia.element[e.target.id.replace("Slider", "")] =
                    e.target.value;
                }
                // Update Temp Data End
              }

              //////////////////////
              // Real Time Edit View
              //////////////////////

              var diaElSel = document.getElementById(
                `${currentScene.characters[element].persona.name}_dialogue`
              );
              var left = document.getElementById("leftValue").innerHTML;
              var right = document.getElementById("rightValue").innerHTML;
              var bottom = document.getElementById("bottomValue").innerHTML;
              var top = document.getElementById("topValue").innerHTML;
              var zIndex = document.getElementById("zIndexValue").innerHTML;
              var width = document.getElementById("widthValue").innerHTML;
              var height = document.getElementById("heightValue").innerHTML;
              diaElSel.setAttribute(
                "style",
                `left: ${left} !important; right: ${right}% !important; bottom: ${bottom}% !important; top: ${top}% !important; z-index: ${zIndex} !important; width: ${width}px !important; height: ${height}px !important;inset: -5% -10% auto auto; z-index: 2; border-radius: 10px; border-top: 0.5px solid rgb(255, 0, 45); border-bottom: 0.5px solid rgb(255, 0, 45); padding: 10px; transform: translate(0px, 0px); transform-origin: left bottom; translate: none; rotate: none; scale: none;`
              );
            });
          });

          // // Load Element Type
          // var dialogueDropdown = document.querySelector("#charAttTalkInput")
          // for (const dialogue in currentScene.elements[element].innerType) {
          //     // console.log("dialogies", currentScene.characters[character].persona.dialogue[dialogue].substring(0, 16));
          //     var dialogueOption = document.createElement("option");
          //     dialogueOption.setAttribute("value", dialogue);
          //     dialogueOption.innerHTML = dialogue;
          //     dialogueDropdown.appendChild(dialogueOption);
          // }

          // Select Character Images
          // document.querySelector("#charAttImgInput").addEventListener("change", (e) => {
          //     document.querySelector(`#char_${currentScene.characters[character].persona.name} img:first-child`).src = e.target.value;
          //     document.getElementById("editorUserInput").value = `${e.target.value}`;
          // });
        }
      }
    };

    // UPDATE JSON
    var updateJSON = () => {
      // fetch json and update
      // Convert the modified data to a JSON string
      const modifiedJsonString = JSON.stringify(tempData);

      // Send the modified JSON data to the server for overwriting (example using fetch)
      fetch("http://localhost:3001/save-json", {
        method: "POST",
        body: modifiedJsonString,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("JSON data saved successfully");
          } else {
            console.error("Error saving JSON data");
          }
        })
        .catch((error) => {
          console.error("Error saving JSON data:", error);
        });
    };

    // New Scenario
    document
      .querySelector("#generateScenario")
      .addEventListener("click", (event) => {
        event.preventDefault();
        var scenarioName = document.getElementById("scenarioEdit");
        if (scenarioName.value != "") {
          tempData.SUD.Scenarios[scenarioName.value] = [];
          console.log("tempData", tempData);
          // UPDATE JSON AND change color and remove value
          updateJSON();
        }
      });

    // New Scene
    var newScene = () => {
      document.querySelector("#newSceneBut").addEventListener("click", () => {
        tempData = data;
        tempSceneData = defaultTempSceneData;
        newCharIndex = 0;
        newElIndex = 0;
        tempData.SUD.Scenarios[currentScName].push(tempSceneData);
        currentScene = tempData.SUD.Scenarios[currentScName].find(({ name }) => name === "newScene");
        var newSceneWindow = document.createElement("div");
        var editor = document.getElementById("editorbodyDisplay");
        newSceneWindow.setAttribute("clas s", "currentScene");
        newSceneWindow.setAttribute("id", "currentSceneView_draft");
        newSceneWindow.setAttribute(
          "style",
          "z-index: 10; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); opacity: 1;"
        );
        editor.appendChild(newSceneWindow);
        document.getElementById("inSceneChars").innerHTML = "";
        document.getElementById("inSceneEls").innerHTML = "";
        document.getElementById("inSceneCharsDialogues").innerHTML = "";
        document.getElementById("headerSceneName").innerHTML = "[ NEW SCENE ]";
        document
          .getElementById("headerSceneName")
          .setAttribute("class", "pendingSaveText");
        document.querySelector(".currentScene")?.remove();
        document.getElementById("scnAttName").value = "[ NEW SCENE ]";
        document
          .getElementById("scnAttName")
          .setAttribute("class", "attInput pendingSaveText");
        // Add Scene Type selector later
        // Add Background Color selector later

        // Reset Add Char and Add Element Buttons
        document.querySelectorAll(".sceneSelectElementEl").forEach((el) => {
          el.innerHTML = `${el.id.replace("_global", "")}`;
          var addClick = () => {
            var newElementToScene1 = document.createElement("div");
            newElementToScene1.setAttribute(
              "class",
              "inSceneCard pendingSaveCard"
            );
            newElementToScene1.setAttribute("id", "newElementUnsaved");
            newElementToScene1.innerHTML = `${el.id.replace("_global", "")}`;
            // document
            //   .getElementById("inSceneEls")
            //   .appendChild(newElementToScene1);
            el.removeEventListener("click", addClick);
            el.innerHTML = `${el.id.replace(
              "_global",
              ""
            )}<span style="float:right; color: yellow">&#9679;</span>`;
            return;
          };
          if (!el.getAttribute("data-listener")) {
            el.addEventListener("click", addClick);
            return;
          }
          el.removeAttribute("data-listener");
        });

        document.querySelectorAll(".sceneSelectElementChar").forEach((el) => {
          el.innerHTML = `${el.id.replace("_global", "")}`;
          var addClick2 = () => {
            var newElementToScene2 = document.createElement("div");
            newElementToScene2.setAttribute(
              "class",
              "inSceneCard pendingSaveCard"
            );
            newElementToScene2.setAttribute("id", "newElementUnsaved");
            newElementToScene2.innerHTML = `${el.id.replace("_global", "")}`;
            // document
            //   .getElementById("inSceneChars")
            //   .appendChild(newElementToScene2);
            el.removeEventListener("click", addClick2);
            el.innerHTML = `${el.id.replace(
              "_global",
              ""
            )}<span style="float:right; color: yellow">&#9679;</span>`;
          };
          if (!el.getAttribute("data-listener")) {
            el.addEventListener("click", addClick2);
          }
          el.removeAttribute("data-listener");
        });

        document.querySelectorAll(".sceneSelectElement").forEach((el) => {
          if (el.id === "newSceneBut") {
            el.innerHTML = `${el.id}<span style="float:right; color: yellow">&#9679;</span>`;
          } else {
            el.innerHTML = `${el.id.replace("_global", "")}`;
          }
        });
      });

      // Add to Scope
      document.getElementById("addToScope").addEventListener("click", () => {
        var dataToScope = document.getElementById("editorUserInput").value;
        // Add to live select
        // LAND 
        currentScene.activated.land = document.getElementById("scnAttAct1").value;
        // POP
        currentScene.activated.pop = document.getElementById("scnAttAct2").value;
        // GATE 
        currentScene.activated.gate = document.getElementById("scnAttAct3").value;
        // SCENE
        currentScene.activated.scn = document.getElementById("scnAttAct4").value;

        if (selectScopeTarget === "charAttDialogue") {
          // Dialogue / Type
          var character = currentScene.characters.find(({ persona }) => persona.name === selectedElement.replace("char_",""));
          var newToEl = document.createElement("option");
          newToEl.setAttribute("value", dataToScope);
          newToEl.innerHTML = dataToScope;
          document.getElementById("charAttTalkInput").appendChild(newToEl);
            // CHARACTER INPUTS
            // name
            character.persona.name = document.getElementById("charAttNameInput").value;
            // location
            character.persona.location = document.getElementById("charAttLocInput").value;
            // job
            character.persona.job = document.getElementById("charAttJobInput").value;
        }
        if (selectScopeTarget === "charAttImages") {
          // Images
          var newToEl2 = document.createElement("option");
          newToEl2.setAttribute("value", dataToScope);
          newToEl2.innerHTML = dataToScope;
          document.getElementById("charAttImgInput").appendChild(newToEl2);
        }
        if (selectScopeTarget === "charAttSource") {
          var element = currentScene.elements.find(({ id }) => id === selectedElement);
          // Images
          document.getElementById("charAttImgInput").value = dataToScope;
          document.getElementById(
            `${selectedElement.replace("cont", "src")}`
          ).src = dataToScope;
           // ELEMENT INPUTS
           // name
           element.id = document.getElementById("charAttNameInput").value;
           // action
           element.action = document.getElementById("charAttJobInput").value;
           // source
           element.src = document.getElementById("charAttImgInput").value;
        }
        // Update live view to reflect
        // Add to temp data
        document.getElementById("editorUserInput").value = "";
      });

      // // New Character
      document.querySelector("#newCharBut").addEventListener("click", () => {
        newCharIndex++;
        var newCharacterToScene = document.createElement("div");
        newCharacterToScene.setAttribute(
          "class",
          "inSceneCard pendingSaveCard"
        );
        newCharacterToScene.setAttribute(
          "id",
          `newCharacterUnsaved-${newCharIndex}`
        );
        newCharacterToScene.innerHTML = "[ NEW CHAR ]";
        newCharacterToScene.addEventListener("click", (e) => {
          selectCharacter(e.target.id);
        });
        document
          .getElementById("inSceneChars")
          .appendChild(newCharacterToScene);
      });

      // // New Element
      document.querySelector("#newElBut").addEventListener("click", () => {
        newElIndex++;
        var newElementToScene = document.createElement("div");
        newElementToScene.setAttribute("class", "inSceneCard pendingSaveCard");
        newElementToScene.setAttribute("id", `newElementUnsaved-${newElIndex}`);
        newElementToScene.innerHTML = "[ NEW EL ]";
        newElementToScene.addEventListener("click", (e) => {
          selectElement(e.target.id);
        });
        document.getElementById("inSceneEls").appendChild(newElementToScene);
      });
    };

    newScene();

    // Delete Scenario
    document
      .querySelector("#deleteScenario")
      .addEventListener("click", (event) => {
        event.preventDefault();
        var scenarioName = document.getElementById("scenarioEdit");
        if (
          scenarioName.value != "" &&
          tempData.SUD.Scenarios[scenarioName.value]
        ) {
          delete tempData.SUD.Scenarios[scenarioName.value];
          console.log("tempData", tempData);
          // UPDATE JSON AND change color and remove value
          updateJSON();
        }
      });

    // Delete Scene, Character, Element
    document.getElementById("deleteEl").addEventListener("click", () => {
      var BG = document.createElement("div");
      BG.setAttribute("id", "warningBG");
      BG.setAttribute("class", "warningBG");
      BG.innerHTML = `
      <div id="warningBlock">
        <div id="warningBGText" style="color:#ff002d;">Delete ${document.getElementById("updateScopeSelect").value}?<br><span style="font-size:.5em;">Are you sure?</span>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `
      document.getElementById("editorScreen").appendChild(BG);
      //
      document.getElementById("warningBGNo").addEventListener("click", () => {
        document.getElementById("warningBG").remove();
      });
      document.getElementById("warningBGYes").addEventListener("click", () => {
      //
      var scopeToDelete = document.getElementById("updateScopeSelect").value;
      switch (scopeToDelete) {
        case "scene":
          delete tempData.SUD.Scenarios[currentScName].find(
            ({ name }) => name === currentScene.name
          );
          updateJSON();
          break;
        case "select":
          var altEl = document.getElementById(`${selectedElement.replace("char_","")}`)?.innerHTML;
          if (selectedElement.includes("-cont")) {
            delete tempData.SUD.Scenarios[currentScName].find(
              ({ name }) => name === currentScene.name
            ).elements.find(({ id }) => id === selectedElement);
            document.getElementById(selectedElement.replace("-cont",""))?.remove();
            if (document.getElementById(`${selectedElement.replace("-cont","")}_global`)) {
              document.getElementById(`${selectedElement.replace("-cont","")}_global`).innerHTML = `${selectedElement.replace("-cont","")}`;
            }
          } 

          if (selectedElement.includes("char_")) {
            delete tempData.SUD.Scenarios[currentScName].find(
              ({ name }) => name === currentScene.name
            ).characters.find(({ persona }) => persona.name === selectedElement);
            document.getElementById(selectedElement.replace("char_",""))?.remove();
            document.getElementById(`${selectedElement.replace("char_","")}-dia`)?.remove();
            if (document.getElementById(`${selectedElement.replace("char_","")}_global`)) {
              document.getElementById(`${selectedElement.replace("char_","")}_global`).innerHTML = `${selectedElement.replace("char_","")}`;
            }
          }
          if (selectedElement.includes("newCharacterUnsaved")) {
            //
            document.getElementById(`${altEl}_global`).innerHTML = `${altEl}`;
            document.getElementById(`${altEl}_global`).addEventListener("click", (e) => {
              selectCharacter(e.target.id.replace("_global",""), altEl);
            });
          }

          document.getElementById(selectedElement)?.remove();

          break;
        case "isolated":
          //      
          if (selectedElement.includes("-cont")) {
            // search all scenes for element if found delete
            // Delele from category
            for (const scenario in tempData.SUD.Scenarios) {
              for (const scene in tempData.SUD.Scenarios[currentScName]) {
                if (scene.elements.find(({ id }) => id === selectedElement.id)) {
                  delete tempData.SUD.Scenarios[scenario][scene].elements.find(({ id }) => id === selectedElement);
                }
              }
            }
            // remove all elements from tempdata elements with same id
            delete tempData.SUD.Elements.find(({ id }) => id === selectedElement.id);
          }
          if (selectedElement.includes("char_")) {
            // search all scenes for element if found delete
            // Delele from category
            for (const scenario in tempData.SUD.Scenarios) {
              for (const scene in tempData.SUD.Scenarios[currentScName]) {
                if (scene.characters.find(({ persona }) => persona.name === selectedElement)) {
                  delete tempData.SUD.Scenarios[scenario][scene].characters.find(({ persona }) => persona.name === selectedElement.persona.name);
                }
              }
            }
            // remove all elements from tempdata elements with same id
            delete tempData.SUD.Characters.find(({ persona }) => persona.name === selectedElement.persona.name);
          }
          updateJSON();
          break;
      }
      });
    });
    
    // Warning popup with ai data comparison
    document.getElementById("saveScene").addEventListener("click", () => {
      var BG = document.createElement("div");
      BG.setAttribute("id", "warningBG");
      BG.setAttribute("class", "warningBG");
      BG.innerHTML = `
      <div id="warningBlock">
        <div id="warningBGText">Save ${document.getElementById("updateScopeSelect").value}?<br>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `
      document.getElementById("editorScreen").appendChild(BG);
      document.getElementById("warningBGNo").addEventListener("click", () => {
        document.getElementById("warningBG").remove();
      });
      document.getElementById("warningBGYes").addEventListener("click", () => {
        var scope = document.getElementById("updateScopeSelect").value;
        switch (scope) {
          case "scene":
            // var scene = tempData.SUD.Scenarios[currentScName].find(({name}) => name === currentScene.name);
            // updateJSON();
            break;
          case "isolated":
            if (selectedElement.includes("-cont")) {
              var tempEl = {
                id: `${templateElementData.id}`,
                src: `${templateElementData.src}`,
              };
              tempData.SUD.Elements.push(tempEl);
            }
            if (selectedElement.includes("char_")) {
              tempData.SUD.Characters.push(templateCharacterData.persona);
            }
            // updateJSON();
            break;
        }
        updateJSON();
      });
    });


    document
      .getElementById("scenesContainer")
      .appendChild(document.getElementById("newSceneBut"));
    document.getElementById("editorScreen").style.display = "block";

    // Mapper
    document.getElementById("mapperBut").addEventListener("click", () => {
      activateMapper();
    });

    if (document.querySelector(".currentScene")) {
      document
        .getElementById("editorbodyDisplay")
        ?.appendChild(document.querySelector(".currentScene"));
    } else {
      //   newEditorScenario("Intro", 0);
      document.getElementById("universe").style.filter = "blur(10px)";
      setTimeout(() => {
        document
          .getElementById("editorbodyDisplay")
          ?.appendChild(document.querySelector(".currentScene"));
      }, 1000);
    }
    return true;
  } else {
    document.getElementById("editorScreen").remove();
    document.getElementById("universe").style.filter = "blur(0px)";
    return false;
  }
}
