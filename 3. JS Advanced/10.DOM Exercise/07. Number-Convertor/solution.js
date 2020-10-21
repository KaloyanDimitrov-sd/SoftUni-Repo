function solve() {
    let selectMenuTo = document.getElementById("selectMenuTo");
    let newOption = document.createElement("option");
    newOption.setAttribute("value", "binary");
    newOption.textContent = "Binary";
    let newOption2 = document.createElement("option");
    newOption2.setAttribute("value", "hexadecimal");
    newOption2.textContent = "Hexadecimal";
    selectMenuTo.appendChild(newOption);
    selectMenuTo.appendChild(newOption2);
    let convert = document.getElementsByTagName("button")[0];
    convert.addEventListener("click", handler);

    function handler() {
        let method = document.getElementById("selectMenuTo");
        let num = Number(document.getElementById("input").value);
        let result;
        if (method.value === "binary") {
            result = num.toString(2);
        } else {
            result = num.toString(16).toUpperCase();
        }
        let resultOutput = document.getElementById("result");
        resultOutput.value = result;
    }
}