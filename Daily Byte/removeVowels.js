/* Given a string s remove all the vowels it contains and return the resulting string.
Note: In this problem y is not considered a vowel. */

function removeVowels(s) {
  let noVowels = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] != "a" && s[i] != "e" && s[i] != "i" && s[i] != "o" && s[i] != "u") {
      noVowels = noVowels + s[i];
    }
  }

  return noVowels;
}

console.log(removeVowels("aeiou")); // -> ""
console.log(removeVowels("byte")); // -> "byt"
console.log(removeVowels("xyz")); // -> "xyz"
