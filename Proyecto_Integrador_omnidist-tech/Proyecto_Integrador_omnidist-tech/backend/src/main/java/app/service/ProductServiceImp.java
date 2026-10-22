package app.service;

import app.domain.Product;
import app.service.inputports.ProductServiceInterface;
import app.service.outputports.ProductRepositoryPort;

import java.util.List;
import java.util.Optional;

/** Use-case layer; depends on the repository abstraction, not its implementation. */
public class ProductServiceImp implements ProductServiceInterface {
    private final ProductRepositoryPort productRepositoryPort;

    public ProductServiceImp(ProductRepositoryPort productRepositoryPort) {
        if (productRepositoryPort == null) {
            throw new IllegalArgumentException("ProductRepositoryPort cannot be null.");
        }
        this.productRepositoryPort = productRepositoryPort;
    }

    @Override
    public Product createProduct(String name, String description, double price, int stock, String category) {
        validateProductFields(name, description, price, stock, category);
        Product product = new Product(0, name.trim(), description.trim(), price, stock, category);
        return productRepositoryPort.saveProduct(product);
    }

    @Override
    public List<Product> selectAllProducts() {
        return productRepositoryPort.selectAllProducts();
    }

    @Override
    public Optional<Product> findProductById(int id) {
        if (id <= 0) return Optional.empty();
        return productRepositoryPort.selectProductById(id);
    }

    @Override
    public Optional<Product> updateProduct(int id, String name, String description, double price, int stock, String category) {
        if (id <= 0) return Optional.empty();
        validateProductFields(name, description, price, stock, category);
        Product updated = new Product(id, name.trim(), description.trim(), price, stock, category);
        return productRepositoryPort.updateProduct(id, updated);
    }

    @Override
    public boolean deleteProduct(int id) {
        return id > 0 && productRepositoryPort.deleteProduct(id);
    }

    private void validateProductFields(String name, String description, double price, int stock, String category) {
        if (name == null || name.isBlank()) throw new IllegalArgumentException("El nombre es obligatorio.");
        if (description == null || description.isBlank()) throw new IllegalArgumentException("La descripción es obligatoria.");
        if (!Double.isFinite(price) || price <= 0) throw new IllegalArgumentException("El precio debe ser positivo.");
        if (stock < 0) throw new IllegalArgumentException("El stock no puede ser negativo.");
        if (category == null || category.isBlank()) throw new IllegalArgumentException("La categoría es obligatoria.");
    }
}
