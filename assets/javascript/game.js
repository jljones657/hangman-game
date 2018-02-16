window.onload = function() {

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordSelector = ['cat', 'tree', 'swing', 'around', 'scientist'];
var divClass = document.querySelector(".theWord");


//empty array to store guesses



//Choose a random word from my list of words
var randomWord = wordSelector[Math.floor(Math.random()*wordSelector.length)];
divClass.innerHTML = randomWord;

//Make that word appear as underscores
wordSecret = randomWord.split("");
wordPublic = [];

for (i = 0; i < wordSecret.length; i++){
	wordPublic.push("_");
}

console.log(wordSelector)
console.log(randomWord)
console.log(wordPublic)

}
