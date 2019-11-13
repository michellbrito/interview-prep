/* Add all of the numbers in the given arr array argument and return the total.

e.g. given the following array:
var arr = [3, 1, 5, 6];
The following number should be returned:
15; */

module.exports = {
    sumArray: function(arr){
       let total = 0;
       for (let i = 0; i < arr.length; i++){
           total +=  arr[i];
       }
       return total;
    }
}