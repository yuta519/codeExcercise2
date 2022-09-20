// Queston 3 → (ADVANCE)
// Write a function that takes an array as a parameter and returns the largest number inside that
// array

let numList = [ 20, 40, -10, 5, 40, 5, 11]; // 40

const largestNumber = (array) => {
  // Write your logic here
  // Print the largest number inside the array // 40
  if (!Array.isArray(array)) {
    return console.log('An arg is not array.');
  }
  return array.reduce((largest, num) => largest > num ? largest : num);
}

console.log(largestNumber(numList));
