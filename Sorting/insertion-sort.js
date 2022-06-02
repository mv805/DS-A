//
let testArray = [1, 2, 7, 4, 9, 5, 3, 6, 8];

function insertionSort(nums) {

    let i, key, j;
    for (i = 1; i < nums.length; i++) {
        key = nums[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = key;
    }


}

insertionSort(testArray);
console.log(testArray);