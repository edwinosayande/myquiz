const populate = () => {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show questions;
        let element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;
        
        // show choices
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++){
            let element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }
        showProgress();
    }
};

const guess = (id, guess) => {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

const showProgress = () => {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById('progress');
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

const showScores = () => {
    let gameOverHtml = "<h1>Result<h1>";
    console.log(quiz, quiz.score)
    gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
    let element = document.getElementById('quiz');
    element.innerHTML = gameOverHtml;
}


let questions = [
    new Question('what is the name of the largest city in Nigeria', ['lagos', 'kano', 'jos', 'gombe'], 'lagos'),
    new Question('what is the name of the capital city of Nigeria', ['lagos', 'kano', 'abuja', 'gombe'], 'abuja'),
    new Question('what is the name of the oldest largest city in Nigeria', ['benin', 'Ibadan', 'jos', 'gombe'], 'Ibadan'),
    new Question('Nigeria got independence in', ['1976', '1983', '1956', '1960'], '1960'),
    new Question('The first Nigeria Military coup was carried out in', ['1966', '1963', '1967', '1959'], '1966'),
];
let quiz = new Quiz(questions);

populate();