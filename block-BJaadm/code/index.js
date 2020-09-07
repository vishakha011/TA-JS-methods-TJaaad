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

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((elm) => elm.name);
console.log(peopleName); // ["John", "Sarah", "Bob", "Johnny", "Ethan", "Paula", "Donald", "Jennifer", "Courtney", "Jane", "John", "Arya"]

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((elm) => elm.grade);
console.log(peopleGrade); // [8, 12, 16, 2, 4, 18, 5, 13, 15, 9, 17, 14]
 
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((elm) => elm.sex);
console.log(peopleSex); // ["M", "F", "M", "M", "M", "F", "M", "F", "F", "F", "M", "F"]

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter((elm) => elm.startsWith('J') || elm.startsWith('P'))); // ["John", "Johnny", "Paula", "Jennifer", "Jane", "John"]
 
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter((elm) => elm.startsWith('A') || elm.startsWith('C'))); // ["Courtney", "Arya"]

// Log all the filtered male ('M') in persons array 
console.log(peopleSex.filter((elm) => elm === "M")); //["M", "M", "M", "M", "M", "M"]

// Log all the filtered female ('F') in persons array
console.log(peopleSex.filter((elm) => elm === "F")); //["F", "F", "F", "F", "F", "F"]

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter(
  (elm) => 
  elm.sex === "F" && (elm.name.startsWith('C') || elm.name.startsWith('J'))
  ));

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((elm) => elm % 2 === 0)); //[8, 12, 16, 2, 4, 18, 14]

// Find the first name that starts with 'J' in persons array and log the object
// console.log(peopleName.filter((elm) => elm.startsWith('J'))[0]); // John
console.log(persons.filter((elm) => elm.name.startsWith('J'))[0]); //{name: "John", grade: 8, sex: "M"}

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.filter((elm) => elm.name.startsWith('P'))[0]);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.filter((elm) => elm.name.startsWith('J') && elm.grade > 10 && elm.sex === "F"));

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((elm) => elm.sex === "F");
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((elm) => elm.sex === "M");
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc, elm) => (acc += elm.grade), 0); // 133

// Find the average grade
gradeTotal /peopleGrade.length;  // 0.10755903050601562

// Find the average grade of male
console.log(persons.reduce((acc, elm) => (acc += elm.grade)/ malePersons.length, 0));  

// Find the average grade of female
console.log(persons.reduce((acc, elm) => (acc += elm.grade)/ femalePersons.length, 0));

// Find the highest grade
peopleGrade.sort((a, b) => b - a)[0] //18

// Find the highest grade in male
malePersons.map((elm) => elm.grade).sort((a, b) => b - a)[0];

// Find the highest grade in female
femalePersons.map((elm) => elm.grade).sort((a, b) => b - a)[0];

// Find the highest grade for people whose name starts with 'J' or 'P'
persons.filter((elm) => elm.name.startsWith('J') || elm.name.startsWith('P')).map((elm) => elm.grade).sort((a, b) => b - a)[0]; // 18

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a, b) => a - b));

// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => b - a));

// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
