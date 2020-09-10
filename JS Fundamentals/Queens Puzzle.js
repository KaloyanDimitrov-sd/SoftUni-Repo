function queensPuzzle(board) {

    let combinations = generateCombinations([0, 1, 2, 3, 4, 5, 6, 7]);
    let j;
    let arr;
    let queens = [];
    let queensCount = 0;
    let result = [];
    let solutions = [];

    for (let element of combinations) {
        for (let i = 0; i < element.length; i++) {
            j = element[i];
            arr = placeAQueen(board, i, j);
            if (Array.isArray(arr)) {
                board = [...arr];
                queensCount = 0;

                for (let index of board) {
                    if (!index.includes("Q")) {
                        break;
                    }
                    queens = index.filter(x => x === "Q");
                    queensCount += queens.length;
                    if (queensCount === 8) {
                        result = getPositionsOfQueens(board);
                        // if (solutions.length === 0) {
                        solutions.push(result);
                        board = [
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0]];

                        // }
                        // if (isResultGood(result, solutions)) {
                        //     solutions.push(result);
                        if (solutions.length === 92) {
                            return solutions;
                        }
                        // }
                    }
                }
            } else {
                board = [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]];
                break;
            }
        }
    }
}

function isResultGood(result, solutions) {
    for (let element of solutions) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 2; j++) {
                if (result[i][j] !== element[i][j]) {
                    return true;
                }
            }
        }
    }

    return false;
}

function placeAQueen(board, i, j) {
    if (board[i][j] === "Q" || board[i][j] === "X") {
        return;
    }
    let newBoard = [...board]
    newBoard[i][j] = "Q";
    for (let a = 0; a < i; a++) {
        if (newBoard[a][j] === "Q") {
            return;
        }
        newBoard[a][j] = "X";
    }
    for (let a = i + 1; a < 8; a++) {
        if (newBoard[a][j] === "Q") {
            return;
        }
        newBoard[a][j] = "X";
    }
    for (let b = 0; b < j; b++) {
        if (newBoard[i][b] === "Q") {
            return;
        }
        newBoard[i][b] = "X";
    }
    for (let b = j + 1; b < 8; b++) {
        if (newBoard[i][b] === "Q") {
            return;
        }
        newBoard[i][b] = "X";
    }
    let x = i;
    let y = j;
    while (x < 7 && y < 7) {
        if (newBoard[x + 1][y + 1] === "Q") {
            return;
        }
        newBoard[x + 1][y + 1] = "X";
        x++;
        y++;
    }
    x = i;
    y = j;
    while (x > 0 && y > 0) {
        if (newBoard[x - 1][y - 1] === "Q") {
            return;
        }
        newBoard[x - 1][y - 1] = "X";
        x--;
        y--;
    }
    x = i;
    y = j;
    while (x > 0 && y < 7) {
        if (newBoard[x - 1][y + 1] === "Q") {
            return;
        }
        newBoard[x - 1][y + 1] = "X";
        x--;
        y++;
    }
    x = i;
    y = j;
    while (x < 7 && y > 0) {
        if (newBoard[x + 1][y - 1] === "Q") {
            return;
        }
        newBoard[x + 1][y - 1] = "X";
        x++;
        y--;
    }
    return newBoard;
}

function getPositionsOfQueens(board) {
    let result = [];
    for (let i = 0; i < 8; i++) {
        let j = board[i].indexOf("Q");
        if (j !== -1) {
            result.push([i, j]);
        }


    }
    return result;
}

function generateCombinations(inputArray) {
    let result = [];

    for (let i = 0; i < inputArray.length; i++) {
        let rest = generateCombinations(inputArray.slice(0, i).concat(inputArray.slice(i + 1)));

        if (!rest.length) {
            result.push([inputArray[i]])
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                result.push([inputArray[i]].concat(rest[j]))
            }
        }
    }
    return result;
}

let result = queensPuzzle([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]])



    console.log(result);


