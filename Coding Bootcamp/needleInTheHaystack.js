// Write code to create a function that accepts two strings
// If the second string is found inside of the first string, return its starting index in the first string
// Else return `-1`

function strStr(str1, str2) {
    let counter = 0;
    let letter = [];
    let foundIndexs = -1;
    for (let i = 0; i < str2.length; i++){
        for (let j = 0; j < str1.length; j++){
            if (str2[i] === str1[j]){
                counter++
                letter.push(str2[i])
                break;
                
            }
        }
    }

    for (let i = 0; i < str1.length; i++){
        if (str1[i] == letter[0] && counter == str2.length){
            foundIndexs = i;
            break;
        } else if (str2 == ""){
            foundIndexs = 0;
        }
    }
 
    return foundIndexs;
};
