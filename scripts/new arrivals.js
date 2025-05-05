const products = [
  {
    image: "Images/Shoes/Jogger Lite Black 2.png",
    brand: "Reebok",
    name: "Jogger Lite Black",
    price: "₱1,090",
    priceValue: 1090,
    isNew: true,
  },
  {
    image: "Images/Shoes/Jogger Lite Burgundy2.png",
    brand: "Reebok",
    name: "Jogger Lite Burgundy",
    price: "₱1,090",
    pricevalue: 1090,
    isNew: true,
  },
  {
    image: "Images/Shoes/Stridium 2.0 “Grey”.png",
    brand: "Reebok",
    name: "Stridium 2.0 “Grey”",
    price: "₱1,790",
    pricevalue: 1790,
    isNew: true,
  },
  {
    image: "Images/Shoes/Stridium 2.0 “Black”.png",
    brand: "Reebok",
    name: "Stridium 2.0 “Black”",
    price: "₱990",
    pricevalue: 990,
    isNew: true,
  },
  {
    image: "Images/Shoes/Nike Fly.By Mid 3 BlackWhite.png",
    brand: "Nike",
    name: "Nike Fly.By Mid 3 Black/White",
    price: "₱1,090",
    pricevalue: 1090,
    isNew: true,
  },
];

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
                    <div class="shoe" style="background-color: #DFDFDF;">
                        <img class="shoe-img" src="${product.image}" alt="">
                    </div>

                    <div class="shoe-info">
                        <h2>${product.brand}</h2>
                        <h1>${product.name}</h1>
                        <p>${product.price}</p>
                            
                    </div>
                </div>
            </a>

            <button class="heart">
                <img class="favorite" src="Images/Heart Icon (button).png" alt="">
            </button>

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
