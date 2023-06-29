// // let prodStore = JSON.parse(localStorage.getItem("produit"));
// // console.log(prodStore);
// const produit = window.location.search.slice(4);

// let prodStores = [];
// // recuperation des donnees de l'api**********************
// const fetchStore = async () => {
//   await fetch(`http://localhost:3000/api/products/${produit}`)
//     .then(
//       (res) =>
//       res.json()
//       // console.log(res.json());
//     )
//     .then((data) => {
//       prodStores = data;
//       // console.log(produitData);
//     });
//   // console.log(res.json());
// };
// // console.log(fetchStore);
// // fetchStore();

// // recuperation du produit choisis

// let addPanier = document.querySelector("#cart__items");
// // addPanier.innerHTML = `<h1>${produit.nomProduit}</h1>`;
// // console.log(addPanier);
// const storeDisplay = async () => {
//   await fetchStore();
//   let prodStores = JSON.parse(localStorage.getItem("produit"));

//   if (prodStores === null) {
//     const emptyData = `
//     <section class="cart"><h1>vide <a href="index.html">(ajoutez des produits)</a></h1></section>
//  `;
//     addPanier.innerHTML = emptyData;
//     let link = document.querySelector(".cart a");
//     link.style.textDecoration = "none";
//     link.style.color = "#ddd";
//   } else {
//     // si le panier nest pas vide affiche les produit
//     prodStores.forEach((prodStore) => {
//       addPanier.innerHTML += `
//     <article
//     class="cart__item"
//     data-id="{product-ID}"
//     data-color="{product-color}"
//     >
//     <div class="cart__item__img">
//     <img
//     src="${prodStore.image}"
//     alt="${prodStore.alt}"
//       />
//       </div>
//       <div class="cart__item__content">
//       <div class="cart__item__content__description">
//       <h2>${prodStore.nomProduit}</h2>
//       <p>${prodStore.color}</p>
//       <p id="price">${prodStore.price} €</p>
//       </div>
//       <div class="cart__item__content__settings">
//       <div class="cart__item__content__settings__quantity">
//       <p>Qté :</p>
//       <input
//       type="number"
//       class="itemQuantity"
//       name="itemQuantity"
//       min="1"
//       max="100"
//       value="${prodStore.quantity}"
//       />
//       </div>
//       <div class="cart__item__content__settings__delete">
//       <p class="deleteItem">Supprimer</p>

//       </div>
//       </div>
//       </div>
//       </article>
//       `;

//       removeProd();
//     });
//     // for (let produit in localStorage) {
//     //   console.log(localStorage.produit); // shows getItem, setItem and other built-in stuff
//     // }
//     // updateQuantity();
//     // getStore();
//     // console.log("produit ajoute");
//     // removeProd();
//     // removeProd();
//     updateTotal();
//   }
//   // console.log(prod);

//   // // let prod = 0;
//   // for (let i = 0; i < prod.length; i++) {
//   // let prod = parseFloat(prodStores[0].quantity);
//   // for (let i = 0; i < prod.length; i++) {
//   //   const count = prod[i];
//   //   totalQuantity.textContent = count;
//   // }
//   //   // const countProd = prod[i];
//   //   localStorage.setItem("produit",JSON.stringify(prodStores))
//   //   console.log(prod);
//   // }
//   // incrementProd();
// };
// storeDisplay();

// /*-----------------------  calcul Total et quantite--------------------------------- */

// const updateTotal = () => {
//   const allProducts = document.querySelectorAll("article");
//   // console.log(allProducts);
//   let totaleP = 0;
//   let total = 0;
//   // let totalQuantity = 0;
//   allProducts.forEach((allProd) => {
//     //recuperation des prix
//     // rendre le prix en number
//     let price = Number(
//       allProd.querySelector("p#price").innerText.replace("€", "")
//     );
//     // HTMLCollection utilise l'index
//     let quantity = parseInt(
//       allProd.getElementsByClassName("itemQuantity")[0].value
//     );
//     total += quantity; // total =lancien total + (quantite nouvelle)
//     totaleP += price * quantity; // total =lancien total + (prix *quanite)
//     // console.log(typeof quantity);
//   });
//   // afficher le prix total apres avoir teminer la boucle
//   // console.log(total);
//   // updateQuantity();
//   totalPrice.textContent = totaleP;
//   totalQuantity.textContent = total;
//   // console.log(total);
// };

// const removeProd = () => {
//   let removeButton = document.getElementsByClassName("deleteItem");
//   // console.log(removeButton);
//   for (let i = 0; i < removeButton.length; i++) {
//     let deleteItem = removeButton[i];
//     deleteItem.addEventListener("click", (event) => {
//       let itemClicked = event.target;
//       // itemClicked.parentElement.parentElement.parentElement.parentElement.remove();
//       itemClicked.closest("article").remove();
//       localStorage.setItem("produit", JSON.stringify(prodStores));
//       // localStorage.removeItem("produit");
//       // updateTotal();
//       // console.log("clicked");
//     });
//   }
// };

// // let myQuantity = parseFloat(
// //     document.getElementsByClassName("itemQuantity")[0].value
// //   );

// //   myQuantity.addEventListener("onchange", () => {
// //     let total = 0;
// //     if (myQuantity <= 100) {
// //       total += myQuantity;
// //       console.log(total);
// //     } else {
// //     }
// //   });
// //''''''''''''''''''''''''''''''''''''''''''Start Form''''''''''''''''''''''''''''''''''//

// const firstName = document.getElementById("firstName");
// firstName.addEventListener("onchange", (event) => {
//   firstName.classList.add("error");
//   firstNameErrorMsg.style.display = "block";
//   const regFirstName = /[a-z]/;
//   if (firstName.value.length >= 3 && regFirstName.test(firstName.value)) {
//     firstName.classList.replace("error", "succes");
//     firstNameErrorMsg.style.display = "none";
//   }
// });
// const lastName = document.getElementById("lastName");
// lastName.addEventListener("onchange", (event) => {
//   lastName.classList.add("error");
//   lastNameErrorMsg.style.display = "block";
//   const reglastName = /[a-z]/;
//   if (lastName.value.length >= 3 && reglastName.test(lastName.value)) {
//     lastName.classList.replace("error", "succes");
//     lastNameErrorMsg.style.display = "none";
//   }
// });

// const address = document.getElementById("address");
// address.addEventListener("onchange", (event) => {
//   address.classList.add("error");
//   addressErrorMsg.style.display = "block";
//   const regAddress = /^[#.0-9a-zA-Z\s,-]+$/;
//   if (regAddress.test(address.value)) {
//     address.classList.replace("error", "succes");
//     addressErrorMsg.style.display = "none";
//   }
// });
// const city = document.getElementById("city");
// city.addEventListener("onchange", (event) => {
//   city.classList.add("error");
//   cityErrorMsg.style.display = "block";
//   const regCity =
//     /^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
//   if (regCity.test(city.value)) {
//     city.classList.replace("error", "succes");
//     cityErrorMsg.style.display = "none";
//   }
// });

// const email = document.getElementById("email");
// email.addEventListener("onchange", (event) => {
//   email.classList.add("error");
//   emailErrorMsg.style.display = "block";
//   const regEmail =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (regEmail.test(email.value)) {
//     email.classList.replace("error", "succes");
//     emailErrorMsg.style.display = "none";
//   }
// });
//''''''''''''''''''''''''''Supression du panier tout le produit''''''''''''''''''''''''''''''/'

// const removeProd = () => {
//   // let btnDelete = document.querySelectorAll(".deleteItem");
//   // // console.log(btnDelete);
//   let addPanier = document.querySelector("#cart__items");
//   // addPanier.style.border = "5px solid red";
//   addPanier.addEventListener("click", (event) => {
//     // let article = document.querySelectorAll(".cart__item");
//     if (event.target.classList.contains("deleteItem")) {
//       let remove = document.querySelector(".cart__item");
//       remove.remove();
//       // console.log("hi")
//       // event.target.parentElement.remove();

//       // updateQuantity();
//       //'''''''''''''''''''''''''' start çette condition a revenir
//       if (remove !== null) {
//         localStorage.removeItem("produit");
//         updateTotal();
//       } else {
//         addPanier.innerHTML = `
//       <article class="cart__item"><h1>vide <a href="index.html">(ajoutez des produits)</a></h1></article>
//       `;
//         let a = document.querySelector(".cart a");
//         a.style.textDecoration = "none";
//         a.style.color = "#ddd";
//       }
//       //'''''''''''''''''''''''''' end çette condition a revenir
//     }
//   });
// };
// const updateQuantity = () => {
//   // let myQuantity = document
//   //   .getElementsByName("")[0]
//   // .getAttribute("value");
//   // let quantity = document.querySelectorAll(".itemQuantity").getAttribute("value");
//   // console.log(quantity)
//   // // console.log(myQuantity);
//   // console.log("salut")
//   // console.log(myQuantity.value);
//   // const quantity = myQuantity.value;
//   // console.log(quantity);
//   // for (let j = 0; j < myQuantity.length; j++) {
//   //   if (quantity >= 100) {
//   //     updateTotal();
//   //     console.log(quantity);
//   //   }
//   // }
// };
// updateQuantity();
// const incrementProd = () => {
//   // let prodStores = document.querySelector(".cart__item");
//   let prod = JSON.parse(localStorage.getItem("produit"));
//  ;

//   console.log(prod[0].quantity);
//   // prodStores.getAttribute("")
//   // console.log(prodStores)

//   // prodStores.forEach((product) => {
//   //   console.log(prodStores);
//   // });
// };
//----------------- Cart Recovery -----------------------//

// Declaration of items contained in local storage
let panier = JSON.parse(localStorage.getItem("produit"));
console.log(panier);

// Selecting the class where to inject the elements
const positionItems = document.querySelector("#cart__items");

// If the cart is empty: display the empty cart
if (panier === null || panier == 0) {
  const emptyCart = document.querySelector("#cart__items");
  emptyCart.innerText = "Your cart is empty.";
  console.log(emptyCart);
  // Hide the user information entry form
  document.querySelector(".cart__order").style.display = "none";

  // If the cart is not empty, display of items
} else {
  for (i = 0; i < panier.length; i++) {
    let items = panier[i];
    // Call to API operation of target index item in loop and received
    fetch("http://localhost:3000/api/products/" + panier[i].productId)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(items);
        // positionItems.appendChild(displayItem(data, items.color, items.quantity));
        displayTotalPrice(data.price * items.quantity);
        changeQuantity();
        deleteProduct();
      });
  }
}

//--------- Events on cart items -----------------//

/**
 * Calculation of the total cart price
//  * @param { number } price
 * Displays the result of the conversion as a number  
 */
function displayTotalPrice(price) {
  let divTotalPrice = document.querySelector("#totalPrice");
  //console.log(parseFloat(divTotalPrice.textContent));
  divTotalPrice.textContent = parseFloat(divTotalPrice.textContent) + price;
}

// Calculation of the number of items in the cart
let arrayQuantities = [];
if (panier === null || panier == 0) {
  console.log("Cart is empty");
} else {
  for (let items of panier) {
    let ItemQuantity = +items.quantity;
    arrayQuantities.push(ItemQuantity);
  }
  console.log(arrayQuantities);
  // Accumulator function application method
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let totalQuantityCart = arrayQuantities.reduce(reducer);
  document.querySelector("#totalQuantity").innerHTML = totalQuantityCart;
}

// Removing an Item from the Cart

function deleteProduct() {
  // Selecting the delete buttons to listen to
  let deleteBtn = document.querySelectorAll(".deleteItem");

  for (let k = 0; k < deleteBtn.length; k++) {
    deleteBtn[k].addEventListener("click", (event) => {
      event.preventDefault();
      // Method to target product id and color
      let selectProd = deleteBtn[k].closest("article");
      let selectIdItem = selectProd.dataset.id;
      console.log(selectIdItem);
      let selectColorItem = selectProd.dataset.color;
      console.log(selectColorItem);
      // Method returns new array containing the elements that meet the filter condition
      panier = panier.filter(
        (el) => el.productId !== selectIdItem || el.color !== selectColorItem
      );
      console.log(panier);
      // Return of the new basket to local storage
      localStorage.setItem("cart", JSON.stringify(panier));

      location.reload();
    });
  }
}

// Changing the quantity of an item

function changeQuantity() {
  // Selection of inputs to listen to
  let itemQuantity = document.querySelectorAll(".itemQuantity");
  // Method to target product id and color
  itemQuantity.forEach((itemQty) => {
    let articleQty = itemQty.closest("article");
    let articleQtyId = articleQty.dataset.id;
    console.log(articleQtyId);
    let articleQtyColor = articleQty.dataset.color;
    console.log(articleQtyColor);
    // Modification event to listen to quantity change
    itemQty.addEventListener("change", () => {
      let newQantity = Number(itemQty.value);
      /* Callback function for each item in the cart
      --- at the change we increment the quantity of the element of these id && color */
      panier.forEach((element) => {
        if (
          element.productId == articleQtyId &&
          element.color == articleQtyColor
        ) {
          element.quantity = newQantity;
        }
      });
      // Return of the new basket to local storage
      localStorage.setItem("cart", JSON.stringify(panier));
      window.location.reload();
    });
  });
}

//----------------- Order form -------------------------------//

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

  // Building an array of strings from local storage
  let idProducts = [];
  for (let i = 0; i < panier.length; i++) {
    idProducts.push(panier[i].productId);
  }
  console.log(idProducts);

  //-------- Form validation management

  // Entry control function according to regEx

  // Firstname / lastname / city search mask
  const regExNameCity = (value) => {
    return /^[A-Za-zÀ-ÿ ,.'-]{3,20}$/.test(value);
  };
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
    //localStorage.setItem("contact", JSON.stringify(contact));
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
      Accept: "application/json",
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
