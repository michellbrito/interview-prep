// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

function sortedSquares(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    
    let squaredArr = arr;
    
    for (let i = squaredArr.length - 1; i >= 0; i--){
        for (let j = 1; j <= i; j++){
            if (squaredArr[j-1] > squaredArr[j]){
                let temp = squaredArr[j-1];
                squaredArr[j-1] = squaredArr[j];
                squaredArr[j] = temp; 
            }
        }
    }
    return squaredArr;
};