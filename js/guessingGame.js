$( document ).ready(function() {
	//var playerGuess;
	var winningNumber = generateWinningNumber();
	var guessesRemaining = 5;
	var gameWin = false; 

	$('#hint').on('click', provideHint);
	$('#check').on('click', playersGuessSubmission); 
	$('#body2').on('click','button', playAgain); 
	


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
				$('#body1').find('#gameInfo').text(lowerOrHigher(playerGuess));
				$('#body1').find('#guessesRemain').text("You have " + guessesRemaining + " guesses remaining.");
			}
		}
		if (guessesRemaining === 0) {
			$('#body1').find('#gameInfo').text("Sorry out of guesses! The answer was: " + winningNumber + ". Click play again to play.");
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

	function provideHint(){
		if (guessesRemaining === 5)  {
		$('#body1').find('#gameInfo').text("Your first guess can't be a hint!");
		}
		else if(guessesRemaining <= 4 && guessesRemaining > 0) {
		var arr = [];
		for(var i = 0; i <= 3; i++){
			arr.push(Math.round(Math.random() * 99) + 1);
		}
		var temp = Math.round(Math.random() * 2) + 1;
		arr.splice(temp, temp - 1, winningNumber);
		//arr.splice(temp,temp - 1,winningNumber);
		$('#body1').find('#gameInfo').text("The answer is one of these numbers: " + arr);
		}
		else if (guessesRemaining === 1){
		$('#body1').find('#gameInfo').text("You can't use your last guess on a hint!");
		}
		else {
		$('#body1').find('#gameInfo').text("Sorry you have no more guesses to give!");
		}
		//$('#body1').find('#guessesRemain').text("You have " + guessesRemaining + " WOOOOT remaining.");

		//if(guessesRemaining > 0) {
			//guessesRemaining--;
			//var arr = [1 , 2, 3, 4, 5];
			/*for(var i = 1; i <= 4; i++){
				arr.push(Math.round(Math.random() * 99) + 1);
			}*/
			//var temp = Math.round(Math.random() * (arr.length - 2)) + 1; 
			//arr.splice(temp,temp - 1,winningNumber);
			//$('#body1').find('#gameInfo').text("The answer is one of these numbers: " + arr +);
		//}
	}

	function playAgain(){
		winningNumber = generateWinningNumber();
		guessesRemaining = 5;
		if(gameWin === false) {
			$('#body1').find('#gameInfo').text("A new game has been started!");
			$('#body1').find('#guessesRemain').text("You have " + guessesRemaining + " guesses remaining.");
		}
	}

});

