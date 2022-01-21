const produit = window.location.search.slice(4);
console.log(produit);
let produitData = [];

//************************************* get produit from API******************/

const fetchProduit = async () => {
  await fetch(`http://localhost:3000/api/products/${produit}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      produitData = data;
    });
};

//************************************* display produit from API******************/

const produitDisplay = async () => {
  await fetchProduit();
  let image = document.querySelector("article .item__img");
  image.innerHTML = `
  <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"></img>`;
  let title = document.querySelector("#title");
  title.textContent = produitData.name;
  let price = document.querySelector("#price");
  price.textContent = produitData.price;
  let description = document.querySelector("#description");
  description.textContent = produitData.description;

  /************************************* display color select input ******************/

  let myColor = document.querySelector("select");
  let colors = produitData.colors;
  colors.forEach((color) => {
    let option = document.createElement("option");
    option.textContent = color;
    option.setAttribute("value", `${color}`);
    option.value = color;
    myColor.append(option);
  });
};
produitDisplay();

//************************************* display produit from API******************/

let btn = document.querySelector("#addToCart");
console.log(btn);

/******************************* get color and quantity from input after click ******************************/

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let color = document.querySelector("#colors");
  console.log(color);
  let quantity = document.querySelector("#quantity");
  let myQuantity = quantity.value;
  let myColor = color.value;
  console.log(myColor);
  console.log(myQuantity);
  if (myColor == "" || myQuantity == 0) {
    alert("veuillez choisir votre coleur et ajouter votre quantité ");
  } else if (myQuantity > 100) {
    alert("la quantité requise doit etre inférieur à 100");
  } else {
    /* popup confirmation ajout du produit  */
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
    /************************************ add product to local storage *******************/

    let panier = JSON.parse(localStorage.getItem("produit"));
    console.log(panier);
    // key is produit ,and panier is an array

    /************************************ Creat object with 3 parameters color-quantity and Id *******************/
    let optionProd = {
      id: produitData._id,
      color: myColor,
      quantity: myQuantity,
    };
    console.log(optionProd);
    /************************************ add product to an array *******************/

    if (panier == null) {
      panier = [];
      console.log(panier);
      console.log(
        "le panier était vide => le produit à était ajouté  dans le panier"
      );
      panier.push(optionProd);
      panierconfimr();
    } else {
      /************************************ check if panier array contains product with same color and id *******************/
      const prodIndex = panier.findIndex(
        (product) =>
          product.color === optionProd.color && product.id === optionProd.id
      );

      if (prodIndex === -1) {
        panier.push(optionProd);
        console.log("produit différent => le produit ajouté  dans le panier");
      } else {
        let newQnt =
          parseInt(panier[prodIndex].quantity) + parseInt(optionProd.quantity);
        panier[prodIndex].quantity = newQnt;
        console.log(newQnt);
        console.log(
          "même produit (id et coleur) => le produit à été incrémenté"
        );
      }
      panierconfimr();
    }

    localStorage.setItem("produit", JSON.stringify(panier));
  }
});
