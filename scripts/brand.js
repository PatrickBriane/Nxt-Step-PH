window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand');
    
    if (brand) {
        document.querySelectorAll('.product-wrapper').forEach(product => {
            const productBrand = product.dataset.brand;
            product.style.display = (brand === "All" || productBrand === brand) ? "flex" : "none";
        });

        document.querySelector('#intro h1').textContent = `${brand} Products`;
    }
});