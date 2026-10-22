package app.ui;

import app.service.validations.FormTypeValidator;
import app.view.ProductView;

/** CLI menu coordinator. Dependencies are supplied by App. */
public class UserInterface {
    private final ProductView productView;
    private final FormTypeValidator input;

    public UserInterface(ProductView productView, FormTypeValidator input) {
        if (productView == null || input == null) {
            throw new IllegalArgumentException("ProductView and input validator are required.");
        }
        this.productView = productView;
        this.input = input;
    }

    public void menuApp() {
        System.out.println("Iniciando aplicación CLI de OmniDist Tech...");
        menuInicio();
    }

    public void menuInicio() {
        boolean exit = false;
        while (!exit) {
            System.out.println("\n=== MENÚ PRINCIPAL ===");
            System.out.println("1. Gestionar productos tecnológicos");
            System.out.println("2. Salir");
            int option = input.readInt("Seleccione una opción:", 1, 2);
            switch (option) {
                case 1 -> menuPorFuncionalidad();
                case 2 -> {
                    System.out.println("Saliendo del sistema. ¡Hasta luego!");
                    exit = true;
                }
                default -> throw new IllegalStateException("La opción ya fue validada.");
            }
        }
    }

    /** Functional menu requested by the assignment guide. */
    public void menuPorFuncionalidad() {
        boolean back = false;
        while (!back) {
            System.out.println("\n--- MENÚ DE PRODUCTOS ---");
            System.out.println("1. Registrar producto");
            System.out.println("2. Listar inventario");
            System.out.println("3. Buscar producto por ID");
            System.out.println("4. Actualizar producto");
            System.out.println("5. Eliminar producto");
            System.out.println("6. Volver al menú principal");
            int option = input.readInt("Seleccione una opción:", 1, 6);
            switch (option) {
                case 1 -> productView.createProduct();
                case 2 -> productView.selectAllProducts();
                case 3 -> productView.findProductById();
                case 4 -> productView.updateProduct();
                case 5 -> productView.deleteProduct();
                case 6 -> back = true;
                default -> throw new IllegalStateException("La opción ya fue validada.");
            }
        }
    }

    /** Backwards-compatible method name retained from the teammate's version. */
    public void menuProducts() {
        menuPorFuncionalidad();
    }
}
