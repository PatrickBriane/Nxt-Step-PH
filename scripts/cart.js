const cartItemsContainer = document.getElementById('cart-items');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
      
        let subtotal = 0;
      
        cart.forEach((item, index) => {
          const priceNum = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
          subtotal += priceNum * item.quantity;
      
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
          cartItem.innerHTML = `
            <div class="image-frame">
              <img src="${item.image || item.detailImage}" alt="${item.name}">
            </div>
            <div class="cart-info">
              <small>${item.brand}</small>
              <h4>${item.name}</h4>
              <p>Size: ${item.size}</p>
              <p>₱${priceNum}</p>
              <div class="quantity">
                <button onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${index}, 1)">+</button>
              </div>
            </div>
            <div class="remove" onclick="removeItem(${index})">🗑 Remove</div>
          `;
          cartItemsContainer.appendChild(cartItem);
        });
      
        document.getElementById('subtotal').textContent = `₱${subtotal}`;
        document.getElementById('total').textContent = `₱${subtotal + 150}`;
      
        function removeItem(index) {
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          location.reload();
        }
      
        function updateQuantity(index, delta) {
          cart[index].quantity += delta;
          if (cart[index].quantity <= 0) {
            removeItem(index);
          } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload();
          }
        }