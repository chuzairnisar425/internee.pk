const quizData = [{
    question: "Programming language is a set of?",
    a: "English words",
    b: "English words and symbols",
    c: "English words and numbers",
    d: "English words, numbers and symbols",
    correct: "d",
},
{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "HTML stands for?",
    a: "Hypertext Markup Language",
    b: "HyperText Market Language",
    c: "HighText Markup Language",
    d: "High Transfer Model Language",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Constant Style Sheet",
    b: "Cascading Style Sheet",
    c: "Cascading Simple Sheet",
    d: "Computer Coding Sheet",
    correct: "b",
},
{
    question: "Which of the following is not a programming language?",
    a: "HTML",
    b: "CSS",
    c: "Java",
    d: "Python",
    correct: "a",
},
{
    question: "Which of the following is a server site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "PHP",
    correct: "d",
}
];

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()

const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> You've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);