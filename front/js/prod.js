// const { orderProducts } = require("../../back/controllers/product");

// const { orderProducts } = require("../../back/controllers/product");

// let url = `./product.html?id=${products._id}`;
// recuperation du l' íd du produit (second methode with urlsearchparam)
const produit = window.location.search.slice(4);
console.log(produit);
let produitData = [];
const fetchProduit = async () => {
  await fetch(`http://localhost:3000/api/products/${produit}`)
    .then((res) => res.json())
    .then((data) => {
      produitData = data;
      // console.log(produitData);
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
  myTitle.textContent = produitData.name;
  let myPrice = document.querySelector("#price");
  myPrice.textContent = produitData.price;
  // console.log(typeof myPrice.toString());
  // button.setAttribute("id", `${produitData._id}`);
  let myDescription = document.querySelector("#description");
  myDescription.textContent = produitData.description;
  let myColor = document.querySelector("select");
  // console.log(myColor.length);

  // // selection du button ajouter au panier----------------

  produitData.colors.forEach((color) => {
    let myOption = document.createElement("option");
    myOption.textContent = color;
    myOption.setAttribute("value", `${color}`);
    myOption.value = color;
    myColor.append(myOption);
  });
};

produitDisplay();
// console.log(produitDisplay);

// ************************************  ajouter au panier  ****************

// console.log(quantity);
let button = document.querySelector("#addToCart");
// console.log(button);

button.addEventListener("click", (event) => {
  event.preventDefault();
  let color = document.querySelector("#colors");
  // console.log(color);
  let quantity = document.querySelector("#quantity");
  let myQuantity = quantity.value;
  // myQuantity = Number(myQuantity);
  // console.log(myQuantity);

  let myColor = color.value;
  if ((myColor == "" && myQuantity <= 100) || myQuantity == 0) {
    alert("ajout une couleur et une quantite");
  } else {
    let optionProd = {
      productId: produitData._id,
      color: myColor,
      quantity: myQuantity,
    };
    // si le produit a une coleur vide rendre le prix egale a zero a revoir apres

    // si le produit a une coleur vide rendre le prix egale a zero a revoir apres
    // console.log(optionProd);
    // console.log(produitData.price);

    //-------------------- popup confirmation panier----------

    const panierconfimr = () => {
      if (
        window.confirm(
          `${produitData.name} option:${myColor}
        à bien été ajouter au panier,
        pour consulter le panier  OK
        ou revenir à l'acceuil ANNULER`
        )
      ) {
        window.location.href = "cart.html";
      } else {
        window.location.href = "index.html";
      }
    };

    //------------------locale storage--------------------------------

    // rendre l'objet javascript une chaine de caractere cad format json stringfy et linverse en utilise parse
    let prodStore = JSON.parse(localStorage.getItem("produit"));
    // console.log(prodStore);

    // ajouter une liste pour ajouter les options choisis*********

    if (prodStore == null) {
      prodStore = [];
      console.log(prodStore);
      console.log("panier vide");
      prodStore.push(optionProd);

      panierconfimr();
    } else {
      const productIndex = prodStore.findIndex((item) => {
        item.color === optionProd.color && item.id === optionProd.productId;
      });
      if (productIndex === -1) {
        // console.log("false");
        // prodStore.push(optionProd);
        prodStore.push(optionProd);
        // prodStore[productIndex].quantity = newQnt;
      } else {
        let newQnt =
          parseInt(prodStore[productIndex].quantity) +
          parseInt(optionProd.quantity);
        console.log(newQnt);
        // let newQnt =
        //   parseInt(prodStore[productIndex].quantity) +
        //   parseInt(optionProd.quantity);
      }
      panierconfimr();
    }
    // prodStore.push(optionProd);
    localStorage.setItem("produit", JSON.stringify(prodStore));
  }
});
