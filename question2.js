// Question 2 —&gt; (ADVANCE)
// Write a function that takes an array as a parameter and calculates the sum of the numbers
// inside the array
const numList = [1,2,3,4,5,6]; // 1 + 2 + 3 + 4 + 5 + 6 → 21

const sumOfElements_1 = (array) => {
  // Write your logic here, // HINT: FOR LOOP
  if (!Array.isArray(array)) {
    return console.log('An arg is not array.');
  }
  return array.reduce((sum, num) => sum + num);
}

const sumOfElements_2 = (array) => {
  // Write your logic here, // HINT: FOR LOOP
  let sum = 0;
  for (let i = 0; array.length > i; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumOfElements_1(numList)); // 21
console.log("===============================");
console.log(sumOfElements_2(numList)); // 21
