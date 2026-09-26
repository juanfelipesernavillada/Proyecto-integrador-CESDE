package com.omnidist.tech.service;

import com.omnidist.tech.model.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Long id);
    Product createProduct(Product product);
    Optional<Product> updateProduct(Long id, Product product);
    boolean deleteProduct(Long id);
}
