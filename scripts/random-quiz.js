
// ---------- Data import ---------- 

import mainArr from "./data.js";

let quizArr = mainArr;

// ---------- get html elements ---------- 

const refreshButton = document.getElementById('backToFilter');
const questC = document.getElementById('questC');
const questionEl = document.getElementById('english');
const ansEl = document.getElementById('swedish');
const submitBtn = document.getElementById('next');
const skipButton = document.getElementById('skipButton');
const wrongAns = document.getElementById('wrongAns');
const modal = document.getElementById('modal');
const doneC = document.getElementById('doneContainer');
const buttonDone = document.getElementById('buttonDone');
const helpMeButton = document.getElementById('helpMeButton');
const counter = document.getElementById('counter');

// ---------- set question counter to 0 for start ---------- 

let currentQuiz = 0; 

// ---------- shuffle the array in random order ---------- 

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    
    return array;
};

shuffle(quizArr);

// ---------- take the first 10 elements of the shuffled array to run the random quiz ----------

let randomQuiz = quizArr.slice(0, 10);

// ---------- upon page load, load quiz with the shuffled array starting at question counter number ---------- 

function loadQuiz() {
    const currentQuizData = randomQuiz[currentQuiz];

    questionEl.innerText = currentQuizData.english;
    
    counter.innerText = (currentQuiz + 1) + "/" + randomQuiz.length;
};

loadQuiz();

// ---------- different ways to submit answers ---------- 

submitBtn.addEventListener("click", () => {
    checkAns();
});

refreshButton.addEventListener("click", () => {
    window.location = "https://bassieee.github.io/test.ficka/";
});

ansEl.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkAns();
}
});

skipButton.addEventListener("click", () => {
    const currentQuizData = randomQuiz[currentQuiz];

    ansEl.value = currentQuizData.swedish;

    checkAns();
});

helpMeButton.addEventListener("click", () => {
    const currentQuizData = randomQuiz[currentQuiz];
    
    ansEl.value = currentQuizData.swedish;

    ansEl.focus();
});

// ---------- function to check if the answer is correct ---------- 

function checkAns() {
    const currentQuizData = randomQuiz[currentQuiz];
    var doneCTop = window.pageYOffset + questC.getBoundingClientRect().top;

    if(ansEl.value.toLowerCase() === currentQuizData.swedish) {
        clearField();
        wrongAns.style.visibility = 'hidden';
        currentQuiz++;
        if(currentQuiz < randomQuiz.length) {
            loadQuiz();
        } else {
            modal.style.display = 'block';
            doneC.style.top = doneCTop + 'px';
            ansEl.blur();
        }
    } else {
        wrongAns.style.visibility = 'visible';
        ansEl.style.animation = '0.4s error';
        clearField();
    };
};

// ---------- some other things ---------- 

function clearField() {
    document.getElementById('swedish').value = '';
};

ansEl.addEventListener('animationend', () => {
    ansEl.style.animationName = '';
});

buttonDone.addEventListener("click", () => {
    window.location = "https://bassieee.github.io/test.ficka/";
});
