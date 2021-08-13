
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
    document.getElementById("prompt").style.filter = "blur(4px)";
    _.times(10, function(i){
        window.setTimeout(function(){
            newPrompt();
            if(i==9) {
                document.getElementById("prompt").style.filter = "blur(0px)";
            }
        }, 100*i);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});
