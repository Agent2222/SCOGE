import{b as k,n as R,g as W}from"./main.76f0582b.js";import"./wScoge.fc00b881.js";const J="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",j=new k.Configuration({apiKey:J}),P=new k.OpenAIApi(j);var S=null,A=null,g=null,z=null,e=null,T=null,B=0,f=0,$=!1,h={id:"newElement",type:"div",src:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/charTemplate.png",left:"auto",right:"10%",bottom:"auto",top:"5%",zIndex:"3",width:"auto",height:"30%",speed:.9,shadow:!0,shadowEffect:"0px",brightness:"1.0",leftTo:"",rightTo:"",bottomTo:"",topTo:"",zIndexTo:"",widthTo:"",heightTo:"",shadowEffectTo:"",brightnessTo:"",action:""},b={persona:{name:"newCharacter",location:"newLocation",job:"newJob",dialogue:{intro:"Hello, I will become a new character."},images:{default:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/char-template.png"}},pns:{position:"absolute",left:"10%",leftTo:"12%",right:"auto",rightTo:"auto",bottom:0,bottomTo:0,top:"auto",topTo:"auto",zIndex:1,zIndexTo:1,width:"auto",widthTo:"auto",height:"80%",heightTo:"80%",speed:1,blur:"0px",blurTo:"0px",brightness:"1",brightnessTo:"1"},element:{class:"chr-textElement",type:"div",backgroundColor:"rgba(0,0,0,0.75)",padding:"10px 10px",borderRadius:"10px",borderTop:"0.5px solid rgb(255, 0, 45)",borderBottom:"0.5px solid rgb(255, 0, 45)",width:"350px",height:"auto",left:"auto",right:"-10%",bottom:"auto",top:"-6%",zIndex:2,position:"absolute",border:".5px solid #ff002d",pointer:{position:"absolute",width:"50px",height:"50px",borderLeft:"1px solid #ff002d",bottom:"-60px",left:"-30px",zIndex:-5,transform:"rotate(45deg)"}},actions:["chat"]};async function O(D){var q;try{const E=await fetch("/src/sudb.json");if(!E.ok)throw new Error(`HTTP error! Status: ${E.status}`);S=await E.json(),A=S,g=S.SUD.Scenarios.Intro}catch(E){console.error("Error fetching JSON data:",E)}if(D===!1){const E=document.createElement("link");E.rel="stylesheet",E.href="editor.css",document.head.appendChild(E);var V=document.createElement("div"),_=document.getElementById("main");V.setAttribute("id","editorScreen"),V.innerHTML=`
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
                        <div class="editorButton">Delete</div>
                        <div class="editorButton" id="loadScene">Load</div>
                        <div class="editorButton">Save</div>
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
                                <option value="el">&#127916; Name</option>
                                <option value="el">&#127916; Bg</option>
                                <option value="el">&#127916; Con</option>
                                <option value="el">&#127916; Land</option>
                                <option value="el">&#127916; PopUp</option>
                                <option value="el">&#127916; Gate</option>
                                <option value="el">&#127822; Name</option>
                                <option value="el">&#127822; Loc</option>
                                <option value="el">&#127822; Job</option>
                                <option value="el">&#127822; Dialogue</option>
                                <option value="el">&#127822; Images</option>
                                <option value="el">&#127822; Type</option>
                            </select>
                            <div class="aiAsstBut">ADD</div>
                            <div class="aiAsstBut">GENERATE</div>
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
                    <div id="scope">[ Scene1 ic]</div>
                    <div class="editorButton" id="deleteEl">Delete</div>
                    <div class="editorButton id="saveScene">Save</div>
                </div>
            </div>
        `,_.appendChild(V),document.getElementById("loadScene").addEventListener("click",()=>{document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene"))});var L=document.getElementById("scenarioDropdown");for(const i in S.SUD.Scenarios){var H=document.createElement("option");H.setAttribute("value",i),H.innerHTML=i,L.appendChild(H)}z=L.value,L.addEventListener("change",()=>{var a,t;var i=S.SUD.Scenarios[L.value];g=S.SUD.Scenarios[L.value],document.getElementById("scenesContainer").innerHTML="",i.forEach(d=>{var s=document.createElement("div");s.setAttribute("class","sceneSelectElement"),s.setAttribute("id",d.name),s.innerHTML=`${d.name}`,s.addEventListener("click",p=>{x(p.target.id)}),document.getElementById("scenesContainer").appendChild(s)});var l=document.createElement("div");l.setAttribute("class","sceneSelectElement"),l.setAttribute("id","newSceneBut"),l.innerHTML="[ NEW SCENE ]",document.getElementById("scenesContainer").appendChild(l),N(),$&&((a=document.querySelector(".currentScene"))==null||a.remove(),x((t=i[0])==null?void 0:t.name,0))}),g.forEach(i=>{var l=document.createElement("div");l.setAttribute("class","sceneSelectElement"),l.setAttribute("data-position",i.position-1),l.setAttribute("id",i.name),l.innerHTML=`${i.name}`,i.name==="scene1"?l.innerHTML=`${i.name}<span style="float:right; color: var(--accent)">&#9679;</span>`:l.innerHTML=`${i.name}`,l.addEventListener("click",a=>{var r;if(e.elements.find(({id:v})=>v.includes("newElementUnsaved"))){var t=e.elements.find(({id:v})=>v.includes("newElementUnsaved")),d=e.elements.indexOf(t);d>-1&&e.elements.splice(d,1)}if(e.characters.find(({persona:v})=>v.name.includes("newCharacterUnsaved"))){var s=e.characters.find(({persona:v})=>v.name.includes("newCharacterUnsaved")),p=e.characters.indexOf(s);p>-1&&e.characters.splice(p,1)}if($){var o=a.target.getAttribute("data-position");(r=document.querySelectorAll(".currentScene")[0])==null||r.remove(),x(a.target.id,o)}document.getElementById("headerSceneName").style.color="yellow",setTimeout(()=>{document.getElementById("headerSceneName").style.color="#ff002d"},1e3)}),document.getElementById("scenesContainer").appendChild(l)});const x=(i,l)=>{B=0,f=0,document.querySelector(".currentScene")===null&&(R(`${z}`,l),setTimeout(()=>{var a;(a=document.getElementById("editorbodyDisplay"))==null||a.appendChild(document.querySelector(".currentScene"))},1e3)),document.querySelectorAll(".sceneSelectElement").forEach(a=>{document.getElementById("scnAttName").setAttribute("class","attInput"),document.getElementById("headerSceneName").removeAttribute("class"),a.id===i?document.getElementById(i).innerHTML=`${i}<span style="float:right; color: var(--accent)">&#9679;</span>`:document.getElementById(a.id).innerHTML=`${a.id}`});for(const a in g)g[a].name===i&&(e=g[a],document.getElementById("hsc").innerHTML=`${g[a].activated}]`,document.getElementById("headerSceneName").innerHTML=`${g[a].name}`,document.getElementById("scnAttName").value=`${g[a].name}`,document.getElementById("scnAttType").value=`${g[a].type}`,document.getElementById("scnAttBg").value=`${g[a].bg}`,document.getElementById("scnAttAct").value=`${g[a].activated}`,document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",g[a].characters.forEach(t=>{var d=document.createElement("div");if(d.setAttribute("class","inSceneCard"),d.setAttribute("id",t.persona.name),d.innerHTML=`${t.persona.name}`,document.getElementById("inSceneChars").appendChild(d),"element"in t){var s=document.createElement("div");s.setAttribute("class","inSceneCard"),s.setAttribute("id",`${t.persona.name}_dialogue`),s.innerHTML=`${t.persona.name} - ${t.actions[0]}`,document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("inSceneCharsDialogues").appendChild(s),s.addEventListener("click",p=>{U(p.target.id)})}d.addEventListener("click",p=>{M(p.target.id)})}),g[a].elements.forEach(t=>{var d=document.createElement("div");d.setAttribute("class","inSceneCard"),d.setAttribute("id",t.id),d.innerHTML=`${t.id}`,document.getElementById("inSceneEls").appendChild(d),d.addEventListener("click",s=>{C(s.target.id)})}));$===!0&&document.querySelectorAll(".sceneSelectElementChar").forEach(a=>{a.remove()}),$===!0&&document.querySelectorAll(".sceneSelectElementEl").forEach(a=>{a.remove()}),S.SUD.Characters.forEach(a=>{var t=document.createElement("div"),d=document.getElementById("newCharBut");d.innerHTML="[ NEW CHARACTER ]",t.setAttribute("class","sceneSelectElementChar"),t.setAttribute("id",`${a.name}_global`);var s=e.characters.find(({persona:o})=>o.name===a.name);if(s)t.innerHTML=`${a.name}<span style="float:right; color: var(--accent)">&#9679;</span>`,t.addEventListener("click",o=>{M(o.target.id.replace("_global",""))});else{t.innerHTML=`${a.name}`;var p=()=>{B++;var o=document.createElement("div");o.setAttribute("class","inSceneCard pendingSaveCard"),o.setAttribute("id",`newCharacterUnsaved-${B}`),o.innerHTML=`${a.name}`,document.getElementById("inSceneChars").appendChild(o),t.removeEventListener("click",p),t.innerHTML=`${a.name}<span style="float:right; color: yellow">&#9679;</span>`};t.addEventListener("click",p),t.setAttribute("data-listener","true")}document.getElementById("charactersContainer").appendChild(t),document.getElementById("charactersContainer").appendChild(d)}),S.SUD.Elements.forEach(a=>{var t=document.createElement("div"),d=document.getElementById("newElBut");d.innerHTML="[ NEW ELEMENT ]",t.setAttribute("class","sceneSelectElementEl"),t.setAttribute("id",`${a.id}_global`);var s=e.elements.find(({id:o})=>o===a.id);if(s)t.innerHTML=`${a.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,t.addEventListener("click",o=>{C(o.target.id.replace("_global",""))});else{t.innerHTML=`${a.id}`;var p=()=>{f++;var o=document.createElement("div");o.setAttribute("class","inSceneCard pendingSaveCard"),o.setAttribute("id",`"newElementUnsaved"-${f}`),o.innerHTML=`${a.id}}`,document.getElementById("inSceneEls").appendChild(o),t.removeEventListener("click",p),t.innerHTML=`${a.id}<span style="float:right; color: var(--accent)">&#9679;</span>`};t.addEventListener("click",p),t.setAttribute("data-listener","true")}document.getElementById("elsContainer").appendChild(t),document.getElementById("elsContainer").appendChild(d)}),$=!0};x("scene1",0),document.getElementById("summonAI").addEventListener("click",async()=>{document.getElementById("editorAiOutput").innerHTML="Loading...";var i=document.getElementById("editorUserInput").value,l=await P.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Hello. ${i}`}],max_tokens:100}).catch(a=>{console.log(a)});console.log(l),document.getElementById("editorUserInput").value="",document.getElementById("editorAiOutput").innerHTML=`${l.data.choices[0].message.content}`});const M=i=>{var v,u,y;if(!e.characters.find(n=>n.name===i)&&(e.characters.push(b),console.log(e.characters),i.includes("newCharacterUnsaved-"))){b.persona.name=i;var l=document.createElement("div"),a=document.createElement("img");l.classList.add("sceneElement"),l.setAttribute("id",`char_${i}`),a.setAttribute("src",b.persona.images.default),l.appendChild(a),l.style.height=b.pns.height,l.style.width=b.pns.width,l.style.left=b.pns.left,l.style.right=b.pns.right,l.style.top=b.pns.top,l.style.position=b.pns.position,l.style.zIndex=b.pns.zIndex,l.style.position="absolute",l.style.opacity="1",a.style.width="auto",a.style.height="100%",a.style.objectFit="contain",document.querySelector(".currentScene").appendChild(l)}T=`char_${i}`,document.getElementById("scope").innerHTML=`[ ${i} ]`,document.getElementById(`char_${i}`).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(`char_${i}`).style.border="none"},1e3);for(const n in e.characters)if(e.characters[n].persona.name===i){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttName" class="txtAttribute">
                    <div id="charAttNameLabel">Chr Name:</div>
                    <input type="text" id="charAttNameInput" value="${e.characters[n].persona.name}">
                </div>
                <div id="charAttLoc" class="txtAttribute">
                    <div id="charAttLocLabel">Chr Loc:</div>
                    <input type="text" id="charAttLocInput" value="${e.characters[n].persona.location}">
                </div>
                <div id="charAttJob" class="txtAttribute">
                    <div id="charAttJobLabel">Chr Job:</div>
                    <input type="text" id="charAttJobInput" value="${e.characters[n].persona.job}">
                </div>
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">Dialogue:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[n].persona.job}"></select>
                </div>
                <div id="charAttImages" class="txtAttribute">
                    <div id="charAttImageLabel">Images:</div>
                    <select type="text" class="attSelect" id="charAttImgInput" value="${e.characters[n].persona.job}"></select>
                </div>
                <div id="charAttActions" class="txtAttribute">
                    <div id="charAttActionsLabel">Chat:</div>
                    <input type="checkbox" id="charAttActionInput" value="${e.characters[n].persona.name}">
                    <label for="charAttActionInput"></label>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[n].pns.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].pns.left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[n].pns.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].pns.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[n].pns.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].pns.bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[n].pns.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].pns.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[n].pns.zIndex}</span>
                    <input type="range" min="1" max="100" value="${Number(e.characters[n].pns.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[n].pns.width}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[n].pns.width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[n].pns.height}</span>
                    <input type="range" min="0" max="200" value="${Number(e.characters[n].pns.height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Speed:</div>
                    <span class="sliderAttValue" id="speedValue">${e.characters[n].pns.speed}</span>
                    <input type="range" min="0.0" max="10.0" value="${Number(e.characters[n].pns.speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
                </div>
                <div class="sliderAttribute">
                    <div>Blur:</div>
                    <span class="sliderAttValue" id="blurValue">${e.characters[n].pns.blur}</span>
                    <input type="range" min="0" max="50" value="${Number(e.characters[n].pns.blur.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright:</div>
                    <span class="sliderAttValue" id="brightnessValue">${e.characters[n].pns.brightness}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[n].pns.brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Left To:</div>
                    <span class="sliderAttValue" id="leftToValue">${e.characters[n].pns.leftTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].pns.leftTo.replace("%",""))}" class="slider" id="leftToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right To:</div>
                    <span class="sliderAttValue" id="rightToValue">${e.characters[n].pns.rightTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].pns.rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom To:</div>
                    <span class="sliderAttValue" id="bottomToValue">${e.characters[n].pns.bottomTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].pns.bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Top To:</div>
                    <span class="sliderAttValue" id="topToValue">${e.characters[n].pns.topTo}</span>
                    <input type="range" min="-101" max="101" value="${Number((v=e.characters[n].pns.topTo)==null?void 0:v.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex To:</div>
                    <span class="sliderAttValue" id="zIndexToValue">${e.characters[n].pns.zIndexTo}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[n].pns.zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width To:</div>
                    <span class="sliderAttValue" id="widthToValue">${e.characters[n].pns.widthTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[n].pns.width.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height To:</div>
                    <span class="sliderAttValue" id="heightToValue">${e.characters[n].pns.heightTo}</span>
                    <input type="range" min="0" max="200" value="${Number((u=e.characters[n].pns.heightTo)==null?void 0:u.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Blur To:</div>
                    <span class="sliderAttValue" id="blurToValue">${e.characters[n].pns.blurTo}</span>
                    <input type="range" min="0" max="100" value="${Number((y=e.characters[n].pns.blurTo)==null?void 0:y.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright To:</div>
                    <span class="sliderAttValue" id="brightnessToValue">${e.characters[n].pns.brightnessTo}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[n].pns.brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",e.characters[n].actions[0]==="chat"&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(m=>{m.innerHTML==="auto"&&(document.getElementById(m.id.replace("Value","Slider")).value=101,document.querySelector(`#${m.id.replace("Value","Slider")}`).style.pointerEvents="none"),m.innerHTML===""&&(document.getElementById(m.id.replace("Value","Slider")).value=-101,document.getElementById(m.id).innerHTML="-")}),document.querySelectorAll(".attBut").forEach(m=>{m.style.display="block"}),document.querySelector("#charAttActionInput").addEventListener("change",m=>{m.target.checked?(e.characters[n].actions[0]="chat",document.getElementById(`${e.characters[n].persona.name}_dialogue`).style.display="block"):(e.characters[n].actions[0]="none",document.getElementById(`${e.characters[n].persona.name}_dialogue`).style.display="none")});var t=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(t===!1){t=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.characters[n].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",t=!1;return}}),document.querySelectorAll(".slider").forEach(m=>{m.addEventListener("input",c=>{document.querySelector(`#${c.target.id.replace("Slider","Value")}`).innerHTML=c.target.value,console.log(T.replace("char_",""),c.target.id.replace("Slider",""),c.target.value),c.target.value==="101"&&(document.querySelector(`#${c.target.id.replace("Slider","Value")}`).innerHTML="auto"),c.target.value==="-101"&&(document.querySelector(`#${c.target.id.replace("Slider","Value")}`).innerHTML=""),`${c.target.value}%`!=e.characters[n].pns[c.target.id.replace("Slider","")]&&c.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="yellow":`${c.target.value}px`!=e.characters[n].pns[c.target.id.replace("Slider","")]&&c.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="yellow":Number(c.target.value)!=e.characters[n].pns[c.target.id.replace("Slider","")]&&c.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="yellow":c.target.value!=e.characters[n].pns[c.target.id.replace("Slider","")]&&c.target.getAttribute("data-valueType")==="##"?document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="yellow":(console.log("not changed"),document.querySelector(`#${c.target.id.replace("Slider","Value")}`).style.color="#ff002d");var I=document.getElementById(`char_${e.characters[n].persona.name}`);I.style.left=document.getElementById("leftValue").innerHTML+"%",I.style.right=document.getElementById("rightValue").innerHTML+"%",I.style.bottom=document.getElementById("bottomValue").innerHTML+"%",I.style.top=document.getElementById("topValue").innerHTML+"%",I.style.zIndex=document.getElementById("zIndexValue").innerHTML,I.style.width=document.getElementById("widthValue").innerHTML+"%",I.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#char_${e.characters[n].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,t===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})}),document.getElementById("attPreview").addEventListener("click",function(){W.fromTo(`#${T}`,{left:document.getElementById("leftSlider").value+"%",bottom:document.getElementById("bottomValue").value+"%",zIndex:document.getElementById("zIndexSlider").value,height:document.getElementById("heightSlider").value+"%",filter:`blur(${document.getElementById("blurSlider").value}px) brightness(${document.getElementById("brightnessSlider").value})`},{duration:document.getElementById("speedSlider").value,left:document.getElementById("leftToSlider").value+"%",bottom:document.getElementById("bottomToSlider").value+"%",zIndex:document.getElementById("zIndexToSlider").value,height:document.getElementById("heightToSlider").value+"%",filter:`blur(${document.getElementById("blurToSlider").value}px) brightness(${document.getElementById("brightnessToSlider").value})`})});var d=document.getElementById(`char_${e.characters[n].persona.name}`);d.style.left=document.getElementById("leftValue").innerHTML,d.style.right=document.getElementById("rightValue").innerHTML+"%",d.style.bottom=document.getElementById("bottomValue").innerHTML+"%",d.style.top=document.getElementById("topValue").innerHTML+"%",d.style.zIndex=document.getElementById("zIndexValue").innerHTML,d.style.width=document.getElementById("widthValue").innerHTML+"%",d.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#char_${e.characters[n].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var r=document.querySelector("#charAttTalkInput");for(const m in e.characters[n].persona.dialogue){var s=document.createElement("option");s.setAttribute("value",m),s.innerHTML=m,r.appendChild(s)}var p=document.querySelector("#charAttImgInput");for(const m in e.characters[n].persona.images){var o=document.createElement("option");o.setAttribute("value",e.characters[n].persona.images[m]),o.innerHTML=m,p.appendChild(o)}var r=document.querySelector("#charAttTalkInput");document.querySelector("#charAttTalkInput").addEventListener("change",m=>{document.querySelector(`#char_${e.characters[n].persona.name} #${e.characters[n].persona.name}_dialogue`).innerHTML=`<p id="${e.characters[n].persona.name}_dialogue">${e.characters[n].persona.dialogue[m.target.value]}</p>`;var c=document.createElement("div");c.classList.add("dialoguePointer"),c.style.position="absolute",c.style.width=e.characters[n].element.pointer.width,c.style.height=e.characters[n].element.pointer.height,c.style.bottom=e.characters[n].element.pointer.bottom,c.style.left=e.characters[n].element.pointer.left,c.style.zIndex=e.characters[n].element.pointer.zIndex,c.style.transform=e.characters[n].element.pointer.transform,c.style.borderLeft=e.characters[n].element.pointer.borderleft,document.querySelector(`#${e.characters[n].persona.name}_dialogue`).appendChild(c),document.getElementById("editorUserInput").value=`${e.characters[n].persona.dialogue[m.target.value]}`}),document.querySelector("#charAttImgInput").addEventListener("change",m=>{document.querySelector(`#char_${e.characters[n].persona.name} img:first-child`).src=m.target.value,document.getElementById("editorUserInput").value=`${m.target.value}`})}},C=i=>{var s,p,o;if(!e.elements.find(r=>r.id===i)&&(e.elements.push(h),i.includes("newElementUnsaved-"))){h.id=i;var l=document.createElement("div"),a=document.createElement("img");l.classList.add("sceneElement"),l.setAttribute("id",`${i}-cont`),a.setAttribute("src",h.src),l.appendChild(a),l.style.height=h.height,l.style.width=h.width,l.style.left=h.left,l.style.right=h.right,l.style.top=h.top,l.style.position=h.position,l.style.zIndex=h.zIndex,l.style.position="absolute",l.style.opacity="1",a.style.width="auto",a.style.height="100%",a.style.objectFit="contain",document.querySelector(".currentScene").appendChild(l)}T=`${i}-cont`,document.getElementById("scope").innerHTML=`[ ${i} ]`,document.getElementById(T).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(T).style.border="none"},1e3);for(const r in e.elements)if(e.elements[r].id===i){document.getElementById("chElAtt").innerHTML=`
            <div id="charAttName" class="txtAttribute">
                <div id="charAttNameLabel">Ele Name:</div>
                <input type="text" id="charAttNameInput" value="${e.elements[r].id}">
            </div>
            <div id="charAttJob" class="txtAttribute">
                <div id="charAttJobLabel">Ele Action:</div>
                <input type="text" id="charAttJobInput" value="${e.elements[r].action}">
            </div>
            <div id="charAttDialogue" class="txtAttribute">
                <div id="charAttTalkLabel">Type:</div>
                <select type="text" class="attSelect" id="charAttTalkInput" value="${e.elements[r].innerType}"></select>
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
                <span class="sliderAttValue" id="leftValue">${e.elements[r].left}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[r].left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right:</div>
                <span class="sliderAttValue" id="rightValue">${e.elements[r].right}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[r].right)}" class="slider" id="rightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom:</div>
                <span class="sliderAttValue" id="bottomValue">${e.elements[r].bottom}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[r].bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
            </div>
            <div class="sliderAttribute">
                <div>Top:</div>
                <span class="sliderAttValue" id="topValue">${e.elements[r].top}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[r].top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex:</div>
                <span class="sliderAttValue" id="zIndexValue">${e.elements[r].zIndex}</span>
                <input type="range" min="1" max="100" value="${Number(e.elements[r].zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width:</div>
                <span class="sliderAttValue" id="widthValue">${e.elements[r].width}</span>
                <input type="range" min="0" max="100" value="${Number(e.elements[r].width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height:</div>
                <span class="sliderAttValue" id="heightValue">${e.elements[r].height}</span>
                <input type="range" min="0" max="200" value="${Number(e.elements[r].height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Speed:</div>
                <span class="sliderAttValue" id="speedValue">${e.elements[r].speed}</span>
                <input type="range" min="0.0" max="10.0" value="${Number(e.elements[r].speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
            </div>
            <div class="sliderAttribute">
                <div>Blur:</div>
                <span class="sliderAttValue" id="blurValue">${e.elements[r].shadowEffect}</span>
                <input type="range" min="0" max="50" value="${Number(e.elements[r].shadowEffect.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright:</div>
                <span class="sliderAttValue" id="brightnessValue">${e.elements[r].brightness}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[r].brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Left To:</div>
                <span class="sliderAttValue" id="leftToValue">${e.elements[r].leftTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[r].leftTo)}" class="slider" id="leftToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right To:</div>
                <span class="sliderAttValue" id="rightToValue">${e.elements[r].rightTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[r].rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom To:</div>
                <span class="sliderAttValue" id="bottomToValue">${e.elements[r].bottomTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[r].bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Top To:</div>
                <span class="sliderAttValue" id="topToValue">${e.elements[r].topTo}</span>
                <input type="range" min="-101" max="101" value="${Number((s=e.elements[r].topTo)==null?void 0:s.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex To:</div>
                <span class="sliderAttValue" id="zIndexToValue">${e.elements[r].zIndexTo}</span>
                <input type="range" min="0" max="100" value="${Number(e.elements[r].zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width To:</div>
                <span class="sliderAttValue" id="widthToValue">${e.elements[r].widthTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[r].widthTo.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height To:</div>
                <span class="sliderAttValue" id="heightToValue">${e.elements[r].heightTo}</span>
                <input type="range" min="0" max="200" value="${Number((p=e.elements[r].heightTo)==null?void 0:p.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Blur To:</div>
                <span class="sliderAttValue" id="blurToValue">${e.elements[r].shadowEffectTo}</span>
                <input type="range" min="0" max="100" value="${Number((o=e.elements[r].shadowEffectTo)==null?void 0:o.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright To:</div>
                <span class="sliderAttValue" id="brightnessToValue">${e.elements[r].brightnessTo}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[r].brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
            </div>
        `,document.querySelector("#editorUserInput").innerHTML="",e.elements[r].shadow===!0&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(v=>{v.innerHTML==="auto"&&(document.getElementById(v.id.replace("Value","Slider")).value=101,document.querySelector(`#${v.id.replace("Value","Slider")}`).style.pointerEvents="none"),v.innerHTML===""&&(document.getElementById(v.id.replace("Value","Slider")).value=-101,document.getElementById(v.id).innerHTML="-")});var t=document.getElementById(`${e.elements[r].id}-cont`);t.style.left=document.getElementById("leftValue").innerHTML,t.style.right=document.getElementById("rightValue").innerHTML+"%",t.style.bottom=document.getElementById("bottomValue").innerHTML+"%",t.style.top=document.getElementById("topValue").innerHTML+"%",t.style.zIndex=document.getElementById("zIndexValue").innerHTML,t.style.width=document.getElementById("widthValue").innerHTML+"%",t.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#${e.elements[r].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var d=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(d===!1){d=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.elements[r].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",d=!1;return}}),document.querySelectorAll(".slider").forEach(v=>{v.addEventListener("input",u=>{document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML=u.target.value,u.target.value==="101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="auto"),u.target.value==="-101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML=""),`${u.target.value}%`!=e.elements[r][u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow":`${u.target.value}px`!=e.elements[r][u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow":Number(u.target.value)!=e.elements[r][u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow":u.target.value!=e.elements[r][u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="##"?document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow":(console.log("not changed"),document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="#ff002d");var y=document.getElementById(`${e.elements[r].id}-cont`);y.style.left=document.getElementById("leftValue").innerHTML+"%",y.style.right=document.getElementById("rightValue").innerHTML+"%",y.style.bottom=document.getElementById("bottomValue").innerHTML+"%",y.style.top=document.getElementById("topValue").innerHTML+"%",y.style.zIndex=document.getElementById("zIndexValue").innerHTML,y.style.width=document.getElementById("widthValue").innerHTML+"%",y.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#${e.elements[r].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,d===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})})}},U=i=>{T=`${i}`,document.getElementById("scope").innerHTML=`[ ${i} ]`,document.getElementById(T).style.color="yellow",setTimeout(()=>{document.getElementById(T).style.color="#ff002d"},1e3);for(const a in e.characters)if("element"in e.characters[a]){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">Type:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[a].element.type}"></select>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[a].element.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].element.left)}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[a].element.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].element.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[a].element.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].element.bottom.replace("%",""))}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[a].element.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[a].element.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[a].element.zIndex}</span>
                    <input type="range" min="-10" max="100" value="${Number(e.characters[a].element.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[a].element.width}</span>
                    <input type="range" min="0" max="600" value="${Number(e.characters[a].element.width.replace("px",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[a].element.height}</span>
                    <input type="range" min="0" max="600" value="${Number(e.characters[a].element.height.replace("px",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",document.querySelectorAll(".sliderAttValue").forEach(t=>{t.innerHTML==="auto"&&(document.getElementById(t.id.replace("Value","Slider")).value=101,document.querySelector(`#${t.id.replace("Value","Slider")}`).style.pointerEvents="none"),t.innerHTML===""&&(document.getElementById(t.id.replace("Value","Slider")).value=-101,document.getElementById(t.id).innerHTML="-")});var l=document.getElementById(`${e.characters[a].persona.name}_dialogue`);l.style.left=document.getElementById("leftValue").innerHTML,l.style.right=document.getElementById("rightValue").innerHTML+"%",l.style.bottom=document.getElementById("bottomValue").innerHTML+"%",l.style.top=document.getElementById("topValue").innerHTML+"%",l.style.zIndex=document.getElementById("zIndexValue").innerHTML,l.style.width=document.getElementById("widthValue").innerHTML+"px",l.style.height=document.getElementById("heightValue").innerHTML,document.querySelectorAll(".slider").forEach(t=>{t.addEventListener("input",d=>{document.querySelector(`#${d.target.id.replace("Slider","Value")}`).innerHTML=d.target.value,d.target.value==="101"&&(document.querySelector(`#${d.target.id.replace("Slider","Value")}`).innerHTML="auto"),d.target.value==="-101"&&(document.querySelector(`#${d.target.id.replace("Slider","Value")}`).innerHTML=""),`${d.target.value}%`!=e.elements[a][d.target.id.replace("Slider","")]&&d.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="yellow":`${d.target.value}px`!=e.elements[a][d.target.id.replace("Slider","")]&&d.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="yellow":Number(d.target.value)!=e.elements[a][d.target.id.replace("Slider","")]&&d.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="yellow":d.target.value!=e.elements[a][d.target.id.replace("Slider","")]&&d.target.getAttribute("data-valueType")==="##"?document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="yellow":(console.log("not changed"),document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="#ff002d");var s=document.getElementById(`${e.characters[a].persona.name}_dialogue`),p=document.getElementById("leftValue").innerHTML,o=document.getElementById("rightValue").innerHTML,r=document.getElementById("bottomValue").innerHTML,v=document.getElementById("topValue").innerHTML,u=document.getElementById("zIndexValue").innerHTML,y=document.getElementById("widthValue").innerHTML,n=document.getElementById("heightValue").innerHTML;s.setAttribute("style",`left: ${p} !important; right: ${o}% !important; bottom: ${r}% !important; top: ${v}% !important; z-index: ${u} !important; width: ${y}px !important; height: ${n}px !important;inset: -5% -10% auto auto; z-index: 2; border-radius: 10px; border-top: 0.5px solid rgb(255, 0, 45); border-bottom: 0.5px solid rgb(255, 0, 45); padding: 10px; transform: translate(0px, 0px); transform-origin: left bottom; translate: none; rotate: none; scale: none;`)})})}};var w=()=>{const i=JSON.stringify(A);fetch("http://localhost:3001/save-json",{method:"POST",body:i,headers:{"Content-Type":"application/json"}}).then(l=>{l.ok?console.log("JSON data saved successfully"):console.error("Error saving JSON data")}).catch(l=>{console.error("Error saving JSON data:",l)})};document.querySelector("#generateScenario").addEventListener("click",i=>{i.preventDefault();var l=document.getElementById("scenarioEdit");l.value!=""&&(A.SUD.Scenarios[l.value]=[],console.log("tempData",A),w())});var N=()=>{document.querySelector("#newSceneBut").addEventListener("click",()=>{var a;B=0,f=0;var i=document.createElement("div"),l=document.getElementById("editorbodyDisplay");i.setAttribute("class","currentScene"),i.setAttribute("id","currentSceneView_draft"),i.setAttribute("style","z-index: 10; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); opacity: 1;"),l.appendChild(i),document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("headerSceneName").innerHTML="[ NEW SCENE ]",document.getElementById("headerSceneName").setAttribute("class","pendingSaveText"),(a=document.querySelector(".currentScene"))==null||a.remove(),document.getElementById("scnAttName").value="[ NEW SCENE ]",document.getElementById("scnAttName").setAttribute("class","attInput pendingSaveText"),document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var d=()=>{var s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id","newElementUnsaved"),s.innerHTML=`${t.id.replace("_global","")}`,document.getElementById("inSceneEls").appendChild(s),t.removeEventListener("click",d),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};t.getAttribute("data-listener")||t.addEventListener("click",d),t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var d=()=>{var s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id","newElementUnsaved"),s.innerHTML=`${t.id.replace("_global","")}`,document.getElementById("inSceneChars").appendChild(s),t.removeEventListener("click",d),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};t.getAttribute("data-listener")||t.addEventListener("click",d),t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElement").forEach(t=>{t.id==="newSceneBut"?t.innerHTML=`${t.id}<span style="float:right; color: yellow">&#9679;</span>`:t.innerHTML=`${t.id.replace("_global","")}`})}),document.querySelector("#newCharBut").addEventListener("click",()=>{B++;var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id",`newCharacterUnsaved-${B}`),i.innerHTML="[ NEW CHAR ]",i.addEventListener("click",l=>{M(l.target.id)}),document.getElementById("inSceneChars").appendChild(i)}),document.querySelector("#newElBut").addEventListener("click",()=>{f++;var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id",`newElementUnsaved-${f}`),i.innerHTML="[ NEW EL ]",i.addEventListener("click",l=>{C(l.target.id)}),document.getElementById("inSceneEls").appendChild(i)})};return N(),document.querySelector("#deleteScenario").addEventListener("click",i=>{i.preventDefault();var l=document.getElementById("scenarioEdit");l.value!=""&&A.SUD.Scenarios[l.value]&&(delete A.SUD.Scenarios[l.value],console.log("tempData",A),w())}),document.getElementById("scenesContainer").appendChild(document.getElementById("newSceneBut")),document.getElementById("editorScreen").style.display="block",document.querySelector(".currentScene")?(q=document.getElementById("editorbodyDisplay"))==null||q.appendChild(document.querySelector(".currentScene")):(document.getElementById("universe").style.filter="blur(10px)",setTimeout(()=>{var i;(i=document.getElementById("editorbodyDisplay"))==null||i.appendChild(document.querySelector(".currentScene"))},1e3)),!0}else return document.getElementById("editorScreen").remove(),document.getElementById("universe").style.filter="blur(0px)",!1}export{O as editor};
