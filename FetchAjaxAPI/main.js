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
// function getProductsUrl(keyword) {
//     return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
// }

// function getProducts(keyword) {
//     // Code Promise Here!
//     const promise = new Promise(function(resolve, reject) {
//         // Code Async
//         const ajax = new XMLHttpRequest();
//         ajax.onload = () => {
//             if (ajax.status === 200) {
//                 const data = JSON.parse(ajax.responseText);
//                 resolve(data);
//             } else {
//                 // Handling Error
//                 reject(Error('Gagal Mengambil Data!'));
//             }
//         }
//         const url = getProductsUrl(keyword);
//         ajax.open("Get", url);
//         ajax.send();
//     });
//     return promise;
// }

// function clearProducts() {
//     const productUl = document.getElementById("products");
//     productUl.textContent = "";
// }

// function displayProducts(data) {
//     data.data.products.forEach(product => displayProduct(product));
// }

// function displayProduct(product) {
//     const productLi = document.createElement("li");
//     productLi.textContent = product.name;

//     const productUl = document.getElementById("products");
//     productUl.appendChild(productLi);
// }

// function buttonClick() {
// const promise = getProducts(document.getElementById("keyword").value);
// Promise Then Method
// promise
// .then((value) => {
//     return value.data.products;
// })
// .then((products) => {
//     clearProducts();
//     products.forEach((product) => {
//         displayProduct(product);
//     })
// })
// Promise Catch Method
// .catch((error) => {
//     alert(error.message);
// })
// Promise Finally Method
// .finally(() => {
//     console.log('Selesai memprose promise');
// })
// PROMISE ALL METHOD
// const promise1 = getProducts(document.getElementById("keyword").value);
// const promise2 = getProducts(document.getElementById("keyword2").value);
// const promise3 = getProducts(document.getElementById("keyword3").value);

// Promise.all([promise1, promise2, promise3])
//     .then(function(values) {
//         return values.map(value => value.data.products);
//     })
//     .then(function(values) {
//         clearProducts();
//         values.forEach(function(products) {
//             products.forEach((product) => {
//                 displayProduct(product);
//             })
//         })
//     })
//     .catch(function(error) {
//         alert(error.message);
//     })
//     .finally(() => {
//         console.log('Selesai memprose promise');
//     })
// }

// ---------------------------------------------------------------------------

// FETCH
// function getProductsUrl(keyword) {
//     return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
// }

// function getProducts(keyword) {
//     // Code Fetch API Here!
//     const url = getProductsUrl(keyword);
//     return fetch(url, {
//         method: 'GET'
//     }).then((response) => {
//         return response.json();
//     })
// }

// function clearProducts() {
//     const productUl = document.getElementById("products");
//     productUl.textContent = "";
// }

// function displayProducts(data) {
//     data.data.products.forEach(product => displayProduct(product));
// }

// function displayProduct(product) {
//     const productLi = document.createElement("li");
//     productLi.textContent = product.name;

//     const productUl = document.getElementById("products");
//     productUl.appendChild(productLi);
// }

// function buttonClick() {
//     const promise = getProducts(document.getElementById("keyword").value);
//     promise
//         .then((value) => {
//             return value.data.products;
//         })
//         .then((products) => {
//             clearProducts();
//             products.forEach((product) => {
//                 displayProduct(product);
//             })
//         })
//         .catch((error) => {
//             alert(error.message);
//         })
//         .finally(() => {
//             console.log('Selesai memprose promise');
//         })
// }

// ---------------------------------------------------------------------------

// ASYNC AWAIT
// function getProductsUrl(keyword) {
//     return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
// }

// function getProducts(keyword) {
//     return new Promise(function(resolve, reject) {
//         const ajax = new XMLHttpRequest();
//         ajax.onload = function() {
//             if (ajax.status === 200) {
//                 const data = JSON.parse(ajax.responseText);
//                 resolve(data);
//             } else {
//                 reject(Error("Gagal Mengambil Data !"));
//             }
//         };
//         ajax.open("GET", getProductsUrl(keyword));
//         ajax.send();
//     })
// }

// function clearProducts() {
//     const productUl = document.getElementById("products");
//     productUl.textContent = "";
// }

// function displayProducts(data) {
//     data.data.products.forEach(product => displayProduct(product));
// }

// function displayProduct(product) {
//     const productLi = document.createElement("li");
//     productLi.textContent = product.name;

//     const productUl = document.getElementById("products");
//     productUl.appendChild(productLi);
// }

// async function buttonClick() {
//     // Code Async Await Here!
//     try {
//         const value = await getProducts(document.getElementById("keyword").value);
//         const products = value.data.products;
//         clearProducts();
//         products.forEach((product) => {
//             displayProduct(product);
//         })
//     } catch (error) {
//         alert(error.message);
//     } finally {
//         console.log("Try Catch Berjalan Selesai");
//     }
// }

// --------------------------------------------------------------------------

// WEB WORKER

// const worker = new Worker('web-worker.js');

// function showLog(total) {
//     for (let i = 0; i < total; i++) {
//         console.log(i);
//     }
// }

// function buttonClick() {
//     console.log("Start Log");
//     showLog(20000);
//     console.log("Finish Log");
// }

// ---------------------------------------------------------------------------

// WEB WORKER COMMUNICATION

const worker = new Worker('web-worker.js');

worker.addEventListener('message', (event) => {
    console.log(`Receive message : ${event.data}`);
});

function buttonClick() {
    console.log("Start Log");
    worker.postMessage(1000);
    console.log("Finish Log");
}