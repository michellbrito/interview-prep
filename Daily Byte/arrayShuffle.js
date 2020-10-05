/* Given an array of integers, nums, sort the array in any manner such that when i is even, nums[i] is even and when i is odd, nums[i] is odd.
Note: It is guaranteed that a valid sorting of nums exists. */

function arrayShuffle(nums) {
  const shuffledArray = [];
  for (let i = 0; i < nums.length; i++) {
    const currentIndex = i + 1;

    if (nums[i] % 2 != 0 && currentIndex % 2 != 0) {
      const currentVal = nums[i + 1];
      shuffledArray.push(currentVal);
      shuffledArray.push(nums[i]);
    }

    if (nums[i] % 2 == 0 && currentIndex % 2 != 0) {
      const currentVal = nums[i + 1];
      shuffledArray.push(currentVal);
      shuffledArray.push(nums[i]);
    }
  }

  return shuffledArray;
}
console.log(arrayShuffle([1, 2, 3, 4])); // -> [2,1,4,3]
console.log(arrayShuffle([2, 3, 4, 5])); // -> [3,2,5,4]
