// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

function minIncrement(nums) {
    let uniqueNums = {};
    let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    while (uniqueNums[nums[i]] === true) {
      nums[i] = nums[i] + 1;
      counter++;
    }

    uniqueNums[nums[i]] = true;
  }

  return counter;
 
};

