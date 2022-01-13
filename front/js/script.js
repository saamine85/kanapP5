function displayProducts() {
  fetch("http://localhost:3000/api/products")
    .then((data) => data.json())
    .then((dataProducts) => {
      let mySec = document.querySelector("main .limitedWidthBlock");
      let mainSection = document.createElement("section");
      mainSection.setAttribute("class", "items");
      mainSection.setAttribute("id", "items");
      dataProducts.forEach((products) => {
        mainSection.innerHTML +=
          // afin d'afficher le produit dans l'url faut rendre l'id variable
          `
              <a href="./product.html?id=${products._id}">
              <article>
              <img src="${products.imageUrl}" alt="${products.altTxt}">
              <h3 class="productName">${products.name}</h3>
              <p class="productDescription">${products.description}</p>
              </article>
              </a> 
      `;
      });
      mySec.appendChild(mainSection);
    })
    .catch((error) => {
      alert("error");
    });
}
displayProducts();

// fetch("http://localhost:3000/api/products")
//   .then((data) => data.json())
//   .then((jsonListProduit) => {
//     console.log(jsonListProduit);
//   });

// main();
// async function main() {
//   const articles = await getArticles();
//   for (article of articles) {
//     displayArticles(articles);
//   }
// }

// function getArticles() {
//   return fetch("http://localhost:3000/api/products")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (articles) {
//       return articles;
//     })
//     .catch(function (error) {
//       alert(error);
//     });
// }
// function displayArticles(article) {
//   document.innerHTML += (`
//     <section class="items" id="items">
//           <a href="./product.html?id=42">
//             <article>
//               <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
//               <h3 class="productName">Kanap name1</h3>
//               <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
//             </article>
//           </a>
//         </section>`);
// }

// fetch("http://localhost:3000/api/products")
//   .then((data) => data.json())
//   .then((products) => {
//     console.log(products);
//   });
// const output = document.querySelector(".output");
// products.forEach((products) => {
//   console.log(products);
//   output.innerHTML += `
//      <section class="items" id="items">
//           <a href="./product.html?id=42">
//             <article>
//                <img src="${products.imageUrl}" alt="${products.altTxt}">
//                <h3 class="productName">${products.name}</h3>
//                <p class="productDescription">${products.description}</p>
//              </article>
//           </a>
//         </section>
//     `;
// });

// function displayProducts() {
//   products.forEach((product) => {
//     productsEl.innerHTML += `
//      <section class="items" id="items">
//           <a href="./product.html?id=42">
//             <article>
//               <img src="${products.imageUrl}" alt="${products.altTxt}">
//               <h3 class="productName">${products.name}</h3>
//               <p class="productDescription">${products.description}</p>
//             </article>
//           </a>
//         </section>
//     `;
//   });
// }
// displayProducts();
