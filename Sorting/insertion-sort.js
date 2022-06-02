
let testArray = [ 18, 23, 11, 2, 18, 7, 6, 14, 9, 11 ];

function insertionSort(nums) {

    let i, key, j;
    
    for (i = 1; i < nums.length; i++) {

        key = nums[i];
        j = i - 1;

        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j--;
        }

        nums[j + 1] = key;
    }


}

insertionSort(testArray);
console.log(testArray);