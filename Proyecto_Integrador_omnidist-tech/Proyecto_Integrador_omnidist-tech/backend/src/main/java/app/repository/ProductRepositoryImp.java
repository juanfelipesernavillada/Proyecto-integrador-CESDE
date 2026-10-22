package app.repository;

import app.domain.Product;
import app.service.outputports.ProductRepositoryPort;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/** In-memory adapter implementing CRUD with an ArrayList-backed List. */
public class ProductRepositoryImp implements ProductRepositoryPort {
    private final List<Product> products = new ArrayList<>();
    private int nextId = 13;

    public ProductRepositoryImp() {
        products.add(new Product(1, "PlayStation 5", "Consola de siguiente generación con SSD ultra-rápido y gráficos 4K", 499.99, 10, "Gaming / Consolas"));
        products.add(new Product(2, "Xbox Series X", "Potencia máxima con 12 TFLOPS y compatibilidad hacia atrás", 499.99, 8, "Gaming / Consolas"));
        products.add(new Product(3, "Nintendo Switch OLED", "Pantalla OLED de 7 pulgadas con colores vibrantes y audio mejorado", 349.99, 15, "Gaming / Consolas"));
        products.add(new Product(4, "Steam Deck", "Gaming PC portátil con pantalla de 7 pulgadas y controles integrados", 399.99, 5, "Gaming / Consolas"));
        products.add(new Product(5, "iPhone 15 Pro Max", "Chip A17 Pro, cámara de 48MP y titanio aeroespacial", 1199.99, 12, "Dispositivos Electrónicos"));
        products.add(new Product(6, "Samsung Galaxy Tab S9", "Pantalla Dynamic AMOLED 2X de 11 pulgadas con S Pen incluido", 849.99, 7, "Dispositivos Electrónicos"));
        products.add(new Product(7, "Apple Watch Ultra 2", "Pantalla Retina, GPS dual, hasta 36 horas de batería", 799.99, 9, "Dispositivos Electrónicos"));
        products.add(new Product(8, "Sony WH-1000XM5", "Cancelación de ruido líder con 30h de batería", 349.99, 20, "Dispositivos Electrónicos"));
        products.add(new Product(9, "MacBook Pro M3", "Chip M3 Pro, 18GB RAM, SSD 512GB", 1999.99, 4, "Software & Hardware"));
        products.add(new Product(10, "Dell XPS 15", "Intel Core i7, 32GB RAM, RTX 4050, pantalla 3.5K OLED", 1799.99, 6, "Software & Hardware"));
        products.add(new Product(11, "Impresora 3D Creality K1", "Velocidad 600mm/s, auto-nivelación, doble extrusor", 599.99, 11, "Software & Hardware"));
        products.add(new Product(12, "Meta Quest 3", "Realidad mixta, resolución 2064x2208 por ojo, 128GB", 549.99, 14, "Software & Hardware"));
    }

    @Override
    public Product saveProduct(Product product) {
        product.setId(nextId++);
        products.add(product);
        return product;
    }

    @Override
    public List<Product> selectAllProducts() {
        return new ArrayList<>(products);
    }

    @Override
    public Optional<Product> selectProductById(int id) {
        return products.stream().filter(product -> product.getId() == id).findFirst();
    }

    @Override
    public Optional<Product> updateProduct(int id, Product updatedProduct) {
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == id) {
                updatedProduct.setId(id);
                products.set(i, updatedProduct);
                return Optional.of(updatedProduct);
            }
        }
        return Optional.empty();
    }

    @Override
    public boolean deleteProduct(int id) {
        return products.removeIf(product -> product.getId() == id);
    }
}
