//Initial Data
let currentQuestion = 0;

//Functions
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    document.querySelector(".scoreArea").style.display = "none";
    document.querySelector(".questionArea").style.display = "block";
    document.querySelector(".question").innerHTML = q.question;
    document.querySelector(".options").innerHTML = "";

    let optionsHtml = "";
    for (let i in q.options) {
      optionsHtml += `<div data-op='${i}' class='option'><span>${
        parseInt(i) + 1
      }</span>${q.options[i]}</div>`;
    }
    document.querySelector(".options").innerHTML = optionsHtml;
  } else {
    //acabaram as questões.
  }
}
showQuestion();