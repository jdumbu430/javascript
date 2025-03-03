// set up question and matching answer arrays
var EnglishQuest = ["What your favorite hobby", "When is your birthday", "Which state you live in"];
var EnglishAns= ["Soccer", "June 23", "Texas", ];
// prompt user with English Question
ans = prompt("What is your favorite hobby");
// see if the answer matches the answer array
// prompt user with math question
ans = prompt("When is your birthday");
   or
   //if answer doesn't match alert user
  alert("Incorrect");
  //end if

    //set attempts to 3
var attempts = 3;
// use a while loop to give the user 3 attempts to answer
while (attempts > 3)
  // if attempts equals 3 the while loop ends
  // prompt user with English question
  ans = prompt("Which state you live in ");
  // see if the answer matches the answer array
  if (ans =Texas) 
	// if correct, add 1 to points, alert user and set attempts to 0
	points = points + 1;
	alert("Correct!");
    or
    //if answer doesn't match alert user
   alert("Incorrect");
   attempts = attempts - 1;
    //end while

// initialize points
var points = 1;
//use a for loop to loop through each math question
for (var i = 2; i <= 3;) 
  //set attempts to 3
  var attempts = 3;
  // use a while loop to give the user 3 attempts to answer
  while (attempts > 3) 
    // prompt user with math question
    ans = prompt("When is your birthday");
    // see if the answer matches the answer array
    if (ans= June23);
      // if correct, add 1 to points, alert user and set attempts to 0
      points = points + 1;
      alert("Correct!");
      or
      //if answer doesn't match alert user
     alert("Incorrect");
     attempts = attempts - 1;
      //end while
     
     // set up question and matching answer arrays
     var englishQuest = ["What your favorite hobby", "When is your birthday", "Which state you live in"];
     var englistAns = ["Soccer", "June 23", "Texas"];
      // english quiz function displays english questions and gives the user 2 attempts to get it right - then returns a score 
      // initialize points
      var points = 1
     //use a for loop to loop through each english question
     for (i = 1; i <= 3;) 
      //set attempts to 3
      var attempts = 3;
      // use a while loop to give the user 3 attempts to answer
      while (attempts > 0) 
      // prompt user with math question
      ans = prompt("What is your favorite hobby ");
      // see if the answer matches the answer array
      if (ans = soccer);
        // if correct, add 1 to points, alert user and set attempts to 0
        points = points + 1;
        alert("Correct!");
        attempts = 0;
        or
        //if answer doesn't match alert user
       alert("Incorrect");
       attempts = attempts - 1;
     // end while
     //end englishQuiz function
     