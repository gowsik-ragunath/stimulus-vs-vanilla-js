// function ready(callbackFunc) {
//   if (document.readyState !== 'loading') {
//     // Document is already ready, call the callback directly
//     callbackFunc();
//   } else if (document.addEventListener) {
//     // All modern browsers to register DOMContentLoaded
//     document.addEventListener('DOMContentLoaded', callbackFunc);
//   } else {
//     // Old IE browsers
//     document.attachEvent('onreadystatechange', function() {
//       if (document.readyState === 'complete') {
//         callbackFunc();
//       }
//     });
//   }
// }

// // This won't wait this stylesheet get loaded in document
// ready(function() {
//   const eventElement = document.querySelector(".event-show");
//   const defaultElement = document.querySelector(".default-show");

//   eventElement.innerHTML = eventElement.innerHTML + 
//   ` <div class="additional-text vanilla-js-content">Text added when document state is interactable in HIDDEN div</div>`;
//   defaultElement.innerHTML = defaultElement.innerHTML + 
//   ` <div class="additional-text vanilla-js-content">Text added when document state is interactable in DEFAULT div</div>`;

//   eventElement.classList.add("hidden");
// });

// document.querySelector(".event-show").addEventListener ("click", toggleElement, false);
// document.querySelector(".default-show").addEventListener ("click", toggleElement, false);

// function toggleElement() {
//   var eventElement = document.querySelector(".event-show");
//   var defaultElement = document.querySelector(".default-show");

//   if(defaultElement.classList.contains("hidden")) {
//     defaultElement.classList.remove("hidden");
//     eventElement.classList.add("hidden");
//   } else {
//     eventElement.classList.remove("hidden");
//     defaultElement.classList.add("hidden");
//   }

// }