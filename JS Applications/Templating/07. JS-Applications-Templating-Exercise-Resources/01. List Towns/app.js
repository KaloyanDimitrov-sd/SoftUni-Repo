(function () {
    let btnLoad = document.getElementById("btnLoadTowns");
    let input = document.getElementById("towns");
    let divRoot = document.getElementById("root");
    btnLoad.addEventListener("click", loadList);

    function loadList() {
        while (divRoot.hasChildNodes()) {
            divRoot.removeChild(divRoot.lastChild);
        };

        let arr = input.value.split(", ");

        fetch("./template.hbs")
            .then(r => r.text())
            .then(template => {
                let templateHTML = Handlebars.compile(template);
                let resultHTML = templateHTML({ arr });
                divRoot.innerHTML = resultHTML;
            });

        input.value = "";

    };
})();