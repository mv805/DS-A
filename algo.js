let array = [5, 2, 4, 6, 1, 3];
let array2 = [31, 41, 59, 26, 41, 58];


console.log(array2);
insertionHighToLow(array2);
console.log(array2);


function insertionLowToHigh(array){

    let key;
    let i;

    for (let j = 1; j < array.length; j++) {
        key = array[j];//1
        i = j - 1;//3
        while ((i >= 0) && (array[i] > key)) {
            array[i + 1] = array[i];
            i -= 1;
        }
        array[i + 1] = key;
    }
}

function insertionHighToLow(array){

    let key;
    let i;

    for (let j = 1; j < array.length; j++) {//2
        key = array[j];//4
        i = j - 1;//1
        while ((i >= 0) && (array[i] < key)) {
            array[i + 1] = array[i];
            i -= 1;
        }
        array[i + 1] = key;
    }
}