// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

function permutationSubstring(str, sub) {
    let counter = 0;
    let isStrASubtring = false;

    for (let i = 0; i < sub.length; i++){
        for (let j = 0; j < str.length; j++){
            if (str[i] == sub[j]){
                counter++
            }
        }
    }

    if (counter == sub.length){
        isStrASubtring = true;
    }

    return isStrASubtring;
};

