function matchPhoneNumber(text) {

    let pattern = /\B\+359([ -])2()\1[0-9]{3}()\1[0-9]{4}\b/g;

    let validPhone;
    let validPhones = [];

    while ((validPhone = pattern.exec(text)) !== null) {
        validPhones.push(validPhone[0]);
    }

    console.log(validPhones.join(", "));

}

matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");