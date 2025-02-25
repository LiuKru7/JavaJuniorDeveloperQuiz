document.addEventListener('DOMContentLoaded', () => {
  const introSection = document.getElementById('intro');
  const quizSection = document.getElementById('quiz');
  const resultsSection = document.getElementById('results');
  const nameInput = document.getElementById('nameInput');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const questionContainer = document.getElementById('questionContainer');
  const checkAnswerBtn = document.getElementById('checkAnswerBtn');
  const nextBtn = document.getElementById('nextBtn');
  const scoreDisplay = document.getElementById('score');
  const currentQuestionSpan = document.getElementById('currentQuestion');
  const totalQuestionsSpan = document.getElementById('totalQuestions');
  const timerDisplay = document.getElementById('timer');

  const TOTAL_QUESTIONS = 10;
  const TIME_PER_QUESTION = 45; // seconds
  let shuffledQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let hasAnswered = false;
  let timer = null;
  let userName = '';
  let windowFocused = true;
  let selectedTopic = 'java'; // Default topic

  // Track window focus/blur events to detect if user leaves the page
  window.addEventListener('blur', () => {
    windowFocused = false;
    if (!hasAnswered && quizSection.classList.contains('hidden') === false) {
      checkAnswer(true, 'You left the page! Time expired.');
    }
  });

  window.addEventListener('focus', () => {
    windowFocused = true;
  });

  function startTimer() {
    let timeLeft = TIME_PER_QUESTION;
    timerDisplay.textContent = timeLeft;
    timerDisplay.classList.remove('warning');

    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      if (timeLeft <= 10) {
        timerDisplay.classList.add('warning');
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
        if (!hasAnswered) {
          checkAnswer(true); // Force check answer when time runs out
        }
      }
    }, 1000);
  }

  function clearTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  function initializeQuiz() {
    // Get selected topic questions
    const topicQuestions = selectedTopic === 'java' ? quizQuestions : htmlQuizQuestions;

    // Update page title to match the selected topic
    document.querySelector('header h1').textContent = selectedTopic === 'java' ?
        'Java Junior Developer Quiz' : 'HTML & CSS Junior Developer Quiz';

    shuffledQuestions = shuffleArray([...topicQuestions]).slice(0, TOTAL_QUESTIONS);
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsSpan.textContent = TOTAL_QUESTIONS;
    displayCurrentQuestion();
  }

  function displayCurrentQuestion() {
    hasAnswered = false;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const question = shuffledQuestions[currentQuestionIndex];

    // Create HTML for the question and options with proper escaping for HTML tags
    let optionsHTML = '';
    for (let i = 0; i < question.options.length; i++) {
      // Escape < and > characters to properly display HTML tags in options
      const optionText = question.options[i].replace(/</g, '&lt;').replace(/>/g, '&gt;');
      optionsHTML += `
        <label class="option">
          <input type="radio" name="answer" value="${i}">
          ${optionText}
        </label>
      `;
    }

    questionContainer.innerHTML = `
      <div class="question">
        <p><strong>Question ${currentQuestionIndex + 1}:</strong> ${question.question}</p>
        <div class="options">
          ${optionsHTML}
        </div>
      </div>
    `;

    checkAnswerBtn.style.display = 'block';
    nextBtn.style.display = 'none';

    // Start the timer for the new question
    startTimer();
  }

  function checkAnswer(timeOut = false, customMessage = null) {
    if (hasAnswered) return;
    clearTimer();

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer && !timeOut) {
      alert('Please select an answer');
      startTimer(); // Restart timer if no answer selected
      return;
    }

    hasAnswered = true;
    const selectedIndex = selectedAnswer ? parseInt(selectedAnswer.value) : -1;
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

    if (customMessage) {
      feedbackDiv.textContent = customMessage;
    } else {
      feedbackDiv.textContent = timeOut ?
          'Time\'s up! The correct answer is shown in green.' :
          (isCorrect ? 'Correct!' : 'Incorrect. The correct answer is shown in green.');
    }

    questionContainer.appendChild(feedbackDiv);

    checkAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'block';
  }

  function showResults() {
    clearTimer();
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    const percentage = (score / TOTAL_QUESTIONS) * 100;
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
      Congratulations, ${userName}!<br>
      Your final score is ${score} out of ${TOTAL_QUESTIONS} (${percentage.toFixed(1)}%).<br>
      ${message}
    `;
  }

  startBtn.addEventListener('click', () => {
    userName = nameInput.value.trim();
    if (!userName) {
      alert('Please enter your name to start the quiz');
      return;
    }

    // Get the selected topic
    selectedTopic = document.querySelector('input[name="topic"]:checked').value;

    introSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    initializeQuiz();
  });

  checkAnswerBtn.addEventListener('click', () => checkAnswer(false));

  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < TOTAL_QUESTIONS) {
      displayCurrentQuestion();
    } else {
      showResults();
    }
  });

  restartBtn.addEventListener('click', () => {
    resultsSection.classList.add('hidden');
    introSection.classList.remove('hidden');
    nameInput.value = userName; // Keep the user's name for convenience
  });

  // Handle page visibility change (for browsers that support it)
  if (document.hidden !== undefined) {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && !hasAnswered && quizSection.classList.contains('hidden') === false) {
        checkAnswer(true, 'You switched tabs or minimized the window! Time expired.');
      }
    });
  }
});