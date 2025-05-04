const products = [{
    image: 'Images/Shoes/Jogger Lite Black 2.png',
    brand: 'Reebok',
    name: 'Jogger Lite Black',
    price: '₱1,090',
    priceValue: 1090
}, {
    image: 'Images/Shoes/Jogger Lite Burgundy2.png',
    brand: 'Reebok',
    name: 'Jogger Lite Burgundy',
    price: '₱1,090',
    pricevalue: 1090
}, {
    image: 'Images/Shoes/Stridium 2.0 “Grey”.png',
    brand: 'Reebok',
    name: 'Stridium 2.0 “Grey”',
    price: '₱1,790',
    pricevalue: 1790
}, {
    image: 'Images/Shoes/Stridium 2.0 “Black”.png',
    brand: 'Reebok',
    name: 'Stridium 2.0 “Black”',
    price: '₱990',
    pricevalue: 990
}, {
    image: 'Images/Shoes/Nike Fly.By Mid 3 BlackWhite.png',
    brand: 'Nike',
    name: 'Nike Fly.By Mid 3 Black/White',
    price: '₱1,090',
    pricevalue: 1090
}, {
    image: 'Images/Shoes/Jordan 38 “White Metallic Gold”.png',
    brand: 'Nike',
    name: 'Jordan 38 “White Metallic Gold”',
    price: '₱3,890',
    pricevalue: 3890
}, {
    image: 'Images/Shoes/Nike Impact 3 “Black Grey”2.png',
    brand: 'Nike',
    name: 'Nike Impact 3 “Black Grey”',
    price: '₱1,690',
    pricevalue: 1690
}, {
    image: 'Images/Shoes/Nike KD Trey 5 X “Green Strike”.png',
    brand: 'Nike',
    name: 'Nike KD Trey 5 X “Green Strike”',
    price: '₱1,790',
    pricevalue: 1790
}, {
    image: 'Images/Shoes/Giannis Immortality 3 “Photo Blue”.png',
    brand: 'Nike',
    name: 'Giannis Immortality 3 “Photo Blue”',
    price: '₱2,290',
    pricevalue: 2290
}, {
    image: 'Images/Shoes/Giannis Immortality 4 “Halloween”.png',
    brand: 'Nike',
    name: 'Giannis Immortality 4 “Halloween”',
    price: '₱2,690',
    pricevalue: 2690
}, {
    image: 'Images/Shoes/Freak 4 “Indigo Haze”.png',
    brand: 'Nike',
    name: 'Freak 4 “Indigo Haze”',
    price: '₱3,590',
    pricevalue: 3590
}, {
    image: 'Images/Shoes/Nike G.T Cut 3 “Asheen Slate.png',
    brand: 'Nike',
    name: 'Nike G.T Cut 3 “Asheen Slate',
    price: '₱4,990',
    pricevalue: 4990
}, {
    image: 'Images/Shoes/Nike Elevate 3 “White Green”.png',
    brand: 'Nike',
    name: 'Nike Elevate 3 “White Green”',
    price: '₱1,490',
    pricevalue: 1490
}, {
    image: 'Images/Shoes/Jordan Zion 3 “Pressure”.png',
    brand: 'Nike',
    name: 'Jordan Zion 3 “Pressure”',
    price: '₱2,990',
    pricevalue: 2990
}, {
    image: 'Images/Shoes/Nike Cortez “Sail Stadium Green”.png',
    brand: 'Nike',
    name: 'Nike Cortez “Sail Stadium Green”',
    price: '₱2,290',
    pricevalue: 2290
}, {
    image: 'Images/Shoes/Nike Dunk Low “Panda”.png',
    brand: 'Nike',
    name: 'Nike Dunk Low “Panda”',
    price: '₱4,590',
    pricevalue: 4590
}, {
    image: 'Images/Shoes/Nike AirForce 1 Low “Black Anthracite”.png',
    brand: 'Nike',
    name: 'Nike AirForce 1 Low “Black Anthracite”',
    price: '₱1,990',
    pricevalue: 1990
}, {
    image: 'Images/Shoes/Jordan 1 Take 5 “Bred”.png',
    brand: 'Nike',
    name: 'Jordan 1 Take 5 “Bred”',
    price: '₱2,590',
    pricevalue: 2590
}, {
    image: 'Images/Shoes/Nike SuperRep Go 3 Next Nature.png',
    brand: 'Nike',
    name: 'Nike SuperRep Go 3 Next Nature',
    price: '₱1,790',
    pricevalue: 1790
}, {
    image: 'Images/Shoes/Nike Air Max Solo.png',
    brand: 'Nike',
    name: 'Nike Air Max Solo',
    price: '₱1,990',
    pricevalue: 1990
}, {
    image: 'Images/Shoes/Nike AirForce 1 “Year of the Dragon”.png',
    brand: 'Nike',
    name: 'Nike AirForce 1 “Year of the Dragon”',
    price: '₱1,990',
    pricevalue: 1990
}, {
    image: 'Images/Shoes/Nike AirForce 1 Low “Heel Stitch”.png',
    brand: 'Nike',
    name: 'Nike AirForce 1 Low “Heel Stitch”',
    price: '₱1,990',
    pricevalue: 1990
}, {
    image: 'Images/Shoes/New Balance 574 “Burgundy”.png',
    brand: 'New Balance',
    name: 'New Balance 574 “Burgundy”',
    price: '₱1,990',
    pricevalue: 1990
}, {
    image: 'Images/Shoes/Nike Court Legacy Canvas.png',
    brand: 'Nike',
    name: 'Nike Court Legacy Canvas',
    price: '₱1,990',
    pricevalue: 1990,
}, ];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
       <div class="product-wrapper">
            <a href="">
                <div class="container">
                    <div class="shoe" style="background-color: #DFDFDF;">
                        <img class="shoe-img" src="${product.image}" alt="">
                        <button><img class="favorite" src="Images/Heart Icon (button).png" alt=""></button>
                    </div>

                    <div class="shoe-info">
                        <h2>${product.brand}</h2>
                        <h1>${product.name}</h1>
                        <p>${product.price}</p>
                            
                    </div>
                </div>
            </a>
            <button class="AddtoCart">
                <div class="cart">
                    <img src="Images/Add to cart 1.png" alt="">
                    <p>Add to Cart</p>  
                </div>
            </button>
        </div>
    `;
});

document.querySelector('.js-product-area').innerHTML = productsHTML;