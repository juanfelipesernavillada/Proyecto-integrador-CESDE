package app;

import app.repository.ProductRepositoryImp;
import app.service.ProductServiceImp;
import app.service.inputports.ProductServiceInterface;
import app.service.outputports.ProductRepositoryPort;
import app.service.validations.FormTypeValidator;
import app.ui.UserInterface;
import app.view.ProductView;

import java.util.Scanner;

/** Composition root for the Week 12 CLI exercise. */
public class Application {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        FormTypeValidator input = new FormTypeValidator(console);

        ProductRepositoryPort repository = new ProductRepositoryImp();
        ProductServiceInterface service = new ProductServiceImp(repository);
        ProductView productView = new ProductView(service, input);
        UserInterface userInterface = new UserInterface(productView, input);

        userInterface.menuApp();
    }
}
