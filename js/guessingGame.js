$( document ).ready(function() {
	//var playerGuess;
	var winningNumber = generateWinningNumber();
	var guessesRemaining = 5;
	var gameWin = false; 

	$('#body1').on('click','button', playersGuessSubmission); 
	$('#body2').find('button').on('click', playAgain);

	function generateWinningNumber(){
		return (Math.round(Math.random() * 99) + 1);
	}
	function playersGuessSubmission(){
		checkGuess(+$('#body1').find('#val').val());
		//playerGuess = ;
		$('#body1').find('#val').val("");
		
	}
	//Use this code when checking if the user has guessed correctly.
	function checkGuess(playerGuess){
		if(guessesRemaining > 0) {
			guessesRemaining--;
			if(playerGuess === winningNumber){
				$('#body1').find('label').text("You Got It! - A new game has been started.");
				gameWin = true;
				playAgain();
			}
			else {
				$('#body1').find('label').text(lowerOrHigher(playerGuess) + "   You have " + guessesRemaining + " guesses remaining.");
			}
		}
		if (guessesRemaining === 0) {
			$('#body1').find('label').text("Sorry out of guesses! The answer was: " + winningNumber + ". Click play again to play.");
		}
	}

	function lowerOrHigher(playerGuess){
		if(Math.abs(winningNumber - playerGuess) >= 30) {
			return "Your guess is ICE COLD!";
		}
		else if(Math.abs(winningNumber - playerGuess) >= 20) {
			return "Your guess is VERY COLD!";
		}
		else if(Math.abs(winningNumber - playerGuess) >= 10) {
			return "Your guess is COLD!";
		}
		else if(Math.abs(winningNumber - playerGuess) >= 5) {
			return "Your guess is WARM!";
		}
		else {
			return "Your guess is HOT!";
		}
	}

	function playAgain(){
		winningNumber = generateWinningNumber();
		guessesRemaining = 5;
		if(gameWin === false) {
			$('#body1').find('label').text("A new game has been started! You have " + guessesRemaining + " guesses remaining.");
		}
	}
	/* **** Global Variables **** 
	// try to elminate these global variables in your project, these are here just to start.


	// **** Guessing Game Functions **** 

	
	// Fetch the Players Guess

	

	// Determine if the next guess should be a lower or higher number



	// Check if the Player's Guess is the winning number 


	// Create a provide hint button that provides additional clues to the "Player"

	function provideHint(){
		// add code here
	}

	/* **** Event Listeners/Handlers ****  */

});

