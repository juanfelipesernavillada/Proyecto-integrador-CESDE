# OmniDist Tech — Proyecto Integrador CESDE

OmniDist Tech es una aplicación web académica orientada a la consulta de productos de una distribuidora, la exploración de su catálogo y el flujo de compra. El proyecto cuenta con una interfaz web y un backend REST en Java con Spring Boot. La documentación Scrum organiza las funcionalidades planificadas, su prioridad y los criterios con los que se considerarán aceptadas.

**Repositorio público:** [Proyecto-integrador-CESDE](https://github.com/juanfelipesernavillada/Proyecto-integrador-CESDE)

**Equipo:** Juan Felipe Serna Villada y Mateo Quiñones Valencia.

## Documentación Scrum

- [Product Backlog inicial](docs/scrum/product-backlog.md): historias ordenadas por prioridad, estimación, estado y dependencias.
- [Historias de usuario y criterios de aceptación](docs/scrum/user-stories.md): descripción completa de las 15 historias.
- [Estimación con Scrum Poker y planificación de Sprints](docs/scrum/estimation-and-sprints.md): escala de puntos, registro de estimación y distribución propuesta del trabajo.
- [Índice de artefactos Scrum](docs/scrum/README.md): guía rápida para consultar la documentación.

## Tecnologías verificadas en el código

- **Frontend:** HTML5, CSS y JavaScript.
- **Backend:** Java 17 y Spring Boot 3.5.6.
- **API:** Spring Web / API REST.
- **Construcción:** Maven.
- **Control de versiones:** Git y GitHub.
- **Persistencia actual:** los productos del backend se almacenan en memoria mediante `ProductRepositoryMemory`; no hay una base de datos persistente integrada en esta versión académica.

## Estructura del repositorio

```text
Proyecto-integrador-CESDE/
├── README.md
├── .gitignore
├── docs/
│   └── scrum/
│       ├── README.md
│       ├── product-backlog.md
│       ├── user-stories.md
│       └── estimation-and-sprints.md
└── Proyecto_Integrador_omnidist-tech/
    ├── .vscode/                         # configuración de desarrollo existente
    ├── linkGithub.txt
    └── Proyecto_Integrador_omnidist-tech/
        ├── README.md                    # notas de Backend 1
        ├── backend/                     # aplicación Spring Boot y frontend servido por ella
        ├── docs/ARQUITECTURA_BACKEND1.md
        └── omnidist-tech/               # copia independiente del frontend existente
```

La carpeta del proyecto tiene un nivel de anidación repetido y existen dos ubicaciones del frontend. Se conserva esa organización para no cambiar rutas de código en esta entrega; antes de eliminar o fusionar copias, el equipo debe comparar sus diferencias y confirmar cuál es la fuente que desea mantener.

## Ejecución local del backend

### Requisitos

- JDK 17.
- Maven instalado y disponible en la terminal.

### Pasos

Desde la raíz del repositorio, ejecuta:

```bash
cd Proyecto_Integrador_omnidist-tech/Proyecto_Integrador_omnidist-tech/backend
mvn spring-boot:run
```

Con el servidor iniciado:

- Aplicación web: <http://localhost:8080/>
- API de productos: <http://localhost:8080/api/products>
- Estado del servicio: <http://localhost:8080/api/health>

Los productos se guardan en memoria y vuelven a los datos iniciales cuando se reinicia el servidor. Las historias del Product Backlog describen el alcance previsto: no deben interpretarse como funcionalidades terminadas cuando su estado indica «Parcial», «Pendiente» o «Parcial / simulado».

## Alcance de esta entrega

Esta actualización incorpora documentación inicial para la actividad de Metodologías Ágiles: Product Backlog, historias de usuario detalladas, criterios de aceptación, estimaciones Story Points, dependencias y propuesta de Sprints. No afirma que el equipo haya realizado votaciones individuales de Scrum Poker; los puntos proceden del informe previo y deben validarse/registrarse con el equipo si la clase exige la evidencia de las votaciones.

## Licencia

Proyecto de uso académico para CESDE.
