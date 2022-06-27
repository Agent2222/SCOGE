// import { universe_backend } from "../../declarations/universe_backend";
import { dialogue } from "../dialogue.js"
import { connectToPlug } from "../../scripts/plug.js";
import { isPlugConnected } from "../../scripts/plug.js";

// Get Level Progress
var Progress = 0;
var newUser = true;
async function getGameProgress() {
    var dialogueField1 = document.getElementById("subText1");
    var dialogueField2 = document.getElementById("subText2");
    var st1 = document.getElementById("st2Ans1");
    var st2 = document.getElementById("st2Ans2");
    var st3 = document.getElementById("st2Ans3");
    var allst2ans = document.querySelectorAll('.answerOptions');
    //
    const connected = await isPlugConnected();
    if (connected === true && newUser === true) {
        Progress = 2;
            dialogueField1.style.display = "flex";
            dialogueField1.innerHTML = `<p>${dialogue[0].question}</p>`;
            dialogueField2.style.display = "flex";
            //
            dialogueField2.innerHTML = `<span class="answerOptions" style="display:none;" id="st2Ans1"></span><span class="answerOptions" style="display:block;" id="st2Ans2">${dialogue[1].m}</span><span class="answerOptions" style="display:none;" id="st2Ans3"></span>`;
            document.getElementById("st2Ans2").addEventListener("click",getGameProgress);
        newUser = false;
        return;
    };
    // await universe_backend.getProgress()
    switch(Progress) {
        case 0:
            dialogueField1.style.display = "flex";
            dialogueField1.innerHTML = `<p>${dialogue[0].question}</p>`;
            dialogueField2.style.display = "flex";
            //
            dialogueField2.innerHTML = `<span class="answerOptions" id="st2Ans1">${dialogue[0].answers[0].m}</span><span class="answerOptions" id="st2Ans2"></span><span class="answerOptions" id="st2Ans3">${dialogue[0].answers[1].m}</span>`;
            // Connect Plug Wallet
            document.getElementById("st2Ans1").addEventListener('click', 
            connectToPlug
            )
            document.getElementById("st2Ans3").addEventListener('click', 
            connectToPlug
            )
            break;
        case 1:
            Progress = 2;
            dialogueField1.style.display = "flex";
            dialogueField1.innerHTML = `<p>${dialogue[0].question}</p>`;
            dialogueField2.style.display = "flex";
            //
            dialogueField2.innerHTML = `<span class="answerOptions" style="display:none;" id="st2Ans1"></span><span class="answerOptions" style="display:block;" id="st2Ans2">${dialogue[1].m}</span><span class="answerOptions" style="display:none;" id="st2Ans3"></span>`;
            document.getElementById("st2Ans2").addEventListener("click",getGameProgress);
            break;
        case 2: 
            Progress = 3;
            dialogueField1.innerHTML = `<p>${dialogue[3].question}</p>`;
            dialogueField2.style.display = "flex";
            //
            dialogueField2.innerHTML = `<span class="answerOptions" style="display:none;" id="st2Ans1"></span><span class="answerOptions" style="display:block;" id="st2Ans2">${dialogue[3].answers[0].m}</span><span class="answerOptions" style="display:none;" id="st2Ans3"></span>`;
            document.getElementById("st2Ans2").addEventListener("click",getGameProgress);
            break;
        case 3:  
            dialogueField1.innerHTML = `<p>${dialogue[4].m}</p>`;
            dialogueField2.style.display = "flex";
            //
            dialogueField2.innerHTML = `<span class="answerOptions" style="display:none;" id="st2Ans1"></span><span class="answerOptions" style="display:block;" id="st2Ans2">Pill?</span><span class="answerOptions" style="display:none;" id="st2Ans3"></span>`;
            Progress = 4;
            document.getElementById("st2Ans2").addEventListener("click",getGameProgress);  
            break;
        case 4: 
        dialogueField1.innerHTML = `<p>${dialogue[5].m}</p>`;
        dialogueField2.style.display = "flex";
        //
        dialogueField2.innerHTML = `<span class="answerOptions" style="display:none;" id="st2Ans1"></span><span class="answerOptions" style="display:block;" id="st2Ans2"></span><span class="answerOptions" style="display:none;" id="st2Ans3"></span>`;
        document.getElementById("getNfts").style.display = "block";
        Progress = 5;
        setTimeout(()=>{
            dialogueField1.style.transition = "1s all";
            dialogueField1.style.opacity = "0%"
            setTimeout(() => {
                dialogueField1.style.display = "none";
                dialogueField1.style.display = "none";
            }, 1000);
        },5000)
        break;
    }
}

export { getGameProgress };