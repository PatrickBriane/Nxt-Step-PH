document.querySelectorAll(".js-product-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const productData = e.currentTarget.dataset.product;
      localStorage.setItem("selectedProduct", productData);
    });
  });