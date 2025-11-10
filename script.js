document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Respuestas correctas
  const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "b"
  };

  let score = 0;
  const form = event.target;
  const total = Object.keys(correctAnswers).length;

  for (let key in correctAnswers) {
    const answer = form[key].value;
    if (answer === correctAnswers[key]) score++;
  }

  const resultDiv = document.getElementById("result");
  const scoreText = document.getElementById("scoreText");
  scoreText.textContent = `Obtuviste ${score} de ${total} respuestas correctas.`;

  form.classList.add("hidden");
  resultDiv.classList.remove("hidden");
});

document.getElementById("retryBtn").addEventListener("click", function() {
  document.getElementById("quizForm").reset();
  document.getElementById("quizForm").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
});