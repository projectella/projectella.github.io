const numElement = document.querySelector('#locknum');
const hintElement = document.querySelector('#hint');
const guessElement = document.querySelector('#guess');
const screenElement = document.querySelector('#lockscreen');
const mainElement = document.querySelector('#main');


let questions = [
    ['Name of a city', 'paris', 1],
    ['5 letters', 'dntil', 2],
    ['Name of a song', 'every time around', 3],
    ['Name of a place', 'jungfrau', 4]
];
let currentQuestion;

guessElement.addEventListener('keyup', () => {
    if (guessElement.value.trim().toLowerCase() === currentQuestion[1]) {
        nextQuestion();
    }
}, false);

function terminate() {
    screenElement.classList.add('hide');
    mainElement.classList.remove('hide');
}

function nextQuestion() {
    if (questions.length) {
        currentQuestion = questions.shift();
        hintElement.innerText = currentQuestion[0];
        numElement.innerText = currentQuestion[2];
        guessElement.value = '';
    } else {
        terminate();
        localStorage.setItem('completed', true);
    }
}

if (localStorage.getItem('completed')) {
    terminate();
} else {
    nextQuestion();
}
