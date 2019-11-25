// Write a function that takes an unsorted array of positive and unique integers and returns the number missing from the array

function missingNumber(nums) {
    let numsPresent = {};

    for (let i = 0; i < nums.length; i++) {
        numsPresent[nums[i]] = true;
    }
    
    for (let i = 0; i < nums.length + 1; i++) {
        if (!numsPresent[i]) {
            return i;
        }
    }
  
    
};
