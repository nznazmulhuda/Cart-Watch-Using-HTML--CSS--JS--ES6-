let cart = []; // initially cart is empty
let quantity = 1; // initial quantity is 1

// function to change the thumbnail
function changeThumbnail(color) {
  const thumbnail = document.getElementById("product_thumbnail"); // get the thumbnail

  const images = {
    purple: "./assets/purple.png",
    black: "./assets/black.png",
    blue: "./assets/blue.png",
    cyan: "./assets/cyan.png",
  };

  thumbnail.src = images[color];
}

// function to change the quantity
function changeQuantity(amount) {
  const quantityValue = document.getElementById("product_quantity"); // get the quantity

  quantity = Math.max(1, quantity + amount); // get the new quantity

  quantityValue.innerHTML = quantity; // update the quantity
}
