window.onload = function setProductQuantityCounter () {

    const productQuantities = {
        'Teclado Multiuso': 0,
        'Mouse Gamer': 0,
        'Monitor Hp': 0,
        'Xiaomi 12S': 0,
        'Xbox Series S': 0,
        'Play Station 5': 0
    };

    if (!window.localStorage.getItem('quantitiesItems')) {
        const productQuantitiesJSON = JSON.stringify(productQuantities);
        window.localStorage.setItem('quantitiesItems', productQuantitiesJSON);
    }
}

