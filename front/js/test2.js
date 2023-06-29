// const produit = window.location.search.slice(4);
// console.log(produit);
// let produitData = [];

// //************************************* get produit from API******************/

// const fetchProduit = async () => {
//   await fetch(`http://localhost:3000/api/products/${produit}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       produitData = data;
//     });
// };

// //************************************* display produit from API******************/

// const produitDisplay = async () => {
//   await fetchProduit();
//   let image = document.querySelector("article .item__img");
//   image.innerHTML = `
//   <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"></img>`;
//   let title = document.querySelector("#title");
//   title.textContent = produitData.name;
//   let price = document.querySelector("#price");
//   price.textContent = produitData.price;
//   let description = document.querySelector("#description");
//   description.textContent = produitData.description;

//   /************************************* display color select input ******************/

//   let myColor = document.querySelector("select");
//   let colors = produitData.colors;
//   colors.forEach((color) => {
//     let option = document.createElement("option");
//     option.textContent = color;
//     option.setAttribute("value", `${color}`);
//     option.value = color;
//     myColor.append(option);
//   });
// };
// produitDisplay();

// //************************************* display produit from API******************/

// let btn = document.querySelector("#addToCart");
// console.log(btn);

// /******************************* get color and quantity from input after click ******************************/

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let color = document.querySelector("#colors");
//   console.log(color);
//   let quantity = document.querySelector("#quantity");
//   let myQuantity = quantity.value;
//   let myColor = color.value;
//   console.log(myColor);
//   console.log(myQuantity);
//   if (myColor == "" || myQuantity == 0) {
//     alert("veuillez choisir votre coleur et ajouter votre quantité ");
//   } else if (myQuantity > 100) {
//     alert("la quantité requise doit etre inférieur à 100");
//   } else {
//     /* popup confirmation ajout du produit  */
//     //-------------------- popup confirmation panier----------

//     const panierconfimr = () => {
//       if (
//         window.confirm(
//           `${produitData.name} option:${myColor}
//         à bien été ajouter au panier,
//         pour consulter le panier  OK
//         ou revenir à l'acceuil ANNULER`
//         )
//       ) {
//         window.location.href = "cart.html";
//       } else {
//         window.location.href = "index.html";
//       }
//     };
//     /************************************ add product to local storage *******************/

//     let panier = JSON.parse(localStorage.getItem("produit"));
//     console.log(panier);
//     // key is produit ,and panier is an array

//     /************************************ Creat object with 3 parameters color-quantity and Id *******************/
//     let optionProd = {
//       id: produitData._id,
//       color: myColor,
//       quantity: myQuantity,
//     };
//     console.log(optionProd);
//     /************************************ add product to an array *******************/

//     if (panier == null) {
//       panier = [];
//       console.log(panier);
//       console.log(
//         "le panier était vide => le produit à était ajouté  dans le panier"
//       );
//       panier.push(optionProd);
//       panierconfimr();
//     } else {
//       /************************************ check if panier array contains product with same color and id *******************/
//       const prodIndex = panier.findIndex(
//         (product) =>
//           product.color === optionProd.color && product.id === optionProd.id
//       );

//       if (prodIndex === -1) {
//         panier.push(optionProd);
//         console.log("produit différent => le produit ajouté  dans le panier");
//       } else {
//         let newQnt =
//           parseInt(panier[prodIndex].quantity) + parseInt(optionProd.quantity);
//         panier[prodIndex].quantity = newQnt;
//         console.log(newQnt);
//         console.log(
//           "même produit (id et coleur) => le produit à été incrémenté"
//         );
//       }
//       panierconfimr();
//     }

//     localStorage.setItem("produit", JSON.stringify(panier));
//   }
// });

// // // const produit = window.location.search.slice(4);
// // // console.log(produit);
// // // let produitData = [];

// // // //************************************* get produit from API******************/

// // // const fetchProduit = async () => {
// // //   await fetch(`http://localhost:3000/api/products/${produit}`)
// // //     .then((res) => res.json())
// // //     .then((data) => {
// // //       console.log(data);
// // //       produitData = data;
// // //     });
// // // };

// // // //************************************* display produit from API******************/

// // // const produitDisplay = async () => {
// // //   await fetchProduit();
// // //   let image = document.querySelector("article .item__img");
// // //   image.innerHTML = `
// // //   <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"></img>`;
// // //   let title = document.querySelector("#title");
// // //   title.textContent = produitData.name;
// // //   let price = document.querySelector("#price");
// // //   price.textContent = produitData.price;
// // //   let description = document.querySelector("#description");
// // //   description.textContent = produitData.description;

// // //   /************************************* display color select input ******************/

// // //   let myColor = document.querySelector("select");
// // //   let colors = produitData.colors;
// // //   colors.forEach((color) => {
// // //     let option = document.createElement("option");
// // //     option.textContent = color;
// // //     option.setAttribute("value", `${color}`);
// // //     option.value = color;
// // //     myColor.append(option);
// // //   });
// // // };
// // // produitDisplay();

// // // //************************************* display produit from API******************/

// // // let btn = document.querySelector("#addToCart");
// // // console.log(btn);

// // // /******************************* get color and quantity from input after click ******************************/

// // // btn.addEventListener("click", (e) => {
// // //   e.preventDefault();
// // //   let color = document.querySelector("#colors");
// // //   console.log(color);
// // //   let quantity = document.querySelector("#quantity");
// // //   let myQuantity = quantity.value;
// // //   let myColor = color.value;
// // //   console.log(myColor);
// // //   console.log(myQuantity);
// // //   if (myColor == "" || myQuantity == 0) {
// // //     alert("veuillez choisir votre coleur et ajouter votre quantité ");
// // //   } else if (myQuantity > 100) {
// // //     alert("la quantité requise doit etre inférieur à 100");
// // //   } else {
// // //     /* popup confirmation ajout du produit  */
// // //     //-------------------- popup confirmation panier----------

// // //     const panierconfimr = () => {
// // //       if (
// // //         window.confirm(
// // //           `${produitData.name} option:${myColor}
// // //         à bien été ajouter au panier,
// // //         pour consulter le panier  OK
// // //         ou revenir à l'acceuil ANNULER`
// // //         )
// // //       ) {
// // //         window.location.href = "cart.html";
// // //       } else {
// // //         window.location.href = "index.html";
// // //       }
// // //     };
// // //     /************************************ add product to local storage *******************/

// // //     let panier = JSON.parse(localStorage.getItem("produit"));
// // //     console.log(panier);
// // //     // key is produit ,and panier is an array

// // //     /************************************ Creat object with 3 parameters color-quantity and Id *******************/
// // //     let optionProd = {
// // //       id: produitData._id,
// // //       color: myColor,
// // //       quantity: myQuantity,
// // //     };
// // //     console.log(optionProd);
// // //     /************************************ add product to an array *******************/

// // //     if (panier == null) {
// // //       panier = [];
// // //       console.log(panier);
// // //       console.log(
// // //         "le panier était vide => le produit à était ajouté  dans le panier"
// // //       );
// // //       panier.push(optionProd);
// // //       panierconfimr();
// // //     } else {
// // //       /************************************ check if panier array contains product with same color and id *******************/
// // //       const prodIndex = panier.findIndex(
// // //         (product) =>
// // //           product.color === optionProd.color && product.id === optionProd.id
// // //       );

// // //       if (prodIndex === -1) {
// // //         panier.push(optionProd);
// // //         console.log("produit différent => le produit ajouté  dans le panier");
// // //       } else {
// // //         let newQnt =
// // //           parseInt(panier[prodIndex].quantity) + parseInt(optionProd.quantity);
// // //         panier[prodIndex].quantity = newQnt;
// // //         console.log(newQnt);
// // //         console.log(
// // //           "même produit (id et coleur) => le produit à été incrémenté"
// // //         );
// // //       }
// // //       panierconfimr();
// // //     }

// // //     localStorage.setItem("produit", JSON.stringify(panier));
// // //   }
// // // });
// // const produit = window.location.search.slice(4);

// // let produitData = [];
// // const fetchProduit = async () => {
// //   await fetch(`http://localhost:3000/api/products/${produit}`)
// //     .then((res) => res.json())
// //     .then((data) => {
// //       produitData = data;
// //     });
// // };

// // const produitDisplay = async () => {
// //   await fetchProduit();
// //   let myImage = document.querySelector("article .item__img");
// //   myImage.innerHTML = `
// //               <img src="${produitData.imageUrl}" alt="${produitData.altTxt}">
// //     `;
// //   let myTitle = document.querySelector("#title");
// //   myTitle.textContent = produitData.name;
// //   let myPrice = document.querySelector("#price");
// //   myPrice.textContent = produitData.price;
// //   let myDescription = document.querySelector("#description");
// //   myDescription.textContent = produitData.description;
// //   let myColor = document.querySelector("select");
// //   // console.log(myColor.length);

// //   // // selection du button ajouter au panier----------------

// //   produitData.colors.forEach((color) => {
// //     let myOption = document.createElement("option");
// //     myOption.textContent = color;
// //     myOption.setAttribute("value", `${color}`);
// //     myOption.value = color;
// //     myColor.append(myOption);
// //   });
// // };

// // produitDisplay();

// // let button = document.querySelector("#addToCart");

// // button.addEventListener("click", (event) => {
// //   event.preventDefault();
// //   let color = document.querySelector("#colors").value;
// //   let quantity = document.querySelector("#quantity").value;

// //   if ((color == "" && quantity <= 100) || quantity == 0) {
// //     alert("ajout une couleur et une quantite");
// //   } else {
// //     let optionProd = {
// //       productId: produitData._id,
// //       color: color,
// //       quantity: quantity,
// //     };

// //     let prodStore = JSON.parse(localStorage.getItem("produit"));

// //     if (prodStore == null) {
// //       prodStore = [];
// //       prodStore.push(optionProd);
// //       console.log("ajouté au panier vide");
// //     } else {
// //       const productIndex = prodStore.findIndex(
// //         (item) =>
// //           item.color === optionProd.color &&
// //           item.productId === optionProd.productId
// //       );
// //       if (productIndex === -1) {
// //         prodStore.push(optionProd);
// //         console.log("ajouté au panier sans correspondance");
// //       } else {
// //         let newQnt =
// //           parseInt(prodStore[productIndex].quantity) +
// //           parseInt(optionProd.quantity);
// //         prodStore[productIndex].quantity = newQnt;
// //         console.log("incrémenté");
// //       }
// //     }
// //     localStorage.setItem("produit", JSON.stringify(prodStore));
// //   }
// // });

//****************************get panier from localStorage*********************/
let panier = JSON.parse(localStorage.getItem("produit"));
// console.log(panier)

//****************************select position of stores*********************/

let addPanier = document.querySelector("#cart__items");

//**************************** if panier !==null *********************/

let produitData = [];
if (panier) {
  // console.log("add your code");
  for (let i = 0; i < panier.length; i++) {
    const prodStore = panier[i];
    /**************************** fetch Api **************************/
    fetch(`http://localhost:3000/api/products/${prodStore.id}`)
      .then((res) => res.json())
      .then((data) => {
        produitData = data;
        displayStore(produitData, prodStore.color, prodStore.quantity);
        updateTotal();
        removeProd();
        updateQuantity();
      });
  }

  //****************************else  panier ==null*********************/
} else {
  // console.log("add your prod");
  const emptyData = `
  <section class="cart"><h1>vide <a href="index.html">(ajoutez des produits)</a></h1></section>
  `;
  addPanier.innerHTML = emptyData;
  let link = document.querySelector(".cart a");
  link.style.textDecoration = "none";
  link.style.color = "#ddd";
  document.querySelector(".cart__order").style.display = "none";
}

//**************************** inject panier DOM *********************/

const displayStore = (produitData, color, quantity) => {
  addPanier.innerHTML += `
  <article
  class="cart__item"
  data-id="${produitData._id}"
  data-color="${color}"
  >
  <div class="cart__item__img">
  <img
  src="${produitData.imageUrl}"
  alt="${produitData.altTxt}"
  />
  </div>
  <div class="cart__item__content">
  <div class="cart__item__content__description">
  <h2>${produitData.name}</h2>
  <p>${color}</p>
  <p id="price">${produitData.price} €</p>
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
  value="${quantity}"
  />
  </div>
  <div class="cart__item__content__settings__delete">
  <p class="deleteItem">Supprimer</p>
  </div>
  </div>
  </div>
  </article>
  `;
};

//**************************** button delete *********************/

const removeProd = () => {
  let removeButton = document.getElementsByClassName("deleteItem");
  // console.log(removeButton);
  for (let i = 0; i < removeButton.length; i++) {
    let deleteItem = removeButton[i];
    deleteItem.addEventListener("click", (event) => {
      let itemClicked = event.target;
      let items = itemClicked.closest("article");
      // itemClicked.parentElement.parentElement.parentElement.parentElement.remove();
      let itemId = items.dataset.id;
      let itemColor = items.dataset.color;
      itemClicked.closest("article").remove();
      console.log(itemColor);
      console.log(itemId);
      panier = panier.filter(
        (el) => el.id !== itemId || el.color !== itemColor
      );

      localStorage.setItem("produit", JSON.stringify(panier));
      if (panier.length === 0) {
        localStorage.removeItem("produit");
        location.reload();
      }
      updateTotal();
    });
  }
};

//**************************** total price and total quantity *********************/

const updateTotal = () => {
  const allProducts = document.querySelectorAll("article");
  // console.log(allProducts);
  let totaleP = 0;
  let total = 0;
  // let totalQuantity = 0;
  allProducts.forEach((allProd) => {
    //***************************recuperation des prix
    //** rendre le prix en number
    let price = Number(
      allProd.querySelector("p#price").innerText.replace("€", "")
    );
    //******** HTMLCollection utilise l'index
    let quantity = parseInt(
      allProd.getElementsByClassName("itemQuantity")[0].value
    );
    total += quantity; // total =lancien total + (quantite nouvelle)
    totaleP += price * quantity; // totalp =lancien totalp + (prix *quanite)
    // console.log(typeof quantity);
    removeProd();
  });
  totalPrice.textContent = totaleP;
  totalQuantity.textContent = total;
};

//**************************** change quantity input *********************/

const updateQuantity = () => {
  let prodQuantity = document.querySelectorAll(".itemQuantity");

  //****************************** Target products in stores with there id and color

  prodQuantity.forEach((prod) => {
    let prodQnt = prod.closest("article");
    console.log(prodQnt);
    let prodQtyId = prodQnt.dataset.id;
    console.log(prodQtyId);
    let prodQtyColor = prodQnt.dataset.color;
    console.log(prodQtyColor);
    let newQuantity = parseFloat(prod.value);
    console.log(newQuantity);
    prod.addEventListener("change", () => {
      // console.log(prod.value);
      let myQuantity = parseFloat(prod.value);
      console.log(myQuantity);

      //****************************** check element if they have same color and id in sotres

      panier.forEach((prodStore) => {
        if (prodStore.id == prodQtyId && prodStore.color == prodQtyColor) {
          prodStore.quantity = myQuantity;
        }
      });
      localStorage.setItem("produit", JSON.stringify(panier));
      updateTotal();
    });
  });
};

// Select button to send the form
const orderButton = document.querySelector("#order");

// Add event listener
orderButton.addEventListener("click", (e) => {
  e.preventDefault();

  /* Create a class to craft the item
  in which the values ​​of the form to be controlled will go */
  class Formulaire {
    constructor() {
      this.prenom = document.querySelector("#firstName").value;
      this.nom = document.querySelector("#lastName").value;
      this.adresse = document.querySelector("#address").value;
      this.ville = document.querySelector("#city").value;
      this.email = document.querySelector("#email").value;
    }
  }
  // Calling the Form Class Instance to Create the Contact Object
  const contact = new Formulaire();
  console.log(contact);

  // Building an array of strings from local storage
  let idProducts = [];
  for (let i = 0; i < panier.length; i++) {
    idProducts.push(panier[i].id);
  }
  console.log(idProducts);

  //-------- Form validation management

  // Entry control function according to regEx

  // Firstname / lastname / city search mask
  const regExNameCity = (value) => {
    return /^[A-Za-zÀ-ÿ ,.'-]{3,20}$/.test(value);
  };
  // console.log(regExNameCity());
  // Search reason for address
  const regExAddress = (value) => {
    return /^([a-zA-ZÀ-ÿ,-. ]{1,}|[0-9]{1,4})[ ].{1,}$/.test(value);
  };
  // Email search mask
  const regExEmail = (value) => {
    return /^[a-zA-Z0-9.-_]+@{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(value);
  };

  //-------- Form field input functions
  function firstNameCheck() {
    const lePrenom = contact.prenom;
    if (regExNameCity(lePrenom)) {
      firstNameErrorMsg.innerHTML = " ";
      return true;
    } else {
      firstNameErrorMsg.innerHTML =
        "Please enter only letters without accent, minimum of 3";
      return false;
    }
  }

  function lastNameCheck() {
    const leNom = contact.nom;
    if (regExNameCity(leNom)) {
      lastNameErrorMsg.innerHTML = " ";
      return true;
    } else {
      lastNameErrorMsg.innerHTML =
        "Please enter only letters without accent, minimum of 3";
      return false;
    }
  }

  function addressCheck() {
    const leAddress = contact.adresse;
    if (regExAddress(leAddress)) {
      addressErrorMsg.innerHTML = " ";
      return true;
    } else {
      addressErrorMsg.innerHTML = "Please, enter correct adress";
      return false;
    }
  }

  function cityCheck() {
    const laVille = contact.ville;
    if (regExNameCity(laVille)) {
      cityErrorMsg.innerHTML = " ";
      return true;
    } else {
      cityErrorMsg.innerHTML = "Please enter a city";
      return false;
    }
  }

  function eMailCheck() {
    const leMail = contact.email;
    if (regExEmail(leMail)) {
      console.log("ok");
      emailErrorMsg.innerHTML = " ";
      return true;
    } else {
      console.log("ko");
      emailErrorMsg.innerHTML = "Invalid email";
      return false;
    }
  }

  // Form validity check before sending to local storage
  if (
    firstNameCheck() &&
    lastNameCheck() &&
    addressCheck() &&
    cityCheck() &&
    eMailCheck()
  ) {
    // Put the object in the local storage
    localStorage.setItem("contact", JSON.stringify(contact));
    // Put the values ​​of the form and the products of the cart in an object to send to the server
    const order = {
      contact: {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value,
      },
      products: idProducts,
    };
    console.log("Envoyer", order);

    sendToServer(order);
  } else {
    return false;
  }
});

/* Command sending function with the POST method
JSON request containing the contact object and product table (order) */
function sendToServer(order) {
  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      // Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    // Retrieving the response sent
    .then(function (content) {
      console.log("CONTENT", content);
      // Redirection to the confirmation page + command id in URL parameter
      window.location = "confirmation.html?id=" + content.orderId;
    })
    .catch(function (error) {
      alert(`Error in ${error}`);
    });
}

document.querySelector('#order').addEventListener('click', () => {
    let panier = JSON.parse(localStorage.getItem('article'))
    if (!firstNameValidator && !lastNameValidator && !addressValidator && !cityValidator && !emailValidator && panier.length != 0) {
        let contact = {
            'firstName': firstName.value,
            'lastName': lastName.value,
            'address': address.value,
            'city': city.value,
            'email': email.value
        }
        //console.log(contact)

        // boucle localStorage afin de récupérer les id et les intégrer dans tableau products 

        let products = []
        panier.forEach(el => {
            products.push(el.id)
        })
        //variable contenant les infos de la commande
        let order = {
            contact,
            products
        }
        //console.log(order)
        // je fais appel à l'api order pour envoyer mes tableaux
        fetch("http://localhost:3000/api/products/order", {
                "method": "post",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(order)
            })
            .then(response => response.json())
            .then(data => {
                localStorage.clear()
                //redirection vers page confirmation 
                window.location.href = `confirmation.html?orderId=${data.orderId}`;
            })
            .catch(err => alert("Erreur est survenu"))
    }
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    console.log(e) 
})     


//////******* newwwww */

document.querySelector("#order").addEventListener("click", () => {
  let panier = JSON.parse(localStorage.getItem("article"));
  if (
    !firstNameValidator &&
    !lastNameValidator &&
    !addressValidator &&
    !cityValidator &&
    !emailValidator &&
    panier.length != 0
  ) {
    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    };
    //console.log(contact)

    // boucle localStorage afin de récupérer les id et les intégrer dans tableau products

    let products = [];
    panier.forEach((el) => {
      products.push(el.id);
    });
    //variable contenant les infos de la commande
    let order = {
      contact,
      products,
    };
    //console.log(order)
    // je fais appel à l'api order pour envoyer mes tableaux
    fetch("http://localhost:3000/api/products/order", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.clear();
        //redirection vers page confirmation
        window.location.href = `confirmation.html?orderId=${data.orderId}`;
      })
      .catch((err) => alert("Erreur est survenu"));
  }
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});     