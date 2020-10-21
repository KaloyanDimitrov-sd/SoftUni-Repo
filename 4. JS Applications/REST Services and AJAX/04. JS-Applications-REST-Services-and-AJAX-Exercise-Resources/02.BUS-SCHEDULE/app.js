function solve() {
    let currentData;
    let currentId = "depot";
    let info = document.getElementsByTagName("span")[0];
    let departButton = document.getElementById("depart");
    let arriveButton = document.getElementById("arrive");

    function depart() {
        departButton.setAttribute("disabled", "true");
        arriveButton.removeAttribute("disabled");

        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then((response) => response.json())
            .then(function (data) {
                currentData = data;
                info.textContent = `Next stop ${currentData.name}`;
            })
    }

    function arrive() {
        arriveButton.setAttribute("disabled", "true");
        departButton.removeAttribute("disabled");
        info.textContent = `Arriving at ${currentData.name}`;
        currentId = currentData.next
    }

    return {
        depart,
        arrive
    };
}

let result = solve();