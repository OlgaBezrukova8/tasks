// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     if (arr[i] === arr[i + 1] - 1) {
//       continue;
//     }

//     return arr[i + 1];
//   }
// }

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// Write function, which iterates over array and executes function on each element.
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

// function executeforEach(array, callback) {
//   for (let element of array) {
//     callback(element);
//   }
// }

// executeforEach([1, 2, 3], function (el) {
//   console.log(el * 2);
// }); // 2 4 6

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition.
// But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

// const positiveSum = (array) =>
//   array.reduce((sum, number) => {
//     if (number > 0) {
//       sum += number;
//     }

//     return sum;
//   }, 0);

// console.log(positiveSum([2, 4, 6, 8])); // => 20
// console.log(positiveSum([0, -3, 5, 7])); // => 12

// const positiveSum = (array) =>
//   array.reduce((sum, number) => (number > 0 ? (sum += number) : sum), 0);

// console.log(positiveSum([2, 4, 6, 8])); // => 20
// console.log(positiveSum([0, -3, 5, 7])); // => 12

// <--------------------------------      task      -------------------------------->

// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// const countPoints = (array) => {
//     const newArray = array.map(elem => elem.split(":"));
//     let sum = 0;
//     newArray.filter((score) => {
//         if (score[0] > score[1]) {
//             sum += 3;
//         } else if (score[0] === score[1]) {
//             sum += 1;

//         }
//         })
//        return sum;

// }
// const countPoints = (array) => {
//     const newArray = array.map(elem => elem.split(":"));

//    const win = newArray.filter((score) => score[0] > score[1]);
//     const equal = newArray.filter((score) => score[0] === score[1]);
//     return win.length * 3 + equal.length;

// }
// const countPoints = array => {
//     return array
//         .map(elem => elem.split(':'))
//         .reduce(
//             (acc, elem) =>
//                 elem[0] > elem[1] ? (acc += 3) : elem[0] === elem[1] ? (acc += 1) : acc,
//             0
//         );
// };

// <--------------------------------      task      -------------------------------->

// const getSums = (array) => {
//     let newArray = [];
//     array.reduce((summ, element) => {summ += element;
//     newArray.push(summ)
//     return summ},0);
//  return newArray;
// }

// console.log(getSums([1, 2, 3, 4, 5]));

// const getSums = (array) => array.reduce((newArray, element, index) => index === 0 ? [...newArray, element] : [...newArray, element += newArray[index - 1]], []);

// console.log(getSums([1, 2, 3, 4, 5]));

// <--------------------------------      task      -------------------------------->

// You should create a function constructor ‘Student’ which you can call with two arguments name and
// email.
// Name, email and homeworkResults fields should be hidden from user.
// Instance of Student should provide the following methods to get or change it’s state:
// getName(): returns student’s name.
// getEmail(): returns student’s email.
// addHomeworkResult(topic, success): you can call this method with 2 arguments: topic(string)
// and success(boolean). This method should add new element to student’s homeworkResults property.

// const Student = function (name, email) {
//     const homeWorkResults = [];
//     this.getName = function () {
//         return name;
//     }
//     this.getEmail = function () {
//         return email;
//     }
//     this.getHomeworkResult = function () {
//         return homeWorkResults;
//     }
//     this.addHomeworkResult = function (topic, success){
//         homeWorkResults.push({ topic, success });
//     }
// }

// class Student {
//     #name;
//     #email;
//     #homeWorkResults = [];
//     constructor(name, email) {
//         this.#name = name;
//         this.#email = email;
//     }
//     getName() {
//         return this.#name;
//     }
//     getEmail() {
//         return this.#email;
//     }
//     getHomeworkResult() {
//         return this.#homeWorkResults;
//     }
//     addHomeworkResult(topic, success) {
//         this.#homeWorkResults.push({ topic, success });
//     }
// }

// const student = new Student("John", "john@mail.com");
// console.log(student.getName());
// student.addHomeworkResult("HTML", true);
// console.log(student.getHomeworkResult());
// console.log(student.getName());
