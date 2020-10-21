function solve() {
  let ul = document.getElementsByClassName("quiz-step step1 current")[0];
  let ul1 = document.getElementsByClassName("quiz-step step1 current")[1];
  let ul2 = document.getElementsByClassName("quiz-step step1 current")[2];
  let correctAnswers = 0;
  let answersObj = { q1: "2", q2: "4", q3: "2" };
  ul.addEventListener("click", handler);
  ul1.addEventListener("click", handler);
  ul2.addEventListener("click", handler);

  function handler(e) {
    let answer = e.target;
    while (answer.localName !== "li") {
      answer = answer.parentElement
    }

    if (answer.class === "question") {
      return;
    } else {
      let questionNumber = "q" + answer.parentElement.firstElementChild.firstElementChild.firstElementChild.textContent.split(" ")[1][1];
      console.log(questionNumber);
      if (answer.attributes["data-quizindex"].value === answersObj[questionNumber]) {
        correctAnswers++;
      }
      let section = answer.parentElement.parentElement;
      section.setAttribute("style", "display: none");

      if (questionNumber === "q3") {
        let results = document.getElementById("results");
        results.setAttribute("style", "display: block");

        if (correctAnswers === 3) {
          results.firstElementChild.firstElementChild.textContent = "You are recognized as top JavaScript fan!"
        } else {
          results.firstElementChild.firstElementChild.textContent = `You have ${correctAnswers} right answers`
        }
        return;
      }

      nextSection = section.nextElementSibling
      nextSection.setAttribute("style", "display: block");
    }
  }
}
