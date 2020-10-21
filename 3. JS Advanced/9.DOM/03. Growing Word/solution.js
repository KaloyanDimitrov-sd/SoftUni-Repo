function growingWord() {
  let exercise = document.querySelector("#exercise > p");
  let colors = {
    blue: "green",
    green: "red",
    red: "blue"
  }
  if (exercise.hasAttribute("style")) {
    let fontSize = exercise.style["font-size"];
    let px = Number(fontSize.slice(0, fontSize.length - 2)) * 2;
    exercise.setAttribute("style", `color: ${colors[exercise.style.color]}; font-size: ${px}px`);

  } else {
    exercise.setAttribute("style", "color: blue; font-size: 2px");
  }


}