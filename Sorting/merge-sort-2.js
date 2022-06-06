let testArray = [2, 5, 4, 7, 1, 3, 2, 6];
let testArray2 = [3, 41, 52, 26, 38, 57, 9, 49];
let testArray3 = [24, 25, 6, 22, 4, 4, 20, 20, 19, 18, 11];

function merge(a, b) {
    const c = []

    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }

    //if we still have values, let's add them at the end of `c`
    while (a.length) {
        c.push(a.shift())
    }
    while (b.length) {
        c.push(b.shift())
    }

    return c
}

function mergeSort(arr) {

    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let arrayLeft = arr.slice(0, mid);
    let arrayRight = arr.slice(mid, arr.length);
    let leftSorted = mergeSort(arrayLeft);
    let rightSorted = mergeSort(arrayRight);
    return merge(leftSorted, rightSorted);
}

let ar = [1, 3, 5, 7];
console.log(ar.slice(0, 2));

let sortedArray = mergeSort(testArray3);
// console.log(testArray2);
// let mid = Math.floor(testArray2.length / 2);
// console.log(mid);
// let arrayLeft = testArray2.slice(0, mid);
// let arrayRight = testArray2.slice(mid, testArray2.length);
// console.log(arrayLeft);
// console.log(arrayRight);

// let mergedArray = merge(arrayLeft, arrayRight);
// console.log(mergedArray);
