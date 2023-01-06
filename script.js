let uAns = ""
let rAns = ""
let qNum = 0
let secondsLeft = 20
let timerInterval
let initials = ""
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

var questions = [q1, q2, q3, q4]
var pool = [].concat(questions);

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
        setScore = secondsLeft;
        initials = prompt("COMPLETED! You scored: " + setScore + " Enter your initials for the scoreboard")
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(initials));
        document.querySelector('ul').appendChild(node);
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