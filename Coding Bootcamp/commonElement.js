// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

function commonElement(arrA, arrB) {

    let foundElement;
    for (let i = 0; i < arrA.length; i++){
        for (let j = 0; j < arrB.length; j++){
            if (arrA[i] == arrB[j]){
                foundElement =  arrA[i];
            }
        }
    }

  return foundElement;
};


