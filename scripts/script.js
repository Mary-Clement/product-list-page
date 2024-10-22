const products = [
  {
      image: {
          thumbnail: "./images/image-waffle-thumbnail.jpg",
          mobile: "./images/image-waffle-mobile.jpg",
          tablet: "./images/image-waffle-tablet.jpg",
          desktop: "./images/image-waffle-desktop.jpg"
      },
      name: "Waffle",
      category: "Waffle with Berries",
      price: 6.50
  },
  {
      image: {
          thumbnail: "./images/image-creme-brulee-thumbnail.jpg",
          mobile: "./images/image-creme-brulee-mobile.jpg",
          tablet: "./images/image-creme-brulee-tablet.jpg",
          desktop: "./images/image-creme-brulee-desktop.jpg"
      },
      name: "Crème Brûlée",
      category: "Vanilla Bean Crème Brûlée",
      price: 7.00
  },
  {
    "image": {
      "thumbnail": "./images/image-macaron-thumbnail.jpg",
      "mobile": "./images/image-macaron-mobile.jpg",
      "tablet": "./images/image-macaron-tablet.jpg",
      "desktop": "./images/image-macaron-desktop.jpg"
  },
  "name": "Macaron",
  "category": "Macaron Mix of Five",
  "price": 8.00
  },
  {
    "image": {
        "thumbnail": "./images/image-tiramisu-thumbnail.jpg",
        "mobile": "./images/image-tiramisu-mobile.jpg",
        "tablet": "./images/image-tiramisu-tablet.jpg",
        "desktop": "./images/image-tiramisu-desktop.jpg"
    },
    "name": "Tiramisu",
    "category": "Classic Tiramisu",
    "price": 5.50
 },
 {
  "image": {
      "thumbnail": "./images/image-baklava-thumbnail.jpg",
      "mobile": "./images/image-baklava-mobile.jpg",
      "tablet": "./images/image-baklava-tablet.jpg",
      "desktop": "./images/image-baklava-desktop.jpg"
  },
  "name": "Baklava",
  "category": "Pistachio Baklava",
  "price": 4.00
},
{
  "image": {
      "thumbnail": "./images/image-meringue-thumbnail.jpg",
      "mobile": "./images/image-meringue-mobile.jpg",
      "tablet": "./images/image-meringue-tablet.jpg",
      "desktop": "./images/image-meringue-desktop.jpg"
  },
  "name": "Pie",
  "category": "Lemon Meringue Pie",
  "price": 5.00
},
{
  "image": {
      "thumbnail": "./images/image-cake-thumbnail.jpg",
      "mobile": "./images/image-cake-mobile.jpg",
      "tablet": "./images/image-cake-tablet.jpg",
      "desktop": "./images/image-cake-desktop.jpg"
  },
  "name": "Cake",
  "category": "Red Velvet Cake",
  "price": 4.50
},
{
  "image": {
      "thumbnail": "./images/image-brownie-thumbnail.jpg",
      "mobile": "./images/image-brownie-mobile.jpg",
      "tablet": ".images/image-brownie-tablet.jpg",
      "desktop": "./images/image-brownie-desktop.jpg"
  },
  "name": "Brownie",
  "category": "Salted Caramel Brownie",
  "price": 4.50
},
{
  "image": {
      "thumbnail": "./images/image-panna-cotta-thumbnail.jpg",
      "mobile": "./images/image-panna-cotta-mobile.jpg",
      "tablet": "./images/image-panna-cotta-tablet.jpg",
      "desktop": "./images/image-panna-cotta-desktop.jpg"
  },
  "name": "Panna Cotta",
  "category": "Vanilla Panna Cotta",
  "price": 6.50
}
];



let cart = [];

function renderProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach((product, index) => {
      const productElement = document.createElement('div');
      productElement.className = 'product-container';  

      productElement.innerHTML = `
    <div class="image-wrapper">
        <img src="${product.image.thumbnail}" alt="${product.name}" class="product-image">
        <button data-index="${index}" class="add-to-cart1">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                <g fill="#C73B0F">
                    <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
                    <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/>
                </g>
            </svg>
            Add to Cart
        </button>
    </div>
    <h5 class="product-name">${product.name}</h5>
    <p class="product-category">${product.category}</p>
    <p class="product-price">$${product.price.toFixed(2)}</p>
`;

      productList.appendChild(productElement);
  });
}


function updateProductButton(index, quantity) {
  const productButton = document.querySelector(`button[data-index='${index}']`);

  
  if (quantity > 0) {
    productButton.outerHTML = `
      <div class="button-container">
        <button class="minus" data-index="${index}">-</button>
        <span>${quantity}</span>
        <button class="plus" data-index="${index}">+</button>
      </div>
    `;
  } else {
    productButton.outerHTML = `
    <button class="add-to-cart1" data-index="${index}">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
        <g fill="#C73B0F">
          <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
          <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/>
        </g>
      </svg>
      Add to Cart
    </button>
  `;
}
}




function updateProductButton(index, quantity) {
  const productButton = document.querySelector(`button[data-index='${index}']`);
  if (quantity > 0) {
    productButton.innerHTML = `
      <div class="quantity-controls">
        <button class="minus" data-index="${index}">-</button>
        <span>${quantity}</span>
        <button class="plus" data-index="${index}">+</button>
      </div>
    `;
  } else {
    productButton.innerHTML = `
      <button data-index="${index}" class="add-to-cart1">
        Add to Cart
      </button>
    `;
  }
}
  
function updateCartUI(index) {
  const productButton = document.querySelector(`button[data-index='${index}']`);
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    productButton.style.display = 'block';
    const buttonContainer = document.querySelector(`.button-container[data-index='${index}']`);
    if (buttonContainer) {
      buttonContainer.style.display = 'none';
    }
  }
}


document.addEventListener('click', (event) => {
  const target = event.target.closest('button');
  
  if (!target) return; 

  const index = target.getAttribute('data-index');

  if (target.classList.contains('add-to-cart1')) {
      addToCart(parseInt(index, 10));
  } else if (target.classList.contains('plus')) {
      addToCart(parseInt(index, 10));
  } else if (target.classList.contains('minus')) {
      removeFromCart(parseInt(index, 10));
  }
});

function addToCart(index) {
  const existingItemIndex = cart.findIndex(item => item.index === index);
  
  if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
  } else {
      cart.push({ index: index, quantity: 1 });
  }

  const updatedQuantity = cart.find(item => item.index === index)?.quantity || 0;
  updateProductButton(index, updatedQuantity);
  updateCart();
}



function removeFromCart(index) {
  const existingItemIndex = cart.findIndex(item => item.index === index);
  
  if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity -= 1;
      
      if (cart[existingItemIndex].quantity <= 0) {
          cart.splice(existingItemIndex, 1); 
      }
      
      const updatedQuantity = cart.find(item => item.index === index)?.quantity || 0;
      updateProductButton(index, updatedQuantity); 
      
      updateCart();  
      updateCartUI(index);
  }
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const orderTotalElement = document.getElementById('order-total');
  cartItems.innerHTML = ''; 

  

  let total = 0;
  let count = 0;

  cart.forEach((item) => {
    const product = products[item.index];
    total += product.price * item.quantity;
    count += item.quantity;

   
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    cartItem.innerHTML = `
      <div class="cart-item-details">
        <p class="cart-item-name">${product.name}</p>
        <p class="cart-item-price">$${product.price.toFixed(2)} x ${item.quantity} = $${(product.price * item.quantity).toFixed(2)}</p>
      </div>
      <div class="cart-item-actions">
        <button class="minus" data-index="${item.index}">-</button>
        <span class="cart-item-quantity">${item.quantity}</span>
        <button class="plus" data-index="${item.index}">+</button>
        <button class="remove-from-cart" data-index="${item.index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });

  cartCount.textContent = count;
  orderTotalElement.textContent = `$${total.toFixed(2)}`;
}


document.getElementById('confirm-order').addEventListener('click', () => {
  const modal = document.getElementById('order-modal');
  const orderSummary = document.getElementById('order-summary');
  const orderTotalPopup = document.getElementById('order-Total');  

  orderSummary.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    alert("Your cart is empty. Please add items to the cart before confirming the order.");
    return;
  }

  cart.forEach((item) => {
    const product = products[item.index];
    total += product.price * item.quantity;

    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';

    orderItem.innerHTML = `
        <div class="order-item-details">
            <img src="${product.image.thumbnail}" alt="${product.name}" class="order-item-img" />
            <div class="order-item-info">
                <p class="order-item-name">${product.name}</p>
                <p class="order-item-quantity">${item.quantity}  $${product.price.toFixed(2)}</p>
            </div>
        </div>
        <div class="order-item-total">
            $${(product.price * item.quantity).toFixed(2)}
        </div>
    `;

    orderSummary.appendChild(orderItem);
});

 
  orderTotalPopup.textContent = `$${total.toFixed(2)}`;
  modal.style.display = "block"; 
});

document.querySelector('.close-btn').addEventListener('click', () => {
  const modal = document.getElementById('order-modal');
  modal.style.display = 'none';
  cart = [];  
  updateCart();
});

document.getElementById('new-order-btn').addEventListener('click', () => {
  const modal = document.getElementById('order-modal');
  modal.style.display = 'none';
  cart = []; 
  updateCart();

  products. forEach((product, index) => {
    updateProductButton(index, 0);
  });
  
});



renderProducts();
updateCart();

