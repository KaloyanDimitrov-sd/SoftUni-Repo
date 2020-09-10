function solve() {
    let button = document.getElementsByClassName("keys")[0];
    button.addEventListener("click", handlerButton);

    function handlerButton(e) {
        let clickedButton = e.target;
        let expressionOutput = document.getElementById("expressionOutput");

        if (clickedButton.textContent === "=") {
            let array = expressionOutput.textContent.split(" ");
            let result = Number(array[0]);
            for (let i = 1; i < array.length; i += 2) {
                if (array[i + 1] === "") {
                    result = NaN;
                    break;
                }
                if (array[i] === "+") {
                    result += Number(array[i + 1]);
                } else if (array[i] === "-") {
                    result -= Number(array[i + 1]);
                } else if (array[i] === "x") {
                    result *= Number(array[i + 1]);
                } else if (array[i] === "/") {
                    result /= Number(array[i + 1]);
                }
            }

            let resultOutput = document.getElementById("resultOutput");
            resultOutput.textContent = result;
        } else {
            switch (clickedButton.textContent) {
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "0":
                    expressionOutput.textContent += Number(clickedButton.textContent);
                    break;
                case "/":
                case "x":
                case "-":
                case "+":
                    expressionOutput.textContent += " " + clickedButton.textContent + " ";
                    break;
                case ".":
                    expressionOutput.textContent += clickedButton.textContent;
            }

        }
    }

    let clearButton = document.querySelector(".top > .clear");
    clearButton.addEventListener("click", handlerClear);

    function handlerClear() {
        document.getElementById("expressionOutput").textContent = "";
        document.getElementById("resultOutput").textContent = "";
    }
}