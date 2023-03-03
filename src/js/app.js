import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


  let product = document.getElementsByClassName('.card product');

  let price =  document.getElementsByClassName('.subtitle is-6 price')

  //let price2 =  document.getElementsByClassName('.price')

  console.log("price: "+price)
  //console.log("price2: "+price2)

  console.log("price.value: "+price.value)
  //console.log("price2.value: "+price2.value)

  product.setAttribute('data-price', price.value)

});
