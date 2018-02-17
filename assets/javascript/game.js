window.onload = function() {

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wordSelector = ['cat', 'tree', 'swing', 'around', 'scientist'];
    //var divClass = document.querySelector(".theWord");
    
    
    //empty array to store guesses
    
    
    
    //Choose a random word from my list of words
    var randomWord = wordSelector[Math.floor(Math.random()*wordSelector.length)];
    
    
    //Make that word appear as underscores
    var wordSecret = randomWord.split("");
    var wordPublic = [];
    var userGuess = [];
    var guessesLeft = 10;
    
    for (i = 0; i < wordSecret.length; i++){
        wordPublic.push("_");
    };
    
    console.log(wordSelector);
    console.log(randomWord);
    console.log(wordPublic);
    
    document.onkeyup = function(event) {
        console.log(event.key);
        userGuess.push(event.key);
        console.log(userGuess);
    
        for (var j = 0; j < wordSecret.length; j++){
    
            if (event.key === wordSecret[j]){
    
                wordPublic[j] = event.key;
                document.getElementById("theWord").innerHTML = wordPublic.join(" ");
    
            } else {
                guessesLeft--;
            }
        }
        document.getElementById("lettersGuessed").innerHTML = userGuess.join(" ");
    };
    
        document.getElementById("theWord").innerHTML = wordPublic.join(" ");
    
    
    };
