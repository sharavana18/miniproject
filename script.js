const quizData = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language","High Text Machine Language","Hyperlink Text Mark Language","None"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "CSS is used for?",
        answers: ["Styling the page","Logic functions","User authentication","Database"],
        correct: "Styling the page"
    },
    {
        question: "Which language runs in the browser?",
        answers: ["Python","JavaScript","C++","PHP"],
        correct: "JavaScript"
    },
    {
        question: "Which tag is used for JavaScript?",
        answers: ["<js>","<script>","<javascript>","<style>"],
        correct: "<script>"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    answerButtons.forEach((btn, i) => {
        btn.innerText = q.answers[i];
        btn.style.backgroundColor = "#e0e7ff"; 
        btn.disabled = false;
    });
    nextBtn.style.display = "none";
}

answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        checkAnswer(btn.innerText, btn);
    });
});

function checkAnswer(selected, btn) {
    const q = quizData[currentQuestion];
    answerButtons.forEach(b => b.disabled = true);

    if (selected === q.correct) {
        score++;
        btn.style.backgroundColor = "green";
    } else {
        btn.style.backgroundColor = "red";
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>Your Score: ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Try Again</button>
    `;
}

// initialize
loadQuestion();
