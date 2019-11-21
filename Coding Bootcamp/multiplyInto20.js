// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

function multiplyInto20(arr) {
    let isArrEqualTo20 = false;
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] * arr[j] == 20){
                isArrEqualTo20 = true;
                break;
            } 
        }
    }

    return isArrEqualTo20;
};

