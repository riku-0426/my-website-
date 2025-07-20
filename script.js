function checkAnswer(questionNumber, button, isCorrect) {
  const result = document.getElementById("result" + questionNumber);
  const buttons = button.parentElement.querySelectorAll("button");

  // すでに回答済みなら処理しない
  if (result.textContent !== "") return;

  if (isCorrect) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Wrong answer.";
    result.style.color = "red";
  }

  // すべてのボタンを無効化
  buttons.forEach(btn => btn.disabled = true);
}
