// ищем блок страницы куда будут вставляться выбранные товары
const cart = document.querySelector('.cart');
// ищем все кнопки на странице с товарами
const addToCartBtn = document.querySelectorAll('.products-card-button');

// парсим файл с данными для карточек, откуда будем брать данные для корзины
const userData = JSON.parse(cardsData);

// закрыть карточку
// отслеживаем нажатие на саму карточку
document.onclick = event => {
    console.log(event.target.classList);
    console.log(event.target.dataset.id);
    console.log(userData);
    if (event.target.classList.contains("close")) {
        // console.log("класс есть ");
        // closeCard(event.target.dataset.id)
        let card = document.querySelector('.card');
        card.remove(event.target.dataset.id)
    }
}

// пробегаемся по всем кнопкам
addToCartBtn.forEach((element, index) => {
    console.log(element);
    // каждому элементу создаем событие по клику
    element.addEventListener("click", () => {
        // обавляем отступы когда будут карточки и чтобы ничего не было на сайте если в корзину ничего не выбрано
        cart.style.padding = "50px";
        cart.insertAdjacentHTML('beforeend', `
        <div class="card" data-id="${userData[index].id}">
            <img class="products-card-img card_img" src="${userData[index].img}" alt="${userData[index].title}">
            <div class="info">
                <h2 class="card__title">${userData[index].title}</h2>
                <div class="card__content">
                    <p class="products-item-paragraf">${userData[index].info}</p>
                    <p class="card__item">Price: <span class="color">$${userData[index].price}</span> </p>
                </div>
                <button class="close" data-id="${userData[index].id}"></button>
            </div>
        </div>
        `)
    })
})

