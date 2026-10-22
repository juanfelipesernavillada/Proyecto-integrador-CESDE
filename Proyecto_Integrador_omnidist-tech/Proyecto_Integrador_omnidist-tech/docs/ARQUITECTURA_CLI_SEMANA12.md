# OmniDist Tech - Aplicación CLI (Semana 12)

## Propósito

Esta aplicación de consola es una demostración académica de POO, contratos mediante interfaces, inversión de dependencias, inyección por constructor, validación centralizada de entradas y CRUD con una colección en memoria.

## Capas y dependencias

```text
Application (composition root)
  ├── crea una sola instancia de Scanner y FormTypeValidator
  ├── ProductRepositoryImp implements ProductRepositoryPort
  ├── ProductServiceImp implements ProductServiceInterface
  ├── ProductView depende de ProductServiceInterface y FormTypeValidator
  └── UserInterface coordina los menús y delega en ProductView

ProductView -> ProductServiceInterface <- ProductServiceImp -> ProductRepositoryPort <- ProductRepositoryImp -> List<Product>
```

- `domain/Product`: POJO con atributos privados, constructor vacío y completo, getters y setters.
- `domain/enums/CategoryEnum`: valores de categoría.
- `service/inputports/ProductServiceInterface`: casos de uso de productos.
- `service/outputports/ProductRepositoryPort`: contrato de acceso a datos.
- `service/ProductServiceImp`: lógica de aplicación; depende de la abstracción del repositorio.
- `repository/ProductRepositoryImp`: adaptador que almacena datos usando `List<Product>` respaldada por `ArrayList`.
- `view/ProductView`: captura y presenta los datos; no crea conexiones de entrada propias.
- `service/validations/FormTypeValidator`: concentra la lectura de consola con una única instancia compartida de `Scanner`.
- `service/helpers/SetCategory`: convierte una opción validada en una categoría.
- `ui/UserInterface`: menús CLI `menuApp`, `menuInicio` y `menuPorFuncionalidad`.

## Operaciones de producto

El menú de consola permite crear, listar, buscar por ID, actualizar y eliminar productos. Los IDs de nuevos productos se asignan desde el repositorio para evitar duplicar los IDs precargados. Los datos se guardan en memoria; al reiniciar el programa vuelven a los valores iniciales.

## Ejecutar la aplicación CLI

Requiere JDK 17 o superior y Maven.

Desde este directorio `backend`:

```bash
mvn -DskipTests compile
java -cp target/classes app.Application
```

## Ejecutar la aplicación web (Semana 6)

La aplicación web mantiene su punto de entrada Spring Boot explícito en `com.omnidist.tech.OmnidistApplication`:

```bash
mvn spring-boot:run
```

Luego se puede visitar `http://localhost:8080/`, `http://localhost:8080/api/products` y `http://localhost:8080/api/health`.

## Separación intencional de las dos demos

El ejercicio CLI usa `app.domain.Product` para seguir la organización de paquetes solicitada en la guía de Semana 12. La aplicación REST usa `com.omnidist.tech.model.Product`. Son modelos y repositorios independientes, ambos almacenados en memoria; los productos creados por la CLI no aparecen en la API web y viceversa. Esta separación evita que la implementación académica de consola cambie el comportamiento existente del backend REST.
