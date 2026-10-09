# Historias de usuario — OmniDist Tech

Las historias se conservan del informe previo del proyecto y se documentan con el formato Como/Quiero/Para. Los criterios de aceptación son verificables y sirven como base para refinar las tareas y revisar el cumplimiento de cada historia.

## Épica 1 — Gestión de cuenta y preferencias

### HU-01 / F1 — Registrar usuarios

- **Prioridad:** P8
- **Estimación base:** 5 SP
- **Estado actual:** Pendiente
- **Dependencias:** Ninguna

**Como** visitante de OmniDist Tech, **quiero** registrar una cuenta proporcionando mis datos básicos, **para** disponer de una cuenta que me permita utilizar funcionalidades personalizadas de la plataforma.

**Criterios de aceptación**

1. El sistema debe permitir ingresar los datos requeridos para crear una cuenta.
2. Los campos obligatorios deben validarse antes de completar el registro.
3. El sistema debe informar al usuario cuando existan datos inválidos, incompletos o repetidos.
4. Una cuenta creada correctamente debe quedar disponible para el proceso de autenticación.
5. El sistema no debe considerar exitoso el registro cuando falte información obligatoria.

### HU-02 / F2 — Iniciar y cerrar sesión

- **Prioridad:** P9
- **Estimación base:** 3 SP
- **Estado actual:** Parcial
- **Dependencias:** HU-01 para cuentas de cliente

**Como** usuario de OmniDist Tech, **quiero** iniciar y cerrar sesión mediante mis credenciales, **para** acceder de forma controlada a las funcionalidades que correspondan a mi rol y finalizar la sesión cuando termine de utilizar el sistema.

**Criterios de aceptación**

6. El sistema debe solicitar las credenciales necesarias para iniciar sesión.
7. El sistema debe validar las credenciales antes de conceder el acceso.
8. El sistema debe dirigir al usuario a la interfaz correspondiente al rol autorizado.
9. El sistema debe rechazar credenciales inválidas e informar que el acceso no fue autorizado.
10. El usuario debe poder cerrar sesión y finalizar la sesión activa.

### HU-03 / F3 — Gestionar el perfil del usuario

- **Prioridad:** P13
- **Estimación base:** 5 SP
- **Estado actual:** Pendiente
- **Dependencias:** HU-01 y HU-02

**Como** usuario registrado de OmniDist Tech, **quiero** consultar y actualizar la información de mi perfil, **para** mantener mis datos personales actualizados y utilizarlos correctamente durante mi interacción con la tienda.

**Criterios de aceptación**

11. El usuario autenticado debe poder consultar la información asociada a su perfil.
12. El sistema debe permitir modificar únicamente los datos habilitados para edición.
13. Los datos modificados deben validarse antes de ser guardados.
14. El sistema debe informar al usuario cuando la actualización se complete correctamente.
15. La información actualizada debe conservarse para posteriores consultas.

### HU-04 / F4 — Guardar productos como favoritos

- **Prioridad:** P14
- **Estimación base:** 5 SP
- **Estado actual:** Pendiente
- **Dependencias:** HU-01, HU-02 y catálogo

**Como** usuario registrado de OmniDist Tech, **quiero** guardar productos como favoritos, **para** identificar rápidamente productos que me interesan y volver a consultarlos posteriormente.

**Criterios de aceptación**

16. El usuario debe poder marcar un producto como favorito.
17. El usuario debe poder quitar un producto de sus favoritos.
18. Un producto marcado como favorito no debe duplicarse si se selecciona nuevamente.
19. El usuario debe poder consultar posteriormente su conjunto de productos favoritos.
20. Los favoritos deben conservarse mediante el mecanismo de persistencia definido para el usuario.

## Épica 2 — Catálogo y descubrimiento de productos

### HU-05 / F5 — Mostrar imágenes reales de los productos

- **Prioridad:** P1
- **Estimación base:** 3 SP
- **Estado actual:** Implementada
- **Dependencias:** Ninguna

**Como** cliente de OmniDist Tech, **quiero** visualizar imágenes reales de los productos, **para** reconocer visualmente los productos antes de consultar sus características o agregarlos al carrito.

**Criterios de aceptación**

21. Cada producto disponible en el catálogo debe mostrar una imagen.
22. La imagen presentada debe corresponder al producto mostrado.
23. Las imágenes deben cargarse correctamente sin afectar la estructura visual del catálogo.
24. Las imágenes deben conservar una presentación adecuada en diferentes tamaños de pantalla.
25. Cuando una imagen no esté disponible, la interfaz debe evitar romper la tarjeta del producto.

### HU-06 / F6 — Consultar el detalle de cada producto

- **Prioridad:** P2
- **Estimación base:** 5 SP
- **Estado actual:** Parcial
- **Dependencias:** HU-05

**Como** cliente de OmniDist Tech, **quiero** consultar el detalle de un producto, **para** conocer sus características, disponibilidad y precio antes de tomar una decisión de compra.

**Criterios de aceptación**

26. El sistema debe permitir seleccionar un producto desde el catálogo.
27. La información mostrada debe corresponder al producto seleccionado.
28. El detalle debe incluir, como mínimo, nombre, categoría, precio, stock y descripción cuando estén disponibles.
29. El sistema debe informar cuando el producto solicitado no exista.
30. El usuario debe poder regresar al catálogo después de consultar el detalle.

### HU-07 / F7 — Filtrar productos por características

- **Prioridad:** P3
- **Estimación base:** 5 SP
- **Estado actual:** Pendiente
- **Dependencias:** HU-05

**Como** cliente de OmniDist Tech, **quiero** filtrar los productos del catálogo según sus características, **para** encontrar con mayor rapidez los productos que se ajusten a mis necesidades.

**Criterios de aceptación**

31. El catálogo debe ofrecer uno o más criterios de filtrado definidos para los productos.
32. Al seleccionar un filtro, solo deben mostrarse los productos que cumplan el criterio correspondiente.
33. El sistema debe permitir retirar el filtro y volver a visualizar el catálogo completo.
34. Los filtros aplicados deben actualizar los resultados sin mostrar productos que no correspondan al criterio seleccionado.
35. Cuando ningún producto coincida con un filtro, el sistema debe mostrar un mensaje apropiado.

### HU-08 / F8 — Ordenar productos por precio, popularidad o novedades

- **Prioridad:** P4
- **Estimación base:** 3 SP
- **Estado actual:** Pendiente
- **Dependencias:** HU-05

**Como** cliente de OmniDist Tech, **quiero** ordenar los productos del catálogo por diferentes criterios, **para** encontrar más fácilmente productos según el criterio que resulte más relevante para mí.

**Criterios de aceptación**

36. El catálogo debe permitir seleccionar el criterio de ordenamiento disponible.
37. Debe ser posible ordenar los productos por precio.
38. Debe contemplarse el ordenamiento por popularidad y/o novedades cuando estos datos estén disponibles en el modelo de producto.
39. El cambio de criterio debe actualizar el orden visible de los productos.
40. El sistema debe mantener la información de los productos al aplicar el ordenamiento.

## Épica 3 — Carrito de compras

### HU-09 / F9 — Guardar el carrito en localStorage

- **Prioridad:** P5
- **Estimación base:** 5 SP
- **Estado actual:** Implementada
- **Dependencias:** Catálogo de productos

**Como** cliente de OmniDist Tech, **quiero** guardar el contenido de mi carrito en localStorage, **para** conservar los productos seleccionados mientras navego por la aplicación y recuperar el carrito posteriormente.

**Criterios de aceptación**

41. Al agregar productos, el sistema debe actualizar la información persistida del carrito.
42. El carrito debe almacenar como mínimo los productos seleccionados y sus cantidades.
43. Al volver a cargar la interfaz, el sistema debe recuperar el carrito almacenado cuando corresponda.
44. Los cambios realizados sobre el carrito deben actualizar la información persistida.
45. Cuando el carrito quede vacío, la información persistida debe reflejar que no existen productos seleccionados.

### HU-10 / F10 — Modificar cantidades de productos

- **Prioridad:** P6
- **Estimación base:** 3 SP
- **Estado actual:** Implementada
- **Dependencias:** HU-09

**Como** cliente de OmniDist Tech, **quiero** aumentar o disminuir la cantidad de cada producto en mi carrito, **para** ajustar las unidades que deseo comprar antes de finalizar el proceso.

**Criterios de aceptación**

46. El carrito debe ofrecer una acción para aumentar la cantidad de un producto.
47. El carrito debe ofrecer una acción para disminuir la cantidad de un producto.
48. La cantidad mostrada debe actualizarse inmediatamente después de cada operación válida.
49. Una cantidad que llegue a cero debe provocar la eliminación del producto del carrito.
50. Los cambios de cantidad deben reflejarse en los valores totales y en la persistencia del carrito.

### HU-11 / F11 — Mostrar precios y subtotal

- **Prioridad:** P7
- **Estimación base:** 3 SP
- **Estado actual:** Parcial
- **Dependencias:** HU-09 y HU-10

**Como** cliente de OmniDist Tech, **quiero** visualizar los precios de los productos y el valor acumulado de mi carrito, **para** conocer cuánto representan los productos seleccionados antes de continuar con la compra.

**Criterios de aceptación**

51. Cada producto del carrito debe mostrar su precio unitario.
52. El sistema debe calcular el valor correspondiente a la cantidad seleccionada.
53. El valor calculado debe actualizarse al modificar la cantidad de un producto.
54. El sistema debe mostrar un total general del contenido del carrito.
55. Los valores mostrados deben corresponder a los precios registrados para los productos seleccionados.

## Épica 4 — Pedidos y checkout

### HU-12 / F12 — Registrar y consultar pedidos

- **Prioridad:** P10
- **Estimación base:** 13 SP (refinada para planificación como 8 SP + 5 SP)
- **Estado actual:** Parcial / simulado
- **Dependencias originales:** HU-02, HU-09 y HU-11

**Como** cliente de OmniDist Tech, **quiero** registrar y consultar mis pedidos, **para** completar una compra y posteriormente conocer la información y estado de los pedidos realizados.

**Criterios de aceptación del informe original**

56. El sistema debe permitir generar un pedido a partir de un carrito válido.
57. El pedido debe registrar los productos, cantidades y valor correspondiente.
58. El pedido debe asociarse al usuario que realiza la compra cuando exista autenticación de cliente.
59. El sistema debe asignar y conservar un identificador del pedido.
60. El usuario debe poder consultar posteriormente la información y estado de sus pedidos.
61. Un pedido no debe registrarse si el carrito no contiene productos válidos.

**Refinamiento para planificar Sprints (conserva los 13 SP):**

- **HU-12A — Registrar pedido (8 SP):** aborda principalmente los criterios 56, 57, 58, 59 y 61.
- **HU-12B — Consultar pedidos (5 SP):** aborda principalmente el criterio 60.

Este desglose es una propuesta de planificación reflejada en el informe; el resumen del Product Backlog conserva HU-12 para mantener la trazabilidad con la historia original.

### HU-13 / F13 — Registrar información de envío

- **Prioridad:** P11
- **Estimación base:** 8 SP
- **Estado actual:** Pendiente
- **Dependencia original:** HU-12; para el desglose de planificación, HU-12A

**Como** cliente de OmniDist Tech, **quiero** registrar mi información de envío durante el checkout, **para** indicar los datos necesarios para entregar correctamente mi pedido.

**Criterios de aceptación**

62. El checkout debe presentar un formulario para ingresar la información de envío requerida.
63. El sistema debe validar los campos obligatorios antes de continuar.
64. El sistema debe informar los errores de validación de manera comprensible.
65. La información de envío debe asociarse al pedido correspondiente.
66. Los datos de envío deben conservarse para permitir consultar el pedido posteriormente.

### HU-14 / F14 — Integrar métodos de pago

- **Prioridad:** P12
- **Estimación base:** 13 SP
- **Estado actual:** Pendiente
- **Dependencias originales:** HU-12 y HU-13

**Como** cliente de OmniDist Tech, **quiero** seleccionar y utilizar un método de pago durante el checkout, **para** completar el proceso de compra mediante un mecanismo de pago definido por la plataforma.

**Criterios de aceptación**

67. El checkout debe mostrar los métodos de pago disponibles.
68. El usuario debe poder seleccionar un método antes de confirmar la compra.
69. La información requerida por el método de pago debe validarse antes de procesar la operación.
70. El sistema debe informar el resultado de la operación de pago.
71. El pedido debe actualizar su estado de acuerdo con el resultado del proceso de pago.
72. Ante un pago rechazado o fallido, el sistema no debe presentar la compra como completada.

## Épica 5 — Ayuda y soporte

### HU-15 / F15 — Preguntas frecuentes (FAQ)

- **Prioridad:** P15
- **Estimación base:** 3 SP
- **Estado actual:** Pendiente
- **Dependencias:** Ninguna

**Como** cliente de OmniDist Tech, **quiero** consultar una sección de preguntas frecuentes, **para** resolver dudas habituales sobre productos, pedidos y proceso de compra sin requerir asistencia directa.

**Criterios de aceptación**

73. La aplicación debe disponer de una sección de preguntas frecuentes accesible desde la interfaz.
74. Cada pregunta debe estar acompañada de una respuesta clara y relacionada con el servicio.
75. Las preguntas deben cubrir temas relevantes para la experiencia de compra.
76. La sección debe ser legible y usable desde los dispositivos contemplados por el proyecto.
77. El contenido de las preguntas frecuentes debe poder actualizarse cuando cambien las condiciones del servicio.

## Guía rápida de trazabilidad

| ID | Prioridad | SP | Estado |
|---|---:|---:|---|
| HU-01 | P8 | 5 | Pendiente |
| HU-02 | P9 | 3 | Parcial |
| HU-03 | P13 | 5 | Pendiente |
| HU-04 | P14 | 5 | Pendiente |
| HU-05 | P1 | 3 | Implementada |
| HU-06 | P2 | 5 | Parcial |
| HU-07 | P3 | 5 | Pendiente |
| HU-08 | P4 | 3 | Pendiente |
| HU-09 | P5 | 5 | Implementada |
| HU-10 | P6 | 3 | Implementada |
| HU-11 | P7 | 3 | Parcial |
| HU-12 | P10 | 13 | Parcial / simulado |
| HU-13 | P11 | 8 | Pendiente |
| HU-14 | P12 | 13 | Pendiente |
| HU-15 | P15 | 3 | Pendiente |
| **Total** |  | **82 SP** | **15 historias** |
