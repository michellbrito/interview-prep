/* Given a character array, compress it in place and return the new length of the array.
Note: You should only compress the array if its compressed form will be at least as short as the length of its original form.
 */

function compression(chars) {
  let compressedChars = [];

  for (let i = 0; i < chars.length; i++) {
    let counter = 1;
    while (chars[i] == chars[i + 1]) {
      counter++;
      i++;
    }

    if (counter > 1) {
      compressedChars.push(chars[i]);
      compressedChars.push(counter);
    } else {
      compressedChars.push(chars[i]);
    }
  }

  return compressedChars.length;
}

console.log(compression(["a", "a", "a", "a", "a", "a"])); // -> 2, because ["a","6"];

console.log(compression(["a", "a", "b", "b", "c", "c"])); // -> 6, because ['a', '2', 'b', '2', 'c', '2'];

console.log(compression(["a", "b", "c"])); // -> 3, because ['a', 'b', 'c'];
