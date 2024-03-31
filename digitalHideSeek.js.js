
function hide(location) {
    
    let hideLocation = location;
  
    
    function seek() {
      return hideLocation;
    }
  
    
    return seek;
  }
  
  
  const startGame = hide("Under the old oak tree");
  
  
  console.log(startGame());

  

  // console.log(hideLocation);
  