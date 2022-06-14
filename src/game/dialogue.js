var dialogue = {
    baseAnswers: {
        a: "Thank you..",
        b: "Xodiac?",
        c: "What's going on?"
    },
    prelude : {
        introNotLogged: {
            trys: 0,
            questions: {
                a: "WELCOME BACK, XODIAC...",
                b: ""
            },
        }
    },
}
//
var testD = [
    { m: "Hi!" },
    { m: "This is my new game." },
    { question: "Do you like it?",
     answers: [
        { m: "yes", next: "like_yes" },
        { m: "no", next: "like_no" },
    ]},
    { label: "like_yes", m: "I am happy you like my game!", next: "like_end" },
    { label: "like_no", m: "You made me sad!", next: "like_end" },
    { label: "like_end" },
    { m: "OK, let's change the topic" }
]
//
//     runD = (e) => {
//     var currentLIne = 0;
//     var line = e.target.id
//     if (Number(line) < testD.length) {
//         // Find object with value
//         // display its messgae
//         // que the next Find
//     }
// //
// }

export { dialogue };