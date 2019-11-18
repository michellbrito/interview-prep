function camelCase(str) {
    let camelCaseSentence = str.toLowerCase().split(" ");

    for (var i = 1; i < camelCaseSentence.length; i++){
        
        camelCaseSentence[i] = camelCaseSentence[i][0].toUpperCase() + camelCaseSentence[i].substring(1);
    }

    return camelCaseSentence.join("");

   
};

camelCase("Hello World");