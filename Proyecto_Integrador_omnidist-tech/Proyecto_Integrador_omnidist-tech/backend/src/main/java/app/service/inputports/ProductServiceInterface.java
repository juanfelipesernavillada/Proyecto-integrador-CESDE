package app.service.inputports;

import app.domain.Product;
import java.util.List;
import java.util.Optional;

/** Input port exposing product use cases to the CLI view. */
public interface ProductServiceInterface {
    Product createProduct(String name, String description, double price, int stock, String category);
    List<Product> selectAllProducts();
    Optional<Product> findProductById(int id);
    Optional<Product> updateProduct(int id, String name, String description, double price, int stock, String category);
    boolean deleteProduct(int id);
}
