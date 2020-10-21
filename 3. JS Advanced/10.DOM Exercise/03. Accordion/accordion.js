function toggle() {
    let buttonObj = {
        More: "Less",
        Less: "More"
    }
    let displeyObj = {
        none: "block",
        block: "none"
    }
    let button = document.getElementsByClassName("button")[0];
    button.textContent = buttonObj[button.textContent];
    let extra = document.getElementById("extra");
    if (extra.hasAttribute("style")) {
        extra.style.display = displeyObj[extra.style.display];
    } else {
        extra.setAttribute("style", "display: block");
    }
}