let counter = localStorage.getItem('counter');
let notificationSpan;
const kartBtn = document.querySelectorAll('.kart-btn');

kartBtn.forEach(function (btn) {
    btn.addEventListener('click', getItems);
    btn.addEventListener('click', updateCounter);
});

const allProducts = {
    'Teclado Multiuso': 1,
    'Mouse Gamer': 2,
    'Monitor Hp': 3,
    'Xiaomi 12S': 4,
    'Xbox Series S': 5,
    'Play Station 5': 6
}

if (counter === null) {
    counter = 0;
} else {
    counter = parseInt(counter);
}

// OBTER E SALVAR ITENS NO STORAGE
function getItems () {
    
    const productName = document.querySelector('.product-name').innerText;
    const productPrice = document.querySelector('.product-price').innerText;
    const productImage = document.querySelector('.image').getAttribute('src');

    const product = {
        productName: productName,
        productPrice: productPrice,
        productImage: productImage,
    }

    if (window.localStorage.getItem(`productId-${allProducts[product.productName]}`)) {
        updateProductQuantity(productName);
    } else {
        const productJSON = JSON.stringify(product);
        window.localStorage.setItem(`productId-${allProducts[product.productName]}`, productJSON);
        updateProductQuantity(productName);
    }
}

// ATUALIZAR CONTADOR DE PRODUTOS
function updateCounter () {
    counter++;
    window.localStorage.setItem('counter', counter);

    notificationSpan = document.querySelector('#notification-counter');
    notificationSpan.innerText = counter;

    return counter;
}

// ATUALIZAR QUANTIDADE DO ITEM
function updateProductQuantity (productName) {
    let productQuantitiesJSON = window.localStorage.getItem('quantitiesItems');
    let productQuantities = JSON.parse(productQuantitiesJSON);
    
    productQuantities[productName]++;
    
    productQuantitiesJSON = JSON.stringify(productQuantities);
    window.localStorage.setItem('quantitiesItems', productQuantitiesJSON);

    return;
}

// NOTIFICATION SPAN

function onloadNotificationSpan () {
    const navBarContainer = document.querySelector('.navbar');

    navBarContainer.innerHTML += `<a href="../pages/cart-shopping.html" target="_self"><i class="fa-solid fa-cart-shopping" style="color: #ffffff; font-size: 20px;"></i><span id="notification-counter">${counter}</span></a>`;
}

onloadNotificationSpan();
