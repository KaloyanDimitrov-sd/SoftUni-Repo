(() => {

    fetch("./template.hbs").then(r => r.text())
        .then(template => {
            let templateHTML = Handlebars.compile(template);
            let resultHTML = templateHTML({ monkeys });
            let divClassMonkeys = document.getElementsByClassName("monkeys")[0];
            divClassMonkeys.innerHTML = resultHTML;
        })
})();