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


var cartObj = new Cart(1);

alert(cartObj.cartArray[0].color)

function showCart() {
  document.getElementById("cart1").innerHTML.textContent = cartObj.cartArray[0].color
  document.getElementById("cart2").innerHTML.textContent = cartObj.cartArray[1].color
  document.getElementById("cart3").innerHTML.textContent = cartObj.cartArray[2].color
}

