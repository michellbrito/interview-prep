/* Write a function that takes in a string and returns true if it's a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.

Ex:
Input: "Watch Jeopardy, Alex Trebek's fun TV quiz game"
Output: true

Input: "Five hexing wizard bots jump quickly"
Output: true

Input: "JavaScript is the best"
Output: false
 */


var pangramChecker = function (sentence) {
    sentence = sentence.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < alphabet.length; i++) {
        if (sentence.includes(alphabet[i])) {
            return true;
        };
    };
    return false;
};

pangramChecker("Watch Jeopardy, Alex Trebek's fun TV quiz game"); // returns true
pangramChecker("Five hexing wizard bots jump quickly"); // returns true
pangramChecker("JavaScript is the best"); // returns false