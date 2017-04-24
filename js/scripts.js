confirm("Are you ready to play?")
var age = parseInt(prompt("What's your age"));

if(age < 13) {
    alert("If you are under the age of 13, you are allowed to play! However, we take no responsibilty for your actions within this game.");
}
else {
    alert("PLAY ON!")
}
alert("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

alert("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?")

if (userAnswer === "yes") {
    alert("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else {
    alert("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

var feedback = parseInt(prompt("Rate our game 1-10"));
if (feedback >= 8) {
    alert("Thank you! We should race at the next concert!");
}
else {
    alert("I'll keep practicing coding and racing.");
}
