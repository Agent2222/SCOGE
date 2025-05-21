import{g as s,be as t}from"./main-eIJD23Y3.js";import{channel as a}from"./GameMultiPlayer-DZqQ72ny.js";import"./wScoge-BthgsBuw.js";class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.emotes=!1,this.channel2ex=a}get active(){return this.getAttr("active")}set active(o){this.setAttr("active",o)}static get observedAttributes(){return["active"]}attributeChangedCallback(o,e,i){i==="true"&&(this.activate(),this.channel2ex=a)}openEmotes(){window.mapperActive===!1&&(s.to(this.shadowRoot.getElementById("main"),{duration:.3,ease:"power4.out",y:0,opacity:1}),this.emotes=!0,setTimeout(()=>{s.to(this.shadowRoot.getElementById("main"),{duration:.3,ease:"power4.out",y:100,opacity:0}),this.emotes=!1},2e3))}async activate(){await t(()=>import("./smile-emote-DcomjuhZ.js"),[]),await t(()=>import("./anger-emote-xFwncj6O.js"),[]),await t(()=>import("./alert-emote-C7nWBzG0.js"),[]),await t(()=>import("./action-emote-CZlU63Kv.js"),[]),await t(()=>import("./network-emote-CUEmWU49.js"),[]),await t(()=>import("./chat-emote-Ctl_6Kap.js"),[]),await t(()=>import("./forge-emote-Jj77D1bT.js"),[]),await t(()=>import("./photo-emote-CyACcV8Z.js"),[]),await t(()=>import("./snooze-emote-iWf-RX6G.js"),[]);let o=await t(()=>import("./wave-emote-C0IrcT2C.js"),[]);console.log("wave",o.default),document.addEventListener("keydown",e=>{var i=document.getElementById("selection");if((e.keyCode===49||e.keyCode===50||e.keyCode===51||e.keyCode===52||e.keyCode===53||e.keyCode===54||e.keyCode===55||e.keyCode===56||e.keyCode===57||e.keyCode===48)&&this.emotes===!1){this.openEmotes();return}e.keyCode===49&&this.emotes===!0?(window.soundtrack.play("explore-1"),window.uniPlayer.emote="👋",i.innerHTML='<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">👋</div>',this.channel2ex.presence.update({data:window.uniPlayer})):e.keyCode===50&&this.emotes===!0?(window.soundtrack.play("explore-1"),window.uniPlayer.emote="😆",this.channel2ex.presence.update({data:window.uniPlayer}),i.innerHTML='<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">😆</div>'):e.keyCode===51&&this.emotes===!0?(window.soundtrack.play("explore-1"),window.uniPlayer.emote="🍻",this.channel2ex.presence.update({data:window.uniPlayer}),i.innerHTML='<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">🍻</div>'):e.keyCode===52&&this.emotes===!0?(window.soundtrack.play("explore-1"),window.uniPlayer.emote="🚨",this.channel2ex.presence.update({data:window.uniPlayer}),i.innerHTML='<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">🚨</div>'):e.keyCode===53&&this.emotes===!0||e.keyCode===54&&this.emotes===!0||e.keyCode===55&&this.emotes===!0||(e.keyCode===56&&this.emotes===!0?(window.soundtrack.play("explore-1"),window.uniPlayer.emote="💤",this.channel2ex.presence.update({data:window.uniPlayer}),i.innerHTML='<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">💤</div>'):e.keyCode===57&&this.emotes===!0||e.keyCode===48&&this.emotes===!0&&(window.soundtrack.play("explore-1"),window.uniPlayer.emote="💬",this.channel2ex.presence.update({data:window.uniPlayer}),i.innerHTML='<div class="playerEmote" style="position: absolute; top: 9px; left: 9px; width: 28px; height: 28px; z-index:10; background-color:black; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #fff; font-weight: 700;">💬</div>'))})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
            <style>
                #main {
                    position: absolute;
                    height: 4%;
                    width: 35%;
                    left: 32.5%;
                    bottom: 5%;
                    z-index: 100;
                    display: grid;
                    grid-template-columns: repeat(10, 1fr);
                    overflow: hidden;
                    background-color: rgba(0, 0, 0, .8);
                    border-radius: 10px;
                    border: .5px solid #ff002d;
                    font-family: "BS-R";
                    transform: translateY(100px);
                    opacity: 0;
                }

                .emote {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: .1s ease-in-out;
                }

                .emote:hover {
                    background-color: #ff002d;
                    color: var(--secondary);
                }

                .emo {
                    font-size: 1.3rem;
                    transition: .3s ease-in-out;
                }

                .emote:hover .emo {
                    font-size: 1.8rem;
                }

                .inactive {
                    opacity: .3;
                    cursor: default;
                }

            </style>
            <div id="main">
                <div class="emote"> 
                    <div class="key">1</div>
                    <div class="emo">👋</div>
                </div>
                <div class="emote"> 
                    <div class="key">2</div>
                    <div class="emo">😆</div>
                </div>
                <div class="emote"> 
                    <div class="key">3</div>
                    <div class="emo">🍻</div>
                </div>
                <div class="emote"> 
                    <div class="key">4</div>
                    <div class="emo">🚨</div>
                </div>
                <div class="emote inactive"> 
                    <div class="key">5</div>
                    <div class="emo">💥</div>
                </div>
                <div class="emote inactive"> 
                    <div class="key">6</div>
                    <div class="emo">🕹</div>
                </div>
                <div class="emote inactive"> 
                    <div class="key">7</div>
                    <div class="emo">📸</div>
                </div>
                <div class="emote"> 
                    <div class="key">8</div>
                    <div class="emo">💤</div>
                </div>
                <div class="emote inactive"> 
                    <div class="key">9</div>
                    <div class="emo">🌐</div>
                </div>
                <div class="emote"> 
                    <div class="key">0</div>
                    <div class="emo">💬</div>
                </div>
            </div>
        `}}customElements.define("uni-c-emoter",d);export{d as emoter};
