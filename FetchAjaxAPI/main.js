// ASYNCHRONUS CONCEPT

// function callback() {
//     console.log("Hello World");
// }

// function buttonClick() {
//     setTimeout(() => {
//         callback();
//     }, 5000);
//     console.log("Success Click Button");
// }

// ---------------------------------------------------------------------------

// AJAX

// function getProductsUrl(keyword) {
//     return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
// }

// function getProducts(keyword, callbackSuccess, callbackError) {
//     // Code AJAX Here!
//     const ajax = new XMLHttpRequest();
//     // Ajax Callback
//     ajax.onload = () => {
//         if (ajax.status === 200) {
//             const data = JSON.parse(ajax.responseText);
//             callbackSuccess(data);
//         } else {
//             // Handling Error
//             callbackError();
//         }
//     }
//     const url = getProductsUrl(keyword);
//     ajax.open("Get", url);
//     ajax.send();
// }

// function clearProducts() {
//     const productUl = document.getElementById("products");
//     productUl.textContent = "";
// }

// function displayProducts(data) {
//     data.data.products.forEach(product => displayProduct(product));
// }

// function getProdtctsError() {
//     console.log('Error get Products!');
//     alert('Error Get Products!');
// }

// function displayProduct(product) {
//     const productLi = document.createElement("li");
//     productLi.textContent = product.name;

//     const productUl = document.getElementById("products");
//     productUl.appendChild(productLi);
// }

// function clearTableProducts() {
//     const productUl = document.getElementById("table-products");
//     productUl.textContent = "";
// }

// function displayTableProducts(data) {
//     const table = document.createElement("table");
//     table.setAttribute("border", 1);

//     let index = 0;
//     data.data.products.forEach(product => {
//         table.insertRow(index).insertCell(0).innerText = product.name;
//         index++;
//     });

//     const tableProduct = document.getElementById("table-products");
//     tableProduct.appendChild(table);
// }

// function buttonClick() {
//     getProducts(document.getElementById("keyword").value, function(data) {
//         clearProducts();
//         displayProducts(data);
//     }, function() {
//         getProdtctsError();
//     });

//     getProducts(document.getElementById("keyword").value, function(data) {
//         clearTableProducts();
//         displayTableProducts(data);
//     }, function() {
//         getProdtctsError();
//     });
// }

// ---------------------------------------------------------------------------

// PROMISE
function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    // Code Promise Here!
    const promise = new Promise(function(resolve, reject) {
        // Code Async
        const ajax = new XMLHttpRequest();
        ajax.onload = () => {
            if (ajax.status === 200) {
                const data = JSON.parse(ajax.responseText);
                callbackSuccess(data);
            } else {
                // Handling Error
                callbackError();
            }
        }
        const url = getProductsUrl(keyword);
        ajax.open("Get", url);
        ajax.send();
    });
    return promise;
}

function clearProducts() {
    const productUl = document.getElementById("products");
    productUl.textContent = "";
}

function displayProducts(data) {
    data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products");
    productUl.appendChild(productLi);
}

function buttonClick() {
    getProducts(document.getElementById("keyword").value);
}