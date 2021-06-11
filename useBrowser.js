let userAgent = navigator.userAgent.toLowerCase();
let Mozila = /firefox/.test(userAgent);
let Chrome = /chrome/.test(userAgent);
let Safari = /safari/.test(userAgent);
let Opera = /opera/.test(userAgent);
let message = document.querySelector(".useBrowser");
console.log(Mozila);
console.log(Chrome);
console.log(Safari);
console.log(Opera);
console.log(message);
let InternetExplorer = false;
if (
  (/mozilla/.test(userAgent) &&
    !/firefox/.test(userAgent) &&
    !/chrome/.test(userAgent) &&
    !/safari/.test(userAgent) &&
    !/opera/.test(userAgent)) ||
  /msie/.test(userAgent)
)
  InternetExplorer = true;
if (InternetExplorer) {
  message.textContent = "Error: you use incorrect browser";
}
