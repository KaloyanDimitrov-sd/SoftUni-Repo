let stopName = document.getElementById("stopName");
let buses = document.getElementById("buses");

function getInfo() {
    let arr = document.querySelectorAll("#buses li");
    arr.forEach(x => x.remove());
    let input = document.getElementById("stopId").value;

    fetch(`https://judgetests.firebaseio.com/businfo/${input}.json`)
        .then(function (response) {
            if (response.status >= 400) {
                throw new TypeError("Error");
            }
            return response.json();
        })
        .then(function (data) {
            stopName.textContent = data.name;

            for (let key in data.buses) {
                let li = document.createElement("li");
                li.textContent = `Bus ${key} arrives in ${data.buses[key]}`;
                buses.appendChild(li);
            }
        })
        .catch(function(error) {
            stopName.textContent = error.message;
        })
};