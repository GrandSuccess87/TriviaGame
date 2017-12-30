var number = 45;

var intervalId;

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


function nextQuestion() {
    number = 45;
    run();
    decrement();
}