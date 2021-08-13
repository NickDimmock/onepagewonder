
colors = [
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#8AC926"
]

init = () => {
    document.getElementById("spin").onclick = () => {
        spin();
    }
    newPrompt();
}

newPrompt = () => {
    adjColor = _.sample(colors);
    nounColor = _.sample(colors);
    do
        nounColor = _.sample(colors);
    while (adjColor == nounColor);
    document.getElementById("adjective").style.color = adjColor;
    document.getElementById("noun").style.color = nounColor;
    document.getElementById("adjective").innerText = _.sample(adjectives);
    document.getElementById("noun").innerText = _.sample(nouns);
}

spin = () => {
    _.times(25, function(i){
        window.setTimeout(function(){
            newPrompt();
          }, 30*i);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});
