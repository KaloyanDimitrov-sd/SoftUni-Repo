function attachEvents() {
    let loadButton = document.getElementById("btnLoad");
    let phonebook = document.getElementById("phonebook");
    loadButton.addEventListener("click", loadPhonebook);
    createButton = document.getElementById("btnCreate");
    createButton.addEventListener("click", createContact);
    phonebook.addEventListener("click", deleteContact);

    function createLi(person, phone, key) {
        let li = document.createElement("li");
        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.setAttribute("id", key);
        li.textContent = `${person}: ${phone}`;
        li.appendChild(btn)
        phonebook.appendChild(li);
    };

    function loadPhonebook() {
        let forDelete = document.querySelectorAll("#phonebook > li");
        forDelete.forEach((x) => x.remove());
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then((response) => response.json())
            .then(function (data) {
                for (let key in data) {
                    let person = data[key].person;
                    let phone = data[key].phone
                    createLi(person, phone, key);
                }
            });
    };

    function createContact() {
        let person = document.getElementById("person").value;
        let phone = document.getElementById("phone").value;

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`, {
            method: 'post',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ person, phone })
        })
            .then(() => loadPhonebook())

        let person1 = document.getElementById("person");
        let phone1 = document.getElementById("phone");
        person1.value = "";
        phone1.value = "";
    };

    function deleteContact(e) {
        let currentContact = e.target;
        if (currentContact.localName !== "button") {
            return;
        };

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${currentContact.id}.json`, { method: "delete" })
            .then(() => loadPhonebook())
    }
}

attachEvents();