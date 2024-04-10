const cart = document.querySelector('.cart');
const addToCartBtn = document.querySelectorAll('.products-card-button');

addToCartBtn.forEach(element => {
    console.log(element);
    // element.textContent = "test"
    element.addEventListener("click", () => {
        cart.textContent = `${element.price}`
        console.log(element);
    })
})