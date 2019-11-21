// Write code to merge two sorted arrays into a new sorted array

function mergeSorted(arr1, arr2) {
    let mergeSortedArray = [];
    mergeSortedArray.push(...arr1,...arr2);

    for (let i = mergeSortedArray.length - 1; i >= 0; i--){
        for (let j = 1; j <= i; j++){
            if (mergeSortedArray[j-1] > mergeSortedArray[j]){
                let temp = mergeSortedArray[j-1];
                mergeSortedArray[j-1] = mergeSortedArray[j];
                mergeSortedArray[j] = temp;
                
            }
        }
    }
    return mergeSortedArray;
};