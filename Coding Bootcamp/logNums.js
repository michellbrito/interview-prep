/* Print all numbers from 1 up to the given nums argument inclusive.

e.g. given the number 5 as the num argument, the following should be printed to the console, one log at a time: */


module.exports = {
    logNums: function(num){
        for (var i = 1; i <= num; i++){
            console.log(i);
        }
    }
}