function binSearch(arr, val) {
    var upperBound = arr.length[i] - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < val) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

function insertionsort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let temp = nums[i]
        while (j >= 0 && nums[j] > temp) {
          nums[j + 1] = nums[j]
          j--
        }
        nums[j+1] = temp
      }
      return nums;

}
function dispArr(arr) {
for (var i = 0; i < arr.length; ++i) {
console.log(arr[i] + " ");
if (i % 2 == 1) {
console.log("\nnums");

}
}
if (i % 2 != 0) {
    console.log("\n");     
}
 }
 var nums = [];
 for (var i = 0; i < 10; ++i) {
     nums[i] = Math.floor(Math.random() * 11);
 }
function run() {
    var val = parseInt(window.prompt("Enter a value to search for: "));
    console.log(nums);
    insertionsort(nums);
    dispArr(nums);
    var retVal = binSearch(nums, val);
    if (retVal >= 0) {
        console.log("Found " + val + " at position " + retVal);
    }
    else {
        console.log(val + " is not in array.");
    }
    
}

