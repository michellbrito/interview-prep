/* Print all numbers from the given num argument to 1 inclusive.

e.g. given the number 10 as the num argument, the following should be printed to the console, one log at a time:

10
9
8
7
6
5
4
3
2
1 */
module.exports = {
    countDown: function(num){
        for (var i = num; i > 0; i--){
            console.log(i);
        }
    }
}
