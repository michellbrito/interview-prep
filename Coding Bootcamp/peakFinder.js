// Write a function that takes an array of integers containing exactly one peak. A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

function peakFinder(nums) {
    let sortedArray = nums;
    for (let i = sortedArray.length - 1; i >= 0; i--){
        for (let j = 1; j <= i; j++){
            if (sortedArray[j-1] > sortedArray[j]){
                let temp = sortedArray[j-1];
                sortedArray[j-1] = sortedArray[j];
                sortedArray[j] = temp;
                
            }
        }
    }

    return sortedArray[sortedArray.length -1]
};