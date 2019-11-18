// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

function productOfLargestTwo(arr) {
  
    let highest = 0;
    let secondHighest = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > highest || highest == 0){
            secondHighest = highest;
            highest = arr[i];
        } else if (arr[i] > secondHighest || secondHighest == 0) {
            secondHighest = arr[i];
        };
    };
    return highest * secondHighest;
};

