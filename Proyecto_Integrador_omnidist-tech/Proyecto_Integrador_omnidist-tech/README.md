# OmniDist Tech - Backend 1 y CLI de Semana 12

Este proyecto conserva la aplicación web/API REST trabajada en Semana 6 e incorpora una aplicación de consola para demostrar los patrones y pasos de arquitectura solicitados en Semana 12.

## Versiones incluidas

### Aplicación web (Semana 6)

- Java 17, Spring Boot 3.5.6 y Spring Web.
- API REST de productos y endpoint de salud.
- Capas `controller -> service -> repository`.
- Inyección por constructor e inversión de dependencias a través de interfaces.
- `User` abstracta con `Employee` y `Administrator` como subclases.
- Repositorio web en memoria; los cambios no persisten al reiniciar.

### Aplicación CLI (Semana 12)

- POJO `app.domain.Product` con atributos encapsulados, constructores, getters y setters.
- Puertos `ProductServiceInterface` y `ProductRepositoryPort` separados en paquetes `inputports` y `outputports`.
- Implementaciones `ProductServiceImp` y `ProductRepositoryImp`.
- Una sola instancia compartida de `Scanner`, centralizada en `FormTypeValidator`.
- Menús `UserInterface` y operaciones CRUD de productos.
- Categorías mediante `CategoryEnum` y `SetCategory`.
- Almacenamiento con `List<Product>` y `ArrayList`, únicamente en memoria.

## Ejecutar la aplicación web

Desde este directorio:

```bash
mvn spring-boot:run
```

URLs locales: `http://localhost:8080/`, `http://localhost:8080/api/products` y `http://localhost:8080/api/health`.

El `pom.xml` fija `com.omnidist.tech.OmnidistApplication` como la clase principal de Spring Boot, porque la aplicación CLI también tiene `main()`.

## Ejecutar la aplicación CLI

Primero compila las clases:

```bash
mvn -DskipTests compile
```

Después ejecuta:

```bash
java -cp target/classes app.Application
```

## Documentación

- `docs/ARQUITECTURA_BACKEND1.md`: arquitectura REST/POO de Semana 6.
- `docs/DIAGRAMA_CLASES_UML.puml` y `.png`: UML de la aplicación web y su modelo.
- `docs/ARQUITECTURA_CLI_SEMANA12.md`: arquitectura por capas y puertos de la CLI.
- `docs/DIAGRAMA_CLASES_CLI_SEMANA12.puml`, `.dot`, `.png`, `.svg`: diagrama de la CLI.

## Nota de alcance

Las aplicaciones web y CLI se mantienen como dos puntos de entrada dentro del mismo repositorio/Maven module. Usan clases `Product` y repositorios independientes por razones didácticas; no comparten el inventario en memoria. En ambos casos la persistencia es volátil y no se presenta como una base de datos.
