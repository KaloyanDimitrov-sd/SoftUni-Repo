function extractEmails(inputArray) {
    for (let element of inputArray){
        if (element === "end") {
            break;
        }
        let text = element;
        let pattern = /\b(?<![\-\.\_])([\da-zA-Z][\w.-]+)?[\w]@(([a-zA-Z][a-zA-Z-]+)?[a-zA-Z]+\.)+([a-zA-Z][a-zA-Z-]+)?[a-zA-Z]+/g;
        let emails = text.matchAll(pattern);
        for (let element of emails) {
            console.log(element[0]);
        }
    }
}

extractEmails([ 'Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.', 'end' ]);