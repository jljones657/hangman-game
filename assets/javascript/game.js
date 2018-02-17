window.onload = function() {

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wordSelector = ['cat', 'tree', 'swing', 'around', 'scientist'];
    //var divClass = document.querySelector(".theWord");
    
    

    //Choose a random word from my list of words. Currently functions.
    var randomWord = wordSelector[Math.floor(Math.random()*wordSelector.length)];
    
    
    //Make that word appear as underscores, this also currently functions
    var wordSecret = randomWord.split("");
    var wordPublic = [];
    var userGuess = [];
    var userLives = 10;
    var userKey = "";
    var letterPositions = [];
    var lettersGuessed = [];
    
    for (i = 0; i < wordSecret.length; i++){
        wordPublic.push("_");
    };
    
    console.log(wordSelector);
    console.log(randomWord);
    console.log(wordPublic);
    
    //this logs the key pressed, and userGuess is an array that keeps track of all the letters pressed. This part currently functions
    document.onkeyup = function(event) {
        console.log(event.key);
        userGuess.push(event.key);
        userKey = event.key
        console.log("userKey :" + userKey);
        console.log("userGuess :" + userGuess);
    
            //If the pressed key equals a letter in the wordSecret, it wil change the underscore into the letter. Yay, this part currently works!
        for (var j = 0; j < wordSecret.length; j++){
    
            if (event.key === wordSecret[j]){
    
                wordPublic[j] = event.key;
                document.getElementById("theWord").innerHTML = wordPublic.join(" ");
            }
        }
        //logic for decreasing the userLives, ideally reaching zero and causing the game to be lost. However, it currently counts down no matter what.
        for (i in wordSecret) {
            if (wordSecret[i] === userGuess) {
                letterPositions.push(i);
            }
        }
        console.log(letterPositions)

        if (letterPositions.length <= 0){
            console.log("userLives : " + userLives)
            userLives = (userLives - 1);
            console.log("userLives : " + userLives)
        }
        

                
            
        else {
           for (i = 0; i < letterPositions.length; i++) {
                wordSecret[letterPositions[i]] = userGuess;
                letterPositions=[]
        }
    }

//Check if the letter has been guessed, and is already in the lettersGuessed array, but it doesn't work, as of 2/16
// function checkPastGuesses() {
//     if (userLives > 0 && lettersGuessed.indexOf(userGuess === -1 )){
//         lettersGuessed.push(userGuess);
//         evaluateGuess(userGuess);
// }
        


        document.getElementById("lettersGuessed").innerHTML = userGuess.join(" ");
    };
    
        document.getElementById("theWord").innerHTML = wordPublic.join(" ");
//trying to use the below to grab the amount of tries left, but it currently isn't functioning
        document.getElementById("userLives").innerHTML = userLives.join(" ");
    
    
    
    
    
    
    
    };

// else {
            //     console.log("userLives :" + userLives)
            //     userLives = (userLives - 1);
            // }

                    // for (var k = 0; k < wordPublic.length; k++){
        //     if(wordPublic[k].indexOf(userGuess===-1)){
        //         console.log("userLives :" + userLives)
        //         userLives= (userLives - 1)
        //         console.log("userLives :" + userLives)
        //         }
        //     
