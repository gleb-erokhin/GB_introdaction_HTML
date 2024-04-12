// ищем блок страницы куда будут вставляться выбранные товары
const cart = document.querySelector('.cart');
// ищем все кнопки на странице с товарами
const addToCartBtn = document.querySelectorAll('.products-card-button');

// парсим файл с данными для карточек, откуда будем брать данные для корзины
const userData = JSON.parse(cardsData);

// закрыть карточку
// отслеживаем нажатие на саму карточку
cart.addEventListener('click', (e) => {
    console.log(e);
    // после нажатия ищем родительский блок кнопки для закрытия карточки (так как их может быть не одна)
    const info = document.querySelectorAll('.info');
    console.log(info);
    // пробегаемся по ним и ищем последний дочерний объект кнопка закрытия
    info.forEach(el => {
        console.log(el.lastElementChild);
        // если это действительно кнопка close
        if (el.lastElementChild.className === 'close') {
            console.log('del');
            // удалаяем карточку
            const card = document.querySelector('.card');
            card.remove();
        }
    })
})

const deleteCard = (productParent) => {
    productParent.remove();
}

// пробегаемся по всем кнопкам
addToCartBtn.forEach((element, index) => {
    console.log(element);
    // каждому элементу создаем событие по клику
    element.addEventListener("click", () => {
        // обавляем отступы когда будут карточки и чтобы ничего не было на сайте если в корзину ничего не выбрано
        cart.style.padding = "50px";
        cart.insertAdjacentHTML('beforeend', `
        <div class="card">
            <img class="products-card-img card_img" src="${userData[index].img}" alt="${userData[index].title}">
            <div class="info">
                <h2 class="card__title">${userData[index].title}</h2>
                <div class="card__content">
                    <p class="products-item-paragraf">${userData[index].info}</p>
                    <p class="card__item">Price: <span class="color">$${userData[index].price}</span> </p>
                </div>
                <button class="close">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                            fill="#575757" />
                    </svg>
                </button>
            </div>
        </div>
        `)
    })
})

