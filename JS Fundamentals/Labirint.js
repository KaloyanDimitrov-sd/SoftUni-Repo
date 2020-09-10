function getShortestWay(inputArray) {
    let n = inputArray.length - 1;
    let m = inputArray[0].length - 1;
    let i;
    let j;
    let maxNum = null;
 
    if (inputArray[0][0] === 0) {
        inputArray[0][0] = 2;
        getShortestWay(inputArray);
    }

    maxNum = getMaxNumberFromArrays(inputArray);
 
    for (i = 0; i < inputArray.length; i++) {
        j = inputArray[i].indexOf(maxNum);
        if (j !== -1) {
            break;
        }
    }
 
 
 
    if ((i === n && j === m) || inputArray[n][m] === "x") {
        if (maxNum > 1) {
            for (i = 0; i < inputArray.length; i++) {
                j = inputArray[i].indexOf(maxNum);
                if (j !== -1) {
                    inputArray[i][j] = "x";
                    break;
                }
            }
            getShortestWay(inputArray);
        }

        return inputArray;
    }
 
    if (isRightPossible(inputArray, i, j)) {
        inputArray[i][j + 1] = inputArray[i][j] + 1;
        getShortestWay(inputArray);
    } else if (isDownPossible(inputArray, i, j)) {
        inputArray[i + 1][j] = inputArray[i][j] + 1;
        getShortestWay(inputArray);
    } else if (isLeftPossible(inputArray, i, j)) {
        inputArray[i][j - 1] = inputArray[i][j] + 1;
        getShortestWay(inputArray);
    } else if (isUpPossible(inputArray, i, j)) {
        inputArray[i - 1][j] = inputArray[i][j] + 1;
        getShortestWay(inputArray);
    } else {
 
        for (i = 0; i < inputArray.length; i++) {
            j = inputArray[i].indexOf(maxNum);
            if (j !== -1) {
                inputArray[i][j] = 1;
                break;
            }
        }
 
        getShortestWay(inputArray);
    }
}
 
 
function isRightPossible(inputArray, i, j) {
    let m = inputArray[0].length -1;

    if (j < m && inputArray[i][j + 1] === 0) {
        return true;
    } else {
        return false;
    }
}
 
function isLeftPossible(inputArray, i, j) {
    if (j > 0 && inputArray[i][j - 1] === 0) {
        return true;
    } else {
        return false;
    }
}
 
function isDownPossible(inputArray, i, j) {
    let n = inputArray.length - 1;

    if (i < n && inputArray[i + 1][j] === 0) {
        return true;
    } else {
        return false;
    }
}
 
function isUpPossible(inputArray, i, j) {
    if (i > 0 && inputArray[i - 1][j] === 0) {
        return true;
    } else {
        return false;
    }
}
 
function getMaxNumberFromArrays(inputArray) {
    let maxNum = -Infinity;
 
    for (let i = 0; i < inputArray.length; i++) {
 
        if (Array.isArray(inputArray[i])) {
 
            let nestedNum = getMaxNumberFromArrays(inputArray[i]);
 
            if (maxNum < nestedNum) {
                maxNum = nestedNum;
            }
 
        } else {
            if (maxNum < inputArray[i]) {
                maxNum = inputArray[i];
            }
        }
 
    }
 
    return maxNum;
 
}

console.table(getShortestWay([
    [0, 0, 1, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 0]]));
 