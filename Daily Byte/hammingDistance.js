/* Given two integers x and y, return the hamming distance between the two numbers.
Note: The hamming distance between two numbers is the number of bit positions in which the bits differ. */

function numToBinary(num) {
  // convert num to binary
  let binaryNum = num.toString(2);

  if (binaryNum.length == 2) {
    binaryNum = `00${binaryNum}`;
  }

  if (binaryNum.length == 3) {
    binaryNum = `0${binaryNum}`;
  }

  return binaryNum;
}

function hammingDistance(x, y) {
  let counter = 0;
  const binaryX = numToBinary(x).split("");
  const binaryY = numToBinary(y).split("");

  for (let i = 0; i < binaryX.length; i++) {
    if (binaryX[i] != binaryY[i]) {
      counter = counter + 1;
    }
  }
  return counter;
}

console.log(hammingDistance(2, 4)); // 2 = 0 0 1 0 , 4 = 0 1 0 0 -> therefore the number of positions in which the bits differ is 2.
