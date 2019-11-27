// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

function smallestDifference(arr1, arr2) {
    let left = 0;
    let right = 0;
    let bestPair = [];
    let bestDiff = Infinity;

    while (left < arr1.length && right < arr2.length) {
        let leftVal = arr1[left];
        let rightVal = arr2[right];
        let currentDiff = Math.abs(rightVal - leftVal);

        if (currentDiff < bestDiff) {
            bestDiff = currentDiff;
            bestPair = [leftVal, rightVal];

            if (bestDiff === 0) {
                return bestPair;
            }
        }

        if (leftVal < rightVal) {
            left++;
        } else if (rightVal < leftVal) {
            right++;
        }
    }

    return bestPair;
};