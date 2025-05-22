import{n as ee,a as te,g as ne,b as ae}from"./main-CBGfwRJF.js";import"./wScoge-BthgsBuw.js";var R=null,E=null,L=null,V=null,e=null,u=null,D=0,z=0,U=!1,P=null,M=null,de={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},K={name:"newScene",position:0,type:"dialogue",bg:"rgba(0,0,0,0.75)",activated:{land:0,pop:!1,gate:0,scn:[]},characters:[],elements:[]},B={id:"newElement",type:"div",src:"https://scoge.storage/scogeUniverse/Elements/charTemplate.png",left:"auto",right:"10%",bottom:"auto",top:"5%",zIndex:"3",width:"auto",height:"30%",speed:.9,shadow:!0,shadowEffect:"0px",brightness:"1.0",leftTo:"",rightTo:"",bottomTo:"",topTo:"",zIndexTo:"",widthTo:"",heightTo:"",shadowEffectTo:"",brightnessTo:"",action:""},$={persona:{name:"newCharacter",location:"newLocation",job:"newJob",dialogue:{intro:"Hello, I will become a new character."},images:{default:"https://scoge.storage/scogeUniverse/Characters/char-template.png"}},pns:{position:"absolute",left:"10%",leftTo:"12%",right:"auto",rightTo:"auto",bottom:0,bottomTo:0,top:"auto",topTo:"auto",zIndex:1,zIndexTo:1,width:"auto",widthTo:"auto",height:"80%",heightTo:"80%",speed:1,blur:"0px",blurTo:"0px",brightness:"1",brightnessTo:"1"},element:{class:"chr-textElement",type:"div",backgroundColor:"rgba(0,0,0,0.75)",padding:"10px 10px",borderRadius:"10px",borderTop:"0.5px solid rgb(255, 0, 45)",borderBottom:"0.5px solid rgb(255, 0, 45)",width:"350px",height:"auto",left:"auto",right:"-10%",bottom:"auto",top:"-6%",zIndex:2,position:"absolute",border:".5px solid #ff002d",pointer:{position:"absolute",width:"50px",height:"50px",borderLeft:"1px solid #ff002d",bottom:"-60px",left:"-30px",zIndex:-5,transform:"rotate(45deg)"}},actions:["chat"]};async function re(X){var O;try{const N=await fetch("/src/sudb.json");if(!N.ok)throw new Error(`HTTP error! Status: ${N.status}`);R=await N.json(),E=R,L=R.SUD.Scenarios.Intro}catch(N){console.error("Error fetching JSON data:",N)}if(X===!1){const N=document.createElement("link");N.rel="stylesheet",N.href="editor.css",document.head.appendChild(N);var j=document.createElement("div"),Q=document.getElementById("main");j.setAttribute("id","editorScreen"),j.innerHTML=`
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
                <div id="editorVideoGal" class="selectorContainer cutSceneSelectorContainer">
                    <div id="videoSectHeader" class="sectHeader">VIDEOS</div>
                    <div id="vidsContainer">
                        <div class="sceneSelectVideo" id="newElBut">[ NEW VIDEO ]</div>
                    </div>
                </div>
                <div id="editorTitlesGal" class="selectorContainer cutSceneSelectorContainer">
                    <div id="titleSectHeader" class="sectHeader">TITLES</div>
                    <div id="titlesContainer">
                        <div class="sceneSelectTitle" id="newElBut">[ NEW TITLE ]</div>
                    </div>
                </div>
                <div id="editorTracksGal" class="selectorContainer cutSceneSelectorContainer">
                    <div id="trackSectHeader" class="sectHeader">TRACKS</div>
                    <div id="tracksContainer">
                        <div class="sceneSelectTrack" id="newElBut">[ NEW TRACK ]</div>
                    </div>
                </div>
                <div id="editorDialogueGal" class="selectorContainer cutSceneSelectorContainer">
                    <div id="dialogueSectHeader" class="sectHeader">DIALOGUES</div>
                    <div id="dialogueContainer">
                        <div class="sceneSelectDialogue" id="newElBut">[ NEW DIALOGUE ]</div>
                    </div>
                </div>
                <div id="editorBreakGal" class="selectorContainer cutSceneSelectorContainer">
                    <div id="breaksSectHeader" class="sectHeader">BREAKS</div>
                    <div id="breaksContainer">
                        <div class="sceneSelectBreak" id="newElBut">[ NEW BREAK ]</div>
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
                <div id="editorbodyElements2">
                  <div id="primeLineCont"></div>
                  <div id="vertLine"></div>
                  <div id="tBars">
                    <div id="tBar1">00:00</div>
                    <div id="tBar2">01:00</div>
                  </div>
                  <div id="cutSceneElsCont">
                    <div class="ccElSect">
                      <div class="csStartBullet"></div>
                      <div class="csEndBullet"></div>
                    </div>
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
        `,Q.appendChild(j),document.getElementById("loadScene").addEventListener("click",()=>{document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene"))}),document.getElementById("aiAsstSelectScope").addEventListener("change",()=>{P=document.getElementById("aiAsstSelectScope").value});var k=document.getElementById("scenarioDropdown");for(const t in E.SUD.Scenarios){var C=document.createElement("option");C.setAttribute("value",t),C.classList.add("dialogueSceneOption"),C.innerHTML=`ds-${t}`,k.appendChild(C)}var C=document.createElement("option");C.setAttribute("value","cs-CUTSCENES"),C.classList.add("cutSceneOption"),C.innerHTML="CUT-SCENES",k.appendChild(C),V=k.value,k.addEventListener("change",async t=>{var p,i,v,A,x;let r=document.getElementById("editorCharGal"),m=document.getElementById("editorElementGal"),s=document.querySelectorAll(".cutSceneSelectorContainer"),o=document.getElementById("editorbodyElements2"),n=document.getElementById("editorbodyElements"),l=document.getElementById("editorLeftPanel");if(V=k.value,(p=document.querySelector(".cutcurrentCutSceneScene"))==null||p.remove(),t.target.value.includes("cs-")){M=await E.SUD.CutScenes,document.getElementById("editorLeftPanel").style.gridTemplateRows="1fr 1fr 1fr 1fr",r.style.display="none",m.style.display="none",s.forEach(f=>{f.style.display="grid"}),l.style.display="block",l.style.gridTemplateColumns="",l.style.gridTemplateRows="",l.style.overflowY="scroll",l.style.overflowX="hidden",o.style.display="grid",n.style.display="none",L=E.SUD.CutScenes[k.value.replace("cs-","")],document.getElementById("scenesContainer").innerHTML="";for(const f in M){var h=document.createElement("div");h.setAttribute("class","sceneSelectElement"),h.setAttribute("id",M[f].name),h.innerHTML=`${M[f].name}`,h.addEventListener("click",d=>{Y(d.target.id)}),document.getElementById("scenesContainer").appendChild(h)}var c=document.createElement("div");c.setAttribute("class","cutSceneSelectElement"),c.setAttribute("id","newCutSceneBut"),c.innerHTML="[ NEW CUT SCENE ]",document.getElementById("scenesContainer").appendChild(c),U&&((i=document.querySelector(".currentScene"))==null||i.remove(),Y((v=S[0])==null?void 0:v.name));return}else{var S=E.SUD.Scenarios[k.value];l.style.display="grid",l.style.gridTemplateColumns="1fr",l.style.gridTemplateRows="1fr 1fr 1fr",r.style.display="grid",m.style.display="grid",s.forEach(d=>{d.style.display="none"}),o.style.display="none",n.style.display="grid",L=E.SUD.Scenarios[k.value],document.getElementById("scenesContainer").innerHTML="",S.forEach(d=>{var b=document.createElement("div");b.setAttribute("class","sceneSelectElement"),b.setAttribute("id",d.name),b.innerHTML=`${d.name}`,b.addEventListener("click",H=>{W(H.target.id)}),document.getElementById("scenesContainer").appendChild(b)});var c=document.createElement("div");c.setAttribute("class","sceneSelectElement"),c.setAttribute("id","newSceneBut"),c.innerHTML="[ NEW SCENE ]",document.getElementById("scenesContainer").appendChild(c),F(),U&&((A=document.querySelector(".currentScene"))==null||A.remove(),W((x=S[0])==null?void 0:x.name,0))}}),L.forEach(t=>{E=R;var r=document.createElement("div");r.setAttribute("class","sceneSelectElement"),r.setAttribute("data-position",t.position-1),r.setAttribute("id",t.name),r.innerHTML=`${t.name}`,t.name==="scene1"?r.innerHTML=`${t.name}<span style="float:right; color: var(--accent)">&#9679;</span>`:r.innerHTML=`${t.name}`,r.addEventListener("click",m=>{var o;if(e.elements.find(({id:n})=>n.includes("newElementUnsaved"))&&(e.elements=e.elements.filter(({id:n})=>!n.includes("newElementUnsaved"))),e.characters.find(({persona:n})=>n.name.includes("newCharacterUnsaved"))&&(e.characters=e.characters.filter(({persona:n})=>!n.name.includes("newCharacterUnsaved"))),U){var s=m.target.getAttribute("data-position");(o=document.querySelectorAll(".currentScene")[0])==null||o.remove(),W(m.target.id,s)}document.getElementById("headerSceneName").style.color="yellow",setTimeout(()=>{document.getElementById("headerSceneName").style.color="#ff002d"},1e3)}),document.getElementById("scenesContainer").appendChild(r)});const W=(t,r)=>{var m,s,o;D=0,z=0,document.querySelector(".currentScene")===null&&(ee(`${V}`,r),setTimeout(()=>{var n;(n=document.getElementById("editorbodyDisplay"))==null||n.appendChild(document.querySelector(".currentScene"))},1e3)),document.querySelectorAll(".sceneSelectElement").forEach(n=>{document.getElementById("scnAttName").setAttribute("class","attInput"),document.getElementById("headerSceneName").removeAttribute("class"),n.id===t?document.getElementById(t).innerHTML=`${t}<span style="float:right; color: var(--accent)">&#9679;</span>`:document.getElementById(n.id).innerHTML=`${n.id}`});for(const n in L)L[n].name===t&&(e=L[n],document.getElementById("hsc").innerHTML=`${L[n].activated}]`,document.getElementById("headerSceneName").innerHTML=`${L[n].name}`,document.getElementById("scnAttName").value=`${L[n].name}`,document.getElementById("scnAttType").value=`${L[n].type}`,document.getElementById("scnAttBg").value=`${L[n].bg}`,document.getElementById("scnAttAct1").value=`${L[n].activated.land}`,document.getElementById("scnAttAct2").value=`${L[n].activated.pop}`,L[n].activated.pop===!0?document.getElementById("scnAttAct2").selectedIndex=0:document.getElementById("scnAttAct2").selectedIndex=1,document.getElementById("scnAttAct3").value=`${L[n].activated.gate}`,document.getElementById("scnAttAct4").value=`${parseInt((m=L[n].activated.scn)==null?void 0:m.join(""))}`,document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",L[n].characters.forEach(l=>{var h=document.createElement("div");if(h.setAttribute("class","inSceneCard"),h.setAttribute("id",l.persona.name),h.innerHTML=`${l.persona.name}`,document.getElementById("inSceneChars").appendChild(h),"element"in l){var c=document.createElement("div");c.setAttribute("class","inSceneCard"),c.setAttribute("id",`${l.persona.name}-dia`),c.innerHTML=`${l.persona.name} - ${l.actions[0]}`,document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("inSceneCharsDialogues").appendChild(c),c.addEventListener("click",S=>{J(S.target.id),l.persona.dialogue.pPosition==="left"?document.getElementById("charAttTalkInput").value="left":document.getElementById("charAttTalkInput").value="right"})}h.addEventListener("click",S=>{q(S.target.id)})}),(s=L[n].elements)==null||s.forEach(l=>{var h=document.createElement("div");h.setAttribute("class","inSceneCard"),h.setAttribute("id",l.id),h.innerHTML=`${l.id}`,document.getElementById("inSceneEls").appendChild(h),h.addEventListener("click",c=>{G(c.target.id)})}));U===!0&&document.querySelectorAll(".sceneSelectElementChar").forEach(n=>{n.remove()}),U===!0&&document.querySelectorAll(".sceneSelectElementEl").forEach(n=>{n.remove()}),E.SUD.Characters.forEach(n=>{var l=document.createElement("div"),h=document.getElementById("newCharBut");h.innerHTML="[ NEW CHARACTER ]",l.setAttribute("class","sceneSelectElementChar"),l.setAttribute("id",`${n.name}_global`);var c=e.characters.find(({persona:p})=>p.name===n.name);if(c)l.innerHTML=`${n.name}<span style="float:right; color: var(--accent)">&#9679;</span>`,l.addEventListener("click",p=>{q(p.target.id.replace("_global",""),n.name)});else{l.innerHTML=`${n.name}`;var S=()=>{D++;var p=document.createElement("div");p.setAttribute("class","inSceneCard pendingSaveCard"),p.setAttribute("id",`newCharacterUnsaved-${D}`),p.innerHTML=`${n.name}`,document.getElementById("inSceneChars").appendChild(p),p.addEventListener("click",i=>{q(i.target.id.replace("_global",""),n.name)}),l.removeEventListener("click",S),l.innerHTML=`${n.name}<span style="float:right; color: yellow">&#9679;</span>`};l.addEventListener("click",S),l.setAttribute("data-listener","true")}document.getElementById("charactersContainer").appendChild(l),document.getElementById("charactersContainer").appendChild(h)}),(o=E.SUD.Elements)==null||o.forEach(n=>{var p;var l=document.createElement("div"),h=document.getElementById("newElBut");h.innerHTML="[ NEW ELEMENT ]",l.setAttribute("class","sceneSelectElementEl"),l.setAttribute("id",`${n.id}_global`);var c=(p=e.elements)==null?void 0:p.find(({id:i})=>i===n.id);if(c)l.innerHTML=`${n.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,l.addEventListener("click",i=>{G(i.target.id.replace("_global",""))});else{l.innerHTML=`${n.id}`;var S=()=>{z++;var i=document.createElement("div");i.setAttribute("class","inSceneCard pendingSaveCard"),i.setAttribute("id",`"newElementUnsaved"-${z}`),i.innerHTML=`${n.id}}`,document.getElementById("inSceneEls").appendChild(i),i.addEventListener("click",v=>{G(v.target.id.replace("_global",""),n.id)}),l.removeEventListener("click",S),l.innerHTML=`${n.id}<span style="float:right; color: var(--accent)">&#9679;</span>`};l.addEventListener("click",S),l.setAttribute("data-listener","true")}document.getElementById("elsContainer").appendChild(l),document.getElementById("elsContainer").appendChild(h)}),U=!0},Y=t=>{var s,o,n,l,h,c,S;(s=document.querySelector(".cutcurrentCutSceneScene"))==null||s.remove(),document.querySelector(".currentScene")===null&&(te(`${t}`),setTimeout(()=>{var p;(p=document.getElementById("editorbodyDisplay"))==null||p.appendChild(document.querySelector(".cutcurrentCutSceneScene"))},1e3)),document.querySelectorAll(".sceneSelectElement").forEach(p=>{document.getElementById("scnAttName").setAttribute("class","attInput"),document.getElementById("headerSceneName").removeAttribute("class"),p.id===t?document.getElementById(t).innerHTML=`${t}<span style="float:right; color: var(--accent)">&#9679;</span>`:document.getElementById(p.id).innerHTML=`${p.id}`});function r(p,i,v,A){var x=document.createElement("div"),f=document.createElement("div"),d=document.createElement("div");x.setAttribute("class",`ccElSect csElSect${A}`),x.setAttribute("id",`${p}-${A}`),f.setAttribute("class","csStartBullet"),f.setAttribute("id",`${p}-start`),f.setAttribute("style",`left: ${i}%;`),f.setAttribute("draggable","true"),d.setAttribute("class","csEndBullet"),d.setAttribute("id",`${p}-end`),d.setAttribute("style",`left: ${v}%;`),d.setAttribute("draggable","true");let b=document.querySelectorAll(`.csElSect${A}`).length+1;switch(A){case"video":f.innerHTML=`V${b}`,d.innerHTML=`V${b}`;break;case"title":f.innerHTML=`T${b}`,d.innerHTML=`T${b}`;break;case"track":f.innerHTML=`A${b}`,d.innerHTML=`A${b}`;break;case"dialogue":f.innerHTML=`D${b}`,d.innerHTML=`D${b}`;break;case"break":f.innerHTML=`B${b}`,d.innerHTML=`B${b}`;break}x.appendChild(f),x.appendChild(d),x.addEventListener("click",H=>{var y=H.target.id;Z(y)}),document.getElementById("cutSceneElsCont").appendChild(x)}for(const p in M)if(M[t].name===t){var m=Math.floor(M[t].length/1e3);e=M[t],document.getElementById("hsn").innerHTML=`${e.label}`,document.getElementById("hsc").innerHTML=`${m} seconds`,document.getElementById("headerSceneName").innerHTML=`${e.name}`,document.getElementById("scnAttName").value=`${e.name}`,document.getElementById("scnAttType").value=`${e.type}`,document.getElementById("scnAttBg").value=`${e.activated.bg}`,document.getElementById("scnAttAct1").value=`${e.activated.land}`,document.getElementById("scnAttAct2").value=`${e.activated.pop}`,e.activated.pop===!0?document.getElementById("scnAttAct2").selectedIndex=0:document.getElementById("scnAttAct2").selectedIndex=1,document.getElementById("scnAttAct3").value=`${e.activated.gate}`,document.getElementById("scnAttAct4").value=`${parseInt((o=e.activated.scn)==null?void 0:o.join(""))}`,document.getElementById("cutSceneElsCont").innerHTML="",(n=M[t].videos)==null||n.forEach(i=>{var v=document.createElement("div");v.setAttribute("class","sceneSelectVideo"),v.setAttribute("id",i.id),document.getElementById("vidsContainer").appendChild(v),i.used===!0?(v.innerHTML=`${i.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,r(i.id,i.start,i.end,"video")):v.innerHTML=`${i.id}`,v.addEventListener("click",A=>{})}),(l=M[t].titles)==null||l.forEach(i=>{var v=document.createElement("div");v.setAttribute("class","sceneSelectTitle"),v.setAttribute("id",i.id),document.getElementById("titlesContainer").appendChild(v),i.used===!0?(v.innerHTML=`${i.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,r(i.id,i.start,i.end,"title")):v.innerHTML=`${i.id}`,v.addEventListener("click",A=>{})}),(h=M[t].tracks)==null||h.forEach(i=>{var v=document.createElement("div");v.setAttribute("class","sceneSelectTrack"),v.setAttribute("id",i.id),document.getElementById("tracksContainer").appendChild(v),i.used===!0?(v.innerHTML=`${i.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,r(i.id,i.start,i.end,"track")):v.innerHTML=`${i.id}`,v.addEventListener("click",A=>{})}),(c=M[t].dialogues)==null||c.forEach(i=>{var v=document.createElement("div");v.setAttribute("class","sceneSelectDialogue"),v.setAttribute("id",i.id),document.getElementById("dialogueContainer").appendChild(v),i.used===!0?(v.innerHTML=`${i.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,r(i.id,i.start,i.end,"dialogue")):v.innerHTML=`${i.id}`,v.addEventListener("click",A=>{J(A.target.id)})}),(S=M[t].breaks)==null||S.forEach(i=>{var v=document.createElement("div");v.setAttribute("class","sceneSelectBreak"),v.setAttribute("id",i.id),document.getElementById("breaksContainer").appendChild(v),i.used===!0?(v.innerHTML=`${i.id}<span style="float:right; color: var(--accent)">&#9679;</span>`,r(i.id,i.start,i.end,"break")):v.innerHTML=`${i.id}`,v.addEventListener("click",A=>{J(A.target.id)})})}};W("scene1",0);const Z=t=>{var r=t.split("-")[1];switch(r){case"video":document.getElementById(t),document.getElementById(`${t}-start`),document.getElementById(`${t}-end`);break;case"title":document.getElementById(t),document.getElementById(`${t}-start`),document.getElementById(`${t}-end`);break;case"track":document.getElementById(t),document.getElementById(`${t}-start`),document.getElementById(`${t}-end`);break;case"dialogue":document.getElementById(t),document.getElementById(`${t}-start`),document.getElementById(`${t}-end`);break;case"break":document.getElementById(t),document.getElementById(`${t}-start`),document.getElementById(`${t}-end`);break}};document.getElementById("summonAI").addEventListener("click",async()=>{document.getElementById("editorAiOutput").innerHTML="Loading...",document.getElementById("editorUserInput").value,document.getElementById("editorUserInput").value="",document.getElementById("editorAiOutput").innerHTML=`${completion.data.choices[0].message.content}`});const q=(t,r)=>{var f,d,b,H,y;var m=document.querySelector(".currentScene"),s=Array.from(m.childNodes);if(!s.find(a=>a.id.includes(`${`char_${t}`}`)))if(t.includes("newCharacterUnsaved-")){$.persona.name=t;var o=document.createElement("div"),n=document.createElement("img");o.classList.add("sceneElement"),o.setAttribute("id",`char_${t}`),n.setAttribute("src",((f=E.SUD.Characters.find(({name:a})=>a===r))==null?void 0:f.images.default)||$.persona.images.default),o.appendChild(n),o.style.height=$.pns.height,o.style.width=$.pns.width,o.style.left=$.pns.left,o.style.right=$.pns.right,o.style.top=$.pns.top,o.style.position=$.pns.position,o.style.zIndex=$.pns.zIndex,o.style.position="absolute",o.style.opacity="1",n.style.width="auto",n.style.height="100%",n.style.objectFit="contain",document.querySelector(".currentScene").appendChild(o),e==null||e.characters.push($)}else{$.persona.name=t;var l=document.createElement("div"),h=document.createElement("img"),c=document.createElement("div");c.setAttribute("class","inSceneCard pendingSaveCard"),c.setAttribute("id",`${t}`),c.innerHTML=`${t}`,c.addEventListener("click",a=>{q(a.target.id)}),document.getElementById(`${t}_global`).innerHTML=`${t}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneChars").appendChild(c),l.classList.add("sceneElement"),l.setAttribute("id",`char_${t}`),h.setAttribute("src",((d=E.SUD.Characters.find(({name:a})=>a===r))==null?void 0:d.images.default)||$.persona.images.default),l.appendChild(h),l.style.height=$.pns.height,l.style.width=$.pns.width,l.style.left=$.pns.left,l.style.right=$.pns.right,l.style.top=$.pns.top,l.style.position=$.pns.position,l.style.zIndex=$.pns.zIndex,l.style.position="absolute",l.style.opacity="1",h.style.width="auto",h.style.height="100%",h.style.objectFit="contain",document.querySelector(".currentScene").appendChild(l),e==null||e.characters.push($)}u=`char_${t}`,document.getElementById(`char_${t}`).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(`char_${t}`).style.border="none"},1e3);for(const a in e.characters)if(e.characters[a].persona.name===t){document.getElementById("chElAtt").innerHTML=`
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
                    <input type="range" min="-101" max="101" value="${Number((b=e.characters[a].pns.topTo)==null?void 0:b.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
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
                    <input type="range" min="0" max="200" value="${Number((H=e.characters[a].pns.heightTo)==null?void 0:H.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Blur To:</div>
                    <span class="sliderAttValue" id="blurToValue">${e.characters[a].pns.blurTo}</span>
                    <input type="range" min="0" max="100" value="${Number((y=e.characters[a].pns.blurTo)==null?void 0:y.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright To:</div>
                    <span class="sliderAttValue" id="brightnessToValue">${e.characters[a].pns.brightnessTo}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[a].pns.brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",e.characters[a].actions[0]==="chat"&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(I=>{I.innerHTML==="auto"&&(document.getElementById(I.id.replace("Value","Slider")).value=101,document.querySelector(`#${I.id.replace("Value","Slider")}`).style.pointerEvents="none"),I.innerHTML===""&&(document.getElementById(I.id.replace("Value","Slider")).value=-101,document.getElementById(I.id).innerHTML="-")}),document.querySelectorAll(".attBut").forEach(I=>{I.style.display="block"}),document.querySelector("#charAttActionInput").addEventListener("change",I=>{I.target.checked?(e.characters[a].actions[0]="chat",document.getElementById(`${e.characters[a].persona.name}_dialogue`).style.display="block",E.SUD.Scenarios[V].forEach(T=>{T.characters.forEach(g=>{g.persona.name===u.replace("char_","")&&(g.actions[0]="chat")})})):(e.characters[a].actions[0]="none",document.getElementById(`${e.characters[a].persona.name}_dialogue`).style.display="none",E.SUD.Scenarios[V].forEach(T=>{T.characters.forEach(g=>{g.persona.name===u.replace("char_","")&&(g.actions[0]="")})}))});var S=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(S===!1){S=!0,document.querySelector("#attLock").innerHTML="🔒";return}else{e.characters[a].locked=!1,document.querySelector("#attLock").innerHTML="🔓",S=!1;return}}),document.querySelectorAll(".slider").forEach(I=>{var T=E.SUD.Scenarios[V].find(({name:g})=>g===e.name).characters.find(({persona:g})=>g.name===u.replace("char_",""));I.addEventListener("input",g=>{document.querySelector(`#${g.target.id.replace("Slider","Value")}`).innerHTML=g.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(T.pns[g.target.id.replace("Slider","")]=g.target.value),g.target.value==="101"&&(document.querySelector(`#${g.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(T.pns[g.target.id.replace("Slider","")]=g.target.value)),g.target.value==="-101"&&(document.querySelector(`#${g.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(T.pns[g.target.id.replace("Slider","")]=g.target.value)),`${g.target.value}%`!=e.characters[a].pns[g.target.id.replace("Slider","")]&&g.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${g.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(T.pns[g.target.id.replace("Slider","")]=g.target.value)):`${g.target.value}px`!=e.characters[a].pns[g.target.id.replace("Slider","")]&&g.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${g.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(T.pns[g.target.id.replace("Slider","")]=g.target.value)):Number(g.target.value)!=e.characters[a].pns[g.target.id.replace("Slider","")]&&g.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${g.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(T.pns[g.target.id.replace("Slider","")]=g.target.value)):g.target.value!=e.characters[a].pns[g.target.id.replace("Slider","")]&&g.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${g.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(T.pns[g.target.id.replace("Slider","")]=g.target.value)):(document.querySelector(`#${g.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(T.pns[g.target.id.replace("Slider","")]=g.target.value));var w=document.getElementById(`${u}`);w.style.left=document.getElementById("leftValue").innerHTML+"%",w.style.right=document.getElementById("rightValue").innerHTML+"%",w.style.bottom=document.getElementById("bottomValue").innerHTML+"%",w.style.top=document.getElementById("topValue").innerHTML+"%",w.style.zIndex=document.getElementById("zIndexValue").innerHTML,w.style.width=document.getElementById("widthValue").innerHTML+"%",w.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#char_${e.characters[a].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,S===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})}),document.getElementById("attPreview").addEventListener("click",function(){ne.fromTo(`#${u}`,{left:document.getElementById("leftSlider").value+"%",bottom:document.getElementById("bottomValue").value+"%",zIndex:document.getElementById("zIndexSlider").value,height:document.getElementById("heightSlider").value+"%",filter:`blur(${document.getElementById("blurSlider").value}px) brightness(${document.getElementById("brightnessSlider").value})`},{duration:document.getElementById("speedSlider").value,left:document.getElementById("leftToSlider").value+"%",bottom:document.getElementById("bottomToSlider").value+"%",zIndex:document.getElementById("zIndexToSlider").value,height:document.getElementById("heightToSlider").value+"%",filter:`blur(${document.getElementById("blurToSlider").value}px) brightness(${document.getElementById("brightnessToSlider").value})`})});var p=document.getElementById(`char_${e.characters[a].persona.name}`);p.style.left=document.getElementById("leftValue").innerHTML,p.style.right=document.getElementById("rightValue").innerHTML+"%",p.style.bottom=document.getElementById("bottomValue").innerHTML+"%",p.style.top=document.getElementById("topValue").innerHTML+"%",p.style.zIndex=document.getElementById("zIndexValue").innerHTML,p.style.width=document.getElementById("widthValue").innerHTML+"%",p.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#char_${e.characters[a].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var i=document.querySelector("#charAttTalkInput");for(const I in e.characters[a].persona.dialogue){var v=document.createElement("option");v.setAttribute("value",I),v.innerHTML=I,i.appendChild(v)}var A=document.querySelector("#charAttImgInput");for(const I in e.characters[a].persona.images){var x=document.createElement("option");x.setAttribute("value",e.characters[a].persona.images[I]),x.innerHTML=I,A.appendChild(x)}document.querySelector("#charAttTalkInput").addEventListener("change",I=>{document.querySelector(`#char_${e.characters[a].persona.name} #${e.characters[a].persona.name}_dialogue`).innerHTML=`<p id="${e.characters[a].persona.name}_dialogue">${e.characters[a].persona.dialogue[I.target.value]||`${I.target.value}`}</p>`;var T=document.createElement("div");T.classList.add("dialoguePointer"),T.style.position="absolute",T.style.width=e.characters[a].element.pointer.width,T.style.height=e.characters[a].element.pointer.height,T.style.bottom=e.characters[a].element.pointer.bottom,T.style.left=e.characters[a].element.pointer.left,T.style.zIndex=e.characters[a].element.pointer.zIndex,T.style.transform=e.characters[a].element.pointer.transform,T.style.borderLeft=e.characters[a].element.pointer.borderleft,document.querySelector(`#${e.characters[a].persona.name}_dialogue`).appendChild(T),document.getElementById("editorUserInput").value=`${e.characters[a].persona.dialogue[I.target.value]||`${I.target.value}`}`}),document.querySelector("#charAttImgInput").addEventListener("change",I=>{document.querySelector(`#char_${e.characters[a].persona.name} img:first-child`).src=I.target.value,document.getElementById("editorUserInput").value=`${I.target.value}`})}},G=(t,r)=>{var i,v,A,x,f;var m=document.querySelector(".currentScene"),s=Array.from(m.childNodes);if(!s.find(d=>d.id.includes(`${`${t}-cont`}`)))if(t.includes("newElementUnsaved-")){B.id=t;var o=document.createElement("div"),n=document.createElement("img");o.classList.add("sceneElement"),o.setAttribute("id",`${t}-cont`),n.setAttribute("id",`${t}-src`),n.setAttribute("src",((i=E.SUD.Elements.find(({id:d})=>d===r))==null?void 0:i.src)||B.src),o.appendChild(n),o.style.height=B.height,o.style.width=B.width,o.style.left=B.left,o.style.right=B.right,o.style.top=B.top,o.style.position=B.position,o.style.zIndex=B.zIndex,o.style.position="absolute",o.style.opacity="1",n.style.width="auto",n.style.height="100%",n.style.objectFit="contain",document.querySelector(".currentScene").appendChild(o),console.log("new element added to scene",e.elements),e==null||e.elements.push(B)}else{B.id=t;var l=document.createElement("div"),h=document.createElement("img"),c=document.createElement("div");c.setAttribute("class","inSceneCard pendingSaveCard"),c.setAttribute("id",`${t}`),c.innerHTML=`${t}`,c.addEventListener("click",d=>{G(d.target.id,r)}),document.getElementById(`${t}_global`).innerHTML=`${t}<span style="float:right; color: yellow;">&#9679;</span>`,document.getElementById("inSceneEls").appendChild(c),l.classList.add("sceneElement"),l.setAttribute("id",`${t}-cont`),console.log("name1",t),h.setAttribute("src",((v=E.SUD.Elements.find(({id:d})=>d===t))==null?void 0:v.src)||B.src),l.appendChild(h),l.style.height=B.height,l.style.width=B.width,l.style.left=B.left,l.style.right=B.right,l.style.top=B.top,l.style.position=B.position,l.style.zIndex=B.zIndex,l.style.position="absolute",l.style.opacity="1",h.style.width="auto",h.style.height="100%",h.style.objectFit="contain",document.querySelector(".currentScene").appendChild(l),e==null||e.elements.push(B)}u=`${t}-cont`,document.getElementById(u).style.border="1px solid yellow",setTimeout(()=>{document.getElementById(u).style.border="none"},1e3);for(const d in e.elements)if(e.elements[d].id===t){document.getElementById("chElAtt").innerHTML=`
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
                <input type="range" min="-101" max="101" value="${Number((A=e.elements[d].topTo)==null?void 0:A.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
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
                <input type="range" min="0" max="200" value="${Number((x=e.elements[d].heightTo)==null?void 0:x.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
            </div>
            <div class="sliderAttribute">
                <div>Blur To:</div>
                <span class="sliderAttValue" id="blurToValue">${e.elements[d].shadowEffectTo}</span>
                <input type="range" min="0" max="100" value="${Number((f=e.elements[d].shadowEffectTo)==null?void 0:f.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
            </div>
            <div class="sliderAttribute">
                <div>Bright To:</div>
                <span class="sliderAttValue" id="brightnessToValue">${e.elements[d].brightnessTo}</span>
                <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.elements[d].brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
            </div>
        `,document.querySelector("#editorUserInput").innerHTML="",e.elements[d].shadow===!0&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(b=>{b.innerHTML==="auto"&&(document.getElementById(b.id.replace("Value","Slider")).value=101,document.querySelector(`#${b.id.replace("Value","Slider")}`).style.pointerEvents="none"),b.innerHTML===""&&(document.getElementById(b.id.replace("Value","Slider")).value=-101,document.getElementById(b.id).innerHTML="-")});var S=document.getElementById(`${e.elements[d].id}-cont`);S.style.left=document.getElementById("leftValue").innerHTML,S.style.right=document.getElementById("rightValue").innerHTML+"%",S.style.bottom=document.getElementById("bottomValue").innerHTML+"%",S.style.top=document.getElementById("topValue").innerHTML+"%",S.style.zIndex=document.getElementById("zIndexValue").innerHTML,S.style.width=document.getElementById("widthValue").innerHTML+"%",S.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#${e.elements[d].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var p=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(p===!1){p=!0,document.querySelector("#attLock").innerHTML="🔒";return}else{e.elements[d].locked=!1,document.querySelector("#attLock").innerHTML="🔓",p=!1;return}}),document.querySelectorAll(".slider").forEach(b=>{var H=E.SUD.Scenarios[V].find(({name:y})=>y===e.name).elements.find(({id:y})=>y===u.replace("-cont",""));b.addEventListener("input",y=>{document.querySelector(`#${y.target.id.replace("Slider","Value")}`).innerHTML=y.target.value,document.getElementById("updateScopeSelect").value==="scene"&&(H[y.target.id.replace("Slider","")]=y.target.value),y.target.value==="101"&&(document.querySelector(`#${y.target.id.replace("Slider","Value")}`).innerHTML="auto",document.getElementById("updateScopeSelect").value==="scene"&&(H[y.target.id.replace("Slider","")]=y.target.value)),y.target.value==="-101"&&(document.querySelector(`#${y.target.id.replace("Slider","Value")}`).innerHTML="",document.getElementById("updateScopeSelect").value==="scene"&&(H[y.target.id.replace("Slider","")]=y.target.value)),`${y.target.value}%`!=e.elements[d][y.target.id.replace("Slider","")]&&y.target.getAttribute("data-valueType")==="%"?(document.querySelector(`#${y.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(H[y.target.id.replace("Slider","")]=y.target.value)):`${y.target.value}px`!=e.elements[d][y.target.id.replace("Slider","")]&&y.target.getAttribute("data-valueType")==="px"?(document.querySelector(`#${y.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(H[y.target.id.replace("Slider","")]=y.target.value)):Number(y.target.value)!=e.elements[d][y.target.id.replace("Slider","")]&&y.target.getAttribute("data-valueType")==="#%"?(document.querySelector(`#${y.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(H[y.target.id.replace("Slider","")]=y.target.value)):y.target.value!=e.elements[d][y.target.id.replace("Slider","")]&&y.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${y.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(H[y.target.id.replace("Slider","")]=y.target.value)):(console.log("not changed"),document.querySelector(`#${y.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(H[y.target.id.replace("Slider","")]=y.target.value));var a=document.getElementById(`${u}`);a.style.left=document.getElementById("leftValue").innerHTML+"%",a.style.right=document.getElementById("rightValue").innerHTML+"%",a.style.bottom=document.getElementById("bottomValue").innerHTML+"%",a.style.top=document.getElementById("topValue").innerHTML+"%",a.style.zIndex=document.getElementById("zIndexValue").innerHTML,a.style.width=document.getElementById("widthValue").innerHTML+"%",a.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#${e.elements[d].id}-cont img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,p===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})})}},J=t=>{u=`${t}`,document.getElementById(u).style.color="yellow",setTimeout(()=>{document.getElementById(u).style.color="#ff002d"},1e3);for(const m in e.characters)if("element"in e.characters[m]){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">pPosition:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[m].persona.dialogue.pPosition}">
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[m].element.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[m].element.left)}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[m].element.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[m].element.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[m].element.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[m].element.bottom.replace("%",""))}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[m].element.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[m].element.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[m].element.zIndex}</span>
                    <input type="range" min="-10" max="100" value="${Number(e.characters[m].element.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[m].element.width}</span>
                    <input type="range" min="0" max="600" value="${Number(e.characters[m].element.width.replace("px",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[m].element.height}</span>
                    <input type="range" min="0" max="600" value="${Number(e.characters[m].element.height.replace("px",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
            `,document.querySelector("#charAttTalkInput").addEventListener("change",s=>{s.target.value==="left"?(document.getElementById(`${u.replace("dialogue","")}pointer`).style.right="",document.getElementById(`${u.replace("dialogue","")}pointer`).style.left="-30px",document.getElementById(`${u.replace("dialogue","")}pointer`).style.borderLeft="1px solid #ff002d",document.getElementById(`${u.replace("dialogue","")}pointer`).style.borderTop="0px solid #ff002d"):(document.getElementById(`${u.replace("dialogue","")}pointer`).style.right="-30px",document.getElementById(`${u.replace("dialogue","")}pointer`).style.left="",document.getElementById(`${u.replace("dialogue","")}pointer`).style.borderLeft="0px solid #ff002d",document.getElementById(`${u.replace("dialogue","")}pointer`).style.borderTop="1px solid #ff002d")}),document.querySelector("#editorUserInput").innerHTML="",document.querySelectorAll(".sliderAttValue").forEach(s=>{s.innerHTML==="auto"&&(document.getElementById(s.id.replace("Value","Slider")).value=101,document.querySelector(`#${s.id.replace("Value","Slider")}`).style.pointerEvents="none"),s.innerHTML===""&&(document.getElementById(s.id.replace("Value","Slider")).value=-101,document.getElementById(s.id).innerHTML="-")});var r=document.getElementById(`${e.characters[m].persona.name}_dialogue`);r.style.left=document.getElementById("leftValue").innerHTML,r.style.right=document.getElementById("rightValue").innerHTML+"%",r.style.bottom=document.getElementById("bottomValue").innerHTML+"%",r.style.top=document.getElementById("topValue").innerHTML+"%",r.style.zIndex=document.getElementById("zIndexValue").innerHTML,r.style.width=document.getElementById("widthValue").innerHTML+"px",r.style.height=document.getElementById("heightValue").innerHTML,document.querySelectorAll(".slider").forEach(s=>{var o=E.SUD.Scenarios[V].find(({name:n})=>n===e.name).characters.find(({persona:n})=>n.name===u.replace("_dialogue",""));s.addEventListener("input",n=>{document.querySelector(`#${n.target.id.replace("Slider","Value")}`).innerHTML=n.target.value,n.target.value==="101"&&(document.querySelector(`#${n.target.id.replace("Slider","Value")}`).innerHTML="auto"),n.target.value==="-101"&&(document.querySelector(`#${n.target.id.replace("Slider","Value")}`).innerHTML=""),`${n.target.value}%`!=e.elements[m][n.target.id.replace("Slider","")]&&n.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="yellow":`${n.target.value}px`!=e.elements[m][n.target.id.replace("Slider","")]&&n.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="yellow":Number(n.target.value)!=e.elements[m][n.target.id.replace("Slider","")]&&n.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="yellow":n.target.value!=e.elements[m][n.target.id.replace("Slider","")]&&n.target.getAttribute("data-valueType")==="##"?(document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="yellow",document.getElementById("updateScopeSelect").value==="scene"&&(o.element[n.target.id.replace("Slider","")]=n.target.value)):(console.log("not changed"),document.querySelector(`#${n.target.id.replace("Slider","Value")}`).style.color="#ff002d",document.getElementById("updateScopeSelect").value==="scene"&&(o.element[n.target.id.replace("Slider","")]=n.target.value));var l=document.getElementById(`${e.characters[m].persona.name}_dialogue`),h=document.getElementById("leftValue").innerHTML,c=document.getElementById("rightValue").innerHTML,S=document.getElementById("bottomValue").innerHTML,p=document.getElementById("topValue").innerHTML,i=document.getElementById("zIndexValue").innerHTML,v=document.getElementById("widthValue").innerHTML,A=document.getElementById("heightValue").innerHTML;l.setAttribute("style",`left: ${h} !important; right: ${c}% !important; bottom: ${S}% !important; top: ${p}% !important; z-index: ${i} !important; width: ${v}px !important; height: ${A}px !important;inset: -5% -10% auto auto; z-index: 2; border-radius: 10px; border-top: 0.5px solid rgb(255, 0, 45); border-bottom: 0.5px solid rgb(255, 0, 45); padding: 10px; transform: translate(0px, 0px); transform-origin: left bottom; translate: none; rotate: none; scale: none;`)})})}};var _=()=>{const t=JSON.stringify(E);fetch("http://localhost:3001/save-json",{method:"POST",body:t,headers:{"Content-Type":"application/json"}}).then(r=>{r.ok?console.log("JSON data saved successfully"):console.error("Error saving JSON data")}).catch(r=>{console.error("Error saving JSON data:",r)})};document.querySelector("#generateScenario").addEventListener("click",t=>{t.preventDefault();var r=document.getElementById("scenarioEdit");r.value!=""&&(E.SUD.Scenarios[r.value]=[],console.log("tempData",E),_())});var F=()=>{document.querySelector("#newSceneBut").addEventListener("click",()=>{var m;E=R,K=de,D=0,z=0,E.SUD.Scenarios[V].push(K),e=E.SUD.Scenarios[V].find(({name:s})=>s==="newScene");var t=document.createElement("div"),r=document.getElementById("editorbodyDisplay");t.setAttribute("clas s","currentScene"),t.setAttribute("id","currentSceneView_draft"),t.setAttribute("style","z-index: 10; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); opacity: 1;"),r.appendChild(t),document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",document.getElementById("inSceneCharsDialogues").innerHTML="",document.getElementById("headerSceneName").innerHTML="[ NEW SCENE ]",document.getElementById("headerSceneName").setAttribute("class","pendingSaveText"),(m=document.querySelector(".currentScene"))==null||m.remove(),document.getElementById("scnAttName").value="[ NEW SCENE ]",document.getElementById("scnAttName").setAttribute("class","attInput pendingSaveText"),document.querySelectorAll(".sceneSelectElementEl").forEach(s=>{s.innerHTML=`${s.id.replace("_global","")}`;var o=()=>{var n=document.createElement("div");n.setAttribute("class","inSceneCard pendingSaveCard"),n.setAttribute("id","newElementUnsaved"),n.innerHTML=`${s.id.replace("_global","")}`,s.removeEventListener("click",o),s.innerHTML=`${s.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};if(!s.getAttribute("data-listener")){s.addEventListener("click",o);return}s.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElementChar").forEach(s=>{s.innerHTML=`${s.id.replace("_global","")}`;var o=()=>{var n=document.createElement("div");n.setAttribute("class","inSceneCard pendingSaveCard"),n.setAttribute("id","newElementUnsaved"),n.innerHTML=`${s.id.replace("_global","")}`,s.removeEventListener("click",o),s.innerHTML=`${s.id.replace("_global","")}<span style="float:right; color: yellow">&#9679;</span>`};s.getAttribute("data-listener")||s.addEventListener("click",o),s.removeAttribute("data-listener")}),document.querySelectorAll(".sceneSelectElement").forEach(s=>{s.id==="newSceneBut"?s.innerHTML=`${s.id}<span style="float:right; color: yellow">&#9679;</span>`:s.innerHTML=`${s.id.replace("_global","")}`})}),document.getElementById("addToScope").addEventListener("click",()=>{var t=document.getElementById("editorUserInput").value;if(e.activated.land=document.getElementById("scnAttAct1").value,e.activated.pop=document.getElementById("scnAttAct2").value,e.activated.gate=document.getElementById("scnAttAct3").value,e.activated.scn=document.getElementById("scnAttAct4").value,P==="charAttDialogue"){var r=e.characters.find(({persona:n})=>n.name===u.replace("char_","")),m=document.createElement("option");m.setAttribute("value",t),m.innerHTML=t,document.getElementById("charAttTalkInput").appendChild(m),r.persona.name=document.getElementById("charAttNameInput").value,r.persona.location=document.getElementById("charAttLocInput").value,r.persona.job=document.getElementById("charAttJobInput").value}if(P==="charAttImages"){var s=document.createElement("option");s.setAttribute("value",t),s.innerHTML=t,document.getElementById("charAttImgInput").appendChild(s)}if(P==="charAttSource"){var o=e.elements.find(({id:n})=>n===u);document.getElementById("charAttImgInput").value=t,document.getElementById(`${u.replace("cont","src")}`).src=t,o.id=document.getElementById("charAttNameInput").value,o.action=document.getElementById("charAttJobInput").value,o.src=document.getElementById("charAttImgInput").value}document.getElementById("editorUserInput").value=""}),document.querySelector("#newCharBut").addEventListener("click",()=>{D++;var t=document.createElement("div");t.setAttribute("class","inSceneCard pendingSaveCard"),t.setAttribute("id",`newCharacterUnsaved-${D}`),t.innerHTML="[ NEW CHAR ]",t.addEventListener("click",r=>{q(r.target.id)}),document.getElementById("inSceneChars").appendChild(t)}),document.querySelector("#newElBut").addEventListener("click",()=>{z++;var t=document.createElement("div");t.setAttribute("class","inSceneCard pendingSaveCard"),t.setAttribute("id",`newElementUnsaved-${z}`),t.innerHTML="[ NEW EL ]",t.addEventListener("click",r=>{G(r.target.id)}),document.getElementById("inSceneEls").appendChild(t)})};return F(),document.querySelector("#deleteScenario").addEventListener("click",t=>{t.preventDefault();var r=document.getElementById("scenarioEdit");r.value!=""&&E.SUD.Scenarios[r.value]&&(delete E.SUD.Scenarios[r.value],console.log("tempData",E),_())}),document.getElementById("deleteEl").addEventListener("click",()=>{var t=document.createElement("div");t.setAttribute("id","warningBG"),t.setAttribute("class","warningBG"),t.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText" style="color:#ff002d;">Delete ${document.getElementById("updateScopeSelect").value}?<br><span style="font-size:.5em;">Are you sure?</span>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(t),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var s,o,n,l,h;var r=document.getElementById("updateScopeSelect").value;switch(r){case"scene":delete E.SUD.Scenarios[V].find(({name:c})=>c===e.name),_();break;case"select":var m=(s=document.getElementById(`${u.replace("char_","")}`))==null?void 0:s.innerHTML;u.includes("-cont")&&(delete E.SUD.Scenarios[V].find(({name:c})=>c===e.name).elements.find(({id:c})=>c===u),(o=document.getElementById(u.replace("-cont","")))==null||o.remove(),document.getElementById(`${u.replace("-cont","")}_global`)&&(document.getElementById(`${u.replace("-cont","")}_global`).innerHTML=`${u.replace("-cont","")}`)),u.includes("char_")&&(delete E.SUD.Scenarios[V].find(({name:c})=>c===e.name).characters.find(({persona:c})=>c.name===u),(n=document.getElementById(u.replace("char_","")))==null||n.remove(),(l=document.getElementById(`${u.replace("char_","")}-dia`))==null||l.remove(),document.getElementById(`${u.replace("char_","")}_global`)&&(document.getElementById(`${u.replace("char_","")}_global`).innerHTML=`${u.replace("char_","")}`)),u.includes("newCharacterUnsaved")&&(document.getElementById(`${m}_global`).innerHTML=`${m}`,document.getElementById(`${m}_global`).addEventListener("click",c=>{q(c.target.id.replace("_global",""),m)})),(h=document.getElementById(u))==null||h.remove();break;case"isolated":if(u.includes("-cont")){for(const c in E.SUD.Scenarios)for(const S in E.SUD.Scenarios[V])S.elements.find(({id:p})=>p===u.id)&&delete E.SUD.Scenarios[c][S].elements.find(({id:p})=>p===u);delete E.SUD.Elements.find(({id:c})=>c===u.id)}if(u.includes("char_")){for(const c in E.SUD.Scenarios)for(const S in E.SUD.Scenarios[V])S.characters.find(({persona:p})=>p.name===u)&&delete E.SUD.Scenarios[c][S].characters.find(({persona:p})=>p.name===u.persona.name);delete E.SUD.Characters.find(({persona:c})=>c.name===u.persona.name)}_();break}})}),document.getElementById("saveScene").addEventListener("click",()=>{var t=document.createElement("div");t.setAttribute("id","warningBG"),t.setAttribute("class","warningBG"),t.innerHTML=`
      <div id="warningBlock">
        <div id="warningBGText">Save ${document.getElementById("updateScopeSelect").value}?<br>
        </div>
        <div id="warningBGButtons">
          <button id="warningBGYes" style="border-right:.5px solid #ff002d;">Yes</button>
          <button id="warningBGNo">No</button>
        </div>
      </div>
      `,document.getElementById("editorScreen").appendChild(t),document.getElementById("warningBGNo").addEventListener("click",()=>{document.getElementById("warningBG").remove()}),document.getElementById("warningBGYes").addEventListener("click",()=>{var r=document.getElementById("updateScopeSelect").value;switch(r){case"scene":break;case"isolated":if(u.includes("-cont")){var m={id:`${B.id}`,src:`${B.src}`};E.SUD.Elements.push(m)}u.includes("char_")&&E.SUD.Characters.push($.persona);break}_()})}),document.getElementById("scenesContainer").appendChild(document.getElementById("newSceneBut")),document.getElementById("editorScreen").style.display="block",document.getElementById("mapperBut").addEventListener("click",()=>{ae()}),document.querySelector(".currentScene")?(O=document.getElementById("editorbodyDisplay"))==null||O.appendChild(document.querySelector(".currentScene")):(document.getElementById("universe").style.filter="blur(10px)",setTimeout(()=>{var t;(t=document.getElementById("editorbodyDisplay"))==null||t.appendChild(document.querySelector(".currentScene"))},1e3)),!0}else return document.getElementById("editorScreen").remove(),document.getElementById("universe").style.filter="blur(0px)",!1}export{re as editor};
