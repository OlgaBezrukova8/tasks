/* Your task is to write a function which returns the sum of following series 
upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Examples:(Input --> Output)

1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */

// function SeriesSum(n) {
//   let number = 0;
//   for (let i = 0; i < n; i += 1) {
//     number += 1 / (1 + 3 * i);
//   }

//   return number.toFixed(2);
// }

// console.log(SeriesSum(1));
// console.log(SeriesSum(2));
// console.log(SeriesSum(5));

// 1 - 1/1+3*0
// 2 - 1/1+3*0 + 1/1+3*1
// 3 - 1/1+3*0 + 1/1+3*1 + 1/(1+3*2)
// 4 - 1/1+3*0 + 1/1+3*1 + 1/(1+3*2) + 1(1+3*3)

// function accum(s) {
//   //   return s
//   //     .split("")
//   //     .map((symbol, index) => {
//   //       return symbol.toUpperCase() + symbol.repeat(index).toLowerCase();
//   //     })
//   //     .join("-");

//   let symUpper = "";
//   for (let i = 0; i < s.length; i += 1) {
//     symUpper += s[i].toUpperCase();

//     for (let y = 0; y < i; y += 1) {

//     }
//     symUpper += "-";
//   }
//   return symUpper;
// }

// console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")

// let array = [];

// const reverseSeq = (n) => {
//   for (let i = n; i >= 1; i -= 1) {
//     array.push(i);
//   }

//   return array;
// };

// console.log(reverseSeq(5));

/* <----------------------------------------------------------------> */

/* Introduction

The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.

Task

Given a year, return the century it is in.

Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */

// const century = (year) => Math.ceil(year / 100);

// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(89));
// console.log(century(597244));

/* <----------------------------------------------------------------> */

/* Complete the solution so that it returns true if the first argument(string) passed 
in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

// function solution(str, ending) {
//   if (str.length < ending.length) {
//     return false;
//   }

//   for (
//     let i = str.length - 1, y = ending.length - 1;
//     y >= 0 && i >= 0;
//     i -= 1, y -= 1
//   ) {
//     if (str[i] !== ending[y]) {
//       return false;
//     }
//   }

//   return true;
// }

// const solution = (str, ending) => str.endsWith(ending);

// console.log(solution("abcde", "cde")); // true
// //   console.log(solution("abcde", "abc")); // false
// console.log(solution("sumo", "omo")); // false
// console.log(solution("ails", "fails")); // false
