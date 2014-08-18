var selectedColor;
var selectedSize;
var selectedQuantity;
var colors = ["pink", "mint", "army", "dotted", "beach", "surf"];
var sizes = ["s", "m", "l"];
var price = 50;
// var cartFull = false

function Brief (color, size, price, productNo) {
  this.color = color;
  this.size = size;
  this.price = price;
  this.productNo = productNo;
}

function makeProductList() {
  productList = [];

  for(c = 0; c < colors.length; c++) {
    for(s = 0; s < sizes.length; s++) {
      var tempBrief = new Brief(colors[c], sizes[s], price, 0);
      productList.push(tempBrief);
    }
  }
  return productList; //[(pink,s,50,0),(pink,m,50,0)...]
}


function addToCart() {
  for(i = 0; i < productList.length; i++) {
    if(selectedColor === productList[i].color && selectedSize === productList[i].size && selectedQuantity > 0) {
      productList[i].productNo += selectedQuantity;
      // var cartFull = true
      alert(productList[i].color + productList[i].size + productList[i].price + productList[i].productNo)
    }
    else {
      // var cartFull = false
      document.getElementById("add-cart").value = "Select a size, color, and quantity.";
    }
  }
}

function checkoutFunction() {
  //Checks to see if anything is in cart
  for(i = 0; i < productList.length; i++) {
    if(productList[i].productNo > 0) {
      var cartFull = true
    }
  }

  if(cartFull === true) {


    //scrolls down to checkout section
    location.href="#";
    location.href="#checkout-bookmark";
    //builds order array
    orderList = [];

    for(i = 0; i < productList.length; i++) {
      if(productList[i].productNo > 0) {
        orderList.push(productList[i]);
      }
    }
    //Under "Items" lists items in cart
    for(i = 0; i < orderList.length; i++) {
      var div = document.createElement("div");
      var node = document.createTextNode("Brief: " + orderList[i].color + " " + orderList[i].size);
      div.appendChild(node);

      var element = document.getElementById("checkout-item-title");
      element.appendChild(div);
    }
    //Under "Quantity" lists quantity of items in cart
    for(i = 0; i < orderList.length; i++) {
      var div = document.createElement("div");
      var node = document.createTextNode(orderList[i].productNo + "x");
      div.appendChild(node);

      var element = document.getElementById("checkout-quantity-title");
      element.appendChild(div);
    }
    //Under "Price" lists price of items in cart
    for(i = 0; i < orderList.length; i++) {
      var div = document.createElement("div");
      var node = document.createTextNode("$" + orderList[i].price + ".00");
      div.appendChild(node);

      var element = document.getElementById("checkout-price-title");
      element.appendChild(div);
    }
    //Under "Subtotal" lists subtotal of items in cart
    for(i = 0; i < orderList.length; i++) {
      var div = document.createElement("div");
      var node = document.createTextNode("$" + orderList[i].price * orderList[i].productNo + ".00");
      div.appendChild(node);

      var element = document.getElementById("checkout-total-title");
      element.appendChild(div);
    }
    //Calculates Total, calculates Tax, lists under "Total" and "Tax", respectively
    var total = 0
    for(i = 0; i < orderList.length; i++) {
      var subtotal = (orderList[i].price * orderList[i].productNo);
      total = total + subtotal;
    }
    var tax = (0.095 * total)
    total = total + tax
    document.getElementById("tax-value").innerHTML = "$" + tax + ".00"
    document.getElementById("total-value").innerHTML = "$" + total + ".00"

  }
  else {
    alert("Select a size, color, and quantity.");
  }
}

// Sets selectedColor to pink/mint/army/dotted/beach/surf
document.getElementById("pink-button").addEventListener('click', selectColorPink,false);
document.getElementById("mint-button").addEventListener("click", selectColorMint,false);
document.getElementById("army-button").addEventListener('click', selectColorArmy,false);
document.getElementById("dotted-button").addEventListener('click', selectColorDotted,false);
document.getElementById("beach-button").addEventListener('click', selectColorBeach,false);
document.getElementById("surf-button").addEventListener('click', selectColorSurf,false);

// Sets selectedSize to s/m/l when clicked
document.getElementById("size-s").addEventListener('click', selectSizeS,false);
document.getElementById("size-m").addEventListener('click', selectSizeM,false);
document.getElementById("size-l").addEventListener('click', selectSizeL,false);

// Displays highlighted s/m/l icon on hover
document.getElementById("size-s").addEventListener('mouseover', hoverOnSizeS,false);
document.getElementById("size-m").addEventListener('mouseover', hoverOnSizeM,false);
document.getElementById("size-l").addEventListener('mouseover', hoverOnSizeL,false);

// Reverts to unhighlighted s/m/l icon when hover lost
document.getElementById("size-s").addEventListener('mouseout', hoverOutSizeS,false);
document.getElementById("size-m").addEventListener('mouseout', hoverOutSizeM,false);
document.getElementById("size-l").addEventListener('mouseout', hoverOutSizeL,false);

document.getElementById("add-cart").addEventListener('click', changeAddToCartTextADDED, false);
document.getElementById("add-cart").addEventListener('mouseout', changeAddToCartTextREVERT, false);
document.getElementById("add-cart").addEventListener('click', addToCart, false);
document.getElementById("quantityInput").addEventListener('change',selectQuantity,false);

document.getElementById("checkout").addEventListener('click', checkoutFunction, false);


function selectQuantity() {
  selectedQuantity = parseInt(document.getElementById("quantityInput").value);
}
function selectColorPink() {
  selectedColor = "pink";
}
function selectColorMint() {
  selectedColor = "mint";
}
function selectColorArmy() {
  selectedColor = "army";
}
function selectColorDotted() {
  selectedColor = "dotted";
}
function selectColorBeach() {
  selectedColor = "beach";
}
function selectColorSurf() {
  selectedColor = "surf";
}

function selectSizeS() {
  if(selectedSize != "s" ) {
    selectedSize = "s";
    changeImageToClickedS();
    changeImageToUnclickedM();
    changeImageToUnclickedL();
  }
  else {
    selectedSize = "void";
    changeImageToUnclickedS();
  }
}
function selectSizeM() {
  if(selectedSize != "m") {
    selectedSize = "m";
    changeImageToClickedM();
    changeImageToUnclickedS();
    changeImageToUnclickedL();
  }
  else {
    selectedSize = "void";
    changeImageToUnclickedM();
  }
}
function selectSizeL() {
  if(selectedSize != "l") {
    selectedSize = "l";
    changeImageToClickedL();
    changeImageToUnclickedS();
    changeImageToUnclickedM();
  }
  else {
    selectedSize = "void";
    changeImageToUnclickedL();
  }
}
function hoverOnSizeS() {
  if(selectedSize != "s") {
    changeImageToHoverS();
  }
}
function hoverOnSizeM() {
  if(selectedSize != "m") {
    changeImageToHoverM();
  }
}
function hoverOnSizeL() {
  if(selectedSize != "l") {
    changeImageToHoverL();
  }
}
function hoverOutSizeS() {
  if(selectedSize != "s") {
    changeImageToUnclickedS();
  }
}
function hoverOutSizeM() {
  if(selectedSize != "m") {
    changeImageToUnclickedM();
  }
}
function hoverOutSizeL() {
  if(selectedSize != "l") {
    changeImageToUnclickedL();
  }
}
function changeImageToClickedS() {
  document.getElementById("size-s").src = "pictures/size-s-click.png";
}
function changeImageToUnclickedS() {
  document.getElementById("size-s").src = "pictures/size-s.png";
}
function changeImageToHoverS() {
  document.getElementById("size-s").src = "#";
}
function changeImageToClickedM() {
  document.getElementById("size-m").src = "pictures/size-m-click.png";
}
function changeImageToUnclickedM() {
  document.getElementById("size-m").src = "pictures/size-m.png";
}
function changeImageToHoverM() {
  document.getElementById("size-m").src = "#";
}
function changeImageToClickedL() {
  document.getElementById("size-l").src = "pictures/size-l-click.png";
}
function changeImageToUnclickedL() {
  document.getElementById("size-l").src = "pictures/size-l.png";
}
function changeImageToHoverL() {
  document.getElementById("size-l").src = "pictures/size-l-hover.png";
}
function changeAddToCartTextADDED(){
  document.getElementById("add-cart").value = "ITEM ADDED";
}
function changeAddToCartTextREVERT(){
  document.getElementById("add-cart").value = "ADD TO CART";
}



//---- The only actual running code that runs on load.
makeProductList();
