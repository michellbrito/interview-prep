// Write code to create a function that accepts a non-negative integer and returns the square root of the integer. If the square root is a decimal number, round down to the nearest whole integer
// You may not use the built-in `Math.sqrt` method

function sqrt(x) {

    for (let i = 0; i <= x; i++){
        if (i * i == x){
            return i; 
        } else if (i * i > x){
            return i - 1;
        }
    }
    
};