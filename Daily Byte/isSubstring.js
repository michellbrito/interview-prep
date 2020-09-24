/* Given two strings s and t return whether or not s is a subsequence of t.
Note: You may assume both s and t only consist of lowercase characters and both have a length of at least one. */

function isSubstring(s, t) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (t[j] == s[i]) {
        counter++;
        break;
      }
    }
  }

  return counter == s.length;
}

console.log(isSubstring("abc", "aabbcc")); // -> true
console.log(isSubstring("cpu", "computer")); // -> true
console.log(isSubstring("cxyz", "axbyc")); // -> false
