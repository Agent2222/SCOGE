import{b as Y,n as Q,g as Z}from"./main.307f15d5.js";import"./wScoge.fc00b881.js";const ee="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",te=new Y.Configuration({apiKey:ee}),ae=new Y.OpenAIApi(te);var U=null,v=null,T=null,B=null,e=null,c=null,C=0,w=0,_=!1,R=null,ne={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},F={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},S={id:"newElement",type:"div",src:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/charTemplate.png",left:"auto",right:"10%",bottom:"auto",top:"5%",zIndex:"3",width:"auto",height:"30%",speed:.9,shadow:!0,shadowEffect:"0px",brightness:"1.0",leftTo:"",rightTo:"",bottomTo:"",topTo:"",zIndexTo:"",widthTo:"",heightTo:"",shadowEffectTo:"",brightnessTo:"",action:""},I={persona:{name:"newCharacter",location:"newLocation",job:"newJob",dialogue:{intro:"Hello, I will become a new character."},images:{default:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/char-template.png"}},pns:{position:"absolute",left:"10%",leftTo:"12%",right:"auto",rightTo:"auto",bottom:0,bottomTo:0,top:"auto",topTo:"auto",zIndex:1,zIndexTo:1,width:"auto",widthTo:"auto",height:"80%",heightTo:"80%",speed:1,blur:"0px",blurTo:"0px",brightness:"1",brightnessTo:"1"},element:{class:"chr-textElement",type:"div",backgroundColor:"rgba(0,0,0,0.75)",padding:"10px 10px",borderRadius:"10px",borderTop:"0.5px solid rgb(255, 0, 45)",borderBottom:"0.5px solid rgb(255, 0, 45)",width:"350px",height:"auto",left:"auto",right:"-10%",bottom:"auto",top:"-6%",zIndex:2,position:"absolute",border:".5px solid #ff002d",pointer:{position:"absolute",width:"50px",height:"50px",borderLeft:"1px solid #ff002d",bottom:"-60px",left:"-30px",zIndex:-5,transform:"rotate(45deg)"}},actions:["chat"]};async function ie(K){var P;try{const $=await fetch("/src/sudb.json");if(!$.ok)throw new Error(`HTTP error! Status: ${$.status}`);U=await $.json(),v=U,T=U.SUD.Scenarios.Intro}catch($){console.error("Error fetching JSON data:",$)}if(K===!1){const $=document.createElement("link");$.rel="stylesheet",$.href="editor.css",document.head.appendChild($);var j=document.createElement("div"),O=document.getElementById("main");j.setAttribute("id","editorScreen"),j.innerHTML=`
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
        `,O.appendChild(j),document.getElementById("loadScene").addEventListener("click",()=>{document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene"))}),document.getElementById("aiAsstSelectScope").addEventListener("change",()=>{R=document.getElementById("aiAsstSelectScope").value});var q=document.getElementById("scenarioDropdown");for(const a in v.SUD.Scenarios){var W=document.createElement("option");W.setAttribute("value",a),W.innerHTML=a,q.appendChild(W)}B=q.value,q.addEventListener("change",()=>{var o,t;var a=v.SUD.Scenarios[q.value];T=v.SUD.Scenarios[q.value],document.getElementById("scenesContainer").innerHTML="",a.forEach(d=>{var n=document.createElement("div");n.setAttribute("class","sceneSelectElement"),n.setAttribute("id",d.name),n.innerHTML=`${d.name}`,n.addEventListener("click",m=>{G(m.target.id)}),document.getElementById("scenesContainer").appendChild(n)});var r=document.createElement("div");r.setAttribute("class","sceneSelectElement"),r.setAttribute("id","newSceneBut"),r.innerHTML="[ NEW SCENE ]",document.getElementById("scenesContainer").appendChild(r),J(),_&&((o=document.querySelector(".currentScene"))==null||o.remove(),G((t=a[0])==null?void 0:t.name,0))}),T.forEach(a=>{v=U;var r=document.createElement("div");r.setAttribute("class","sceneSelectElement"),r.setAttribute("data-position",a.position-1),r.setAttribute("id",a.name),r.innerHTML=`${a.name}`,a.name==="scene1"?r.innerHTML=`${a.name}<span style="float:right; color: var(--accent)">&#9679;</span>`:r.innerHTML=`${a.name}`,r.addEventListener("click",o=>{var d;if(e.elements.find(({id:n})=>n.includes("newElementUnsaved"))&&(e.elements=e.elements.filter(({id:n})=>!n.includes("newElementUnsaved"))),e.characters.find(({persona:n})=>n.name.includes("newCharacterUnsaved"))&&(e.characters=e.characters.filter(({persona:n})=>!n.name.includes("newCharacterUnsaved"))),_){var t=o.target.getAttribute("data-position");(d=document.querySelectorAll(".currentScene")[0])==null||d.remove(),G(o.target.id,t)}document.getElementById("headerSceneName").style.color="yellow",setTimeout(()=>{document.getElementById("headerSceneName").style.color="#ff002d"},1e3)}),document.getElementById("scenesContainer").appendChild(r)});const G=(a,r)=>{var o;C=0,w=0,document.querySelector(".currentScene")===null&&(Q(`${B}`,r),setTimeout(()=>{var t;(t=document.getElementById("editorbodyDisplay"))==null||t.appendChild(document.querySelector(".currentScene"))},1e3)),document.querySelectorAll(".sceneSelectElement").forEach(t=>{document.getElementById("scnAttName").setAttribute("class","attInput"),document.getElementById("headerSceneName").removeAttribute("class"),t.id===a?document.getElementById(a).innerHTML=`${a}<span style="float:right; color: var(--accent)">&#9679;</span>`:document.getElementById(t.id).innerHTML=`${t.id}`});for(const t in T)T[t].name===a&&(e=T[t],document.getElementById("hsc").innerHTML=`${T[t].activated}]`,document.getElementById("headerSceneName").innerHTML=`${T[t].name}`,document.getElementById("scnAttName").value=`${T[t].name}`,document.getElementById("scnAttType").value=`${T[t].type}`,document.getElementById("scnAttBg").value=`${T[t].bg}`,document.getElementById("scnAttAct1").value=`${T[t].activated.land}`,document.getElementById("scnAttAct2").value=`${T[t].activated.pop}`,T[t].activated.pop===!0?document.getElementById("scnAttAct2").selectedIndex=0:document.getElementById("scnAttAct2").selectedIndex=1,document.getElementById("scnAttAct3").value=`${T[t].activated.gate}`,document.getElementById("scnAttAct4").value=`${parseInt((o=T[t].activated.scn)==null?void 0:o.join(""))}`,document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",T[t].characters.forEach(d=>{var n=document.createElement("div");if(n.setAttribute("class","inSceneCard"),n.setAttribute("id",d.persona.name),n.innerHTML=`${d.persona.name}`,document.getElementById("inSceneChars").appendChild(n),"element"in d){var m=document.createElement("div");m.setAttribute("class","inSceneCard"),m.setAttribute("id",`${d.persona.name}-dia`),m.innerHTML=`${d.persona.name} - ${d.actions[0]}`,document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("inSceneCharsDialogues").appendChild(m),m.addEventListener("click",g=>{X(g.target.id),d.persona.dialogue.pPosition==="left"?document.getElementById("charAttTalkInput").value="left":document.getElementById("charAttTalkInput").value="right"})}n.addEventListener("click",g=>{V(g.target.id)})}),T[t].elements.forEach(d=>{var n=document.createElement("div");n.setAttribute("class","inSceneCard"),n.setAttribute("id",d.id),n.innerHTML=`${d.id}`,document.getElementById("inSceneEls").appendChild(n),n.addEventListener("click",m=>{z(m.target.id)})}));_===!0&&document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.remove()}),_===!0&&document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.remove()}),v.SUD.Characters.forEach(t=>{var d=document.createElement("div"),n=document.getElementById("newCharBut");n.innerHTML="[ NEW CHARACTER ]",d.setAttribute("class","sceneSelectElementChar"),d.setAttribute("id",`${t.name}_global`);var m=e.characters.find(({persona:s})=>s.name===t.name);if(m)d.innerHTML=`${t.name}<span style="float:right; color: var(--accent)">&#9679;</span>`,d.addEventListener("click",s=>{V(s.target.id.replace("_global",""),t.name)});else{d.innerHTML=`${t.name}`;var g=()=>{C++;var s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`newCharacterUnsaved-${C}`),s.innerHTML=`${t.name}`,document.getElementById("inSceneChars").appendChild(s),s.addEventListener("click",h=>{V(h.target.id.replace("_global",""),t.name)}),d.removeEventListener("click",g),d.innerHTML=`${t.name}<span style="float:right; color: yellow">&#9679;</span>`};d.addEventListener("click",g),d.setAttribute("data-listener","true")}document.getElementById("charactersContainer").appendChild(d),document.getElementById("charactersContainer").appendChild(n)}),v.SUD.Elements.forEach(t=>{var d=document.createElement("div"),n=document.getElementById("newElBut");n.innerHTML="[ NEW ELEMENT ]",d.setAttribute("class","sceneSelectElementEl"),d.setAttribute("id",`${t.id}_global`);var m=e.elements.find(({id:s})=>s===t.id);if(m)d.innerHTML=`${t.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,d.addEventListener("click",s=>{z(s.target.id.replace("_global",""))});else{d.innerHTML=`${t.id}`;var g=()=>{w++;var s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`"newElementUnsaved"-${w}`),s.innerHTML=`${t.id}}`,document.getElementById("inSceneEls").appendChild(s),s.addEventListener("click",h=>{z(h.target.id.replace("_global",""),t.id)}),d.removeEventListener("click",g),d.innerHTML=`${t.id}<span style="float:right; color: var(--accent)">&#9679;</span>`};d.addEventListener("click",g),d.setAttribute("data-listener","true")}document.getElementById("elsContainer").appendChild(d),document.getElementById("elsContainer").appendChild(n)}),_=!0};G("scene1",0),document.getElementById("summonAI").addEventListener("click",async()=>{document.getElementById("editorAiOutput").innerHTML="Loading...";var a=document.getElementById("editorUserInput").value,r=await ae.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Hello. ${a}`}],max_tokens:100}).catch(o=>{console.log(o)});console.log(r),document.getElementById("editorUserInput").value="",document.getElementById("editorAiOutput").innerHTML=`${r.data.choices[0].message.content}`});const V=(a,r)=>{var D,i,f,A,p;var o=document.querySelector(".currentScene"),t=Array.from(o.childNodes);if(!t.find(l=>l.id.includes(`${`char_${a}`}`)))if(a.includes("newCharacterUnsaved-")){I.persona.name=a;var d=document.createElement("div"),n=document.createElement("img");d.classList.add("sceneElement"),d.setAttribute("id",`char_${a}`),n.setAttribute("src",((D=v.SUD.Characters.find(({name:l})=>l===r))==null?void 0:D.images.default)||I.persona.images.default),d.appendChild(n),d.style.height=I.pns.height,d.style.width=I.pns.width,d.style.left=I.pns.left,d.style.right=I.pns.right,d.style.top=I.pns.top,d.style.position=I.pns.position,d.style.zIndex=I.pns.zIndex,d.style.position="absolute",d.style.opacity="1",n.style.width="auto",n.style.height="100%",n.style.objectFit="contain",document.querySelector(".currentScene").appendChild(d),e==null||e.characters.push(I)}else{I.persona.name=a;var m=document.createElement("div"),g=document.createElement("img"),s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`${a}`),s.innerHTML=`${a}`,s.addEventListener("click",l=>{V(l.target.id)}),document.getElementById(`${a}_global`).innerHTML=`${a}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneChars").appendChild(s),m.classList.add("sceneElement"),m.setAttribute("id",`char_${a}`),g.setAttribute("src",((i=v.SUD.Characters.find(({name:l})=>l===r))==null?void 0:i.images.default)||I.persona.images.default),m.appendChild(g),m.style.height=I.pns.height,m.style.width=I.pns.width,m.style.left=I.pns.left,m.style.right=I.pns.right,m.style.top=I.pns.top,m.style.position=I.pns.position,m.style.zIndex=I.pns.zIndex,m.style.position="absolute",m.style.opacity="1",g.style.width="auto",g.style.height="100%",g.style.objectFit="contain",document.querySelector(".currentScene").appendChild(m),e==null||e.characters.push(I)}c=`char_${a}`,document.getElementById(`char_${a}`).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(`char_${a}`).style.border="none"},1e3);for(const l in e.characters)if(e.characters[l].persona.name===a){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttName" class="txtAttribute">
                    <div id="charAttNameLabel">Chr Name:</div>
                    <input type="text" id="charAttNameInput" value="${e.characters[l].persona.name}">
                </div>
                <div id="charAttLoc" class="txtAttribute">
                    <div id="charAttLocLabel">Chr Loc:</div>
                    <input type="text" id="charAttLocInput" value="${e.characters[l].persona.location}">
                </div>
                <div id="charAttJob" class="txtAttribute">
                    <div id="charAttJobLabel">Chr Job:</div>
                    <input type="text" id="charAttJobInput" value="${e.characters[l].persona.job}">
                </div>
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">Dialogue:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[l].persona.job}"></select>
                </div>
                <div id="charAttImages" class="txtAttribute">
                    <div id="charAttImageLabel">Images:</div>
                    <select type="text" class="attSelect" id="charAttImgInput" value="${e.characters[l].persona.job}"></select>
                </div>
                <div id="charAttActions" class="txtAttribute">
                    <div id="charAttActionsLabel">Chat:</div>
                    <input type="checkbox" id="charAttActionInput" value="${e.characters[l].persona.name}">
                    <label for="charAttActionInput"></label>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[l].pns.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[l].pns.left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[l].pns.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[l].pns.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[l].pns.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[l].pns.bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[l].pns.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[l].pns.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[l].pns.zIndex}</span>
                    <input type="range" min="1" max="100" value="${Number(e.characters[l].pns.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[l].pns.width}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[l].pns.width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[l].pns.height}</span>
                    <input type="range" min="0" max="200" value="${Number(e.characters[l].pns.height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Speed:</div>
                    <span class="sliderAttValue" id="speedValue">${e.characters[l].pns.speed}</span>
                    <input type="range" min="0.0" max="10.0" value="${Number(e.characters[l].pns.speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
                </div>
                <div class="sliderAttribute">
                    <div>Blur:</div>
                    <span class="sliderAttValue" id="blurValue">${e.characters[l].pns.blur}</span>
                    <input type="range" min="0" max="50" value="${Number(e.characters[l].pns.blur.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright:</div>
                    <span class="sliderAttValue" id="brightnessValue">${e.characters[l].pns.brightness}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[l].pns.brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Left To:</div>
                    <span class="sliderAttValue" id="leftToValue">${e.characters[l].pns.leftTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[l].pns.leftTo.replace("%",""))}" class="slider" id="leftToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right To:</div>
                    <span class="sliderAttValue" id="rightToValue">${e.characters[l].pns.rightTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[l].pns.rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom To:</div>
                    <span class="sliderAttValue" id="bottomToValue">${e.characters[l].pns.bottomTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[l].pns.bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Top To:</div>
                    <span class="sliderAttValue" id="topToValue">${e.characters[l].pns.topTo}</span>
                    <input type="range" min="-101" max="101" value="${Number((f=e.characters[l].pns.topTo)==null?void 0:f.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex To:</div>
                    <span class="sliderAttValue" id="zIndexToValue">${e.characters[l].pns.zIndexTo}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[l].pns.zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width To:</div>
                    <span class="sliderAttValue" id="widthToValue">${e.characters[l].pns.widthTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[l].pns.width.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height To:</div>
                    <span class="sliderAttValue" id="heightToValue">${e.characters[l].pns.heightTo}</span>
                    <input type="range" min="0" max="200" value="${Number((A=e.characters[l].pns.heightTo)==null?void 0:A.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Blur To:</div>
                    <span class="sliderAttValue" id="blurToValue">${e.characters[l].pns.blurTo}</span>
                    <input type="range" min="0" max="100" value="${Number((p=e.characters[l].pns.blurTo)==null?void 0:p.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright To:</div>
                    <span class="sliderAttValue" id="brightnessToValue">${e.characters[l].pns.brightnessTo}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[l].pns.brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",e.characters[l].actions[0]==="chat"&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(y=>{y.innerHTML==="auto"&&(document.getElementById(y.id.replace("Value","Slider")).value=101,document.querySelector(`#${y.id.replace("Value","Slider")}`).style.pointerEvents="none"),y.innerHTML===""&&(document.getElementById(y.id.replace("Value","Slider")).value=-101,document.getElementById(y.id).innerHTML="-")}),document.querySelectorAll(".attBut").forEach(y=>{y.style.display="block"}),document.querySelector("#charAttActionInput").addEventListener("change",y=>{y.target.checked?(e.characters[l].actions[0]="chat",document.getElementById(`${e.characters[l].persona.name}_dialogue`).style.display="block",v.SUD.Scenarios[B].forEach(E=>{E.characters.forEach(u=>{u.persona.name===c.replace("char_","")&&(u.actions[0]="chat")})})):(e.characters[l].actions[0]="none",document.getElementById(`${e.characters[l].persona.name}_dialogue`).style.display="none",v.SUD.Scenarios[B].forEach(E=>{E.characters.forEach(u=>{u.persona.name===c.replace("char_","")&&(u.actions[0]="")})}))});var h=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(h===!1){h=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.characters[l].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",h=!1;return}}),document.querySelectorAll(".slider").forEach(y=>{var E=v.SUD.Scenarios[B].find(({name:u})=>u===e.name).characters.find(({persona:u})=>u.name===c.replace("char_",""));y.addEventListener("input",u=>{document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML=u.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value),u.target.value==="101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)),u.target.value==="-101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)),`${u.target.value}%`!=e.characters[l].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)):`${u.target.value}px`!=e.characters[l].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)):Number(u.target.value)!=e.characters[l].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)):u.target.value!=e.characters[l].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value)):(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(E.pns[u.target.id.replace("Slider","")]=u.target.value));var x=document.getElementById(`${c}`);x.style.left=document.getElementById("leftValue").innerHTML+"%",x.style.right=document.getElementById("rightValue").innerHTML+"%",x.style.bottom=document.getElementById("bottomValue").innerHTML+"%",x.style.top=document.getElementById("topValue").innerHTML+"%",x.style.zIndex=document.getElementById("zIndexValue").innerHTML,x.style.width=document.getElementById("widthValue").innerHTML+"%",x.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#char_${e.characters[l].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,h===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})}),document.getElementById("attPreview").addEventListener("click",function(){Z.fromTo(`#${c}`,{left:document.getElementById("leftSlider").value+"%",bottom:document.getElementById("bottomValue").value+"%",zIndex:document.getElementById("zIndexSlider").value,height:document.getElementById("heightSlider").value+"%",filter:`blur(${document.getElementById("blurSlider").value}px) brightness(${document.getElementById("brightnessSlider").value})`},{duration:document.getElementById("speedSlider").value,left:document.getElementById("leftToSlider").value+"%",bottom:document.getElementById("bottomToSlider").value+"%",zIndex:document.getElementById("zIndexToSlider").value,height:document.getElementById("heightToSlider").value+"%",filter:`blur(${document.getElementById("blurToSlider").value}px) brightness(${document.getElementById("brightnessToSlider").value})`})});var b=document.getElementById(`char_${e.characters[l].persona.name}`);b.style.left=document.getElementById("leftValue").innerHTML,b.style.right=document.getElementById("rightValue").innerHTML+"%",b.style.bottom=document.getElementById("bottomValue").innerHTML+"%",b.style.top=document.getElementById("topValue").innerHTML+"%",b.style.zIndex=document.getElementById("zIndexValue").innerHTML,b.style.width=document.getElementById("widthValue").innerHTML+"%",b.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#char_${e.characters[l].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var H=document.querySelector("#charAttTalkInput");for(const y in e.characters[l].persona.dialogue){var L=document.createElement("option");L.setAttribute("value",y),L.innerHTML=y,H.appendChild(L)}var M=document.querySelector("#charAttImgInput");for(const y in e.characters[l].persona.images){var N=document.createElement("option");N.setAttribute("value",e.characters[l].persona.images[y]),N.innerHTML=y,M.appendChild(N)}document.querySelector("#charAttTalkInput").addEventListener("change",y=>{document.querySelector(`#char_${e.characters[l].persona.name} #${e.characters[l].persona.name}_dialogue`).innerHTML=`<p id="${e.characters[l].persona.name}_dialogue">${e.characters[l].persona.dialogue[y.target.value]||`${y.target.value}`}</p>`;var E=document.createElement("div");E.classList.add("dialoguePointer"),E.style.position="absolute",E.style.width=e.characters[l].element.pointer.width,E.style.height=e.characters[l].element.pointer.height,E.style.bottom=e.characters[l].element.pointer.bottom,E.style.left=e.characters[l].element.pointer.left,E.style.zIndex=e.characters[l].element.pointer.zIndex,E.style.transform=e.characters[l].element.pointer.transform,E.style.borderLeft=e.characters[l].element.pointer.borderleft,document.querySelector(`#${e.characters[l].persona.name}_dialogue`).appendChild(E),document.getElementById("editorUserInput").value=`${e.characters[l].persona.dialogue[y.target.value]||`${y.target.value}`}`}),document.querySelector("#charAttImgInput").addEventListener("change",y=>{document.querySelector(`#char_${e.characters[l].persona.name} img:first-child`).src=y.target.value,document.getElementById("editorUserInput").value=`${y.target.value}`})}},z=(a,r)=>{var H,L,M,N,D;var o=document.querySelector(".currentScene"),t=Array.from(o.childNodes);if(!t.find(i=>i.id.includes(`${`${a}-cont`}`)))if(a.includes("newElementUnsaved-")){S.id=a;var d=document.createElement("div"),n=document.createElement("img");d.classList.add("sceneElement"),d.setAttribute("id",`${a}-cont`),n.setAttribute("id",`${a}-src`),n.setAttribute("src",((H=v.SUD.Elements.find(({id:i})=>i===r))==null?void 0:H.src)||S.src),d.appendChild(n),d.style.height=S.height,d.style.width=S.width,d.style.left=S.left,d.style.right=S.right,d.style.top=S.top,d.style.position=S.position,d.style.zIndex=S.zIndex,d.style.position="absolute",d.style.opacity="1",n.style.width="auto",n.style.height="100%",n.style.objectFit="contain",document.querySelector(".currentScene").appendChild(d),console.log("new element added to scene",e.elements),e==null||e.elements.push(S)}else{S.id=a;var m=document.createElement("div"),g=document.createElement("img"),s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`${a}`),s.innerHTML=`${a}`,s.addEventListener("click",i=>{z(i.target.id,r)}),document.getElementById(`${a}_global`).innerHTML=`${a}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneEls").appendChild(s),m.classList.add("sceneElement"),m.setAttribute("id",`${a}-cont`),console.log("name1",a),g.setAttribute("src",((L=v.SUD.Elements.find(({id:i})=>i===a))==null?void 0:L.src)||S.src),m.appendChild(g),m.style.height=S.height,m.style.width=S.width,m.style.left=S.left,m.style.right=S.right,m.style.top=S.top,m.style.position=S.position,m.style.zIndex=S.zIndex,m.style.position="absolute",m.style.opacity="1",g.style.width="auto",g.style.height="100%",g.style.objectFit="contain",document.querySelector(".currentScene").appendChild(m),e==null||e.elements.push(S)}c=`${a}-cont`,document.getElementById(c).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(c).style.border="none"},1e3);for(const i in e.elements)if(e.elements[i].id===a){document.getElementById("chElAtt").innerHTML=`
            <div id="charAttName" class="txtAttribute">
                <div id="charAttNameLabel">Ele Name:</div>
                <input type="text" id="charAttNameInput" value="${e.elements[i].id}">
            </div>
            <div id="charAttJob" class="txtAttribute">
                <div id="charAttJobLabel">Ele Action:</div>
                <input type="text" id="charAttJobInput" value="${e.elements[i].action}">
            </div>
            <div id="charAttDialogue" class="txtAttribute">
                <div id="charAttTalkLabel">Type:</div>
                <select type="text" class="attSelect" id="charAttTalkInput" value="${e.elements[i].innerType}">
                  <option value="">Image</option>
                  <option value="">Video</option>
                  <option value="">Audio</option>
                </select>
            </div>
            <div id="charAttSource" class="txtAttribute">
                <div id="charAttImageLabel">Source:</div>
                <input type="text" class="attSelect" id="charAttImgInput" value="${e.elements[i].src}">
            </div>
            <div id="charAttActions" class="txtAttribute">
                <div id="charAttActionsLabel">Shadow:</div>
                <input type="checkbox" id="charAttActionInput" value="">
                <label for="charAttActionInput"></label>
            </div>
            <div class="sliderAttribute">
                <div>Left:</div>
                <span class="sliderAttValue" id="leftValue">${e.elements[i].left}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[i].left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right:</div>
                <span class="sliderAttValue" id="rightValue">${e.elements[i].right}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[i].right)}" class="slider" id="rightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom:</div>
                <span class="sliderAttValue" id="bottomValue">${e.elements[i].bottom}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[i].bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
            </div>
            <div class="sliderAttribute">
                <div>Top:</div>
                <span class="sliderAttValue" id="topValue">${e.elements[i].top}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[i].top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex:</div>
                <span class="sliderAttValue" id="zIndexValue">${e.elements[i].zIndex}</span>
                <input type="range" min="1" max="100" value="${Number(e.elements[i].zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width:</div>
                <span class="sliderAttValue" id="widthValue">${e.elements[i].width}</span>
                <input type="range" min="0" max="100" value="${Number(e.elements[i].width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height:</div>
                <span class="sliderAttValue" id="heightValue">${e.elements[i].height}</span>
                <input type="range" min="0" max="200" value="${Number(e.elements[i].height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Speed:</div>
                <span class="sliderAttValue" id="speedValue">${e.elements[i].speed}</span>
                <input type="range" min="0.0" max="10.0" value="${Number(e.elements[i].speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
            </div>
            <div class="sliderAttribute">
                <div>Blur:</div>
                <span class="sliderAttValue" id="blurValue">${e.elements[i].shadowEffect}</span>
                <input type="range" min="0" max="50" value="${Number(e.elements[i].shadowEffect.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright:</div>
                <span class="sliderAttValue" id="brightnessValue">${e.elements[i].brightness}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[i].brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Left To:</div>
                <span class="sliderAttValue" id="leftToValue">${e.elements[i].leftTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[i].leftTo)}" class="slider" id="leftToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Right To:</div>
                <span class="sliderAttValue" id="rightToValue">${e.elements[i].rightTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[i].rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Bottom To:</div>
                <span class="sliderAttValue" id="bottomToValue">${e.elements[i].bottomTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[i].bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Top To:</div>
                <span class="sliderAttValue" id="topToValue">${e.elements[i].topTo}</span>
                <input type="range" min="-101" max="101" value="${Number((M=e.elements[i].topTo)==null?void 0:M.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>zIndex To:</div>
                <span class="sliderAttValue" id="zIndexToValue">${e.elements[i].zIndexTo}</span>
                <input type="range" min="0" max="100" value="${Number(e.elements[i].zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
            </div>
            <div class="sliderAttribute">
                <div>Width To:</div>
                <span class="sliderAttValue" id="widthToValue">${e.elements[i].widthTo}</span>
                <input type="range" min="-101" max="101" value="${Number(e.elements[i].widthTo.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Height To:</div>
                <span class="sliderAttValue" id="heightToValue">${e.elements[i].heightTo}</span>
                <input type="range" min="0" max="200" value="${Number((N=e.elements[i].heightTo)==null?void 0:N.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Blur To:</div>
                <span class="sliderAttValue" id="blurToValue">${e.elements[i].shadowEffectTo}</span>
                <input type="range" min="0" max="100" value="${Number((D=e.elements[i].shadowEffectTo)==null?void 0:D.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright To:</div>
                <span class="sliderAttValue" id="brightnessToValue">${e.elements[i].brightnessTo}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[i].brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
            </div>
        `,document.querySelector("#editorUserInput").innerHTML="",e.elements[i].shadow===!0&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(f=>{f.innerHTML==="auto"&&(document.getElementById(f.id.replace("Value","Slider")).value=101,document.querySelector(`#${f.id.replace("Value","Slider")}`).style.pointerEvents="none"),f.innerHTML===""&&(document.getElementById(f.id.replace("Value","Slider")).value=-101,document.getElementById(f.id).innerHTML="-")});var h=document.getElementById(`${e.elements[i].id}-cont`);h.style.left=document.getElementById("leftValue").innerHTML,h.style.right=document.getElementById("rightValue").innerHTML+"%",h.style.bottom=document.getElementById("bottomValue").innerHTML+"%",h.style.top=document.getElementById("topValue").innerHTML+"%",h.style.zIndex=document.getElementById("zIndexValue").innerHTML,h.style.width=document.getElementById("widthValue").innerHTML+"%",h.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#${e.elements[i].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var b=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(b===!1){b=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.elements[i].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",b=!1;return}}),document.querySelectorAll(".slider").forEach(f=>{var A=v.SUD.Scenarios[B].find(({name:p})=>p===e.name).elements.find(({id:p})=>p===c.replace("-cont",""));f.addEventListener("input",p=>{document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML=p.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(A[p.target.id.replace("Slider","")]=p.target.value),p.target.value==="101"&&(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(A[p.target.id.replace("Slider","")]=p.target.value)),p.target.value==="-101"&&(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(A[p.target.id.replace("Slider","")]=p.target.value)),`${p.target.value}%`!=e.elements[i][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(A[p.target.id.replace("Slider","")]=p.target.value)):`${p.target.value}px`!=e.elements[i][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(A[p.target.id.replace("Slider","")]=p.target.value)):Number(p.target.value)!=e.elements[i][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(A[p.target.id.replace("Slider","")]=p.target.value)):p.target.value!=e.elements[i][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(A[p.target.id.replace("Slider","")]=p.target.value)):(console.log("not changed"),document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(A[p.target.id.replace("Slider","")]=p.target.value));var l=document.getElementById(`${c}`);l.style.left=document.getElementById("leftValue").innerHTML+"%",l.style.right=document.getElementById("rightValue").innerHTML+"%",l.style.bottom=document.getElementById("bottomValue").innerHTML+"%",l.style.top=document.getElementById("topValue").innerHTML+"%",l.style.zIndex=document.getElementById("zIndexValue").innerHTML,l.style.width=document.getElementById("widthValue").innerHTML+"%",l.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#${e.elements[i].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,b===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})})}},X=a=>{c=`${a}`,document.getElementById(c).style.color="yellow",setTimeout(()=>{document.getElementById(c).style.color="#ff002d"},1e3);for(const o in e.characters)if("element"in e.characters[o]){document.getElementById("chElAtt").innerHTML=`
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
            `,document.querySelector("#charAttTalkInput").addEventListener("change",t=>{t.target.value==="left"?(document.getElementById(`${c.replace("dialogue","")}pointer`).style.right="",document.getElementById(`${c.replace("dialogue","")}pointer`).style.left="-30px",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderLeft="1px solid #ff002d",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderTop="0px solid #ff002d"):(document.getElementById(`${c.replace("dialogue","")}pointer`).style.right="-30px",document.getElementById(`${c.replace("dialogue","")}pointer`).style.left="",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderLeft="0px solid #ff002d",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderTop="1px solid #ff002d")}),document.querySelector("#editorUserInput").innerHTML="",document.querySelectorAll(".sliderAttValue").forEach(t=>{t.innerHTML==="auto"&&(document.getElementById(t.id.replace("Value","Slider")).value=101,document.querySelector(`#${t.id.replace("Value","Slider")}`).style.pointerEvents="none"),t.innerHTML===""&&(document.getElementById(t.id.replace("Value","Slider")).value=-101,document.getElementById(t.id).innerHTML="-")});var r=document.getElementById(`${e.characters[o].persona.name}_dialogue`);r.style.left=document.getElementById("leftValue").innerHTML,r.style.right=document.getElementById("rightValue").innerHTML+"%",r.style.bottom=document.getElementById("bottomValue").innerHTML+"%",r.style.top=document.getElementById("topValue").innerHTML+"%",r.style.zIndex=document.getElementById("zIndexValue").innerHTML,r.style.width=document.getElementById("widthValue").innerHTML+"px",r.style.height=document.getElementById("heightValue").innerHTML,document.querySelectorAll(".slider").forEach(t=>{var d=v.SUD.Scenarios[B].find(({name:n})=>n===e.name).characters.find(({persona:n})=>n.name===c.replace("_dialogue",""));t.addEventListener("input",n=>{document.querySelector(`#${n.target.id.replace("Slider","Value")}`).innerHTML=n.target.value,n.target.value==="101"&&(document.querySelector(`#${n.target.id.replace("Slider","Value")}`).innerHTML="auto"),n.target.value==="-101"&&(document.querySelector(`#${n.target.id.replace("Slider","Value")}`).innerHTML=""),`${n.target.value}%`!=e.elements[o][n.target.id.replace("Slider","")]&&n.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="yellow":`${n.target.value}px`!=e.elements[o][n.target.id.replace("Slider","")]&&n.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="yellow":Number(n.target.value)!=e.elements[o][n.target.id.replace("Slider","")]&&n.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="yellow":n.target.value!=e.elements[o][n.target.id.replace("Slider","")]&&n.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(d.element[n.target.id.replace("Slider","")]=n.target.value)):(console.log("not changed"),document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(d.element[n.target.id.replace("Slider","")]=n.target.value));var m=document.getElementById(`${e.characters[o].persona.name}_dialogue`),g=document.getElementById("leftValue").innerHTML,s=document.getElementById("rightValue").innerHTML,h=document.getElementById("bottomValue").innerHTML,b=document.getElementById("topValue").innerHTML,H=document.getElementById("zIndexValue").innerHTML,L=document.getElementById("widthValue").innerHTML,M=document.getElementById("heightValue").innerHTML;m.setAttribute("style",`left: ${g} !important; right: ${s}% !important; bottom: ${h}% !important; top: ${b}% !important; z-index: ${H} !important; width: ${L}px !important; height: ${M}px !important;inset: -5% -10% auto auto; z-index: 2; border-radius: 10px; border-top: 0.5px solid rgb(255, 0, 45); border-bottom: 0.5px solid rgb(255, 0, 45); padding: 10px; transform: translate(0px, 0px); transform-origin: left bottom; translate: none; rotate: none; scale: none;`)})})}};var k=()=>{const a=JSON.stringify(v);fetch("http://localhost:3001/save-json",{method:"POST",body:a,headers:{"Content-Type":"application/json"}}).then(r=>{r.ok?console.log("JSON data saved successfully"):console.error("Error saving JSON data")}).catch(r=>{console.error("Error saving JSON data:",r)})};document.querySelector("#generateScenario").addEventListener("click",a=>{a.preventDefault();var r=document.getElementById("scenarioEdit");r.value!=""&&(v.SUD.Scenarios[r.value]=[],console.log("tempData",v),k())});var J=()=>{document.querySelector("#newSceneBut").addEventListener("click",()=>{var o;v=U,F=ne,C=0,w=0,v.SUD.Scenarios[B].push(F),e=v.SUD.Scenarios[B].find(({name:t})=>t==="newScene");var a=document.createElement("div"),r=document.getElementById("editorbodyDisplay");a.setAttribute("clas s","currentScene"),a.setAttribute("id","currentSceneView_draft"),a.setAttribute("style","z-index: 10; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); opacity: 1;"),r.appendChild(a),document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("headerSceneName").innerHTML="[ NEW SCENE ]",document.getElementById("headerSceneName").setAttribute("class","pendingSaveText"),(o=document.querySelector(".currentScene"))==null||o.remove(),document.getElementById("scnAttName").value="[ NEW SCENE ]",document.getElementById("scnAttName").setAttribute("class","attInput pendingSaveText"),document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var d=()=>{var n=document.createElement("div");n.setAttribute("class","inSceneCard pendingSaveCard"),n.setAttribute("id","newElementUnsaved"),n.innerHTML=`${t.id.replace("_global","")}`,t.removeEventListener("click",d),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};if(!t.getAttribute("data-listener")){t.addEventListener("click",d);return}t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var d=()=>{var n=document.createElement("div");n.setAttribute("class","inSceneCard pendingSaveCard"),n.setAttribute("id","newElementUnsaved"),n.innerHTML=`${t.id.replace("_global","")}`,t.removeEventListener("click",d),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};t.getAttribute("data-listener")||t.addEventListener("click",d),t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElement").forEach(t=>{t.id==="newSceneBut"?t.innerHTML=`${t.id}<span style="float:right; color: yellow">&#9679;</span>`:t.innerHTML=`${t.id.replace("_global","")}`})}),document.getElementById("addToScope").addEventListener("click",()=>{var a=document.getElementById("editorUserInput").value;if(e.activated.land=document.getElementById("scnAttAct1").value,e.activated.pop=document.getElementById("scnAttAct2").value,e.activated.gate=document.getElementById("scnAttAct3").value,e.activated.scn=document.getElementById("scnAttAct4").value,R==="charAttDialogue"){var r=e.characters.find(({persona:n})=>n.name===c.replace("char_","")),o=document.createElement("option");o.setAttribute("value",a),o.innerHTML=a,document.getElementById("charAttTalkInput").appendChild(o),r.persona.name=document.getElementById("charAttNameInput").value,r.persona.location=document.getElementById("charAttLocInput").value,r.persona.job=document.getElementById("charAttJobInput").value}if(R==="charAttImages"){var t=document.createElement("option");t.setAttribute("value",a),t.innerHTML=a,document.getElementById("charAttImgInput").appendChild(t)}if(R==="charAttSource"){var d=e.elements.find(({id:n})=>n===c);document.getElementById("charAttImgInput").value=a,document.getElementById(`${c.replace("cont","src")}`).src=a,d.id=document.getElementById("charAttNameInput").value,d.action=document.getElementById("charAttJobInput").value,d.src=document.getElementById("charAttImgInput").value}document.getElementById("editorUserInput").value=""}),document.querySelector("#newCharBut").addEventListener("click",()=>{C++;var a=document.createElement("div");a.setAttribute("class","inSceneCard pendingSaveCard"),a.setAttribute("id",`newCharacterUnsaved-${C}`),a.innerHTML="[ NEW CHAR ]",a.addEventListener("click",r=>{V(r.target.id)}),document.getElementById("inSceneChars").appendChild(a)}),document.querySelector("#newElBut").addEventListener("click",()=>{w++;var a=document.createElement("div");a.setAttribute("class","inSceneCard pendingSaveCard"),a.setAttribute("id",`newElementUnsaved-${w}`),a.innerHTML="[ NEW EL ]",a.addEventListener("click",r=>{z(r.target.id)}),document.getElementById("inSceneEls").appendChild(a)})};return J(),document.querySelector("#deleteScenario").addEventListener("click",a=>{a.preventDefault();var r=document.getElementById("scenarioEdit");r.value!=""&&v.SUD.Scenarios[r.value]&&(delete v.SUD.Scenarios[r.value],console.log("tempData",v),k())}),document.getElementById("deleteEl").addEventListener("click",()=>{var a=document.createElement("div");a.setAttribute("id","warningBG"),a.setAttribute("class","warningBG"),a.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText" style="color:#ff002d;">Delete ${document.getElementById("updateScopeSelect").value}?<br><span style="font-size:.5em;">Are you sure?</span>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(a),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var t,d,n,m,g;var r=document.getElementById("updateScopeSelect").value;switch(r){case"scene":delete v.SUD.Scenarios[B].find(({name:s})=>s===e.name),k();break;case"select":var o=(t=document.getElementById(`${c.replace("char_","")}`))==null?void 0:t.innerHTML;c.includes("-cont")&&(delete v.SUD.Scenarios[B].find(({name:s})=>s===e.name).elements.find(({id:s})=>s===c),(d=document.getElementById(c.replace("-cont","")))==null||d.remove(),document.getElementById(`${c.replace("-cont","")}_global`)&&(document.getElementById(`${c.replace("-cont","")}_global`).innerHTML=`${c.replace("-cont","")}`)),c.includes("char_")&&(delete v.SUD.Scenarios[B].find(({name:s})=>s===e.name).characters.find(({persona:s})=>s.name===c),(n=document.getElementById(c.replace("char_","")))==null||n.remove(),(m=document.getElementById(`${c.replace("char_","")}-dia`))==null||m.remove(),document.getElementById(`${c.replace("char_","")}_global`)&&(document.getElementById(`${c.replace("char_","")}_global`).innerHTML=`${c.replace("char_","")}`)),c.includes("newCharacterUnsaved")&&(document.getElementById(`${o}_global`).innerHTML=`${o}`,document.getElementById(`${o}_global`).addEventListener("click",s=>{V(s.target.id.replace("_global",""),o)})),(g=document.getElementById(c))==null||g.remove();break;case"isolated":if(c.includes("-cont")){for(const s in v.SUD.Scenarios)for(const h in v.SUD.Scenarios[B])h.elements.find(({id:b})=>b===c.id)&&delete v.SUD.Scenarios[s][h].elements.find(({id:b})=>b===c);delete v.SUD.Elements.find(({id:s})=>s===c.id)}if(c.includes("char_")){for(const s in v.SUD.Scenarios)for(const h in v.SUD.Scenarios[B])h.characters.find(({persona:b})=>b.name===c)&&delete v.SUD.Scenarios[s][h].characters.find(({persona:b})=>b.name===c.persona.name);delete v.SUD.Characters.find(({persona:s})=>s.name===c.persona.name)}k();break}})}),document.getElementById("saveScene").addEventListener("click",()=>{var a=document.createElement("div");a.setAttribute("id","warningBG"),a.setAttribute("class","warningBG"),a.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText">Save ${document.getElementById("updateScopeSelect").value}?<br>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(a),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var r=document.getElementById("updateScopeSelect").value;switch(r){case"scene":break;case"isolated":if(c.includes("-cont")){var o={id:`${S.id}`,src:`${S.src}`};v.SUD.Elements.push(o)}c.includes("char_")&&v.SUD.Characters.push(I.persona);break}k()})}),document.getElementById("scenesContainer").appendChild(document.getElementById("newSceneBut")),document.getElementById("editorScreen").style.display="block",document.querySelector(".currentScene")?(P=document.getElementById("editorbodyDisplay"))==null||P.appendChild(document.querySelector(".currentScene")):(document.getElementById("universe").style.filter="blur(10px)",setTimeout(()=>{var a;(a=document.getElementById("editorbodyDisplay"))==null||a.appendChild(document.querySelector(".currentScene"))},1e3)),!0}else return document.getElementById("editorScreen").remove(),document.getElementById("universe").style.filter="blur(0px)",!1}export{ie as editor};
