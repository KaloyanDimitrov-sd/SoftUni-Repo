function registerError(username, password) {
    const regex = /^\w*$/;
    let error = false;
    let errorMessage = [];

    if (username.length < 5) {
        error = true;
        errorMessage.push({message: "Name is too short"});
    };

    if (username.length > 30) {
        error = true;
        errorMessage.push({message: "Name is too long"});
    };

    if (!regex.test(username)) {
        error = true;
        errorMessage.push({message: "Username should consist only English letters and digits"});
    };

    if (!regex.test(password)) {
        error = true;
        errorMessage.push({message: "Password should consist only English letters and digits"});
    };

    if (password.length < 5 ) {
        error = true;
        errorMessage.push({message: "Password is too short"});
    };

    return { error, errorMessage };
};

function createCubeError(name, description, imageUrl, difficultyLevel) {
    const regex = /^[\w*\s*]*$/;
    const urlRegex = /^https?:\/\//;
    let error = false;
    let errorMessage = [];

    if (name.length < 5) {
        error = true;
        errorMessage.push({message: "Name is too short"});
    };

    if (name.length > 30) {
        error = true;
        errorMessage.push({message: "Name is too long"});
    };

    if (!regex.test(name)) {
        error = true;
        errorMessage.push({message: "Username should consist only English letters and digits"});
    };

    if (description.length < 10) {
        error = true;
        errorMessage.push({message: "Description should consist only English letters and digits"});
    };

    if (description.length > 200) {
        error = true;
        errorMessage.push({message: "Description cannot be longer than 200 symbols"});
    };

    if (!regex.test(description)) {
        error = true;
        errorMessage.push({message: "Description should consist only English letters and digits"});
    };

    if (!urlRegex.test(imageUrl)) {
        error = true;
        errorMessage.push({message: "Please fill a valid address"});
    };

    if (Number(difficultyLevel) < 1 || Number(difficultyLevel) > 6) {
        error = true;
        errorMessage.push({message: "Difficulty must be an integer value between 1 and 6"});
    };

    if (Number.isInteger(difficultyLevel)) {
        error = true;
        errorMessage.push({message: "Difficulty level is not an integer value"});
    };

    return { error, errorMessage };
};

function loginError(username, password) {
    
}

module.exports = {
    registerError,
    createCubeError
};