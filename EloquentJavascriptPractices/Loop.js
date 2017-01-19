(function() {
	//IIFE
	'use strict'

	// Note:* Do-While Loop
	// This program will force you to enter a name. It will ask again and again
	// until it gets something that is not an empty string. Applying the !
	// operator will convert a value to Boolean type before negating it, and all
	// strings except "" convert to true. This means the loop continues going
	// round until you provide a name that is not the empty string.
	do {
		var name = prompt("Who Are You!");
	} while (!name);
	console.log(name);

	// Note:* While Loop
	// A statement starting with the keyword while creates a loop. The word
	// while is followed by an expression in parentheses and then a statement,
	// much like if. The loop executes that statement as long as the expression
	// produces a value that is true when converted to Boolean type.
	// 	First,a “counter” variable is created to track the progress of the loop. Then
	// comes a while loop, whose test expression usually checks whether the
	// counter has reached some boundary yet. At the end of the loop body,
	// the counter is updated to track progress.

	var result = 1;
	var counter = 0;
	while (counter < 10) {
		result = result * 2;
		counter = counter + 1;
	}

	// Note:* for Loop
	// The parentheses after a for keyword must contain two semicolons. The
	// part before the first semicolon initializes the loop, usually by defining
	// a variable. The second part is the expression that checks whether the
	// loop must continue. The final part updates the state of the loop after
	// every iteration.

	for (var number = 0; number < 12; number++) {
		console.log(number)
	}

	console.log(number);

}());