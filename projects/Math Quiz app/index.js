const questionEl = document.getElementById('question');
const inputBtnEl = document.getElementById('inputBtn');
const formSecEl = document.getElementById('formSec');
const scoreEl = document.getElementById('score');
let StoreAnswer;
let score = localStorage.getItem(parseInt('score'));



const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generaQuestion = () => {
    const randomNumber1 = generateRandomNumber(1, 10);
    const randomNumber2 = generateRandomNumber(1, 10);
    const questionType = generateRandomNumber(1, 4);
    let firstNumber;
    let secondNumber;
    if (randomNumber1 > randomNumber2 && questionType > 2) {
        firstNumber = randomNumber1;
        secondNumber = randomNumber2;
    } else {
        firstNumber = randomNumber2;
        secondNumber = randomNumber1;
    }
    let question;
    let answer;

    switch (questionType) {
        case 1:
            question = `Q. What is ${firstNumber} Multiply by ${secondNumber}?`
            answer = firstNumber * secondNumber;
            break;
        case 2:
            question = `Q. What is ${firstNumber} Added by ${secondNumber}?`
            answer = firstNumber + secondNumber;
            break;
        case 3:
            question = `Q. What is ${firstNumber} Divided by ${secondNumber}?`
            answer = firstNumber / secondNumber;
            break;
        case 4:
            question = `Q. What is ${firstNumber} Subtract from ${secondNumber}?`
            answer = firstNumber - secondNumber;
            break;
    }
    return { question, answer };
}

const showAnswer = () => {
    const { question, answer } = generaQuestion()
    questionEl.innerText = question;
    scoreEl.innerText = score;
    StoreAnswer = answer;
}
showAnswer();

const checkAnswer = (event) => {
    event.preventDefault();
    const formData = new FormData(formSecEl);
    const userAnswer = +formData.get("result")

    if (userAnswer === StoreAnswer) {
        score += 1;
        Toastify({
            text: `You are Right and your score is ${score}`,
            className: "info",
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                color: "black",
            }
        }).showToast();
    } else {
        score -= 1;
        Toastify({
            text: `You are wrong and your score is ${score}`,
            className: "info",
            gravity: "bottom",
            position: "center",
            style: {
                background: "red",
            }
        }).showToast();
    }
    scoreEl.innerText = score;
    event.target.reset();
    showAnswer();
    localStorage.setItem("score", score);
}