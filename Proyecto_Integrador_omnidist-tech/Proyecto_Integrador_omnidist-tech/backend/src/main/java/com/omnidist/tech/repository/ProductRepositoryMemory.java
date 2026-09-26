package com.omnidist.tech.repository;

import com.omnidist.tech.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class ProductRepositoryMemory implements ProductRepository {
    private final List<Product> products = new ArrayList<>();
    private long nextId = 13;

    public ProductRepositoryMemory() {
        products.add(new Product(1L, "PlayStation 5", "consolas", 499.99, 15, "Consola de siguiente generación"));
        products.add(new Product(2L, "Xbox Series X", "consolas", 499.99, 12, "Potencia máxima"));
        products.add(new Product(3L, "Nintendo Switch OLED", "consolas", 349.99, 20, "Pantalla OLED"));
        products.add(new Product(4L, "Steam Deck", "consolas", 399.99, 8, "Gaming PC portátil"));
        products.add(new Product(5L, "iPhone 15 Pro Max", "dispositivos", 1199.99, 10, "Chip A17 Pro"));
        products.add(new Product(6L, "Samsung Galaxy Tab S9", "dispositivos", 849.99, 7, "Pantalla Dynamic AMOLED"));
        products.add(new Product(7L, "Apple Watch Ultra 2", "dispositivos", 799.99, 14, "GPS dual"));
        products.add(new Product(8L, "Sony WH-1000XM5", "dispositivos", 349.99, 25, "Cancelación de ruido"));
        products.add(new Product(9L, "MacBook Pro M3", "herramientas", 1999.99, 5, "Chip M3 Pro"));
        products.add(new Product(10L, "Dell XPS 15", "herramientas", 1799.99, 6, "RTX 4050"));
        products.add(new Product(11L, "Impresora 3D Creality K1", "herramientas", 599.99, 4, "Velocidad 600mm/s"));
        products.add(new Product(12L, "Meta Quest 3", "herramientas", 549.99, 9, "Realidad mixta"));
    }

    @Override
    public List<Product> findAll() {
        return new ArrayList<>(products);
    }

    @Override
    public Optional<Product> findById(Long id) {
        return products.stream().filter(product -> product.getId().equals(id)).findFirst();
    }

    @Override
    public Product save(Product product) {
        if (product.getId() == null) {
            product.setId(nextId++);
            products.add(product);
            return product;
        }

        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId().equals(product.getId())) {
                products.set(i, product);
                return product;
            }
        }

        products.add(product);
        return product;
    }

    @Override
    public void deleteById(Long id) {
        products.removeIf(product -> product.getId().equals(id));
    }
}
