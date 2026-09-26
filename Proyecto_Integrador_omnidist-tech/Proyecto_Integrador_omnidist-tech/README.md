# OmniDist Tech - Backend 1

Versión del proyecto preparada para el nivel actual de Backend 1.

## Conceptos trabajados

- POO en Java
- Encapsulamiento
- Interfaces
- Inversión de dependencias
- Inyección de dependencias por constructor
- API REST básica
- Separación de responsabilidades

## Arquitectura

Controller -> Service -> Repository

El Controller depende de la interfaz `ProductService`.

El Service depende de la interfaz `ProductRepository`.

La implementación concreta `ProductRepositoryMemory` es inyectada por Spring.

No se usan todavía JPA, Hibernate, DTOs, JWT, seguridad, Docker ni base de datos, porque esos temas se pueden incorporar más adelante cuando correspondan al curso.

## Ejecutar

Desde la carpeta `backend`:

```bash
mvn spring-boot:run
```

Luego abrir:

http://localhost:8080/

API:

http://localhost:8080/api/products

Estado:

http://localhost:8080/api/health

## Nota

Los productos están almacenados en memoria mediante `ProductRepositoryMemory`. Al reiniciar el servidor vuelven a los datos iniciales. Esto es intencional para esta etapa académica.
