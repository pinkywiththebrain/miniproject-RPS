//variables
var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"]

var playGame = function() {
  // Ask user for their choice
    var userChoice = window.prompt("Choose R, P, or S")

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length)
  var computerChoice = options[index]

  window.alert("The computer chose " + computerChoice)
  // Game conditions
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!")
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "R")
  ) {
    wins++;
    window.alert("You won!");
  } else {
    losses++;
    window.alert("You lost!");
  }
  
  // Print stats with line breaks
  window.alert("Stats: \nWins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)

  // Ask user to play again
  var playAgain = window.confirm("Play again?")

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame()
  }
};

// Run the game for the first time
playGame();