// recupère l'id produit dans l'url
document.onreadystatechange =()=>{
  if (document.readyState==="complete") {
    const urlParams = new URLSearchParams(window.location.search);
    const orderid = urlParams.get("orderId");
    console.log(orderid);
    console.log(document.getElementById("orderId"));
    // afficher l'id de la commande
    document.querySelector("#orderId").textContent = orderid;
  }
}
