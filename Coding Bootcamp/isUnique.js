// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

function isUnique(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] == arr[j]){
                counter++
            }
        }
    }

    if (counter > 0){
        return false;
    } else {
        return true;
    }
};
