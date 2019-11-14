// Write code to return the largest number in the given array


function maxNum(arr){
   let maxNumber;
   for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[i+1]){
            maxNumber = arr[i]
        }
   }
   return maxNumber;
}