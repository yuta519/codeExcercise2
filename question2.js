// Question 2 —&gt; (ADVANCE)
// Write a function that takes an array as a parameter and calculates the sum of the numbers
// inside the array
const numList = [1,2,3,4,5,6]; // 1 + 2 + 3 + 4 + 5 + 6 → 21

const sumOfElements = (array) => {
  // Write your logic here, // HINT: FOR LOOP
  if (!Array.isArray(array)) {
    return console.log('An arg is not array.');
  }
  return array.reduce((sum, num) => sum + num);
}

// sumOfElements(numList); // 21
console.log(sumOfElements(numList)); // 21
