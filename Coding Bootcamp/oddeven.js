/* In this file you will be writing code in the body of the oddOrEven function to achieve the following:

If num is evenly divisible by 2, return the string "even".

If num is NOT evenly divisible by 2, return the string "odd". */


module.exports = {
    oddOrEven: function(num){
        if (num % 2 == 0){
            return "even"
        } else  {
            return "odd"
        }
    }

}