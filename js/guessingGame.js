$( document ).ready(function() {
	var winningNumber = generateWinningNumber();
	var maxGuesses = 5;
	var guessesRemaining = maxGuesses;
	var gameWin = false; 
	var playerGuess;

	$('#hint').on('click', provideHint);
	$('#check').on('click', playersGuessSubmission); 
	$('#body2').on('click','button', playAgain); 
	
	function generateWinningNumber(){
		return (Math.round(Math.random() * 99) + 1);
	}
	function playersGuessSubmission(){
		playerGuess = +$('#body1').find('#val').val();
		if(playerGuess > 0 && playerGuess <= 100){
			checkGuess();
			$('#body1').find('#val').val("");
		}
		else {
			$('#body1').find('#gameInfo').text("Please enter a valid numerical entry!");
		}
	}
	//Use this code when checking if the user has guessed correctly.
	function checkGuess(){
		$('#body1').find('#gameInfo').css({ 'color': 'white', 'font-size': '30px' });
		if(guessesRemaining > 0) {
			guessesRemaining--;
			if(playerGuess === winningNumber){
				$('#body1').find('#gameInfo').text("You Got It! - A new game has been started.");
				$('#body1').find('#gameInfo').css({ 'color': 'yellow', 'font-size': '40px' });
				$('#body1').find('#guessesRemain').slideUp().delay(5100).slideDown();
				$('#body2').find('.button').slideUp().delay(5100).slideDown();
				$('#body2').find('a').slideUp().delay(5100).slideDown();
				$('#winimg').slideDown().delay(5000).slideUp();
				gameWin = true;
				playAgain();
			}
			else {
				$('#body1').find('#gameInfo').text(lowerOrHigher(playerGuess));
				showGuessesRemaining();
			}
		}
		if (guessesRemaining === 0) {
			$('#body1').find('#gameInfo').text("Sorry out of guesses! The answer was: " + winningNumber + ".");
			$('#body1').find('#gameInfo').css({ 'color': 'red', 'font-style': 'italic', 'font-size': '35px', 'animation-name': 'fadein', 'animation-iteration-count': '1'});
		}
	}

	function lowerOrHigher(){
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
	function showGuessesRemaining(){
		$('#body1').find('#guessesRemain').text("You have " + guessesRemaining + " guesses remaining.");
	}

	function provideHint(){
		if (guessesRemaining === maxGuesses)  {
		$('#body1').find('#gameInfo').text("Your first guess can't be a hint!");
		}
		else if(guessesRemaining <= (maxGuesses - 1) && guessesRemaining > 1) {
		guessesRemaining--;
		var arr = [];
		for(var i = 0; i <= (guessesRemaining * 2); i++){
			arr.push(Math.round(Math.random() * 99) + 1);
		}
		var temp = Math.round(Math.random() * (guessesRemaining - 2)) + 1;
		arr.splice(temp, temp - 1, winningNumber);
		$('#body1').find('#gameInfo').text("The answer is one of these numbers: " + arr);
		showGuessesRemaining();
		}
		else if (guessesRemaining === 1){
		$('#body1').find('#gameInfo').text("You can't use your last guess on a hint!");
		}
		else {
		$('#body1').find('#gameInfo').text("Sorry you have no more guesses to give!");
		}
	}

	function playAgain(){
		var r = true;
		if(guessesRemaining !== 0){
			r = confirm("Are you sure you want to start a new game?");
		}
		if(r === true) {
				winningNumber = generateWinningNumber();
				guessesRemaining = 5;
				showGuessesRemaining();
				if(gameWin === false) {
					$('#body1').find('#gameInfo').css({ 'color': 'white', 'font-style': 'normal', 'font-size': '30px' });
					$('#body1').find('#gameInfo').text("A new game has been started!");
				}
		}
	}

});

