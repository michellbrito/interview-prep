/* Write a function that takes in a sentence as a
 string and outputs the number of words. */

howManyWords = function(word){

    // takes the string from the user and splits it into an array by spaces " "
    let wordCount = word.split(" ").length;
    console.log(wordCount);

};

howManyWords("let's go!"); // should console.log 2 since let's, go
howManyWords("I can't wait to start coding"); // should console.log 6 since I, can't, wait, to, start, coding
howManyWords("huh"); // should console.log 1 since huh