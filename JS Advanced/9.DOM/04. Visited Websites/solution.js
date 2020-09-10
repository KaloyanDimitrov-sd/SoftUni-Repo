function solve() {
  let page = document.querySelector("#page1 > .middled");
  page.addEventListener("click", counter);

  function counter(e) {
    let element = e.target;
    if (element.localName === "span") {
      element = element.parentElement;
    }
    let text = element.parentElement.lastElementChild;
    let num = Number(text.textContent.split(" ")[1]) + 1;
    text.textContent = `visited ${num} times`
  }
}