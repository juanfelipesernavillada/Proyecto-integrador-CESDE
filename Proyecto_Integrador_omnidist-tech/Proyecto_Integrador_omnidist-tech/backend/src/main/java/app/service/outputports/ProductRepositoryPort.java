package app.service.outputports;

import app.domain.Product;
import java.util.List;
import java.util.Optional;

/** Output port for the CLI product repository. */
public interface ProductRepositoryPort {
    Product saveProduct(Product product);
    List<Product> selectAllProducts();
    Optional<Product> selectProductById(int id);
    Optional<Product> updateProduct(int id, Product product);
    boolean deleteProduct(int id);
}
