const quizData = [
    {
        english: 'Strawberry',
        swedish: 'jordgubbe'
    },
    {
        english: 'Rye',
        swedish: 'råg'
    },
    {
        english: 'Salmon',
        swedish: 'lax'
    },
    {
        english: 'Traditional',
        swedish: 'traditionell'
    },
    {
        english: 'Produce',
        swedish: 'råvara'
    },
    {
        english: 'Simple, everyday food',
        swedish: 'vardagsmat'
    },
    {
        english: 'Dish',
        swedish: 'maträtt'
    },
    {
        english: 'Plant',
        swedish: 'växt'
    },
    {
        english: 'Variation',
        swedish: 'variation'
    },
    {
        english: 'Climate',
        swedish: 'klimat'
    },
    {
        english: 'Staple',
        swedish: 'bas'
    },
    {
        english: 'Boiled',
        swedish: 'kokt'
    },
    {
        english: 'Mashed potatoes',
        swedish: 'potatismos'
    },
    {
        english: 'Fried potatoes',
        swedish: 'stekt potatis'
    },
    {
        english: 'Potato gratin',
        swedish: 'potatisgratäng'
    },
    {
        english: 'Baked potato',
        swedish: 'bakad potatis'
    },
    {
        english: 'Potato salad',
        swedish: 'potatissallad'
    },
    {
        english: 'New potatoes',
        swedish: 'färskpotatis'
    },
    {
        english: 'Freshly boiled',
        swedish: 'nykokt'
    },
    {
        english: 'Dill',
        swedish: 'dill'
    },
    {
        english: 'Farmer',
        swedish: 'bonde'
    },
    {
        english: 'Sceptical',
        swedish: 'skeptisk'
    },
    {
        english: 'Vodka',
        swedish: 'brännvin'
    },
    {
        english: 'Rye flour',
        swedish: 'rågmjöl'
    },
    {
        english: 'Salt',
        swedish: 'salt'
    },
    {
        english: 'Thin',
        swedish: 'tunn'
    },
    {
        english: 'Pantry',
        swedish: 'skafferi'
    },
    {
        english: 'Tonne, metric tonne',
        swedish: 'ton'
    },
    {
        english: 'Moose park',
        swedish: 'älgpark'
    },
    {
        english: 'Around thirty',
        swedish: 'trettiotal'
    },
    {
        english: 'Stew',
        swedish: 'gryta'
    },
    {
        english: 'Steak',
        swedish: 'stek'
    },
    {
        english: 'Moose meatball',
        swedish: 'älgbulle'
    },
    {
        english: 'Moose burger',
        swedish: 'älgburgare'
    },
    {
        english: 'Beef',
        swedish: 'nötkött'
    },
    {
        english: 'East coast',
        swedish: 'ostkust'
    },
    {
        english: 'West coast',
        swedish: 'västkust'
    },
    {
        english: 'Pickled',
        swedish: 'inlagd'
    },
    {
        english: 'Swedish vinegar',
        swedish: 'ättika'
    },
    {
        english: 'Vinegar',
        swedish: 'vinäger'
    },
    {
        english: 'Baltic herring',
        swedish: 'strömming'
    },
    {
        english: 'Smoked',
        swedish: 'rökt'
    },
    {
        english: 'Smoked Baltic herring',
        swedish: 'böckling'
    },
    {
        english: 'Variant',
        swedish: 'variant'
    },
    {
        english: 'Fermented Baltic herring',
        swedish: 'surströmming'
    },
    {
        english: 'Fermented',
        swedish: 'fermenterad'
    },
    {
        english: 'Taste, flavor',
        swedish: 'smak'
    },
    {
        english: 'Farmed salmon',
        swedish: 'odlad lax'
    },
    {
        english: 'Wild',
        swedish: 'vild'
    },
    {
        english: 'The olden days',
        swedish: 'förr i tiden'
    },
    {
        english: 'Party food, holiday food',
        swedish: 'festmat'
    },
    {
        english: 'Barbeque',
        swedish: 'grillad'
    },
    {
        english: 'Cured',
        swedish: 'gravad'
    },
    {
        english: 'Fever, mania',
        swedish: 'feber'
    },
    {
        english: 'Pick',
        swedish: 'plocka'
    },
    {
        english: 'Pick-your-own',
        swedish: 'självplock'
    },
    {
        english: 'Juice',
        swedish: 'saft'
    },
    {
        english: 'Fresh',
        swedish: 'färsk'
    },
    {
        english: 'Strawberry cake',
        swedish: 'jordgubbstårta'
    },
    {
        english: 'As they are',
        swedish: 'som de är'
    }
];

const quizArr = quizData;

const questC = document.getElementById('questC');
const questionEl = document.getElementById('english');
const ansEl = document.getElementById('swedish');
const submitBtn = document.getElementById('next');
const skipButton = document.getElementById('skipButton');
const wrongAns = document.getElementById('wrongAns');
const modal = document.getElementById('modal');
const buttonDone = document.getElementById('buttonDone');
const helpMeButton = document.getElementById('helpMeButton');
const counter = document.getElementById('counter');

let currentQuiz = 0; 

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

loadQuiz(); 

function loadQuiz() {
    const currentQuizData = quizArr[currentQuiz];

    questionEl.innerText = currentQuizData.english;
    
    counter.innerText = (currentQuiz + 1) + "/" + quizArr.length;
};

submitBtn.addEventListener("click", () => {
    checkAns();
});

ansEl.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkAns();
}
});

skipButton.addEventListener("click", () => {
    const currentQuizData = quizArr[currentQuiz];

    ansEl.value = currentQuizData.swedish;

    checkAns();
});

helpMeButton.addEventListener("click", () => {
    const currentQuizData = quizArr[currentQuiz];
    
    ansEl.value = currentQuizData.swedish;

    ansEl.focus();
});

function checkAns() {
    const currentQuizData = quizArr[currentQuiz];

    if(ansEl.value.toLowerCase() === currentQuizData.swedish) {
        clearField();
        wrongAns.style.visibility = 'hidden';
        currentQuiz++;
        if(currentQuiz < quizArr.length) {
            loadQuiz();
        } else {
            modal.style.display = 'block';
            ansEl.blur();
        }
    } else {
        wrongAns.style.visibility = 'visible';
        ansEl.style.animation = '0.4s error';
        clearField();
    };
};

function clearField() {
    document.getElementById('swedish').value = '';
};

ansEl.addEventListener('animationend', () => {
    ansEl.style.animationName = '';
});

buttonDone.addEventListener("click", () => {
    location.reload();
});





