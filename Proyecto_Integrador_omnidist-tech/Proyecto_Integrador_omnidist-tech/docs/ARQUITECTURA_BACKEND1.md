# Arquitectura del proyecto - nivel Backend 1

## Flujo

Frontend -> Controller -> Service -> Repository

## 1. POO

`Product` es una clase que representa un producto. Sus atributos son privados y se accede a ellos mediante métodos (`get` / `set`).

## 2. Inversión de dependencias

`ProductController` no conoce `ProductServiceImpl`; trabaja con la interfaz `ProductService`.

`ProductServiceImpl` tampoco depende directamente de `ProductRepositoryMemory`; trabaja con la interfaz `ProductRepository`.

Por eso las capas de alto nivel dependen de abstracciones.

## 3. Inyección de dependencias

Spring crea los objetos y los entrega mediante el constructor:

```java
public ProductController(ProductService productService) {
    this.productService = productService;
}
```

Y en el servicio:

```java
public ProductServiceImpl(ProductRepository productRepository) {
    this.productRepository = productRepository;
}
```

## 4. Separación de responsabilidades

- Controller: recibe las peticiones HTTP.
- Service: contiene la lógica de la operación.
- Repository: administra los productos.
- Model: representa el objeto Producto.

## 5. Persistencia

En esta primera versión se usa una lista en memoria. No es una base de datos y se reinicia al apagar el servidor. Esto mantiene el proyecto dentro del alcance de la clase actual.
