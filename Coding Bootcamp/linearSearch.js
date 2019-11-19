// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

function linearSearch(arr, target) {
    let arrMap = {};
    for (let i = 0; i < arr.length; i++){
        arrMap[arr[i]] = i;
    }

    if (target in arrMap){
        return arrMap[target];
    } else {
        return -1;
    }
};

