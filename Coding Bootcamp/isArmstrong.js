// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

function isArmstrong(num) {
    let sum = 0;
    let numSplit = num.toString().split('')


    for (let i = 0; i < numSplit.length; i++){
        sum = sum + Math.pow(numSplit[i], numSplit.length)
    }

   return sum == num;
};
