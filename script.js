//TODO - game not restarting properly once completed - starting does not stert the quiz but does start the timer
//TODO find better coding options
//TODO fix HighScores list not numberin

//initialization of variables and arrays
// sets timer value globally
const initTime = 30
//init variable for the user's answer
let uAns = ""
//init variable for the correct ans
let rAns = ""
//init variable for the current question to be called in the pool array (default to 0)
let qNum = 0
//init variable for the remaining seconds on the countdown
let secondsLeft = initTime
//init variable for timerinterval so if cna be accessed outside of the time function
let timerInterval
//init variable for high score initials
let initials = ""

//individual questions in array format | 0 = question | 1 = first answer | 2 = second answer | 3 = third answer | 4 = fourth answer | 5 = int value of the correct answer's position in the array
const q1 = ["How to write an IF statement in JavaScript?", "if i===5 then", "if i = 5", "if (i==5)", "if i=5 then", 3]
const q2 = ["How to write an IF statement for executing some code if i is NOT equal to 5?", "if (i!=5)", "if (i<>5)", "if i=!5 then", "if i<>5", 1]
const q3 = ["How do you create a function in JavaScript?", "function = myFunction()", "function myfunction()", "function:myFunction()", "function-myFunction()", 2]
const q4 = ["How do you call a function named myFunction?", "call myFunction()", "callfunction myFunction()", "call.myFunction()", "myFunction()", 4]

// const q2 = {
//     q: "Why did the chicken cross the road?",
//     1: "To smell the roses.",
//     2: "To find the lost puppy.",
//     3: "To get to the other side.",
//     4: "To escape certain death.",
//     a: 3
// }

// array of possible questions for the quiz
var questions = [q1, q2, q3, q4]
// copy of array to be shuffled.  shuffling allows for a random question selection without selecting duplicates
var pool = [].concat(questions);

// intitializes ui elements
document.getElementById("timer").innerHTML = secondsLeft;
document.getElementById("strBtn").addEventListener("click", startQuiz);
document.getElementById("rstBtn").addEventListener("click", reset);
document.getElementById("hsBtn").addEventListener("click", hsToggle);

function hsToggle() {
    // get the clock
    var hScore = document.getElementById('hScoreCon');

    // get the current value of the clock's display property
    var displaySetting = hScore.style.display;

    // also get the clock button, so we can change what it says
    // var clockButton = document.getElementById('clockButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      hScore.style.display = 'none';
    }
    else {
      // clock is hidden. show it
      hScore.style.display = 'block';
      // change button text
      clockButton.innerHTML = 'Hide clock';
    }
  }

// resets the game.  stops the timer >> resets timer >> adds placeholder text back int.  NOTE:  this is bad code i need to figure out how to revert to placeholder
function reset() {
    clearInterval(timerInterval)
    secondsLeft = initTime
    document.getElementById("timer").innerHTML = secondsLeft;
    document.getElementById("question").innerHTML = "Your question will appear here!";
        document.getElementById("ansBtn1").innerHTML = "Click here to choose this answer!";
        document.getElementById("ansBtn2").innerHTML = "Click here to choose this answer!";
        document.getElementById("ansBtn3").innerHTML = "Click here to choose this answer!";
        document.getElementById("ansBtn4").innerHTML = "Click here to choose this answer!";
}

// shuffles the pool array
function shuffle() {
    var m = pool.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = pool[m];
        pool[m] = pool[i];
        pool[i] = t;
    }
    return pool;
}

//function to start countdown
function startTimer() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      document.getElementById("timer").innerHTML = secondsLeft;
  
      if(secondsLeft === 0) {
        alert("Times Up")
        clearInterval(timerInterval);
        secondsLeft = 20;
      }
  
    }, 1000);
  }

//function to start quiz - starts the coundown >> shuffles the pool array >> pulls the correct answer from the question array >> feeds question into question box and answers to each button >> initializes listening even for buttons >> fires corresponding answer function based on button click
function startQuiz() {
    startTimer()
    console.log("Before: " + pool[0])
    shuffle(pool)
    console.log("After: " + pool[0])
    rAns = pool[qNum][5]
    console.log("Correct Answer: " + rAns)
    document.getElementById("question").innerHTML = pool[qNum][0];
    document.getElementById("ansBtn1").innerHTML = pool[qNum][1];
    document.getElementById("ansBtn2").innerHTML = pool[qNum][2];
    document.getElementById("ansBtn3").innerHTML = pool[qNum][3];
    document.getElementById("ansBtn4").innerHTML = pool[qNum][4];
    document.getElementById("ansBtn1").addEventListener("click", ans1);
    document.getElementById("ansBtn2").addEventListener("click", ans2);
    document.getElementById("ansBtn3").addEventListener("click", ans3);
    document.getElementById("ansBtn4").addEventListener("click", ans4);
}

//follows up with the remaining questions based on loop - checks qNum >> executes copy of startQuiz minus the timer and shuffle functions >> or ending the game by calling tallyScore if all questions have been already asked based on qNum count
function nextQuestion() {
    if (qNum < 4) {
        console.log("question: " + pool[qNum])
        rAns = pool[qNum][5]
        console.log("Correct Answer: " + rAns)
        document.getElementById("question").innerHTML = pool[qNum][0];
        document.getElementById("ansBtn1").innerHTML = pool[qNum][1];
        document.getElementById("ansBtn2").innerHTML = pool[qNum][2];
        document.getElementById("ansBtn3").innerHTML = pool[qNum][3];
        document.getElementById("ansBtn4").innerHTML = pool[qNum][4];
        document.getElementById("ansBtn1").addEventListener("click", ans1);
        document.getElementById("ansBtn2").addEventListener("click", ans2);
        document.getElementById("ansBtn3").addEventListener("click", ans3);
        document.getElementById("ansBtn4").addEventListener("click", ans4);
    } else {
        tallyScore();
    }

}

//sets the score based on the remaining seconds >> informs user game is over, their score and asks for their initials >> adds li to html doc with user input from prompt >> resets the game by calling reset()
function tallyScore() {
    setScore = secondsLeft;
    initials = prompt("COMPLETED! You scored: " + setScore + " Enter your initials for the scoreboard")
    var node = document.createElement('li');
    node.appendChild(document.createTextNode("Player: " + initials + " Score: " + setScore));
    document.querySelector('ul').appendChild(node);
    reset()
}

//  Individual functions for each button.  Sets user answer based on value of button clicked >> comapres to user asnwer to the correct answer (rAns) set in startQuiz/nextQuestion >> if they match notify of correct answer >> increment the question to the next number >> call the nextQuestion function >> if no match found alert user of incorrect answer and time penalty >> increment question number >> decrement time penalty from time remaining  NOTE: bad code - find a way to subtract without using -- x3 >> call next question
function ans1() {
    var uAns = document.getElementById('ansBtn1').value;
    console.log("Selected answer: " + uAns)
    console.log("Comparing " + rAns + " to " + uAns)
    if (uAns == rAns) {
        alert("Correct!")
        qNum++
        console.log(qNum)
        nextQuestion()
    } else {
        alert("Incorrect! You have lost 3 seconds of time!")
        qNum++
        secondsLeft--
        secondsLeft--
        secondsLeft--
        nextQuestion()
        console.log(qNum)
    }
}

function ans2() {
    var uAns = document.getElementById('ansBtn2').value;
    console.log("Selected answer: " + uAns)
    console.log("Comparing " + rAns + " to " + uAns)
    if (uAns == rAns) {
        alert("Correct!")
        qNum++
        console.log(qNum)
        nextQuestion()
    } else {
        alert("Incorrect! You have lost 3 seconds of time!")
        qNum++
        secondsLeft--
        secondsLeft--
        secondsLeft--
        nextQuestion()
        console.log(qNum)
    }
}

function ans3() {
    var uAns = document.getElementById('ansBtn3').value;
    console.log("Selected answer: " + uAns)
    console.log("Comparing " + rAns + " to " + uAns)
    if (uAns == rAns) {
        alert("Correct!")
        qNum++
        console.log(qNum)
        nextQuestion()
    } else {
        alert("Incorrect! You have lost 3 seconds of time!")
        qNum++
        secondsLeft--
        secondsLeft--
        secondsLeft--
        nextQuestion()
        console.log(qNum)
    }
}

function ans4() {
    var uAns = document.getElementById('ansBtn4').value;
    console.log("Selected answer: " + uAns)
    console.log("Comparing " + rAns + " to " + uAns)
    if (uAns == rAns) {
        alert("Correct!")
        qNum++
        console.log(qNum)
        nextQuestion()
    } else {
        alert("Incorrect! You have lost 3 seconds of time!")
        qNum++
        secondsLeft--
        secondsLeft--
        secondsLeft--
        nextQuestion()
        console.log(qNum)
    }
}




// const q2 = {
//     q: "Why did the chicken cross the road?",
//     1: "To smell the roses.",
//     2: "To find the lost puppy.",
//     3: "To get to the other side.",
//     4: "To escape certain death.",
//     a: 3
// }