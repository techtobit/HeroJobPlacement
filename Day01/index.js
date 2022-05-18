// -- Task 01 -- //
//With basic function
function getFactorial(number) {
 let factorial = 1;
 for (let i = 1; i <= number; i++) {
  factorial = factorial * i
 }
 return factorial;
}

let insertNum = 5
let result1 = getFactorial(insertNum);
console.log(` Task 01.1The Factorial of ${insertNum} is ${result1}`);


// with Recursion
function factorial(number) {
 if (number < 0)
  return -1;
 else if (number == 0)
  return 1;
 else {
  return (number * factorial(number - 1));
 }
}

let insertNumber = 9
let result = factorial(insertNumber)
console.log(`Task 01.2 The Factorial of ${insertNumber} is ${result}`);



// -- Task 02 -- //
let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];


function findMax(ar) {
 var max = -Infinity;

 for (var i = 0; i < ar.length; i++) {
  var el = ar[i];

  if (Array.isArray(el)) {
   el = findMax(el);
  }

  if (el > max) {
   max = el;
  }
 }

 return max;
}

let result2 = findMax(ar)
console.log(` Task 02.The Largest Number Is ${result2}`);

//-- Task 03 --//

const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

arr.sort();
let current = null;
let count = 0;
for (var i = 0; i < arr.length; i++) {
 if (arr[i] != current) {
  if (count > 0) {
   console.log(` Task 03.1 - This ${current} Have  ${count} duplicates`);
  }
  current = arr[i];
  count = 1;
 }
 else {
  count++;
 }
}
if (count > 0) {
 console.log(`Task 03.2 - This ${current} Have  ${count} duplicates`);
}


// --- Task 04 -- //
const arr2 = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]

function getUnique(arr2) {
 const unique = [];
 for (u of arr2) {
  if (unique.indexOf(u) === -1) {
   unique.push(u);
  }
 }
 console.log(`Task 04 - This unique number is ${unique}`);
}

const uniqueNum = getUnique(arr);



