document.addEventListener('DOMContentLoaded', () => {
  const introSection = document.getElementById('intro');
  const quizSection = document.getElementById('quiz');
  const resultsSection = document.getElementById('results');
  const nameInput = document.getElementById('nameInput');
  const startBtn = document.getElementById('startBtn');
  const questionContainer = document.getElementById('questionContainer');
  const checkAnswerBtn = document.getElementById('checkAnswerBtn');
  const nextBtn = document.getElementById('nextBtn');
  const scoreDisplay = document.getElementById('score');
  const currentQuestionSpan = document.getElementById('currentQuestion');
  const totalQuestionsSpan = document.getElementById('totalQuestions');

  const TOTAL_QUESTIONS = 10; 
  let shuffledQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let hasAnswered = false;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function initializeQuiz() {
    shuffledQuestions = shuffleArray([...quizQuestions]).slice(0, TOTAL_QUESTIONS);
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsSpan.textContent = TOTAL_QUESTIONS;
    displayCurrentQuestion();
  }

  function displayCurrentQuestion() {
    hasAnswered = false;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const question = shuffledQuestions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
      <div class="question">
        <p><strong>Question ${currentQuestionIndex + 1}:</strong> ${question.question}</p>
        <div class="options">
          ${question.options.map((option, index) => `
            <label class="option">
              <input type="radio" name="answer" value="${index}">
              ${option}
            </label>
          `).join('')}
        </div>
      </div>
    `;

    checkAnswerBtn.style.display = 'block';
    nextBtn.style.display = 'none';
  }

  function checkAnswer() {
    if (hasAnswered) return;

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      alert('Please select an answer');
      return;
    }

    hasAnswered = true;
    const selectedIndex = parseInt(selectedAnswer.value);
    const correctIndex = shuffledQuestions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) score++;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
      if (index === correctIndex) {
        option.classList.add('correct');
      } else if (index === selectedIndex && !isCorrect) {
        option.classList.add('incorrect');
      }
    });

    document.querySelectorAll('input[name="answer"]').forEach(input => {
      input.disabled = true;
    });

    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackDiv.textContent = isCorrect ? 'Correct!' : 'Incorrect. The correct answer is shown in green.';
    questionContainer.appendChild(feedbackDiv);

    checkAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'block';
  }

  function showResults() {
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    const name = nameInput.value;
    const percentage = (score / shuffledQuestions.length) * 100;
    let message;
    
    if (percentage >= 90) {
      message = "Excellent work!";
    } else if (percentage >= 75) {
      message = "Good job!";
    } else if (percentage >= 50) {
      message = "Not bad, keep studying!";
    } else {
      message = "You might want to review the material.";
    }

    scoreDisplay.innerHTML = `
      Congratulations, ${name}!<br>
      Your final score is ${score} out of ${shuffledQuestions.length} (${percentage.toFixed(1)}%).<br>
      ${message}
    `;
  }

  startBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
      alert('Please enter your name to start the quiz');
      return;
    }

    introSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    initializeQuiz();
  });

  checkAnswerBtn.addEventListener('click', checkAnswer);

  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      displayCurrentQuestion();
    } else {
      showResults();
    }
  });
});