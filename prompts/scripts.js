let colors = [
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#8AC926"
]

let questions = [
    "What kind of story would it be?",
    "Could it be a poem?",
    "Who would it be about?",
    "How would it start?",
    "When would it take place?",
    "Where would it take place?"
]
showPrompt = () => {
    // Show the prompt screen
    document.getElementById("spinner").style.display="none";
    document.getElementById("app").style.display="block";
}

showSpinner = () => {
    // Show the re-roll spinner screen
    document.getElementById("app").style.display="none";
    document.getElementById("spinner").style.display="block";
}

init = () => {
    document.getElementById("spin").onclick = () => {
        spin();
    }
    newPrompt();
    newQuestions();
}

newPrompt = () => {
    let adjColor = _.sample(colors);
    let nounColor = _.sample(colors);
    do
        nounColor = _.sample(colors);
    while (adjColor == nounColor);
    let myPrompt = getNewPrompt();
    let myAdj = myPrompt.adjective;
    let myNoun = myPrompt.noun;
    document.getElementById("adjective").style.color = adjColor;
    document.getElementById("noun").style.color = nounColor;
    document.getElementById("adjective").innerText = myAdj;
    document.getElementById("noun").innerText = myNoun;
    newQuestions();
}

getNewPrompt = () => {
    return {
        "adjective": _.sample(adjectives),
        "noun": _.sample(nouns)
    }
}

newQuestions = () => {
    let myQuestions = _.sampleSize(questions,2);
    let myTitle = document.getElementById("prompt").innerText;
    document.getElementById("couldyou").innerHTML = `<p>Could you write a story called <strong>${myTitle}</strong>?</p><p>${myQuestions[0]}</p><p>${myQuestions[1]}</p><p>If you want to try again, press <strong>SPIN!</strong>`;
}

spin = () => {
    let myPrompt;
    showSpinner();
    _.times(10, function(i){
        window.setTimeout(function(){
            myPrompt=getNewPrompt();
            let adjColor = _.sample(colors);
            let nounColor = _.sample(colors);
            do
                nounColor = _.sample(colors);
            while (adjColor == nounColor);
            let myAdj = myPrompt.adjective;
            let myNoun = myPrompt.noun;
            document.getElementById("spinnerAdjective").style.color = adjColor;
            document.getElementById("spinnerNoun").style.color = nounColor;
            document.getElementById("spinnerAdjective").innerText = myAdj;
            document.getElementById("spinnerNoun").innerText = myNoun;
            if(i==9) {
                newPrompt();
                showPrompt();
            }
        }, 100*i);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});
