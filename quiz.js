// set up question and matching answer arrays
var EnglishQuest = ["What your favorite hobby", "When is your birthday", "Which state you live in"];
var EnglistAns = ["Soccer", "June 23", "Texas"];
// prompt user with English Question
ans = prompt("What is " + EnglishQuest[0]);
// see if the answer matches the answer array
// prompt user with math question
ans = prompt("What is " + EnglishQuest[0]);
// see if the answer matches the answer array
if (ans == EnglishAns[0]) {
   // if correct, add 1 to points and alert user
   points = points + 1;
   alert("Correct!");
} else {
   // if answer doesn't match alert user
   alert("Incorrect");
} // end if
//set attempts to 3
var attempts = 3;
// use a while loop to give the user 3 attempts to answer
while (attempts > 0) { // if attempts equals 0 the while loop ends
  // prompt user with math question
  ans = prompt("What is " + EnglishQuest[0]);
  // see if the answer matches the answer array
  if (ans == EnglishAns[0]) {
	// if correct, add 1 to points, alert user and set attempts to 0
	points = points + 1;
	alert("Correct!");
	attempts = 0; // setting the attempts to 0 will end the while loop
  } else {
	// if answer doesn't match, alert user and subtract 1 from attempts
	alert("Incorrect");
	attempts = attempts - 1;
  } // end if
} // end while
// initialize points
var points = 0;
//use a for loop to loop through each math question
for (var i = 0; i <= 3; i++) {
  //set attempts to 3
  var attempts = 3;
  // use a while loop to give the user 3 attempts to answer
  while (attempts > 0) {
    // prompt user with math question
    ans = prompt("What is " + EnglishQuest[i]);
    // see if the answer matches the answer array
    if (ans == EnglishAns[i]) {
      // if correct, add 1 to points, alert user and set attempts to 0
      points = points + 1;
      alert("Correct!");
      attempts = 0;
    } else {
      // if answer doesn't match, alert user and subtract 1 from attempts
      alert("Incorrect");
      attempts = attempts - 1;
    } // end if
  } // end while
} // end for
// set up question and matching answer arrays
var EnglishQuest = ["What your favorite hobby", "When is your birthday", "Which state you live in"];
var EnglishAns =  ["Soccer", "June 23", "Texas"];
// math quiz function displays math questions and gives the user 2 attempts to get it right - then returns a score
function EnglidhQuiz() {
  // initialize points
  var points = 0;
  //use a for loop to loop through each math question
  for (i = 0; i <= 3; i++) {
    //set attempts to 3
    var attempts = 3;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with math question
      ans = prompt("What is " + EnglishQuest[i]);
      // see if the answer matches the answer array
      if (ans == EnglishAns[i]) {
        // if correct, add 1 to points, alert user and set attempts to 0
        points = points + 1;
        alert("Correct!");
        attempts = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from attempts
        alert("Incorrect");
        attempts = attempts - 1;
      } // end if
    } // end while
  } // end for
  // return the points variable
  return points;
} // end EnglishQuiz function
