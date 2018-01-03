var number = 45;

var intervalId;



var questions = [
    {
        question: "You are a Millennial if you were born between?",
        choices: {
            A: '1984-2006',
            B: '1971-1984',
            C: '1997-2007',
            D: '1981-1997'
        },
        correctAnswer: 'D'
    },

    {
        question: "You Get Your News From?",
        choices: {
            A: 'CNN',
            B: 'The New York Times',
            C: 'Whoever posts it first on Facebook',
            D: 'BuzzFeed'
        },
        correctAnswer: 'C'
    },

    {
        question: "What is Your Preferred Social Media Website?",
        choices: {
            A: 'Facebook',
            B: 'Instagram',
            C: 'Twitter',
            D: 'Snapchat'
        },
        correctAnswer: 'D'
    },

    {
        question: "Which of These Hashtags Best Applies to You?",
        choices: {
            A: '#lol',
            B: '#nofilter',
            C: '#turnt',
            D: '#thisisapictureofgirlsnightoutfromlastfriday'
        },
        correctAnswer: 'B'
    },

    {
        question: "What is Your Favorite Channel to Stream Television?",
        choices: {
            A: 'Netflix',
            B: 'Youtube',
            C: 'Hulu',
            D: 'Amazon Video'
        },
        correctAnswer: 'B'
    },

    {
        question: "Who Do You Sing Along to (Alone) in the Car?",
        choices: {
            A: 'Madonna',
            B: 'Tracey Ellis Ross',
            C: 'Mac Miller',
            D: 'The Weekend'
        },
        answerChoice: 'D'
    },

    {
        question: "When a Couple Asks You to Take a Picture of Them on Their Cell Phone, You... ",
        choices: {
            A: 'Take a Selfie',
            B: 'Have no clue where to find the camera',
            C: 'Pretend your taking photos',
            D: 'Give the phone to your 9 year old granddaughter'
        },
        answerChoice: 'A'
    },

    {
        question: "When You Get Your Plate at a Restaurant, You... ",
        choices: {
            A: 'Wait until everyone is served and then begin eating',
            B: 'Discretely take a picture of the gorgeous dish',
            C: 'Post a picture of your food on instagram with no fewer than 20 hashtags',
            D: 'Add a picture of the food to your Snap story'
        },
        correctAnswer: 'C'

    }

];

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

var quizContainer =
document.getElementById('quiz');
var resultsContainer =
document.getElementById('results');
var submitButton = 
document.getElementById('submit');

generateQuiz(questions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var choices;

        for (var i=0; i<questions.length; i++) {
            choices = [];

        for(letter in questions[i].choices) {
            choices.push(
                '<label>'
                + '<input type="radio" name="question'+i+'"value="'+letter+'">'

                + letter + ': '
                +
            questions[i].choices[letter]
                + '</label>'
            );
        }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + 
                '<div class="answers">' + choices.join('') + '</div>'
            );

        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults (questions, quizContainer, resultsContainer) {
        
        var answerContainers = 
        quizContainer.querySelectorAll('.choices');

        var userAnswer = '';
        var numberCorrect = 0;

        for(var i=0; i<questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||
        {}).value;

        if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
            
            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }

         // if answer is wrong or blank
         else{
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// show questions right away
showQuestions(questions, quizContainer);

// on submit, show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

}

        
    






