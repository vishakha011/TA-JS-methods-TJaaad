let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
  return words.reduce((cb), 0);
} 

function cb(acc, elm){
  if(acc.length >= elm.length){
    return acc;
  }else{
    return elm;
  }
}
findLongestWord(words); // "crocodile"



// function findLongestWord(arr){
//   return arr.reduce((acc, elm){
//     if(acc.length >= elm.length){
//       return acc;
//     }else{
//       return elm;
//     }
//   }
//   }, 0);
// }

// - Convert the above array "words" into an array of length of word instead of word.
words.map((word) => word.length);

// - Create a new array that only contains word with atleast one vowel.

console.log(words.filter((elm) =>
  elm.includes('a') || elm.includes('e') || elm.includes('i') || elm.includes('o') || elm.includes('u')
));

// - Find the index of the word "rhythm"
words.indexOf('rhythm'); //7
 
// - Create a new array that contians words not starting with vowel.
console.log(words.filter((elm) =>
  !(elm.startsWith('a') || elm.startsWith('e') || elm.startsWith('i') || elm.startsWith('o') || elm.startsWith('u')
)));

// - Create a new array that contianse words not ending with vowel
console.log(words.filter((elm) =>
  !(elm.endsWith('a') || elm.endsWith('e') || elm.endsWith('i') || elm.endsWith('o') || elm.endsWith('u'))
));



let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
numbers.reduce((acc, elm) => acc = acc + elm, 0); //87

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
numbers.filter((elm) => elm * 3); // [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

// - Create a new array that contains only even numbers
numbers.filter((elm) => elm % 2 === 0); // [6, 12, 18, 16, 2, 8, 10]

// - Create  a new array that contains only odd numbers.
numbers.filter((elm) => elm % 2 !== 0); // [1, 13, 1]

// - Create a new array that should have true for even number and false for odd numbers.
numbers.map((elm) => (elm % 2 === 0 ? true: false)); // [true, true, false, true, false, true, true, false, true, true]

// - Sort the above number in assending order.
numbers.sort((a, b) => a - b); // [1, 1, 2, 6, 8, 10, 12, 13, 16, 18]
 
// - Does sort mutate the original array?
 // Yes, sort() mutates the original array

// - Find the sum of the numbers in the array.
numbers.reduce((acc, elm) => acc = acc + elm, 0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr){
  return numbers.reduce((acc, elm) => (acc = acc + elm)/ arr.length, 0);
}
averageNumbers(numbers); // 1.9743086211

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arr){
  return arr.map((elm) => elm.length).reduce((acc, elm) => (acc = acc + elm)/ arr.length, 0)
};
averageWordLength(strings); // 0.6455545604