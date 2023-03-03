import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


  let product = document.getElementsByClassName('.product');

  let price =  document.getElementsByClassName('.price')

  product.setAttribute('data-price', price.value)

});
