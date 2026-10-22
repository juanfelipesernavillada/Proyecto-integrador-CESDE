package app.view;

import app.domain.Product;
import app.service.helpers.SetCategory;
import app.service.inputports.ProductServiceInterface;
import app.service.validations.FormTypeValidator;

import java.util.List;
import java.util.Optional;

/** CLI view. It gathers and presents data while delegating rules to the service. */
public class ProductView {
    private final ProductServiceInterface productService;
    private final FormTypeValidator input;

    public ProductView(ProductServiceInterface productService, FormTypeValidator input) {
        if (productService == null || input == null) {
            throw new IllegalArgumentException("Service and input validator are required.");
        }
        this.productService = productService;
        this.input = input;
    }

    public void createProduct() {
        System.out.println("\n--- Registrar producto ---");
        String name = input.readRequiredText("Nombre:");
        String description = input.readRequiredText("Descripción:");
        double price = input.readPositiveDouble("Precio (USD):");
        int stock = input.readInt("Stock (0 o más):", 0, Integer.MAX_VALUE);
        String category = SetCategory.getCategory(input);

        Product created = productService.createProduct(name, description, price, stock, category);
        System.out.println("Producto registrado correctamente. ID asignado: " + created.getId());
    }

    public void selectAllProducts() {
        List<Product> products = productService.selectAllProducts();
        System.out.println("\n=== INVENTARIO DE OMNIDIST TECH ===");
        if (products.isEmpty()) {
            System.out.println("No hay productos registrados.");
            return;
        }
        for (Product product : products) {
            printProduct(product);
        }
    }

    public void findProductById() {
        int id = input.readInt("Ingrese el ID del producto:", 1, Integer.MAX_VALUE);
        Optional<Product> product = productService.findProductById(id);
        if (product.isPresent()) {
            printProduct(product.get());
        } else {
            System.out.println("No existe un producto con el ID " + id + ".");
        }
    }

    public void updateProduct() {
        int id = input.readInt("Ingrese el ID del producto que desea actualizar:", 1, Integer.MAX_VALUE);
        Optional<Product> current = productService.findProductById(id);
        if (current.isEmpty()) {
            System.out.println("No existe un producto con el ID " + id + ".");
            return;
        }
        System.out.println("Producto actual:");
        printProduct(current.get());
        System.out.println("Ingrese los nuevos datos del producto.");

        String name = input.readRequiredText("Nuevo nombre:");
        String description = input.readRequiredText("Nueva descripción:");
        double price = input.readPositiveDouble("Nuevo precio (USD):");
        int stock = input.readInt("Nuevo stock (0 o más):", 0, Integer.MAX_VALUE);
        String category = SetCategory.getCategory(input);

        Optional<Product> updated = productService.updateProduct(id, name, description, price, stock, category);
        updated.ifPresentOrElse(
            product -> System.out.println("Producto actualizado correctamente."),
            () -> System.out.println("No fue posible actualizar el producto porque ya no existe.")
        );
    }

    public void deleteProduct() {
        int id = input.readInt("Ingrese el ID del producto que desea eliminar:", 1, Integer.MAX_VALUE);
        Optional<Product> current = productService.findProductById(id);
        if (current.isEmpty()) {
            System.out.println("No existe un producto con el ID " + id + ".");
            return;
        }
        printProduct(current.get());
        if (!input.readYesNo("¿Confirma la eliminación de este producto?")) {
            System.out.println("Eliminación cancelada.");
            return;
        }
        System.out.println(productService.deleteProduct(id)
            ? "Producto eliminado correctamente."
            : "No fue posible eliminar el producto.");
    }

    private void printProduct(Product product) {
        System.out.printf("[%s] ID: %d | %s | $%.2f | Stock: %d%n    Descripción: %s%n",
            product.getCategory(), product.getId(), product.getName(), product.getPrice(),
            product.getStock(), product.getDescription());
        System.out.println("------------------------------------------------------------");
    }
}
