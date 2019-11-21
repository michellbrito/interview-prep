// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

function zerosAndOnes(str) {
    let zeroCounter = 0;
    let oneCounter = 0;
    let isZeroEqualToOne = false;

    for (let i = 0; i < str.length; i++){
        if (str[i] == "0"){
            zeroCounter++
        } else if (str[i] == "1"){
            oneCounter++
        }
    }

    if (zeroCounter == oneCounter){
        isZeroEqualToOne = true;
    }

   return isZeroEqualToOne;
};

