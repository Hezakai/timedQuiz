let uAns = ""
let rAns = ""
let qNum = 0
let secondsLeft = 20
let timerInterval
let initials = ""
const q1 = ["Why did the chicken cross the road?", "To smell the roses.", "To find the lost puppy.", "To get to the other side.", "To escape certain death.", 3]
const q2 = ["Mary had a...?", "Little Lamb", "Tiny Turtle", "Silly Snake", "Brown Bird", 1]
const q3 = ["Vincent van Gogh cut off his?", "Finger", "Ear", "Nose", "Foot", 2]
const q4 = ["What is the color of an emerald?", "Red", "Yellow", "Blue", "Green", 4]

var questions = [q1, q2, q3, q4]
var array = [].concat(questions);

document.getElementById("timer").innerHTML = secondsLeft;
document.getElementById("strBtn").addEventListener("click", startQuiz);
document.getElementById("rstBtn").addEventListener("click", reset);

function reset() {
    clearInterval(timerInterval)
    secondsLeft = 20
    document.getElementById("timer").innerHTML = secondsLeft;
    document.getElementById("question").innerHTML = "Your question will appear here!";
        document.getElementById("ansBtn1").innerHTML = "Click here to choose this answer!";
        document.getElementById("ansBtn2").innerHTML = "Click here to choose this answer!";
        document.getElementById("ansBtn3").innerHTML = "Click here to choose this answer!";
        document.getElementById("ansBtn4").innerHTML = "Click here to choose this answer!";
}

// function picker() {
//     rando = questArr[Math.floor(Math.random() * questArr.length)];
// }

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

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


function startQuiz() {
    startTimer()
    console.log("Before: " + array[0])
    shuffle(array)
    console.log("After: " + array[0])
    rAns = array[qNum][5]
    console.log("Correct Answer: " + rAns)
    document.getElementById("question").innerHTML = array[qNum][0];
    document.getElementById("ansBtn1").innerHTML = array[qNum][1];
    document.getElementById("ansBtn2").innerHTML = array[qNum][2];
    document.getElementById("ansBtn3").innerHTML = array[qNum][3];
    document.getElementById("ansBtn4").innerHTML = array[qNum][4];
    document.getElementById("ansBtn1").addEventListener("click", ans1);
    document.getElementById("ansBtn2").addEventListener("click", ans2);
    document.getElementById("ansBtn3").addEventListener("click", ans3);
    document.getElementById("ansBtn4").addEventListener("click", ans4);
}

function nextQuestion() {
    if (qNum < 4) {
        console.log("question: " + array[qNum])
        rAns = array[qNum][5]
        console.log("Correct Answer: " + rAns)
        document.getElementById("question").innerHTML = array[qNum][0];
        document.getElementById("ansBtn1").innerHTML = array[qNum][1];
        document.getElementById("ansBtn2").innerHTML = array[qNum][2];
        document.getElementById("ansBtn3").innerHTML = array[qNum][3];
        document.getElementById("ansBtn4").innerHTML = array[qNum][4];
        document.getElementById("ansBtn1").addEventListener("click", ans1);
        document.getElementById("ansBtn2").addEventListener("click", ans2);
        document.getElementById("ansBtn3").addEventListener("click", ans3);
        document.getElementById("ansBtn4").addEventListener("click", ans4);
    } else {
        setScore = secondsLeft;
        initials = prompt("COMPLETED! You scored: " + setScore + " Enter your initials for the scoreboard")
        console.log(initials)
        reset()
    }

}

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
    } else {
        alert("Wrong!")
    }
}

function ans3() {
    var uAns = document.getElementById('ansBtn3').value;
    console.log("Selected answer: " + uAns)
    console.log("Comparing " + rAns + " to " + uAns)
    if (uAns == rAns) {
        alert("Correct!")
    } else {
        alert("Wrong!")
    }
}

function ans4() {
    var uAns = document.getElementById('ansBtn4').value;
    console.log("Selected answer: " + uAns)
    console.log("Comparing " + rAns + " to " + uAns)
    if (uAns == rAns) {
        alert("Correct!")
    } else {
        alert("Wrong!")
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