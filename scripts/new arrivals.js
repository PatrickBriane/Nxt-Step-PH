const products = [
  {
    id: "jogger-lite-black",
    image: "Images/Shoes/Jogger Lite Black 2.png",
    brand: "Reebok",
    name: "Jogger Lite Black",
    price: "₱1,090",
    pricevalue: 1090,
    isNew: true,
    bgcolor: "DFDFDF",
    amazonLink:
      "https://www.amazon.com/Reebok-Mens-Jogger-Lite-Sneaker/dp/B0D7QX47NC",
  },
  {
    image: "Images/Shoes/Jogger Lite Burgundy2.png",
    brand: "Reebok",
    name: "Jogger Lite Burgundy",
    price: "₱1,090",
    pricevalue: 1090,
    isNew: true,
    bgcolor: "FFB8B3",
    amazonLink:  "https://www.zalora.com.ph/p/reebok-jogger-lite-black-3606139"
  },
  {
    image: "Images/Shoes/Stridium 2.0 “Grey”.png",
    brand: "Reebok",
    name: "Stridium 2.0 “Grey”",
    price: "₱1,790",
    pricevalue: 1790,
    isNew: true,
    bgcolor: "DCDEDE",
    amazonLink:  "https://shopee.ph/Original-Reebok-stridium-2.0-Men's-Sports-shoes-gray-walking-shoes-i.1247780240.29302622736"
  },
  {
    image: "Images/Shoes/Stridium 2.0 “Black”.png",
    brand: "Reebok",
    name: "Stridium 2.0 “Black”",
    price: "₱990",
    pricevalue: 990,
    isNew: true,
    bgcolor: "DFDFDF",
    amazonLink:  "https://shopee.ph/Original-Reebok-stridium-2.0-Men's-Sports-shoes-gray-walking-shoes-i.1247780240.29302622736"
  },
  {
    image: "Images/Shoes/Nike Fly.By Mid 3 BlackWhite.png",
    brand: "Nike",
    name: "Nike Fly.By Mid 3 Black/White",
    price: "₱1,090",
    pricevalue: 1090,
    isNew: true,
    bgcolor: "E6E6E6",
    amazonLink:  "https://www.nike.com/ph/t/flyby-mid-3-basketball-shoes-jFHsxb?msockid=01d32f8179836d4c05273b5578cd6c25"
  } ]

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
     <div class="product-wrapper" data-brand="${product.brand}" data-new="${
    product.isNew
  }">
            <a href="shoe.html" class="js-product-link" data-product='${JSON.stringify(
              product
            )}'>
                <div class="container">
                    <div class="shoe" style="background-color: #${product.bgcolor};">
                        <img class="shoe-img" src="${product.image}" alt="">
                    </div>

                    <div class="shoe-info">
                        <h2>${product.brand}</h2>
                        <h1>${product.name}</h1>
                        <p>${product.price}</p>
                            
                    </div>
                </div>
            </a>

            <div class="size-selector">
              <select class="size-dropdown">
                <option value="">Select size</option>
                <option value="7.5">7.5</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="10.5">10.5</option>
              </select>
            </div>

            <button class="AddtoCart">
                <div class="cart">
                    <img src="Images/Add to cart 1.png" alt="">
                    <p>Add to Cart</p>  
                </div>
            </button>
        </div>
    `;
});

document.querySelector(".js-product-area").innerHTML = productsHTML;

document.querySelectorAll(".AddtoCart").forEach((button, index) => {
  button.addEventListener("click", () => {
    const productWrapper = button.closest(".product-wrapper");
    const sizeDropdown = productWrapper.querySelector(".size-dropdown");
    const selectedSize = sizeDropdown.value;

    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const product = products[index];
    const cartItem = {
      ...product,
      size: selectedSize,
      quantity: 1,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} (Size ${selectedSize}) added to cart!`);
  });
});

document.querySelectorAll(".brand-filter").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedBrand = link.dataset.brand;

    document.querySelectorAll(".product-wrapper").forEach((product) => {
      const productBrand = product.dataset.brand;
      product.style.display =
        selectedBrand === "All" || productBrand === selectedBrand
          ? "flex"
          : "none";
    });

    updateIntro(link.dataset.title);
  });
});

document
  .querySelector(".new-arrivals-filter")
  .addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll(".product-wrapper").forEach((product) => {
      const isNew = product.dataset.new === "true";
      product.style.display = isNew ? "flex" : "none";
    });

    updateIntro(e.target.dataset.title);
  });

function updateIntro(title) {
  const intro = document.getElementById("intro");
  intro.querySelector("h1").textContent = title;
}

document.querySelectorAll(".js-product-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const productData = e.currentTarget.dataset.product;
    localStorage.setItem("selectedProduct", productData);
  });
});

shoeCard.addEventListener("click", () => {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "Shoe.html";
});
