// MODULE 1 - variables and operator types

// <-----     TASK 1     ----->

// You need to calculate amount of tip to give in a restaurant/cafe.
//  Workflow: 
// 1. User inputs check number. (Use “prompt” function). 
// 2. User inputs tip percentage. (Use “prompt” function) 
// 3. For an empty string or cancelled input, show “Canceled.” 
// 4. You need to validate the input data: both values should be numbers, total sum can’t be 
// a negative number, percentage can’t be negative and bigger than 100. 
// 5. If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function). 
// 6. You need to calculate tip amount and total sum to pay. 
// 7. Show message: (example). Use ”alert” function 
// Check number: 200 
// Tip: 15% // Tip amount: 30 // Total sum to pay:  230

// SOLUTION

// const payCustomer = prompt('Введіть суму замовлення');
// const tipCustomer = prompt('Введіть відсоток чайових');

// if (!payCustomer || !tipCustomer) {
//     alert('Canceled');
// } else {
//     const editPayCuctomer = Number.parseFloat(payCustomer);
//     const editTipCustomer = Number.parseFloat(tipCustomer);
//     console.log(editPayCuctomer);
//     console.log(editTipCustomer);
//     if (Number.isNaN(editPayCuctomer) || Number.isNaN(editTipCustomer) || editTipCustomer < 0 || editTipCustomer > 100 || editPayCuctomer < 0) {
//         alert('Invalid input data');
//     } else {
//         const tip = Number(((editPayCuctomer * editTipCustomer) / 100).toFixed(2));
//         console.log(tip); const totalSum = (editPayCuctomer + tip).toFixed(2);
//         console.log(totalSum);
        
//         alert(`Check number: ${ editPayCuctomer }\nTip: ${ editTipCustomer }%\nTip amount: ${ tip }\nTotal sum to pay: ${ totalSum }`);
//     }
// }


// <-----     TASK 2     ----->

// Find middle character of the word. 
// User is going to input a word. Your task is to find the middle character of this word. 
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters. 
// You should validate for cancelled input, empty value and for value with spaces only, in that case show message: “Invalid value”. 
// For user input use “prompt” function. For displaying result use “alert” function.  
// Examples: 
//  For user input “test” should return “es” 
//  For user input “character” should return “a” 
//  For user input “B” should return “B” 
//  For user input “” should return “Invalid value” 
//  For user input “       “ should return “Invalid value”

// SOLUTION

// const word = prompt("Enter word");

// if (word === null || word.trim() === "") {
//     alert("Invalid value");
// } else {
//     if (word.length % 2 === 0) {
//         const char = word.slice(word.length / 2 - 1, word.length / 2 + 1);
//         console.log(char); alert(`${char}`);
//     } else {
//         const char = word.slice(Math.floor(word.length / 2), Math.floor(word.length / 2) + 1);
//         alert(`${char}`);
//     }
// }

// HOMEWORK

// Write the code which verify user rights. 
// Step 1. Check login 
//  Ask user for a login 
// use prompt() //  If the input is an empty line or Esc – show “Canceled.” 
// for showing - use alert() 
//  If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”. 
//  If it’s another string – then show “I don’t know you”. 
//  If the visitor enters "User" or "Admin", then prompt for a password. 
// Step 2. Check password: 
//  For an empty string or cancelled input, show “Canceled.” 
//  For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”. 
// In other case, show “Wrong password”. 
// Step 3. Greets the user appropriately: 
//  If the current time in hours is more then 5.00 and less then 20: 
// current hours – new Date().getHours() 
//  For “User” show “Good day, dear User!” 
//  For “Admin” show “Good day, dear Admin!” 
//  In other way: 
//  For “User” show “Good evening, dear User!” 
//  For “Admin” show “Good evening, dear Admin!