(() => {

    let src = document.getElementById("cat-template").innerHTML;
    let templateHTML = Handlebars.compile(src);
    let resultHTML = templateHTML({ cats });
    let allCats = document.getElementById("allCats");
    allCats.innerHTML = resultHTML;

    allCats.addEventListener ("click", showHideStatus);

    function showHideStatus(e) {
        let btn = e.target;

        if (btn.localName !== "button") {
            return;
        };

        let divClassStatus = btn.parentElement.getElementsByClassName("status")[0];
        divClassStatus.style.display = divClassStatus.style.display === "none" ? "block": "none";
        btn.innerHTML = btn.innerHTML === "Show status code" ? "Hide status code": "Show status code";
    };
})();