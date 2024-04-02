// Define the hide function
function hide(location) {
  // Store the hiding location in a local variable
  let hideLocation = location;

  // Define the seek function inside the hide function
  function seek() {
    // Return the hidden location
    return hideLocation;
  }

  // Return the seek function, creating a closure around hideLocation
  return seek;
}

// Call hide with a string argument describing the hiding spot
const startGame = hide("Under the big oak tree");

// Log the result of calling startGame
console.log(startGame()); // This should print "Under the big oak tree"

// Try logging hideLocation directly from outside of the hide and seek functions
console.log(hideLocation); // This will result in a ReferenceError because hideLocation is not defined in this scope

// The hide function creates a closure by returning the seek function, which retains access to the hideLocation variable even after the hide function has finished executing.
// However, hideLocation is defined within the scope of the hide function and is not accessible outside of it.
// Attempting to log hideLocation directly from outside of the hide function results in a ReferenceError because the variable is not defined in that scope.
// This behavior demonstrates the concept of scope in JavaScript, where variables declared within a function are only accessible within that function's scope or within nested functions (in this case, the seek function).
