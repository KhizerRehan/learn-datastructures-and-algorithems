	(function() {
		'use strict'

		switch (prompt("What is the weather Like?")) {
			case "Rainy":
				break;
				console.log("Bring Umbrella");
			case "Sunny":
				break;
				console.log("Dress Lightly!! Very Hot Today.");
			case "Cloudy":
				console.log("Go Outside Awseome Weather!!");
				break;
			default:
				console.log("Unknown Weather Type");
				break;
		}
	}());