// Write a function that takes a sorted array of numbers and removes duplicates from the array
// Do not create a new array, instead modify the original array
// There is no need to return anything from this function

function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
};

