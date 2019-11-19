// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

function isAnagram(strA, strB) {
    if (strA.length !== strB.length) {
        return false;
    }

    var aLetterMap = {};
    var bLetterMap = {};
    const strLength = strA.length;

    for (let i = 0; i < strLength; i++) {
        let aLetter = strA[i];
        let bLetter = strB[i];

        aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
        bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
    }

    for (let key in aLetterMap) {
        if (aLetterMap[key] !== bLetterMap[key]) {
            return false;
        }
    }

    return true;
};



