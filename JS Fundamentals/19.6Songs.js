function songs(inputArray) {

    let songs = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = inputArray.shift();
    let typeList = inputArray.pop();

    for (let element of inputArray) {
        let [type, name, time] = element.split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    for (let element of songs) {
        if (typeList === "all") {
            console.log(element.name);
        } else if (typeList === element.type){
            console.log(element.name);
        }

    }


}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);