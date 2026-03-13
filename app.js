/* ============================================================
   FreshMart — Supermarket App JS
   Author: FreshMart Dev
   Version: 1.0.0
   ============================================================ */

'use strict';

// ── DATA ────────────────────────────────────────────────────
const CATEGORIES = [
  { name: 'All',         icon: '🏪', count: 36 },
  { name: 'Vegetables',  icon: '🥦', count: 8  },
  { name: 'Fruits',      icon: '🍎', count: 6  },
  { name: 'Dairy',       icon: '🥛', count: 5  },
  { name: 'Bakery',      icon: '🍞', count: 4  },
  { name: 'Beverages',   icon: '🧃', count: 5  },
  { name: 'Snacks',      icon: '🍫', count: 4  },
  { name: 'Grains',      icon: '🌾', count: 4  },
];

const PRODUCTS = [
  // Vegetables
  { id:1,  name:'Fresh Broccoli',   cat:'Vegetables', emoji:'🥦', weight:'500g',  price:49,  oldPrice:65,  rating:4.8, reviews:124, badge:'Organic', organic:true  },
  { id:2,  name:'Baby Spinach',     cat:'Vegetables', emoji:'🌿', weight:'250g',  price:39,  oldPrice:null, rating:4.7, reviews:89,  badge:null,      organic:true  },
  { id:3,  name:'Cherry Tomatoes',  cat:'Vegetables', emoji:'🍅', weight:'400g',  price:55,  oldPrice:70,  rating:4.9, reviews:201, badge:'Sale',    organic:false },
  { id:4,  name:'Sweet Corn',       cat:'Vegetables', emoji:'🌽', weight:'2 pcs', price:30,  oldPrice:null, rating:4.6, reviews:56,  badge:null,      organic:false },
  { id:5,  name:'Bell Peppers Mix', cat:'Vegetables', emoji:'🫑', weight:'300g',  price:65,  oldPrice:80,  rating:4.7, reviews:93,  badge:'Sale',    organic:true  },
  { id:6,  name:'Ginger Root',      cat:'Vegetables', emoji:'🫚', weight:'100g',  price:20,  oldPrice:null, rating:4.5, reviews:44,  badge:null,      organic:false },
  { id:7,  name:'Cauliflower',      cat:'Vegetables', emoji:'🥬', weight:'1 head',price:45,  oldPrice:60,  rating:4.6, reviews:71,  badge:null,      organic:true  },
  { id:8,  name:'Purple Cabbage',   cat:'Vegetables', emoji:'🥗', weight:'500g',  price:38,  oldPrice:null, rating:4.4, reviews:38,  badge:'Organic', organic:true  },
  // Fruits
  { id:9,  name:'Pink Apples',      cat:'Fruits',     emoji:'🍎', weight:'1 kg',  price:99,  oldPrice:120, rating:4.9, reviews:310, badge:'Sale',    organic:false },
  { id:10, name:'Alphonso Mangoes', cat:'Fruits',     emoji:'🥭', weight:'1 kg',  price:149, oldPrice:199, rating:5.0, reviews:540, badge:'Premium', organic:false },
  { id:11, name:'Strawberries',     cat:'Fruits',     emoji:'🍓', weight:'250g',  price:89,  oldPrice:110, rating:4.8, reviews:188, badge:'Fresh',   organic:true  },
  { id:12, name:'Bananas',          cat:'Fruits',     emoji:'🍌', weight:'6 pcs', price:35,  oldPrice:null, rating:4.6, reviews:97,  badge:null,      organic:false },
  { id:13, name:'Blueberries',      cat:'Fruits',     emoji:'🫐', weight:'150g',  price:129, oldPrice:160, rating:4.9, reviews:233, badge:'Sale',    organic:true  },
  { id:14, name:'Watermelon',       cat:'Fruits',     emoji:'🍉', weight:'2 kg',  price:79,  oldPrice:null, rating:4.7, reviews:145, badge:null,      organic:false },
  // Dairy
  { id:15, name:'Farm Fresh Milk',  cat:'Dairy',      emoji:'🥛', weight:'1 L',   price:58,  oldPrice:null, rating:4.8, reviews:421, badge:null,      organic:false },
  { id:16, name:'Greek Yogurt',     cat:'Dairy',      emoji:'🍦', weight:'400g',  price:75,  oldPrice:90,  rating:4.7, reviews:159, badge:'Sale',    organic:false },
  { id:17, name:'Cheddar Cheese',   cat:'Dairy',      emoji:'🧀', weight:'200g',  price:110, oldPrice:140, rating:4.9, reviews:276, badge:'Premium', organic:false },
  { id:18, name:'Butter',           cat:'Dairy',      emoji:'🧈', weight:'100g',  price:52,  oldPrice:null, rating:4.6, reviews:88,  badge:null,      organic:false },
  { id:19, name:'Amul Paneer',      cat:'Dairy',      emoji:'🫙', weight:'200g',  price:65,  oldPrice:75,  rating:4.8, reviews:320, badge:'Sale',    organic:false },
  // Bakery
  { id:20, name:'Sourdough Loaf',   cat:'Bakery',     emoji:'🍞', weight:'400g',  price:85,  oldPrice:null, rating:4.9, reviews:203, badge:'Artisan', organic:false },
  { id:21, name:'Whole Wheat Bread',cat:'Bakery',     emoji:'🫓', weight:'400g',  price:55,  oldPrice:65,  rating:4.6, reviews:118, badge:'Sale',    organic:false },
  { id:22, name:'Croissants',       cat:'Bakery',     emoji:'🥐', weight:'4 pcs', price:99,  oldPrice:null, rating:4.8, reviews:189, badge:'Fresh',   organic:false },
  { id:23, name:'Cinnamon Rolls',   cat:'Bakery',     emoji:'🍩', weight:'2 pcs', price:70,  oldPrice:85,  rating:4.7, reviews:144, badge:'Sale',    organic:false },
  // Beverages
  { id:24, name:'Orange Juice',     cat:'Beverages',  emoji:'🍊', weight:'1 L',   price:79,  oldPrice:95,  rating:4.7, reviews:167, badge:'Fresh',   organic:false },
  { id:25, name:'Green Tea',        cat:'Beverages',  emoji:'🍵', weight:'25 bags',price:99, oldPrice:null, rating:4.8, reviews:241, badge:'Organic', organic:true  },
  { id:26, name:'Coconut Water',    cat:'Beverages',  emoji:'🥥', weight:'500ml', price:55,  oldPrice:null, rating:4.9, reviews:388, badge:'Natural', organic:false },
  { id:27, name:'Cold Brew Coffee', cat:'Beverages',  emoji:'☕', weight:'300ml', price:89,  oldPrice:110, rating:4.8, reviews:203, badge:'Sale',    organic:false },
  { id:28, name:'Lemonade',         cat:'Beverages',  emoji:'🍋', weight:'500ml', price:45,  oldPrice:null, rating:4.5, reviews:76,  badge:null,      organic:false },
  // Snacks
  { id:29, name:'Dark Chocolate',   cat:'Snacks',     emoji:'🍫', weight:'100g',  price:120, oldPrice:150, rating:4.9, reviews:312, badge:'Sale',    organic:false },
  { id:30, name:'Mixed Nuts',       cat:'Snacks',     emoji:'🥜', weight:'200g',  price:149, oldPrice:null, rating:4.8, reviews:257, badge:'Premium', organic:false },
  { id:31, name:'Popcorn',          cat:'Snacks',     emoji:'🍿', weight:'100g',  price:40,  oldPrice:50,  rating:4.5, reviews:98,  badge:'Sale',    organic:false },
  { id:32, name:'Granola Bar',      cat:'Snacks',     emoji:'🍫', weight:'50g',   price:35,  oldPrice:null, rating:4.6, reviews:141, badge:null,      organic:false },
  // Grains
  { id:33, name:'Basmati Rice',     cat:'Grains',     emoji:'🌾', weight:'1 kg',  price:89,  oldPrice:110, rating:4.9, reviews:489, badge:'Sale',    organic:false },
  { id:34, name:'Rolled Oats',      cat:'Grains',     emoji:'🥣', weight:'500g',  price:65,  oldPrice:null, rating:4.7, reviews:213, badge:'Healthy', organic:true  },
  { id:35, name:'Quinoa',           cat:'Grains',     emoji:'🌰', weight:'500g',  price:199, oldPrice:250, rating:4.8, reviews:167, badge:'Sale',    organic:true  },
  { id:36, name:'Brown Bread Atta', cat:'Grains',     emoji:'🌻', weight:'1 kg',  price:55,  oldPrice:null, rating:4.5, reviews:88,  badge:null,      organic:false },
];

// ── STATE ────────────────────────────────────────────────────
const state = {
  cart:      [],   // { ...product, qty }
  wishlist:  [],   // product ids
  activeCategory: 'All',
  searchTerm: '',
  sortBy: 'default',
};

// ── UTILS ────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function formatPrice(p) { return `₹${p}`; }

function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return s;
}

// ── PRELOADER ────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => $('preloader').classList.add('hidden'), 700);
});

// ── NAVBAR ───────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  $('navbar').classList.toggle('scrolled', window.scrollY > 50);
  $('backTop').classList.toggle('show', window.scrollY > 400);
});

$('backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── SEARCH ───────────────────────────────────────────────────
$('searchInput').addEventListener('input', e => {
  state.searchTerm = e.target.value.toLowerCase();
  renderProducts();
});

// ── SORT ─────────────────────────────────────────────────────
$('sortSelect').addEventListener('change', e => {
  state.sortBy = e.target.value;
  renderProducts();
});

// ── CATEGORIES ───────────────────────────────────────────────
function renderCategories() {
  const grid = $('categoriesGrid');
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card ${c.name === state.activeCategory ? 'active' : ''}"
         onclick="filterCategory('${c.name}')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} items</div>
    </div>
  `).join('');
}

window.filterCategory = function(name) {
  state.activeCategory = name;
  renderCategories();
  renderFilterBar();
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ── FILTER BAR ───────────────────────────────────────────────
function renderFilterBar() {
  const bar = $('filterBar');
  const cats = ['All', ...new Set(PRODUCTS.map(p => p.cat))];
  bar.innerHTML = cats.map(c => `
    <button class="filter-btn ${state.activeCategory === c ? 'active' : ''}"
            onclick="filterCategory('${c}')">${c}</button>
  `).join('');
}

// ── PRODUCTS ─────────────────────────────────────────────────
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // category filter
  if (state.activeCategory !== 'All') {
    list = list.filter(p => p.cat === state.activeCategory);
  }

  // search
  if (state.searchTerm) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(state.searchTerm) ||
      p.cat.toLowerCase().includes(state.searchTerm)
    );
  }

  // sort
  switch (state.sortBy) {
    case 'price-asc':  list.sort((a,b) => a.price - b.price);       break;
    case 'price-desc': list.sort((a,b) => b.price - a.price);       break;
    case 'rating':     list.sort((a,b) => b.rating - a.rating);     break;
    case 'name':       list.sort((a,b) => a.name.localeCompare(b.name)); break;
  }

  return list;
}

function renderProducts() {
  const grid = $('productsGrid');
  const noRes = $('noResults');
  const list = getFilteredProducts();

  if (list.length === 0) {
    grid.innerHTML = '';
    noRes.classList.remove('hidden');
    return;
  }
  noRes.classList.add('hidden');

  grid.innerHTML = list.map((p, i) => {
    const inCart   = state.cart.find(c => c.id === p.id);
    const inWish   = state.wishlist.includes(p.id);
    const badgeCls = p.organic ? 'organic' : '';
    const delay    = (i % 8) * 0.07;
    return `
    <div class="product-card" style="animation-delay:${delay}s">
      ${p.badge ? `<div class="product-badge ${badgeCls}">${p.badge}</div>` : ''}
      <div class="product-img">
        ${p.emoji}
        <button class="wishlist-btn ${inWish ? 'active' : ''}"
                onclick="toggleWish(event,${p.id})" title="Wishlist">
          <i class="fa${inWish ? 's' : 'r'} fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-weight">${p.weight}</div>
        <div class="product-rating">
          <span class="stars">${starsHTML(p.rating)}</span>
          <span>${p.rating}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
      </div>
      <div class="product-footer">
        <div class="product-price">
          ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          ${formatPrice(p.price)}
        </div>
        ${inCart
          ? `<div class="qty-control">
               <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
               <span class="qty-num">${inCart.qty}</span>
               <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
             </div>`
          : `<button class="add-cart-btn" onclick="addToCart(${p.id})">
               <i class="fa fa-plus"></i> Add
             </button>`
        }
      </div>
    </div>`;
  }).join('');
}

// ── CART LOGIC ───────────────────────────────────────────────
window.addToCart = function(id) {
  const product = PRODUCTS.find(p => p.id === id);
  const existing = state.cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  renderProducts();
  showToast(`🛒 ${product.name} added to cart!`);
};

window.changeQty = function(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(c => c.id !== id);
    showToast('❌ Item removed from cart');
  }
  updateCartUI();
  renderProducts();
};

window.removeFromCart = function(id) {
  const item = state.cart.find(c => c.id === id);
  state.cart = state.cart.filter(c => c.id !== id);
  updateCartUI();
  renderProducts();
  if (item) showToast(`❌ ${item.name} removed`);
};

function updateCartUI() {
  const total = state.cart.reduce((s, c) => s + c.qty, 0);
  $('cartCount').textContent = total;
  $('cartItemCount').textContent = total > 0 ? `(${total})` : '';
  renderCartSidebar();
}

function renderCartSidebar() {
  const itemsEl  = $('cartItems');
  const footerEl = $('cartFooter');

  if (state.cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <p>Your cart is empty.<br/>Start adding items!</p>
      </div>`;
    footerEl.innerHTML = '';
    return;
  }

  itemsEl.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-weight">${item.weight}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal  = state.cart.reduce((s, c) => s + c.price * c.qty, 0);
  const delivery  = subtotal >= 499 ? 0 : 40;
  const total     = subtotal + delivery;

  footerEl.innerHTML = `
    <div class="cart-total-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
    <div class="cart-total-row"><span>Delivery</span><span>${delivery === 0 ? '<span style="color:var(--primary)">FREE</span>' : formatPrice(delivery)}</span></div>
    ${delivery > 0 ? `<div style="font-size:.78rem;color:var(--text-muted);margin:.25rem 0">Add ${formatPrice(499-subtotal)} more for free delivery</div>` : ''}
    <div class="cart-total-row grand"><span>Total</span><span>${formatPrice(total)}</span></div>
    <button class="checkout-btn" onclick="checkout()">Proceed to Checkout →</button>
  `;
}

window.checkout = function() {
  showToast('🎉 Order placed successfully!');
  state.cart = [];
  updateCartUI();
  closeCartFn();
};

// ── CART TOGGLE ──────────────────────────────────────────────
$('cartBtn').addEventListener('click', () => {
  $('cartSidebar').classList.add('open');
  $('cartOverlay').classList.add('show');
  renderCartSidebar();
});

function closeCartFn() {
  $('cartSidebar').classList.remove('open');
  $('cartOverlay').classList.remove('show');
}

$('closeCart').addEventListener('click', closeCartFn);
$('cartOverlay').addEventListener('click', closeCartFn);

// ── WISHLIST ─────────────────────────────────────────────────
window.toggleWish = function(e, id) {
  e.stopPropagation();
  const idx = state.wishlist.indexOf(id);
  const product = PRODUCTS.find(p => p.id === id);
  if (idx === -1) {
    state.wishlist.push(id);
    showToast(`❤️ ${product.name} added to wishlist!`);
  } else {
    state.wishlist.splice(idx, 1);
    showToast(`💔 ${product.name} removed from wishlist`);
  }
  $('wishCount').textContent = state.wishlist.length;
  renderProducts();
};

$('wishlistBtn').addEventListener('click', () => {
  if (state.wishlist.length === 0) {
    showToast('Your wishlist is empty!');
    return;
  }
  state.activeCategory = 'All';
  state.searchTerm = '';
  $('searchInput').value = '';
  renderFilterBar();
  renderCategories();
  // Show only wishlisted products
  const grid = $('productsGrid');
  const wishlisted = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  grid.innerHTML = wishlisted.map(p => {
    const inCart = state.cart.find(c => c.id === p.id);
    return `
    <div class="product-card">
      <div class="product-img">
        ${p.emoji}
        <button class="wishlist-btn active" onclick="toggleWish(event,${p.id})">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-weight">${p.weight}</div>
        <div class="product-rating"><span class="stars">${starsHTML(p.rating)}</span> ${p.rating}</div>
      </div>
      <div class="product-footer">
        <div class="product-price">${formatPrice(p.price)}</div>
        ${inCart
          ? `<div class="qty-control">
               <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
               <span class="qty-num">${inCart.qty}</span>
               <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
             </div>`
          : `<button class="add-cart-btn" onclick="addToCart(${p.id})">
               <i class="fa fa-plus"></i> Add
             </button>`
        }
      </div>
    </div>`;
  }).join('');
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// ── SCROLL HELPERS ───────────────────────────────────────────
window.scrollToProducts = function() {
  $('products').scrollIntoView({ behavior: 'smooth' });
};

window.scrollToOffers = function() {
  $('offers').scrollIntoView({ behavior: 'smooth' });
};

// ── INTERSECTION OBSERVER (lazy animations) ──────────────────
const observerOpts = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, observerOpts);

['#stats', '#categories', '#offers', '#products', '#testimonials'].forEach(sel => {
  const el = document.querySelector(sel);
  if (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  }
});

// ── INIT ─────────────────────────────────────────────────────
(function init() {
  renderCategories();
  renderFilterBar();
  renderProducts();
  renderCartSidebar();
})();
