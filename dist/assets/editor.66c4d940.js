import{b as _,n as j,g as P}from"./main.64815c4b.js";import"./wScoge.fc00b881.js";const G="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",F=new _.Configuration({apiKey:G}),O=new _.OpenAIApi(F);var z=null,g=null,h=null,x=null,e=null,y=null,L=0,$=0,H=!1,T={id:"newElement",type:"div",src:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/charTemplate.png",left:"auto",right:"10%",bottom:"auto",top:"5%",zIndex:"3",width:"auto",height:"30%",speed:.9,shadow:!0,shadowEffect:"0px",brightness:"1.0",leftTo:"",rightTo:"",bottomTo:"",topTo:"",zIndexTo:"",widthTo:"",heightTo:"",shadowEffectTo:"",brightnessTo:"",action:""},S={persona:{name:"newCharacter",location:"newLocation",job:"newJob",dialogue:{intro:"Hello, I will become a new character."},images:{default:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/char-template.png"}},pns:{position:"absolute",left:"10%",leftTo:"12%",right:"auto",rightTo:"auto",bottom:0,bottomTo:0,top:"auto",topTo:"auto",zIndex:1,zIndexTo:1,width:"auto",widthTo:"auto",height:"80%",heightTo:"80%",speed:1,blur:"0px",blurTo:"0px",brightness:"1",brightnessTo:"1"},element:{class:"chr-textElement",type:"div",backgroundColor:"rgba(0,0,0,0.75)",padding:"10px 10px",borderRadius:"10px",borderTop:"0.5px solid rgb(255, 0, 45)",borderBottom:"0.5px solid rgb(255, 0, 45)",width:"350px",height:"auto",left:"auto",right:"-10%",bottom:"auto",top:"-6%",zIndex:2,position:"absolute",border:".5px solid #ff002d",pointer:{position:"absolute",width:"50px",height:"50px",borderLeft:"1px solid #ff002d",bottom:"-60px",left:"-30px",zIndex:-5,transform:"rotate(45deg)"}},actions:["chat"]};async function Y(R){var U;try{const I=await fetch("/src/sudb.json");if(!I.ok)throw new Error(`HTTP error! Status: ${I.status}`);z=await I.json(),g=z,h=z.SUD.Scenarios.Intro}catch(I){console.error("Error fetching JSON data:",I)}if(R===!1){const I=document.createElement("link");I.rel="stylesheet",I.href="editor.css",document.head.appendChild(I);var w=document.createElement("div"),W=document.getElementById("main");w.setAttribute("id","editorScreen"),w.innerHTML=`
            <div id="editorHeader">
                <div id="editorName">R.R.G</div>
                <textarea id="scenarioEdit" placeholder="Enter Scenario"></textarea>
                <div id="generateScenario" class="seBut">GENERATE</div>
                <div id="deleteScenario" class="seBut">DELETE</div>
                <div></div>
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
                                <option value="ch">&#127912; Character</option>
                                <option value="el">&#127912; Element</option>
                                <option value="scn">&#127912; Dialogue</option>
                                <option value="el">&#127912; Images</option>
                                <option value="el">&#127916; Con</option>
                                <option value="el">&#127916; Land</option>
                                <option value="el">&#127916; PopUp</option>
                                <option value="el">&#127916; Gate</option>
                                <option value="el">&#127822; Dialogue</option>
                                <option value="el">&#127822; Images</option>
                                <option value="el">&#127822; Type</option>
                            </select>
                            <div class="aiAsstBut">ADD</div>
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
                    <div class="attribute">
                        <div class="attLabel">Ref:</div>
                        <input class="attInput" type="text" id="scnAttAct" value="">
                    </div>
                </div>
                <div id="chElAtt"></div>
                <div id="updateAttributes">
                    <select id="updateScopeSelect">
                        <option value="scn">[ - SCENE - ]</option>
                        <option value="scn">IN-SCENE</option>
                        <option value="iso">ISOLATED</option>
                    </select>
                    <div class="editorButton" id="deleteEl">Delete</div>
                    <div class="editorButton id="saveScene">Save</div>
                </div>
            </div>
        `,W.appendChild(w),document.getElementById("loadScene").addEventListener("click",()=>{document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene"))});var V=document.getElementById("scenarioDropdown");for(const i in g.SUD.Scenarios){var C=document.createElement("option");C.setAttribute("value",i),C.innerHTML=i,V.appendChild(C)}x=V.value,V.addEventListener("change",()=>{var n,t;var i=g.SUD.Scenarios[V.value];h=g.SUD.Scenarios[V.value],document.getElementById("scenesContainer").innerHTML="",i.forEach(l=>{var r=document.createElement("div");r.setAttribute("class","sceneSelectElement"),r.setAttribute("id",l.name),r.innerHTML=`${l.name}`,r.addEventListener("click",u=>{M(u.target.id)}),document.getElementById("scenesContainer").appendChild(r)});var s=document.createElement("div");s.setAttribute("class","sceneSelectElement"),s.setAttribute("id","newSceneBut"),s.innerHTML="[ NEW SCENE ]",document.getElementById("scenesContainer").appendChild(s),D(),H&&((n=document.querySelector(".currentScene"))==null||n.remove(),M((t=i[0])==null?void 0:t.name,0))}),h.forEach(i=>{var s=document.createElement("div");s.setAttribute("class","sceneSelectElement"),s.setAttribute("data-position",i.position-1),s.setAttribute("id",i.name),s.innerHTML=`${i.name}`,i.name==="scene1"?s.innerHTML=`${i.name}<span style="float:right; color: var(--accent)">&#9679;</span>`:s.innerHTML=`${i.name}`,s.addEventListener("click",n=>{var l;if(e.elements.find(({id:r})=>r.includes("newElementUnsaved"))&&(e.elements=e.elements.filter(({id:r})=>!r.includes("newElementUnsaved"))),e.characters.find(({persona:r})=>r.name.includes("newCharacterUnsaved"))&&(e.characters=e.characters.filter(({persona:r})=>!r.name.includes("newCharacterUnsaved"))),H){var t=n.target.getAttribute("data-position");(l=document.querySelectorAll(".currentScene")[0])==null||l.remove(),M(n.target.id,t)}document.getElementById("headerSceneName").style.color="yellow",setTimeout(()=>{document.getElementById("headerSceneName").style.color="#ff002d"},1e3)}),document.getElementById("scenesContainer").appendChild(s)});const M=(i,s)=>{L=0,$=0,document.querySelector(".currentScene")===null&&(j(`${x}`,s),setTimeout(()=>{var n;(n=document.getElementById("editorbodyDisplay"))==null||n.appendChild(document.querySelector(".currentScene"))},1e3)),document.querySelectorAll(".sceneSelectElement").forEach(n=>{document.getElementById("scnAttName").setAttribute("class","attInput"),document.getElementById("headerSceneName").removeAttribute("class"),n.id===i?document.getElementById(i).innerHTML=`${i}<span style="float:right; color: var(--accent)">&#9679;</span>`:document.getElementById(n.id).innerHTML=`${n.id}`});for(const n in h)h[n].name===i&&(e=h[n],document.getElementById("hsc").innerHTML=`${h[n].activated}]`,document.getElementById("headerSceneName").innerHTML=`${h[n].name}`,document.getElementById("scnAttName").value=`${h[n].name}`,document.getElementById("scnAttType").value=`${h[n].type}`,document.getElementById("scnAttBg").value=`${h[n].bg}`,document.getElementById("scnAttAct").value=`${h[n].activated}`,document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",h[n].characters.forEach(t=>{var l=document.createElement("div");if(l.setAttribute("class","inSceneCard"),l.setAttribute("id",t.persona.name),l.innerHTML=`${t.persona.name}`,document.getElementById("inSceneChars").appendChild(l),"element"in t){var r=document.createElement("div");r.setAttribute("class","inSceneCard"),r.setAttribute("id",`${t.persona.name}_dialogue`),r.innerHTML=`${t.persona.name} - ${t.actions[0]}`,document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("inSceneCharsDialogues").appendChild(r),r.addEventListener("click",u=>{J(u.target.id)})}l.addEventListener("click",u=>{N(u.target.id)})}),h[n].elements.forEach(t=>{var l=document.createElement("div");l.setAttribute("class","inSceneCard"),l.setAttribute("id",t.id),l.innerHTML=`${t.id}`,document.getElementById("inSceneEls").appendChild(l),l.addEventListener("click",r=>{q(r.target.id)})}));H===!0&&document.querySelectorAll(".sceneSelectElementChar").forEach(n=>{n.remove()}),H===!0&&document.querySelectorAll(".sceneSelectElementEl").forEach(n=>{n.remove()}),g.SUD.Characters.forEach(n=>{var t=document.createElement("div"),l=document.getElementById("newCharBut");l.innerHTML="[ NEW CHARACTER ]",t.setAttribute("class","sceneSelectElementChar"),t.setAttribute("id",`${n.name}_global`);var r=e.characters.find(({persona:m})=>m.name===n.name);if(r)t.innerHTML=`${n.name}<span style="float:right; color: var(--accent)">&#9679;</span>`,t.addEventListener("click",m=>{N(m.target.id.replace("_global",""))});else{t.innerHTML=`${n.name}`;var u=()=>{L++;var m=document.createElement("div");m.setAttribute("class","inSceneCard pendingSaveCard"),m.setAttribute("id",`newCharacterUnsaved-${L}`),m.innerHTML=`${n.name}`,document.getElementById("inSceneChars").appendChild(m),t.removeEventListener("click",u),t.innerHTML=`${n.name}<span style="float:right; color: yellow">&#9679;</span>`};t.addEventListener("click",u),t.setAttribute("data-listener","true")}document.getElementById("charactersContainer").appendChild(t),document.getElementById("charactersContainer").appendChild(l)}),g.SUD.Elements.forEach(n=>{var t=document.createElement("div"),l=document.getElementById("newElBut");l.innerHTML="[ NEW ELEMENT ]",t.setAttribute("class","sceneSelectElementEl"),t.setAttribute("id",`${n.id}_global`);var r=e.elements.find(({id:m})=>m===n.id);if(r)t.innerHTML=`${n.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,t.addEventListener("click",m=>{q(m.target.id.replace("_global",""))});else{t.innerHTML=`${n.id}`;var u=()=>{$++;var m=document.createElement("div");m.setAttribute("class","inSceneCard pendingSaveCard"),m.setAttribute("id",`"newElementUnsaved"-${$}`),m.innerHTML=`${n.id}}`,document.getElementById("inSceneEls").appendChild(m),t.removeEventListener("click",u),t.innerHTML=`${n.id}<span style="float:right; color: var(--accent)">&#9679;</span>`};t.addEventListener("click",u),t.setAttribute("data-listener","true")}document.getElementById("elsContainer").appendChild(t),document.getElementById("elsContainer").appendChild(l)}),H=!0};M("scene1",0),document.getElementById("summonAI").addEventListener("click",async()=>{document.getElementById("editorAiOutput").innerHTML="Loading...";var i=document.getElementById("editorUserInput").value,s=await O.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Hello. ${i}`}],max_tokens:100}).catch(n=>{console.log(n)});console.log(s),document.getElementById("editorUserInput").value="",document.getElementById("editorAiOutput").innerHTML=`${s.data.choices[0].message.content}`});const N=i=>{var E,o,b;var s=document.querySelector(".currentScene"),n=Array.from(s.childNodes);if(!n.find(a=>a.id.includes(`${`char_${i}`}`))&&i.includes("newCharacterUnsaved-")){S.persona.name=i;var t=document.createElement("div"),l=document.createElement("img");t.classList.add("sceneElement"),t.setAttribute("id",`char_${i}`),l.setAttribute("src",S.persona.images.default),t.appendChild(l),t.style.height=S.pns.height,t.style.width=S.pns.width,t.style.left=S.pns.left,t.style.right=S.pns.right,t.style.top=S.pns.top,t.style.position=S.pns.position,t.style.zIndex=S.pns.zIndex,t.style.position="absolute",t.style.opacity="1",l.style.width="auto",l.style.height="100%",l.style.objectFit="contain",document.querySelector(".currentScene").appendChild(t),e.characters.push(S)}y=`char_${i}`,console.log(y),document.getElementById(`char_${i}`).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(`char_${i}`).style.border="none"},1e3);for(const a in e.characters)if(e.characters[a].persona.name===i){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttName" class="txtAttribute">
                    <div id="charAttNameLabel">Chr Name:</div>
                    <input type="text" id="charAttNameInput" value="${e.characters[a].persona.name}">
                </div>
                <div id="charAttLoc" class="txtAttribute">
                    <div id="charAttLocLabel">Chr Loc:</div>
                    <input type="text" id="charAttLocInput" value="${e.characters[a].persona.location}">
                </div>
                <div id="charAttJob" class="txtAttribute">
                    <div id="charAttJobLabel">Chr Job:</div>
                    <input type="text" id="charAttJobInput" value="${e.characters[a].persona.job}">
                </div>
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">Dialogue:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[a].persona.job}"></select>
                </div>
                <div id="charAttImages" class="txtAttribute">
                    <div id="charAttImageLabel">Images:</div>
                    <select type="text" class="attSelect" id="charAttImgInput" value="${e.characters[a].persona.job}"></select>
                </div>
                <div id="charAttActions" class="txtAttribute">
                    <div id="charAttActionsLabel">Chat:</div>
                    <input type="checkbox" id="charAttActionInput" value="${e.characters[a].persona.name}">
                    <label for="charAttActionInput"></label>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[a].pns.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].pns.left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[a].pns.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].pns.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[a].pns.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].pns.bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[a].pns.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].pns.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[a].pns.zIndex}</span>
                    <input type="range" min="1" max="100" value="${Number(e.characters[a].pns.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[a].pns.width}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[a].pns.width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[a].pns.height}</span>
                    <input type="range" min="0" max="200" value="${Number(e.characters[a].pns.height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Speed:</div>
                    <span class="sliderAttValue" id="speedValue">${e.characters[a].pns.speed}</span>
                    <input type="range" min="0.0" max="10.0" value="${Number(e.characters[a].pns.speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
                </div>
                <div class="sliderAttribute">
                    <div>Blur:</div>
                    <span class="sliderAttValue" id="blurValue">${e.characters[a].pns.blur}</span>
                    <input type="range" min="0" max="50" value="${Number(e.characters[a].pns.blur.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright:</div>
                    <span class="sliderAttValue" id="brightnessValue">${e.characters[a].pns.brightness}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[a].pns.brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Left To:</div>
                    <span class="sliderAttValue" id="leftToValue">${e.characters[a].pns.leftTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].pns.leftTo.replace("%",""))}" class="slider" id="leftToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right To:</div>
                    <span class="sliderAttValue" id="rightToValue">${e.characters[a].pns.rightTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].pns.rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom To:</div>
                    <span class="sliderAttValue" id="bottomToValue">${e.characters[a].pns.bottomTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].pns.bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Top To:</div>
                    <span class="sliderAttValue" id="topToValue">${e.characters[a].pns.topTo}</span>
                    <input type="range" min="-101" max="101" value="${Number((E=e.characters[a].pns.topTo)==null?void 0:E.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex To:</div>
                    <span class="sliderAttValue" id="zIndexToValue">${e.characters[a].pns.zIndexTo}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[a].pns.zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width To:</div>
                    <span class="sliderAttValue" id="widthToValue">${e.characters[a].pns.widthTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].pns.width.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height To:</div>
                    <span class="sliderAttValue" id="heightToValue">${e.characters[a].pns.heightTo}</span>
                    <input type="range" min="0" max="200" value="${Number((o=e.characters[a].pns.heightTo)==null?void 0:o.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Blur To:</div>
                    <span class="sliderAttValue" id="blurToValue">${e.characters[a].pns.blurTo}</span>
                    <input type="range" min="0" max="100" value="${Number((b=e.characters[a].pns.blurTo)==null?void 0:b.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright To:</div>
                    <span class="sliderAttValue" id="brightnessToValue">${e.characters[a].pns.brightnessTo}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[a].pns.brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",e.characters[a].actions[0]==="chat"&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(p=>{p.innerHTML==="auto"&&(document.getElementById(p.id.replace("Value","Slider")).value=101,document.querySelector(`#${p.id.replace("Value","Slider")}`).style.pointerEvents="none"),p.innerHTML===""&&(document.getElementById(p.id.replace("Value","Slider")).value=-101,document.getElementById(p.id).innerHTML="-")}),document.querySelectorAll(".attBut").forEach(p=>{p.style.display="block"}),document.querySelector("#charAttActionInput").addEventListener("change",p=>{p.target.checked?(e.characters[a].actions[0]="chat",document.getElementById(`${e.characters[a].persona.name}_dialogue`).style.display="block",g.SUD.Scenarios[x].forEach(v=>{v.characters.forEach(c=>{c.persona.name===y.replace("char_","")&&(c.actions[0]="chat")})})):(e.characters[a].actions[0]="none",document.getElementById(`${e.characters[a].persona.name}_dialogue`).style.display="none",g.SUD.Scenarios[x].forEach(v=>{v.characters.forEach(c=>{c.persona.name===y.replace("char_","")&&(c.actions[0]="")})}))});var r=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(r===!1){r=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.characters[a].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",r=!1;return}}),document.querySelectorAll(".slider").forEach(p=>{var v=g.SUD.Scenarios[x].find(({name:c})=>c===e.name).characters.find(({persona:c})=>c.name===y.replace("char_",""));p.addEventListener("input",c=>{console.log(c.target.id),document.querySelector(`#${c.target.id.replace("Slider","Value")}`).innerHTML=c.target.value,c.target.value==="101"&&(document.querySelector(`#${c.target.id.replace("Slider","Value")}`).innerHTML="auto"),c.target.value==="-101"&&(document.querySelector(`#${c.target.id.replace("Slider","Value")}`).innerHTML=""),`${c.target.value}%`!=e.characters[a].pns[c.target.id.replace("Slider","")]&&c.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="yellow":`${c.target.value}px`!=e.characters[a].pns[c.target.id.replace("Slider","")]&&c.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="yellow":Number(c.target.value)!=e.characters[a].pns[c.target.id.replace("Slider","")]&&c.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="yellow":c.target.value!=e.characters[a].pns[c.target.id.replace("Slider","")]&&c.target.getAttribute("data-valueType")==="##"?document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="yellow":(document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="#ff002d",v.pns[c.target.id.replace("Slider","")]=c.target.value);var B=document.getElementById(`${y}`);B.style.left=document.getElementById("leftValue").innerHTML+"%",B.style.right=document.getElementById("rightValue").innerHTML+"%",B.style.bottom=document.getElementById("bottomValue").innerHTML+"%",B.style.top=document.getElementById("topValue").innerHTML+"%",B.style.zIndex=document.getElementById("zIndexValue").innerHTML,B.style.width=document.getElementById("widthValue").innerHTML+"%",B.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#char_${e.characters[a].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,r===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})}),document.getElementById("attPreview").addEventListener("click",function(){P.fromTo(`#${y}`,{left:document.getElementById("leftSlider").value+"%",bottom:document.getElementById("bottomValue").value+"%",zIndex:document.getElementById("zIndexSlider").value,height:document.getElementById("heightSlider").value+"%",filter:`blur(${document.getElementById("blurSlider").value}px) brightness(${document.getElementById("brightnessSlider").value})`},{duration:document.getElementById("speedSlider").value,left:document.getElementById("leftToSlider").value+"%",bottom:document.getElementById("bottomToSlider").value+"%",zIndex:document.getElementById("zIndexToSlider").value,height:document.getElementById("heightToSlider").value+"%",filter:`blur(${document.getElementById("blurToSlider").value}px) brightness(${document.getElementById("brightnessToSlider").value})`})});var u=document.getElementById(`char_${e.characters[a].persona.name}`);u.style.left=document.getElementById("leftValue").innerHTML,u.style.right=document.getElementById("rightValue").innerHTML+"%",u.style.bottom=document.getElementById("bottomValue").innerHTML+"%",u.style.top=document.getElementById("topValue").innerHTML+"%",u.style.zIndex=document.getElementById("zIndexValue").innerHTML,u.style.width=document.getElementById("widthValue").innerHTML+"%",u.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#char_${e.characters[a].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var d=document.querySelector("#charAttTalkInput");for(const p in e.characters[a].persona.dialogue){var m=document.createElement("option");m.setAttribute("value",p),m.innerHTML=p,d.appendChild(m)}var f=document.querySelector("#charAttImgInput");for(const p in e.characters[a].persona.images){var A=document.createElement("option");A.setAttribute("value",e.characters[a].persona.images[p]),A.innerHTML=p,f.appendChild(A)}var d=document.querySelector("#charAttTalkInput");document.querySelector("#charAttTalkInput").addEventListener("change",p=>{document.querySelector(`#char_${e.characters[a].persona.name} #${e.characters[a].persona.name}_dialogue`).innerHTML=`<p id="${e.characters[a].persona.name}_dialogue">${e.characters[a].persona.dialogue[p.target.value]}</p>`;var v=document.createElement("div");v.classList.add("dialoguePointer"),v.style.position="absolute",v.style.width=e.characters[a].element.pointer.width,v.style.height=e.characters[a].element.pointer.height,v.style.bottom=e.characters[a].element.pointer.bottom,v.style.left=e.characters[a].element.pointer.left,v.style.zIndex=e.characters[a].element.pointer.zIndex,v.style.transform=e.characters[a].element.pointer.transform,v.style.borderLeft=e.characters[a].element.pointer.borderleft,document.querySelector(`#${e.characters[a].persona.name}_dialogue`).appendChild(v),document.getElementById("editorUserInput").value=`${e.characters[a].persona.dialogue[p.target.value]}`}),document.querySelector("#charAttImgInput").addEventListener("change",p=>{document.querySelector(`#char_${e.characters[a].persona.name} img:first-child`).src=p.target.value,document.getElementById("editorUserInput").value=`${p.target.value}`})}},q=i=>{var m,f,A;var s=document.querySelector(".currentScene"),n=Array.from(s.childNodes);if(!n.find(d=>d.id.includes(`${`${i}-cont`}`))&&i.includes("newElementUnsaved-")){T.id=i;var t=document.createElement("div"),l=document.createElement("img");t.classList.add("sceneElement"),t.setAttribute("id",`${i}-cont`),l.setAttribute("src",T.src),t.appendChild(l),t.style.height=T.height,t.style.width=T.width,t.style.left=T.left,t.style.right=T.right,t.style.top=T.top,t.style.position=T.position,t.style.zIndex=T.zIndex,t.style.position="absolute",t.style.opacity="1",l.style.width="auto",l.style.height="100%",l.style.objectFit="contain",document.querySelector(".currentScene").appendChild(t),console.log("new element added to scene",e.elements),e.elements.push(T)}y=`${i}-cont`,document.getElementById(y).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(y).style.border="none"},1e3);for(const d in e.elements)if(e.elements[d].id===i){document.getElementById("chElAtt").innerHTML=`
            <div id="charAttName" class="txtAttribute">
                <div id="charAttNameLabel">Ele Name:</div>
                <input type="text" id="charAttNameInput" value="${e.elements[d].id}">
            </div>
            <div id="charAttJob" class="txtAttribute">
                <div id="charAttJobLabel">Ele Action:</div>
                <input type="text" id="charAttJobInput" value="${e.elements[d].action}">
            </div>
            <div id="charAttDialogue" class="txtAttribute">
                <div id="charAttTalkLabel">Type:</div>
                <select type="text" class="attSelect" id="charAttTalkInput" value="${e.elements[d].innerType}"></select>
            </div>
            <div id="charAttImages" class="txtAttribute">
                <div id="charAttImageLabel">Images:</div>
                <select type="text" class="attSelect" id="charAttImgInput" value=""></select>
            </div>
            <div id="charAttActions" class="txtAttribute">
                <div id="charAttActionsLabel">Shadow:</div>
                <input type="checkbox" id="charAttActionInput" value="">
                <label for="charAttActionInput"></label>
            </div>
            <div class="sliderAttribute">
                <div>Left:</div>
                <span class="sliderAttValue" id="leftValue">${e.elements[d].left}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[d].left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right:</div>
                <span class="sliderAttValue" id="rightValue">${e.elements[d].right}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[d].right)}" class="slider" id="rightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom:</div>
                <span class="sliderAttValue" id="bottomValue">${e.elements[d].bottom}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[d].bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
            </div>
            <div class="sliderAttribute">
                <div>Top:</div>
                <span class="sliderAttValue" id="topValue">${e.elements[d].top}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[d].top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex:</div>
                <span class="sliderAttValue" id="zIndexValue">${e.elements[d].zIndex}</span>
                <input type="range" min="1" max="100" value="${Number(e.elements[d].zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width:</div>
                <span class="sliderAttValue" id="widthValue">${e.elements[d].width}</span>
                <input type="range" min="0" max="100" value="${Number(e.elements[d].width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height:</div>
                <span class="sliderAttValue" id="heightValue">${e.elements[d].height}</span>
                <input type="range" min="0" max="200" value="${Number(e.elements[d].height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Speed:</div>
                <span class="sliderAttValue" id="speedValue">${e.elements[d].speed}</span>
                <input type="range" min="0.0" max="10.0" value="${Number(e.elements[d].speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
            </div>
            <div class="sliderAttribute">
                <div>Blur:</div>
                <span class="sliderAttValue" id="blurValue">${e.elements[d].shadowEffect}</span>
                <input type="range" min="0" max="50" value="${Number(e.elements[d].shadowEffect.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright:</div>
                <span class="sliderAttValue" id="brightnessValue">${e.elements[d].brightness}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[d].brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Left To:</div>
                <span class="sliderAttValue" id="leftToValue">${e.elements[d].leftTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[d].leftTo)}" class="slider" id="leftToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right To:</div>
                <span class="sliderAttValue" id="rightToValue">${e.elements[d].rightTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[d].rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom To:</div>
                <span class="sliderAttValue" id="bottomToValue">${e.elements[d].bottomTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[d].bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Top To:</div>
                <span class="sliderAttValue" id="topToValue">${e.elements[d].topTo}</span>
                <input type="range" min="-101" max="101" value="${Number((m=e.elements[d].topTo)==null?void 0:m.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex To:</div>
                <span class="sliderAttValue" id="zIndexToValue">${e.elements[d].zIndexTo}</span>
                <input type="range" min="0" max="100" value="${Number(e.elements[d].zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width To:</div>
                <span class="sliderAttValue" id="widthToValue">${e.elements[d].widthTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[d].widthTo.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height To:</div>
                <span class="sliderAttValue" id="heightToValue">${e.elements[d].heightTo}</span>
                <input type="range" min="0" max="200" value="${Number((f=e.elements[d].heightTo)==null?void 0:f.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Blur To:</div>
                <span class="sliderAttValue" id="blurToValue">${e.elements[d].shadowEffectTo}</span>
                <input type="range" min="0" max="100" value="${Number((A=e.elements[d].shadowEffectTo)==null?void 0:A.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright To:</div>
                <span class="sliderAttValue" id="brightnessToValue">${e.elements[d].brightnessTo}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[d].brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
            </div>
        `,document.querySelector("#editorUserInput").innerHTML="",e.elements[d].shadow===!0&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(E=>{E.innerHTML==="auto"&&(document.getElementById(E.id.replace("Value","Slider")).value=101,document.querySelector(`#${E.id.replace("Value","Slider")}`).style.pointerEvents="none"),E.innerHTML===""&&(document.getElementById(E.id.replace("Value","Slider")).value=-101,document.getElementById(E.id).innerHTML="-")});var r=document.getElementById(`${e.elements[d].id}-cont`);r.style.left=document.getElementById("leftValue").innerHTML,r.style.right=document.getElementById("rightValue").innerHTML+"%",r.style.bottom=document.getElementById("bottomValue").innerHTML+"%",r.style.top=document.getElementById("topValue").innerHTML+"%",r.style.zIndex=document.getElementById("zIndexValue").innerHTML,r.style.width=document.getElementById("widthValue").innerHTML+"%",r.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#${e.elements[d].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var u=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(u===!1){u=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.elements[d].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",u=!1;return}}),document.querySelectorAll(".slider").forEach(E=>{E.addEventListener("input",o=>{document.querySelector(`#${o.target.id.replace("Slider","Value")}`).innerHTML=o.target.value,o.target.value==="101"&&(document.querySelector(`#${o.target.id.replace("Slider","Value")}`).innerHTML="auto"),o.target.value==="-101"&&(document.querySelector(`#${o.target.id.replace("Slider","Value")}`).innerHTML=""),`${o.target.value}%`!=e.elements[d][o.target.id.replace("Slider","")]&&o.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${o.target.id.replace("Slider","Value")}`).style.color="yellow":`${o.target.value}px`!=e.elements[d][o.target.id.replace("Slider","")]&&o.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${o.target.id.replace("Slider","Value")}`).style.color="yellow":Number(o.target.value)!=e.elements[d][o.target.id.replace("Slider","")]&&o.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${o.target.id.replace("Slider","Value")}`).style.color="yellow":o.target.value!=e.elements[d][o.target.id.replace("Slider","")]&&o.target.getAttribute("data-valueType")==="##"?document.querySelector(`#${o.target.id.replace("Slider","Value")}`).style.color="yellow":(console.log("not changed"),document.querySelector(`#${o.target.id.replace("Slider","Value")}`).style.color="#ff002d");var b=document.getElementById(`${y}`);b.style.left=document.getElementById("leftValue").innerHTML+"%",b.style.right=document.getElementById("rightValue").innerHTML+"%",b.style.bottom=document.getElementById("bottomValue").innerHTML+"%",b.style.top=document.getElementById("topValue").innerHTML+"%",b.style.zIndex=document.getElementById("zIndexValue").innerHTML,b.style.width=document.getElementById("widthValue").innerHTML+"%",b.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#${e.elements[d].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,u===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})})}},J=i=>{y=`${i}`,document.getElementById(y).style.color="yellow",setTimeout(()=>{document.getElementById(y).style.color="#ff002d"},1e3);for(const n in e.characters)if("element"in e.characters[n]){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">Type:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[n].element.type}"></select>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[n].element.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].element.left)}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[n].element.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].element.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[n].element.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].element.bottom.replace("%",""))}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[n].element.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].element.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[n].element.zIndex}</span>
                    <input type="range" min="-10" max="100" value="${Number(e.characters[n].element.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[n].element.width}</span>
                    <input type="range" min="0" max="600" value="${Number(e.characters[n].element.width.replace("px",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[n].element.height}</span>
                    <input type="range" min="0" max="600" value="${Number(e.characters[n].element.height.replace("px",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",document.querySelectorAll(".sliderAttValue").forEach(t=>{t.innerHTML==="auto"&&(document.getElementById(t.id.replace("Value","Slider")).value=101,document.querySelector(`#${t.id.replace("Value","Slider")}`).style.pointerEvents="none"),t.innerHTML===""&&(document.getElementById(t.id.replace("Value","Slider")).value=-101,document.getElementById(t.id).innerHTML="-")});var s=document.getElementById(`${e.characters[n].persona.name}_dialogue`);s.style.left=document.getElementById("leftValue").innerHTML,s.style.right=document.getElementById("rightValue").innerHTML+"%",s.style.bottom=document.getElementById("bottomValue").innerHTML+"%",s.style.top=document.getElementById("topValue").innerHTML+"%",s.style.zIndex=document.getElementById("zIndexValue").innerHTML,s.style.width=document.getElementById("widthValue").innerHTML+"px",s.style.height=document.getElementById("heightValue").innerHTML,document.querySelectorAll(".slider").forEach(t=>{t.addEventListener("input",l=>{document.querySelector(`#${l.target.id.replace("Slider","Value")}`).innerHTML=l.target.value,l.target.value==="101"&&(document.querySelector(`#${l.target.id.replace("Slider","Value")}`).innerHTML="auto"),l.target.value==="-101"&&(document.querySelector(`#${l.target.id.replace("Slider","Value")}`).innerHTML=""),`${l.target.value}%`!=e.elements[n][l.target.id.replace("Slider","")]&&l.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${l.target.id.replace("Slider","Value")}`).style.color="yellow":`${l.target.value}px`!=e.elements[n][l.target.id.replace("Slider","")]&&l.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${l.target.id.replace("Slider","Value")}`).style.color="yellow":Number(l.target.value)!=e.elements[n][l.target.id.replace("Slider","")]&&l.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${l.target.id.replace("Slider","Value")}`).style.color="yellow":l.target.value!=e.elements[n][l.target.id.replace("Slider","")]&&l.target.getAttribute("data-valueType")==="##"?document.querySelector(`#${l.target.id.replace("Slider","Value")}`).style.color="yellow":(console.log("not changed"),document.querySelector(`#${l.target.id.replace("Slider","Value")}`).style.color="#ff002d");var r=document.getElementById(`${e.characters[n].persona.name}_dialogue`),u=document.getElementById("leftValue").innerHTML,m=document.getElementById("rightValue").innerHTML,f=document.getElementById("bottomValue").innerHTML,A=document.getElementById("topValue").innerHTML,d=document.getElementById("zIndexValue").innerHTML,E=document.getElementById("widthValue").innerHTML,o=document.getElementById("heightValue").innerHTML;r.setAttribute("style",`left: ${u} !important; right: ${m}% !important; bottom: ${f}% !important; top: ${A}% !important; z-index: ${d} !important; width: ${E}px !important; height: ${o}px !important;inset: -5% -10% auto auto; z-index: 2; border-radius: 10px; border-top: 0.5px solid rgb(255, 0, 45); border-bottom: 0.5px solid rgb(255, 0, 45); padding: 10px; transform: translate(0px, 0px); transform-origin: left bottom; translate: none; rotate: none; scale: none;`)})})}};var k=()=>{const i=JSON.stringify(g);fetch("http://localhost:3001/save-json",{method:"POST",body:i,headers:{"Content-Type":"application/json"}}).then(s=>{s.ok?console.log("JSON data saved successfully"):console.error("Error saving JSON data")}).catch(s=>{console.error("Error saving JSON data:",s)})};document.querySelector("#generateScenario").addEventListener("click",i=>{i.preventDefault();var s=document.getElementById("scenarioEdit");s.value!=""&&(g.SUD.Scenarios[s.value]=[],console.log("tempData",g),k())});var D=()=>{document.querySelector("#newSceneBut").addEventListener("click",()=>{var n;L=0,$=0;var i=document.createElement("div"),s=document.getElementById("editorbodyDisplay");i.setAttribute("class","currentScene"),i.setAttribute("id","currentSceneView_draft"),i.setAttribute("style","z-index: 10; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); opacity: 1;"),s.appendChild(i),document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("headerSceneName").innerHTML="[ NEW SCENE ]",document.getElementById("headerSceneName").setAttribute("class","pendingSaveText"),(n=document.querySelector(".currentScene"))==null||n.remove(),document.getElementById("scnAttName").value="[ NEW SCENE ]",document.getElementById("scnAttName").setAttribute("class","attInput pendingSaveText"),document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var l=()=>{var r=document.createElement("div");r.setAttribute("class","inSceneCard pendingSaveCard"),r.setAttribute("id","newElementUnsaved"),r.innerHTML=`${t.id.replace("_global","")}`,document.getElementById("inSceneEls").appendChild(r),t.removeEventListener("click",l),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};t.getAttribute("data-listener")||t.addEventListener("click",l),t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var l=()=>{var r=document.createElement("div");r.setAttribute("class","inSceneCard pendingSaveCard"),r.setAttribute("id","newElementUnsaved"),r.innerHTML=`${t.id.replace("_global","")}`,document.getElementById("inSceneChars").appendChild(r),t.removeEventListener("click",l),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};t.getAttribute("data-listener")||t.addEventListener("click",l),t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElement").forEach(t=>{t.id==="newSceneBut"?t.innerHTML=`${t.id}<span style="float:right; color: yellow">&#9679;</span>`:t.innerHTML=`${t.id.replace("_global","")}`})}),document.querySelector("#newCharBut").addEventListener("click",()=>{L++;var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id",`newCharacterUnsaved-${L}`),i.innerHTML="[ NEW CHAR ]",i.addEventListener("click",s=>{N(s.target.id)}),document.getElementById("inSceneChars").appendChild(i)}),document.querySelector("#newElBut").addEventListener("click",()=>{$++;var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id",`newElementUnsaved-${$}`),i.innerHTML="[ NEW EL ]",i.addEventListener("click",s=>{q(s.target.id)}),document.getElementById("inSceneEls").appendChild(i)})};return D(),document.querySelector("#deleteScenario").addEventListener("click",i=>{i.preventDefault();var s=document.getElementById("scenarioEdit");s.value!=""&&g.SUD.Scenarios[s.value]&&(delete g.SUD.Scenarios[s.value],console.log("tempData",g),k())}),document.getElementById("scenesContainer").appendChild(document.getElementById("newSceneBut")),document.getElementById("editorScreen").style.display="block",document.querySelector(".currentScene")?(U=document.getElementById("editorbodyDisplay"))==null||U.appendChild(document.querySelector(".currentScene")):(document.getElementById("universe").style.filter="blur(10px)",setTimeout(()=>{var i;(i=document.getElementById("editorbodyDisplay"))==null||i.appendChild(document.querySelector(".currentScene"))},1e3)),!0}else return document.getElementById("editorScreen").remove(),document.getElementById("universe").style.filter="blur(0px)",!1}export{Y as editor};
