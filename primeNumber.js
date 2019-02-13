/* Write a
function that checks to see
if a number is a prime number or not.Have it returntrueif it is, orfalse
if it 's not */

let primeChecker = function (number) {
    // loops through the given number  
    for (let i = 2; i <= number; i++) {
        // 2 is prime so I created a if statement since I started i at 2.
        if (number === 2) {
            return true;
            break;
            // since prime is a number that can divided by itself, I created a if statement saying if i = number then its prime ex: 15
        } else if (i === number) {
            return true;
            break;
            // if number divided by i that has a reminder than its not prime. 
        } else if (number % i === 0) {
            return false;
            break;
            // prime number can be divided by itself and doesn't have a reminder.
        } else {
            return false;
            break;
        };
    };
};



primeChecker(2); // true 
primeChecker(4); // false
primeChecker(9); // true
primeChecker(12); // false
primeChecker(17); // true
primeChecker(15); // false