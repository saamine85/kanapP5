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

//''''''''''''''''''''''''''''''''''''''''''Start Form''''''''''''''''''''''''''''''''''//

//''''''''''''''''''''''''''''''''''''''''''reset form after loadpage''''''''''''''''''''''''''''''''''//
const form = document.querySelector("form");
// form.reset();
//''''''''''''''''''''''''''''''''''''''''''Start Order event''''''''''''''''''''''''''''''''''//

//''' get data from form and set it to local storage''''''//

// const orderBtn = document.querySelector("#order");
// console.log(orderBtn);
const firstName = document.getElementById("firstName");
firstName.addEventListener("change", (event) => {
  firstName.classList.add("error");
  firstNameErrorMsg.style.display = "block";
  const regFirstName = /[a-zÀ-ÿ]/;
  // /^[A-Za-zÀ-ÿ ,.'-]{3,20}$/;
  if (firstName.value.length >= 3 && regFirstName.test(firstName.value)) {
    firstName.classList.replace("error", "succes");
    firstNameErrorMsg.style.display = "none";
    firstNameValidator = true;
  }
});
const lastName = document.getElementById("lastName");
lastName.addEventListener("change", (event) => {
  lastName.classList.add("error");
  lastNameErrorMsg.style.display = "block";
  const reglastName = /[a-zÀ-ÿ]/;
  // /^[A-Za-zÀ-ÿ ,.'-]{3,20}$/;
  if (lastName.value.length >= 3 && reglastName.test(lastName.value)) {
    lastName.classList.replace("error", "succes");
    lastNameErrorMsg.style.display = "none";
    lastNameValidator = true;
  }
});

const address = document.getElementById("address");
address.addEventListener("change", (event) => {
  event.preventDefault();
  address.classList.add("error");
  addressErrorMsg.style.display = "block";
  const regAddress =
    /^[0-9a-zA-ZÀ-ÿ\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-ZÀ-ÿ\u0080-\u024F]+(?:. |-| |'))*[a-zA-ZÀ-ÿ\u0080-\u024F]*$/;
  // /^([a-zA-ZÀ-ÿ,-. ]{1,}|[0-9]{1,4})[ ].{1,}$/;
  if (regAddress.test(address.value)) {
    address.classList.replace("error", "succes");
    addressErrorMsg.style.display = "none";
    adressValidator = true;
  }
});
const city = document.getElementById("city");
city.addEventListener("change", (event) => {
  city.classList.add("error");
  cityErrorMsg.style.display = "block";
  const regCity =
    /^[a-zA-ZÀ-ÿ\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-ZÀ-ÿ\u0080-\u024F]+(?:. |-| |'))*[a-zA-ZÀ-ÿ\u0080-\u024F]*$/;
  //  /^[A-Za-zÀ-ÿ ,.'-]{3,20}$/;
  if (regCity.test(city.value)) {
    city.classList.replace("error", "succes");
    cityErrorMsg.style.display = "none";
    cityValidator = true;
  }
});

const email = document.getElementById("email");
email.addEventListener("change", (event) => {
  email.classList.add("error");
  emailErrorMsg.style.display = "block";
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // /^[a-zA-Z0-9.-_]+@{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.
  if (regEmail.test(email.value)) {
    email.classList.replace("error", "succes");
    emailErrorMsg.style.display = "none";
    emailValidator = true;
  }
});

// const orderBtn = document.querySelector("#order");
// console.log(orderBtn);
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent autosubmiting form
  // contact();
  if (
    firstNameValidator &&
    lastNameValidator &&
    adressValidator &&
    emailValidator
  ) {
    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    };
    // localStorage.setItem("contact", JSON.stringify(contact));

    let products = [];
    panier.forEach((el) => {
      products.push(el.id);
    });
    let order = {
      contact,
      products,
    };
    console.log(order);
    fetch("http://localhost:3000/api/products/order", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.orderId);
        localStorage.clear();
        window.location.href = `confirmation.html?orderId=${data.orderId}`;
      })
      .catch((err) => console.log("Erreur est survenu", err));
  }
  // ''''''''''''''''''''''''set and get form as an object
  // let idProducts = [];
  // if () {
  //   for (let j = 0; j < panier.length; j++) {
  //     idProducts.push(panier[j].id);
  //   }
  //   console.log(idProducts);
  // }
  //****  methode 1 repetition/

  // const formulaire = {
  //   prenom: localStorage.getItem("prenom"),
  //   nom: localStorage.getItem("nom"),
  //   adress: localStorage.getItem("adresse"),
  //   city: localStorage.getItem("ville"),
  //   email: localStorage.getItem("email"),
  // };
  // console.log(formulaire);

  // localStorage.setItem("prenom", document.querySelector("#firstName").value);
  // localStorage.setItem("nom", document.querySelector("#lastName").value);
  // localStorage.setItem("adresse", document.querySelector("#address").value);
  // localStorage.setItem("ville", document.querySelector("#city").value);
  // localStorage.setItem("email", document.querySelector("#email").value);
  // console.log(document.querySelector("#firstName").value);
  // console.log(document.querySelector("#lastName").value);
  // console.log(document.querySelector("#address").value);
  // console.log(document.querySelector("#city").value);
  // console.log(document.querySelector("#email").value);

  //***''''''''methode 2/

  // const formulaire = {
  //   prenom: document.querySelector("#firstName").value,
  //   nom: document.querySelector("#lastName").value,
  //   adress: document.querySelector("#address").value,
  //   ville: document.querySelector("#city").value,
  //   email: document.querySelector("#email").value,
  // };
  // console.log(formulaire);

  //***''''''''methode 3/
  // class form {
  //   constructor() {
  //     this.firstName = document.querySelector("#firstName").value;
  //     this.lastName = document.querySelector("#lastName").value;
  //     this.adress = document.querySelector("#address").value;
  //     this.city = document.querySelector("#city").value;
  //     this.email = document.querySelector("#email").value;
  //   }
  // }
  // //************** avoid instance to create a form obeject'''''''''/
  // const contact = new form();
  // console.log(contact);
  // //******************'''''' set form values in local storage''''''''/

  // // control valid form
  // localStorage.setItem("contact", JSON.stringify(contact));

  // console.log(localStorage.getItem("contact"));
  // const order = {
  //   products: idProducts,
  //   contact,
  // };
  // console.log("object a envoyer vers le serveur", order);

  //******************'''''' send object to server''''''''/
  // sendToServer(order);
});

//********************* keep local storage form values at the form input when change page//

// const dataStorage = localStorage.getItem("contact");
// // console.log(dataStorage);
// const dataForm = JSON.parse(dataStorage);

// //** method 1*/

// console.log("mes infos formulaires", dataForm);
// const lsForm = () => {
//   if (dataForm) {
//     document.querySelector("#firstName").value = dataForm.firstName;
//     document.querySelector("#lastName").value = dataForm.lastName;
//     document.querySelector("#address").value = dataForm.adress;
//     document.querySelector("#city").value = dataForm.city;
//     document.querySelector("#email").value = dataForm.email;
//   }
// };
// lsForm();

// const sendToServer = (order) => {
//   console.log(order);
//   fetch("http://localhost:3000/api/products/order", {
//     method: "POST",
//     body: JSON.stringify(order),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((order) => {
//       localStorage.setItem("orderId", order.id);
//       console.log(localStorage.setItem("orderId", order.id));
//       // location.href = `./confirmation.html?orderid=${order["orderId"]}`;
//       // localStorage.clear();
//     })
//     .catch((err) => console.log("Il y a un problème: ", err));
// console.log("donnees envoyees:", data);
// };
