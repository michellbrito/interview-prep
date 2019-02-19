/* Write a function that takes in an input and returns true if it’s an integer and false otherwise.

Ex:
Input: "7"
Output: false

Input: 7
Output: true

Input: 4.3
Output: false */

let integerChecker = function (num) {
    if (typeof (num) === "string") {
        return(false);
    } else if (num % 1 !== 0) {
        return(false);
    } else {
        return(true);
    };
};

integerChecker("7"); //  should return false 
integerChecker(7); // should return true
integerChecker(4.5); // should return false