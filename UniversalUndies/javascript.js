var colors = ["Pink", "Mint", "Army", "Dotted", "Beach", "Surf"];
var sizes = ["sm", "md", "lg"];
var noCombinations = colors.length * sizes.length;
var price = 50;

function makeProductList() {
  productList = new Array();
  productCounter = 0

  for(c = 0; c < colors.length; c++) {
    for(s = 0; s < sizes.length; s++) {
      var tempBrief = new Brief(colors[c], sizes[s], price, productCounter);
      productList.push(tempBrief);
      productCounter += 1;
    }
  }
}

function Brief (color, size, price, productNo) {
  this.color = color;
  this.size = size;
  this.price = price;
  this.productNo = productNo;
}


function selectSize(size) {
  switch(size) {

    case sm:

      document.getElementById("sm").src = "pictures/size-s-click.png";
      document.getElementById("md").src = "pictures/size-m.png";
      document.getElementById("lg").src = "pictures/size-l.png";
      selection = "sm"
      break;

    case md:

      document.getElementById("sm").src = "pictures/size-s.png";
      document.getElementById("md").src = "pictures/size-m-click.png";
      document.getElementById("lg").src = "pictures/size-l.png";
      selection = "md"
      break;

    case lg:

      document.getElementById("sm").src = "pictures/size-s.png";
      document.getElementById("md").src = "pictures/size-m.png";
      document.getElementById("lg").src = "pictures/size-l-click.png";
      selection = "lg"
      break;

  }
}

var changeImageS = function() {
  document.getElementById("sm").src = "pictures/size-s-click.png";
};

var changeImageM = function() {
  document.getElementById("md").src = "pictures/size-m-click.png";
};

var changeImageL = function() {
  document.getElementById("lg").src = "pictures/size-l-click.png";
};


// function makeBrief() {
//   var color = document.getElementById("color").value;
//   var size = document.getElementById("size").value;
//   var price = document.getElementById("price").value;
//   var quantity = document.getElementById("quantity").value;
//   return new Brief(color, size, price, quantity);
// }

// function Cart(orderNo) {
//   this.orderNo = orderNo;
//   this.cartArray = new Array();
//   this.addToCart = function() {
//     var briefNew = makeBrief();
//     this.cartArray.push(briefNew);
//   }

//   this.sortCart = function() {
//     for (i = 0; i < this.cartArray.length; i++) {
//       for (k = 1; k < this.cartArray.length; k++) {
//         if (this.cartArray[i].color === this.cartArray[k].color &&
//           this.cartArray[i].size === this.cartArray[k].size ) {
//           this.cartArray[i].quantity =+ this.cartArray[k].quantity;
//           this.cartArray.splice(k, 1);
//           k -= 1;
//         }
//       }
//     }
//   }
// }


// var cartObj = new Cart(1);


// function showCart() {
//   document.getElementById("cart1").innerHTML.textContent = cartObj.cartArray[0].color
//   document.getElementById("cart2").innerHTML.textContent = cartObj.cartArray[1].color
//   document.getElementById("cart3").innerHTML.textContent = cartObj.cartArray[2].color
// }


var selectedColor;
var selectedSize;
var selectedQuantity;
var colors = ["pink", "mint", "army", "dotted", "beach", "surf"];
var sizes = ["s", "m", "l"];
var noCombinations = colors.length * sizes.length;
var price = 50;

function Brief (color, size, price, productNo) {
  this.color = color;
  this.size = size;
  this.price = price;
  this.productNo = productNo;
}
function makeProductList() {
  productList = new Array();

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
      alert(productList[i].color + productList[i].size + productList[i].price + productList[i].productNo)
    }
    else{
      document.getElementById("add-cart").value = "Select a color, size, and quantity.";
    }
  }
}


// function Customer() {

// }

document.getElementById("pink-button").addEventListener('click', selectColorPink,false);
document.getElementById("mint-button").addEventListener("click", selectColorMint,false);
document.getElementById("army-button").addEventListener('click', selectColorArmy,false);
document.getElementById("dotted-button").addEventListener('click', selectColorDotted,false);
document.getElementById("beach-button").addEventListener('click', selectColorBeach,false);
document.getElementById("surf-button").addEventListener('click', selectColorSurf,false);
document.getElementById("size-s").addEventListener('click', selectSizeS,false);
document.getElementById("size-m").addEventListener('click', selectSizeM,false);
document.getElementById("size-l").addEventListener('click', selectSizeL,false);
document.getElementById("size-s").addEventListener('mouseover', hoverOnSizeS,false);
document.getElementById("size-m").addEventListener('mouseover', hoverOnSizeM,false);
document.getElementById("size-l").addEventListener('mouseover', hoverOnSizeL,false);
document.getElementById("size-s").addEventListener('mouseout', hoverOutSizeS,false);
document.getElementById("size-m").addEventListener('mouseout', hoverOutSizeM,false);
document.getElementById("size-l").addEventListener('mouseout', hoverOutSizeL,false);
document.getElementById("add-cart").addEventListener('click', changeAddToCartTextADDED, false);
document.getElementById("add-cart").addEventListener('mouseout', changeAddToCartTextREVERT, false);
document.getElementById("add-cart").addEventListener('click', addToCart, false);
document.getElementById("quantityInput").addEventListener('change',selectQuantity,false);

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
