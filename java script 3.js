// quiz.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2 // Correct answer is "Paris"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: 1 // Correct answer is "Jupiter"
    },
    {
        question: "What is the square root of 16?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2 // Correct answer is "4"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Albert Einstein", "Isaac Newton", "Nikola Tesla"],
        correctAnswer: 0 // Correct answer is "Charles Babbage"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 2 // Correct answer is "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correctAnswer: 0 // Correct answer is "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is used to style a webpage?",
        options: ["JavaScript", "HTML", "CSS", "PHP"],
        correctAnswer: 2 // Correct answer is "CSS"
    },
    {
        question: "Which HTML element is used for inserting images?",
        options: ["<img>", "<image>", "<src>", "<picture>"],
        correctAnswer: 0 // Correct answer is "<img>"
    },
    {
        question: "Which JavaScript function is used to parse a string as an integer?",
        options: ["parseInt()", "parseFloat()", "toString()", "parseInteger()"],
        correctAnswer: 0 // Correct answer is "parseInt()"
    },
    {
        question: "Which of the following is used to create a comment in JavaScript?",
        options: ["<!-- comment -->", "// comment", "/* comment */", "comment{}"],
        correctAnswer: 1 // Correct answer is "// comment"
    }
    // You can add more questions if needed
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = ''; // Clear previous options

    // Display each option dynamically
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('li');
        optionElement.textContent = option;
        optionElement.onclick = () => handleAnswer(index);
        optionsList.appendChild(optionElement);
    });

    // Hide the 'Next' button initially
    document.getElementById('next-button').style.display = 'none';
}

function handleAnswer(selectedOptionIndex) {
    const question = questions[currentQuestionIndex];
    const optionsList = document.getElementById('options');

    // Increase the score if the answer is correct
    if (selectedOptionIndex === question.correctAnswer) {
        score++;
    }

    // Provide feedback and disable further clicks
    optionsList.querySelectorAll('li').forEach((li, index) => {
        li.onclick = null;  // Disable further clicks
        if (index === question.correctAnswer) {
            li.classList.add('correct'); // Green for correct answer
        } else if (index === selectedOptionIndex) {
            li.classList.add('incorrect'); // Red for incorrect answer
        }
    });

    // Update the score
    document.getElementById('score').textContent = `Score: ${score}`;

    // Show the "Next" button after answering
    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();  // Load next question
    } else {
        showResult(); // Show result when quiz ends
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';  // Hide quiz
    document.getElementById('result').style.display = 'block'; // Show result
    
    const resultMessage = score === questions.length ? 
        'Congratulations! You completed the quiz with full marks.' : 
        `Your score is ${score} out of ${questions.length}.`; 

    document.getElementById('result-message').textContent = resultMessage;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';  // Show quiz
    document.getElementById('result').style.display = 'none';  // Hide result
    document.getElementById('score').textContent = `Score: ${score}`;
    loadQuestion(); // Load the first question
}

// Start the quiz
loadQuestion();
