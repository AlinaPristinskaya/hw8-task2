// digitalHideSeek.js

// Define a function hide that takes in a string as an argument, representing a hiding location.
function hide(location) {
    // Store the location in a local variable hideLocation.
    let hideLocation = location;
  
    // Inside the hide function, define another function seek that returns the hidden location when called.
    function seek() {
      return hideLocation;
    }
  
    // The hide function should return the seek function, creating a closure around hideLocation.
    return seek;
  }
  
  // Call hide with a string argument describing your hiding spot and assign the return value (which is the seek function) to a new variable called startGame.
  const startGame = hide("Under the old oak tree");
  
  // Log the result of calling startGame. This should print your hiding location, demonstrating the concept of a closure.
  console.log(startGame());
  
  // Try logging hideLocation directly from outside of the hide and seek functions.
  // Observe the result and explain why you think this happens, demonstrating your understanding of scope.
  // Logging hideLocation from outside the functions will result in an error because hideLocation is not accessible outside the hide function.
  // This is because hideLocation is defined within the scope of the hide function and is not accessible from the outer scope.
  // It is local to the hide function and cannot be accessed directly from outside.
  // Uncommenting the following line will result in a ReferenceError:
  // console.log(hideLocation);
  