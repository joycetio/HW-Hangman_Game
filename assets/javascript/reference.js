var wordList = ["dragon", "puppy", "panda", "koala", "lion"];
var chosenWord = ""; 
var lettersInChosenWord = []; 
var numBlanks = 0; 
var blanksAndSuccesses = []; 
var wrongGuesses = []; 

var winCounter = 0; 
var lossCounter = 0; 
var numGuesses = 10; 

function startGame() {
	numGuesses = 10; 
	blanksAndSuccesses = []; 
	wrongGuesses = []; 

	chosenWord = wordList[Math.floor(Math.random() * wordList.length)]; 
	lettersInChosenWord = chosenWord.split(""); 
	numBlanks = lettersInChosenWord.length; 
	console.log(chosenWord);
	console.log(numBlanks)

	for( var i = 0; i < numBlanks; i++){
		blanksAndSuccesses.push("_")
	}
	console.log(blanksAndSuccesses); 

	document.getElementById("letters").innerHTML = blanksAndSuccesses.join(" "); 
	document.getElementById("guessRemain").innerHTML = "Guesses Remaining: " + numGuesses; 

};

startGame(); 

function matchLetters() { 

	var lettersInWord = false; 
	
	for (var i = 0; i < numBlanks.length; i++) {
		if (chosenWord[i] === letter) {
			lettersInWord = true; 
		}
	}

}

matchLetters(); 

document.onkeyup = function(events) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
	console.log("this is the letter that was typed: ", letterGuessed); 
	matchLetters(letterGuessed); 
}





