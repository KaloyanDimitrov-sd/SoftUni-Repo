function movies(inputArray) {

    let arr = [];
    let movieObj = {};
    let moviesArray = [];
    let index, name, director, date;

    class Movies {
        constructor(name) {
            this.name = name;
        }
    }

    for (let element of inputArray) {
        arr = element.split(" ");

        if (arr[0] === "addMovie") {
            arr.shift();
            movieObj = new Movies(arr.join(" "));
            moviesArray.push(movieObj);
        }

        index = arr.indexOf("directedBy");
        if (index >= 0) {
            name = (arr.slice(0, index).join(" "));
            director = (arr.slice(index + 1).join(" "));
            moviesArray.forEach(x => {
                if (x.name === name) {
                    x.director = director;
                }
            });
        }

        index = arr.indexOf("onDate");
        if (index >= 0) {
            name = (arr.slice(0, index).join(" "));
            date = (arr.slice(index + 1).join(" "));
            moviesArray.forEach(x => {
                if (x.name === name) {
                    x.date = date;
                }
            });
        }
    }

    for (let element of moviesArray) {
        if (element.name !== undefined && element.director !== undefined && element.date !== undefined) {
            console.log(JSON.stringify(element));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);