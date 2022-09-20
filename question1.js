// Print all the odd numbers from 0 → n , where n will be dynamic inside a function

const printOddNumbers = (n) => {
  // Write logic here
  const baseArray = [...Array(n)].map((_, k) => k + 1)
  baseArray.forEach((i) => i % 2 == 1 ? console.log(i): null)
}


printOddNumbers(10)
printOddNumbers(20)
printOddNumbers(1234)
