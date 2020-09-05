let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(`The length of "${message}" is ${message.length}`); // The length of "If you are still thinking the answer is no!" is 

// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`The first character of "${message}" is ${message.charAt(0)}`); //The first character of "If you are still thinking the answer is no!" is I

// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`The last character of "${message}" is ${message.charAt(message.length-1)}`); //The last character of "If you are still thinking the answer is no!" is !

// Log the index of word "you" in message
console.log(message.indexOf("you")); //3

// Log the index of word "still" in message
console.log(message.indexOf("still")); //11

// Log the index of word "answers" in message
console.log(message.indexOf("answer")); //30

// Log true or false based on whether the word "answers" exist in message or not
console.log(message.includes("answer")); // true

// Log true or false based on whether the word "they" exist in message or not
console.log(message.includes("they")); // false

// Log true or false based on whether the word "is" exist in message or not
console.log(message.includes("is")); //true
// Log true or false based on whether the word "Is" exist in message or not
console.log(message.includes("Is")); //false

// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
console.log(message.slice(3,6).includes("you")); //true

// Check and log whether the word from index 7 to 8 is "a" or not
console.log(message.slice(7,8).includes("a")); //true

// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
console.log(message.slice(-3).includes("no!")); //true

// Check and log whether the last 5 character in message is "no!" or not
console.log(message.slice(-5).includes("no!")); // true

// Check and log whether the last 5 character in message is "no!" or not
console.log(message.slice(-5).includes("no!")); // true

// Log the message variable, all in lowecase
console.log(message.toLowerCase()); // if you are still thinking the answer is no!

// Log the message variable, all in uppercase
console.log(message.toUpperCase()); // IF YOU ARE STILL THINKING THE ANSWER IS NO!

// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
let newMessage = (message.replace("are", "cant't"));
console.log(newMessage); // "If you cant't still thinking the answer is no!"

// Replace the word "still" to "" (empty), and re-assign the output to the variable `newMessage` and log it.
newMessage = message.replace('still', '');
console.log(newMessage); // "If you are  thinking the answer is no!"

// Replace the word "thinking" to "decide", and re-assign the output to the variable `newMessage` and log it.
newMessage = message.replace('thinking', 'decide');
console.log(newMessage); // If you are still decide the answer is no!

// Replace the word "thinking" to "decide", and re-assign the output to the variable `newMessage` and log it.
newMessage = message.replace('thinking', 'decide');
console.log(newMessage); // If you are still decide the answer is no!

// Log all the characters from the message variable (you can user for..of loop on string)
for(char of message){
    console.log(char)
}

// Split all the words in message (split by " " space) and store it in a variable messageArray
let messageArray = message.split('');
console.log(messageArray);

// Log all the words of messageArray
for(let char of messageArray){
    console.log(char);
}