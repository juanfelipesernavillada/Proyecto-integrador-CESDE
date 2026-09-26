// ========================================
// Admin Panel JavaScript - OmniDist Tech
// ========================================

// ========================================
// Data
// ========================================

const users = {
  "admin@omnidist.com": { password: "admin123", name: "Administrador" },
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
    description: "Consola de siguiente generación con SSD ultra-rápido",
  },
  {
    id: 2,
    name: "Xbox Series X",
    category: "consolas",
    price: 499.99,
    stock: 12,
    description: "Potencia máxima con 12 TFLOPS",
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    category: "consolas",
    price: 349.99,
    stock: 20,
    description: "Pantalla OLED de 7 pulgadas",
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
    description: "Chip A17 Pro, cámara 48MP",
  },
  {
    id: 6,
    name: "Samsung Galaxy Tab S9",
    category: "dispositivos",
    price: 849.99,
    stock: 7,
    description: "Pantalla Dynamic AMOLED 2X",
  },
  {
    id: 7,
    name: "Apple Watch Ultra 2",
    category: "dispositivos",
    price: 799.99,
    stock: 14,
    description: "Hasta 36 horas de batería",
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    category: "dispositivos",
    price: 349.99,
    stock: 25,
    description: "Cancelación de ruido líder",
  },
  {
    id: 9,
    name: "MacBook Pro M3",
    category: "herramientas",
    price: 1999.99,
    stock: 5,
    description: "Chip M3 Pro, 18GB RAM",
  },
  {
    id: 10,
    name: "Dell XPS 15",
    category: "herramientas",
    price: 1799.99,
    stock: 6,
    description: "Intel Core i7, RTX 4050",
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
    description: "Realidad mixta 128GB",
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
  {
    id: 4,
    name: "Ana Martínez",
    email: "ana@omnidist.com",
    phone: "+1 555-0104",
    position: "gerente",
  },
];

// Orders Data
let orders = [
  {
    id: 1,
    customer: "Roberto Sánchez",
    email: "roberto@email.com",
    phone: "+1 555-1001",
    items: [{ name: "PlayStation 5", quantity: 1, price: 499.99 }],
    total: 499.99,
    status: "pending",
    date: "2026-04-22",
  },
  {
    id: 2,
    customer: "Laura Mendoza",
    email: "laura@email.com",
    phone: "+1 555-1002",
    items: [{ name: "Samsung Galaxy Tab S9", quantity: 1, price: 849.99 }],
    total: 849.99,
    status: "processing",
    date: "2026-04-21",
  },
  {
    id: 3,
    customer: "Miguel Torres",
    email: "miguel@email.com",
    phone: "+1 555-1003",
    items: [{ name: "iPhone 15 Pro Max", quantity: 1, price: 1199.99 }],
    total: 1199.99,
    status: "shipped",
    date: "2026-04-20",
  },
  {
    id: 4,
    customer: "Sofia Ramírez",
    email: "sofia@email.com",
    phone: "+1 555-1004",
    items: [{ name: "Nintendo Switch OLED", quantity: 2, price: 349.99 }],
    total: 699.98,
    status: "delivered",
    date: "2026-04-18",
  },
  {
    id: 5,
    customer: "Diego Hernández",
    email: "diego@email.com",
    phone: "+1 555-1005",
    items: [{ name: "MacBook Pro M3", quantity: 1, price: 1999.99 }],
    total: 1999.99,
    status: "cancelled",
    date: "2026-04-17",
  },
  {
    id: 6,
    customer: "Carmen López",
    email: "carmen@email.com",
    phone: "+1 555-1006",
    items: [
      { name: "Sony WH-1000XM5", quantity: 2, price: 349.99 },
      { name: "Meta Quest 3", quantity: 1, price: 549.99 },
    ],
    total: 1249.97,
    status: "pending",
    date: "2026-04-22",
  },
  {
    id: 7,
    customer: "Pedro Gómez",
    email: "pedro@email.com",
    phone: "+1 555-1007",
    items: [{ name: "Dell XPS 15", quantity: 1, price: 1799.99 }],
    total: 1799.99,
    status: "processing",
    date: "2026-04-21",
  },
];

// Customers Data (derived from orders)
let customers = [
  {
    name: "Roberto Sánchez",
    email: "roberto@email.com",
    phone: "+1 555-1001",
    orders: 1,
    total: 499.99,
    lastOrder: "2026-04-22",
  },
  {
    name: "Laura Mendoza",
    email: "laura@email.com",
    phone: "+1 555-1002",
    orders: 1,
    total: 849.99,
    lastOrder: "2026-04-21",
  },
  {
    name: "Miguel Torres",
    email: "miguel@email.com",
    phone: "+1 555-1003",
    orders: 1,
    total: 1199.99,
    lastOrder: "2026-04-20",
  },
  {
    name: "Sofia Ramírez",
    email: "sofia@email.com",
    phone: "+1 555-1004",
    orders: 1,
    total: 699.98,
    lastOrder: "2026-04-18",
  },
  {
    name: "Diego Hernández",
    email: "diego@email.com",
    phone: "+1 555-1005",
    orders: 1,
    total: 1999.99,
    lastOrder: "2026-04-17",
  },
  {
    name: "Carmen López",
    email: "carmen@email.com",
    phone: "+1 555-1006",
    orders: 1,
    total: 1249.97,
    lastOrder: "2026-04-22",
  },
  {
    name: "Pedro Gómez",
    email: "pedro@email.com",
    phone: "+1 555-1007",
    orders: 1,
    total: 1799.99,
    lastOrder: "2026-04-21",
  },
];

// ========================================
// Authentication
// ========================================

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (users[email] && users[email].password === password) {
    currentUser = { email, ...users[email] };
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("adminDashboard").classList.add("active");
    document.getElementById("adminName").textContent = currentUser.name;
    loadDashboardData();
    showToast("Bienvenido al panel de administración", "success");
  } else {
    showToast("Credenciales incorrectas", "error");
  }
}

function logout() {
  currentUser = null;
  document.getElementById("adminDashboard").classList.remove("active");
  document.getElementById("adminLogin").style.display = "flex";
  document.getElementById("loginForm").reset();
  showToast("Sesión cerrada", "success");
}

// ========================================
// Navigation
// ========================================

function navigateTo(page) {
  // Update nav items
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-page") === page) {
      item.classList.add("active");
    }
  });

  // Update pages
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });
  document.getElementById(`page-${page}`).classList.add("active");

  // Load page data
  if (page === "products") renderProducts();
  if (page === "orders") renderOrders();
  if (page === "employees") renderEmployees();
  if (page === "customers") renderCustomers();
}

// Add click handlers to nav items
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const page = this.getAttribute("data-page");
    navigateTo(page);
  });
});

// ========================================
// Dashboard Data
// ========================================

async function loadDashboardData() {
  try {
    products = await getProductsFromBackend();
  } catch (error) {
    console.error("Backend no disponible:", error);
  }
  // Update stats
  document.getElementById("statOrders").textContent = orders.length;
  document.getElementById("statRevenue").textContent =
    "$" + orders.reduce((sum, o) => sum + o.total, 0).toFixed(2);
  document.getElementById("statProducts").textContent = products.length;
  document.getElementById("statCustomers").textContent = customers.length;

  // Render recent orders
  renderRecentOrders();
}

function renderRecentOrders() {
  const tbody = document.getElementById("recentOrdersTable");
  const recentOrders = orders.slice(-5).reverse();

  tbody.innerHTML = recentOrders
    .map(
      (order) => `
    <tr>
      <td>#${order.id}</td>
      <td>${order.customer}</td>
      <td>$${order.total.toFixed(2)}</td>
      <td><span class="status-badge status-${order.status}">${getStatusLabel(order.status)}</span></td>
      <td>${order.date}</td>
    </tr>
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

function getPositionLabel(position) {
  const labels = {
    vendedor: "Vendedor",
    soporte: "Soporte Técnico",
    almacenista: "Almacenista",
    gerente: "Gerente",
  };
  return labels[position] || position;
}

// ========================================
// Products Management
// ========================================

function renderProducts() {
  const tbody = document.getElementById("productsTable");
  const searchTerm = document
    .getElementById("productSearch")
    .value.toLowerCase();
  const categoryFilter = document.getElementById("categoryFilter").value;

  let filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm);
    const matchesCategory =
      categoryFilter === "all" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  tbody.innerHTML = filtered
    .map(
      (product) => `
    <tr>
      <td>
        <strong>${product.name}</strong>
        <br><small style="color: var(--gray)">${product.description || ""}</small>
      </td>
      <td><span class="category-badge">${product.category}</span></td>
      <td>$${product.price.toFixed(2)}</td>
      <td>
        <span style="color: ${product.stock < 10 ? "var(--danger)" : "var(--dark)"}">${product.stock}</span>
      </td>
      <td>
        <div class="action-btns">
          <button class="btn-action" onclick="editProduct(${product.id})" title="Editar">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-action danger" onclick="deleteProduct(${product.id})" title="Eliminar">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `,
    )
    .join("");
}

function filterProducts() {
  renderProducts();
}

function showProductModal(product = null) {
  const modal = document.getElementById("productModal");
  const title = document.getElementById("productModalTitle");
  const form = document.getElementById("productForm");

  if (product) {
    title.textContent = "Editar Producto";
    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productStock").value = product.stock;
    document.getElementById("productDesc").value = product.description || "";
  } else {
    title.textContent = "Nuevo Producto";
    form.reset();
    document.getElementById("productId").value = "";
  }

  modal.classList.add("active");
}

function editProduct(id) {
  const product = products.find((p) => p.id === id);
  if (product) showProductModal(product);
}

async function saveProduct(e) {
  e.preventDefault();
  const id = document.getElementById("productId").value;
  const productData = {
    name: document.getElementById("productName").value,
    category: document.getElementById("productCategory").value,
    price: parseFloat(document.getElementById("productPrice").value),
    stock: parseInt(document.getElementById("productStock").value),
    description: document.getElementById("productDesc").value,
  };

  try {
    if (id) {
      const updated = await updateProductInBackend(parseInt(id), productData);
      const index = products.findIndex((p) => p.id === parseInt(id));
      if (index !== -1) products[index] = updated;
      showToast("Producto actualizado en el backend", "success");
    } else {
      const created = await createProductInBackend(productData);
      products.push(created);
      showToast("Producto creado en el backend", "success");
    }

    closeProductModal();
    renderProducts();
    document.getElementById("statProducts").textContent = products.length;
  } catch (error) {
    console.error(error);
    showToast("Error al guardar el producto", "error");
  }
}

async function deleteProduct(id) {
  if (!confirm("¿Estás seguro de eliminar este producto?")) return;

  try {
    await deleteProductFromBackend(id);
    products = products.filter((p) => p.id !== id);
    renderProducts();
    document.getElementById("statProducts").textContent = products.length;
    showToast("Producto eliminado del backend", "success");
  } catch (error) {
    console.error(error);
    showToast("Error al eliminar el producto", "error");
  }
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
}

// ========================================
// Orders Management
// ========================================

function renderOrders() {
  const tbody = document.getElementById("ordersTable");
  const searchTerm = document.getElementById("orderSearch").value.toLowerCase();
  const statusFilter = document.getElementById("orderStatusFilter").value;

  let filtered = orders.filter((o) => {
    const matchesSearch =
      o.customer.toLowerCase().includes(searchTerm) ||
      o.id.toString().includes(searchTerm);
    const matchesStatus = statusFilter === "all" || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  tbody.innerHTML = filtered
    .map(
      (order) => `
    <tr>
      <td>#${order.id}</td>
      <td>
        <strong>${order.customer}</strong>
        <br><small style="color: var(--gray)">${order.email}</small>
      </td>
      <td>${order.items.length} item(s)</td>
      <td>$${order.total.toFixed(2)}</td>
      <td>
        <select class="status-select" onchange="updateOrderStatus(${order.id}, this.value)" style="padding: 6px 10px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px;">
          <option value="pending" ${order.status === "pending" ? "selected" : ""}>Pendiente</option>
          <option value="processing" ${order.status === "processing" ? "selected" : ""}>Procesando</option>
          <option value="shipped" ${order.status === "shipped" ? "selected" : ""}>Enviado</option>
          <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Entregado</option>
          <option value="cancelled" ${order.status === "cancelled" ? "selected" : ""}>Cancelado</option>
        </select>
      </td>
      <td>${order.date}</td>
      <td>
        <div class="action-btns">
          <button class="btn-action" onclick="viewOrder(${order.id})" title="Ver detalles">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </td>
    </tr>
  `,
    )
    .join("");
}

function filterOrders() {
  renderOrders();
}

function updateOrderStatus(orderId, status) {
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = status;
    renderOrders();
    renderRecentOrders();
    showToast("Estado actualizado", "success");
  }
}

function viewOrder(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (!order) return;

  document.getElementById("orderDetailId").textContent = order.id;

  const itemsHtml = order.items
    .map(
      (item) => `
    <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
      <div>
        <strong>${item.name}</strong>
        <br><small style="color: var(--gray)">Cantidad: ${item.quantity}</small>
      </div>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `,
    )
    .join("");

  document.getElementById("orderDetailContent").innerHTML = `
    <div style="padding: 24px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
        <div>
          <h4 style="color: var(--gray); font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Cliente</h4>
          <p><strong>${order.customer}</strong></p>
          <p style="color: var(--gray)">${order.email}</p>
          <p style="color: var(--gray)">${order.phone}</p>
        </div>
        <div>
          <h4 style="color: var(--gray); font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Estado</h4>
          <span class="status-badge status-${order.status}">${getStatusLabel(order.status)}</span>
          <p style="color: var(--gray); margin-top: 8px;">${order.date}</p>
        </div>
      </div>
      
      <h4 style="margin-bottom: 12px;">Items del Pedido</h4>
      ${itemsHtml}
      
      <div style="display: flex; justify-content: space-between; padding: 16px 0; border-top: 2px solid var(--dark); margin-top: 16px;">
        <strong>Total</strong>
        <strong style="font-size: 18px;">$${order.total.toFixed(2)}</strong>
      </div>
    </div>
  `;

  document.getElementById("orderModal").classList.add("active");
}

function closeOrderModal() {
  document.getElementById("orderModal").classList.remove("active");
}

// ========================================
// Employees Management
// ========================================

function renderEmployees() {
  const grid = document.getElementById("employeesGrid");

  grid.innerHTML = employees
    .map(
      (emp) => `
    <div class="employee-card">
      <div class="employee-avatar-lg">
        <i class="fas fa-user"></i>
      </div>
      <div class="employee-info">
        <h4>${emp.name}</h4>
        <p class="employee-position">${getPositionLabel(emp.position)}</p>
        <p class="employee-contact">${emp.email}</p>
        <p class="employee-contact">${emp.phone}</p>
      </div>
      <div class="employee-actions">
        <button class="btn-action" onclick="editEmployee(${emp.id})" title="Editar">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-action danger" onclick="deleteEmployee(${emp.id})" title="Eliminar">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `,
    )
    .join("");
}

function showEmployeeModal(employee = null) {
  const modal = document.getElementById("employeeModal");
  const form = document.getElementById("employeeForm");

  if (employee) {
    document.getElementById("employeeId").value = employee.id;
    document.getElementById("employeeName").value = employee.name;
    document.getElementById("employeeEmail").value = employee.email;
    document.getElementById("employeePhone").value = employee.phone;
    document.getElementById("employeePosition").value = employee.position;
  } else {
    form.reset();
    document.getElementById("employeeId").value = "";
  }

  modal.classList.add("active");
}

function editEmployee(id) {
  const employee = employees.find((e) => e.id === id);
  if (employee) showEmployeeModal(employee);
}

function saveEmployee(e) {
  e.preventDefault();
  const id = document.getElementById("employeeId").value;
  const employeeData = {
    name: document.getElementById("employeeName").value,
    email: document.getElementById("employeeEmail").value,
    phone: document.getElementById("employeePhone").value,
    position: document.getElementById("employeePosition").value,
  };

  if (id) {
    const index = employees.findIndex((e) => e.id === parseInt(id));
    if (index !== -1) {
      employees[index] = { ...employees[index], ...employeeData };
      showToast("Empleado actualizado", "success");
    }
  } else {
    employeeData.id = employees.length + 1;
    employees.push(employeeData);
    showToast("Empleado agregado", "success");
  }

  closeEmployeeModal();
  renderEmployees();
}

function deleteEmployee(id) {
  if (confirm("¿Estás seguro de eliminar este empleado?")) {
    employees = employees.filter((e) => e.id !== id);
    renderEmployees();
    showToast("Empleado eliminado", "success");
  }
}

function closeEmployeeModal() {
  document.getElementById("employeeModal").classList.remove("active");
}

// ========================================
// Customers
// ========================================

function renderCustomers() {
  const tbody = document.getElementById("customersTable");

  tbody.innerHTML = customers
    .map(
      (customer) => `
    <tr>
      <td><strong>${customer.name}</strong></td>
      <td>${customer.email}</td>
      <td>${customer.phone}</td>
      <td>${customer.orders}</td>
      <td>$${customer.total.toFixed(2)}</td>
      <td>${customer.lastOrder}</td>
    </tr>
  `,
    )
    .join("");
}

// ========================================
// Customer Chat Widget
// ========================================

const chatHistoryKey = "omnidistChatHistory";
const chatLauncher = document.getElementById("chatLauncher");
const chatPanel = document.getElementById("chatPanel");
const chatCloseBtn = document.getElementById("chatClose");
const chatNewBtn = document.getElementById("chatNew");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const currentChatAuthor = "administrador";
const unreadStorageKey = `omnidistChatUnread_${currentChatAuthor}`;

function getChatHistory() {
  const raw = localStorage.getItem(chatHistoryKey);
  return raw ? JSON.parse(raw) : [];
}

function saveChatHistory(history) {
  localStorage.setItem(chatHistoryKey, JSON.stringify(history));
}

function normalizeHistory(history) {
  return history.map((entry) => {
    if (entry.author === "cliente") {
      return {
        ...entry,
        readBy: {
          administrador: entry.readBy?.administrador || false,
          empleado: entry.readBy?.empleado || false,
        },
      };
    }
    return entry;
  });
}

function getClientUnreadCount(history = null) {
  const parsed = history
    ? normalizeHistory(history)
    : normalizeHistory(getChatHistory());
  return parsed.filter(
    (entry) => entry.author === "cliente" && !entry.readBy?.[currentChatAuthor],
  ).length;
}

function saveUnreadCount(count) {
  localStorage.setItem(unreadStorageKey, count.toString());
}

function updateChatBadge() {
  if (!chatLauncher) return;
  const unread = getClientUnreadCount();
  if (unread > 0) {
    chatLauncher.dataset.unread = unread > 99 ? "99+" : unread.toString();
  } else {
    delete chatLauncher.dataset.unread;
  }
}

function markChatAsRead() {
  const history = normalizeHistory(getChatHistory());
  let changed = false;

  const updated = history.map((entry) => {
    if (entry.author === "cliente" && !entry.readBy?.[currentChatAuthor]) {
      changed = true;
      return {
        ...entry,
        readBy: {
          ...entry.readBy,
          [currentChatAuthor]: true,
        },
      };
    }
    return entry;
  });

  if (changed) {
    saveChatHistory(updated);
  }

  const unread = getClientUnreadCount(updated);
  saveUnreadCount(unread);
  updateChatBadge();
}

function renderChatHistory() {
  if (!chatMessages) return;
  const history = normalizeHistory(getChatHistory());
  chatMessages.innerHTML = history
    .map((entry) => {
      const role = entry.author === "cliente" ? "user" : "agent";
      return `<div class="chat-bubble ${role}"><p>${entry.message}</p></div>`;
    })
    .join("");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addChatMessage(author, message) {
  const history = normalizeHistory(getChatHistory());
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
  if (!chatPanel) return;
  renderChatHistory();
  chatPanel.classList.toggle("active");
  if (chatPanel.classList.contains("active")) {
    markChatAsRead();
  }
}

function startNewChat() {
  saveChatHistory([]);
  renderChatHistory();
  chatPanel.classList.add("active");
  addChatMessage(
    "administrador",
    "Nuevo chat iniciado. Responde al cliente aquí.",
  );
}

function sendChatMessage(e) {
  e.preventDefault();
  if (!chatInput) return;
  const message = chatInput.value.trim();
  if (!message) return;

  addChatMessage(currentChatAuthor, message);
  chatInput.value = "";
}

if (chatLauncher) {
  chatLauncher.addEventListener("click", function () {
    toggleChat();
    if (chatMessages && !chatMessages.innerHTML.trim()) {
      addChatMessage(
        "agent",
        "Hola, estás conectado con un cliente. Escribe aquí para responderle.",
      );
    }
  });
}

if (chatNewBtn) {
  chatNewBtn.addEventListener("click", startNewChat);
}

if (chatCloseBtn) {
  chatCloseBtn.addEventListener("click", function () {
    if (!chatPanel) return;
    chatPanel.classList.remove("active");
  });
}

if (chatForm) {
  chatForm.addEventListener("submit", sendChatMessage);
}

function handleChatStorageChange(event) {
  if (event.key !== chatHistoryKey) return;

  const newHistory = normalizeHistory(JSON.parse(event.newValue || "[]"));
  const oldHistory = normalizeHistory(JSON.parse(event.oldValue || "[]"));

  renderChatHistory();
  const newUnread = getClientUnreadCount(newHistory);
  const oldUnread = getClientUnreadCount(oldHistory);
  saveUnreadCount(newUnread);
  updateChatBadge();

  if (
    newUnread > oldUnread &&
    (!chatPanel || !chatPanel.classList.contains("active"))
  ) {
    showToast("Nuevo mensaje de cliente", "success");
  }
}

window.addEventListener("storage", handleChatStorageChange);

renderChatHistory();
updateChatBadge();

// ========================================
// Toast Notifications
// ========================================

function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icons = {
    success: "check-circle",
    error: "exclamation-circle",
    warning: "warning",
  };

  toast.innerHTML = `
    <i class="fas fa-${icons[type]}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastSlide 0.3s ease reverse";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add toast animation
const style = document.createElement("style");
style.textContent = `
  @keyframes toastSlide {
    from { opacity: 0; transform: translateX(100%); }
    to { opacity: 1; transform: translateX(0); }
  }
`;
document.head.appendChild(style);

// ========================================
// Initialize
// ========================================

// Check if already logged in (session persistence would go here)
// For now, show login by default
document.getElementById("adminLogin").style.display = "flex";
