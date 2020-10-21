function solve() {

  let input = document.getElementById("input");
  let arr = input.textContent.split(".");
  let newArr = [];
  let count = 0;
  let text = "";

  for (let i = 0; i < arr.length - 1; i++) {
    if (count === 3) {
      newArr.push(text);
      text = "";
      count = 0;
    }
    text += arr[i] + ".";
    count++;
  }

  if (text.length > 0) {
    newArr.push(text);
  }

  let output = document.getElementById("output");

  for (element of newArr) {
    let p = document.createElement("p");
    p.textContent = element;
    output.appendChild(p);
  }
  
}