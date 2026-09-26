// Comunicacion sencilla entre el frontend y el backend.
const API_URL = window.location.port === "8080" || window.location.port === ""
  ? "/api"
  : "http://localhost:8080/api";

async function getProductsFromBackend() {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error("No se pudieron cargar los productos");
  return response.json();
}

async function createProductInBackend(product) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("No se pudo crear el producto");
  return response.json();
}

async function updateProductInBackend(id, product) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("No se pudo actualizar el producto");
  return response.json();
}

async function deleteProductFromBackend(id) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("No se pudo eliminar el producto");
}
