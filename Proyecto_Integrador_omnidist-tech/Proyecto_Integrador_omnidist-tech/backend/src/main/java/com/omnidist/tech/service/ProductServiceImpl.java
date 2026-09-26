package com.omnidist.tech.service;

import com.omnidist.tech.model.Product;
import com.omnidist.tech.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product createProduct(Product product) {
        product.setId(null);
        return productRepository.save(product);
    }

    @Override
    public Optional<Product> updateProduct(Long id, Product product) {
        if (productRepository.findById(id).isEmpty()) {
            return Optional.empty();
        }
        product.setId(id);
        return Optional.of(productRepository.save(product));
    }

    @Override
    public boolean deleteProduct(Long id) {
        if (productRepository.findById(id).isEmpty()) {
            return false;
        }
        productRepository.deleteById(id);
        return true;
    }
}
