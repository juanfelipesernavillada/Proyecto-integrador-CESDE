# Estimación con Scrum Poker y planificación de Sprints

## 1. Base de estimación

El informe previo de OmniDist Tech registra **15 historias y 82 Story Points**. Los puntos que aparecen en las tablas de este archivo se conservan como **estimaciones base del informe**, no como una votación de Scrum Poker verificada en esta entrega.

### Escala propuesta

Se recomienda utilizar una escala Fibonacci simplificada: **1, 2, 3, 5, 8 y 13 SP**. Los puntos representan complejidad, incertidumbre y esfuerzo relativo; no equivalen a horas.

### Procedimiento de Scrum Poker para validar en equipo

1. El Product Owner/representante presenta una historia, su propósito, dependencias y criterios de aceptación.
2. Cada integrante elige en privado una carta/puntuación según la escala acordada.
3. El equipo revela las estimaciones al mismo tiempo.
4. Si existen diferencias importantes, quienes estimaron el valor menor y el mayor explican los supuestos que consideraron.
5. El equipo aclara dudas y realiza otra ronda de estimación hasta alcanzar un acuerdo razonado; si no hay consenso, registrar el punto pendiente y escalarlo para refinamiento.
6. Registrar la fecha, participantes, estimaciones realmente emitidas, estimación acordada y decisiones. No registrar votos que no se hayan realizado.

**Estado de la evidencia:** el informe consultado contiene Story Points por historia, pero no contiene las cartas ni las votaciones individuales. Por eso no se inventan votos. Si el profesor exige evidencia explícita de Scrum Poker, el equipo debe realizar la sesión real y completar el registro siguiente.

## 2. Estimaciones base por historia

| Historia | Funcionalidad resumida | Prioridad | SP base | Registro real de Scrum Poker |
|---|---|---:|---:|---|
| HU-05 | Imágenes de productos | P1 | 3 | Pendiente de validación/registro del equipo |
| HU-06 | Detalle del producto | P2 | 5 | Pendiente de validación/registro del equipo |
| HU-07 | Filtros del catálogo | P3 | 5 | Pendiente de validación/registro del equipo |
| HU-08 | Ordenamiento del catálogo | P4 | 3 | Pendiente de validación/registro del equipo |
| HU-09 | Persistir carrito en localStorage | P5 | 5 | Pendiente de validación/registro del equipo |
| HU-10 | Cambiar cantidades | P6 | 3 | Pendiente de validación/registro del equipo |
| HU-11 | Precios y subtotal | P7 | 3 | Pendiente de validación/registro del equipo |
| HU-01 | Registro de usuarios | P8 | 5 | Pendiente de validación/registro del equipo |
| HU-02 | Inicio y cierre de sesión | P9 | 3 | Pendiente de validación/registro del equipo |
| HU-12 | Registrar y consultar pedidos | P10 | 13 | Pendiente de validación/registro del equipo |
| HU-13 | Información de envío | P11 | 8 | Pendiente de validación/registro del equipo |
| HU-14 | Métodos de pago | P12 | 13 | Pendiente de validación/registro del equipo |
| HU-03 | Perfil de usuario | P13 | 5 | Pendiente de validación/registro del equipo |
| HU-04 | Favoritos | P14 | 5 | Pendiente de validación/registro del equipo |
| HU-15 | Preguntas frecuentes | P15 | 3 | Pendiente de validación/registro del equipo |
| **Total** | **15 historias** |  | **82 SP** |  |

### Plantilla de acta para la sesión real

Completar después de realizar Scrum Poker. Una fila por historia; anotar los valores realmente elegidos y la decisión que tomó el equipo.

| Fecha | Historia | Integrantes que participaron | Votos revelados (en SP) | Acuerdo final (SP) | Justificación / acuerdos |
|---|---|---|---|---:|---|
| Por completar | HU-___ | Por completar | Por completar | Por completar | Por completar |

## 3. Refinamiento de HU-12

La historia HU-12 original tiene un total de **13 SP**. Para hacerla más manejable y facilitar la planificación, el informe propone dividirla sin cambiar el total:

- **HU-12A — Registrar pedido:** 8 SP.
- **HU-12B — Consultar pedidos:** 5 SP.

Para que la dependencia sea más precisa en la planificación: HU-13 (información de envío) depende de HU-12A, porque la información debe asociarse a un pedido registrado. HU-14 (pagos) necesita el pedido registrado y la información de envío; en la propuesta, depende de HU-12A y HU-13. HU-12B cubre la consulta posterior y se mantiene separada por trazabilidad.

El resumen del Product Backlog conserva HU-12 (13 SP) para que cuadre con el informe original. En la distribución de Sprints se muestran HU-12A y HU-12B por separado.

## 4. Propuesta de planificación de Sprints

El siguiente orden prioriza el catálogo y el carrito, y posteriormente el checkout, manteniendo en cuenta las dependencias. Es una **propuesta inicial**, no un registro de Sprints ya ejecutados. La capacidad de aproximadamente 20 SP por Sprint proviene del informe como hipótesis de planificación y no es una velocity medida.

| Sprint | Objetivo | Historias propuestas | Desglose | Total |
|---|---|---|---|---:|
| Sprint 1 | Catálogo y descubrimiento | HU-05, HU-06, HU-07, HU-08 | 3 + 5 + 5 + 3 | 16 SP |
| Sprint 2 | Carrito y acceso | HU-09, HU-10, HU-11, HU-01, HU-02 | 5 + 3 + 3 + 5 + 3 | 19 SP |
| Sprint 3 | Registro de pedidos e información de envío | HU-12A, HU-13 | 8 + 8 | 16 SP |
| Sprint 4 | Consulta de pedidos y cierre del checkout | HU-12B, HU-14 | 5 + 13 | 18 SP |
| Sprint 5 | Perfil, favoritos y soporte | HU-03, HU-04, HU-15 | 5 + 5 + 3 | 13 SP |
| **Total** |  | **15 historias originales (HU-12 se divide solo para planificar)** |  | **82 SP** |

### Objetivos y criterios de revisión sugeridos

- **Sprint 1:** demostrar catálogo, detalle de producto, filtros y ordenamiento; revisar los criterios de aceptación HU-05 a HU-08.
- **Sprint 2:** verificar persistencia del carrito, modificación de cantidades, totales e inicio/registro de sesión según los criterios acordados.
- **Sprint 3:** validar el registro de pedidos y la captura/validación de información de envío.
- **Sprint 4:** comprobar consulta de pedidos y flujo de pago, incluyendo estados fallidos sin presentar una compra como completada.
- **Sprint 5:** validar edición del perfil, gestión de favoritos y acceso/actualización del contenido FAQ.

## 5. Reglas para mantener el backlog confiable

- Revisar prioridad y dependencias con el equipo y la persona que representa al Product Owner.
- Mantener separados los estados de implementación («Implementada», «Parcial», «Pendiente» o «Parcial / simulado») de las tareas futuras del Sprint.
- Después de cada Sprint, registrar el trabajo terminado y medir la velocity a partir de los puntos realmente completados; no asumir que la capacidad estimada equivale a la velocity.
- Cuando los criterios de aceptación cambien, actualizar la historia y revisar su estimación y dependencias.
- No presentar una integración de pago real, una base de datos persistente o una función de producción como existentes si aún no están implementadas.
