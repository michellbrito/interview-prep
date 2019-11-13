/* Print all even numbers from 0 up to the given nums argument inclusive.

e.g. given the number 6 as the num argument, the following should be printed to the console, one log at a time:

0
2
4
6 */
module.exports = {
    logEvenNums: function(nums){
        for (let i = 0; i < nums; i++){
            if (i % 2 == 0){
                console.log(i)
            }
        }
        
    }
}