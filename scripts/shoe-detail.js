const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
  document.querySelector(".image-frame img").src =
    product.detailImage || product.image;
  document.querySelector(".shoe-brand").textContent = product.brand;
  document.querySelector(".shoe-name").textContent = product.name;
  document.querySelector(".shoe-price").textContent = product.price;
}

document.querySelector(".back-btn").addEventListener("click", () => {
  window.history.back();
});

document.querySelector(".cart-btn").addEventListener("click", () => {
  const selectedSize = document.querySelector('input[name="choice"]:checked');
  if (!selectedSize) {
    alert("Please select a size before adding to cart.");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = {
    ...product,
    size: selectedSize.id,
    quantity: 1,
  };

  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
});

const buyNowBtn = document.querySelector(".buy-now-button");

const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

if (selectedProduct && selectedProduct.amazonLink) {
  buyNowBtn.addEventListener("click", () => {
    window.open(selectedProduct.amazonLink, "_blank");
  });
} else {
  buyNowBtn.disabled = true;
  buyNowBtn.textContent = "Not Available";
}
