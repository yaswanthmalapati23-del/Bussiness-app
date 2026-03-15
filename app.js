/* ============================================================
   NEXMART — Shared Application JS v2.0
   ============================================================ */
'use strict';

// ── DEFAULT PRODUCTS ─────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  { id:1,  name:'Premium Broccoli',    cat:'Vegetables', emoji:'🥦', weight:'500g',   price:49,  oldPrice:65,  rating:4.8, reviews:124, badge:'Organic', stock:45 },
  { id:2,  name:'Baby Spinach Leaves', cat:'Vegetables', emoji:'🌿', weight:'250g',   price:39,  oldPrice:null,rating:4.7, reviews:89,  badge:null,      stock:30 },
  { id:3,  name:'Cherry Tomatoes',     cat:'Vegetables', emoji:'🍅', weight:'400g',   price:55,  oldPrice:70,  rating:4.9, reviews:201, badge:'Sale',    stock:20 },
  { id:4,  name:'Sweet Yellow Corn',   cat:'Vegetables', emoji:'🌽', weight:'2 pcs',  price:30,  oldPrice:null,rating:4.6, reviews:56,  badge:null,      stock:60 },
  { id:5,  name:'Bell Peppers Mix',    cat:'Vegetables', emoji:'🫑', weight:'300g',   price:65,  oldPrice:80,  rating:4.7, reviews:93,  badge:'Sale',    stock:15 },
  { id:6,  name:'Garden Cauliflower',  cat:'Vegetables', emoji:'🥬', weight:'1 head', price:45,  oldPrice:60,  rating:4.6, reviews:71,  badge:null,      stock:25 },
  { id:7,  name:'Red Onions',          cat:'Vegetables', emoji:'🧅', weight:'1 kg',   price:35,  oldPrice:null,rating:4.5, reviews:188, badge:null,      stock:80 },
  { id:8,  name:'Baby Carrots',        cat:'Vegetables', emoji:'🥕', weight:'500g',   price:42,  oldPrice:55,  rating:4.7, reviews:142, badge:'Sale',    stock:35 },
  { id:9,  name:'Pink Lady Apples',    cat:'Fruits',     emoji:'🍎', weight:'1 kg',   price:99,  oldPrice:120, rating:4.9, reviews:310, badge:'Sale',    stock:50 },
  { id:10, name:'Alphonso Mangoes',    cat:'Fruits',     emoji:'🥭', weight:'1 kg',   price:149, oldPrice:199, rating:5.0, reviews:540, badge:'Premium', stock:18 },
  { id:11, name:'Fresh Strawberries',  cat:'Fruits',     emoji:'🍓', weight:'250g',   price:89,  oldPrice:110, rating:4.8, reviews:188, badge:'Organic', stock:12 },
  { id:12, name:'Premium Bananas',     cat:'Fruits',     emoji:'🍌', weight:'6 pcs',  price:35,  oldPrice:null,rating:4.6, reviews:97,  badge:null,      stock:90 },
  { id:13, name:'Wild Blueberries',    cat:'Fruits',     emoji:'🫐', weight:'150g',   price:129, oldPrice:160, rating:4.9, reviews:233, badge:'Sale',    stock:8  },
  { id:14, name:'Seedless Watermelon', cat:'Fruits',     emoji:'🍉', weight:'2 kg',   price:79,  oldPrice:null,rating:4.7, reviews:145, badge:null,      stock:22 },
  { id:15, name:'Farm Fresh Milk',     cat:'Dairy',      emoji:'🥛', weight:'1 L',    price:58,  oldPrice:null,rating:4.8, reviews:421, badge:null,      stock:100},
  { id:16, name:'Greek Yogurt',        cat:'Dairy',      emoji:'🍦', weight:'400g',   price:75,  oldPrice:90,  rating:4.7, reviews:159, badge:'Sale',    stock:40 },
  { id:17, name:'Aged Cheddar',        cat:'Dairy',      emoji:'🧀', weight:'200g',   price:110, oldPrice:140, rating:4.9, reviews:276, badge:'Premium', stock:28 },
  { id:18, name:'Artisan Butter',      cat:'Dairy',      emoji:'🧈', weight:'100g',   price:52,  oldPrice:null,rating:4.6, reviews:88,  badge:null,      stock:55 },
  { id:19, name:'Fresh Paneer',        cat:'Dairy',      emoji:'🫙', weight:'200g',   price:65,  oldPrice:75,  rating:4.8, reviews:320, badge:'Sale',    stock:33 },
  { id:20, name:'Sourdough Loaf',      cat:'Bakery',     emoji:'🍞', weight:'400g',   price:85,  oldPrice:null,rating:4.9, reviews:203, badge:'Artisan', stock:15 },
  { id:21, name:'Multigrain Bread',    cat:'Bakery',     emoji:'🫓', weight:'400g',   price:55,  oldPrice:65,  rating:4.6, reviews:118, badge:'Sale',    stock:20 },
  { id:22, name:'Butter Croissants',   cat:'Bakery',     emoji:'🥐', weight:'4 pcs',  price:99,  oldPrice:null,rating:4.8, reviews:189, badge:'Fresh',   stock:10 },
  { id:23, name:'Cinnamon Rolls',      cat:'Bakery',     emoji:'🍩', weight:'2 pcs',  price:70,  oldPrice:85,  rating:4.7, reviews:144, badge:'Sale',    stock:18 },
  { id:24, name:'Fresh Orange Juice',  cat:'Beverages',  emoji:'🍊', weight:'1 L',    price:79,  oldPrice:95,  rating:4.7, reviews:167, badge:'Fresh',   stock:45 },
  { id:25, name:'Organic Green Tea',   cat:'Beverages',  emoji:'🍵', weight:'25 bags',price:99,  oldPrice:null,rating:4.8, reviews:241, badge:'Organic', stock:60 },
  { id:26, name:'Tender Coconut Water',cat:'Beverages',  emoji:'🥥', weight:'500ml',  price:55,  oldPrice:null,rating:4.9, reviews:388, badge:'Natural', stock:70 },
  { id:27, name:'Cold Brew Coffee',    cat:'Beverages',  emoji:'☕', weight:'300ml',  price:89,  oldPrice:110, rating:4.8, reviews:203, badge:'Sale',    stock:25 },
  { id:28, name:'Belgian Dark Choc',   cat:'Snacks',     emoji:'🍫', weight:'100g',   price:120, oldPrice:150, rating:4.9, reviews:312, badge:'Sale',    stock:42 },
  { id:29, name:'Trail Mix Nuts',      cat:'Snacks',     emoji:'🥜', weight:'200g',   price:149, oldPrice:null,rating:4.8, reviews:257, badge:'Premium', stock:30 },
  { id:30, name:'Sea Salt Popcorn',    cat:'Snacks',     emoji:'🍿', weight:'100g',   price:40,  oldPrice:50,  rating:4.5, reviews:98,  badge:'Sale',    stock:55 },
  { id:31, name:'Aged Basmati Rice',   cat:'Grains',     emoji:'🌾', weight:'1 kg',   price:89,  oldPrice:110, rating:4.9, reviews:489, badge:'Sale',    stock:75 },
  { id:32, name:'Steel Cut Oats',      cat:'Grains',     emoji:'🥣', weight:'500g',   price:65,  oldPrice:null,rating:4.7, reviews:213, badge:'Organic', stock:48 },
  { id:33, name:'Organic Quinoa',      cat:'Grains',     emoji:'🌰', weight:'500g',   price:199, oldPrice:250, rating:4.8, reviews:167, badge:'Sale',    stock:22 },
  { id:34, name:'Brown Bread Flour',   cat:'Grains',     emoji:'🌻', weight:'1 kg',   price:55,  oldPrice:null,rating:4.5, reviews:88,  badge:null,      stock:60 },
];

const CATEGORIES = [
  { name:'All',        icon:'🏪' },
  { name:'Vegetables', icon:'🥦' },
  { name:'Fruits',     icon:'🍎' },
  { name:'Dairy',      icon:'🥛' },
  { name:'Bakery',     icon:'🍞' },
  { name:'Beverages',  icon:'🧃' },
  { name:'Snacks',     icon:'🍫' },
  { name:'Grains',     icon:'🌾' },
];

// ── DYNAMIC PRODUCT CRUD ──────────────────────────────────────
function getProducts() {
  try {
    const saved = localStorage.getItem('nm_products');
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return [...DEFAULT_PRODUCTS];
}

function saveProducts(list) {
  localStorage.setItem('nm_products', JSON.stringify(list));
}

function addProduct(p) {
  const list = getProducts();
  const maxId = list.reduce((m, x) => Math.max(m, x.id), 0);
  const newP = { ...p, id: maxId + 1, rating: 4.5, reviews: 0 };
  list.push(newP);
  saveProducts(list);
  return newP;
}

function updateProduct(id, updates) {
  const list = getProducts();
  const idx = list.findIndex(p => p.id === id);
  if (idx !== -1) { list[idx] = { ...list[idx], ...updates }; saveProducts(list); }
}

function deleteProduct(id) {
  saveProducts(getProducts().filter(p => p.id !== id));
}

// ── ORDER MANAGEMENT ──────────────────────────────────────────
function getOrders() {
  try { return JSON.parse(localStorage.getItem('nm_orders') || '[]'); } catch(e) { return []; }
}

function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem('nm_orders', JSON.stringify(orders));
}

function getUserOrders(email) {
  return getOrders().filter(o => o.userEmail === email);
}

// ── STORE ─────────────────────────────────────────────────────
const Store = {
  cart:     JSON.parse(localStorage.getItem('nm_cart')     || '[]'),
  wishlist: JSON.parse(localStorage.getItem('nm_wishlist') || '[]'),
  user:     JSON.parse(localStorage.getItem('nm_user')     || 'null'),

  saveCart()     { localStorage.setItem('nm_cart',     JSON.stringify(this.cart)); },
  saveWishlist() { localStorage.setItem('nm_wishlist', JSON.stringify(this.wishlist)); },
  saveUser(u)    { this.user = u; localStorage.setItem('nm_user', JSON.stringify(u)); },
  logout()       { this.user = null; localStorage.removeItem('nm_user'); },

  addToCart(id) {
    const p = getProducts().find(x => x.id === id);
    if (!p) return;
    const ex = this.cart.find(c => c.id === id);
    if (ex) ex.qty++; else this.cart.push({ ...p, qty: 1 });
    this.saveCart();
  },
  removeFromCart(id) { this.cart = this.cart.filter(c => c.id !== id); this.saveCart(); },
  changeQty(id, delta) {
    const item = this.cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) this.removeFromCart(id); else this.saveCart();
  },
  cartTotal() { return this.cart.reduce((s,c) => s + c.price * c.qty, 0); },
  cartCount() { return this.cart.reduce((s,c) => s + c.qty, 0); },
  toggleWish(id) {
    const i = this.wishlist.indexOf(id);
    if (i === -1) this.wishlist.push(id); else this.wishlist.splice(i, 1);
    this.saveWishlist();
  },
};

// ── UTILS ─────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const qsa = sel => document.querySelectorAll(sel);
const fmt = n => '₹' + Number(n).toLocaleString('en-IN');

function toast(msg, type) {
  type = type || 'default';
  let el = $('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; document.body.appendChild(el); }
  const icons = { default:'✓', error:'✕', warning:'⚠', success:'✓' };
  el.innerHTML = '<span>' + (icons[type]||'✓') + '</span> ' + msg;
  el.style.borderLeftColor = type==='error' ? 'var(--danger)' : type==='warning' ? 'var(--warning)' : 'var(--gold)';
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(function(){ el.classList.remove('show'); }, 2800);
}

function starsHTML(r) {
  var full = Math.floor(r), half = r % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '');
}

function badgeHTML(b) {
  if (!b) return '';
  var cls = ({ Sale:'badge-danger', Premium:'badge-gold', Organic:'badge-success', Artisan:'badge-navy', Fresh:'badge-success', Natural:'badge-success' })[b] || 'badge-navy';
  return '<span class="badge ' + cls + ' pc-badge">' + b + '</span>';
}

function productCardHTML(p, delay) {
  delay = delay || 0;
  var inCart = Store.cart.find(function(c){ return c.id === p.id; });
  var inWish = Store.wishlist.includes(p.id);
  var qtyHtml = inCart
    ? '<div class="qty-ctrl"><button class="qty-btn" onclick="window.changeQty(' + p.id + ',-1)">−</button><span class="qty-num">' + inCart.qty + '</span><button class="qty-btn" onclick="window.changeQty(' + p.id + ',1)">+</button></div>'
    : '<button class="btn btn-navy btn-sm" onclick="window.addToCart(' + p.id + ')"><i class="fa fa-plus"></i> Add</button>';
  var oldP = p.oldPrice ? '<span class="pc-old">' + fmt(p.oldPrice) + '</span>' : '';
  return '<div class="product-card" data-id="' + p.id + '" style="animation-delay:' + delay + 's">'
    + badgeHTML(p.badge)
    + '<button class="pc-wish ' + (inWish?'active':'') + '" onclick="window.toggleWish(' + p.id + ')"><i class="fa' + (inWish?'s':'r') + ' fa-heart"></i></button>'
    + '<div class="pc-image" onclick="window.openProduct(' + p.id + ')">' + p.emoji + '</div>'
    + '<div class="pc-body"><div class="pc-cat">' + p.cat + '</div>'
    + '<div class="pc-name" onclick="window.openProduct(' + p.id + ')">' + p.name + '</div>'
    + '<div class="pc-weight">' + p.weight + '</div>'
    + '<div class="pc-rating"><span class="pc-stars">' + starsHTML(p.rating) + '</span> ' + p.rating + ' <span class="pc-rcount">(' + p.reviews + ')</span></div>'
    + '</div><div class="pc-footer"><div class="pc-price">' + oldP + fmt(p.price) + '</div>' + qtyHtml + '</div></div>';
}

// ── GLOBAL ACTIONS ────────────────────────────────────────────
window.addToCart = function(id) {
  Store.addToCart(id);
  updateCartUI();
  if (typeof renderGrid === 'function') renderGrid();
  var p = getProducts().find(function(x){ return x.id === id; });
  if (p) toast(p.emoji + ' ' + p.name + ' added to cart');
};

window.changeQty = function(id, delta) {
  Store.changeQty(id, delta);
  updateCartUI();
  if (typeof renderGrid === 'function') renderGrid();
  if (typeof renderCartDrawer === 'function') renderCartDrawer();
};

window.removeFromCart = function(id) {
  Store.removeFromCart(id);
  updateCartUI();
  if (typeof renderGrid === 'function') renderGrid();
  if (typeof renderCartDrawer === 'function') renderCartDrawer();
};

window.toggleWish = function(id) {
  Store.toggleWish(id);
  var p = getProducts().find(function(x){ return x.id === id; });
  var isIn = Store.wishlist.includes(id);
  if (p) toast(isIn ? '❤️ ' + p.name + ' saved to wishlist' : p.name + ' removed from wishlist');
  if (typeof renderGrid === 'function') renderGrid();
};

window.openProduct = function(id) { window.location.href = 'product.html?id=' + id; };

function updateCartUI() {
  var n = Store.cartCount();
  qsa('.cart-dot').forEach(function(el){ el.textContent = n; el.style.display = n > 0 ? 'flex' : 'none'; });
}

// ── NAVBAR ────────────────────────────────────────────────────
function buildNav(activePage) {
  activePage = activePage || '';
  var user = Store.user;
  var adminLink = (user && user.role === 'admin') ? '<a href="admin.html" class="nav-link ' + (activePage==='admin'?'active':'') + '">Admin</a>' : '';
  var acctLink  = (user && user.role === 'customer') ? '<a href="profile.html" class="nav-link ' + (activePage==='profile'?'active':'') + '">My Account</a>' : '';
  var userBtn   = user
    ? '<a href="profile.html" class="nav-action-btn" title="' + user.name + '"><i class="fa fa-user-circle"></i></a>'
    : '<a href="login.html" class="btn btn-navy btn-sm">Sign In</a>';

  // Mobile drawer user info
  var mnavUser = user
    ? '<div class="mnav-user"><div class="mnav-avatar">' + (user.name||'U').split(' ').map(function(n){return n[0];}).join('').toUpperCase().slice(0,2) + '</div><div class="mnav-user-info"><strong>' + user.name + '</strong><span>' + user.email + '</span></div></div>'
    : '<div class="mnav-user"><div class="mnav-avatar"><i class="fa fa-user"></i></div><div class="mnav-user-info"><strong>Guest</strong><span><a href="login.html" style="color:var(--gold-light)">Sign in →</a></span></div></div>';
  var mnavAdmin  = (user && user.role === 'admin') ? '<a href="admin.html" class="mnav-link ' + (activePage==='admin'?'active':'') + '"><i class="fa fa-tachometer-alt"></i> Admin Dashboard</a>' : '';
  var mnavAcct   = '<a href="profile.html" class="mnav-link ' + (activePage==='profile'?'active':'') + '"><i class="fa fa-user-circle"></i> My Account</a>';
  var mnavLogout = user ? '<div class="mnav-divider"></div><div class="mnav-link" onclick="window.handleLogout()" style="color:rgba(255,80,80,.8)"><i class="fa fa-sign-out-alt"></i> Logout</div>' : '';

  document.body.insertAdjacentHTML('afterbegin',
    // Topbar
    '<div class="topbar"><strong>Free delivery</strong> on orders above ₹499 &nbsp;|&nbsp; <strong>2-hr delivery</strong> available in your area</div>'
    // Navbar
    + '<nav id="navbar"><div class="nav-inner">'
    + '<button class="hamburger" id="hamburgerBtn" onclick="toggleMobileNav()" aria-label="Menu"><span></span><span></span><span></span></button>'
    + '<a href="index.html" class="nav-logo"><span class="logo-main">NexMart</span><span class="logo-sub">Premium Supermarket</span></a>'
    + '<div class="nav-links"><a href="index.html" class="nav-link ' + (activePage==='home'?'active':'') + '">Home</a>'
    + '<a href="index.html#products" class="nav-link">Products</a>'
    + '<a href="index.html#offers" class="nav-link">Offers</a>'
    + adminLink + acctLink + '</div>'
    + '<div class="nav-search"><i class="fa fa-search"></i><input type="text" id="navSearch" placeholder="Search products..."/></div>'
    + '<div class="nav-actions">'
    + '<button class="nav-action-btn" onclick="toggleCart()" title="Cart"><i class="fa fa-shopping-bag"></i><span class="dot cart-dot" style="display:none">0</span></button>'
    + '<button class="nav-action-btn" onclick="location.href=\'profile.html#wishlist\'" title="Wishlist"><i class="fa fa-heart"></i></button>'
    + userBtn + '</div></div></nav>'
    // Mobile full-width search
    + '<div class="mobile-search-bar"><div class="msb-inner"><i class="fa fa-search"></i><input type="text" id="mobileSearch" placeholder="Search products, brands..."/></div></div>'
    // Mobile nav overlay
    + '<div class="mobile-nav-overlay" id="mobileNavOverlay" onclick="closeMobileNav()"></div>'
    // Mobile nav drawer
    + '<div class="mobile-nav-drawer" id="mobileNavDrawer">'
    + '<div class="mnav-logo"><span class="logo-main">NexMart</span><span class="logo-sub">Premium Supermarket</span></div>'
    + mnavUser
    + '<div class="mnav-section">Shop</div>'
    + '<a href="index.html" class="mnav-link ' + (activePage==='home'?'active':'') + '" onclick="closeMobileNav()"><i class="fa fa-home"></i> Home</a>'
    + '<a href="index.html#products" class="mnav-link" onclick="closeMobileNav()"><i class="fa fa-th-large"></i> All Products</a>'
    + '<a href="index.html#offers" class="mnav-link" onclick="closeMobileNav()"><i class="fa fa-tag"></i> Today\'s Offers</a>'
    + '<div class="mnav-section">Account</div>'
    + mnavAcct + mnavAdmin
    + '<a href="checkout.html" class="mnav-link" onclick="closeMobileNav()"><i class="fa fa-shopping-bag"></i> Cart <span class="badge badge-gold cart-dot" style="margin-left:.5rem;display:none">0</span></a>'
    + mnavLogout
    + '</div>'
    // Mobile bottom tab bar
    + '<div class="mobile-tabbar"><div class="tabbar-inner">'
    + '<button class="tabbar-btn ' + (activePage==='home'?'active':'') + '" onclick="location.href=\'index.html\'"><i class="fa fa-home"></i>Home</button>'
    + '<button class="tabbar-btn" onclick="location.href=\'index.html#products\'"><i class="fa fa-th-large"></i>Shop</button>'
    + '<button class="tabbar-btn" onclick="toggleCart()" style="position:relative"><i class="fa fa-shopping-bag"></i>Cart<span class="tb-dot cart-dot" style="display:none">0</span></button>'
    + '<button class="tabbar-btn ' + (activePage==='profile'?'active':'') + '" onclick="location.href=\'profile.html\'"><i class="fa fa-user"></i>Account</button>'
    + '</div></div>'
  );

  updateCartUI();

  // Desktop search
  var si = $('navSearch');
  if (si) si.addEventListener('input', function(e){ if (typeof onNavSearch === 'function') onNavSearch(e.target.value); });
  // Mobile search
  var ms = $('mobileSearch');
  if (ms) ms.addEventListener('input', function(e){ if (typeof onNavSearch === 'function') onNavSearch(e.target.value); });
}

window.toggleMobileNav = function() {
  var drawer  = document.getElementById('mobileNavDrawer');
  var overlay = document.getElementById('mobileNavOverlay');
  var btn     = document.getElementById('hamburgerBtn');
  if (!drawer) return;
  var open = drawer.classList.toggle('open');
  overlay.classList.toggle('show', open);
  btn.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};

window.closeMobileNav = function() {
  var drawer  = document.getElementById('mobileNavDrawer');
  var overlay = document.getElementById('mobileNavOverlay');
  var btn     = document.getElementById('hamburgerBtn');
  if (drawer)  drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
  if (btn)     btn.classList.remove('open');
  document.body.style.overflow = '';
};

window.handleLogout = function() {
  Store.logout();
  toast('Logged out successfully');
  setTimeout(function(){ location.href = 'index.html'; }, 800);
};

// ── CART DRAWER ───────────────────────────────────────────────
function buildCartDrawer() {
  document.body.insertAdjacentHTML('beforeend',
    '<div class="drawer-overlay" id="cartOverlay" onclick="toggleCart()"></div>'
    + '<div class="cart-drawer" id="cartDrawer">'
    + '<div class="drawer-head"><h3>Shopping Cart</h3><button class="drawer-close" onclick="toggleCart()"
