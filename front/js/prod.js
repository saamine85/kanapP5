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
  myImage.innerHTML=` 
              <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"> 
    `;
  let myTitle = document.querySelector("#title");
  myTitle.textContent = produitData.name;
  let myPrice = document.querySelector("#price");
  myPrice.textContent = produitData.price;
  // console.log(typeof myPrice.toString());
  // myButton.setAttribute("id", `${produitData._id}`);
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

let idProd = document.querySelector("#colors");
// console.log(idProd);
let myButton = document.querySelector("#addToCart");
// console.log(myButton);
let myQuantity = document.querySelector("#quantity");
// console.log(myQuantity);

myButton.addEventListener("click", (event) => {
  event.preventDefault();
  let myQuantite = myQuantity.value;
  // myQuantite = Number(myQuantite);
  // console.log(myQuantite);

  let monChoix = idProd.value;
  if ((monChoix == "" && myQuantite <= 100) || myQuantite == 0) {
    alert("ajout une couleur et une quantite");
  } else {
    let optionProd = {
      id_Produit: produitData._id,
      color: monChoix,
      quantity: myQuantite,
    };
    // si le produit a une coleur vide rendre le prix egale a zero a revoir apres

    // si le produit a une coleur vide rendre le prix egale a zero a revoir apres
    // console.log(optionProd);
    // console.log(produitData.price);

    //-------------------- popup confirmation panier----------

    const panierconfimr = () => {
      if (
        window.confirm(
          `${produitData.name} option:${monChoix} 
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
    // let panierTotal = JSON.parse(localStorage.getItem("panier"));
    // console.log(panierTotal);
    // console.log(prodStore);

    // ajouter une liste pour ajouter les options choisis*********
    if (prodStore == null) {
      prodStore = [];
      prodStore.push(optionProd);
      localStorage.setItem("produit", JSON.stringify(prodStore));
      console.log(prodStore);
      panierconfimr();
    } else {
      prodStore.push(optionProd);
      localStorage.setItem("produit", JSON.stringify(prodStore));
      console.log(prodStore);
      panierconfimr();
    }

    // if (condition) {

    // } else {

    // }
    // console.log(monChoix);
    // console.log(myQuantite);
  }
});
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''//

// const updateProd = () => {
//   const allQuantity = document.querySelectorAll("article");
//   // allQuantity.forEach((item) => {
//   //   console.log()
//   // });
//   for (let i = 0; i < allQuantity.length; i++) {
//     allQuantity[i];
//     console.log(allQuantity);
//   }
// };
