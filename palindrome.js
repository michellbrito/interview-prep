/* Write a
function that takes in a single word as a string and returns true
if it’ s a palindrome and false otherwise(a palindrome is spelled the same way forwards and backwards). */


let checkPalindrome = function (word) {

    // splits the given word into an array, reverses the word, and then finally joins the word together 
    reverseWord = word.split("").reverse().join("");

    // checks to see if the user word is equal to the reverse word and if it is console.log true if not console.log false
    if (word === reverseWord) {
        return true;
    } else {
        return false;
    };
};

checkPalindrome("noon"); // should return true because noon === noon
checkPalindrome("horse"); // should return false because  horse != esroh
checkPalindrome("racecar"); // should return true because racecar === racecar