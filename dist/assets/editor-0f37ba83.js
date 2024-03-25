import{d as Y,n as Q,g as Z,a as ee}from"./main-78f53495.js";import"./wScoge-a8d39de1.js";const te="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",ae=new Y.Configuration({apiKey:te}),ne=new Y.OpenAIApi(ae);var U=null,v=null,B=null,f=null,e=null,c=null,C=0,w=0,_=!1,R=null,le={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},F={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},S={id:"newElement",type:"div",src:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/charTemplate.png",left:"auto",right:"10%",bottom:"auto",top:"5%",zIndex:"3",width:"auto",height:"30%",speed:.9,shadow:!0,shadowEffect:"0px",brightness:"1.0",leftTo:"",rightTo:"",bottomTo:"",topTo:"",zIndexTo:"",widthTo:"",heightTo:"",shadowEffectTo:"",brightnessTo:"",action:""},I={persona:{name:"newCharacter",location:"newLocation",job:"newJob",dialogue:{intro:"Hello, I will become a new character."},images:{default:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/char-template.png"}},pns:{position:"absolute",left:"10%",leftTo:"12%",right:"auto",rightTo:"auto",bottom:0,bottomTo:0,top:"auto",topTo:"auto",zIndex:1,zIndexTo:1,width:"auto",widthTo:"auto",height:"80%",heightTo:"80%",speed:1,blur:"0px",blurTo:"0px",brightness:"1",brightnessTo:"1"},element:{class:"chr-textElement",type:"div",backgroundColor:"rgba(0,0,0,0.75)",padding:"10px 10px",borderRadius:"10px",borderTop:"0.5px solid rgb(255, 0, 45)",borderBottom:"0.5px solid rgb(255, 0, 45)",width:"350px",height:"auto",left:"auto",right:"-10%",bottom:"auto",top:"-6%",zIndex:2,position:"absolute",border:".5px solid #ff002d",pointer:{position:"absolute",width:"50px",height:"50px",borderLeft:"1px solid #ff002d",bottom:"-60px",left:"-30px",zIndex:-5,transform:"rotate(45deg)"}},actions:["chat"]};async function re(O){var J;try{const x=await fetch("/src/sudb.json");if(!x.ok)throw new Error(`HTTP error! Status: ${x.status}`);U=await x.json(),v=U,B=U.SUD.Scenarios.Intro}catch(x){console.error("Error fetching JSON data:",x)}if(O===!1){const x=document.createElement("link");x.rel="stylesheet",x.href="editor.css",document.head.appendChild(x);var j=document.createElement("div"),K=document.getElementById("main");j.setAttribute("id","editorScreen"),j.innerHTML=`
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
        `,K.appendChild(j),document.getElementById("loadScene").addEventListener("click",()=>{document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene"))}),document.getElementById("aiAsstSelectScope").addEventListener("change",()=>{R=document.getElementById("aiAsstSelectScope").value});var q=document.getElementById("scenarioDropdown");for(const a in v.SUD.Scenarios){var W=document.createElement("option");W.setAttribute("value",a),W.innerHTML=a,q.appendChild(W)}f=q.value,q.addEventListener("change",()=>{var o,r;var a=v.SUD.Scenarios[q.value];B=v.SUD.Scenarios[q.value],document.getElementById("scenesContainer").innerHTML="",a.forEach(s=>{var t=document.createElement("div");t.setAttribute("class","sceneSelectElement"),t.setAttribute("id",s.name),t.innerHTML=`${s.name}`,t.addEventListener("click",l=>{G(l.target.id)}),document.getElementById("scenesContainer").appendChild(t)});var i=document.createElement("div");i.setAttribute("class","sceneSelectElement"),i.setAttribute("id","newSceneBut"),i.innerHTML="[ NEW SCENE ]",document.getElementById("scenesContainer").appendChild(i),P(),_&&((o=document.querySelector(".currentScene"))==null||o.remove(),G((r=a[0])==null?void 0:r.name,0))}),B.forEach(a=>{v=U;var i=document.createElement("div");i.setAttribute("class","sceneSelectElement"),i.setAttribute("data-position",a.position-1),i.setAttribute("id",a.name),i.innerHTML=`${a.name}`,a.name==="scene1"?i.innerHTML=`${a.name}<span style="float:right; color: var(--accent)">&#9679;</span>`:i.innerHTML=`${a.name}`,i.addEventListener("click",o=>{var s;if(e.elements.find(({id:t})=>t.includes("newElementUnsaved"))&&(e.elements=e.elements.filter(({id:t})=>!t.includes("newElementUnsaved"))),e.characters.find(({persona:t})=>t.name.includes("newCharacterUnsaved"))&&(e.characters=e.characters.filter(({persona:t})=>!t.name.includes("newCharacterUnsaved"))),_){var r=o.target.getAttribute("data-position");(s=document.querySelectorAll(".currentScene")[0])==null||s.remove(),G(o.target.id,r)}document.getElementById("headerSceneName").style.color="yellow",setTimeout(()=>{document.getElementById("headerSceneName").style.color="#ff002d"},1e3)}),document.getElementById("scenesContainer").appendChild(i)});const G=(a,i)=>{var o,r,s;C=0,w=0,document.querySelector(".currentScene")===null&&(Q(`${f}`,i),setTimeout(()=>{var t;(t=document.getElementById("editorbodyDisplay"))==null||t.appendChild(document.querySelector(".currentScene"))},1e3)),document.querySelectorAll(".sceneSelectElement").forEach(t=>{document.getElementById("scnAttName").setAttribute("class","attInput"),document.getElementById("headerSceneName").removeAttribute("class"),t.id===a?document.getElementById(a).innerHTML=`${a}<span style="float:right; color: var(--accent)">&#9679;</span>`:document.getElementById(t.id).innerHTML=`${t.id}`});for(const t in B)B[t].name===a&&(e=B[t],document.getElementById("hsc").innerHTML=`${B[t].activated}]`,document.getElementById("headerSceneName").innerHTML=`${B[t].name}`,document.getElementById("scnAttName").value=`${B[t].name}`,document.getElementById("scnAttType").value=`${B[t].type}`,document.getElementById("scnAttBg").value=`${B[t].bg}`,document.getElementById("scnAttAct1").value=`${B[t].activated.land}`,document.getElementById("scnAttAct2").value=`${B[t].activated.pop}`,B[t].activated.pop===!0?document.getElementById("scnAttAct2").selectedIndex=0:document.getElementById("scnAttAct2").selectedIndex=1,document.getElementById("scnAttAct3").value=`${B[t].activated.gate}`,document.getElementById("scnAttAct4").value=`${parseInt((o=B[t].activated.scn)==null?void 0:o.join(""))}`,document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",B[t].characters.forEach(l=>{var y=document.createElement("div");if(y.setAttribute("class","inSceneCard"),y.setAttribute("id",l.persona.name),y.innerHTML=`${l.persona.name}`,document.getElementById("inSceneChars").appendChild(y),"element"in l){var p=document.createElement("div");p.setAttribute("class","inSceneCard"),p.setAttribute("id",`${l.persona.name}-dia`),p.innerHTML=`${l.persona.name} - ${l.actions[0]}`,document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("inSceneCharsDialogues").appendChild(p),p.addEventListener("click",h=>{X(h.target.id),l.persona.dialogue.pPosition==="left"?document.getElementById("charAttTalkInput").value="left":document.getElementById("charAttTalkInput").value="right"})}y.addEventListener("click",h=>{H(h.target.id)})}),(r=B[t].elements)==null||r.forEach(l=>{var y=document.createElement("div");y.setAttribute("class","inSceneCard"),y.setAttribute("id",l.id),y.innerHTML=`${l.id}`,document.getElementById("inSceneEls").appendChild(y),y.addEventListener("click",p=>{z(p.target.id)})}));_===!0&&document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.remove()}),_===!0&&document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.remove()}),v.SUD.Characters.forEach(t=>{var l=document.createElement("div"),y=document.getElementById("newCharBut");y.innerHTML="[ NEW CHARACTER ]",l.setAttribute("class","sceneSelectElementChar"),l.setAttribute("id",`${t.name}_global`);var p=e.characters.find(({persona:g})=>g.name===t.name);if(p)l.innerHTML=`${t.name}<span style="float:right; color: var(--accent)">&#9679;</span>`,l.addEventListener("click",g=>{H(g.target.id.replace("_global",""),t.name)});else{l.innerHTML=`${t.name}`;var h=()=>{C++;var g=document.createElement("div");g.setAttribute("class","inSceneCard pendingSaveCard"),g.setAttribute("id",`newCharacterUnsaved-${C}`),g.innerHTML=`${t.name}`,document.getElementById("inSceneChars").appendChild(g),g.addEventListener("click",T=>{H(T.target.id.replace("_global",""),t.name)}),l.removeEventListener("click",h),l.innerHTML=`${t.name}<span style="float:right; color: yellow">&#9679;</span>`};l.addEventListener("click",h),l.setAttribute("data-listener","true")}document.getElementById("charactersContainer").appendChild(l),document.getElementById("charactersContainer").appendChild(y)}),(s=v.SUD.Elements)==null||s.forEach(t=>{var g;var l=document.createElement("div"),y=document.getElementById("newElBut");y.innerHTML="[ NEW ELEMENT ]",l.setAttribute("class","sceneSelectElementEl"),l.setAttribute("id",`${t.id}_global`);var p=(g=e.elements)==null?void 0:g.find(({id:T})=>T===t.id);if(p)l.innerHTML=`${t.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,l.addEventListener("click",T=>{z(T.target.id.replace("_global",""))});else{l.innerHTML=`${t.id}`;var h=()=>{w++;var T=document.createElement("div");T.setAttribute("class","inSceneCard pendingSaveCard"),T.setAttribute("id",`"newElementUnsaved"-${w}`),T.innerHTML=`${t.id}}`,document.getElementById("inSceneEls").appendChild(T),T.addEventListener("click",L=>{z(L.target.id.replace("_global",""),t.id)}),l.removeEventListener("click",h),l.innerHTML=`${t.id}<span style="float:right; color: var(--accent)">&#9679;</span>`};l.addEventListener("click",h),l.setAttribute("data-listener","true")}document.getElementById("elsContainer").appendChild(l),document.getElementById("elsContainer").appendChild(y)}),_=!0};G("scene1",0),document.getElementById("summonAI").addEventListener("click",async()=>{document.getElementById("editorAiOutput").innerHTML="Loading...";var a=document.getElementById("editorUserInput").value,i=await ne.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Hello. ${a}`}],max_tokens:100}).catch(o=>{console.log(o)});console.log(i),document.getElementById("editorUserInput").value="",document.getElementById("editorAiOutput").innerHTML=`${i.data.choices[0].message.content}`});const H=(a,i)=>{var D,d,A,$,m;var o=document.querySelector(".currentScene"),r=Array.from(o.childNodes);if(!r.find(n=>n.id.includes(`${`char_${a}`}`)))if(a.includes("newCharacterUnsaved-")){I.persona.name=a;var s=document.createElement("div"),t=document.createElement("img");s.classList.add("sceneElement"),s.setAttribute("id",`char_${a}`),t.setAttribute("src",((D=v.SUD.Characters.find(({name:n})=>n===i))==null?void 0:D.images.default)||I.persona.images.default),s.appendChild(t),s.style.height=I.pns.height,s.style.width=I.pns.width,s.style.left=I.pns.left,s.style.right=I.pns.right,s.style.top=I.pns.top,s.style.position=I.pns.position,s.style.zIndex=I.pns.zIndex,s.style.position="absolute",s.style.opacity="1",t.style.width="auto",t.style.height="100%",t.style.objectFit="contain",document.querySelector(".currentScene").appendChild(s),e==null||e.characters.push(I)}else{I.persona.name=a;var l=document.createElement("div"),y=document.createElement("img"),p=document.createElement("div");p.setAttribute("class","inSceneCard pendingSaveCard"),p.setAttribute("id",`${a}`),p.innerHTML=`${a}`,p.addEventListener("click",n=>{H(n.target.id)}),document.getElementById(`${a}_global`).innerHTML=`${a}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneChars").appendChild(p),l.classList.add("sceneElement"),l.setAttribute("id",`char_${a}`),y.setAttribute("src",((d=v.SUD.Characters.find(({name:n})=>n===i))==null?void 0:d.images.default)||I.persona.images.default),l.appendChild(y),l.style.height=I.pns.height,l.style.width=I.pns.width,l.style.left=I.pns.left,l.style.right=I.pns.right,l.style.top=I.pns.top,l.style.position=I.pns.position,l.style.zIndex=I.pns.zIndex,l.style.position="absolute",l.style.opacity="1",y.style.width="auto",y.style.height="100%",y.style.objectFit="contain",document.querySelector(".currentScene").appendChild(l),e==null||e.characters.push(I)}c=`char_${a}`,document.getElementById(`char_${a}`).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(`char_${a}`).style.border="none"},1e3);for(const n in e.characters)if(e.characters[n].persona.name===a){document.getElementById("chElAtt").innerHTML=`
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
                    <input type="range" min="-101" max="101" value="${Number((A=e.characters[n].pns.topTo)==null?void 0:A.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
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
                    <input type="range" min="0" max="200" value="${Number(($=e.characters[n].pns.heightTo)==null?void 0:$.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Blur To:</div>
                    <span class="sliderAttValue" id="blurToValue">${e.characters[n].pns.blurTo}</span>
                    <input type="range" min="0" max="100" value="${Number((m=e.characters[n].pns.blurTo)==null?void 0:m.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright To:</div>
                    <span class="sliderAttValue" id="brightnessToValue">${e.characters[n].pns.brightnessTo}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[n].pns.brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",e.characters[n].actions[0]==="chat"&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(E=>{E.innerHTML==="auto"&&(document.getElementById(E.id.replace("Value","Slider")).value=101,document.querySelector(`#${E.id.replace("Value","Slider")}`).style.pointerEvents="none"),E.innerHTML===""&&(document.getElementById(E.id.replace("Value","Slider")).value=-101,document.getElementById(E.id).innerHTML="-")}),document.querySelectorAll(".attBut").forEach(E=>{E.style.display="block"}),document.querySelector("#charAttActionInput").addEventListener("change",E=>{E.target.checked?(e.characters[n].actions[0]="chat",document.getElementById(`${e.characters[n].persona.name}_dialogue`).style.display="block",v.SUD.Scenarios[f].forEach(b=>{b.characters.forEach(u=>{u.persona.name===c.replace("char_","")&&(u.actions[0]="chat")})})):(e.characters[n].actions[0]="none",document.getElementById(`${e.characters[n].persona.name}_dialogue`).style.display="none",v.SUD.Scenarios[f].forEach(b=>{b.characters.forEach(u=>{u.persona.name===c.replace("char_","")&&(u.actions[0]="")})}))});var h=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(h===!1){h=!0,document.querySelector("#attLock").innerHTML="🔒";return}else{e.characters[n].locked=!1,document.querySelector("#attLock").innerHTML="🔓",h=!1;return}}),document.querySelectorAll(".slider").forEach(E=>{var b=v.SUD.Scenarios[f].find(({name:u})=>u===e.name).characters.find(({persona:u})=>u.name===c.replace("char_",""));E.addEventListener("input",u=>{document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML=u.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(b.pns[u.target.id.replace("Slider","")]=u.target.value),u.target.value==="101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(b.pns[u.target.id.replace("Slider","")]=u.target.value)),u.target.value==="-101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(b.pns[u.target.id.replace("Slider","")]=u.target.value)),`${u.target.value}%`!=e.characters[n].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(b.pns[u.target.id.replace("Slider","")]=u.target.value)):`${u.target.value}px`!=e.characters[n].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(b.pns[u.target.id.replace("Slider","")]=u.target.value)):Number(u.target.value)!=e.characters[n].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(b.pns[u.target.id.replace("Slider","")]=u.target.value)):u.target.value!=e.characters[n].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(b.pns[u.target.id.replace("Slider","")]=u.target.value)):(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(b.pns[u.target.id.replace("Slider","")]=u.target.value));var V=document.getElementById(`${c}`);V.style.left=document.getElementById("leftValue").innerHTML+"%",V.style.right=document.getElementById("rightValue").innerHTML+"%",V.style.bottom=document.getElementById("bottomValue").innerHTML+"%",V.style.top=document.getElementById("topValue").innerHTML+"%",V.style.zIndex=document.getElementById("zIndexValue").innerHTML,V.style.width=document.getElementById("widthValue").innerHTML+"%",V.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#char_${e.characters[n].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,h===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})}),document.getElementById("attPreview").addEventListener("click",function(){Z.fromTo(`#${c}`,{left:document.getElementById("leftSlider").value+"%",bottom:document.getElementById("bottomValue").value+"%",zIndex:document.getElementById("zIndexSlider").value,height:document.getElementById("heightSlider").value+"%",filter:`blur(${document.getElementById("blurSlider").value}px) brightness(${document.getElementById("brightnessSlider").value})`},{duration:document.getElementById("speedSlider").value,left:document.getElementById("leftToSlider").value+"%",bottom:document.getElementById("bottomToSlider").value+"%",zIndex:document.getElementById("zIndexToSlider").value,height:document.getElementById("heightToSlider").value+"%",filter:`blur(${document.getElementById("blurToSlider").value}px) brightness(${document.getElementById("brightnessToSlider").value})`})});var g=document.getElementById(`char_${e.characters[n].persona.name}`);g.style.left=document.getElementById("leftValue").innerHTML,g.style.right=document.getElementById("rightValue").innerHTML+"%",g.style.bottom=document.getElementById("bottomValue").innerHTML+"%",g.style.top=document.getElementById("topValue").innerHTML+"%",g.style.zIndex=document.getElementById("zIndexValue").innerHTML,g.style.width=document.getElementById("widthValue").innerHTML+"%",g.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#char_${e.characters[n].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var T=document.querySelector("#charAttTalkInput");for(const E in e.characters[n].persona.dialogue){var L=document.createElement("option");L.setAttribute("value",E),L.innerHTML=E,T.appendChild(L)}var M=document.querySelector("#charAttImgInput");for(const E in e.characters[n].persona.images){var N=document.createElement("option");N.setAttribute("value",e.characters[n].persona.images[E]),N.innerHTML=E,M.appendChild(N)}document.querySelector("#charAttTalkInput").addEventListener("change",E=>{document.querySelector(`#char_${e.characters[n].persona.name} #${e.characters[n].persona.name}_dialogue`).innerHTML=`<p id="${e.characters[n].persona.name}_dialogue">${e.characters[n].persona.dialogue[E.target.value]||`${E.target.value}`}</p>`;var b=document.createElement("div");b.classList.add("dialoguePointer"),b.style.position="absolute",b.style.width=e.characters[n].element.pointer.width,b.style.height=e.characters[n].element.pointer.height,b.style.bottom=e.characters[n].element.pointer.bottom,b.style.left=e.characters[n].element.pointer.left,b.style.zIndex=e.characters[n].element.pointer.zIndex,b.style.transform=e.characters[n].element.pointer.transform,b.style.borderLeft=e.characters[n].element.pointer.borderleft,document.querySelector(`#${e.characters[n].persona.name}_dialogue`).appendChild(b),document.getElementById("editorUserInput").value=`${e.characters[n].persona.dialogue[E.target.value]||`${E.target.value}`}`}),document.querySelector("#charAttImgInput").addEventListener("change",E=>{document.querySelector(`#char_${e.characters[n].persona.name} img:first-child`).src=E.target.value,document.getElementById("editorUserInput").value=`${E.target.value}`})}},z=(a,i)=>{var T,L,M,N,D;var o=document.querySelector(".currentScene"),r=Array.from(o.childNodes);if(!r.find(d=>d.id.includes(`${`${a}-cont`}`)))if(a.includes("newElementUnsaved-")){S.id=a;var s=document.createElement("div"),t=document.createElement("img");s.classList.add("sceneElement"),s.setAttribute("id",`${a}-cont`),t.setAttribute("id",`${a}-src`),t.setAttribute("src",((T=v.SUD.Elements.find(({id:d})=>d===i))==null?void 0:T.src)||S.src),s.appendChild(t),s.style.height=S.height,s.style.width=S.width,s.style.left=S.left,s.style.right=S.right,s.style.top=S.top,s.style.position=S.position,s.style.zIndex=S.zIndex,s.style.position="absolute",s.style.opacity="1",t.style.width="auto",t.style.height="100%",t.style.objectFit="contain",document.querySelector(".currentScene").appendChild(s),console.log("new element added to scene",e.elements),e==null||e.elements.push(S)}else{S.id=a;var l=document.createElement("div"),y=document.createElement("img"),p=document.createElement("div");p.setAttribute("class","inSceneCard pendingSaveCard"),p.setAttribute("id",`${a}`),p.innerHTML=`${a}`,p.addEventListener("click",d=>{z(d.target.id,i)}),document.getElementById(`${a}_global`).innerHTML=`${a}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneEls").appendChild(p),l.classList.add("sceneElement"),l.setAttribute("id",`${a}-cont`),console.log("name1",a),y.setAttribute("src",((L=v.SUD.Elements.find(({id:d})=>d===a))==null?void 0:L.src)||S.src),l.appendChild(y),l.style.height=S.height,l.style.width=S.width,l.style.left=S.left,l.style.right=S.right,l.style.top=S.top,l.style.position=S.position,l.style.zIndex=S.zIndex,l.style.position="absolute",l.style.opacity="1",y.style.width="auto",y.style.height="100%",y.style.objectFit="contain",document.querySelector(".currentScene").appendChild(l),e==null||e.elements.push(S)}c=`${a}-cont`,document.getElementById(c).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(c).style.border="none"},1e3);for(const d in e.elements)if(e.elements[d].id===a){document.getElementById("chElAtt").innerHTML=`
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
                <select type="text" class="attSelect" id="charAttTalkInput" value="${e.elements[d].innerType}">
                  <option value="">Image</option>
                  <option value="">Video</option>
                  <option value="">Audio</option>
                </select>
            </div>
            <div id="charAttSource" class="txtAttribute">
                <div id="charAttImageLabel">Source:</div>
                <input type="text" class="attSelect" id="charAttImgInput" value="${e.elements[d].src}">
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
                <input type="range" min="-101" max="101" value="${Number((M=e.elements[d].topTo)==null?void 0:M.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
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
                <input type="range" min="0" max="200" value="${Number((N=e.elements[d].heightTo)==null?void 0:N.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Blur To:</div>
                <span class="sliderAttValue" id="blurToValue">${e.elements[d].shadowEffectTo}</span>
                <input type="range" min="0" max="100" value="${Number((D=e.elements[d].shadowEffectTo)==null?void 0:D.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright To:</div>
                <span class="sliderAttValue" id="brightnessToValue">${e.elements[d].brightnessTo}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[d].brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
            </div>
        `,document.querySelector("#editorUserInput").innerHTML="",e.elements[d].shadow===!0&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(A=>{A.innerHTML==="auto"&&(document.getElementById(A.id.replace("Value","Slider")).value=101,document.querySelector(`#${A.id.replace("Value","Slider")}`).style.pointerEvents="none"),A.innerHTML===""&&(document.getElementById(A.id.replace("Value","Slider")).value=-101,document.getElementById(A.id).innerHTML="-")});var h=document.getElementById(`${e.elements[d].id}-cont`);h.style.left=document.getElementById("leftValue").innerHTML,h.style.right=document.getElementById("rightValue").innerHTML+"%",h.style.bottom=document.getElementById("bottomValue").innerHTML+"%",h.style.top=document.getElementById("topValue").innerHTML+"%",h.style.zIndex=document.getElementById("zIndexValue").innerHTML,h.style.width=document.getElementById("widthValue").innerHTML+"%",h.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#${e.elements[d].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var g=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(g===!1){g=!0,document.querySelector("#attLock").innerHTML="🔒";return}else{e.elements[d].locked=!1,document.querySelector("#attLock").innerHTML="🔓",g=!1;return}}),document.querySelectorAll(".slider").forEach(A=>{var $=v.SUD.Scenarios[f].find(({name:m})=>m===e.name).elements.find(({id:m})=>m===c.replace("-cont",""));A.addEventListener("input",m=>{document.querySelector(`#${m.target.id.replace("Slider","Value")}`).innerHTML=m.target.value,document.getElementById("updateScopeSelect").value==="scene"&&($[m.target.id.replace("Slider","")]=m.target.value),m.target.value==="101"&&(document.querySelector(`#${m.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&($[m.target.id.replace("Slider","")]=m.target.value)),m.target.value==="-101"&&(document.querySelector(`#${m.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&($[m.target.id.replace("Slider","")]=m.target.value)),`${m.target.value}%`!=e.elements[d][m.target.id.replace("Slider","")]&&m.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${m.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&($[m.target.id.replace("Slider","")]=m.target.value)):`${m.target.value}px`!=e.elements[d][m.target.id.replace("Slider","")]&&m.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${m.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&($[m.target.id.replace("Slider","")]=m.target.value)):Number(m.target.value)!=e.elements[d][m.target.id.replace("Slider","")]&&m.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${m.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&($[m.target.id.replace("Slider","")]=m.target.value)):m.target.value!=e.elements[d][m.target.id.replace("Slider","")]&&m.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${m.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&($[m.target.id.replace("Slider","")]=m.target.value)):(console.log("not changed"),document.querySelector(`#${m.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&($[m.target.id.replace("Slider","")]=m.target.value));var n=document.getElementById(`${c}`);n.style.left=document.getElementById("leftValue").innerHTML+"%",n.style.right=document.getElementById("rightValue").innerHTML+"%",n.style.bottom=document.getElementById("bottomValue").innerHTML+"%",n.style.top=document.getElementById("topValue").innerHTML+"%",n.style.zIndex=document.getElementById("zIndexValue").innerHTML,n.style.width=document.getElementById("widthValue").innerHTML+"%",n.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#${e.elements[d].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,g===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})})}},X=a=>{c=`${a}`,document.getElementById(c).style.color="yellow",setTimeout(()=>{document.getElementById(c).style.color="#ff002d"},1e3);for(const o in e.characters)if("element"in e.characters[o]){document.getElementById("chElAtt").innerHTML=`
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
            `,document.querySelector("#charAttTalkInput").addEventListener("change",r=>{r.target.value==="left"?(document.getElementById(`${c.replace("dialogue","")}pointer`).style.right="",document.getElementById(`${c.replace("dialogue","")}pointer`).style.left="-30px",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderLeft="1px solid #ff002d",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderTop="0px solid #ff002d"):(document.getElementById(`${c.replace("dialogue","")}pointer`).style.right="-30px",document.getElementById(`${c.replace("dialogue","")}pointer`).style.left="",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderLeft="0px solid #ff002d",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderTop="1px solid #ff002d")}),document.querySelector("#editorUserInput").innerHTML="",document.querySelectorAll(".sliderAttValue").forEach(r=>{r.innerHTML==="auto"&&(document.getElementById(r.id.replace("Value","Slider")).value=101,document.querySelector(`#${r.id.replace("Value","Slider")}`).style.pointerEvents="none"),r.innerHTML===""&&(document.getElementById(r.id.replace("Value","Slider")).value=-101,document.getElementById(r.id).innerHTML="-")});var i=document.getElementById(`${e.characters[o].persona.name}_dialogue`);i.style.left=document.getElementById("leftValue").innerHTML,i.style.right=document.getElementById("rightValue").innerHTML+"%",i.style.bottom=document.getElementById("bottomValue").innerHTML+"%",i.style.top=document.getElementById("topValue").innerHTML+"%",i.style.zIndex=document.getElementById("zIndexValue").innerHTML,i.style.width=document.getElementById("widthValue").innerHTML+"px",i.style.height=document.getElementById("heightValue").innerHTML,document.querySelectorAll(".slider").forEach(r=>{var s=v.SUD.Scenarios[f].find(({name:t})=>t===e.name).characters.find(({persona:t})=>t.name===c.replace("_dialogue",""));r.addEventListener("input",t=>{document.querySelector(`#${t.target.id.replace("Slider","Value")}`).innerHTML=t.target.value,t.target.value==="101"&&(document.querySelector(`#${t.target.id.replace("Slider","Value")}`).innerHTML="auto"),t.target.value==="-101"&&(document.querySelector(`#${t.target.id.replace("Slider","Value")}`).innerHTML=""),`${t.target.value}%`!=e.elements[o][t.target.id.replace("Slider","")]&&t.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${t.target.id.replace("Slider","Value")}`).style.color="yellow":`${t.target.value}px`!=e.elements[o][t.target.id.replace("Slider","")]&&t.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${t.target.id.replace("Slider","Value")}`).style.color="yellow":Number(t.target.value)!=e.elements[o][t.target.id.replace("Slider","")]&&t.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${t.target.id.replace("Slider","Value")}`).style.color="yellow":t.target.value!=e.elements[o][t.target.id.replace("Slider","")]&&t.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${t.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(s.element[t.target.id.replace("Slider","")]=t.target.value)):(console.log("not changed"),document.querySelector(`#${t.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(s.element[t.target.id.replace("Slider","")]=t.target.value));var l=document.getElementById(`${e.characters[o].persona.name}_dialogue`),y=document.getElementById("leftValue").innerHTML,p=document.getElementById("rightValue").innerHTML,h=document.getElementById("bottomValue").innerHTML,g=document.getElementById("topValue").innerHTML,T=document.getElementById("zIndexValue").innerHTML,L=document.getElementById("widthValue").innerHTML,M=document.getElementById("heightValue").innerHTML;l.setAttribute("style",`left: ${y} !important; right: ${p}% !important; bottom: ${h}% !important; top: ${g}% !important; z-index: ${T} !important; width: ${L}px !important; height: ${M}px !important;inset: -5% -10% auto auto; z-index: 2; border-radius: 10px; border-top: 0.5px solid rgb(255, 0, 45); border-bottom: 0.5px solid rgb(255, 0, 45); padding: 10px; transform: translate(0px, 0px); transform-origin: left bottom; translate: none; rotate: none; scale: none;`)})})}};var k=()=>{const a=JSON.stringify(v);fetch("http://localhost:3001/save-json",{method:"POST",body:a,headers:{"Content-Type":"application/json"}}).then(i=>{i.ok?console.log("JSON data saved successfully"):console.error("Error saving JSON data")}).catch(i=>{console.error("Error saving JSON data:",i)})};document.querySelector("#generateScenario").addEventListener("click",a=>{a.preventDefault();var i=document.getElementById("scenarioEdit");i.value!=""&&(v.SUD.Scenarios[i.value]=[],console.log("tempData",v),k())});var P=()=>{document.querySelector("#newSceneBut").addEventListener("click",()=>{var o;v=U,F=le,C=0,w=0,v.SUD.Scenarios[f].push(F),e=v.SUD.Scenarios[f].find(({name:r})=>r==="newScene");var a=document.createElement("div"),i=document.getElementById("editorbodyDisplay");a.setAttribute("clas s","currentScene"),a.setAttribute("id","currentSceneView_draft"),a.setAttribute("style","z-index: 10; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); opacity: 1;"),i.appendChild(a),document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("headerSceneName").innerHTML="[ NEW SCENE ]",document.getElementById("headerSceneName").setAttribute("class","pendingSaveText"),(o=document.querySelector(".currentScene"))==null||o.remove(),document.getElementById("scnAttName").value="[ NEW SCENE ]",document.getElementById("scnAttName").setAttribute("class","attInput pendingSaveText"),document.querySelectorAll(".sceneSelectElementEl").forEach(r=>{r.innerHTML=`${r.id.replace("_global","")}`;var s=()=>{var t=document.createElement("div");t.setAttribute("class","inSceneCard pendingSaveCard"),t.setAttribute("id","newElementUnsaved"),t.innerHTML=`${r.id.replace("_global","")}`,r.removeEventListener("click",s),r.innerHTML=`${r.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};if(!r.getAttribute("data-listener")){r.addEventListener("click",s);return}r.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElementChar").forEach(r=>{r.innerHTML=`${r.id.replace("_global","")}`;var s=()=>{var t=document.createElement("div");t.setAttribute("class","inSceneCard pendingSaveCard"),t.setAttribute("id","newElementUnsaved"),t.innerHTML=`${r.id.replace("_global","")}`,r.removeEventListener("click",s),r.innerHTML=`${r.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};r.getAttribute("data-listener")||r.addEventListener("click",s),r.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElement").forEach(r=>{r.id==="newSceneBut"?r.innerHTML=`${r.id}<span style="float:right; color: yellow">&#9679;</span>`:r.innerHTML=`${r.id.replace("_global","")}`})}),document.getElementById("addToScope").addEventListener("click",()=>{var a=document.getElementById("editorUserInput").value;if(e.activated.land=document.getElementById("scnAttAct1").value,e.activated.pop=document.getElementById("scnAttAct2").value,e.activated.gate=document.getElementById("scnAttAct3").value,e.activated.scn=document.getElementById("scnAttAct4").value,R==="charAttDialogue"){var i=e.characters.find(({persona:t})=>t.name===c.replace("char_","")),o=document.createElement("option");o.setAttribute("value",a),o.innerHTML=a,document.getElementById("charAttTalkInput").appendChild(o),i.persona.name=document.getElementById("charAttNameInput").value,i.persona.location=document.getElementById("charAttLocInput").value,i.persona.job=document.getElementById("charAttJobInput").value}if(R==="charAttImages"){var r=document.createElement("option");r.setAttribute("value",a),r.innerHTML=a,document.getElementById("charAttImgInput").appendChild(r)}if(R==="charAttSource"){var s=e.elements.find(({id:t})=>t===c);document.getElementById("charAttImgInput").value=a,document.getElementById(`${c.replace("cont","src")}`).src=a,s.id=document.getElementById("charAttNameInput").value,s.action=document.getElementById("charAttJobInput").value,s.src=document.getElementById("charAttImgInput").value}document.getElementById("editorUserInput").value=""}),document.querySelector("#newCharBut").addEventListener("click",()=>{C++;var a=document.createElement("div");a.setAttribute("class","inSceneCard pendingSaveCard"),a.setAttribute("id",`newCharacterUnsaved-${C}`),a.innerHTML="[ NEW CHAR ]",a.addEventListener("click",i=>{H(i.target.id)}),document.getElementById("inSceneChars").appendChild(a)}),document.querySelector("#newElBut").addEventListener("click",()=>{w++;var a=document.createElement("div");a.setAttribute("class","inSceneCard pendingSaveCard"),a.setAttribute("id",`newElementUnsaved-${w}`),a.innerHTML="[ NEW EL ]",a.addEventListener("click",i=>{z(i.target.id)}),document.getElementById("inSceneEls").appendChild(a)})};return P(),document.querySelector("#deleteScenario").addEventListener("click",a=>{a.preventDefault();var i=document.getElementById("scenarioEdit");i.value!=""&&v.SUD.Scenarios[i.value]&&(delete v.SUD.Scenarios[i.value],console.log("tempData",v),k())}),document.getElementById("deleteEl").addEventListener("click",()=>{var a=document.createElement("div");a.setAttribute("id","warningBG"),a.setAttribute("class","warningBG"),a.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText" style="color:#ff002d;">Delete ${document.getElementById("updateScopeSelect").value}?<br><span style="font-size:.5em;">Are you sure?</span>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(a),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var r,s,t,l,y;var i=document.getElementById("updateScopeSelect").value;switch(i){case"scene":delete v.SUD.Scenarios[f].find(({name:p})=>p===e.name),k();break;case"select":var o=(r=document.getElementById(`${c.replace("char_","")}`))==null?void 0:r.innerHTML;c.includes("-cont")&&(delete v.SUD.Scenarios[f].find(({name:p})=>p===e.name).elements.find(({id:p})=>p===c),(s=document.getElementById(c.replace("-cont","")))==null||s.remove(),document.getElementById(`${c.replace("-cont","")}_global`)&&(document.getElementById(`${c.replace("-cont","")}_global`).innerHTML=`${c.replace("-cont","")}`)),c.includes("char_")&&(delete v.SUD.Scenarios[f].find(({name:p})=>p===e.name).characters.find(({persona:p})=>p.name===c),(t=document.getElementById(c.replace("char_","")))==null||t.remove(),(l=document.getElementById(`${c.replace("char_","")}-dia`))==null||l.remove(),document.getElementById(`${c.replace("char_","")}_global`)&&(document.getElementById(`${c.replace("char_","")}_global`).innerHTML=`${c.replace("char_","")}`)),c.includes("newCharacterUnsaved")&&(document.getElementById(`${o}_global`).innerHTML=`${o}`,document.getElementById(`${o}_global`).addEventListener("click",p=>{H(p.target.id.replace("_global",""),o)})),(y=document.getElementById(c))==null||y.remove();break;case"isolated":if(c.includes("-cont")){for(const p in v.SUD.Scenarios)for(const h in v.SUD.Scenarios[f])h.elements.find(({id:g})=>g===c.id)&&delete v.SUD.Scenarios[p][h].elements.find(({id:g})=>g===c);delete v.SUD.Elements.find(({id:p})=>p===c.id)}if(c.includes("char_")){for(const p in v.SUD.Scenarios)for(const h in v.SUD.Scenarios[f])h.characters.find(({persona:g})=>g.name===c)&&delete v.SUD.Scenarios[p][h].characters.find(({persona:g})=>g.name===c.persona.name);delete v.SUD.Characters.find(({persona:p})=>p.name===c.persona.name)}k();break}})}),document.getElementById("saveScene").addEventListener("click",()=>{var a=document.createElement("div");a.setAttribute("id","warningBG"),a.setAttribute("class","warningBG"),a.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText">Save ${document.getElementById("updateScopeSelect").value}?<br>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(a),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var i=document.getElementById("updateScopeSelect").value;switch(i){case"scene":break;case"isolated":if(c.includes("-cont")){var o={id:`${S.id}`,src:`${S.src}`};v.SUD.Elements.push(o)}c.includes("char_")&&v.SUD.Characters.push(I.persona);break}k()})}),document.getElementById("scenesContainer").appendChild(document.getElementById("newSceneBut")),document.getElementById("editorScreen").style.display="block",document.getElementById("mapperBut").addEventListener("click",()=>{ee()}),document.querySelector(".currentScene")?(J=document.getElementById("editorbodyDisplay"))==null||J.appendChild(document.querySelector(".currentScene")):(document.getElementById("universe").style.filter="blur(10px)",setTimeout(()=>{var a;(a=document.getElementById("editorbodyDisplay"))==null||a.appendChild(document.querySelector(".currentScene"))},1e3)),!0}else return document.getElementById("editorScreen").remove(),document.getElementById("universe").style.filter="blur(0px)",!1}export{re as editor};
