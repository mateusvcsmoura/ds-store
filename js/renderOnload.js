setTimeout(function renderItems () {

    const container = document.querySelector('.container');
    let totalP = document.getElementById('total');

    let total = 0;

    const productQuantitiesJSON = window.localStorage.getItem('quantitiesItems');
    const productQuantitiesOBJ = JSON.parse(productQuantitiesJSON);

    for (let i = 0; i < window.localStorage.length; i++) {
        
        if (window.localStorage.key(i).startsWith("productId")) {
            
            const productJSON = window.localStorage.getItem(window.localStorage.key(i));
            const productOBJ = JSON.parse(productJSON);
        
            const product = document.createElement('div');
            product.setAttribute('class', 'product');

            const productImage = document.createElement('img');
            productImage.setAttribute('class', 'product-image');
            productImage.setAttribute('src', productOBJ.productImage);
            productImage.setAttribute('alt', 'product-image');

            const productName = document.createElement('p');
            productName.setAttribute('class', 'product-name');
            productName.innerText = productOBJ.productName;

            const productQuantity = document.createElement('span');
            productQuantity.setAttribute('class', 'product-quantity');
            productQuantity.innerText = `${productQuantitiesOBJ[productOBJ.productName]}x`;

            const productPrice = document.createElement('p');
            productPrice.setAttribute('class', 'product-price');
            productPrice.innerText = productOBJ.productPrice;

            total += parseInt(productOBJ.productPrice.slice(1)) * productQuantitiesOBJ[productOBJ.productName];

            product.append(productImage);
            product.append(productName);
            product.append(productQuantity);
            product.append(productPrice);

            container.appendChild(product);
        }
    }

    totalP.innerHTML = `Total: <strong>$${total}</strong>`;

}, 1000);

// set time out is working like a window.onload

// it's not repeating the function every 1s, but only when the page is loaded

