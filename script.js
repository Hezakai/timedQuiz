var score = 0
const q1 = ["Why did the chicken cross the road?", "To smell the roses.", "To find the lost puppy.", "To get to the other side.", "To escape certain death.", 1]
const q2 = ["Mary had a...?", "Little Lamb.", "Tiny Turtle.", "Silly Snake.", "Brown Bird", 1]

document.getElementById("strBtn").addEventListener("click", startQuiz);
document.getElementById("score").innerHTML = "Current Score: " + score;

function startQuiz() {
document.getElementById("question").innerHTML = q1[0];
document.getElementById("ansBtn1").innerHTML = q1[1];
document.getElementById("ansBtn2").innerHTML = q1[2];
document.getElementById("ansBtn3").innerHTML = q1[3];
document.getElementById("ansBtn4").innerHTML = q1[4];
document.getElementById("ansBtn1").addEventListener("click", ansCheck1);
}

function ansCheck1() {
    uAnswer = 1
    if (uAnswer === q1[5]) {
        console.log("Correct!");
        score++;
        document.getElementById("score").innerHTML = "Current Score: " + score;
    } else {
        console.log("Wrong!")
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