// Write code to create a function that accepts a string and returns an object
// The object should contain keys for each character in the string
// Each key should point to an array containing the indexes the character is found in the string

function stringMap(str) {
    let stringMap = {};
    for (let i = 0; i < str.length; i++){
        if (stringMap[str[i]]){
            stringMap[str[i]].push(i)
        } else {
            stringMap[str[i]] = [i];
        }
    }

    return stringMap;
};