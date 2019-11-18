// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

  function characterCount(str) {
    let characterMap = {};

    for (let i = 0; i < str.length; i++){
        
        if (str[i] in characterMap){
            characterMap[str[i]]++;
        } else {
            characterMap[str[i]] = 1;
        }
    }

    return characterMap;
    
};

characterCount("Hello World!");