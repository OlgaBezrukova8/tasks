// <-----     TASK 1     ----->

// Напишите цикл,  выводит такой треугольник

// SOLUTION

// const lines = 7;
// let delta = "#";
// let result = " ";

// for (let i = 0; i < lines; i += 1) {
//   console.log(delta);
//   delta += "#";
// }

// <-----     TASK 2     ----->

// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

// SOLUTION

// 1. Написать цикл for счетчик цифр от 1 до 100
// 2. В этом цикле написать условия if
// 3. первое условие - числв которые деляться на 3 - ‘Fizz’
// 4. второе условие - числв которые деляться на 5 - ‘Buzz’
// 5. вывести сумму чисел, которые деляться на 3 и на 5

// const min = 1;
// const max = 100;

// const firstWord = "Fizz";
// const secondWord = "Buzz";
// const sumWord = "FizzBuzz";

// for (let i = min; i <= max; i += 1) {
//   console.log(i); // i=15
//   if (i % 3 === 0 && i % 5 === 0) {
//     //15/5%0
//     console.log(sumWord); // >> Buzz
//   } else if (i % 3 === 0) {
//     // not enter
//     console.log(firstWord);
//   } else if (i % 5 === 0) {
//     // not enter
//     console.log(secondWord);
//   }
// }

// <-----     TASK 3     ----->

// Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.

// SOLUTION

// const firstStr = "# # # #";
// const secondStr = " # # # #";

// for (let i = 0; i < 8; i += 1) {
//   if (i % 2) {
//     console.log(secondStr);
//   } else {
//     console.log(firstStr);
//   }
// }

// <-----     TASK 4     ----->

// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

// SOLUTION

// function min(a, b) {
//   console.log(Math.min(a, b));
// }

// console.log(min(20, 40));
// console.log(min(20, -40));

// <-----     TASK 5     ----->

// Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.
// Напишите рекурсивную функцию isEven согласно этим правилам.
// Она должна принимать число и возвращать булевское значение.
// Потестируйте её на 50 и 75. Попробуйте задать ей -1.
// Почему она ведёт себя таким образом? Можно ли её как-то исправить?

// SOLUTION

// just function

// function isEven(a) {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// recursive function

// function isEvenR(a) {
//   if (a === 1) {
//     return false;
//   } else if (a === 0) {
//     return true;
//   } else if (a > 0) {
//     return isEvenR(a - 2);
//   } else {
//     return isEvenR(a + 2);
//   }
// }

// console.log(isEvenR(50));
// console.log(isEvenR(75));
// console.log(isEvenR(-1));

// <-----     TASK 6     ----->

// Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) –
// схожим образом с получением длины строки при помощи .length.
// Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”).
// У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1.
// Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.
// Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
// Затем напишите функцию countChar, которая работает примерно как countBs,
// только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”).
// Для этого переделайте функцию countBs.

// SOLUTION

// 1. написать функцию countBs - возвращает кол-во символов в строке length
// 2. написать функцию countChar - возвращает искаемый символ в строке .charAt(N)

// function countBs(a) {
//   return a.length;
// }

// console.log(countBs("Bye word B"));

// function countChar(a) {
//   return a.charAt(3);
// }

// console.log(countChar("Hello word"));

// let str = "Bye wordB B";
// let counter = 0;

// for (let i = 0; i < str.length; i += 1) {
//   if (str.charAt(i) === "B") {
//     counter += 1;
//   }
// }
// console.log(counter);

// right solution

// function countChar(str, count) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     if (str.toLowerCase().charAt(i) === count) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// console.log(countChar("BByeb AAAAAword B", "b"));

// <-----     TASK 7     ----->

// SOLUTION

// <-----     TASK 8     ----->

// SOLUTION

// <-----     TASK 9     ----->

// SOLUTION

// <-----     TASK 10     ----->

// <--------------------------------      training      -------------------------------->

// function calculateTotal(number) { // number=2
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) { // 0 1 2
//     // 0 1 2

//     total += i; // total=1; total=2
//     //return (total += i + number); // 0 + 3 = 3
//     // 1 + 3 = 4. // 2 + 3
//   }
//   return total;
// }

// console.log(calculateTotal(3));
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i]
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// <--------------------------------      training      -------------------------------->

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую
// только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const newStr = string.split(" ");
//   let longestWord = newStr[0];

//   for (const word of newStr) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// <--------------------------------      training      -------------------------------->

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]);
//     // newArray.push(numbers);

//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// <--------------------------------      training      -------------------------------->

/* Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они 
присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной 
длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, 
которые присутствуют в обоих исходных массивах. */

// function getCommonElements(array1, array2) {
//   let newArray = [];

//   //   for (let element of array1) {
//   //     // element == array1[i]
//   //     for (let element2 of array2) {
//   //       if (element === element2) {
//   //         newArray.push(element);
//   //       }
//   //     }
//   //   }

//   for (let element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3, 5], [2, 3, 4]));

// <--------------------------------      training      -------------------------------->

/* Напиши функцию getEvenNumbers(start, end) которая возвращает массив 
всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка 
(10 % 2 === 0). */

// function getEvenNumbers(start, end) {

//   let newArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }

//   return newArray;
// }

// console.log(getEvenNumbers(2, 5));

// <--------------------------------      training      -------------------------------->

/* Напиши функцию includes(array, value), которая делает тоже самое, 
что и метод массива массив.includes(значение) - проверяет, есть ли 
в массиве array значение value, возвращая true если есть и false в противном случае.
При выполнении этой задачи в теле функции includes() нельзя использовать 
метод массив.includes(значение). */

// function includes(array, value) {

//   for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));

// <--------------------------------      training      -------------------------------->

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел
// (параметр numbers) и возвращает новый массив В ОБРАТНОМ ПОРЯДКЕ, в котором будут только те ЧЕТНЫЕ элементы массива
// numbers, которые которые делятся на 2 чем значение параметра value (число).
// filterArray([1, 2, 3, 4, 5], 1) -> [4, 2]
// Подсказка: Цикл может перебирать не с первого элемента, а с последнего
