import{b as K,n as Q,g as Z}from"./index.5f45a1bf.js";function ee(){var j=document.getElementById("mapperBut"),_=document.getElementById("camera"),W=document.querySelectorAll(".uniEvents"),L=document.getElementById("getUniMenu"),M=document.getElementById("powerUp1"),x=document.getElementById("ringView");if(window.mapperActive==!0){j.style.color="var(--primary)",W.forEach(w=>{w.style.display="block"}),L.style.opacity="1",L.style.pointerEvents="auto",M.style.display="block",x.style.display="block",window.mapperActive=!1,document.getElementById("mapperUI").remove();return}else{j.style.color="var(--accent)",W.forEach(w=>{w.style.display="none"}),L.style.opacity="0",L.style.pointerEvents="none",M.style.display="none",x.style.display="none",window.mapperActive=!0;var C=document.createElement("div");C.innerHTML=`
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
        `,C.id="mapperUI",_.appendChild(C),document.getElementById("mapperClose").addEventListener("click",()=>{window.mapperActive=!1,document.getElementById("mapperUI").remove()})}}const te="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",ae=new K.Configuration({apiKey:te}),ie=new K.OpenAIApi(ae);var P=null,v=null,T=null,B=null,e=null,c=null,D=0,U=0,F=!1,O=null,de={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},Y={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},S={id:"newElement",type:"div",src:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/charTemplate.png",left:"auto",right:"10%",bottom:"auto",top:"5%",zIndex:"3",width:"auto",height:"30%",speed:.9,shadow:!0,shadowEffect:"0px",brightness:"1.0",leftTo:"",rightTo:"",bottomTo:"",topTo:"",zIndexTo:"",widthTo:"",heightTo:"",shadowEffectTo:"",brightnessTo:"",action:""},I={persona:{name:"newCharacter",location:"newLocation",job:"newJob",dialogue:{intro:"Hello, I will become a new character."},images:{default:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/char-template.png"}},pns:{position:"absolute",left:"10%",leftTo:"12%",right:"auto",rightTo:"auto",bottom:0,bottomTo:0,top:"auto",topTo:"auto",zIndex:1,zIndexTo:1,width:"auto",widthTo:"auto",height:"80%",heightTo:"80%",speed:1,blur:"0px",blurTo:"0px",brightness:"1",brightnessTo:"1"},element:{class:"chr-textElement",type:"div",backgroundColor:"rgba(0,0,0,0.75)",padding:"10px 10px",borderRadius:"10px",borderTop:"0.5px solid rgb(255, 0, 45)",borderBottom:"0.5px solid rgb(255, 0, 45)",width:"350px",height:"auto",left:"auto",right:"-10%",bottom:"auto",top:"-6%",zIndex:2,position:"absolute",border:".5px solid #ff002d",pointer:{position:"absolute",width:"50px",height:"50px",borderLeft:"1px solid #ff002d",bottom:"-60px",left:"-30px",zIndex:-5,transform:"rotate(45deg)"}},actions:["chat"]};async function le(j){var w;try{const $=await fetch("/src/sudb.json");if(!$.ok)throw new Error(`HTTP error! Status: ${$.status}`);P=await $.json(),v=P,T=P.SUD.Scenarios.Intro}catch($){console.error("Error fetching JSON data:",$)}if(j===!1){const $=document.createElement("link");$.rel="stylesheet",$.href="editor.css",document.head.appendChild($);var _=document.createElement("div"),W=document.getElementById("main");_.setAttribute("id","editorScreen"),_.innerHTML=`
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
                    <div id="attLock" class="attBut">\u{1F513}</div>
                    <div id="attPreview" class="attBut">\u25B6</div>
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
        `,W.appendChild(_),document.getElementById("loadScene").addEventListener("click",()=>{document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene"))}),document.getElementById("aiAsstSelectScope").addEventListener("change",()=>{O=document.getElementById("aiAsstSelectScope").value});var L=document.getElementById("scenarioDropdown");for(const a in v.SUD.Scenarios){var M=document.createElement("option");M.setAttribute("value",a),M.innerHTML=a,L.appendChild(M)}B=L.value,L.addEventListener("change",()=>{var o,t;var a=v.SUD.Scenarios[L.value];T=v.SUD.Scenarios[L.value],document.getElementById("scenesContainer").innerHTML="",a.forEach(n=>{var i=document.createElement("div");i.setAttribute("class","sceneSelectElement"),i.setAttribute("id",n.name),i.innerHTML=`${n.name}`,i.addEventListener("click",m=>{J(m.target.id)}),document.getElementById("scenesContainer").appendChild(i)});var r=document.createElement("div");r.setAttribute("class","sceneSelectElement"),r.setAttribute("id","newSceneBut"),r.innerHTML="[ NEW SCENE ]",document.getElementById("scenesContainer").appendChild(r),C(),F&&((o=document.querySelector(".currentScene"))==null||o.remove(),J((t=a[0])==null?void 0:t.name,0))}),T.forEach(a=>{v=P;var r=document.createElement("div");r.setAttribute("class","sceneSelectElement"),r.setAttribute("data-position",a.position-1),r.setAttribute("id",a.name),r.innerHTML=`${a.name}`,a.name==="scene1"?r.innerHTML=`${a.name}<span style="float:right; color: var(--accent)">&#9679;</span>`:r.innerHTML=`${a.name}`,r.addEventListener("click",o=>{var n;if(e.elements.find(({id:i})=>i.includes("newElementUnsaved"))&&(e.elements=e.elements.filter(({id:i})=>!i.includes("newElementUnsaved"))),e.characters.find(({persona:i})=>i.name.includes("newCharacterUnsaved"))&&(e.characters=e.characters.filter(({persona:i})=>!i.name.includes("newCharacterUnsaved"))),F){var t=o.target.getAttribute("data-position");(n=document.querySelectorAll(".currentScene")[0])==null||n.remove(),J(o.target.id,t)}document.getElementById("headerSceneName").style.color="yellow",setTimeout(()=>{document.getElementById("headerSceneName").style.color="#ff002d"},1e3)}),document.getElementById("scenesContainer").appendChild(r)});const J=(a,r)=>{var o;D=0,U=0,document.querySelector(".currentScene")===null&&(Q(`${B}`,r),setTimeout(()=>{var t;(t=document.getElementById("editorbodyDisplay"))==null||t.appendChild(document.querySelector(".currentScene"))},1e3)),document.querySelectorAll(".sceneSelectElement").forEach(t=>{document.getElementById("scnAttName").setAttribute("class","attInput"),document.getElementById("headerSceneName").removeAttribute("class"),t.id===a?document.getElementById(a).innerHTML=`${a}<span style="float:right; color: var(--accent)">&#9679;</span>`:document.getElementById(t.id).innerHTML=`${t.id}`});for(const t in T)T[t].name===a&&(e=T[t],document.getElementById("hsc").innerHTML=`${T[t].activated}]`,document.getElementById("headerSceneName").innerHTML=`${T[t].name}`,document.getElementById("scnAttName").value=`${T[t].name}`,document.getElementById("scnAttType").value=`${T[t].type}`,document.getElementById("scnAttBg").value=`${T[t].bg}`,document.getElementById("scnAttAct1").value=`${T[t].activated.land}`,document.getElementById("scnAttAct2").value=`${T[t].activated.pop}`,T[t].activated.pop===!0?document.getElementById("scnAttAct2").selectedIndex=0:document.getElementById("scnAttAct2").selectedIndex=1,document.getElementById("scnAttAct3").value=`${T[t].activated.gate}`,document.getElementById("scnAttAct4").value=`${parseInt((o=T[t].activated.scn)==null?void 0:o.join(""))}`,document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",T[t].characters.forEach(n=>{var i=document.createElement("div");if(i.setAttribute("class","inSceneCard"),i.setAttribute("id",n.persona.name),i.innerHTML=`${n.persona.name}`,document.getElementById("inSceneChars").appendChild(i),"element"in n){var m=document.createElement("div");m.setAttribute("class","inSceneCard"),m.setAttribute("id",`${n.persona.name}-dia`),m.innerHTML=`${n.persona.name} - ${n.actions[0]}`,document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("inSceneCharsDialogues").appendChild(m),m.addEventListener("click",g=>{X(g.target.id),n.persona.dialogue.pPosition==="left"?document.getElementById("charAttTalkInput").value="left":document.getElementById("charAttTalkInput").value="right"})}i.addEventListener("click",g=>{N(g.target.id)})}),T[t].elements.forEach(n=>{var i=document.createElement("div");i.setAttribute("class","inSceneCard"),i.setAttribute("id",n.id),i.innerHTML=`${n.id}`,document.getElementById("inSceneEls").appendChild(i),i.addEventListener("click",m=>{R(m.target.id)})}));F===!0&&document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.remove()}),F===!0&&document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.remove()}),v.SUD.Characters.forEach(t=>{var n=document.createElement("div"),i=document.getElementById("newCharBut");i.innerHTML="[ NEW CHARACTER ]",n.setAttribute("class","sceneSelectElementChar"),n.setAttribute("id",`${t.name}_global`);var m=e.characters.find(({persona:s})=>s.name===t.name);if(m)n.innerHTML=`${t.name}<span style="float:right; color: var(--accent)">&#9679;</span>`,n.addEventListener("click",s=>{N(s.target.id.replace("_global",""),t.name)});else{n.innerHTML=`${t.name}`;var g=()=>{D++;var s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`newCharacterUnsaved-${D}`),s.innerHTML=`${t.name}`,document.getElementById("inSceneChars").appendChild(s),s.addEventListener("click",h=>{N(h.target.id.replace("_global",""),t.name)}),n.removeEventListener("click",g),n.innerHTML=`${t.name}<span style="float:right; color: yellow">&#9679;</span>`};n.addEventListener("click",g),n.setAttribute("data-listener","true")}document.getElementById("charactersContainer").appendChild(n),document.getElementById("charactersContainer").appendChild(i)}),v.SUD.Elements.forEach(t=>{var n=document.createElement("div"),i=document.getElementById("newElBut");i.innerHTML="[ NEW ELEMENT ]",n.setAttribute("class","sceneSelectElementEl"),n.setAttribute("id",`${t.id}_global`);var m=e.elements.find(({id:s})=>s===t.id);if(m)n.innerHTML=`${t.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,n.addEventListener("click",s=>{R(s.target.id.replace("_global",""))});else{n.innerHTML=`${t.id}`;var g=()=>{U++;var s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`"newElementUnsaved"-${U}`),s.innerHTML=`${t.id}}`,document.getElementById("inSceneEls").appendChild(s),s.addEventListener("click",h=>{R(h.target.id.replace("_global",""),t.id)}),n.removeEventListener("click",g),n.innerHTML=`${t.id}<span style="float:right; color: var(--accent)">&#9679;</span>`};n.addEventListener("click",g),n.setAttribute("data-listener","true")}document.getElementById("elsContainer").appendChild(n),document.getElementById("elsContainer").appendChild(i)}),F=!0};J("scene1",0),document.getElementById("summonAI").addEventListener("click",async()=>{document.getElementById("editorAiOutput").innerHTML="Loading...";var a=document.getElementById("editorUserInput").value,r=await ie.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Hello. ${a}`}],max_tokens:100}).catch(o=>{console.log(o)});console.log(r),document.getElementById("editorUserInput").value="",document.getElementById("editorAiOutput").innerHTML=`${r.data.choices[0].message.content}`});const N=(a,r)=>{var G,l,A,f,p;var o=document.querySelector(".currentScene"),t=Array.from(o.childNodes);if(!t.find(d=>d.id.includes(`${`char_${a}`}`)))if(a.includes("newCharacterUnsaved-")){I.persona.name=a;var n=document.createElement("div"),i=document.createElement("img");n.classList.add("sceneElement"),n.setAttribute("id",`char_${a}`),i.setAttribute("src",((G=v.SUD.Characters.find(({name:d})=>d===r))==null?void 0:G.images.default)||I.persona.images.default),n.appendChild(i),n.style.height=I.pns.height,n.style.width=I.pns.width,n.style.left=I.pns.left,n.style.right=I.pns.right,n.style.top=I.pns.top,n.style.position=I.pns.position,n.style.zIndex=I.pns.zIndex,n.style.position="absolute",n.style.opacity="1",i.style.width="auto",i.style.height="100%",i.style.objectFit="contain",document.querySelector(".currentScene").appendChild(n),e==null||e.characters.push(I)}else{I.persona.name=a;var m=document.createElement("div"),g=document.createElement("img"),s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`${a}`),s.innerHTML=`${a}`,s.addEventListener("click",d=>{N(d.target.id)}),document.getElementById(`${a}_global`).innerHTML=`${a}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneChars").appendChild(s),m.classList.add("sceneElement"),m.setAttribute("id",`char_${a}`),g.setAttribute("src",((l=v.SUD.Characters.find(({name:d})=>d===r))==null?void 0:l.images.default)||I.persona.images.default),m.appendChild(g),m.style.height=I.pns.height,m.style.width=I.pns.width,m.style.left=I.pns.left,m.style.right=I.pns.right,m.style.top=I.pns.top,m.style.position=I.pns.position,m.style.zIndex=I.pns.zIndex,m.style.position="absolute",m.style.opacity="1",g.style.width="auto",g.style.height="100%",g.style.objectFit="contain",document.querySelector(".currentScene").appendChild(m),e==null||e.characters.push(I)}c=`char_${a}`,document.getElementById(`char_${a}`).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(`char_${a}`).style.border="none"},1e3);for(const d in e.characters)if(e.characters[d].persona.name===a){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttName" class="txtAttribute">
                    <div id="charAttNameLabel">Chr Name:</div>
                    <input type="text" id="charAttNameInput" value="${e.characters[d].persona.name}">
                </div>
                <div id="charAttLoc" class="txtAttribute">
                    <div id="charAttLocLabel">Chr Loc:</div>
                    <input type="text" id="charAttLocInput" value="${e.characters[d].persona.location}">
                </div>
                <div id="charAttJob" class="txtAttribute">
                    <div id="charAttJobLabel">Chr Job:</div>
                    <input type="text" id="charAttJobInput" value="${e.characters[d].persona.job}">
                </div>
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">Dialogue:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[d].persona.job}"></select>
                </div>
                <div id="charAttImages" class="txtAttribute">
                    <div id="charAttImageLabel">Images:</div>
                    <select type="text" class="attSelect" id="charAttImgInput" value="${e.characters[d].persona.job}"></select>
                </div>
                <div id="charAttActions" class="txtAttribute">
                    <div id="charAttActionsLabel">Chat:</div>
                    <input type="checkbox" id="charAttActionInput" value="${e.characters[d].persona.name}">
                    <label for="charAttActionInput"></label>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[d].pns.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[d].pns.left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[d].pns.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[d].pns.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[d].pns.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[d].pns.bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[d].pns.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[d].pns.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[d].pns.zIndex}</span>
                    <input type="range" min="1" max="100" value="${Number(e.characters[d].pns.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[d].pns.width}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[d].pns.width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[d].pns.height}</span>
                    <input type="range" min="0" max="200" value="${Number(e.characters[d].pns.height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Speed:</div>
                    <span class="sliderAttValue" id="speedValue">${e.characters[d].pns.speed}</span>
                    <input type="range" min="0.0" max="10.0" value="${Number(e.characters[d].pns.speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
                </div>
                <div class="sliderAttribute">
                    <div>Blur:</div>
                    <span class="sliderAttValue" id="blurValue">${e.characters[d].pns.blur}</span>
                    <input type="range" min="0" max="50" value="${Number(e.characters[d].pns.blur.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright:</div>
                    <span class="sliderAttValue" id="brightnessValue">${e.characters[d].pns.brightness}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[d].pns.brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Left To:</div>
                    <span class="sliderAttValue" id="leftToValue">${e.characters[d].pns.leftTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[d].pns.leftTo.replace("%",""))}" class="slider" id="leftToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right To:</div>
                    <span class="sliderAttValue" id="rightToValue">${e.characters[d].pns.rightTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[d].pns.rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom To:</div>
                    <span class="sliderAttValue" id="bottomToValue">${e.characters[d].pns.bottomTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[d].pns.bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Top To:</div>
                    <span class="sliderAttValue" id="topToValue">${e.characters[d].pns.topTo}</span>
                    <input type="range" min="-101" max="101" value="${Number((A=e.characters[d].pns.topTo)==null?void 0:A.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex To:</div>
                    <span class="sliderAttValue" id="zIndexToValue">${e.characters[d].pns.zIndexTo}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[d].pns.zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width To:</div>
                    <span class="sliderAttValue" id="widthToValue">${e.characters[d].pns.widthTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[d].pns.width.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height To:</div>
                    <span class="sliderAttValue" id="heightToValue">${e.characters[d].pns.heightTo}</span>
                    <input type="range" min="0" max="200" value="${Number((f=e.characters[d].pns.heightTo)==null?void 0:f.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Blur To:</div>
                    <span class="sliderAttValue" id="blurToValue">${e.characters[d].pns.blurTo}</span>
                    <input type="range" min="0" max="100" value="${Number((p=e.characters[d].pns.blurTo)==null?void 0:p.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright To:</div>
                    <span class="sliderAttValue" id="brightnessToValue">${e.characters[d].pns.brightnessTo}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[d].pns.brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",e.characters[d].actions[0]==="chat"&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(y=>{y.innerHTML==="auto"&&(document.getElementById(y.id.replace("Value","Slider")).value=101,document.querySelector(`#${y.id.replace("Value","Slider")}`).style.pointerEvents="none"),y.innerHTML===""&&(document.getElementById(y.id.replace("Value","Slider")).value=-101,document.getElementById(y.id).innerHTML="-")}),document.querySelectorAll(".attBut").forEach(y=>{y.style.display="block"}),document.querySelector("#charAttActionInput").addEventListener("change",y=>{y.target.checked?(e.characters[d].actions[0]="chat",document.getElementById(`${e.characters[d].persona.name}_dialogue`).style.display="block",v.SUD.Scenarios[B].forEach(E=>{E.characters.forEach(u=>{u.persona.name===c.replace("char_","")&&(u.actions[0]="chat")})})):(e.characters[d].actions[0]="none",document.getElementById(`${e.characters[d].persona.name}_dialogue`).style.display="none",v.SUD.Scenarios[B].forEach(E=>{E.characters.forEach(u=>{u.persona.name===c.replace("char_","")&&(u.actions[0]="")})}))});var h=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(h===!1){h=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.characters[d].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",h=!1;return}}),document.querySelectorAll(".slider").forEach(y=>{var E=v.SUD.Scenarios[B].find(({name:u})=>u===e.name).characters.find(({persona:u})=>u.name===c.replace("char_",""));y.addEventListener("input",u=>{document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML=u.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value),u.target.value==="101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)),u.target.value==="-101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)),`${u.target.value}%`!=e.characters[d].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)):`${u.target.value}px`!=e.characters[d].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)):Number(u.target.value)!=e.characters[d].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)):u.target.value!=e.characters[d].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)):(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value));var H=document.getElementById(`${c}`);H.style.left=document.getElementById("leftValue").innerHTML+"%",H.style.right=document.getElementById("rightValue").innerHTML+"%",H.style.bottom=document.getElementById("bottomValue").innerHTML+"%",H.style.top=document.getElementById("topValue").innerHTML+"%",H.style.zIndex=document.getElementById("zIndexValue").innerHTML,H.style.width=document.getElementById("widthValue").innerHTML+"%",H.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#char_${e.characters[d].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,h===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})}),document.getElementById("attPreview").addEventListener("click",function(){Z.fromTo(`#${c}`,{left:document.getElementById("leftSlider").value+"%",bottom:document.getElementById("bottomValue").value+"%",zIndex:document.getElementById("zIndexSlider").value,height:document.getElementById("heightSlider").value+"%",filter:`blur(${document.getElementById("blurSlider").value}px) brightness(${document.getElementById("brightnessSlider").value})`},{duration:document.getElementById("speedSlider").value,left:document.getElementById("leftToSlider").value+"%",bottom:document.getElementById("bottomToSlider").value+"%",zIndex:document.getElementById("zIndexToSlider").value,height:document.getElementById("heightToSlider").value+"%",filter:`blur(${document.getElementById("blurToSlider").value}px) brightness(${document.getElementById("brightnessToSlider").value})`})});var b=document.getElementById(`char_${e.characters[d].persona.name}`);b.style.left=document.getElementById("leftValue").innerHTML,b.style.right=document.getElementById("rightValue").innerHTML+"%",b.style.bottom=document.getElementById("bottomValue").innerHTML+"%",b.style.top=document.getElementById("topValue").innerHTML+"%",b.style.zIndex=document.getElementById("zIndexValue").innerHTML,b.style.width=document.getElementById("widthValue").innerHTML+"%",b.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#char_${e.characters[d].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var k=document.querySelector("#charAttTalkInput");for(const y in e.characters[d].persona.dialogue){var V=document.createElement("option");V.setAttribute("value",y),V.innerHTML=y,k.appendChild(V)}var q=document.querySelector("#charAttImgInput");for(const y in e.characters[d].persona.images){var z=document.createElement("option");z.setAttribute("value",e.characters[d].persona.images[y]),z.innerHTML=y,q.appendChild(z)}document.querySelector("#charAttTalkInput").addEventListener("change",y=>{document.querySelector(`#char_${e.characters[d].persona.name} #${e.characters[d].persona.name}_dialogue`).innerHTML=`<p id="${e.characters[d].persona.name}_dialogue">${e.characters[d].persona.dialogue[y.target.value]||`${y.target.value}`}</p>`;var E=document.createElement("div");E.classList.add("dialoguePointer"),E.style.position="absolute",E.style.width=e.characters[d].element.pointer.width,E.style.height=e.characters[d].element.pointer.height,E.style.bottom=e.characters[d].element.pointer.bottom,E.style.left=e.characters[d].element.pointer.left,E.style.zIndex=e.characters[d].element.pointer.zIndex,E.style.transform=e.characters[d].element.pointer.transform,E.style.borderLeft=e.characters[d].element.pointer.borderleft,document.querySelector(`#${e.characters[d].persona.name}_dialogue`).appendChild(E),document.getElementById("editorUserInput").value=`${e.characters[d].persona.dialogue[y.target.value]||`${y.target.value}`}`}),document.querySelector("#charAttImgInput").addEventListener("change",y=>{document.querySelector(`#char_${e.characters[d].persona.name} img:first-child`).src=y.target.value,document.getElementById("editorUserInput").value=`${y.target.value}`})}},R=(a,r)=>{var k,V,q,z,G;var o=document.querySelector(".currentScene"),t=Array.from(o.childNodes);if(!t.find(l=>l.id.includes(`${`${a}-cont`}`)))if(a.includes("newElementUnsaved-")){S.id=a;var n=document.createElement("div"),i=document.createElement("img");n.classList.add("sceneElement"),n.setAttribute("id",`${a}-cont`),i.setAttribute("id",`${a}-src`),i.setAttribute("src",((k=v.SUD.Elements.find(({id:l})=>l===r))==null?void 0:k.src)||S.src),n.appendChild(i),n.style.height=S.height,n.style.width=S.width,n.style.left=S.left,n.style.right=S.right,n.style.top=S.top,n.style.position=S.position,n.style.zIndex=S.zIndex,n.style.position="absolute",n.style.opacity="1",i.style.width="auto",i.style.height="100%",i.style.objectFit="contain",document.querySelector(".currentScene").appendChild(n),console.log("new element added to scene",e.elements),e==null||e.elements.push(S)}else{S.id=a;var m=document.createElement("div"),g=document.createElement("img"),s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`${a}`),s.innerHTML=`${a}`,s.addEventListener("click",l=>{R(l.target.id,r)}),document.getElementById(`${a}_global`).innerHTML=`${a}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneEls").appendChild(s),m.classList.add("sceneElement"),m.setAttribute("id",`${a}-cont`),console.log("name1",a),g.setAttribute("src",((V=v.SUD.Elements.find(({id:l})=>l===a))==null?void 0:V.src)||S.src),m.appendChild(g),m.style.height=S.height,m.style.width=S.width,m.style.left=S.left,m.style.right=S.right,m.style.top=S.top,m.style.position=S.position,m.style.zIndex=S.zIndex,m.style.position="absolute",m.style.opacity="1",g.style.width="auto",g.style.height="100%",g.style.objectFit="contain",document.querySelector(".currentScene").appendChild(m),e==null||e.elements.push(S)}c=`${a}-cont`,document.getElementById(c).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(c).style.border="none"},1e3);for(const l in e.elements)if(e.elements[l].id===a){document.getElementById("chElAtt").innerHTML=`
            <div id="charAttName" class="txtAttribute">
                <div id="charAttNameLabel">Ele Name:</div>
                <input type="text" id="charAttNameInput" value="${e.elements[l].id}">
            </div>
            <div id="charAttJob" class="txtAttribute">
                <div id="charAttJobLabel">Ele Action:</div>
                <input type="text" id="charAttJobInput" value="${e.elements[l].action}">
            </div>
            <div id="charAttDialogue" class="txtAttribute">
                <div id="charAttTalkLabel">Type:</div>
                <select type="text" class="attSelect" id="charAttTalkInput" value="${e.elements[l].innerType}">
                  <option value="">Image</option>
                  <option value="">Video</option>
                  <option value="">Audio</option>
                </select>
            </div>
            <div id="charAttSource" class="txtAttribute">
                <div id="charAttImageLabel">Source:</div>
                <input type="text" class="attSelect" id="charAttImgInput" value="${e.elements[l].src}">
            </div>
            <div id="charAttActions" class="txtAttribute">
                <div id="charAttActionsLabel">Shadow:</div>
                <input type="checkbox" id="charAttActionInput" value="">
                <label for="charAttActionInput"></label>
            </div>
            <div class="sliderAttribute">
                <div>Left:</div>
                <span class="sliderAttValue" id="leftValue">${e.elements[l].left}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[l].left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right:</div>
                <span class="sliderAttValue" id="rightValue">${e.elements[l].right}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[l].right)}" class="slider" id="rightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom:</div>
                <span class="sliderAttValue" id="bottomValue">${e.elements[l].bottom}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[l].bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
            </div>
            <div class="sliderAttribute">
                <div>Top:</div>
                <span class="sliderAttValue" id="topValue">${e.elements[l].top}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[l].top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex:</div>
                <span class="sliderAttValue" id="zIndexValue">${e.elements[l].zIndex}</span>
                <input type="range" min="1" max="100" value="${Number(e.elements[l].zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width:</div>
                <span class="sliderAttValue" id="widthValue">${e.elements[l].width}</span>
                <input type="range" min="0" max="100" value="${Number(e.elements[l].width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height:</div>
                <span class="sliderAttValue" id="heightValue">${e.elements[l].height}</span>
                <input type="range" min="0" max="200" value="${Number(e.elements[l].height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Speed:</div>
                <span class="sliderAttValue" id="speedValue">${e.elements[l].speed}</span>
                <input type="range" min="0.0" max="10.0" value="${Number(e.elements[l].speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
            </div>
            <div class="sliderAttribute">
                <div>Blur:</div>
                <span class="sliderAttValue" id="blurValue">${e.elements[l].shadowEffect}</span>
                <input type="range" min="0" max="50" value="${Number(e.elements[l].shadowEffect.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright:</div>
                <span class="sliderAttValue" id="brightnessValue">${e.elements[l].brightness}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[l].brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Left To:</div>
                <span class="sliderAttValue" id="leftToValue">${e.elements[l].leftTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[l].leftTo)}" class="slider" id="leftToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right To:</div>
                <span class="sliderAttValue" id="rightToValue">${e.elements[l].rightTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[l].rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom To:</div>
                <span class="sliderAttValue" id="bottomToValue">${e.elements[l].bottomTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[l].bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Top To:</div>
                <span class="sliderAttValue" id="topToValue">${e.elements[l].topTo}</span>
                <input type="range" min="-101" max="101" value="${Number((q=e.elements[l].topTo)==null?void 0:q.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex To:</div>
                <span class="sliderAttValue" id="zIndexToValue">${e.elements[l].zIndexTo}</span>
                <input type="range" min="0" max="100" value="${Number(e.elements[l].zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width To:</div>
                <span class="sliderAttValue" id="widthToValue">${e.elements[l].widthTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[l].widthTo.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height To:</div>
                <span class="sliderAttValue" id="heightToValue">${e.elements[l].heightTo}</span>
                <input type="range" min="0" max="200" value="${Number((z=e.elements[l].heightTo)==null?void 0:z.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Blur To:</div>
                <span class="sliderAttValue" id="blurToValue">${e.elements[l].shadowEffectTo}</span>
                <input type="range" min="0" max="100" value="${Number((G=e.elements[l].shadowEffectTo)==null?void 0:G.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright To:</div>
                <span class="sliderAttValue" id="brightnessToValue">${e.elements[l].brightnessTo}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[l].brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
            </div>
        `,document.querySelector("#editorUserInput").innerHTML="",e.elements[l].shadow===!0&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(A=>{A.innerHTML==="auto"&&(document.getElementById(A.id.replace("Value","Slider")).value=101,document.querySelector(`#${A.id.replace("Value","Slider")}`).style.pointerEvents="none"),A.innerHTML===""&&(document.getElementById(A.id.replace("Value","Slider")).value=-101,document.getElementById(A.id).innerHTML="-")});var h=document.getElementById(`${e.elements[l].id}-cont`);h.style.left=document.getElementById("leftValue").innerHTML,h.style.right=document.getElementById("rightValue").innerHTML+"%",h.style.bottom=document.getElementById("bottomValue").innerHTML+"%",h.style.top=document.getElementById("topValue").innerHTML+"%",h.style.zIndex=document.getElementById("zIndexValue").innerHTML,h.style.width=document.getElementById("widthValue").innerHTML+"%",h.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#${e.elements[l].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var b=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(b===!1){b=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.elements[l].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",b=!1;return}}),document.querySelectorAll(".slider").forEach(A=>{var f=v.SUD.Scenarios[B].find(({name:p})=>p===e.name).elements.find(({id:p})=>p===c.replace("-cont",""));A.addEventListener("input",p=>{document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML=p.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(f[p.target.id.replace("Slider","")]=p.target.value),p.target.value==="101"&&(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(f[p.target.id.replace("Slider","")]=p.target.value)),p.target.value==="-101"&&(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(f[p.target.id.replace("Slider","")]=p.target.value)),`${p.target.value}%`!=e.elements[l][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(f[p.target.id.replace("Slider","")]=p.target.value)):`${p.target.value}px`!=e.elements[l][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(f[p.target.id.replace("Slider","")]=p.target.value)):Number(p.target.value)!=e.elements[l][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(f[p.target.id.replace("Slider","")]=p.target.value)):p.target.value!=e.elements[l][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(f[p.target.id.replace("Slider","")]=p.target.value)):(console.log("not changed"),document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(f[p.target.id.replace("Slider","")]=p.target.value));var d=document.getElementById(`${c}`);d.style.left=document.getElementById("leftValue").innerHTML+"%",d.style.right=document.getElementById("rightValue").innerHTML+"%",d.style.bottom=document.getElementById("bottomValue").innerHTML+"%",d.style.top=document.getElementById("topValue").innerHTML+"%",d.style.zIndex=document.getElementById("zIndexValue").innerHTML,d.style.width=document.getElementById("widthValue").innerHTML+"%",d.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#${e.elements[l].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,b===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})})}},X=a=>{c=`${a}`,document.getElementById(c).style.color="yellow",setTimeout(()=>{document.getElementById(c).style.color="#ff002d"},1e3);for(const o in e.characters)if("element"in e.characters[o]){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">pPosition:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[o].persona.dialogue.pPosition}">
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[o].element.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[o].element.left)}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[o].element.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[o].element.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[o].element.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[o].element.bottom.replace("%",""))}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[o].element.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[o].element.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[o].element.zIndex}</span>
                    <input type="range" min="-10" max="100" value="${Number(e.characters[o].element.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[o].element.width}</span>
                    <input type="range" min="0" max="600" value="${Number(e.characters[o].element.width.replace("px",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[o].element.height}</span>
                    <input type="range" min="0" max="600" value="${Number(e.characters[o].element.height.replace("px",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
            `,document.querySelector("#charAttTalkInput").addEventListener("change",t=>{t.target.value==="left"?(document.getElementById(`${c.replace("dialogue","")}pointer`).style.right="",document.getElementById(`${c.replace("dialogue","")}pointer`).style.left="-30px",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderLeft="1px solid #ff002d",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderTop="0px solid #ff002d"):(document.getElementById(`${c.replace("dialogue","")}pointer`).style.right="-30px",document.getElementById(`${c.replace("dialogue","")}pointer`).style.left="",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderLeft="0px solid #ff002d",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderTop="1px solid #ff002d")}),document.querySelector("#editorUserInput").innerHTML="",document.querySelectorAll(".sliderAttValue").forEach(t=>{t.innerHTML==="auto"&&(document.getElementById(t.id.replace("Value","Slider")).value=101,document.querySelector(`#${t.id.replace("Value","Slider")}`).style.pointerEvents="none"),t.innerHTML===""&&(document.getElementById(t.id.replace("Value","Slider")).value=-101,document.getElementById(t.id).innerHTML="-")});var r=document.getElementById(`${e.characters[o].persona.name}_dialogue`);r.style.left=document.getElementById("leftValue").innerHTML,r.style.right=document.getElementById("rightValue").innerHTML+"%",r.style.bottom=document.getElementById("bottomValue").innerHTML+"%",r.style.top=document.getElementById("topValue").innerHTML+"%",r.style.zIndex=document.getElementById("zIndexValue").innerHTML,r.style.width=document.getElementById("widthValue").innerHTML+"px",r.style.height=document.getElementById("heightValue").innerHTML,document.querySelectorAll(".slider").forEach(t=>{var n=v.SUD.Scenarios[B].find(({name:i})=>i===e.name).characters.find(({persona:i})=>i.name===c.replace("_dialogue",""));t.addEventListener("input",i=>{document.querySelector(`#${i.target.id.replace("Slider","Value")}`).innerHTML=i.target.value,i.target.value==="101"&&(document.querySelector(`#${i.target.id.replace("Slider","Value")}`).innerHTML="auto"),i.target.value==="-101"&&(document.querySelector(`#${i.target.id.replace("Slider","Value")}`).innerHTML=""),`${i.target.value}%`!=e.elements[o][i.target.id.replace("Slider","")]&&i.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="yellow":`${i.target.value}px`!=e.elements[o][i.target.id.replace("Slider","")]&&i.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="yellow":Number(i.target.value)!=e.elements[o][i.target.id.replace("Slider","")]&&i.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="yellow":i.target.value!=e.elements[o][i.target.id.replace("Slider","")]&&i.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(n.element[i.target.id.replace("Slider","")]=i.target.value)):(console.log("not changed"),document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(n.element[i.target.id.replace("Slider","")]=i.target.value));var m=document.getElementById(`${e.characters[o].persona.name}_dialogue`),g=document.getElementById("leftValue").innerHTML,s=document.getElementById("rightValue").innerHTML,h=document.getElementById("bottomValue").innerHTML,b=document.getElementById("topValue").innerHTML,k=document.getElementById("zIndexValue").innerHTML,V=document.getElementById("widthValue").innerHTML,q=document.getElementById("heightValue").innerHTML;m.setAttribute("style",`left: ${g} !important; right: ${s}% !important; bottom: ${h}% !important; top: ${b}% !important; z-index: ${k} !important; width: ${V}px !important; height: ${q}px !important;inset: -5% -10% auto auto; z-index: 2; border-radius: 10px; border-top: 0.5px solid rgb(255, 0, 45); border-bottom: 0.5px solid rgb(255, 0, 45); padding: 10px; transform: translate(0px, 0px); transform-origin: left bottom; translate: none; rotate: none; scale: none;`)})})}};var x=()=>{const a=JSON.stringify(v);fetch("http://localhost:3001/save-json",{method:"POST",body:a,headers:{"Content-Type":"application/json"}}).then(r=>{r.ok?console.log("JSON data saved successfully"):console.error("Error saving JSON data")}).catch(r=>{console.error("Error saving JSON data:",r)})};document.querySelector("#generateScenario").addEventListener("click",a=>{a.preventDefault();var r=document.getElementById("scenarioEdit");r.value!=""&&(v.SUD.Scenarios[r.value]=[],console.log("tempData",v),x())});var C=()=>{document.querySelector("#newSceneBut").addEventListener("click",()=>{var o;v=P,Y=de,D=0,U=0,v.SUD.Scenarios[B].push(Y),e=v.SUD.Scenarios[B].find(({name:t})=>t==="newScene");var a=document.createElement("div"),r=document.getElementById("editorbodyDisplay");a.setAttribute("clas s","currentScene"),a.setAttribute("id","currentSceneView_draft"),a.setAttribute("style","z-index: 10; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); opacity: 1;"),r.appendChild(a),document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("headerSceneName").innerHTML="[ NEW SCENE ]",document.getElementById("headerSceneName").setAttribute("class","pendingSaveText"),(o=document.querySelector(".currentScene"))==null||o.remove(),document.getElementById("scnAttName").value="[ NEW SCENE ]",document.getElementById("scnAttName").setAttribute("class","attInput pendingSaveText"),document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var n=()=>{var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id","newElementUnsaved"),i.innerHTML=`${t.id.replace("_global","")}`,t.removeEventListener("click",n),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};if(!t.getAttribute("data-listener")){t.addEventListener("click",n);return}t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var n=()=>{var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id","newElementUnsaved"),i.innerHTML=`${t.id.replace("_global","")}`,t.removeEventListener("click",n),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};t.getAttribute("data-listener")||t.addEventListener("click",n),t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElement").forEach(t=>{t.id==="newSceneBut"?t.innerHTML=`${t.id}<span style="float:right; color: yellow">&#9679;</span>`:t.innerHTML=`${t.id.replace("_global","")}`})}),document.getElementById("addToScope").addEventListener("click",()=>{var a=document.getElementById("editorUserInput").value;if(e.activated.land=document.getElementById("scnAttAct1").value,e.activated.pop=document.getElementById("scnAttAct2").value,e.activated.gate=document.getElementById("scnAttAct3").value,e.activated.scn=document.getElementById("scnAttAct4").value,O==="charAttDialogue"){var r=e.characters.find(({persona:i})=>i.name===c.replace("char_","")),o=document.createElement("option");o.setAttribute("value",a),o.innerHTML=a,document.getElementById("charAttTalkInput").appendChild(o),r.persona.name=document.getElementById("charAttNameInput").value,r.persona.location=document.getElementById("charAttLocInput").value,r.persona.job=document.getElementById("charAttJobInput").value}if(O==="charAttImages"){var t=document.createElement("option");t.setAttribute("value",a),t.innerHTML=a,document.getElementById("charAttImgInput").appendChild(t)}if(O==="charAttSource"){var n=e.elements.find(({id:i})=>i===c);document.getElementById("charAttImgInput").value=a,document.getElementById(`${c.replace("cont","src")}`).src=a,n.id=document.getElementById("charAttNameInput").value,n.action=document.getElementById("charAttJobInput").value,n.src=document.getElementById("charAttImgInput").value}document.getElementById("editorUserInput").value=""}),document.querySelector("#newCharBut").addEventListener("click",()=>{D++;var a=document.createElement("div");a.setAttribute("class","inSceneCard pendingSaveCard"),a.setAttribute("id",`newCharacterUnsaved-${D}`),a.innerHTML="[ NEW CHAR ]",a.addEventListener("click",r=>{N(r.target.id)}),document.getElementById("inSceneChars").appendChild(a)}),document.querySelector("#newElBut").addEventListener("click",()=>{U++;var a=document.createElement("div");a.setAttribute("class","inSceneCard pendingSaveCard"),a.setAttribute("id",`newElementUnsaved-${U}`),a.innerHTML="[ NEW EL ]",a.addEventListener("click",r=>{R(r.target.id)}),document.getElementById("inSceneEls").appendChild(a)})};return C(),document.querySelector("#deleteScenario").addEventListener("click",a=>{a.preventDefault();var r=document.getElementById("scenarioEdit");r.value!=""&&v.SUD.Scenarios[r.value]&&(delete v.SUD.Scenarios[r.value],console.log("tempData",v),x())}),document.getElementById("deleteEl").addEventListener("click",()=>{var a=document.createElement("div");a.setAttribute("id","warningBG"),a.setAttribute("class","warningBG"),a.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText" style="color:#ff002d;">Delete ${document.getElementById("updateScopeSelect").value}?<br><span style="font-size:.5em;">Are you sure?</span>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(a),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var t,n,i,m,g;var r=document.getElementById("updateScopeSelect").value;switch(r){case"scene":delete v.SUD.Scenarios[B].find(({name:s})=>s===e.name),x();break;case"select":var o=(t=document.getElementById(`${c.replace("char_","")}`))==null?void 0:t.innerHTML;c.includes("-cont")&&(delete v.SUD.Scenarios[B].find(({name:s})=>s===e.name).elements.find(({id:s})=>s===c),(n=document.getElementById(c.replace("-cont","")))==null||n.remove(),document.getElementById(`${c.replace("-cont","")}_global`)&&(document.getElementById(`${c.replace("-cont","")}_global`).innerHTML=`${c.replace("-cont","")}`)),c.includes("char_")&&(delete v.SUD.Scenarios[B].find(({name:s})=>s===e.name).characters.find(({persona:s})=>s.name===c),(i=document.getElementById(c.replace("char_","")))==null||i.remove(),(m=document.getElementById(`${c.replace("char_","")}-dia`))==null||m.remove(),document.getElementById(`${c.replace("char_","")}_global`)&&(document.getElementById(`${c.replace("char_","")}_global`).innerHTML=`${c.replace("char_","")}`)),c.includes("newCharacterUnsaved")&&(document.getElementById(`${o}_global`).innerHTML=`${o}`,document.getElementById(`${o}_global`).addEventListener("click",s=>{N(s.target.id.replace("_global",""),o)})),(g=document.getElementById(c))==null||g.remove();break;case"isolated":if(c.includes("-cont")){for(const s in v.SUD.Scenarios)for(const h in v.SUD.Scenarios[B])h.elements.find(({id:b})=>b===c.id)&&delete v.SUD.Scenarios[s][h].elements.find(({id:b})=>b===c);delete v.SUD.Elements.find(({id:s})=>s===c.id)}if(c.includes("char_")){for(const s in v.SUD.Scenarios)for(const h in v.SUD.Scenarios[B])h.characters.find(({persona:b})=>b.name===c)&&delete v.SUD.Scenarios[s][h].characters.find(({persona:b})=>b.name===c.persona.name);delete v.SUD.Characters.find(({persona:s})=>s.name===c.persona.name)}x();break}})}),document.getElementById("saveScene").addEventListener("click",()=>{var a=document.createElement("div");a.setAttribute("id","warningBG"),a.setAttribute("class","warningBG"),a.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText">Save ${document.getElementById("updateScopeSelect").value}?<br>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(a),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var r=document.getElementById("updateScopeSelect").value;switch(r){case"scene":break;case"isolated":if(c.includes("-cont")){var o={id:`${S.id}`,src:`${S.src}`};v.SUD.Elements.push(o)}c.includes("char_")&&v.SUD.Characters.push(I.persona);break}x()})}),document.getElementById("scenesContainer").appendChild(document.getElementById("newSceneBut")),document.getElementById("editorScreen").style.display="block",document.getElementById("mapperBut").addEventListener("click",()=>{ee()}),document.querySelector(".currentScene")?(w=document.getElementById("editorbodyDisplay"))==null||w.appendChild(document.querySelector(".currentScene")):(document.getElementById("universe").style.filter="blur(10px)",setTimeout(()=>{var a;(a=document.getElementById("editorbodyDisplay"))==null||a.appendChild(document.querySelector(".currentScene"))},1e3)),!0}else return document.getElementById("editorScreen").remove(),document.getElementById("universe").style.filter="blur(0px)",!1}export{le as editor};
