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

