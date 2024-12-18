let cart = []; // initially cart is empty
let quantity = 1; // initial quantity is 1
let size = "S"; // initial size is S
let brandColor = "purple"; // initial brand color is "purple"

// function to change the thumbnail
function changeThumbnail(color) {
  const thumbnail = document.getElementById("product_thumbnail"); // get the thumbnail

  const images = {
    purple: "./assets/purple.png",
    black: "./assets/black.png",
    blue: "./assets/blue.png",
    cyan: "./assets/cyan.png",
  };

  brandColor = color; // update the brand color

  thumbnail.src = images[color];
}

// function to change the quantity
function changeQuantity(amount) {
  const quantityValue = document.getElementById("product_quantity"); // get the quantity

  quantity = Math.max(1, quantity + amount); // get the new quantity

  quantityValue.innerHTML = quantity; // update the quantity
}

// function to change the size

function changeSize(sizeValue) {
  size = sizeValue; // get the new size
}

// function to add item to cart
function addToCart() {
  const priceMap = {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  };

  const totalPrice = quantity * priceMap[size]; // get the latest price
  const thumbnail = document.getElementById("product_thumbnail").src; // get the latest thumbnail

  const product = {
    thumbnail,
    brandColor,
    size,
    quantity,
    totalPrice,
  };

  console.log(product);
}
