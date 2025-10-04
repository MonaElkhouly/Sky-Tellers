// Questions array with options and correct answer
const questions = [
  {
    question: "Why do pilots check the weather before flying?",
    options: ["To choose their favorite color of the sky", "To stay safe and avoid dangers", "To see if birds are flying"],
    answer: "To stay safe and avoid dangers"
  },
  {
    question: "What did the Sun send toward Earth in the story?",
    options: ["A solar flare and particles", "A big balloon", "A rainbow"],
    answer: "A solar flare and particles"
  },
  {
    question: "What happened to Ava’s radio during the solar storm?",
    options: ["It played music loudly", "It crackled and went quiet", "It turned into a flashlight"],
    answer: "It crackled and went quiet"
  },
  {
    question: "Why was the GPS not working properly?",
    options: ["The storm shook the signals", "Ava forgot to turn it on", "The plane was flying upside down"],
    answer: "The storm shook the signals"
  },
  {
    question: "What beautiful lights did Ava and Sam see during the storm?",
    options: ["Fireworks", "Auroras", "Street lamps"],
    answer: "Auroras"
  },
  {
    question: "How did Ava and Sam stay safe during the storm?",
    options: ["They worked as a team and used backups", "They took a nap", "They pressed a magic button"],
    answer: "They worked as a team and used backups"
  }
];

// Current question index
let current = 0;
// Player score
let score = 0;

// DOM elements
const questionEl = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const scoreEl = document.getElementById('score');
const rocket = document.getElementById('rocket');

// Function to load current question
function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  choicesContainer.innerHTML = '';

  // Create buttons for each option
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('choice-btn');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    choicesContainer.appendChild(btn);
  });
}

// Function to check answer
function checkAnswer(selected) {
  const correct = questions[current].answer;

  if(selected === correct) {
    // Increase score
    score += 10;
    scoreEl.textContent = `Score: ${score}`;

    // Trigger rocket animation
    rocket.classList.add('rocket-move');
    setTimeout(() => rocket.classList.remove('rocket-move'), 1000);
  }

  // Move to next question
  current++;
  if(current < questions.length) {
    setTimeout(loadQuestion, 800);
  } else {
    // Quiz finished
    questionEl.textContent = " You finished the Space Quiz!";
    choicesContainer.innerHTML = `<h2>Final Score: ${score}</h2>`;
  }
}

// Initialize first question
loadQuestion();
