// function displayProduct() {
//   fetch("./product.html?id=${products._id}")
//     .then((data) => data.json())
//     console.log(data);
//     // .then((dataProduct) => {
//     //   // let mySec = document.querySelector("main .limitedWidthBlock");
//     //   // let mainSection = document.createElement("section");
//     //   // mainSection.setAttribute("class", "items");
//     //   // mainSection.setAttribute("id", "items");
//     //   // dataProducts.forEach((products) => {
//     //   //   mainSection.innerHTML += `
//     //   //         <a href="./product.html?id=${products._id}">
//     //   //         <article>
//     //   //         <img src="${products.imageUrl}" alt="${products.altTxt}">
//     //   //         <h3 class="productName">${products.name}</h3>
//     //   //         <p class="productDescription">${products.description}</p>
//     //   //         </article>
//     //   //         </a>
//     //   // `;
//     //   });
//     //   mySec.appendChild(mainSection);
//     // })
//     // .catch((error) => {
//     //   alert("error");
//     // });
// }

// const { orderProducts } = require("../../back/controllers/product");

// const { orderProducts } = require("../../back/controllers/product");

// let url = `./product.html?id=${products._id}`;
const produit = window.location.search.split("?id=").join("");
console.log(produit);
let produitData = [];
const fetchProduit = async () => {
  await fetch(`http://localhost:3000/api/products/${produit}`)
    .then((res) => res.json())
    .then((data) => {
      produitData = data;
      console.log(produitData);
    });
  // console.log(res.json());
};
const produitDisplay = async () => {
  await fetchProduit();
  let myImage = document.querySelector("article .item__img");
  myImage.innerHTML = ` 
              <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"> 
    `;
  let myTitle = document.querySelector("#title");
  myTitle.textContent = `${produitData.name}`;
  let myPrice = document.querySelector("#price");
  myPrice.textContent = `${produitData.price}`;
  let myDescription = document.querySelector("#description");
  myDescription.textContent = `${produitData.description}`;
  // myTitle.innerHTML = ` 
    // `;
};
produitDisplay();

//********************autre sol************ */
// const img = document.querySelector(".item__img");
// fetch(`http://localhost:3000/api/products/${produit}`)
//   .then((data) => data.json())
//   .then((dataProduct) => console.log(dataProduct));
//********************autre sol************ */

// .then((dataProduct) => {
//   // let myId = document.querySelector(".item__img");
//   // dataProduct.forEach((product) => {
//   //   console.log(product);
//   // });
//    console.log(dataProduct);
// });
// let url = `./product.html?id=${products._id}`;
// console.log(url)

// displayProduct();
// (async function () {
//   const productId = getProductId();
//   console.log(productId);
//   const product = await getProduct(productId);
//   // console.log(product);
//   hydrateProduct(product);
// })();
// function getProductId() {
//   return new URL(location.href).searchParams.get("id");
// }

// function getProduct(productId) {
// fetch(`./product.html?id=${productId}`)
//   .then((data) => data.json())
//   .then((dataProducts) => {
//     let mySec = document.querySelector("main .limitedWidthBlock");
//     let mainSection = document.createElement("section");
//     mainSection.setAttribute("class", "items");
//     mainSection.setAttribute("id", "items");
//     dataProducts.forEach((products) => {
//       mainSection.innerHTML += `
//             <a href="./product.html?id=${products._id}">
//             <article>
//             <img src="${products.imageUrl}" alt="${products.altTxt}">
//             <h3 class="productName">${products.name}</h3>
//             <p class="productDescription">${products.description}</p>
//             </article>
//             </a>
//     `;
//     });
//     mySec.appendChild(mainSection);
//   })
//   .catch((error) => {
//     alert("error");
//   });
// }
// function hydrateProduct(product) {}
