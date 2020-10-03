/* Given an array of numbers, move all zeroes in the array to the end while maintaining the relative order of the other numbers.
Note: You must modify the array you’re given (i.e. you cannot create a new array). */

function rearrangeElements(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      counter++;
    }
  }

  while (counter > 0) {
    nums.push(0);
    counter = counter - 1;
  }

  return nums;
}

console.log(rearrangeElements([3, 7, 0, 5, 0, 2])); // -> [3,7,5,2,0,0]
console.log(rearrangeElements([0, 7, 0, 5, 0, 2])); // -> [7,5,2,0,0,0]
console.log(rearrangeElements([0, 0, 0, 0,])); // -> [0,0,0,0]
console.log(rearrangeElements([7, 7, 3, 1])); // -> [7,7,3,1]
