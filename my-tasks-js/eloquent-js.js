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

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;

// //console.log((apartment.location = {}));
// console.log((apartment.location.country = "Jamaica"));
// console.log((apartment.location.city = "Kingston"));
// console.log((apartment.area = 60));
// console.log((apartment.rooms = 3));
// console.log(apartment);
// // const location = {
// // country: "Jamaica",
// // city: "Kingston",
// // }

// const array = [
//   1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1,
//   2, 3, 4, 5, 6,
// ];
// let count = 0;

// for (let i = 0; i < array.length; i += 1) {
//   if (i % 10 === 0 && i !== 0) {
//     count += 1;
//     let y = 0;
//   }
// }

// console.log(count);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keysArray = Object.keys(object);
//   for (let key of keysArray) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// const animal = {
//   name: "JSON",
//   age: 40,
// };

// console.log(countProps(animal));
// console.log(countProps(animal));
// console.log(countProps(animal));
// console.log(countProps(animal));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (let product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// // console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];

//   for (let product of products) {
//     for (let key in product) {
//       if (propName === key) {
//         array.push(product[key]);
//       }
//     }
//   }

//   return array;
//   // Change code above this line
// }

// console.log(getAllPropValues("name"));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(lowToday);
// console.log(todayIcon);

/* Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.

Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. 
В новом объекте должно быть свойство completed, значение которого хранится в одноимённой 
локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и priority, 
могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть 
значения по умолчанию, хранящиеся в одноимённых локальных переменных. */

// function makeTask(data) {
//   const completed = false;
//   const category2 = "General";
//   const priority2 = "Normal";
//   // Change code below this line
//   const { text, category = category2, priority = priority2 } = data;

//   const object = { text, category, priority, completed };
//   return object;
//   // Change code above this line
// }

// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

/* Функция findMatches() принимает произвольное количество аргументов. 
Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы,
начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только 
они есть в массиве первого аргумента. */

// function findMatches(arrayOfNumbers, ...args) {
//   const matches = [];

//   for (let oneArgument of args) {
//     for (let oneNumber of arrayOfNumbers) {
//       if (oneArgument === oneNumber) {
//         matches.push(oneArgument);
//       }
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length
// is even - return the middle 2 characters.
// You should validate for cancelled input, empty value and for value with spaces only,
// in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
//  For user input “       “ should return “Invalid value”

/* 
1. проверить длину слова на четное / не четное (Написать цикл for) - остаток от деления
2. найти средину - длину слова делить на 2
3. если четное - показать средние 2 буквы 
4. 
 */

// function findCharacter() {
//   const word = prompt("Enter word");
//   if (word === "" || word.trim() === "" || !Number.isNaN(Number(word))) {
//     alert("Invalid value");
//     return;
//   }

//   // let sumOfMiddleCharacter = "";
//   // const middle = word.length / 2;
//   // if (word.length % 2 === 0) {
//   //   // четные
//   //   sumOfMiddleCharacter = word[middle - 1] + word[middle];
//   // } else {
//   //   // нечетные
//   //   sumOfMiddleCharacter = word[Math.floor(middle)];
//   // }

//   const middle = word.length / 2;

//   const midChar =
//     word.length % 2 === 0
//       ? word[middle - 1] + word[middle]
//       : word[Math.floor(middle)];
//   alert(midChar);
// }
// while (true) {
//   findCharacter();
// }
// console.log(findCharacter("test")); // es
// console.log(findCharacter("tester")); // st
// console.log(findCharacter("character")); // a
// console.log(findCharacter("B")); // B
// console.log(findCharacter("")); // error
// console.log(findCharacter("      ")); // error
