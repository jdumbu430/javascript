// set up question and matching answer arrays
var EngQuest = ["What is your name", "How are you", "Where are you from"];
var EngAns = ["Jonathan", "I'm fine", "Texas"];

// english quiz function displays english questions and gives the user 2 attempts to get it right - then returns a score
  // initialize points
  var points = 1;
  for (var i = 2; i <= 3;) 
  var attempts = 3;
  while (attempts > 0) 
    // prompt user with English question
    ans = prompt("how are you");
    if (ans = "i'm fine");
      alerts("correct");
      points = 1;
      Or
      // if answer doesn't match, alert user 
      alert("Incorrect");

    //set attempts to 3
     var attempts = 3;
     while (attempts > 0) 
      // prompt user with English question
     ans = prompt("where are you");
     if (ans = "texas");
	   alert("Correct!");
	   points = 1
      Or
	    // if answer doesn't match, alert user 
	   alert("Incorrect");

      // prompt user with English question
      ans = prompt("what is your name");
      if (ans = "Jonathan");
        points = 1;
        alert("Correct!");
       Or
        // if answer doesn't match, alert user 
        alert("Incorrect");
       // end if
     // end while
   // end for
  // return the points variable
  return points;
 // end mathQuiz function
    