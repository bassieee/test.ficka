
// ---------- Data import ----------

import mainArr from "./data.js";

let filterArr = mainArr;

// ---------- filter.html ---------- 

const refreshFilter = document.getElementById('refreshFilter');
const chooseBook = document.getElementById('chooseBook');
const chooseChapter = document.getElementById('chooseChapter');
const chooseSection = document.getElementById('chooseSection');
const startButton = document.getElementById('start');
const mistake = document.getElementById('mistake');

refreshFilter.addEventListener("click", () => {
    location.reload();
});

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

chooseBook.addEventListener("input", () => {
    var el = document.createElement("option");
    el.textContent = "Choose chapter";
    el.value = "";
    
    chooseChapter.innerHTML = '';
    chooseChapter.appendChild(el);
    chooseChapter.firstElementChild.setAttribute("disabled","selected", "hidden");
    
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

chooseBook.addEventListener("input", () => {
    chooseSection.value = '';
});

chooseChapter.addEventListener("input", () => {
    var el = document.createElement("option");
    el.textContent = "Choose section";
    el.value = "";
    
    chooseSection.innerHTML = '';
    chooseSection.appendChild(el);
    chooseSection.firstElementChild.setAttribute("disabled","selected", "hidden");
    
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

chooseSection.addEventListener("input", () => {
    sessionStorage.setItem('storedBook', chooseBook.value);
    sessionStorage.setItem('storedChapter', chooseChapter.value);
    sessionStorage.setItem('storedSection', chooseSection.value);
});

startButton.addEventListener("click", () => {
    
    if (chooseSection.value === '') {
        mistake.style.visibility = "visible";
        mistake.innerHTML = "First set all filters &#128520";
        mistake.style.animation = "0.4s mistake";
    } else {
        window.location = "https://bassieee.github.io/test.ficka/html/quiz.html";
    }
});

chooseBook.addEventListener("click", () => {
    mistake.style.visibility = "hidden";
});

chooseSection.addEventListener("input", () => {
    mistake.style.visibility = "hidden";
});






