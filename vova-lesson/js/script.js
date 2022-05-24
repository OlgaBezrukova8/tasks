// опрацювати аналог ховера через JS
// змінити координати кнопки
// змінити координати рандомно
// кнопки не мають виходити за межі екрану
// використати делегування подій

// const container = document.querySelector(".container");

// const hoverHandler = (event) => {
//   const { target: button } = event; // деструктуризація об"єкту (переназиваємо константу target на button)
//   button.style.top = `${Math.floor(
//     Math.random() * (window.innerHeight - button.clientHeight)
//   )}px`;
//   button.style.left = `${Math.floor(
//     Math.random() * (window.innerWidth - button.clientWidth)
//   )}px`;

//   console.log(window);
//   console.log("button.clientHeight", button.clientHeight);
//   console.log("button.clientWidth", button.clientWidth);
// };

// container.addEventListener(
//   "mouseover",
//   hoverHandler
//   //   console.log(this);
//   //   console.log(e.currentTarget);
//   // this и e.currentTarget - попадает один и тот же контент
// );

/* ------------------------------------------------------ */

// const main = document.queryCommandValue("main");

// main.addEventListener("click", (event) => {
// //   event = {
// //     target: <button>Open modal</button>,
// //   };
// //   event.target;
// //   const target = event.target;

//   const { target } = event;
//   if (target.dataset.modal) {
//     console.log("click");
//   }
// });
