import{j as T,k as $}from"./main.3d7e38c0.js";import"./wScoge.fc00b881.js";import"https://cdn.socket.io/4.4.1/socket.io.esm.min.js";const f="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",V=new T.Configuration({apiKey:f}),x=new T.OpenAIApi(V);var u=null,s=null,e=null;async function N(B){try{const c=await fetch("/src/game/scenarios/suDb.json");if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);u=await c.json(),s=u.SUD.Scenarios.Intro}catch(c){console.error("Error fetching JSON data:",c)}if(B===!1){const c=document.createElement("link");c.rel="stylesheet",c.href="editor.css",document.head.appendChild(c);var v=document.createElement("div"),A=document.getElementById("main");v.setAttribute("id","editorScreen"),v.innerHTML=`
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
                        <div id="inSceneEls">
                            <div id="editorSceneEls" class="inSceneSections">Elements</div>
                        </div>
                    </div>
                    <div id="aiAsst">
                        <textarea id="editorUserInput" placeholder="AI Asst."></textarea>
                        <div id="aiAsstButtons">
                            <select id="aiAsstSelectScope">
                                <option value="ch">Character</option>
                                <option value="el">Element</option>
                                <option value="scn">Dialogue</option>
                                <option value="el">Images</option>
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
                    <div class="editorButton">Delete</div>
                    <div class="editorButton">Save</div>
                </div>
            </div>
        `,A.appendChild(v),document.getElementById("loadScene").addEventListener("click",()=>{document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene"))});var m=document.getElementById("scenarioDropdown");for(const r in u.SUD.Scenarios){var p=document.createElement("option");p.setAttribute("value",r),p.innerHTML=r,m.appendChild(p)}m.addEventListener("change",()=>{var r=u.SUD.Scenarios[m.value];s=u.SUD.Scenarios[m.value],document.getElementById("scenesContainer").innerHTML="",r.forEach(a=>{var i=document.createElement("div");i.setAttribute("class","sceneSelectElement"),i.setAttribute("id",a.name),i.innerHTML=`${a.name}`,i.addEventListener("click",l=>{h(l.target.id)}),document.getElementById("scenesContainer").appendChild(i)})}),s.forEach(r=>{var a=document.createElement("div");a.setAttribute("class","sceneSelectElement"),a.setAttribute("id",r.name),a.innerHTML=`${r.name}`,a.addEventListener("click",i=>{h(i.target.id)}),document.getElementById("scenesContainer").appendChild(a)}),u.SUD.Characters.forEach(r=>{var a=document.createElement("div"),i=document.getElementById("newCharBut");a.setAttribute("class","sceneSelectElement"),a.setAttribute("id",r.name),a.innerHTML=`${r.name}`,document.getElementById("charactersContainer").appendChild(a),document.getElementById("charactersContainer").appendChild(i)}),u.SUD.Elements.forEach(r=>{var a=document.createElement("div"),i=document.getElementById("newElBut");a.setAttribute("class","sceneSelectElement"),a.setAttribute("id",r.id),a.innerHTML=`${r.id}`,document.getElementById("elsContainer").appendChild(a),document.getElementById("elsContainer").appendChild(i)});const h=r=>{for(const a in s)s[a].name===r&&(e=s[a],document.getElementById("hsc").innerHTML=`${s[a].activated}]`,document.getElementById("headerSceneName").innerHTML=`${s[a].name}`,document.getElementById("scnAttName").value=`${s[a].name}`,document.getElementById("scnAttType").value=`${s[a].type}`,document.getElementById("scnAttBg").value=`${s[a].bg}`,document.getElementById("scnAttAct").value=`${s[a].activated}`,document.getElementById("inSceneChars").innerHTML="",document.getElementById("inSceneEls").innerHTML="",s[a].characters.forEach(i=>{var l=document.createElement("div");l.setAttribute("class","inSceneCard"),l.setAttribute("id",i.persona.name),l.innerHTML=`${i.persona.name}`,document.getElementById("inSceneChars").appendChild(l),l.addEventListener("click",g=>{L(g.target.id)})}),s[a].elements.forEach(i=>{var l=document.createElement("div");l.setAttribute("class","inSceneCard"),l.setAttribute("id",i.id),l.innerHTML=`${i.id}`,document.getElementById("inSceneEls").appendChild(l)}))};h("scene1"),document.getElementById("summonAI").addEventListener("click",async()=>{document.getElementById("editorAiOutput").innerHTML="Loading...";var r=document.getElementById("editorUserInput").value,a=await x.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Hello. ${r}`}],max_tokens:100}).catch(i=>{console.log(i)});console.log(a),document.getElementById("editorUserInput").value="",document.getElementById("editorAiOutput").innerHTML=`${a.data.choices[0].message.content}`});const L=r=>{var I,S,b;for(const t in e.characters)if(e.characters[t].persona.name===r){document.getElementById("chElAtt").innerHTML=`
                <div id="charAttName" class="txtAttribute">
                    <div id="charAttNameLabel">Chr Name:</div>
                    <input type="text" id="charAttNameInput" value="${e.characters[t].persona.name}">
                </div>
                <div id="charAttLoc" class="txtAttribute">
                    <div id="charAttLocLabel">Chr Loc:</div>
                    <input type="text" id="charAttLocInput" value="${e.characters[t].persona.location}">
                </div>
                <div id="charAttJob" class="txtAttribute">
                    <div id="charAttJobLabel">Chr Job:</div>
                    <input type="text" id="charAttJobInput" value="${e.characters[t].persona.job}">
                </div>
                <div id="charAttDialogue" class="txtAttribute">
                    <div id="charAttTalkLabel">Dialogue:</div>
                    <select type="text" class="attSelect" id="charAttTalkInput" value="${e.characters[t].persona.job}"></select>
                </div>
                <div id="charAttImages" class="txtAttribute">
                    <div id="charAttImageLabel">Images:</div>
                    <select type="text" class="attSelect" id="charAttImgInput" value="${e.characters[t].persona.job}"></select>
                </div>
                <div id="charAttActions" class="txtAttribute">
                    <div id="charAttActionsLabel">Chat:</div>
                    <input type="checkbox" id="charAttActionInput" value="${e.characters[t].persona.name}">
                    <label for="charAttActionInput"></label>
                </div>
                <div class="sliderAttribute">
                    <div>Left:</div>
                    <span class="sliderAttValue" id="leftValue">${e.characters[t].pns.left}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[t].pns.left.replace("%",""))}" class="slider" id="leftSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right:</div>
                    <span class="sliderAttValue" id="rightValue">${e.characters[t].pns.right}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[t].pns.right.replace("%",""))}" class="slider" id="rightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom:</div>
                    <span class="sliderAttValue" id="bottomValue">${e.characters[t].pns.bottom}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[t].pns.bottom)}" class="slider" id="bottomSlider" data-valueType="#%">
                </div>
                <div class="sliderAttribute">
                    <div>Top:</div>
                    <span class="sliderAttValue" id="topValue">${e.characters[t].pns.top}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[t].pns.top.replace("%",""))}" class="slider" id="topSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex:</div>
                    <span class="sliderAttValue" id="zIndexValue">${e.characters[t].pns.zIndex}</span>
                    <input type="range" min="1" max="100" value="${Number(e.characters[t].pns.zIndex)}" class="slider" id="zIndexSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width:</div>
                    <span class="sliderAttValue" id="widthValue">${e.characters[t].pns.width}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[t].pns.width.replace("%",""))}" class="slider" id="widthSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height:</div>
                    <span class="sliderAttValue" id="heightValue">${e.characters[t].pns.height}</span>
                    <input type="range" min="0" max="200" value="${Number(e.characters[t].pns.height.replace("%",""))}" class="slider" id="heightSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Speed:</div>
                    <span class="sliderAttValue" id="speedValue">${e.characters[t].pns.speed}</span>
                    <input type="range" min="0.0" max="10.0" value="${Number(e.characters[t].pns.speed)}" class="slider" id="speedSlider" data-valueType="##" step="0.001">
                </div>
                <div class="sliderAttribute">
                    <div>Blur:</div>
                    <span class="sliderAttValue" id="blurValue">${e.characters[t].pns.blur}</span>
                    <input type="range" min="0" max="50" value="${Number(e.characters[t].pns.blur.replace("px",""))}" class="slider" id="blurSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright:</div>
                    <span class="sliderAttValue" id="brightnessValue">${e.characters[t].pns.brightness}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[t].pns.brightness)}" class="slider" id="brightnessSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Left To:</div>
                    <span class="sliderAttValue" id="leftToValue">${e.characters[t].pns.leftTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[t].pns.leftTo.replace("%",""))}" class="slider" id="leftToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Right To:</div>
                    <span class="sliderAttValue" id="rightToValue">${e.characters[t].pns.rightTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[t].pns.rightTo.replace("%",""))}" class="slider" id="rightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Bottom To:</div>
                    <span class="sliderAttValue" id="bottomToValue">${e.characters[t].pns.bottomTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[t].pns.bottomTo)}" class="slider" id="bottomToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Top To:</div>
                    <span class="sliderAttValue" id="topToValue">${e.characters[t].pns.topTo}</span>
                    <input type="range" min="-101" max="101" value="${Number((I=e.characters[t].pns.topTo)==null?void 0:I.replace("%",""))}" class="slider" id="topToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>zIndex To:</div>
                    <span class="sliderAttValue" id="zIndexToValue">${e.characters[t].pns.zIndexTo}</span>
                    <input type="range" min="0" max="100" value="${Number(e.characters[t].pns.zIndexTo)}" class="slider" id="zIndexToSlider" data-valueType="##">
                </div>
                <div class="sliderAttribute">
                    <div>Width To:</div>
                    <span class="sliderAttValue" id="widthToValue">${e.characters[t].pns.widthTo}</span>
                    <input type="range" min="-101" max="101" value="${Number(e.characters[t].pns.width.replace("%",""))}" class="slider" id="widthToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Height To:</div>
                    <span class="sliderAttValue" id="heightToValue">${e.characters[t].pns.heightTo}</span>
                    <input type="range" min="0" max="200" value="${Number((S=e.characters[t].pns.heightTo)==null?void 0:S.replace("%",""))}" class="slider" id="heightToSlider" data-valueType="%">
                </div>
                <div class="sliderAttribute">
                    <div>Blur To:</div>
                    <span class="sliderAttValue" id="blurToValue">${e.characters[t].pns.blurTo}</span>
                    <input type="range" min="0" max="100" value="${Number((b=e.characters[t].pns.blurTo)==null?void 0:b.replace("px",""))}" class="slider" id="blurToSlider" data-valueType="px">
                </div>
                <div class="sliderAttribute">
                    <div>Bright To:</div>
                    <span class="sliderAttValue" id="brightnessToValue">${e.characters[t].pns.brightnessTo}</span>
                    <input type="range" min="0.0" max="2.0" step="0.001" value="${Number(e.characters[t].pns.brightnessTo)}" class="slider" id="brightnessToSlider" data-valueType="##">
                </div>
            `,document.querySelector("#editorUserInput").innerHTML="",e.characters[t].actions[0]==="chat"&&(document.querySelector("#charAttActionInput").checked=!0),document.querySelectorAll(".sliderAttValue").forEach(n=>{n.innerHTML==="auto"&&(document.getElementById(n.id.replace("Value","Slider")).value=101,document.querySelector(`#${n.id.replace("Value","Slider")}`).style.pointerEvents="none"),n.innerHTML===""&&(document.getElementById(n.id.replace("Value","Slider")).value=-101,document.getElementById(n.id).innerHTML="-")}),document.querySelectorAll(".attBut").forEach(n=>{n.style.display="block"}),document.querySelector("#charAttActionInput").addEventListener("change",n=>{n.target.checked?(e.characters[t].actions[0]="chat",document.getElementById(`${e.characters[t].persona.name}_dialogue`).style.display="block"):(e.characters[t].actions[0]="none",document.getElementById(`${e.characters[t].persona.name}_dialogue`).style.display="none")});var a=!1;document.querySelector("#attLock").addEventListener("click",()=>{if(a===!1){a=!0,document.querySelector("#attLock").innerHTML="\u{1F512}";return}else{e.characters[t].locked=!1,document.querySelector("#attLock").innerHTML="\u{1F513}",a=!1;return}}),document.querySelectorAll(".slider").forEach(n=>{n.addEventListener("input",d=>{document.querySelector(`#${d.target.id.replace("Slider","Value")}`).innerHTML=d.target.value,d.target.value==="101"&&(document.querySelector(`#${d.target.id.replace("Slider","Value")}`).innerHTML="auto"),d.target.value==="-101"&&(document.querySelector(`#${d.target.id.replace("Slider","Value")}`).innerHTML=""),`${d.target.value}%`!=e.characters[t].pns[d.target.id.replace("Slider","")]&&d.target.getAttribute("data-valueType")==="%"?document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="yellow":`${d.target.value}px`!=e.characters[t].pns[d.target.id.replace("Slider","")]&&d.target.getAttribute("data-valueType")==="px"?document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="yellow":Number(d.target.value)!=e.characters[t].pns[d.target.id.replace("Slider","")]&&d.target.getAttribute("data-valueType")==="#%"?document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="yellow":d.target.value!=e.characters[t].pns[d.target.id.replace("Slider","")]&&d.target.getAttribute("data-valueType")==="##"?document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="yellow":(console.log("not changed"),document.querySelector(`#${d.target.id.replace("Slider","Value")}`).style.color="#ff002d");var o=document.getElementById(`char_${e.characters[t].persona.name}`);o.style.left=document.getElementById("leftValue").innerHTML+"%",o.style.right=document.getElementById("rightValue").innerHTML+"%",o.style.bottom=document.getElementById("bottomValue").innerHTML+"%",o.style.top=document.getElementById("topValue").innerHTML+"%",o.style.zIndex=document.getElementById("zIndexValue").innerHTML,o.style.width=document.getElementById("widthValue").innerHTML+"%",o.style.height=document.getElementById("heightValue").innerHTML+"%",document.querySelector(`#char_${e.characters[t].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}px) brightness(${document.getElementById("brightnessValue").innerHTML})`,a===!0&&(document.getElementById("leftToSlider").value=document.getElementById("leftSlider").value,document.getElementById("leftToValue").innerHTML=document.getElementById("leftSlider").value,document.getElementById("rightToSlider").value=document.getElementById("rightSlider").value,document.getElementById("rightToValue").innerHTML=document.getElementById("rightSlider").value,document.getElementById("bottomToSlider").value=document.getElementById("bottomSlider").value,document.getElementById("bottomToValue").innerHTML=document.getElementById("bottomSlider").value,document.getElementById("topToSlider").value=document.getElementById("topSlider").value,document.getElementById("topToValue").innerHTML=document.getElementById("topSlider").value,document.getElementById("zIndexToSlider").value=document.getElementById("zIndexSlider").value,document.getElementById("zIndexToValue").innerHTML=document.getElementById("zIndexSlider").value,document.getElementById("widthToSlider").value=document.getElementById("widthSlider").value,document.getElementById("widthToValue").innerHTML=document.getElementById("widthSlider").value,document.getElementById("heightToSlider").value=document.getElementById("heightSlider").value,document.getElementById("heightToValue").innerHTML=document.getElementById("heightSlider").value,document.getElementById("blurToSlider").value=document.getElementById("blurSlider").value,document.getElementById("blurToValue").innerHTML=document.getElementById("blurSlider").value,document.getElementById("brightnessToSlider").value=document.getElementById("brightnessSlider").value,document.getElementById("brightnessToValue").innerHTML=document.getElementById("brightnessSlider").value)})}),document.getElementById("attPreview").addEventListener("click",function(){console.log(document.getElementById("topValue").innerHTML),$.fromTo(`#char_${e.characters[t].persona.name}`,{left:document.getElementById("leftSlider").value+"%",bottom:document.getElementById("bottomValue").value+"%",zIndex:document.getElementById("zIndexSlider").value,height:document.getElementById("heightSlider").value+"%",filter:`blur(${document.getElementById("blurSlider").value}px) brightness(${document.getElementById("brightnessSlider").value})`},{duration:document.getElementById("speedSlider").value,left:document.getElementById("leftToSlider").value+"%",bottom:document.getElementById("bottomToSlider").value+"%",zIndex:document.getElementById("zIndexToSlider").value,height:document.getElementById("heightToSlider").value+"%",filter:`blur(${document.getElementById("blurToSlider").value}px) brightness(${document.getElementById("brightnessToSlider").value})`})});var i=document.getElementById(`char_${e.characters[t].persona.name}`);i.style.left=document.getElementById("leftValue").innerHTML,i.style.right=document.getElementById("rightValue").innerHTML+"%",i.style.bottom=document.getElementById("bottomValue").innerHTML+"%",i.style.top=document.getElementById("topValue").innerHTML+"%",i.style.zIndex=document.getElementById("zIndexValue").innerHTML,i.style.width=document.getElementById("widthValue").innerHTML+"%",i.style.height=document.getElementById("heightValue").innerHTML,document.querySelector(`#char_${e.characters[t].persona.name} img:first-child`).style.filter=`blur(${document.getElementById("blurValue").innerHTML}) brightness(${document.getElementById("brightnessValue").innerHTML})`;var E=document.querySelector("#charAttTalkInput");for(const n in e.characters[t].persona.dialogue){var l=document.createElement("option");l.setAttribute("value",n),l.innerHTML=n,E.appendChild(l)}var g=document.querySelector("#charAttImgInput");for(const n in e.characters[t].persona.images){var y=document.createElement("option");y.setAttribute("value",e.characters[t].persona.images[n]),y.innerHTML=n,g.appendChild(y)}var E=document.querySelector("#charAttTalkInput");document.querySelector("#charAttTalkInput").addEventListener("change",n=>{document.querySelector(`#char_${e.characters[t].persona.name} #${e.characters[t].persona.name}_dialogue`).innerHTML=`<p id="${e.characters[t].persona.name}_dialogue">${e.characters[t].persona.dialogue[n.target.value]}</p>`;var d=document.createElement("div");d.classList.add("dialoguePointer"),d.style.position="absolute",d.style.width=e.characters[t].element.pointer.width,d.style.height=e.characters[t].element.pointer.height,d.style.bottom=e.characters[t].element.pointer.bottom,d.style.left=e.characters[t].element.pointer.left,d.style.zIndex=e.characters[t].element.pointer.zIndex,d.style.transform=e.characters[t].element.pointer.transform,d.style.borderLeft=e.characters[t].element.pointer.borderleft,document.querySelector(`#${e.characters[t].persona.name}_dialogue`).appendChild(d),document.getElementById("editorUserInput").value=`${e.characters[t].persona.dialogue[n.target.value]}`}),document.querySelector("#charAttImgInput").addEventListener("change",n=>{document.querySelector(`#char_${e.characters[t].persona.name} img:first-child`).src=n.target.value,document.getElementById("editorUserInput").value=`${n.target.value}`})}};return document.getElementById("scenesContainer").appendChild(document.getElementById("newSceneBut")),document.getElementById("editorScreen").style.display="block",document.getElementById("editorbodyDisplay").appendChild(document.querySelector(".currentScene")),!0}else return document.getElementById("editorScreen").remove(),!1}export{N as editor};
