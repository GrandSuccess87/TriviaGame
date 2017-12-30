var number = 45;

var intervalId;

// var questions = [
//     {
//         question: "Lorem Ipsum question1",
//         choices: ["Answer", "Answer", "Answer",],
//         answer: 2
//     },
// ]

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        alert("Time is Up!");
        nextQuestion();

    }
}


function stop() {
    clearInterval(intervalId);
}




// function quizQuestions() {
    
//            for (var i = 0; i < questions.length; i++) {
//                $("#quiz").append(
//                 "<div class='question'>" + questions[i].question + "</div>" +
//                 "<form action=''>" +  
//                "<input type='radio' class='answerChoice'>"+ questions[i].choices[0]+ "</div>" +
//                 "<input type='radio' class='answerChoice'>"+ questions[i].choices[1]+ "</div>" +
//                 "<input type='radio' class='answerChoice'>"+ questions[i].choices[2]+ "</div>" + "</form>");
    
//             }
//           }

function nextQuestion() {
    number = 45;
    run();
    decrement();
}

run();


