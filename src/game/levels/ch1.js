import { universe_backend } from "../../declarations/universe_backend";

// Get Level Progress
async function getGameProgress() {
    var dialogueField1 = document.getElementById("subText1");
    const Progress = await universe_backend.getProgress()
    switch(Number(Progress)) {
        case 1:
        dialogueField1.innerHTML = `<p>Agent, Do you remember your name?</p>`;
        break;
    }
    window.ic.plug.requestConnect()
}

export { getGameProgress };