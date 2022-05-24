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

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const elementOfArray = this.books.indexOf(oldName);
//     this.books.splice(elementOfArray, 1, newName);
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune")); // ["Dune", "Haze", "The guardian of dreams"]

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     let add = 0;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (newPotion.name === this.potions[i].name) {
//         add += 1;
//       }
//     }
//     if (add === 0) {
//       this.potions.push(newPotion);
//       return;
//     }
//     return `Error! Potion ${newPotion.name} is already in your inventory!`;
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 1; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//       }
//     }

//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
// };

// console.log(atTheOldToad.getPotions());
//console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

// const userInput = prompt("Enter login");
// // const userInputLower = userInput.toLowerCase();
// const userName = "User";
// const adminName = "Admin";
// let userPassword = "";
// const rightUserPassword = "UserPass";
// const rightAdminPassword = "RootPass";
// const currentHour = new Date().getHours(); // 14

// // TODO: switch login to ToLowerCase

// if (userInput === "" || userInput === null) {
//   alert("Canceled");
// } else if (userInput.length < 4) {
//   alert("I don't know any users having name length less than 4 symbols");
// } else if (userInput === userName || userInput === adminName) {
//   userPassword = prompt("Enter password");
// } else {
//   alert("I don’t know you");
// }

// if (userPassword === "" || userPassword === null) {
//   alert("Canceled");
// } else if (userInput === userName) {
//   if (userPassword === rightUserPassword) {
//     if (currentHour > 5 && currentHour < 20) {
//       alert("Good day, dear User!");
//     } else {
//       alert("Good evening, dear User!");
//     }
//   } else {
//     alert("Wrong password");
//   }
// } else if (userInput === adminName) {
//   if (userPassword === rightAdminPassword) {
//     if (currentHour > 5 && currentHour < 20) {
//       alert("Good day, dear Admin!");
//     } else {
//       alert("Good evening, dear Admin!");
//     }
//   } else {
//     alert("Wrong password");
//   }
// }

// console.log(userPassword);
// console.log(currentHour);

// function login() {
//   const input = prompt("Enter login").toLowerCase();

//   let pass = "";
//   const userName = "user";
//   const adminName = "admin";

//   const userPass = "UserPass";
//   const adminPass = "RootPass";

//   if (input === "" || input === null || input < 4) {
//     alert("Canceled");
//     return;
//   } else if (input === userName || input === adminName) {
//     pass = prompt("Enter password");
//   } else {
//     alert("I don't know");
//     return;
//   }

//   if (input === adminName) {
//     if (pass === adminPass) {
//       alert("Admin: message");
//     } else {
//       alert("Canceled");
//     }
//   } else if (input === userName) {
//     if (pass === userPass) {
//       alert("User: message");
//     } else {
//       alert("Canceled");
//     }
//   } else {
//     alert("I don't know");
//   }

//   const calcInput = prompt("Enter symbol");
//   const number = Number(calcInput[0]);
//   const number2 = Number(calcInput[2]);
//   const operator = calcInput[1];

//   if (input === userName) {
//     alert("User doesn't have right to use calculator");
//   } else if (input === adminName) {
//     if (operator === "+") {
//       alert(number + number2);
//     } else if (operator === "-") {
//       alert(number - number2);
//     } else if (operator === "*") {
//       alert(number * number2);
//     } else if (operator === "/") {
//       alert(number / number2);
//     } else {
//       return "Not symbol";
//     }
//   }

//   if (input === userName) {
//   } else if (pass === userPass) {
//     prompt("User: message");
//   } else if (pass === adminPass) {
//     prompt("Admin: message");
//   }
// }

// login();

// Write a function which creates an array from the given range of number
// // makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// // makeListFromRange([8, 5]) // [5, 6, 7, 8]

// function makeListFromRange(a, b) {
//   let array = [];

//   if (a < b) {
//     for (let i = a; i <= b; i += 1) {
//       array.push(i);
//     }
//   } else {
//     for (let i = b; i <= a; i += 1) {
//       array.push(i);
//     }
//   }

//   return array;
// }

// console.log(makeListFromRange(8, 5));

// const array2 = [3, 4, 5, 4, 3];
// let total = 0;

// for (let i = 0; i < array2.length; i += 1) {
//   if (array2[i] === 4) {
//     total += 1;
//   }
// }

// console.log(total);

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// function filterArray(inputUsers) {
//   let arrayUsers = [];

//   for (let user of inputUsers) {
//     if (user.eyeColor === "blue") {
//       arrayUsers.push(user);
//     }
//     // console.table(objectUsers);
//   }

//   return arrayUsers;
// }

// let usr = {
//   id: "e1bf46ab-7168-491e-925e-f01e21394812",
//   name: "Sheree Anthony",
//   email: "shereeanthony@kog.com",
//   eyeColor: "brown",
//   friends: ["Goldie Gentry", "Briana Decker"],
//   isActive: true,
//   balance: 2764,
//   skills: ["lorem", "veniam", "culpa"],
//   gender: "female",
//   age: 39,
// };
// const array1 = [1, 1, 2, 3, 4, 7];
// console.log(users.indexOf(usr));

// function removeUser(inputUsers) {
//   for (let i = 0; i < inputUsers.length; ) {
//     if (inputUsers[i].balance <= 3000) {
//       inputUsers.splice(i, 1);
//     } else {
//       i += 1;
//     }
//   }

//   return inputUsers;
// }

// removeUser(users);
// console.table(users);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   callback(pizzaName);
//   return;
// }

// console.log(makeMessage("Royal Grand", makePizza));

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     let exists = false;
//     for (let pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         exists = true;
//         break;
//       }
//     }

//     if (exists === false) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }

//     return onSuccess(pizzaName);
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// Create a function checkSchedule
// User enters string via prompt
// if user enters "shop" call callback shop - it return "shop is working"
// if iser enters "bar" call callback bar - it return "bar is working" / "bar is not working"
// depending on date parametr (> 8 - work, < 8 - not work)
// otherwise call callback unknown - it get user enter in parametrs
// and return "${} not exists"

// const checkSchedule = (input, shopParam, barParam, unknownParam) => {
//   //let enter = prompt("Enter word");
//   const shopName = "shop";
//   const barName = "bar";

//   if (input === shopName) {
//     return shopParam();
//   } else if (input === barName) {
//     return barParam();
//   }

//   return unknownParam(input);
// };

// const shop = () => "shop is working";

// const barSchedule = () => {
//   if (new Date().getHours() > 8) {
//     return "bar is working";
//   }

//   return "bar is not working";
// }

// const unknown = (name) => `${name} not exists`;

// const unknownVersin2 = (name) => `${name} not exists but building`;

// console.log(checkSchedule("shop", shop, barSchedule, unknown));
// console.log(checkSchedule("bar", shop, barSchedule, unknown));
// console.log(checkSchedule("market", shop, barSchedule, () => "rfrfr"));

// function cycleFn(element) {
//   console.log(element);
// }

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
// Change code below this line

// for (let i = 0; i < orderedItems.length; i += 1) {
//   totalPrice += orderedItems[i];
// }

//   orderedItems.forEach(cycleFn);

//    for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

// function fn(element) {
//   if(user.friends.indexOf(friendName) !== -1) {
//     return true;
//   }

//   return false;
// }

// const getUsersWithFriend = (users, friendName) => {
//   //   const arrayOfFriends = users.flatMap(user => user.friends);
//       users.filter(user => user.friends.indexOf(friendName) !== -1)
//   };

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getFriends = (users) => {
//   const arrayOfFriends = users.flatMap(({ friends }) => friends);
//   return arrayOfFriends.filter(
//     (user, index, array) => array.indexOf(user) === index
//   );
// };

// console.log(getFriends(users));
// // Change code below this line
// const getFriends = (users) => {
//   const arrayOfFriends = users.flatMap(({friends}) => friends);
//   return arrayOfFriends.filter((user, index, array) => array.indexOf(user) === index)
// };

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const playerValues = Object.values(players);
// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed
// );

// console.log(totalAveragePlaytimePerGame);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalFriendCount = (users) =>
//   users.reduce((total, user) => {
//     const arrayFriends = users.flatMap((user) => user.friends);
//     return total + arrayFriends;
//   }, 0);

// console.log(getTotalFriendCount(users));

// const scores = [61, 19, 74, 7, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((element) => element.gender === gender)
//     .reduce((total, user) => {
//       return total + user.balance;
//     }, 0);

// const resultOfFilter = [...users].filter(
//   (element) => element.gender === "male"
// );
// console.log(resultOfFilter);

// console.dir(_);

// const treeTwo = new Node(
//   1,
//   new Node(8, null, new Node(3, null, null)),
//   new Node(4, null, new Node(5, null, new Node(7)))
// );

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     if (arr[i] === arr[i + 1] - 1) {
//       continue;
//     }

//     return arr[i + 1];
//   }
// }

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const itemIndex = this.items.indexOf(itemToRemove);
//     this.items.splice(itemIndex, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class Car {
//   // Change code below this line
//   static Price = {
//     MAX_PRICE: 50000,
//   };

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.Price.MAX_PRICE) {
//       this.#price = newPrice;
//     }

//     return this.#price;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }

//   blacklistedEmails;

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     this.blacklistedEmails.find(blackEm => blackEm === email);
// }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// <--------------------------------      task      -------------------------------->

// var calc = function (expression) {
//   const braketsOpen = "(";
//   const braketsClosed = ")";

//   let sumBrakets = 0;
//   let maxBrakets = 0;
//   let startBraketsIndex = 0;
//   let endBraketsIndex = 0;

//   const plus = "+";
//   const minus = "-";
//   const multiply = "*";
//   const division = "/";

//   for (let i = 0; i < expression.length; i += 1) {
//     if (expression[i] === braketsOpen) {
//       sumBrakets += 1;
//     } else if (expression[i] === braketsClosed) {
//       sumBrakets -= 1;
//     }

//     if (sumBrakets > maxBrakets) {
//       maxBrakets = sumBrakets;
//       startBraketsIndex = i;
//     }
//     // else if() {}
//   }

//   for (
//     let i = startBraketsIndex;
//     i < expression.length - startBraketsIndex;
//     i += 1
//   ) {
//     if (expression[i] === braketsClosed) {
//       endBraketsIndex = i;
//       break;
//     }
//   }

//   const subExpression = expression.slice(
//     startBraketsIndex + 1,
//     endBraketsIndex
//   );
//   for (let i = 0; i < subExpression.length; i += 1) {
//     if (
//       subExpression[i] === multiply ||
//       subExpression[i] === division ||
//       subExpression[i] === minus ||
//       subExpression[i] === plus
//     ) {
//       let rightNumber = 0;
//       let leftNumber = 0;

//       for (let y = i + 1; y <= subExpression.length - 1; y += 1) {
//         if (!Number.isNaN(subExpression[y])) {
//           rightNumber = Number.parseInt(subExpression.slice(i + 1, y + 1));
//         }
//       }

//       for (let y = i - 1; y >= 0; y -= 1) {
//         if (!Number.isNaN(subExpression[y])) {
//           leftNumber = Number.parseInt(subExpression.slice(y, i));
//         }
//       }
//     }
//     // switch (subExpression[i]) {
//     //   case multiply:

//     //     break;

//     //   case division:
//     //     break;

//     //   case plus:
//     //     break;

//     //   case minus:
//     //     break;
//     // }
//   }

//   return subExpression;
// };

// console.log(calc("(2/(2+3)*4)--6"));

// (2/(2+3.33)*4)--6
// 0123456789

// <--------------------------------      task      -------------------------------->

// function useCallback(callback) {
//   callback(1);
//   callback(2);
//   callback(3);
// }

// function callback(sentence) {
//   console.log(sentence);
// }

// useCallback(callback);

// <--------------------------------      task      -------------------------------->

// const removeExclamationMarks = (s) =>
//   s
//     .split("")
//     .filter((symbol) => symbol !== "!")
//     .join("");

// console.log(removeExclamationMarks("Hello World!"));

// <--------------------------------      task      -------------------------------->

// const sumMix = (x) =>
//   x.map((number) => Number(number)).reduce((sum, el) => (sum += el));

// console.log(sumMix([9, 3, "7", "3"]));

// <--------------------------------      task      -------------------------------->

// const otherAngle = (a, b) => 180 - a - b;

// console.log(otherAngle(30, 60)); // 90
// console.log(otherAngle(60, 60)); // 60

// <--------------------------------      task      -------------------------------->

// const toJadenCase = (str) =>
//   str
//     .split(" ")
//     .map((item) => item[0].toUpperCase() + item.slice(1))
//     .join(" ");

// console.log(
//   toJadenCase(
//     "Write a function called atLeastTwo that receives an array and a callback as its arguments"
//   )
// );

// <--------------------------------      task      -------------------------------->

// const atLeastTwo = (array, callback) => {
//   console.log(callback(array).length > 2);
// };

// function isOdd(array) {
//   return array.filter((el) => el % 2 === 0);
// }

// atLeastTwo([1, 2, 3, 4, 5], isOdd);
// atLeastTwo([2, 4, 6], isOdd);
// atLeastTwo([1, 2, 3, 4, 5], (t) => t > 3);

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

//   for (let name of names) {
//     obj[name] = [];
//   }

//   array.reduce((sum, firstElement) => {
//     obj[firstElement.name].push(firstElement);
//   }, {});

//   return obj;
// }

// function isOdd(number) {}

// console.log(obj);

// const isOdd = (num) => {
//   return num % 2 === 1;
// };

// const groupBy = (array, callback) =>
//   array.reduce((accumulator, currentValue) => {
//     const key = callback(currentValue);

//     if (accumulator[key]) {
//       accumulator[key].push(currentValue);
//     } else {
//       accumulator[key] = [currentValue];
//     }

//     return accumulator;
//   }, {});

// console.log(groupBy(input, (t) => t.name));
// console.log(groupBy(input, (t) => isOdd(t.yearOfBirth)));

// function accum(s) {
//     //   return s
//     //     .split("")
//     //     .map((symbol, index) => {
//     //       return symbol.toUpperCase() + symbol.repeat(index).toLowerCase();
//     //     })
//     //     .join("-");

//     // let symUpper = "";
//     // for (let i = 0; i < s.length; i += 1) {
//     //   symUpper += s[i].toUpperCase();

//     //   for (let y = 0; y < i; y += 1) {
//     //       symUpper += s[i].toLowerCase()
//     //   }
//     //   symUpper += "-";
//     // }
//     // return symUpper;
//   }

//   console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")

// const accum = (s) =>
//   s
//     .split("")
//     .map(
//       (symbol, index) =>
//         symbol.toUpperCase() + symbol.repeat(index).toLowerCase()
//     )
//     .join("-");

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
