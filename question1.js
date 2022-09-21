// Print all the odd numbers from 0 → n , where n will be dynamic inside a function
const printOddNumbers_1 = (n) => {
  // Write logic here
  const baseArray = [...Array(n)].map((_, k) => k + 1);
  baseArray.forEach((i) => i % 2 == 1 ? console.log(i): null);
}

const printOddNumbers_2 = (n) => {
  // Write logic here
  for (let i=1; n > i; i++) {
    if (i%2===1) {
      console.log(i);
    }
  }
}

printOddNumbers_1(10)
printOddNumbers_1(20)
console.log("==============================================")
printOddNumbers_2(10)
printOddNumbers_2(20)
