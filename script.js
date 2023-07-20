function rollDice() {
    let diceType = document.getElementById("dice-type").value;
    let results = "";
  
    if (diceType === "d6") {
      results = Math.floor(Math.random() * 6) + 1;     //  for testing results = Math.floor(Math.random() * 8) + 0;
      if (results >= 7) {
        console.error("too high");
      }

      else if (results <= 0) {
        console.error("too low");

      }
    } else if (diceType === "d10") {
      results = Math.floor(Math.random() * 10) + 1;   //  for testing results = Math.floor(Math.random() * 12) + 0;
      
      if (results >= 11) {
        console.error("too high");
      }
  
      else if (results <= 0) {
        console.error("too low");
  
    }
  }


  
    document.getElementById("results").innerHTML = results;
  }
  
    document.getElementById("roll-button").addEventListener("click", rollDice);   // from MDN 



  
  