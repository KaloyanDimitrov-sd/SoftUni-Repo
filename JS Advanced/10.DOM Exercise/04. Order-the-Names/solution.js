function solve() {
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", handler);

    function handler() {
        let name = document.getElementsByTagName("input")[0].value;
        let firstLetter = name[0].toUpperCase().charCodeAt(0) - 65;
        let li = document.getElementsByTagName("li")[firstLetter];
        name = String.fromCharCode(firstLetter + 65) + name.slice(1).toLowerCase();
        if (li.innerHTML.length > 0) {
            li.innerHTML += ", " + name;
        } else {
            li.innerHTML = name;
        }

        document.getElementsByTagName("input")[0].value = ""

    }
}