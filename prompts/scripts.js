adjectives = [
    "Stormy",
    "Messy",
    "Lucky",
    "Magic",
    "Golden",
    "Terrible",
    "Imaginary",
    "Secret",
    "Lost",
    "Unlucky",
    "Secret",
    "Midnight",
    "Vampire",
    "Royal",
    "Giant",
    "Alien",
    "Invisible",
    "World's Worst",
    "Martian",
    "Clockwork",
    "Haunted",
    "Silly",
    "Phantom",
    "Multi-colored",
    "Wooly",
    "Intergalactic",
    "Ghost",
    "Fake",
    "Imaginary",
    "Wonky",
    "Shrinking",
    "Musical"
]

nouns = [
    "Skateboard",
    "Television",
    "Clock",
    "Robot",
    "Monster",
    "Witch",
    "Cat",
    "Kitten",
    "Puppy",
    "Octopus",
    "Cake",
    "Biscuit",
    "Teacher",
    "Trousers",
    "Birthday",
    "Holiday",
    "Panda",
    "Lunchbox",
    "Bookcase",
    "Library",
    "Pizza",
    "Elephant",
    "Spider",
    "Mouse",
    "Jellyfish"
]

colors = [
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#8AC926",
    "#F20089"

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
    _.times(50, function(i){
        window.setTimeout(function(){
            newPrompt();
          }, 20*i);
    });
}
