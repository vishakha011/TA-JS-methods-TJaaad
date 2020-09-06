// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

// - Find the index of `101` in numbers
numbers.indexOf(101); // 8

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9); //11

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(' ') // "This is a collection of words"

// - Add two new words in the strings array "called" and "sentance"
strings.push('called', 'sentences');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(' '); // "This is a collection of words called sentences"

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
strings.filter((element) => element.includes('is')) // ["is"]

// - Find all the words that contain 'is' use string method 'indexOf'
strings.filter((element) => element.indexOf('is') >= 0) //["is"]

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((element) => element % 3 === 0); //false

// -  Sort Array from smallest to largest
strings.sort();
console.log([...numbers].sort(function(a, b){
  return a -b;
}));

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
// numbers.reduce((acc, element){
//   if(acc.length > element.length){
//     return acc;
//   }else{
//     return element;
//   }
// }, 0);

// - Find longest string in strings


// - Find all the even numbers
numbers.filter((elm)=> elm % 2 === 0 ); //[12, 4, 18, 6]

// - Find all the odd numbers
numbers.filter((elm)=> elm % 2 !== 0 ); //[1, 9, 7, 11, 3, 101, 5, 9]

// - Place a new word at the start of the array use (upshift)
strings.unshift('This');

// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']
strings.slice(2,4);

// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221 );
numbers.splice(3, 1, 1881 );

// - Replace words in strings array with the length of the word
// strings.forEach((elm, index) => strings.splice(index, 1, elm.length));

// - Find the sum of the length of words using above question


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.filter((elm) => elm.firstname.startsWith('J'));

// - Create new array with only first name
customers.map((elm) => elm.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")
customers.map((elm) => `${elm.firstname} ${elm.lastname}`) 

// - Sort the array created above alphabetically
customers.map((elm) => `${elm.firstname} ${elm.lastname}`).sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
