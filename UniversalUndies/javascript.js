function Brief (color, size, price, quantity) {
  this.color = color;
  this.size = size;
  this.price = price;
  this.quantity = quantity;
}
function Cart(orderNo) {
  this.orderNo = orderNo;
  this.cartArray = new Array();
  this.addToCart = function() {
    var briefNew = makeBrief();
    this.cartArray.push(briefNew);
   }

  function makeBrief() {
    var color = document.getElementById("color").textContent;
    var size = document.getElementById("size").textContent;
    var price = document.getElementById("price").textContent;
    var quantity = document.getElementById("quantity").textContent;
    return new Brief(color, size, price, quantity);
  }

  this.sortCart = function() {
    for (i = 0; i < this.cartArray.length; i++) {
      for (k = 1; k < this.cartArray.length; k++) {
        if (this.cartArray[i].color === this.cartArray[k].color &&
            this.cartArray[i].size === this.cartArray[k].size ) {
            this.cartArray[i].quantity =+ this.cartArray[k].quantity;
            this.cartArray.splice(k, 1);
            k -= 1;
        }
      }
    }
  }
}
// function Customer() {

// }
var selectedColor;
var selectedSize;
var selectedQuantity;
var selectedPrice;
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
  document.getElementById("size-s").src = "pictures/size-s-hover.png";
}
function changeImageToClickedM() {
  document.getElementById("size-m").src = "pictures/size-m-click.png";
}
function changeImageToUnclickedM() {
  document.getElementById("size-m").src = "pictures/size-m.png";
}
function changeImageToHoverM() {
  document.getElementById("size-m").src = "pictures/size-m-hover.png";
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
// var cartObj = new Cart(1);

// alert(cartObj.cartArray[0].color)

// function showCart() {
//   document.getElementById("cart1").innerHTML.textContent = cartObj.cartArray[0].color
//   document.getElementById("cart2").innerHTML.textContent = cartObj.cartArray[1].color
//   document.getElementById("cart3").innerHTML.textContent = cartObj.cartArray[2].color
// }

