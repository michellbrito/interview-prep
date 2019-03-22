/* Write a
function that takes in a string and
if the string is a string representation of a number,
    return the negative version of that number otherwise
throw an Error. */

let convertStringToNegNumber = function (stringNumber) {
    // converts a string to a interger 
    let StringToNumber = parseInt(stringNumber);
    // if the interget is "NaN" then returns error 
    if (isNaN(StringToNumber)) {
        return ("Error");
        // takes the interger and converts it into a negative 
    } else {
        return (StringToNumber * -1);
    }
};