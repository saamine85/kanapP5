/***********************deuxieme methode avec le fetch then *************** */

// const produit = window.location.search.slice(4);
// console.log(produit);
// // recuperer les donnees **************************
// function getProducts() {
//   fetch(`http://localhost:3000/api/products/${produit}`)
//     .then((dataprod) =>
//       // console.log(data)
//       // afficher la réponse **************************
//       // transformer notre reponse en json
//       // console.log(dataprod.json()) ça nous rend une promise pour lafficher il faut un 2eme then
//       dataprod.json()
//     )
//     .then((data) => {
//       // console.table(data)
//       // apres recuperation des donnee mnt creation le dom*******
//       let myImage = document.querySelector("article .item__img");
//       myImage.innerHTML = `
//               <img src="${data.imageUrl}" alt="${data.altTxt}">
//     `;
//       let myTitle = document.querySelector("#title");
//       myTitle.textContent = data.name;
//       let myPrice = document.querySelector("#price");
//       myPrice.textContent = data.price;
//       let myDescription = document.querySelector("#description");
//       myDescription.textContent = data.description;

//       // recuperation des options avec couleur*********
//       let myColor = document.querySelector("select");
//       data.colors.forEach((color) => {
//         let myOption = document.createElement("option");
//         myOption.textContent = color;
//         myOption.setAttribute("value", `${color}`);
//         // myOption.value = color;
//         // console.log(myOption);
//         myColor.append(myOption);
//       });
//       console.log(myColor);
//       // console.log(data.colors);
//     });
// }
// getProducts();

//       // myColor.innerHTML = `${data.map(
//       //   (colors) => `<option>${data.colors}</option>`
//       // )}`;

/***********************End deuxieme methode avec le fetch then *************** */

let prodStores = JSON.parse(localStorage.getItem("produit"));
// console.log(prodStores);

//*************************************affichage des produit local storage  */

const addPanier = document.querySelector("#cart__items");
// console.log(addPanier);

//***************************************begin calcul Total en test ************** */

const updateTotal = () => {
  const allProducts = document.querySelectorAll("article");
  // console.log(allProducts);
  let totaleP = 0;
  let total = 0;
  // let totalQuantity = 0;
  allProducts.forEach((item) => {
    //recuperation des prix
    // rendre le prix en number
    let price = Number(
      item.querySelector("p#price").innerText.replace("€", "")
    );
    let quantity = parseInt(
      item.getElementsByClassName("itemQuantity")[0].value
    );

    total += quantity; // total =lancien total + (prix *quanite)
    totaleP += price * quantity; // total =lancien total + (prix *quanite)
    // console.log(typeof quantity);
  });
  // afficher le prix total apres avoir teminer la boucle
  totalPrice.textContent = totaleP;
  totalQuantity.textContent = total;
  // totalQuantity.textContent=total;
  // totalQuantity.textContent = quantity1;
  // console.log(total);
};

//*************************************** End calcul Total en test ************** */

//*************************************** start panier ajout ************** */

if (prodStores === null) {
  // ***** si le panier est vide
  const emptyData = `
 <section class="cart"><h1>votre panier est vide</h1></section>
 `;
  addPanier.innerHTML = emptyData;
} else {
  // si le panier nest pas vide affiche les produit
  prodStores.forEach((prodStore) => {
    addPanier.innerHTML += `
   <article
                class="cart__item"
                data-id="{product-ID}"
                data-color="{product-color}"
              >
                <div class="cart__item__img">
                <img
                    src="${prodStore.image}"
                    alt="${prodStore.alt}"
                  />
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${prodStore.nomProduit}</h2>
                    <p>${prodStore.color}</p>
                    <p id="price">${prodStore.price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté :</p>
                      <input
                        type="number"
                        class="itemQuantity"
                        name="itemQuantity"
                        min="1"
                        max="100"
                        value="${prodStore.quantity}"
                      />
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
                </article>
                `;
    // updateProd();
    updateTotal();
  });
}

//*************************************** End panier ajout ************** */

// const allQuantity = document.querySelectorAll("article");
// for (let i = 0; i < allQuantity.length; i++) {
//   allQuantity[i];
//   updateProd();
// }
// function updateProd() {
//   let productNumbers = localStorage.getItem("updateProd");
//   productNumbers = parseInt(productNumbers);
//   // console.log(productNumbers);
//   if (productNumbers) {
//     localStorage.setItem("updateProd", productNumbers + 1);
//   }else{
//      localStorage.setItem("updateProd",1);
//   }
// }

//****************************************supression du panier*********** */

let btnDelete = document.querySelectorAll(".deleteItem");
// console.log(btnDelete);
// btnDelete.addEventListener("click", (event) => {
//   console.log("suprime le produit");
// });

//****************************************End supression du panier*********** */

//*******************gestion formulaire  ***************** */

//********************lancer la commande ***************** */

// order.addEventListener("click", (event) => {
//   // updateTotal();
// });

// a revoir ******************************

// for (let i = 0; i < prodStore.length; i++) {
//   let image = document.querySelector("#cart__items");
//   image.src = prodStore[i].image;
//   image.alt = prodStore[i].alt;
//   console.log(image.src);
// prodLocal.push(prodStore[i]);
// let src = prodStore.image;
// console.log(src);
// innerHTML = `;
//               <img src="${prodStore.image}" alt="${prodStore.alt}">
