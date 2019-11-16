// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

function reverseWords(str) {
    let arrayOfWords = str.split(" ");
    let reverseWords = [];
    for (let i = arrayOfWords.length-1; i >= 0; i--){
        reverseWords.push(arrayOfWords[i]);
    }

    return reverseWords.join(" ");

};
