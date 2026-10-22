package app.service.helpers;

import app.domain.enums.CategoryEnum;
import app.service.validations.FormTypeValidator;

/** Helper that maps a validated menu option to the selected product category. */
public final class SetCategory {
    private SetCategory() { }

    public static String getCategory(FormTypeValidator input) {
        System.out.println("Seleccione la categoría:");
        System.out.println("1. " + CategoryEnum.GAMING.getValue());
        System.out.println("2. " + CategoryEnum.ELECTRONICS.getValue());
        System.out.println("3. " + CategoryEnum.SOFTWARE_HARDWARE.getValue());
        int option = input.readInt("Opción:", 1, 3);
        return switch (option) {
            case 1 -> CategoryEnum.GAMING.getValue();
            case 2 -> CategoryEnum.ELECTRONICS.getValue();
            case 3 -> CategoryEnum.SOFTWARE_HARDWARE.getValue();
            default -> throw new IllegalStateException("Categoría no válida después de validar la opción.");
        };
    }
}
