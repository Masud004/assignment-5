const questions = document.querySelectorAll(".faq-question");

for (const question of questions) {
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;
    const icon = question.parentElement.querySelector(".icon");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "block";
      icon.style.transform = "rotate(180deg)";
    }
  });
}
document.getElementById("home-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
