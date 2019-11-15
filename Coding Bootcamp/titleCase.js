// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

function titleCase(str) {
    let lowerCaseSentence = str.split(" ");

    for (var i = 0; i < lowerCaseSentence.length; i++){
        lowerCaseSentence[i] = lowerCaseSentence[i][0].toUpperCase() + lowerCaseSentence[i].substring(1);
    }

    return lowerCaseSentence.join(" ");
   
};