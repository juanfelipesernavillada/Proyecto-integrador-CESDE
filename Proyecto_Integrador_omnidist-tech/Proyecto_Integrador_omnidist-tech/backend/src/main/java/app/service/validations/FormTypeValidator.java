package app.service.validations;

import java.util.Scanner;

/** Centralizes all console input and uses the single Scanner created by App. */
public final class FormTypeValidator {
    private final Scanner scanner;

    public FormTypeValidator(Scanner scanner) {
        if (scanner == null) {
            throw new IllegalArgumentException("Scanner cannot be null.");
        }
        this.scanner = scanner;
    }

    public String readRequiredText(String prompt) {
        while (true) {
            System.out.print(prompt + " ");
            String value = readLine();
            if (!value.isBlank()) {
                return value.trim();
            }
            System.out.println("El valor es obligatorio. Intente nuevamente.");
        }
    }

    public String readText(String prompt) {
        System.out.print(prompt + " ");
        return readLine().trim();
    }

    public int readInt(String prompt, int minInclusive, int maxInclusive) {
        while (true) {
            System.out.print(prompt + " ");
            String raw = readLine().trim();
            try {
                int value = Integer.parseInt(raw);
                if (value < minInclusive || value > maxInclusive) {
                    System.out.printf("Ingrese un entero entre %d y %d.%n", minInclusive, maxInclusive);
                    continue;
                }
                return value;
            } catch (NumberFormatException ex) {
                System.out.println("Entrada inválida: debe ingresar un número entero.");
            }
        }
    }

    public double readPositiveDouble(String prompt) {
        while (true) {
            System.out.print(prompt + " ");
            String raw = readLine().trim().replace(',', '.');
            try {
                double value = Double.parseDouble(raw);
                if (!Double.isFinite(value) || value <= 0) {
                    System.out.println("El valor debe ser un número positivo.");
                    continue;
                }
                return value;
            } catch (NumberFormatException ex) {
                System.out.println("Entrada inválida: ingrese un número decimal, por ejemplo 129.99.");
            }
        }
    }

    public boolean readYesNo(String prompt) {
        while (true) {
            System.out.print(prompt + " (S/N): ");
            String raw = readLine().trim();
            if (raw.equalsIgnoreCase("s") || raw.equalsIgnoreCase("si") || raw.equalsIgnoreCase("sí")) {
                return true;
            }
            if (raw.equalsIgnoreCase("n") || raw.equalsIgnoreCase("no")) {
                return false;
            }
            System.out.println("Responda S o N.");
        }
    }

    private String readLine() {
        if (!scanner.hasNextLine()) {
            throw new IllegalStateException("La entrada estándar se cerró antes de finalizar la operación.");
        }
        return scanner.nextLine();
    }
}
