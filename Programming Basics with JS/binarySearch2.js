function binarySearch(array, num) {
    if (array.length === 1) {
        return num === array[0];
    }
 
    let middleIndex = Math.floor(array.length / 2);
 
    let slice;
    if (num < array[middleIndex]) {
        slice = array.slice(0, middleIndex);
    } else {
        slice = array.slice(middleIndex);
    }    
 
    return binarySearch(slice, num);
}