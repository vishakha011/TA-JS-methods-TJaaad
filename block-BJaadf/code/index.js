let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
console.log(fruits.concat('Papaya')); // ["Banana", "Orange", "Apple", "Mango", "Papaya"]

// Remove the last element from fruits array
console.log(fruits.pop()); // Mango
 
// Log the current length of fruits array
console.log(fruits.length); // 3

// Remove the first element from fruits and log the value of fruits
console.log(delete fruits[0], fruits) ; //[empty, "Orange", "Apple"]

// Log the element on index 0 and 1
console.log(fruits[0]); // undefined
console.log(fruits[1]); // Orange

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index
console.log(fruits.shift(), fruits) // ["Orange", "Apple"]

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
console.log(fruits.unshift("Guava"), fruits); // ["Guava", "Orange", "Apple"]

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
console.log(fruits.unshift("Dragon Fruit"), fruits); // ["Dragon Fruit", "Guava", "Orange", "Apple"]

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
console.log(fruits[0] === "Dragon Fruit" && fruits[1] === "Guava"); // true

// Update the value of index 1 to `Pears`
console.log(fruits.splice(1, 0, "Pears"), fruits); // ["Dragon Fruit", "Pears", "Guava", "Orange", "Apple"]

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
console.log(fruits.splice(1, 0, "Kiwi", "Lemon"), fruits); // ["Dragon Fruit", "Kiwi", "Lemon", "Pears", "Guava", "Orange", "Apple"]

// Remove (slice) all the element from index 5
console.log(fruits.splice(5), fruits); //["Dragon Fruit", "Kiwi", "Lemon", "Pears", "Guava"]

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ['Berries', 'Melons'];

// Concat moreFruits into fruits array (re-assign so the value gets updated)
console.log(fruits.concat(moreFruits)); //["Dragon Fruit", "Kiwi", "Lemon", "Pears", "Guava", "Berries", "Melons"]

// Log the name of all fruit in console
fruits.forEach((elm) => console.log(elm)); //Dragon Fruit Kiwi Lemon Pears Guava Berries Melons

// Convert each fruit name to lowercase and log it
fruits.forEach((elm) => console.log(elm.toLowerCase())); // dragon fruit kiwi lemon pears guava

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = fruits.map((element) => element.toLowerCase());

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = fruits.map((element) => element.toUpperCase());



let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat()); // [1, 2, 3, 4]

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
console.log(numbersTwo.flat(2)); // [1, 2, 3, 4, 5, 6]

// Convert the numbersThree array to one level element.
console.log(numbersThree.flat(4)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
numbersThree = numbersThree.flat(Infinity);
console.log(numbersThree);

// Use forEach to log all the elements of numberThree array
numbersThree.forEach((elm)=> console.log(elm)); // 1 2 3 4 5 6 7 8 9 10 

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = numbersThree.map((element) => element * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = numbersThree.map((element) => element * 3);
console.log(tripleNumbers); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
 
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = numbersThree.map((element) => element / 2);
console.log(halfNumbers); // [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] 

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = numbersThree.filter((element) => element % 2 !== 0) ;
console.log(oddNumbers); // [1, 3, 5, 7, 9]

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = numbersThree.filter((element) => element % 2 === 0) ;
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Find the index of 10 in numbersThree array
console.log(numbersThree.indexOf(10)); //9

// Reverse the values of numbersThree array
console.log(numbersThree.reverse()); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Reverse the values of numbersTwo array
console.log(numbersTwo.reverse()); // 

// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.join('-').toUpperCase()); // DRAGON FRUIT-KIWI-LEMON-PEARS-GUAVA

// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.join(' & ').toLowerCase()); // dragon fruit & kiwi & lemon & pears & guava
