let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: You can only use reduce method to solve this exercise:

// Find the average grade
persons.reduce((acc, elm)=> (acc += elm.grade), 0) / persons.length; // 11.083333333333334

//Find the average grade of male
let malePersons = persons.filter((elm) => elm.sex === "M");
malePersons.reduce((acc, elm)=> (acc += elm.grade), 0) / malePersons.length; // 8.666666666666666

// Find the average grade of female
let femalePersons = persons.filter((elm) => elm.sex === "F");
femalePersons.reduce((acc, elm)=> (acc += elm.grade), 0) / femalePersons.length; // 13.5

// Find the highest grade
console.log(persons.reduce((acc, elm) => (acc.grade > elm.grade ? acc : elm)).grade); //18

// Find the highest grade in male
console.log(malePersons.reduce((acc, elm) => (acc.grade > elm.grade ? acc : elm)).grade); //17

// Find the highest grade in female
console.log(femalePersons.reduce((acc, elm) => (acc.grade > elm.grade ? acc : elm)).grade)

// Find the highest grade for people whose name starts with 'J' or 'P'
let filterPersons = persons.filter((elm) => elm.name.startsWith('J') || elm.name.startsWith('P'));
console.log(filterPersons.reduce((acc, elm) => (acc.grade > elm.grade ? acc : elm)).grade)

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array.

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
console.log(fruitBasket.reduce((acc, elm) => {
  if(acc[elm]){
    acc[elm] += 1;
  } else{
      acc[elm] =1
  }
  return acc;
}, {}));

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared.

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/






const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
data.reduce((acc, elm) => acc.concat(acc), [], 0);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
dataTwo.reduce((acc, elm) => acc.concat(acc), [], 0)

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)



*/
function increment(n){
  return n + 1;
}

function double(n){
  return n * 2;
}

function decrement(n){
  return n-1;
}

function triple(n){
  return n * 3;
}

function half(n){
  return Math.round(n / 2);
}




let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
