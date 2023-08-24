import{p as b,b as ne,c as ae,n as de,g as re}from"./index.b51637e2.js";var se=document.getElementById("universe"),g=se.getContext("2d"),C=.5,ee=document.createElement("img"),ie={},A={1:{region:"LX Industry",color:"brown",id:"1b1"},2:{region:"West Wing River",color:"cadetblue",id:"1b2"},3:{region:"Outerlands",color:"purple",id:"1b3"},4:{region:"The 12th",color:"darkolivegreen",id:"1b4"},5:{region:"Ports of Alansana",color:"yellow",id:"1b5"},6:{region:"Falcons Heart",color:"blue",id:"1b6"},7:{region:"East Wing River",color:"red",id:"1b7"},8:{region:"Sustainer Town",color:"orange",id:"1b8"},9:{region:"Alans Isles",color:"gray",id:"1b9"},0:{region:"City Central",color:"darkslategray",id:"1b0"}};function N(){g.clearRect(b.x,b.y,18,18),ee.onload=function(){g.drawImage(ee,b.x,b.y,18,18,b.x,b.y,18,18)},ee.src="https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/uniMap/scoge-taos-city-universe.jpg"}function ce(_,D,R,V,k,w,q,L){var I={region:D,owner:R,function:V,material:k,visibility:w,privacy:q,chapter:L};ie[_]=I}function oe(){var _=document.getElementById("mapperBut"),D=document.getElementById("camera"),R=document.querySelectorAll(".uniEvents"),V=document.getElementById("getUniMenu"),k=document.getElementById("powerUp1"),w=document.getElementById("ringView");if(window.mapperActive==!0){_.style.color="var(--primary)",R.forEach(L=>{L.style.display="block"}),V.style.opacity="1",V.style.pointerEvents="auto",k.style.display="block",w.style.display="block",window.mapperActive=!1,document.getElementById("mapperUI").remove();return}else{_.style.color="var(--accent)",R.forEach(L=>{L.style.display="none"}),V.style.opacity="0",V.style.pointerEvents="none",k.style.display="none",w.style.display="none",window.mapperActive=!0;var q=document.createElement("div");q.innerHTML=`
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
                <input type="range" min="0" max="1" step="0.1" value="${C}" class="slider" id="mapperVisSlider">
            </div>
            <div class="mapperButs" id="clearBut">
                <div id="mapperClearBut">RESET</div>
            </div>
            <div class="mapperButs" id="saveBut">
                <div id="mapperSaveBut">SAVE ALL</div>
            </div>
        `,q.id="mapperUI",D.appendChild(q),document.getElementById("mapperClose").addEventListener("click",()=>{window.mapperActive=!1,document.getElementById("mapperUI").remove()}),document.addEventListener("keydown",L=>{var I=document.getElementById("mapperSelectedSel");if(L.keyCode==49&&(N(),g.fillStyle=A[1].color,I.innerHTML=A[1].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18)),L.keyCode==50){N(),g.fillStyle=A[2].color,I.innerHTML=A[2].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18);var G=ne;ce(G,"Falcons Heart",null,null,"Oracles Mansion",!1,!1,"All"),console.log(ie)}L.keyCode==51&&(N(),g.fillStyle=A[3].color,I.innerHTML=A[3].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18)),L.keyCode==52&&(N(),g.fillStyle=A[4].color,I.innerHTML=A[4].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18)),L.keyCode==53&&(N(),g.fillStyle=A[5].color,I.innerHTML=A[5].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18)),L.keyCode==54&&(N(),g.fillStyle=A[6].color,I.innerHTML=A[6].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18)),L.keyCode==55&&(N(),g.fillStyle=A[7].color,I.innerHTML=A[7].region,g.globalAlpha=C,g.globalCompositeOperation="multiply",g.fillRect(b.x,b.y,18,18)),L.keyCode==56&&(N(),g.fillStyle=A[8].color,I.innerHTML=A[8].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18)),L.keyCode==57&&(N(),g.fillStyle=A[9].color,I.innerHTML=A[9].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18)),L.keyCode==48&&(N(),g.fillStyle=A[0].color,I.innerHTML=A[0].region,g.globalAlpha=C,g.fillRect(b.x,b.y,18,18))})}}const ue="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",me=new ae.Configuration({apiKey:ue}),pe=new ae.OpenAIApi(me);var K=null,v=null,$=null,x=null,e=null,c=null,J=0,O=0,Q=!1,Z=null,ve={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},te={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},f={id:"newElement",type:"div",src:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/charTemplate.png",left:"auto",right:"10%",bottom:"auto",top:"5%",zIndex:"3",width:"auto",height:"30%",speed:.9,shadow:!0,shadowEffect:"0px",brightness:"1.0",leftTo:"",rightTo:"",bottomTo:"",topTo:"",zIndexTo:"",widthTo:"",heightTo:"",shadowEffectTo:"",brightnessTo:"",action:""},B={persona:{name:"newCharacter",location:"newLocation",job:"newJob",dialogue:{intro:"Hello, I will become a new character."},images:{default:"https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Characters/char-template.png"}},pns:{position:"absolute",left:"10%",leftTo:"12%",right:"auto",rightTo:"auto",bottom:0,bottomTo:0,top:"auto",topTo:"auto",zIndex:1,zIndexTo:1,width:"auto",widthTo:"auto",height:"80%",heightTo:"80%",speed:1,blur:"0px",blurTo:"0px",brightness:"1",brightnessTo:"1"},element:{class:"chr-textElement",type:"div",backgroundColor:"rgba(0,0,0,0.75)",padding:"10px 10px",borderRadius:"10px",borderTop:"0.5px solid rgb(255, 0, 45)",borderBottom:"0.5px solid rgb(255, 0, 45)",width:"350px",height:"auto",left:"auto",right:"-10%",bottom:"auto",top:"-6%",zIndex:2,position:"absolute",border:".5px solid #ff002d",pointer:{position:"absolute",width:"50px",height:"50px",borderLeft:"1px solid #ff002d",bottom:"-60px",left:"-30px",zIndex:-5,transform:"rotate(45deg)"}},actions:["chat"]};async function ye(_){var L;try{const I=await fetch("/src/sudb.json");if(!I.ok)throw new Error(`HTTP error! Status: ${I.status}`);K=await I.json(),v=K,$=K.SUD.Scenarios.Intro}catch(I){console.error("Error fetching JSON data:",I)}if(_===!1){const I=document.createElement("link");I.rel="stylesheet",I.href="editor.css",document.head.appendChild(I);var D=document.createElement("div"),R=document.getElementById("main");D.setAttribute("id","editorScreen"),D.innerHTML=`
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
        `,R.appendChild(D),document.getElementById("loadScene").addEventListener("click",()=>{document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene"))}),document.getElementById("aiAsstSelectScope").addEventListener("change",()=>{Z=document.getElementById("aiAsstSelectScope").value});var V=document.getElementById("scenarioDropdown");for(const a in v.SUD.Scenarios){var k=document.createElement("option");k.setAttribute("value",a),k.innerHTML=a,V.appendChild(k)}x=V.value,V.addEventListener("change",()=>{var o,t;var a=v.SUD.Scenarios[V.value];$=v.SUD.Scenarios[V.value],document.getElementById("scenesContainer").innerHTML="",a.forEach(n=>{var i=document.createElement("div");i.setAttribute("class","sceneSelectElement"),i.setAttribute("id",n.name),i.innerHTML=`${n.name}`,i.addEventListener("click",m=>{G(m.target.id)}),document.getElementById("scenesContainer").appendChild(i)});var r=document.createElement("div");r.setAttribute("class","sceneSelectElement"),r.setAttribute("id","newSceneBut"),r.innerHTML="[ NEW SCENE ]",document.getElementById("scenesContainer").appendChild(r),q(),Q&&((o=document.querySelector(".currentScene"))==null||o.remove(),G((t=a[0])==null?void 0:t.name,0))}),$.forEach(a=>{v=K;var r=document.createElement("div");r.setAttribute("class","sceneSelectElement"),r.setAttribute("data-position",a.position-1),r.setAttribute("id",a.name),r.innerHTML=`${a.name}`,a.name==="scene1"?r.innerHTML=`${a.name}<span style="float:right; color: var(--accent)">&#9679;</span>`:r.innerHTML=`${a.name}`,r.addEventListener("click",o=>{var n;if(e.elements.find(({id:i})=>i.includes("newElementUnsaved"))&&(e.elements=e.elements.filter(({id:i})=>!i.includes("newElementUnsaved"))),e.characters.find(({persona:i})=>i.name.includes("newCharacterUnsaved"))&&(e.characters=e.characters.filter(({persona:i})=>!i.name.includes("newCharacterUnsaved"))),Q){var t=o.target.getAttribute("data-position");(n=document.querySelectorAll(".currentScene")[0])==null||n.remove(),G(o.target.id,t)}document.getElementById("headerSceneName").style.color="yellow",setTimeout(()=>{document.getElementById("headerSceneName").style.color="#ff002d"},1e3)}),document.getElementById("scenesContainer").appendChild(r)});const G=(a,r)=>{var o;J=0,O=0,document.querySelector(".currentScene")===null&&(de(`${x}`,r),setTimeout(()=>{var t;(t=document.getElementById("editorbodyDisplay"))==null||t.appendChild(document.querySelector(".currentScene"))},1e3)),document.querySelectorAll(".sceneSelectElement").forEach(t=>{document.getElementById("scnAttName").setAttribute("class","attInput"),document.getElementById("headerSceneName").removeAttribute("class"),t.id===a?document.getElementById(a).innerHTML=`${a}<span style="float:right; color: var(--accent)">&#9679;</span>`:document.getElementById(t.id).innerHTML=`${t.id}`});for(const t in $)$[t].name===a&&(e=$[t],document.getElementById("hsc").innerHTML=`${$[t].activated}]`,document.getElementById("headerSceneName").innerHTML=`${$[t].name}`,document.getElementById("scnAttName").value=`${$[t].name}`,document.getElementById("scnAttType").value=`${$[t].type}`,document.getElementById("scnAttBg").value=`${$[t].bg}`,document.getElementById("scnAttAct1").value=`${$[t].activated.land}`,document.getElementById("scnAttAct2").value=`${$[t].activated.pop}`,$[t].activated.pop===!0?document.getElementById("scnAttAct2").selectedIndex=0:document.getElementById("scnAttAct2").selectedIndex=1,document.getElementById("scnAttAct3").value=`${$[t].activated.gate}`,document.getElementById("scnAttAct4").value=`${parseInt((o=$[t].activated.scn)==null?void 0:o.join(""))}`,document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",$[t].characters.forEach(n=>{var i=document.createElement("div");if(i.setAttribute("class","inSceneCard"),i.setAttribute("id",n.persona.name),i.innerHTML=`${n.persona.name}`,document.getElementById("inSceneChars").appendChild(i),"element"in n){var m=document.createElement("div");m.setAttribute("class","inSceneCard"),m.setAttribute("id",`${n.persona.name}-dia`),m.innerHTML=`${n.persona.name} - ${n.actions[0]}`,document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("inSceneCharsDialogues").appendChild(m),m.addEventListener("click",y=>{le(y.target.id),n.persona.dialogue.pPosition==="left"?document.getElementById("charAttTalkInput").value="left":document.getElementById("charAttTalkInput").value="right"})}i.addEventListener("click",y=>{P(y.target.id)})}),$[t].elements.forEach(n=>{var i=document.createElement("div");i.setAttribute("class","inSceneCard"),i.setAttribute("id",n.id),i.innerHTML=`${n.id}`,document.getElementById("inSceneEls").appendChild(i),i.addEventListener("click",m=>{Y(m.target.id)})}));Q===!0&&document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.remove()}),Q===!0&&document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.remove()}),v.SUD.Characters.forEach(t=>{var n=document.createElement("div"),i=document.getElementById("newCharBut");i.innerHTML="[ NEW CHARACTER ]",n.setAttribute("class","sceneSelectElementChar"),n.setAttribute("id",`${t.name}_global`);var m=e.characters.find(({persona:s})=>s.name===t.name);if(m)n.innerHTML=`${t.name}<span style="float:right; color: var(--accent)">&#9679;</span>`,n.addEventListener("click",s=>{P(s.target.id.replace("_global",""),t.name)});else{n.innerHTML=`${t.name}`;var y=()=>{J++;var s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`newCharacterUnsaved-${J}`),s.innerHTML=`${t.name}`,document.getElementById("inSceneChars").appendChild(s),s.addEventListener("click",E=>{P(E.target.id.replace("_global",""),t.name)}),n.removeEventListener("click",y),n.innerHTML=`${t.name}<span style="float:right; color: yellow">&#9679;</span>`};n.addEventListener("click",y),n.setAttribute("data-listener","true")}document.getElementById("charactersContainer").appendChild(n),document.getElementById("charactersContainer").appendChild(i)}),v.SUD.Elements.forEach(t=>{var n=document.createElement("div"),i=document.getElementById("newElBut");i.innerHTML="[ NEW ELEMENT ]",n.setAttribute("class","sceneSelectElementEl"),n.setAttribute("id",`${t.id}_global`);var m=e.elements.find(({id:s})=>s===t.id);if(m)n.innerHTML=`${t.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,n.addEventListener("click",s=>{Y(s.target.id.replace("_global",""))});else{n.innerHTML=`${t.id}`;var y=()=>{O++;var s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`"newElementUnsaved"-${O}`),s.innerHTML=`${t.id}}`,document.getElementById("inSceneEls").appendChild(s),s.addEventListener("click",E=>{Y(E.target.id.replace("_global",""),t.id)}),n.removeEventListener("click",y),n.innerHTML=`${t.id}<span style="float:right; color: var(--accent)">&#9679;</span>`};n.addEventListener("click",y),n.setAttribute("data-listener","true")}document.getElementById("elsContainer").appendChild(n),document.getElementById("elsContainer").appendChild(i)}),Q=!0};G("scene1",0),document.getElementById("summonAI").addEventListener("click",async()=>{document.getElementById("editorAiOutput").innerHTML="Loading...";var a=document.getElementById("editorUserInput").value,r=await pe.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Hello. ${a}`}],max_tokens:100}).catch(o=>{console.log(o)});console.log(r),document.getElementById("editorUserInput").value="",document.getElementById("editorAiOutput").innerHTML=`${r.data.choices[0].message.content}`});const P=(a,r)=>{var X,d,H,M,p;var o=document.querySelector(".currentScene"),t=Array.from(o.childNodes);if(!t.find(l=>l.id.includes(`${`char_${a}`}`)))if(a.includes("newCharacterUnsaved-")){B.persona.name=a;var n=document.createElement("div"),i=document.createElement("img");n.classList.add("sceneElement"),n.setAttribute("id",`char_${a}`),i.setAttribute("src",((X=v.SUD.Characters.find(({name:l})=>l===r))==null?void 0:X.images.default)||B.persona.images.default),n.appendChild(i),n.style.height=B.pns.height,n.style.width=B.pns.width,n.style.left=B.pns.left,n.style.right=B.pns.right,n.style.top=B.pns.top,n.style.position=B.pns.position,n.style.zIndex=B.pns.zIndex,n.style.position="absolute",n.style.opacity="1",i.style.width="auto",i.style.height="100%",i.style.objectFit="contain",document.querySelector(".currentScene").appendChild(n),e==null||e.characters.push(B)}else{B.persona.name=a;var m=document.createElement("div"),y=document.createElement("img"),s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`${a}`),s.innerHTML=`${a}`,s.addEventListener("click",l=>{P(l.target.id)}),document.getElementById(`${a}_global`).innerHTML=`${a}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneChars").appendChild(s),m.classList.add("sceneElement"),m.setAttribute("id",`char_${a}`),y.setAttribute("src",((d=v.SUD.Characters.find(({name:l})=>l===r))==null?void 0:d.images.default)||B.persona.images.default),m.appendChild(y),m.style.height=B.pns.height,m.style.width=B.pns.width,m.style.left=B.pns.left,m.style.right=B.pns.right,m.style.top=B.pns.top,m.style.position=B.pns.position,m.style.zIndex=B.pns.zIndex,m.style.position="absolute",m.style.opacity="1",y.style.width="auto",y.style.height="100%",y.style.objectFit="contain",document.querySelector(".currentScene").appendChild(m),e==null||e.characters.push(B)}c=`char_${a}`,document.getElementById(`char_${a}`).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(`char_${a}`).style.border="none"},1e3);for(const l in e.characters)if(e.characters[l].persona.name===a){document.getElementById("chElAtt").innerHTML=`
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
                    <input type="range" min="-101" max="101" value="${Number((H=e.characters[l].pns.topTo)==null?void 0:H.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
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
                    <input type="range" min="0" max="200" value="${Number((M=e.characters[l].pns.heightTo)==null?void 0:M.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
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
            `,document.querySelector("#editorUserInput").innerHTML="",e.characters[l].actions[0]==="chat"&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(h=>{h.innerHTML==="auto"&&(document.getElementById(h.id.replace("Value","Slider")).value=101,document.querySelector(`#${h.id.replace("Value","Slider")}`).style.pointerEvents="none"),h.innerHTML===""&&(document.getElementById(h.id.replace("Value","Slider")).value=-101,document.getElementById(h.id).innerHTML="-")}),document.querySelectorAll(".attBut").forEach(h=>{h.style.display="block"}),document.querySelector("#charAttActionInput").addEventListener("change",h=>{h.target.checked?(e.characters[l].actions[0]="chat",document.getElementById(`${e.characters[l].persona.name}_dialogue`).style.display="block",v.SUD.Scenarios[x].forEach(S=>{S.characters.forEach(u=>{u.persona.name===c.replace("char_","")&&(u.actions[0]="chat")})})):(e.characters[l].actions[0]="none",document.getElementById(`${e.characters[l].persona.name}_dialogue`).style.display="none",v.SUD.Scenarios[x].forEach(S=>{S.characters.forEach(u=>{u.persona.name===c.replace("char_","")&&(u.actions[0]="")})}))});var E=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(E===!1){E=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.characters[l].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",E=!1;return}}),document.querySelectorAll(".slider").forEach(h=>{var S=v.SUD.Scenarios[x].find(({name:u})=>u===e.name).characters.find(({persona:u})=>u.name===c.replace("char_",""));h.addEventListener("input",u=>{document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML=u.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(S.pns[u.target.id.replace("Slider","")]=u.target.value),u.target.value==="101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(S.pns[u.target.id.replace("Slider","")]=u.target.value)),u.target.value==="-101"&&(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(S.pns[u.target.id.replace("Slider","")]=u.target.value)),`${u.target.value}%`!=e.characters[l].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(S.pns[u.target.id.replace("Slider","")]=u.target.value)):`${u.target.value}px`!=e.characters[l].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(S.pns[u.target.id.replace("Slider","")]=u.target.value)):Number(u.target.value)!=e.characters[l].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(S.pns[u.target.id.replace("Slider","")]=u.target.value)):u.target.value!=e.characters[l].pns[u.target.id.replace("Slider","")]&&u.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(S.pns[u.target.id.replace("Slider","")]=u.target.value)):(document.querySelector(`#${u.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(S.pns[u.target.id.replace("Slider","")]=u.target.value));var U=document.getElementById(`${c}`);U.style.left=document.getElementById("leftValue").innerHTML+"%",U.style.right=document.getElementById("rightValue").innerHTML+"%",U.style.bottom=document.getElementById("bottomValue").innerHTML+"%",U.style.top=document.getElementById("topValue").innerHTML+"%",U.style.zIndex=document.getElementById("zIndexValue").innerHTML,U.style.width=document.getElementById("widthValue").innerHTML+"%",U.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#char_${e.characters[l].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,E===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})}),document.getElementById("attPreview").addEventListener("click",function(){re.fromTo(`#${c}`,{left:document.getElementById("leftSlider").value+"%",bottom:document.getElementById("bottomValue").value+"%",zIndex:document.getElementById("zIndexSlider").value,height:document.getElementById("heightSlider").value+"%",filter:`blur(${document.getElementById("blurSlider").value}px) brightness(${document.getElementById("brightnessSlider").value})`},{duration:document.getElementById("speedSlider").value,left:document.getElementById("leftToSlider").value+"%",bottom:document.getElementById("bottomToSlider").value+"%",zIndex:document.getElementById("zIndexToSlider").value,height:document.getElementById("heightToSlider").value+"%",filter:`blur(${document.getElementById("blurToSlider").value}px) brightness(${document.getElementById("brightnessToSlider").value})`})});var T=document.getElementById(`char_${e.characters[l].persona.name}`);T.style.left=document.getElementById("leftValue").innerHTML,T.style.right=document.getElementById("rightValue").innerHTML+"%",T.style.bottom=document.getElementById("bottomValue").innerHTML+"%",T.style.top=document.getElementById("topValue").innerHTML+"%",T.style.zIndex=document.getElementById("zIndexValue").innerHTML,T.style.width=document.getElementById("widthValue").innerHTML+"%",T.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#char_${e.characters[l].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var F=document.querySelector("#charAttTalkInput");for(const h in e.characters[l].persona.dialogue){var z=document.createElement("option");z.setAttribute("value",h),z.innerHTML=h,F.appendChild(z)}var W=document.querySelector("#charAttImgInput");for(const h in e.characters[l].persona.images){var j=document.createElement("option");j.setAttribute("value",e.characters[l].persona.images[h]),j.innerHTML=h,W.appendChild(j)}document.querySelector("#charAttTalkInput").addEventListener("change",h=>{document.querySelector(`#char_${e.characters[l].persona.name} #${e.characters[l].persona.name}_dialogue`).innerHTML=`<p id="${e.characters[l].persona.name}_dialogue">${e.characters[l].persona.dialogue[h.target.value]||`${h.target.value}`}</p>`;var S=document.createElement("div");S.classList.add("dialoguePointer"),S.style.position="absolute",S.style.width=e.characters[l].element.pointer.width,S.style.height=e.characters[l].element.pointer.height,S.style.bottom=e.characters[l].element.pointer.bottom,S.style.left=e.characters[l].element.pointer.left,S.style.zIndex=e.characters[l].element.pointer.zIndex,S.style.transform=e.characters[l].element.pointer.transform,S.style.borderLeft=e.characters[l].element.pointer.borderleft,document.querySelector(`#${e.characters[l].persona.name}_dialogue`).appendChild(S),document.getElementById("editorUserInput").value=`${e.characters[l].persona.dialogue[h.target.value]||`${h.target.value}`}`}),document.querySelector("#charAttImgInput").addEventListener("change",h=>{document.querySelector(`#char_${e.characters[l].persona.name} img:first-child`).src=h.target.value,document.getElementById("editorUserInput").value=`${h.target.value}`})}},Y=(a,r)=>{var F,z,W,j,X;var o=document.querySelector(".currentScene"),t=Array.from(o.childNodes);if(!t.find(d=>d.id.includes(`${`${a}-cont`}`)))if(a.includes("newElementUnsaved-")){f.id=a;var n=document.createElement("div"),i=document.createElement("img");n.classList.add("sceneElement"),n.setAttribute("id",`${a}-cont`),i.setAttribute("id",`${a}-src`),i.setAttribute("src",((F=v.SUD.Elements.find(({id:d})=>d===r))==null?void 0:F.src)||f.src),n.appendChild(i),n.style.height=f.height,n.style.width=f.width,n.style.left=f.left,n.style.right=f.right,n.style.top=f.top,n.style.position=f.position,n.style.zIndex=f.zIndex,n.style.position="absolute",n.style.opacity="1",i.style.width="auto",i.style.height="100%",i.style.objectFit="contain",document.querySelector(".currentScene").appendChild(n),console.log("new element added to scene",e.elements),e==null||e.elements.push(f)}else{f.id=a;var m=document.createElement("div"),y=document.createElement("img"),s=document.createElement("div");s.setAttribute("class","inSceneCard pendingSaveCard"),s.setAttribute("id",`${a}`),s.innerHTML=`${a}`,s.addEventListener("click",d=>{Y(d.target.id,r)}),document.getElementById(`${a}_global`).innerHTML=`${a}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneEls").appendChild(s),m.classList.add("sceneElement"),m.setAttribute("id",`${a}-cont`),console.log("name1",a),y.setAttribute("src",((z=v.SUD.Elements.find(({id:d})=>d===a))==null?void 0:z.src)||f.src),m.appendChild(y),m.style.height=f.height,m.style.width=f.width,m.style.left=f.left,m.style.right=f.right,m.style.top=f.top,m.style.position=f.position,m.style.zIndex=f.zIndex,m.style.position="absolute",m.style.opacity="1",y.style.width="auto",y.style.height="100%",y.style.objectFit="contain",document.querySelector(".currentScene").appendChild(m),e==null||e.elements.push(f)}c=`${a}-cont`,document.getElementById(c).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(c).style.border="none"},1e3);for(const d in e.elements)if(e.elements[d].id===a){document.getElementById("chElAtt").innerHTML=`
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
                <input type="range" min="-101" max="101" value="${Number((W=e.elements[d].topTo)==null?void 0:W.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
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
                <input type="range" min="0" max="200" value="${Number((j=e.elements[d].heightTo)==null?void 0:j.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Blur To:</div>
                <span class="sliderAttValue" id="blurToValue">${e.elements[d].shadowEffectTo}</span>
                <input type="range" min="0" max="100" value="${Number((X=e.elements[d].shadowEffectTo)==null?void 0:X.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright To:</div>
                <span class="sliderAttValue" id="brightnessToValue">${e.elements[d].brightnessTo}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[d].brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
            </div>
        `,document.querySelector("#editorUserInput").innerHTML="",e.elements[d].shadow===!0&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(H=>{H.innerHTML==="auto"&&(document.getElementById(H.id.replace("Value","Slider")).value=101,document.querySelector(`#${H.id.replace("Value","Slider")}`).style.pointerEvents="none"),H.innerHTML===""&&(document.getElementById(H.id.replace("Value","Slider")).value=-101,document.getElementById(H.id).innerHTML="-")});var E=document.getElementById(`${e.elements[d].id}-cont`);E.style.left=document.getElementById("leftValue").innerHTML,E.style.right=document.getElementById("rightValue").innerHTML+"%",E.style.bottom=document.getElementById("bottomValue").innerHTML+"%",E.style.top=document.getElementById("topValue").innerHTML+"%",E.style.zIndex=document.getElementById("zIndexValue").innerHTML,E.style.width=document.getElementById("widthValue").innerHTML+"%",E.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#${e.elements[d].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var T=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(T===!1){T=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.elements[d].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",T=!1;return}}),document.querySelectorAll(".slider").forEach(H=>{var M=v.SUD.Scenarios[x].find(({name:p})=>p===e.name).elements.find(({id:p})=>p===c.replace("-cont",""));H.addEventListener("input",p=>{document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML=p.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(M[p.target.id.replace("Slider","")]=p.target.value),p.target.value==="101"&&(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(M[p.target.id.replace("Slider","")]=p.target.value)),p.target.value==="-101"&&(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(M[p.target.id.replace("Slider","")]=p.target.value)),`${p.target.value}%`!=e.elements[d][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(M[p.target.id.replace("Slider","")]=p.target.value)):`${p.target.value}px`!=e.elements[d][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(M[p.target.id.replace("Slider","")]=p.target.value)):Number(p.target.value)!=e.elements[d][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(M[p.target.id.replace("Slider","")]=p.target.value)):p.target.value!=e.elements[d][p.target.id.replace("Slider","")]&&p.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(M[p.target.id.replace("Slider","")]=p.target.value)):(console.log("not changed"),document.querySelector(`#${p.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(M[p.target.id.replace("Slider","")]=p.target.value));var l=document.getElementById(`${c}`);l.style.left=document.getElementById("leftValue").innerHTML+"%",l.style.right=document.getElementById("rightValue").innerHTML+"%",l.style.bottom=document.getElementById("bottomValue").innerHTML+"%",l.style.top=document.getElementById("topValue").innerHTML+"%",l.style.zIndex=document.getElementById("zIndexValue").innerHTML,l.style.width=document.getElementById("widthValue").innerHTML+"%",l.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#${e.elements[d].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,T===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})})}},le=a=>{c=`${a}`,document.getElementById(c).style.color="yellow",setTimeout(()=>{document.getElementById(c).style.color="#ff002d"},1e3);for(const o in e.characters)if("element"in e.characters[o]){document.getElementById("chElAtt").innerHTML=`
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
            `,document.querySelector("#charAttTalkInput").addEventListener("change",t=>{t.target.value==="left"?(document.getElementById(`${c.replace("dialogue","")}pointer`).style.right="",document.getElementById(`${c.replace("dialogue","")}pointer`).style.left="-30px",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderLeft="1px solid #ff002d",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderTop="0px solid #ff002d"):(document.getElementById(`${c.replace("dialogue","")}pointer`).style.right="-30px",document.getElementById(`${c.replace("dialogue","")}pointer`).style.left="",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderLeft="0px solid #ff002d",document.getElementById(`${c.replace("dialogue","")}pointer`).style.borderTop="1px solid #ff002d")}),document.querySelector("#editorUserInput").innerHTML="",document.querySelectorAll(".sliderAttValue").forEach(t=>{t.innerHTML==="auto"&&(document.getElementById(t.id.replace("Value","Slider")).value=101,document.querySelector(`#${t.id.replace("Value","Slider")}`).style.pointerEvents="none"),t.innerHTML===""&&(document.getElementById(t.id.replace("Value","Slider")).value=-101,document.getElementById(t.id).innerHTML="-")});var r=document.getElementById(`${e.characters[o].persona.name}_dialogue`);r.style.left=document.getElementById("leftValue").innerHTML,r.style.right=document.getElementById("rightValue").innerHTML+"%",r.style.bottom=document.getElementById("bottomValue").innerHTML+"%",r.style.top=document.getElementById("topValue").innerHTML+"%",r.style.zIndex=document.getElementById("zIndexValue").innerHTML,r.style.width=document.getElementById("widthValue").innerHTML+"px",r.style.height=document.getElementById("heightValue").innerHTML,document.querySelectorAll(".slider").forEach(t=>{var n=v.SUD.Scenarios[x].find(({name:i})=>i===e.name).characters.find(({persona:i})=>i.name===c.replace("_dialogue",""));t.addEventListener("input",i=>{document.querySelector(`#${i.target.id.replace("Slider","Value")}`).innerHTML=i.target.value,i.target.value==="101"&&(document.querySelector(`#${i.target.id.replace("Slider","Value")}`).innerHTML="auto"),i.target.value==="-101"&&(document.querySelector(`#${i.target.id.replace("Slider","Value")}`).innerHTML=""),`${i.target.value}%`!=e.elements[o][i.target.id.replace("Slider","")]&&i.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="yellow":`${i.target.value}px`!=e.elements[o][i.target.id.replace("Slider","")]&&i.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="yellow":Number(i.target.value)!=e.elements[o][i.target.id.replace("Slider","")]&&i.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="yellow":i.target.value!=e.elements[o][i.target.id.replace("Slider","")]&&i.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(n.element[i.target.id.replace("Slider","")]=i.target.value)):(console.log("not changed"),document.querySelector(`#${i.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(n.element[i.target.id.replace("Slider","")]=i.target.value));var m=document.getElementById(`${e.characters[o].persona.name}_dialogue`),y=document.getElementById("leftValue").innerHTML,s=document.getElementById("rightValue").innerHTML,E=document.getElementById("bottomValue").innerHTML,T=document.getElementById("topValue").innerHTML,F=document.getElementById("zIndexValue").innerHTML,z=document.getElementById("widthValue").innerHTML,W=document.getElementById("heightValue").innerHTML;m.setAttribute("style",`left: ${y} !important; right: ${s}% !important; bottom: ${E}% !important; top: ${T}% !important; z-index: ${F} !important; width: ${z}px !important; height: ${W}px !important;inset: -5% -10% auto auto; z-index: 2; border-radius: 10px; border-top: 0.5px solid rgb(255, 0, 45); border-bottom: 0.5px solid rgb(255, 0, 45); padding: 10px; transform: translate(0px, 0px); transform-origin: left bottom; translate: none; rotate: none; scale: none;`)})})}};var w=()=>{const a=JSON.stringify(v);fetch("http://localhost:3001/save-json",{method:"POST",body:a,headers:{"Content-Type":"application/json"}}).then(r=>{r.ok?console.log("JSON data saved successfully"):console.error("Error saving JSON data")}).catch(r=>{console.error("Error saving JSON data:",r)})};document.querySelector("#generateScenario").addEventListener("click",a=>{a.preventDefault();var r=document.getElementById("scenarioEdit");r.value!=""&&(v.SUD.Scenarios[r.value]=[],console.log("tempData",v),w())});var q=()=>{document.querySelector("#newSceneBut").addEventListener("click",()=>{var o;v=K,te=ve,J=0,O=0,v.SUD.Scenarios[x].push(te),e=v.SUD.Scenarios[x].find(({name:t})=>t==="newScene");var a=document.createElement("div"),r=document.getElementById("editorbodyDisplay");a.setAttribute("clas s","currentScene"),a.setAttribute("id","currentSceneView_draft"),a.setAttribute("style","z-index: 10; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); opacity: 1;"),r.appendChild(a),document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("headerSceneName").innerHTML="[ NEW SCENE ]",document.getElementById("headerSceneName").setAttribute("class","pendingSaveText"),(o=document.querySelector(".currentScene"))==null||o.remove(),document.getElementById("scnAttName").value="[ NEW SCENE ]",document.getElementById("scnAttName").setAttribute("class","attInput pendingSaveText"),document.querySelectorAll(".sceneSelectElementEl").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var n=()=>{var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id","newElementUnsaved"),i.innerHTML=`${t.id.replace("_global","")}`,t.removeEventListener("click",n),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};if(!t.getAttribute("data-listener")){t.addEventListener("click",n);return}t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElementChar").forEach(t=>{t.innerHTML=`${t.id.replace("_global","")}`;var n=()=>{var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id","newElementUnsaved"),i.innerHTML=`${t.id.replace("_global","")}`,t.removeEventListener("click",n),t.innerHTML=`${t.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};t.getAttribute("data-listener")||t.addEventListener("click",n),t.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElement").forEach(t=>{t.id==="newSceneBut"?t.innerHTML=`${t.id}<span style="float:right; color: yellow">&#9679;</span>`:t.innerHTML=`${t.id.replace("_global","")}`})}),document.getElementById("addToScope").addEventListener("click",()=>{var a=document.getElementById("editorUserInput").value;if(e.activated.land=document.getElementById("scnAttAct1").value,e.activated.pop=document.getElementById("scnAttAct2").value,e.activated.gate=document.getElementById("scnAttAct3").value,e.activated.scn=document.getElementById("scnAttAct4").value,Z==="charAttDialogue"){var r=e.characters.find(({persona:i})=>i.name===c.replace("char_","")),o=document.createElement("option");o.setAttribute("value",a),o.innerHTML=a,document.getElementById("charAttTalkInput").appendChild(o),r.persona.name=document.getElementById("charAttNameInput").value,r.persona.location=document.getElementById("charAttLocInput").value,r.persona.job=document.getElementById("charAttJobInput").value}if(Z==="charAttImages"){var t=document.createElement("option");t.setAttribute("value",a),t.innerHTML=a,document.getElementById("charAttImgInput").appendChild(t)}if(Z==="charAttSource"){var n=e.elements.find(({id:i})=>i===c);document.getElementById("charAttImgInput").value=a,document.getElementById(`${c.replace("cont","src")}`).src=a,n.id=document.getElementById("charAttNameInput").value,n.action=document.getElementById("charAttJobInput").value,n.src=document.getElementById("charAttImgInput").value}document.getElementById("editorUserInput").value=""}),document.querySelector("#newCharBut").addEventListener("click",()=>{J++;var a=document.createElement("div");a.setAttribute("class","inSceneCard pendingSaveCard"),a.setAttribute("id",`newCharacterUnsaved-${J}`),a.innerHTML="[ NEW CHAR ]",a.addEventListener("click",r=>{P(r.target.id)}),document.getElementById("inSceneChars").appendChild(a)}),document.querySelector("#newElBut").addEventListener("click",()=>{O++;var a=document.createElement("div");a.setAttribute("class","inSceneCard pendingSaveCard"),a.setAttribute("id",`newElementUnsaved-${O}`),a.innerHTML="[ NEW EL ]",a.addEventListener("click",r=>{Y(r.target.id)}),document.getElementById("inSceneEls").appendChild(a)})};return q(),document.querySelector("#deleteScenario").addEventListener("click",a=>{a.preventDefault();var r=document.getElementById("scenarioEdit");r.value!=""&&v.SUD.Scenarios[r.value]&&(delete v.SUD.Scenarios[r.value],console.log("tempData",v),w())}),document.getElementById("deleteEl").addEventListener("click",()=>{var a=document.createElement("div");a.setAttribute("id","warningBG"),a.setAttribute("class","warningBG"),a.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText" style="color:#ff002d;">Delete ${document.getElementById("updateScopeSelect").value}?<br><span style="font-size:.5em;">Are you sure?</span>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(a),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var t,n,i,m,y;var r=document.getElementById("updateScopeSelect").value;switch(r){case"scene":delete v.SUD.Scenarios[x].find(({name:s})=>s===e.name),w();break;case"select":var o=(t=document.getElementById(`${c.replace("char_","")}`))==null?void 0:t.innerHTML;c.includes("-cont")&&(delete v.SUD.Scenarios[x].find(({name:s})=>s===e.name).elements.find(({id:s})=>s===c),(n=document.getElementById(c.replace("-cont","")))==null||n.remove(),document.getElementById(`${c.replace("-cont","")}_global`)&&(document.getElementById(`${c.replace("-cont","")}_global`).innerHTML=`${c.replace("-cont","")}`)),c.includes("char_")&&(delete v.SUD.Scenarios[x].find(({name:s})=>s===e.name).characters.find(({persona:s})=>s.name===c),(i=document.getElementById(c.replace("char_","")))==null||i.remove(),(m=document.getElementById(`${c.replace("char_","")}-dia`))==null||m.remove(),document.getElementById(`${c.replace("char_","")}_global`)&&(document.getElementById(`${c.replace("char_","")}_global`).innerHTML=`${c.replace("char_","")}`)),c.includes("newCharacterUnsaved")&&(document.getElementById(`${o}_global`).innerHTML=`${o}`,document.getElementById(`${o}_global`).addEventListener("click",s=>{P(s.target.id.replace("_global",""),o)})),(y=document.getElementById(c))==null||y.remove();break;case"isolated":if(c.includes("-cont")){for(const s in v.SUD.Scenarios)for(const E in v.SUD.Scenarios[x])E.elements.find(({id:T})=>T===c.id)&&delete v.SUD.Scenarios[s][E].elements.find(({id:T})=>T===c);delete v.SUD.Elements.find(({id:s})=>s===c.id)}if(c.includes("char_")){for(const s in v.SUD.Scenarios)for(const E in v.SUD.Scenarios[x])E.characters.find(({persona:T})=>T.name===c)&&delete v.SUD.Scenarios[s][E].characters.find(({persona:T})=>T.name===c.persona.name);delete v.SUD.Characters.find(({persona:s})=>s.name===c.persona.name)}w();break}})}),document.getElementById("saveScene").addEventListener("click",()=>{var a=document.createElement("div");a.setAttribute("id","warningBG"),a.setAttribute("class","warningBG"),a.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText">Save ${document.getElementById("updateScopeSelect").value}?<br>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(a),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var r=document.getElementById("updateScopeSelect").value;switch(r){case"scene":break;case"isolated":if(c.includes("-cont")){var o={id:`${f.id}`,src:`${f.src}`};v.SUD.Elements.push(o)}c.includes("char_")&&v.SUD.Characters.push(B.persona);break}w()})}),document.getElementById("scenesContainer").appendChild(document.getElementById("newSceneBut")),document.getElementById("editorScreen").style.display="block",document.getElementById("mapperBut").addEventListener("click",()=>{oe()}),document.querySelector(".currentScene")?(L=document.getElementById("editorbodyDisplay"))==null||L.appendChild(document.querySelector(".currentScene")):(document.getElementById("universe").style.filter="blur(10px)",setTimeout(()=>{var a;(a=document.getElementById("editorbodyDisplay"))==null||a.appendChild(document.querySelector(".currentScene"))},1e3)),!0}else return document.getElementById("editorScreen").remove(),document.getElementById("universe").style.filter="blur(0px)",!1}export{ye as editor};
