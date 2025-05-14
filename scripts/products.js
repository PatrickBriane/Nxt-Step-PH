//Almost all the javascript codes are done by following a step by step tutorial, since we did not have enough time and knowledge to do it manually

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
  },
  {
    image: "Images/Shoes/Jordan 38 “White Metallic Gold”.png",
    detailImage: "Images/Shoes/7 1 (1).png",
    brand: "Nike",
    name: "Jordan 38 “White Metallic Gold”",
    price: "₱3,890",
    pricevalue: 3890,
    isNew: false,
    bgcolor: "E3E3E3",
    amazonLink:  "https://www.nike.com/ph/t/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Nike Impact 3 “Black Grey”2.png",
    detailImage: "Images/Shoes/6 1 (2).png",
    brand: "Nike",
    name: "Nike Impact 3 “Black Grey”",
    price: "₱1,690",
    pricevalue: 1690,
    isNew: false,
    bgcolor: "A0A0A0",
    amazonLink:  "https://www.goat.com/sneakers/air-max-impact-3-cool-grey-dc3725-002"
  },
  {
    image: "Images/Shoes/Nike KD Trey 5 X “Green Strike”.png",
    detailImage: "Images/Shoes/8 1 (2).png",
    brand: "Nike",
    name: "Nike KD Trey 5 X “Green Strike”",
    price: "₱1,790",
    pricevalue: 1790,
    isNew: false,
    bgcolor: "D9FFCC",
    amazonLink:  "https://www.kickscrew.com/en-PH/products/nike-kd-trey-5-x-ep-dj7554-014"
  },
  {
    image: "Images/Shoes/Giannis Immortality 3 “Photo Blue”.png",
    detailImage: "Images/Shoes/2 1 (1).png",
    brand: "Nike",
    name: "Giannis Immortality 3 “Photo Blue”",
    price: "₱2,290",
    pricevalue: 2290,
    isNew: false,
    bgcolor: "7FD0FF",
    amazonLink:  "https://www.zeus.ph/products/nike-mens-giannis-immortality-3-ep-photo-blue-black-barely-volt-white-dz7534-400"
  },
  {
    image: "Images/Shoes/Giannis Immortality 4 “Halloween”.png",
    detailImage: "Images/Shoes/4 1 (1).png",
    brand: "Nike",
    name: "Giannis Immortality 4 “Halloween”",
    price: "₱2,690",
    pricevalue: 2690,
    isNew: false,
    bgcolor: "FFC192",
    amazonLink:  "https://www.nike.com/ph/t/giannis-immortality-4-halloween-ep-basketball-shoes-4MTsCH/FQ3681-301?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Freak 4 “Indigo Haze”.png",
    detailImage: "Images/Shoes/6 2 (1).png",
    brand: "Nike",
    name: "Freak 4 “Indigo Haze”",
    price: "₱3,590",
    pricevalue: 3590,
    isNew: false,
    bgcolor: "97EEC6",
    amazonLink:  "https://www.kickscrew.com/en-PH/products/nike-freak-4-dj6149-500"
  },
  {
    image: "Images/Shoes/Nike G.T Cut 3 “Asheen Slate.png",
    detailImage: "Images/Shoes/8 2 (1).png",
    brand: "Nike",
    name: "Nike G.T Cut 3 “Asheen Slate",
    price: "₱4,990",
    pricevalue: 4990,
    isNew: false,
    bgcolor: "E2AEEB",
    amazonLink:  "https://stockx.com/nike-air-zoom-gt-cut-3-ashen-slate?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Nike Elevate 3 “White Green”.png",
    detailImage: "Images/Shoes/12 1 (1).png",
    brand: "Nike",
    name: "Nike Elevate 3 “White Green”",
    price: "₱1,490",
    pricevalue: 1490,
    isNew: false,
    bgcolor: "D6DECB",
    amazonLink:  "https://www.nike.com/ph/t/elevate-3-basketball-shoes-QT43Gj/DD9304-301"
  },
  {
    image: "Images/Shoes/Jordan Zion 3 “Pressure”.png",
    detailImage: "Images/Shoes/16 1 (1).png",
    brand: "Nike",
    name: "Jordan Zion 3 “Pressure”",
    price: "₱2,990",
    pricevalue: 2990,
    isNew: false,
    bgcolor: "EEEEEE",
    amazonLink:  "https://stockx.com/air-jordan-zion-3-pressure?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Nike Cortez “Sail Stadium Green”.png",
    detailImage: "Images/Shoes/2 2 (1).png",
    brand: "Nike",
    name: "Nike Cortez “Sail Stadium Green”",
    price: "₱2,290",
    pricevalue: 2290,
    isNew: false,
    bgcolor: "B7F6DC",
    amazonLink:  "https://www.nike.com/ph/launch/t/womens-cortez-sail-and-stadium-green?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Nike Dunk Low “Panda”.png",
    detailImage: "Images/Shoes/4 2 (1).png",
    brand: "Nike",
    name: "Nike Dunk Low “Panda”",
    price: "₱4,590",
    pricevalue: 4590,
    isNew: false,
    bgcolor: "E8EBEB",
    amazonLink:  "https://solekicksph.com/products/nike-dunk-low-twist-panda"
  },
  {
    image: "Images/Shoes/Nike AirForce 1 Low “Black Anthracite”.png",
    detailImage: "Images/Shoes/34 1 (1).png",
    brand: "Nike",
    name: "Nike AirForce 1 Low “Black Anthracite”",
    price: "₱1,990",
    pricevalue: 1990,
    isNew: false,
    bgcolor: "E4E4E4",
    amazonLink:  "https://stockx.com/nike-air-force-1-low-07-fresh-black-anthracite?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Jordan 1 Take 5 “Bred”.png",
    detailImage: "Images/Shoes/10 3 (1).png",
    brand: "Nike",
    name: "Jordan 1 Take 5 “Bred”",
    price: "₱2,590",
    pricevalue: 2590,
    isNew: false,
    bgcolor: "FFB8B3",
    amazonLink:  "https://www.nike.com/ph/t/jordan-one-take-5-pf-shoes-jNx9SV?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Nike SuperRep Go 3 Next Nature.png",
    detailImage: "Images/Shoes/26 1 (1).png",
    brand: "Nike",
    name: "Nike SuperRep Go 3 Next Nature",
    price: "₱1,790",
    pricevalue: 1790,
    isNew: false,
    bgcolor: "A1C6C2",
    amazonLink:  "https://www.nike.com/ph/t/superrep-go-3-flyknit-next-nature-workout-shoes-zKqgRc?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Nike Air Max Solo.png",
    detailImage: "Images/Shoes/42 1 (1).png",
    brand: "Nike",
    name: "Nike Air Max Solo",
    price: "₱1,990",
    pricevalue: 1990,
    isNew: false,
    bgcolor: "FFBBD2",
    amazonLink:  "https://www.nike.com/ph/t/air-max-nuaxis-shoes-2GDM9K/HF1233-600"
  },
  {
    image: "Images/Shoes/Nike AirForce 1 “Year of the Dragon”.png",
    detailImage: "Images/Shoes/30 1 (1).png",
    brand: "Nike",
    name: "Nike AirForce 1 “Year of the Dragon”",
    price: "₱1,990",
    pricevalue: 1990,
    isNew: false,
    bgcolor: "D1E9DD",
    amazonLink:  "https://stockx.com/air-force-1-low-year-of-the-dragon-1?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/Nike AirForce 1 Low “Heel Stitch”.png",
    detailImage: "Images/Shoes/24 1 (1).png",
    brand: "Nike",
    name: "Nike AirForce 1 Low “Heel Stitch”",
    price: "₱1,990",
    pricevalue: 1990,
    isNew: false,
    bgcolor: "C1F5DA",
    amazonLink:  "https://stockx.com/nike-air-force-1-low-lv8-3-heel-stitch-sail-stadium-green-gs?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    image: "Images/Shoes/New Balance 574 “Burgundy”.png",
    detailImage: "Images/Shoes/16 2 (1).png",
    brand: "New Balance",
    name: "New Balance 574 “Burgundy”",
    price: "₱1,990",
    pricevalue: 1990,
    isNew: false,
    bgcolor: "A1C6C2",
    amazonLink:  "https://www.newbalance.com/pd/574-core/WL574V3-40378.html?dwvar_WL574V3-40378_style=WL574EVM"
  },
  {
    image: "Images/Shoes/Nike Court Legacy Canvas.png",
    detailImage: "Images/Shoes/22 1 (1).png",
    brand: "Nike",
    name: "Nike Court Legacy Canvas",
    price: "₱1,990",
    pricevalue: 1990,
    isNew: false,
    bgcolor: "EBE9D5",
    amazonLink:  "https://www.nike.com/ph/t/nikecourt-legacy-canvas-shoes-0wXxWF?msockid=01d32f8179836d4c05273b5578cd6c25"
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

