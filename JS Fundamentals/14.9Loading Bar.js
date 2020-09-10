function loadingBar(num) {

    function getPercentsFromNum(number) {
        let text = "";

        for (let i = 0; i < number / 10; i++) {
            text += "%";
        }
        return text;
    }

    function getDotsFromNum(number) {
        let text = "";

        for (let i = 0; i < 10 - number / 10; i++) {
            text += ".";
        }
        return text;
    }

    if (num === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        console.log(`${num}% [${getPercentsFromNum(num)}${getDotsFromNum(num)}]`);
        console.log("Still loading...");
    }
}

loadingBar(30);