
// ---------- Data import ----------

import mainArr from "./data.js";

let filterArr = mainArr;

// ---------- get html elements ---------- 

const refreshFilter = document.getElementById('refreshFilter');
const chooseBook = document.getElementById('chooseBook');
const chooseChapter = document.getElementById('chooseChapter');
const chooseSection = document.getElementById('chooseSection');
const startButton = document.getElementById('start');
const mistake = document.getElementById('mistake');

// ---------- top buttons ---------- 

refreshFilter.addEventListener("click", () => {
    location.reload();
});

// ---------- load book options ----------

function chooseB() {
    let quizArrForBook = filterArr;
    
    let bookArray = quizArrForBook.map(a => a.book);

    let uniqueBooks = [...new Set(bookArray)];

    for(var i = 0; i < uniqueBooks.length; i++) {
        var opt = uniqueBooks[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        chooseBook.appendChild(el);
    };
};

chooseB();

// ---------- set chapter options based on book ----------

chooseBook.addEventListener("input", () => {
    var el = document.createElement("option");
    el.textContent = "Choose chapter";
    el.value = "";
    el.setAttribute("disabled", "");
    el.setAttribute("selected", "");
    
    chooseChapter.innerHTML = '';
    chooseChapter.appendChild(el);
    
    let quizArrForChapter = filterArr;
    let chaptersArray = [];

    for (var i = 0; i < quizArrForChapter.length; i++) {
        if (quizArrForChapter[i].book === chooseBook.value) {
            chaptersArray.push(quizArrForChapter[i].chapter);
        }
    };

    let uniqueChapters = [...new Set(chaptersArray)];

    for(var i = 0; i < uniqueChapters.length; i++) {
        var opt = uniqueChapters[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        chooseChapter.appendChild(el);
    };
});

// ---------- if book value changes, empty the section value ----------

chooseBook.addEventListener("input", () => {
    var el = document.createElement("option");
    el.textContent = "Choose section";
    el.value = "";
    el.setAttribute("disabled", "");
    el.setAttribute("selected", "");
    
    chooseSection.innerHTML = '';
    chooseSection.appendChild(el);
});

// ---------- set section options based on chapter ----------

chooseChapter.addEventListener("input", () => {
    mistake.style.visibility = "hidden";
    mistake.style.animation = "none";
    
    var el = document.createElement("option");
    el.textContent = "Choose section";
    el.value = "";
    el.setAttribute("disabled", "");
    el.setAttribute("selected", "");
    
    chooseSection.innerHTML = '';
    chooseSection.appendChild(el);
    
    let quizArrForSection = filterArr;
    let sectionsArray = [];

    for (var i = 0; i < quizArrForSection.length; i++) {
        if (quizArrForSection[i].book === chooseBook.value && quizArrForSection[i].chapter === chooseChapter.value) {
                sectionsArray.push(quizArrForSection[i].section);
            }
    };

    let uniqueSections = [...new Set(sectionsArray)];

    for(var i = 0; i < uniqueSections.length; i++) {
        var opt = uniqueSections[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        chooseSection.appendChild(el);
    };
});

// ---------- when section value changes, store the selections ----------

chooseSection.addEventListener("input", () => {
    sessionStorage.setItem('storedBook', chooseBook.value);
    sessionStorage.setItem('storedChapter', chooseChapter.value);
    sessionStorage.setItem('storedSection', chooseSection.value);
});

// ---------- at click of start, go to next page if selections are not empty ----------

startButton.addEventListener("click", () => {

    if (chooseSection.value === '') {
        mistake.style.visibility = "visible";
        mistake.innerHTML = "First set filters &#128520";
        mistake.style.animation = "0.4s mistake";
    } else {
        window.location = "https://bassieee.github.io/test.ficka/html/quiz.html";
    }
});

// ---------- reset error on next action ----------

chooseBook.addEventListener("click", () => {
    mistake.style.visibility = "hidden";
    mistake.style.animation = "none";
});

chooseSection.addEventListener("input", () => {
    mistake.style.visibility = "hidden";
    mistake.style.animation = "none";
});






