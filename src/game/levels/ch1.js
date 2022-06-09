// import { universe_backend } from "../../declarations/universe_backend";
// import { dialogue } from "../dialogue.js"

// // Get Level Progress
// async function getGameProgress() {
//     var dialogueField1 = document.getElementById("subText1");
//     var dialogueField2 = document.getElementById("subText2");
//     var st1 = document.getElementById("st2Ans1");
//     var st2 = document.getElementById("st2Ans2");
//     var st3 = document.getElementById("st2Ans3");
//     var allst2ans = document.querySelectorAll('.answerOptions');
//     //
//     const Progress = 1;
//     // await universe_backend.getProgress()
//     switch(Number(Progress)) {
//         case 1:
//         dialogueField1.style.display = "flex";
//         dialogueField1.innerHTML = `<p>${dialogue.prelude.introNotLogged.questions.a}</p>`;
//         dialogueField2.style.display = "flex";
//         dialogueField2.innerHTML = `<span class="answerOptions" id="st2Ans1">${dialogue.baseAnswers.a}</span><span class="answerOptions" id="st2Ans2">${dialogue.baseAnswers.b}</span><span class="answerOptions" id="st2Ans3">${dialogue.baseAnswers.c}</span>`;
//         document.getElementById("st2Ans2").addEventListener('click', () => {
//             window.ic.plug.requestConnect();
//         })
//         break;
//     }
// }

// export { getGameProgress };