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
      var node = document.createTextNode("$" + parseFloat(orderList[i].price).toFixed(2));
      div.appendChild(node);

      var element = document.getElementById("checkout-price-title");
      element.appendChild(div);
    }
    //Under "Subtotal" lists subtotal of items in cart
    for(i = 0; i < orderList.length; i++) {
      var div = document.createElement("div");
      var node = document.createTextNode("$" + parseFloat(orderList[i].price * orderList[i].productNo).toFixed(2));
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
    document.getElementById("tax-value").innerHTML = "$" + parseFloat(tax).toFixed(2)
    document.getElementById("total-value").innerHTML = "$" + parseFloat(total).toFixed(2)

  }
  else {
    alert("Select a size, color, and quantity.");
  }
}
// Sets selectedColor to pink/mint/army/dotted/beach/surf
$(function() {
  $("#" + colors[0] + "-button").on("click", function() {selectColor(colors[0]);});
  $("#" + colors[1] + "-button").on("click", function() {selectColor(colors[1]);});
  $("#" + colors[2] + "-button").on("click", function() {selectColor(colors[2]);});
  $("#" + colors[3] + "-button").on("click", function() {selectColor(colors[3]);});
  $("#" + colors[4] + "-button").on("click", function() {selectColor(colors[4]);});
  $("#" + colors[5] + "-button").on("click", function() {selectColor(colors[5]);});
});

// Sets selectedSize to s/m/l when clicked
$(function() {
  $("#size-" + sizes[0]).on("click", function() {selectSize(sizes[0]);});
  $("#size-" + sizes[1]).on("click", function() {selectSize(sizes[1]);});
  $("#size-" + sizes[2]).on("click", function() {selectSize(sizes[2]);});
});

// Displays highlighted s/m/l icon on hover
$(function() {
  $("#size-" + sizes[0]).on("mouseover", function() {hoverOnSize(sizes[0]);});
  $("#size-" + sizes[1]).on("mouseover", function() {hoverOnSize(sizes[1]);});
  $("#size-" + sizes[2]).on("mouseover", function() {hoverOnSize(sizes[2]);});
});

// Reverts to unhighlighted s/m/l icon when hover lost
$(function() {
  $("#size-" + sizes[0]).on("mouseout", function() {hoverOffSize(sizes[0]);});
  $("#size-" + sizes[1]).on("mouseout", function() {hoverOffSize(sizes[1]);});
  $("#size-" + sizes[2]).on("mouseout", function() {hoverOffSize(sizes[2]);});
});

document.getElementById("add-cart").addEventListener('click', changeAddToCartTextADDED, false);
document.getElementById("add-cart").addEventListener('mouseout', changeAddToCartTextREVERT, false);
document.getElementById("add-cart").addEventListener('click', addToCart, false);
document.getElementById("quantityInput").addEventListener('change',selectQuantity,false);

document.getElementById("checkout").addEventListener('click', checkoutFunction, false);


function selectQuantity() {
  selectedQuantity = parseInt(document.getElementById("quantityInput").value);
}
function changeImage(imagePath, locationID) {
  document.getElementById(locationID).src = imagePath;
}
function selectSize(size) {
  selectedSize = size;
  switch(size) {
    case sizes[0]:
      changeImage("pictures/size-" + sizes[0] + "-click.png", "size-" + sizes[0]);
      changeImage("pictures/size-" + sizes[1] + ".png", "size-" + sizes[1]);
      changeImage("pictures/size-" + sizes[2] + ".png", "size-" + sizes[2]);
      break;
    case sizes[1]:
      changeImage("pictures/size-" + sizes[0] + ".png", "size-" + sizes[0]);
      changeImage("pictures/size-" + sizes[1] + "-click.png", "size-" + sizes[1]);
      changeImage("pictures/size-" + sizes[2] + ".png", "size-" + sizes[2]);
      break;
    case sizes[2]:
      changeImage("pictures/size-" + sizes[0] + ".png", "size-" + sizes[0]);
      changeImage("pictures/size-" + sizes[1] + ".png", "size-" + sizes[1]);
      changeImage("pictures/size-" + sizes[2] + "-click.png", "size-" + sizes[2]);
      break;
  }
}
// function hoverOnSize(size) {
//   if(selectedSize != size) {
//     switch(size) {
//       case sizes[0]:
//         changeImage("pictures/size-" + sizes[0] + "-hover.png", "size-" + sizes[0]);
//         changeImage("pictures/size-" + sizes[1] + ".png", "size-" + sizes[1]);
//         changeImage("pictures/size-" + sizes[2] + ".png", "size-" + sizes[2]);
//         break;
//       case sizes[1]:
//         changeImage("pictures/size-" + sizes[0] + ".png", "size-" + sizes[0]);
//         changeImage("pictures/size-" + sizes[1] + "-hover.png", "size-" + sizes[1]);
//         changeImage("pictures/size-" + sizes[2] + ".png", "size-" + sizes[2]);
//         break;
//       case sizes[2]:
//         changeImage("pictures/size-" + sizes[0] + ".png", "size-" + sizes[0]);
//         changeImage("pictures/size-" + sizes[1] + ".png", "size-" + sizes[1]);
//         changeImage("pictures/size-" + sizes[2] + "-hover.png", "size-" + sizes[2]);
//         break;
//     }
//   }
// }
// function hoverOffSize(size) {
//   if(selectedSize != size) {
//     switch(size) {
//       case sizes[0]:
//         changeImage("pictures/size-" + sizes[0] + ".png", "size-" + sizes[0]);
//         break;
//       case sizes[1]:
//         changeImage("pictures/size-" + sizes[1] + ".png", "size-" + sizes[1]);
//         break;
//       case sizes[2]:
//         changeImage("pictures/size-" + sizes[2] + ".png", "size-" + sizes[2]);
//         break;
//     }
//   }
// }
function selectColor(color) {
  selectedColor = color
  switch(color) {
    case colors[0]:
      changeImage("pictures/" + colors[0] + ".jpg","main-image");
      changeImage("pictures/" + colors[0] + "-button-click.jpg", colors[0] + "-button");
      changeImage("pictures/" + colors[1] + "-button.jpg", colors[1] + "-button");
      changeImage("pictures/" + colors[2] + "-button.jpg", colors[2] + "-button");
      changeImage("pictures/" + colors[3] + "-button.jpg", colors[3] + "-button");
      changeImage("pictures/" + colors[4] + "-button.jpg", colors[4] + "-button");
      changeImage("pictures/" + colors[5] + "-button.jpg", colors[5] + "-button");
      break;
    case colors[1]:
      changeImage("pictures/" + colors[1] + ".jpg","main-image");
      changeImage("pictures/" + colors[0] + "-button.jpg", colors[0] + "-button");
      changeImage("pictures/" + colors[1] + "-button-click.jpg", colors[1] + "-button");
      changeImage("pictures/" + colors[2] + "-button.jpg", colors[2] + "-button");
      changeImage("pictures/" + colors[3] + "-button.jpg", colors[3] + "-button");
      changeImage("pictures/" + colors[4] + "-button.jpg", colors[4] + "-button");
      changeImage("pictures/" + colors[5] + "-button.jpg", colors[5] + "-button");
      break;
    case colors[2]:
      changeImage("pictures/" + colors[2] + ".jpg","main-image");
      changeImage("pictures/" + colors[0] + "-button.jpg", colors[0] + "-button");
      changeImage("pictures/" + colors[1] + "-button.jpg", colors[1] + "-button");
      changeImage("pictures/" + colors[2] + "-button-click.jpg", colors[2] + "-button");
      changeImage("pictures/" + colors[3] + "-button.jpg", colors[3] + "-button");
      changeImage("pictures/" + colors[4] + "-button.jpg", colors[4] + "-button");
      changeImage("pictures/" + colors[5] + "-button.jpg", colors[5] + "-button");
      break;
    case colors[3]:
      changeImage("pictures/" + colors[3] + ".jpg","main-image");
      changeImage("pictures/" + colors[0] + "-button.jpg", colors[0] + "-button");
      changeImage("pictures/" + colors[1] + "-button.jpg", colors[1] + "-button");
      changeImage("pictures/" + colors[2] + "-button.jpg", colors[2] + "-button");
      changeImage("pictures/" + colors[3] + "-button-click.jpg", colors[3] + "-button");
      changeImage("pictures/" + colors[4] + "-button.jpg", colors[4] + "-button");
      changeImage("pictures/" + colors[5] + "-button.jpg", colors[5] + "-button");
      break;
    case colors[4]:
      changeImage("pictures/" + colors[4] + ".jpg","main-image");
      changeImage("pictures/" + colors[0] + "-button.jpg", colors[0] + "-button");
      changeImage("pictures/" + colors[1] + "-button.jpg", colors[1] + "-button");
      changeImage("pictures/" + colors[2] + "-button.jpg", colors[2] + "-button");
      changeImage("pictures/" + colors[3] + "-button.jpg", colors[3] + "-button");
      changeImage("pictures/" + colors[4] + "-button-click.jpg", colors[4] + "-button");
      changeImage("pictures/" + colors[5] + "-button.jpg", colors[5] + "-button");
      break;
    case colors[5]:
      changeImage("pictures/" + colors[5] + ".jpg","main-image");
      changeImage("pictures/" + colors[0] + "-button.jpg", colors[0] + "-button");
      changeImage("pictures/" + colors[1] + "-button.jpg", colors[1] + "-button");
      changeImage("pictures/" + colors[2] + "-button.jpg", colors[2] + "-button");
      changeImage("pictures/" + colors[3] + "-button.jpg", colors[3] + "-button");
      changeImage("pictures/" + colors[4] + "-button.jpg", colors[4] + "-button");
      changeImage("pictures/" + colors[5] + "-button-click.jpg", colors[5] + "-button");
      break;
  }
}

function changeAddToCartTextADDED(){
  document.getElementById("add-cart").value = "ITEM ADDED";
}
function changeAddToCartTextREVERT(){
  document.getElementById("add-cart").value = "ADD TO CART";
}

function changeImageClickedSize(size, attr) {
  // attr is either "click" or "hover".
  document.getElementById("size-" + size).src = "pictures/size-" + size + "-" + attr+ ".png";
}
// ---- The only actual running code that runs on load.
makeProductList();
