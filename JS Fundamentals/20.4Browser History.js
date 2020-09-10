function browserHistory(inputObj, inputArr) {

    let browser = inputObj["Browser Name"];

    for (let element of inputArr) {
        if (element === "Clear History and Cache") {
            inputObj = {
                "Browser Name": browser,
                "Open Tabs": [],
                "Recently Closed": [],
                "Browser Logs": [],
            };
        }

        let arr = element.split(" ");
        let [command, tab] = [arr[0], arr[1]];

        if (command === "Open") {
            inputObj["Open Tabs"].push(tab);
            inputObj["Browser Logs"].push(element);
        }

        if (command === "Close") {
            let i = inputObj["Open Tabs"].indexOf(tab);
            if (i !== -1) {
                inputObj["Open Tabs"].splice(i, 1);
                inputObj["Recently Closed"].push(tab);
                inputObj["Browser Logs"].push(element);
            }
        }
    }

    console.log(inputObj["Browser Name"]);
    console.log(`Open Tabs: ${inputObj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${inputObj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${inputObj["Browser Logs"].join(", ")}`);
}

browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);