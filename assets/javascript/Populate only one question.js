//Populate one question at a time

var radios = document.querySelectorAll("[type='radio']");

radios.addEventListener('click', function visibility (e) {
    e.target.style.visibility = 'visible';
    if (e.currentTarget != e.target) {
        e.currentTarget.style.display = "none";
    }
    
   
});

document.querySelector('questionAnswerGroup').style.visibility = 'hidden';

radios.addEventListener('click', visibility, true);


var radios = document.querySelectorAll("[type='radio']");

radios.addEventListener('click', function visibility (e) {
    // e.target.style.visibility = 'visible';
    // if (e.currentTarget.parentElement.parentElement.parentElement != e.target) {
        e.currentTarget.parentElement.parentElement.parentElement.style.display = "none";
        e.currentTarget.parentElement.parentElement.parentElement.nextSibling.style.display = "block";
    // }
    
   
});


var radios = document.querySelectorAll("[type='radio']");

radios.addEventListener('click', function visibility (e) {

        e.currentTarget.parentElement.parentElement.parentElement.style.display = "none";
        e.currentTarget.parentElement.parentElement.parentElement.nextSibling.style.display = "block";
   
    
   
});

visibility();

;

}