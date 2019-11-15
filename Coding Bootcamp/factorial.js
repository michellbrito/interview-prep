// Write code to create a function that returns the factorial of `num`

function factorial(num) {
    let total = 1;
    if (num == 0){
        return 1;
    } else {
        for (var i =num; i > 1; i--){
            total = total * i;
        }
    }
    return total;
};