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

init = () => {
    document.getElementById("spin").onclick = () => {
        spin();
    }
    newPrompt();
    newQuestions();
}

newPrompt = () => {
    adjColor = _.sample(colors);
    nounColor = _.sample(colors);
    do
        nounColor = _.sample(colors);
    while (adjColor == nounColor);
    myAdj = _.sample(adjectives);
    myNoun = _.sample(nouns);
    document.getElementById("adjective").style.color = adjColor;
    document.getElementById("noun").style.color = nounColor;
    document.getElementById("adjective").innerText = myAdj;
    document.getElementById("noun").innerText = myNoun;
    
}

newQuestions = () => {
    let myQuestions = _.sampleSize(questions,2);
    let myTitle = document.getElementById("prompt").innerText;
    document.getElementById("couldyou").innerHTML = `<p>Could you write a story called <strong>${myTitle}</strong>?</p><p>${myQuestions[0]}</p><p>${myQuestions[1]}</p><p>If you want to try again, press <strong>SPIN!</strong>`;
}

spin = () => {
    document.getElementById("prompt").style.filter = "blur(4px)";
    _.times(10, function(i){
        window.setTimeout(function(){
            newPrompt();
            if(i==9) {
                document.getElementById("prompt").style.filter = "blur(0px)";
                newQuestions();
            }
        }, 100*i);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});
