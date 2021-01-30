// Given an integer array, nums, return the length of the longest increasing subarray.

function lengthIncrease(nums) {
  let longestLength = 1;
  let i = 0;

  while (i < nums.length - 1) {
    if (nums[i] < nums[i + 1]) {
      longestLength++;
    } else {
      longestLength = 1;
    }

    i++;
  }

  return longestLength;
}

console.log(lengthIncrease([1, 2, 3])); // -> 3 because 1, 2, 3 is increasing 
console.log(lengthIncrease([3, 4, 1, 2, 8])); // -> 3 because 1, 2, 8 is increasing
console.log(lengthIncrease([3, 4, 8, 7, 0])); // -> 1 because 3, 4 is increasing
