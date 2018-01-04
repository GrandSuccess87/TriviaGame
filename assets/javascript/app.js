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
        correctAnswer: 'D'
    },

    {
        question: "When a Couple Asks You to Take a Picture of Them on Their Cell Phone, You... ",
        choices: {
            A: 'Take a Selfie',
            B: 'Have no clue where to find the camera',
            C: 'Pretend your taking photos',
            D: 'Give the phone to your 9 year old granddaughter'
        },
        correctAnswer: 'A'
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
        // stop();
        alert("Time is Up!");
        reset();
       

    }
}

function reset () {
    number = 45;
    run();
    decrement();

}

function stop() {
    clearInterval(intervalId);
}


run();

//Select HTML Tags and store references to the elements in variables

var quizContainer =
document.getElementById('quiz');
var resultsContainer =
document.getElementById('results');
var submitButton = 
document.getElementById('submit');

//Populate one question at a time


//Display the quiz right away

generateQuiz(questions, quizContainer, resultsContainer, submitButton);

//Create the generateQuiz function

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        //Create a space to store HTML output and answer choices
        var output = [];
        var choices;

        //For each question store a list of answer choices
        for (var i=0; i<questions.length; i++) {
            choices = [];

        //For each available answer add an HTML radio button
        for(letter in questions[i].choices) {
            choices.push(
                '<label>' +'<br>'
                + '<input type="radio" name="question'+i+'"value="'+letter+'">'
                
                + letter + ': '
                +
            questions[i].choices[letter]
                + '</label>'
            );
        }
        
        //Using Template Literals
        // choices.push(
        //     `<label>
        //       <input type="radio" name="question${questionNumber}" value="${letter}">
        //       ${letter} :
        //       ${currentQuestion.answers[letter]}
        //     </label>`
        //   );
        // }
        //Add this question and its answers to the output

            output.push(
                '<div class="questionAnswerGroup" style="display: none;">'+

                '<div class="question">' + questions[i].question + '</div>'
                + 
                '<div class="answers">' + choices.join('') + '</div>'
                +
                '</div>' 

                
            );

        }

        //Combine the output list into one string of HTML and put on the page
        quizContainer.innerHTML = output.join('');
    

 

    $("[type='radio']").click(function(e){
        $(e.currentTarget).parent().parent().parent().hide();
        $(e.currentTarget).parent().parent().parent().next().show();
    })

    $($(".questionAnswerGroup")[0]).show();
    
}

    // $(".questionAnswerGroup").css({
    //      e.currentTarget.parentElement.parentElement.parentElement.style.display = "none";
    //         e.currentTarget.parentElement.parentElement.parentElement.nextSibling.style.display = "block";
    //   });

    function showResults (questions, quizContainer, resultsContainer) {
         
    // Gather answer containers from quiz

        var answerContainers = 
        quizContainer.querySelectorAll('.answers');

    // Keep track of user's answers

        var userAnswer = '';
        var numberCorrect = 0;
        var numberIncorrect = 0;
        var numberUnanswered = 0;

    // For each question find the answer selected

        for(var i=0; i<questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||
        {}).value;

        if(userAnswer===questions[i].correctAnswer){
            
            // add to the number of correct answers
            numberCorrect++;

        
            
            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }

        // if answer is wrong
        if(userAnswer !=questions[i].correctAnswer){
            // add to the number of correct answers
            numberIncorrect++;

            // color the answers red
            answerContainers[i].style.color = 'red';
        }
         // if answer is blank
         else{
             // add to number of unanswered
             numberUnanswered++;

        }
    }

    // show number of correct answers out of total
    // resultsContainer.innerHTML = numberCorrect + ' out of ' + questions.length;

    // shower number of correct, incorrect, and unanswered questions

    $("#show-number").html("<h2>" + number + "</h2>");
    $("#quiz").html("<h2>" + 'All Done, Heres How You Did!!' + "</h2>");
    
    $("#resultsCorrect").html("<h2>" + 'Correct Answers:' + numberCorrect + "</h2>");
    $("#resultsIncorrect").html("<h2>" + 'Incorrect Answers:' + numberIncorrect + "</h2>");
    $("#resultsUnanswered").html("<h2>" + 'Unanswered:' + numberUnanswered + "</h2>");
    $("#startOver").html("<h2>" + 'Start Over?!' + "</h2>");

    $("#submit").hide();
    


    // resultsContainer.innerHTML = "<h2>" + 'Correct Answers:' + numberCorrect + "</h2>"; 
    // resultsContainer.innerHTML = "<h3>" + 'Incorrect Answers:' + numberIncorrect + "</h3>";
    

}

// show quiz right away
showQuestions(questions, quizContainer);

// on submit, show results

submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
    stop();
  
   
}

}

   //Need to restart timer after user selects an answer
   //restart timer after time=0
   //Have radio button fill in once selected
   //Highlight answer choices when hovered over
   //Add text to html to say if answer is correct or incorrect
   //Display get results on last question Ommit
   //When user clicks show results Complete
   //update html to say All done, here's how you did! Complete
   //correct answers: '' Complete
   //incorrect answers:''Complete
   //unanswered: '' Complete
   //Start Over?     Complete
    






