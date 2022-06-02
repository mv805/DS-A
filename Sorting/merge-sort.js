function merge(arr, p, q, r) {

    //assumption is arr is sorted from p to q, and from q+1 to r
    let n1 = q - p + 1;
    let n2 = r - q;

    let L = [];
    let R = [];

    for (let i = 0; i < n1; i++) {
        L[i] = arr[i + p];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[(j + q) + 1];
    }

    let Lindex = 0;
    let Rindex = 0;
    let k = p;

    while (k <= r) {

        if (L[Lindex] <= R[Rindex]) {
            arr[k] = L[Lindex];
            Lindex++;
        } else {
            arr[k] = R[Rindex];
            Rindex++;
        }
        k++;

        if (Lindex === n1 || Rindex === n2) {
            break;
        }
    }

    while (Rindex !== n2) {
        arr[k] = R[Rindex];
        Rindex++;
        k++;
    }

    while (Lindex !== n1) {
        arr[k] = L[Lindex];
        Lindex++;
        k++;
    }
}

function mergeSort(arr, p, r) {

    if (p >= r) {
        return;
    }

    let q = Math.floor((r + p) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, (q + 1), r);
    merge(arr, p, q, r);

}

let testArray = [2, 5, 4, 7, 1, 3, 2, 6];
let testArray2 = [3, 41, 52, 26, 38, 57, 9, 49];
let testArray3 = [24, 25, 6, 22, 4, 4, 20, 20, 19, 18, 11];

mergeSort(testArray, 0, testArray.length - 1);
console.log(testArray);

mergeSort(testArray2, 0, testArray2.length - 1);
console.log(testArray2);

mergeSort(testArray3, 0, testArray3.length - 1);
console.log(testArray3);