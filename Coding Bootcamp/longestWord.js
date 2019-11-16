// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

function longestWord(str) {
    let arrayOfWords = str.split(" ");
    let longest = arrayOfWords[0];
    for(let i = 0; i < arrayOfWords.length; i++){
        if (arrayOfWords[i].length > longest.length){
            longest = arrayOfWords[i];
        } 
    }
    return (longest);
};

