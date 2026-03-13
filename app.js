/* ============================================================
   NEXMART — Shared Application JS
   ============================================================ */
'use strict';

// ── DATA ─────────────────────────────────────────────────────
const PRODUCTS = [
  { id:1,  name:'Premium Broccoli',    cat:'Vegetables', emoji:'🥦', weight:'500g',  price:49,  oldPrice:65,  rating:4.8, reviews:124, badge:'Organic' },
  { id:2,  name:'Baby Spinach Leaves', cat:'Vegetables', emoji:'🌿', weight:'250g',  price:39,  oldPrice:null, rating:4.7, reviews:89,  badge:null      },
  { id:3,  name:'Cherry Tomatoes',     cat:'Vegetables', emoji:'🍅', weight:'400g',  price:55,  oldPrice:70,  rating:4.9, reviews:201, badge:'Sale'     },
  { id:4,  name:'Sweet Yellow Corn',   cat:'Vegetables', emoji:'🌽', weight:'2 pcs', price:30,  oldPrice:null, rating:4.6, reviews:56,  badge:null      },
  { id:5,  name:'Bell Peppers Mix',    cat:'Vegetables', emoji:'🫑', weight:'300g',  price:65,  oldPrice:80,  rating:4.7, reviews:93,  badge:'Sale'     },
  { id:6,  name:'Garden Cauliflower',  cat:'Vegetables', emoji:'🥬', weight:'1 head',price:45,  oldPrice:60,  rating:4.6, reviews:71,  badge:null      },
  { id:7,  name:'Red Onions',          cat:'Vegetables', emoji:'🧅', weight:'1 kg',  price:35,  oldPrice:null, rating:4.5, reviews:188, badge:null      },
  { id:8,  name:'Baby Carrots',        cat:'Vegetables', emoji:'🥕', weight:'500g',  price:42,  oldPrice:55,  rating:4.7, reviews:142, badge:'Sale'     },
  { id:9,  name:'Pink Lady Apples',    cat:'Fruits',     emoji:'🍎', weight:'1 kg',  price:99,  oldPrice:120, rating:4.9, reviews:310, badge:'Sale'     },
  { id:10, name:'Alphonso Mangoes',    cat:'Fruits',     emoji:'🥭', weight:'1 kg',  price:149, oldPrice:199, rating:5.0, reviews:540, badge:'Premium'  },
  { id:11, name:'Fresh Strawberries',  cat:'Fruits',     emoji:'🍓', weight:'250g',  price:89,  oldPrice:110, rating:4.8, reviews:188, badge:'Organic'  },
  { id:12, name:'Premium Bananas',     cat:'Fruits',     emoji:'🍌', weight:'6 pcs', price:35,  oldPrice:null, rating:4.6, reviews:97,  badge:null      },
  { id:13, name:'Wild Blueberries',    cat:'Fruits',     emoji:'🫐', weight:'150g',  price:129, oldPrice:160, rating:4.9, reviews:233, badge:'Sale'     },
  { id:14, name:'Seedless Watermelon', cat:'Fruits',     emoji:'🍉', weight:'2 kg',  price:79,  oldPrice:null, rating:4.7, reviews:145, badge:null      },
  { id:15, name:'Farm Fresh Milk',     cat:'Dairy',      emoji:'🥛', weight:'1 L',   price:58,  oldPrice:null, rating:4.8, reviews:421, badge:null      },
  { id:16, name:'Greek Yogurt',        cat:'Dairy',      emoji:'🍦', weight:'400g',  price:75,  oldPrice:90,  rating:4.7, reviews:159, badge:'Sale'     },
  { id:17, name:'Aged Cheddar',        cat:'Dairy',      emoji:'🧀', weight:'200g',  price:110, oldPrice:140, rating:4.9, reviews:276, badge:'Premium'  },
  { id:18, name:'Artisan Butter',      cat:'Dairy',      emoji:'🧈', weight:'100g',  price:52,  oldPrice:null, rating:4.6, reviews:88,  badge:null      },
  { id:19, name:'Fresh Paneer',        cat:'Dairy',      emoji:'🫙', weight:'200g',  price:65,  oldPrice:75,  rating:4.8, reviews:320, badge:'Sale'     },
  { id:20, name:'Sourdough Loaf',      cat:'Bakery',     emoji:'🍞', weight:'400g',  price:85,  oldPrice:null, rating:4.9, reviews:203, badge:'Artisan'  },
  { id:21, name:'Multigrain Bread',    cat:'Bakery',     emoji:'🫓', weight:'400g',  price:55,  oldPrice:65,  rating:4.6, reviews:118, badge:'Sale'     },
  { id:22, name:'Butter Croissants',   cat:'Bakery',     emoji:'🥐', weight:'4 pcs', price:99,  oldPrice:null, rating:4.8, reviews:189, badge:'Fresh'    },
  { id:23, name:'Cinnamon Rolls',      cat:'Bakery',     emoji:'🍩', weight:'2 pcs', price:70,  oldPrice:85,  rating:4.7, reviews:144, badge:'Sale'     },
  { id:24, name:'Fresh Orange Juice',  cat:'Beverages',  emoji:'🍊', weight:'1 L',   price:79,  oldPrice:95,  rating:4.7, reviews:167, badge:'Fresh'    },
  { id:25, name:'Organic Green Tea',   cat:'Beverages',  emoji:'🍵', weight:'25 bags',price:99, oldPrice:null, rating:4.8, reviews:241, badge:'Organic'  },
  { id:26, name:'Tender Coconut Water',cat:'Beverages',  emoji:'🥥', weight:'500ml', price:55,  oldPrice:null, rating:4.9, reviews:388, badge:'Natural'  },
  { id:27, name:'Cold Brew Coffee',    cat:'Beverages',  emoji:'☕', weight:'300ml', price:89,  oldPrice:110, rating:4.8, reviews:203, badge:'Sale'     },
  { id:28, name:'Belgian Dark Choc',   cat:'Snacks',     emoji:'🍫', weight:'100g',  price:120, oldPrice:150, rating:4.9, reviews:312, badge:'Sale'     },
  { id:29, name:'Trail Mix Nuts',      cat:'Snacks',     emoji:'🥜', weight:'200g',  price:149, oldPrice:null, rating:4.8, reviews:257, badge:'Premium'  },
  { id:30, name:'Sea Salt Popcorn',    cat:'Snacks',     emoji:'🍿', weight:'100g',  price:40,  oldPrice:50,  rating:4.5, reviews:98,  badge:'Sale'     },
  { id:31, name:'Aged Basmati Rice',   cat:'Grains',     emoji:'🌾', weight:'1 kg',  price:89,  oldPrice:110, rating:4.9, reviews:489, badge:'Sale'     },
  { id:32, name:'Steel Cut Oats',      cat:'Grains',     emoji:'🥣', weight:'500g',  price:65,  oldPrice:null, rating:4.7, reviews:213, badge:'Organic'  },
  { id:33, name:'Organic Quinoa',      cat:'Grains',     emoji:'🌰', weight:'500g',  price:199, oldPrice:250, rating:4.8, reviews:167, badge:'Sale'     },
  { id:34, name:'Brown Bread Flour',   cat:'Grains',     emoji:'🌻', weight:'1 kg',  price:55,  oldPrice:null, rating:4.5, reviews:88,  badge:null      },
];

const CATEGORIES = [
  { name:'All',       icon:'🏪' },
  { name:'Vegetables',icon:'🥦' },
  { name:'Fruits',    icon:'🍎' },
  { name:'Dairy',     icon:'🥛' },
  { name:'Bakery',    icon:'🍞' },
  { name:'Beverages', icon:'🧃' },
  { name:'Snacks',    icon:'🍫' },
  { name:'Grains',    icon:'🌾' },
];

// ── STATE ─────────────────────────────────────────────────────
const Store = {
  cart:     JSON.parse(localStorage.getItem('nm_cart')     || '[]'),
  wishlist: JSON.parse(localStorage.getItem('nm_wishlist') || '[]'),
  user:     JSON.parse(localStorage.getItem('nm_user')     || 'null'),

  saveCart()     { localStorage.setItem('nm_cart',     JSON.stringify(this.cart));     },
  saveWishlist() { localStorage.setItem('nm_wishlist', JSON.stringify(this.wishlist)); },
  saveUser(u)    { this.user = u; localStorage.setItem('nm_user', JSON.stringify(u)); },
  logout()       { this.user = null; localStorage.removeItem('nm_user'); },

  addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const ex = this.cart.find(c => c.id === id);
    if (ex) ex.qty++;
    else this.cart.push({ ...p, qty: 1 });
    this.saveCart();
  },
  removeFromCart(id) { this.cart = this.cart.filter(c => c.id !== id); this.saveCart(); },
  changeQty(id, delta) {
    const item = this.cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) this.removeFromCart(id);
    else this.saveCart();
  },
  cartTotal()  { return this.cart.reduce((s,c) => s + c.price * c.qty, 0); },
  cartCount()  { return this.cart.reduce((s,c) => s + c.qty, 0); },
  toggleWish(id) {
    const i = this.wishlist.indexOf(id);
    if (i === -1) this.wishlist.push(id);
    else this.wishlist.splice(i, 1);
    this.saveWishlist();
  },
};

// ── UTILS ─────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const qsa = sel => document.querySelectorAll(sel);
const fmt = n => `₹${n.toLocaleString('en-IN')}`;

function toast(msg, type = 'default') {
  let el = $('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    document.body.appendChild(el);
  }
  const icons = { default: '✓', error: '✕', warning: '⚠' };
  el.innerHTML = `<span>${icons[type]||'✓'}</span> ${msg}`;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2800);
}

function starsHTML(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '');
}

function badgeHTML(b) {
  if (!b) return '';
  const cls = { Sale:'badge-danger', Premium:'badge-gold', Organic:'badge-success', Artisan:'badge-navy', Fresh:'badge-success', Natural:'badge-success' }[b] || 'badge-navy';
  return `<span class="badge ${cls} pc-badge">${b}</span>`;
}

function productCardHTML(p, delay = 0) {
  const inCart = Store.cart.find(c => c.id === p.id);
  const inWish = Store.wishlist.includes(p.id);
  return `
  <div class="product-card" data-id="${p.id}" style="animation-delay:${delay}s">
    ${badgeHTML(p.badge)}
    <button class="pc-wish ${inWish?'active':''}" onclick="window.toggleWish(${p.id})">
      <i class="fa${inWish?'s':'r'} fa-heart"></i>
    </button>
    <div class="pc-image" onclick="window.openProduct(${p.id})">${p.emoji}</div>
    <div class="pc-body">
      <div class="pc-cat">${p.cat}</div>
      <div class="pc-name" onclick="window.openProduct(${p.id})">${p.name}</div>
      <div class="pc-weight">${p.weight}</div>
      <div class="pc-rating">
        <span class="pc-stars">${starsHTML(p.rating)}</span>
        <span>${p.rating}</span>
        <span class="pc-rcount">(${p.reviews})</span>
      </div>
    </div>
    <div class="pc-footer">
      <div class="pc-price">
        ${p.oldPrice ? `<span class="pc-old">${fmt(p.oldPrice)}</span>` : ''}
        ${fmt(p.price)}
      </div>
      ${inCart
        ? `<div class="qty-ctrl">
             <button class="qty-btn" onclick="window.changeQty(${p.id},-1)">−</button>
             <span class="qty-num">${inCart.qty}</span>
             <button class="qty-btn" onclick="window.changeQty(${p.id},1)">+</button>
           </div>`
        : `<button class="btn btn-navy btn-sm" onclick="window.addToCart(${p.id})">
             <i class="fa fa-plus"></i> Add
           </button>`
      }
    </div>
  </div>`;
}

// ── GLOBAL ACTIONS ────────────────────────────────────────────
window.addToCart = function(id) {
  Store.addToCart(id);
  updateCartUI();
  if (typeof renderGrid === 'function') renderGrid();
  const p = PRODUCTS.find(x => x.id === id);
  toast(`${p.emoji} ${p.name} added to cart`);
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
  const p = PRODUCTS.find(x => x.id === id);
  const isIn = Store.wishlist.includes(id);
  toast(isIn ? `❤️ ${p.name} saved to wishlist` : `${p.name} removed from wishlist`);
  if (typeof renderGrid === 'function') renderGrid();
};

window.openProduct = function(id) {
  window.location.href = `product.html?id=${id}`;
};

function updateCartUI() {
  const n = Store.cartCount();
  qsa('.cart-dot').forEach(el => { el.textContent = n; el.style.display = n > 0 ? 'flex' : 'none'; });
}

// ── NAVBAR BUILDER ────────────────────────────────────────────
function buildNav(activePage = '') {
  const user = Store.user;
  const navHTML = `
  <div class="topbar">
    <strong>Free delivery</strong> on orders above ₹499 &nbsp;|&nbsp; <strong>2-hr delivery</strong> available in your area
  </div>
  <nav id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <span class="logo-main">NexMart</span>
        <span class="logo-sub">Premium Supermarket</span>
      </a>
      <div class="nav-links">
        <a href="index.html"  class="nav-link ${activePage==='home'?'active':''}">Home</a>
        <a href="index.html#products" class="nav-link">Products</a>
        <a href="index.html#offers"   class="nav-link">Offers</a>
        ${user && user.role==='admin' ? `<a href="admin.html" class="nav-link ${activePage==='admin'?'active':''}">Admin</a>` : ''}
      </div>
      <div class="nav-search">
        <i class="fa fa-search"></i>
        <input type="text" id="navSearch" placeholder="Search products, brands..." />
      </div>
      <div class="nav-actions">
        <button class="nav-action-btn" onclick="toggleCart()" title="Cart">
          <i class="fa fa-shopping-bag"></i>
          <span class="dot cart-dot" style="display:none">0</span>
        </button>
        <button class="nav-action-btn" title="Wishlist" onclick="location.href='index.html#wishlist'">
          <i class="fa fa-heart"></i>
        </button>
        ${user
          ? `<button class="nav-action-btn" onclick="handleLogout()" title="Logout (${user.name})">
               <i class="fa fa-user-check"></i>
             </button>`
          : `<a href="login.html" class="btn btn-navy btn-sm">Sign In</a>`
        }
      </div>
    </div>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  updateCartUI();

  const si = $('navSearch');
  if (si) {
    si.addEventListener('input', e => {
      if (typeof onNavSearch === 'function') onNavSearch(e.target.value);
    });
  }
}

window.handleLogout = function() {
  Store.logout();
  toast('Logged out successfully');
  setTimeout(() => location.href = 'index.html', 800);
};

// ── CART DRAWER ───────────────────────────────────────────────
function buildCartDrawer() {
  const html = `
  <div class="drawer-overlay" id="cartOverlay" onclick="toggleCart()"></div>
  <div class="cart-drawer" id="cartDrawer">
    <div class="drawer-head">
      <h3>Shopping Cart</h3>
      <button class="drawer-close" onclick="toggleCart()"><i class="fa fa-times"></i></button>
    </div>
    <div class="drawer-body" id="cartBody"></div>
    <div class="drawer-foot" id="cartFoot"></div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

window.toggleCart = function() {
  const drawer  = $('cartDrawer');
  const overlay = $('cartOverlay');
  if (!drawer) return;
  const open = drawer.classList.toggle('open');
  overlay.classList.toggle('show', open);
  if (open) renderCartDrawer();
};

function renderCartDrawer() {
  const body = $('cartBody'), foot = $('cartFoot');
  if (!body) return;
  if (Store.cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><p>Your cart is empty</p><a href="index.html#products" class="btn btn-navy btn-sm" style="margin-top:1rem" onclick="toggleCart()">Browse Products</a></div>`;
    foot.innerHTML = '';
    return;
  }
  body.innerHTML = Store.cart.map(item => `
    <div class="cart-item-row">
      <div class="ci-emoji">${item.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-meta">${item.weight}</div>
        <div class="ci-price">${fmt(item.price * item.qty)}</div>
        <div class="ci-actions">
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="window.changeQty(${item.id},-1);renderCartDrawer()">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="window.changeQty(${item.id},1);renderCartDrawer()">+</button>
          </div>
          <button class="ci-remove" onclick="window.removeFromCart(${item.id});renderCartDrawer()"><i class="fa fa-trash"></i> Remove</button>
        </div>
      </div>
    </div>`).join('');

  const sub = Store.cartTotal(), del = sub >= 499 ? 0 : 49, total = sub + del;
  foot.innerHTML = `
    <div class="total-row"><span>Subtotal</span><span>${fmt(sub)}</span></div>
    <div class="total-row"><span>Delivery</span><span>${del === 0 ? '<span style="color:var(--success)">FREE</span>' : fmt(del)}</span></div>
    ${del > 0 ? `<div style="font-size:.75rem;color:var(--text-lt);margin:.3rem 0">Add ${fmt(499-sub)} more for free delivery</div>` : ''}
    <div class="total-row grand"><span>Total</span><span>${fmt(total)}</span></div>
    <a href="checkout.html" class="btn btn-navy btn-lg btn-full" style="margin-top:1rem" onclick="toggleCart()">
      Proceed to Checkout <i class="fa fa-arrow-right"></i>
    </a>`;
}

function buildFooter() {
  const html = `
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="logo-main">NexMart</span>
        <p>Your trusted premium supermarket since 2010. Farm-fresh produce, artisan goods & everyday essentials.</p>
        <div class="footer-social">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Shop</h5>
        <ul>
          <li><a href="#">Vegetables & Fruits</a></li>
          <li><a href="#">Dairy & Eggs</a></li>
          <li><a href="#">Bakery</a></li>
          <li><a href="#">Beverages</a></li>
          <li><a href="#">Snacks & Grains</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="#">About NexMart</a></li>
          <li><a href="#">Our Stores</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="contact-item"><i class="fa fa-map-marker-alt"></i> 12, Market Road, Chennai - 600001</div>
        <div class="contact-item"><i class="fa fa-phone"></i> +91 98765 43210</div>
        <div class="contact-item"><i class="fa fa-envelope"></i> hello@nexmart.in</div>
        <div class="contact-item"><i class="fa fa-clock"></i> Mon–Sun: 8am – 10pm</div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 NexMart Pvt. Ltd. All rights reserved.</span>
      <span>Privacy Policy · Terms · Cookie Policy</span>
    </div>
  </footer>
  <div id="toast"></div>
  <button class="btn btn-navy btn-icon" id="backTop" style="position:fixed;bottom:2rem;right:2rem;display:none;z-index:90;box-shadow:var(--shadow-lg)" onclick="window.scrollTo({top:0,behavior:'smooth'})"><i class="fa fa-arrow-up"></i></button>`;
  document.body.insertAdjacentHTML('beforeend', html);
  window.addEventListener('scroll', () => {
    const bt = $('backTop');
    if (bt) bt.style.display = window.scrollY > 500 ? 'grid' : 'none';
  });
   }
   
