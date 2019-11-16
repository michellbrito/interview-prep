// Write code to create a function that accepts a string and returns an acronym for the given string

function acronymBuilder(str) {
    let acronym = [];
    let splitAcronym = str.split(" ");

    for (let i = 0; i < splitAcronym.length; i++){
        acronym.push(splitAcronym[i][0].toUpperCase());
    }

    return acronym.join("");
};

