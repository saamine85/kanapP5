// let prodStore = JSON.parse(localStorage.getItem("produit"));
// console.log(prodStore);
const produit = window.location.search.slice(4);
let prodStores = [];
// recuperation des donnees de l'api**********************
const fetchStore = async () => {
  await fetch(`http://localhost:3000/api/products/${produit}`)
    .then((res) => res.json())
    // console.log(res.json());
    .then((data) => {
      prodStores = data;
      // console.log(produitData);
    });
  // console.log(res.json());
};
// fetchStore();

// recuperation du produit choisis

let addPanier = document.querySelector("#cart__items");
// addPanier.innerHTML = `<h1>${produit.nomProduit}</h1>`;
// console.log(addPanier);
const storeDisplay = async () => {
  await fetchStore();
  let prodStores = JSON.parse(localStorage.getItem("produit"));

  if (prodStores === null) {
    const emptyData = `
    <section class="cart"><h1>vide <a href="index.html">(ajoutez des produits)</a></h1></section>
 `;
    addPanier.innerHTML = emptyData;
    let link = document.querySelector(".cart a");
    link.style.textDecoration = "none";
    link.style.color = "#ddd";
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

      removeProd();
    });
    // for (let produit in localStorage) {
    //   console.log(localStorage.produit); // shows getItem, setItem and other built-in stuff
    // }
    // updateQuantity();
    // getStore();
    // console.log("produit ajoute");
    // removeProd();
    // removeProd();
    updateTotal();
  }
  // console.log(prod);

  // // let prod = 0;
  // for (let i = 0; i < prod.length; i++) {
  // let prod = parseFloat(prodStores[0].quantity);
  // for (let i = 0; i < prod.length; i++) {
  //   const count = prod[i];
  //   totalQuantity.textContent = count;
  // }
  //   // const countProd = prod[i];
  //   localStorage.setItem("produit",JSON.stringify(prodStores))
  //   console.log(prod);
  // }
  // incrementProd();
};
storeDisplay();

/*-----------------------  calcul Total et quantite--------------------------------- */

const updateTotal = () => {
  const allProducts = document.querySelectorAll("article");
  // console.log(allProducts);
  let totaleP = 0;
  let total = 0;
  // let totalQuantity = 0;
  allProducts.forEach((allProd) => {
    //recuperation des prix
    // rendre le prix en number
    let price = Number(
      allProd.querySelector("p#price").innerText.replace("€", "")
    );
    // HTMLCollection utilise l'index
    let quantity = parseInt(
      allProd.getElementsByClassName("itemQuantity")[0].value
    );
    total += quantity; // total =lancien total + (quantite nouvelle)
    totaleP += price * quantity; // total =lancien total + (prix *quanite)
    // console.log(typeof quantity);
  });
  // afficher le prix total apres avoir teminer la boucle
  // console.log(total);
  // updateQuantity();
  totalPrice.textContent = totaleP;
  totalQuantity.textContent = total;
  console.log(total);
};

const removeProd = () => {
  let removeButton = document.getElementsByClassName("deleteItem");
  console.log(removeButton);
  for (let i = 0; i < removeButton.length; i++) {
    let deleteItem = removeButton[i];
    deleteItem.addEventListener("click", (event) => {
      let itemClicked = event.target;
      itemClicked.parentElement.parentElement.parentElement.parentElement.remove();
      localStorage.removeItem("produit");
      updateTotal();
      // console.log("clicked");
    });
  }
};

// let myQuantity = parseFloat(
//     document.getElementsByClassName("itemQuantity")[0].value
//   );

//   myQuantity.addEventListener("onchange", () => {
//     let total = 0;
//     if (myQuantity <= 100) {
//       total += myQuantity;
//       console.log(total);
//     } else {
//     }
//   });
//''''''''''''''''''''''''''''''''''''''''''Start Form''''''''''''''''''''''''''''''''''//

const firstName = document.getElementById("firstName");
firstName.addEventListener("onchange", (event) => {
  firstName.classList.add("error");
  firstNameErrorMsg.style.display = "block";
  const regFirstName = /[a-z]/;
  if (firstName.value.length >= 3 && regFirstName.test(firstName.value)) {
    firstName.classList.replace("error", "succes");
    firstNameErrorMsg.style.display = "none";
  }
});
const lastName = document.getElementById("lastName");
lastName.addEventListener("onchange", (event) => {
  lastName.classList.add("error");
  lastNameErrorMsg.style.display = "block";
  const reglastName = /[a-z]/;
  if (lastName.value.length >= 3 && reglastName.test(lastName.value)) {
    lastName.classList.replace("error", "succes");
    lastNameErrorMsg.style.display = "none";
  }
});

const address = document.getElementById("address");
address.addEventListener("onchange", (event) => {
  address.classList.add("error");
  addressErrorMsg.style.display = "block";
  const regAddress = /^[#.0-9a-zA-Z\s,-]+$/;
  if (regAddress.test(address.value)) {
    address.classList.replace("error", "succes");
    addressErrorMsg.style.display = "none";
  }
});
const city = document.getElementById("city");
city.addEventListener("onchange", (event) => {
  city.classList.add("error");
  cityErrorMsg.style.display = "block";
  const regCity =
    /^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
  if (regCity.test(city.value)) {
    city.classList.replace("error", "succes");
    cityErrorMsg.style.display = "none";
  }
});

const email = document.getElementById("email");
email.addEventListener("onchange", (event) => {
  email.classList.add("error");
  emailErrorMsg.style.display = "block";
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEmail.test(email.value)) {
    email.classList.replace("error", "succes");
    emailErrorMsg.style.display = "none";
  }
});
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
