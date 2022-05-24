// <--------------------------------      task1      -------------------------------->

/* Write a function that returns true or false for a given number. 
We will reuse this function, so make it reusable. */

// const isOdd = (number) => (number % 2 ? true : false);

// console.log(isOdd(4));
// console.log(isOdd(5));

// <--------------------------------      task2      -------------------------------->

/* Write a function that returns the given string with a concatenated 
exclamation ! at the end. We will reuse this function, so make it reusable. */

// const exclaim = (str) => `${str}!`;

// console.log(exclaim("Adrian"));
// console.log(exclaim(exclaim("Adrian")));

// <--------------------------------      task3      -------------------------------->

/* Write a function that duplicates each char in a string. 
If I pass 'abc' to the function, it should return 'aabbcc'. 
We will reuse this function, so make it reusable. */

// const doubleChars = (str) =>
//   str
//     .split("")
//     .map((symbol) => symbol + symbol)
//     .join("");
// console.log(doubleChars("abc"));
// console.log(doubleChars("ssssnake"));

// <--------------------------------      task4      -------------------------------->

/* Write a function called atLeastTwo that receives an array and a callback 
as its arguments. If at least two elements from the array return a truthy 
value when passed as an argument to the callback, atLeastTwo should return true. 
If there aren't at least two elements from the array that return a truthy value when 
passed as arguments to the callback, atLeastTwo should return false. */

// const atLeastTwo = (array, callback) => {
//   callback(array);
// };

// function isOdd(array) {
//   return array.filter((el) => el % 2 === 0);
// }

// atLeastTwo([1, 2, 3, 4, 5], isOdd);
// atLeastTwo([2, 4, 6], isOdd);
// atLeastTwo([1, 2, 3, 4, 5], (t) => t > 3);

// <--------------------------------      task5      -------------------------------->

/* Write a groupBy function that groups elements from an array by the returned 
value from the callback when an element from the array is passed as an argument.

This is a really common pattern when manipulating arrays. */

// const input = [
//   {
//     name: "John",
//     yearOfBirth: 1988,
//     placeOfBirth: "New York",
//   },
//   {
//     name: "Nancy",
//     yearOfBirth: 1963,
//     placeOfBirth: "New York",
//   },
//   {
//     name: "John",
//     yearOfBirth: 1980,
//     placeOfBirth: "Toronto",
//   },
// ];

// function groupBy(array, callback) {
//   const obj = {};
//   const names = array
//     .map((el) => el.name)
//     .filter((element, index, array) => array.indexOf(element) === index);

//   for (let name in names) {
//     obj[name] = [];
//   }

//   array.reduce((sum, firstElement) => {
//     obj[firstElement.name].push(firstElement);
//   }, {});

//   console.log(obj);
// }

// // console.log(obj);
// console.log(groupBy(input, (t) => t.name));

// function isOdd(number) {}

//groupBy(input, (t) => t.name);
//groupBy(input, (t) => isOdd(t.yearOfBirth));
