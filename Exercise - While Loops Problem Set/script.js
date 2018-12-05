var firstNumber = -10;
console.log("1. Print all numbers between -10 and 19")
while (firstNumber < 20) {
  console.log(firstNumber);
  firstNumber++;
}

var secondNumber = 10;
console.log("Print all even numbers between 10 and 40")
while (secondNumber <= 40) {
  console.log(secondNumber);
  secondNumber+=2;
}

var thirdNumber = 300;
console.log("3. Print all odd numbers between 300 and 333")
while (thirdNumber <= 333) {
  if (thirdNumber % 2 !==0 ) {
    console.log(thirdNumber);
  }
  thirdNumber++;
}

var forthNumber = 5;
console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50")
while  (forthNumber <= 50) {
  if (forthNumber % 5 === 0 && forthNumber % 3 === 0) {
    console.log(forthNumber);
  }
  forthNumber++;
}
