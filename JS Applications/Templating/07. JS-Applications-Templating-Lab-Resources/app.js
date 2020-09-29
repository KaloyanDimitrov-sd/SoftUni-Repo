(function () {
    let divContacts = document.getElementById("contacts");
    
    Promise.all([
        fetch("./template.hbs").then(r => r.text()),
        fetch("./contacts.json").then(r => r.json())
    ]).then(([template, contacts]) => {
        let templateHTML = Handlebars.compile(template);
        let resultHTML = templateHTML({ contacts });
        divContacts.innerHTML = resultHTML;
    }).then(() => {
        divContacts.addEventListener("click", showDetails);
    });

    function showDetails(e) {
        let currentBtn = e.target;

        if (currentBtn.localName !== "button") {
            return;
        };

        let details = currentBtn.parentElement.querySelector(".details");
        
        if (details.style.display === "none") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    };
})();