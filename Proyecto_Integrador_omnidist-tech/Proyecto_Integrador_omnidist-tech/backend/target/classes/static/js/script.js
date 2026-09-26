// ========================================
// OmniDist Tech - JavaScript
// ========================================

// Cart State
let cart = [];
const CART_STORAGE_KEY = "omnidistCart";

// ========================================
// Authentication & Users
// ========================================

const users = {
  "admin@omnidist.com": {
    password: "admin123",
    role: "admin",
    name: "Administrador",
  },
  "empleado@omnidist.com": {
    password: "emp123",
    role: "employee",
    name: "Juan Pérez",
  },
};

let currentUser = null;

// Products Data
let products = [
  {
    id: 1,
    name: "PlayStation 5",
    category: "consolas",
    price: 499.99,
    stock: 15,
    description: "Consola de siguiente generación",
  },
  {
    id: 2,
    name: "Xbox Series X",
    category: "consolas",
    price: 499.99,
    stock: 12,
    description: "Potencia máxima",
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    category: "consolas",
    price: 349.99,
    stock: 20,
    description: "Pantalla OLED",
  },
  {
    id: 4,
    name: "Steam Deck",
    category: "consolas",
    price: 399.99,
    stock: 8,
    description: "Gaming PC portátil",
  },
  {
    id: 5,
    name: "iPhone 15 Pro Max",
    category: "dispositivos",
    price: 1199.99,
    stock: 10,
    description: "Chip A17 Pro",
  },
  {
    id: 6,
    name: "Samsung Galaxy Tab S9",
    category: "dispositivos",
    price: 849.99,
    stock: 7,
    description: "Pantalla Dynamic AMOLED",
  },
  {
    id: 7,
    name: "Apple Watch Ultra 2",
    category: "dispositivos",
    price: 799.99,
    stock: 14,
    description: "GPS dual",
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    category: "dispositivos",
    price: 349.99,
    stock: 25,
    description: "Cancelación de ruido",
  },
  {
    id: 9,
    name: "MacBook Pro M3",
    category: "herramientas",
    price: 1999.99,
    stock: 5,
    description: "Chip M3 Pro",
  },
  {
    id: 10,
    name: "Dell XPS 15",
    category: "herramientas",
    price: 1799.99,
    stock: 6,
    description: "RTX 4050",
  },
  {
    id: 11,
    name: "Impresora 3D Creality K1",
    category: "herramientas",
    price: 599.99,
    stock: 4,
    description: "Velocidad 600mm/s",
  },
  {
    id: 12,
    name: "Meta Quest 3",
    category: "herramientas",
    price: 549.99,
    stock: 9,
    description: "Realidad mixta",
  },
];

// Employees Data
let employees = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@omnidist.com",
    phone: "+1 555-0101",
    position: "vendedor",
  },
  {
    id: 2,
    name: "María García",
    email: "maria@omnidist.com",
    phone: "+1 555-0102",
    position: "soporte",
  },
  {
    id: 3,
    name: "Carlos López",
    email: "carlos@omnidist.com",
    phone: "+1 555-0103",
    position: "almacenista",
  },
];

// Orders Data
let orders = [
  {
    id: 1,
    customer: "Cliente 1",
    email: "cliente1@email.com",
    total: 499.99,
    status: "pending",
    date: "2026-04-20",
    items: [{ name: "PlayStation 5", quantity: 1, price: 499.99 }],
  },
  {
    id: 2,
    customer: "Cliente 2",
    email: "cliente2@email.com",
    total: 849.99,
    status: "processing",
    date: "2026-04-21",
    items: [{ name: "Samsung Galaxy Tab S9", quantity: 1, price: 849.99 }],
  },
  {
    id: 3,
    customer: "Cliente 3",
    email: "cliente3@email.com",
    total: 1199.99,
    status: "shipped",
    date: "2026-04-19",
    items: [{ name: "iPhone 15 Pro Max", quantity: 1, price: 1199.99 }],
  },
  {
    id: 4,
    customer: "Cliente 4",
    email: "cliente4@email.com",
    total: 699.98,
    status: "delivered",
    date: "2026-04-15",
    items: [{ name: "Nintendo Switch OLED", quantity: 2, price: 349.99 }],
  },
  {
    id: 5,
    customer: "Cliente 5",
    email: "cliente5@email.com",
    total: 1999.99,
    status: "cancelled",
    date: "2026-04-18",
    items: [{ name: "MacBook Pro M3", quantity: 1, price: 1999.99 }],
  },
];

// ========================================
// Login Functions
// ========================================

function showLogin() {
  document.getElementById("loginModal").classList.add("active");
  document.getElementById("loginOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLogin() {
  document.getElementById("loginModal").classList.remove("active");
  document.getElementById("loginOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const role = document.getElementById("loginRole").value;

  const user = users[email];
  if (user && user.password === password && user.role === role) {
    currentUser = { email, ...user };
    closeLogin();
    showToast(`Bienvenido, ${user.name}!`, "success");

    // Load persisted cart for logged-in user
    loadCartFromStorage();

    if (role === "admin") {
      showAdminDashboard();
    } else {
      showEmployeeDashboard();
    }
  } else {
    showToast("Credenciales incorrectas", "error");
  }
}

function logout() {
  currentUser = null;
  // Clear cart on logout (anonymous users don't keep cart)
  cart = [];
  updateCart();

  document.getElementById("adminDashboard").classList.remove("active");
  document.getElementById("employeeDashboard").classList.remove("active");
  document.querySelector(".header").style.display = "";
  document.querySelector(".hero").style.display = "";
  document
    .querySelectorAll(
      "section:not(.features):not(.contact-section):not(.footer)",
    )
    .forEach((s) => (s.style.display = ""));

  // Restore cart button visibility
  const cartBtnEl = document.querySelector(".cart-btn");
  if (cartBtnEl) cartBtnEl.style.display = "";

  // Restore footer
  const footer = document.querySelector(".footer");
  if (footer) footer.style.display = "";

  showToast("Sesión cerrada", "success");
}

// ========================================
// Admin Dashboard
// ========================================

function showAdminDashboard() {
  // Hide main site sections
  document.querySelector(".header").style.display = "none";
  document.querySelector(".hero").style.display = "none";
  document
    .querySelectorAll("section")
    .forEach((s) => (s.style.display = "none"));
  document.querySelector(".footer").style.display = "none";
  document.querySelector(".cart-btn").style.display = "none";

  // Show admin dashboard
  document.getElementById("adminDashboard").classList.add("active");
  document.getElementById("adminName").textContent = currentUser.name;

  loadDashboardData();
}

function loadDashboardData() {
  // Update stats
  document.getElementById("totalOrders").textContent = orders.length;
  document.getElementById("totalRevenue").textContent =
    "$" + orders.reduce((sum, o) => sum + o.total, 0).toFixed(2);
  document.getElementById("totalProducts").textContent = products.length;
  document.getElementById("totalEmployees").textContent = employees.length;

  // Load recent orders
  renderRecentOrders();
  renderProductsTable();
  renderOrdersTable();
  renderEmployeesGrid();
}

function renderRecentOrders() {
  const container = document.getElementById("recentOrders");
  const recent = orders.slice(-5).reverse();

  container.innerHTML = recent
    .map(
      (order) => `
    <div class=\"recent-order-item\">
      <div class=\"order-info\">
        <strong>#${order.id}</strong>
        <span>${order.customer}</span>
      </div>
      <div class=\"order-status status-${order.status}\">${getStatusLabel(order.status)}</div>
      <div class=\"order-total\">$${order.total.toFixed(2)}</div>
    </div>
  `,
    )
    .join("");
}

function getStatusLabel(status) {
  const labels = {
    pending: "Pendiente",
    processing: "Procesando",
    shipped: "Enviado",
    delivered: "Entregado",
    cancelled: "Cancelado",
  };
  return labels[status] || status;
}

function renderProductsTable() {
  const tbody = document.getElementById("productsTableBody");
  tbody.innerHTML = products
    .map(
      (p) => `
    <tr>
      <td>${p.name}</td>
      <td><span class=\"category-badge\">${p.category}</span></td>
      <td>$${p.price.toFixed(2)}</td>
      <td>${p.stock}</td>
      <td>
        <button class=\"btn-icon\" onclick=\"editProduct(${p.id})\"><i class=\"fas fa-edit\"></i></button>
        <button class=\"btn-icon danger\" onclick=\"deleteProduct(${p.id})\"><i class=\"fas fa-trash\"></i></button>
      </td>
    </tr>
  `,
    )
    .join("");
}

function renderOrdersTable() {
  const tbody = document.getElementById("ordersTableBody");
  tbody.innerHTML = orders
    .map(
      (order) => `
    <tr>
      <td>#${order.id}</td>
      <td>${order.customer}<br><small>${order.email}</small></td>
      <td>$${order.total.toFixed(2)}</td>
      <td><span class=\"status-badge status-${order.status}\">${getStatusLabel(order.status)}</span></td>
      <td>${order.date}</td>
      <td>
        <button class=\"btn-icon\" onclick=\"viewOrder(${order.id})\"><i class=\"fas fa-eye\"></i></button>
        <select class=\"status-select\" onchange=\"updateOrderStatus(${order.id}, this.value)\">
          <option value=\"pending\" ${order.status === "pending" ? "selected" : ""}>Pendiente</option>
          <option value=\"processing\" ${order.status === "processing" ? "selected" : ""}>Procesando</option>
          <option value=\"shipped\" ${order.status === "shipped" ? "selected" : ""}>Enviado</option>
          <option value=\"delivered\" ${order.status === "delivered" ? "selected" : ""}>Entregado</option>
          <option value=\"cancelled\" ${order.status === "cancelled" ? "selected" : ""}>Cancelado</option>
        </select>
      </td>
    </tr>
  `,
    )
    .join("");
}

function renderEmployeesGrid() {
  const container = document.getElementById("employeesGrid");
  container.innerHTML = employees
    .map(
      (emp) => `
    <div class=\"employee-card\">
      <div class=\"employee-avatar\">
        <i class=\"fas fa-user\"></i>
      </div>
      <div class=\"employee-details\">
        <h4>${emp.name}</h4>
        <p class=\"employee-position\">${getPositionLabel(emp.position)}</p>
        <p class=\"employee-email\">${emp.email}</p>
        <p class=\"employee-phone\">${emp.phone}</p>
      </div>
      <div class=\"employee-actions\">
        <button class=\"btn-icon\" onclick=\"editEmployee(${emp.id})\"><i class=\"fas fa-edit\"></i></button>
        <button class=\"btn-icon danger\" onclick=\"deleteEmployee(${emp.id})\"><i class=\"fas fa-trash\"></i></button>
      </div>
    </div>
  `,
    )
    .join("");
}

function getPositionLabel(position) {
  const labels = {
    vendedor: "Vendedor",
    soporte: "Soporte",
    almacenista: "Almacenista",
  };
  return labels[position] || position;
}

function updateOrderStatus(orderId, status) {
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = status;
    renderOrdersTable();
    renderRecentOrders();
    showToast("Estado actualizado", "success");
  }
}

function filterOrders() {
  const status = document.getElementById("orderStatusFilter").value;
  const tbody = document.getElementById("ordersTableBody");
  const filtered =
    status === "all" ? orders : orders.filter((o) => o.status === status);

  tbody.innerHTML = filtered
    .map(
      (order) => `
    <tr>
      <td>#${order.id}</td>
      <td>${order.customer}<br><small>${order.email}</small></td>
      <td>$${order.total.toFixed(2)}</td>
      <td><span class=\"status-badge status-${order.status}\">${getStatusLabel(order.status)}</span></td>
      <td>${order.date}</td>
      <td>
        <button class=\"btn-icon\" onclick=\"viewOrder(${order.id})\"><i class=\"fas fa-eye\"></i></button>
        <select class=\"status-select\" onchange=\"updateOrderStatus(${order.id}, this.value)\">
          <option value=\"pending\" ${order.status === "pending" ? "selected" : ""}>Pendiente</option>
          <option value=\"processing\" ${order.status === "processing" ? "selected" : ""}>Procesando</option>
          <option value=\"shipped\" ${order.status === "shipped" ? "selected" : ""}>Enviado</option>
          <option value=\"delivered\" ${order.status === "delivered" ? "selected" : ""}>Entregado</option>
          <option value=\"cancelled\" ${order.status === "cancelled" ? "selected" : ""}>Cancelado</option>
        </select>
      </td>
    </tr>
  `,
    )
    .join("");
}

// ========================================
// Product Management
// ========================================

function showAddProductForm() {
  document.getElementById("productModalTitle").textContent = "Agregar Producto";
  document.getElementById("productId").value = "";
  document.getElementById("productForm").reset();
  document.getElementById("productModal").classList.add("active");
}

function editProduct(id) {
  const product = products.find((p) => p.id === id);
  if (product) {
    document.getElementById("productModalTitle").textContent =
      "Editar Producto";
    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productStock").value = product.stock;
    document.getElementById("productDesc").value = product.description || "";
    document.getElementById("productModal").classList.add("active");
  }
}

function saveProduct(e) {
  e.preventDefault();
  const id = document.getElementById("productId").value;
  const productData = {
    name: document.getElementById("productName").value,
    category: document.getElementById("productCategory").value,
    price: parseFloat(document.getElementById("productPrice").value),
    stock: parseInt(document.getElementById("productStock").value),
    description: document.getElementById("productDesc").value,
  };

  if (id) {
    // Edit existing
    const index = products.findIndex((p) => p.id === parseInt(id));
    if (index !== -1) {
      products[index] = { ...products[index], ...productData };
      showToast("Producto actualizado", "success");
    }
  } else {
    // Add new
    productData.id = products.length + 1;
    products.push(productData);
    showToast("Producto agregado", "success");
  }

  closeProductModal();
  renderProductsTable();
  document.getElementById("totalProducts").textContent = products.length;
}

function deleteProduct(id) {
  if (confirm("¿Estás seguro de eliminar este producto?")) {
    products = products.filter((p) => p.id !== id);
    renderProductsTable();
    document.getElementById("totalProducts").textContent = products.length;
    showToast("Producto eliminado", "success");
  }
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
}

// ========================================
// Employee Management
// ========================================

function showAddEmployeeForm() {
  document.getElementById("employeeForm").reset();
  document.getElementById("employeeModal").classList.add("active");
}

function editEmployee(id) {
  const emp = employees.find((e) => e.id === id);
  if (emp) {
    document.getElementById("employeeNameInput").value = emp.name;
    document.getElementById("employeeEmailInput").value = emp.email;
    document.getElementById("employeePhoneInput").value = emp.phone;
    document.getElementById("employeePosition").value = emp.position;
    emp.editId = id;
    document.getElementById("employeeModal").classList.add("active");
  }
}

function saveEmployee(e) {
  e.preventDefault();
  const form = document.getElementById("employeeForm");
  const editId = form.editId;

  const employeeData = {
    name: document.getElementById("employeeNameInput").value,
    email: document.getElementById("employeeEmailInput").value,
    phone: document.getElementById("employeePhoneInput").value,
    position: document.getElementById("employeePosition").value,
  };

  if (editId) {
    const index = employees.findIndex((e) => e.id === editId);
    if (index !== -1) {
      employees[index] = { ...employees[index], ...employeeData };
      showToast("Empleado actualizado", "success");
    }
    delete form.editId;
  } else {
    employeeData.id = employees.length + 1;
    employees.push(employeeData);
    showToast("Empleado agregado", "success");
  }

  closeEmployeeModal();
  renderEmployeesGrid();
  document.getElementById("totalEmployees").textContent = employees.length;
}

function deleteEmployee(id) {
  if (confirm("¿Estás seguro de eliminar este empleado?")) {
    employees = employees.filter((e) => e.id !== id);
    renderEmployeesGrid();
    document.getElementById("totalEmployees").textContent = employees.length;
    showToast("Empleado eliminado", "success");
  }
}

function closeEmployeeModal() {
  document.getElementById("employeeModal").classList.remove("active");
}

function viewOrder(id) {
  const order = orders.find((o) => o.id === id);
  if (order) {
    const itemsList = order.items
      .map(
        (i) =>
          `${i.name} x${i.quantity} - $${(i.price * i.quantity).toFixed(2)}`,
      )
      .join("\n");
    alert(
      `Pedido #${order.id}\n\nCliente: ${order.customer}\nEmail: ${order.email}\n\nItems:\n${itemsList}\n\nTotal: $${order.total.toFixed(2)}\nEstado: ${getStatusLabel(order.status)}\nFecha: ${order.date}`,
    );
  }
}

// ========================================
// Employee Dashboard
// ========================================

function showEmployeeDashboard() {
  // Hide main site sections
  document.querySelector(".header").style.display = "none";
  document.querySelector(".hero").style.display = "none";
  document
    .querySelectorAll("section")
    .forEach((s) => (s.style.display = "none"));
  document.querySelector(".footer").style.display = "none";
  document.querySelector(".cart-btn").style.display = "none";

  // Show employee dashboard
  document.getElementById("employeeDashboard").classList.add("active");
  document.getElementById("employeeName").textContent = currentUser.name;

  renderEmployeeOrders();
  renderEmployeeProducts();
}

function renderEmployeeOrders() {
  const tbody = document.getElementById("employeeOrdersTableBody");
  tbody.innerHTML = orders
    .map(
      (order) => `
    <tr>
      <td>#${order.id}</td>
      <td>${order.customer}</td>
      <td>$${order.total.toFixed(2)}</td>
      <td><span class=\"status-badge status-${order.status}\">${getStatusLabel(order.status)}</span></td>
      <td>${order.date}</td>
      <td>
        <button class=\"btn-icon\" onclick=\"viewOrder(${order.id})\"><i class=\"fas fa-eye\"></i></button>
      </td>
    </tr>
  `,
    )
    .join("");
}

function renderEmployeeProducts() {
  const tbody = document.getElementById("employeeProductsTableBody");
  tbody.innerHTML = products
    .map(
      (p) => `
    <tr>
      <td>${p.name}</td>
      <td><span class=\"category-badge\">${p.category}</span></td>
      <td>$${p.price.toFixed(2)}</td>
      <td>${p.stock}</td>
    </tr>
  `,
    )
    .join("");
}

// ========================================
// Toast Notifications (defined early so other code can use showToast)
// ========================================

function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container");

  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
        <i class="fas fa-${type === "success" ? "check-circle" : "exclamation-circle"}"></i>
        <p>${message}</p>
    `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add slideOut animation
const style = document.createElement("style");
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Cart Persistence (only for logged-in users)
// ========================================

function saveCartToStorage() {
  // Only persist cart if a user is logged in
  if (currentUser) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }
}

function loadCartFromStorage() {
  if (currentUser) {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        cart = JSON.parse(saved);
      }
    } catch (e) {
      cart = [];
    }
  }
  updateCart();
}

// ========================================
// Cart Functions
// ========================================

function addToCart(productName, price) {
  const existingItem = cart.find((item) => item.name === productName);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      name: productName,
      price: price,
      quantity: 1,
    });
  }

  updateCart();
  saveCartToStorage();
  showToast(`"${productName}" agregado al carrito`, "success");
}

function removeFromCart(productName) {
  cart = cart.filter((item) => item.name !== productName);
  updateCart();
  saveCartToStorage();
  showToast(`"${productName}" eliminado del carrito`, "error");
}

function updateQuantity(productName, change) {
  const item = cart.find((item) => item.name === productName);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productName);
    } else {
      updateCart();
      saveCartToStorage();
    }
  }
}

function updateCart() {
  const cartCountEl = document.getElementById("cartCount");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");

  if (!cartCountEl || !cartItemsEl || !cartTotalEl) return;

  // Update count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalItems;

  // Update items list
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
  } else {
    cartItemsEl.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <i class="fas fa-microchip"></i>
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity('${item.name}', -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.name}', 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.name}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `,
      )
      .join("");
  }

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalEl.textContent = "$" + total.toFixed(2);
}

function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  const cartOverlay = document.getElementById("cartOverlay");
  if (!cartSidebar || !cartOverlay) return;

  cartSidebar.classList.toggle("active");
  cartOverlay.classList.toggle("active");
  document.body.style.overflow = cartSidebar.classList.contains("active")
    ? "hidden"
    : "";
}

function checkout() {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío", "error");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(
    `¡Gracias por tu compra!\n\nTotal: $${total.toFixed(2)}\n\nRecibirás un correo de confirmación pronto.`,
  );

  cart = [];
  updateCart();
  saveCartToStorage();
  toggleCart();
}

// ========================================
// Customer Chat Widget (Bidirectional via localStorage)
// ========================================

const chatHistoryKey = "omnidistChatHistory";
const currentChatAuthor = "cliente";
let _chatPollInterval = null;

function getChatHistory() {
  try {
    const raw = localStorage.getItem(chatHistoryKey);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveChatHistory(history) {
  localStorage.setItem(chatHistoryKey, JSON.stringify(history));
}

function renderChatHistory() {
  const chatMessages = document.getElementById("chatMessages");
  if (!chatMessages) return;
  const history = getChatHistory();
  chatMessages.innerHTML = history
    .map((entry) => {
      const role = entry.author === "cliente" ? "user" : "agent";
      const authorLabel = entry.author === "cliente" ? "" :
        (entry.author === "administrador" ? "Admin" : 
         (entry.author === "empleado" ? "Empleado" : "Soporte"));
      const labelHtml = authorLabel ? `<small style="opacity:0.7;font-size:11px;">${authorLabel}</small>` : "";
      return `<div class="chat-bubble ${role}">${labelHtml}<p>${entry.message}</p></div>`;
    })
    .join("");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addChatMessage(author, message) {
  const history = getChatHistory();
  const newEntry = {
    author,
    message,
    time: new Date().toISOString(),
  };

  if (author === "cliente") {
    newEntry.readBy = { administrador: false, empleado: false };
  }

  history.push(newEntry);
  saveChatHistory(history);
  renderChatHistory();
}

function toggleChat() {
  const chatPanel = document.getElementById("chatPanel");
  if (!chatPanel) return;
  renderChatHistory();
  chatPanel.classList.toggle("active");

  // Start polling when chat is open to catch admin/employee replies
  if (chatPanel.classList.contains("active")) {
    startChatPolling();
  } else {
    stopChatPolling();
  }
}

function startChatPolling() {
  stopChatPolling();
  _chatPollInterval = setInterval(function () {
    renderChatHistory();
  }, 1500); // Poll every 1.5 seconds
}

function stopChatPolling() {
  if (_chatPollInterval) {
    clearInterval(_chatPollInterval);
    _chatPollInterval = null;
  }
}

function startNewChat() {
  saveChatHistory([]);
  renderChatHistory();
  const chatPanel = document.getElementById("chatPanel");
  if (chatPanel) chatPanel.classList.add("active");
  addChatMessage("agent", "Nuevo chat iniciado. ¿En qué puedo ayudarte?");
  startChatPolling();
}

function sendChatMessage(e) {
  e.preventDefault();
  const chatInput = document.getElementById("chatInput");
  if (!chatInput) return;
  const message = chatInput.value.trim();
  if (!message) return;

  addChatMessage(currentChatAuthor, message);
  chatInput.value = "";
}

// ========================================
// Newsletter
// ========================================

function subscribeNewsletter(e) {
  e.preventDefault();
  const email = e.target.querySelector("input").value;

  if (email) {
    showToast("¡Te has suscrito al newsletter!", "success");
    e.target.reset();
  }
}

// Carga los productos desde el backend.
async function loadProductsFromBackend() {
  try {
    products = await getProductsFromBackend();
    renderProductsTable();
    document.getElementById("totalProducts").textContent = products.length;
  } catch (error) {
    console.error("Backend no disponible:", error);
    showToast("No se pudo conectar con el backend", "error");
  }
}

// ========================================
// Initialize - All DOM-dependent code inside DOMContentLoaded
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("OmniDist Tech - Website Loaded");
  loadProductsFromBackend();

  // ---- Dashboard navigation ----
  document.querySelectorAll(".dashboard-nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = this.getAttribute("data-section");

      // Update active nav link
      this.parentElement
        .querySelectorAll(".dashboard-nav-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Show corresponding section
      const dashboard = this.closest(".dashboard");
      if (dashboard) {
        dashboard
          .querySelectorAll(".dashboard-section")
          .forEach((s) => s.classList.remove("active"));
        const target = dashboard.querySelector(`#${section}`);
        if (target) target.classList.add("active");
      }
    });
  });

  // ---- Cart Event Listeners ----
  const cartBtn = document.getElementById("cartBtn");
  const cartClose = document.getElementById("cartClose");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartSidebar = document.getElementById("cartSidebar");

  if (cartBtn) {
    cartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleCart();
    });
  }
  if (cartClose) cartClose.addEventListener("click", toggleCart);
  if (cartOverlay) cartOverlay.addEventListener("click", toggleCart);

  // Close cart with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && cartSidebar && cartSidebar.classList.contains("active")) {
      toggleCart();
    }
  });

  // ---- Chat Event Listeners ----
  const chatLauncher = document.getElementById("chatLauncher");
  const chatCloseBtn = document.getElementById("chatClose");
  const chatNewBtn = document.getElementById("chatNew");
  const chatForm = document.getElementById("chatForm");

  if (chatLauncher) {
    chatLauncher.addEventListener("click", function () {
      toggleChat();
      const chatMessages = document.getElementById("chatMessages");
      if (chatMessages && !chatMessages.innerHTML.trim()) {
        addChatMessage(
          "agent",
          "Hola, gracias por escribir. Nuestro equipo te responderá pronto.",
        );
      }
    });
  }

  if (chatNewBtn) {
    chatNewBtn.addEventListener("click", startNewChat);
  }

  if (chatCloseBtn) {
    chatCloseBtn.addEventListener("click", function () {
      const chatPanel = document.getElementById("chatPanel");
      if (!chatPanel) return;
      chatPanel.classList.remove("active");
      stopChatPolling();
    });
  }

  if (chatForm) {
    chatForm.addEventListener("submit", sendChatMessage);
  }

  // Cross-tab sync via storage event
  window.addEventListener("storage", function (event) {
    if (event.key === chatHistoryKey) {
      renderChatHistory();
    }
  });

  // ---- Contact Form ----
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Add contact message to shared chat history so admin/employee can respond
      addChatMessage(
        "cliente",
        `Contacto: ${subject} - ${name} (${email}): ${message}`,
      );

      showToast(`¡Gracias ${name}! Tu mensaje ha sido enviado`, "success");

      // Reset form
      contactForm.reset();
    });
  }

  // ---- Mobile Menu ----
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
      const icon = this.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    // Close menu when clicking a nav link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
      });
    });
  }

  // ---- Smooth Scroll for Navigation ----
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const header = document.querySelector(".header");
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ---- Header Scroll Effect ----
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (header) {
      if (window.scrollY > 50) {
        header.style.background = "rgba(15, 23, 42, 0.98)";
      } else {
        header.style.background = "rgba(15, 23, 42, 0.95)";
      }
    }
  });

  // ---- Active Navigation Link on Scroll ----
  const sections = document.querySelectorAll("section[id]");

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavOnScroll);

  // ---- Product Card Animation on Scroll ----
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".product-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // ---- Add quantity controls styles dynamically ----
  const quantityStyles = document.createElement("style");
  quantityStyles.textContent = `
        .quantity-controls {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 8px;
        }
        .quantity-controls button {
            width: 24px;
            height: 24px;
            background: var(--light);
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: var(--dark);
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .quantity-controls button:hover {
            background: var(--primary);
            color: var(--white);
            border-color: var(--primary);
        }
        .quantity-controls span {
            font-size: 14px;
            font-weight: 600;
            min-width: 20px;
            text-align: center;
        }
    `;
  document.head.appendChild(quantityStyles);

  // ---- Initial render ----
  updateCart();
  renderChatHistory();
});
