function vowelCount(str){
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let totalVowels = 0;

    for (let i = 0; i < str.length; i++){

        for (let j = 0; j < str.length; j++){
            if (str[i] == vowels[j]){
                totalVowels++
            } 
        }
        
    }

    return totalVowels;
}

